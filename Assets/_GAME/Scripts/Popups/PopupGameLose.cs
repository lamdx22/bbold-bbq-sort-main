using DG.Tweening;
using Popup;
using Spine.Unity;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PopupGameLose : PopupUIBase
{
    [SerializeField] CanvasGroup ribonLose;
    [SerializeField] CanvasGroup btnContinue;
    [SerializeField] SkeletonGraphic anim;

    public override void Show()
    {
        anim.AnimationState.SetAnimation(0, "action-1", false).Complete += entry =>
        {
            anim.AnimationState.SetAnimation(0, "action-2", true);
        };
        base.Show();
        AudioManager.Instance.PauseMusic();
        AudioManager.Instance.PlaySFX(AudioClipId.GameFail);
    }

    public override void Close(bool forceDestroying = true)
    {
        base.Close(forceDestroying);
        PreAnimateHideEvent?.Invoke();
        PostAnimateHideEvent?.Invoke();
        AudioManager.Instance.musicSource.UnPause();
    }

    public void OnClickReplay()
    {
        AudioManager.Instance.PlaySFX(AudioClipId.ClickBtn);
        canClose = true;
        CloseInternal();
        GameManager.Instance.uiManager.GetScreen<PlayScreen>().Replay();
    }
}
