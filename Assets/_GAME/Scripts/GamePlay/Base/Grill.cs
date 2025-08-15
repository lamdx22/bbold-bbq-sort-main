using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.UI;

public class Grill : BaseOB
{
    //setupAtPrefab
    public Plate platePrefab;
    public Skewer skewerPrefab;
    public SpriteRenderer sprRendGrill;
    public LockOfGrillOB lockGrillOB;
    public SmokeGrill animSmoke;

    public Sprite sprOnePlace, sprThreePlaces, sprSale, sprNotMatch3;
    public Transform posSpawnPlate;
    public float offsetYPlate = -0.01f;

    public GrillUnLockType grillUnlockType;
    public GrillType grillType; // Normal, Sale, NotMatch3
    public int numberSkewerUnlock = 3; // for locked by number read from data
    public int skewerTypeUnlock;
    public int numOfPosPlaceSkewers = 3;
    public bool isSaleGrill;
    public int maxPlace = 3;
    // public Stack<Plate> stackPlates;
    public List<PosPlaceAtGrill> posPlaceSkewers;
    public List<Plate> plates;//3 pos or 1 pos
    public LevelCtr levelCtr;
    public GrillData grillData;

    public void Init(LevelCtr levelCtr)
    {
        // read data and setPos, 
        this.levelCtr = levelCtr;
        foreach (var plate in plates)
        {
            plate.Init(this);
        }
        foreach (var posPlace in posPlaceSkewers)
        {
            posPlace.Init(this);
        }
    }
    public void Init(LevelCtr levelCtr, GrillData grillData = null)
    {
        // read data and setPos, 
        this.levelCtr = levelCtr;
        this.grillData = grillData;
        List<PlateData> plateDatas = grillData.plateDatas;
        List<SkewerData> skewerDatasOnGrill = grillData.skewerDatasOnGrill;
        // update skin

        if (grillData.numOfPosSkewer > 0)
            maxPlace = grillData.numOfPosSkewer;
        if (grillData.isSaleGrill && maxPlace > 1)
        {
            this.isSaleGrill = true;
            sprRendGrill.sprite = sprSale;
        }
        //if (maxPlace == 1)
        //{
        //    sprRendGrill.sprite = sprOnePlace;
        //    posPlaceSkewers.RemoveAt(2);
        //    posPlaceSkewers.RemoveAt(0);
        //}
        //else
        //{
        //    sprRendGrill.sprite = sprThreePlaces;
        //}
        grillType = grillData.grillType;
        grillUnlockType = grillData.typeUnlock;
        skewerTypeUnlock = grillData.skewerTypeUnLocked;
        lockGrillOB.Init(this, grillUnlockType);
        switch (grillUnlockType)
        {
            case GrillUnLockType.LockedByAds:
                lockGrillOB.SetUILockByAds(20, 0);
                break;

            case GrillUnLockType.LockedBySkewer:
                //Ui
                int skewerTypeLocked = grillData.skewerTypeUnLocked;
                lockGrillOB.SetUILockBySkewer(skewerTypeLocked);
                //logic
                levelCtr.OnCompletedOneMatch3 += CheckAndUnlockByCompletedOneMatch3;
                break;
            case GrillUnLockType.LockedByNumber:
                numberSkewerUnlock = grillData.numberSkewerUnlock;
                lockGrillOB.SetUiLockByNumberSkewer(numberSkewerUnlock);
                levelCtr.OnCompletedOneMatch3 += CheckAndUnlockByCompletedNumber;
                break;
            default:
                lockGrillOB.SetUiFree();
                animSmoke.gameObject.SetActive(true);
                animSmoke.PlayChangeRandomeAnim(this);
                //lockGrillOB.SetUIUnlockInit();
                break;
        }
        switch (grillType)
        {
            case GrillType.Normal:
                break;
            case GrillType.Sale:
                break;
            case GrillType.NotMatch3:
                if (sprNotMatch3 != null)
                    sprRendGrill.sprite = sprNotMatch3;
                break;
        }
        //Init ref item
        if (plateDatas != null)
        {
            int numOfPlate = plateDatas.Count;
            for (int i = 0; i < plateDatas.Count; i++)
            {
                PlateData plateData = plateDatas[i];
                Plate plate = Instantiate(platePrefab, posSpawnPlate.position, Quaternion.identity, posSpawnPlate);
                var pos = plate.transform.localPosition;
                plate.transform.localPosition = new Vector3(pos.x, pos.y + offsetYPlate * i, pos.z - numOfPlate + i);
                plates.Add(plate);
                plate.Init(this, plateData, maxPlace);
                //if (i == 0)
                //    plate.SkewerAppear();
            }
        }

        for (int i = 0; i < skewerDatasOnGrill.Count; i++)
        {
            var skewerData = skewerDatasOnGrill[i];
            if (skewerData == null) continue;
            if (skewerData.skewerType == 0) continue;
            PosPlaceAtGrill posPlaceSkewer = posPlaceSkewers[i];
            // posPlaceSkewer.grill = this;
            Skewer skewer = Instantiate(skewerPrefab, posPlaceSkewer.pos.position, Quaternion.identity, posPlaceSkewer.pos);
            //  skewer.transform.parent = transform.parent; 
            Vector3 posSkewer = skewer.transform.localPosition;
            skewer.transform.localPosition = new Vector3(posSkewer.x, posSkewer.y, posSkewer.z - 0.1f);
            levelCtr.onGrillSkewers.Add(skewer);
            skewer.Init(this.levelCtr, posPlaceSkewer, skewerData);
            skewer.SetCanUse(true);
        }
    }

