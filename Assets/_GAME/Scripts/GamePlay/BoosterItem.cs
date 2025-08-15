using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class BoosterItem : MonoBehaviour
{
    public TypeBooster typeBooster;
    public bool unlocked;
    public int requiredLvUnlock;
    public Button button;
    public Image iconAdd;
    public Image iconCount;
    public Text countText;

    protected void Unlock(int count)
    {
        button.interactable = true;
    }

    public void UpdateProperty(int level, int count)
    {

    }

    public void HightLight()
    {
        Canvas canvas = GetComponent<Canvas>();
        if (canvas != null)
        {
            canvas.sortingLayerName = "UI";
            canvas.sortingOrder = 1;
        }
        else
        {
            Debug.LogWarning("BoosterItem: HightLight - Canvas component not found!");
        }
    }

    public void BackToDefaultLayer()
    {
        Canvas canvas = GetComponent<Canvas>();
        if (canvas != null)
        {
            canvas.sortingLayerName = "Booster";
            canvas.sortingOrder = 0;
        }
        else
        {
            Debug.LogWarning("BoosterItem: OnBecameInvisible - Canvas component not found!");
        }
    }
}

