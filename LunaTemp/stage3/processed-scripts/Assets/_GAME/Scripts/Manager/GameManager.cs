using UnityEngine;

public enum GameState
{
    Ready,
    Playing,
    Pause,
    Finish,
}

public class GameManager : SingletonMonoBehaviour<GameManager>
{
    public static GameState GameState { get; private set; }
    public UIManager uiManager;
    [Header("LEVEL FROM 1 TO 200")] public int level = 1;

    private void Awake()
    {
        Application.targetFrameRate = 60;
    }

    public void Start()
    {
        Model.Instance.Load();
        PlayerData.current.level = level;
        AudioManager.Instance.SetUpState();
        uiManager.Initialize(this);
        SwitchGameState(GameState.Ready);
        StartGame();
    }

    private void StartGame()
    {
        //AudioManager.Instance.PlayMusic(AudioClipId.BackgroundMusic);
        uiManager.ActiveScreen<PlayScreen>();
        GameManager.Instance.SwitchGameState(GameState.Playing);
    }

    public void SwitchGameState(GameState newState)
    {
        Debug.Log("ChangeGameSate :" + newState);
        GameState = newState;
        if (uiManager.ActiveScreenUI() != null)
        {
            uiManager.ActiveScreenUI().OnGameStateChanged(newState);
        }
    }

    public void Finish()
    {
    }
}