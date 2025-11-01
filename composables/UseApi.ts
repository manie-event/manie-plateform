import { useRuntimeConfig } from '#app';
import axios, { type AxiosInstance } from 'axios';

let apiInstance: AxiosInstance | null = null;

export const useApi = (): AxiosInstance | null => {
  const runtimeConfig = useRuntimeConfig();
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

    // ✅ Interceptor REQUEST — lit toujours le cookie le plus à jour
    apiInstance.interceptors.request.use(
      async (config) => {
        const { token } = useAuthCookies();

        if (process.client && !token.value) {
          await new Promise((resolve) => setTimeout(resolve, 150));
        }

        // ← lu dynamiquement à chaque requête
        if (token.value) {
          config.headers = config.headers || {};
          config.headers.Authorization = `Bearer ${token.value}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // ✅ Interceptor RESPONSE — gère le refresh de manière centralisée
    apiInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        const { token } = useAuthCookies();
        const { refreshToken } = useRefreshToken();

        // Si 401 et qu'on a un refreshToken valide
        if (error.response?.status === 401 && refreshToken.value && !originalRequest._retry) {
          originalRequest._retry = true;
          if (isRefreshing) {
            // ⏳ Si un refresh est déjà en cours → on met la requête en attente
            return new Promise((resolve) => {
              refreshQueue.push(() => {
                originalRequest.headers.Authorization = `Bearer ${token.value}`;
                resolve(apiInstance!.request(originalRequest));
              });
            });
          }

          isRefreshing = true;
          try {
            // 🔁 Appel du refresh
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

              // ✅ Met à jour les headers globaux Axios
              apiInstance!.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;

              // ✅ Relance la requête initiale avec le nouveau token
              originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
              processQueue();
              return apiInstance!.request(originalRequest);
            }
          } catch (refreshError) {
            // 💣 Si le refresh échoue → redirection login
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
