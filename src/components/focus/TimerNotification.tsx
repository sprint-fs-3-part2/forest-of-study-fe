type TimerNotificationProps = {
  sessionTimeInSeconds: number;
  secondsLeft: number;
  isPaused: boolean;
  point: number;
  showGetPointNotification: boolean;
};

const TimerNotification = ({
  sessionTimeInSeconds,
  secondsLeft,
  isPaused,
  point,
  showGetPointNotification,
}: TimerNotificationProps) => {
  return (
    <>
      {sessionTimeInSeconds !== secondsLeft && isPaused && (
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
    </>
  );
};

export default TimerNotification;

type NotificationProps = {
  bgColor: string;
  textColor: string;
  children: React.ReactNode;
};

const Notification = ({ bgColor, textColor, children }: NotificationProps) => {
  return (
    <div
      className={`absolute bottom-[-50px] px-7 py-3 bg-${bgColor} text-${textColor} font-medium rounded-xl`}
    >
      {children}
    </div>
  );
};
