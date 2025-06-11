import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext, defineComponent, ref, unref, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$6, a as _sfc_main$7, b as _sfc_main$8, c as _sfc_main$9, d as _sfc_main$c } from "./OurTeam-D9YgZyoE.js";
import { _ as _imports_0$1 } from "./virtual_public-Do_DI_-i.js";
import { _ as _imports_1 } from "./virtual_public-C621Y9bP.js";
import { _ as _export_sfc, l as user3, R as user2, h as user1 } from "../server.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { Icon } from "@iconify/vue";
import { Q as QA1, d as QA2, e as QA3, f as QA4, g as Features, _ as _sfc_main$5 } from "./Layout-pJxOOMlF.js";
import { _ as _sfc_main$a, a as _sfc_main$b } from "./SecurePayment-BKBIxxo4.js";
import { _ as _sfc_main$d } from "./PurchaseTemplate-D9pvsFKX.js";
import "hookable";
import "vue3-carousel";
import "vue-tabler-icons";
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
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = resolveComponent("RouterLink");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-primary py-4 px-4" }, _attrs))}><div class="ga-4 d-sm-flex justify-center align-center"><div class="d-flex align-center justify-sm-start justify-center"><img${ssrRenderAttr("src", _imports_0$1)} height="40" class="rounded-circle opacity-50" alt="user"><img${ssrRenderAttr("src", _imports_1)} height="44" class="rounded-circle ms-n3" alt="user"></div><p class="text-16 font-weight-regular text-left text-center py-sm-0 py-2"> Save valuable time and effort spent searching for a solution. </p>`);
  _push(ssrRenderComponent(_component_RouterLink, {
    to: "/front-pages/contact-us",
    target: "_blank",
    class: "text-16 text-white font-weight-semibold underline-link d-flex justify-sm-start justify-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact us now`);
      } else {
        return [
          createTextVNode("Contact us now")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/Homepage/ContactBar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ContactBar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = publicAssetsURL("/images/front-pages/background/feature-image.png");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FeatureTabs",
  __ssrInlineRender: true,
  setup(__props) {
    const tab = ref(null);
    const panel = ref([0]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      const _component_v_tabs_window = resolveComponent("v-tabs-window");
      const _component_v_window_item = resolveComponent("v-window-item");
      const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
      const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
      const _component_v_expansion_panel_title = resolveComponent("v-expansion-panel-title");
      const _component_v_expansion_panel_text = resolveComponent("v-expansion-panel-text");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-p-96 bg-background" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_container, { class: "max-width-1218" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    class: "pb-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_tabs, {
                          modelValue: tab.value,
                          "onUpdate:modelValue": ($event) => tab.value = $event,
                          grow: "",
                          "align-tabs": "center",
                          class: "feature-tabs",
                          color: "primary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_tab, {
                                value: "1",
                                class: "text-16 font-weight-semibold textPrimary"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Icon), {
                                      icon: "material-symbols:groups-outline-rounded",
                                      height: "24",
                                      class: "me-3"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`Team Scheduling`);
                                  } else {
                                    return [
                                      createVNode(unref(Icon), {
                                        icon: "material-symbols:groups-outline-rounded",
                                        height: "24",
                                        class: "me-3"
                                      }),
                                      createTextVNode("Team Scheduling")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_tab, {
                                value: "2",
                                class: "text-16 font-weight-semibold textPrimary"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Icon), {
                                      icon: "material-symbols:account-balance-outline",
                                      height: "24",
                                      class: "me-3"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`Payments`);
                                  } else {
                                    return [
                                      createVNode(unref(Icon), {
                                        icon: "material-symbols:account-balance-outline",
                                        height: "24",
                                        class: "me-3"
                                      }),
                                      createTextVNode("Payments")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_tab, {
                                value: "3",
                                class: "text-16 font-weight-semibold textPrimary"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Icon), {
                                      icon: "material-symbols-light:photo-frame-outline-sharp",
                                      height: "24",
                                      class: "me-3"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`Embedding`);
                                  } else {
                                    return [
                                      createVNode(unref(Icon), {
                                        icon: "material-symbols-light:photo-frame-outline-sharp",
                                        height: "24",
                                        class: "me-3"
                                      }),
                                      createTextVNode("Embedding")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_tab, {
                                value: "4",
                                class: "text-16 font-weight-semibold textPrimary"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Icon), {
                                      icon: "material-symbols:widgets-outline-rounded",
                                      height: "24",
                                      class: "me-3"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`Workflows`);
                                  } else {
                                    return [
                                      createVNode(unref(Icon), {
                                        icon: "material-symbols:widgets-outline-rounded",
                                        height: "24",
                                        class: "me-3"
                                      }),
                                      createTextVNode("Workflows")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_tab, {
                                  value: "1",
                                  class: "text-16 font-weight-semibold textPrimary"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), {
                                      icon: "material-symbols:groups-outline-rounded",
                                      height: "24",
                                      class: "me-3"
                                    }),
                                    createTextVNode("Team Scheduling")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_tab, {
                                  value: "2",
                                  class: "text-16 font-weight-semibold textPrimary"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), {
                                      icon: "material-symbols:account-balance-outline",
                                      height: "24",
                                      class: "me-3"
                                    }),
                                    createTextVNode("Payments")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_tab, {
                                  value: "3",
                                  class: "text-16 font-weight-semibold textPrimary"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), {
                                      icon: "material-symbols-light:photo-frame-outline-sharp",
                                      height: "24",
                                      class: "me-3"
                                    }),
                                    createTextVNode("Embedding")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_tab, {
                                  value: "4",
                                  class: "text-16 font-weight-semibold textPrimary"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), {
                                      icon: "material-symbols:widgets-outline-rounded",
                                      height: "24",
                                      class: "me-3"
                                    }),
                                    createTextVNode("Workflows")
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
                          createVNode(_component_v_tabs, {
                            modelValue: tab.value,
                            "onUpdate:modelValue": ($event) => tab.value = $event,
                            grow: "",
                            "align-tabs": "center",
                            class: "feature-tabs",
                            color: "primary"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_tab, {
                                value: "1",
                                class: "text-16 font-weight-semibold textPrimary"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "material-symbols:groups-outline-rounded",
                                    height: "24",
                                    class: "me-3"
                                  }),
                                  createTextVNode("Team Scheduling")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_tab, {
                                value: "2",
                                class: "text-16 font-weight-semibold textPrimary"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "material-symbols:account-balance-outline",
                                    height: "24",
                                    class: "me-3"
                                  }),
                                  createTextVNode("Payments")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_tab, {
                                value: "3",
                                class: "text-16 font-weight-semibold textPrimary"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "material-symbols-light:photo-frame-outline-sharp",
                                    height: "24",
                                    class: "me-3"
                                  }),
                                  createTextVNode("Embedding")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_tab, {
                                value: "4",
                                class: "text-16 font-weight-semibold textPrimary"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "material-symbols:widgets-outline-rounded",
                                    height: "24",
                                    class: "me-3"
                                  }),
                                  createTextVNode("Workflows")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      cols: "12",
                      class: "pb-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_tabs, {
                          modelValue: tab.value,
                          "onUpdate:modelValue": ($event) => tab.value = $event,
                          grow: "",
                          "align-tabs": "center",
                          class: "feature-tabs",
                          color: "primary"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_tab, {
                              value: "1",
                              class: "text-16 font-weight-semibold textPrimary"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Icon), {
                                  icon: "material-symbols:groups-outline-rounded",
                                  height: "24",
                                  class: "me-3"
                                }),
                                createTextVNode("Team Scheduling")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_tab, {
                              value: "2",
                              class: "text-16 font-weight-semibold textPrimary"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Icon), {
                                  icon: "material-symbols:account-balance-outline",
                                  height: "24",
                                  class: "me-3"
                                }),
                                createTextVNode("Payments")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_tab, {
                              value: "3",
                              class: "text-16 font-weight-semibold textPrimary"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Icon), {
                                  icon: "material-symbols-light:photo-frame-outline-sharp",
                                  height: "24",
                                  class: "me-3"
                                }),
                                createTextVNode("Embedding")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_tab, {
                              value: "4",
                              class: "text-16 font-weight-semibold textPrimary"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Icon), {
                                  icon: "material-symbols:widgets-outline-rounded",
                                  height: "24",
                                  class: "me-3"
                                }),
                                createTextVNode("Workflows")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    class: "pb-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_tabs, {
                        modelValue: tab.value,
                        "onUpdate:modelValue": ($event) => tab.value = $event,
                        grow: "",
                        "align-tabs": "center",
                        class: "feature-tabs",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_tab, {
                            value: "1",
                            class: "text-16 font-weight-semibold textPrimary"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "material-symbols:groups-outline-rounded",
                                height: "24",
                                class: "me-3"
                              }),
                              createTextVNode("Team Scheduling")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_tab, {
                            value: "2",
                            class: "text-16 font-weight-semibold textPrimary"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "material-symbols:account-balance-outline",
                                height: "24",
                                class: "me-3"
                              }),
                              createTextVNode("Payments")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_tab, {
                            value: "3",
                            class: "text-16 font-weight-semibold textPrimary"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "material-symbols-light:photo-frame-outline-sharp",
                                height: "24",
                                class: "me-3"
                              }),
                              createTextVNode("Embedding")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_tab, {
                            value: "4",
                            class: "text-16 font-weight-semibold textPrimary"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "material-symbols:widgets-outline-rounded",
                                height: "24",
                                class: "me-3"
                              }),
                              createTextVNode("Workflows")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
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
      _push(ssrRenderComponent(_component_v_container, { class: "max-width-1218" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { class: "px-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex align-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_tabs_window, {
                    modelValue: tab.value,
                    "onUpdate:modelValue": ($event) => tab.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "1" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, { class: "flex align-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      lg: "6",
                                      md: "12"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<img${ssrRenderAttr("src", _imports_0)} alt="image" class="w-100 rounded-xl"${_scopeId6}>`);
                                        } else {
                                          return [
                                            createVNode("img", {
                                              src: _imports_0,
                                              alt: "image",
                                              class: "w-100 rounded-xl"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      lg: "6",
                                      md: "12"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="ps-sm-10"${_scopeId6}><h2 class="display-2 mb-6 font-weight-bold"${_scopeId6}>Team Scheduling</h2>`);
                                          _push7(ssrRenderComponent(_component_v_expansion_panels, {
                                            elevation: "0",
                                            modelValue: panel.value,
                                            "onUpdate:modelValue": ($event) => panel.value = $event,
                                            class: "feature-tabs-expansion"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<!--[-->`);
                                                ssrRenderList(unref(QA1), (item) => {
                                                  _push8(ssrRenderComponent(_component_v_expansion_panel, {
                                                    elevation: "0",
                                                    key: item.question
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_v_expansion_panel_title, {
                                                          class: "text-17 font-weight-semibold textPrimary",
                                                          "collapse-icon": "mdi-minus",
                                                          "expand-icon": "mdi-plus"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(item.question)}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(item.question), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(item.answer)}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(item.answer), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_v_divider, null, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_expansion_panel_title, {
                                                            class: "text-17 font-weight-semibold textPrimary",
                                                            "collapse-icon": "mdi-minus",
                                                            "expand-icon": "mdi-plus"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(item.question), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(item.answer), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_divider)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                });
                                                _push8(`<!--]-->`);
                                              } else {
                                                return [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(QA1), (item) => {
                                                    return openBlock(), createBlock(_component_v_expansion_panel, {
                                                      elevation: "0",
                                                      key: item.question
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_expansion_panel_title, {
                                                          class: "text-17 font-weight-semibold textPrimary",
                                                          "collapse-icon": "mdi-minus",
                                                          "expand-icon": "mdi-plus"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item.question), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item.answer), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_divider)
                                                      ]),
                                                      _: 2
                                                    }, 1024);
                                                  }), 128))
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            color: "primary",
                                            class: "h-43 px-5 mt-6",
                                            flat: "",
                                            href: "",
                                            target: "_blank"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Learn More`);
                                              } else {
                                                return [
                                                  createTextVNode("Learn More")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "ps-sm-10" }, [
                                              createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Team Scheduling"),
                                              createVNode(_component_v_expansion_panels, {
                                                elevation: "0",
                                                modelValue: panel.value,
                                                "onUpdate:modelValue": ($event) => panel.value = $event,
                                                class: "feature-tabs-expansion"
                                              }, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(QA1), (item) => {
                                                    return openBlock(), createBlock(_component_v_expansion_panel, {
                                                      elevation: "0",
                                                      key: item.question
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_expansion_panel_title, {
                                                          class: "text-17 font-weight-semibold textPrimary",
                                                          "collapse-icon": "mdi-minus",
                                                          "expand-icon": "mdi-plus"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item.question), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item.answer), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_divider)
                                                      ]),
                                                      _: 2
                                                    }, 1024);
                                                  }), 128))
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_btn, {
                                                color: "primary",
                                                class: "h-43 px-5 mt-6",
                                                flat: "",
                                                href: "",
                                                target: "_blank"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Learn More")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        lg: "6",
                                        md: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: _imports_0,
                                            alt: "image",
                                            class: "w-100 rounded-xl"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        lg: "6",
                                        md: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "ps-sm-10" }, [
                                            createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Team Scheduling"),
                                            createVNode(_component_v_expansion_panels, {
                                              elevation: "0",
                                              modelValue: panel.value,
                                              "onUpdate:modelValue": ($event) => panel.value = $event,
                                              class: "feature-tabs-expansion"
                                            }, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(QA1), (item) => {
                                                  return openBlock(), createBlock(_component_v_expansion_panel, {
                                                    elevation: "0",
                                                    key: item.question
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_expansion_panel_title, {
                                                        class: "text-17 font-weight-semibold textPrimary",
                                                        "collapse-icon": "mdi-minus",
                                                        "expand-icon": "mdi-plus"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(item.question), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(item.answer), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_v_divider)
                                                    ]),
                                                    _: 2
                                                  }, 1024);
                                                }), 128))
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_btn, {
                                              color: "primary",
                                              class: "h-43 px-5 mt-6",
                                              flat: "",
                                              href: "",
                                              target: "_blank"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Learn More")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_row, { class: "flex align-center" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      lg: "6",
                                      md: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: _imports_0,
                                          alt: "image",
                                          class: "w-100 rounded-xl"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      lg: "6",
                                      md: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "ps-sm-10" }, [
                                          createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Team Scheduling"),
                                          createVNode(_component_v_expansion_panels, {
                                            elevation: "0",
                                            modelValue: panel.value,
                                            "onUpdate:modelValue": ($event) => panel.value = $event,
                                            class: "feature-tabs-expansion"
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(QA1), (item) => {
                                                return openBlock(), createBlock(_component_v_expansion_panel, {
                                                  elevation: "0",
                                                  key: item.question
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_expansion_panel_title, {
                                                      class: "text-17 font-weight-semibold textPrimary",
                                                      "collapse-icon": "mdi-minus",
                                                      "expand-icon": "mdi-plus"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.question), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.answer), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_divider)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_btn, {
                                            color: "primary",
                                            class: "h-43 px-5 mt-6",
                                            flat: "",
                                            href: "",
                                            target: "_blank"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Learn More")
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, { class: "flex align-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      lg: "6",
                                      md: "12"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<img${ssrRenderAttr("src", _imports_0)} alt="image" class="w-100 rounded-xl"${_scopeId6}>`);
                                        } else {
                                          return [
                                            createVNode("img", {
                                              src: _imports_0,
                                              alt: "image",
                                              class: "w-100 rounded-xl"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      lg: "6",
                                      md: "12"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="ps-sm-10"${_scopeId6}><h2 class="display-2 mb-6 font-weight-bold"${_scopeId6}>Payments</h2>`);
                                          _push7(ssrRenderComponent(_component_v_expansion_panels, {
                                            elevation: "0",
                                            modelValue: panel.value,
                                            "onUpdate:modelValue": ($event) => panel.value = $event,
                                            class: "feature-tabs-expansion"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<!--[-->`);
                                                ssrRenderList(unref(QA2), (item) => {
                                                  _push8(ssrRenderComponent(_component_v_expansion_panel, {
                                                    elevation: "0",
                                                    key: item.question
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_v_expansion_panel_title, {
                                                          class: "text-17 font-weight-semibold textPrimary",
                                                          "collapse-icon": "mdi-minus",
                                                          "expand-icon": "mdi-plus"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(item.question)}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(item.question), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(item.answer)}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(item.answer), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_v_divider, null, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_expansion_panel_title, {
                                                            class: "text-17 font-weight-semibold textPrimary",
                                                            "collapse-icon": "mdi-minus",
                                                            "expand-icon": "mdi-plus"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(item.question), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(item.answer), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_divider)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                });
                                                _push8(`<!--]-->`);
                                              } else {
                                                return [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(QA2), (item) => {
                                                    return openBlock(), createBlock(_component_v_expansion_panel, {
                                                      elevation: "0",
                                                      key: item.question
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_expansion_panel_title, {
                                                          class: "text-17 font-weight-semibold textPrimary",
                                                          "collapse-icon": "mdi-minus",
                                                          "expand-icon": "mdi-plus"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item.question), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item.answer), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_divider)
                                                      ]),
                                                      _: 2
                                                    }, 1024);
                                                  }), 128))
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            color: "primary",
                                            class: "h-43 px-5 mt-6",
                                            flat: "",
                                            href: "",
                                            target: "_blank"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Learn More`);
                                              } else {
                                                return [
                                                  createTextVNode("Learn More")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "ps-sm-10" }, [
                                              createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Payments"),
                                              createVNode(_component_v_expansion_panels, {
                                                elevation: "0",
                                                modelValue: panel.value,
                                                "onUpdate:modelValue": ($event) => panel.value = $event,
                                                class: "feature-tabs-expansion"
                                              }, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(QA2), (item) => {
                                                    return openBlock(), createBlock(_component_v_expansion_panel, {
                                                      elevation: "0",
                                                      key: item.question
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_expansion_panel_title, {
                                                          class: "text-17 font-weight-semibold textPrimary",
                                                          "collapse-icon": "mdi-minus",
                                                          "expand-icon": "mdi-plus"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item.question), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item.answer), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_divider)
                                                      ]),
                                                      _: 2
                                                    }, 1024);
                                                  }), 128))
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_btn, {
                                                color: "primary",
                                                class: "h-43 px-5 mt-6",
                                                flat: "",
                                                href: "",
                                                target: "_blank"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Learn More")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        lg: "6",
                                        md: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: _imports_0,
                                            alt: "image",
                                            class: "w-100 rounded-xl"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        lg: "6",
                                        md: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "ps-sm-10" }, [
                                            createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Payments"),
                                            createVNode(_component_v_expansion_panels, {
                                              elevation: "0",
                                              modelValue: panel.value,
                                              "onUpdate:modelValue": ($event) => panel.value = $event,
                                              class: "feature-tabs-expansion"
                                            }, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(QA2), (item) => {
                                                  return openBlock(), createBlock(_component_v_expansion_panel, {
                                                    elevation: "0",
                                                    key: item.question
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_expansion_panel_title, {
                                                        class: "text-17 font-weight-semibold textPrimary",
                                                        "collapse-icon": "mdi-minus",
                                                        "expand-icon": "mdi-plus"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(item.question), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(item.answer), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_v_divider)
                                                    ]),
                                                    _: 2
                                                  }, 1024);
                                                }), 128))
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_btn, {
                                              color: "primary",
                                              class: "h-43 px-5 mt-6",
                                              flat: "",
                                              href: "",
                                              target: "_blank"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Learn More")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_row, { class: "flex align-center" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      lg: "6",
                                      md: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: _imports_0,
                                          alt: "image",
                                          class: "w-100 rounded-xl"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      lg: "6",
                                      md: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "ps-sm-10" }, [
                                          createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Payments"),
                                          createVNode(_component_v_expansion_panels, {
                                            elevation: "0",
                                            modelValue: panel.value,
                                            "onUpdate:modelValue": ($event) => panel.value = $event,
                                            class: "feature-tabs-expansion"
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(QA2), (item) => {
                                                return openBlock(), createBlock(_component_v_expansion_panel, {
                                                  elevation: "0",
                                                  key: item.question
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_expansion_panel_title, {
                                                      class: "text-17 font-weight-semibold textPrimary",
                                                      "collapse-icon": "mdi-minus",
                                                      "expand-icon": "mdi-plus"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.question), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.answer), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_divider)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_btn, {
                                            color: "primary",
                                            class: "h-43 px-5 mt-6",
                                            flat: "",
                                            href: "",
                                            target: "_blank"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Learn More")
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "3" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, { class: "flex align-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      lg: "6",
                                      md: "12"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<img${ssrRenderAttr("src", _imports_0)} alt="image" class="w-100 rounded-xl"${_scopeId6}>`);
                                        } else {
                                          return [
                                            createVNode("img", {
                                              src: _imports_0,
                                              alt: "image",
                                              class: "w-100 rounded-xl"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      lg: "6",
                                      md: "12"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="ps-sm-10"${_scopeId6}><h2 class="display-2 mb-6 font-weight-bold"${_scopeId6}>Embedding</h2>`);
                                          _push7(ssrRenderComponent(_component_v_expansion_panels, {
                                            elevation: "0",
                                            modelValue: panel.value,
                                            "onUpdate:modelValue": ($event) => panel.value = $event,
                                            class: "feature-tabs-expansion"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<!--[-->`);
                                                ssrRenderList(unref(QA3), (item) => {
                                                  _push8(ssrRenderComponent(_component_v_expansion_panel, {
                                                    elevation: "0",
                                                    key: item.question
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_v_expansion_panel_title, {
                                                          class: "text-17 font-weight-semibold textPrimary",
                                                          "collapse-icon": "mdi-minus",
                                                          "expand-icon": "mdi-plus"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(item.question)}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(item.question), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(item.answer)}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(item.answer), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_v_divider, null, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_expansion_panel_title, {
                                                            class: "text-17 font-weight-semibold textPrimary",
                                                            "collapse-icon": "mdi-minus",
                                                            "expand-icon": "mdi-plus"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(item.question), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(item.answer), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_divider)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                });
                                                _push8(`<!--]-->`);
                                              } else {
                                                return [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(QA3), (item) => {
                                                    return openBlock(), createBlock(_component_v_expansion_panel, {
                                                      elevation: "0",
                                                      key: item.question
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_expansion_panel_title, {
                                                          class: "text-17 font-weight-semibold textPrimary",
                                                          "collapse-icon": "mdi-minus",
                                                          "expand-icon": "mdi-plus"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item.question), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item.answer), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_divider)
                                                      ]),
                                                      _: 2
                                                    }, 1024);
                                                  }), 128))
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            color: "primary",
                                            class: "h-43 px-5 mt-6",
                                            flat: "",
                                            href: "",
                                            target: "_blank"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Learn More`);
                                              } else {
                                                return [
                                                  createTextVNode("Learn More")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "ps-sm-10" }, [
                                              createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Embedding"),
                                              createVNode(_component_v_expansion_panels, {
                                                elevation: "0",
                                                modelValue: panel.value,
                                                "onUpdate:modelValue": ($event) => panel.value = $event,
                                                class: "feature-tabs-expansion"
                                              }, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(QA3), (item) => {
                                                    return openBlock(), createBlock(_component_v_expansion_panel, {
                                                      elevation: "0",
                                                      key: item.question
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_expansion_panel_title, {
                                                          class: "text-17 font-weight-semibold textPrimary",
                                                          "collapse-icon": "mdi-minus",
                                                          "expand-icon": "mdi-plus"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item.question), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item.answer), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_divider)
                                                      ]),
                                                      _: 2
                                                    }, 1024);
                                                  }), 128))
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_btn, {
                                                color: "primary",
                                                class: "h-43 px-5 mt-6",
                                                flat: "",
                                                href: "",
                                                target: "_blank"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Learn More")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        lg: "6",
                                        md: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: _imports_0,
                                            alt: "image",
                                            class: "w-100 rounded-xl"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        lg: "6",
                                        md: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "ps-sm-10" }, [
                                            createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Embedding"),
                                            createVNode(_component_v_expansion_panels, {
                                              elevation: "0",
                                              modelValue: panel.value,
                                              "onUpdate:modelValue": ($event) => panel.value = $event,
                                              class: "feature-tabs-expansion"
                                            }, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(QA3), (item) => {
                                                  return openBlock(), createBlock(_component_v_expansion_panel, {
                                                    elevation: "0",
                                                    key: item.question
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_expansion_panel_title, {
                                                        class: "text-17 font-weight-semibold textPrimary",
                                                        "collapse-icon": "mdi-minus",
                                                        "expand-icon": "mdi-plus"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(item.question), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(item.answer), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_v_divider)
                                                    ]),
                                                    _: 2
                                                  }, 1024);
                                                }), 128))
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_btn, {
                                              color: "primary",
                                              class: "h-43 px-5 mt-6",
                                              flat: "",
                                              href: "",
                                              target: "_blank"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Learn More")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_row, { class: "flex align-center" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      lg: "6",
                                      md: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: _imports_0,
                                          alt: "image",
                                          class: "w-100 rounded-xl"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      lg: "6",
                                      md: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "ps-sm-10" }, [
                                          createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Embedding"),
                                          createVNode(_component_v_expansion_panels, {
                                            elevation: "0",
                                            modelValue: panel.value,
                                            "onUpdate:modelValue": ($event) => panel.value = $event,
                                            class: "feature-tabs-expansion"
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(QA3), (item) => {
                                                return openBlock(), createBlock(_component_v_expansion_panel, {
                                                  elevation: "0",
                                                  key: item.question
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_expansion_panel_title, {
                                                      class: "text-17 font-weight-semibold textPrimary",
                                                      "collapse-icon": "mdi-minus",
                                                      "expand-icon": "mdi-plus"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.question), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.answer), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_divider)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_btn, {
                                            color: "primary",
                                            class: "h-43 px-5 mt-6",
                                            flat: "",
                                            href: "",
                                            target: "_blank"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Learn More")
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, { class: "flex align-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      lg: "6",
                                      md: "12"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<img${ssrRenderAttr("src", _imports_0)} alt="image" class="w-100 rounded-xl"${_scopeId6}>`);
                                        } else {
                                          return [
                                            createVNode("img", {
                                              src: _imports_0,
                                              alt: "image",
                                              class: "w-100 rounded-xl"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      lg: "6",
                                      md: "12"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="ps-sm-10"${_scopeId6}><h2 class="display-2 mb-6 font-weight-bold"${_scopeId6}>Workflows</h2>`);
                                          _push7(ssrRenderComponent(_component_v_expansion_panels, {
                                            elevation: "0",
                                            modelValue: panel.value,
                                            "onUpdate:modelValue": ($event) => panel.value = $event,
                                            class: "feature-tabs-expansion"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<!--[-->`);
                                                ssrRenderList(unref(QA4), (item) => {
                                                  _push8(ssrRenderComponent(_component_v_expansion_panel, {
                                                    elevation: "0",
                                                    key: item.question
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_v_expansion_panel_title, {
                                                          class: "text-17 font-weight-semibold textPrimary",
                                                          "collapse-icon": "mdi-minus",
                                                          "expand-icon": "mdi-plus"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(item.question)}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(item.question), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(item.answer)}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(item.answer), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_v_divider, null, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_expansion_panel_title, {
                                                            class: "text-17 font-weight-semibold textPrimary",
                                                            "collapse-icon": "mdi-minus",
                                                            "expand-icon": "mdi-plus"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(item.question), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(item.answer), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_divider)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                });
                                                _push8(`<!--]-->`);
                                              } else {
                                                return [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(QA4), (item) => {
                                                    return openBlock(), createBlock(_component_v_expansion_panel, {
                                                      elevation: "0",
                                                      key: item.question
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_expansion_panel_title, {
                                                          class: "text-17 font-weight-semibold textPrimary",
                                                          "collapse-icon": "mdi-minus",
                                                          "expand-icon": "mdi-plus"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item.question), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item.answer), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_divider)
                                                      ]),
                                                      _: 2
                                                    }, 1024);
                                                  }), 128))
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            color: "primary",
                                            class: "h-43 px-5 mt-6",
                                            flat: "",
                                            href: "",
                                            target: "_blank"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Learn More`);
                                              } else {
                                                return [
                                                  createTextVNode("Learn More")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "ps-sm-10" }, [
                                              createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Workflows"),
                                              createVNode(_component_v_expansion_panels, {
                                                elevation: "0",
                                                modelValue: panel.value,
                                                "onUpdate:modelValue": ($event) => panel.value = $event,
                                                class: "feature-tabs-expansion"
                                              }, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(QA4), (item) => {
                                                    return openBlock(), createBlock(_component_v_expansion_panel, {
                                                      elevation: "0",
                                                      key: item.question
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_expansion_panel_title, {
                                                          class: "text-17 font-weight-semibold textPrimary",
                                                          "collapse-icon": "mdi-minus",
                                                          "expand-icon": "mdi-plus"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item.question), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item.answer), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_divider)
                                                      ]),
                                                      _: 2
                                                    }, 1024);
                                                  }), 128))
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_btn, {
                                                color: "primary",
                                                class: "h-43 px-5 mt-6",
                                                flat: "",
                                                href: "",
                                                target: "_blank"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Learn More")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        lg: "6",
                                        md: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: _imports_0,
                                            alt: "image",
                                            class: "w-100 rounded-xl"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        lg: "6",
                                        md: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "ps-sm-10" }, [
                                            createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Workflows"),
                                            createVNode(_component_v_expansion_panels, {
                                              elevation: "0",
                                              modelValue: panel.value,
                                              "onUpdate:modelValue": ($event) => panel.value = $event,
                                              class: "feature-tabs-expansion"
                                            }, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(QA4), (item) => {
                                                  return openBlock(), createBlock(_component_v_expansion_panel, {
                                                    elevation: "0",
                                                    key: item.question
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_expansion_panel_title, {
                                                        class: "text-17 font-weight-semibold textPrimary",
                                                        "collapse-icon": "mdi-minus",
                                                        "expand-icon": "mdi-plus"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(item.question), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(item.answer), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_v_divider)
                                                    ]),
                                                    _: 2
                                                  }, 1024);
                                                }), 128))
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_btn, {
                                              color: "primary",
                                              class: "h-43 px-5 mt-6",
                                              flat: "",
                                              href: "",
                                              target: "_blank"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Learn More")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_row, { class: "flex align-center" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      lg: "6",
                                      md: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: _imports_0,
                                          alt: "image",
                                          class: "w-100 rounded-xl"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      lg: "6",
                                      md: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "ps-sm-10" }, [
                                          createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Workflows"),
                                          createVNode(_component_v_expansion_panels, {
                                            elevation: "0",
                                            modelValue: panel.value,
                                            "onUpdate:modelValue": ($event) => panel.value = $event,
                                            class: "feature-tabs-expansion"
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(QA4), (item) => {
                                                return openBlock(), createBlock(_component_v_expansion_panel, {
                                                  elevation: "0",
                                                  key: item.question
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_expansion_panel_title, {
                                                      class: "text-17 font-weight-semibold textPrimary",
                                                      "collapse-icon": "mdi-minus",
                                                      "expand-icon": "mdi-plus"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.question), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.answer), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_divider)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_btn, {
                                            color: "primary",
                                            class: "h-43 px-5 mt-6",
                                            flat: "",
                                            href: "",
                                            target: "_blank"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Learn More")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_window_item, { value: "1" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { class: "flex align-center" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    lg: "6",
                                    md: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_0,
                                        alt: "image",
                                        class: "w-100 rounded-xl"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    lg: "6",
                                    md: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "ps-sm-10" }, [
                                        createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Team Scheduling"),
                                        createVNode(_component_v_expansion_panels, {
                                          elevation: "0",
                                          modelValue: panel.value,
                                          "onUpdate:modelValue": ($event) => panel.value = $event,
                                          class: "feature-tabs-expansion"
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(QA1), (item) => {
                                              return openBlock(), createBlock(_component_v_expansion_panel, {
                                                elevation: "0",
                                                key: item.question
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_expansion_panel_title, {
                                                    class: "text-17 font-weight-semibold textPrimary",
                                                    "collapse-icon": "mdi-minus",
                                                    "expand-icon": "mdi-plus"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.question), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.answer), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_divider)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_btn, {
                                          color: "primary",
                                          class: "h-43 px-5 mt-6",
                                          flat: "",
                                          href: "",
                                          target: "_blank"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Learn More")
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
                          }),
                          createVNode(_component_v_window_item, { value: "2" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { class: "flex align-center" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    lg: "6",
                                    md: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_0,
                                        alt: "image",
                                        class: "w-100 rounded-xl"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    lg: "6",
                                    md: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "ps-sm-10" }, [
                                        createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Payments"),
                                        createVNode(_component_v_expansion_panels, {
                                          elevation: "0",
                                          modelValue: panel.value,
                                          "onUpdate:modelValue": ($event) => panel.value = $event,
                                          class: "feature-tabs-expansion"
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(QA2), (item) => {
                                              return openBlock(), createBlock(_component_v_expansion_panel, {
                                                elevation: "0",
                                                key: item.question
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_expansion_panel_title, {
                                                    class: "text-17 font-weight-semibold textPrimary",
                                                    "collapse-icon": "mdi-minus",
                                                    "expand-icon": "mdi-plus"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.question), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.answer), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_divider)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_btn, {
                                          color: "primary",
                                          class: "h-43 px-5 mt-6",
                                          flat: "",
                                          href: "",
                                          target: "_blank"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Learn More")
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
                          }),
                          createVNode(_component_v_window_item, { value: "3" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { class: "flex align-center" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    lg: "6",
                                    md: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_0,
                                        alt: "image",
                                        class: "w-100 rounded-xl"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    lg: "6",
                                    md: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "ps-sm-10" }, [
                                        createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Embedding"),
                                        createVNode(_component_v_expansion_panels, {
                                          elevation: "0",
                                          modelValue: panel.value,
                                          "onUpdate:modelValue": ($event) => panel.value = $event,
                                          class: "feature-tabs-expansion"
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(QA3), (item) => {
                                              return openBlock(), createBlock(_component_v_expansion_panel, {
                                                elevation: "0",
                                                key: item.question
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_expansion_panel_title, {
                                                    class: "text-17 font-weight-semibold textPrimary",
                                                    "collapse-icon": "mdi-minus",
                                                    "expand-icon": "mdi-plus"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.question), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.answer), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_divider)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_btn, {
                                          color: "primary",
                                          class: "h-43 px-5 mt-6",
                                          flat: "",
                                          href: "",
                                          target: "_blank"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Learn More")
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
                          }),
                          createVNode(_component_v_window_item, { value: "4" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { class: "flex align-center" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    lg: "6",
                                    md: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_0,
                                        alt: "image",
                                        class: "w-100 rounded-xl"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    lg: "6",
                                    md: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "ps-sm-10" }, [
                                        createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Workflows"),
                                        createVNode(_component_v_expansion_panels, {
                                          elevation: "0",
                                          modelValue: panel.value,
                                          "onUpdate:modelValue": ($event) => panel.value = $event,
                                          class: "feature-tabs-expansion"
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(QA4), (item) => {
                                              return openBlock(), createBlock(_component_v_expansion_panel, {
                                                elevation: "0",
                                                key: item.question
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_expansion_panel_title, {
                                                    class: "text-17 font-weight-semibold textPrimary",
                                                    "collapse-icon": "mdi-minus",
                                                    "expand-icon": "mdi-plus"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.question), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.answer), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_divider)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_btn, {
                                          color: "primary",
                                          class: "h-43 px-5 mt-6",
                                          flat: "",
                                          href: "",
                                          target: "_blank"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Learn More")
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
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex align-center" }, [
                      createVNode(_component_v_tabs_window, {
                        modelValue: tab.value,
                        "onUpdate:modelValue": ($event) => tab.value = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_window_item, { value: "1" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { class: "flex align-center" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    lg: "6",
                                    md: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_0,
                                        alt: "image",
                                        class: "w-100 rounded-xl"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    lg: "6",
                                    md: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "ps-sm-10" }, [
                                        createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Team Scheduling"),
                                        createVNode(_component_v_expansion_panels, {
                                          elevation: "0",
                                          modelValue: panel.value,
                                          "onUpdate:modelValue": ($event) => panel.value = $event,
                                          class: "feature-tabs-expansion"
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(QA1), (item) => {
                                              return openBlock(), createBlock(_component_v_expansion_panel, {
                                                elevation: "0",
                                                key: item.question
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_expansion_panel_title, {
                                                    class: "text-17 font-weight-semibold textPrimary",
                                                    "collapse-icon": "mdi-minus",
                                                    "expand-icon": "mdi-plus"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.question), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.answer), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_divider)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_btn, {
                                          color: "primary",
                                          class: "h-43 px-5 mt-6",
                                          flat: "",
                                          href: "",
                                          target: "_blank"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Learn More")
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
                          }),
                          createVNode(_component_v_window_item, { value: "2" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { class: "flex align-center" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    lg: "6",
                                    md: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_0,
                                        alt: "image",
                                        class: "w-100 rounded-xl"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    lg: "6",
                                    md: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "ps-sm-10" }, [
                                        createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Payments"),
                                        createVNode(_component_v_expansion_panels, {
                                          elevation: "0",
                                          modelValue: panel.value,
                                          "onUpdate:modelValue": ($event) => panel.value = $event,
                                          class: "feature-tabs-expansion"
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(QA2), (item) => {
                                              return openBlock(), createBlock(_component_v_expansion_panel, {
                                                elevation: "0",
                                                key: item.question
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_expansion_panel_title, {
                                                    class: "text-17 font-weight-semibold textPrimary",
                                                    "collapse-icon": "mdi-minus",
                                                    "expand-icon": "mdi-plus"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.question), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.answer), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_divider)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_btn, {
                                          color: "primary",
                                          class: "h-43 px-5 mt-6",
                                          flat: "",
                                          href: "",
                                          target: "_blank"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Learn More")
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
                          }),
                          createVNode(_component_v_window_item, { value: "3" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { class: "flex align-center" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    lg: "6",
                                    md: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_0,
                                        alt: "image",
                                        class: "w-100 rounded-xl"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    lg: "6",
                                    md: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "ps-sm-10" }, [
                                        createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Embedding"),
                                        createVNode(_component_v_expansion_panels, {
                                          elevation: "0",
                                          modelValue: panel.value,
                                          "onUpdate:modelValue": ($event) => panel.value = $event,
                                          class: "feature-tabs-expansion"
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(QA3), (item) => {
                                              return openBlock(), createBlock(_component_v_expansion_panel, {
                                                elevation: "0",
                                                key: item.question
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_expansion_panel_title, {
                                                    class: "text-17 font-weight-semibold textPrimary",
                                                    "collapse-icon": "mdi-minus",
                                                    "expand-icon": "mdi-plus"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.question), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.answer), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_divider)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_btn, {
                                          color: "primary",
                                          class: "h-43 px-5 mt-6",
                                          flat: "",
                                          href: "",
                                          target: "_blank"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Learn More")
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
                          }),
                          createVNode(_component_v_window_item, { value: "4" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { class: "flex align-center" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    lg: "6",
                                    md: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_0,
                                        alt: "image",
                                        class: "w-100 rounded-xl"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    lg: "6",
                                    md: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "ps-sm-10" }, [
                                        createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Workflows"),
                                        createVNode(_component_v_expansion_panels, {
                                          elevation: "0",
                                          modelValue: panel.value,
                                          "onUpdate:modelValue": ($event) => panel.value = $event,
                                          class: "feature-tabs-expansion"
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(QA4), (item) => {
                                              return openBlock(), createBlock(_component_v_expansion_panel, {
                                                elevation: "0",
                                                key: item.question
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_expansion_panel_title, {
                                                    class: "text-17 font-weight-semibold textPrimary",
                                                    "collapse-icon": "mdi-minus",
                                                    "expand-icon": "mdi-plus"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.question), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.answer), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_divider)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_btn, {
                                          color: "primary",
                                          class: "h-43 px-5 mt-6",
                                          flat: "",
                                          href: "",
                                          target: "_blank"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Learn More")
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
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, { class: "px-3" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex align-center" }, [
                    createVNode(_component_v_tabs_window, {
                      modelValue: tab.value,
                      "onUpdate:modelValue": ($event) => tab.value = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_window_item, { value: "1" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, { class: "flex align-center" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "6",
                                  md: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_0,
                                      alt: "image",
                                      class: "w-100 rounded-xl"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "6",
                                  md: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "ps-sm-10" }, [
                                      createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Team Scheduling"),
                                      createVNode(_component_v_expansion_panels, {
                                        elevation: "0",
                                        modelValue: panel.value,
                                        "onUpdate:modelValue": ($event) => panel.value = $event,
                                        class: "feature-tabs-expansion"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(QA1), (item) => {
                                            return openBlock(), createBlock(_component_v_expansion_panel, {
                                              elevation: "0",
                                              key: item.question
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_expansion_panel_title, {
                                                  class: "text-17 font-weight-semibold textPrimary",
                                                  "collapse-icon": "mdi-minus",
                                                  "expand-icon": "mdi-plus"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.question), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.answer), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_divider)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_btn, {
                                        color: "primary",
                                        class: "h-43 px-5 mt-6",
                                        flat: "",
                                        href: "",
                                        target: "_blank"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Learn More")
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
                        }),
                        createVNode(_component_v_window_item, { value: "2" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, { class: "flex align-center" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "6",
                                  md: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_0,
                                      alt: "image",
                                      class: "w-100 rounded-xl"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "6",
                                  md: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "ps-sm-10" }, [
                                      createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Payments"),
                                      createVNode(_component_v_expansion_panels, {
                                        elevation: "0",
                                        modelValue: panel.value,
                                        "onUpdate:modelValue": ($event) => panel.value = $event,
                                        class: "feature-tabs-expansion"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(QA2), (item) => {
                                            return openBlock(), createBlock(_component_v_expansion_panel, {
                                              elevation: "0",
                                              key: item.question
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_expansion_panel_title, {
                                                  class: "text-17 font-weight-semibold textPrimary",
                                                  "collapse-icon": "mdi-minus",
                                                  "expand-icon": "mdi-plus"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.question), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.answer), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_divider)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_btn, {
                                        color: "primary",
                                        class: "h-43 px-5 mt-6",
                                        flat: "",
                                        href: "",
                                        target: "_blank"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Learn More")
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
                        }),
                        createVNode(_component_v_window_item, { value: "3" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, { class: "flex align-center" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "6",
                                  md: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_0,
                                      alt: "image",
                                      class: "w-100 rounded-xl"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "6",
                                  md: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "ps-sm-10" }, [
                                      createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Embedding"),
                                      createVNode(_component_v_expansion_panels, {
                                        elevation: "0",
                                        modelValue: panel.value,
                                        "onUpdate:modelValue": ($event) => panel.value = $event,
                                        class: "feature-tabs-expansion"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(QA3), (item) => {
                                            return openBlock(), createBlock(_component_v_expansion_panel, {
                                              elevation: "0",
                                              key: item.question
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_expansion_panel_title, {
                                                  class: "text-17 font-weight-semibold textPrimary",
                                                  "collapse-icon": "mdi-minus",
                                                  "expand-icon": "mdi-plus"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.question), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.answer), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_divider)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_btn, {
                                        color: "primary",
                                        class: "h-43 px-5 mt-6",
                                        flat: "",
                                        href: "",
                                        target: "_blank"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Learn More")
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
                        }),
                        createVNode(_component_v_window_item, { value: "4" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, { class: "flex align-center" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "6",
                                  md: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_0,
                                      alt: "image",
                                      class: "w-100 rounded-xl"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "6",
                                  md: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "ps-sm-10" }, [
                                      createVNode("h2", { class: "display-2 mb-6 font-weight-bold" }, "Workflows"),
                                      createVNode(_component_v_expansion_panels, {
                                        elevation: "0",
                                        modelValue: panel.value,
                                        "onUpdate:modelValue": ($event) => panel.value = $event,
                                        class: "feature-tabs-expansion"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(QA4), (item) => {
                                            return openBlock(), createBlock(_component_v_expansion_panel, {
                                              elevation: "0",
                                              key: item.question
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_expansion_panel_title, {
                                                  class: "text-17 font-weight-semibold textPrimary",
                                                  "collapse-icon": "mdi-minus",
                                                  "expand-icon": "mdi-plus"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.question), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_expansion_panel_text, { class: "text-16 pa-0 text-grey100" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.answer), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_divider)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_btn, {
                                        color: "primary",
                                        class: "h-43 px-5 mt-6",
                                        flat: "",
                                        href: "",
                                        target: "_blank"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Learn More")
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
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/Homepage/FeatureTabs.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_3 = publicAssetsURL("/images/front-pages/background/main-banner.png");
const icon1 = publicAssetsURL("/images/front-pages/technology/nuxt.svg");
const icon2 = publicAssetsURL("/images/front-pages/technology/Vuetify.svg");
const icon3 = publicAssetsURL("/images/front-pages/technology/Vite.svg");
const icon4 = publicAssetsURL("/images/front-pages/technology/Typescript.svg");
const icon5 = publicAssetsURL("/images/front-pages/technology/Pinia.svg");
const icon6 = publicAssetsURL("/images/front-pages/technology/Apexchart.svg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Mainbanner",
  __ssrInlineRender: true,
  setup(__props) {
    const technology = ref([
      {
        img: icon1,
        name: "NuxtJs"
      },
      {
        img: icon2,
        name: "Vuetify"
      },
      {
        img: icon3,
        name: "Vite"
      },
      {
        img: icon4,
        name: "Typescript"
      },
      {
        img: icon5,
        name: "Pinia"
      },
      {
        img: icon6,
        name: "ApexChart"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-hidden bg-background" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_container, { class: "max-width-1218 pt-md-10 pt-6 pb-xl-0 pb-10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { class: "d-flex justify-center align-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    lg: "6",
                    class: "text-align-start"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="text-56 textPrimary font-weight-medium"${_scopeId3}><b${_scopeId3}>A Feature-Packed Dashboard</b> Built For Developers&#39; Needs. </h1><div class="d-sm-flex align-center text-center justify-md-start justify-center pt-5 gap-3"${_scopeId3}><div class="d-flex flex-row-reverse justify-sm-start justify-center ml-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_avatar, {
                          class: "ml-n2 avtar-border",
                          size: "40"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<img${ssrRenderAttr("src", user3)} height="40" alt="usericon"${_scopeId4}>`);
                            } else {
                              return [
                                createVNode("img", {
                                  src: user3,
                                  height: "40",
                                  alt: "usericon"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_avatar, {
                          class: "ml-n2 avtar-border",
                          size: "40"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<img${ssrRenderAttr("src", user2)} height="40" alt="usericon"${_scopeId4}>`);
                            } else {
                              return [
                                createVNode("img", {
                                  src: user2,
                                  height: "40",
                                  alt: "usericon"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_avatar, {
                          class: "ml-n2 avtar-border",
                          size: "40"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<img${ssrRenderAttr("src", user1)} height="40" alt="usericon"${_scopeId4}>`);
                            } else {
                              return [
                                createVNode("img", {
                                  src: user1,
                                  height: "40",
                                  alt: "usericon"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="d-sm-flex text-muted"${_scopeId3}><h6 class="text-17 font-weight-medium mt-sm-0 mt-2"${_scopeId3}>52,589+</h6><h6 class="text-17 font-weight-medium ml-2"${_scopeId3}> developers &amp; agencies using our templates </h6></div></div><div class="d-flex flex-wrap ga-sm-6 ga-3 pt-9 pb-7 justify-md-start justify-center align-center technology"${_scopeId3}><!--[-->`);
                        ssrRenderList(technology.value, (item, i) => {
                          _push4(`<div${_scopeId3}><div class="d-flex justify-center align-center round-56 rounded-xl bg-surface elevation-1"${_scopeId3}><img${ssrRenderAttr("src", item.img)} alt="technology" height="30" width="30"${_scopeId3}></div>`);
                          _push4(ssrRenderComponent(_component_v_tooltip, {
                            activator: "parent",
                            location: "bottom"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        });
                        _push4(`<!--]--></div><div class="d-flex justify-md-start justify-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "primary",
                          rounded: "pill",
                          class: "px-8 transform-none m-btn-full",
                          size: "large",
                          href: "/auth/login",
                          target: "_blank"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Log in`);
                            } else {
                              return [
                                createTextVNode("Log in")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("h1", { class: "text-56 textPrimary font-weight-medium" }, [
                            createVNode("b", null, "A Feature-Packed Dashboard"),
                            createTextVNode(" Built For Developers' Needs. ")
                          ]),
                          createVNode("div", { class: "d-sm-flex align-center text-center justify-md-start justify-center pt-5 gap-3" }, [
                            createVNode("div", { class: "d-flex flex-row-reverse justify-sm-start justify-center ml-2" }, [
                              createVNode(_component_v_avatar, {
                                class: "ml-n2 avtar-border",
                                size: "40"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: user3,
                                    height: "40",
                                    alt: "usericon"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_avatar, {
                                class: "ml-n2 avtar-border",
                                size: "40"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: user2,
                                    height: "40",
                                    alt: "usericon"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_avatar, {
                                class: "ml-n2 avtar-border",
                                size: "40"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: user1,
                                    height: "40",
                                    alt: "usericon"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "d-sm-flex text-muted" }, [
                              createVNode("h6", { class: "text-17 font-weight-medium mt-sm-0 mt-2" }, "52,589+"),
                              createVNode("h6", { class: "text-17 font-weight-medium ml-2" }, " developers & agencies using our templates ")
                            ])
                          ]),
                          createVNode("div", { class: "d-flex flex-wrap ga-sm-6 ga-3 pt-9 pb-7 justify-md-start justify-center align-center technology" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(technology.value, (item, i) => {
                              return openBlock(), createBlock("div", { key: i }, [
                                createVNode("div", { class: "d-flex justify-center align-center round-56 rounded-xl bg-surface elevation-1" }, [
                                  createVNode("img", {
                                    src: item.img,
                                    alt: "technology",
                                    height: "30",
                                    width: "30"
                                  }, null, 8, ["src"])
                                ]),
                                createVNode(_component_v_tooltip, {
                                  activator: "parent",
                                  location: "bottom"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.name), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]);
                            }), 128))
                          ]),
                          createVNode("div", { class: "d-flex justify-md-start justify-center" }, [
                            createVNode(_component_v_btn, {
                              color: "primary",
                              rounded: "pill",
                              class: "px-8 transform-none m-btn-full",
                              size: "large",
                              href: "/auth/login",
                              target: "_blank"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Log in")
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
                    lg: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="main-banner d-lg-block d-none"${_scopeId3}><img${ssrRenderAttr("src", _imports_3)} alt="banner-right-image" class="rtlImg"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "main-banner d-lg-block d-none" }, [
                            createVNode("img", {
                              src: _imports_3,
                              alt: "banner-right-image",
                              class: "rtlImg"
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
                      lg: "6",
                      class: "text-align-start"
                    }, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "text-56 textPrimary font-weight-medium" }, [
                          createVNode("b", null, "A Feature-Packed Dashboard"),
                          createTextVNode(" Built For Developers' Needs. ")
                        ]),
                        createVNode("div", { class: "d-sm-flex align-center text-center justify-md-start justify-center pt-5 gap-3" }, [
                          createVNode("div", { class: "d-flex flex-row-reverse justify-sm-start justify-center ml-2" }, [
                            createVNode(_component_v_avatar, {
                              class: "ml-n2 avtar-border",
                              size: "40"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: user3,
                                  height: "40",
                                  alt: "usericon"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_avatar, {
                              class: "ml-n2 avtar-border",
                              size: "40"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: user2,
                                  height: "40",
                                  alt: "usericon"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_avatar, {
                              class: "ml-n2 avtar-border",
                              size: "40"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: user1,
                                  height: "40",
                                  alt: "usericon"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "d-sm-flex text-muted" }, [
                            createVNode("h6", { class: "text-17 font-weight-medium mt-sm-0 mt-2" }, "52,589+"),
                            createVNode("h6", { class: "text-17 font-weight-medium ml-2" }, " developers & agencies using our templates ")
                          ])
                        ]),
                        createVNode("div", { class: "d-flex flex-wrap ga-sm-6 ga-3 pt-9 pb-7 justify-md-start justify-center align-center technology" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(technology.value, (item, i) => {
                            return openBlock(), createBlock("div", { key: i }, [
                              createVNode("div", { class: "d-flex justify-center align-center round-56 rounded-xl bg-surface elevation-1" }, [
                                createVNode("img", {
                                  src: item.img,
                                  alt: "technology",
                                  height: "30",
                                  width: "30"
                                }, null, 8, ["src"])
                              ]),
                              createVNode(_component_v_tooltip, {
                                activator: "parent",
                                location: "bottom"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]);
                          }), 128))
                        ]),
                        createVNode("div", { class: "d-flex justify-md-start justify-center" }, [
                          createVNode(_component_v_btn, {
                            color: "primary",
                            rounded: "pill",
                            class: "px-8 transform-none m-btn-full",
                            size: "large",
                            href: "/auth/login",
                            target: "_blank"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Log in")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "main-banner d-lg-block d-none" }, [
                          createVNode("img", {
                            src: _imports_3,
                            alt: "banner-right-image",
                            class: "rtlImg"
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
              createVNode(_component_v_row, { class: "d-flex justify-center align-center" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    lg: "6",
                    class: "text-align-start"
                  }, {
                    default: withCtx(() => [
                      createVNode("h1", { class: "text-56 textPrimary font-weight-medium" }, [
                        createVNode("b", null, "A Feature-Packed Dashboard"),
                        createTextVNode(" Built For Developers' Needs. ")
                      ]),
                      createVNode("div", { class: "d-sm-flex align-center text-center justify-md-start justify-center pt-5 gap-3" }, [
                        createVNode("div", { class: "d-flex flex-row-reverse justify-sm-start justify-center ml-2" }, [
                          createVNode(_component_v_avatar, {
                            class: "ml-n2 avtar-border",
                            size: "40"
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: user3,
                                height: "40",
                                alt: "usericon"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_avatar, {
                            class: "ml-n2 avtar-border",
                            size: "40"
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: user2,
                                height: "40",
                                alt: "usericon"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_avatar, {
                            class: "ml-n2 avtar-border",
                            size: "40"
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: user1,
                                height: "40",
                                alt: "usericon"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "d-sm-flex text-muted" }, [
                          createVNode("h6", { class: "text-17 font-weight-medium mt-sm-0 mt-2" }, "52,589+"),
                          createVNode("h6", { class: "text-17 font-weight-medium ml-2" }, " developers & agencies using our templates ")
                        ])
                      ]),
                      createVNode("div", { class: "d-flex flex-wrap ga-sm-6 ga-3 pt-9 pb-7 justify-md-start justify-center align-center technology" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(technology.value, (item, i) => {
                          return openBlock(), createBlock("div", { key: i }, [
                            createVNode("div", { class: "d-flex justify-center align-center round-56 rounded-xl bg-surface elevation-1" }, [
                              createVNode("img", {
                                src: item.img,
                                alt: "technology",
                                height: "30",
                                width: "30"
                              }, null, 8, ["src"])
                            ]),
                            createVNode(_component_v_tooltip, {
                              activator: "parent",
                              location: "bottom"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "d-flex justify-md-start justify-center" }, [
                        createVNode(_component_v_btn, {
                          color: "primary",
                          rounded: "pill",
                          class: "px-8 transform-none m-btn-full",
                          size: "large",
                          href: "/auth/login",
                          target: "_blank"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Log in")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    lg: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "main-banner d-lg-block d-none" }, [
                        createVNode("img", {
                          src: _imports_3,
                          alt: "banner-right-image",
                          class: "rtlImg"
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/Homepage/Mainbanner.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OurClients",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_v_sheet = resolveComponent("v-sheet");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-96 pb-14 bg-surface" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_container, { class: "max-width-1218" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    lg: "5"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="display-1 textPrimary font-weight-bold"${_scopeId3}>Over 45,000 clients and counting.</h2><p class="text-grey100 py-6 text-17 lh-32 pe-lg-4"${_scopeId3}> Pellentesque varius semper odio non pretium. Nullam sagittis neque orci, eu elementum enim. </p>`);
                        _push4(ssrRenderComponent(_component_RouterLink, {
                          to: "",
                          target: "_blank",
                          class: "text-15 text-hover-primary font-weight-bold underline-link-6 d-flex justify-start"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Request a Callback`);
                            } else {
                              return [
                                createTextVNode("Request a Callback")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h2", { class: "display-1 textPrimary font-weight-bold" }, "Over 45,000 clients and counting."),
                          createVNode("p", { class: "text-grey100 py-6 text-17 lh-32 pe-lg-4" }, " Pellentesque varius semper odio non pretium. Nullam sagittis neque orci, eu elementum enim. "),
                          createVNode(_component_RouterLink, {
                            to: "",
                            target: "_blank",
                            class: "text-15 text-hover-primary font-weight-bold underline-link-6 d-flex justify-start"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Request a Callback")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    lg: "7",
                    class: "pt-lg-0 pt-8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(Features), (item) => {
                                _push5(ssrRenderComponent(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  key: item.icon
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_sheet, { class: "px-lg-6 pb-6" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="${ssrRenderClass(
                                              "round-48 rounded-lg d-flex justify-center align-center bg-" + item.bgcolor
                                            )}"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(unref(Icon), {
                                              icon: item.icon,
                                              height: "22",
                                              class: "text-" + item.color
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><h4 class="text-22 textPrimary font-weight-bold py-5"${_scopeId6}>${ssrInterpolate(item.title)}</h4><p class="text-grey100 text-15"${_scopeId6}>${ssrInterpolate(item.subtitle)}</p>`);
                                          } else {
                                            return [
                                              createVNode("div", {
                                                class: "round-48 rounded-lg d-flex justify-center align-center bg-" + item.bgcolor
                                              }, [
                                                createVNode(unref(Icon), {
                                                  icon: item.icon,
                                                  height: "22",
                                                  class: "text-" + item.color
                                                }, null, 8, ["icon", "class"])
                                              ], 2),
                                              createVNode("h4", { class: "text-22 textPrimary font-weight-bold py-5" }, toDisplayString(item.title), 1),
                                              createVNode("p", { class: "text-grey100 text-15" }, toDisplayString(item.subtitle), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_sheet, { class: "px-lg-6 pb-6" }, {
                                          default: withCtx(() => [
                                            createVNode("div", {
                                              class: "round-48 rounded-lg d-flex justify-center align-center bg-" + item.bgcolor
                                            }, [
                                              createVNode(unref(Icon), {
                                                icon: item.icon,
                                                height: "22",
                                                class: "text-" + item.color
                                              }, null, 8, ["icon", "class"])
                                            ], 2),
                                            createVNode("h4", { class: "text-22 textPrimary font-weight-bold py-5" }, toDisplayString(item.title), 1),
                                            createVNode("p", { class: "text-grey100 text-15" }, toDisplayString(item.subtitle), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(Features), (item) => {
                                  return openBlock(), createBlock(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    key: item.icon
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_sheet, { class: "px-lg-6 pb-6" }, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            class: "round-48 rounded-lg d-flex justify-center align-center bg-" + item.bgcolor
                                          }, [
                                            createVNode(unref(Icon), {
                                              icon: item.icon,
                                              height: "22",
                                              class: "text-" + item.color
                                            }, null, 8, ["icon", "class"])
                                          ], 2),
                                          createVNode("h4", { class: "text-22 textPrimary font-weight-bold py-5" }, toDisplayString(item.title), 1),
                                          createVNode("p", { class: "text-grey100 text-15" }, toDisplayString(item.subtitle), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(Features), (item) => {
                                return openBlock(), createBlock(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  key: item.icon
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_sheet, { class: "px-lg-6 pb-6" }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: "round-48 rounded-lg d-flex justify-center align-center bg-" + item.bgcolor
                                        }, [
                                          createVNode(unref(Icon), {
                                            icon: item.icon,
                                            height: "22",
                                            class: "text-" + item.color
                                          }, null, 8, ["icon", "class"])
                                        ], 2),
                                        createVNode("h4", { class: "text-22 textPrimary font-weight-bold py-5" }, toDisplayString(item.title), 1),
                                        createVNode("p", { class: "text-grey100 text-15" }, toDisplayString(item.subtitle), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "5"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "display-1 textPrimary font-weight-bold" }, "Over 45,000 clients and counting."),
                        createVNode("p", { class: "text-grey100 py-6 text-17 lh-32 pe-lg-4" }, " Pellentesque varius semper odio non pretium. Nullam sagittis neque orci, eu elementum enim. "),
                        createVNode(_component_RouterLink, {
                          to: "",
                          target: "_blank",
                          class: "text-15 text-hover-primary font-weight-bold underline-link-6 d-flex justify-start"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Request a Callback")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "7",
                      class: "pt-lg-0 pt-8"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(Features), (item) => {
                              return openBlock(), createBlock(_component_v_col, {
                                cols: "12",
                                sm: "6",
                                key: item.icon
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_sheet, { class: "px-lg-6 pb-6" }, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: "round-48 rounded-lg d-flex justify-center align-center bg-" + item.bgcolor
                                      }, [
                                        createVNode(unref(Icon), {
                                          icon: item.icon,
                                          height: "22",
                                          class: "text-" + item.color
                                        }, null, 8, ["icon", "class"])
                                      ], 2),
                                      createVNode("h4", { class: "text-22 textPrimary font-weight-bold py-5" }, toDisplayString(item.title), 1),
                                      createVNode("p", { class: "text-grey100 text-15" }, toDisplayString(item.subtitle), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
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
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    lg: "5"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "display-1 textPrimary font-weight-bold" }, "Over 45,000 clients and counting."),
                      createVNode("p", { class: "text-grey100 py-6 text-17 lh-32 pe-lg-4" }, " Pellentesque varius semper odio non pretium. Nullam sagittis neque orci, eu elementum enim. "),
                      createVNode(_component_RouterLink, {
                        to: "",
                        target: "_blank",
                        class: "text-15 text-hover-primary font-weight-bold underline-link-6 d-flex justify-start"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Request a Callback")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    lg: "7",
                    class: "pt-lg-0 pt-8"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(Features), (item) => {
                            return openBlock(), createBlock(_component_v_col, {
                              cols: "12",
                              sm: "6",
                              key: item.icon
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_sheet, { class: "px-lg-6 pb-6" }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: "round-48 rounded-lg d-flex justify-center align-center bg-" + item.bgcolor
                                    }, [
                                      createVNode(unref(Icon), {
                                        icon: item.icon,
                                        height: "22",
                                        class: "text-" + item.color
                                      }, null, 8, ["icon", "class"])
                                    ], 2),
                                    createVNode("h4", { class: "text-22 textPrimary font-weight-bold py-5" }, toDisplayString(item.title), 1),
                                    createVNode("p", { class: "text-grey100 text-15" }, toDisplayString(item.subtitle), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/Homepage/OurClients.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Homepage",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$5, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ContactBar, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$9, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$a, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$b, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$c, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$d, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2),
              createVNode(_sfc_main$1),
              createVNode(_sfc_main$3),
              createVNode(_sfc_main$6),
              createVNode(ContactBar),
              createVNode(_sfc_main$7),
              createVNode(_sfc_main$8),
              createVNode(_sfc_main$9),
              createVNode(_sfc_main$a),
              createVNode(_sfc_main$b),
              createVNode(_sfc_main$c),
              createVNode(_sfc_main$d)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/front-pages/Homepage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Homepage-Cz0A6VB_.js.map
