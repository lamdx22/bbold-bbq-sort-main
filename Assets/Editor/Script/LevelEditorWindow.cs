using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using UnityEditor;
using UnityEngine;
using Random = UnityEngine.Random;

public class LevelEditorWindow : EditorWindow
{
    private LevelDataJson currentEditingLevel;
    private int currentLevelIDToEdit = 1;
    private int newLevelDiff = 1;
    private int newLevelWidth = 3;
    private int newLevelHeight = 4;
    private int newLevelID = 0;
    private int newLevelTime = 270;
    private int newLevelOrder = 0;
    private List<int> selectedSkewerSpriteIds = new();
    public GrillDataForJson[,] grillGridData;

    // Level In Resource
    private List<int> existingLevelIDs = new List<int>();
    private string[] existingLevelIDStrings;

    private List<Sprite> spSkewer = new List<Sprite>();
    private Sprite selectedSprite;
    private Vector2 scrollPos;

    private const float ButtonSize = 80f;
    private const int Padding = 10;
    private string targetResourcesSubPath = "SpriteData/Skewer";

    // Path
    private const string LEVELS_FOLDER = "Assets/_GAME/Resources/Levels/";

    [MenuItem("Tools/Level Editor")]
    public static void ShowWindow()
    {
        GetWindow<LevelEditorWindow>("Level Editor");
    }

    private void OnEnable()
    {
        ScanExistingLevelFiles();
        LoadSpResource();
    }

    private void LoadSpResource()
    {
        spSkewer.Clear();
        Sprite[] loadedArray = Resources.LoadAll<Sprite>(targetResourcesSubPath);
        spSkewer.AddRange(loadedArray);

        spSkewer = spSkewer.OrderBy(s =>
        {
            if (int.TryParse(s.name, out int id))
                return id;
            return int.MaxValue;
        }).ToList();
        if (spSkewer.Count > 0)
            selectedSprite = spSkewer[0];
        else
            selectedSprite = null;

        Repaint();
    }

