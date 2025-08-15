using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

[CreateAssetMenu(fileName = "DailyRewardsSO", menuName = "ScriptableObjects/DailyRewardsSO", order = 1)]
public class DailyRewardsSO : ScriptableObject
{
    private static DailyRewardsSO _instance;

    public static DailyRewardsSO GetInstance()
    {
        if (_instance != null) return _instance;
        _instance = Resources.LoadAll<DailyRewardsSO>("").FirstOrDefault();
        if (_instance == null)
        {
            Debug.LogError("DailyRewardsSO asset not found in Resources folder!");
        }

        return _instance;
    }

    public List<ItemReward> itemRewards = new List<ItemReward>();
}

[Serializable]
public class ItemReward
{
    public int id;
    public RewardType rewardType;
    public Sprite spReward;
    public int amount;
}

public enum StateItemReward
{
    Claimed,
    Open,
    Close,
}