    protected void CheckAndUnlockByCompletedOneMatch3(List<Skewer> completedSkewers)
    {
        try
        {
            if (grillUnlockType != GrillUnLockType.LockedBySkewer) return;
            if (completedSkewers.Count == 0) return;
            int skewerType = completedSkewers[0].skewerType;
            if (skewerTypeUnlock == skewerType)
            {
                levelCtr.OnCompletedOneMatch3 -= CheckAndUnlockByCompletedOneMatch3;
                grillUnlockType = GrillUnLockType.Free;
                if (lockGrillOB != null)
                    lockGrillOB.SetUIUnlock();
                animSmoke.gameObject.SetActive(true);
                animSmoke.PlayChangeRandomeAnim(this);
                if (CheckCanMoveNewSkeweFromPlate())
                {
                    MoveNewSkewerFromPlate();
                }
            }
        }
        catch (Exception e)
        {
            Debug.LogError("Error in CheckAndUnlockByCompletedOneMatch3: " + e.Message + " " + gameObject.name);
        }
    }
    protected void CheckAndUnlockByCompletedNumber(List<Skewer> completedSkewers)
    {
        try
        {
            // if (grillUnlockType != GrillUnLockType.LockedByNumber) return;
            if (completedSkewers.Count == 0) return;
            numberSkewerUnlock--;
            lockGrillOB.SetUiTextLockNumber(numberSkewerUnlock);
            if (numberSkewerUnlock <= 0)
            {
                levelCtr.OnCompletedOneMatch3 -= CheckAndUnlockByCompletedNumber;
                grillUnlockType = GrillUnLockType.Free;
                if (lockGrillOB != null)
                    lockGrillOB.SetUIUnlock();
                animSmoke.gameObject.SetActive(true);
                animSmoke.PlayChangeRandomeAnim(this);
                if (CheckCanMoveNewSkeweFromPlate())
                {
                    MoveNewSkewerFromPlate();
                }
            }
        }
        catch (Exception e)
        {
            Debug.LogError("Error in CheckAndUnlockByCompletedNumberMatch3: " + e.Message + " " + gameObject.name);
        }
    }
    public void UnLockByAds()
    {
        // receive ads reward
        grillUnlockType = GrillUnLockType.Free;
        GameManager.Instance.uiManager.GetScreen<PlayScreen>().AddTimeBonus(20);
        lockGrillOB.SetUIUnlock();
        animSmoke.gameObject.SetActive(true);
        animSmoke.PlayChangeRandomeAnim(this);
    }
    //IEnumerator OnUnlock()
    //{
    //    sprRendAdsUnlock.gameObject.SetActive(false);
    //    sprRendSkewerUnlock.gameObject.SetActive(false);
    //    sprRendGrillLocked.transform.DOMoveY(sprRendGrillLocked.transform.position.y + 0.1f, 0.5f).SetEase(Ease.Linear);
    //    sprRendGrillLocked.DOFade(0, 1f).OnComplete(() =>
    //    {
    //        sprRendGrillLocked.gameObject.SetActive(false);
    //        grillUnlockType = GrillUnLockType.Free;
    //    });
    //    yield return null;
    //}