    private void OnGUI()
    {
        EditorGUILayout.BeginVertical(EditorStyles.helpBox);
        GUILayout.Label("Load Existing Level or Create New", EditorStyles.boldLabel);

        EditorGUILayout.BeginHorizontal();
        currentLevelIDToEdit = EditorGUILayout.IntField("Level ID:", currentLevelIDToEdit);
        if (GUILayout.Button("Load Level by ID"))
        {
            LoadLevelByID(currentLevelIDToEdit);
            GUI.FocusControl(null); // unfocus intfield after load
        }
        EditorGUILayout.EndHorizontal();

        EditorGUILayout.Space();

        //Load Level Available Resource
        if (existingLevelIDStrings != null && existingLevelIDStrings.Length > 0 && existingLevelIDStrings[0] != "No Levels Found")
        {
            int selectedIndex = -1;
            if (currentEditingLevel != null)
            {
                selectedIndex = System.Array.IndexOf(existingLevelIDStrings, currentEditingLevel.levelID.ToString());
            }

            int newSelectedIndex = EditorGUILayout.Popup("Existing Levels:", selectedIndex, existingLevelIDStrings);

            if (newSelectedIndex != selectedIndex && newSelectedIndex >= 0)
            {
                if (int.TryParse(existingLevelIDStrings[newSelectedIndex], out int levelID))
                {
                    LoadLevelByID(levelID);
                    currentLevelIDToEdit = levelID;
                    GUI.FocusControl(null);
                }
            }
        }
        else
        {
            EditorGUILayout.HelpBox("No existing levels found. Create a new one!", MessageType.Info);
        }
        EditorGUILayout.Space();

        GUILayout.Label("Select Skewer Level: ", EditorStyles.boldLabel);
        EditorGUILayout.Space();
        EditorGUILayout.BeginVertical(EditorStyles.helpBox);
        {
            scrollPos = EditorGUILayout.BeginScrollView(scrollPos, GUILayout.Height(180));
            {
                float viewWidth = EditorGUIUtility.currentViewWidth - EditorStyles.inspectorDefaultMargins.padding.horizontal - 20;
                int itemsPerRow = Mathf.Max(1, Mathf.FloorToInt((viewWidth - Padding) / (ButtonSize + Padding)));

                EditorGUILayout.BeginVertical();
                for (int i = 0; i < spSkewer.Count; i += itemsPerRow)
                {
                    EditorGUILayout.BeginHorizontal();
                    GUILayout.Space(Padding);

                    for (int j = 0; j < itemsPerRow && (i + j) < spSkewer.Count; j++)
                    {
                        Sprite currentSprite = spSkewer[i + j];
                        GUIContent buttonContent = new GUIContent(AssetPreview.GetAssetPreview(currentSprite), currentSprite.name);

                        Rect buttonRect = GUILayoutUtility.GetRect(ButtonSize, ButtonSize, GUILayout.Width(ButtonSize), GUILayout.Height(ButtonSize));

                        int spriteId = 0;
                        bool isNumeric = int.TryParse(currentSprite.name, out spriteId); //Convert name img => int number
                        bool isSelected = isNumeric && selectedSkewerSpriteIds.Contains(spriteId);

                        Color originalColor = GUI.color;

                        if (isSelected) GUI.color = new Color(1.0f, 1.0f, 1.0f, 1.0f);
                        else GUI.color = new Color(0.8f, 0.8f, 0.8f, 1.0f);

                        if (GUI.Button(buttonRect, buttonContent))
                        {
                            selectedSprite = currentSprite; // last sprite click

                            if (isNumeric)
                            {
                                if (selectedSkewerSpriteIds.Contains(spriteId))
                                {
                                    selectedSkewerSpriteIds.Remove(spriteId); // un select
                                }
                                else
                                {
                                    selectedSkewerSpriteIds.Add(spriteId); // select
                                }
                                selectedSkewerSpriteIds.Sort(); // Arrange list skewer selected
                            }
                            Repaint();
                        }
                    }
                    EditorGUILayout.EndHorizontal();
                    GUILayout.Space(Padding);
                }
                EditorGUILayout.EndVertical();
            }
            EditorGUILayout.EndScrollView();

            EditorGUILayout.Space();
            GUILayout.Label("Selected Sprite IDs:", EditorStyles.boldLabel);
            if (selectedSkewerSpriteIds.Count > 0)
            {
                EditorGUILayout.HelpBox(string.Join(", ", selectedSkewerSpriteIds), MessageType.None);
            }
            else
            {
                EditorGUILayout.LabelField("None selected.");
            }

            if (GUILayout.Button("Clear All Selections"))
            {
                selectedSkewerSpriteIds.Clear();
                Repaint();
            }
        }
        EditorGUILayout.EndVertical();

        //Create New Level
        if (currentEditingLevel != null)
        {
            currentEditingLevel.levelID = EditorGUILayout.IntField("Level ID (Current):", currentEditingLevel.levelID);
            currentEditingLevel.diff = EditorGUILayout.IntField("Diff:", currentEditingLevel.diff);
            currentEditingLevel.time = EditorGUILayout.IntField("Time:", currentEditingLevel.time);
            currentEditingLevel.order = EditorGUILayout.IntField("Order:", currentEditingLevel.order);
            currentEditingLevel.width = EditorGUILayout.IntField("Width:", currentEditingLevel.width);
            currentEditingLevel.height = EditorGUILayout.IntField("Height:", currentEditingLevel.height);

            newLevelWidth = currentEditingLevel.width;
            newLevelHeight = currentEditingLevel.height;
            newLevelDiff = currentEditingLevel.diff;
            newLevelTime = currentEditingLevel.time;
            newLevelOrder = currentEditingLevel.order;

            DisplayGrillGrid(currentEditingLevel.width, currentEditingLevel.height);

            EditorGUILayout.Space();
            if (GUILayout.Button("Save Current Level"))
            {
                currentEditingLevel.grillData = ConvertGrillGridToArray(grillGridData);
                //AssignAllSkewerIdsInLevel();
                SaveLevel(currentEditingLevel);
            }
            if (GUILayout.Button("Clear Current Level Data (for new creation)"))
            {
                currentEditingLevel = null;
                grillGridData = null;
                currentLevelIDToEdit = 1;
                newLevelDiff = 1;
                newLevelWidth = 3;
                newLevelHeight = 4;
                newLevelTime = 270;
                newLevelOrder = 0;
                selectedSkewerSpriteIds.Clear();
            }
        }
        else
        {
            EditorGUILayout.HelpBox("No level loaded or selected. Create a new one below.", MessageType.Info);
            DisplayCreateNewLevelSection();
        }
        EditorGUILayout.Space();

        if (GUI.changed)
        {
            EditorUtility.SetDirty(this);
        }
        EditorGUILayout.EndVertical();
    }

