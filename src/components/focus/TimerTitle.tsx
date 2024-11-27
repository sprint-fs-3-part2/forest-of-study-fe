/* 아이콘 */
import timerIcon from '@/public/icons/timer_icon.png'; // 타이머
import { IconTag } from '@/components/common/IconTag';

type TimerTitleProps = {
  sessionTimeInSeconds: number;
  secondsLeft: number;
};

const TimerTitle = ({ sessionTimeInSeconds, secondsLeft }: TimerTitleProps) => {
  const isTimerRunning = secondsLeft !== sessionTimeInSeconds;

  return (
    <div className='flex flex-col items-center gap-6'>
      <h2 className='font-extrabold text-2xl'>오늘의 집중</h2>
      {isTimerRunning && (
        <IconTag
          fillColor='white'
          parentComponent='card'
          icon={timerIcon}
          text={formatSecondsToMinutesSeconds(sessionTimeInSeconds)}
          variant='point'
        />
      )}
    </div>
  );
};

export default TimerTitle;

const formatSecondsToMinutesSeconds = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${formattedMinutes}:${formattedSeconds}`;
};
