import { defineComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$3, a as _sfc_main$4 } from "./SecurePayment-BKBIxxo4.js";
import { _ as _sfc_main$5 } from "./PurchaseTemplate-D9pvsFKX.js";
import { _ as _sfc_main$2 } from "./TextBannerCard-D4T5bcr7.js";
import { _ as _sfc_main$1 } from "./Layout-pJxOOMlF.js";
import "hookable";
import "vue-tabler-icons";
import "#internal/nuxt/paths";
import "vue-router";
import "../server.mjs";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "ufo";
import "@vue/devtools-api";
import "destr";
import "klona";
import "vue3-perfect-scrollbar";
import "maska";
import "axios-mock-adapter";
import "axios";
import "chance";
import "date-fns";
import "lodash";
import "vue-draggable-next";
import "vue3-easy-data-table";
import "vue-easy-lightbox";
import "vue-scrollto";
import "./Logo-DggZ73XB.js";
import "./nuxt-link-DZ3wFR7I.js";
import "./customizer-CM6PVnj3.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Pricing",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              title: "Choose Your Plan",
              caption: "Pricing Page"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            _push2(`<div class="sm:pb-14 pb-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$5, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, {
                title: "Choose Your Plan",
                caption: "Pricing Page"
              }),
              createVNode(_sfc_main$3),
              createVNode("div", { class: "sm:pb-14 pb-8" }, [
                createVNode(_sfc_main$4)
              ]),
              createVNode(_sfc_main$5)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/front-pages/Pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Pricing-DXTLjuai.js.map