    private void AssignAllSkewerIdsInLevel()
    {
        if (currentEditingLevel == null || currentEditingLevel.grillData == null)
        {
            Debug.LogError("[LevelEditor] Current level data is null. Cannot assign skewer IDs.");
            return;
        }

        List<Tuple<int, int, SkewerDataForJson>> allHasSkewerPositions = new();
        int totalHasSkewerCount = 0;

        for (int r = 0; r < grillGridData.GetLength(0); r++)
        {
            for (int c = 0; c < grillGridData.GetLength(1); c++)
            {
                GrillDataForJson grill = grillGridData[r, c];
                if (grill != null && grill.ske != null)
                {
                    List<List<SkewerDataForJson>> tempEditableSkeData = new();
                    foreach (var rowStrings in grill.ske)
                    {
                        List<SkewerDataForJson> tempRow = new();
                        if (rowStrings != null)
                        {
                            foreach (string skewerString in rowStrings)
                            {
                                tempRow.Add(ParseSkewerStringForLevelAssign(skewerString));
                            }
                        }
                        tempEditableSkeData.Add(tempRow);
                    }

                    for (int i = 0; i < tempEditableSkeData.Count; i++)
                    {
                        for (int j = 0; j < tempEditableSkeData[i].Count; j++)
                        {
                            SkewerDataForJson skewer = tempEditableSkeData[i][j];
                            if (skewer != null && skewer.checkPos)
                            {
                                allHasSkewerPositions.Add(Tuple.Create(r, c, skewer));
                                totalHasSkewerCount++;
                            }
                        }
                    }
                }
            }
        }

        if (totalHasSkewerCount == 0)
        {
            Debug.LogError("[LevelEditor] No 'Has Skewer' positions found needing assignment. Skipping auto-assignment.");
            return;
        }

        //if (totalHasSkewerCount % selectedSkewerSpriteIds.Count != 0) return;

        int countPerSkewerType = totalHasSkewerCount / selectedSkewerSpriteIds.Count;
        int skewerRedundant = totalHasSkewerCount % selectedSkewerSpriteIds.Count;
        List<int> idsToDistribute = new();

        if (skewerRedundant != 0)
        {
            List<int> fullList = Enumerable.Range(0, selectedSkewerSpriteIds.Count).ToList();
            System.Random rand = new System.Random();
            List<int> shuffled = fullList.OrderBy(x => rand.Next()).ToList();
            List<int> random = shuffled.Take(skewerRedundant / 3).ToList();
            Debug.Log("check data " + skewerRedundant);
            for (int i = 0; i < random.Count; i++)
            {
                Debug.Log("check data "+ random[i]);
            }
            foreach (int skewerId in selectedSkewerSpriteIds)
            {
                for (int i = 0; i < countPerSkewerType; i++)
                {
                    idsToDistribute.Add(skewerId);
                }
            }

            foreach (int skewerId in random)
            {
                for (int i = 0; i < skewerRedundant / random.Count; i++)
                {
                    idsToDistribute.Add(skewerId);
                }
            }
        }
        else
        {
            foreach (int skewerId in selectedSkewerSpriteIds)
            {
                for (int i = 0; i < countPerSkewerType; i++)
                {
                    idsToDistribute.Add(skewerId);
                }
            }
            idsToDistribute = idsToDistribute.OrderBy(x => Random.value).ToList();
        }
        Dictionary<Tuple<int, int>, List<int>> grillRowIdCounts = new ();
        int currentDistributionIndex = 0;
        for (int r = 0; r < grillGridData.GetLength(0); r++)
        {
            for (int c = 0; c < grillGridData.GetLength(1); c++)
            {
                GrillDataForJson grill = grillGridData[r, c];
                if (grill != null && grill.ske != null)
                {
                    List<List<SkewerDataForJson>> tempGrillSke = new ();
                    foreach (var rowStrList in grill.ske)
                    {
                        List<SkewerDataForJson> tempRow = new ();
                        if (rowStrList != null)
                        {
                            foreach (var str in rowStrList)
                            {
                                tempRow.Add(ParseSkewerStringForLevelAssign(str));
                            }
                        }
                        tempGrillSke.Add(tempRow);
                    }

                    for (int i = 0; i < tempGrillSke.Count; i++) 
                    {
                        List<int> idsInCurrentSkeRow = new (); 

                        foreach (var sd in tempGrillSke[i])
                        {
                            if (sd != null && sd.checkPos) 
                            {
                                idsInCurrentSkeRow.Add(sd.skewerSpriteID);
                            }
                        }

                        for (int j = 0; j < tempGrillSke[i].Count; j++) 
                        {
                            SkewerDataForJson skewer = tempGrillSke[i][j];

                            if (skewer != null && skewer.checkPos) 
                            {
                                bool assigned = false;
                                for (int k = 0; k < idsToDistribute.Count; k++) 
                                {
                                    if (idsToDistribute.Count == 0) break; 

                                    int potentialId = idsToDistribute[currentDistributionIndex % idsToDistribute.Count];

                                    int countOfPotentialIdInRow = idsInCurrentSkeRow.Count(id => id == potentialId);

                                    if (countOfPotentialIdInRow < 2) // Nếu chưa có 2 cái giống hệt
                                    {
                                        skewer.skewerSpriteID = potentialId;
                                        idsInCurrentSkeRow.Add(potentialId); // Thêm vào danh sách tạm thời của hàng SKE
                                        idsToDistribute.RemoveAt(currentDistributionIndex % idsToDistribute.Count); // Xóa khỏi danh sách phân phối
                                        assigned = true;
                                        break;
                                    }
                                    currentDistributionIndex++; // Thử ID tiếp theo trong danh sách phân phối
                                }

                                if (!assigned)
                                {
                                    Debug.LogWarning($"[LevelEditor] Could not satisfy 'no 3 same IDs' constraint for Grill [{r},{c}] SKE Row {i} Col {j}. Assigning a fallback ID.");
                                    // Fallback: Gán ID đầu tiên có sẵn hoặc ID mặc định
                                    if (idsToDistribute.Count > 0)
                                    {
                                        skewer.skewerSpriteID = idsToDistribute[0];
                                        idsToDistribute.RemoveAt(0);
                                    }
                                    else
                                    {
                                        skewer.skewerSpriteID = 1; // Mặc định nếu không còn ID nào
                                    }
                                }
                            }
                        }
                    }
                    // SAU KHI GÁN XONG SKE CHO GRILL NÀY, GÁN NGƯỢC LẠI VÀO GRILL GỐC
                    grill.ske.Clear();
                    foreach (var tempRow in tempGrillSke)
                    {
                        List<string> newRowStrings = new List<string>();
                        foreach (var sd in tempRow)
                        {
                            newRowStrings.Add(FormatSkewerDataToStringForLevelAssign(sd));
                        }
                        grill.ske.Add(newRowStrings);
                    }
                }
            }
        }
    }

