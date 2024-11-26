type TimerDisplayProps = {
  secondsLeft: number;
  formattedMinutes: string;
  formattedSeconds: string;
};

const TimerDisplay = ({
  secondsLeft,
  formattedMinutes,
  formattedSeconds,
}: TimerDisplayProps) => {
  return (
    <span
      className={`font-extrabold text-[150px] ${
        secondsLeft < 0 ? 'text-gray' : secondsLeft < 10 ? 'text-red' : ''
      }`}
    >
      {formattedMinutes + ':' + formattedSeconds}
    </span>
  );
};

export default TimerDisplay;
