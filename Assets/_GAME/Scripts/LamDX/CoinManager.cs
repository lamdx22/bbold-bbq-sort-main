using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class CoinManager : MonoBehaviour
{
    public static CoinManager Instance {get; private set;}

    public TextMeshProUGUI textCoin;
    public Transform coinBag;
    public GameObject coinPrefab;
    public GameObject textFloatPrefab;

    int coinCount;

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(Instance.gameObject);
        }
        else if (Instance.GetInstanceID() != GetInstanceID())
        {
            Destroy(gameObject);
        }
    }

    // Start is called before the first frame update
    void Start()
    {
        SetCoin(0);
    }


    void SetCoin(int coin)
    {
        coinCount = coin;
        textCoin.text = coin.ToString();
    }

    public void AddCoin(int coin)
    {
        SetCoin(coinCount + coin);

    }

    public void OnAddCoin(int coinNumeber, Vector3 spawnPosition)
    {
        GameObject textGO = Instantiate(textFloatPrefab, spawnPosition, Quaternion.identity, this.transform);
        TextMeshProUGUI textFloat = textGO.GetComponent<TextMeshProUGUI>();
        textFloat.text = "+" + coinNumeber;
        textFloat.transform.position = spawnPosition;
        textFloat.gameObject.SetActive(true);
        textFloat.transform.localScale = new Vector3(0.2f, 0.2f, 1);

        Sequence seq = DOTween.Sequence();
        seq.Append(textFloat.transform.DOScale(1.2f, 0.4f).SetEase(Ease.OutBack)); // phóng to
        seq.Append(textFloat.transform.DOScale(0f, 0.3f).SetEase(Ease.InBack));   // thu nhỏ biến mất
        seq.OnComplete(() =>
        {
            Destroy(textGO);
        });

        GameObject coin = Instantiate(coinPrefab, spawnPosition, Quaternion.identity, this.transform);
        coin.transform.SetAsLastSibling();
        coin.transform.DOMove(CoinManager.Instance.textCoin.transform.position, 0.6f).SetEase(Ease.Linear)
            .OnComplete(() =>
            {
                AddCoin(coinNumeber);
                StartCoroutine(ShakeBag());
                Destroy(coin);
            });
    }

    IEnumerator ShakeBag()
    {
        AudioManager.Instance.PlaySFX(AudioClipId.CoinFly);


        int count = 0;

        int angle = 10;
        float duration = 0.1f;

        while (count < 1)
        {
            // Sang phải
            yield return coinBag.DOLocalRotate(new Vector3(0, 0, angle), duration)
                .SetEase(Ease.InOutSine)
                .WaitForCompletion();

            // Sang trái
            yield return coinBag.DOLocalRotate(new Vector3(0, 0, -angle), duration * 2)
                .SetEase(Ease.InOutSine)
                .WaitForCompletion();

            // Về giữa
            yield return coinBag.DOLocalRotate(new Vector3(0, 0, 0), duration)
                .SetEase(Ease.InOutSine)
                .WaitForCompletion();

            // Đợi interval giây trước khi lặp lại
            yield return new WaitForSeconds(0.1f);

            count++;
        }
    }
}
