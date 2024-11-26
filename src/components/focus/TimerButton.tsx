import { ActionBtn } from '@/components/common/ActionBtn';

/* 아이콘 */
import playIcon from '@/public/icons/play_icon.png'; // 시작
import stopIcon from '@/public/icons/stop_icon.png'; // 정지
import pauseIcon from '@/public/icons/pause_icon.png'; // 일시정지
import restartIcon from '@/public/icons/restart_icon.png'; // 재시작

type TimerButtonProps = {
  sessionTimeInSeconds: number;
  secondsLeft: number;
  isPaused: boolean;
  start: () => void;
  pause: () => void;
  reset: () => void;
  finish: () => void;
};

const TimerButton = ({
  sessionTimeInSeconds,
  secondsLeft,
  isPaused,
  start,
  pause,
  reset,
  finish,
}: TimerButtonProps) => {
  const isTimerAtStart = secondsLeft == sessionTimeInSeconds; // 타이머가 시작 상태인지 확인
  const isTimerActive =
    secondsLeft !== sessionTimeInSeconds && secondsLeft >= 0; // 타이머가 동작 중인지 확인
  const isTimerExpired = secondsLeft < 0; // 타이머가 끝난 이후 마이너스 초 표시

  return (
    <div className='flex justify-between gap-6'>
      {isTimerAtStart && (
        <ActionBtn
          variant={'ellipse'}
          icon={playIcon}
          disabled={false}
          onClick={start}
        >
          Start!
        </ActionBtn>
      )}
      {isTimerActive && (
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
      {isTimerExpired && (
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
  );
};

export default TimerButton;
