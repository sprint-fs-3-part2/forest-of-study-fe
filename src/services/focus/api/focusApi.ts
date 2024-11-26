import { axiosInstance } from '@/lib/axios/axiosInstance';

const POINTS_URL = 'points';

// 오늘의 집중 완료후, 포인트 적립 요청
export const patchFocusPoint = async (studyId: string, points: number) => {
  const { data } = await axiosInstance.patch(`/${POINTS_URL}/${studyId}`, {
    points,
  });
  return data;
};
