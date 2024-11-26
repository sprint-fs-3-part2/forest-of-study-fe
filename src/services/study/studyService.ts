import { getStudies } from '@/services/study/api/studyApi';

import type { GetStudyDto, StudyQueryType } from './api/types';

export const fetchStudies = async (query?: StudyQueryType) => {
  const studies = await getStudies(query);
  return studies;
};
