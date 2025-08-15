using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

[CreateAssetMenu(fileName = "DailyLogInSO", menuName = "ScriptableObjects/DailyLogInSO", order = 1)]
public class DailyLogInSO : ScriptableObject
{
    private static DailyLogInSO _instance;

    public static DailyLogInSO GetInstance()
    {
        if (_instance != null) return _instance;
        _instance = Resources.LoadAll<DailyLogInSO>("").FirstOrDefault();
        if (_instance == null)
        {
            Debug.LogError("DayRewardSO asset not found in Resources folder!");
        }

        return _instance;
    }

    public List<DayReward> DayRewards = new List<DayReward>();
}
[Serializable]
public class DayReward
{
    public int day;
    public List<SingleReward> SingleRewards = new List<SingleReward>();
}

[Serializable]
public class SingleReward
{
    public RewardType rewardType;
    public Sprite imgReward;
    public int amount;
    public Vector2 textAmountPos;
}

public enum RewardType
{
    Coin,
    PackBts,
    SwapBts,
    BreakIceBts,
    FreezeTimeBts,
    Heart,
    HeartInfinite,
}
