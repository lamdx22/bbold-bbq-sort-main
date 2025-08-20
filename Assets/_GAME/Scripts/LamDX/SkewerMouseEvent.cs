using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

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
        // Nếu đang click vào UI -> không xử lý collider dưới
        //if (EventSystem.current != null && EventSystem.current.IsPointerOverGameObject())
        //{
        //    //Debug.Log("Click lên UI -> block collider bên dưới");
        //    return;
        //}
        //Debug.Log("OnMouseDown");
        if (UIManager.Instance.IsShowPopUp()) return;
        skewer.MouseDown();
    }

    private void OnMouseUp()
    {
        //Debug.Log("OnMouseUp");
        // Nếu đang click vào UI -> không xử lý collider dưới
        if (UIManager.Instance.IsShowPopUp()) return;

        skewer.MouseUp();
    }
}
