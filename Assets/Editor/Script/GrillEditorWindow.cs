using UnityEditor;
using UnityEngine;
using System.Collections.Generic;
using System.Linq;

public class GrillEditorWindow : EditorWindow
{
    private GrillDataForJson _currentGrillData;
    private System.Action _onSaveCallback;
    private Vector2 scrollPos;
    private List<List<SkewerDataForJson>> _editableSkeData;

    public static void ShowWindow(GrillDataForJson grillData, System.Action onSave)
    {
        GrillEditorWindow window = GetWindow<GrillEditorWindow>("Edit Grill Data");
        window._currentGrillData = grillData;
        window._onSaveCallback = onSave;
        window.minSize = new Vector2(350, 650);
        window.ConvertStringsToSkewerData();
    }

    private void ConvertStringsToSkewerData()
    {
        _editableSkeData = new List<List<SkewerDataForJson>>();
        if (_currentGrillData == null || _currentGrillData.ske == null)
        {
            Debug.LogWarning("GrillData or its SKE data is null when converting strings to SkewerData. Initializing with empty editable data.");
            return;
        }

        foreach (var rowStrings in _currentGrillData.ske)
        {
            List<SkewerDataForJson> newRow = new List<SkewerDataForJson>();
            if (rowStrings != null)
            {
                foreach (string skewerString in rowStrings)
                {
                    newRow.Add(ParseSkewerString(skewerString));
                }
            }
            _editableSkeData.Add(newRow);
        }
    }

    private void ConvertSkewerDataToStrings()
    {
        _currentGrillData.ske.Clear(); // Clear existing string data
        if (_editableSkeData != null)
        {
            foreach (var rowSkewerData in _editableSkeData)
            {
                List<string> newRowStrings = new List<string>();
                if (rowSkewerData != null)
                {
                    foreach (SkewerDataForJson skewerData in rowSkewerData)
                    {
                        newRowStrings.Add(FormatSkewerDataToString(skewerData));
                    }
                }
                _currentGrillData.ske.Add(newRowStrings);
            }
        }
    }

    private SkewerDataForJson ParseSkewerString(string skewerString)
    {
        SkewerDataForJson result = new SkewerDataForJson(); // Default values
        if (string.IsNullOrEmpty(skewerString) || skewerString == "0-0")
        {
            result.checkPos = false; // "0-0" or empty means no skewer
            result.skewerSpriteID = 0; // Default ID when no skewer
            result.skeTypeAppear = SkewerTypeAppear.Normal;
            return result;
        }

        string[] parts = skewerString.Split('-');
        if (parts.Length == 2)
        {
            if (int.TryParse(parts[0], out int spriteID) && int.TryParse(parts[1], out int typeAppearInt))
            {
                result.checkPos = true; // If parsed successfully, assume has skewer
                result.skewerSpriteID = spriteID;
                result.skeTypeAppear = (SkewerTypeAppear)typeAppearInt;
                return result;
            }
        }
        // Fallback for invalid format or other cases
        result.checkPos = false;
        result.skewerSpriteID = 0;
        result.skeTypeAppear = SkewerTypeAppear.Normal;
        return result;
    }

    // --- Helper to format SkewerDataForJson into string "ID-Type" ---
    private string FormatSkewerDataToString(SkewerDataForJson skewerData)
    {
        // If skewerData is null or checkPos is false, format as "0-0"
        if (skewerData == null || !skewerData.checkPos)
        {
            return "0-0";
        }
        // Format as "skewerSpriteID-skeTypeAppear"
        return $"{skewerData.skewerSpriteID}-{(int)skewerData.skeTypeAppear}";
    }

