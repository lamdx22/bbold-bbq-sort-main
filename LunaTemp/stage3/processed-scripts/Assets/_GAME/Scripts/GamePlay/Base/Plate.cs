using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class Plate : MonoBehaviour
{
    public List<posAtPlate> posPlaceSkewers;
    public Skewer skewerPrefab;
    public Grill grill;
    public void Init( Grill grill)
    {
        this.grill = grill;
        foreach (var pos in posPlaceSkewers)
        {
            pos.Init(grill.levelCtr);
        }
    }
    public void Init(Grill grill,PlateData plateData,int maxPlace)
    {
        this.grill = grill;
        if (maxPlace == 1)
        {
            posPlaceSkewers.RemoveAt(2);
            posPlaceSkewers.RemoveAt(0);
        }
        for (int i = 0; i < posPlaceSkewers.Count; i++)
        {
            SkewerData skewerData = plateData.skewers[i];
            if(skewerData == null) continue;
            if(skewerData.skewerType == 0) continue;
            posAtPlate posPlace = posPlaceSkewers[i];
            Skewer skewer = Instantiate(skewerPrefab, posPlace.pos.position, posPlace.pos.rotation,posPlace.pos);
         //   skewer.transform.parent = transform.parent;
            Vector3 posSkewer = skewer.transform.localPosition;
            skewer.transform.localPosition = new Vector3(posSkewer.x, posSkewer.y, posSkewer.z - 0.1f);
            skewer.Init(grill.levelCtr, null,skewerData);
            grill.levelCtr.onPlateSkewers.Add(skewer);
            posPlace.skewerAtPos = skewer;
            skewer.posAtPlate = posPlace;
        }
    }
    public void MoveSkewersToGrill(List<PosPlaceAtGrill> posPlaceAtGrills)
    {
        if(grill == null) return;
        if(posPlaceSkewers.Count == 0)
        {
            Debug.Log("No PosSkewer at Grill");
            return;
        }
        if(posPlaceSkewers.Count != posPlaceAtGrills.Count)
        {
            Debug.Log("No match posCout between Plate and Grill");
            return;
        }
        if(posPlaceAtGrills.Any(x=>x.skewerAtPos != null))
        {
            Debug.Log("There is skewer at Grill, Not permit to move new skewer");
            return;
        }
        StartCoroutine(OnMoveSkewersTOGrill(posPlaceAtGrills));
    }
    IEnumerator OnMoveSkewersTOGrill(List<PosPlaceAtGrill> posPlaceAtGrills)
    {
        int numOfSkewerCompletetdMove = 0;
        int sumOfSkewerNeededMove = posPlaceSkewers.Count(x => x.skewerAtPos != null);
        int indexDelay = 0;
        for (int i = 0; i < posPlaceSkewers.Count; i++)
        {
            posAtPlate pos = posPlaceSkewers[i];
            if (pos.skewerAtPos == null) continue;
            Skewer skewer = pos.skewerAtPos;
            skewer.posAtPlate = null;
            pos.skewerAtPos = null;
            PosPlaceAtGrill posPlaceAtGrill = posPlaceAtGrills[i];
            skewer.SetParent(posPlaceAtGrill.pos);
            skewer.transform.rotation = posPlaceAtGrill.pos.rotation;
            skewer.transform.localScale = Vector3.one;
            posPlaceAtGrill.skewerAtPos = skewer;
            skewer.Move(skewer.transform, posPlaceAtGrill.pos, 0.3f, () =>
            {
                AudioManager.Instance.PlaySFX(AudioClipId.PutInSound);
               // AudioManager.Instance.PlaySFX(AudioClipId.Foil);
                numOfSkewerCompletetdMove++;
                skewer.SetCanUse(true);
                skewer.curPosIn = posPlaceAtGrill;
                grill.levelCtr.onPlateSkewers.Remove(skewer);
                grill.levelCtr.onGrillSkewers.Add(skewer);
                skewer.CheckAndBreakSecret(posPlaceAtGrill.grill);
            },indexDelay * 0.11f, Ease.OutBack);
            indexDelay++;
        }
        yield return new WaitUntil(() => numOfSkewerCompletetdMove == sumOfSkewerNeededMove);
        transform.GetComponent<SpriteRenderer>().DOFade(0, 1f).OnComplete(() =>
        {
            gameObject.SetActive(false);
        });
    }
    public void SkewerAppear()
    {
        foreach (var posPlace in posPlaceSkewers)
        {
            if(posPlace.pos!= null)
                posPlace.pos.gameObject.SetActive(true);
        }
    }
    public void CheckRemoveWhenUseBooster()
    {
        if(posPlaceSkewers.All(x=>x.skewerAtPos == null))
        {
            transform.GetComponent<SpriteRenderer>().DOFade(0, 1f).OnComplete(() =>
            {
                gameObject.SetActive(false);
            });
            grill.plates.Remove(this);
            if (grill.plates.Count > 0)
            {
                grill.plates[0].SkewerAppear();
            }
        }
    }
}
[Serializable]
public class posAtPlate :PosPlace
{
    //public Skewer skewerAtPos;
    //public Transform pos;
    public Plate plate;
    public void Init(LevelCtr level)
    {
        if (skewerAtPos != null)
            skewerAtPos.Init1(level);
    }
}
