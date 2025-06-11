import { _ as __nuxt_component_0$1 } from "./client-only-Bwxzq3Sq.js";
import { ref, watchEffect, watch, getCurrentInstance, defineComponent, resolveComponent, withCtx, unref, createVNode, createTextVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext, mergeProps, toDisplayString, resolveDirective, createSlots, shallowRef, computed, withModifiers } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { u as useCustomizerStore } from "./customizer-CM6PVnj3.js";
import { CheckIcon, CircleXIcon, MailIcon } from "vue-tabler-icons";
import { Icon } from "@iconify/vue";
import { ad as injectHead, ae as resolveUnrefHeadInput, q as useTheme, D as _imports_0, a8 as flag1, a9 as flag4, aa as flag2, ab as flag3, u as useRouter, g as useDisplay, ac as __nuxt_component_6 } from "../server.mjs";
import { _ as _sfc_main$i } from "./Logo-DggZ73XB.js";
import { s as searchSugg, l as languageDD, n as notifications, p as profileDD } from "./headerData-B8k9Po-x.js";
import { u as useAuthentification } from "./UseAuthentification-CchpAVzc.js";
import { u as useEcomStore } from "./eCommerce-D0OnZgt2.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-DZ3wFR7I.js";
import { composableNames } from "@unhead/shared";
import "hookable";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
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
import "cookie-es";
import "ohash";
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry.patch(e);
  });
  getCurrentInstance();
  return entry;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "Customizer",
  __ssrInlineRender: true,
  setup(__props) {
    useTheme();
    const customizer = useCustomizerStore();
    const themeColors = ref([
      {
        name: "BLUE_THEME",
        bg: "themeBlue"
      },
      {
        name: "AQUA_THEME",
        bg: "themeAqua"
      },
      {
        name: "PURPLE_THEME",
        bg: "themePurple"
      },
      {
        name: "GREEN_THEME",
        bg: "themeGreen"
      },
      {
        name: "CYAN_THEME",
        bg: "themeCyan"
      },
      {
        name: "ORANGE_THEME",
        bg: "themeOrange"
      }
    ]);
    const DarkthemeColors = ref([
      { name: "DARK_BLUE_THEME", bg: "themeDarkBlue" },
      { name: "DARK_AQUA_THEME", bg: "themeDarkAqua" },
      { name: "DARK_PURPLE_THEME", bg: "themeDarkPurple" },
      { name: "DARK_GREEN_THEME", bg: "themeDarkGreen" },
      { name: "DARK_CYAN_THEME", bg: "themeDarkCyan" },
      { name: "DARK_ORANGE_THEME", bg: "themeDarkOrange" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_divider = resolveComponent("v-divider");
      const _component_perfect_scrollbar = resolveComponent("perfect-scrollbar");
      const _component_v_btn_toggle = resolveComponent("v-btn-toggle");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_item_group = resolveComponent("v-item-group");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_item = resolveComponent("v-item");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_avatar = resolveComponent("v-avatar");
      _push(`<!--[--><div class="pa-6"><h5 class="text-h5">Settings</h5></div>`);
      _push(ssrRenderComponent(_component_v_divider, null, null, _parent));
      _push(ssrRenderComponent(_component_perfect_scrollbar, { style: { "height": "calc(100vh - 90px)" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pa-6"${_scopeId}><h6 class="text-h6 mb-2"${_scopeId}>Sidebar Layout</h6>`);
            _push2(ssrRenderComponent(_component_v_btn_toggle, {
              modelValue: unref(customizer).setHorizontalLayout,
              "onUpdate:modelValue": ($event) => unref(customizer).setHorizontalLayout = $event,
              color: "primary",
              class: "my-2 btn-group-custom gap-3",
              rounded: "0",
              group: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, {
                    value: false,
                    variant: "text",
                    elevation: "10",
                    class: "rounded-xl"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          icon: "solar:slider-vertical-minimalistic-linear",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }, null, _parent4, _scopeId3));
                        _push4(` Vertical `);
                      } else {
                        return [
                          createVNode(unref(Icon), {
                            icon: "solar:slider-vertical-minimalistic-linear",
                            height: "22",
                            width: "22",
                            size: "22",
                            class: "mr-2 icon"
                          }),
                          createTextVNode(" Vertical ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    value: true,
                    variant: "text",
                    elevation: "10",
                    class: "rounded-xl"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          icon: "solar:slider-minimalistic-horizontal-outline",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }, null, _parent4, _scopeId3));
                        _push4(` Horizontal `);
                      } else {
                        return [
                          createVNode(unref(Icon), {
                            icon: "solar:slider-minimalistic-horizontal-outline",
                            height: "22",
                            width: "22",
                            size: "22",
                            class: "mr-2 icon"
                          }),
                          createTextVNode(" Horizontal ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      value: false,
                      variant: "text",
                      elevation: "10",
                      class: "rounded-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          icon: "solar:slider-vertical-minimalistic-linear",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }),
                        createTextVNode(" Vertical ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_btn, {
                      value: true,
                      variant: "text",
                      elevation: "10",
                      class: "rounded-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          icon: "solar:slider-minimalistic-horizontal-outline",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }),
                        createTextVNode(" Horizontal ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h6 class="text-h6 mt-8 mb-5"${_scopeId}>Theme Direction</h6>`);
            _push2(ssrRenderComponent(_component_v_btn_toggle, {
              modelValue: unref(customizer).setRTLLayout,
              "onUpdate:modelValue": ($event) => unref(customizer).setRTLLayout = $event,
              color: "primary",
              class: "my-2 btn-group-custom gap-3",
              rounded: "0",
              group: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, {
                    value: false,
                    variant: "text",
                    elevation: "10",
                    class: "rounded-xl"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          icon: "solar:align-left-linear",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }, null, _parent4, _scopeId3));
                        _push4(` LTR `);
                      } else {
                        return [
                          createVNode(unref(Icon), {
                            icon: "solar:align-left-linear",
                            height: "22",
                            width: "22",
                            size: "22",
                            class: "mr-2 icon"
                          }),
                          createTextVNode(" LTR ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    value: true,
                    variant: "text",
                    elevation: "10",
                    class: "rounded-xl"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          icon: "solar:align-right-linear",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }, null, _parent4, _scopeId3));
                        _push4(` RTL `);
                      } else {
                        return [
                          createVNode(unref(Icon), {
                            icon: "solar:align-right-linear",
                            height: "22",
                            width: "22",
                            size: "22",
                            class: "mr-2 icon"
                          }),
                          createTextVNode(" RTL ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      value: false,
                      variant: "text",
                      elevation: "10",
                      class: "rounded-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          icon: "solar:align-left-linear",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }),
                        createTextVNode(" LTR ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_btn, {
                      value: true,
                      variant: "text",
                      elevation: "10",
                      class: "rounded-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          icon: "solar:align-right-linear",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }),
                        createTextVNode(" RTL ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h6 class="text-h6 mt-8 mb-5"${_scopeId}>Theme Color</h6>`);
            _push2(ssrRenderComponent(_component_v_item_group, {
              mandatory: "",
              modelValue: unref(customizer).actTheme,
              "onUpdate:modelValue": ($event) => unref(customizer).actTheme = $event,
              class: "ml-n2 v-row"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(themeColors.value, (theme2) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      cols: "4",
                      key: theme2.name,
                      class: "pa-2"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_item, {
                            value: theme2.name
                          }, {
                            default: withCtx(({ isSelected, toggle }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_sheet, {
                                  rounded: "xl",
                                  class: "border cursor-pointer d-block text-center px-5 py-4 hover-btns",
                                  elevation: "10",
                                  onClick: toggle
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_avatar, {
                                        class: theme2.bg,
                                        size: "25"
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            if (isSelected) {
                                              _push7(ssrRenderComponent(unref(CheckIcon), {
                                                color: "white",
                                                size: "18"
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              isSelected ? (openBlock(), createBlock(unref(CheckIcon), {
                                                key: 0,
                                                color: "white",
                                                size: "18"
                                              })) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_avatar, {
                                          class: theme2.bg,
                                          size: "25"
                                        }, {
                                          default: withCtx(() => [
                                            isSelected ? (openBlock(), createBlock(unref(CheckIcon), {
                                              key: 0,
                                              color: "white",
                                              size: "18"
                                            })) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1032, ["class"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_sheet, {
                                    rounded: "xl",
                                    class: "border cursor-pointer d-block text-center px-5 py-4 hover-btns",
                                    elevation: "10",
                                    onClick: toggle
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_avatar, {
                                        class: theme2.bg,
                                        size: "25"
                                      }, {
                                        default: withCtx(() => [
                                          isSelected ? (openBlock(), createBlock(unref(CheckIcon), {
                                            key: 0,
                                            color: "white",
                                            size: "18"
                                          })) : createCommentVNode("", true)
                                        ]),
                                        _: 2
                                      }, 1032, ["class"])
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_item, {
                              value: theme2.name
                            }, {
                              default: withCtx(({ isSelected, toggle }) => [
                                createVNode(_component_v_sheet, {
                                  rounded: "xl",
                                  class: "border cursor-pointer d-block text-center px-5 py-4 hover-btns",
                                  elevation: "10",
                                  onClick: toggle
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_avatar, {
                                      class: theme2.bg,
                                      size: "25"
                                    }, {
                                      default: withCtx(() => [
                                        isSelected ? (openBlock(), createBlock(unref(CheckIcon), {
                                          key: 0,
                                          color: "white",
                                          size: "18"
                                        })) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              _: 2
                            }, 1032, ["value"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(themeColors.value, (theme2) => {
                      return openBlock(), createBlock(_component_v_col, {
                        cols: "4",
                        key: theme2.name,
                        class: "pa-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_item, {
                            value: theme2.name
                          }, {
                            default: withCtx(({ isSelected, toggle }) => [
                              createVNode(_component_v_sheet, {
                                rounded: "xl",
                                class: "border cursor-pointer d-block text-center px-5 py-4 hover-btns",
                                elevation: "10",
                                onClick: toggle
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_avatar, {
                                    class: theme2.bg,
                                    size: "25"
                                  }, {
                                    default: withCtx(() => [
                                      isSelected ? (openBlock(), createBlock(unref(CheckIcon), {
                                        key: 0,
                                        color: "white",
                                        size: "18"
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"])
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1032, ["value"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h6 class="text-h6 mt-11 mb-5"${_scopeId}>Theme Dark Color</h6>`);
            _push2(ssrRenderComponent(_component_v_item_group, {
              mandatory: "",
              modelValue: unref(customizer).actTheme,
              "onUpdate:modelValue": ($event) => unref(customizer).actTheme = $event,
              class: "ml-n2 v-row"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(DarkthemeColors.value, (theme2) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      cols: "4",
                      key: theme2.name,
                      class: "pa-2"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_item, {
                            value: theme2.name
                          }, {
                            default: withCtx(({ isSelected, toggle }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_sheet, {
                                  rounded: "xl",
                                  class: "border cursor-pointer d-block text-center px-5 py-4 hover-btns",
                                  elevation: "10",
                                  onClick: toggle
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_avatar, {
                                        class: theme2.bg,
                                        size: "25"
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            if (isSelected) {
                                              _push7(ssrRenderComponent(unref(CheckIcon), {
                                                color: "white",
                                                size: "18"
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              isSelected ? (openBlock(), createBlock(unref(CheckIcon), {
                                                key: 0,
                                                color: "white",
                                                size: "18"
                                              })) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_avatar, {
                                          class: theme2.bg,
                                          size: "25"
                                        }, {
                                          default: withCtx(() => [
                                            isSelected ? (openBlock(), createBlock(unref(CheckIcon), {
                                              key: 0,
                                              color: "white",
                                              size: "18"
                                            })) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1032, ["class"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_sheet, {
                                    rounded: "xl",
                                    class: "border cursor-pointer d-block text-center px-5 py-4 hover-btns",
                                    elevation: "10",
                                    onClick: toggle
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_avatar, {
                                        class: theme2.bg,
                                        size: "25"
                                      }, {
                                        default: withCtx(() => [
                                          isSelected ? (openBlock(), createBlock(unref(CheckIcon), {
                                            key: 0,
                                            color: "white",
                                            size: "18"
                                          })) : createCommentVNode("", true)
                                        ]),
                                        _: 2
                                      }, 1032, ["class"])
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_item, {
                              value: theme2.name
                            }, {
                              default: withCtx(({ isSelected, toggle }) => [
                                createVNode(_component_v_sheet, {
                                  rounded: "xl",
                                  class: "border cursor-pointer d-block text-center px-5 py-4 hover-btns",
                                  elevation: "10",
                                  onClick: toggle
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_avatar, {
                                      class: theme2.bg,
                                      size: "25"
                                    }, {
                                      default: withCtx(() => [
                                        isSelected ? (openBlock(), createBlock(unref(CheckIcon), {
                                          key: 0,
                                          color: "white",
                                          size: "18"
                                        })) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              _: 2
                            }, 1032, ["value"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(DarkthemeColors.value, (theme2) => {
                      return openBlock(), createBlock(_component_v_col, {
                        cols: "4",
                        key: theme2.name,
                        class: "pa-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_item, {
                            value: theme2.name
                          }, {
                            default: withCtx(({ isSelected, toggle }) => [
                              createVNode(_component_v_sheet, {
                                rounded: "xl",
                                class: "border cursor-pointer d-block text-center px-5 py-4 hover-btns",
                                elevation: "10",
                                onClick: toggle
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_avatar, {
                                    class: theme2.bg,
                                    size: "25"
                                  }, {
                                    default: withCtx(() => [
                                      isSelected ? (openBlock(), createBlock(unref(CheckIcon), {
                                        key: 0,
                                        color: "white",
                                        size: "18"
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"])
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1032, ["value"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h6 class="text-h6 mt-11 mb-2"${_scopeId}>Container Option</h6>`);
            _push2(ssrRenderComponent(_component_v_btn_toggle, {
              modelValue: unref(customizer).boxed,
              "onUpdate:modelValue": ($event) => unref(customizer).boxed = $event,
              color: "primary",
              class: "my-2 btn-group-custom gap-3",
              rounded: "0",
              group: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, {
                    value: true,
                    variant: "text",
                    elevation: "10",
                    class: "rounded-xl"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          icon: "solar:cardholder-linear",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }, null, _parent4, _scopeId3));
                        _push4(` Boxed `);
                      } else {
                        return [
                          createVNode(unref(Icon), {
                            icon: "solar:cardholder-linear",
                            height: "22",
                            width: "22",
                            size: "22",
                            class: "mr-2 icon"
                          }),
                          createTextVNode(" Boxed ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    value: false,
                    variant: "text",
                    elevation: "10",
                    class: "rounded-xl"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          icon: "solar:scanner-linear",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }, null, _parent4, _scopeId3));
                        _push4(` Full `);
                      } else {
                        return [
                          createVNode(unref(Icon), {
                            icon: "solar:scanner-linear",
                            height: "22",
                            width: "22",
                            size: "22",
                            class: "mr-2 icon"
                          }),
                          createTextVNode(" Full ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      value: true,
                      variant: "text",
                      elevation: "10",
                      class: "rounded-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          icon: "solar:cardholder-linear",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }),
                        createTextVNode(" Boxed ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_btn, {
                      value: false,
                      variant: "text",
                      elevation: "10",
                      class: "rounded-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          icon: "solar:scanner-linear",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }),
                        createTextVNode(" Full ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(customizer).setHorizontalLayout != true) {
              _push2(ssrRenderComponent(_component_v_sheet, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h6 class="text-h6 mt-11 mb-2"${_scopeId2}>Sidebar Type</h6>`);
                    _push3(ssrRenderComponent(_component_v_btn_toggle, {
                      modelValue: unref(customizer).mini_sidebar,
                      "onUpdate:modelValue": ($event) => unref(customizer).mini_sidebar = $event,
                      color: "primary",
                      class: "my-2 btn-group-custom gap-3",
                      rounded: "0",
                      group: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_btn, {
                            value: false,
                            variant: "text",
                            elevation: "10",
                            class: "rounded-xl"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(Icon), {
                                  icon: "solar:sidebar-minimalistic-outline",
                                  height: "22",
                                  width: "22",
                                  size: "22",
                                  class: "mr-2 icon"
                                }, null, _parent5, _scopeId4));
                                _push5(` Full `);
                              } else {
                                return [
                                  createVNode(unref(Icon), {
                                    icon: "solar:sidebar-minimalistic-outline",
                                    height: "22",
                                    width: "22",
                                    size: "22",
                                    class: "mr-2 icon"
                                  }),
                                  createTextVNode(" Full ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_btn, {
                            value: true,
                            variant: "text",
                            elevation: "10",
                            class: "rounded-xl"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(Icon), {
                                  icon: "solar:siderbar-outline",
                                  height: "22",
                                  width: "22",
                                  size: "22",
                                  class: "mr-2 icon"
                                }, null, _parent5, _scopeId4));
                                _push5(` Collapse `);
                              } else {
                                return [
                                  createVNode(unref(Icon), {
                                    icon: "solar:siderbar-outline",
                                    height: "22",
                                    width: "22",
                                    size: "22",
                                    class: "mr-2 icon"
                                  }),
                                  createTextVNode(" Collapse ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_btn, {
                              value: false,
                              variant: "text",
                              elevation: "10",
                              class: "rounded-xl"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Icon), {
                                  icon: "solar:sidebar-minimalistic-outline",
                                  height: "22",
                                  width: "22",
                                  size: "22",
                                  class: "mr-2 icon"
                                }),
                                createTextVNode(" Full ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              value: true,
                              variant: "text",
                              elevation: "10",
                              class: "rounded-xl"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Icon), {
                                  icon: "solar:siderbar-outline",
                                  height: "22",
                                  width: "22",
                                  size: "22",
                                  class: "mr-2 icon"
                                }),
                                createTextVNode(" Collapse ")
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
                      createVNode("h6", { class: "text-h6 mt-11 mb-2" }, "Sidebar Type"),
                      createVNode(_component_v_btn_toggle, {
                        modelValue: unref(customizer).mini_sidebar,
                        "onUpdate:modelValue": ($event) => unref(customizer).mini_sidebar = $event,
                        color: "primary",
                        class: "my-2 btn-group-custom gap-3",
                        rounded: "0",
                        group: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
                            value: false,
                            variant: "text",
                            elevation: "10",
                            class: "rounded-xl"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "solar:sidebar-minimalistic-outline",
                                height: "22",
                                width: "22",
                                size: "22",
                                class: "mr-2 icon"
                              }),
                              createTextVNode(" Full ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_btn, {
                            value: true,
                            variant: "text",
                            elevation: "10",
                            class: "rounded-xl"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "solar:siderbar-outline",
                                height: "22",
                                width: "22",
                                size: "22",
                                class: "mr-2 icon"
                              }),
                              createTextVNode(" Collapse ")
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
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h6 class="text-h6 mt-11 mb-2"${_scopeId}>Card with</h6>`);
            _push2(ssrRenderComponent(_component_v_btn_toggle, {
              modelValue: unref(customizer).setBorderCard,
              "onUpdate:modelValue": ($event) => unref(customizer).setBorderCard = $event,
              color: "primary",
              class: "my-2 btn-group-custom gap-3",
              rounded: "0",
              group: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, {
                    value: false,
                    variant: "text",
                    elevation: "10",
                    class: "rounded-xl"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          icon: "solar:library-broken",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }, null, _parent4, _scopeId3));
                        _push4(` Shadow `);
                      } else {
                        return [
                          createVNode(unref(Icon), {
                            icon: "solar:library-broken",
                            height: "22",
                            width: "22",
                            size: "22",
                            class: "mr-2 icon"
                          }),
                          createTextVNode(" Shadow ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    value: true,
                    variant: "text",
                    elevation: "10",
                    class: "rounded-xl"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          icon: "solar:box-outline",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }, null, _parent4, _scopeId3));
                        _push4(` Border `);
                      } else {
                        return [
                          createVNode(unref(Icon), {
                            icon: "solar:box-outline",
                            height: "22",
                            width: "22",
                            size: "22",
                            class: "mr-2 icon"
                          }),
                          createTextVNode(" Border ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      value: false,
                      variant: "text",
                      elevation: "10",
                      class: "rounded-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          icon: "solar:library-broken",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }),
                        createTextVNode(" Shadow ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_btn, {
                      value: true,
                      variant: "text",
                      elevation: "10",
                      class: "rounded-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          icon: "solar:box-outline",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }),
                        createTextVNode(" Border ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "pa-6" }, [
                createVNode("h6", { class: "text-h6 mb-2" }, "Sidebar Layout"),
                createVNode(_component_v_btn_toggle, {
                  modelValue: unref(customizer).setHorizontalLayout,
                  "onUpdate:modelValue": ($event) => unref(customizer).setHorizontalLayout = $event,
                  color: "primary",
                  class: "my-2 btn-group-custom gap-3",
                  rounded: "0",
                  group: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_btn, {
                      value: false,
                      variant: "text",
                      elevation: "10",
                      class: "rounded-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          icon: "solar:slider-vertical-minimalistic-linear",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }),
                        createTextVNode(" Vertical ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_btn, {
                      value: true,
                      variant: "text",
                      elevation: "10",
                      class: "rounded-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          icon: "solar:slider-minimalistic-horizontal-outline",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }),
                        createTextVNode(" Horizontal ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("h6", { class: "text-h6 mt-8 mb-5" }, "Theme Direction"),
                createVNode(_component_v_btn_toggle, {
                  modelValue: unref(customizer).setRTLLayout,
                  "onUpdate:modelValue": ($event) => unref(customizer).setRTLLayout = $event,
                  color: "primary",
                  class: "my-2 btn-group-custom gap-3",
                  rounded: "0",
                  group: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_btn, {
                      value: false,
                      variant: "text",
                      elevation: "10",
                      class: "rounded-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          icon: "solar:align-left-linear",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }),
                        createTextVNode(" LTR ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_btn, {
                      value: true,
                      variant: "text",
                      elevation: "10",
                      class: "rounded-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          icon: "solar:align-right-linear",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }),
                        createTextVNode(" RTL ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("h6", { class: "text-h6 mt-8 mb-5" }, "Theme Color"),
                createVNode(_component_v_item_group, {
                  mandatory: "",
                  modelValue: unref(customizer).actTheme,
                  "onUpdate:modelValue": ($event) => unref(customizer).actTheme = $event,
                  class: "ml-n2 v-row"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(themeColors.value, (theme2) => {
                      return openBlock(), createBlock(_component_v_col, {
                        cols: "4",
                        key: theme2.name,
                        class: "pa-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_item, {
                            value: theme2.name
                          }, {
                            default: withCtx(({ isSelected, toggle }) => [
                              createVNode(_component_v_sheet, {
                                rounded: "xl",
                                class: "border cursor-pointer d-block text-center px-5 py-4 hover-btns",
                                elevation: "10",
                                onClick: toggle
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_avatar, {
                                    class: theme2.bg,
                                    size: "25"
                                  }, {
                                    default: withCtx(() => [
                                      isSelected ? (openBlock(), createBlock(unref(CheckIcon), {
                                        key: 0,
                                        color: "white",
                                        size: "18"
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"])
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1032, ["value"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("h6", { class: "text-h6 mt-11 mb-5" }, "Theme Dark Color"),
                createVNode(_component_v_item_group, {
                  mandatory: "",
                  modelValue: unref(customizer).actTheme,
                  "onUpdate:modelValue": ($event) => unref(customizer).actTheme = $event,
                  class: "ml-n2 v-row"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(DarkthemeColors.value, (theme2) => {
                      return openBlock(), createBlock(_component_v_col, {
                        cols: "4",
                        key: theme2.name,
                        class: "pa-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_item, {
                            value: theme2.name
                          }, {
                            default: withCtx(({ isSelected, toggle }) => [
                              createVNode(_component_v_sheet, {
                                rounded: "xl",
                                class: "border cursor-pointer d-block text-center px-5 py-4 hover-btns",
                                elevation: "10",
                                onClick: toggle
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_avatar, {
                                    class: theme2.bg,
                                    size: "25"
                                  }, {
                                    default: withCtx(() => [
                                      isSelected ? (openBlock(), createBlock(unref(CheckIcon), {
                                        key: 0,
                                        color: "white",
                                        size: "18"
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"])
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1032, ["value"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("h6", { class: "text-h6 mt-11 mb-2" }, "Container Option"),
                createVNode(_component_v_btn_toggle, {
                  modelValue: unref(customizer).boxed,
                  "onUpdate:modelValue": ($event) => unref(customizer).boxed = $event,
                  color: "primary",
                  class: "my-2 btn-group-custom gap-3",
                  rounded: "0",
                  group: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_btn, {
                      value: true,
                      variant: "text",
                      elevation: "10",
                      class: "rounded-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          icon: "solar:cardholder-linear",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }),
                        createTextVNode(" Boxed ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_btn, {
                      value: false,
                      variant: "text",
                      elevation: "10",
                      class: "rounded-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          icon: "solar:scanner-linear",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }),
                        createTextVNode(" Full ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                unref(customizer).setHorizontalLayout != true ? (openBlock(), createBlock(_component_v_sheet, { key: 0 }, {
                  default: withCtx(() => [
                    createVNode("h6", { class: "text-h6 mt-11 mb-2" }, "Sidebar Type"),
                    createVNode(_component_v_btn_toggle, {
                      modelValue: unref(customizer).mini_sidebar,
                      "onUpdate:modelValue": ($event) => unref(customizer).mini_sidebar = $event,
                      color: "primary",
                      class: "my-2 btn-group-custom gap-3",
                      rounded: "0",
                      group: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          value: false,
                          variant: "text",
                          elevation: "10",
                          class: "rounded-xl"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Icon), {
                              icon: "solar:sidebar-minimalistic-outline",
                              height: "22",
                              width: "22",
                              size: "22",
                              class: "mr-2 icon"
                            }),
                            createTextVNode(" Full ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_btn, {
                          value: true,
                          variant: "text",
                          elevation: "10",
                          class: "rounded-xl"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Icon), {
                              icon: "solar:siderbar-outline",
                              height: "22",
                              width: "22",
                              size: "22",
                              class: "mr-2 icon"
                            }),
                            createTextVNode(" Collapse ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode("h6", { class: "text-h6 mt-11 mb-2" }, "Card with"),
                createVNode(_component_v_btn_toggle, {
                  modelValue: unref(customizer).setBorderCard,
                  "onUpdate:modelValue": ($event) => unref(customizer).setBorderCard = $event,
                  color: "primary",
                  class: "my-2 btn-group-custom gap-3",
                  rounded: "0",
                  group: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_btn, {
                      value: false,
                      variant: "text",
                      elevation: "10",
                      class: "rounded-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          icon: "solar:library-broken",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }),
                        createTextVNode(" Shadow ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_btn, {
                      value: true,
                      variant: "text",
                      elevation: "10",
                      class: "rounded-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          icon: "solar:box-outline",
                          height: "22",
                          width: "22",
                          size: "22",
                          class: "mr-2 icon"
                        }),
                        createTextVNode(" Border ")
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
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/customizer/Customizer.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = {
  __name: "index",
  __ssrInlineRender: true,
  props: { item: Object },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_list_subheader = resolveComponent("v-list-subheader");
      const _component_DotsIcon = resolveComponent("DotsIcon");
      _push(ssrRenderComponent(_component_v_list_subheader, mergeProps({ class: "smallCap text-capitalize text-subtitle-1 mt-7 d-flex align-items-center" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="mini-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DotsIcon, {
              size: "16",
              "stroke-width": "1.5",
              class: "iconClass"
            }, null, _parent2, _scopeId));
            _push2(`</span><span class="mini-text font-weight-semibold pl-2 text-medium-emphasis text-uppercase text-body-2"${_scopeId}>${ssrInterpolate(_ctx.$t(props.item.header))}</span>`);
          } else {
            return [
              createVNode("span", { class: "mini-icon" }, [
                createVNode(_component_DotsIcon, {
                  size: "16",
                  "stroke-width": "1.5",
                  class: "iconClass"
                })
              ]),
              createVNode("span", { class: "mini-text font-weight-semibold pl-2 text-medium-emphasis text-uppercase text-body-2" }, toDisplayString(_ctx.$t(props.item.header)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/vertical-sidebar/NavGroup/index.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "index",
  __ssrInlineRender: true,
  props: { item: Object, level: Number },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_list_item_subtitle = resolveComponent("v-list-item-subtitle");
      const _component_v_chip = resolveComponent("v-chip");
      const _directive_scroll_to = resolveDirective("scroll-to");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-0" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_list_item, mergeProps({
        to: __props.item.to,
        rounded: "lg",
        class: "",
        color: "",
        ripple: false,
        disabled: __props.item.disabled,
        target: __props.item.type === "external" ? "_blank" : ""
      }, ssrGetDirectiveProps(_ctx, _directive_scroll_to, { el: "#top" })), createSlots({
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sublink-dot ml-4"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "sublink-dot ml-4" })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_list_item_title, { class: "ml-4 text-body-1 text-darkText" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t(__props.item.title))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t(__props.item.title)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.item.subCaption) {
              _push2(ssrRenderComponent(_component_v_list_item_subtitle, { class: "text-caption mt-n1 hide-menu" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.item.subCaption)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.item.subCaption), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_v_list_item_title, { class: "ml-4 text-body-1 text-darkText" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t(__props.item.title)), 1)
                ]),
                _: 1
              }),
              __props.item.subCaption ? (openBlock(), createBlock(_component_v_list_item_subtitle, {
                key: 0,
                class: "text-caption mt-n1 hide-menu"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.item.subCaption), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 2
      }, [
        __props.item.chip ? {
          name: "append",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_chip, {
                color: __props.item.chipColor,
                class: "sidebarchip hide-menu bg-" + __props.item.chipBgColor,
                size: __props.item.chipIcon ? "small" : "small",
                variant: __props.item.chipVariant,
                "prepend-icon": __props.item.chipIcon
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.item.chip)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.item.chip), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_chip, {
                  color: __props.item.chipColor,
                  class: "sidebarchip hide-menu bg-" + __props.item.chipBgColor,
                  size: __props.item.chipIcon ? "small" : "small",
                  variant: __props.item.chipVariant,
                  "prepend-icon": __props.item.chipIcon
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.item.chip), 1)
                  ]),
                  _: 1
                }, 8, ["color", "class", "size", "variant", "prepend-icon"])
              ];
            }
          }),
          key: "0"
        } : void 0
      ]), _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/vertical-sidebar/DropDown/index.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "index",
  __ssrInlineRender: true,
  props: { item: Object, level: Number },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_list_group = resolveComponent("v-list-group");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_list_item_subtitle = resolveComponent("v-list-item-subtitle");
      const _component_LcFullVerticalSidebarNavCollapse = _sfc_main$e;
      const _component_LcFullVerticalSidebarDropDown = _sfc_main$f;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-1" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_list_group, { "no-action": "" }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_list_item, mergeProps(props, {
              value: __props.item.title,
              ripple: false,
              class: " bg-hover-" + __props.item.BgColor,
              color: __props.item.BgColor
            }), {
              prepend: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="${ssrRenderClass("navbox  bg-hover-" + __props.item.BgColor)}"${ssrRenderAttr("color", __props.item.BgColor)}${_scopeId2}>`);
                  if (__props.level > 0) {
                    _push3(`<span class="icon-box"${_scopeId2}><div class="sublink-dot" width="30"${_scopeId2}></div></span>`);
                  } else {
                    _push3(`<span class="icon-box"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Icon), {
                      icon: "solar:" + __props.item.icon,
                      height: "24",
                      width: "24",
                      level: __props.level,
                      class: "position-relative z-index-2 texthover-" + __props.item.BgColor
                    }, null, _parent3, _scopeId2));
                    _push3(`</span>`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "navbox  bg-hover-" + __props.item.BgColor,
                      color: __props.item.BgColor
                    }, [
                      __props.level > 0 ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "icon-box"
                      }, [
                        createVNode("div", {
                          class: "sublink-dot",
                          width: "30"
                        })
                      ])) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: "icon-box"
                      }, [
                        createVNode(unref(Icon), {
                          icon: "solar:" + __props.item.icon,
                          height: "24",
                          width: "24",
                          level: __props.level,
                          class: "position-relative z-index-2 texthover-" + __props.item.BgColor
                        }, null, 8, ["icon", "level", "class"])
                      ]))
                    ], 10, ["color"])
                  ];
                }
              }),
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_list_item_title, { class: "text-subtitle-1 font-weight-medium" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t(__props.item.title))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t(__props.item.title)), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  if (__props.item.subCaption) {
                    _push3(ssrRenderComponent(_component_v_list_item_subtitle, { class: "text-caption mt-n1 hide-menu" }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(__props.item.subCaption)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(__props.item.subCaption), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_v_list_item_title, { class: "text-subtitle-1 font-weight-medium" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t(__props.item.title)), 1)
                      ]),
                      _: 1
                    }),
                    __props.item.subCaption ? (openBlock(), createBlock(_component_v_list_item_subtitle, {
                      key: 0,
                      class: "text-caption mt-n1 hide-menu"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.item.subCaption), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_list_item, mergeProps(props, {
                value: __props.item.title,
                ripple: false,
                class: " bg-hover-" + __props.item.BgColor,
                color: __props.item.BgColor
              }), {
                prepend: withCtx(() => [
                  createVNode("div", {
                    class: "navbox  bg-hover-" + __props.item.BgColor,
                    color: __props.item.BgColor
                  }, [
                    __props.level > 0 ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "icon-box"
                    }, [
                      createVNode("div", {
                        class: "sublink-dot",
                        width: "30"
                      })
                    ])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "icon-box"
                    }, [
                      createVNode(unref(Icon), {
                        icon: "solar:" + __props.item.icon,
                        height: "24",
                        width: "24",
                        level: __props.level,
                        class: "position-relative z-index-2 texthover-" + __props.item.BgColor
                      }, null, 8, ["icon", "level", "class"])
                    ]))
                  ], 10, ["color"])
                ]),
                default: withCtx(() => [
                  createVNode(_component_v_list_item_title, { class: "text-subtitle-1 font-weight-medium" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t(__props.item.title)), 1)
                    ]),
                    _: 1
                  }),
                  __props.item.subCaption ? (openBlock(), createBlock(_component_v_list_item_subtitle, {
                    key: 0,
                    class: "text-caption mt-n1 hide-menu"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.item.subCaption), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1040, ["value", "class", "color"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 sublinks"${_scopeId}>`);
            if (__props.item.children) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.item.children, (subitem, i) => {
                _push2(`<!--[-->`);
                if (subitem.children) {
                  _push2(ssrRenderComponent(_component_LcFullVerticalSidebarNavCollapse, {
                    item: subitem,
                    level: __props.level + 1
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_component_LcFullVerticalSidebarDropDown, {
                    item: subitem,
                    level: __props.level + 1
                  }, null, _parent2, _scopeId));
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 sublinks" }, [
                __props.item.children ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(__props.item.children, (subitem, i) => {
                  return openBlock(), createBlock(Fragment, { key: i }, [
                    subitem.children ? (openBlock(), createBlock(_component_LcFullVerticalSidebarNavCollapse, {
                      key: 0,
                      item: subitem,
                      level: __props.level + 1
                    }, null, 8, ["item", "level"])) : (openBlock(), createBlock(_component_LcFullVerticalSidebarDropDown, {
                      key: 1,
                      item: subitem,
                      level: __props.level + 1
                    }, null, 8, ["item", "level"]))
                  ], 64);
                }), 128)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/vertical-sidebar/NavCollapse/index.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "index",
  __ssrInlineRender: true,
  props: { item: Object, level: Number },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_list_item_subtitle = resolveComponent("v-list-item-subtitle");
      const _component_v_chip = resolveComponent("v-chip");
      const _directive_scroll_to = resolveDirective("scroll-to");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-1" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_list_item, mergeProps({
        to: __props.item.type === "external" ? "" : __props.item.to,
        href: __props.item.type === "external" ? __props.item.to : "",
        rounded: "",
        class: "  bg-hover-" + __props.item.BgColor,
        color: __props.item.BgColor,
        ripple: false,
        disabled: __props.item.disabled,
        target: __props.item.type === "external" ? "_blank" : ""
      }, ssrGetDirectiveProps(_ctx, _directive_scroll_to, { el: "#top" })), createSlots({
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass("navbox  bg-hover-" + __props.item.BgColor)}"${ssrRenderAttr("color", __props.item.BgColor)}${_scopeId}><span class="icon-box"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "solar:" + __props.item.icon,
              height: "24",
              width: "24",
              level: __props.level,
              class: "position-relative z-index-2 texthover-" + __props.item.BgColor
            }, null, _parent2, _scopeId));
            _push2(`</span></div>`);
          } else {
            return [
              createVNode("div", {
                class: "navbox  bg-hover-" + __props.item.BgColor,
                color: __props.item.BgColor
              }, [
                createVNode("span", { class: "icon-box" }, [
                  createVNode(unref(Icon), {
                    icon: "solar:" + __props.item.icon,
                    height: "24",
                    width: "24",
                    level: __props.level,
                    class: "position-relative z-index-2 texthover-" + __props.item.BgColor
                  }, null, 8, ["icon", "level", "class"])
                ])
              ], 10, ["color"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_list_item_title, {
              class: "text-subtitle-1 font-weight-medium",
              color: __props.item.BgColor
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t(__props.item.title))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t(__props.item.title)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.item.subCaption) {
              _push2(ssrRenderComponent(_component_v_list_item_subtitle, { class: "text-caption mt-n1 hide-menu" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.item.subCaption)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.item.subCaption), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_v_list_item_title, {
                class: "text-subtitle-1 font-weight-medium",
                color: __props.item.BgColor
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t(__props.item.title)), 1)
                ]),
                _: 1
              }, 8, ["color"]),
              __props.item.subCaption ? (openBlock(), createBlock(_component_v_list_item_subtitle, {
                key: 0,
                class: "text-caption mt-n1 hide-menu"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.item.subCaption), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 2
      }, [
        __props.item.chip ? {
          name: "append",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_chip, {
                color: __props.item.chipColor,
                class: "sidebarchip hide-menu",
                size: __props.item.chipIcon ? "x-small" : "x-small",
                variant: __props.item.chipVariant,
                "prepend-icon": __props.item.chipIcon
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.item.chip)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.item.chip), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_chip, {
                  color: __props.item.chipColor,
                  class: "sidebarchip hide-menu",
                  size: __props.item.chipIcon ? "x-small" : "x-small",
                  variant: __props.item.chipVariant,
                  "prepend-icon": __props.item.chipIcon
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.item.chip), 1)
                  ]),
                  _: 1
                }, 8, ["color", "size", "variant", "prepend-icon"])
              ];
            }
          }),
          key: "0"
        } : void 0
      ]), _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/vertical-sidebar/NavItem/index.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_sheet, mergeProps({
        rounded: "md",
        color: "lightprimary",
        class: "pa-4 ExtraBox hide-menu"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center justify-space-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_avatar, { size: "50" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} width="50" alt="Mike Nielsen"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      width: "50",
                      alt: "Mike Nielsen"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}><h6 class="text-h6 d-flex align-center font-weight-semibold"${_scopeId}>Mike Nielsen</h6><span class="text-subtitle-2 font-weight-medium text-grey100"${_scopeId}>Admin</span></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              icon: "",
              class: "bg-lightprimary",
              flat: "",
              size: "small"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Icon), {
                    icon: "solar:logout-linear",
                    class: "text-primary",
                    "stroke-width": "3",
                    height: "24",
                    width: "24"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Icon), {
                      icon: "solar:logout-linear",
                      class: "text-primary",
                      "stroke-width": "3",
                      height: "24",
                      width: "24"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                createVNode(_component_v_avatar, { size: "50" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_0,
                      width: "50",
                      alt: "Mike Nielsen"
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode("h6", { class: "text-h6 d-flex align-center font-weight-semibold" }, "Mike Nielsen"),
                  createVNode("span", { class: "text-subtitle-2 font-weight-medium text-grey100" }, "Admin")
                ]),
                createVNode("div", null, [
                  createVNode(_component_v_btn, {
                    icon: "",
                    class: "bg-lightprimary",
                    flat: "",
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Icon), {
                        icon: "solar:logout-linear",
                        class: "text-primary",
                        "stroke-width": "3",
                        height: "24",
                        width: "24"
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/vertical-sidebar/extrabox/index.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const sidebarItem = [
  { header: "Home" },
  {
    title: "Dashboard",
    icon: "screencast-2-linear",
    BgColor: "primary",
    to: "/dashboards/dashboard1"
  },
  {
    title: "Dashboard 2",
    icon: "chart-line-duotone",
    BgColor: "success",
    to: "/dashboards/dashboard2"
  },
  {
    title: "Front Pages",
    icon: "home-angle-linear",
    to: "/",
    children: [
      {
        title: "Homepage",
        to: "/front-pages/homepage"
      },
      {
        title: "About Us",
        to: "/front-pages/about-us"
      },
      {
        title: "Blog",
        to: "/front-pages/blog/posts"
      },
      {
        title: "Blog Details",
        to: "/front-pages/blog/early-black-friday-amazon-deals-cheap-tvs-headphones"
      },
      {
        title: "Contact Us",
        to: "/front-pages/contact-us"
      },
      {
        title: "Portfolio",
        to: "/front-pages/portfolio"
      },
      {
        title: "Pricing",
        to: "/front-pages/pricing"
      }
    ]
  },
  { header: "Apps" },
  {
    title: "Contact",
    icon: "phone-line-duotone",
    BgColor: "secondary",
    to: "/apps/contacts"
  },
  {
    title: "Blog",
    icon: "align-vertical-spacing-line-duotone",
    BgColor: "warning",
    to: "/",
    children: [
      {
        title: "Posts",
        to: "/apps/blog/posts"
      },
      {
        title: "Detail",
        to: "/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones"
      }
    ]
  },
  {
    title: "E-Commerce",
    icon: "smart-speaker-minimalistic-line-duotone",
    to: "/ecommerce/",
    BgColor: "success",
    children: [
      {
        title: "Shop One",
        to: "/apps/ecommerce/productsone"
      },
      {
        title: "Shop Two",
        to: "/apps/ecommerce/productstwo"
      },
      {
        title: "Details One",
        to: "/apps/ecommerce/product/one/detail/1"
      },
      {
        title: "Details Two",
        to: "/apps/ecommerce/producttwo/two/detail/1"
      },
      {
        title: "List",
        to: "/apps/ecommerce/productlist"
      },
      {
        title: "Checkout",
        to: "/apps/ecommerce/checkout"
      },
      {
        title: "Add Product",
        to: "/apps/ecommerce/addproduct"
      },
      {
        title: "Edit Product",
        to: "/apps/ecommerce/editproduct"
      }
    ]
  },
  {
    title: "Chats",
    icon: "chat-round-unread-line-duotone",
    BgColor: "primary",
    to: "/apps/chats"
  },
  {
    title: "User Profile",
    icon: "user-rounded-line-duotone",
    BgColor: "error",
    to: "/",
    children: [
      {
        title: "Profile One",
        to: "/apps/userprofile/one"
      },
      {
        title: "Profile Two",
        to: "/apps/userprofile/two"
      }
    ]
  },
  {
    title: "Invoice",
    icon: "bill-check-outline",
    BgColor: "success",
    to: "/",
    children: [
      {
        title: "List",
        to: "/apps/invoice"
      },
      {
        title: "Details",
        to: "/apps/invoice/details/102"
      },
      {
        title: "Create",
        to: "/apps/invoice/create"
      },
      {
        title: "Edit",
        to: "/apps/invoice/edit/102"
      }
    ]
  },
  {
    title: "Notes",
    icon: "notification-unread-line-duotone",
    BgColor: "secondary",
    to: "/apps/notes"
  },
  {
    title: "Calendar",
    icon: "calendar-line-duotone",
    BgColor: "info",
    to: "/apps/calendar"
  },
  {
    title: "Email",
    BgColor: "error",
    icon: "letter-linear",
    to: "/apps/email"
  },
  {
    title: "Kanban",
    icon: "widget-4-linear",
    BgColor: "warning",
    to: "/apps/kanban"
  },
  {
    title: "Tickets",
    icon: "ticker-star-outline",
    BgColor: "primary",
    to: "/apps/tickets"
  },
  { header: "Pages" },
  {
    title: "Pricing",
    icon: "tag-price-line-duotone",
    BgColor: "warning",
    to: "/theme-pages/pricing"
  },
  {
    title: "FAQ",
    icon: "question-circle-line-duotone",
    BgColor: "error",
    to: "/theme-pages/faq"
  },
  {
    title: "Account Setting",
    icon: "settings-minimalistic-line-duotone",
    BgColor: "success",
    to: "/theme-pages/account-settings"
  },
  {
    title: "Landing Page",
    icon: "layers-minimalistic-line-duotone",
    BgColor: "info",
    to: "/"
  },
  {
    title: "Gallery Lightbox",
    icon: "gallery-minimalistic-outline",
    BgColor: "warning",
    to: "/theme-pages/gallery-lightbox"
  },
  {
    title: "Search Results",
    icon: "calendar-search-line-duotone",
    BgColor: "success",
    to: "/theme-pages/search-results"
  },
  {
    title: "Social Contacts",
    icon: "socket-outline",
    BgColor: "primary",
    to: "/theme-pages/social-media"
  },
  {
    title: "Treeview",
    icon: "transmission-line-duotone",
    BgColor: "error",
    to: "/theme-pages/treeview"
  },
  {
    title: "Widget",
    icon: "widget-add-line-duotone",
    to: "/widget-card",
    BgColor: "primary",
    children: [
      {
        title: "Cards",
        to: "/widgets/cards"
      },
      {
        title: "Banners",
        to: "/widgets/banners"
      },
      {
        title: "Charts",
        to: "/widgets/charts"
      }
    ]
  },
  { header: "School Pages" },
  {
    title: "Teachers",
    icon: "square-academic-cap-linear",
    to: "",
    BgColor: "success",
    children: [
      {
        title: "All Teachers",
        to: "/school-pages/teachers"
      },
      {
        title: "Teachers Details",
        to: "/school-pages/teachers/details"
      }
    ]
  },
  {
    title: "Exam",
    icon: "notebook-minimalistic-outline",
    to: "",
    BgColor: "warning",
    children: [
      {
        title: "Exam Schedule",
        to: "/school-pages/exam/schedule"
      },
      {
        title: "Exam Result",
        to: "/school-pages/exam/result"
      },
      {
        title: "Exam Result Details",
        to: "/school-pages/exam/result-details"
      }
    ]
  },
  {
    title: "Students",
    icon: "case-broken",
    to: "",
    BgColor: "error",
    children: [
      {
        title: "All Students",
        to: "/school-pages/students"
      },
      {
        title: "Students Details",
        to: "/school-pages/students/details"
      }
    ]
  },
  {
    title: "Classes",
    icon: "smart-home-broken",
    BgColor: "indigo",
    to: "/school-pages/classes"
  },
  {
    title: "Attendance",
    icon: "diploma-linear",
    BgColor: "info",
    to: "/school-pages/attendance"
  },
  { header: "UI" },
  {
    title: "Ui Elements",
    icon: "code-scan-line-duotone",
    BgColor: "primary",
    to: "/components/",
    children: [
      {
        title: "Alert",
        to: "/ui-components/alert"
      },
      {
        title: "Accordion",
        to: "/ui-components/accordion"
      },
      {
        title: "Avatar",
        to: "/ui-components/avatar"
      },
      {
        title: "Chip",
        to: "/ui-components/chip"
      },
      {
        title: "Dialog",
        to: "/ui-components/dialogs"
      },
      {
        title: "List",
        to: "/ui-components/list"
      },
      {
        title: "Menus",
        to: "/ui-components/menus"
      },
      {
        title: "Rating",
        to: "/ui-components/rating"
      },
      {
        title: "Tabs",
        to: "/ui-components/tabs"
      },
      {
        title: "Tooltip",
        to: "/ui-components/tooltip"
      },
      {
        title: "Typography",
        to: "/ui-components/typography"
      }
    ]
  },
  { header: "Forms" },
  {
    title: "Form Elements",
    icon: "widget-3-line-duotone",
    BgColor: "secondary",
    to: "/components/",
    children: [
      {
        title: "Autocomplete",
        to: "/forms/form-elements/autocomplete"
      },
      {
        title: "Combobox",
        to: "/forms/form-elements/combobox"
      },
      {
        title: "Button",
        to: "/forms/form-elements/button"
      },
      {
        title: "Checkbox",
        to: "/forms/form-elements/checkbox"
      },
      {
        title: "Custom Inputs",
        to: "/forms/form-elements/custominputs"
      },
      {
        title: "File Inputs",
        to: "/forms/form-elements/fileinputs"
      },
      {
        title: "Radio",
        to: "/forms/form-elements/radio"
      },
      {
        title: "Date Time",
        to: "/forms/form-elements/date-time"
      },
      {
        title: "Select",
        to: "/forms/form-elements/select"
      },
      {
        title: "Slider",
        to: "/forms/form-elements/slider"
      },
      {
        title: "Switch",
        to: "/forms/form-elements/switch"
      },
      {
        title: "Time Picker",
        to: "/forms/form-elements/timepicker"
      },
      {
        title: "Stepper",
        to: "/forms/form-elements/stepper"
      }
    ]
  },
  {
    title: "Form Input",
    icon: "book-minimalistic-outline",
    BgColor: "success",
    to: "/forms/",
    children: [
      {
        title: "Form Layout",
        to: "/forms/form-layouts"
      },
      {
        title: "Form Horizontal",
        to: "/forms/form-horizontal"
      },
      {
        title: "Form Vertical",
        to: "/forms/form-vertical"
      },
      {
        title: "Form Custom",
        to: "/forms/form-custom"
      },
      {
        title: "Form Validation",
        to: "/forms/form-validation"
      }
    ]
  },
  {
    title: "Editor",
    icon: "gallery-edit-line-duotone",
    BgColor: "warning",
    to: "/forms/editor"
  },
  { header: "Tables" },
  {
    title: "Basic Table",
    icon: "tablet-line-duotone",
    BgColor: "info",
    to: "/tables/basic"
  },
  {
    title: "Dark Table",
    icon: "bedside-table-2-linear",
    BgColor: "success",
    to: "/tables/dark"
  },
  {
    title: "Density Table",
    icon: "password-minimalistic-input-linear",
    BgColor: "error",
    to: "/tables/density"
  },
  {
    title: "Fixed Header Table",
    icon: "align-left-line-duotone",
    BgColor: "indigo",
    to: "/tables/fixed-header"
  },
  {
    title: "Height Table",
    icon: "bookmark-square-minimalistic-outline",
    BgColor: "warning",
    to: "/tables/height"
  },
  {
    title: "Editable Table",
    icon: "pen-new-square-broken",
    BgColor: "success",
    to: "/tables/editable"
  },
  { header: "Data Tables" },
  {
    title: "Basic Table",
    icon: "database-outline",
    BgColor: "primary",
    to: "/datatables/basic"
  },
  {
    title: "Header Table",
    icon: "clapperboard-text-broken",
    BgColor: "secondary",
    to: "/datatables/headers"
  },
  {
    title: "Selection Table",
    icon: "documents-minimalistic-linear",
    BgColor: "success",
    to: "/datatables/selection"
  },
  {
    title: "Sorting Table",
    icon: "sort-from-bottom-to-top-linear",
    BgColor: "error",
    to: "/datatables/sorting"
  },
  {
    title: "Pagination Table",
    icon: "programming-linear",
    BgColor: "warning",
    to: "/datatables/pagination"
  },
  {
    title: "Filtering Table",
    icon: "filter-outline",
    BgColor: "indigo",
    to: "/datatables/filtering"
  },
  {
    title: "Grouping Table",
    icon: "users-group-rounded-line-duotone",
    BgColor: "info",
    to: "/datatables/grouping"
  },
  {
    title: "Table Slots",
    icon: "server-line-duotone",
    BgColor: "error",
    to: "/datatables/slots"
  },
  {
    title: "CRUD Table",
    icon: "medal-star-square-outline",
    BgColor: "success",
    to: "/datatables/crudtable"
  },
  { header: "Charts" },
  {
    title: "Apex Charts",
    icon: "pie-chart-2-linear",
    BgColor: "primary",
    to: "/charts/",
    children: [
      {
        title: "Line",
        to: "/charts/line-chart"
      },
      {
        title: "Gredient",
        to: "/charts/gredient-chart"
      },
      {
        title: "Area",
        to: "/charts/area-chart"
      },
      {
        title: "Candlestick",
        to: "/charts/candlestick-chart"
      },
      {
        title: "Column",
        to: "/charts/column-chart"
      },
      {
        title: "Doughnut & Pie",
        to: "/charts/doughnut-pie-chart"
      },
      {
        title: "Radialbar & Radar",
        to: "/charts/radialbar-chart"
      }
    ]
  },
  { header: "Authentication" },
  {
    title: "Login",
    icon: "login-2-line-duotone",
    BgColor: "warning",
    to: "#",
    children: [
      {
        title: "Side Login",
        to: "/auth/login"
      },
      {
        title: "Boxed Login",
        to: "/auth/login2"
      }
    ]
  },
  {
    title: "Register",
    icon: "user-plus-line-duotone",
    BgColor: "error",
    to: "#",
    children: [
      {
        title: "Side Register",
        to: "/auth/register2"
      },
      {
        title: "Boxed Register",
        to: "/auth/register"
      }
    ]
  },
  {
    title: "Forgot Password",
    icon: "forbidden-line-duotone",
    BgColor: "indigo",
    to: "#",
    children: [
      {
        title: "Side Forgot Password",
        to: "/auth/forgot-password"
      },
      {
        title: "Boxed Forgot Password",
        to: "/auth/forgot-password2"
      }
    ]
  },
  {
    title: "Two Steps",
    icon: "users-group-two-rounded-line-duotone",
    BgColor: "info",
    to: "#",
    children: [
      {
        title: "Side Two Steps",
        to: "/auth/two-step"
      },
      {
        title: "Boxed Two Steps",
        to: "/auth/two-step2"
      }
    ]
  },
  {
    title: "Error",
    icon: "bug-line-duotone",
    BgColor: "error",
    to: "/auth/404"
  },
  {
    title: "Maintenance",
    icon: "settings-line-duotone",
    BgColor: "primary",
    to: "/auth/maintenance"
  },
  { header: "Icons" },
  {
    title: "Tabler",
    BgColor: "success",
    icon: "sticker-smile-circle-2-line-duotone",
    to: "/icons/tabler"
  },
  {
    title: "Solar",
    BgColor: "indigo",
    icon: "sticker-smile-circle-2-line-duotone",
    to: "/icons/solar"
  },
  { header: "Others" },
  {
    title: "Menu Level",
    icon: "double-alt-arrow-down-bold-duotone",
    BgColor: "secondary",
    to: "#",
    children: [
      {
        title: "Level 1",
        to: "/auth/404"
      },
      {
        title: "Level 1",
        to: "/auth/404",
        children: [
          {
            title: "Level 2",
            to: "/auth/404"
          },
          {
            title: "Level 2",
            to: "/auth/404",
            children: [
              {
                title: "Level 3",
                to: "/auth/404"
              },
              {
                title: "Level 3",
                to: "/auth/404"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Disabled",
    icon: "forbidden-circle-line-duotone",
    BgColor: "success",
    disabled: true,
    to: "/auth/404"
  },
  {
    title: "Sub Caption",
    BgColor: "warning",
    icon: "square-academic-cap-line-duotone",
    subCaption: "This is the subtitle",
    to: "/auth/404"
  },
  {
    title: "Chip",
    icon: "archive-check-line-duotone",
    chip: "9",
    BgColor: "error",
    chipColor: "error",
    chipBgColor: "error",
    chipVariant: "flat",
    to: "/auth/404"
  },
  {
    title: "Outlined",
    icon: "smile-circle-line-duotone",
    chip: "outline",
    chipColor: "indigo",
    chipVariant: "outlined",
    BgColor: "indigo",
    to: "/auth/404"
  },
  {
    title: "External Link",
    icon: "link-bold-duotone",
    BgColor: "info",
    to: "/auth/404",
    type: "external"
  }
];
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const customizer = useCustomizerStore();
    const sidebarMenu = shallowRef(sidebarItem);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      const _component_LcFullLogo = _sfc_main$i;
      const _component_perfect_scrollbar = resolveComponent("perfect-scrollbar");
      const _component_v_list = resolveComponent("v-list");
      const _component_LcFullVerticalSidebarNavGroup = _sfc_main$g;
      const _component_LcFullVerticalSidebarNavCollapse = _sfc_main$e;
      const _component_LcFullVerticalSidebarNavItem = _sfc_main$d;
      const _component_LcFullVerticalSidebarExtrabox = _sfc_main$c;
      _push(ssrRenderComponent(_component_v_navigation_drawer, mergeProps({
        left: "",
        modelValue: unref(customizer).Sidebar_drawer,
        "onUpdate:modelValue": ($event) => unref(customizer).Sidebar_drawer = $event,
        elevation: "10",
        "rail-width": "70",
        app: "",
        class: "leftSidebar ml-sm-5 mt-sm-5 bg-containerBg",
        rail: unref(customizer).mini_sidebar,
        "expand-on-hover": "",
        width: "270"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pa-5 pl-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LcFullLogo, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_perfect_scrollbar, { class: "scrollnavbar bg-containerBg overflow-y-hidden" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_list, { class: "py-4 px-4 bg-containerBg" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(sidebarMenu.value, (item, i) => {
                          _push4(`<!--[-->`);
                          if (item.header) {
                            _push4(ssrRenderComponent(_component_LcFullVerticalSidebarNavGroup, {
                              item,
                              key: item.title
                            }, null, _parent4, _scopeId3));
                          } else if (item.children) {
                            _push4(ssrRenderComponent(_component_LcFullVerticalSidebarNavCollapse, {
                              class: "leftPadding",
                              item,
                              level: 0
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(ssrRenderComponent(_component_LcFullVerticalSidebarNavItem, {
                              item,
                              class: "leftPadding"
                            }, null, _parent4, _scopeId3));
                          }
                          _push4(`<!--]-->`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(sidebarMenu.value, (item, i) => {
                            return openBlock(), createBlock(Fragment, null, [
                              item.header ? (openBlock(), createBlock(_component_LcFullVerticalSidebarNavGroup, {
                                item,
                                key: item.title
                              }, null, 8, ["item"])) : item.children ? (openBlock(), createBlock(_component_LcFullVerticalSidebarNavCollapse, {
                                key: 1,
                                class: "leftPadding",
                                item,
                                level: 0
                              }, null, 8, ["item"])) : (openBlock(), createBlock(_component_LcFullVerticalSidebarNavItem, {
                                key: 2,
                                item,
                                class: "leftPadding"
                              }, null, 8, ["item"]))
                            ], 64);
                          }), 256))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="pa-6 px-4 userbottom mt-10"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_LcFullVerticalSidebarExtrabox, null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_v_list, { class: "py-4 px-4 bg-containerBg" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(sidebarMenu.value, (item, i) => {
                          return openBlock(), createBlock(Fragment, null, [
                            item.header ? (openBlock(), createBlock(_component_LcFullVerticalSidebarNavGroup, {
                              item,
                              key: item.title
                            }, null, 8, ["item"])) : item.children ? (openBlock(), createBlock(_component_LcFullVerticalSidebarNavCollapse, {
                              key: 1,
                              class: "leftPadding",
                              item,
                              level: 0
                            }, null, 8, ["item"])) : (openBlock(), createBlock(_component_LcFullVerticalSidebarNavItem, {
                              key: 2,
                              item,
                              class: "leftPadding"
                            }, null, 8, ["item"]))
                          ], 64);
                        }), 256))
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "pa-6 px-4 userbottom mt-10" }, [
                      createVNode(_component_LcFullVerticalSidebarExtrabox)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "pa-5 pl-4" }, [
                createVNode(_component_LcFullLogo)
              ]),
              createVNode(_component_perfect_scrollbar, { class: "scrollnavbar bg-containerBg overflow-y-hidden" }, {
                default: withCtx(() => [
                  createVNode(_component_v_list, { class: "py-4 px-4 bg-containerBg" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(sidebarMenu.value, (item, i) => {
                        return openBlock(), createBlock(Fragment, null, [
                          item.header ? (openBlock(), createBlock(_component_LcFullVerticalSidebarNavGroup, {
                            item,
                            key: item.title
                          }, null, 8, ["item"])) : item.children ? (openBlock(), createBlock(_component_LcFullVerticalSidebarNavCollapse, {
                            key: 1,
                            class: "leftPadding",
                            item,
                            level: 0
                          }, null, 8, ["item"])) : (openBlock(), createBlock(_component_LcFullVerticalSidebarNavItem, {
                            key: 2,
                            item,
                            class: "leftPadding"
                          }, null, 8, ["item"]))
                        ], 64);
                      }), 256))
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "pa-6 px-4 userbottom mt-10" }, [
                    createVNode(_component_LcFullVerticalSidebarExtrabox)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/vertical-sidebar/index.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "Searchbar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_perfect_scrollbar = resolveComponent("perfect-scrollbar");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      _push(ssrRenderComponent(_component_v_menu, mergeProps({
        "close-on-content-click": false,
        class: "search_popup"
      }, _attrs), {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({ class: "" }, props))}${_scopeId}><div class="hidden-md-and-down"${_scopeId}><div class="d-flex align-center flex-fill border border-borderColor header-search rounded-pill px-5"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "solar:magnifer-linear",
              height: "22",
              width: "22"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_text_field, {
              variant: "plain",
              density: "compact",
              class: "position-relative pt-0 ml-3 custom-placeholer-color",
              placeholder: "Try to searching ...",
              "single-line": "",
              "hide-details": ""
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              icon: "",
              variant: "text",
              class: "custom-hover-primary ml-sm-3 search hidden-md-and-up",
              size: "small"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Icon), {
                    icon: "solar:magnifer-linear",
                    height: "22",
                    width: "22"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Icon), {
                      icon: "solar:magnifer-linear",
                      height: "22",
                      width: "22"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", mergeProps({ class: "" }, props), [
                createVNode("div", { class: "hidden-md-and-down" }, [
                  createVNode("div", { class: "d-flex align-center flex-fill border border-borderColor header-search rounded-pill px-5" }, [
                    createVNode(unref(Icon), {
                      icon: "solar:magnifer-linear",
                      height: "22",
                      width: "22"
                    }),
                    createVNode(_component_v_text_field, {
                      variant: "plain",
                      density: "compact",
                      class: "position-relative pt-0 ml-3 custom-placeholer-color",
                      placeholder: "Try to searching ...",
                      "single-line": "",
                      "hide-details": ""
                    })
                  ])
                ]),
                createVNode(_component_v_btn, {
                  icon: "",
                  variant: "text",
                  class: "custom-hover-primary ml-sm-3 search hidden-md-and-up",
                  size: "small"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Icon), {
                      icon: "solar:magnifer-linear",
                      height: "22",
                      width: "22"
                    })
                  ]),
                  _: 1
                })
              ], 16)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_sheet, {
              width: "360",
              elevation: "10",
              rounded: "md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5 mt-4 px-5 pb-4"${_scopeId2}>Quick Page Links</h5>`);
                  _push3(ssrRenderComponent(_component_perfect_scrollbar, { style: { "height": "380px" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list, {
                          class: "pt-0 pb-5",
                          lines: "two"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(searchSugg), (item, index) => {
                                _push5(ssrRenderComponent(_component_v_list_item, {
                                  value: item,
                                  key: index,
                                  to: item.href,
                                  color: "primary",
                                  class: "px-5 py-2"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<h6 class="text-subtitle-1 font-weight-medium mb-1"${_scopeId5}>${ssrInterpolate(item.title)}</h6><p class="text-subtitle-2 text-medium-emphasis"${_scopeId5}>${ssrInterpolate(item.href)}</p>`);
                                    } else {
                                      return [
                                        createVNode("h6", { class: "text-subtitle-1 font-weight-medium mb-1" }, toDisplayString(item.title), 1),
                                        createVNode("p", { class: "text-subtitle-2 text-medium-emphasis" }, toDisplayString(item.href), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(searchSugg), (item, index) => {
                                  return openBlock(), createBlock(_component_v_list_item, {
                                    value: item,
                                    key: index,
                                    to: item.href,
                                    color: "primary",
                                    class: "px-5 py-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("h6", { class: "text-subtitle-1 font-weight-medium mb-1" }, toDisplayString(item.title), 1),
                                      createVNode("p", { class: "text-subtitle-2 text-medium-emphasis" }, toDisplayString(item.href), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "to"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list, {
                            class: "pt-0 pb-5",
                            lines: "two"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(searchSugg), (item, index) => {
                                return openBlock(), createBlock(_component_v_list_item, {
                                  value: item,
                                  key: index,
                                  to: item.href,
                                  color: "primary",
                                  class: "px-5 py-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h6", { class: "text-subtitle-1 font-weight-medium mb-1" }, toDisplayString(item.title), 1),
                                    createVNode("p", { class: "text-subtitle-2 text-medium-emphasis" }, toDisplayString(item.href), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "to"]);
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
                    createVNode("h5", { class: "text-h5 mt-4 px-5 pb-4" }, "Quick Page Links"),
                    createVNode(_component_perfect_scrollbar, { style: { "height": "380px" } }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list, {
                          class: "pt-0 pb-5",
                          lines: "two"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(searchSugg), (item, index) => {
                              return openBlock(), createBlock(_component_v_list_item, {
                                value: item,
                                key: index,
                                to: item.href,
                                color: "primary",
                                class: "px-5 py-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h6", { class: "text-subtitle-1 font-weight-medium mb-1" }, toDisplayString(item.title), 1),
                                  createVNode("p", { class: "text-subtitle-2 text-medium-emphasis" }, toDisplayString(item.href), 1)
                                ]),
                                _: 2
                              }, 1032, ["value", "to"]);
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
              createVNode(_component_v_sheet, {
                width: "360",
                elevation: "10",
                rounded: "md"
              }, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h5 mt-4 px-5 pb-4" }, "Quick Page Links"),
                  createVNode(_component_perfect_scrollbar, { style: { "height": "380px" } }, {
                    default: withCtx(() => [
                      createVNode(_component_v_list, {
                        class: "pt-0 pb-5",
                        lines: "two"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(searchSugg), (item, index) => {
                            return openBlock(), createBlock(_component_v_list_item, {
                              value: item,
                              key: index,
                              to: item.href,
                              color: "primary",
                              class: "px-5 py-2"
                            }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-subtitle-1 font-weight-medium mb-1" }, toDisplayString(item.title), 1),
                                createVNode("p", { class: "text-subtitle-2 text-medium-emphasis" }, toDisplayString(item.href), 1)
                              ]),
                              _: 2
                            }, 1032, ["value", "to"]);
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
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/vertical-header/Searchbar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ThemeToggler",
  __ssrInlineRender: true,
  setup(__props) {
    useTheme();
    const customizer = useCustomizerStore();
    const themeColors = ref([
      {
        name: "BLUE_THEME",
        bg: "togglethemeBlue"
      },
      {
        name: "DARK_BLUE_THEME",
        bg: "togglethemeDarkBlue"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_item_group = resolveComponent("v-item-group");
      const _component_v_item = resolveComponent("v-item");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "position-relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_item_group, {
        mandatory: "",
        modelValue: unref(customizer).actTheme,
        "onUpdate:modelValue": ($event) => unref(customizer).actTheme = $event,
        class: "d-flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(themeColors.value, (theme2) => {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_item, {
                value: theme2.name
              }, {
                default: withCtx(({ toggle }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_btn, {
                      icon: "",
                      class: [theme2.bg, "custom-hover-primary"],
                      variant: "text",
                      size: "small",
                      onClick: toggle
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (theme2.bg == "togglethemeBlue") {
                            _push4(ssrRenderComponent(unref(Icon), {
                              icon: "solar:sun-outline",
                              height: "22",
                              width: "22",
                              class: theme2.bg
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (theme2.bg == "togglethemeDarkBlue") {
                            _push4(ssrRenderComponent(unref(Icon), {
                              icon: "solar:moon-outline",
                              height: "22",
                              width: "22",
                              class: theme2.bg
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            theme2.bg == "togglethemeBlue" ? (openBlock(), createBlock(unref(Icon), {
                              key: 0,
                              icon: "solar:sun-outline",
                              height: "22",
                              width: "22",
                              class: theme2.bg
                            }, null, 8, ["class"])) : createCommentVNode("", true),
                            theme2.bg == "togglethemeDarkBlue" ? (openBlock(), createBlock(unref(Icon), {
                              key: 1,
                              icon: "solar:moon-outline",
                              height: "22",
                              width: "22",
                              class: theme2.bg
                            }, null, 8, ["class"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_btn, {
                        icon: "",
                        class: [theme2.bg, "custom-hover-primary"],
                        variant: "text",
                        size: "small",
                        onClick: toggle
                      }, {
                        default: withCtx(() => [
                          theme2.bg == "togglethemeBlue" ? (openBlock(), createBlock(unref(Icon), {
                            key: 0,
                            icon: "solar:sun-outline",
                            height: "22",
                            width: "22",
                            class: theme2.bg
                          }, null, 8, ["class"])) : createCommentVNode("", true),
                          theme2.bg == "togglethemeDarkBlue" ? (openBlock(), createBlock(unref(Icon), {
                            key: 1,
                            icon: "solar:moon-outline",
                            height: "22",
                            width: "22",
                            class: theme2.bg
                          }, null, 8, ["class"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["class", "onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(themeColors.value, (theme2) => {
                return openBlock(), createBlock("div", {
                  key: theme2.name
                }, [
                  createVNode(_component_v_item, {
                    value: theme2.name
                  }, {
                    default: withCtx(({ toggle }) => [
                      createVNode(_component_v_btn, {
                        icon: "",
                        class: [theme2.bg, "custom-hover-primary"],
                        variant: "text",
                        size: "small",
                        onClick: toggle
                      }, {
                        default: withCtx(() => [
                          theme2.bg == "togglethemeBlue" ? (openBlock(), createBlock(unref(Icon), {
                            key: 0,
                            icon: "solar:sun-outline",
                            height: "22",
                            width: "22",
                            class: theme2.bg
                          }, null, 8, ["class"])) : createCommentVNode("", true),
                          theme2.bg == "togglethemeDarkBlue" ? (openBlock(), createBlock(unref(Icon), {
                            key: 1,
                            icon: "solar:moon-outline",
                            height: "22",
                            width: "22",
                            class: theme2.bg
                          }, null, 8, ["class"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["class", "onClick"])
                    ]),
                    _: 2
                  }, 1032, ["value"])
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/vertical-header/ThemeToggler.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "LanguageDD",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      _push(ssrRenderComponent(_component_v_menu, mergeProps({
        "close-on-content-click": false,
        location: "bottom",
        class: "language_dropdown"
      }, _attrs), {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, mergeProps({
              icon: "",
              class: "custom-hover-primary",
              size: "small"
            }, props), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_avatar, { size: "22" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (_ctx.$i18n.locale === "en") {
                          _push4(`<img${ssrRenderAttr("src", unref(flag1))}${ssrRenderAttr("alt", _ctx.$i18n.locale)} width="24" height="24" class="obj-cover"${_scopeId3}>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (_ctx.$i18n.locale === "fr") {
                          _push4(`<img${ssrRenderAttr("src", unref(flag4))}${ssrRenderAttr("alt", _ctx.$i18n.locale)} width="24" height="24" class="obj-cover"${_scopeId3}>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (_ctx.$i18n.locale === "ro") {
                          _push4(`<img${ssrRenderAttr("src", unref(flag2))}${ssrRenderAttr("alt", _ctx.$i18n.locale)} width="24" height="24" class="obj-cover"${_scopeId3}>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (_ctx.$i18n.locale === "zh") {
                          _push4(`<img${ssrRenderAttr("src", unref(flag3))}${ssrRenderAttr("alt", _ctx.$i18n.locale)} width="24" height="24" class="obj-cover"${_scopeId3}>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          _ctx.$i18n.locale === "en" ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: unref(flag1),
                            alt: _ctx.$i18n.locale,
                            width: "24",
                            height: "24",
                            class: "obj-cover"
                          }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                          _ctx.$i18n.locale === "fr" ? (openBlock(), createBlock("img", {
                            key: 1,
                            src: unref(flag4),
                            alt: _ctx.$i18n.locale,
                            width: "24",
                            height: "24",
                            class: "obj-cover"
                          }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                          _ctx.$i18n.locale === "ro" ? (openBlock(), createBlock("img", {
                            key: 2,
                            src: unref(flag2),
                            alt: _ctx.$i18n.locale,
                            width: "24",
                            height: "24",
                            class: "obj-cover"
                          }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                          _ctx.$i18n.locale === "zh" ? (openBlock(), createBlock("img", {
                            key: 3,
                            src: unref(flag3),
                            alt: _ctx.$i18n.locale,
                            width: "24",
                            height: "24",
                            class: "obj-cover"
                          }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_avatar, { size: "22" }, {
                      default: withCtx(() => [
                        _ctx.$i18n.locale === "en" ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: unref(flag1),
                          alt: _ctx.$i18n.locale,
                          width: "24",
                          height: "24",
                          class: "obj-cover"
                        }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                        _ctx.$i18n.locale === "fr" ? (openBlock(), createBlock("img", {
                          key: 1,
                          src: unref(flag4),
                          alt: _ctx.$i18n.locale,
                          width: "24",
                          height: "24",
                          class: "obj-cover"
                        }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                        _ctx.$i18n.locale === "ro" ? (openBlock(), createBlock("img", {
                          key: 2,
                          src: unref(flag2),
                          alt: _ctx.$i18n.locale,
                          width: "24",
                          height: "24",
                          class: "obj-cover"
                        }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                        _ctx.$i18n.locale === "zh" ? (openBlock(), createBlock("img", {
                          key: 3,
                          src: unref(flag3),
                          alt: _ctx.$i18n.locale,
                          width: "24",
                          height: "24",
                          class: "obj-cover"
                        }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, mergeProps({
                icon: "",
                class: "custom-hover-primary",
                size: "small"
              }, props), {
                default: withCtx(() => [
                  createVNode(_component_v_avatar, { size: "22" }, {
                    default: withCtx(() => [
                      _ctx.$i18n.locale === "en" ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: unref(flag1),
                        alt: _ctx.$i18n.locale,
                        width: "24",
                        height: "24",
                        class: "obj-cover"
                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                      _ctx.$i18n.locale === "fr" ? (openBlock(), createBlock("img", {
                        key: 1,
                        src: unref(flag4),
                        alt: _ctx.$i18n.locale,
                        width: "24",
                        height: "24",
                        class: "obj-cover"
                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                      _ctx.$i18n.locale === "ro" ? (openBlock(), createBlock("img", {
                        key: 2,
                        src: unref(flag2),
                        alt: _ctx.$i18n.locale,
                        width: "24",
                        height: "24",
                        class: "obj-cover"
                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                      _ctx.$i18n.locale === "zh" ? (openBlock(), createBlock("img", {
                        key: 3,
                        src: unref(flag3),
                        alt: _ctx.$i18n.locale,
                        width: "24",
                        height: "24",
                        class: "obj-cover"
                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_sheet, {
              rounded: "md",
              width: "200",
              elevation: "10"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_list, { class: "theme-list" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(languageDD), (item, index) => {
                          _push4(ssrRenderComponent(_component_v_list_item, {
                            key: index,
                            color: "primary",
                            active: _ctx.$i18n.locale == item.value,
                            class: "d-flex align-center",
                            onClick: () => _ctx.$i18n.locale = item.value
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_avatar, { size: "22" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<img${ssrRenderAttr("src", item.avatar)}${ssrRenderAttr("alt", item.avatar)} width="22" height="22" class="obj-cover"${_scopeId5}>`);
                                    } else {
                                      return [
                                        createVNode("img", {
                                          src: item.avatar,
                                          alt: item.avatar,
                                          width: "22",
                                          height: "22",
                                          class: "obj-cover"
                                        }, null, 8, ["src", "alt"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_avatar, { size: "22" }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: item.avatar,
                                        alt: item.avatar,
                                        width: "22",
                                        height: "22",
                                        class: "obj-cover"
                                      }, null, 8, ["src", "alt"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_list_item_title, { class: "text-subtitle-1 font-weight-regular" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.title)} <span class="text-disabled text-subtitle-1 pl-2"${_scopeId5}>(${ssrInterpolate(item.subtext)})</span>`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.title) + " ", 1),
                                        createVNode("span", { class: "text-disabled text-subtitle-1 pl-2" }, "(" + toDisplayString(item.subtext) + ")", 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_list_item_title, { class: "text-subtitle-1 font-weight-regular" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.title) + " ", 1),
                                      createVNode("span", { class: "text-disabled text-subtitle-1 pl-2" }, "(" + toDisplayString(item.subtext) + ")", 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(languageDD), (item, index) => {
                            return openBlock(), createBlock(_component_v_list_item, {
                              key: index,
                              color: "primary",
                              active: _ctx.$i18n.locale == item.value,
                              class: "d-flex align-center",
                              onClick: () => _ctx.$i18n.locale = item.value
                            }, {
                              prepend: withCtx(() => [
                                createVNode(_component_v_avatar, { size: "22" }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: item.avatar,
                                      alt: item.avatar,
                                      width: "22",
                                      height: "22",
                                      class: "obj-cover"
                                    }, null, 8, ["src", "alt"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_title, { class: "text-subtitle-1 font-weight-regular" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.title) + " ", 1),
                                    createVNode("span", { class: "text-disabled text-subtitle-1 pl-2" }, "(" + toDisplayString(item.subtext) + ")", 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["active", "onClick"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_list, { class: "theme-list" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(languageDD), (item, index) => {
                          return openBlock(), createBlock(_component_v_list_item, {
                            key: index,
                            color: "primary",
                            active: _ctx.$i18n.locale == item.value,
                            class: "d-flex align-center",
                            onClick: () => _ctx.$i18n.locale = item.value
                          }, {
                            prepend: withCtx(() => [
                              createVNode(_component_v_avatar, { size: "22" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: item.avatar,
                                    alt: item.avatar,
                                    width: "22",
                                    height: "22",
                                    class: "obj-cover"
                                  }, null, 8, ["src", "alt"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, { class: "text-subtitle-1 font-weight-regular" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.title) + " ", 1),
                                  createVNode("span", { class: "text-disabled text-subtitle-1 pl-2" }, "(" + toDisplayString(item.subtext) + ")", 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["active", "onClick"]);
                        }), 128))
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
              createVNode(_component_v_sheet, {
                rounded: "md",
                width: "200",
                elevation: "10"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_list, { class: "theme-list" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(languageDD), (item, index) => {
                        return openBlock(), createBlock(_component_v_list_item, {
                          key: index,
                          color: "primary",
                          active: _ctx.$i18n.locale == item.value,
                          class: "d-flex align-center",
                          onClick: () => _ctx.$i18n.locale = item.value
                        }, {
                          prepend: withCtx(() => [
                            createVNode(_component_v_avatar, { size: "22" }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: item.avatar,
                                  alt: item.avatar,
                                  width: "22",
                                  height: "22",
                                  class: "obj-cover"
                                }, null, 8, ["src", "alt"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_list_item_title, { class: "text-subtitle-1 font-weight-regular" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title) + " ", 1),
                                createVNode("span", { class: "text-disabled text-subtitle-1 pl-2" }, "(" + toDisplayString(item.subtext) + ")", 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["active", "onClick"]);
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
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/vertical-header/LanguageDD.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "NotificationDD",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_perfect_scrollbar = resolveComponent("perfect-scrollbar");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_divider = resolveComponent("v-divider");
      _push(ssrRenderComponent(_component_v_menu, mergeProps({
        "close-on-content-click": false,
        class: "notification_popup"
      }, _attrs), {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, mergeProps({
              icon: "",
              flat: ""
            }, props, {
              size: "small",
              class: "custom-hover-primary"
            }), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="position-realtive"${_scopeId2}><div class="notify"${_scopeId2}><span class="heartbit"${_scopeId2}></span> <span class="point"${_scopeId2}></span></div>`);
                  _push3(ssrRenderComponent(unref(Icon), {
                    icon: "solar:bell-bing-line-duotone",
                    height: "24",
                    width: "24"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "position-realtive" }, [
                      createVNode("div", { class: "notify" }, [
                        createVNode("span", { class: "heartbit" }),
                        createTextVNode(),
                        createVNode("span", { class: "point" })
                      ]),
                      createVNode(unref(Icon), {
                        icon: "solar:bell-bing-line-duotone",
                        height: "24",
                        width: "24"
                      })
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, mergeProps({
                icon: "",
                flat: ""
              }, props, {
                size: "small",
                class: "custom-hover-primary"
              }), {
                default: withCtx(() => [
                  createVNode("div", { class: "position-realtive" }, [
                    createVNode("div", { class: "notify" }, [
                      createVNode("span", { class: "heartbit" }),
                      createTextVNode(),
                      createVNode("span", { class: "point" })
                    ]),
                    createVNode(unref(Icon), {
                      icon: "solar:bell-bing-line-duotone",
                      height: "24",
                      width: "24"
                    })
                  ])
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_sheet, {
              rounded: "lg",
              width: "385",
              elevation: "10",
              class: "mt-5 dropdown-box"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="px-8 pb-4 pt-6"${_scopeId2}><div class="d-flex align-center"${_scopeId2}><h6 class="text-h5 font-weight-semibold"${_scopeId2}>Notifications</h6>`);
                  _push3(ssrRenderComponent(_component_v_chip, {
                    color: "primary",
                    variant: "flat",
                    size: "x-small",
                    class: "text-white ml-4",
                    rounded: "xl"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`5 New`);
                      } else {
                        return [
                          createTextVNode("5 New")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_perfect_scrollbar, { style: { "height": "300px" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list, {
                          class: "py-0 theme-list",
                          lines: "two"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(notifications), (item) => {
                                _push5(ssrRenderComponent(_component_v_list_item, {
                                  key: item.title,
                                  value: item,
                                  color: "primary",
                                  class: "py-4 px-8"
                                }, {
                                  prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_avatar, { size: "48" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_img, {
                                              src: item.avatar,
                                              width: "48",
                                              alt: item.avatar
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_img, {
                                                src: item.avatar,
                                                width: "48",
                                                alt: item.avatar
                                              }, null, 8, ["src", "alt"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_avatar, { size: "48" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, {
                                              src: item.avatar,
                                              width: "48",
                                              alt: item.avatar
                                            }, null, 8, ["src", "alt"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div${_scopeId5}><h6 class="text-h6 font-weight-medium mb-1"${_scopeId5}>${ssrInterpolate(item.title)}</h6></div><p class="text-subtitle-1 font-weight-medium text-grey100"${_scopeId5}>${ssrInterpolate(item.subtitle)}</p>`);
                                    } else {
                                      return [
                                        createVNode("div", null, [
                                          createVNode("h6", { class: "text-h6 font-weight-medium mb-1" }, toDisplayString(item.title), 1)
                                        ]),
                                        createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, toDisplayString(item.subtitle), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                              _push5(ssrRenderComponent(_component_v_divider, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(notifications), (item) => {
                                  return openBlock(), createBlock(_component_v_list_item, {
                                    key: item.title,
                                    value: item,
                                    color: "primary",
                                    class: "py-4 px-8"
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_v_avatar, { size: "48" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, {
                                            src: item.avatar,
                                            width: "48",
                                            alt: item.avatar
                                          }, null, 8, ["src", "alt"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode("h6", { class: "text-h6 font-weight-medium mb-1" }, toDisplayString(item.title), 1)
                                      ]),
                                      createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, toDisplayString(item.subtitle), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128)),
                                createVNode(_component_v_divider)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list, {
                            class: "py-0 theme-list",
                            lines: "two"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(notifications), (item) => {
                                return openBlock(), createBlock(_component_v_list_item, {
                                  key: item.title,
                                  value: item,
                                  color: "primary",
                                  class: "py-4 px-8"
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(_component_v_avatar, { size: "48" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, {
                                          src: item.avatar,
                                          width: "48",
                                          alt: item.avatar
                                        }, null, 8, ["src", "alt"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("h6", { class: "text-h6 font-weight-medium mb-1" }, toDisplayString(item.title), 1)
                                    ]),
                                    createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, toDisplayString(item.subtitle), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128)),
                              createVNode(_component_v_divider)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="py-4 px-6 text-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "primary",
                    size: "large",
                    rounded: "pill",
                    block: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`See all Notifications`);
                      } else {
                        return [
                          createTextVNode("See all Notifications")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "px-8 pb-4 pt-6" }, [
                      createVNode("div", { class: "d-flex align-center" }, [
                        createVNode("h6", { class: "text-h5 font-weight-semibold" }, "Notifications"),
                        createVNode(_component_v_chip, {
                          color: "primary",
                          variant: "flat",
                          size: "x-small",
                          class: "text-white ml-4",
                          rounded: "xl"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("5 New")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode(_component_perfect_scrollbar, { style: { "height": "300px" } }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list, {
                          class: "py-0 theme-list",
                          lines: "two"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(notifications), (item) => {
                              return openBlock(), createBlock(_component_v_list_item, {
                                key: item.title,
                                value: item,
                                color: "primary",
                                class: "py-4 px-8"
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(_component_v_avatar, { size: "48" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, {
                                        src: item.avatar,
                                        width: "48",
                                        alt: item.avatar
                                      }, null, 8, ["src", "alt"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("h6", { class: "text-h6 font-weight-medium mb-1" }, toDisplayString(item.title), 1)
                                  ]),
                                  createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, toDisplayString(item.subtitle), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128)),
                            createVNode(_component_v_divider)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "py-4 px-6 text-center" }, [
                      createVNode(_component_v_btn, {
                        color: "primary",
                        size: "large",
                        rounded: "pill",
                        block: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("See all Notifications")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_sheet, {
                rounded: "lg",
                width: "385",
                elevation: "10",
                class: "mt-5 dropdown-box"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "px-8 pb-4 pt-6" }, [
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode("h6", { class: "text-h5 font-weight-semibold" }, "Notifications"),
                      createVNode(_component_v_chip, {
                        color: "primary",
                        variant: "flat",
                        size: "x-small",
                        class: "text-white ml-4",
                        rounded: "xl"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("5 New")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode(_component_perfect_scrollbar, { style: { "height": "300px" } }, {
                    default: withCtx(() => [
                      createVNode(_component_v_list, {
                        class: "py-0 theme-list",
                        lines: "two"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(notifications), (item) => {
                            return openBlock(), createBlock(_component_v_list_item, {
                              key: item.title,
                              value: item,
                              color: "primary",
                              class: "py-4 px-8"
                            }, {
                              prepend: withCtx(() => [
                                createVNode(_component_v_avatar, { size: "48" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      src: item.avatar,
                                      width: "48",
                                      alt: item.avatar
                                    }, null, 8, ["src", "alt"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("h6", { class: "text-h6 font-weight-medium mb-1" }, toDisplayString(item.title), 1)
                                ]),
                                createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, toDisplayString(item.subtitle), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128)),
                          createVNode(_component_v_divider)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "py-4 px-6 text-center" }, [
                    createVNode(_component_v_btn, {
                      color: "primary",
                      size: "large",
                      rounded: "pill",
                      block: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("See all Notifications")
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
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/vertical-header/NotificationDD.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ProfileDD",
  __ssrInlineRender: true,
  setup(__props) {
    const { sendLogout } = useAuthentification();
    useRouter();
    const callLogOut = () => {
      sendLogout();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_perfect_scrollbar = resolveComponent("perfect-scrollbar");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_menu, mergeProps({
        "close-on-content-click": true,
        class: "profile_popup"
      }, _attrs), {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({
              class: "text-left px-0 cursor-pointer",
              variant: "text"
            }, props))}${_scopeId}><div class="d-flex align-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_avatar, { size: "50" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} width="50" alt="Mike Nielsen"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      width: "50",
                      alt: "Mike Nielsen"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="ml-md-4 d-md-block d-none"${_scopeId}><h6 class="text-h6 d-flex align-center text-black font-weight-semibold"${_scopeId}> Mike Nielsen </h6><span class="text-subtitle-2 font-weight-medium text-grey100"${_scopeId}>Admin</span></div></div></div>`);
          } else {
            return [
              createVNode("div", mergeProps({
                class: "text-left px-0 cursor-pointer",
                variant: "text"
              }, props), [
                createVNode("div", { class: "d-flex align-center" }, [
                  createVNode(_component_v_avatar, { size: "50" }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_0,
                        width: "50",
                        alt: "Mike Nielsen"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "ml-md-4 d-md-block d-none" }, [
                    createVNode("h6", { class: "text-h6 d-flex align-center text-black font-weight-semibold" }, " Mike Nielsen "),
                    createVNode("span", { class: "text-subtitle-2 font-weight-medium text-grey100" }, "Admin")
                  ])
                ])
              ], 16)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_sheet, {
              rounded: "lg",
              width: "385",
              elevation: "10",
              class: "mt-5"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="px-8 pt-6"${_scopeId2}><div class="d-flex align-center justify-space-between"${_scopeId2}><h6 class="text-h5 font-weight-semibold"${_scopeId2}>User Profile</h6>`);
                  _push3(ssrRenderComponent(unref(CircleXIcon), {
                    size: "22",
                    class: "text-grey100 cursor-pointer opacity-50"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="d-flex align-center mt-5 pb-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_avatar, { size: "90" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} width="90"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_0,
                            width: "90"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="ml-5"${_scopeId2}><h6 class="text-h5 mb-n1"${_scopeId2}>Mike Nielsen</h6><span class="text-subtitle-1 font-weight-regular text-grey100 font-weight-medium"${_scopeId2}>Admin</span><div class="d-flex align-center mt-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(MailIcon), {
                    size: "18",
                    "stroke-width": "1.5",
                    class: "text-grey100"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-subtitle-1 text-grey100 font-weight-medium ml-2"${_scopeId2}>info@spikeadmin.com</span></div></div></div>`);
                  _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_perfect_scrollbar, { style: { "height": "calc(100vh - 240px)", "max-height": "240px" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list, {
                          class: "py-0 theme-list",
                          lines: "two"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(profileDD), (item) => {
                                _push5(ssrRenderComponent(_component_v_list_item, {
                                  key: item.title,
                                  class: "py-4 px-8 custom-text-primary",
                                  to: item.href
                                }, {
                                  prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_avatar, {
                                        size: "40",
                                        class: ["rounded-lg", "bg-light" + item.bgcolor]
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(Icon), {
                                              icon: "solar:" + item.avatar,
                                              width: "25",
                                              height: "25",
                                              class: "text-" + item.bgcolor
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(unref(Icon), {
                                                icon: "solar:" + item.avatar,
                                                width: "25",
                                                height: "25",
                                                class: "text-" + item.bgcolor
                                              }, null, 8, ["icon", "class"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_avatar, {
                                          size: "40",
                                          class: ["rounded-lg", "bg-light" + item.bgcolor]
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Icon), {
                                              icon: "solar:" + item.avatar,
                                              width: "25",
                                              height: "25",
                                              class: "text-" + item.bgcolor
                                            }, null, 8, ["icon", "class"])
                                          ]),
                                          _: 2
                                        }, 1032, ["class"])
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div${_scopeId5}><h6 class="text-h6 font-weight-medium mb-1 custom-title"${_scopeId5}>${ssrInterpolate(item.title)}</h6></div><p class="text-subtitle-1 font-weight-regular text-grey100"${_scopeId5}>${ssrInterpolate(item.subtitle)}</p>`);
                                    } else {
                                      return [
                                        createVNode("div", null, [
                                          createVNode("h6", { class: "text-h6 font-weight-medium mb-1 custom-title" }, toDisplayString(item.title), 1)
                                        ]),
                                        createVNode("p", { class: "text-subtitle-1 font-weight-regular text-grey100" }, toDisplayString(item.subtitle), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(profileDD), (item) => {
                                  return openBlock(), createBlock(_component_v_list_item, {
                                    key: item.title,
                                    class: "py-4 px-8 custom-text-primary",
                                    to: item.href
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_v_avatar, {
                                        size: "40",
                                        class: ["rounded-lg", "bg-light" + item.bgcolor]
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Icon), {
                                            icon: "solar:" + item.avatar,
                                            width: "25",
                                            height: "25",
                                            class: "text-" + item.bgcolor
                                          }, null, 8, ["icon", "class"])
                                        ]),
                                        _: 2
                                      }, 1032, ["class"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode("h6", { class: "text-h6 font-weight-medium mb-1 custom-title" }, toDisplayString(item.title), 1)
                                      ]),
                                      createVNode("p", { class: "text-subtitle-1 font-weight-regular text-grey100" }, toDisplayString(item.subtitle), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list, {
                            class: "py-0 theme-list",
                            lines: "two"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(profileDD), (item) => {
                                return openBlock(), createBlock(_component_v_list_item, {
                                  key: item.title,
                                  class: "py-4 px-8 custom-text-primary",
                                  to: item.href
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(_component_v_avatar, {
                                      size: "40",
                                      class: ["rounded-lg", "bg-light" + item.bgcolor]
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Icon), {
                                          icon: "solar:" + item.avatar,
                                          width: "25",
                                          height: "25",
                                          class: "text-" + item.bgcolor
                                        }, null, 8, ["icon", "class"])
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("h6", { class: "text-h6 font-weight-medium mb-1 custom-title" }, toDisplayString(item.title), 1)
                                    ]),
                                    createVNode("p", { class: "text-subtitle-1 font-weight-regular text-grey100" }, toDisplayString(item.subtitle), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to"]);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="pb-6 px-8 text-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "primary",
                    size: "large",
                    rounded: "pill",
                    block: "",
                    onClick: callLogOut
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Me déconnecter`);
                      } else {
                        return [
                          createTextVNode("Me déconnecter")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "px-8 pt-6" }, [
                      createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                        createVNode("h6", { class: "text-h5 font-weight-semibold" }, "User Profile"),
                        createVNode(unref(CircleXIcon), {
                          size: "22",
                          class: "text-grey100 cursor-pointer opacity-50"
                        })
                      ]),
                      createVNode("div", { class: "d-flex align-center mt-5 pb-6" }, [
                        createVNode(_component_v_avatar, { size: "90" }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: _imports_0,
                              width: "90"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "ml-5" }, [
                          createVNode("h6", { class: "text-h5 mb-n1" }, "Mike Nielsen"),
                          createVNode("span", { class: "text-subtitle-1 font-weight-regular text-grey100 font-weight-medium" }, "Admin"),
                          createVNode("div", { class: "d-flex align-center mt-1" }, [
                            createVNode(unref(MailIcon), {
                              size: "18",
                              "stroke-width": "1.5",
                              class: "text-grey100"
                            }),
                            createVNode("span", { class: "text-subtitle-1 text-grey100 font-weight-medium ml-2" }, "info@spikeadmin.com")
                          ])
                        ])
                      ]),
                      createVNode(_component_v_divider)
                    ]),
                    createVNode(_component_perfect_scrollbar, { style: { "height": "calc(100vh - 240px)", "max-height": "240px" } }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list, {
                          class: "py-0 theme-list",
                          lines: "two"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(profileDD), (item) => {
                              return openBlock(), createBlock(_component_v_list_item, {
                                key: item.title,
                                class: "py-4 px-8 custom-text-primary",
                                to: item.href
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(_component_v_avatar, {
                                    size: "40",
                                    class: ["rounded-lg", "bg-light" + item.bgcolor]
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Icon), {
                                        icon: "solar:" + item.avatar,
                                        width: "25",
                                        height: "25",
                                        class: "text-" + item.bgcolor
                                      }, null, 8, ["icon", "class"])
                                    ]),
                                    _: 2
                                  }, 1032, ["class"])
                                ]),
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("h6", { class: "text-h6 font-weight-medium mb-1 custom-title" }, toDisplayString(item.title), 1)
                                  ]),
                                  createVNode("p", { class: "text-subtitle-1 font-weight-regular text-grey100" }, toDisplayString(item.subtitle), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"]);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "pb-6 px-8 text-center" }, [
                      createVNode(_component_v_btn, {
                        color: "primary",
                        size: "large",
                        rounded: "pill",
                        block: "",
                        onClick: callLogOut
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Me déconnecter")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_sheet, {
                rounded: "lg",
                width: "385",
                elevation: "10",
                class: "mt-5"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "px-8 pt-6" }, [
                    createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                      createVNode("h6", { class: "text-h5 font-weight-semibold" }, "User Profile"),
                      createVNode(unref(CircleXIcon), {
                        size: "22",
                        class: "text-grey100 cursor-pointer opacity-50"
                      })
                    ]),
                    createVNode("div", { class: "d-flex align-center mt-5 pb-6" }, [
                      createVNode(_component_v_avatar, { size: "90" }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_0,
                            width: "90"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "ml-5" }, [
                        createVNode("h6", { class: "text-h5 mb-n1" }, "Mike Nielsen"),
                        createVNode("span", { class: "text-subtitle-1 font-weight-regular text-grey100 font-weight-medium" }, "Admin"),
                        createVNode("div", { class: "d-flex align-center mt-1" }, [
                          createVNode(unref(MailIcon), {
                            size: "18",
                            "stroke-width": "1.5",
                            class: "text-grey100"
                          }),
                          createVNode("span", { class: "text-subtitle-1 text-grey100 font-weight-medium ml-2" }, "info@spikeadmin.com")
                        ])
                      ])
                    ]),
                    createVNode(_component_v_divider)
                  ]),
                  createVNode(_component_perfect_scrollbar, { style: { "height": "calc(100vh - 240px)", "max-height": "240px" } }, {
                    default: withCtx(() => [
                      createVNode(_component_v_list, {
                        class: "py-0 theme-list",
                        lines: "two"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(profileDD), (item) => {
                            return openBlock(), createBlock(_component_v_list_item, {
                              key: item.title,
                              class: "py-4 px-8 custom-text-primary",
                              to: item.href
                            }, {
                              prepend: withCtx(() => [
                                createVNode(_component_v_avatar, {
                                  size: "40",
                                  class: ["rounded-lg", "bg-light" + item.bgcolor]
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), {
                                      icon: "solar:" + item.avatar,
                                      width: "25",
                                      height: "25",
                                      class: "text-" + item.bgcolor
                                    }, null, 8, ["icon", "class"])
                                  ]),
                                  _: 2
                                }, 1032, ["class"])
                              ]),
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("h6", { class: "text-h6 font-weight-medium mb-1 custom-title" }, toDisplayString(item.title), 1)
                                ]),
                                createVNode("p", { class: "text-subtitle-1 font-weight-regular text-grey100" }, toDisplayString(item.subtitle), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "pb-6 px-8 text-center" }, [
                    createVNode(_component_v_btn, {
                      color: "primary",
                      size: "large",
                      rounded: "pill",
                      block: "",
                      onClick: callLogOut
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Me déconnecter")
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
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/vertical-header/ProfileDD.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const customizer = useCustomizerStore();
    ref(false);
    ref(false);
    ref(false);
    const priority = ref(customizer.setHorizontalLayout ? 0 : 0);
    watch(priority, (newPriority) => {
      priority.value = newPriority;
    });
    const store = useEcomStore();
    const getCart = computed(() => {
      return store.cart;
    });
    const stickyHeader = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_LcFullVerticalHeaderSearchbar = _sfc_main$a;
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_LcFullLogo = _sfc_main$i;
      const _component_LcFullVerticalHeaderThemeToggler = _sfc_main$9;
      const _component_LcFullVerticalHeaderLanguageDD = _sfc_main$8;
      const _component_v_badge = resolveComponent("v-badge");
      const _component_LcFullVerticalHeaderNotificationDD = _sfc_main$7;
      const _component_LcFullVerticalHeaderProfileDD = _sfc_main$6;
      const _component_v_menu = resolveComponent("v-menu");
      const _component_DotsIcon = resolveComponent("DotsIcon");
      const _component_v_sheet = resolveComponent("v-sheet");
      _push(ssrRenderComponent(_component_v_app_bar, mergeProps({
        elevation: "0",
        priority: priority.value,
        height: "75",
        color: "containerBg",
        id: "top",
        class: stickyHeader.value ? "sticky" : ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, {
              class: "hidden-md-and-down custom-hover-primary",
              icon: "",
              variant: "text",
              size: "small",
              onClick: ($event) => unref(customizer).SET_MINI_SIDEBAR(!unref(customizer).mini_sidebar)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Icon), {
                    icon: "solar:list-bold-duotone",
                    height: "24",
                    width: "24"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Icon), {
                      icon: "solar:list-bold-duotone",
                      height: "24",
                      width: "24"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, {
              class: "hidden-lg-and-up custom-hover-primary",
              icon: "",
              variant: "text",
              onClick: unref(customizer).SET_SIDEBAR_DRAWER,
              size: "small"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Icon), {
                    icon: "solar:list-bold-duotone",
                    height: "24",
                    width: "24"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Icon), {
                      icon: "solar:list-bold-duotone",
                      height: "24",
                      width: "24"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="hidden-md-and-up me-md-4 me-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LcFullVerticalHeaderSearchbar, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_v_spacer, { class: "hidden-sm-and-down" }, null, _parent2, _scopeId));
            _push2(`<div class="hidden-md-and-up w-40"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LcFullLogo, null, null, _parent2, _scopeId));
            _push2(`</div><div class="hidden-sm-and-down me-sm-4 me-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LcFullVerticalHeaderSearchbar, null, null, _parent2, _scopeId));
            _push2(`</div><div class="me-sm-4 me-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LcFullVerticalHeaderThemeToggler, null, null, _parent2, _scopeId));
            _push2(`</div><div class="hidden-sm-and-down me-sm-4 me-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LcFullVerticalHeaderLanguageDD, null, null, _parent2, _scopeId));
            _push2(`</div><div class="hidden-sm-and-down me-sm-4 me-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              icon: "",
              variant: "text",
              to: "/apps/ecommerce/checkout",
              class: "custom-hover-primary",
              size: "small"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_badge, {
                    color: "primary",
                    content: (_a = unref(getCart)) == null ? void 0 : _a.length,
                    "offset-x": "-4",
                    "offset-y": "-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          icon: "solar:cart-3-line-duotone",
                          height: "24",
                          width: "24"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Icon), {
                            icon: "solar:cart-3-line-duotone",
                            height: "24",
                            width: "24"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_badge, {
                      color: "primary",
                      content: (_b = unref(getCart)) == null ? void 0 : _b.length,
                      "offset-x": "-4",
                      "offset-y": "-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          icon: "solar:cart-3-line-duotone",
                          height: "24",
                          width: "24"
                        })
                      ]),
                      _: 1
                    }, 8, ["content"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="hidden-sm-and-down me-sm-4 me-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LcFullVerticalHeaderNotificationDD, null, null, _parent2, _scopeId));
            _push2(`</div><div class="hidden-sm-and-down"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LcFullVerticalHeaderProfileDD, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_v_menu, {
              "close-on-content-click": false,
              class: "mobile_popup"
            }, {
              activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, mergeProps({
                    icon: "",
                    class: "bg-lightprimary hidden-md-and-up custom-hover-primary",
                    flat: ""
                  }, props, { size: "small" }), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DotsIcon, {
                          "stroke-width": "2",
                          size: "24",
                          class: "text-primary"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DotsIcon, {
                            "stroke-width": "2",
                            size: "24",
                            class: "text-primary"
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, mergeProps({
                      icon: "",
                      class: "bg-lightprimary hidden-md-and-up custom-hover-primary",
                      flat: ""
                    }, props, { size: "small" }), {
                      default: withCtx(() => [
                        createVNode(_component_DotsIcon, {
                          "stroke-width": "2",
                          size: "24",
                          class: "text-primary"
                        })
                      ]),
                      _: 2
                    }, 1040)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_sheet, {
                    rounded: "lg",
                    elevation: "10",
                    class: "mt-5 dropdown-box px-4 py-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex justify-space-between align-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_LcFullVerticalHeaderLanguageDD, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          icon: "",
                          variant: "text",
                          to: "/apps/ecommerce/checkout",
                          class: "custom-hover-primary",
                          size: "small"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_badge, {
                                color: "primary",
                                content: (_a = unref(getCart)) == null ? void 0 : _a.length,
                                "offset-x": "-4",
                                "offset-y": "-6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Icon), {
                                      icon: "solar:cart-3-line-duotone",
                                      height: "24",
                                      width: "24"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(Icon), {
                                        icon: "solar:cart-3-line-duotone",
                                        height: "24",
                                        width: "24"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_badge, {
                                  color: "primary",
                                  content: (_b = unref(getCart)) == null ? void 0 : _b.length,
                                  "offset-x": "-4",
                                  "offset-y": "-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), {
                                      icon: "solar:cart-3-line-duotone",
                                      height: "24",
                                      width: "24"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["content"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_LcFullVerticalHeaderNotificationDD, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_LcFullVerticalHeaderProfileDD, null, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                            createVNode(_component_LcFullVerticalHeaderLanguageDD),
                            createVNode(_component_v_btn, {
                              icon: "",
                              variant: "text",
                              to: "/apps/ecommerce/checkout",
                              class: "custom-hover-primary",
                              size: "small"
                            }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_v_badge, {
                                    color: "primary",
                                    content: (_a = unref(getCart)) == null ? void 0 : _a.length,
                                    "offset-x": "-4",
                                    "offset-y": "-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Icon), {
                                        icon: "solar:cart-3-line-duotone",
                                        height: "24",
                                        width: "24"
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["content"])
                                ];
                              }),
                              _: 1
                            }),
                            createVNode(_component_LcFullVerticalHeaderNotificationDD),
                            createVNode(_component_LcFullVerticalHeaderProfileDD)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_sheet, {
                      rounded: "lg",
                      elevation: "10",
                      class: "mt-5 dropdown-box px-4 py-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                          createVNode(_component_LcFullVerticalHeaderLanguageDD),
                          createVNode(_component_v_btn, {
                            icon: "",
                            variant: "text",
                            to: "/apps/ecommerce/checkout",
                            class: "custom-hover-primary",
                            size: "small"
                          }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode(_component_v_badge, {
                                  color: "primary",
                                  content: (_a = unref(getCart)) == null ? void 0 : _a.length,
                                  "offset-x": "-4",
                                  "offset-y": "-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), {
                                      icon: "solar:cart-3-line-duotone",
                                      height: "24",
                                      width: "24"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["content"])
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_LcFullVerticalHeaderNotificationDD),
                          createVNode(_component_LcFullVerticalHeaderProfileDD)
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
              createVNode(_component_v_btn, {
                class: "hidden-md-and-down custom-hover-primary",
                icon: "",
                variant: "text",
                size: "small",
                onClick: withModifiers(($event) => unref(customizer).SET_MINI_SIDEBAR(!unref(customizer).mini_sidebar), ["stop"])
              }, {
                default: withCtx(() => [
                  createVNode(unref(Icon), {
                    icon: "solar:list-bold-duotone",
                    height: "24",
                    width: "24"
                  })
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_v_btn, {
                class: "hidden-lg-and-up custom-hover-primary",
                icon: "",
                variant: "text",
                onClick: withModifiers(unref(customizer).SET_SIDEBAR_DRAWER, ["stop"]),
                size: "small"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Icon), {
                    icon: "solar:list-bold-duotone",
                    height: "24",
                    width: "24"
                  })
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode("div", { class: "hidden-md-and-up me-md-4 me-0" }, [
                createVNode(_component_LcFullVerticalHeaderSearchbar)
              ]),
              createVNode(_component_v_spacer, { class: "hidden-sm-and-down" }),
              createVNode("div", { class: "hidden-md-and-up w-40" }, [
                createVNode(_component_LcFullLogo)
              ]),
              createVNode("div", { class: "hidden-sm-and-down me-sm-4 me-4" }, [
                createVNode(_component_LcFullVerticalHeaderSearchbar)
              ]),
              createVNode("div", { class: "me-sm-4 me-0" }, [
                createVNode(_component_LcFullVerticalHeaderThemeToggler)
              ]),
              createVNode("div", { class: "hidden-sm-and-down me-sm-4 me-4" }, [
                createVNode(_component_LcFullVerticalHeaderLanguageDD)
              ]),
              createVNode("div", { class: "hidden-sm-and-down me-sm-4 me-4" }, [
                createVNode(_component_v_btn, {
                  icon: "",
                  variant: "text",
                  to: "/apps/ecommerce/checkout",
                  class: "custom-hover-primary",
                  size: "small"
                }, {
                  default: withCtx(() => {
                    var _a;
                    return [
                      createVNode(_component_v_badge, {
                        color: "primary",
                        content: (_a = unref(getCart)) == null ? void 0 : _a.length,
                        "offset-x": "-4",
                        "offset-y": "-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Icon), {
                            icon: "solar:cart-3-line-duotone",
                            height: "24",
                            width: "24"
                          })
                        ]),
                        _: 1
                      }, 8, ["content"])
                    ];
                  }),
                  _: 1
                })
              ]),
              createVNode("div", { class: "hidden-sm-and-down me-sm-4 me-4" }, [
                createVNode(_component_LcFullVerticalHeaderNotificationDD)
              ]),
              createVNode("div", { class: "hidden-sm-and-down" }, [
                createVNode(_component_LcFullVerticalHeaderProfileDD)
              ]),
              createVNode(_component_v_menu, {
                "close-on-content-click": false,
                class: "mobile_popup"
              }, {
                activator: withCtx(({ props }) => [
                  createVNode(_component_v_btn, mergeProps({
                    icon: "",
                    class: "bg-lightprimary hidden-md-and-up custom-hover-primary",
                    flat: ""
                  }, props, { size: "small" }), {
                    default: withCtx(() => [
                      createVNode(_component_DotsIcon, {
                        "stroke-width": "2",
                        size: "24",
                        class: "text-primary"
                      })
                    ]),
                    _: 2
                  }, 1040)
                ]),
                default: withCtx(() => [
                  createVNode(_component_v_sheet, {
                    rounded: "lg",
                    elevation: "10",
                    class: "mt-5 dropdown-box px-4 py-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                        createVNode(_component_LcFullVerticalHeaderLanguageDD),
                        createVNode(_component_v_btn, {
                          icon: "",
                          variant: "text",
                          to: "/apps/ecommerce/checkout",
                          class: "custom-hover-primary",
                          size: "small"
                        }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode(_component_v_badge, {
                                color: "primary",
                                content: (_a = unref(getCart)) == null ? void 0 : _a.length,
                                "offset-x": "-4",
                                "offset-y": "-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "solar:cart-3-line-duotone",
                                    height: "24",
                                    width: "24"
                                  })
                                ]),
                                _: 1
                              }, 8, ["content"])
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_LcFullVerticalHeaderNotificationDD),
                        createVNode(_component_LcFullVerticalHeaderProfileDD)
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
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/vertical-header/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const customizer = useCustomizerStore();
    ref(false);
    ref(false);
    ref(false);
    const priority = ref(customizer.setHorizontalLayout ? 0 : 0);
    watch(priority, (newPriority) => {
      priority.value = newPriority;
    });
    const store = useEcomStore();
    const getCart = computed(() => {
      return store.cart;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_LcFullLogo = _sfc_main$i;
      const _component_v_btn = resolveComponent("v-btn");
      const _component_LcFullVerticalHeaderSearchbar = _sfc_main$a;
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_LcFullVerticalHeaderThemeToggler = _sfc_main$9;
      const _component_LcFullVerticalHeaderLanguageDD = _sfc_main$8;
      const _component_v_badge = resolveComponent("v-badge");
      const _component_LcFullVerticalHeaderNotificationDD = _sfc_main$7;
      const _component_LcFullVerticalHeaderProfileDD = _sfc_main$6;
      const _component_v_menu = resolveComponent("v-menu");
      const _component_DotsIcon = resolveComponent("DotsIcon");
      const _component_v_sheet = resolveComponent("v-sheet");
      _push(ssrRenderComponent(_component_v_app_bar, mergeProps({
        elevation: "0",
        priority: priority.value,
        height: "75",
        class: "horizontal-header",
        color: "background"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(
              unref(customizer).boxed ? "maxWidth v-toolbar__content px-lg-0 px-4" : "v-toolbar__content px-6"
            )}"${_scopeId}><div class="hidden-md-and-down mt-2 pr-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LcFullLogo, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              class: "hidden-lg-and-up bg-lightsecondary custom-hover-primary",
              icon: "",
              variant: "text",
              onClick: unref(customizer).SET_SIDEBAR_DRAWER,
              size: "small"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Icon), {
                    icon: "solar:list-bold-duotone",
                    height: "24",
                    width: "24"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Icon), {
                      icon: "solar:list-bold-duotone",
                      height: "24",
                      width: "24"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="hidden-md-and-up me-md-4 me-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LcFullVerticalHeaderSearchbar, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_v_spacer, { class: "hidden-sm-and-down" }, null, _parent2, _scopeId));
            _push2(`<div class="hidden-md-and-up w-40"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LcFullLogo, null, null, _parent2, _scopeId));
            _push2(`</div><div class="hidden-sm-and-down me-sm-4 me-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LcFullVerticalHeaderSearchbar, null, null, _parent2, _scopeId));
            _push2(`</div><div class="me-sm-4 me-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LcFullVerticalHeaderThemeToggler, null, null, _parent2, _scopeId));
            _push2(`</div><div class="hidden-sm-and-down me-sm-4 me-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LcFullVerticalHeaderLanguageDD, null, null, _parent2, _scopeId));
            _push2(`</div><div class="hidden-sm-and-down me-sm-4 me-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              icon: "",
              variant: "text",
              class: "mr-sm-3 mr-2 custom-hover-primary",
              to: "/apps/ecommerce/checkout",
              size: "small"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_badge, {
                    color: "primary",
                    content: (_a = getCart.value) == null ? void 0 : _a.length,
                    "offset-x": "-4",
                    "offset-y": "-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          icon: "solar:cart-3-line-duotone",
                          height: "24",
                          width: "24"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Icon), {
                            icon: "solar:cart-3-line-duotone",
                            height: "24",
                            width: "24"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_badge, {
                      color: "primary",
                      content: (_b = getCart.value) == null ? void 0 : _b.length,
                      "offset-x": "-4",
                      "offset-y": "-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          icon: "solar:cart-3-line-duotone",
                          height: "24",
                          width: "24"
                        })
                      ]),
                      _: 1
                    }, 8, ["content"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="hidden-sm-and-down me-sm-6 me-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LcFullVerticalHeaderNotificationDD, null, null, _parent2, _scopeId));
            _push2(`</div><div class="hidden-sm-and-down"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LcFullVerticalHeaderProfileDD, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_v_menu, {
              "close-on-content-click": false,
              class: "mobile_popup"
            }, {
              activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, mergeProps({
                    icon: "",
                    class: "bg-lightprimary hidden-md-and-up custom-hover-primary",
                    flat: ""
                  }, props, { size: "small" }), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DotsIcon, {
                          "stroke-width": "2",
                          size: "24",
                          class: "text-primary"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DotsIcon, {
                            "stroke-width": "2",
                            size: "24",
                            class: "text-primary"
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, mergeProps({
                      icon: "",
                      class: "bg-lightprimary hidden-md-and-up custom-hover-primary",
                      flat: ""
                    }, props, { size: "small" }), {
                      default: withCtx(() => [
                        createVNode(_component_DotsIcon, {
                          "stroke-width": "2",
                          size: "24",
                          class: "text-primary"
                        })
                      ]),
                      _: 2
                    }, 1040)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_sheet, {
                    rounded: "lg",
                    elevation: "10",
                    class: "mt-5 dropdown-box px-4 py-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex justify-space-between align-center"${_scopeId3}><div class="mr-sm-3 mr-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_LcFullVerticalHeaderSearchbar, null, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(_component_LcFullVerticalHeaderLanguageDD, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          icon: "",
                          variant: "text",
                          class: "mr-sm-3 mr-2 custom-hover-primary",
                          to: "/apps/ecommerce/checkout",
                          size: "small"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_badge, {
                                color: "primary",
                                content: (_a = getCart.value) == null ? void 0 : _a.length,
                                "offset-x": "-4",
                                "offset-y": "-6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Icon), {
                                      icon: "solar:cart-3-line-duotone",
                                      height: "24",
                                      width: "24"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(Icon), {
                                        icon: "solar:cart-3-line-duotone",
                                        height: "24",
                                        width: "24"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_badge, {
                                  color: "primary",
                                  content: (_b = getCart.value) == null ? void 0 : _b.length,
                                  "offset-x": "-4",
                                  "offset-y": "-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), {
                                      icon: "solar:cart-3-line-duotone",
                                      height: "24",
                                      width: "24"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["content"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_LcFullVerticalHeaderNotificationDD, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_LcFullVerticalHeaderProfileDD, null, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                            createVNode("div", { class: "mr-sm-3 mr-2" }, [
                              createVNode(_component_LcFullVerticalHeaderSearchbar)
                            ]),
                            createVNode(_component_LcFullVerticalHeaderLanguageDD),
                            createVNode(_component_v_btn, {
                              icon: "",
                              variant: "text",
                              class: "mr-sm-3 mr-2 custom-hover-primary",
                              to: "/apps/ecommerce/checkout",
                              size: "small"
                            }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_v_badge, {
                                    color: "primary",
                                    content: (_a = getCart.value) == null ? void 0 : _a.length,
                                    "offset-x": "-4",
                                    "offset-y": "-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Icon), {
                                        icon: "solar:cart-3-line-duotone",
                                        height: "24",
                                        width: "24"
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["content"])
                                ];
                              }),
                              _: 1
                            }),
                            createVNode(_component_LcFullVerticalHeaderNotificationDD),
                            createVNode(_component_LcFullVerticalHeaderProfileDD)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_sheet, {
                      rounded: "lg",
                      elevation: "10",
                      class: "mt-5 dropdown-box px-4 py-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                          createVNode("div", { class: "mr-sm-3 mr-2" }, [
                            createVNode(_component_LcFullVerticalHeaderSearchbar)
                          ]),
                          createVNode(_component_LcFullVerticalHeaderLanguageDD),
                          createVNode(_component_v_btn, {
                            icon: "",
                            variant: "text",
                            class: "mr-sm-3 mr-2 custom-hover-primary",
                            to: "/apps/ecommerce/checkout",
                            size: "small"
                          }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode(_component_v_badge, {
                                  color: "primary",
                                  content: (_a = getCart.value) == null ? void 0 : _a.length,
                                  "offset-x": "-4",
                                  "offset-y": "-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), {
                                      icon: "solar:cart-3-line-duotone",
                                      height: "24",
                                      width: "24"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["content"])
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_LcFullVerticalHeaderNotificationDD),
                          createVNode(_component_LcFullVerticalHeaderProfileDD)
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: unref(customizer).boxed ? "maxWidth v-toolbar__content px-lg-0 px-4" : "v-toolbar__content px-6"
              }, [
                createVNode("div", { class: "hidden-md-and-down mt-2 pr-4" }, [
                  createVNode(_component_LcFullLogo)
                ]),
                createVNode(_component_v_btn, {
                  class: "hidden-lg-and-up bg-lightsecondary custom-hover-primary",
                  icon: "",
                  variant: "text",
                  onClick: withModifiers(unref(customizer).SET_SIDEBAR_DRAWER, ["stop"]),
                  size: "small"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Icon), {
                      icon: "solar:list-bold-duotone",
                      height: "24",
                      width: "24"
                    })
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode("div", { class: "hidden-md-and-up me-md-4 me-0" }, [
                  createVNode(_component_LcFullVerticalHeaderSearchbar)
                ]),
                createVNode(_component_v_spacer, { class: "hidden-sm-and-down" }),
                createVNode("div", { class: "hidden-md-and-up w-40" }, [
                  createVNode(_component_LcFullLogo)
                ]),
                createVNode("div", { class: "hidden-sm-and-down me-sm-4 me-4" }, [
                  createVNode(_component_LcFullVerticalHeaderSearchbar)
                ]),
                createVNode("div", { class: "me-sm-4 me-0" }, [
                  createVNode(_component_LcFullVerticalHeaderThemeToggler)
                ]),
                createVNode("div", { class: "hidden-sm-and-down me-sm-4 me-4" }, [
                  createVNode(_component_LcFullVerticalHeaderLanguageDD)
                ]),
                createVNode("div", { class: "hidden-sm-and-down me-sm-4 me-4" }, [
                  createVNode(_component_v_btn, {
                    icon: "",
                    variant: "text",
                    class: "mr-sm-3 mr-2 custom-hover-primary",
                    to: "/apps/ecommerce/checkout",
                    size: "small"
                  }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createVNode(_component_v_badge, {
                          color: "primary",
                          content: (_a = getCart.value) == null ? void 0 : _a.length,
                          "offset-x": "-4",
                          "offset-y": "-6"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Icon), {
                              icon: "solar:cart-3-line-duotone",
                              height: "24",
                              width: "24"
                            })
                          ]),
                          _: 1
                        }, 8, ["content"])
                      ];
                    }),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "hidden-sm-and-down me-sm-6 me-4" }, [
                  createVNode(_component_LcFullVerticalHeaderNotificationDD)
                ]),
                createVNode("div", { class: "hidden-sm-and-down" }, [
                  createVNode(_component_LcFullVerticalHeaderProfileDD)
                ]),
                createVNode(_component_v_menu, {
                  "close-on-content-click": false,
                  class: "mobile_popup"
                }, {
                  activator: withCtx(({ props }) => [
                    createVNode(_component_v_btn, mergeProps({
                      icon: "",
                      class: "bg-lightprimary hidden-md-and-up custom-hover-primary",
                      flat: ""
                    }, props, { size: "small" }), {
                      default: withCtx(() => [
                        createVNode(_component_DotsIcon, {
                          "stroke-width": "2",
                          size: "24",
                          class: "text-primary"
                        })
                      ]),
                      _: 2
                    }, 1040)
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_v_sheet, {
                      rounded: "lg",
                      elevation: "10",
                      class: "mt-5 dropdown-box px-4 py-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                          createVNode("div", { class: "mr-sm-3 mr-2" }, [
                            createVNode(_component_LcFullVerticalHeaderSearchbar)
                          ]),
                          createVNode(_component_LcFullVerticalHeaderLanguageDD),
                          createVNode(_component_v_btn, {
                            icon: "",
                            variant: "text",
                            class: "mr-sm-3 mr-2 custom-hover-primary",
                            to: "/apps/ecommerce/checkout",
                            size: "small"
                          }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode(_component_v_badge, {
                                  color: "primary",
                                  content: (_a = getCart.value) == null ? void 0 : _a.length,
                                  "offset-x": "-4",
                                  "offset-y": "-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), {
                                      icon: "solar:cart-3-line-duotone",
                                      height: "24",
                                      width: "24"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["content"])
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_LcFullVerticalHeaderNotificationDD),
                          createVNode(_component_LcFullVerticalHeaderProfileDD)
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/horizontal-header/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Index",
  __ssrInlineRender: true,
  props: { item: Object, level: Number },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_v_chip = resolveComponent("v-chip");
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `${__props.item.to}`,
        class: "navItemLink text-grey200 bg-hover-" + __props.item.BgColor,
        color: __props.item.BgColor,
        disabled: __props.item.disabled
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.level > 0) {
              _push2(`<span class=""${_scopeId}><div class="z-index-1 d-flex align-center"${_scopeId}><span class="sublink-dot mr-4"${_scopeId}></span><span${_scopeId}>${ssrInterpolate(_ctx.$t(__props.item.title))}</span></div></span>`);
            } else {
              _push2(`<span${_scopeId}><span class="${ssrRenderClass(["text-" + __props.item.BgColor, "icon-box"])}"${_scopeId}><i class="navIcon"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "solar:" + __props.item.icon,
                height: "24",
                width: "24",
                level: __props.level,
                class: "position-relative z-index-2 texthover-" + __props.item.BgColor
              }, null, _parent2, _scopeId));
              _push2(`</i><span class="z-index-1 ml-3"${_scopeId}>${ssrInterpolate(_ctx.$t(__props.item.title))}</span></span></span>`);
            }
            if (__props.item.subCaption) {
              _push2(`<small class="text-caption mt-n1 hide-menu"${_scopeId}>${ssrInterpolate(__props.item.subCaption)}</small>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.item.chip) {
              _push2(ssrRenderComponent(_component_v_chip, {
                color: __props.item.chipColor,
                class: "sidebarchip hide-menu ml-auto bg-" + __props.item.BgColor,
                size: __props.item.chipIcon ? "small" : "small",
                variant: __props.item.chipVariant,
                "prepend-icon": __props.item.chipIcon
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.item.chip)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.item.chip), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.level > 0 ? (openBlock(), createBlock("span", {
                key: 0,
                class: ""
              }, [
                createVNode("div", { class: "z-index-1 d-flex align-center" }, [
                  createVNode("span", { class: "sublink-dot mr-4" }),
                  createVNode("span", null, toDisplayString(_ctx.$t(__props.item.title)), 1)
                ])
              ])) : (openBlock(), createBlock("span", { key: 1 }, [
                createVNode("span", {
                  class: ["icon-box", "text-" + __props.item.BgColor]
                }, [
                  createVNode("i", { class: "navIcon" }, [
                    createVNode(unref(Icon), {
                      icon: "solar:" + __props.item.icon,
                      height: "24",
                      width: "24",
                      level: __props.level,
                      class: "position-relative z-index-2 texthover-" + __props.item.BgColor
                    }, null, 8, ["icon", "level", "class"])
                  ]),
                  createVNode("span", { class: "z-index-1 ml-3" }, toDisplayString(_ctx.$t(__props.item.title)), 1)
                ], 2)
              ])),
              __props.item.subCaption ? (openBlock(), createBlock("small", {
                key: 2,
                class: "text-caption mt-n1 hide-menu"
              }, toDisplayString(__props.item.subCaption), 1)) : createCommentVNode("", true),
              __props.item.chip ? (openBlock(), createBlock(_component_v_chip, {
                key: 3,
                color: __props.item.chipColor,
                class: "sidebarchip hide-menu ml-auto bg-" + __props.item.BgColor,
                size: __props.item.chipIcon ? "small" : "small",
                variant: __props.item.chipVariant,
                "prepend-icon": __props.item.chipIcon
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.item.chip), 1)
                ]),
                _: 1
              }, 8, ["color", "class", "size", "variant", "prepend-icon"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/horizontal-sidebar/NavItem/Index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Index",
  __ssrInlineRender: true,
  props: { item: Object, level: Number },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ChevronDownIcon = resolveComponent("ChevronDownIcon");
      const _component_Index = resolveComponent("Index", true);
      const _component_LcFullHorizontalSidebarNavItem = _sfc_main$3;
      _push(`<!--[--><a class="${ssrRenderClass("navItemLink rounded-pill cursor-pointer bg-hover-" + __props.item.BgColor)}"${ssrIncludeBooleanAttr(__props.item.disabled) ? " disabled" : ""}>`);
      if (__props.level > 0) {
        _push(`<span class="w-100"><div class="z-index-1"><span class="sublink-dot mr-4"></span><span class="mr-auto">${ssrInterpolate(_ctx.$t(__props.item.title))}</span></div></span>`);
      } else {
        _push(`<span><span class="icon-box"><i class="navIcon">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "solar:" + __props.item.icon,
          height: "24",
          width: "24",
          level: __props.level,
          class: "position-relative z-index-2 texthover-" + __props.item.BgColor
        }, null, _parent));
        _push(`</i><span class="z-index-1 ml-3">${ssrInterpolate(_ctx.$t(__props.item.title))}</span></span></span>`);
      }
      if (__props.item.subCaption) {
        _push(`<small class="text-caption mt-n1 hide-menu">${ssrInterpolate(__props.item.subCaption)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<i class="ddIcon me-3 z-index-1 d-flex align-center">`);
      _push(ssrRenderComponent(_component_ChevronDownIcon, { size: "15" }, null, _parent));
      _push(`</i></a><ul class="${ssrRenderClass(`ddMenu ddLevel-${__props.level + 1}`)}">`);
      if (__props.item.children) {
        _push(`<!--[-->`);
        ssrRenderList(__props.item.children, (subitem, i) => {
          _push(`<li class="navItem">`);
          if (subitem.children) {
            _push(ssrRenderComponent(_component_Index, {
              item: subitem,
              level: __props.level + 1
            }, null, _parent));
          } else {
            _push(ssrRenderComponent(_component_LcFullHorizontalSidebarNavItem, {
              item: subitem,
              level: __props.level + 1
            }, null, _parent));
          }
          _push(`</li>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/horizontal-sidebar/NavCollapse/Index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const horizontalItems = [
  {
    title: "Dashboards",
    icon: "screencast-2-linear",
    BgColor: "primary",
    to: "#",
    children: [
      {
        title: "Dashboard",
        to: "/dashboards/dashboard1"
      },
      {
        title: "Dashboard 2",
        to: "/dashboards/dashboard2"
      }
    ]
  },
  {
    title: "Front Pages",
    icon: "home-angle-linear",
    BgColor: "error",
    to: "#",
    children: [
      {
        title: "Homepage",
        to: "/front-pages/homepage"
      },
      {
        title: "About Us",
        to: "/front-pages/about-us"
      },
      {
        title: "Blog",
        to: "/front-pages/blog/posts"
      },
      {
        title: "Blog Details",
        to: "/front-pages/blog/early-black-friday-amazon-deals-cheap-tvs-headphones"
      },
      {
        title: "Contact Us",
        to: "/front-pages/contact-us"
      },
      {
        title: "Portfolio",
        to: "/front-pages/portfolio"
      },
      {
        title: "Pricing",
        to: "/front-pages/pricing"
      }
    ]
  },
  {
    title: "Apps",
    icon: "clapperboard-text-line-duotone",
    BgColor: "indigo",
    to: "#",
    children: [
      {
        title: "Contact",
        to: "/apps/contacts"
      },
      {
        title: "Chats",
        to: "/apps/chats"
      },
      {
        title: "Blog",
        to: "/",
        children: [
          {
            title: "Posts",
            to: "/apps/blog/posts"
          },
          {
            title: "Detail",
            to: "/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones"
          }
        ]
      },
      {
        title: "E-Commerce",
        to: "/ecommerce/",
        children: [
          {
            title: "Shop One",
            to: "/apps/ecommerce/productsone"
          },
          {
            title: "Shop Two",
            to: "/apps/ecommerce/productstwo"
          },
          {
            title: "Details One",
            to: "/apps/ecommerce/product/one/detail/1"
          },
          {
            title: "Details Two",
            to: "/apps/ecommerce/producttwo/two/detail/1"
          },
          {
            title: "List",
            to: "/apps/ecommerce/productlist"
          },
          {
            title: "Checkout",
            to: "/apps/ecommerce/checkout"
          },
          {
            title: "Add Product",
            to: "/apps/ecommerce/addproduct"
          },
          {
            title: "Edit Product",
            to: "/apps/ecommerce/editproduct"
          }
        ]
      },
      {
        title: "User Profile",
        to: "/",
        children: [
          {
            title: "Profile One",
            to: "/apps/userprofile/one"
          },
          {
            title: "Profile Two",
            to: "/apps/userprofile/two"
          }
        ]
      },
      {
        title: "Invoice",
        to: "/",
        children: [
          {
            title: "List",
            to: "/apps/invoice"
          },
          {
            title: "Details",
            to: "/apps/invoice/details/102"
          },
          {
            title: "Create",
            to: "/apps/invoice/create"
          },
          {
            title: "Edit",
            to: "/apps/invoice/edit/102"
          }
        ]
      },
      {
        title: "Email",
        to: "/apps/email"
      },
      {
        title: "Notes",
        to: "/apps/notes"
      },
      {
        title: "Calendar",
        to: "/apps/calendar"
      },
      {
        title: "Kanban",
        to: "/apps/kanban"
      },
      {
        title: "Tickets",
        to: "/apps/tickets"
      }
    ]
  },
  {
    title: "Pages",
    icon: "folder-with-files-line-duotone",
    BgColor: "error",
    to: "#",
    children: [
      {
        title: "Pricing",
        to: "/theme-pages/pricing"
      },
      {
        title: "Account Setting",
        to: "/theme-pages/account-settings"
      },
      {
        title: "FAQ",
        to: "/theme-pages/pricing"
      },
      {
        title: "Gallery Lightbox",
        to: "/theme-pages/gallery-lightbox"
      },
      {
        title: "Search Results",
        to: "/theme-pages/search-results"
      },
      {
        title: "Social Contacts",
        to: "/theme-pages/social-media-contacts"
      },
      {
        title: "Treeview",
        to: "/theme-pages/treeview"
      },
      {
        title: "Widget",
        to: "/widget-card",
        children: [
          {
            title: "Cards",
            to: "/widgets/cards"
          },
          {
            title: "Banners",
            to: "/widgets/banners"
          },
          {
            title: "Charts",
            to: "/widgets/charts"
          }
        ]
      },
      {
        title: "UI",
        to: "#",
        children: [
          {
            title: "Alert",
            to: "/ui-components/alert"
          },
          {
            title: "Accordion",
            to: "/ui-components/accordion"
          },
          {
            title: "Avatar",
            to: "/ui-components/avatar"
          },
          {
            title: "Chip",
            to: "/ui-components/chip"
          },
          {
            title: "Dialog",
            to: "/ui-components/dialogs"
          },
          {
            title: "List",
            to: "/ui-components/list"
          },
          {
            title: "Menus",
            to: "/ui-components/menus"
          },
          {
            title: "Rating",
            to: "/ui-components/rating"
          },
          {
            title: "Tabs",
            to: "/ui-components/tabs"
          },
          {
            title: "Tooltip",
            to: "/ui-components/tooltip"
          },
          {
            title: "Typography",
            to: "/ui-components/typography"
          }
        ]
      },
      {
        title: "Charts",
        to: "#",
        children: [
          {
            title: "Line",
            to: "/charts/line-chart"
          },
          {
            title: "Gredient",
            to: "/charts/gredient-chart"
          },
          {
            title: "Area",
            to: "/charts/area-chart"
          },
          {
            title: "Candlestick",
            to: "/charts/candlestick-chart"
          },
          {
            title: "Column",
            to: "/charts/column-chart"
          },
          {
            title: "Doughnut & Pie",
            to: "/charts/doughnut-pie-chart"
          },
          {
            title: "Radialbar & Radar",
            to: "/charts/radialbar-chart"
          }
        ]
      },
      {
        title: "Auth",
        to: "#",
        children: [
          {
            title: "Error",
            to: "/auth/404"
          },
          {
            title: "Maintenance",
            to: "/auth/maintenance"
          },
          {
            title: "Login",
            to: "#",
            children: [
              {
                title: "Side Login",
                to: "/auth/login"
              },
              {
                title: "Boxed Login",
                to: "/auth/login2"
              }
            ]
          },
          {
            title: "Register",
            to: "#",
            children: [
              {
                title: "Side Register",
                to: "/auth/register2"
              },
              {
                title: "Boxed Register",
                to: "/auth/register"
              }
            ]
          },
          {
            title: "Forgot Password",
            to: "#",
            children: [
              {
                title: "Side Forgot Password",
                to: "/auth/forgot-password"
              },
              {
                title: "Boxed Forgot Password",
                to: "/auth/forgot-password2"
              }
            ]
          },
          {
            title: "Two Steps",
            to: "#",
            children: [
              {
                title: "Side Two Steps",
                to: "/auth/two-step"
              },
              {
                title: "Boxed Two Steps",
                to: "/auth/two-step2"
              }
            ]
          }
        ]
      },
      {
        title: "Teachers",
        to: "",
        children: [
          {
            title: "All Teachers",
            to: "/school-pages/teachers"
          },
          {
            title: "Teachers Details",
            to: "/school-pages/teachers/details"
          }
        ]
      },
      {
        title: "Exam",
        to: "",
        children: [
          {
            title: "Exam Schedule",
            to: "/school-pages/exam/schedule"
          },
          {
            title: "Exam Result",
            to: "/school-pages/exam/result"
          },
          {
            title: "Exam Result Details",
            to: "/school-pages/exam/result-details"
          }
        ]
      },
      {
        title: "Students",
        to: "",
        children: [
          {
            title: "All Students",
            to: "/school-pages/students"
          },
          {
            title: "Students Details",
            to: "/school-pages/students/details"
          }
        ]
      },
      {
        title: "Classes",
        to: "/school-pages/classes"
      },
      {
        title: "Attendance",
        to: "/school-pages/attendance"
      }
    ]
  },
  {
    title: "Forms",
    icon: "file-line-duotone",
    BgColor: "success",
    to: "#",
    children: [
      {
        title: "Form Elements",
        to: "/components/",
        children: [
          {
            title: "Autocomplete",
            to: "/forms/form-elements/autocomplete"
          },
          {
            title: "Combobox",
            to: "/forms/form-elements/combobox"
          },
          {
            title: "Button",
            to: "/forms/form-elements/button"
          },
          {
            title: "Checkbox",
            to: "/forms/form-elements/checkbox"
          },
          {
            title: "Custom Inputs",
            to: "/forms/form-elements/custominputs"
          },
          {
            title: "File Inputs",
            to: "/forms/form-elements/fileinputs"
          },
          {
            title: "Radio",
            to: "/forms/form-elements/radio"
          },
          {
            title: "Date Time",
            to: "/forms/form-elements/date-time"
          },
          {
            title: "Select",
            to: "/forms/form-elements/select"
          },
          {
            title: "Slider",
            to: "/forms/form-elements/slider"
          },
          {
            title: "Switch",
            to: "/forms/form-elements/switch"
          },
          {
            title: "Time Picker",
            to: "/forms/form-elements/timepicker"
          },
          {
            title: "Stepper",
            to: "/forms/form-elements/stepper"
          }
        ]
      },
      {
        title: "Form Layout",
        to: "/forms/form-layouts"
      },
      {
        title: "Form Horizontal",
        to: "/forms/form-horizontal"
      },
      {
        title: "Form Vertical",
        to: "/forms/form-vertical"
      },
      {
        title: "Form Custom",
        to: "/forms/form-custom"
      },
      {
        title: "Form Validation",
        to: "/forms/form-validation"
      }
    ]
  },
  {
    title: "Tables",
    icon: "layers-minimalistic-line-duotone",
    BgColor: "warning",
    to: "#",
    children: [
      {
        title: "Basic Table",
        to: "/tables/basic"
      },
      {
        title: "Dark Table",
        to: "/tables/dark"
      },
      {
        title: "Density Table",
        to: "/tables/density"
      },
      {
        title: "Fixed Header Table",
        to: "/tables/fixed-header"
      },
      {
        title: "Height Table",
        to: "/tables/height"
      },
      {
        title: "Editable Table",
        to: "/tables/editable"
      }
    ]
  },
  {
    title: "Data Tables",
    BgColor: "secondary",
    icon: "database-outline",
    to: "#",
    children: [
      {
        title: "Basic Table",
        to: "/datatables/basic"
      },
      {
        title: "Header Table",
        to: "/datatables/header"
      },
      {
        title: "Selection Table",
        to: "/datatables/selection"
      },
      {
        title: "Sorting Table",
        to: "/datatables/sorting"
      },
      {
        title: "Pagination Table",
        to: "/datatables/pagination"
      },
      {
        title: "Filtering Table",
        to: "/datatables/filtering"
      },
      {
        title: "Grouping Table",
        to: "/datatables/grouping"
      },
      {
        title: "Table Slots",
        to: "/datatables/slots"
      },
      {
        title: "CRUD Table",
        to: "/datatables/crudtable"
      }
    ]
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const customizer = useCustomizerStore();
    const sidebarMenu = shallowRef(horizontalItems);
    const { mdAndUp } = useDisplay();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LcFullHorizontalSidebarNavCollapse = _sfc_main$2;
      const _component_LcFullHorizontalSidebarNavItem = _sfc_main$3;
      const _component_LcFullVerticalSidebar = _sfc_main$b;
      if (unref(mdAndUp)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "horizontalMenu bg-surface position-relative" }, _attrs))}><div class="${ssrRenderClass(unref(customizer).boxed ? "maxWidth" : "px-6")}"><ul class="gap-1 horizontal-navbar mx-lg-0 mx-3"><!--[-->`);
        ssrRenderList(sidebarMenu.value, (item, i) => {
          _push(`<li class="navItem">`);
          if (item.children) {
            _push(ssrRenderComponent(_component_LcFullHorizontalSidebarNavCollapse, {
              item,
              level: 0
            }, null, _parent));
          } else {
            _push(ssrRenderComponent(_component_LcFullHorizontalSidebarNavItem, { item }, null, _parent));
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "mobile-menu" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_LcFullVerticalSidebar, null, null, _parent));
        _push(`</div>`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/horizontal-sidebar/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const customizer = useCustomizerStore();
    const title = ref("Spikeadmin - Nuxt3 Typescript based Admin Dashboard Template");
    useHead({
      meta: [{ content: title }],
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Nuxt3 Typescript based Admin Dashboard Template` : "Spikeadmin - Nuxt3 Typescript based Admin Dashboard Template";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_locale_provider = resolveComponent("v-locale-provider");
      const _component_v_app = resolveComponent("v-app");
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      const _component_LcFullCustomizer = _sfc_main$h;
      const _component_LcFullVerticalSidebar = _sfc_main$b;
      const _component_LcFullVerticalHeader = _sfc_main$5;
      const _component_LcFullHorizontalHeader = _sfc_main$4;
      const _component_LcFullHorizontalSidebar = _sfc_main$1;
      const _component_v_main = resolveComponent("v-main");
      const _component_v_container = resolveComponent("v-container");
      const _component_NuxtPage = __nuxt_component_6;
      const _component_v_btn = resolveComponent("v-btn");
      const _component_SettingsIcon = resolveComponent("SettingsIcon");
      if (unref(customizer).setRTLLayout) {
        _push(ssrRenderComponent(_component_v_locale_provider, mergeProps({ rtl: "" }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_app, {
                theme: unref(customizer).actTheme,
                class: [
                  unref(customizer).actTheme,
                  unref(customizer).mini_sidebar ? "mini-sidebar" : "",
                  unref(customizer).setHorizontalLayout ? "horizontalLayout" : "verticalLayout",
                  unref(customizer).setBorderCard ? "cardBordered" : ""
                ]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_main, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="rtl-lyt mb-3 hr-layout"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_container, {
                            fluid: "",
                            class: "page-wrapper bg-background px-sm-5 px-4 pt-12 rounded-xl"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class=""${_scopeId4}><div class="${ssrRenderClass(unref(customizer).boxed ? "maxWidth" : "")}"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_NuxtPage, null, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  class: "customizer-btn",
                                  size: "large",
                                  icon: "",
                                  variant: "flat",
                                  color: "primary",
                                  onClick: ($event) => unref(customizer).SET_CUSTOMIZER_DRAWER(!unref(customizer).Customizer_drawer)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_SettingsIcon, null, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_SettingsIcon)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "" }, [
                                    createVNode("div", {
                                      class: unref(customizer).boxed ? "maxWidth" : ""
                                    }, [
                                      createVNode(_component_NuxtPage),
                                      createVNode(_component_v_btn, {
                                        class: "customizer-btn",
                                        size: "large",
                                        icon: "",
                                        variant: "flat",
                                        color: "primary",
                                        onClick: withModifiers(($event) => unref(customizer).SET_CUSTOMIZER_DRAWER(!unref(customizer).Customizer_drawer), ["stop"])
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_SettingsIcon)
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ], 2)
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "rtl-lyt mb-3 hr-layout" }, [
                              createVNode(_component_v_container, {
                                fluid: "",
                                class: "page-wrapper bg-background px-sm-5 px-4 pt-12 rounded-xl"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "" }, [
                                    createVNode("div", {
                                      class: unref(customizer).boxed ? "maxWidth" : ""
                                    }, [
                                      createVNode(_component_NuxtPage),
                                      createVNode(_component_v_btn, {
                                        class: "customizer-btn",
                                        size: "large",
                                        icon: "",
                                        variant: "flat",
                                        color: "primary",
                                        onClick: withModifiers(($event) => unref(customizer).SET_CUSTOMIZER_DRAWER(!unref(customizer).Customizer_drawer), ["stop"])
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_SettingsIcon)
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ], 2)
                                  ])
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
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_navigation_drawer, {
                            app: "",
                            temporary: "",
                            elevation: "10",
                            location: "left",
                            modelValue: unref(customizer).Customizer_drawer,
                            "onUpdate:modelValue": ($event) => unref(customizer).Customizer_drawer = $event,
                            width: "320",
                            class: "left-customizer"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_LcFullCustomizer)
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          !unref(customizer).setHorizontalLayout ? (openBlock(), createBlock(_component_LcFullVerticalSidebar, { key: 0 })) : createCommentVNode("", true),
                          createVNode("div", {
                            class: unref(customizer).boxed ? "maxWidth" : "full-header"
                          }, [
                            !unref(customizer).setHorizontalLayout ? (openBlock(), createBlock(_component_LcFullVerticalHeader, { key: 0 })) : createCommentVNode("", true)
                          ], 2),
                          createVNode("div", {
                            class: unref(customizer).boxed ? "maxWidth" : "full-header"
                          }, [
                            unref(customizer).setHorizontalLayout ? (openBlock(), createBlock(_component_LcFullHorizontalHeader, { key: 0 })) : createCommentVNode("", true)
                          ], 2),
                          unref(customizer).setHorizontalLayout ? (openBlock(), createBlock(_component_LcFullHorizontalSidebar, { key: 1 })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_main, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "rtl-lyt mb-3 hr-layout" }, [
                            createVNode(_component_v_container, {
                              fluid: "",
                              class: "page-wrapper bg-background px-sm-5 px-4 pt-12 rounded-xl"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "" }, [
                                  createVNode("div", {
                                    class: unref(customizer).boxed ? "maxWidth" : ""
                                  }, [
                                    createVNode(_component_NuxtPage),
                                    createVNode(_component_v_btn, {
                                      class: "customizer-btn",
                                      size: "large",
                                      icon: "",
                                      variant: "flat",
                                      color: "primary",
                                      onClick: withModifiers(($event) => unref(customizer).SET_CUSTOMIZER_DRAWER(!unref(customizer).Customizer_drawer), ["stop"])
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_SettingsIcon)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ], 2)
                                ])
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
                createVNode(_component_v_app, {
                  theme: unref(customizer).actTheme,
                  class: [
                    unref(customizer).actTheme,
                    unref(customizer).mini_sidebar ? "mini-sidebar" : "",
                    unref(customizer).setHorizontalLayout ? "horizontalLayout" : "verticalLayout",
                    unref(customizer).setBorderCard ? "cardBordered" : ""
                  ]
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_navigation_drawer, {
                          app: "",
                          temporary: "",
                          elevation: "10",
                          location: "left",
                          modelValue: unref(customizer).Customizer_drawer,
                          "onUpdate:modelValue": ($event) => unref(customizer).Customizer_drawer = $event,
                          width: "320",
                          class: "left-customizer"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_LcFullCustomizer)
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        !unref(customizer).setHorizontalLayout ? (openBlock(), createBlock(_component_LcFullVerticalSidebar, { key: 0 })) : createCommentVNode("", true),
                        createVNode("div", {
                          class: unref(customizer).boxed ? "maxWidth" : "full-header"
                        }, [
                          !unref(customizer).setHorizontalLayout ? (openBlock(), createBlock(_component_LcFullVerticalHeader, { key: 0 })) : createCommentVNode("", true)
                        ], 2),
                        createVNode("div", {
                          class: unref(customizer).boxed ? "maxWidth" : "full-header"
                        }, [
                          unref(customizer).setHorizontalLayout ? (openBlock(), createBlock(_component_LcFullHorizontalHeader, { key: 0 })) : createCommentVNode("", true)
                        ], 2),
                        unref(customizer).setHorizontalLayout ? (openBlock(), createBlock(_component_LcFullHorizontalSidebar, { key: 1 })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_main, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "rtl-lyt mb-3 hr-layout" }, [
                          createVNode(_component_v_container, {
                            fluid: "",
                            class: "page-wrapper bg-background px-sm-5 px-4 pt-12 rounded-xl"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "" }, [
                                createVNode("div", {
                                  class: unref(customizer).boxed ? "maxWidth" : ""
                                }, [
                                  createVNode(_component_NuxtPage),
                                  createVNode(_component_v_btn, {
                                    class: "customizer-btn",
                                    size: "large",
                                    icon: "",
                                    variant: "flat",
                                    color: "primary",
                                    onClick: withModifiers(($event) => unref(customizer).SET_CUSTOMIZER_DRAWER(!unref(customizer).Customizer_drawer), ["stop"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_SettingsIcon)
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ], 2)
                              ])
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["theme", "class"])
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
                theme: unref(customizer).actTheme,
                class: [
                  unref(customizer).actTheme,
                  unref(customizer).mini_sidebar ? "mini-sidebar" : "",
                  unref(customizer).setHorizontalLayout ? "horizontalLayout" : "verticalLayout",
                  unref(customizer).setBorderCard ? "cardBordered" : ""
                ]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_main, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="mb-3 hr-layout"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_container, {
                            fluid: "",
                            class: "page-wrapper bg-background px-sm-5 px-4 pt-12 rounded-xl"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class=""${_scopeId4}><div class="${ssrRenderClass(unref(customizer).boxed ? "maxWidth" : "")}"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_NuxtPage, null, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  class: "customizer-btn",
                                  size: "large",
                                  icon: "",
                                  variant: "flat",
                                  color: "primary",
                                  onClick: ($event) => unref(customizer).SET_CUSTOMIZER_DRAWER(!unref(customizer).Customizer_drawer)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_SettingsIcon, null, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_SettingsIcon)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "" }, [
                                    createVNode("div", {
                                      class: unref(customizer).boxed ? "maxWidth" : ""
                                    }, [
                                      createVNode(_component_NuxtPage),
                                      createVNode(_component_v_btn, {
                                        class: "customizer-btn",
                                        size: "large",
                                        icon: "",
                                        variant: "flat",
                                        color: "primary",
                                        onClick: withModifiers(($event) => unref(customizer).SET_CUSTOMIZER_DRAWER(!unref(customizer).Customizer_drawer), ["stop"])
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_SettingsIcon)
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ], 2)
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "mb-3 hr-layout" }, [
                              createVNode(_component_v_container, {
                                fluid: "",
                                class: "page-wrapper bg-background px-sm-5 px-4 pt-12 rounded-xl"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "" }, [
                                    createVNode("div", {
                                      class: unref(customizer).boxed ? "maxWidth" : ""
                                    }, [
                                      createVNode(_component_NuxtPage),
                                      createVNode(_component_v_btn, {
                                        class: "customizer-btn",
                                        size: "large",
                                        icon: "",
                                        variant: "flat",
                                        color: "primary",
                                        onClick: withModifiers(($event) => unref(customizer).SET_CUSTOMIZER_DRAWER(!unref(customizer).Customizer_drawer), ["stop"])
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_SettingsIcon)
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ], 2)
                                  ])
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
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_navigation_drawer, {
                            app: "",
                            temporary: "",
                            elevation: "10",
                            location: "right",
                            modelValue: unref(customizer).Customizer_drawer,
                            "onUpdate:modelValue": ($event) => unref(customizer).Customizer_drawer = $event,
                            width: "320"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_LcFullCustomizer)
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          !unref(customizer).setHorizontalLayout ? (openBlock(), createBlock(_component_LcFullVerticalSidebar, { key: 0 })) : createCommentVNode("", true),
                          createVNode("div", {
                            class: unref(customizer).boxed ? "maxWidth" : "full-header"
                          }, [
                            !unref(customizer).setHorizontalLayout ? (openBlock(), createBlock(_component_LcFullVerticalHeader, { key: 0 })) : createCommentVNode("", true)
                          ], 2),
                          createVNode("div", {
                            class: unref(customizer).boxed ? "maxWidth" : "full-header"
                          }, [
                            unref(customizer).setHorizontalLayout ? (openBlock(), createBlock(_component_LcFullHorizontalHeader, { key: 0 })) : createCommentVNode("", true)
                          ], 2),
                          unref(customizer).setHorizontalLayout ? (openBlock(), createBlock(_component_LcFullHorizontalSidebar, { key: 1 })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_main, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mb-3 hr-layout" }, [
                            createVNode(_component_v_container, {
                              fluid: "",
                              class: "page-wrapper bg-background px-sm-5 px-4 pt-12 rounded-xl"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "" }, [
                                  createVNode("div", {
                                    class: unref(customizer).boxed ? "maxWidth" : ""
                                  }, [
                                    createVNode(_component_NuxtPage),
                                    createVNode(_component_v_btn, {
                                      class: "customizer-btn",
                                      size: "large",
                                      icon: "",
                                      variant: "flat",
                                      color: "primary",
                                      onClick: withModifiers(($event) => unref(customizer).SET_CUSTOMIZER_DRAWER(!unref(customizer).Customizer_drawer), ["stop"])
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_SettingsIcon)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ], 2)
                                ])
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
                createVNode(_component_v_app, {
                  theme: unref(customizer).actTheme,
                  class: [
                    unref(customizer).actTheme,
                    unref(customizer).mini_sidebar ? "mini-sidebar" : "",
                    unref(customizer).setHorizontalLayout ? "horizontalLayout" : "verticalLayout",
                    unref(customizer).setBorderCard ? "cardBordered" : ""
                  ]
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_navigation_drawer, {
                          app: "",
                          temporary: "",
                          elevation: "10",
                          location: "right",
                          modelValue: unref(customizer).Customizer_drawer,
                          "onUpdate:modelValue": ($event) => unref(customizer).Customizer_drawer = $event,
                          width: "320"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_LcFullCustomizer)
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        !unref(customizer).setHorizontalLayout ? (openBlock(), createBlock(_component_LcFullVerticalSidebar, { key: 0 })) : createCommentVNode("", true),
                        createVNode("div", {
                          class: unref(customizer).boxed ? "maxWidth" : "full-header"
                        }, [
                          !unref(customizer).setHorizontalLayout ? (openBlock(), createBlock(_component_LcFullVerticalHeader, { key: 0 })) : createCommentVNode("", true)
                        ], 2),
                        createVNode("div", {
                          class: unref(customizer).boxed ? "maxWidth" : "full-header"
                        }, [
                          unref(customizer).setHorizontalLayout ? (openBlock(), createBlock(_component_LcFullHorizontalHeader, { key: 0 })) : createCommentVNode("", true)
                        ], 2),
                        unref(customizer).setHorizontalLayout ? (openBlock(), createBlock(_component_LcFullHorizontalSidebar, { key: 1 })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_main, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-3 hr-layout" }, [
                          createVNode(_component_v_container, {
                            fluid: "",
                            class: "page-wrapper bg-background px-sm-5 px-4 pt-12 rounded-xl"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "" }, [
                                createVNode("div", {
                                  class: unref(customizer).boxed ? "maxWidth" : ""
                                }, [
                                  createVNode(_component_NuxtPage),
                                  createVNode(_component_v_btn, {
                                    class: "customizer-btn",
                                    size: "large",
                                    icon: "",
                                    variant: "flat",
                                    color: "primary",
                                    onClick: withModifiers(($event) => unref(customizer).SET_CUSTOMIZER_DRAWER(!unref(customizer).Customizer_drawer), ["stop"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_SettingsIcon)
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ], 2)
                              ])
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["theme", "class"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-B7tP2pz_.js.map
