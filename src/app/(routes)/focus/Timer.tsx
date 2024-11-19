'use client';

import { ActionBtn } from '@/components/common/ActionBtn';
import useTimer from '@/hooks/useTimer';

/* 아이콘 */
import playIcon from '@/public/icons/play_icon.png'; // 시작
import stopIcon from '@/public/icons/stop_icon.png'; // 정지
import pauseIcon from '@/public/icons/pause_icon.png'; // 일시정지
import restartIcon from '@/public/icons/restart_icon.png'; // 재시작

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
          <ActionBtn
            variant={'ellipse'}
            icon={playIcon}
            disabled={false}
            onClick={start}
          >
            Start!
          </ActionBtn>
        )}
        {secondsLeft !== initTime && secondsLeft >= 0 && (
          <>
            <ActionBtn
              variant={'circle'}
              icon={pauseIcon}
              disabled={isPaused}
              onClick={isPaused ? undefined : pause}
            />
            <ActionBtn
              variant={'ellipse'}
              icon={playIcon}
              disabled={!isPaused}
              onClick={isPaused ? start : undefined}
            >
              Start!
            </ActionBtn>
            <ActionBtn
              variant={'circle'}
              icon={restartIcon}
              disabled={!isPaused}
              onClick={reset}
            />
          </>
        )}
        {secondsLeft < 0 && (
          <ActionBtn
            variant={'ellipse'}
            icon={stopIcon}
            disabled={false}
            onClick={reset}
          >
            Stop!
          </ActionBtn>
        )}
      </div>
    </div>
  );
};

export { Timer };
