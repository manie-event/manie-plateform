import { useRuntimeConfig } from '#app';
import axios, { type AxiosInstance } from 'axios';

let apiInstance: AxiosInstance | null = null;

export const useApi = (): AxiosInstance => {
  const runtimeConfig = useRuntimeConfig();

  // ✅ Récupère les cookies ICI (contexte Nuxt valide)
  const { token, refreshToken } = useAuthCookies();

  if (!apiInstance) {
    apiInstance = axios.create({
      baseURL: runtimeConfig.public.apiUrl,
    });

    let isRefreshing = false;
    let refreshQueue: (() => void)[] = [];

    const processQueue = () => {
      refreshQueue.forEach((cb) => cb());
      refreshQueue = [];
    };

    apiInstance.interceptors.request.use(
      async (config) => {
        // ✅ Utilise la ref récupérée en haut
        if (process.client && !token.value) {
          await new Promise((resolve) => setTimeout(resolve, 150));
        }

        if (token.value) {
          config.headers = config.headers || {};
          config.headers.Authorization = `Bearer ${token.value}`;
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

          if (isRefreshing) {
            return new Promise((resolve) => {
              refreshQueue.push(() => {
                originalRequest.headers.Authorization = `Bearer ${token.value}`;
                resolve(apiInstance!.request(originalRequest));
              });
            });
          }

          isRefreshing = true;
          try {
            const { data } = await axios.post(
              `${runtimeConfig.public.apiUrl}/auth/refresh-token`,
              { refreshToken: refreshToken.value },
              { headers: { 'Content-Type': 'application/json' } }
            );

            const newAccessToken = data.accessToken.token;
            const newRefreshToken = data.refreshToken;

            if (newAccessToken && newRefreshToken) {
              token.value = newAccessToken;
              refreshToken.value = newRefreshToken;

              apiInstance!.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;

              originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
              processQueue();
              return apiInstance!.request(originalRequest);
            }
          } catch (refreshError) {
            token.value = null;
            refreshToken.value = null;

            if (process.client) {
              // ✅ Navigation avec navigateTo (fonctionne SSR + client)
              await navigateTo('/auth/login');
            }

            return Promise.reject(refreshError);
          } finally {
            isRefreshing = false;
          }
        }

        return Promise.reject(error);
      }
    );
  }

  return apiInstance;
};
