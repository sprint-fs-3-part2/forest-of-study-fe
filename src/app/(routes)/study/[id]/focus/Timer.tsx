'use client';

import { ActionBtn } from '@/components/common/ActionBtn';
import useTimer from '@/hooks/useTimer';

/* 아이콘 */
import playIcon from '@/public/icons/play_icon.png'; // 시작
import stopIcon from '@/public/icons/stop_icon.png'; // 정지
import pauseIcon from '@/public/icons/pause_icon.png'; // 일시정지
import restartIcon from '@/public/icons/restart_icon.png'; // 재시작
import timerIcon from '@/public/icons/timer_icon.png'; // 타이머

import { IconTag } from '@/components/common/IconTag';

const Timer = () => {
  const initialTime = 25;
  const oneMinute = 60;
  const initTime = initialTime * oneMinute; // 25분
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
  } = useTimer(initTime);

  return (
    <>
      <div className='border border-gray-light rounded-[20px] flex flex-col justify-evenly items-center h-[546px] max-md:h-[510px] max-sm:h-[358px] relative'>
        {/* 타이머 제목 */}
        <div className='flex flex-col items-center gap-6'>
          <h2 className='font-extrabold text-2xl'>오늘의 집중</h2>
          {secondsLeft !== initTime && (
            <IconTag
              fillColor='white'
              parentComponent='card'
              icon={timerIcon}
              text={`${initialTime}:00`}
              variant='point'
            />
          )}
        </div>

        {/* 타이머 */}
        <span
          className={`font-extrabold text-[150px] ${
            secondsLeft < 0 ? 'text-gray' : secondsLeft < 10 ? 'text-red' : ''
          }`}
        >
          {formattedMinutes + ':' + formattedSeconds}
        </span>

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
              onClick={finish}
            >
              Stop!
            </ActionBtn>
          )}
        </div>
        {/* 알림 */}
        {initTime !== secondsLeft && isPaused && (
          <Notification
            bgColor='pink'
            textColor='red'
          >
            🚨 집중이 중단되었습니다
          </Notification>
        )}
        {showGetPointNotification && (
          <Notification
            bgColor='green'
            textColor='green-text'
          >
            🎉 {point}포인트를 획득했습니다!
          </Notification>
        )}
      </div>
    </>
  );
};

type NotificationProps = {
  bgColor: string;
  textColor: string;
  children: React.ReactNode;
};

const Notification = ({ bgColor, textColor, children }: NotificationProps) => {
  return (
    <div
      className={`absolute bottom-[-120px] px-7 py-3 bg-${bgColor} text-${textColor} font-medium rounded-xl`}
    >
      {children}
    </div>
  );
};

export { Timer };
