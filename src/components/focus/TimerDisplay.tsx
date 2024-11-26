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
      className={`font-extrabold tabular-nums transition-all text-[80px] md:text-[120px] xl:text-[150px]   ${
        secondsLeft < 0 ? 'text-gray' : secondsLeft < 10 ? 'text-red' : ''
      }`}
    >
      {formattedMinutes + ':' + formattedSeconds}
    </span>
  );
};

export default TimerDisplay;
