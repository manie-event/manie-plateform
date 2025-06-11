import { _ as __nuxt_component_0 } from './nuxt-link-DZ3wFR7I.mjs';
import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_label = resolveComponent("v-label");
  const _component_VTextField = resolveComponent("VTextField");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-sm-13 mt-8" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_label, { class: "text-subtitle-1 font-weight-medium pb-2 text-lightText" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Type your 6 digits security code`);
      } else {
        return [
          createTextVNode("Type your 6 digits security code")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="d-flex justify-space-between gap-3 mb-2 verification">`);
  _push(ssrRenderComponent(_component_VTextField, null, null, _parent));
  _push(ssrRenderComponent(_component_VTextField, null, null, _parent));
  _push(ssrRenderComponent(_component_VTextField, null, null, _parent));
  _push(ssrRenderComponent(_component_VTextField, null, null, _parent));
  _push(ssrRenderComponent(_component_VTextField, null, null, _parent));
  _push(ssrRenderComponent(_component_VTextField, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_v_btn, {
    color: "primary",
    size: "large",
    rounded: "pill",
    block: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Verify My Account`);
      } else {
        return [
          createTextVNode("Verify My Account")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h6 class="text-h6 mt-5 font-weight-regular"> Didn&#39;t get the code? `);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-primary text-subtitle-1 text-decoration-none pl-1 font-weight-medium"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Resend`);
      } else {
        return [
          createTextVNode(" Resend")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/TwoStepForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TwoStepForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { TwoStepForm as T };
//# sourceMappingURL=TwoStepForm-CZb3ZFwx.mjs.map
