using DG.Tweening;
using Popup;
using Spine.Unity;
using System;
using System.Globalization;
using UnityEngine;
using UnityEngine.UI;

public abstract class PopupUIBase : PopupBase
{
    [SerializeField] protected Text textHeart;
    [SerializeField] protected Text textTimer;
    [SerializeField] protected Text textCoin;
    [SerializeField] protected GameObject iconHeartInf;
    public SkeletonGraphic animIcon;

    private void UpdateHeartCountUIWrapper(object param)
    {
        if (param is int amount)
        {
            if (PlayerData.current.hasInfiniteHearts) return;
            UpdateHeartCountUI(amount);
        }
    }
    protected void PlayAnimIcon()
    {
        if(animIcon != null)
        {
            animIcon.gameObject.SetActive(true);
            animIcon.AnimationState.SetAnimation(0, "action-1", false);
            animIcon.AnimationState.AddAnimation(0, "action-2", true, 0f);
        }
    }
    public virtual void BtnClose()
    {
        AudioManager.Instance.PlaySFX(AudioClipId.ClickBtn);
        canClose = true;
        CloseInternal();
    }
    private void UpdateHeartTimerUIWrapper(object param)
    {
        if (param is double timeRemaining)
        {
            if (PlayerData.current.hasInfiniteHearts) return;
            UpdateHeartTimerUI(timeRemaining);
        }
    }

    private void UpdateCoinUIWrapper(object param)
    {
        if (param is int newCoinCount)
        {
            UpdateCoinDisplay(newCoinCount);
        }
    }

    private void HandleInfiniteHeartUIWrapper(object param)
    {
    }

    protected virtual void UpdateInfiniteHeartsUI(bool isActive, [Bridge.Ref] TimeSpan remainingTime)
    {
        if (iconHeartInf != null)
            iconHeartInf.SetActive(isActive);

        if (isActive)
        {
            textTimer.text = TimeFormatter.GetHeartTimerDisplay(remainingTime.TotalSeconds, 0, 0, true);
        }
        else
        {
            UpdateHeartTimerUI(PlayerData.current.timeToNextHeart);
            UpdateHeartCountUI(PlayerData.current.curHeart);
        }
    }

    protected virtual void UpdateHeartCountUI(int amount)
    {
        if (textHeart == null) return;
        textHeart.text = amount.ToString();
    }

    protected virtual void UpdateHeartTimerUI(double timeRemaining)
    {
        if (textTimer == null) return;
        textTimer.text = TimeFormatter.GetHeartTimerDisplay(timeRemaining, PlayerData.current.curHeart, PlayerData.current.maxHeart);
    }

    private void UpdateCoinDisplay(int newCoinCount)
    {
        if (textCoin == null) return;
        textCoin.text = Format.FormatCount(newCoinCount);
    }

    public virtual void BtnHome()
    {
        AudioManager.Instance.PlaySFX(AudioClipId.ClickBtn);
        Popup.PopupSystem.Instance.backBlocker.gameObject.SetActive(false);
        this.gameObject.SetActive(false);
        canClose = true;
        CloseInternal();
        DOVirtual.DelayedCall(0f, () => UIManager.Instance.ActiveScreen<HomeScreen>());
    }

    protected virtual void OnEnable()
    {
        BBEventDispatcher.Register(BBEventId.OnHeartCountChanged, UpdateHeartCountUIWrapper);
        BBEventDispatcher.Register(BBEventId.OnHeartTimerChanged, UpdateHeartTimerUIWrapper);
        BBEventDispatcher.Register(BBEventId.OnInfiniteHeartChanged, HandleInfiniteHeartUIWrapper);
        BBEventDispatcher.Register(BBEventId.OnCoinCountChanged, UpdateCoinUIWrapper);

        UpdateCoinDisplay(PlayerData.current.coinCount);
        TimeSpan remainingInfiniteTime = GetInfiniteHeartsRemainingTime();
        UpdateInfiniteHeartsUI(PlayerData.current.hasInfiniteHearts, remainingInfiniteTime);
    }

    protected virtual void OnDisable()
    {
        BBEventDispatcher.Remove(BBEventId.OnHeartCountChanged, UpdateHeartCountUIWrapper);
        BBEventDispatcher.Remove(BBEventId.OnHeartTimerChanged, UpdateHeartTimerUIWrapper);
        BBEventDispatcher.Remove(BBEventId.OnCoinCountChanged, UpdateCoinUIWrapper);
        BBEventDispatcher.Remove(BBEventId.OnInfiniteHeartChanged, HandleInfiniteHeartUIWrapper);
    }

    private TimeSpan GetInfiniteHeartsRemainingTime()
    {
        //if (PlayerData.current.hasInfiniteHearts && !string.IsNullOrEmpty(PlayerData.current.infiniteHeartsExpireTime))
        //{
        //    DateTime expireTime = DateTime.Parse(PlayerData.current.infiniteHeartsExpireTime, CultureInfo.InvariantCulture, DateTimeStyles.RoundtripKind);
        //    TimeSpan remaining = expireTime - DateTime.Now;
        //    return remaining.TotalSeconds > 0 ? remaining : TimeSpan.Zero;
        //}
        return TimeSpan.Zero;
    }

    public void BtnAddCoin()
    {
        AudioManager.Instance.PlaySFX(AudioClipId.ClickBtn);
        Popup.PopupSystem.GetOpenBuilder().SetType(PopupType.PopupShop)
            .SetCurrentPopupBehaviour(CurrentPopupBehaviour.KeepShowing)
            .Open();
    }

    public void BtnAddHeart()
    {
    }
}