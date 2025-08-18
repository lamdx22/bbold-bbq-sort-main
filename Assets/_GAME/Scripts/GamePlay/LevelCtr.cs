using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using Popup;
using System;
using System.Linq;
using UnityEngine.UI;
using Spine.Unity;

public class LevelCtr : MonoBehaviour
{
    public Grill grillPrefab, grillPrefab1;
    public Shipper shipperPrefab, curShipper;
    public Transform posSpawnShipper;
    public Transform posAppear, posDriveTo, posDriveAway;
    public List<PosGrillAtLv> posGrills;
    public List<Grill> grills;
    public List<Skewer> totalActiveSkewer, onGrillSkewers, onPlateSkewers, onFistPlatesSkewers;
    public PlateCompleted plateCompletedPrefab;
    public Transform posPlateWinAppear, posPlateWinOut;
    public AnimationCurve easeCompletedSkewerMove;
    [Header("ReadOnly")] public int numOfSkewer, numOfCompletedSkewer;
    public event Action<List<Skewer>> OnCompletedOneMatch3;
    public event Action<BaseOB> OnPressOb;
    public event Action<BaseOB> OnChooseIceSkewer;
    public event Action StartRemoveIceBooster;
    public bool isFinishInit;
    public bool isHandlingBooster;
    public bool isFinishLv;
    public LevelData levelDatas;
    public int orderShipper, doneOrders, stepShipper;
    public bool isSuggestting;
    public List<Skewer> suggestSkewers = new List<Skewer>();
    public GameObject darkPanel;
    public GameObject animRemoveIce;
    public GraphicRaycaster boosterCtr;
    public List<Skewer> hightLightSkewers = new List<Skewer>();
    public Skewer choosenSkewer;
    public GameObject animHand;
    public Transform parentGrill;
    public Skewer curSkewerSwapMoving;
    public bool isChoosingSkewerMoving;
    public ComboVfx comboVfx;
    public int maxCombo = 0;
    public int countMatch = 0;
    public GameObject coinPrefab;
    public ItemOrder currOrder;
    public Transform UITransform;
    private PlateCompleted currPlate;

    //tutorial
    public int typeSkewerCompleted;
    private float timeSuggest = 5f;

    public int NumOfCompletedSkewer
    {
        get { return numOfCompletedSkewer; }
        set
        {
            numOfCompletedSkewer = value;
            Debug.Log("NumOfCompletedSkewer: " + numOfCompletedSkewer);
            CheckSpawnShipper();
            if (numOfCompletedSkewer >= numOfSkewer)
            {
                if (curShipper == null || curShipper.isCompletedOrder)
                    StartCoroutine(OnWin());
                else
                {
                    Destroy(curShipper.gameObject);
                    curShipper = null;
                    LoseDirectly();
                }
            }
        }
    }

    private BaseOB _curBaseOb;
    public BaseOB CurBaseOb
    {
        get { return _curBaseOb; }
        set
        {
            _curBaseOb = value;
            OnPressOb?.Invoke(CurBaseOb);
            OnChooseIceSkewer?.Invoke(CurBaseOb);
        }
    }

    private void Start()
    {
        //  Init();
    }

    private void Update()
    {
        if (isFinishLv) return;
        timeSuggest -= Time.deltaTime;
        if (timeSuggest <= 0f)
        {
            timeSuggest = 5f;
            Suggest();
        }
        if (Input.GetMouseButtonDown(0))
        {
            timeSuggest = 5f;
            StopSuggest();
        }
    }

    public void Init(LevelData levelData)
    {
        StartCoroutine(StartPlay(levelData));
    }

    IEnumerator StartPlay(LevelData levelData)
    {
        ResetLv();
        yield return new WaitForSeconds(0.1f);
        levelDatas = levelData;
        SpawnGrills(levelDatas);
        yield return new WaitForSeconds(0.1f);
        numOfSkewer = onGrillSkewers.Count + onPlateSkewers.Count;
        orderShipper = levelDatas.order;
        stepShipper = numOfSkewer / (orderShipper + 1);
        countMatch = 0;

        yield return new WaitForSeconds(0.2f);
        //SwapSkewerTypeInit();
        //appear skewer at plate
        foreach (var grill in grills)
        {
            if (grill.plates.Count <= 0) continue;
            Plate plate = grill.plates.FirstOrDefault();
            plate.SkewerAppear();
        }
        yield return new WaitForSeconds(0.2f);
        // remove coverGrill
        foreach (var grill in grills)
        {
            grill.lockGrillOB.SetUIUnlockInit();
        }
        CheckSpawnPlate();
        //if (PlayerData.current.level == 1)
        //{
        //    TutorialPlayGame.Instance.Init(this);
        //    TutorialPlayGame.Instance.StartRandomTutorial();
        //}
    }

