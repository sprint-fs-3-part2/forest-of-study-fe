import axios, { AxiosRequestConfig } from 'axios';

const API_TIMEOUT = 100000;

const getBaseConfig = (): AxiosRequestConfig => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
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
  return axios.create(config);
};
export const axiosInstance = createAxiosInstance();
