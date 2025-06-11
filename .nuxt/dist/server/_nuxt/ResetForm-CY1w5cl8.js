import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useAuthentification } from "./UseAuthentification-CchpAVzc.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ResetForm",
  __ssrInlineRender: true,
  setup(__props) {
    const { sendNewPassword } = useAuthentification();
    const resetPassword = ref({
      email: "",
      newPassword: ""
    });
    const emailRules = ref([
      (v) => !!v || "Votre E-mail est requis",
      (v) => /.+@.+\..+/.test(v) || "Renseignez une adresse valide"
    ]);
    const passwordRules = ref([
      (v) => !!v || "Votre nouveau mot de passe est requis",
      (v) => v.length >= 10 || "Votre nouveau mot de passe doit contenir au minimum 10 caractères"
    ]);
    const patchNewPassword = async () => {
      await sendNewPassword(resetPassword.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_form = resolveComponent("v-form");
      const _component_v_label = resolveComponent("v-label");
      const _component_VTextField = resolveComponent("VTextField");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_form, mergeProps({
        ref: "form",
        onSubmit: patchNewPassword,
        "lazy-validation": "",
        action: "/dashboards/analytical",
        class: "mt-sm-13 mt-8"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_label, { class: "text-subtitle-1 font-weight-medium pb-2 text-lightText" }, {
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
              modelValue: resetPassword.value.email,
              "onUpdate:modelValue": ($event) => resetPassword.value.email = $event,
              rules: emailRules.value,
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_label, { class: "text-subtitle-1 font-weight-medium pb-2 text-lightText" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Nouveau mot de passe`);
                } else {
                  return [
                    createTextVNode("Nouveau mot de passe")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VTextField, {
              modelValue: resetPassword.value.newPassword,
              "onUpdate:modelValue": ($event) => resetPassword.value.newPassword = $event,
              rules: passwordRules.value,
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, {
              size: "large",
              color: "primary",
              to: "/",
              block: "",
              submit: "",
              rounded: "pill"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Réinitialiser mon mot de passe`);
                } else {
                  return [
                    createTextVNode("Réinitialiser mon mot de passe")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_label, { class: "text-subtitle-1 font-weight-medium pb-2 text-lightText" }, {
                default: withCtx(() => [
                  createTextVNode("Email")
                ]),
                _: 1
              }),
              createVNode(_component_VTextField, {
                modelValue: resetPassword.value.email,
                "onUpdate:modelValue": ($event) => resetPassword.value.email = $event,
                rules: emailRules.value,
                required: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
              createVNode(_component_v_label, { class: "text-subtitle-1 font-weight-medium pb-2 text-lightText" }, {
                default: withCtx(() => [
                  createTextVNode("Nouveau mot de passe")
                ]),
                _: 1
              }),
              createVNode(_component_VTextField, {
                modelValue: resetPassword.value.newPassword,
                "onUpdate:modelValue": ($event) => resetPassword.value.newPassword = $event,
                rules: passwordRules.value,
                required: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
              createVNode(_component_v_btn, {
                size: "large",
                color: "primary",
                to: "/",
                block: "",
                submit: "",
                rounded: "pill"
              }, {
                default: withCtx(() => [
                  createTextVNode("Réinitialiser mon mot de passe")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/ResetForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=ResetForm-CY1w5cl8.js.map
