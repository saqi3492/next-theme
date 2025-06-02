import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosHeaders } from 'axios';
import { config } from '@/config/config';
import { getLocalStorageItem, handleLogout } from './helpers';

// Extend InternalAxiosRequestConfig to allow custom properties
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  ignoreToken?: boolean;
  rawHeader?: boolean;
}

const AxiosInterceptor = {
  initialize: (): void => {
    axios.defaults.baseURL = config.backendUrl;
    axios.interceptors.request.use(
      (axiosConfig: CustomAxiosRequestConfig) => {
        const authToken = getLocalStorageItem('authentication_token');
        // Ensure headers is always of type AxiosHeaders
        if (!axiosConfig.headers) {
          axiosConfig.headers = new AxiosHeaders();
        }
        if (authToken && !axiosConfig.ignoreToken) {
          axiosConfig.headers.set('Authorization', `Bearer ${authToken}`);
        }
        if (!axiosConfig.rawHeader) {
          axiosConfig.headers.set('Content-Type', 'application/json');
        }
        return axiosConfig;
      },
      error => {
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      (response: AxiosResponse) => {
        return response.data;
      },
      error => {
        if (error.response?.status === 401) {
          handleLogout();
        }
        return Promise.reject(error);
      }
    );
  },
};

export default AxiosInterceptor;
