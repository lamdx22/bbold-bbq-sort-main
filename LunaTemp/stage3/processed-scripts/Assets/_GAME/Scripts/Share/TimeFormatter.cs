using System;
using UnityEngine; 

public static class TimeFormatter
{
    public static string FormatTime(double totalSeconds)
    {
        if (totalSeconds < 0) 
        {
            totalSeconds = 0;
        }
        TimeSpan time = TimeSpan.FromSeconds(totalSeconds);
        return $"{time.Minutes:00}:{time.Seconds:00}";
    }

    public static string GetHeartTimerDisplay(double timeRemaining, int curHeart, int maxHeart, bool isInfiniteMode = false)
    {
        if (isInfiniteMode)
        {
            if (timeRemaining <= 0)
            {
                return "00:00"; 
            }
            TimeSpan time = TimeSpan.FromSeconds(timeRemaining);
            return string.Format("{0:D2}:{1:D2}", (int)time.TotalMinutes, time.Seconds); 
            // return string.Format("{0:D2}:{1:D2}:{2:D2}", (int)time.TotalHours, time.Minutes, time.Seconds);
        }

        if (curHeart >= maxHeart)
        {
            return CustomLocalization.Get("max"); 
        }

        if (timeRemaining <= 0)
        {
            return "00:00";
        }

        TimeSpan t = TimeSpan.FromSeconds(timeRemaining);
        return string.Format("{0:D2}:{1:D2}", t.Minutes, t.Seconds);
    }
}