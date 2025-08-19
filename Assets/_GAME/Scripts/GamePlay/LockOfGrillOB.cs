using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class LockOfGrillOB : BaseOB
{
    public Grill grill;
    public SpriteRenderer sprRendGrillLocked, sprRendAdsUnlock, sprRendSkewerUnlock,sprLockedByNumber;
    public Text textLocked,textNumberSkewer;
    public Collider2D col;
    GrillUnLockType grillUnLockType;
    public void Init(Grill grill,GrillUnLockType grillUnLockType)
    {
        this.grill = grill;
        this.grillUnLockType = grillUnLockType;
        col = GetComponent<Collider2D>();
    }
    public void SetUILockByAds(int timeBonus,int coinBonus)
    {
        sprRendGrillLocked.gameObject.SetActive(true);
        sprRendAdsUnlock.gameObject.SetActive(true);
        textLocked.gameObject.SetActive(true);
        //textLocked.text += "UnLock Oven";
        //if (timeBonus > 0)
        //    textLocked.text += "+ " + timeBonus.ToString() + "s";
        //if (coinBonus > 0)
        //    textLocked.text += " + " + coinBonus.ToString() + " Coins";
    }
    public void SetUILockBySkewer(int skewerTypeLocked)
    {
        sprRendGrillLocked.gameObject.SetActive(true);
        textLocked.text = "";
        sprRendSkewerUnlock.gameObject.SetActive(true);
        var spr = Resources.Load<Sprite>("SpriteData/Skewer/" + skewerTypeLocked.ToString());
        if (spr != null)
            sprRendSkewerUnlock.sprite = spr;
    }
    public void SetUiFree()
    {
        sprRendAdsUnlock.gameObject.SetActive(false);
        sprRendSkewerUnlock.gameObject.SetActive(false);
        textLocked.gameObject.SetActive(false);
        sprRendGrillLocked.gameObject.SetActive(true);
    }
    public void SetUiLockByNumberSkewer(int number)
    {
        if(number <= 0) return;
        sprRendGrillLocked.gameObject.SetActive(true);
        sprLockedByNumber.gameObject.SetActive(true);
        textNumberSkewer.gameObject.SetActive(true);
        textNumberSkewer.text = number.ToString();
    }
    public void SetUiTextLockNumber(int number)
    {
        if (textNumberSkewer != null)
        {
            textNumberSkewer.text = number.ToString();
        }
    }
    public void SetUIUnlock()
    {
        sprRendAdsUnlock?.gameObject.SetActive(false);
        sprRendSkewerUnlock?.gameObject.SetActive(false);
        textLocked?.gameObject.SetActive(false);
        sprLockedByNumber?.gameObject.SetActive(false);
        sprRendGrillLocked?.transform.DOMoveY(sprRendGrillLocked.transform.position.y + 0.1f, 0.5f).SetEase(Ease.Linear);
        sprRendGrillLocked?.DOFade(0, 1f).OnComplete(() =>
        {
            sprRendGrillLocked.gameObject.SetActive(false);
        });
    }
    public void SetUIUnlockInit()
    {
        if (grill.grillUnlockType != GrillUnLockType.Free) return;
        sprRendGrillLocked.transform.DOMoveY(sprRendGrillLocked.transform.position.y + 0.1f, 0.5f).SetEase(Ease.Linear);
        sprRendGrillLocked.DOFade(0, 1f).OnComplete(() =>
        {
            sprRendGrillLocked.gameObject.SetActive(false);
        });
    }

    public void OnGoToStore()
    {
        Luna.Unity.Playable.InstallFullGame();
    }

    private void OnMouseDown()
    {
        if (GameManager.GameState != GameState.Playing) return;
        switch (grillUnLockType)
        {
            case GrillUnLockType.Free:

                break;
            case GrillUnLockType.LockedBySkewer:
                break;
            case GrillUnLockType.LockedByAds:
                //watch ads to unlock
                //grill.UnLockByAds();
                OnGoToStore();
                break;
        }
    }
}