    protected void ResetLv()
    {
        foreach (var pos in posGrills)
        {
            if (pos.pos == null) continue;
            for (int i = pos.pos.childCount - 1; i >= 0; i--)
            {
                Destroy(pos.pos.GetChild(i).gameObject);
            }
        }
        if (curShipper != null)
        {
            Destroy(curShipper.gameObject);
            curShipper = null;
        }
        if (comboVfx != null)
        {
            comboVfx.gameObject.SetActive(false);
        }
        animHand?.SetActive(false);
        darkPanel?.SetActive(false);
        // boosterCtr.enabled = true;
        numOfCompletedSkewer = 0;
        isFinishLv = false;
        isSuggestting = false;
        grills.Clear();
        onGrillSkewers.Clear();
        onPlateSkewers.Clear();
        onFistPlatesSkewers.Clear();
        levelDatas = null;
        isHandlingBooster = false;
        maxCombo = 0;
        OnChooseIceSkewer -= HanldeRemoveIceBooster;
        hightLightSkewers.Clear();
        StartRemoveIceBooster = null;
        OnCompletedOneMatch3 = null;
        OnPressOb = null;
        OnChooseIceSkewer = null;
        doneOrders = 0;
        ShowPoupGuideOrder = null;
    }
    public void SwapSkewerTypeInit()
    {
        
    }
    protected void Suggest()
    {
        if (isFinishInit) return;
        isSuggestting = true;
        var group = onGrillSkewers
            .Where(skewer => skewer.curPosIn != null
                && skewer.curPosIn.grill != null
                && skewer.curPosIn.grill.grillUnlockType == GrillUnLockType.Free
                && skewer.skewerTypeAppear == SkewerTypeAppear.Normal)
            .GroupBy(skewer => skewer.skewerType)
            .FirstOrDefault(g => g.Count() >= 3);
        if (group == null)
        {
            // Lose();
            return;
        }
        suggestSkewers.Clear();
        suggestSkewers = group.Take(3).ToList();
        foreach (var skewer in suggestSkewers)
        {
            skewer.ShakeEffect();
        }
    }
    protected void SuggestBooster()
    {
    }
    protected bool IsSuggestPriorityBoosterSucess()
    {
        return false;
    }
    protected void StopSuggest()
    {
        if (isSuggestting == false) return;
        isSuggestting = false;
        animHand.SetActive(false);
        foreach (var skewer in suggestSkewers)
        {
            if (skewer != null)
                skewer.StopShakeEffect();
        }
    }

    public void OnSwapBooster(Action success = null)
    {
    }
    public GameObject animSwap1, animSwap2;
    public GameObject prefaVfxSwap;
    public Transform holderVfx;
    public GameObject effectShockWave;
    IEnumerator PlayAnimSwapBooster(List<Skewer> skewers, List<GameObject> fakeSkewers, Action success)
    {
        yield return new WaitForSeconds(0.1f);
    }
    public void OnRemoveOneMatch3Booster1(Action success = null)
    {
    }
    public void OnRemoveOneMatch3Booster(Action sucess = null)
    {
    }
    public bool OnRemoveIceBooster()
    {
        return true;
    }
    private void HanldeRemoveIceBooster(BaseOB ob)
    {
    }
    private IEnumerator PlayAnimRemoveIce(Skewer skewerIce, Transform pos)
    {
        yield return new WaitForSeconds(0.6f);
    }
    
