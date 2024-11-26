'use client';

import useTimer from '@/hooks/useTimer';

/* 아이콘 */

import TimerTitle from './TimerTitle';
import TimerDisplay from './TimerDisplay';
import TimerButton from './TimerButton';
import TimerNotification from './TimerNotification';

const minutesPerSession = 25; // 25분
const secondsInMinute = 60;
const sessionTimeInSeconds = minutesPerSession * secondsInMinute; // 25분을 초로 변환

const TimerContainer = () => {
  const {
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
  } = useTimer(sessionTimeInSeconds);

  return (
    <>
      <div className='border border-gray-light rounded-[20px] flex flex-col justify-evenly items-center h-[546px] max-md:h-[510px] max-sm:h-[358px]'>
        {/* 타이머 제목 */}
        <TimerTitle
          minutesPerSession={minutesPerSession}
          sessionTimeInSeconds={sessionTimeInSeconds}
          secondsLeft={secondsLeft}
        />
        <TimerDisplay
          secondsLeft={secondsLeft}
          formattedMinutes={formattedMinutes}
          formattedSeconds={formattedSeconds}
        />

        {/* 타이머 관련 버튼 */}
        <TimerButton
          sessionTimeInSeconds={sessionTimeInSeconds}
          secondsLeft={secondsLeft}
          isPaused={isPaused}
          start={start}
          pause={pause}
          reset={reset}
          finish={finish}
        />

        {/* 타이머 관련 알림 (멈춤, 포인트 획득) */}
        <TimerNotification
          sessionTimeInSeconds={sessionTimeInSeconds}
          secondsLeft={secondsLeft}
          isPaused={isPaused}
          point={point}
          showGetPointNotification={showGetPointNotification}
        />
      </div>
    </>
  );
};

export { TimerContainer };
