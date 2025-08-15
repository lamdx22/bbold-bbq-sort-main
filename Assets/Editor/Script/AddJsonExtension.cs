using UnityEngine;
using UnityEditor;
using System.IO;

public class AddJsonExtension
{
    [MenuItem("Tools/Add .json Extension To Files")]
    static void AddJsonToFiles()
    {
        string folderPath = "Assets/_GAME/LevelJsonBBQ-Sort"; 
        if (!Directory.Exists(folderPath))
        {
            Debug.LogError($"Folder not found: {folderPath}");
            return;
        }

        string[] files = Directory.GetFiles(folderPath);
        int count = 0;

        foreach (var filePath in files)
        {
            if (filePath.EndsWith(".meta")) continue;

            if (!filePath.EndsWith(".json"))
            {
                string newPath = filePath + ".json";
                if (!File.Exists(newPath))
                {
                    File.Move(filePath, newPath);
                    count++;
                    Debug.Log($"Renamed: {Path.GetFileName(filePath)} → {Path.GetFileName(newPath)}");
                }
                else
                {
                    Debug.LogWarning($"File exists: {newPath}");
                }
            }
        }

        AssetDatabase.Refresh();
        Debug.Log($"Completed. Renamed {count} files.");
    }
}
