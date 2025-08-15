using System;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "GrillDatas", menuName = "SO GrillData/GrillDatas", order = 1)]
public class GrillDatas : ScriptableObject
{
    public List<GrillData> grillDatas;
}

[Serializable]
public class GrillData
{
    public GrillType grillType;
    public GrillUnLockType typeUnlock;
    //public InforRewardAdsUnlockGrill rewardAdsUnlock;
    public bool isSaleGrill;
    public int skewerTypeUnLocked;
    public int numOfPosSkewer;
    public int numberSkewerUnlock;
    public int rowIndex;
    public int colIndex;
    public List<PlateData> plateDatas;
    public List<SkewerData> skewerDatasOnGrill;

    public GrillData() { }
}

[Serializable]
public class InforRewardAdsUnlockGrill
{
    public int bonusTime;
    public int bonusCoin;
}

[Serializable]
public class PlateData
{
    public List<SkewerData> skewers;
}

[Serializable]
public class SkewerData
{
    public int skewerType;
    public SkewerTypeAppear typeAppear;
}
