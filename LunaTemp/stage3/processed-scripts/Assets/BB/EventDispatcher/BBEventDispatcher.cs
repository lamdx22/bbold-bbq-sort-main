using System;
using System.Collections.Generic;
using UnityEngine;

public class BBEventDispatcher : Singleton<BBEventDispatcher>
{
    public static void Register(BBEventId eventId, Action<object> callback)
    {
        Instance._allCallbacks.TryAdd(eventId, null);
        Instance._allCallbacks[eventId] += callback;
    }

    public static void Remove(BBEventId eventId, Action<object> callback)
    {
        if (Instance._allCallbacks.ContainsKey(eventId))
        {
            Instance._allCallbacks[eventId] -= callback;
        }
    }

    public static void Notify(BBEventId eventId, object param = null)
    {
#if UNITY_EDITOR
        //Debug.Log(eventId);
#endif
        if (!Instance._allCallbacks.ContainsKey(eventId))
        {
            return;
        }

        if (Instance._allCallbacks.TryGetValue(eventId, out var callback))
        {
            callback?.Invoke(param);
        }
    }

    public static void Clears()
    {
        Instance._allCallbacks.Clear();
    }

    private readonly Dictionary<BBEventId, Action<object>> _allCallbacks = new Dictionary<BBEventId, Action<object>>();
}