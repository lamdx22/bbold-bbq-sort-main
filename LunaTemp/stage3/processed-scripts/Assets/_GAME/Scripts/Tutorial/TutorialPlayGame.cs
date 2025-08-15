using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class TutorialPlayGame : SingletonMonoBehaviour<TutorialPlayGame>
{
    public Transform hand;
    public Transform handAnim;
    public LevelCtr levelCtr;
    public Vector3 handOffset = new Vector3(0.1f, -0.4f, 0);

    public Transform clonedSkewerParent;
    public Vector3 targetMoveOffset = new Vector3(0.45f, 0, 0);

    public List<Skewer> skewers = new List<Skewer>();
    public List<Transform> posTarget = new List<Transform>();

    public float tutorialMoveDuration = 0.8f;
    public Ease tutorialMoveEase = Ease.OutQuad;
    public float delayBetweenMoves = 0.2f;

    public float clonedSkewerOpacity = 0.5f;
    public float clonedSkewerFadeDuration = 0.3f;

    private GameObject _clonedSkewerGO;
    public Skewer currentStartSkewer;
    public Transform posTargetSkewer;
    private int lastRandomIndex = -1;
    private Tweener _handTweener;
    private Tweener _clonedSkewerTweener;
    public bool endTutorial;

    //tu Booster
    public GameObject panelFocus;
    public Button holdBtn;
    public GameObject holdUI;

    public void Init(LevelCtr levelCtr)
    {
        Debug.Log("check tutorial 139");
        endTutorial = false;
        levelCtr.typeSkewerCompleted = 0;
        this.levelCtr = levelCtr;
        if (levelCtr == null || levelCtr.onGrillSkewers == null || levelCtr.onGrillSkewers.Count <= 0) return;

        skewers.Clear();
        posTarget.Clear();

        //if (levelCtr.onGrillSkewers.Count > 0)
        //{
        //    skewers.Add(levelCtr.onGrillSkewers[1]);
        //    posTarget.Add(levelCtr.grills[1].posPlaceSkewers[2].pos);
        //}
        //if (levelCtr.onGrillSkewers.Count > 9)
        //{
        //    skewers.Add(levelCtr.onGrillSkewers[9]);
        //    posTarget.Add(levelCtr.grills[3].posPlaceSkewers[1].pos);
        //}
        //if (levelCtr.onGrillSkewers.Count > 10)
        //{
        //    skewers.Add(levelCtr.onGrillSkewers[10]);
        //    posTarget.Add(levelCtr.grills[2].posPlaceSkewers[1].pos);
        //}

        if (levelCtr.onGrillSkewers.Count > 0)
        {
            skewers.Add(levelCtr.onGrillSkewers[4]);
            posTarget.Add(levelCtr.grills[1].posPlaceSkewers[0].pos);
        }
        if (levelCtr.onGrillSkewers.Count > 4)
        {
            skewers.Add(levelCtr.onGrillSkewers[5]);
            posTarget.Add(levelCtr.grills[0].posPlaceSkewers[0].pos);
        }

        if (skewers.Count == 0 || posTarget.Count == 0 || skewers.Count != posTarget.Count)
        {
            Debug.LogWarning("Tutorial lists are empty or mismatched.");
            return;
        }

        if (clonedSkewerParent == null)
        {
            Debug.LogWarning("ClonedSkewerParent is not assigned.");
        }
    }

    private void Update()
    {
        if (endTutorial) return;
        if (levelCtr == null) return;
        if (Input.GetMouseButtonUp(0)) return;
        if (levelCtr.typeSkewerCompleted == 0) return;
        endTutorial = true;
        hand.gameObject.SetActive(false);
        Destroy(_clonedSkewerGO);
    }

    public void StartRandomTutorial()
    {
        if (skewers.Count == 0 || posTarget.Count == 0 || skewers.Count != posTarget.Count)
        {
            Debug.LogWarning("Tutorial lists are not set up correctly.");
            return;
        }

        ResetTutorialEffects();

        hand.gameObject.SetActive(true);

        int maxAttempts = skewers.Count * 2;
        int randomIndex = -1;
        Skewer selectedStartSkewer = null;

        for (int currentAttempt = 0; currentAttempt < maxAttempts; currentAttempt++)
        {
            randomIndex = UnityEngine.Random.Range(0, skewers.Count);
            Skewer potentialSkewer = skewers[randomIndex];

            if (potentialSkewer != null &&
                (skewers.Count <= 1 || randomIndex != lastRandomIndex))
            {
                selectedStartSkewer = potentialSkewer;
                break;
            }
        }

        if (selectedStartSkewer == null)
        {
            Debug.Log("No suitable tutorials found or all completed after multiple attempts.");
            return;
        }

        lastRandomIndex = randomIndex;
        currentStartSkewer = selectedStartSkewer;
        posTargetSkewer = posTarget[randomIndex];

        if (currentStartSkewer == null || posTargetSkewer == null)
        {
            Debug.LogError($"Selected tutorial skewers are null at index {randomIndex}!");
            return;
        }

        _clonedSkewerGO = Instantiate(currentStartSkewer.gameObject);
        _clonedSkewerGO.name = currentStartSkewer.name + "_TutorialClone";
        var sp = _clonedSkewerGO.GetComponent<SpriteRenderer>();
        if (sp != null) sp.sortingLayerName = "ActiveOB";

        if (clonedSkewerParent != null)
        {
            _clonedSkewerGO.transform.SetParent(clonedSkewerParent);
            _clonedSkewerGO.transform.localScale = Vector3.one;
        }

        if (_clonedSkewerGO.TryGetComponent<Collider2D>(out var col)) col.enabled = false;
        if (_clonedSkewerGO.TryGetComponent<Skewer>(out var skewer)) skewer.enabled = false;
        if (_clonedSkewerGO.TryGetComponent<Rigidbody>(out var rb)) rb.isKinematic = true;

        hand.position = currentStartSkewer.transform.position + handOffset;
        _clonedSkewerGO.transform.position = currentStartSkewer.transform.position;
        _clonedSkewerGO.SetActive(false);

        StartCoroutine(AnimateHandAndClonedSkewerLoop());
    }

    private IEnumerator AnimateHandAndClonedSkewerLoop()
    {
        if (endTutorial) yield return null;
        Vector3 startPosHand = currentStartSkewer.transform.position + handOffset;
        Vector3 startPosClone = currentStartSkewer.transform.position;
        Vector3 targetPosHand = posTargetSkewer.transform.position + handOffset;
        Vector3 targetPosClone = posTargetSkewer.transform.position;

        while (true)
        {
            _handTweener = hand.DOMove(targetPosHand, tutorialMoveDuration).SetEase(tutorialMoveEase);

            if (_clonedSkewerGO != null)
            {
                _clonedSkewerGO.SetActive(true);
                _clonedSkewerGO.transform.position = startPosClone;
                FadeObjectAlpha(_clonedSkewerGO, clonedSkewerOpacity, 0f);
                _clonedSkewerTweener = _clonedSkewerGO.transform.DOMove(targetPosClone, tutorialMoveDuration).SetEase(tutorialMoveEase);
            }
            yield return _handTweener.WaitForCompletion();

            yield return new WaitForSeconds(delayBetweenMoves);

            _handTweener = hand.DOMove(startPosHand, tutorialMoveDuration).SetEase(tutorialMoveEase);

            if (_clonedSkewerGO != null)
            {
                _clonedSkewerGO.SetActive(false);
            }
            yield return _handTweener.WaitForCompletion();

            yield return new WaitForSeconds(delayBetweenMoves);
        }
    }

    private void FadeObjectAlpha(GameObject obj, float targetAlpha, float duration)
    {
        if (obj == null) return;

        SpriteRenderer spriteRenderer = obj.GetComponent<SpriteRenderer>();
        if (spriteRenderer != null)
        {
            Color currentColor = spriteRenderer.color;
            DOTween.To(() => currentColor, x => spriteRenderer.color = x, new Color(currentColor.r, currentColor.g, currentColor.b, targetAlpha), duration);
            return;
        }

        MeshRenderer meshRenderer = obj.GetComponent<MeshRenderer>();
        if (meshRenderer != null && meshRenderer.material.HasProperty("_Color"))
        {
            Color currentColor = meshRenderer.material.color;
            DOTween.To(() => currentColor, x => meshRenderer.material.color = x, new Color(currentColor.r, currentColor.g, currentColor.b, targetAlpha), duration);
            return;
        }

        CanvasGroup canvasGroup = obj.GetComponent<CanvasGroup>();
        if (canvasGroup != null)
        {
            canvasGroup.DOFade(targetAlpha, duration);
            return;
        }
    }

    public void ResetTutorialEffects()
    {
        StopAllCoroutines();

        if (_handTweener != null && _handTweener.IsActive())
        {
            _handTweener.Kill();
        }
        if (_clonedSkewerTweener != null && _clonedSkewerTweener.IsActive())
        {
            _clonedSkewerTweener.Kill();
        }

        if (_clonedSkewerGO != null)
        {
            Destroy(_clonedSkewerGO);
            _clonedSkewerGO = null;
        }

        currentStartSkewer = null;
        posTargetSkewer = null;
    }

    public void SetHold(Transform posSet, [Bridge.Ref] Vector2 scale = default(UnityEngine.Vector2), Button btnClick = null, Action addActionBtnHold = null, Action completed = null)
    {
        GameManager.Instance.SwitchGameState(GameState.Pause);
        //set holdBtn
        holdBtn.transform.position = posSet.position;
        holdBtn.interactable = false;
        if (scale != default(UnityEngine.Vector2))
        {
            holdBtn.transform.localScale = scale;
        }
        holdBtn.onClick.RemoveAllListeners();
        if (btnClick != null)
        {
            holdBtn.onClick.AddListener(() =>
            {
                GameManager.Instance.SwitchGameState(GameState.Playing);
                btnClick.onClick.Invoke();
                ClosePanelFocus();
                Canvas canvas = handAnim.GetComponent<Canvas>();
                if (canvas != null)
                {
                    canvas.sortingOrder = 1;
                }
                handAnim.gameObject.SetActive(false);
                addActionBtnHold?.Invoke();
            });
        }
        //set hold Ui
        holdUI.transform.position = posSet.position;
        var temScale = holdUI.transform.localScale;
        holdUI.transform.localScale = temScale * 10f;
        holdUI.transform.DOScale(temScale, 0.1f).OnComplete(() =>
        {
            holdBtn.interactable = true;
            completed?.Invoke();
        });

        handAnim.gameObject.SetActive(true);
        handAnim.transform.position = posSet.position + new Vector3(0,0.2f,0);
        Canvas canvas2 = handAnim.GetComponent<Canvas>();
        if(canvas2 != null)
        {
            canvas2.sortingOrder = 2; 
        }
    }
    public void HideHandOb()
    {
        handAnim.gameObject.SetActive(false);
    }
    public void ShowPanelFocus()
    {
        panelFocus.gameObject.SetActive(true);
    }
    public void ClosePanelFocus()
    {
        panelFocus.gameObject.SetActive(false);
    }
    
}