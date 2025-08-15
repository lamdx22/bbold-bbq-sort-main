using Newtonsoft.Json;
using Popup;
using System;
using System.Collections.Generic;
using System.Linq;
using UnityEditor;
using UnityEngine;

public class LevelDataCtrl : MonoSingleton<LevelDataCtrl>
{
    [SerializeField] LevelData curLevel;
    [SerializeField] public LevelDatas levelDatas;
    [SerializeField] private int _currentLevelIDToLoad = 1;

    public override void Awake()
    {
        base.Awake();
    }

    public LevelData LoadLevelData(int levelID)
    {
#if UNITY_EDITOR
        string assetPath = "Assets/_GAME/Resources/Levels/Level " + levelID + ".json";
        AssetDatabase.ImportAsset(assetPath, ImportAssetOptions.ForceUpdate);
#endif
        LevelDataJson rawLevelDataJson = LoadRawJsonData(levelID);
        if (rawLevelDataJson != null)
        {
            Dictionary<int, int> globalSwapMap = SkewerSwapMap(rawLevelDataJson);

            foreach (var row in rawLevelDataJson.grillData)
            {
                if (row == null) continue;
                foreach (var grillJson in row)
                {
                    if (grillJson == null) continue;

                    ApplySkewerSwap(grillJson, globalSwapMap);
                }
            }
            LevelData convertedLevel = ConvertLevelData(rawLevelDataJson);
            bool levelAlreadyLoaded = false;

            foreach (var existingLevel in levelDatas.levelDatas)
            {
                if (existingLevel.levelID == convertedLevel.levelID)
                {
                    levelDatas.levelDatas[levelDatas.levelDatas.IndexOf(existingLevel)] = convertedLevel;
                    levelAlreadyLoaded = true;
                    break;
                }
            }
            if (!levelAlreadyLoaded)
            {
                levelDatas.levelDatas.Add(convertedLevel);
            }
            curLevel = convertedLevel;
            Debug.Log($"Load Level ID: {convertedLevel.levelID}");
            return curLevel;
        }
        else
        {
            return null;
        }
    }

    private Dictionary<int, int> SkewerSwapMap(LevelDataJson rawLevelDataJson)
    {
        System.Random rand = new System.Random();
        HashSet<int> allSkewerDataIds = new HashSet<int>();

        foreach (var row in rawLevelDataJson.grillData)
        {
            if (row == null) continue;
            foreach (var grillJson in row)
            {
                if (grillJson == null) continue;
                foreach (var skewerList in grillJson.ske)
                {
                    if (skewerList == null) continue;
                    foreach (string skewerString in skewerList)
                    {
                        string[] parts = skewerString.Split('-');
                        if (parts.Length == 2 && int.TryParse(parts[0], out int skewerTypeValue))
                        {
                            if (skewerTypeValue != 0)
                                allSkewerDataIds.Add(skewerTypeValue);
                        }
                    }
                }
            }
        }

        List<int> usedIDs = allSkewerDataIds.ToList();
        List<int> targets = new List<int>(rawLevelDataJson.skewerDataType);
        Debug.Log("check data level 139 " + usedIDs.Count + " " + targets.Count);

        targets = targets.OrderBy(x => rand.Next()).ToList();

        for (int i = 0; i < usedIDs.Count; i++)
        {
            if (usedIDs[i] == targets[i])
            {
                int swapIndex = (i + 1) % usedIDs.Count;
                if (usedIDs.Count > 1)
                {
                    (targets[i], targets[swapIndex]) = (targets[swapIndex], targets[i]);
                }
            }
        }

        Dictionary<int, int> globalSwapMap = new Dictionary<int, int>();
        for (int i = 0; i < usedIDs.Count; i++)
        {
            globalSwapMap[usedIDs[i]] = targets[i];
        }
        return globalSwapMap;
    }

    private void ApplySkewerSwap(GrillDataForJson grillJson, Dictionary<int, int> swapMap)
    {
        if (grillJson.ske == null) return;

        if (grillJson.typeUnlock == GrillUnLockType.LockedBySkewer)
        {
            try
            {
                if (swapMap.TryGetValue(grillJson.skeUnl, out int newSkeUnl))
                    grillJson.skeUnl = newSkeUnl;
            }
            catch (Exception ex)
            {
                Debug.LogException(ex);
            }
        }

        for (int i = 0; i < grillJson.ske.Count; i++)
        {
            List<string> updatedSkeStrings = new List<string>();
            if (grillJson.ske[i] == null)
            {
                updatedSkeStrings.Add(null);
                continue;
            }

            foreach (string skeString in grillJson.ske[i])
            {
                if (string.IsNullOrEmpty(skeString))
                {
                    updatedSkeStrings.Add(skeString);
                    continue;
                }

                string[] parts = skeString.Split('-');
                if (parts.Length == 2)
                {
                    if (int.TryParse(parts[0], out int originalSkewerType) &&
                        int.TryParse(parts[1], out int typeAppearValue))
                    {
                        if (swapMap.TryGetValue(originalSkewerType, out int newSkewerType))
                        {
                            updatedSkeStrings.Add($"{newSkewerType}-{typeAppearValue}");
                        }
                        else
                        {
                            updatedSkeStrings.Add(skeString);
                        }
                    }
                    else
                    {
                        updatedSkeStrings.Add(skeString);
                    }
                }
                else
                {
                    updatedSkeStrings.Add(skeString);
                }
            }
            grillJson.ske[i] = updatedSkeStrings;
        }
    }

