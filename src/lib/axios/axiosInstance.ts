import axios, { AxiosRequestConfig } from 'axios';

const API_TIMEOUT = 10000;

const getBaseConfig = (): AxiosRequestConfig => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000';

  return {
    baseURL: baseURL,
    timeout: API_TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

const createAxiosInstance = () => {
  const config = getBaseConfig();
  const axiosInstance = axios.create(config);

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            console.error('인증 에러');
            break;
          case 404:
            console.error('리소스를 찾을 수 없습니다');
            break;
          case 500:
            console.error('서버 에러');
            break;
          default:
            console.error('API 요청 중 에러 발생:', error);
        }
      } else if (error.request) {
        console.error('네트워크 에러');
      }

      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export const axiosInstance = createAxiosInstance();
