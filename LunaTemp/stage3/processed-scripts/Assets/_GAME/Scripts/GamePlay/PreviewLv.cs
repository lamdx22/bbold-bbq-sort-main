using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using static UnityEngine.GraphicsBuffer;

public class PreviewLv : MonoBehaviour
{
    public LevelCtr level;
    public void SpawnLv()
    {
       // level.Init();
    }

}
#if UNITY_EDITOR
[CustomEditor(typeof(PreviewLv))]
public class PreviewLvEditor : Editor
{
    public override void OnInspectorGUI()
    {
        base.OnInspectorGUI();
        PreviewLv lvSetUp = (PreviewLv)target;
        if (GUILayout.Button("PreviewLv"))
        {
            lvSetUp.SpawnLv();
        }

    }
}
#endif
