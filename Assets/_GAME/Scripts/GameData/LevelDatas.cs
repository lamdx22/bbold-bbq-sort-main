using System;
using System.Collections.Generic;
using UnityEngine;

[Serializable]
public class LevelDatas
{
    public List<LevelData> levelDatas;
}

[Serializable]
public class LevelData
{
    public int levelID;
    public int diff;
    public int time;
    public int order;
    public int width;
    public int height;
    public List<int> skewerDataType;
    public List<GrillData> grills;

    public LevelData() { }
}
