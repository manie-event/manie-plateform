import { b as useNuxtApp, u as useRouter, a as axiosServices, c as useRuntimeConfig } from "../server.mjs";
import { ref } from "vue";
import { parse } from "cookie-es";
import { getRequestHeader, setCookie, getCookie, deleteCookie } from "h3";
import destr from "destr";
import { isEqual } from "ohash";
import { klona } from "klona";
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  opts.filter ?? (opts.filter = (key) => key === name);
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies[name] ?? ((_a = opts.default) == null ? void 0 : _a.call(opts)));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      nuxtApp._cookies || (nuxtApp._cookies = {});
      if (name in nuxtApp._cookies) {
        if (isEqual(cookie.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
const ERROR_MESSAGES = {
  "email already exists": "L'adresse e-mail est déjà utilisée.",
  "The password field format is invalid": "Le format du champ mot de passe est invalide.",
  "The confirmPassword field and password field must be the same": "Le champ de confirmation du mot de passe et le champ mot de passe doivent être identiques.",
  "The username field must be defined": "Le champ nom d’utilisateur doit être défini.",
  "The email field must be defined": "Le champ d'adresse e-mail doit être défini.",
  "The password field must be defined": "Le champ mot de passe doit être défini.",
  "The email field must be a valid email address": "Le champ d'adresse e-mail doit être une adresse e-mail valide.",
  "User not found or invalid": "Utilisateur non trouvé ou invalide.",
  "The email has already been taken": "L'adresse e-mail a déjà été prise."
};
const errorMessageArray = ref([]);
const addError = (error) => {
  if ("errors" in error && Array.isArray(error.errors)) {
    error.errors.forEach((err) => {
      const parsedError = {
        id: Date.now() + Math.random(),
        ...err,
        message: ERROR_MESSAGES[err.message] || err.message
      };
      errorMessageArray.value.push(parsedError);
      setTimeout(() => {
        errorMessageArray.value = errorMessageArray.value.filter((e) => e.id !== parsedError.id);
      }, 5e3);
    });
  } else if ("message" in error) {
    const parsedError = {
      id: Date.now() + Math.random(),
      message: ERROR_MESSAGES[error.message] || error.message
    };
    errorMessageArray.value = [parsedError];
    setTimeout(() => {
      errorMessageArray.value = [];
    }, 5e3);
  } else {
    console.warn("Format d'erreur non supporté:", error);
  }
};
const useErrorToaster = () => {
  return {
    errorMessageArray,
    addError
  };
};
const useAuthentification = () => {
  const config = useRuntimeConfig();
  const router = useRouter();
  const { addError: addError2 } = useErrorToaster();
  const sendRegister = async (registerInfo) => {
    try {
      const { data } = await axiosServices.post(`${config.public.apiUrl}/auth/register`, registerInfo);
      return data;
    } catch (error) {
      addError2(error);
    }
  };
  const sendLogin = async (authentification) => {
    var _a;
    try {
      const { data } = await axiosServices.post(`${config.public.apiUrl}/auth/login`, authentification);
      if ((_a = data == null ? void 0 : data.token) == null ? void 0 : _a.token) {
        const token = useCookie("token", {
          maxAge: 60 * 60 * 24 * 30,
          path: "/",
          sameSite: "strict",
          secure: true
        });
        token.value = data.token;
        return data;
      }
    } catch (error) {
      addError2(error);
    }
  };
  const checkEmail = async (token) => {
    try {
      const { data } = await axiosServices.get(`${config.public.apiUrl}/auth/verify-email/${token}`);
      if (data) {
        return data;
      }
    } catch (error) {
      addError2(error);
    }
  };
  const sendLogout = async () => {
    try {
      const token = useCookie("token");
      const { data } = await axiosServices.post(`${config.public.apiUrl}/auth/logout`, null, {
        headers: {
          Authorization: `Bearer  ${token}`,
          "Content-Type": "application/json"
        }
      });
      if (data) {
        await router.push("/");
      }
    } catch (error) {
      addError2(error);
    }
  };
  return { sendRegister, sendLogin, sendLogout, checkEmail };
};
export {
  useErrorToaster as a,
  useAuthentification as u
};
//# sourceMappingURL=UseAuthentification-CchpAVzc.js.map
