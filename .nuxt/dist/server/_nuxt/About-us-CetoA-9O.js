import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext, createTextVNode, defineComponent, unref, toDisplayString, createBlock, openBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { A as AboutFeatures, _ as _sfc_main$4 } from "./Layout-pJxOOMlF.js";
import { Icon } from "@iconify/vue";
import { _ as _sfc_main$5, a as _sfc_main$6, b as _sfc_main$7, c as _sfc_main$8, d as _sfc_main$b } from "./OurTeam-D9YgZyoE.js";
import { _ as _sfc_main$9, a as _sfc_main$a } from "./SecurePayment-BKBIxxo4.js";
import { _ as _sfc_main$c } from "./PurchaseTemplate-D9pvsFKX.js";
import "hookable";
import "ofetch";
import "#internal/nuxt/paths";
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
import "./Logo-DggZ73XB.js";
import "./nuxt-link-DZ3wFR7I.js";
import "./customizer-CM6PVnj3.js";
import "vue3-carousel";
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-p-96 border-t" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_container, { class: "max-width-1218 py-0" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, { class: "d-flex align-center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "12",
                xl: "5"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h2 class="display-1 textPrimary font-weight-bold"${_scopeId3}>A unique story in every number</h2>`);
                  } else {
                    return [
                      createVNode("h2", { class: "display-1 textPrimary font-weight-bold" }, "A unique story in every number")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "12",
                xl: "7"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="d-flex flex-wrap ga-lg-10 ga-6 ps-lg-8 justify-lg-end"${_scopeId3}><div${_scopeId3}><h3 class="text-64 text-primary font-weight-medium"${_scopeId3}>2019</h3><span class="text-grey100 text-14"${_scopeId3}>When we founded Spike</span></div><div${_scopeId3}><h3 class="text-64 text-primary font-weight-medium"${_scopeId3}>300k+</h3><span class="text-grey100 text-14"${_scopeId3}>Customers on Spike </span></div><div${_scopeId3}><h3 class="text-64 text-primary font-weight-medium"${_scopeId3}>25k+</h3><span class="text-grey100 text-14"${_scopeId3}>Dashboards built using Spike </span></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "d-flex flex-wrap ga-lg-10 ga-6 ps-lg-8 justify-lg-end" }, [
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-64 text-primary font-weight-medium" }, "2019"),
                          createVNode("span", { class: "text-grey100 text-14" }, "When we founded Spike")
                        ]),
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-64 text-primary font-weight-medium" }, "300k+"),
                          createVNode("span", { class: "text-grey100 text-14" }, "Customers on Spike ")
                        ]),
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-64 text-primary font-weight-medium" }, "25k+"),
                          createVNode("span", { class: "text-grey100 text-14" }, "Dashboards built using Spike ")
                        ])
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
                  xl: "5"
                }, {
                  default: withCtx(() => [
                    createVNode("h2", { class: "display-1 textPrimary font-weight-bold" }, "A unique story in every number")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  cols: "12",
                  xl: "7"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "d-flex flex-wrap ga-lg-10 ga-6 ps-lg-8 justify-lg-end" }, [
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-64 text-primary font-weight-medium" }, "2019"),
                        createVNode("span", { class: "text-grey100 text-14" }, "When we founded Spike")
                      ]),
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-64 text-primary font-weight-medium" }, "300k+"),
                        createVNode("span", { class: "text-grey100 text-14" }, "Customers on Spike ")
                      ]),
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-64 text-primary font-weight-medium" }, "25k+"),
                        createVNode("span", { class: "text-grey100 text-14" }, "Dashboards built using Spike ")
                      ])
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
          createVNode(_component_v_row, { class: "d-flex align-center" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                cols: "12",
                xl: "5"
              }, {
                default: withCtx(() => [
                  createVNode("h2", { class: "display-1 textPrimary font-weight-bold" }, "A unique story in every number")
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                xl: "7"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex flex-wrap ga-lg-10 ga-6 ps-lg-8 justify-lg-end" }, [
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-64 text-primary font-weight-medium" }, "2019"),
                      createVNode("span", { class: "text-grey100 text-14" }, "When we founded Spike")
                    ]),
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-64 text-primary font-weight-medium" }, "300k+"),
                      createVNode("span", { class: "text-grey100 text-14" }, "Customers on Spike ")
                    ]),
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-64 text-primary font-weight-medium" }, "25k+"),
                      createVNode("span", { class: "text-grey100 text-14" }, "Dashboards built using Spike ")
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
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/AboutUs/Archivement.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Archivement = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_btn = resolveComponent("v-btn");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-background py-lg-14 py-7" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_container, { class: "max-width-1218" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, { class: "d-flex" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "12",
                lg: "6",
                class: "text-align-start"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h1 class="text-50 textPrimary font-weight-regular"${_scopeId3}><span class="font-weight-bold"${_scopeId3}>Get to know Spike</span> Dashboard Template </h1><div class="d-sm-flex d-block gap-4 justify-md-start justify-center align-center mt-6"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_v_btn, {
                      color: "primary",
                      class: "h-43 px-5 m-btn-full",
                      size: "large",
                      rounded: "pill",
                      flat: "",
                      href: "/auth/register",
                      target: "_blank"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Create an Account`);
                        } else {
                          return [
                            createTextVNode("Create an Account")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_btn, {
                      class: "mt-sm-0 mt-4 h-43 px-5 m-btn-full",
                      variant: "outlined",
                      size: "large",
                      rounded: "pill",
                      target: "_blank",
                      href: "",
                      color: "primary",
                      flat: ""
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`View Open Positions`);
                        } else {
                          return [
                            createTextVNode("View Open Positions")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("h1", { class: "text-50 textPrimary font-weight-regular" }, [
                        createVNode("span", { class: "font-weight-bold" }, "Get to know Spike"),
                        createTextVNode(" Dashboard Template ")
                      ]),
                      createVNode("div", { class: "d-sm-flex d-block gap-4 justify-md-start justify-center align-center mt-6" }, [
                        createVNode(_component_v_btn, {
                          color: "primary",
                          class: "h-43 px-5 m-btn-full",
                          size: "large",
                          rounded: "pill",
                          flat: "",
                          href: "/auth/register",
                          target: "_blank"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Create an Account")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_btn, {
                          class: "mt-sm-0 mt-4 h-43 px-5 m-btn-full",
                          variant: "outlined",
                          size: "large",
                          rounded: "pill",
                          target: "_blank",
                          href: "",
                          color: "primary",
                          flat: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("View Open Positions")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "12",
                lg: "6",
                class: "pl-lg-8"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<p class="text-16 text-grey100 lh-32 ps-lg-16 pt-3 text-align-start"${_scopeId3}> Do you need a highly customizable and developer friendly premium Nuxtjs admin template packed with numerous features? <b${_scopeId3}>Spike Nuxtjs Admin Template</b> has everything you need. This <b${_scopeId3}>Nuxtjs</b> based admin template is designed in accordance with industry standards and best practices to provide you. </p>`);
                  } else {
                    return [
                      createVNode("p", { class: "text-16 text-grey100 lh-32 ps-lg-16 pt-3 text-align-start" }, [
                        createTextVNode(" Do you need a highly customizable and developer friendly premium Nuxtjs admin template packed with numerous features? "),
                        createVNode("b", null, "Spike Nuxtjs Admin Template"),
                        createTextVNode(" has everything you need. This "),
                        createVNode("b", null, "Nuxtjs"),
                        createTextVNode(" based admin template is designed in accordance with industry standards and best practices to provide you. ")
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
                  lg: "6",
                  class: "text-align-start"
                }, {
                  default: withCtx(() => [
                    createVNode("h1", { class: "text-50 textPrimary font-weight-regular" }, [
                      createVNode("span", { class: "font-weight-bold" }, "Get to know Spike"),
                      createTextVNode(" Dashboard Template ")
                    ]),
                    createVNode("div", { class: "d-sm-flex d-block gap-4 justify-md-start justify-center align-center mt-6" }, [
                      createVNode(_component_v_btn, {
                        color: "primary",
                        class: "h-43 px-5 m-btn-full",
                        size: "large",
                        rounded: "pill",
                        flat: "",
                        href: "/auth/register",
                        target: "_blank"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Create an Account")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_btn, {
                        class: "mt-sm-0 mt-4 h-43 px-5 m-btn-full",
                        variant: "outlined",
                        size: "large",
                        rounded: "pill",
                        target: "_blank",
                        href: "",
                        color: "primary",
                        flat: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("View Open Positions")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  cols: "12",
                  lg: "6",
                  class: "pl-lg-8"
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "text-16 text-grey100 lh-32 ps-lg-16 pt-3 text-align-start" }, [
                      createTextVNode(" Do you need a highly customizable and developer friendly premium Nuxtjs admin template packed with numerous features? "),
                      createVNode("b", null, "Spike Nuxtjs Admin Template"),
                      createTextVNode(" has everything you need. This "),
                      createVNode("b", null, "Nuxtjs"),
                      createTextVNode(" based admin template is designed in accordance with industry standards and best practices to provide you. ")
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
          createVNode(_component_v_row, { class: "d-flex" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                cols: "12",
                lg: "6",
                class: "text-align-start"
              }, {
                default: withCtx(() => [
                  createVNode("h1", { class: "text-50 textPrimary font-weight-regular" }, [
                    createVNode("span", { class: "font-weight-bold" }, "Get to know Spike"),
                    createTextVNode(" Dashboard Template ")
                  ]),
                  createVNode("div", { class: "d-sm-flex d-block gap-4 justify-md-start justify-center align-center mt-6" }, [
                    createVNode(_component_v_btn, {
                      color: "primary",
                      class: "h-43 px-5 m-btn-full",
                      size: "large",
                      rounded: "pill",
                      flat: "",
                      href: "/auth/register",
                      target: "_blank"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Create an Account")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_btn, {
                      class: "mt-sm-0 mt-4 h-43 px-5 m-btn-full",
                      variant: "outlined",
                      size: "large",
                      rounded: "pill",
                      target: "_blank",
                      href: "",
                      color: "primary",
                      flat: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("View Open Positions")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                lg: "6",
                class: "pl-lg-8"
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "text-16 text-grey100 lh-32 ps-lg-16 pt-3 text-align-start" }, [
                    createTextVNode(" Do you need a highly customizable and developer friendly premium Nuxtjs admin template packed with numerous features? "),
                    createVNode("b", null, "Spike Nuxtjs Admin Template"),
                    createTextVNode(" has everything you need. This "),
                    createVNode("b", null, "Nuxtjs"),
                    createTextVNode(" based admin template is designed in accordance with industry standards and best practices to provide you. ")
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
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/AboutUs/HeroText.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HeroText = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SetupProcess",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_sheet = resolveComponent("v-sheet");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-p-96" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_container, { class: "max-width-1218" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="display-1 textPrimary font-weight-bold text-center pb-12"${_scopeId}> The hassle-free setup process </h2>`);
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(AboutFeatures), (item) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      lg: "3",
                      sm: "6",
                      key: item.icon
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_sheet, {
                            class: "pa-6 rounded-xl bg-" + item.bgcolor
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="round-48 rounded-md d-flex justify-center align-center bg-surface elevation-4"${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(Icon), {
                                  icon: item.icon,
                                  height: "22",
                                  class: "text-" + item.color
                                }, null, _parent5, _scopeId4));
                                _push5(`</div><h4 class="text-22 textPrimary font-weight-bold py-5"${_scopeId4}>${ssrInterpolate(item.title)}</h4><p class="text-grey100 text-15"${_scopeId4}>${ssrInterpolate(item.subtitle)}</p>`);
                              } else {
                                return [
                                  createVNode("div", { class: "round-48 rounded-md d-flex justify-center align-center bg-surface elevation-4" }, [
                                    createVNode(unref(Icon), {
                                      icon: item.icon,
                                      height: "22",
                                      class: "text-" + item.color
                                    }, null, 8, ["icon", "class"])
                                  ]),
                                  createVNode("h4", { class: "text-22 textPrimary font-weight-bold py-5" }, toDisplayString(item.title), 1),
                                  createVNode("p", { class: "text-grey100 text-15" }, toDisplayString(item.subtitle), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_sheet, {
                              class: "pa-6 rounded-xl bg-" + item.bgcolor
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "round-48 rounded-md d-flex justify-center align-center bg-surface elevation-4" }, [
                                  createVNode(unref(Icon), {
                                    icon: item.icon,
                                    height: "22",
                                    class: "text-" + item.color
                                  }, null, 8, ["icon", "class"])
                                ]),
                                createVNode("h4", { class: "text-22 textPrimary font-weight-bold py-5" }, toDisplayString(item.title), 1),
                                createVNode("p", { class: "text-grey100 text-15" }, toDisplayString(item.subtitle), 1)
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(AboutFeatures), (item) => {
                      return openBlock(), createBlock(_component_v_col, {
                        cols: "12",
                        lg: "3",
                        sm: "6",
                        key: item.icon
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_sheet, {
                            class: "pa-6 rounded-xl bg-" + item.bgcolor
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "round-48 rounded-md d-flex justify-center align-center bg-surface elevation-4" }, [
                                createVNode(unref(Icon), {
                                  icon: item.icon,
                                  height: "22",
                                  class: "text-" + item.color
                                }, null, 8, ["icon", "class"])
                              ]),
                              createVNode("h4", { class: "text-22 textPrimary font-weight-bold py-5" }, toDisplayString(item.title), 1),
                              createVNode("p", { class: "text-grey100 text-15" }, toDisplayString(item.subtitle), 1)
                            ]),
                            _: 2
                          }, 1032, ["class"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h2", { class: "display-1 textPrimary font-weight-bold text-center pb-12" }, " The hassle-free setup process "),
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(AboutFeatures), (item) => {
                    return openBlock(), createBlock(_component_v_col, {
                      cols: "12",
                      lg: "3",
                      sm: "6",
                      key: item.icon
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_sheet, {
                          class: "pa-6 rounded-xl bg-" + item.bgcolor
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "round-48 rounded-md d-flex justify-center align-center bg-surface elevation-4" }, [
                              createVNode(unref(Icon), {
                                icon: item.icon,
                                height: "22",
                                class: "text-" + item.color
                              }, null, 8, ["icon", "class"])
                            ]),
                            createVNode("h4", { class: "text-22 textPrimary font-weight-bold py-5" }, toDisplayString(item.title), 1),
                            createVNode("p", { class: "text-grey100 text-15" }, toDisplayString(item.subtitle), 1)
                          ]),
                          _: 2
                        }, 1032, ["class"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/AboutUs/SetupProcess.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "About-us",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$4, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HeroText, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Archivement, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$9, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$a, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$b, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$c, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(HeroText),
              createVNode(_sfc_main$1),
              createVNode(Archivement),
              createVNode(_sfc_main$5),
              createVNode(_sfc_main$6),
              createVNode(_sfc_main$7),
              createVNode(_sfc_main$8),
              createVNode(_sfc_main$9),
              createVNode(_sfc_main$a),
              createVNode(_sfc_main$b),
              createVNode(_sfc_main$c)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/front-pages/About-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=About-us-CetoA-9O.js.map