    public void SpawnGrills(LevelData levelData)
    {
        // read from data
        for (int i = 0; i < levelData.grills.Count; i++)
        {
            GrillData grillData = levelData.grills[i];
            if (grillData == null) continue;
            PosGrillAtLv posPlaceGrill = null;
            foreach (var pos in posGrills)
            {
                if (pos.rowIndex == grillData.rowIndex && pos.colIndex == grillData.colIndex)
                {
                    posPlaceGrill = pos;
                    break;
                }
            }
            if (posPlaceGrill == null) continue;
            Grill grill = null;
            if (grillData.numOfPosSkewer == 3)
                grill = Instantiate(grillPrefab, posPlaceGrill.pos.position, Quaternion.identity, posPlaceGrill.pos);
            else
                grill = Instantiate(grillPrefab1, posPlaceGrill.pos.position, Quaternion.identity, posPlaceGrill.pos);
            grills.Add(grill);
            grill.Init(this, grillData);
        }
    }
    public void CompletetdOneMatch3(List<Skewer> completetdSkewers, Action completetedMoveToCompletedPlate = null, Action eventHaftMoving = null)
    {
        StartCoroutine(OnCompletetdOneMatch3(completetdSkewers, completetedMoveToCompletedPlate, eventHaftMoving));
    }
    IEnumerator OnCompletetdOneMatch3(List<Skewer> completetdSkewers, Action completetedMoveToCompletedPlate = null, Action eventHaftMoving = null)
    {

        CheckSpawnPlate();
        PlateCompleted plateCompleted = currPlate;// Instantiate(plateCompletedPrefab, posPlateWinAppear.position, Quaternion.identity, UITransform);
        var numOfSkewerCompletetdMove = 0;
        float dur = 0f;
        //Tutorial check
        if (PlayerData.current.level == 1)
        {
            typeSkewerCompleted = completetdSkewers[0].skewerType;
        }
        for (int i = 0; i < plateCompleted.posMoveInCompletedSkewers.Count; i++)
        {
            var completetdSkewer = completetdSkewers[i];
            float temdur = completetdSkewer.MoveToCompletedPlate(plateCompleted.posMoveInCompletedSkewers[i], 0.5f, () =>
            {
                numOfSkewerCompletetdMove++;
                if (onGrillSkewers.Contains(completetdSkewer))
                {
                    onGrillSkewers.Remove(completetdSkewer);
                }
                if (onPlateSkewers.Contains(completetdSkewer))
                    onPlateSkewers.Remove(completetdSkewer);
            }
            , default, easeCompletedSkewerMove);
            if (temdur > dur)
            {
                dur = temdur;
            }
        }
        DOVirtual.DelayedCall(dur / 5, () =>
        {
            eventHaftMoving?.Invoke();
            if (comboVfx != null)
            {
                comboVfx.UpCombo(completetdSkewers[1].transform.position);
            }
        });
        //var sprPlate = plateCompleted.sprPlate;
        //sprPlate.transform.position = sprPlate.transform.position + new Vector3(-150f, 0, 0);
        //plateCompleted.transform.position =  posPlateWinOut.transform.position;
        //sprPlate.transform.DOMove(posPlateWinAppear.position, dur - 0.2f).SetEase(Ease.OutBack).OnComplete(() =>
        //{
        //    AudioManager.Instance.PlaySFX(AudioClipId.CompleteMatch3);
        //    plateCompleted.vfxStar.SetActive(true);
        //    //Debug.Log("plate Pos:" + sprPlate.transform.position);
        //    //vfx star
        //});
        AudioManager.Instance.PlaySFX(AudioClipId.CompleteMatch3);
        yield return new WaitUntil(() => numOfSkewerCompletetdMove >= plateCompleted.posMoveInCompletedSkewers.Count);

        countMatch++;
        CoinManager.Instance.OnAddCoin(10, completetdSkewers[1].transform.position);

        completetedMoveToCompletedPlate?.Invoke();
        OnCompletedOneMatch3?.Invoke(completetdSkewers);
        NumOfCompletedSkewer += 3;
        yield return new WaitForSeconds(0.1f);

        if (currOrder != null)
        {
            Sequence seq = DOTween.Sequence();

            seq.Join(plateCompleted.transform.DOMove(currOrder.transform.position, 0.5f).SetEase(Ease.Linear));
            seq.Join(plateCompleted.transform.DOScale(Vector3.zero, 0.5f).SetEase(Ease.InBack));

            seq.OnComplete(() =>
            {
                currOrder = null;
                ClearPlate();
            });
        }
        else
        {
            plateCompleted.transform.DOMove(posPlateWinOut.position, 1f).SetEase(Ease.Linear).OnComplete(() =>
            {
                //Debug.Log("plate Pos:" + sprPlate.transform.position);

                ClearPlate();
            });
        }
    }

    private void ClearPlate()
    {
        Destroy(currPlate.gameObject);
        currPlate = null;
        CheckSpawnPlate();
    }

    public bool CheckSpawnPlate()
    {
        if (currPlate == null)
        {
            currPlate = Instantiate(plateCompletedPrefab, posPlateWinAppear.position, Quaternion.identity, UITransform);
            return true;
        }
        return false;
        //float height = Camera.main.orthographicSize * 2f;
        //float width = height * Camera.main.aspect;
        ////Debug.Log("Chiều ngang trong thế giới: " + width);
        //for (int i = -7; i <= 7; i++)
        //{
        //    PlateCompleted plateCompleted = Instantiate(plateCompletedPrefab, posPlateWinAppear);
        //    plateCompleted.originPos = new Vector3(300 * i, 0, 0);
        //    plateCompleted.transform.localPosition = plateCompleted.originPos;
        //    if (Math.Abs(plateCompleted.transform.position.x) > width / 2 - 0.5f)
        //        plateCompleted.gameObject.SetActive(false);
        //    else plateCompleted.Appear();

        //    platesHolder.Add(plateCompleted);
        //}
    }

