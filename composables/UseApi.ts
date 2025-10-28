import { useRuntimeConfig } from '#app';
import axios, { type AxiosInstance } from 'axios';

let apiInstance: AxiosInstance | null = null;

export const useApi = (): AxiosInstance | null => {
  const runtimeConfig = useRuntimeConfig();
  const { refreshToken } = useRefreshToken();
  const { token } = useAuthCookies();
  const router = useRouter();
  let isRefreshing = false;
  let refreshQueue: (() => void)[] = [];

  const processQueue = () => {
    refreshQueue.forEach((cb) => cb());
    refreshQueue = [];
  };

  if (!apiInstance) {
    apiInstance = axios.create({
      baseURL: runtimeConfig.public.apiUrl,
    });

    apiInstance.interceptors.request.use(
      (config) => {
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
          (originalRequest as any)._retry = true;

          if (isRefreshing) {
            // Attendre que le refresh en cours se termine
            return new Promise((resolve) => {
              refreshQueue.push(() => {
                originalRequest.headers.Authorization = `Bearer ${token.value}`;
                resolve(apiInstance!.request(originalRequest));
              });
            });
          }

          isRefreshing = true;
          try {
            console.log('[REFRESH TOKEN]', refreshToken.value);
            console.log('[REFRESH BODY]', { refreshToken: refreshToken.value });
            const { data } = await axios.post(
              `http://127.0.0.1:3333/auth/refresh-token`,
              { refreshToken: refreshToken.value },
              { headers: { 'Content-Type': 'application/json' } }
            );

            console.log('[REFRESH RESPONSE RAW]', data);

            const newAccessToken = data.token?.token;
            const newRefreshToken = data.refreshToken;

            console.log('[PARSED TOKENS]', { newAccessToken, newRefreshToken });

            if (newAccessToken && newRefreshToken) {
              token.value = newAccessToken;
              refreshToken.value = newRefreshToken;
              originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
              processQueue();
              return apiInstance!.request(originalRequest);
            }
          } catch (refreshError) {
            token.value = null;
            refreshToken.value = null;
            await router.push('/auth/login');
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
