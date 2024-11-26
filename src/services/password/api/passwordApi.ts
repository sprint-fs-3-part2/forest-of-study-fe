import { axiosInstance } from '@/lib/axios/axiosInstance';

export const checkPassword = async (studyId: string, password: string) => {
  const { data } = await axiosInstance.post<boolean>(
    `/studies/${studyId}/verify`,
    {
      password,
    },
  );
  return data;
};
