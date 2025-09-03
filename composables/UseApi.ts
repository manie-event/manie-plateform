import { navigateTo, useCookie, useRuntimeConfig } from '#app';
import axios, { type AxiosInstance } from 'axios';

let apiInstance: AxiosInstance | null = null;

export const useApi = (): AxiosInstance | null => {
  const runtimeConfig = useRuntimeConfig();

  if (process.server) return null;

  if (!apiInstance) {
    const refreshToken = useCookie('refreshToken');
    const accessToken = useCookie('token');

    apiInstance = axios.create({
      baseURL: runtimeConfig.public.apiUrl,
    });

    apiInstance.interceptors.request.use(
      (config) => {
        if (accessToken.value) {
          config.headers = config.headers || {};
          config.headers.Authorization = `Bearer ${accessToken.value}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    apiInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && refreshToken.value && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const response = await axios.post(
              `${runtimeConfig.public.apiUrl}/auth/refresh-token`,
              { refreshToken: refreshToken.value },
              {
                headers: {
                  Authorization: `Bearer ${accessToken.value}`,
                  'Content-Type': 'application/json',
                },
              }
            );

            if (response.data) {
              const tokenObject = response.data.accessToken.token;
              const newRefreshToken = response.data.refreshToken;

              if (tokenObject?.value && newRefreshToken) {
                accessToken.value = tokenObject.value;
                refreshToken.value = newRefreshToken;

                originalRequest.headers.Authorization = `Bearer ${tokenObject.value}`;
                return apiInstance!.request(originalRequest);
              }
            }
          } catch (refreshError) {
            accessToken.value = null;
            refreshToken.value = null;
            await navigateTo('/auth/login');
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );
  }

  return apiInstance;
};
