import { _ as _sfc_main$1 } from "./Logo-DggZ73XB.js";
import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./ResetForm-CY1w5cl8.js";
import "hookable";
import "./nuxt-link-DZ3wFR7I.js";
import "ufo";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "@vue/devtools-api";
import "destr";
import "klona";
import "vue-tabler-icons";
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
import "./customizer-CM6PVnj3.js";
import "./UseAuthentification-CchpAVzc.js";
import "cookie-es";
import "ohash";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Forgot-Password2",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_LcFullLogo = _sfc_main$1;
      const _component_v_btn = resolveComponent("v-btn");
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
                        _push4(`<div class="boxed-auth-wrap"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_card, {
                          elevation: "10",
                          class: "px-sm-1 px-0 mx-auto",
                          "max-width": "450"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_item, { class: "pa-sm-8" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="d-flex justify-center my-5"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_LcFullLogo, null, null, _parent6, _scopeId5));
                                    _push6(`</div><p class="text-subtitle-1 text-grey100 text-center text-10"${_scopeId5}> Please enter the email address associated with your account and We will email you a link to reset your password. </p>`);
                                    _push6(ssrRenderComponent(_sfc_main$2, null, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      size: "large",
                                      color: "lightprimary",
                                      to: "/auth/login2",
                                      block: "",
                                      class: "mt-5 text-primary",
                                      rounded: "pill"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Back to Login`);
                                        } else {
                                          return [
                                            createTextVNode("Back to Login")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "d-flex justify-center my-5" }, [
                                        createVNode(_component_LcFullLogo)
                                      ]),
                                      createVNode("p", { class: "text-subtitle-1 text-grey100 text-center text-10" }, " Please enter the email address associated with your account and We will email you a link to reset your password. "),
                                      createVNode(_sfc_main$2),
                                      createVNode(_component_v_btn, {
                                        size: "large",
                                        color: "lightprimary",
                                        to: "/auth/login2",
                                        block: "",
                                        class: "mt-5 text-primary",
                                        rounded: "pill"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Back to Login")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card_item, { class: "pa-sm-8" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-center my-5" }, [
                                      createVNode(_component_LcFullLogo)
                                    ]),
                                    createVNode("p", { class: "text-subtitle-1 text-grey100 text-center text-10" }, " Please enter the email address associated with your account and We will email you a link to reset your password. "),
                                    createVNode(_sfc_main$2),
                                    createVNode(_component_v_btn, {
                                      size: "large",
                                      color: "lightprimary",
                                      to: "/auth/login2",
                                      block: "",
                                      class: "mt-5 text-primary",
                                      rounded: "pill"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Back to Login")
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
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "boxed-auth-wrap" }, [
                            createVNode(_component_v_card, {
                              elevation: "10",
                              class: "px-sm-1 px-0 mx-auto",
                              "max-width": "450"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_item, { class: "pa-sm-8" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-center my-5" }, [
                                      createVNode(_component_LcFullLogo)
                                    ]),
                                    createVNode("p", { class: "text-subtitle-1 text-grey100 text-center text-10" }, " Please enter the email address associated with your account and We will email you a link to reset your password. "),
                                    createVNode(_sfc_main$2),
                                    createVNode(_component_v_btn, {
                                      size: "large",
                                      color: "lightprimary",
                                      to: "/auth/login2",
                                      block: "",
                                      class: "mt-5 text-primary",
                                      rounded: "pill"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Back to Login")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
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
                        createVNode("div", { class: "boxed-auth-wrap" }, [
                          createVNode(_component_v_card, {
                            elevation: "10",
                            class: "px-sm-1 px-0 mx-auto",
                            "max-width": "450"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_item, { class: "pa-sm-8" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex justify-center my-5" }, [
                                    createVNode(_component_LcFullLogo)
                                  ]),
                                  createVNode("p", { class: "text-subtitle-1 text-grey100 text-center text-10" }, " Please enter the email address associated with your account and We will email you a link to reset your password. "),
                                  createVNode(_sfc_main$2),
                                  createVNode(_component_v_btn, {
                                    size: "large",
                                    color: "lightprimary",
                                    to: "/auth/login2",
                                    block: "",
                                    class: "mt-5 text-primary",
                                    rounded: "pill"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Back to Login")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
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
                      createVNode("div", { class: "boxed-auth-wrap" }, [
                        createVNode(_component_v_card, {
                          elevation: "10",
                          class: "px-sm-1 px-0 mx-auto",
                          "max-width": "450"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_item, { class: "pa-sm-8" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex justify-center my-5" }, [
                                  createVNode(_component_LcFullLogo)
                                ]),
                                createVNode("p", { class: "text-subtitle-1 text-grey100 text-center text-10" }, " Please enter the email address associated with your account and We will email you a link to reset your password. "),
                                createVNode(_sfc_main$2),
                                createVNode(_component_v_btn, {
                                  size: "large",
                                  color: "lightprimary",
                                  to: "/auth/login2",
                                  block: "",
                                  class: "mt-5 text-primary",
                                  rounded: "pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Back to Login")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/Forgot-Password2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Forgot-Password2-CD9UkxTn.js.map
