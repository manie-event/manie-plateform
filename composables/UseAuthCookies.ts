// composables/useAuthCookies.js
export const useAuthCookies = () => {
  // Le token d’accès : OK pour le JS car il expire vite
  const token = useCookie('token', {
    maxAge: 60 * 60 * 24, // 1 jour
    path: '/',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    httpOnly: false, // accessToken peut rester accessible au JS
  });

  return {
    token,
  };
};
export const useRefreshToken = () => {
  const refreshToken = useCookie('refreshToken', {
    maxAge: 60 * 60 * 24 * 7, // 7 jours, par ex.
    path: '/',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    httpOnly: false, // si tu veux le manipuler en JS
  });

  return {
    refreshToken,
  };
};