    private void OnGUI()
    {
        if (_currentGrillData == null)
        {
            EditorGUILayout.HelpBox("No Grill Data selected.", MessageType.Warning);
            return;
        }
        EditorGUILayout.Space();

        EditorGUILayout.LabelField("Row Index:", _currentGrillData.rowIndex.ToString());
        EditorGUILayout.LabelField("Col Index:", _currentGrillData.colIndex.ToString());
        EditorGUILayout.Space();

        EditorGUI.BeginChangeCheck();
        bool checkSaleGrill = EditorGUILayout.Toggle("Is Sale Grill", _currentGrillData.isSaleGrill);
        if (checkSaleGrill != _currentGrillData.isSaleGrill)
            _currentGrillData.isSaleGrill = checkSaleGrill;

        GrillUnLockType newTypeUnlock = (GrillUnLockType)EditorGUILayout.EnumPopup("TypeLock:", _currentGrillData.typeUnlock);
        if (newTypeUnlock != _currentGrillData.typeUnlock)
        {
            _currentGrillData.typeUnlock = newTypeUnlock;
        }

        GrillType newType = (GrillType)EditorGUILayout.EnumPopup("TypeGrill:", _currentGrillData.grillType);
        if (newType != _currentGrillData.grillType)
        {
            _currentGrillData.grillType = newType;
        }

        EditorGUI.BeginDisabledGroup(
            _currentGrillData.typeUnlock != GrillUnLockType.Free &&
            _currentGrillData.typeUnlock != GrillUnLockType.LockedBySkewer);
        {
            int newNumSke = EditorGUILayout.IntField("Number Ske In Grill:", _currentGrillData.numSke);
            _currentGrillData.numSke = newNumSke;
        }
        EditorGUI.EndDisabledGroup();

        EditorGUI.BeginDisabledGroup(_currentGrillData.typeUnlock != GrillUnLockType.LockedBySkewer);
        {
            _currentGrillData.skeUnl = EditorGUILayout.IntField("Ske Unlocked:", _currentGrillData.skeUnl);
        }
        EditorGUI.EndDisabledGroup();

        EditorGUI.BeginDisabledGroup(_currentGrillData.typeUnlock != GrillUnLockType.LockedByNumber);
        {
           int newNumSkeUnlock  = EditorGUILayout.IntField("NumOfSke Unlocked:", _currentGrillData.numSkeUnlock);
            _currentGrillData.numSkeUnlock = newNumSkeUnlock;
        }
        EditorGUI.EndDisabledGroup();

        EditorGUILayout.Space();
        GUILayout.Label("Skewer Data: ", EditorStyles.boldLabel);
        EditorGUILayout.BeginVertical(EditorStyles.helpBox);

        // init current grilldata
        if (_currentGrillData.ske == null)
        {
            ConvertStringsToSkewerData();
        }

        // condition
        EditorGUI.BeginDisabledGroup(
            _currentGrillData.typeUnlock < 0 ||
            _currentGrillData.typeUnlock == GrillUnLockType.LockedByAds);
        {
            if (GUILayout.Button("Add New SKE Row"))
            {
                _editableSkeData.Add(new List<SkewerDataForJson> { new SkewerDataForJson() });
            }
            scrollPos = EditorGUILayout.BeginScrollView(scrollPos, GUILayout.MinHeight(500));
            {
                for (int i = 0; i < _editableSkeData.Count; i++)
                {
                    EditorGUILayout.BeginHorizontal();
                    GUILayout.Label($"Row {i}:", GUILayout.Width(100));

                    if (_editableSkeData[i] == null)
                    {
                        _editableSkeData[i] = new List<SkewerDataForJson>();
                    }

                    if (GUILayout.Button("Add Col", GUILayout.Width(60)))
                    {
                        _editableSkeData[i].Add(new SkewerDataForJson());
                    }

                    for (int j = 0; j < _editableSkeData[i].Count; j++)
                    {
                        SkewerDataForJson currentSkewerData = _editableSkeData[i][j];
                        if (currentSkewerData == null)
                        {
                            currentSkewerData = new SkewerDataForJson();
                            _editableSkeData[i][j] = currentSkewerData;
                        }

                        EditorGUILayout.BeginVertical(EditorStyles.helpBox, GUILayout.Width(150));
                        GUILayout.Label($"Col {j}:", EditorStyles.miniLabel);

                        // checkPos (Checkbox)
                        bool newCheckPos = EditorGUILayout.Toggle("Has Skewer:", currentSkewerData.checkPos);
                        if (newCheckPos != currentSkewerData.checkPos)
                        {
                            currentSkewerData.checkPos = newCheckPos;
                            if (newCheckPos)
                            {
                                if (currentSkewerData.skewerSpriteID == 0)
                                    currentSkewerData.skewerSpriteID = 1;
                            }
                            else
                            {
                                currentSkewerData.skewerSpriteID = 0;
                                currentSkewerData.skeTypeAppear = SkewerTypeAppear.Normal;
                            }
                        }

                        // ---  DisabledGroup Type, ID If checkPos is false ---
                        EditorGUI.BeginDisabledGroup(!currentSkewerData.checkPos);
                        {
                            // skeTypeAppear (EnumPopup)
                            SkewerTypeAppear newSkeTypeAppear = (SkewerTypeAppear)EditorGUILayout.EnumPopup("Type:", currentSkewerData.skeTypeAppear);
                            if (newSkeTypeAppear != currentSkewerData.skeTypeAppear)
                            {
                                currentSkewerData.skeTypeAppear = newSkeTypeAppear;
                            }
                            int newId = EditorGUILayout.IntField("ID:", currentSkewerData.skewerSpriteID);
                            currentSkewerData.skewerSpriteID = newId;
                            //EditorGUI.BeginDisabledGroup(true);
                            //{
                            //EditorGUILayout.LabelField("ID:", currentSkewerData.skewerSpriteID.ToString());
                            //    //EditorGUILayout.IntField("ID:", currentSkewerData.skewerSpriteID);
                            //}
                            //EditorGUI.EndDisabledGroup();
                        }
                        EditorGUI.EndDisabledGroup();

                        if (GUILayout.Button("X", GUILayout.Width(20)))
                        {
                            RemoveSkeColumn(i, j);
                            GUIUtility.ExitGUI();
                        }
                        EditorGUILayout.EndVertical();
                    }

                    if (GUILayout.Button("Remove Row", GUILayout.Width(90)))
                    {
                        RemoveSkeRow(i);
                        GUIUtility.ExitGUI();
                    }
                    EditorGUILayout.EndHorizontal();
                }
            }
            EditorGUILayout.EndScrollView();
        }
        EditorGUI.EndDisabledGroup();

        EditorGUILayout.EndVertical();

        EditorGUILayout.Space();

        if (GUILayout.Button("Apply Changes and Close"))
        {
            ConvertSkewerDataToStrings();
            _onSaveCallback?.Invoke();
            Close();
        }
    }

    private void RemoveSkeRow(int rowIndex)
    {
        if (rowIndex >= 0 && rowIndex < _editableSkeData.Count)
        {
            _editableSkeData.RemoveAt(rowIndex);
            EditorUtility.SetDirty(this);
        }
    }

    private void RemoveSkeColumn(int rowIndex, int colIndex)
    {
        if (rowIndex >= 0 && rowIndex < _editableSkeData.Count &&
            colIndex >= 0 && colIndex < _editableSkeData[rowIndex].Count)
        {
            _editableSkeData[rowIndex].RemoveAt(colIndex);
            EditorUtility.SetDirty(this);
        }
    }
}