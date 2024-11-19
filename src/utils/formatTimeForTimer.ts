/**
 *
 * @description 타이머 화면에 표시할 시간을 포맷팅하는 함수입니다.
 */

export const formatTimeForTimer = (minutes: number, seconds: number) => {
  const absMinutes = Math.abs(minutes);
  const absSeconds = Math.abs(seconds);
  // 타이머 화면 표시 처리 (양수일 때 & 음수일 때)
  const formattedMinutes =
    absMinutes < 10
      ? `${minutes < 0 ? '-' : ''}0${absMinutes}`
      : absMinutes.toString();
  const formattedSeconds =
    absSeconds < 10 ? `0${absSeconds}` : absSeconds.toString();

  return { formattedMinutes, formattedSeconds };
};
