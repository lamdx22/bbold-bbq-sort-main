using System.Collections;
using DG.Tweening;
using PopupSystem;
using UnityEngine;
using UnityEngine.UI;

namespace BB
{
    public class GameStartController : MonoBehaviour
    {
        public Slider loading;
        public Transform nativeAdParent;
        public Image logo;

        void Awake()
        {
            //Crashlytics.SetCustomKey("Current Scene", "Splash");
            //Crashlytics.Log("Init and Load Data");

            QualitySettings.vSyncCount = 0;
            Application.targetFrameRate = 60;

            // init dotween
            // DOTween.Init(true, true, LogBehaviour.Default);
            // DOTween.SetTweensCapacity(3000, 1000);

            // load playerdata
            Model.Instance.Load();

            // init game data
            //logo?.transform.DOScale(new Vector3(1.1f, 1.1f, 1.1f), 0.4f)
            //    .SetEase(Ease.Linear)
            //    .SetLoops(-1, LoopType.Yoyo);
        }

        void Start()
        {
            //TODO: hardcode for testing
            //PlayerData.current.level = 10;

            loading.value = 0.1f;
            //UMPManager.Instance.Init(isError =>
            //{
            //    BBEventDispatcher.Notify(BBEventId.UMPAgree);
            //    StartCoroutine(DoLoading(5.0f));
            //}, () => { StartCoroutine(DoLoading(2.0f)); });
        }

        private IEnumerator DoLoading(float time)
        {
            float curTime = 0;
            float delta = time / 100;
            while (loading.value < 1.0f)
            {
                loading.value += 1 / 110f;
                yield return new WaitForSecondsRealtime(delta);
            }

            CustomLocalization.Load();
            AudioManager.Instance.SetUpState();
            //AdvertisementManager.Instance.ShowAppOpenAd();
            loading.value = 1.0f;
            yield return new WaitForSecondsRealtime(1.0f);
            Play();
            yield return null;
        }

        public void Play()
        {
            //Load home or game play scene
            //AdvertisementManager.Instance.HideNativeAd();
            LoadSceneUtility.LoadScene(LoadSceneUtility.GameSceneName);
        }

        public void OpenPolicy()
        {
            Application.OpenURL("https://bbold.vn/policy.html");
        }
    }
}