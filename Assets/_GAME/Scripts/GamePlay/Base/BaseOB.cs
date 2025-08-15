using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BaseOB : MonoBehaviour
{
    public List<SpriteRenderer> liSprRend;
    public List<string> liSprRendDefaultLayer;
    [SerializeField] protected string sortingLayerPress = "HightLightOB";
    [SerializeField] private List<int> liSprRendDefaultOrderLayer;
    [SerializeField] protected Vector2 _offSetDrag;

    public virtual void InitDefaultLayer()
    {
        if (liSprRend.Count > 0)
        {
            for (var index = 0; index < liSprRend.Count; index++)
            {
                var spr = liSprRend[index];
                liSprRendDefaultLayer.Add(spr.sortingLayerName);
            }
        }
    }
    public virtual void InitDefaultOrderInLayer()
    {
        if (liSprRend.Count > 0)
        {
            for (var index = 0; index < liSprRend.Count; index++)
            {
                var spr = liSprRend[index];
                liSprRendDefaultOrderLayer.Add(spr.sortingOrder);
            }
        }
    }
    public virtual void SetAllSprLayer()
    {
        if (liSprRend.Count > 0)
        {
            foreach (var spr in liSprRend)
            {
                spr.sortingLayerName = sortingLayerPress;
            }
        }
    }

    public virtual void SetAllSprLayer(string layerName)
    {
        if (liSprRend.Count > 0)
        {
            foreach (var spr in liSprRend)
            {
                spr.sortingLayerName = layerName;
            }
        }
    }

    public virtual void SetDefaultLayer()
    {
        if (liSprRend.Count > 0)
        {
            for (int i = 0; i < liSprRend.Count; i++)
            {
                liSprRend[i].sortingLayerName = liSprRendDefaultLayer[i];
            }

        }
    }
    public virtual void SetMaskInteraction(SpriteMaskInteraction maskInteraction)
    {
        foreach (var spr in liSprRend)
        {
            spr.maskInteraction = maskInteraction;
        }
    }

    public virtual void SetOrderInLayer(List<int> liOrderSorting)
    {
        if (liSprRend.Count != liOrderSorting.Count) return;
        for (var index = 0; index < liSprRend.Count; index++)
        {
            var spr = liSprRend[index];
            spr.sortingOrder = liOrderSorting[index];
        }
    }
    public virtual void BackToDefaulState()
    {

    }
}
