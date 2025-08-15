using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TestMouse : MonoBehaviour
{
    public Skewer skewer;

    private void Awake()
    {
        Input.simulateMouseWithTouches = true;
    }

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
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
