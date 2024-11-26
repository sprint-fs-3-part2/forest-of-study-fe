import { axiosInstance } from '@/lib/axios/axiosInstance';
import { GetStudyDto } from './types';

export const getStudies = async () => {
  const { data } = await axiosInstance.get('/studies');
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
