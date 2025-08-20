using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PopUp : MonoBehaviour
{
    public GameObject button;

    // Start is called before the first frame update
    void Start()
    {
        button.transform.DOScale(1.15f, 0.6f) // scale to 1.2
            .SetEase(Ease.InOutSine)  // cho mượt
            .SetLoops(-1, LoopType.Yoyo); // lặp vô hạn, qua lại (to ↔ nhỏ)
    }

    public void ShowUp()
    {
        gameObject.SetActive(true);
        Luna.Unity.LifeCycle.GameEnded();
    }

    public void OnGoToStore()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
