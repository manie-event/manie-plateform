// composables/useAuthCookies.js
export const useAuthCookies = () => {
  const token = useCookie('token', {
    maxAge: 60 * 60 * 24 * 30 * 12, // 1 an
    path: '/',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    httpOnly: false,
  });

  const refreshToken = useCookie('refreshToken', {
    default: () => null,
    maxAge: 60 * 60 * 24 * 7, // 7 jours
    path: '/',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    httpOnly: false,
  });

  return {
    token,
    refreshToken,
  };
};
