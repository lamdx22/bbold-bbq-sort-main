using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlateCompleted : MonoBehaviour
{
    public SpriteRenderer sprPlate;
    public List<Transform> posMoveInCompletedSkewers;
    public GameObject vfxStar;
    public bool canChoose = true;
    public Vector3 originPos;

    public void Appear()
    {
        canChoose = true;
        transform.localScale = new Vector3(0, 0, 0);
        gameObject.SetActive(true);
        transform.DOScale(new Vector3(60f, 60f, 60f), 0.3f).SetEase(Ease.OutBack).OnComplete(() =>
        {
            vfxStar.SetActive(false);
        });
    }

    public void ClearDisk()
    {
        gameObject.SetActive(false);
        canChoose = false;
        transform.position = originPos;
        posMoveInCompletedSkewers.ForEach(child =>
        {
            if (child.childCount > 0)
            {
                Transform skew = child.GetChild(0);
                if (skew != null)
                    Destroy(skew.gameObject);
            }
        });

    }
}
