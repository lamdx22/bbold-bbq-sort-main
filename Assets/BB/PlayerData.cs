using PopupSystem;
using System;
using System.Collections.Generic;
using UnityEngine;

[Serializable]
public class PlayerData
{
    #region StaticConfig

#if UNITY_EDITOR
    private static readonly string directory = "Assets/";
#else
    private static readonly string directory = Application.persistentDataPath;
#endif
    private static string playerDataFileName = "/playerdata.txt";

    public static string GetFilePath()
    {
        return directory + playerDataFileName;
    }

    #endregion

    public static PlayerData current;
    public LanguageType languageType = LanguageType.ENGLISH;
    public string localFirstActiveTime;
    public string localLastActiveTime;
    public string lastHeartRecoveryTime;
    public string lastClickGetCoinDailyShop;
    public string lastClickGetCoinDailyReward;
    public double timeToNextHeart;
    public int enterGameTimeCount;
    public int coinCount = 0;
    public int gemCount;
    public int curHeart = 5;
    public int maxHeart = 5;
    public int numOfRemoveMatch3Bts = 1, numOfSwapBts = 1, numOfFreezeTimeBts = 1, numOfBreakIceBts = 1;
    public float timeToAddHeart;
    public bool noAds = false;
    public bool vip = false;
    public string removeAds1dExpiredTime;
    public string namePlayer;
    public string avatarPLayer;
    public int level = 1;
    public int fakeIndexLevel = 1;
    public bool hasInfiniteHearts = false;
    public string infiniteHeartsExpireTime;
    public int numSkipAds;
    public int curPiggyBankCoin;
    public int maxPiggyBankCoin = 3000;
    public int coinTier1PiggyBank = 2000;
    public int lastClaimedRewardId = -1;
    public bool checkGetFreeCoin;
    public int currentDailyBonusDay;
    public string lastReceiveDailyBonusTime;


    public List<int> coinShop = new List<int>();
    public List<DailyRewardPlayerState> dailyRewardStates = new List<DailyRewardPlayerState>();
    public GameData gameData = new GameData();
    public TempData tempData = new TempData();

    public void AddGem(int count)
    {
        gemCount += count;
        if (gemCount < 0)
            gemCount = 0;
        if (count > 0)
        {
            tempData.earnedGemCount += count;
        }
    }

    public void AddCoinOfferFirstBuy(int id)
    {
        coinShop.Add(id);
    }

    public bool CheckIdInCoinOffer(int id)
    {
        if (coinShop.Count < 0) return false;
        foreach (var coin in coinShop)
        {
            if (id == coin)
                return true;
        }
        return false;
    }

    public void AddCoin(int count)
    {
        coinCount += count;
        if (coinCount < 0)
            coinCount = 0;
        BBEventDispatcher.Notify(BBEventId.OnCoinCountChanged, coinCount);
    }

    public void AddCoinPiggyBank(int count)
    {
        if (level <= 5) return;
        curPiggyBankCoin += count;
        if (curPiggyBankCoin >= maxPiggyBankCoin)
            curPiggyBankCoin = maxPiggyBankCoin;
    }

    public void AddHeart(int count)
    {
        curHeart += count;
        curHeart = Mathf.Clamp(curHeart, 0, maxHeart);

        if (curHeart < maxHeart)
        {
            lastHeartRecoveryTime = DateTime.Now.ToString("O");
        }

        timeToNextHeart = (curHeart == maxHeart) ? 0 : timeToNextHeart;

        Model.Instance.Save();
    }

    public void AddRemoveMatch3Bts(int count)
    {
        numOfRemoveMatch3Bts += count;
        if (numOfRemoveMatch3Bts < 0) numOfRemoveMatch3Bts = 0;
        BBEventDispatcher.Notify(BBEventId.OnCoutPackChanged, numOfRemoveMatch3Bts);
    }

    public void AddSwapBts(int count)
    {
        numOfSwapBts += count;
        if (numOfSwapBts < 0) numOfSwapBts = 0;
        BBEventDispatcher.Notify(BBEventId.OnCountSwapChanged, numOfSwapBts);
    }

    public void AddFreezeTimeBts(int count)
    {
        numOfFreezeTimeBts += count;
        if (numOfFreezeTimeBts < 0) numOfFreezeTimeBts = 0;
        BBEventDispatcher.Notify(BBEventId.OnCountFreezeTimeChanged, numOfFreezeTimeBts);
    }

    public void AddBreakIceBts(int count)
    {
        numOfBreakIceBts += count;
        if (numOfBreakIceBts < 0) numOfBreakIceBts = 0;
        BBEventDispatcher.Notify(BBEventId.OnCountBreakIceChanged, numOfBreakIceBts);
    }

    public void AddSkipAds(int count)
    {
        numSkipAds += count;
        if (numSkipAds < 0) numSkipAds = 0;
    }

    public bool IsNoAds()
    {
        return noAds;
    }

    public void NextLevel()
    {
        level += 1;
    }

    public void ChangeLanguage(LanguageType type)
    {
        languageType = type;
    }
}

[Serializable]
public class DailyRewardPlayerState
{
    public int rewardId;
    public StateItemReward state;
    public DateTime claimDate;
}

[Serializable]
public class GameData
{
    public bool musicState; // trạng thái nhạc
    public bool soundState; // trạng thái âm thanh
    public bool vibrateState; // rung

    public GameData()
    {
        musicState = true;
        soundState = true;
        vibrateState = true;
    }
}

[Serializable]
public class TempData
{
    public int rewardedVideoCount;
    public string lastTimeBBButonShowAd;
    public int winLevelCount;
    public int loseLevelCount;
    public int earnedGemCount;
    public bool push_earnedGemCount_event;
    public float spentIAP;
    public bool push_spentIAP_event;
    public bool push_retention_day7;
    public bool push_retention_day5;
    public bool push_retention_day3;
    public bool push_firstIAP_event;

    public TempData()
    {
        rewardedVideoCount = 0;
        lastTimeBBButonShowAd = DateTime.Now.ToString();
    }
}