using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GrillMouseEvent : MonoBehaviour
{
    public Grill grill;

    private void Awake()
    {
    }


    private void OnMouseDown()
    {
        Debug.Log("OnMouseDown");
        grill.MouseDown();
    }

    private void OnMouseUp()
    {
        //Debug.Log("OnMouseUp");
        grill.MouseUp();
    }
}
