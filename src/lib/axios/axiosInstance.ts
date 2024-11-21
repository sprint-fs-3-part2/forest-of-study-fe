import axios, { AxiosRequestConfig } from 'axios';

const getBaseConfig = (): AxiosRequestConfig => {
  return {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

const createAxiosInstance = () => {
  const config = getBaseConfig();
  return axios.create(config);
};
export const axiosInstance = createAxiosInstance();
