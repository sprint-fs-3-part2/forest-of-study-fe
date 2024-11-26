import { axiosInstance } from '@/lib/axios/axiosInstance';

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
