import { defineComponent, ref, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderTeleport } from 'vue/server-renderer';
import { u as useAuthentification } from './UseAuthentification-CchpAVzc.mjs';
import { _ as _sfc_main$1 } from './errorToaster-DYYIWzPY.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RegisterForm",
  __ssrInlineRender: true,
  setup(__props) {
    const { sendRegister } = useAuthentification();
    const registerForm = ref({
      username: "",
      category: "professional",
      password: "",
      confirmPassword: "",
      email: ""
    });
    const valid = ref(true);
    const passwordRules = ref([
      (v) => !!v || "Le mot de passe est obligatoire",
      (v) => v && v.length >= 10 || "Le mot de passe doit faire 10 caract\xE8res minimum"
    ]);
    const checkPasswordRules = ref([
      (v) => !!v || "La confirmation du mot de passe est obligatoire",
      (v) => v === registerForm.value.password || "Les mots de passe doivent \xEAtre identiques"
    ]);
    const emailRules = ref([
      (v) => !!v || "L'e-mail est obligatoire",
      (v) => /.+@.+\..+/.test(v) || "L'e-mail doit \xEAtre valide"
    ]);
    const nameRules = ref([(v) => !!v || "Votre pseudo est obligatoire"]);
    const register = async () => {
      await sendRegister(registerForm.value);
      registerForm.value = {
        username: "",
        category: "professional",
        password: "",
        confirmPassword: "",
        email: ""
      };
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_form = resolveComponent("v-form");
      const _component_v_label = resolveComponent("v-label");
      const _component_v_switch = resolveComponent("v-switch");
      const _component_VTextField = resolveComponent("VTextField");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<!--[--><div class="d-flex align-center text-center mb-6"><div class="text-h6 w-100 px-5 font-weight-regular auth-divider position-relative"><span class="bg-surface px-5 py-3 position-relative text-subtitle-1 text-grey100">M&#39;enregistrer avec</span></div></div>`);
      _push(ssrRenderComponent(_component_v_form, {
        ref: "form",
        modelValue: valid.value,
        "onUpdate:modelValue": ($event) => valid.value = $event,
        "lazy-validation": "",
        class: "mt-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex gap-2 align-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_label, { class: "text-subtitle-1 font-weight-medium" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Vous \xEAtes :`);
                } else {
                  return [
                    createTextVNode("Vous \xEAtes :")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="d-flex align-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_label, { class: "text-subtitle-1 font-weight-medium" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Prestataire`);
                } else {
                  return [
                    createTextVNode("Prestataire")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_switch, {
              modelValue: registerForm.value.category,
              "onUpdate:modelValue": ($event) => registerForm.value.category = $event,
              "false-value": "professional",
              "true-value": "consumer",
              color: registerForm.value.category === "consumer" ? "success" : "primary",
              "hide-details": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(registerForm.value.category)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(registerForm.value.category), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_label, { class: "text-subtitle-1 font-weight-medium" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Client`);
                } else {
                  return [
                    createTextVNode("Client")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="d-flex gap-4"${_scopeId}><div class="w-100"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_label, { class: "text-subtitle-1 font-weight-medium pb-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Pseudo`);
                } else {
                  return [
                    createTextVNode("Pseudo")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VTextField, {
              modelValue: registerForm.value.username,
              "onUpdate:modelValue": ($event) => registerForm.value.username = $event,
              rules: nameRules.value,
              required: "",
              placeholder: "Votre nom d'utilisateur"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_v_label, { class: "text-subtitle-1 font-weight-medium pb-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Email`);
                } else {
                  return [
                    createTextVNode("Email")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VTextField, {
              modelValue: registerForm.value.email,
              "onUpdate:modelValue": ($event) => registerForm.value.email = $event,
              rules: emailRules.value,
              required: "",
              autocomplete: "new-email",
              placeholder: "info@manie.com"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_label, { class: "text-subtitle-1 font-weight-medium pb-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Mot de passe`);
                } else {
                  return [
                    createTextVNode("Mot de passe")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VTextField, {
              modelValue: registerForm.value.password,
              "onUpdate:modelValue": ($event) => registerForm.value.password = $event,
              rules: passwordRules.value,
              placeholder: "**********",
              required: "",
              autocomplete: "new-password",
              type: "password",
              variant: "outlined",
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_label, { class: "text-subtitle-1 font-weight-medium pb-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Je confirme mon mot de passe`);
                } else {
                  return [
                    createTextVNode("Je confirme mon mot de passe")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VTextField, {
              modelValue: registerForm.value.confirmPassword,
              "onUpdate:modelValue": ($event) => registerForm.value.confirmPassword = $event,
              rules: checkPasswordRules.value,
              type: "password",
              placeholder: "**********",
              required: "",
              autocomplete: "new-password",
              variant: "outlined",
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, {
              size: "large",
              class: "mt-2",
              color: "primary",
              block: "",
              submit: "",
              rounded: "pill",
              onClick: register
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Je cr\xE9er mon compte`);
                } else {
                  return [
                    createTextVNode("Je cr\xE9er mon compte")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "d-flex gap-2 align-center" }, [
                createVNode(_component_v_label, { class: "text-subtitle-1 font-weight-medium" }, {
                  default: withCtx(() => [
                    createTextVNode("Vous \xEAtes :")
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "d-flex align-center gap-2" }, [
                  createVNode(_component_v_label, { class: "text-subtitle-1 font-weight-medium" }, {
                    default: withCtx(() => [
                      createTextVNode("Prestataire")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_switch, {
                    modelValue: registerForm.value.category,
                    "onUpdate:modelValue": ($event) => registerForm.value.category = $event,
                    "false-value": "professional",
                    "true-value": "consumer",
                    color: registerForm.value.category === "consumer" ? "success" : "primary",
                    "hide-details": ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(registerForm.value.category), 1)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "color"]),
                  createVNode(_component_v_label, { class: "text-subtitle-1 font-weight-medium" }, {
                    default: withCtx(() => [
                      createTextVNode("Client")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "d-flex gap-4" }, [
                createVNode("div", { class: "w-100" }, [
                  createVNode(_component_v_label, { class: "text-subtitle-1 font-weight-medium pb-2" }, {
                    default: withCtx(() => [
                      createTextVNode("Pseudo")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VTextField, {
                    modelValue: registerForm.value.username,
                    "onUpdate:modelValue": ($event) => registerForm.value.username = $event,
                    rules: nameRules.value,
                    required: "",
                    placeholder: "Votre nom d'utilisateur"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                ])
              ]),
              createVNode(_component_v_label, { class: "text-subtitle-1 font-weight-medium pb-2" }, {
                default: withCtx(() => [
                  createTextVNode("Email")
                ]),
                _: 1
              }),
              createVNode(_component_VTextField, {
                modelValue: registerForm.value.email,
                "onUpdate:modelValue": ($event) => registerForm.value.email = $event,
                rules: emailRules.value,
                required: "",
                autocomplete: "new-email",
                placeholder: "info@manie.com"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
              createVNode(_component_v_label, { class: "text-subtitle-1 font-weight-medium pb-2" }, {
                default: withCtx(() => [
                  createTextVNode("Mot de passe")
                ]),
                _: 1
              }),
              createVNode(_component_VTextField, {
                modelValue: registerForm.value.password,
                "onUpdate:modelValue": ($event) => registerForm.value.password = $event,
                rules: passwordRules.value,
                placeholder: "**********",
                required: "",
                autocomplete: "new-password",
                type: "password",
                variant: "outlined",
                color: "primary"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
              createVNode(_component_v_label, { class: "text-subtitle-1 font-weight-medium pb-2" }, {
                default: withCtx(() => [
                  createTextVNode("Je confirme mon mot de passe")
                ]),
                _: 1
              }),
              createVNode(_component_VTextField, {
                modelValue: registerForm.value.confirmPassword,
                "onUpdate:modelValue": ($event) => registerForm.value.confirmPassword = $event,
                rules: checkPasswordRules.value,
                type: "password",
                placeholder: "**********",
                required: "",
                autocomplete: "new-password",
                variant: "outlined",
                color: "primary"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
              createVNode(_component_v_btn, {
                size: "large",
                class: "mt-2",
                color: "primary",
                block: "",
                submit: "",
                rounded: "pill",
                onClick: register
              }, {
                default: withCtx(() => [
                  createTextVNode("Je cr\xE9er mon compte")
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/RegisterForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=RegisterForm-yDtuEVnE.mjs.map