    protected void SpawnShipper()
    {
        if (shipperPrefab == null) return;
        if (curShipper != null) return; // only spawn one shipper at a time
        Shipper shipper = Instantiate(shipperPrefab, posSpawnShipper.transform.position, Quaternion.identity, posSpawnShipper.parent);
        curShipper = shipper;
        //take skewer id to order shipper
        List<int> skewerIds = new List<int>();
        foreach (var skewer in onGrillSkewers)
        {
            int skewerType = skewer.skewerType;
            if (skewerIds.Contains(skewerType)) continue;
            skewerIds.Add(skewerType);
        }
        if (skewerIds.Count < 3)
        {
            UpdateSkewerAtFistPlate();
            foreach (var skewer in onFistPlatesSkewers)
            {
                int skewerType = skewer.skewerType;
                if (skewerIds.Contains(skewerType)) continue;
                skewerIds.Add(skewerType);
            }
        }
        if (skewerIds.Count <= 0)
        {
            Debug.LogWarning("Not enough skewers to spawn shipper");
            return;
        }
        shipper.Init(this, skewerIds, posAppear, posDriveTo, posDriveAway);
    }
    bool isShowPopupGuideOrder = false;
    public  Action ShowPoupGuideOrder;
    protected void CheckSpawnShipper()
    {
        Debug.Log("666Shipper");

        if (doneOrders + 1 > orderShipper) return;
        Debug.Log("6666Shipper");
        if (numOfCompletedSkewer >= stepShipper * (doneOrders + 1))
        {
            Debug.Log("66666Shipper");
            SpawnShipper();
            doneOrders++;
        }

        if (PlayerData.current.fakeIndexLevel == 10 || PlayerData.current.fakeIndexLevel == 24)
        {
            if (doneOrders == 1)
            {
                ShowPoupGuideOrder?.Invoke();
                ShowPoupGuideOrder = null;
            }
        }
    }
    public void UpdateSkewerAtFistPlate()
    {
        onFistPlatesSkewers.Clear();
        foreach (var grill in grills)
        {
            if (grill.plates.Count == 0) continue;
            Plate plate = grill.plates.FirstOrDefault();
            if (plate == null) continue;
            foreach (var posPlace in plate.posPlaceSkewers)
            {
                if (posPlace.skewerAtPos == null) continue;
                Skewer skewer = posPlace.skewerAtPos;
                onFistPlatesSkewers.Add(skewer);
            }
        }
    }
    public virtual void Lose()
    {
        if (isFinishLv) return;
        isFinishLv = true;
        BBEventDispatcher.Notify(BBEventId.OnLoseLv);
    }
    public virtual void LoseDirectly()
    {
        if (isFinishLv) return;
        isFinishLv = true;
        if (comboVfx != null)
        {
            comboVfx.gameObject.SetActive(false);
        }
        BBEventDispatcher.Notify(BBEventId.OnLoseDirectly);
        Debug.Log("Lose Level Directly");
    }
    public virtual void Win()
    {
        if (isFinishLv) return;
        isFinishLv = true;
        if (comboVfx != null)
        {
            comboVfx.gameObject.SetActive(false);
        }
        BBEventDispatcher.Notify(BBEventId.OnWinLv);
        Debug.Log("Win Level");
    }

    public virtual void Revive()
    {
        isFinishLv = false;
        // BBEventDispatcher.Notify(BBEventId.OnRevive);
    }
    public virtual void LoseShiper()
    {
        if (isFinishLv) return;
        isFinishLv = true;
        BBEventDispatcher.Notify(BBEventId.OnLoseShipper);
    }
    public void ReviveShipper()
    {
        if (curShipper != null)
        {
            curShipper.Revive();
        }
        isFinishLv = false;
    }
    IEnumerator OnWin()
    {
        yield return new WaitForSeconds(0.5f);
        Win();
    }

    public float GetPerCentLv()
    {
        if (numOfSkewer == 0) return 0;
        return (float)numOfCompletedSkewer / (float)numOfSkewer;
    }

    public void CheckLose()
    {
        if (isFinishLv) return;
    }

    public void CheckStopSuggest()
    {
        if (isFinishLv) return;
    }
    public bool CheckFullSKewerOnGrill()
    {
        return grills.Where(grill => grill.grillUnlockType == GrillUnLockType.Free)
              .All(grill => grill.posPlaceSkewers.All(x => x.skewerAtPos != null));
    }
    public int CountEmptySKewerSlotsOnGrill()
    {
        return grills.Where(grill => grill.grillUnlockType == GrillUnLockType.Free)
                     .SelectMany(grill => grill.posPlaceSkewers)
                     .Count(pos => pos.skewerAtPos == null);
    }
}
[System.Serializable]
public class PosGrillAtLv
{
    public int rowIndex;
    public int colIndex;
    public Transform pos;
}
