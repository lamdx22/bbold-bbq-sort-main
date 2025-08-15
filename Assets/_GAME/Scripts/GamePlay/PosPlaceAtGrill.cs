using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[Serializable]
public class PosPlaceAtGrill: PosPlace
{
    public Grill grill;
    //public Transform pos;
    //public Skewer skewerAtPos;

    public void Init(Grill grill)
    {
        //this.grill = grill;
        //if(skewerAtPos != null)
        //{
        //    skewerAtPos.Init1(grill.levelCtr,this);
        //}
    }
}
[Serializable] 
public class PosPlace
{
    public Transform pos;
    public Skewer skewerAtPos;
}
