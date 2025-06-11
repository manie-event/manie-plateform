import { ac as __nuxt_component_6 } from './server.mjs';
import { defineComponent, resolveComponent, unref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useCustomizerStore } from './customizer-CM6PVnj3.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-tabler-icons';
import 'vue3-perfect-scrollbar';
import 'maska';
import 'axios-mock-adapter';
import 'axios';
import 'chance';
import 'date-fns';
import 'lodash';
import 'vue-draggable-next';
import 'vue3-easy-data-table';
import 'vue-easy-lightbox';
import 'vue-scrollto';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "blank",
  __ssrInlineRender: true,
  setup(__props) {
    const customizer = useCustomizerStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_locale_provider = resolveComponent("v-locale-provider");
      const _component_v_app = resolveComponent("v-app");
      const _component_NuxtPage = __nuxt_component_6;
      if (unref(customizer).setRTLLayout) {
        _push(ssrRenderComponent(_component_v_locale_provider, mergeProps({ rtl: "" }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_app, {
                class: "authpage",
                theme: unref(customizer).actTheme
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtPage, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtPage)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_app, {
                  class: "authpage",
                  theme: unref(customizer).actTheme
                }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtPage)
                  ]),
                  _: 1
                }, 8, ["theme"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_v_locale_provider, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_app, {
                class: "authpage",
                theme: unref(customizer).actTheme
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtPage, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtPage)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_app, {
                  class: "authpage",
                  theme: unref(customizer).actTheme
                }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtPage)
                  ]),
                  _: 1
                }, 8, ["theme"])
              ];
            }
          }),
          _: 1
        }, _parent));
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/blank.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blank-CgPYNXlq.mjs.map
