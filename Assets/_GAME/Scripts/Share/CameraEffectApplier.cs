using UnityEngine;
using UnityEngine.UI;

[RequireComponent(typeof(Camera))]
public class CameraEffectApplier : MonoBehaviour
{
    public Material effectMaterial;
    public RenderTexture renderTexture;
    public RawImage imgShockWave;

    //void Start()
    //{
    //    Camera cam = GetComponent<Camera>();

    //    Tạo RenderTexture
    //    renderTexture = new RenderTexture(Screen.width, Screen.height, 24);
    //    cam.targetTexture = renderTexture;
    //    imgShockWave.texture = renderTexture;
    //}
    private void OnEnable()
    {
        Camera cam = GetComponent<Camera>();

        // Tạo RenderTexture
        renderTexture = new RenderTexture(Screen.width, Screen.height, 24);
        cam.targetTexture = renderTexture;
        imgShockWave.texture = renderTexture;
    }
    //void OnRenderImage(RenderTexture source, RenderTexture destination)
    //{
    //    if (effectMaterial != null)
    //    {
    //        // Truyền RenderTexture vào shader
    //        effectMaterial.SetTexture("_MainTex", source);
    //       // Graphics.Blit(source, destination, effectMaterial);
    //    }
    //    else
    //    {
    //        Graphics.Blit(source, destination);
    //    }
    //}

    //void OnDestroy()
    //{
    //    // Xóa RenderTexture khi không cần thiết
    //    if (renderTexture != null)
    //    {
    //        renderTexture.Release();
    //    }
    //}
}

