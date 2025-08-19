using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.UI;

public class Shipper : MonoBehaviour
{
    public GameObject animOrderAppear, animShipperSmall;
    public Transform parentSpawnItem, cover;
    public ItemOrder itemOrderPrefab;
    public Slider sliderTimer;
    public Text textTimer;
    public Transform posAppear, posDriveTo, posDriveAway;
    public GameObject emotionHappy, emotionAngry;

    public List<ItemOrder> itemOrders;
    public LevelCtr levelCtr;
    protected float timerOrder = 90f, timerMax = 90f;
    public bool isCompletedOrder;
    bool isCompletedInit;
    int numOfRandItem;
    bool isChangedEmotion;

    public void Init(LevelCtr level, List<int> idSkewers, Transform posAppear, Transform posDriveTo, Transform posDriveAway)
    {
        animOrderAppear?.gameObject.SetActive(false);
        this.levelCtr = level;
        this.posAppear = posAppear;
        this.posDriveTo = posDriveTo;
        this.posDriveAway = posDriveAway;
        SpawnItemOrder(idSkewers);
        switch (numOfRandItem)
        {
            case 1:
                timerMax = 40f;
                break;
            case 2:
                timerMax = 60f;
                break;
            case 3:
                timerMax = 90f;
                break;
            default:
                timerMax = 90f;
                break;
        }
        timerOrder = timerMax;
        isCompletedInit = true;
    }
    private void Update()
    {
        if (GameManager.GameState != GameState.Playing) return;
        if (levelCtr == null || levelCtr.isFinishLv) return;
        if (!isCompletedInit) return;
        if (isCompletedOrder) return;
        timerOrder -= Time.deltaTime;
        if (timerOrder < 0) timerOrder = 0;

        if (sliderTimer != null)
            sliderTimer.value = timerOrder / timerMax;

        if (textTimer != null)
            textTimer.text = Mathf.CeilToInt(timerOrder).ToString();
        if (timerOrder < 10f && !isChangedEmotion)
        {
            AudioManager.Instance.PlaySFX(AudioClipId.CommonMan);
            isChangedEmotion = true;
            emotionHappy.SetActive(false);
            emotionAngry.SetActive(true);
        }
        if (timerOrder <= 0)
        {
            levelCtr.LoseShiper();
        }
    }
    public void SpawnItemOrder(List<int> idSkewers)
    {
        StartCoroutine(OnSpawnItemOrder(idSkewers));
    }

    IEnumerator OnSpawnItemOrder(List<int> idSkewers)
    {
        //find random idskewers
        int numOfRand = UnityEngine.Random.Range(1, 4);
        if (numOfRand > idSkewers.Count)
        {
            numOfRand = idSkewers.Count;
        }
        List<int> randomIds = idSkewers.OrderBy(x => UnityEngine.Random.value).Take(numOfRand).ToList();
        //check lv has sale Grill
        bool hasSaleGrill = levelCtr.grills.Any(x => x.isSaleGrill);
        int numOfRandSaleItem = 0;
        if (numOfRand > 0)
            numOfRandSaleItem = UnityEngine.Random.Range(1, numOfRand + 1);

        for (int i = 0; i < randomIds.Count; i++)
        {
            ItemOrder itemOrder = Instantiate(itemOrderPrefab, parentSpawnItem);
            itemOrders.Add(itemOrder);
            if (hasSaleGrill)
            {
                if (numOfRandSaleItem > 0)
                {
                    itemOrder.Init(this, randomIds[i], levelCtr, true);
                    numOfRandSaleItem--;
                }
                else
                    itemOrder.Init(this, randomIds[i], levelCtr, false);
            }
            else
                itemOrder.Init(this, randomIds[i], levelCtr);
        }
        numOfRandItem = randomIds.Count;
        //change Anim Shipper and Shipper Small
        AudioManager.Instance.PlaySFX(AudioClipId.NoticeOrder);
        //animOrderAppear?.gameObject.SetActive(true);
        animShipperSmall?.SetActive(true);
        animShipperSmall.transform.position = posAppear.position;
        animShipperSmall.transform.DOMove(posDriveTo.position, 1f).SetEase(Ease.Linear)
            .OnComplete(() =>
            {
                cover.gameObject.SetActive(true);
                parentSpawnItem.gameObject.SetActive(true);
            });
        yield return new WaitForSeconds(0.5f);

        animOrderAppear?.gameObject.SetActive(false);
    }
    public void CheckCompletetdOrder()
    {
        if (itemOrders == null || itemOrders.Count == 0) return;
        if (isCompletedOrder) return;
        if (itemOrders.All(x => x.isDone))
        {
            isCompletedOrder = true;
            StartCoroutine(OnEndOrderCompleted());
        }
    }
    IEnumerator OnEndOrderCompleted()
    {
        yield return new WaitForSeconds(0.9f);
        CoinManager.Instance.OnAddCoin(20, animShipperSmall.transform.position + new Vector3(1.5f, 0, 0));
        cover.gameObject.SetActive(false);
        AudioManager.Instance.PlaySFX(AudioClipId.YaHo);
        animShipperSmall.transform.DOMove(posDriveAway.position, 1f).SetEase(Ease.Linear)
            .OnComplete(() =>
            {
                animShipperSmall?.SetActive(false);
                levelCtr.curShipper = null;
                Destroy(gameObject);
            });
    }
    public void OnBtnWatchAdsToSkipOrder()
    {
        //watch ads to skip order
        Revive();
    }
    public void Revive()
    {
        if (isCompletedOrder) return;
        isCompletedOrder = true;
        StartCoroutine(OnEndOrderCompleted());
    }
}