    private void DisplayCreateNewLevelSection()
    {
        EditorGUILayout.BeginVertical(EditorStyles.helpBox);
        GUILayout.Label("Create New Level", EditorStyles.boldLabel);
        newLevelID = EditorGUILayout.IntField("New Level ID:", newLevelID);
        newLevelDiff = EditorGUILayout.IntField("Diff:", newLevelDiff);
        newLevelWidth = EditorGUILayout.IntField("Width:", newLevelWidth);
        newLevelHeight = EditorGUILayout.IntField("Height:", newLevelHeight);
        newLevelTime = EditorGUILayout.IntField("Time:", newLevelTime);
        newLevelOrder = EditorGUILayout.IntField("Order:", newLevelOrder);

        DisplayGrillGrid(newLevelWidth, newLevelHeight);
        EditorGUILayout.Space();

        if (GUILayout.Button("Create Level with ID " + newLevelID))
        {
            if (newLevelID <= 0)
            {
                EditorUtility.DisplayDialog("Error", "New Level ID must be greater than 0.", "OK");
                GUIUtility.ExitGUI();
                return;
            }
            CreateNewLevel(newLevelID, newLevelDiff, newLevelWidth, newLevelHeight, newLevelTime, newLevelOrder);
            GUI.FocusControl(null);
        }
        EditorGUILayout.EndVertical();
    }

