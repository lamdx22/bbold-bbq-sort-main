using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ShockWaveEffectFullScreen : MonoBehaviour
{
    public Camera sourceCam;
    public RawImage imgEffect;
    public Material matShockEffect;
    public RenderTexture renderTexture;

    private void OnEnable()
    {
        if (!sourceCam || !imgEffect) return;
        renderTexture = new RenderTexture(Screen.width, Screen.height, 24);
        sourceCam.targetTexture = renderTexture;
        imgEffect.texture = renderTexture;
        imgEffect.material = matShockEffect;
        matShockEffect.SetFloat("Speed", 0);
        matShockEffect.SetFloat("Speed", 1f);
    }
    private void OnDisable()
    {
        sourceCam.targetTexture = null;
    }
}
