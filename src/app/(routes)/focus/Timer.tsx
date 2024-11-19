'use client';

import useTimer from '@/hooks/useTimer';

type TimerProps = {
  initialTime?: number;
};

const Timer = ({ initialTime = 25 }: TimerProps) => {
  const initTime = initialTime * 60; // 25분
  const {
    secondsLeft,
    isPaused,
    formattedMinutes,
    formattedSeconds,
    start,
    pause,
    reset,
  } = useTimer(initTime);

  return (
    <div className='border border-gray-light rounded-[20px] flex flex-col justify-around items-center h-[546px] max-md:h-[510px] max-sm:h-[358px]'>
      {/* 타이머 제목 */}
      <h2 className='font-extrabold text-2xl'>오늘의 집중</h2>

      {/* 타이머 */}
      {secondsLeft >= 10 && (
        <span className='font-extrabold xl:text-[150px] md:text-[120px] sm:text-[80px] max-sm:text-[80px]'>
          {formattedMinutes + ':' + formattedSeconds}
        </span>
      )}
      {secondsLeft < 10 && secondsLeft >= 0 && (
        <span className='font-extrabold text-red xl:text-[150px] md:text-[120px] sm:text-[80px]'>
          {formattedMinutes + ':' + formattedSeconds}
        </span>
      )}
      {secondsLeft < 0 && (
        <span className='font-extrabold text-gray xl:text-[150px] md:text-[120px] sm:text-[80px]'>
          {formattedMinutes + ':' + formattedSeconds}
        </span>
      )}

      {/* 타이머 관련 버튼 */}
      <div className='flex justify-between gap-6'>
        {secondsLeft === initTime && (
          <button onClick={start}> start! 가능 </button>
        )}
        {secondsLeft !== initTime && secondsLeft >= 0 && (
          <>
            <button
              disabled={isPaused}
              onClick={isPaused ? undefined : pause}
            >
              {isPaused ? 'stop불가능' : 'stop 가능'}
            </button>

            <button
              disabled={!isPaused}
              onClick={isPaused ? start : undefined}
            >
              {isPaused ? 'start! 가능' : 'start! 불가능'}
            </button>
            <button onClick={reset}> reset</button>
          </>
        )}
        {secondsLeft < 0 && (
          <button
            onClick={reset}
            className='text-gray'
          >
            stop!
          </button>
        )}
      </div>
    </div>
  );
};

export { Timer };
