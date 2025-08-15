using UnityEngine;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using System;
using System.Runtime.CompilerServices;
using UnityEngine.AI;

public class LevelDataConverter
{
    [System.Serializable]
    public class SourcePan
    {
        public int type;
        public int special;
        public int @lock;
        public bool needAd;
        public int x;
        public int y;
        public List<List<string>> ske;
    }

    [System.Serializable]
    public class SourceLevelInternalData
    {
        public int id;
        public int diff;
        public int time;
        public int order;
        public List<SourcePan> pans;
    }

    public static void ConvertLevelDataFromFile(string sourceRelativePath, string outputFileName, List<int> myAvailableSkewerIds)
    {
        string sourceFilePath = Application.dataPath + sourceRelativePath.Replace("Assets", "");
        string outputFolderPath = Application.dataPath + "/_GAME/Resources/Levels/";

        if (!File.Exists(sourceFilePath))
        {
            Debug.LogError($"[LevelDataConverter] Source file not found: {sourceFilePath}");
            return;
        }

        if (myAvailableSkewerIds == null || myAvailableSkewerIds.Count == 0)
        {
            Debug.LogError($"[LevelDataConverter] 'myAvailableSkewerIds' is empty or null. Cannot map skewer IDs.");
            return;
        }

        string jsonContent = File.ReadAllText(sourceFilePath);

        try
        {
            var sourceRootJArray = JsonConvert.DeserializeObject<List<List<List<SourceLevelInternalData>>>>(jsonContent); //JsonConvert.DeserializeObject<Newtonsoft.Json.Linq.JArray>(jsonContent);
            SourceLevelInternalData sourceLevelData = sourceRootJArray[5]?[0]?[2]; //sourceRootJArray[5]?[0]?[2]?.ToObject<SourceLevelInternalData>();

            if (sourceLevelData == null) return;

            int targetWidth = 3;
            int targetHeight = 4;

            LevelDataJson targetLevelData = new LevelDataJson()
            {
                levelID = sourceLevelData.id,
                diff = sourceLevelData.diff,
                time = sourceLevelData.time,
                order = sourceLevelData.order,
                width = targetWidth,
                height = targetHeight,
                skewerDataType = new List<int>()
            };

            targetLevelData.grillData = new List<List<GrillDataForJson>>();
            for (int r = 0; r < targetHeight; r++)
            {
                List<GrillDataForJson> row = new List<GrillDataForJson>(targetWidth);
                for (int c = 0; c < targetWidth; c++)
                {
                    row.Add(null);
                }
                targetLevelData.grillData.Add(row);
            }

            HashSet<int> uniqueSourceSkewerIds = new HashSet<int>();
            foreach (var pan in sourceLevelData.pans)
            {
                if (pan.ske == null) continue;

                foreach (var sourceSkeRow in pan.ske)
                {
                    if (sourceSkeRow == null) continue;

                    foreach (string skewerIdAndTypeStr in sourceSkeRow)
                    {
                        if (skewerIdAndTypeStr == "0") continue;

                        string idPart = skewerIdAndTypeStr.Split('-')[0];
                        if (int.TryParse(idPart, out int sourceId))
                        {
                            uniqueSourceSkewerIds.Add(sourceId);
                        }
                        else
                        {
                            Debug.LogError($"[LevelDataConverter] Could not parse source skewer ID '{skewerIdAndTypeStr}' to int. Skipping for mapping.");
                        }
                    }
                }
            }

            // mapping dictionary
            Dictionary<int, int> skewerIdMapping = new Dictionary<int, int>();
            List<int> shuffledMySkewerIds = myAvailableSkewerIds.OrderBy(a => Guid.NewGuid()).ToList(); // dao tron

            if (uniqueSourceSkewerIds.Count > shuffledMySkewerIds.Count)
            {
                Debug.LogError($"[LevelDataConverter] Number of unique source skewer IDs ({uniqueSourceSkewerIds.Count}) is greater than your available IDs ({shuffledMySkewerIds.Count}). Some of your IDs will be reused.");
            }

            int myIdIndex = 0;
            foreach (int sourceId in uniqueSourceSkewerIds.OrderBy(id => id)) // arrange Id
            {
                if (myIdIndex >= shuffledMySkewerIds.Count)
                {
                    myIdIndex = 0;
                }
                skewerIdMapping[sourceId] = shuffledMySkewerIds[myIdIndex];
                myIdIndex++;
            }

            Debug.Log("[LevelDataConverter] Skewer ID Mapping generated:");
            foreach (var entry in skewerIdMapping)
            {
                Debug.Log($"Source ID {entry.Key} -> Your ID {entry.Value}");
            }


            // change data
            HashSet<int> finalSkewerDataTypesInOutput = new HashSet<int>();

            foreach (var pan in sourceLevelData.pans)
            {
                int targetRowIndex = pan.y + 1;
                int targetColIndex = (pan.x + 3) / 3;
                Debug.Log("check 139 " + targetRowIndex + " " + targetColIndex);
                if (!(targetRowIndex >= 0 && targetRowIndex < targetHeight &&
                      targetColIndex >= 0 && targetColIndex < targetWidth))
                {
                    Debug.LogError($" ID used ({pan.x}, {pan.y}) maps to out-of-bounds target coordinates ({targetRowIndex}, {targetColIndex}). Skipping this pan.");
                    continue;
                }

                GrillDataForJson grillDataForJson = new GrillDataForJson
                {
                    rowIndex = targetRowIndex,
                    colIndex = targetColIndex,
                };

                List<List<string>> processedSkeForGrill = new List<List<string>>();

                // hard code
                switch (pan.type)
                {
                    case 11:
                        grillDataForJson.typeUnlock = GrillUnLockType.Free;
                        grillDataForJson.numSke = 1;
                        grillDataForJson.isSaleGrill = false;
                        break;
                    case 1:
                        grillDataForJson.typeUnlock = GrillUnLockType.Free;
                        grillDataForJson.numSke = 3;
                        grillDataForJson.isSaleGrill = false;
                        break;
                    case 2:
                        grillDataForJson.typeUnlock = GrillUnLockType.Free;
                        grillDataForJson.isSaleGrill = true;
                        break;
                    case 3:
                    case 4:
                        grillDataForJson.typeUnlock = GrillUnLockType.Free;
                        grillDataForJson.grillType = GrillType.NotMatch3;
                        break;
                }

                if (pan.@lock != 0) grillDataForJson.typeUnlock = GrillUnLockType.LockedBySkewer;
                if (pan.needAd) grillDataForJson.typeUnlock = GrillUnLockType.LockedByAds;

                if (pan.ske != null)
                {
                    foreach (var sourceSkeRow in pan.ske)
                    {
                        List<string> targetSkeRow = new List<string>();
                        if (sourceSkeRow != null)
                        {
                            foreach (string skewerIdAndTypeStr in sourceSkeRow)
                            {
                                if (skewerIdAndTypeStr == "0")
                                {
                                    targetSkeRow.Add("0-0");
                                }
                                else
                                {
                                    string originalType = "0";
                                    string idPart = skewerIdAndTypeStr.Split('-')[0];

                                    if (skewerIdAndTypeStr.Contains('-'))
                                    {
                                        string[] parts = skewerIdAndTypeStr.Split('-');
                                        if (parts.Length == 2)
                                        {
                                            originalType = parts[1];
                                        }
                                    }

                                    int sourceId = 0;
                                    if (int.TryParse(idPart, out sourceId))
                                    {
                                        if (skewerIdMapping.TryGetValue(sourceId, out int newMappedId))
                                        {
                                            targetSkeRow.Add($"{newMappedId}-{originalType}");
                                            finalSkewerDataTypesInOutput.Add(newMappedId);
                                        }
                                        else
                                        {
                                            Debug.LogError($"[LevelDataConverter] Source ID '{sourceId}' not found in mapping. Using fallback ID 1.");
                                            targetSkeRow.Add($"1-{originalType}");
                                            finalSkewerDataTypesInOutput.Add(1);
                                        }
                                    }
                                    else
                                    {
                                        Debug.LogError($"[LevelDataConverter] Failed to parse ID part '{idPart}' from '{skewerIdAndTypeStr}'. Using fallback ID 1.");
                                        targetSkeRow.Add($"1-{originalType}");
                                        finalSkewerDataTypesInOutput.Add(1);
                                    }
                                }
                            }
                        }
                        processedSkeForGrill.Add(targetSkeRow);
                    }
                }
                grillDataForJson.ske = processedSkeForGrill;

                targetLevelData.grillData[targetRowIndex][targetColIndex] = grillDataForJson;
            }

            targetLevelData.skewerDataType = finalSkewerDataTypesInOutput.OrderBy(id => id).ToList();

            string outputJson = JsonConvert.SerializeObject(targetLevelData, Formatting.Indented);

            string fullOutputPath = Path.Combine(outputFolderPath, outputFileName);
            string directory = Path.GetDirectoryName(fullOutputPath);
            if (!Directory.Exists(directory))
            {
                Directory.CreateDirectory(directory);
            }

            File.WriteAllText(fullOutputPath, outputJson);

#if UNITY_EDITOR
            UnityEditor.AssetDatabase.Refresh();
#endif

            Debug.Log($"[LevelDataConverter] Level data converted and saved to: {fullOutputPath}");
        }
        catch (System.Exception ex)
        {
            Debug.LogError($"[LevelDataConverter] An error occurred during conversion: {ex.Message}\nStackTrace:\n{ex.StackTrace}");
        }
    }

