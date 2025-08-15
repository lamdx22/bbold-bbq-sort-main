using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using Popup;
using UnityEngine;
using UnityEngine.UI;

public class CoinControl : MonoBehaviour
{
    [SerializeField] private int coinNo;
    [SerializeField] private Text coinText;
    [SerializeField] private Transform[] individualCoins; 
    [SerializeField] private Transform iconCoin;
    [SerializeField] private Image lightAcross;
    [SerializeField] Vector3 temp;

    private Vector3[] initialLocalPositions; 
    private Quaternion[] initialLocalRotations; 
    private Transform[] initialParents; 

    private void Awake()
    {
        initialLocalPositions = new Vector3[individualCoins.Length];
        initialLocalRotations = new Quaternion[individualCoins.Length];
        initialParents = new Transform[individualCoins.Length];

        for (int i = 0; i < individualCoins.Length; i++)
        {
            if (individualCoins[i] != null)
            {
                initialLocalPositions[i] = individualCoins[i].localPosition;
                initialLocalRotations[i] = individualCoins[i].localRotation;
                initialParents[i] = individualCoins[i].parent; 
            }
        }
    }

    private void Start()
    {
        GetcoinText();
    }

    public void GetcoinText()
    {
        // coinText.text = Format.FormatCount(PlayerData.current.coinCount);
    }

    private void OnEnable()
    {
        ActionController.UpdateCoinText += UpdateCoin;
        ActionController.ClaimCoin += RewardPileOfCoin;
        ActionController.GetCurCoinText += GetcoinText;
    }

    void OnDisable()
    {
        ActionController.UpdateCoinText -= UpdateCoin;
        ActionController.ClaimCoin -= RewardPileOfCoin;
        ActionController.GetCurCoinText -= GetcoinText;
    }

    private void UpdateCoin(int count)
    {
        int curCoin = PlayerData.current.coinCount;
        DOTween.To(() => curCoin, x => curCoin = x, curCoin + count, 1.2f).SetAutoKill(true)
            .SetDelay(1f)
            .SetEase(Ease.Linear)
            .OnUpdate(() =>
            {
                coinText.text = Format.FormatCount(curCoin);
            })
            .OnComplete(() =>
            {
                PlayerData.current.AddCoin(count);
            });
    }

    private void ResetCoinsToInitialState()
    {
        for (int i = 0; i < individualCoins.Length; i++)
        {
            if (individualCoins[i] != null)
            {
                individualCoins[i].SetParent(initialParents[i]);
                individualCoins[i].localPosition = initialLocalPositions[i];
                individualCoins[i].localRotation = initialLocalRotations[i];
                individualCoins[i].gameObject.SetActive(true); 
            }
        }
    }

    public void RewardPileOfCoin(Transform startPos, Action action)
    {
        StartCoroutine(RewardCoin(startPos, action));
    }

    public IEnumerator RewardCoin(Transform startPos, Action action = null)
    {
        bool canClose = false;
        int completedColumns = 0;
        var delay = 0f;

        ResetCoinsToInitialState();

        AudioManager.Instance.PlaySFX(AudioClipId.CoinFly);

        for (int i = 0; i < individualCoins.Length; i++)
        {
            int index = i;
            if (individualCoins[i] != null)
            {
                individualCoins[i].DOScale(1.2f, 0.3f).SetDelay(delay + 0.3f).SetEase(Ease.OutBack).SetUpdate(true).SetAutoKill(true);

                individualCoins[i].DOMove(iconCoin.position, 0.8f).SetDelay(delay + 0.5f).SetEase(Ease.InBack).SetUpdate(true).SetAutoKill(true)
                .OnComplete(() =>
                {
                    AudioManager.Instance.PlaySFX(AudioClipId.AddCoin);
                    individualCoins[index].DOScale(0f, 0.3f).SetUpdate(true).SetEase(Ease.OutBack).SetAutoKill(true); 
                    individualCoins[index].gameObject.SetActive(false); 
                    completedColumns++;
                    if (completedColumns == individualCoins.Length)
                    {
                        canClose = true;
                    }
                });

                individualCoins[i].DORotate(Vector3.zero, 0.5f).SetDelay(delay + 0.5f).SetEase(Ease.Flash).SetUpdate(true).SetAutoKill(true);

                delay += 0.1f; 
            }
        }

        yield return new WaitForSeconds(2.5f); 
        yield return new WaitUntil(() => canClose);
        action?.Invoke();
    }

    private IEnumerator BtnlightAcross()
    {
        yield return new WaitForSeconds(2.5f);
        lightAcross.rectTransform.localPosition = temp;
        Tween tween = lightAcross.rectTransform.DOLocalMoveX(lightAcross.rectTransform.localPosition.x + 200f, 0.3f).SetAutoKill(true).SetEase(Ease.Linear).OnComplete(() =>
        {
            if (lightAcross.gameObject.activeInHierarchy)
                StartCoroutine(BtnlightAcross());
        });
    }
}