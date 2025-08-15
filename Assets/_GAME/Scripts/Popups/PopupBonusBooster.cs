using DG.Tweening;
using Popup;
using UnityEngine;
using UnityEngine.UI;

public class PopupBonusBooster : PopupUIBase
{
    [SerializeField] protected Text textPriceBooster;
    [SerializeField] protected int priceBooster;
    [SerializeField] protected Button btnAddBoosterByAds;
    [SerializeField] protected Button btnAddBoosterByCoin;
    private TypeBooster typeBooster;

    public override void Show()
    {
        base.Show();
        if (textPriceBooster) textPriceBooster.text = priceBooster.ToString();

        canClose = false;
        Tween tween = PopupAnimationUtility
            .AnimateScale(transform, Ease.OutBack, 0.1f, 1, 0.5f, 0f, true).SetUpdate(true)
            .OnComplete(() =>
            {
                PlayAnimIcon();
               // canClose = true;
                btnAddBoosterByAds.interactable = true;
                btnAddBoosterByCoin.interactable = true;
            });
    }

    public override void Close(bool forceDestroying = true)
    {
        float curScale = transform.localScale.x;
        Tween tween = PopupAnimationUtility
            .AnimateScale(transform, Ease.InBack, curScale + 0.05f, curScale - 0.2f, 0.5f, 0f, true).SetUpdate(true)
            .OnComplete(() => { base.Close(forceDestroying); });
    }

    public void Init(TypeBooster typeBooster)
    {
        this.typeBooster = typeBooster;
    }

    public void OnBonusByCoin()
    {
        AudioManager.Instance.PlaySFX(AudioClipId.ClickBtn);
        if (PlayerData.current.coinCount < priceBooster)
        {
            PopupSystem.PopupUtility.OpenPopupLiteMessage(CustomLocalization.Get("not_enough_coin"));
            return;
        }
        PlayerData.current.AddCoin(-priceBooster);
        switch (typeBooster)
        {
            case TypeBooster.Pack:
                PlayerData.current.AddRemoveMatch3Bts(1);
                break;
            case TypeBooster.Swap:
                PlayerData.current.AddSwapBts(1);
                break;
            case TypeBooster.FreezeTime:
                PlayerData.current.AddFreezeTimeBts(1);
                break;
            case TypeBooster.BreakIce:
                PlayerData.current.AddBreakIceBts(1);
                break;
        }
        canClose = true;
        CloseInternal();
        btnAddBoosterByAds.interactable = false;
        btnAddBoosterByCoin.interactable = false;
    }

    public void OnBonusByAds()
    {
        AudioManager.Instance.PlaySFX(AudioClipId.ClickBtn);
        //watchAds +1
        switch (typeBooster)
        {
            case TypeBooster.Pack:
                PlayerData.current.AddRemoveMatch3Bts(1);
                break;
            case TypeBooster.Swap:
                PlayerData.current.AddSwapBts(1);
                break;
            case TypeBooster.FreezeTime:
                PlayerData.current.AddFreezeTimeBts(1);
                break;
            case TypeBooster.BreakIce:
                PlayerData.current.AddBreakIceBts(1);
                break;
        }
        canClose = true;
        CloseInternal();
        btnAddBoosterByAds.interactable = false;
        btnAddBoosterByCoin.interactable = false;
    }
}

public enum TypeBooster
{
    Pack,
    Swap,
    FreezeTime,
    BreakIce,
}
