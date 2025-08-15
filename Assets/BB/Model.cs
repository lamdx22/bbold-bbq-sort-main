using Newtonsoft.Json;
using System;
using System.IO;
using UnityEngine;

public class Model : Singleton<Model>
{
    private PlayerData playerData;

    public bool isLoaded = false;

    public Model()
    {
    }

    public void Reset()
    {
        playerData = new PlayerData();
        var filePath = PlayerData.GetFilePath();
        var playerDataJson = JsonUtility.ToJson(playerData);
        File.WriteAllText(filePath, playerDataJson);
    }

    public void Save()
    {
        if (playerData == null || !isLoaded) return;
        playerData.localLastActiveTime = DateTime.Now.ToString();
        var filePath = PlayerData.GetFilePath();
        var playerDataJson = JsonUtility.ToJson(playerData);
        File.WriteAllText(filePath, playerDataJson);
    }

    public void Load()
    {
#if UNITY_WEBGL && !UNITY_EDITOR
        if (PlayerPrefs.HasKey("PlayerData"))
        {
            string playerDataJson = PlayerPrefs.GetString("PlayerData");
            playerData = JsonConvert.DeserializeObject<PlayerData>(playerDataJson);
        }
#else
        var filePath = PlayerData.GetFilePath();
        if (System.IO.File.Exists(filePath))
        {
            string playerDataJson = System.IO.File.ReadAllText(filePath);
            playerData = JsonConvert.DeserializeObject<PlayerData>(playerDataJson);
        }
#endif
        //var filePath = PlayerData.GetFilePath();
        //var fileStream = File.Open(filePath, FileMode.OpenOrCreate);
        //var sr = new StreamReader(fileStream);
        //var playerDataJson = sr.ReadToEnd();
        //sr.Close();
        //fileStream.Close();

        //playerData = JsonUtility.FromJson<PlayerData>(playerDataJson);
        if (playerData != null && string.IsNullOrEmpty(playerData.localFirstActiveTime))
        {
            playerData.localFirstActiveTime = DateTime.Now.ToString();
            playerData.localLastActiveTime = playerData.localFirstActiveTime;
        }

        if (playerData == null)
        {
            playerData = new PlayerData();
            playerData.localFirstActiveTime = DateTime.Now.ToString();
            playerData.localLastActiveTime = playerData.localFirstActiveTime;
            playerData.enterGameTimeCount = 0;
            playerData.coinCount = 0;
            playerData.gemCount = 0;
            playerData.level = 1;
        }

        isLoaded = true;
        PlayerData.current = playerData;
    }

    public void ClearData()
    {
        var filePath = PlayerData.GetFilePath();
        var playerDataJson = string.Empty;
        File.WriteAllText(filePath, playerDataJson);
    }
}