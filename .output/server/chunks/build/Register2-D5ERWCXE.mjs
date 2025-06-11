import { _ as _sfc_main$1 } from './Logo-DggZ73XB.mjs';
import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-DE-cyr71.mjs';
import { _ as _sfc_main$2 } from './RegisterForm-yDtuEVnE.mjs';
import './nuxt-link-DZ3wFR7I.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import './server.mjs';
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
import './customizer-CM6PVnj3.mjs';
import './UseAuthentification-CchpAVzc.mjs';
import './errorToaster-DYYIWzPY.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Register2",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_LcFullLogo = _sfc_main$1;
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pa-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_row, { class: "h-100vh mh-100 auth" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              lg: "7",
              xl: "8",
              class: "d-lg-flex align-center justify-center authentication position-relative"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="auth-header pt-lg-6 pt-2 px-sm-6 px-3 pb-lg-6 pb-0"${_scopeId2}><div class="position-relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_LcFullLogo, null, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class=""${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} height="450" class="position-relative d-none d-lg-flex" alt="login-background"${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "auth-header pt-lg-6 pt-2 px-sm-6 px-3 pb-lg-6 pb-0" }, [
                      createVNode("div", { class: "position-relative" }, [
                        createVNode(_component_LcFullLogo)
                      ])
                    ]),
                    createVNode("div", { class: "" }, [
                      createVNode("img", {
                        src: _imports_0,
                        height: "450",
                        class: "position-relative d-none d-lg-flex",
                        alt: "login-background"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              lg: "5",
              xl: "4",
              class: "d-flex align-center justify-center bg-surface"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mt-xl-0 mt-5 mw-100"${_scopeId2}><h2 class="text-h3 font-weight-semibold mb-2"${_scopeId2}>Welcome to Spikeadmin</h2><div class="text-subtitle-1 mb-6"${_scopeId2}>Your Admin Dashboard</div>`);
                  _push3(ssrRenderComponent(_sfc_main$2, null, null, _parent3, _scopeId2));
                  _push3(`<h6 class="text-subtitle-1 text-grey100 d-flex align-center mt-6"${_scopeId2}> Already have an Account? `);
                  _push3(ssrRenderComponent(_component_v_btn, {
                    variant: "plain",
                    to: "/auth/login",
                    class: "text-primary text-body-1 opacity-1 pl-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Sign In`);
                      } else {
                        return [
                          createTextVNode("Sign In")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</h6></div>`);
                } else {
                  return [
                    createVNode("div", { class: "mt-xl-0 mt-5 mw-100" }, [
                      createVNode("h2", { class: "text-h3 font-weight-semibold mb-2" }, "Welcome to Spikeadmin"),
                      createVNode("div", { class: "text-subtitle-1 mb-6" }, "Your Admin Dashboard"),
                      createVNode(_sfc_main$2),
                      createVNode("h6", { class: "text-subtitle-1 text-grey100 d-flex align-center mt-6" }, [
                        createTextVNode(" Already have an Account? "),
                        createVNode(_component_v_btn, {
                          variant: "plain",
                          to: "/auth/login",
                          class: "text-primary text-body-1 opacity-1 pl-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Sign In")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, {
                cols: "12",
                lg: "7",
                xl: "8",
                class: "d-lg-flex align-center justify-center authentication position-relative"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "auth-header pt-lg-6 pt-2 px-sm-6 px-3 pb-lg-6 pb-0" }, [
                    createVNode("div", { class: "position-relative" }, [
                      createVNode(_component_LcFullLogo)
                    ])
                  ]),
                  createVNode("div", { class: "" }, [
                    createVNode("img", {
                      src: _imports_0,
                      height: "450",
                      class: "position-relative d-none d-lg-flex",
                      alt: "login-background"
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                lg: "5",
                xl: "4",
                class: "d-flex align-center justify-center bg-surface"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mt-xl-0 mt-5 mw-100" }, [
                    createVNode("h2", { class: "text-h3 font-weight-semibold mb-2" }, "Welcome to Spikeadmin"),
                    createVNode("div", { class: "text-subtitle-1 mb-6" }, "Your Admin Dashboard"),
                    createVNode(_sfc_main$2),
                    createVNode("h6", { class: "text-subtitle-1 text-grey100 d-flex align-center mt-6" }, [
                      createTextVNode(" Already have an Account? "),
                      createVNode(_component_v_btn, {
                        variant: "plain",
                        to: "/auth/login",
                        class: "text-primary text-body-1 opacity-1 pl-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Sign In")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/Register2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Register2-D5ERWCXE.mjs.map
