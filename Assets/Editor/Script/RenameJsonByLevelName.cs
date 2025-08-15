using UnityEngine;
using UnityEditor;
using System.IO;
using System.Text.RegularExpressions;

public class RenameJsonByLevelName 
{
    [MenuItem("Tools/Rename JSON Files By _name")]
    static void RenameJsonFiles()
    {
        string rootFolder = "Assets/LevelJsons";
        if (!Directory.Exists(rootFolder))
        {
            Debug.LogError($"Folder not found: {rootFolder}");
            return;
        }

        string[] jsonFiles = Directory.GetFiles(rootFolder, "*.json", SearchOption.AllDirectories);
        Regex levelNameRegex = new Regex("\"level_(\\d+)\"", RegexOptions.Compiled);

        int renamed = 0, deleted = 0;

        foreach (string filePath in jsonFiles)
        {
            string content = File.ReadAllText(filePath);
            Match match = levelNameRegex.Match(content);

            if (match.Success)
            {
                string levelNumber = match.Groups[1].Value;
                string directory = Path.GetDirectoryName(filePath);
                string newFilePath = Path.Combine(directory, $"Level {levelNumber}_source.json");

                if (filePath == newFilePath)
                {
                    Debug.Log($"Already named correctly: {filePath}");
                    continue;
                }

                if (File.Exists(newFilePath))
                {
                    Debug.LogWarning($"File already exists: {newFilePath}, skipping rename.");
                    continue;
                }

                File.Move(filePath, newFilePath);
                renamed++;
                Debug.Log($"Renamed: {Path.GetFileName(filePath)} → _Level {levelNumber}.json");
            }
            else
            {
                File.Delete(filePath);
                deleted++;
                Debug.LogWarning($"Deleted (no level_xxx): {filePath}");
            }
        }

        AssetDatabase.Refresh();
        Debug.Log($"Process completed. Renamed: {renamed}, Deleted: {deleted}");
    }
}
