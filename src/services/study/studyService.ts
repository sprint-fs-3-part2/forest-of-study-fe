import { getStudies } from '@/services/study/api/studyApi';

export const fetchStudies = async () => {
  const studies = await getStudies();
  // 추가적인 비즈니스 로직이 필요하다면 여기서 처리
  return studies;
};
