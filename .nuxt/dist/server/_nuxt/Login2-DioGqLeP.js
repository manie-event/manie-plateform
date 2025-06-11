import { _ as _sfc_main$1 } from "./Logo-DggZ73XB.js";
import { _ as _sfc_main$2 } from "./LoginForm-DIO5wzcR.js";
import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
import "vee-validate";
import "./UseAuthentification-CchpAVzc.js";
import "cookie-es";
import "ohash";
import "./errorToaster-DYYIWzPY.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Login2",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_LcFullLogo = _sfc_main$1;
      const _component_AuthLoginForm = _sfc_main$2;
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
                                    _push6(`<div class="d-flex justify-center mb-5"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_LcFullLogo, null, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                    _push6(ssrRenderComponent(_component_AuthLoginForm, null, null, _parent6, _scopeId5));
                                    _push6(`<h6 class="text-subtitle-1 text-grey100 d-flex justify-center align-center mt-3"${_scopeId5}> New to Spike? `);
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      class: "pl-0 text-primary text-body-1 opacity-1 pl-2",
                                      height: "auto",
                                      to: "/auth/register",
                                      variant: "plain"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Create an account`);
                                        } else {
                                          return [
                                            createTextVNode("Create an account")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</h6>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "d-flex justify-center mb-5" }, [
                                        createVNode(_component_LcFullLogo)
                                      ]),
                                      createVNode(_component_AuthLoginForm),
                                      createVNode("h6", { class: "text-subtitle-1 text-grey100 d-flex justify-center align-center mt-3" }, [
                                        createTextVNode(" New to Spike? "),
                                        createVNode(_component_v_btn, {
                                          class: "pl-0 text-primary text-body-1 opacity-1 pl-2",
                                          height: "auto",
                                          to: "/auth/register",
                                          variant: "plain"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Create an account")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card_item, { class: "pa-sm-8" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-center mb-5" }, [
                                      createVNode(_component_LcFullLogo)
                                    ]),
                                    createVNode(_component_AuthLoginForm),
                                    createVNode("h6", { class: "text-subtitle-1 text-grey100 d-flex justify-center align-center mt-3" }, [
                                      createTextVNode(" New to Spike? "),
                                      createVNode(_component_v_btn, {
                                        class: "pl-0 text-primary text-body-1 opacity-1 pl-2",
                                        height: "auto",
                                        to: "/auth/register",
                                        variant: "plain"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Create an account")
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
                                    createVNode("div", { class: "d-flex justify-center mb-5" }, [
                                      createVNode(_component_LcFullLogo)
                                    ]),
                                    createVNode(_component_AuthLoginForm),
                                    createVNode("h6", { class: "text-subtitle-1 text-grey100 d-flex justify-center align-center mt-3" }, [
                                      createTextVNode(" New to Spike? "),
                                      createVNode(_component_v_btn, {
                                        class: "pl-0 text-primary text-body-1 opacity-1 pl-2",
                                        height: "auto",
                                        to: "/auth/register",
                                        variant: "plain"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Create an account")
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
                                  createVNode("div", { class: "d-flex justify-center mb-5" }, [
                                    createVNode(_component_LcFullLogo)
                                  ]),
                                  createVNode(_component_AuthLoginForm),
                                  createVNode("h6", { class: "text-subtitle-1 text-grey100 d-flex justify-center align-center mt-3" }, [
                                    createTextVNode(" New to Spike? "),
                                    createVNode(_component_v_btn, {
                                      class: "pl-0 text-primary text-body-1 opacity-1 pl-2",
                                      height: "auto",
                                      to: "/auth/register",
                                      variant: "plain"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Create an account")
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
                                createVNode("div", { class: "d-flex justify-center mb-5" }, [
                                  createVNode(_component_LcFullLogo)
                                ]),
                                createVNode(_component_AuthLoginForm),
                                createVNode("h6", { class: "text-subtitle-1 text-grey100 d-flex justify-center align-center mt-3" }, [
                                  createTextVNode(" New to Spike? "),
                                  createVNode(_component_v_btn, {
                                    class: "pl-0 text-primary text-body-1 opacity-1 pl-2",
                                    height: "auto",
                                    to: "/auth/register",
                                    variant: "plain"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Create an account")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/Login2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Login2-DioGqLeP.js.map
