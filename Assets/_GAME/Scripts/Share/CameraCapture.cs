using UnityEngine;
using UnityEngine.UI;

public class CameraCapture : MonoBehaviour
{
    public Camera sourceCamera; // Kéo Camera bạn muốn chụp ảnh vào đây (ví dụ: Main Camera)
    public SpriteRenderer targetSpriteRenderer; // Kéo Sprite Renderer bạn muốn gán ảnh vào đây
    public Image targetSpriteRenderer2;
    private Texture2D capturedTexture;
    private RenderTexture tempRenderTexture;

    void Start()
    {
        if (sourceCamera == null)
        {
            sourceCamera = Camera.main;
        }

        tempRenderTexture = new RenderTexture(Screen.width, Screen.height, 24, RenderTextureFormat.ARGB32);

        capturedTexture = new Texture2D(Screen.width, Screen.height, TextureFormat.ARGB32, false);
        CaptureCameraImage();
    }
    //private void OnEnable()
    //{
    //    if (sourceCamera == null)
    //    {
    //        sourceCamera = Camera.main; // Mặc định là Main Camera nếu chưa được gán
    //    }

    //    // Khởi tạo RenderTexture với kích thước của màn hình hoặc theo ý bạn
    //    // 24 bit cho depth buffer là phổ biến, 'false' nghĩa là không có mipmaps
    //    tempRenderTexture = new RenderTexture(Screen.width, Screen.height, 24, RenderTextureFormat.ARGB32);

    //    // Khởi tạo Texture2D sẽ chứa hình ảnh đã chụp
    //    // Sử dụng format ARGB32 để có kênh alpha
    //    capturedTexture = new Texture2D(Screen.width, Screen.height, TextureFormat.ARGB32, false);

    //    // Gọi hàm chụp ảnh ngay khi bắt đầu (hoặc khi cần)
    //    CaptureCameraImage();
    //}
    public void CaptureCameraImage()
    {
        if (sourceCamera == null || tempRenderTexture == null || capturedTexture == null)
        {
            Debug.LogError("Thiếu cấu hình camera hoặc texture!");
            return;
        }

        // 1. Lưu trữ targetTexture gốc của camera
        RenderTexture originalTargetTexture = sourceCamera.targetTexture;

        // 2. Gán RenderTexture tạm thời làm target của camera
        sourceCamera.targetTexture = tempRenderTexture;

        // 3. Buộc camera render một khung hình vào RenderTexture tạm thời
        sourceCamera.Render();

        // 4. Đọc pixel từ RenderTexture vào Texture2D
        RenderTexture.active = tempRenderTexture; // Kích hoạt RenderTexture để đọc
        capturedTexture.ReadPixels(new Rect(0, 0, tempRenderTexture.width, tempRenderTexture.height), 0, 0);
        capturedTexture.Apply(); // Áp dụng các thay đổi pixel lên Texture2D

        RenderTexture.active = null; // Hủy kích hoạt RenderTexture

        // 5. Khôi phục lại targetTexture ban đầu của camera
        sourceCamera.targetTexture = originalTargetTexture;

        Debug.Log("Đã chụp hình ảnh camera vào Texture2D!");

        // 6. Gán Texture2D đã chụp vào Sprite Renderer (nếu có)
        if (targetSpriteRenderer != null)
        {
            // Tạo một Sprite mới từ Texture2D đã chụp
            Sprite newSprite = Sprite.Create(capturedTexture, new Rect(0, 0, capturedTexture.width, capturedTexture.height), new Vector2(0.5f, 0.5f));
            targetSpriteRenderer.sprite = newSprite;
            Debug.Log("Đã gán hình ảnh camera vào Sprite Renderer.");
        }
    }

    void Update()
    {
        // Ví dụ: Nhấn phím Space để chụp lại ảnh
        if (Input.GetKeyDown(KeyCode.A))
        {
            CaptureCameraImage();
        }
    }

    private void OnDisable()
    {
        // Giải phóng RenderTexture khi không cần nữa
        if (tempRenderTexture != null)
        {
            tempRenderTexture.Release();
            Destroy(tempRenderTexture);
            tempRenderTexture = null;
        }
        if (capturedTexture != null)
        {
            Destroy(capturedTexture);
            capturedTexture = null;
        }
    }
    void OnDestroy()
    {
        // Rất quan trọng: Giải phóng tài nguyên khi không dùng nữa
        if (tempRenderTexture != null)
        {
            tempRenderTexture.Release();
            Destroy(tempRenderTexture);
        }
        if (capturedTexture != null)
        {
            Destroy(capturedTexture);
        }
    }
}
