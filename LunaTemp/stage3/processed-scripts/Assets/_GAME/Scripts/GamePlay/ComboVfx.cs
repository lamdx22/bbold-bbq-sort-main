using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ComboVfx : MonoBehaviour
{
    public int comboCount = 0;
    public Text comboText;
    public Slider comboSlider;
    public Image fillSlider;
    public GameObject flameRed, flameViolet, flameBlue;
    public List<GameObject> prefabTextVfxs;
    public Transform parentSpawnVfx;
    public Vector3 offsetSpawnTextVfx = new Vector3(0,0f,0);
    public LevelCtr lvCtr;
    public GameObject noticeNewMaxComboVfx;
    public Transform posSpawnNotice;

    public float timeCount = 0;
    private Coroutine upComboCrt;

    private void OnEnable()
    {
        comboCount = 0;
        comboText.color = Color.white;
        comboText.transform.localScale = Vector3.one;
        flameViolet.SetActive(false);
        flameBlue.SetActive(false);
        flameRed.SetActive(false);
    }
    public void UpCombo([Bridge.Ref] Vector2 posCompleted = default(UnityEngine.Vector2))
    {
        float maxTimeCount = 10f;
        gameObject.SetActive(true);
        if (upComboCrt != null)
        {
            StopCoroutine(upComboCrt);
            upComboCrt = null;
        }
        comboCount++;
        comboText.text = "x"+ comboCount.ToString();
        if(comboCount >= 2 && timeCount > 1f)
        {
            if(posCompleted != default(UnityEngine.Vector2))
            {
                if (prefabTextVfxs != null && prefabTextVfxs.Count > 0)
                {
                    int randomIndex = UnityEngine.Random.Range(0, prefabTextVfxs.Count);
                    GameObject randomVfx = prefabTextVfxs[randomIndex];
                    var pos = new Vector3(posCompleted.x, posCompleted.y, parentSpawnVfx.transform.position.z);
                    GameObject vfx = Instantiate(randomVfx, pos + offsetSpawnTextVfx, Quaternion.identity,parentSpawnVfx);
                }
                switch (comboCount)
                {
                    case 3:
                        AudioManager.Instance.PlaySFX(AudioClipId.ComBoUp1);
                        break;
                    case 4:
                        AudioManager.Instance.PlaySFX(AudioClipId.ComboUp2);
                        break;
                    case 5:
                        AudioManager.Instance.PlaySFX(AudioClipId.ComboUp3);
                        break;
                    case 6:
                        AudioManager.Instance.PlaySFX(AudioClipId.ComboUp4);
                        break;
                    case 7:
                        AudioManager.Instance.PlaySFX(AudioClipId.ComboUp5);
                        break;
                }
                if(comboCount >= 8 )
                    AudioManager.Instance.PlaySFX(AudioClipId.ComboUp5);
            }
        }
        if (comboCount > 2 && comboCount <8)
        {
           // comboText.color = Color.white;
            //fillSlider.color = Color.white;
            ActiveFlame(flameRed);
            comboText.transform.localScale = Vector3.one * 1.3f;
            comboText.transform.DOScale(Vector3.one, 0.5f).SetEase(Ease.OutBack);
        }
        else if(comboCount >= 8 && comboCount < 13)
        {
           // comboText.color = new Color32(246,88,248,255);
            ActiveFlame(flameViolet);
            //fillSlider.color = Color.yellow;
            comboText.transform.localScale = Vector3.one * 1.5f;
            comboText.transform.DOScale(Vector3.one, 0.5f).SetEase(Ease.OutBack);
        }else if (comboCount >= 13)
        {
           // comboText.color  = new Color32(88, 168, 248, 255);
            ActiveFlame(flameBlue);
            comboText.transform.localScale = Vector3.one * 1.8f;
            comboText.transform.DOScale(Vector3.one, 0.5f).SetEase(Ease.OutBack); ;
        }
        upComboCrt = StartCoroutine(OnUpCombo(maxTimeCount));
    }
    IEnumerator OnUpCombo(float maxTimeCount)
    {
        int highestCombo = 0;
        if (lvCtr != null)
        {
             highestCombo = lvCtr.maxCombo;
            if (comboCount > highestCombo && comboCount > 3)
            {
                lvCtr.maxCombo = comboCount;
            }
        }

        timeCount = maxTimeCount;
        while (timeCount > 0)
        {
            timeCount -= Time.deltaTime;
            comboSlider.value = timeCount / maxTimeCount;
            yield return null;
        }
        comboSlider.value = 0;
       // notice best combo
        if (lvCtr != null)
        {
            if (comboCount > highestCombo && comboCount > 3)
            {
                AudioManager.Instance.PlaySFX(AudioClipId.NewBestCombo);
                Instantiate(noticeNewMaxComboVfx,posSpawnNotice.position,Quaternion.identity, parentSpawnVfx);
            }
        }
        gameObject.SetActive(false);
    }
    private void ActiveFlame(GameObject flame)
    {
        if(flame.activeSelf) return;
        flameRed.SetActive(false);
        flameViolet.SetActive(false);
        flameBlue.SetActive(false);
        flame.SetActive(true);
    }
    private void OnDisable()
    {
        if (upComboCrt != null)
        {
            StopCoroutine(upComboCrt);
            upComboCrt = null;
        }
    }
}
