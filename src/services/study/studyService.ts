import { getStudies } from '@/services/study/api/studyApi';

export const fetchStudies = async () => {
  const studies = await getStudies();
  return studies;
};
