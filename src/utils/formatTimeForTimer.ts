/**
 *
 * @description 타이머 화면에 표시할 시간을 포맷팅하는 함수입니다.
 */

export const formatTimeForTimer = (minutes: number, seconds: number) => {
  // 유효하지 않은 입력값 처리
  if (!Number.isFinite(minutes) || !Number.isFinite(seconds)) {
    throw new Error('유효하지 않은 입력값입니다.');
  }

  // 초 정규화 (예: 75초 -> 1분 15초)
  const normalizedMinutes = minutes + Math.floor(seconds / 60);
  const normalizedSeconds = seconds % 60;

  const absMinutes = Math.abs(normalizedMinutes);
  const absSeconds = Math.abs(normalizedSeconds);
  // 타이머 화면 표시 처리 (양수일 때 & 음수일 때)
  const formattedMinutes =
    absMinutes < 10
      ? `${minutes < 0 ? '-' : ''}0${absMinutes}`
      : absMinutes.toString();
  const formattedSeconds =
    absSeconds < 10 ? `0${absSeconds}` : absSeconds.toString();

  return { formattedMinutes, formattedSeconds };
};
