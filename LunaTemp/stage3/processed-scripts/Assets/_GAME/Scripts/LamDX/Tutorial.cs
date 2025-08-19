using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Tutorial : MonoBehaviour
{
    public Transform startGrill;
    public Transform endGrill;
    public int indexGrillStart = 0;
    public int indexGrillEnd = 0;

    public GameObject hand;
    public GameObject title;

    public LevelCtr levelCtr;

    public float moveTime = 0.2f;
    public float fadeTime = 0.2f;

    // Start is called before the first frame update
    void Start()
    {
        StartCoroutine(StartTutorial());
    }

    IEnumerator StartTutorial()
    {
        
        if (title != null) title.SetActive(true);
        title.transform.DOScale(1.1f, 0.4f)
            .SetLoops(-1, LoopType.Yoyo)
            .SetEase(Ease.InOutSine)
            .SetLink(title, LinkBehaviour.KillOnDestroy);

        yield return new WaitForSeconds(1f);

        var startPos = startGrill.position + new Vector3(0.7f * indexGrillStart, -0.65f, 0f);
        var endPos = endGrill.position + new Vector3(0.7f * indexGrillEnd, -0.65f, 0f);

        hand.SetActive(true);

        hand.transform.position = startPos;
        var sr = hand.GetComponent<SpriteRenderer>();

        //transform.DOMove(targetPoint.position, duration).SetLoops(-1, LoopType.Restart);
        Sequence seq = DOTween.Sequence();

        seq.Append(hand.transform.DOMove(endPos, moveTime)) //.SetEase(Ease.InOutSine)
           .Append(sr.DOFade(0f, fadeTime)) // Mờ dần.AppendInterval(loopDelay)
           .Append(hand.transform.DOMove(startPos, 0))
           .AppendInterval(0.2f)
           //.AppendCallback(() =>
           //{
           //    hand.transform.position = startPos; // về lại chỗ cũ
           //})
           .Append(sr.DOFade(1f, fadeTime)) // Hiện lại
           .SetLoops(-1)
           .SetLink(hand, LinkBehaviour.KillOnDestroy); // Lặp vô hạn
    }

    // Update is called once per frame
    void Update()
    {
        if (title != null && Input.GetMouseButtonDown(0))
        {
            title.SetActive(false);
        }

        if (levelCtr.countMatch > 0)
        {
            Destroy(hand);
            this.enabled = false;
        }
    }
}
