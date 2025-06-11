import { defineComponent, mergeProps, unref, useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { c as _imports_0$1 } from "./Layout-pJxOOMlF.js";
const _imports_0 = publicAssetsURL("/images/front-pages/background/left-widget.png");
const _imports_1 = publicAssetsURL("/images/front-pages/background/right-widget.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LogoIcon",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "logo" }, _attrs))}><img${ssrRenderAttr("src", unref(_imports_0$1))} alt="home"></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/logo/LogoIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PurchaseTemplate",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-primary space-p-96 template position-relative overflow-hidden" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="widget" class="left-widget d-xl-block d-none">`);
      _push(ssrRenderComponent(_component_v_container, { class: "max-width-1000" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-center"${_scopeId}><div class="round-56 d-flex justify-center align-center rounded-lg bg-surface elevation-4 lh-normal"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`</div></div><h3 class="display-1 font-weight-bold text-center py-6"${_scopeId}> Focus on what truly matters—creating stunning, functional designs. </h3><div class="max-w-600 mx-auto"${_scopeId}><p class="text-18 text-center"${_scopeId}> Designed for ease of use and customization, this template help you build professional dashboards faster. </p></div><div class="d-flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              class: "mt-6 px-10 m-btn-full",
              variant: "outlined",
              rounded: "pill",
              target: "_blank",
              href: "/auth/register",
              color: "white",
              size: "large",
              flat: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Register`);
                } else {
                  return [
                    createTextVNode("Register")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex justify-center" }, [
                createVNode("div", { class: "round-56 d-flex justify-center align-center rounded-lg bg-surface elevation-4 lh-normal" }, [
                  createVNode(_sfc_main$1)
                ])
              ]),
              createVNode("h3", { class: "display-1 font-weight-bold text-center py-6" }, " Focus on what truly matters—creating stunning, functional designs. "),
              createVNode("div", { class: "max-w-600 mx-auto" }, [
                createVNode("p", { class: "text-18 text-center" }, " Designed for ease of use and customization, this template help you build professional dashboards faster. ")
              ]),
              createVNode("div", { class: "d-flex justify-center" }, [
                createVNode(_component_v_btn, {
                  class: "mt-6 px-10 m-btn-full",
                  variant: "outlined",
                  rounded: "pill",
                  target: "_blank",
                  href: "/auth/register",
                  color: "white",
                  size: "large",
                  flat: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode("Register")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<img${ssrRenderAttr("src", _imports_1)} alt="widget" class="right-widget d-xl-block d-none"></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/Homepage/PurchaseTemplate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=PurchaseTemplate-D9pvsFKX.js.map
