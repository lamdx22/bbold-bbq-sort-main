using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SkewerMouseEvent : MonoBehaviour
{
    public Skewer skewer;

    private void Awake()
    {
    }

    // Start is called before the first frame update
    void Start()
    {
        
    }


    private void OnMouseDown()
    {
        Debug.Log("OnMouseDown");
        skewer.MouseDown();
    }

    private void OnMouseUp()
    {
        //Debug.Log("OnMouseUp");
        skewer.MouseUp();
    }
}