    private void LoadLevelByID(int levelID)
    {
#if UNITY_EDITOR
        string assetPath = LEVELS_FOLDER + "Level " + levelID + ".json";
        if (File.Exists(assetPath))
        {
            AssetDatabase.ImportAsset(assetPath, ImportAssetOptions.ForceUpdate);
            Debug.Log($"[LevelEditor] Forced re-import of: {assetPath}");
        }
        else
        {
            Debug.LogWarning($"[LevelEditor] JSON file not found for re-import at: {assetPath}");
        }
#endif

        string filePath = "Levels/Level " + levelID;
        TextAsset jsonFile = Resources.Load<TextAsset>(filePath);

        if (jsonFile != null)
        {
            try
            {
                currentEditingLevel = JsonConvert.DeserializeObject<LevelDataJson>(jsonFile.text);
                Debug.Log($"[LevelEditor] Successfully loaded JSON for Level ID: {levelID}");

                newLevelDiff = currentEditingLevel.diff;
                newLevelWidth = currentEditingLevel.width;
                newLevelHeight = currentEditingLevel.height;
                newLevelTime = currentEditingLevel.time;
                newLevelOrder = currentEditingLevel.order;
                selectedSkewerSpriteIds = currentEditingLevel.skewerDataType;
                currentLevelIDToEdit = currentEditingLevel.levelID;

                grillGridData = ConvertArrayToGrillGrid(currentEditingLevel.grillData, currentEditingLevel.width, currentEditingLevel.height);

                Repaint();
            }
            catch (System.Exception ex)
            {
                currentEditingLevel = null;
                grillGridData = null;
                Debug.LogError($"[LevelEditor] EXCEPTION: Error deserializing JSON for Level ID {levelID}: {ex.Message}\nJSON Content:\n{jsonFile.text}\nStackTrace:\n{ex.StackTrace}");
            }
        }
        else
        {
            currentEditingLevel = null;
            grillGridData = null;
            Debug.LogWarning($"Level ID {levelID}.json not found in Resources/Levels/");
        }
    }

    private void CreateNewLevel(int id, int diff, int width, int height, int time, int order)
    {
        if (existingLevelIDs.Contains(id))
        {
            EditorUtility.DisplayDialog("Error", $"Level ID {id} already exists. Please choose a different ID or load and modify it.", "OK");
            return;
        }

        if (grillGridData == null || grillGridData.GetLength(0) != height || grillGridData.GetLength(1) != width)
        {
            InitializeGrillGrid(width, height);
        }

        LevelDataJson newLevel = new LevelDataJson(width, height);
        newLevel.levelID = id;
        newLevel.diff = diff;
        newLevel.time = time;
        newLevel.order = order;
        newLevel.grillData = ConvertGrillGridToArray(grillGridData);
        newLevel.skewerDataType = selectedSkewerSpriteIds;
        currentEditingLevel = newLevel;
        currentLevelIDToEdit = id;

        SaveLevel(newLevel);
        EditorUtility.SetDirty(this);
        Repaint();
        Debug.Log($"New Level created: ID {id}, Width {width}, Height {height}");
    }

    private void DisplayGrillGrid(int width, int height)
    {
        if (grillGridData == null || grillGridData.GetLength(0) != height || grillGridData.GetLength(1) != width)
        {
            InitializeGrillGrid(width, height);
        }

        GUILayout.Label("Grill Layout", EditorStyles.boldLabel);
        EditorGUILayout.BeginVertical(EditorStyles.helpBox);

        for (int i = 0; i < height; i++)
        {
            EditorGUILayout.BeginHorizontal();
            for (int j = 0; j < width; j++)
            {
                GrillDataForJson grill = grillGridData[i, j];

                EditorGUILayout.BeginVertical(EditorStyles.helpBox, GUILayout.Width(150), GUILayout.Height(50));
                GUILayout.Label($"Grill [{i},{j}]", EditorStyles.boldLabel);

                if (GUILayout.Button($"Type: {grill.typeUnlock}", GUILayout.Width(150), GUILayout.Height(50)))
                {
                    GrillEditorWindow.ShowWindow(grill, () =>
                    {
                        EditorUtility.SetDirty(this);
                        Repaint();
                    });
                }
                EditorGUILayout.EndVertical();
            }
            EditorGUILayout.EndHorizontal();
        }
        EditorGUILayout.EndVertical();
    }

    private void InitializeGrillGrid(int width, int height)
    {
        grillGridData = new GrillDataForJson[height, width];
        for (int i = 0; i < height; i++)
        {
            for (int j = 0; j < width; j++)
            {
                grillGridData[i, j] = new GrillDataForJson
                {
                    skeUnl = 0,
                    rowIndex = i,
                    colIndex = j,
                };
            }
        }
        Debug.Log($"Initialized Grill Grid with dimensions: {width}x{height}");
    }

    private void SaveLevel(LevelDataJson levelToSave)
    {
        if (levelToSave == null)
        {
            Debug.LogError("No level to save!");
            return;
        }

        string json = JsonConvert.SerializeObject(levelToSave, Formatting.Indented);
        string path = LEVELS_FOLDER + "Level " + levelToSave.levelID + ".json";

        string directory = Path.GetDirectoryName(path);
        if (!Directory.Exists(directory))
        {
            Directory.CreateDirectory(directory);
        }

        File.WriteAllText(path, json);
        AssetDatabase.Refresh();
        Debug.Log($"Level ID {levelToSave.levelID} saved successfully to: {path}");

        if (!existingLevelIDs.Contains(levelToSave.levelID))
        {
            ScanExistingLevelFiles();
        }
    }

