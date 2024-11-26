import { axiosInstance } from '@/lib/axios/axiosInstance';
import { GetStudyDto } from './types';

import type { StudyQueryType } from './types';

export const getStudies = async (query?: StudyQueryType) => {
  const { data } = await axiosInstance.get('/studies', { params: query });
  return data;
};

export const getStudyById = async (id: string) => {
  const { data } = await axiosInstance.get(`/studies/${id}`);
  return data;
};

export const deleteStudy = async (id: string) => {
  await axiosInstance.delete(`/studies/${id}`);
};

export const getRecentStudy = async (ids: string[]) => {
  const { data } = await axiosInstance.post<GetStudyDto[]>(`/studies/recent`, {
    uuids: ids,
  });
  return data;
};
