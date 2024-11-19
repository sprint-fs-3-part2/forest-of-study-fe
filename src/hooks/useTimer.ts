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

  // 타이머 화면 표시 처리 (양수일 때)
  const minutes = Math.floor(secondsLeft / 60);
  let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const seconds = secondsLeft % 60;
  let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

  // 타이머 화면 표시 처리 (음수일 때)
  if (minutes < 0) {
    formattedMinutes =
      Math.abs(minutes + 1) < 10
        ? '-0' + Math.abs(minutes + 1)
        : Math.abs(minutes + 1);

    formattedSeconds =
      Math.abs(seconds) < 10 ? '0' + Math.abs(seconds) : Math.abs(seconds);
  }

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
