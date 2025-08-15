using Popup;
using PopupSystem;
using System;
using System.Globalization;
using UnityEngine;
using UnityEngine.UI;

public class HomeScreen : ScreenUI
{
    [SerializeField] protected Text textHeart;
    [SerializeField] protected Text textTimer;
    [SerializeField] protected Text textCoin;
    [SerializeField] protected Text textPiggyBank;
    [SerializeField] protected GameObject iconHeartInf;
    private int numOfLevel;

    private void Start()
    {
        TextAsset[] levelJsons = Resources.LoadAll<TextAsset>("Levels");
        numOfLevel = levelJsons.Length;
    }

    public override void Initialize(UIManager uIManager)
    {
        base.Initialize(uIManager);

        textPiggyBank.font = CustomLocalization.GetFont();
    }
}
