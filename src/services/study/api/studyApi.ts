import { axiosInstance } from '@/lib/axios/axiosInstance';

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