    private LevelDataJson LoadRawJsonData(int levelID)
    {
        string path = "Levels/" + "Level " + levelID;
        TextAsset jsonTextAsset = Resources.Load<TextAsset>(path);

        if (jsonTextAsset != null)
            return JsonConvert.DeserializeObject<LevelDataJson>(jsonTextAsset.text);
        else
            return null;
    }

    private LevelData ConvertLevelData(LevelDataJson rawLevelDataJson)
    {
        if (rawLevelDataJson == null)
        {
            Debug.LogError("Null Raw Level Data Json");
            return null;
        }

        List<GrillData> flatGrills = new List<GrillData>();
        foreach (var row in rawLevelDataJson.grillData)
        {
            if (row == null) continue;
            foreach (var grillJson in row)
            {
                if (grillJson == null)
                {
                    continue;
                }
                GrillData newGrill = new GrillData
                {
                    grillType = grillJson.grillType,
                    typeUnlock = grillJson.typeUnlock,
                    isSaleGrill = grillJson.isSaleGrill,
                    skewerTypeUnLocked = grillJson.skeUnl,
                    numOfPosSkewer = grillJson.numSke,
                    numberSkewerUnlock = grillJson.numSkeUnlock,
                    rowIndex = grillJson.rowIndex,
                    colIndex = grillJson.colIndex,
                    skewerDatasOnGrill = LoadSkewerData(grillJson),
                    plateDatas = LoadPlateData(grillJson),
                };
                flatGrills.Add(newGrill);
            }
        }

        LevelData newLevelData = new LevelData()
        {
            levelID = rawLevelDataJson.levelID,
            diff = rawLevelDataJson.diff,
            time = rawLevelDataJson.time,
            order = rawLevelDataJson.order,
            width = rawLevelDataJson.width,
            height = rawLevelDataJson.height,
            skewerDataType = rawLevelDataJson.skewerDataType,
            grills = flatGrills,
        };
        return newLevelData;
    }

    private List<SkewerData> LoadSkewerData(GrillDataForJson grillJson)
    {
        if (grillJson.typeUnlock == GrillUnLockType.LockedBySkewer)
            return new List<SkewerData>();
        if (grillJson.ske != null && grillJson.ske.Count > 0)
            return ParseSkewerData(grillJson.ske[0]);
        return new List<SkewerData>();
    }

    private List<PlateData> LoadPlateData(GrillDataForJson grillJson)
    {
        List<PlateData> plateDatas = new List<PlateData>();
        if (grillJson.ske == null || grillJson.ske.Count <= 0) return null;
        if (grillJson.typeUnlock == GrillUnLockType.LockedBySkewer)
        {
            for (int i = 0; i < grillJson.ske.Count; i++)
            {
                PlateData plateData = new PlateData();
                plateData.skewers = ParseSkewerData(grillJson.ske[i]);
                plateDatas.Add(plateData);
            }
        }
        else
        {
            for (int i = 1; i < grillJson.ske.Count; i++)
            {
                PlateData plateData = new PlateData();
                plateData.skewers = ParseSkewerData(grillJson.ske[i]);
                plateDatas.Add(plateData);
            }
        }
        return plateDatas;
    }

    private List<SkewerData> ParseSkewerData(List<String> skewerStrings)
    {
        List<SkewerData> parsedSkes = new List<SkewerData>();

        foreach (string skewerString in skewerStrings)
        {
            string[] parts = skewerString.Split('-');
            if (parts.Length == 2)
            {
                if (int.TryParse(parts[0], out int skewerTypeValue) &&
                    int.TryParse(parts[1], out int typeAppearValue))
                {
                    SkewerTypeAppear typeAppear;
                    if (Enum.IsDefined(typeof(SkewerTypeAppear), typeAppearValue))
                    {
                        typeAppear = (SkewerTypeAppear)typeAppearValue;

                        SkewerData newSkewer = new SkewerData
                        {
                            skewerType = skewerTypeValue,
                            typeAppear = typeAppear,
                        };
                        parsedSkes.Add(newSkewer);
                    }
                }
            }
        }

        return parsedSkes;
    }
}

[System.Serializable]
public class LevelDataJson
{
    public int levelID;
    public int diff;
    public int time;
    public int order;
    public int width;
    public int height;
    public List<int> skewerDataType;
    public List<List<GrillDataForJson>> grillData = new List<List<GrillDataForJson>>();

    public LevelDataJson(int width, int height)
    {
        this.width = width;
        this.height = height;
    }

    public LevelDataJson()
    {
        grillData = new List<List<GrillDataForJson>>();
        for (int r = 0; r < height; r++)
        {
            List<GrillDataForJson> row = new List<GrillDataForJson>();
            for (int c = 0; c < width; c++)
            {
                row.Add(null);
            }
            grillData.Add(row);
        }
    }
}

[System.Serializable]
public class GrillDataForJson
{
    public GrillType grillType;
    public GrillUnLockType typeUnlock;
    public bool isSaleGrill;
    public int skeUnl;
    public int rowIndex;
    public int colIndex;
    public int numSke;
    public int numSkeUnlock;
    public List<List<string>> ske = new List<List<string>>();

    public GrillDataForJson()
    {
        typeUnlock = GrillUnLockType.Empty;
        numSke = 3;
        ske = new List<List<String>>();
    }
}

[System.Serializable]
public class SkewerDataForJson
{
    public bool checkPos;
    public SkewerTypeAppear skeTypeAppear;
    public int skewerSpriteID;

    public SkewerDataForJson()
    {
        checkPos = true;
        skeTypeAppear = SkewerTypeAppear.Normal;
        skewerSpriteID = 1;
    }
}
