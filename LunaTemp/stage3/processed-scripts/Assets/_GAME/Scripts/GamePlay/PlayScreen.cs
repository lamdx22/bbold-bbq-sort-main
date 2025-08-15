using DG.Tweening;
using Popup;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class PlayScreen : ScreenUI
{
    public LevelCtr curLevelCtrl;
    public Slider processSlide, processSliderBooster;

    public Text timerText, levelText;
    public Text titleFreeBlock, titleFillBlock;
    public TextMeshProUGUI textLv, timerTextTMP;
    public Button settingBtn;
    public Image panelDark;
    public GameObject vfxFreezeScreen, vfxLimitedTimeWarning;
    public Animation animSuggest;
    public int revive = 0;
    public float timeLimitLv;
    public bool isCompletedBooster = true;
    public bool isFreezeTime;
    public bool hackBooster;
    private bool isTutorial = false;
    private int numOfLevel;

    private void Start()
    {
        TextAsset[] levelJsons = Resources.LoadAll<TextAsset>("Levels");
        numOfLevel = levelJsons.Length;
    }

    private void OnEnable()
    {
        if (curLevelCtrl != null)
            curLevelCtrl.gameObject.SetActive(true);
    }
    private void OnDisable()
    {
        if (curLevelCtrl != null)
            curLevelCtrl.gameObject.SetActive(false);
        StopTimeWanring();
    }
    private void Update()
    {
        if (curLevelCtrl != null)
        {
            SetPerCentSlide(curLevelCtrl.GetPerCentLv());
            // processSlide.value = 0.5f;
        }

        if (GameManager.GameState != GameState.Playing) return;
        if (curLevelCtrl.isFinishLv) return;
        if (timeLimitLv < 15f && !isRunningWarning && !isFreezeTime)
        {
            OnLimitedTimeWarning();
        }
        if (timeLimitLv > 0)
        {
            int minutes = Mathf.FloorToInt(timeLimitLv / 60);
            int seconds = Mathf.FloorToInt(timeLimitLv % 60);
            //if (timerText)
            //    timerText.text = $"{minutes:00} : {seconds:00}";
            if (timerTextTMP)
                timerTextTMP.text = $"{minutes:00}:{seconds:00}";
        }
        else
        {
            curLevelCtrl?.Lose();
        }
        if (!isFreezeTime)
            timeLimitLv -= Time.deltaTime;
    }
    public override void Initialize(UIManager UI)
    {
        base.Initialize(UI);
        BBEventDispatcher.Register(BBEventId.OnWinLv, _ => { WinLv(); });
        BBEventDispatcher.Register(BBEventId.OnLoseLv, _ => { LoseDirect(); });
        BBEventDispatcher.Register(BBEventId.OnLoseShipper, _ => { LoseDirect(); });
        BBEventDispatcher.Register(BBEventId.OnLoseDirectly, _ => { LoseDirect(); });
        ResLvUI();
        //BBEventDispatcher.Register(BBEventId.OnRevive, _ => { Revive(); });
        //test Xep Lv
    }
    public void ResLvUI()
    {
        int with = Screen.width;
        int height = Screen.height;
        if (curLevelCtrl == null) return;
        if (height / with <= 16 / 9)
        {
            curLevelCtrl.transform.localScale = new Vector3(0.8f, 0.8f, 0.8f);
        }
        else
        {
            curLevelCtrl.transform.localScale = new Vector3(0.95f, 0.95f, 0.95f);
        }
    }
    public override void Active()
    {
        base.Active();
        //curLevelCtrl.Init();
        //timeLitmitLv = 300f;
        StartLv();
    }
    public void StartLv()
    {
        LoadLvPrefab();
    }
    private bool isRunningWarning;
    private void OnLimitedTimeWarning()
    {
        isRunningWarning = true;
        if (vfxLimitedTimeWarning != null)
        {
            vfxLimitedTimeWarning.SetActive(true);
        }
        AudioManager.Instance.PlaySFXSource2(AudioClipId.Clock, true);
    }
    private void StopTimeWanring()
    {
        if (!isRunningWarning) return;
        isRunningWarning = false;
        if (vfxLimitedTimeWarning != null)
        {
            vfxLimitedTimeWarning.SetActive(false);
            AudioManager.Instance.StopSFXSource2();
        }
    }
    private void HandleSetUIBooster()
    {
    }

    public void Replay()
    {
        LoadLvPrefab();
    }

    public void NextLv()
    {
        StartLv();
    }

    public void SkipLv()
    {
        if (PlayerData.current.level == numOfLevel)
        {
            //PlayerData.current.level = 5;
            //PlayerData.current.fakeIndexLevel++;
            PlayerData.current.fakeIndexLevel = numOfLevel + 1;
        }
        else
        {
            PlayerData.current.level++;
            PlayerData.current.fakeIndexLevel++;
        }
        Model.Instance.Save();
        StartLv();
    }

    public void WinLv()
    {
        //ToDo PopUPWin
        if (PlayerData.current.level == numOfLevel)
        {
            //PlayerData.current.level = 5;
            PlayerData.current.fakeIndexLevel = numOfLevel + 1;
        }
        else
        {
            PlayerData.current.level++;
            PlayerData.current.fakeIndexLevel++;
        }
        Model.Instance.Save();

        //if (PlayerData.current.level > 5)
        //{
        //    AudioManager.Instance.musicSource.UnPause();
        //    Popup.PopupSystem.GetOpenBuilder().SetType(PopupType.PopupClaimCoinPiggyBank)
        //        .SetCurrentPopupBehaviour(CurrentPopupBehaviour.Close).Open();
        //}
        //else
        //{
        //}
        AudioManager.Instance.musicSource.UnPause();
        AudioManager.Instance.PlaySFX(AudioClipId.GameWin);
        Popup.PopupSystem.GetOpenBuilder().SetType(PopupType.PopupGameWin)
            .SetCurrentPopupBehaviour(CurrentPopupBehaviour.Close).Open();
        StopTimeWanring();
    }

    public void LoseLv()
    {
        // TO do: POpUPLose
        Popup.PopupSystem.GetOpenBuilder().SetType(PopupType.PopupRevive)
        .SetCurrentPopupBehaviour(CurrentPopupBehaviour.Close).Open();
        StopTimeWanring();
    }
    public void LoseDirect()
    {
        // TO do: POpUPLose
        Popup.PopupSystem.GetOpenBuilder().SetType(PopupType.PopupGameLose)
        .SetCurrentPopupBehaviour(CurrentPopupBehaviour.Close).Open();
        StopTimeWanring();
    }
    public void OnRevive()
    {
        Debug.Log("98989revies ");
        curLevelCtrl.Revive();
        timeLimitLv += 60f;
        revive++;
    }

    public void LoseShipper()
    {
        Popup.PopupSystem.GetOpenBuilder().SetType(PopupType.PopupReviveShipper)
        .SetCurrentPopupBehaviour(CurrentPopupBehaviour.Close).Open();
    }

    public void OnReviveShipper()
    {
        Debug.Log("98989reviesShipper ");
        curLevelCtrl.ReviveShipper();
    }

    private void LoadLvPrefab()
    {
        //DOTween.KillAll();
        processSlide.value = 0;
        LevelData levelData = LevelDataCtrl.Instance.LoadLevelData(PlayerData.current.level);
        Debug.Log("Check lvData");
        //LevelData levelData = LevelDataCtrl.Instance.LoadLevelData(1);
        if (curLevelCtrl != null)
        {
            curLevelCtrl.Init(levelData);
        }

        timeLimitLv = levelData.time;
        isFreezeTime = false;
        StopTimeWanring();
        //Todo: Multil Language
        if (levelText != null)
            levelText.text = "Level " + PlayerData.current.fakeIndexLevel.ToString();
        StopVfxStopTime();
        HandleSetUIBooster();
        GameManager.Instance.SwitchGameState(GameState.Playing);
        //DisplayPopupGuide();
    }

    private void StopVfxStopTime()
    {
        vfxFreezeScreen?.SetActive(false);
        processSliderBooster.gameObject.SetActive(false);
        if (freezeTimeCrt != null)
        {
            StopCoroutine(freezeTimeCrt);
            freezeTimeCrt = null;
        }
        isFreezeTime = false;
    }
    public void SetPerCentSlide(float percent)
    {
        if (processSlide == null) return;
        if (!Mathf.Approximately(processSlide.value, percent))
        {
            processSlide.value = Mathf.Lerp(processSlide.value, percent, Time.deltaTime * 5f);
        }
        //  processSlide.value = percent;
        // if (percent < 0.5f || passHalfLevel) return;
        // passHalfLevel = true;
        // LionAnalytics.MissionStep(isTutorial, "main", "main_" + PlayerData.current.fakeIndexLevel,
        //     PlayerData.current.fakeIndexLevel.ToString(), 0, turnPlay, stepName: "50%");
    }

    public void AddTimeBonus(int timeBonus)
    {
        timeLimitLv += timeBonus;
    }

    public void OnSetting()
    {
        AudioManager.Instance.PlaySFX(AudioClipId.ClickBtn);
        Popup.PopupSystem.GetOpenBuilder().SetType(PopupType.PopupSettingLv)
            .SetCurrentPopupBehaviour(CurrentPopupBehaviour.Close).Open();
    }
    public void SwapBooster()
    {
        AudioManager.Instance.PlaySFX(AudioClipId.ClickBtn);
        curLevelCtrl.OnSwapBooster();
    }

    public void RemoveOneMatch3Booster()
    {
        AudioManager.Instance.PlaySFX(AudioClipId.ClickBtn);
        curLevelCtrl.OnRemoveOneMatch3Booster();
    }

    private Coroutine freezeTimeCrt;
    public void FreezeTimeBooster()
    {
        AudioManager.Instance.PlaySFX(AudioClipId.ClickBtn);

        if (!isFreezeTime)
        {
            isFreezeTime = true;
            freezeTimeCrt = StartCoroutine(OnFreezeTime(30));
        }
    }

    IEnumerator OnFreezeTime(int time)
    {
        //vfx dong bang
        StopTimeWanring();
        vfxFreezeScreen?.SetActive(true);
        AudioManager.Instance.PlaySFX(AudioClipId.IceSmelling);
        processSliderBooster.gameObject.SetActive(true);

        float countTime = time;
        while (countTime > 0)
        {
            countTime -= Time.deltaTime;
            processSliderBooster.value = countTime / (float)time;
            yield return null;
        }
        processSliderBooster.gameObject.SetActive(false);
        vfxFreezeScreen?.SetActive(false);
        isFreezeTime = false;
    }

    public void RemoveIceBooster()
    {
        AudioManager.Instance.PlaySFX(AudioClipId.ClickBtn);
        curLevelCtrl.OnRemoveIceBooster();
    }

    public void DisplayPopupGuide()
    {
        switch (PlayerData.current.fakeIndexLevel)
        {
            case 1:
                Popup.PopupSystem.GetOpenBuilder().SetType(PopupType.PopupGuidePlayGame).SetDelayTime(0.2f)
                    .SetCurrentPopupBehaviour(CurrentPopupBehaviour.Close).Open();
                break;
            case 3:
                var popupRate = Popup.PopupSystem.GetOpenBuilder().SetType(PopupType.PopupRate)
                    .SetCurrentPopupBehaviour(CurrentPopupBehaviour.Close).Open();
                popupRate.OnCloseEvent += () =>
                {
                    if (PlayerData.current.numOfRemoveMatch3Bts <= 0) return;
                    var popup = Popup.PopupSystem.GetOpenBuilder().SetType(PopupType.PopupGuideBoosterMatch3)
                        .SetCurrentPopupBehaviour(CurrentPopupBehaviour.Close).Open();
                };
                break;
            case 5:
                if (PlayerData.current.numOfSwapBts <= 0) return;
                var popup1 = Popup.PopupSystem.GetOpenBuilder().SetType(PopupType.PopupGuideBoosterSwap)
                    .SetCurrentPopupBehaviour(CurrentPopupBehaviour.Close).Open();
                break;
            case 6:
                Popup.PopupSystem.GetOpenBuilder().SetType(PopupType.PopupOvenCover)
                    .SetCurrentPopupBehaviour(CurrentPopupBehaviour.Close).Open();
                break;
            case 8:
                if (PlayerData.current.numOfBreakIceBts <= 0) return;
                var popup2 = Popup.PopupSystem.GetOpenBuilder().SetType(PopupType.PopupGuideBoosterFire)
                    .SetCurrentPopupBehaviour(CurrentPopupBehaviour.Close).Open();
                break;
            case 10:
                curLevelCtrl.ShowPoupGuideOrder += () =>
                {
                    Popup.PopupSystem.GetOpenBuilder().SetType(PopupType.PopupGuideOrder)
                        .SetCurrentPopupBehaviour(CurrentPopupBehaviour.Close).Open();
                };
                break;
            case 11:
                if (PlayerData.current.numOfFreezeTimeBts <= 0) return;
                var popup3 = Popup.PopupSystem.GetOpenBuilder().SetType(PopupType.PopupGuideBoosterFreeze)
                    .SetCurrentPopupBehaviour(CurrentPopupBehaviour.Close).Open();
                break;
            case 12:
                Popup.PopupSystem.GetOpenBuilder().SetType(PopupType.PopupGuideSecrectSke)
                    .SetCurrentPopupBehaviour(CurrentPopupBehaviour.Close).Open();
                break;
            case 24:
                curLevelCtrl.ShowPoupGuideOrder += () =>
                {
                    Popup.PopupSystem.GetOpenBuilder().SetType(PopupType.PopupSpicyOrder)
                        .SetCurrentPopupBehaviour(CurrentPopupBehaviour.Close).Open();
                };
                break;
            case 33:
                Popup.PopupSystem.GetOpenBuilder().SetType(PopupType.PopupGrillUnlockByNumber)
                    .SetCurrentPopupBehaviour(CurrentPopupBehaviour.Close).Open();
                break;
            case 71:
                Popup.PopupSystem.GetOpenBuilder().SetType(PopupType.PopupGuideTray)
                    .SetCurrentPopupBehaviour(CurrentPopupBehaviour.Close).Open();
                break;
        }
    }
}