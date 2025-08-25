using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.UI;

public class ItemOrder : MonoBehaviour
{
    public Image bg;
    public Sprite normalBg, saleBg;
    //public Image iconSkewer;
    public Image iconSkewer1, iconSkewer2, iconSkewer3;
    public Material grayMaterial;
    private Material originalMaterial;
    public Image iconCompleted;
    //ReadOnly
    public Shipper shipper;
    public int idSkewer;
    public LevelCtr level;
    public bool isDone;
    public bool isSaleItem;
    public List<Transform> posMoveInCompletedSkewers;

    public void Init(Shipper shipper, int idSkewer, LevelCtr level,bool isSaleItem = false)
    {
        this.shipper = shipper;
        this.idSkewer = idSkewer;
        this.level = level;
        this.isSaleItem = isSaleItem;
        if(isSaleItem)
        {
            bg.sprite = saleBg;
        }
        else
        {
            bg.sprite = normalBg;
        }
        Sprite spr = Resources.Load<Sprite>("SpriteData/Skewer/" + idSkewer.ToString());
        iconCompleted.gameObject.SetActive(false);

        //iconSkewer.gameObject.SetActive(true);
        //iconSkewer.sprite = spr;
        //var colorGray = new Color(0.85f, 0.85f, 0.85f, 1f); //new Color(0.7f, 0.7f, 0.7f, 0.5f);
        originalMaterial = iconSkewer1.material;
        iconSkewer1.gameObject.SetActive(true);
        iconSkewer1.sprite = spr;
        iconSkewer1.material = grayMaterial;
        iconSkewer2.gameObject.SetActive(true);
        iconSkewer2.sprite = spr;
        iconSkewer2.material = grayMaterial;
        iconSkewer3.gameObject.SetActive(true);
        iconSkewer3.sprite = spr;
        iconSkewer3.material = grayMaterial;

        level.OnCompletedOneMatch3 += CheckCompletedOrderAndUpdateUi;
    }
    protected void CheckCompletedOrderAndUpdateUi(List<Skewer> skewers)
    {
        if (skewers == null || skewers.Count == 0) return;
        if (idSkewer <= 0) return;
        //check completed on SaleGrill
        if (isSaleItem)
        {
            if (skewers[0].curPosIn == null || skewers[0].curPosIn.grill == null)
            {
                Debug.LogError("Skewer not in grill");
                return;
            }
            Grill grill = skewers[0].curPosIn.grill;
            if (!grill.isSaleGrill) return;
            if (!skewers.All(x => x.curPosIn != null && x.curPosIn.grill != null && x.curPosIn.grill == grill))
                return;
        }
        if (skewers.First().skewerType == idSkewer)
        {
            level.currOrder = this;
            //level.OnCompletedOneMatch3 -= CheckCompletedOrderAndUpdateUi;
            ////if (iconCompleted != null)
            ////    iconCompleted?.gameObject.SetActive(true);
            //iconSkewer1.material = originalMaterial;
            //iconSkewer2.material = originalMaterial;
            //iconSkewer3.material = originalMaterial;

            //isDone = true;
            //shipper.CheckCompletetdOrder();
        }
    }

    public void UpdateUIComplete()
    {
        level.OnCompletedOneMatch3 -= CheckCompletedOrderAndUpdateUi;
        //if (iconCompleted != null)
        //    iconCompleted?.gameObject.SetActive(true);
        iconSkewer1.material = originalMaterial;
        iconSkewer2.material = originalMaterial;
        iconSkewer3.material = originalMaterial;

        isDone = true;
        shipper.CheckCompletetdOrder();
    }

    private void OnDestroy()
    {
        level.OnCompletedOneMatch3 -= CheckCompletedOrderAndUpdateUi;
    }
}
