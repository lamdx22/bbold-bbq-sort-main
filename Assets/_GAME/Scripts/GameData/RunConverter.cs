using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using UnityEngine;

public class RunConverter : MonoBehaviour
{
    public int numberLevelSource = 1;
    public int numberLevelTarget = 1;
    protected string sourceJsonPath;
    protected string outputFileName;

    [Tooltip("Id Skewer Type")]
    public List<int> mySkewerIds = new List<int>();
    public string path = "SpriteData/Skewer";
    public bool runOnStart = false;
    public bool dataFalcon;

    private void Awake()
    {
        if (dataFalcon)
            sourceJsonPath = $"Assets/_GAME/Resources/Levels_Source/Level{numberLevelSource}.json";
        else
            sourceJsonPath = $"Assets/_GAME/Resources/Levels_Source/Level {numberLevelSource}_source.json";
        outputFileName = $"Level {numberLevelTarget}.json";
    }

    void Start()
    {
        if (runOnStart)
        {
            Debug.Log("[RunConverter] Starting JSON conversion...");
            LoadSkewerIdsFromResources();
            if (dataFalcon)
                LevelDataConverter.ConvertLevelDataFromFalcon(sourceJsonPath, outputFileName, mySkewerIds);
            else
                LevelDataConverter.ConvertLevelDataFromFile(sourceJsonPath, outputFileName, mySkewerIds);
            Debug.Log("[RunConverter] JSON conversion finished.");
            runOnStart = false;
        }
    }

    [ContextMenu("Load Skewer IDs from Resources")]
    void LoadSkewerIdsFromResources()
    {
#if UNITY_EDITOR
        mySkewerIds.Clear();

        Sprite[] skewerSprites = Resources.LoadAll<Sprite>(path);

        if (skewerSprites == null || skewerSprites.Length == 0)
        {
            Debug.LogWarning($"[RunConverter] No sprites found in Resources folder: '{path}'. Please check the path and ensure sprites are there.");
            return;
        }

        List<int> loadedIds = new List<int>();
        foreach (Sprite sprite in skewerSprites)
        {
            string fileName = Path.GetFileNameWithoutExtension(sprite.name);
            if (int.TryParse(fileName, out int id))
            {
                loadedIds.Add(id);
            }
            else
            {
                Debug.LogWarning($"[RunConverter] Could not parse Skewer ID from sprite name: '{sprite.name}'. Skipping.");
            }
        }

        mySkewerIds = loadedIds.Distinct().OrderBy(id => id).ToList();

        Debug.Log($"[RunConverter] Loaded {mySkewerIds.Count} Skewer IDs from '{path}' in Resources.");
#else
        Debug.LogWarning("[RunConverter] 'Load Skewer IDs from Resources' can only be run in the Unity Editor.");
#endif
    }

    [ContextMenu("Run Conversion Now")]
    void RunConversionManually()
    {
        Debug.Log("[RunConverter] Manually starting JSON conversion...");
        LevelDataConverter.ConvertLevelDataFromFile(sourceJsonPath, outputFileName, mySkewerIds);
        Debug.Log("[RunConverter] JSON conversion finished.");
    }
}