    [System.Serializable]
    public class SourcePanFalcon
    {
        public int ShelfType;
        public Position position;
        public AdsLock AdsLockTrayData;
        public HotTray hotTrayData;
        public List<ShelSlotContainer> shelSlotDatas;
        public object shelfLock;
        public TrayCloseData TrayCloseData;
        public WoodTray WoodTrayData;
    }

    public class TrayCloseData
    {
        public List<int> ObstacleTypeUnlock;
    }

    public class ShelSlotContainer
    {
        public LayerData LayerData;
    }

    public class LayerData : Dictionary<string, LayerItemData>
    {
        public LayerData() : base() { }
    }

    public class LayerItemData
    {
        public int Type;
    }

    public class LayerDataEntry
    {
        public string Key;
        public LayerItemData Value;
    }

    public class Position
    {
        public float Item1;
        public float Item2;
    }

    public class AdsLock
    {
        public int ID;
    }

    public class HotTray
    {
        public int ID;
    }

    public class WoodTray
    {
        public int ID;
    }

    public class SourceLevelInternalDataFalcon
    {
        public int LevelID;
        public int diff = 1;
        public float Duration;
        public object shipperData;
        public List<SourcePanFalcon> shelfDatas;
    }

    public class Order
    {
        public int numOrder;
    }