    private void ScanExistingLevelFiles()
    {
        existingLevelIDs.Clear();
        string fullPath = Application.dataPath + "_GAME/Resources/Levels/";

        if (!Directory.Exists(fullPath))
        {
            Directory.CreateDirectory(fullPath);
            AssetDatabase.Refresh();
            Debug.Log($"Created directory: {fullPath}");
        }

        string[] files = Directory.GetFiles(fullPath, "*.json");
        foreach (string file in files)
        {
            string fileName = Path.GetFileNameWithoutExtension(file);
            if (int.TryParse(fileName, out int levelID))
            {
                existingLevelIDs.Add(levelID);
            }
        }
        existingLevelIDs.Sort();

        existingLevelIDStrings = existingLevelIDs.Count > 0
                                ? existingLevelIDs.Select(id => id.ToString()).ToArray()
                                : new string[] { "No Levels Found" };
    }

    private List<List<GrillDataForJson>> ConvertGrillGridToArray(GrillDataForJson[,] grid)
    {
        if (grid == null)
            return new List<List<GrillDataForJson>>();

        List<List<GrillDataForJson>> list = new List<List<GrillDataForJson>>();
        int height = grid.GetLength(0);
        int width = grid.GetLength(1);

        for (int i = 0; i < height; i++)
        {
            List<GrillDataForJson> row = new List<GrillDataForJson>();
            for (int j = 0; j < width; j++)
            {
                if (grid[i, j].typeUnlock == GrillUnLockType.Empty) row.Add(null);
                else row.Add(grid[i, j]);
            }
            list.Add(row);
        }
        return list;
    }

    private GrillDataForJson[,] ConvertArrayToGrillGrid(List<List<GrillDataForJson>> list, int width, int height)
    {
        GrillDataForJson[,] grid = new GrillDataForJson[height, width];

        for (int i = 0; i < height; i++)
        {
            for (int j = 0; j < width; j++)
            {
                GrillDataForJson grillFromJson = (list != null && i < list.Count && list[i] != null && j < list[i].Count) ? list[i][j] : null;

                if (grillFromJson != null)
                {
                    grid[i, j] = grillFromJson;
                    grid[i, j].rowIndex = i;
                    grid[i, j].colIndex = j;

                    if (grid[i, j].ske == null)
                    {
                        grid[i, j].ske = new List<List<string>>();
                    }
                    else
                    {
                        for (int rowSke = 0; rowSke < grid[i, j].ske.Count; rowSke++)
                        {
                            if (grid[i, j].ske[rowSke] == null)
                            {
                                grid[i, j].ske[rowSke] = new List<string>();
                            }
                        }
                    }
                }
                else
                {
                    grid[i, j] = new GrillDataForJson
                    {
                        rowIndex = i,
                        colIndex = j
                    };
                }
            }
        }
        return grid;
    }

    private SkewerDataForJson ParseSkewerStringForLevelAssign(string skewerString)
    {
        SkewerDataForJson result = new SkewerDataForJson();
        if (string.IsNullOrEmpty(skewerString) || skewerString == "0-0")
        {
            result.checkPos = false;
            result.skewerSpriteID = 0;
            result.skeTypeAppear = SkewerTypeAppear.Normal;
            return result;
        }

        string[] parts = skewerString.Split('-');
        if (parts.Length == 2)
        {
            if (int.TryParse(parts[0], out int spriteID) && int.TryParse(parts[1], out int typeAppearInt))
            {
                result.checkPos = true;
                result.skewerSpriteID = spriteID;
                result.skeTypeAppear = (SkewerTypeAppear)typeAppearInt;
                return result;
            }
        }
        Debug.LogWarning($"[LevelEditor] Failed to parse skewer string for assignment: '{skewerString}'. Using default values.");
        result.checkPos = false;
        result.skewerSpriteID = 0;
        result.skeTypeAppear = SkewerTypeAppear.Normal;
        return result;
    }

    private string FormatSkewerDataToStringForLevelAssign(SkewerDataForJson skewerData)
    {
        if (skewerData == null || !skewerData.checkPos)
        {
            return "0-0";
        }
        return $"{skewerData.skewerSpriteID}-{(int)skewerData.skeTypeAppear}";
    }
}
