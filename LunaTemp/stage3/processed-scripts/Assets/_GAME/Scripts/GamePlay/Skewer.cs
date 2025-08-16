using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class Skewer : BaseOB
{
    public int skewerType;
    public SkewerTypeAppear skewerTypeAppear;
    public SpriteRenderer sprRend, sprRendSkin;
    public Sprite sprSecret;
    public List<Sprite> sprIces = new List<Sprite> { null, null, null }; // tuong ung la 3 lan break ice 0 ,1, 2
    public SpriteRenderer sprOutLine;
    public GameObject animBreakSecretSkin;
    public GameObject vfxBreakIce;
    public GameObject vfxSmoke;
    public List<Transform> posIces;
    public Rigidbody2D rb;

    [SerializeField] protected Vector3 defaultScale = new Vector3(1f, 1f, 1f);
    [SerializeField] protected Vector3 pressScale = new Vector3(1.2f, 1.2f, 1f);
    [SerializeField] protected Vector3 pressRo = new Vector3(0f, 0f, 0f);
    [SerializeField] protected AudioClipId putInToSound = AudioClipId.PutInSound;
    [SerializeField] protected AudioClipId pickUpSound = AudioClipId.PickUpSound;
    [SerializeField] protected AudioClipId putDownSound = AudioClipId.PutInSound;
    [SerializeField] protected Transform parent;
    [SerializeField] protected float limitDistance = 0.5f;
    [SerializeField] protected bool _isPressing, _isMoveByDragg;
    protected Quaternion defaultRo;
    protected Vector2 _lastPos, _curPos;
    protected Vector2 _offsetDistance;

    public Collider2D col;
    public Collider pickBox;
    public LevelCtr levelCtrl;
    public PosPlaceAtGrill curPosIn, lastPosIn;
    public posAtPlate posAtPlate;
    public List<Grill> colGrills;

    private int numOfBreakIce = 0;
    private bool isPressAgain;
    private float zHightLight = 110f;
    public void Init1(LevelCtr levelCtr, PosPlaceAtGrill curPosIn = null)
    {
        this.levelCtrl = levelCtr;
        if (curPosIn != null)
            this.curPosIn = curPosIn;
        if (this.curPosIn != null)
            this.curPosIn.skewerAtPos = this;
        col = GetComponent<Collider2D>();
        // spriteRend = GetComponent<SpriteRenderer>();
        transform.localScale = defaultScale;
        defaultRo = transform.localRotation;
        parent = transform.parent;  //set trong datta
        InitDefaultLayer();
    }
    public void Init(LevelCtr levelCtr, PosPlace curPosInit = null, SkewerData skewerData = null)
    {
        this.levelCtrl = levelCtr;
        if (curPosInit != null)
        {
            if (curPosInit is PosPlaceAtGrill pos)
            {
                this.curPosIn = pos;
                curPosInit.skewerAtPos = this;
            }
        }
        col = GetComponent<Collider2D>();

        SetType(skewerData.skewerType);
        skewerTypeAppear = skewerData.typeAppear;
        //skewerType = skewerData.skewerType;
        //Sprite skewerSprite = Resources.Load<Sprite>("SpriteData/Skewer/" + skewerType.ToString());
        //Sprite sprShadow = Resources.Load<Sprite>("SpriteData/SkewerOutLine/" + skewerType.ToString());
        //sprRend.sprite = skewerSprite;
        //sprOutLine.sprite = sprShadow;
        switch (skewerTypeAppear)
        {
            case SkewerTypeAppear.Normal:
                break;
            case SkewerTypeAppear.Secret:
                sprRendSkin.gameObject.SetActive(true);
                sprRendSkin.sprite = sprSecret;
                break;
            case SkewerTypeAppear.Ice:
                sprRendSkin.gameObject.SetActive(true);
                levelCtr.OnCompletedOneMatch3 -= CheckAndBreakIce;
                levelCtr.OnCompletedOneMatch3 += CheckAndBreakIce;
                levelCtr.StartRemoveIceBooster -= HighLight;
                levelCtr.StartRemoveIceBooster += HighLight;
                sprRendSkin.sprite = sprIces[0];
                break;
        }
        transform.localScale = defaultScale;
        defaultRo = transform.localRotation;
        parent = transform.parent;
        InitDefaultLayer();
    }
    private void CheckAndBreakIce(List<Skewer> completetdSkewers)
    {
        if (curPosIn.skewerAtPos == null) return;
        if (skewerTypeAppear != SkewerTypeAppear.Ice) return;
        // vfx iceBreak
        AudioManager.Instance.PlaySFX(AudioClipId.IceBreaking);
        var vfxBreakIceInstance = Instantiate(vfxBreakIce, posIces[numOfBreakIce].position, Quaternion.identity, transform);
        Destroy(vfxBreakIceInstance, 0.5f);
        numOfBreakIce++;
        if (numOfBreakIce < 3)
            sprRendSkin.sprite = sprIces[numOfBreakIce];
        if (numOfBreakIce == 3)
        {
            sprRendSkin.sprite = null;
            sprRendSkin.gameObject.SetActive(false);
            skewerTypeAppear = SkewerTypeAppear.Normal;
            levelCtrl.OnCompletedOneMatch3 -= CheckAndBreakIce;
            levelCtrl.StartRemoveIceBooster -= HighLight;
            //break ice and complete match 3 same time on one grill
            if (curPosIn.grill.CheckCompletedOneMatch3())
                curPosIn.grill.CompletetdOneMatch3(() =>
                {
                    if (curPosIn.grill.CheckCanMoveNewSkeweFromPlate())
                        curPosIn.grill.MoveNewSkewerFromPlate();
                });
        }
    }
    public void CheckAndBreakSecret(Grill grill = null)
    {
        //vfx smoke
        if (skewerTypeAppear == SkewerTypeAppear.Secret)
        {
            animBreakSecretSkin.SetActive(true);
            sprRendSkin.gameObject.SetActive(false);
            AudioManager.Instance.PlaySFX(AudioClipId.Foil);
            DOVirtual.DelayedCall(1f, () =>
            {
                animBreakSecretSkin.SetActive(false);
                skewerTypeAppear = SkewerTypeAppear.Normal;
                if (grill.grillType != GrillType.NotMatch3)
                {
                    var smoke = Instantiate(vfxSmoke, transform.position, Quaternion.identity, transform);
                    Destroy(smoke, 1f);
                }
            });
        }
        else if (skewerTypeAppear == SkewerTypeAppear.Normal)
        {
            if (grill.grillType != GrillType.NotMatch3)
            {
                var smoke = Instantiate(vfxSmoke, transform.position, Quaternion.identity, transform);
                Destroy(smoke, 1f);
            }
        }
    }

    //protected virtual void OnMouseDown()
    public void MouseDown()
    {
        if (GameManager.GameState != GameState.Playing) return;
        if (skewerTypeAppear != SkewerTypeAppear.Normal) return;
        Debug.Log("000PressSkewer");
        AudioManager.Instance.PlaySFX(pickUpSound);
        _isPressing = true;

        transform.DOScale(pressScale, 0.1f);
        transform.rotation = Quaternion.Euler(pressRo);
        SetAllSprLayer();
        if (sprOutLine != null)
            sprOutLine.gameObject.SetActive(true);

        if (levelCtrl != null)
        {
            isPressAgain = false;
            if (levelCtrl.CurBaseOb == this)
                isPressAgain = true;
            levelCtrl.CurBaseOb = this;
        }
        // if(isPressAgain) return;
        if (Camera.main != null)
            _lastPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        _offsetDistance = _lastPos - (Vector2)transform.position;

    }
    //protected virtual void OnMouseDrag()
    //{
    //    if (GameManager.GameState != GameState.Playing) return;
    //    if (skewerTypeAppear != SkewerTypeAppear.Normal) return;
    //    if (!_isDragging) return;
    //    _isMoveByDragg = true;
    //    if (Camera.main == null) return;
    //    var worldPosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
    //    worldPosition.z = transform.position.z;
    //    transform.position = worldPosition - (Vector3)_offsetDistance + (Vector3)_offSetDrag;
    //    transform.position = worldPosition;
    //}
    //public bool isDragging = false;
    //private void OnMouseDrag()
    //{
    //    isDragging = true;
    //}

    private Vector3 dragVelocity = Vector3.zero;
    private void FixedUpdate()
    {
        if (!_isPressing) return;
        if (GameManager.GameState != GameState.Playing) return;
        if (skewerTypeAppear != SkewerTypeAppear.Normal) return;
        var worldPosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        worldPosition.z = transform.position.z;
        //  transform.position = worldPosition - (Vector3)_offsetDistance + (Vector3)_offSetDrag;
        rb.MovePosition(worldPosition - (Vector3)_offsetDistance + (Vector3)_offSetDrag);
        //if (!isDragging)
        //    rb.MovePosition(worldPosition - (Vector3)_offsetDistance + (Vector3)_offSetDrag);
        //else
        //    rb.MovePosition(worldPosition);
    }
    public void MoveUpdate()
    {
        if (GameManager.GameState != GameState.Playing) return;
        if (!_isPressing) return;
        _isMoveByDragg = true;
        var worldPosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        worldPosition.z = transform.position.z;
        // transform.position = worldPosition - (Vector3)_offsetDistance + (Vector3)_offSetDrag;
        transform.position = worldPosition;
    }
    //protected virtual void OnMouseUp()
    public void MouseUp()
    {
        Debug.Log("MouseUpSkewer");
        if (GameManager.GameState != GameState.Playing) return;
        if (skewerTypeAppear == SkewerTypeAppear.Ice)
        {
            if (levelCtrl != null && levelCtrl.isHandlingBooster)
            {
                levelCtrl.CurBaseOb = this;
            }
            return;
        }
        if (skewerTypeAppear != SkewerTypeAppear.Normal) return;
        _isPressing = false;
        //isDragging = false;
        if (levelCtrl != null && levelCtrl.isChoosingSkewerMoving)
        {
            levelCtrl.isChoosingSkewerMoving = false;
            //BackUiToDefault();
            return;
        }
        if (Camera.main != null)
            _curPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        _isMoveByDragg = Vector2.Distance(_lastPos, _curPos) > 0.1f;
        if (!_isMoveByDragg)
        {
            Debug.Log("9999");
            // if (levelCtrl.CurBaseOb == this) return;
            // Debug.Log("99999");
            if (levelCtrl != null)
                levelCtrl.choosenSkewer = this;
            //SetCanUse(false);
            //curPosIn.skewerAtPos = null;
            levelCtrl.OnPressOb -= HandleMovePickOb;
            levelCtrl.OnPressOb += HandleMovePickOb;
            return;
        }
        //Move to grill or back to default
        _isMoveByDragg = false;
        transform.DOKill();
        transform.DOScale(defaultScale, 0);
        var posPlace = FindPosAtNeastGrillToMoveIn();
        if (posPlace != null)
        {
            SetCanUse(false);
            lastPosIn = curPosIn;
            lastPosIn.skewerAtPos = null;
            curPosIn = posPlace;
            Move(transform, posPlace.pos, 0.1f, () =>
            {
                HandleCompletedMovingToGrill(posPlace);
            }
            , 0, Ease.Linear);
        }
        if (sprOutLine != null)
            sprOutLine.gameObject.SetActive(false);
    }

    protected void HandleCompletedMovingToGrill(PosPlaceAtGrill posPlace)
    {
        AudioManager.Instance.PlaySFX(putInToSound);
        transform.SetParent(posPlace.pos);
        SetCanUse(true);
        SetDefaultLayer();
        posPlace.skewerAtPos = this;
        Grill curGrill = posPlace.grill;
        Grill lastGrill = lastPosIn.grill;
        bool isCompletedOneMatch3 = curGrill.CheckCompletedOneMatch3();
        if (isCompletedOneMatch3)
        {
            curGrill.CompletetdOneMatch3(default(System.Action), () =>
            {
                if (curGrill.CheckCanMoveNewSkeweFromPlate())
                    curGrill.MoveNewSkewerFromPlate();
            });
            if (lastGrill.CheckCanMoveNewSkeweFromPlate())
                lastGrill.MoveNewSkewerFromPlate();
        }
        else
        {
            if (lastPosIn.grill != curPosIn.grill)
            {
                if (curGrill.CheckCanMoveNewSkeweFromPlate())
                    curGrill.MoveNewSkewerFromPlate();
                if (lastGrill.CheckCanMoveNewSkeweFromPlate())
                    lastGrill.MoveNewSkewerFromPlate();
            }
        }
    }
    protected void HandleMovePickOb(BaseOB baseOB)
    {
        if (baseOB == null) return;
        if (baseOB is Skewer otherSkewer)
        {
            Debug.Log("99999MChooseSkewer");
            Debug.Log("IsFullSkewerAtGrill : " + levelCtrl.CheckFullSKewerOnGrill());
            if (levelCtrl.CheckFullSKewerOnGrill())
            {
                if (otherSkewer == this)
                {
                    levelCtrl.isChoosingSkewerMoving = true;
                    Debug.Log("99999MoveBack0");
                    BackToGrillState();
                }
                else
                {
                    // levelCtrl.isChoosingSkewerMoving = false;
                    BackToGrillState();
                }
            }
            else
            {
                levelCtrl.isChoosingSkewerMoving = true;
                if (otherSkewer == this)
                {
                    Debug.Log("99999MoveBack1");
                    BackToGrillState();
                }
                else
                {
                    Debug.Log("99999MoveSwap");
                    SwapMove(otherSkewer);
                }
            }
        }
        else if (baseOB is Grill grill)
        {
            if (grill.grillUnlockType != GrillUnLockType.Free) return;
            PosPlaceAtGrill posPlace = FindPosAtGrill(grill);
            if (posPlace == null) return;
            transform.DOScale(defaultScale, 0.05f);
            SetCanUse(false);
            lastPosIn = curPosIn;
            lastPosIn.skewerAtPos = null;
            curPosIn = posPlace;
            Move(transform, posPlace.pos, 0.1f, () =>
            {
                HandleCompletedMovingToGrill(posPlace);
            }
            , 0, Ease.Linear);
            if (sprOutLine != null)
                sprOutLine.gameObject.SetActive(false);
            _isMoveByDragg = false;
            levelCtrl.OnPressOb -= HandleMovePickOb;
            if (levelCtrl != null && levelCtrl.choosenSkewer == this)
                levelCtrl.choosenSkewer = null;
        }
    }
    protected PosPlaceAtGrill FindPosAtGrill(Grill grill)
    {
        if (grill == null) return null;
        var minDistance = Mathf.Infinity;
        PosPlaceAtGrill result = null;
        foreach (var posPlace in grill.posPlaceSkewers)
        {
            if (posPlace == null) continue;
            if (posPlace.skewerAtPos != null) continue;
            float distance = Vector2.Distance(posPlace.pos.position, Camera.main.ScreenToWorldPoint(Input.mousePosition));
            if (distance < minDistance)
            {
                minDistance = distance;
                result = posPlace;
            }
        }
        return result;
    }
    protected PosPlaceAtGrill FindPosAtNeastGrillToMoveIn()
    {
        // find all pos can moveIn
        List<PosPlaceAtGrill> posPlaceSkewers = new List<PosPlaceAtGrill>();
        foreach (var grill in colGrills)
        {
            if (grill == null) continue;
            if (grill.grillUnlockType != GrillUnLockType.Free) continue;

            foreach (var pos in grill.posPlaceSkewers)
            {
                if (pos.skewerAtPos == null)
                    posPlaceSkewers.Add(pos);
            }
        }
        posPlaceSkewers.Add(curPosIn);
        //find nearest pos
        if (posPlaceSkewers.Count == 0) return null;
        PosPlaceAtGrill result = null;
        float minDistance = Mathf.Infinity;
        foreach (var posPlace in posPlaceSkewers)
        {
            float distance = Vector2.Distance(transform.position, posPlace.pos.position);
            if (distance < minDistance)
            {
                result = posPlace;
                minDistance = distance;
            }
        }
        return result;
    }
    public void BackToGrillState()
    {
        Debug.Log("0202 backState");
        transform.DOKill();
        transform.DOScale(defaultScale, 0.05f);
        SetCanUse(false);
        curPosIn.skewerAtPos = this;
        Move(transform, curPosIn.pos, 0.05f, () =>
        {
            AudioManager.Instance.PlaySFX(putDownSound);
            transform.localScale = defaultScale;
            SetCanUse(true);
            if (sprOutLine != null)
                sprOutLine.gameObject.SetActive(false);
            SetDefaultLayer();
        }, 0, Ease.Linear);

        _isMoveByDragg = false;
        levelCtrl.OnPressOb -= HandleMovePickOb;
        if (levelCtrl != null && levelCtrl.choosenSkewer == this)
            levelCtrl.choosenSkewer = null;
    }
    public void SwapMove(Skewer otherSkewer)
    {
        // levelCtrl.curSkewerSwapMoving = otherSkewer;
        transform.DOScale(defaultScale, 0.05f);
        SetCanUse(false);
        otherSkewer.SetCanUse(false);
        var tepPos = curPosIn;
        var otherSkewerGrill = otherSkewer.curPosIn.grill;
        var curGrill = curPosIn.grill;
        Move(transform, otherSkewer.curPosIn.pos, 0.25f, () =>
        {
            AudioManager.Instance.PlaySFX(putDownSound);
            curPosIn = otherSkewer.curPosIn;
            curPosIn.skewerAtPos = this;
            transform.SetParent(otherSkewer.curPosIn.pos);
            SetCanUse(true);
            BackUiToDefault();
            if (curGrill != otherSkewerGrill)
            {
                var grill = curPosIn.grill;
                bool isCompletedOneMatch3 = grill.CheckCompletedOneMatch3();
                if (isCompletedOneMatch3)
                {
                    grill.CompletetdOneMatch3(default(System.Action), () =>
                    {
                        if (grill.CheckCanMoveNewSkeweFromPlate())
                            grill.MoveNewSkewerFromPlate();
                    });
                }
            }

        }, 0, Ease.Linear);
        otherSkewer.Move(otherSkewer.transform, curPosIn.pos, 0.25f, () =>
        {
            AudioManager.Instance.PlaySFX(putDownSound);
            otherSkewer.curPosIn = tepPos;
            otherSkewer.curPosIn.skewerAtPos = otherSkewer;
            otherSkewer.transform.SetParent(tepPos.pos);
            otherSkewer.SetCanUse(true);
            otherSkewer.BackUiToDefault();
            if (curGrill != otherSkewerGrill)
            {
                var grill = otherSkewer.curPosIn.grill;
                bool isCompletedOneMatch3 = grill.CheckCompletedOneMatch3();
                if (isCompletedOneMatch3)
                {
                    grill.CompletetdOneMatch3(default(System.Action), () =>
                    {
                        if (grill.CheckCanMoveNewSkeweFromPlate())
                            grill.MoveNewSkewerFromPlate();
                    });
                }
            }
        }, 0, Ease.Linear);
        curPosIn.skewerAtPos = otherSkewer;
        otherSkewer.curPosIn.skewerAtPos = this;
        //

        //if (sprOutLine != null)
        //    sprOutLine.gameObject.SetActive(false);
        //SetDefaultLayer();
        _isMoveByDragg = false;
        levelCtrl.OnPressOb -= HandleMovePickOb;
        if (levelCtrl != null && levelCtrl.choosenSkewer == this)
            levelCtrl.choosenSkewer = null;
    }
    public virtual void Move(Transform posS, Transform PosE, float duration = 1f, Action completed = null, float delay = 0, Ease ease = Ease.Linear)
    {
        _isPressing = false;
        Vector3 targetPos = PosE.position;
        targetPos.z = transform.position.z;
        //var distance = Vector2.Distance(posS.position, targetPos);
        //var duration = distance / speed;
        transform.DOMove(targetPos, duration).SetEase(ease).SetDelay(delay).OnComplete(() =>
        {
            completed?.Invoke();
        });
    }
    public float MoveToCompletedPlate(Transform posMoveTo, float duration = 1f, Action completed = null, float delay = 0, AnimationCurve ease = null)
    {
        SetAllSprLayer();
        SetCanUse(false);
        _isPressing = false;
        Vector3 targetPos = posMoveTo.position;
        targetPos.z = transform.position.z;
        //var distance = Vector2.Distance(transform.position, targetPos);
        //var duration = distance / speed;
        transform.DOScale(pressScale, duration / 5f).OnComplete(() =>
        {
            transform.SetParent(posMoveTo);
            transform.DOScale(posMoveTo.localScale, 4 * duration / 5f);
            transform.DORotate(posMoveTo.localRotation.eulerAngles, 4 * duration / 5f);
        });

        transform.DOMove(targetPos, duration).SetEase(ease).SetDelay(delay).OnComplete(() =>
        {
            completed?.Invoke();
            //curPosIn.skewerAtPos = null;
        });
        return duration;
    }
    public void SetParent(Transform parent)
    {
        if (parent != null)
        {
            this.parent = parent;
            transform.parent = this.parent;
        }
    }
    public void SetType(int skewerType)
    {
        this.skewerType = skewerType;
        Sprite skewerSprite = Resources.Load<Sprite>("SpriteData/Skewer/" + skewerType.ToString());
        Sprite sprShadow = Resources.Load<Sprite>("SpriteData/SkewerOutLine/" + skewerType.ToString());
        //var sprShadow = skewerSprite;
        sprRend.sprite = skewerSprite;
        sprOutLine.sprite = sprShadow;
    }
    public void SetTypeId(int skewerType)
    {
        this.skewerType = skewerType;
    }
    public void SetTypeSkin()
    {
        Sprite skewerSprite = Resources.Load<Sprite>("SpriteData/Skewer/" + skewerType.ToString());
        Sprite sprShadow = Resources.Load<Sprite>("SpriteData/SkewerOutLine/" + skewerType.ToString());
        //var sprShadow = skewerSprite;
        sprRend.sprite = skewerSprite;
        sprOutLine.sprite = sprShadow;
    }
    private Coroutine shakeCoroutine;
    public void ShakeEffect(float angle = 5f, float duration = 0.1f)
    {
        if (gameObject.activeSelf == false) return;
        if (shakeCoroutine != null)
            StopCoroutine(shakeCoroutine);
        shakeCoroutine = StartCoroutine(ShakeRoutine(angle, duration, 2f));
    }

    private IEnumerator ShakeRoutine(float angle, float duration, float interval)
    {
        while (true)
        {
            // Sang phải
            yield return transform.DOLocalRotate(new Vector3(0, 0, angle), duration)
                .SetEase(Ease.InOutSine)
                .WaitForCompletion();

            // Sang trái
            yield return transform.DOLocalRotate(new Vector3(0, 0, -angle), duration * 2)
                .SetEase(Ease.InOutSine)
                .WaitForCompletion();

            // Về giữa
            yield return transform.DOLocalRotate(new Vector3(0, 0, 0), duration)
                .SetEase(Ease.InOutSine)
                .WaitForCompletion();

            // Đợi interval giây trước khi lặp lại
            yield return new WaitForSeconds(interval);
        }
    }
    public void StopShakeEffect()
    {
        if (shakeCoroutine != null)
        {
            StopCoroutine(shakeCoroutine);
            shakeCoroutine = null;
        }
        transform.DOKill();
        transform.localRotation = Quaternion.Euler(0, 0, 0);
    }
    public void HighLight()
    {
        if (gameObject == null)
            Debug.Log("HighLight Skewer " + gameObject.name);
        if (gameObject == null) return;
        Debug.Log("HighLight Skewer!=Null " + gameObject.name);
        if (curPosIn == null || curPosIn.skewerAtPos != this) return;
        var pos = transform.localPosition;
        pos.z = pos.z - zHightLight;
        transform.localPosition = pos;
        levelCtrl.hightLightSkewers.Add(this);
        SetAllSprLayer();
    }
    public void UnHighLight()
    {
        var pos = transform.localPosition;
        pos.z = pos.z + zHightLight;
        transform.localPosition = pos;
        SetDefaultLayer();
    }
    public void RemoveFreeze()
    {
        if (skewerTypeAppear != SkewerTypeAppear.Ice) return;
        skewerTypeAppear = SkewerTypeAppear.Normal;
        // AudioManager.Instance.PlaySFX(putDownSound);
        DOVirtual.DelayedCall(1f, () =>
        {
            var vfxBreakIceInstance = Instantiate(vfxBreakIce, transform.position, Quaternion.identity, transform);
            Destroy(vfxBreakIceInstance, 0.5f);
        });
        sprRendSkin.DOFade(0, 2f).OnComplete(() =>
        {
            // vfx iceBreak
            sprRendSkin.gameObject.SetActive(false);
            UnHighLight();
        });
        levelCtrl.OnCompletedOneMatch3 -= CheckAndBreakIce;
        levelCtrl.StartRemoveIceBooster -= HighLight;
        numOfBreakIce = 0;
        if (curPosIn.grill.CheckCompletedOneMatch3())
            curPosIn.grill.CompletetdOneMatch3(() =>
            {
                if (curPosIn.grill.CheckCanMoveNewSkeweFromPlate())
                    curPosIn.grill.MoveNewSkewerFromPlate();
            });
        // vfxBreakIce.SetActive(false);
    }
    public virtual void SetCanUse(bool canUse)
    {
        Debug.Log("SetCanUse= " + canUse);
        col.enabled = canUse;
        pickBox.enabled = canUse;
    }
    public virtual void SetCanDrag(bool canDrag)
    {
        _isPressing = canDrag;
    }
    public void BackUiToDefault()
    {
        transform.DOScale(defaultScale, 0.05f);
        if (sprOutLine != null)
            sprOutLine.gameObject.SetActive(false);
        SetDefaultLayer();
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.CompareTag("Grill"))
        {
            var grill = collision.GetComponent<Grill>();
            if (grill != null && !colGrills.Contains(grill))
            {
                colGrills.Add(grill);
            }
        }
    }
    private void OnTriggerExit2D(Collider2D collision)
    {
        if (collision.CompareTag("Grill"))
        {
            var grill = collision.GetComponent<Grill>();
            if (grill != null)
            {
                if (colGrills.Contains(grill))
                {
                    colGrills.Remove(grill);
                }
            }
        }
    }
    private void OnDisable()
    {
        if (shakeCoroutine != null)
        {
            StopCoroutine(shakeCoroutine);
            shakeCoroutine = null;
        }
    }
    private void OnDestroy()
    {
        if (levelCtrl != null)
        {
            Debug.Log("OnDestroy Skewer and remove event");
            levelCtrl.StartRemoveIceBooster -= HighLight;
            levelCtrl.OnCompletedOneMatch3 -= CheckAndBreakIce;
            levelCtrl.OnPressOb -= HandleMovePickOb;
            if (levelCtrl != null && levelCtrl.choosenSkewer == this)
                levelCtrl.choosenSkewer = null;
        }
    }
}
public enum SkewerTypeAppear
{
    Normal = 0,
    Secret = 1,
    Ice = 2,
}