    public static void ConvertLevelDataFromFalcon(string sourceRelativePath, string outputFileName, List<int> myAvailableSkewerIds)
    {
        string sourceFilePath = Application.dataPath + sourceRelativePath.Replace("Assets", "");
        string outputFolderPath = Application.dataPath + "/_GAME/Resources/Levels/";

        if (!File.Exists(sourceFilePath))
        {
            Debug.LogError($"[LevelDataConverter] Source file not found: {sourceFilePath}");
            return;
        }

        if (myAvailableSkewerIds == null || myAvailableSkewerIds.Count == 0)
        {
            Debug.LogError($"[LevelDataConverter] 'myAvailableSkewerIds' is empty or null. Cannot map skewer IDs.");
            return;
        }

        string jsonContent = File.ReadAllText(sourceFilePath);

        try
        {
            //var sourceRootJArray = JsonConvert.DeserializeObject<Newtonsoft.Json.Linq.JArray>(jsonContent);
            SourceLevelInternalDataFalcon sourceLevelData = JsonConvert.DeserializeObject<SourceLevelInternalDataFalcon>(jsonContent);

            if (sourceLevelData == null) return;

            int targetWidth = 3;
            int targetHeight = 4;

            LevelDataJson targetLevelData = new LevelDataJson()
            {
                levelID = sourceLevelData.LevelID,
                diff = sourceLevelData.diff,
                time = (int)sourceLevelData.Duration,
                width = targetWidth,
                height = targetHeight,
                skewerDataType = new List<int>()
            };

            if (sourceLevelData.shipperData != null)
                targetLevelData.order = 1;
            else
                targetLevelData.order = 0;

            targetLevelData.grillData = new List<List<GrillDataForJson>>();
            for (int r = 0; r < targetHeight; r++)
            {
                List<GrillDataForJson> row = new List<GrillDataForJson>(targetWidth);
                for (int c = 0; c < targetWidth; c++)
                {
                    row.Add(null);
                }
                targetLevelData.grillData.Add(row);
            }


            HashSet<int> uniqueSourceSkewerIds = new HashSet<int>();
            foreach (var shelf in sourceLevelData.shelfDatas)
            {
                if (shelf.shelSlotDatas == null) continue;

                foreach (var shelSlotContainer in shelf.shelSlotDatas)
                {
                    if (shelSlotContainer == null) continue;

                    var shelSlotDict = shelSlotContainer.LayerData;

                    if (shelSlotDict == null) continue;

                    Debug.Log("check123456 (item count in dictionary) " + shelSlotDict.Count);

                    foreach (var item in shelSlotDict)
                    {
                        Debug.Log("CHECK 139139 " + item.Value.Type);
                        uniqueSourceSkewerIds.Add(item.Value.Type);
                    }
                }
            }

            // mapping dictionary
            Dictionary<int, int> skewerIdMapping = new Dictionary<int, int>();
            List<int> shuffledMySkewerIds = myAvailableSkewerIds.OrderBy(a => Guid.NewGuid()).ToList(); // dao tron

            if (uniqueSourceSkewerIds.Count > shuffledMySkewerIds.Count)
            {
                Debug.LogError($"[LevelDataConverter] Number of unique source skewer IDs ({uniqueSourceSkewerIds.Count}) is greater than your available IDs ({shuffledMySkewerIds.Count}). Some of your IDs will be reused.");
            }

            int myIdIndex = 0;
            foreach (int sourceId in uniqueSourceSkewerIds.OrderBy(id => id)) // arrange Id
            {
                if (myIdIndex >= shuffledMySkewerIds.Count)
                {
                    myIdIndex = 0;
                }
                skewerIdMapping[sourceId] = shuffledMySkewerIds[myIdIndex];
                myIdIndex++;
            }

            Debug.Log("[LevelDataConverter] Skewer ID Mapping generated:");
            foreach (var entry in skewerIdMapping)
            {
                Debug.Log($"Source ID {entry.Key} -> Your ID {entry.Value}");
            }


            // change data
            HashSet<int> finalSkewerDataTypesInOutput = new HashSet<int>();
            foreach (var shelf in sourceLevelData.shelfDatas)
            {
                int targetRowIndex = (3 - (int)shelf.position.Item2) / 2;
                int targetColIndex = ((int)shelf.position.Item1 + 2) / 2;
                Debug.Log("check 139 " + targetRowIndex + " " + targetColIndex);
                if (!(targetRowIndex >= 0 && targetRowIndex < targetHeight &&
                      targetColIndex >= 0 && targetColIndex < targetWidth))
                {
                    continue;
                }

                GrillDataForJson grillDataForJson = new GrillDataForJson
                {
                    rowIndex = targetRowIndex,
                    colIndex = targetColIndex,
                };

                List<List<string>> processedSkeForGrill = new List<List<string>>();

                // hard code
                switch (shelf.ShelfType)
                {
                    case 0:
                        grillDataForJson.typeUnlock = GrillUnLockType.Free;
                        grillDataForJson.numSke = 3;
                        grillDataForJson.isSaleGrill = false;
                        break;
                    case 2:
                        grillDataForJson.typeUnlock = GrillUnLockType.Free;
                        grillDataForJson.numSke = 1;
                        grillDataForJson.isSaleGrill = false;
                        break;
                }

                if (shelf.AdsLockTrayData != null)
                    grillDataForJson.typeUnlock = GrillUnLockType.LockedByAds;

                if (shelf.hotTrayData != null)
                {
                    grillDataForJson.typeUnlock = GrillUnLockType.Free;
                    grillDataForJson.numSke = 3;
                    grillDataForJson.isSaleGrill = true;
                }

                if (shelf.WoodTrayData != null)
                {
                    grillDataForJson.typeUnlock = GrillUnLockType.Free;
                    grillDataForJson.numSke = 3;
                    grillDataForJson.grillType = GrillType.NotMatch3;
                }

                if (shelf.TrayCloseData != null)
                {
                    grillDataForJson.typeUnlock = GrillUnLockType.LockedBySkewer;
                    var skeUnlock = shelf.TrayCloseData.ObstacleTypeUnlock[0];
                    if (skewerIdMapping.ContainsKey(skeUnlock))
                        grillDataForJson.skeUnl = skewerIdMapping[skeUnlock];
                    else grillDataForJson.typeUnlock = GrillUnLockType.Free;
                }
                if (shelf.shelSlotDatas != null)
                {
                    HashSet<string> allKeys = new HashSet<string>();
                    if (shelf.shelSlotDatas.Count == 3)
                    {
                        for (int i = 0; i < 3; i++)
                        {
                            var dict = shelf?.shelSlotDatas[i]?.LayerData;
                            if (dict != null && dict.Keys != null)
                            {
                                foreach (var key in dict.Keys)
                                {
                                    allKeys.Add(key);
                                }
                            }
                        }

                        foreach (var key in allKeys)
                        {
                            List<string> targetSkeRow = new List<string>();
                            for (int i = 0; i < 3; i++)
                            {
                                var dict = shelf.shelSlotDatas[i].LayerData;
                                if (dict.ContainsKey(key))
                                {
                                    var item = dict[key];
                                    if (skewerIdMapping.ContainsKey(item.Type))
                                    {
                                        targetSkeRow.Add($"{skewerIdMapping[item.Type]}-0");
                                        finalSkewerDataTypesInOutput.Add(skewerIdMapping[item.Type]);
                                    }
                                    else Debug.LogError("Dont have item");
                                }
                                else
                                {
                                    targetSkeRow.Add("0-0");
                                }
                            }
                            processedSkeForGrill.Add(targetSkeRow);
                        }
                    }
                    else
                    {
                        var dict = shelf?.shelSlotDatas[0]?.LayerData;
                        if (dict != null && dict.Keys != null)
                        {
                            foreach (var key in dict.Keys)
                            {
                                allKeys.Add(key);
                            }
                            foreach (var key in allKeys)
                            {
                                List<string> targetSkeRow = new List<string>();

                                if (dict.ContainsKey(key))
                                {
                                    var item = dict[key];
                                    if (skewerIdMapping.ContainsKey(item.Type))
                                    {
                                        targetSkeRow.Add($"{skewerIdMapping[item.Type]}-0");
                                        finalSkewerDataTypesInOutput.Add(skewerIdMapping[item.Type]);
                                    }
                                    else Debug.LogError("Dont have item");
                                }
                                else
                                {
                                    targetSkeRow.Add("0-0");
                                }
                                processedSkeForGrill.Add(targetSkeRow);
                            }
                        }
                    }

                }
                grillDataForJson.ske = processedSkeForGrill;

                targetLevelData.grillData[targetRowIndex][targetColIndex] = grillDataForJson;
            }

            targetLevelData.skewerDataType = finalSkewerDataTypesInOutput.OrderBy(id => id).ToList();

            string outputJson = JsonConvert.SerializeObject(targetLevelData, Formatting.Indented);

            string fullOutputPath = Path.Combine(outputFolderPath, outputFileName);
            string directory = Path.GetDirectoryName(fullOutputPath);
            if (!Directory.Exists(directory))
            {
                Directory.CreateDirectory(directory);
            }

            File.WriteAllText(fullOutputPath, outputJson);

#if UNITY_EDITOR
            UnityEditor.AssetDatabase.Refresh();
#endif

            Debug.Log($"[LevelDataConverter] Level data converted and saved to: {fullOutputPath}");
        }
        catch (System.Exception ex)
        {
            Debug.LogError($"[LevelDataConverter] An error occurred during conversion: {ex.Message}\nStackTrace:\n{ex.StackTrace}");
        }
    }
}
