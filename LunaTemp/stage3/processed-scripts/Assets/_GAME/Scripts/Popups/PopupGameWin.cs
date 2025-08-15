using DG.Tweening;
using Popup;
using Spine.Unity;
using UnityEngine;
using UnityEngine.UI;

public class PopupGameWin : PopupUIBase
{
    [SerializeField] Transform ribonWin, comboWrap;
    [SerializeField] Text coinBounusNormalText, coinBonusAdsText;
    [SerializeField] int coinBonusNormal, coinBonusAds;
    [SerializeField] Button btnNext, btnAddCoinAds;
    [SerializeField] Button btnHome, btnAddHeart, btnAddCoin;
    [SerializeField] SkeletonGraphic anim;
    [SerializeField] GameObject particalMoney;
    public Text comboCoinText;
    public int comboCoinBonus = 0;
    private int _numOfLevel;

    public override void Show()
    {
        base.Show();
        canClose = false;
        Tween tween = PopupAnimationUtility
            .AnimateScale(transform, Ease.OutBack, 0.1f, 1, 0.5f, 0f, true).SetUpdate(true)
            .OnComplete(() =>
            {
                particalMoney.SetActive(true);
            });

        anim.AnimationState.SetAnimation(0, "action-1", false).Complete += entry =>
            anim.AnimationState.SetAnimation(0, "action-2", true);

        AudioManager.Instance.PauseMusic();
        AudioManager.Instance.PlaySFX(AudioClipId.GameWin);
    }

    public override void Close(bool forceDestroying = true)
    {
        base.Close(forceDestroying);
        Popup.PopupSystem.Instance.ClosePopup();
        AudioManager.Instance.musicSource.UnPause();
    }

    public void OnClickContinue()
    {
        canClose = true;
        CloseInternal();
        GameManager.Instance.uiManager.GetScreen<PlayScreen>().NextLv();
    }
}