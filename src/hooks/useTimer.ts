import { formatTimeForTimer } from '@/utils/formatTimeForTimer';
import { useEffect, useRef, useState } from 'react';

const useTimer = (initialTime: number) => {
  const [isPaused, setIsPaused] = useState(true); // 일시정지 상태
  const [secondsLeft, setSecondsLeft] = useState(initialTime); // 남은 시간

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);

  // 1초마다 실행되는 함수
  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  };

  // 타이머 시작
  const start = () => {
    setIsPaused(false);
    isPausedRef.current = false;
  };

  // 타이머 일시정지
  const pause = () => {
    setIsPaused(true);
    isPausedRef.current = true;
  };

  // 초기화 기능
  const reset = () => {
    setIsPaused(true);
    isPausedRef.current = true;
    setSecondsLeft(initialTime);
    secondsLeftRef.current = initialTime;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPausedRef.current) return;
      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const { formattedMinutes, formattedSeconds } = formatTimeForTimer(
    minutes,
    seconds,
  );

  return {
    secondsLeft,
    isPaused,
    formattedMinutes,
    formattedSeconds,
    start,
    pause,
    reset,
  };
};

export default useTimer;
