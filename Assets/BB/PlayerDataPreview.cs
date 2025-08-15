using System;
using System.IO;
using UnityEngine;
using System.Collections;
using System.Collections.Generic;

#if UNITY_EDITOR
using UnityEditor;
#endif

public class PlayerDataPreview : MonoBehaviour
{
#if UNITY_EDITOR
    public PlayerData playerData;

    private void Start()
    {
        playerData = PlayerData.current;
    }

    public void Save()
    {
        string filePath = PlayerData.GetFilePath();
        string playerDataJson = JsonUtility.ToJson(playerData);
        File.WriteAllText(filePath, playerDataJson);
    }

    public void Load()
    {
        string filePath = PlayerData.GetFilePath();

        FileStream fileStream = File.Open(filePath, FileMode.OpenOrCreate);
        StreamReader sr = new StreamReader(fileStream);
        string playerDataJson = sr.ReadToEnd();
        sr.Close();
        fileStream.Close();

        playerData = JsonUtility.FromJson<PlayerData>(playerDataJson);

        if (playerData == null)
        {
            playerData = new PlayerData();
            playerData.localFirstActiveTime = System.DateTime.Now.ToString();
            playerData.enterGameTimeCount = 0;
            playerData.coinCount = 0;
            playerData.gemCount = 0;
        }
    }

    public int level;

    public void UpdateLevel()
    {
        playerData.level = level;
        playerData.fakeIndexLevel = level;
        Save();
    }
    public void ClearData()
    {
        playerData = new PlayerData();
        //playerData.localFirstActiveTime = System.DateTime.Now.ToString();
        //playerData.enterGameTimeCount = 0;
        //playerData.coinCount = 0;
        //playerData.gemCount = 0;
        Save();
    }
    //public PopupType popupType;

    //public void TestPopup()
    //{
    //    Popup.PopupSystem.GetOpenBuilder()
    //        .SetType(popupType)
    //        .Open();
    //}

    public HashSet<int> Tutor;
#endif
}

#if UNITY_EDITOR
[CustomEditor(typeof(PlayerDataPreview))]
public class PlayerDataPreviewEditor : Editor
{
    PlayerDataPreview playerDataPreview;

    void OnEnable()
    {
        playerDataPreview = target as PlayerDataPreview;
    }

    public override void OnInspectorGUI()
    {
        base.OnInspectorGUI();

        //if (GUILayout.Button("Load Data"))
        //{
        //    playerDataPreview.Load();
        //}

        //if (GUILayout.Button("Save Data"))
        //{
        //    playerDataPreview.Save();
        //}
        //if (GUILayout.Button("Clear Data :)"))
        //{
        //    playerDataPreview.ClearData();
        //}
        if (GUILayout.Button("Update Level"))
        {
            playerDataPreview.UpdateLevel();
        }

        //if (GUILayout.Button("Open Popup"))
        //{
        //    playerDataPreview.TestPopup();
        //}
    }
}
#endif