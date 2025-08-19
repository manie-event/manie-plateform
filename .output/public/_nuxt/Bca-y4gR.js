import { u as y } from './DCvGJmM2.js';
import { u as d } from './nI9jmXyo.js';
import { s as f, j as g, i as m, D as n, at as v } from './RV8HHTPq.js';
const z = () => {
  const c = d('token'),
    t = v(),
    o = g(),
    { addError: a, addSuccess: i } = y(),
    u = m(),
    { isStoringUserAccepeted: h } = f(u),
    { setUser: l } = u;
  return {
    sendRegister: async (r) => {
      try {
        const { data: e } = await n.post(`${t.public.apiUrl}/auth/register`, r);
        if (e)
          return (
            i('Inscription réussie, veuillez vérifier votre email pour confirmer votre compte.'),
            await o.push('/auth/login'),
            e
          );
      } catch {
        a({ message: 'Veuillez vérifier que le SIRET soit valide.' });
      }
    },
    sendLogin: async (r) => {
      var e;
      try {
        const { data: s } = await n.post(`${t.public.apiUrl}/auth/login`, r),
          p = (e = s == null ? void 0 : s.token) == null ? void 0 : e.token;
        if ((i('Connexion réussie.'), p && h.value)) {
          const w = d('token', {
            maxAge: 31104e3,
            path: '/',
            sameSite: 'strict',
            secure: !0,
            httpOnly: !1,
          });
          ((w.value = p),
            s.user.category === 'consumer'
              ? (l(s.user), o.push({ path: '/dashboards/dashboard-client' }))
              : (l(s.user), o.push({ path: '/dashboards/dashboard2' })));
        } else throw new Error('Token non reçu du serveur');
      } catch (s) {
        throw (console.error('Login error:', s), a(s), s);
      }
    },
    sendLogout: async () => {
      try {
        const { data: r } = await n.post(`${t.public.apiUrl}/auth/logout`, null, {
          headers: { Authorization: `Bearer  ${c.value}`, 'Content-Type': 'application/json' },
        });
        r && (i('Déconnexion réussie.'), await o.push('/'));
      } catch (r) {
        a(r);
      }
    },
    checkEmail: async (r) => {
      try {
        const { data: e } = await n.get(`${t.public.apiUrl}/auth/verify-email/${r}`);
        if (e) return (i('Email vérifié avec succès, vous pouvez maintenant vous connecter.'), e);
      } catch (e) {
        (console.error('Error in checkEmail:', e), a(e));
      }
    },
    sendNewPassword: async (r) => {
      try {
        const { data: e } = await n.post(`${t.public.apiUrl}/auth/forgot-password`, { email: r });
        if (e)
          return (
            i('Un email de réinitialisation de mot de passe a été envoyé.'),
            await o.push('/auth/login'),
            e
          );
      } catch (e) {
        a(e);
      }
    },
    registerNewPassword: async (r) => {
      try {
        const { data: e } = await n.post(`${t.public.apiUrl}/auth/reset-password`, r, {
          headers: { Authorization: `Bearer  ${c.value}`, 'Content-Type': 'application/json' },
        });
        if (e) return (i('Mot de passe mis à jour avec succès.'), await o.push('/auth/login'), e);
      } catch (e) {
        throw (console.error('Error in registerNewPassword:', e), a(e), e);
      }
    },
  };
};
export { z as u };
