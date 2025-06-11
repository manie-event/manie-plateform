import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./virtual_public-CZ8aUjQN.js";
import { _ as _sfc_main$1 } from "./ResetForm-CY1w5cl8.js";
import "hookable";
import "#internal/nuxt/paths";
import "./UseAuthentification-CchpAVzc.js";
import "../server.mjs";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
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
import "cookie-es";
import "ohash";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Forgot-Password",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
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
                              _push5(`<div class="mt-xl-0 mt-5 mw-100"${_scopeId4}><h2 class="text-h2 font-weight-bold mb-2"${_scopeId4}> Vous avez oublié votre mot de passe ? </h2><div class="text-14 mb-6 font-weight-medium mt-3 mb-8"${_scopeId4}> Entrez l&#39;email associé à votre compte et nous vous enverrons un lien pour en saisir un nouveau. </div>`);
                              _push5(ssrRenderComponent(_sfc_main$1, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_btn, {
                                size: "large",
                                flat: "",
                                color: "lightprimary",
                                to: "/auth/login",
                                block: "",
                                class: "mt-5 text-primary",
                                rounded: "pill"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Revenir à la page d&#39;identification`);
                                  } else {
                                    return [
                                      createTextVNode("Revenir à la page d'identification")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "mt-xl-0 mt-5 mw-100" }, [
                                  createVNode("h2", { class: "text-h2 font-weight-bold mb-2" }, " Vous avez oublié votre mot de passe ? "),
                                  createVNode("div", { class: "text-14 mb-6 font-weight-medium mt-3 mb-8" }, " Entrez l'email associé à votre compte et nous vous enverrons un lien pour en saisir un nouveau. "),
                                  createVNode(_sfc_main$1),
                                  createVNode(_component_v_btn, {
                                    size: "large",
                                    flat: "",
                                    color: "lightprimary",
                                    to: "/auth/login",
                                    block: "",
                                    class: "mt-5 text-primary",
                                    rounded: "pill"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Revenir à la page d'identification")
                                    ]),
                                    _: 1
                                  })
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
                                createVNode("h2", { class: "text-h2 font-weight-bold mb-2" }, " Vous avez oublié votre mot de passe ? "),
                                createVNode("div", { class: "text-14 mb-6 font-weight-medium mt-3 mb-8" }, " Entrez l'email associé à votre compte et nous vous enverrons un lien pour en saisir un nouveau. "),
                                createVNode(_sfc_main$1),
                                createVNode(_component_v_btn, {
                                  size: "large",
                                  flat: "",
                                  color: "lightprimary",
                                  to: "/auth/login",
                                  block: "",
                                  class: "mt-5 text-primary",
                                  rounded: "pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Revenir à la page d'identification")
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
                              createVNode("h2", { class: "text-h2 font-weight-bold mb-2" }, " Vous avez oublié votre mot de passe ? "),
                              createVNode("div", { class: "text-14 mb-6 font-weight-medium mt-3 mb-8" }, " Entrez l'email associé à votre compte et nous vous enverrons un lien pour en saisir un nouveau. "),
                              createVNode(_sfc_main$1),
                              createVNode(_component_v_btn, {
                                size: "large",
                                flat: "",
                                color: "lightprimary",
                                to: "/auth/login",
                                block: "",
                                class: "mt-5 text-primary",
                                rounded: "pill"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Revenir à la page d'identification")
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
                            createVNode("h2", { class: "text-h2 font-weight-bold mb-2" }, " Vous avez oublié votre mot de passe ? "),
                            createVNode("div", { class: "text-14 mb-6 font-weight-medium mt-3 mb-8" }, " Entrez l'email associé à votre compte et nous vous enverrons un lien pour en saisir un nouveau. "),
                            createVNode(_sfc_main$1),
                            createVNode(_component_v_btn, {
                              size: "large",
                              flat: "",
                              color: "lightprimary",
                              to: "/auth/login",
                              block: "",
                              class: "mt-5 text-primary",
                              rounded: "pill"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Revenir à la page d'identification")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/Forgot-Password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Forgot-Password-BYhaDrvT.js.map
