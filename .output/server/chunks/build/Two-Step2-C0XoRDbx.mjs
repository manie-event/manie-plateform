import { _ as _sfc_main$1 } from './Logo-DggZ73XB.mjs';
import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { T as TwoStepForm } from './TwoStepForm-CZb3ZFwx.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Two-Step2",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_LcFullLogo = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "authentication" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_container, {
        fluid: "",
        class: "pa-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { class: "h-100vh d-flex justify-center align-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    lg: "4",
                    xl: "5",
                    class: "d-flex align-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, {
                          rounded: "md",
                          elevation: "10",
                          class: "px-sm-1 px-0 mx-auto",
                          "max-width": "455"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_item, { class: "pa-sm-8" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="d-flex justify-center"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_LcFullLogo, null, null, _parent6, _scopeId5));
                                    _push6(`</div><p class="text-subtitle-1 text-grey100 text-center mt-2 text-13"${_scopeId5}> We sent a verification code to your mobile. Enter the code from the mobile in the field below. </p><h6 class="text-subtitle-1 font-weight-medium mt-3 text-center"${_scopeId5}>******1234</h6>`);
                                    _push6(ssrRenderComponent(TwoStepForm, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "d-flex justify-center" }, [
                                        createVNode(_component_LcFullLogo)
                                      ]),
                                      createVNode("p", { class: "text-subtitle-1 text-grey100 text-center mt-2 text-13" }, " We sent a verification code to your mobile. Enter the code from the mobile in the field below. "),
                                      createVNode("h6", { class: "text-subtitle-1 font-weight-medium mt-3 text-center" }, "******1234"),
                                      createVNode(TwoStepForm)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card_item, { class: "pa-sm-8" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-center" }, [
                                      createVNode(_component_LcFullLogo)
                                    ]),
                                    createVNode("p", { class: "text-subtitle-1 text-grey100 text-center mt-2 text-13" }, " We sent a verification code to your mobile. Enter the code from the mobile in the field below. "),
                                    createVNode("h6", { class: "text-subtitle-1 font-weight-medium mt-3 text-center" }, "******1234"),
                                    createVNode(TwoStepForm)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, {
                            rounded: "md",
                            elevation: "10",
                            class: "px-sm-1 px-0 mx-auto",
                            "max-width": "455"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_item, { class: "pa-sm-8" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex justify-center" }, [
                                    createVNode(_component_LcFullLogo)
                                  ]),
                                  createVNode("p", { class: "text-subtitle-1 text-grey100 text-center mt-2 text-13" }, " We sent a verification code to your mobile. Enter the code from the mobile in the field below. "),
                                  createVNode("h6", { class: "text-subtitle-1 font-weight-medium mt-3 text-center" }, "******1234"),
                                  createVNode(TwoStepForm)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "4",
                      xl: "5",
                      class: "d-flex align-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, {
                          rounded: "md",
                          elevation: "10",
                          class: "px-sm-1 px-0 mx-auto",
                          "max-width": "455"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_item, { class: "pa-sm-8" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex justify-center" }, [
                                  createVNode(_component_LcFullLogo)
                                ]),
                                createVNode("p", { class: "text-subtitle-1 text-grey100 text-center mt-2 text-13" }, " We sent a verification code to your mobile. Enter the code from the mobile in the field below. "),
                                createVNode("h6", { class: "text-subtitle-1 font-weight-medium mt-3 text-center" }, "******1234"),
                                createVNode(TwoStepForm)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, { class: "h-100vh d-flex justify-center align-center" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    lg: "4",
                    xl: "5",
                    class: "d-flex align-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, {
                        rounded: "md",
                        elevation: "10",
                        class: "px-sm-1 px-0 mx-auto",
                        "max-width": "455"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_item, { class: "pa-sm-8" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex justify-center" }, [
                                createVNode(_component_LcFullLogo)
                              ]),
                              createVNode("p", { class: "text-subtitle-1 text-grey100 text-center mt-2 text-13" }, " We sent a verification code to your mobile. Enter the code from the mobile in the field below. "),
                              createVNode("h6", { class: "text-subtitle-1 font-weight-medium mt-3 text-center" }, "******1234"),
                              createVNode(TwoStepForm)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/Two-Step2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Two-Step2-C0XoRDbx.mjs.map