    public bool CheckCompletedOneMatch3()
    {
        if (grillType == GrillType.NotMatch3) return false;
        if (posPlaceSkewers.Count != 3) return false;
        if (posPlaceSkewers.Any(x => x.skewerAtPos == null)) return false;
        if (posPlaceSkewers.Any(x => x.skewerAtPos.skewerTypeAppear != SkewerTypeAppear.Normal)) return false;
        int fistSkewerType = posPlaceSkewers[0].skewerAtPos.skewerType;
        if (posPlaceSkewers.All(x => x.skewerAtPos.skewerType == fistSkewerType)) return true;
        return false;
    }

    public void CompletetdOneMatch3(Action completetedMoveToCompletedPlate = null, Action eventHalfMoving = null)
    {
        Debug.Log("11CompletetdOneMatch3");
        List<Skewer> completedSkewers = posPlaceSkewers.Select(x => x.skewerAtPos).ToList();
        foreach (var skewer in completedSkewers)
        {
            skewer.SetCanDrag(false);
            skewer.SetCanUse(false);
        }
        //xiên bay 1 phần đường (tổng là 0.5s) thì mới set posNull và check move new skewer
        DOVirtual.DelayedCall(0.5f / 5 - 0.01f, () =>
        {
            foreach (var pos in posPlaceSkewers)
            {
                pos.skewerAtPos = null;
            }
        });

        levelCtr.CompletetdOneMatch3(completedSkewers, completetedMoveToCompletedPlate, eventHalfMoving);
    }
    public bool CheckCanMoveNewSkeweFromPlate()
    {
        if (plates.Count == 0) return false;
        if (posPlaceSkewers.All(x => x.skewerAtPos == null)) return true;
        return false;
    }
    public void MoveNewSkewerFromPlate()
    {
        if (plates.Count == 0) return;
        Plate plate = plates[0];
        plates.Remove(plate);
        plate.MoveSkewersToGrill(posPlaceSkewers);
        if (plates.Count > 0)
            plates[0].SkewerAppear();
    }
    private void OnMouseDown()
    {
        if (GameManager.GameState != GameState.Playing) return;
        switch (grillUnlockType)
        {
            case GrillUnLockType.Free:
                levelCtr.CurBaseOb = this;
                break;
            case GrillUnLockType.LockedBySkewer:
                break;
            case GrillUnLockType.LockedByAds:
                break;
        }
    }
    private void OnMouseUp()
    {

    }
    private void OnDisable()
    {
        if (levelCtr != null)
        {
            levelCtr.OnCompletedOneMatch3 -= CheckAndUnlockByCompletedOneMatch3;
            levelCtr.OnCompletedOneMatch3 -= CheckAndUnlockByCompletedNumber;
        }
    }
}
public enum GrillUnLockType
{
    Empty = -1,
    Free = 0,
    LockedBySkewer = 1,
    LockedByAds = 2,
    LockedByNumber = 3,
}
public enum GrillType
{
    Normal = 0,
    Sale = 1,
    NotMatch3 = 2,
}


