using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PopUp : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    public void ShowUp()
    {
        gameObject.SetActive(true);
        Luna.Unity.LifeCycle.GameEnded();
    }

    public void OnGoToStore()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
