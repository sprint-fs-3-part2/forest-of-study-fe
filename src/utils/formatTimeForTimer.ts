/**
 *
 * @description 타이머 화면에 표시할 시간을 포맷팅하는 함수입니다.
 */

export const formatTimeForTimer = (minutes: number, seconds: number) => {
  // 유효하지 않은 입력값 처리
  if (!Number.isFinite(minutes) || !Number.isFinite(seconds)) {
    throw new Error('유효하지 않은 입력값입니다.');
  }

  // 음수 초 처리 로직 개선
  let totalSeconds = minutes * 60 + seconds;
  const isNegative = totalSeconds < 0;
  totalSeconds = Math.abs(totalSeconds);

  const normalizedMinutes = Math.floor(totalSeconds / 60);
  const normalizedSeconds = totalSeconds % 60;

  // minutes가 마이너스일 때 +1 해주는 로직
  const adjustedMinutes =
    isNegative && normalizedMinutes > 0
      ? normalizedMinutes - 1
      : normalizedMinutes;

  const formattedMinutes =
    adjustedMinutes === 0 && isNegative
      ? '-00'
      : adjustedMinutes < 10
        ? `${isNegative ? '-' : ''}0${Math.abs(adjustedMinutes)}`
        : `${isNegative ? '-' : ''}${adjustedMinutes}`;

  const formattedSeconds =
    normalizedSeconds === 0 && isNegative
      ? '01'
      : normalizedSeconds < 10
        ? `0${normalizedSeconds}`
        : `${normalizedSeconds}`;

  return { formattedMinutes, formattedSeconds };
};
