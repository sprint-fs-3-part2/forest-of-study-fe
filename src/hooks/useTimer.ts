import { formatTimeForTimer } from '@/utils/formatTimeForTimer';
import { useEffect, useRef, useState } from 'react';

type TimerReturnType = {
  secondsLeft: number; // 남은 시간
  isPaused: boolean; // 일시정지 상태
  formattedMinutes: string; // 포맷팅된 분
  formattedSeconds: string; // 포맷팅된 초
  point: number; // 포인트
  showGetPointNotification: boolean; // 포인트 획득 알림창 표시 여부
  start: () => void; // 타이머 시작
  pause: () => void; // 타이머 일시정지
  reset: () => void; // 타이머 초기화
  finish: () => void; // 타이머 완료(포인트 획득 요청 및 초기화)
};

type TimerProps = {
  initialTime: number;
  onPointsUpdate: (points: number) => void;
};

const useTimer = ({
  initialTime,
  onPointsUpdate,
}: TimerProps): TimerReturnType => {
  if (initialTime < 0) {
    throw new Error('초기 시간은 0보다 작을 수 없습니다.');
  }

  const [isPaused, setIsPaused] = useState<boolean>(true); // 일시정지 상태
  const [secondsLeft, setSecondsLeft] = useState<number>(initialTime); // 남은 시간
  const [showGetPointNotification, setGetPointShowNotification] =
    useState<boolean>(false); // 포인트 획득 알림창 표시 여부
  const [point, setPoint] = useState<number>(0);

  const secondsLeftRef = useRef<number>(secondsLeft);
  const isPausedRef = useRef<boolean>(isPaused);
  let hideNotificationTimeout: NodeJS.Timeout;

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

  // 타이머 초기화
  const reset = () => {
    setIsPaused(true);
    isPausedRef.current = true;
    setSecondsLeft(initialTime);
    secondsLeftRef.current = initialTime;
  };

  // 타이머 완료 버튼 클릭 시 초기화
  const finish = async () => {
    // 합산 포인트 계산
    const elapsedTime = initialTime - secondsLeftRef.current; // 경과 시간
    const secondsPerMinute = 60;
    const secondsPerTenMinutes = secondsPerMinute * 10;
    const bonusPerTenMinutes = 1; // 10분당 1포인트
    const completionBonus = 3; // 완수 보너스 3포인트

    const bonusPoints =
      Math.floor(elapsedTime / secondsPerTenMinutes) * bonusPerTenMinutes;
    const finalPoints = bonusPoints + completionBonus;

    setPoint(finalPoints);

    onPointsUpdate(finalPoints); // 상위 컴포넌트에 포인트 업데이트 요청

    // 알림창 표시
    setGetPointShowNotification(true);
    // 5초 후 알림창 숨김
    hideNotificationTimeout = setTimeout(() => {
      setGetPointShowNotification(false);
    }, 5000);

    // 타이머 초기화
    reset();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPausedRef.current) return;
      tick();
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(hideNotificationTimeout);
    };
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
    point,
    showGetPointNotification,
    start,
    pause,
    reset,
    finish,
  };
};

export default useTimer;
