import { axiosInstance } from '@/lib/axios/axiosInstance';
import { GetStudyOptDto } from '@/lib/types/api/data-contracts';

export const apiRequest = async <T>(request: () => Promise<T>): Promise<T> => {
  try {
    return await request();
  } catch (error) {
    console.error('API 요청 중 에러 발생:', error);
    throw error;
  }
};

export const getStudies = async (): Promise<GetStudyOptDto> => {
  return apiRequest(async () => {
    const response = await axiosInstance.get<GetStudyOptDto>('/studies');
    return response.data;
  });
};
