using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;

public class JsonLevelProcessor : MonoBehaviour
{
    public List<TextAsset> jsonFiles = new List<TextAsset>();
    public int startLevelID = 0;
    public int endLevelID = 0;
    public bool isStartRename;

    private void Start()
    {
        if (!isStartRename) return;
        ProcessJsonFiles();
    }

    public void ProcessJsonFiles()
    {
        if (jsonFiles == null || jsonFiles.Count == 0) return;
        if (endLevelID < startLevelID) return;
        if (jsonFiles.Count != (endLevelID - startLevelID + 1)) return;

        int currentLevelID = startLevelID;

        foreach (TextAsset jsonAsset in jsonFiles)
        {
            if (jsonAsset == null) continue;
            string assetPath = UnityEditor.AssetDatabase.GetAssetPath(jsonAsset);
            string fullPath = Application.dataPath.Replace("Assets", "") + assetPath;
            string jsonContent = File.ReadAllText(fullPath);

            try
            {
                LevelData levelData = JsonUtility.FromJson<LevelData>(jsonContent);
                levelData.levelID = currentLevelID;
                jsonContent = JsonUtility.ToJson(levelData, true);


                File.WriteAllText(fullPath, jsonContent);

                string oldFileName = Path.GetFileNameWithoutExtension(assetPath);
                string newFileName = "Level " + currentLevelID;

                string newAssetPath = UnityEditor.AssetDatabase.GenerateUniqueAssetPath(Path.Combine(Path.GetDirectoryName(assetPath), newFileName + ".json"));

                UnityEditor.AssetDatabase.RenameAsset(assetPath, newFileName);

                Debug.Log($"Processed: {oldFileName}.json -> {newFileName}.json, Level ID: {currentLevelID}");

                currentLevelID++;
            }
            catch (System.Exception e)
            {
                Debug.LogError($"Error processing {jsonAsset.name}.json: {e.Message}");
            }
        }
        UnityEditor.AssetDatabase.Refresh();
        Debug.Log("JSON files processed successfully!");
    }
}
