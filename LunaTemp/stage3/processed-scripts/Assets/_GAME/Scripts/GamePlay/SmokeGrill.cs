using System.Collections;
using UnityEngine;

public class SmokeGrill : MonoBehaviour
{
    public Animator anim;
    public string nameAnim;
    Coroutine changeSmokeCrt;

    public void ChangeAnim(string name)
    {
        if (anim == null) return;
        if (name == "" || name == nameAnim) return;
        anim.ResetTrigger(nameAnim);
        nameAnim = name;
        anim.SetTrigger(nameAnim);
    }

    public void PlayChangeRandomeAnim(Grill grill)
    {
        if (grill.grillType == GrillType.NotMatch3) return;
        changeSmokeCrt = StartCoroutine(RandChangeAnim());
    }

    IEnumerator RandChangeAnim()
    {
        while (true)
        {
            yield return new WaitForSeconds(Random.Range(5, 20f));
            int rand = Random.Range(1, 4);
            if (GameManager.GameState == GameState.Playing)
            {
                switch (rand)
                {
                    case 1:
                        AudioManager.Instance.PlaySFX(AudioClipId.PutInSound);
                        ChangeAnim("smoke1");
                        break;
                    case 2:
                        AudioManager.Instance.PlaySFX(AudioClipId.PutInSound);
                        ChangeAnim("smoke2");
                        break;
                    case 3:
                        AudioManager.Instance.PlaySFX(AudioClipId.PutInSound);
                        ChangeAnim("smoke3");
                        break;
                    default:
                        AudioManager.Instance.PlaySFX(AudioClipId.PutInSound);
                        ChangeAnim("smoke1");
                        break;
                }
            }
            yield return new WaitForSeconds(Random.Range(5, 20f));
        }
    }
    private void OnDestroy()
    {
        if (changeSmokeCrt != null)
        {
            StopCoroutine(changeSmokeCrt);
            changeSmokeCrt = null;
        }
    }
}

