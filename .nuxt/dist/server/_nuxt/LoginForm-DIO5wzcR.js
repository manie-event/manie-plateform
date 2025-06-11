import { _ as __nuxt_component_0 } from "./nuxt-link-DZ3wFR7I.js";
import { defineComponent, ref, resolveComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderTeleport } from "vue/server-renderer";
import { Form } from "vee-validate";
import { u as useAuthentification } from "./UseAuthentification-CchpAVzc.js";
import { _ as _sfc_main$1 } from "./errorToaster-DYYIWzPY.js";
import { u as useRouter } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LoginForm",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const checkbox = ref(false);
    const valid = ref(false);
    const authentification = ref({
      password: "",
      email: ""
    });
    const { sendLogin } = useAuthentification();
    const passwordRules = ref([
      (v) => !!v || "Le mot de passe est obligatoire",
      (v) => v && v.length >= 10 || "Le mot de passe doit faire 10 caractères minimum"
    ]);
    const emailRules = ref([
      (v) => !!v || "L'e-mail est obligatoire",
      (v) => /.+@.+\..+/.test(v) || "L'e-mail doit être valide"
    ]);
    const validate = async () => {
      const login = await sendLogin(authentification.value);
      if (login && login.category) {
        if (login.category === "consumer") {
          router.push({ path: "/dashboards/dashboard1" });
        } else {
          router.push({ path: "/dashboards/dashboard2" });
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_label = resolveComponent("v-label");
      const _component_VTextField = resolveComponent("VTextField");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      const _component_NuxtLink = __nuxt_component_0;
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_alert = resolveComponent("v-alert");
      _push(`<!--[--><div class="d-flex align-center text-center mb-6"><div class="text-h6 w-100 px-5 font-weight-regular auth-divider position-relative"><span class="bg-surface px-5 py-3 position-relative text-subtitle-1 text-grey100">Identifiez-vous avec</span></div></div>`);
      _push(ssrRenderComponent(unref(Form), {
        onSubmit: validate,
        class: "mt-5"
      }, {
        default: withCtx(({ errors, isSubmitting }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_label, { class: "text-subtitle-1 font-weight-semibold pb-2 text-grey200" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Email`);
                } else {
                  return [
                    createTextVNode("Email")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VTextField, {
              modelValue: authentification.value.email,
              "onUpdate:modelValue": ($event) => authentification.value.email = $event,
              rules: emailRules.value,
              class: "mb-8",
              placeholder: "info@manie.com",
              required: "",
              autocomplete: "current-email",
              "hide-details": "auto"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_label, { class: "text-subtitle-1 font-weight-semibold pb-2 text-grey200" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Mot de passe`);
                } else {
                  return [
                    createTextVNode("Mot de passe")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VTextField, {
              modelValue: authentification.value.password,
              "onUpdate:modelValue": ($event) => authentification.value.password = $event,
              rules: passwordRules.value,
              required: "",
              "hide-details": "auto",
              placeholder: "**********",
              type: "password",
              autocomplete: "current-password",
              class: "pwdInput"
            }, null, _parent2, _scopeId));
            _push2(`<div class="d-flex flex-wrap align-center my-3 ml-n2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_checkbox, {
              modelValue: checkbox.value,
              "onUpdate:modelValue": ($event) => checkbox.value = $event,
              rules: [(v) => !!v || "You must agree to continue!"],
              required: "",
              "hide-details": "",
              color: "primary"
            }, {
              label: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Se souvenir de cet appareil`);
                } else {
                  return [
                    createTextVNode("Se souvenir de cet appareil")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="ml-sm-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/auth/forgot-password",
              class: "text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Mot de passe oublié ?`);
                } else {
                  return [
                    createTextVNode("Mot de passe oublié ?")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              size: "large",
              rounded: "pill",
              loading: isSubmitting,
              color: "primary",
              disabled: valid.value,
              block: "",
              type: "submit",
              flat: ""
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`M&#39;identifier`);
                } else {
                  return [
                    createTextVNode("M'identifier")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            if (errors.apiError) {
              _push2(`<div class="mt-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_alert, { color: "error" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(errors.apiError)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(errors.apiError), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_v_label, { class: "text-subtitle-1 font-weight-semibold pb-2 text-grey200" }, {
                default: withCtx(() => [
                  createTextVNode("Email")
                ]),
                _: 1
              }),
              createVNode(_component_VTextField, {
                modelValue: authentification.value.email,
                "onUpdate:modelValue": ($event) => authentification.value.email = $event,
                rules: emailRules.value,
                class: "mb-8",
                placeholder: "info@manie.com",
                required: "",
                autocomplete: "current-email",
                "hide-details": "auto"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
              createVNode(_component_v_label, { class: "text-subtitle-1 font-weight-semibold pb-2 text-grey200" }, {
                default: withCtx(() => [
                  createTextVNode("Mot de passe")
                ]),
                _: 1
              }),
              createVNode(_component_VTextField, {
                modelValue: authentification.value.password,
                "onUpdate:modelValue": ($event) => authentification.value.password = $event,
                rules: passwordRules.value,
                required: "",
                "hide-details": "auto",
                placeholder: "**********",
                type: "password",
                autocomplete: "current-password",
                class: "pwdInput"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
              createVNode("div", { class: "d-flex flex-wrap align-center my-3 ml-n2" }, [
                createVNode(_component_v_checkbox, {
                  modelValue: checkbox.value,
                  "onUpdate:modelValue": ($event) => checkbox.value = $event,
                  rules: [(v) => !!v || "You must agree to continue!"],
                  required: "",
                  "hide-details": "",
                  color: "primary"
                }, {
                  label: withCtx(() => [
                    createTextVNode("Se souvenir de cet appareil")
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                createVNode("div", { class: "ml-sm-auto" }, [
                  createVNode(_component_NuxtLink, {
                    to: "/auth/forgot-password",
                    class: "text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Mot de passe oublié ?")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode(_component_v_btn, {
                size: "large",
                rounded: "pill",
                loading: isSubmitting,
                color: "primary",
                disabled: valid.value,
                block: "",
                type: "submit",
                flat: ""
              }, {
                default: withCtx(() => [
                  createTextVNode("M'identifier")
                ]),
                _: 2
              }, 1032, ["loading", "disabled"]),
              errors.apiError ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mt-2"
              }, [
                createVNode(_component_v_alert, { color: "error" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(errors.apiError), 1)
                  ]),
                  _: 2
                }, 1024)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/LoginForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=LoginForm-DIO5wzcR.js.map
