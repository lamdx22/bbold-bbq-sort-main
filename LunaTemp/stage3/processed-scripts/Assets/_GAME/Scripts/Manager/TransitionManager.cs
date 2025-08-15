using System;
using System.Collections;
using PopupSystem;
using UnityEngine;

public class TransitionManager : MonoBehaviour
{
    public GameObject objLoading;

    private void Start()
    {
        DisableTransition();
    }

    public void PlayTransition(Action action = null)
    {
        Popup.PopupSystem.Instance.CloseAllPopupsImmediately();
        PopupUtility.ForceClosePopupLiteMessage();
        objLoading.SetActive(true);
       // AudioManager.Instance.PlaySFX(AudioClipId.Transition);
        StartCoroutine(CheckTransitionEnd(action));
      //  AdvertisementManager.Instance?.HideAudioIconAd();
    }

    private IEnumerator CheckTransitionEnd(Action action)
    {
        yield return new WaitForSeconds(1.0f);
        DisableTransition();
        // action?.Invoke();
        AudioManager.Instance.StopEffect();
        action?.Invoke();
    }

    private void DisableTransition()
    {
        objLoading.SetActive(false);
    }
}