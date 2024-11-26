/* 아이콘 */
import timerIcon from '@/public/icons/timer_icon.png'; // 타이머
import { IconTag } from '@/components/common/IconTag';

type TimerTitleProps = {
  minutesPerSession: number;
  sessionTimeInSeconds: number;
  secondsLeft: number;
};

const TimerTitle = ({
  minutesPerSession,
  sessionTimeInSeconds,
  secondsLeft,
}: TimerTitleProps) => {
  const isTimerRunning = secondsLeft !== sessionTimeInSeconds;
  return (
    <div className='flex flex-col items-center gap-6'>
      <h2 className='font-extrabold text-2xl'>오늘의 집중</h2>
      {isTimerRunning && (
        <IconTag
          fillColor='white'
          parentComponent='card'
          icon={timerIcon}
          text={`${minutesPerSession}:00`}
          variant='point'
        />
      )}
    </div>
  );
};

export default TimerTitle;
