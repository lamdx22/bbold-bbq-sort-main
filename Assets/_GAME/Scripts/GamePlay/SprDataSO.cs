using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "SprDataSO", menuName = "ScriptableObjects/SprDataSO", order = 1)]
public class SprDataSO : ScriptableObject
{
    protected static SprDataSO _instance;
    public Sprite sprGrillLockedByAds;
    public List<SkewerSprData> skewerSprDatas;
    public static SprDataSO Instance
    {
        get
        {
            if (_instance == null)
            {
                _instance = Resources.LoadAll<SprDataSO>("")[0];
            }
            return _instance;
        }
    }

    public SkewerSprData GetSkewerDataByType(int skewerType)
    {
        foreach (var skewerData in skewerSprDatas)
        {
            if (skewerData.skewerType == skewerType)
            {
                return skewerData;
            }
        }
        Debug.LogError("SkewerDataSO: Skewer type not found: " + skewerType);
        return null;
    }

    [Serializable]
    public class SkewerSprData
    {
        public int skewerType;
        public Sprite sprSkewer;
        public Sprite sprSkewerShadow;
        public Sprite sprLockedGrill;
    }
}
