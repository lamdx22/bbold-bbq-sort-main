using DG.Tweening;
using Popup;
using Spine.Unity;
using System;
using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class PopupRating : PopupBase
{
    public SkeletonGraphic animIcon;

    public override void Show()
	{
        base.Show();
		canClose = false;
		PopupAnimationUtility.AnimateScale(transform, Ease.OutBack, 0.25f, 1f, 0.25f, 0f)
            .OnComplete(() => PlayAnimIcon());
    }

    protected void PlayAnimIcon()
    {
        if (animIcon != null)
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

    public override void Close(bool forceDestroying = true)
    {
        PopupAnimationUtility.AnimateScale(transform, Ease.OutBack, 1.0f, 0.8f, 0.25f, 0f)
            .OnComplete(() =>
            {
                base.Close(forceDestroying);
            });
    }

    public void Rate14Stars()
    {
		CloseInternal();
    }

	public void Rate5Stars()
    {
		//PlayerData.current.appRated = true;
		Application.OpenURL("https://play.google.com/store/apps/details?id=" + Application.identifier);

		CloseInternal();
	}
}
