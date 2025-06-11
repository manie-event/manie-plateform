import { _ as _sfc_main$1 } from "./LoginForm-DIO5wzcR.js";
import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./virtual_public-CZ8aUjQN.js";
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
import "vee-validate";
import "./UseAuthentification-CchpAVzc.js";
import "cookie-es";
import "ohash";
import "./errorToaster-DYYIWzPY.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_AuthLoginForm = _sfc_main$1;
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-app-wrapper" }, _attrs))}><div class="auth-login position-relative d-flex align-center justify-content-center px-lg-16 px-sm-8 px-3 rounded-xl"><div class="auth-login-wrapper position-relative rounded-xl mx-lg-16 mx-4 mx-auto w-100">`);
      _push(ssrRenderComponent(_component_v_card, {
        elevation: "0",
        class: "overflow-hidden px-sm-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, { class: "px-sm-8 px-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, { class: "justify-md-space-around align-center py-md-8" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          lg: "5",
                          md: "6",
                          class: "d-md-flex d-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<img${ssrRenderAttr("src", _imports_0)} class="w-100" alt="login-background"${_scopeId4}>`);
                            } else {
                              return [
                                createVNode("img", {
                                  src: _imports_0,
                                  class: "w-100",
                                  alt: "login-background"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          lg: "5",
                          md: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="mt-xl-0 mt-5 mw-100"${_scopeId4}><h2 class="text-h2 font-weight-bold mb-2"${_scopeId4}>Bienvenue sur Manie !</h2><div class="text-h6 mb-6 font-weight-medium mt-3 mb-8"${_scopeId4}> Votre assistant à la création et gestion d&#39;évènements </div>`);
                              _push5(ssrRenderComponent(_component_AuthLoginForm, null, null, _parent5, _scopeId4));
                              _push5(`<h6 class="text-subtitle-1 text-grey100 d-flex align-center mt-6 font-weight-medium"${_scopeId4}> Nouveau sur Manie ? `);
                              _push5(ssrRenderComponent(_component_v_btn, {
                                class: "pl-0 text-primary text-body-1 opacity-1 pl-2 font-weight-medium",
                                height: "auto",
                                to: "/auth/register",
                                variant: "plain"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Créez un compte`);
                                  } else {
                                    return [
                                      createTextVNode("Créez un compte")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</h6></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "mt-xl-0 mt-5 mw-100" }, [
                                  createVNode("h2", { class: "text-h2 font-weight-bold mb-2" }, "Bienvenue sur Manie !"),
                                  createVNode("div", { class: "text-h6 mb-6 font-weight-medium mt-3 mb-8" }, " Votre assistant à la création et gestion d'évènements "),
                                  createVNode(_component_AuthLoginForm),
                                  createVNode("h6", { class: "text-subtitle-1 text-grey100 d-flex align-center mt-6 font-weight-medium" }, [
                                    createTextVNode(" Nouveau sur Manie ? "),
                                    createVNode(_component_v_btn, {
                                      class: "pl-0 text-primary text-body-1 opacity-1 pl-2 font-weight-medium",
                                      height: "auto",
                                      to: "/auth/register",
                                      variant: "plain"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Créez un compte")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "5",
                            md: "6",
                            class: "d-md-flex d-none"
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: _imports_0,
                                class: "w-100",
                                alt: "login-background"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "5",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mt-xl-0 mt-5 mw-100" }, [
                                createVNode("h2", { class: "text-h2 font-weight-bold mb-2" }, "Bienvenue sur Manie !"),
                                createVNode("div", { class: "text-h6 mb-6 font-weight-medium mt-3 mb-8" }, " Votre assistant à la création et gestion d'évènements "),
                                createVNode(_component_AuthLoginForm),
                                createVNode("h6", { class: "text-subtitle-1 text-grey100 d-flex align-center mt-6 font-weight-medium" }, [
                                  createTextVNode(" Nouveau sur Manie ? "),
                                  createVNode(_component_v_btn, {
                                    class: "pl-0 text-primary text-body-1 opacity-1 pl-2 font-weight-medium",
                                    height: "auto",
                                    to: "/auth/register",
                                    variant: "plain"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Créez un compte")
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_row, { class: "justify-md-space-around align-center py-md-8" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          lg: "5",
                          md: "6",
                          class: "d-md-flex d-none"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: _imports_0,
                              class: "w-100",
                              alt: "login-background"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          lg: "5",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mt-xl-0 mt-5 mw-100" }, [
                              createVNode("h2", { class: "text-h2 font-weight-bold mb-2" }, "Bienvenue sur Manie !"),
                              createVNode("div", { class: "text-h6 mb-6 font-weight-medium mt-3 mb-8" }, " Votre assistant à la création et gestion d'évènements "),
                              createVNode(_component_AuthLoginForm),
                              createVNode("h6", { class: "text-subtitle-1 text-grey100 d-flex align-center mt-6 font-weight-medium" }, [
                                createTextVNode(" Nouveau sur Manie ? "),
                                createVNode(_component_v_btn, {
                                  class: "pl-0 text-primary text-body-1 opacity-1 pl-2 font-weight-medium",
                                  height: "auto",
                                  to: "/auth/register",
                                  variant: "plain"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Créez un compte")
                                  ]),
                                  _: 1
                                })
                              ])
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_item, { class: "px-sm-8 px-3" }, {
                default: withCtx(() => [
                  createVNode(_component_v_row, { class: "justify-md-space-around align-center py-md-8" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        lg: "5",
                        md: "6",
                        class: "d-md-flex d-none"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_0,
                            class: "w-100",
                            alt: "login-background"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        lg: "5",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mt-xl-0 mt-5 mw-100" }, [
                            createVNode("h2", { class: "text-h2 font-weight-bold mb-2" }, "Bienvenue sur Manie !"),
                            createVNode("div", { class: "text-h6 mb-6 font-weight-medium mt-3 mb-8" }, " Votre assistant à la création et gestion d'évènements "),
                            createVNode(_component_AuthLoginForm),
                            createVNode("h6", { class: "text-subtitle-1 text-grey100 d-flex align-center mt-6 font-weight-medium" }, [
                              createTextVNode(" Nouveau sur Manie ? "),
                              createVNode(_component_v_btn, {
                                class: "pl-0 text-primary text-body-1 opacity-1 pl-2 font-weight-medium",
                                height: "auto",
                                to: "/auth/register",
                                variant: "plain"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Créez un compte")
                                ]),
                                _: 1
                              })
                            ])
                          ])
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
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Login-DOHffEny.js.map
