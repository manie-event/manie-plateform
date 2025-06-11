import { defineComponent, ref, resolveComponent, withCtx, createVNode, createTextVNode, unref, renderSlot, useSSRContext, computed, mergeProps, createBlock, openBlock, Fragment, renderList, createCommentVNode } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { g as useDisplay, _ as _export_sfc } from "../server.mjs";
import { P as ProductItemVue } from "./ProductItemOne-DBRBLEM8.js";
import { u as useEcomStore } from "./eCommerce-D0OnZgt2.js";
import { orderBy } from "lodash";
import { _ as _sfc_main$3, a as _sfc_main$4 } from "./ProductFilters-B1BPbBDv.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
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
import "vue-draggable-next";
import "vue3-easy-data-table";
import "vue-easy-lightbox";
import "vue-scrollto";
import "./virtual_public-BYsXtuI9.js";
import "./client-only-Bwxzq3Sq.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProductBaseCard",
  __ssrInlineRender: true,
  setup(__props) {
    const { lgAndUp } = useDisplay();
    const sDrawer = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_Menu2Icon = resolveComponent("Menu2Icon");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      const _component_perfect_scrollbar = resolveComponent("perfect-scrollbar");
      const _component_v_card_text = resolveComponent("v-card-text");
      _push(`<!--[--><div class="d-flex mainbox"><div class="shop-two w-100">`);
      _push(ssrRenderComponent(_component_v_btn, {
        block: "",
        onClick: ($event) => sDrawer.value = !sDrawer.value,
        variant: "text",
        class: "d-lg-none d-md-flex d-sm-flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Menu2Icon, {
              size: "20",
              class: "mr-2"
            }, null, _parent2, _scopeId));
            _push2(` Menu `);
          } else {
            return [
              createVNode(_component_Menu2Icon, {
                size: "20",
                class: "mr-2"
              }),
              createTextVNode(" Menu ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_divider, { class: "d-lg-none d-block" }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "rightpart", {}, null, _push, _parent);
      _push(`</div></div>`);
      if (!unref(lgAndUp)) {
        _push(ssrRenderComponent(_component_v_navigation_drawer, {
          temporary: "",
          modelValue: sDrawer.value,
          "onUpdate:modelValue": ($event) => sDrawer.value = $event,
          class: "app_drawer drawer-top-zero",
          width: "320",
          top: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_perfect_scrollbar, { class: "max-h-100" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_card_text, { class: "pa-0" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "mobileLeftContent", {}, null, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "mobileLeftContent")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_card_text, { class: "pa-0" }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "mobileLeftContent")
                        ]),
                        _: 3
                      })
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_perfect_scrollbar, { class: "max-h-100" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card_text, { class: "pa-0" }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "mobileLeftContent")
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                })
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/ProductBaseCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProductfilterOne",
  __ssrInlineRender: true,
  setup(__props) {
    ref([0, 1, 2, 3, 4]);
    const priceSort = [
      {
        label: "$10 - $50",
        price: "50"
      },
      {
        label: "$50 - $100",
        price: "100"
      },
      {
        label: "$100 - $150",
        price: "151"
      },
      {
        label: "$150 - $200",
        price: "200"
      },
      {
        label: "Over $200",
        price: "250"
      }
    ];
    const store = useEcomStore();
    store.filterReset();
    const selectedGender = ref("");
    store.SelectGender(selectedGender);
    const selectedCategory = ref("all");
    store.SelectCategory(selectedCategory);
    const selectPrice = ref("");
    store.SelectPrice(selectPrice);
    ref(1);
    ref(1);
    const getProducts = computed(() => {
      return store.products;
    });
    const getUniqueData = (data, attr) => {
      let newVal = data.map((curElem) => {
        return curElem[attr];
      });
      {
        newVal = newVal.flat();
      }
      return newVal = [...Array.from(new Set(newVal))];
    };
    const filterbyColors = computed(() => {
      return getUniqueData(getProducts.value, "colors");
    });
    function filterReset() {
      store.SelectGender("");
      store.SelectCategory("all");
      store.SelectPrice("");
      store.sortByColor("All");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VCard = resolveComponent("VCard");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_perfect_scrollbar = resolveComponent("perfect-scrollbar");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_radio_group = resolveComponent("v-radio-group");
      const _component_v_radio = resolveComponent("v-radio");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_CheckIcon = resolveComponent("CheckIcon");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_VCard, mergeProps({
        elevation: "10",
        class: "mb-4 topfilter d-lg-block d-none"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, { class: "py-4 px-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center justify-space-between"${_scopeId2}><div class="d-flex align-center"${_scopeId2}><p class="text-grey100 text-subtitle-1 font-weight-medium pr-4"${_scopeId2}>Filter by:</p>`);
                  _push3(ssrRenderComponent(_component_v_menu, {
                    "close-on-content-click": false,
                    class: "Category_popup",
                    transition: "scale-transition"
                  }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${ssrRenderAttrs(mergeProps({
                          icon: "",
                          class: "cursor-pointer",
                          flat: ""
                        }, props, { size: "small" }))}${_scopeId3}><div class="font-weight-semibold text-15 text-grey200 d-flex"${_scopeId3}> Category <span class="mdi mdi-menu-down" style="${ssrRenderStyle({ "font-size": "20px" })}"${_scopeId3}></span></div></div>`);
                      } else {
                        return [
                          createVNode("div", mergeProps({
                            icon: "",
                            class: "cursor-pointer",
                            flat: ""
                          }, props, { size: "small" }), [
                            createVNode("div", { class: "font-weight-semibold text-15 text-grey200 d-flex" }, [
                              createTextVNode(" Category "),
                              createVNode("span", {
                                class: "mdi mdi-menu-down",
                                style: { "font-size": "20px" }
                              })
                            ])
                          ], 16)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_sheet, {
                          rounded: "md",
                          width: "150",
                          elevation: "10",
                          class: "mt-5 dropdown-box"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_perfect_scrollbar, { style: { "height": "260px" } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list, {
                                      class: "py-0 theme-list",
                                      lines: "two"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_list_item, {
                                            color: "primary",
                                            class: "pa-3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_row, { "no-gutters": "" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_checkbox, {
                                                              label: "All",
                                                              density: "compact",
                                                              modelValue: selectedCategory.value,
                                                              "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                              color: "primary",
                                                              value: "all",
                                                              "hide-details": ""
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_checkbox, {
                                                                label: "All",
                                                                density: "compact",
                                                                modelValue: selectedCategory.value,
                                                                "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                                color: "primary",
                                                                value: "all",
                                                                "hide-details": ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_checkbox, {
                                                              label: "Kitchen",
                                                              density: "compact",
                                                              modelValue: selectedCategory.value,
                                                              "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                              color: "primary",
                                                              value: "kitchen",
                                                              "hide-details": ""
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_checkbox, {
                                                                label: "Kitchen",
                                                                density: "compact",
                                                                modelValue: selectedCategory.value,
                                                                "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                                color: "primary",
                                                                value: "kitchen",
                                                                "hide-details": ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_checkbox, {
                                                              label: "Electronics",
                                                              density: "compact",
                                                              modelValue: selectedCategory.value,
                                                              "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                              color: "primary",
                                                              value: "electronics",
                                                              "hide-details": ""
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_checkbox, {
                                                                label: "Electronics",
                                                                density: "compact",
                                                                modelValue: selectedCategory.value,
                                                                "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                                color: "primary",
                                                                value: "electronics",
                                                                "hide-details": ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_checkbox, {
                                                              label: "Books",
                                                              density: "compact",
                                                              modelValue: selectedCategory.value,
                                                              "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                              color: "primary",
                                                              value: "books",
                                                              "hide-details": ""
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_checkbox, {
                                                                label: "Books",
                                                                density: "compact",
                                                                modelValue: selectedCategory.value,
                                                                "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                                color: "primary",
                                                                value: "books",
                                                                "hide-details": ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_checkbox, {
                                                              label: "Fashion",
                                                              density: "compact",
                                                              modelValue: selectedCategory.value,
                                                              "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                              color: "primary",
                                                              value: "fashion",
                                                              "hide-details": ""
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_checkbox, {
                                                                label: "Fashion",
                                                                density: "compact",
                                                                modelValue: selectedCategory.value,
                                                                "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                                color: "primary",
                                                                value: "fashion",
                                                                "hide-details": ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_checkbox, {
                                                              label: "Toys",
                                                              density: "compact",
                                                              modelValue: selectedCategory.value,
                                                              "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                              color: "primary",
                                                              value: "toys",
                                                              "hide-details": ""
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_checkbox, {
                                                                label: "Toys",
                                                                density: "compact",
                                                                modelValue: selectedCategory.value,
                                                                "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                                color: "primary",
                                                                value: "toys",
                                                                "hide-details": ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_checkbox, {
                                                              label: "All",
                                                              density: "compact",
                                                              modelValue: selectedCategory.value,
                                                              "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                              color: "primary",
                                                              value: "all",
                                                              "hide-details": ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_checkbox, {
                                                              label: "Kitchen",
                                                              density: "compact",
                                                              modelValue: selectedCategory.value,
                                                              "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                              color: "primary",
                                                              value: "kitchen",
                                                              "hide-details": ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_checkbox, {
                                                              label: "Electronics",
                                                              density: "compact",
                                                              modelValue: selectedCategory.value,
                                                              "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                              color: "primary",
                                                              value: "electronics",
                                                              "hide-details": ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_checkbox, {
                                                              label: "Books",
                                                              density: "compact",
                                                              modelValue: selectedCategory.value,
                                                              "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                              color: "primary",
                                                              value: "books",
                                                              "hide-details": ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_checkbox, {
                                                              label: "Fashion",
                                                              density: "compact",
                                                              modelValue: selectedCategory.value,
                                                              "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                              color: "primary",
                                                              value: "fashion",
                                                              "hide-details": ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_checkbox, {
                                                              label: "Toys",
                                                              density: "compact",
                                                              modelValue: selectedCategory.value,
                                                              "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                              color: "primary",
                                                              value: "toys",
                                                              "hide-details": ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_row, { "no-gutters": "" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_checkbox, {
                                                            label: "All",
                                                            density: "compact",
                                                            modelValue: selectedCategory.value,
                                                            "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                            color: "primary",
                                                            value: "all",
                                                            "hide-details": ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_checkbox, {
                                                            label: "Kitchen",
                                                            density: "compact",
                                                            modelValue: selectedCategory.value,
                                                            "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                            color: "primary",
                                                            value: "kitchen",
                                                            "hide-details": ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_checkbox, {
                                                            label: "Electronics",
                                                            density: "compact",
                                                            modelValue: selectedCategory.value,
                                                            "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                            color: "primary",
                                                            value: "electronics",
                                                            "hide-details": ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_checkbox, {
                                                            label: "Books",
                                                            density: "compact",
                                                            modelValue: selectedCategory.value,
                                                            "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                            color: "primary",
                                                            value: "books",
                                                            "hide-details": ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_checkbox, {
                                                            label: "Fashion",
                                                            density: "compact",
                                                            modelValue: selectedCategory.value,
                                                            "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                            color: "primary",
                                                            value: "fashion",
                                                            "hide-details": ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_checkbox, {
                                                            label: "Toys",
                                                            density: "compact",
                                                            modelValue: selectedCategory.value,
                                                            "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                            color: "primary",
                                                            value: "toys",
                                                            "hide-details": ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_list_item, {
                                              color: "primary",
                                              class: "pa-3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, { "no-gutters": "" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_checkbox, {
                                                          label: "All",
                                                          density: "compact",
                                                          modelValue: selectedCategory.value,
                                                          "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                          color: "primary",
                                                          value: "all",
                                                          "hide-details": ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_checkbox, {
                                                          label: "Kitchen",
                                                          density: "compact",
                                                          modelValue: selectedCategory.value,
                                                          "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                          color: "primary",
                                                          value: "kitchen",
                                                          "hide-details": ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_checkbox, {
                                                          label: "Electronics",
                                                          density: "compact",
                                                          modelValue: selectedCategory.value,
                                                          "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                          color: "primary",
                                                          value: "electronics",
                                                          "hide-details": ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_checkbox, {
                                                          label: "Books",
                                                          density: "compact",
                                                          modelValue: selectedCategory.value,
                                                          "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                          color: "primary",
                                                          value: "books",
                                                          "hide-details": ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_checkbox, {
                                                          label: "Fashion",
                                                          density: "compact",
                                                          modelValue: selectedCategory.value,
                                                          "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                          color: "primary",
                                                          value: "fashion",
                                                          "hide-details": ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_checkbox, {
                                                          label: "Toys",
                                                          density: "compact",
                                                          modelValue: selectedCategory.value,
                                                          "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                          color: "primary",
                                                          value: "toys",
                                                          "hide-details": ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list, {
                                        class: "py-0 theme-list",
                                        lines: "two"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item, {
                                            color: "primary",
                                            class: "pa-3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_row, { "no-gutters": "" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_checkbox, {
                                                        label: "All",
                                                        density: "compact",
                                                        modelValue: selectedCategory.value,
                                                        "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                        color: "primary",
                                                        value: "all",
                                                        "hide-details": ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_checkbox, {
                                                        label: "Kitchen",
                                                        density: "compact",
                                                        modelValue: selectedCategory.value,
                                                        "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                        color: "primary",
                                                        value: "kitchen",
                                                        "hide-details": ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_checkbox, {
                                                        label: "Electronics",
                                                        density: "compact",
                                                        modelValue: selectedCategory.value,
                                                        "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                        color: "primary",
                                                        value: "electronics",
                                                        "hide-details": ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_checkbox, {
                                                        label: "Books",
                                                        density: "compact",
                                                        modelValue: selectedCategory.value,
                                                        "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                        color: "primary",
                                                        value: "books",
                                                        "hide-details": ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_checkbox, {
                                                        label: "Fashion",
                                                        density: "compact",
                                                        modelValue: selectedCategory.value,
                                                        "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                        color: "primary",
                                                        value: "fashion",
                                                        "hide-details": ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_checkbox, {
                                                        label: "Toys",
                                                        density: "compact",
                                                        modelValue: selectedCategory.value,
                                                        "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                        color: "primary",
                                                        value: "toys",
                                                        "hide-details": ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_perfect_scrollbar, { style: { "height": "260px" } }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list, {
                                      class: "py-0 theme-list",
                                      lines: "two"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item, {
                                          color: "primary",
                                          class: "pa-3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, { "no-gutters": "" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_checkbox, {
                                                      label: "All",
                                                      density: "compact",
                                                      modelValue: selectedCategory.value,
                                                      "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                      color: "primary",
                                                      value: "all",
                                                      "hide-details": ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_checkbox, {
                                                      label: "Kitchen",
                                                      density: "compact",
                                                      modelValue: selectedCategory.value,
                                                      "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                      color: "primary",
                                                      value: "kitchen",
                                                      "hide-details": ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_checkbox, {
                                                      label: "Electronics",
                                                      density: "compact",
                                                      modelValue: selectedCategory.value,
                                                      "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                      color: "primary",
                                                      value: "electronics",
                                                      "hide-details": ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_checkbox, {
                                                      label: "Books",
                                                      density: "compact",
                                                      modelValue: selectedCategory.value,
                                                      "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                      color: "primary",
                                                      value: "books",
                                                      "hide-details": ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_checkbox, {
                                                      label: "Fashion",
                                                      density: "compact",
                                                      modelValue: selectedCategory.value,
                                                      "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                      color: "primary",
                                                      value: "fashion",
                                                      "hide-details": ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_checkbox, {
                                                      label: "Toys",
                                                      density: "compact",
                                                      modelValue: selectedCategory.value,
                                                      "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                      color: "primary",
                                                      value: "toys",
                                                      "hide-details": ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                          createVNode(_component_v_sheet, {
                            rounded: "md",
                            width: "150",
                            elevation: "10",
                            class: "mt-5 dropdown-box"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_perfect_scrollbar, { style: { "height": "260px" } }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, {
                                    class: "py-0 theme-list",
                                    lines: "two"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, {
                                        color: "primary",
                                        class: "pa-3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, { "no-gutters": "" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "All",
                                                    density: "compact",
                                                    modelValue: selectedCategory.value,
                                                    "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                    color: "primary",
                                                    value: "all",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Kitchen",
                                                    density: "compact",
                                                    modelValue: selectedCategory.value,
                                                    "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                    color: "primary",
                                                    value: "kitchen",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Electronics",
                                                    density: "compact",
                                                    modelValue: selectedCategory.value,
                                                    "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                    color: "primary",
                                                    value: "electronics",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Books",
                                                    density: "compact",
                                                    modelValue: selectedCategory.value,
                                                    "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                    color: "primary",
                                                    value: "books",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Fashion",
                                                    density: "compact",
                                                    modelValue: selectedCategory.value,
                                                    "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                    color: "primary",
                                                    value: "fashion",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Toys",
                                                    density: "compact",
                                                    modelValue: selectedCategory.value,
                                                    "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                    color: "primary",
                                                    value: "toys",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  _push3(ssrRenderComponent(_component_v_divider, {
                    vertical: "",
                    class: "mx-5"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_menu, {
                    "close-on-content-click": false,
                    class: "Pricing_popup",
                    transition: "scale-transition"
                  }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${ssrRenderAttrs(mergeProps({
                          icon: "",
                          class: "cursor-pointer",
                          flat: ""
                        }, props, { size: "small" }))}${_scopeId3}><div class="font-weight-semibold text-15 text-grey200 d-flex"${_scopeId3}> Pricing <span class="mdi mdi-menu-down" style="${ssrRenderStyle({ "font-size": "20px" })}"${_scopeId3}></span></div></div>`);
                      } else {
                        return [
                          createVNode("div", mergeProps({
                            icon: "",
                            class: "cursor-pointer",
                            flat: ""
                          }, props, { size: "small" }), [
                            createVNode("div", { class: "font-weight-semibold text-15 text-grey200 d-flex" }, [
                              createTextVNode(" Pricing "),
                              createVNode("span", {
                                class: "mdi mdi-menu-down",
                                style: { "font-size": "20px" }
                              })
                            ])
                          ], 16)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_sheet, {
                          rounded: "md",
                          width: "180",
                          elevation: "10",
                          class: "mt-5 dropdown-box"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_perfect_scrollbar, { style: { "max-height": "250px" } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list, {
                                      class: "py-0 theme-list",
                                      lines: "two"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_list_item, {
                                            color: "primary",
                                            class: "pa-3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_radio_group, {
                                                  modelValue: selectPrice.value,
                                                  "onUpdate:modelValue": ($event) => selectPrice.value = $event,
                                                  class: "custom-radio-box"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<!--[-->`);
                                                      ssrRenderList(priceSort, (pricing) => {
                                                        _push9(ssrRenderComponent(_component_v_radio, {
                                                          key: pricing.label,
                                                          label: pricing.label,
                                                          modelValue: selectPrice.value,
                                                          "onUpdate:modelValue": ($event) => selectPrice.value = $event,
                                                          color: "primary",
                                                          value: pricing.price,
                                                          "hide-details": ""
                                                        }, null, _parent9, _scopeId8));
                                                      });
                                                      _push9(`<!--]-->`);
                                                    } else {
                                                      return [
                                                        (openBlock(), createBlock(Fragment, null, renderList(priceSort, (pricing) => {
                                                          return createVNode(_component_v_radio, {
                                                            key: pricing.label,
                                                            label: pricing.label,
                                                            modelValue: selectPrice.value,
                                                            "onUpdate:modelValue": ($event) => selectPrice.value = $event,
                                                            color: "primary",
                                                            value: pricing.price,
                                                            "hide-details": ""
                                                          }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "value"]);
                                                        }), 64))
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_radio_group, {
                                                    modelValue: selectPrice.value,
                                                    "onUpdate:modelValue": ($event) => selectPrice.value = $event,
                                                    class: "custom-radio-box"
                                                  }, {
                                                    default: withCtx(() => [
                                                      (openBlock(), createBlock(Fragment, null, renderList(priceSort, (pricing) => {
                                                        return createVNode(_component_v_radio, {
                                                          key: pricing.label,
                                                          label: pricing.label,
                                                          modelValue: selectPrice.value,
                                                          "onUpdate:modelValue": ($event) => selectPrice.value = $event,
                                                          color: "primary",
                                                          value: pricing.price,
                                                          "hide-details": ""
                                                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "value"]);
                                                      }), 64))
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_list_item, {
                                              color: "primary",
                                              class: "pa-3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_radio_group, {
                                                  modelValue: selectPrice.value,
                                                  "onUpdate:modelValue": ($event) => selectPrice.value = $event,
                                                  class: "custom-radio-box"
                                                }, {
                                                  default: withCtx(() => [
                                                    (openBlock(), createBlock(Fragment, null, renderList(priceSort, (pricing) => {
                                                      return createVNode(_component_v_radio, {
                                                        key: pricing.label,
                                                        label: pricing.label,
                                                        modelValue: selectPrice.value,
                                                        "onUpdate:modelValue": ($event) => selectPrice.value = $event,
                                                        color: "primary",
                                                        value: pricing.price,
                                                        "hide-details": ""
                                                      }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "value"]);
                                                    }), 64))
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list, {
                                        class: "py-0 theme-list",
                                        lines: "two"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item, {
                                            color: "primary",
                                            class: "pa-3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_radio_group, {
                                                modelValue: selectPrice.value,
                                                "onUpdate:modelValue": ($event) => selectPrice.value = $event,
                                                class: "custom-radio-box"
                                              }, {
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock(Fragment, null, renderList(priceSort, (pricing) => {
                                                    return createVNode(_component_v_radio, {
                                                      key: pricing.label,
                                                      label: pricing.label,
                                                      modelValue: selectPrice.value,
                                                      "onUpdate:modelValue": ($event) => selectPrice.value = $event,
                                                      color: "primary",
                                                      value: pricing.price,
                                                      "hide-details": ""
                                                    }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "value"]);
                                                  }), 64))
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_perfect_scrollbar, { style: { "max-height": "250px" } }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list, {
                                      class: "py-0 theme-list",
                                      lines: "two"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item, {
                                          color: "primary",
                                          class: "pa-3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_radio_group, {
                                              modelValue: selectPrice.value,
                                              "onUpdate:modelValue": ($event) => selectPrice.value = $event,
                                              class: "custom-radio-box"
                                            }, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(Fragment, null, renderList(priceSort, (pricing) => {
                                                  return createVNode(_component_v_radio, {
                                                    key: pricing.label,
                                                    label: pricing.label,
                                                    modelValue: selectPrice.value,
                                                    "onUpdate:modelValue": ($event) => selectPrice.value = $event,
                                                    color: "primary",
                                                    value: pricing.price,
                                                    "hide-details": ""
                                                  }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "value"]);
                                                }), 64))
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_sheet, {
                            rounded: "md",
                            width: "180",
                            elevation: "10",
                            class: "mt-5 dropdown-box"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_perfect_scrollbar, { style: { "max-height": "250px" } }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, {
                                    class: "py-0 theme-list",
                                    lines: "two"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, {
                                        color: "primary",
                                        class: "pa-3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_radio_group, {
                                            modelValue: selectPrice.value,
                                            "onUpdate:modelValue": ($event) => selectPrice.value = $event,
                                            class: "custom-radio-box"
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(Fragment, null, renderList(priceSort, (pricing) => {
                                                return createVNode(_component_v_radio, {
                                                  key: pricing.label,
                                                  label: pricing.label,
                                                  modelValue: selectPrice.value,
                                                  "onUpdate:modelValue": ($event) => selectPrice.value = $event,
                                                  color: "primary",
                                                  value: pricing.price,
                                                  "hide-details": ""
                                                }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "value"]);
                                              }), 64))
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_divider, {
                    vertical: "",
                    class: "mx-5"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_menu, {
                    "close-on-content-click": false,
                    class: "Gender_popup",
                    transition: "scale-transition"
                  }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${ssrRenderAttrs(mergeProps({
                          icon: "",
                          class: "cursor-pointer",
                          flat: ""
                        }, props, { size: "small" }))}${_scopeId3}><div class="font-weight-semibold text-15 text-grey200 d-flex"${_scopeId3}> Gender <span class="mdi mdi-menu-down" style="${ssrRenderStyle({ "font-size": "20px" })}"${_scopeId3}></span></div></div>`);
                      } else {
                        return [
                          createVNode("div", mergeProps({
                            icon: "",
                            class: "cursor-pointer",
                            flat: ""
                          }, props, { size: "small" }), [
                            createVNode("div", { class: "font-weight-semibold text-15 text-grey200 d-flex" }, [
                              createTextVNode(" Gender "),
                              createVNode("span", {
                                class: "mdi mdi-menu-down",
                                style: { "font-size": "20px" }
                              })
                            ])
                          ], 16)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_sheet, {
                          rounded: "md",
                          width: "150",
                          elevation: "10",
                          class: "mt-5 dropdown-box"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_perfect_scrollbar, { style: { "max-height": "200px" } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list, {
                                      class: "py-0 theme-list",
                                      lines: "two"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_list_item, {
                                            color: "primary",
                                            class: "pa-3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_row, { "no-gutters": "" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_checkbox, {
                                                              label: "Male",
                                                              density: "compact",
                                                              modelValue: selectedGender.value,
                                                              "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                              color: "primary",
                                                              value: "male",
                                                              "hide-details": ""
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_checkbox, {
                                                                label: "Male",
                                                                density: "compact",
                                                                modelValue: selectedGender.value,
                                                                "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                                color: "primary",
                                                                value: "male",
                                                                "hide-details": ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_checkbox, {
                                                              label: "Female",
                                                              density: "compact",
                                                              modelValue: selectedGender.value,
                                                              "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                              color: "secondary",
                                                              value: "female",
                                                              "hide-details": ""
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_checkbox, {
                                                                label: "Female",
                                                                density: "compact",
                                                                modelValue: selectedGender.value,
                                                                "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                                color: "secondary",
                                                                value: "female",
                                                                "hide-details": ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_checkbox, {
                                                              label: "Kids",
                                                              density: "compact",
                                                              modelValue: selectedGender.value,
                                                              "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                              color: "error",
                                                              value: "kids",
                                                              "hide-details": ""
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_checkbox, {
                                                                label: "Kids",
                                                                density: "compact",
                                                                modelValue: selectedGender.value,
                                                                "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                                color: "error",
                                                                value: "kids",
                                                                "hide-details": ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_checkbox, {
                                                              label: "Male",
                                                              density: "compact",
                                                              modelValue: selectedGender.value,
                                                              "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                              color: "primary",
                                                              value: "male",
                                                              "hide-details": ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_checkbox, {
                                                              label: "Female",
                                                              density: "compact",
                                                              modelValue: selectedGender.value,
                                                              "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                              color: "secondary",
                                                              value: "female",
                                                              "hide-details": ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_checkbox, {
                                                              label: "Kids",
                                                              density: "compact",
                                                              modelValue: selectedGender.value,
                                                              "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                              color: "error",
                                                              value: "kids",
                                                              "hide-details": ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_row, { "no-gutters": "" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_checkbox, {
                                                            label: "Male",
                                                            density: "compact",
                                                            modelValue: selectedGender.value,
                                                            "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                            color: "primary",
                                                            value: "male",
                                                            "hide-details": ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_checkbox, {
                                                            label: "Female",
                                                            density: "compact",
                                                            modelValue: selectedGender.value,
                                                            "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                            color: "secondary",
                                                            value: "female",
                                                            "hide-details": ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_checkbox, {
                                                            label: "Kids",
                                                            density: "compact",
                                                            modelValue: selectedGender.value,
                                                            "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                            color: "error",
                                                            value: "kids",
                                                            "hide-details": ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_list_item, {
                                              color: "primary",
                                              class: "pa-3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, { "no-gutters": "" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_checkbox, {
                                                          label: "Male",
                                                          density: "compact",
                                                          modelValue: selectedGender.value,
                                                          "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                          color: "primary",
                                                          value: "male",
                                                          "hide-details": ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_checkbox, {
                                                          label: "Female",
                                                          density: "compact",
                                                          modelValue: selectedGender.value,
                                                          "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                          color: "secondary",
                                                          value: "female",
                                                          "hide-details": ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_checkbox, {
                                                          label: "Kids",
                                                          density: "compact",
                                                          modelValue: selectedGender.value,
                                                          "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                          color: "error",
                                                          value: "kids",
                                                          "hide-details": ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list, {
                                        class: "py-0 theme-list",
                                        lines: "two"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item, {
                                            color: "primary",
                                            class: "pa-3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_row, { "no-gutters": "" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_checkbox, {
                                                        label: "Male",
                                                        density: "compact",
                                                        modelValue: selectedGender.value,
                                                        "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                        color: "primary",
                                                        value: "male",
                                                        "hide-details": ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_checkbox, {
                                                        label: "Female",
                                                        density: "compact",
                                                        modelValue: selectedGender.value,
                                                        "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                        color: "secondary",
                                                        value: "female",
                                                        "hide-details": ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_checkbox, {
                                                        label: "Kids",
                                                        density: "compact",
                                                        modelValue: selectedGender.value,
                                                        "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                        color: "error",
                                                        value: "kids",
                                                        "hide-details": ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_perfect_scrollbar, { style: { "max-height": "200px" } }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list, {
                                      class: "py-0 theme-list",
                                      lines: "two"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item, {
                                          color: "primary",
                                          class: "pa-3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, { "no-gutters": "" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_checkbox, {
                                                      label: "Male",
                                                      density: "compact",
                                                      modelValue: selectedGender.value,
                                                      "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                      color: "primary",
                                                      value: "male",
                                                      "hide-details": ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_checkbox, {
                                                      label: "Female",
                                                      density: "compact",
                                                      modelValue: selectedGender.value,
                                                      "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                      color: "secondary",
                                                      value: "female",
                                                      "hide-details": ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_checkbox, {
                                                      label: "Kids",
                                                      density: "compact",
                                                      modelValue: selectedGender.value,
                                                      "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                      color: "error",
                                                      value: "kids",
                                                      "hide-details": ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                          createVNode(_component_v_sheet, {
                            rounded: "md",
                            width: "150",
                            elevation: "10",
                            class: "mt-5 dropdown-box"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_perfect_scrollbar, { style: { "max-height": "200px" } }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, {
                                    class: "py-0 theme-list",
                                    lines: "two"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, {
                                        color: "primary",
                                        class: "pa-3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, { "no-gutters": "" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Male",
                                                    density: "compact",
                                                    modelValue: selectedGender.value,
                                                    "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                    color: "primary",
                                                    value: "male",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Female",
                                                    density: "compact",
                                                    modelValue: selectedGender.value,
                                                    "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                    color: "secondary",
                                                    value: "female",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Kids",
                                                    density: "compact",
                                                    modelValue: selectedGender.value,
                                                    "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                    color: "error",
                                                    value: "kids",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  _push3(ssrRenderComponent(_component_v_divider, {
                    vertical: "",
                    class: "mx-5"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_menu, {
                    "close-on-content-click": false,
                    class: "Color_popup",
                    transition: "scale-transition"
                  }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${ssrRenderAttrs(mergeProps({
                          icon: "",
                          class: "cursor-pointer",
                          flat: ""
                        }, props, { size: "small" }))}${_scopeId3}><div class="font-weight-semibold text-15 text-grey200 d-flex"${_scopeId3}> Color <span class="mdi mdi-menu-down" style="${ssrRenderStyle({ "font-size": "20px" })}"${_scopeId3}></span></div></div>`);
                      } else {
                        return [
                          createVNode("div", mergeProps({
                            icon: "",
                            class: "cursor-pointer",
                            flat: ""
                          }, props, { size: "small" }), [
                            createVNode("div", { class: "font-weight-semibold text-15 text-grey200 d-flex" }, [
                              createTextVNode(" Color "),
                              createVNode("span", {
                                class: "mdi mdi-menu-down",
                                style: { "font-size": "20px" }
                              })
                            ])
                          ], 16)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_sheet, {
                          rounded: "md",
                          width: "200",
                          elevation: "10",
                          class: "mt-5 dropdown-box"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_perfect_scrollbar, { style: { "max-height": "200px" } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list, {
                                      class: "py-0 theme-list",
                                      lines: "two"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_list_item, {
                                            color: "primary",
                                            class: "pa-3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="d-flex gap-2 flex-wrap v-col-11 px-0"${_scopeId7}>`);
                                                if (filterbyColors.value.length > 0) {
                                                  _push8(`<!--[-->`);
                                                  ssrRenderList(filterbyColors.value, (catcolor, i) => {
                                                    _push8(ssrRenderComponent(_component_v_avatar, {
                                                      class: "cursor-pointer",
                                                      color: catcolor,
                                                      variant: "flat",
                                                      size: "30",
                                                      onClick: ($event) => unref(store).sortByColor(catcolor)
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          if (unref(store).color === catcolor) {
                                                            _push9(ssrRenderComponent(_component_CheckIcon, { size: "13" }, null, _parent9, _scopeId8));
                                                          } else {
                                                            _push9(`<!---->`);
                                                          }
                                                        } else {
                                                          return [
                                                            unref(store).color === catcolor ? (openBlock(), createBlock(_component_CheckIcon, {
                                                              key: 0,
                                                              size: "13"
                                                            })) : createCommentVNode("", true)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  });
                                                  _push8(`<!--]-->`);
                                                } else {
                                                  _push8(`<!---->`);
                                                }
                                                _push8(`</div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "d-flex gap-2 flex-wrap v-col-11 px-0" }, [
                                                    filterbyColors.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(filterbyColors.value, (catcolor, i) => {
                                                      return openBlock(), createBlock(_component_v_avatar, {
                                                        key: i,
                                                        class: "cursor-pointer",
                                                        color: catcolor,
                                                        variant: "flat",
                                                        size: "30",
                                                        onClick: ($event) => unref(store).sortByColor(catcolor)
                                                      }, {
                                                        default: withCtx(() => [
                                                          unref(store).color === catcolor ? (openBlock(), createBlock(_component_CheckIcon, {
                                                            key: 0,
                                                            size: "13"
                                                          })) : createCommentVNode("", true)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["color", "onClick"]);
                                                    }), 128)) : createCommentVNode("", true)
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_list_item, {
                                              color: "primary",
                                              class: "pa-3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex gap-2 flex-wrap v-col-11 px-0" }, [
                                                  filterbyColors.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(filterbyColors.value, (catcolor, i) => {
                                                    return openBlock(), createBlock(_component_v_avatar, {
                                                      key: i,
                                                      class: "cursor-pointer",
                                                      color: catcolor,
                                                      variant: "flat",
                                                      size: "30",
                                                      onClick: ($event) => unref(store).sortByColor(catcolor)
                                                    }, {
                                                      default: withCtx(() => [
                                                        unref(store).color === catcolor ? (openBlock(), createBlock(_component_CheckIcon, {
                                                          key: 0,
                                                          size: "13"
                                                        })) : createCommentVNode("", true)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["color", "onClick"]);
                                                  }), 128)) : createCommentVNode("", true)
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list, {
                                        class: "py-0 theme-list",
                                        lines: "two"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item, {
                                            color: "primary",
                                            class: "pa-3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex gap-2 flex-wrap v-col-11 px-0" }, [
                                                filterbyColors.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(filterbyColors.value, (catcolor, i) => {
                                                  return openBlock(), createBlock(_component_v_avatar, {
                                                    key: i,
                                                    class: "cursor-pointer",
                                                    color: catcolor,
                                                    variant: "flat",
                                                    size: "30",
                                                    onClick: ($event) => unref(store).sortByColor(catcolor)
                                                  }, {
                                                    default: withCtx(() => [
                                                      unref(store).color === catcolor ? (openBlock(), createBlock(_component_CheckIcon, {
                                                        key: 0,
                                                        size: "13"
                                                      })) : createCommentVNode("", true)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color", "onClick"]);
                                                }), 128)) : createCommentVNode("", true)
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_perfect_scrollbar, { style: { "max-height": "200px" } }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list, {
                                      class: "py-0 theme-list",
                                      lines: "two"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item, {
                                          color: "primary",
                                          class: "pa-3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex gap-2 flex-wrap v-col-11 px-0" }, [
                                              filterbyColors.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(filterbyColors.value, (catcolor, i) => {
                                                return openBlock(), createBlock(_component_v_avatar, {
                                                  key: i,
                                                  class: "cursor-pointer",
                                                  color: catcolor,
                                                  variant: "flat",
                                                  size: "30",
                                                  onClick: ($event) => unref(store).sortByColor(catcolor)
                                                }, {
                                                  default: withCtx(() => [
                                                    unref(store).color === catcolor ? (openBlock(), createBlock(_component_CheckIcon, {
                                                      key: 0,
                                                      size: "13"
                                                    })) : createCommentVNode("", true)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color", "onClick"]);
                                              }), 128)) : createCommentVNode("", true)
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_sheet, {
                            rounded: "md",
                            width: "200",
                            elevation: "10",
                            class: "mt-5 dropdown-box"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_perfect_scrollbar, { style: { "max-height": "200px" } }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, {
                                    class: "py-0 theme-list",
                                    lines: "two"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, {
                                        color: "primary",
                                        class: "pa-3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex gap-2 flex-wrap v-col-11 px-0" }, [
                                            filterbyColors.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(filterbyColors.value, (catcolor, i) => {
                                              return openBlock(), createBlock(_component_v_avatar, {
                                                key: i,
                                                class: "cursor-pointer",
                                                color: catcolor,
                                                variant: "flat",
                                                size: "30",
                                                onClick: ($event) => unref(store).sortByColor(catcolor)
                                              }, {
                                                default: withCtx(() => [
                                                  unref(store).color === catcolor ? (openBlock(), createBlock(_component_CheckIcon, {
                                                    key: 0,
                                                    size: "13"
                                                  })) : createCommentVNode("", true)
                                                ]),
                                                _: 2
                                              }, 1032, ["color", "onClick"]);
                                            }), 128)) : createCommentVNode("", true)
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
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "primary",
                    onClick: ($event) => filterReset(),
                    size: "large",
                    rounded: "pill"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Reset Filters`);
                      } else {
                        return [
                          createTextVNode("Reset Filters")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                      createVNode("div", { class: "d-flex align-center" }, [
                        createVNode("p", { class: "text-grey100 text-subtitle-1 font-weight-medium pr-4" }, "Filter by:"),
                        createVNode(_component_v_menu, {
                          "close-on-content-click": false,
                          class: "Category_popup",
                          transition: "scale-transition"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode("div", mergeProps({
                              icon: "",
                              class: "cursor-pointer",
                              flat: ""
                            }, props, { size: "small" }), [
                              createVNode("div", { class: "font-weight-semibold text-15 text-grey200 d-flex" }, [
                                createTextVNode(" Category "),
                                createVNode("span", {
                                  class: "mdi mdi-menu-down",
                                  style: { "font-size": "20px" }
                                })
                              ])
                            ], 16)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_sheet, {
                              rounded: "md",
                              width: "150",
                              elevation: "10",
                              class: "mt-5 dropdown-box"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_perfect_scrollbar, { style: { "height": "260px" } }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list, {
                                      class: "py-0 theme-list",
                                      lines: "two"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item, {
                                          color: "primary",
                                          class: "pa-3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, { "no-gutters": "" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_checkbox, {
                                                      label: "All",
                                                      density: "compact",
                                                      modelValue: selectedCategory.value,
                                                      "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                      color: "primary",
                                                      value: "all",
                                                      "hide-details": ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_checkbox, {
                                                      label: "Kitchen",
                                                      density: "compact",
                                                      modelValue: selectedCategory.value,
                                                      "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                      color: "primary",
                                                      value: "kitchen",
                                                      "hide-details": ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_checkbox, {
                                                      label: "Electronics",
                                                      density: "compact",
                                                      modelValue: selectedCategory.value,
                                                      "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                      color: "primary",
                                                      value: "electronics",
                                                      "hide-details": ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_checkbox, {
                                                      label: "Books",
                                                      density: "compact",
                                                      modelValue: selectedCategory.value,
                                                      "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                      color: "primary",
                                                      value: "books",
                                                      "hide-details": ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_checkbox, {
                                                      label: "Fashion",
                                                      density: "compact",
                                                      modelValue: selectedCategory.value,
                                                      "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                      color: "primary",
                                                      value: "fashion",
                                                      "hide-details": ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_checkbox, {
                                                      label: "Toys",
                                                      density: "compact",
                                                      modelValue: selectedCategory.value,
                                                      "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                      color: "primary",
                                                      value: "toys",
                                                      "hide-details": ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_divider, {
                          vertical: "",
                          class: "mx-5"
                        }),
                        createVNode(_component_v_menu, {
                          "close-on-content-click": false,
                          class: "Pricing_popup",
                          transition: "scale-transition"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode("div", mergeProps({
                              icon: "",
                              class: "cursor-pointer",
                              flat: ""
                            }, props, { size: "small" }), [
                              createVNode("div", { class: "font-weight-semibold text-15 text-grey200 d-flex" }, [
                                createTextVNode(" Pricing "),
                                createVNode("span", {
                                  class: "mdi mdi-menu-down",
                                  style: { "font-size": "20px" }
                                })
                              ])
                            ], 16)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_sheet, {
                              rounded: "md",
                              width: "180",
                              elevation: "10",
                              class: "mt-5 dropdown-box"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_perfect_scrollbar, { style: { "max-height": "250px" } }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list, {
                                      class: "py-0 theme-list",
                                      lines: "two"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item, {
                                          color: "primary",
                                          class: "pa-3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_radio_group, {
                                              modelValue: selectPrice.value,
                                              "onUpdate:modelValue": ($event) => selectPrice.value = $event,
                                              class: "custom-radio-box"
                                            }, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(Fragment, null, renderList(priceSort, (pricing) => {
                                                  return createVNode(_component_v_radio, {
                                                    key: pricing.label,
                                                    label: pricing.label,
                                                    modelValue: selectPrice.value,
                                                    "onUpdate:modelValue": ($event) => selectPrice.value = $event,
                                                    color: "primary",
                                                    value: pricing.price,
                                                    "hide-details": ""
                                                  }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "value"]);
                                                }), 64))
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
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
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_divider, {
                          vertical: "",
                          class: "mx-5"
                        }),
                        createVNode(_component_v_menu, {
                          "close-on-content-click": false,
                          class: "Gender_popup",
                          transition: "scale-transition"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode("div", mergeProps({
                              icon: "",
                              class: "cursor-pointer",
                              flat: ""
                            }, props, { size: "small" }), [
                              createVNode("div", { class: "font-weight-semibold text-15 text-grey200 d-flex" }, [
                                createTextVNode(" Gender "),
                                createVNode("span", {
                                  class: "mdi mdi-menu-down",
                                  style: { "font-size": "20px" }
                                })
                              ])
                            ], 16)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_sheet, {
                              rounded: "md",
                              width: "150",
                              elevation: "10",
                              class: "mt-5 dropdown-box"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_perfect_scrollbar, { style: { "max-height": "200px" } }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list, {
                                      class: "py-0 theme-list",
                                      lines: "two"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item, {
                                          color: "primary",
                                          class: "pa-3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, { "no-gutters": "" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_checkbox, {
                                                      label: "Male",
                                                      density: "compact",
                                                      modelValue: selectedGender.value,
                                                      "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                      color: "primary",
                                                      value: "male",
                                                      "hide-details": ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_checkbox, {
                                                      label: "Female",
                                                      density: "compact",
                                                      modelValue: selectedGender.value,
                                                      "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                      color: "secondary",
                                                      value: "female",
                                                      "hide-details": ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_checkbox, {
                                                      label: "Kids",
                                                      density: "compact",
                                                      modelValue: selectedGender.value,
                                                      "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                      color: "error",
                                                      value: "kids",
                                                      "hide-details": ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_divider, {
                          vertical: "",
                          class: "mx-5"
                        }),
                        createVNode(_component_v_menu, {
                          "close-on-content-click": false,
                          class: "Color_popup",
                          transition: "scale-transition"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode("div", mergeProps({
                              icon: "",
                              class: "cursor-pointer",
                              flat: ""
                            }, props, { size: "small" }), [
                              createVNode("div", { class: "font-weight-semibold text-15 text-grey200 d-flex" }, [
                                createTextVNode(" Color "),
                                createVNode("span", {
                                  class: "mdi mdi-menu-down",
                                  style: { "font-size": "20px" }
                                })
                              ])
                            ], 16)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_sheet, {
                              rounded: "md",
                              width: "200",
                              elevation: "10",
                              class: "mt-5 dropdown-box"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_perfect_scrollbar, { style: { "max-height": "200px" } }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list, {
                                      class: "py-0 theme-list",
                                      lines: "two"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item, {
                                          color: "primary",
                                          class: "pa-3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex gap-2 flex-wrap v-col-11 px-0" }, [
                                              filterbyColors.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(filterbyColors.value, (catcolor, i) => {
                                                return openBlock(), createBlock(_component_v_avatar, {
                                                  key: i,
                                                  class: "cursor-pointer",
                                                  color: catcolor,
                                                  variant: "flat",
                                                  size: "30",
                                                  onClick: ($event) => unref(store).sortByColor(catcolor)
                                                }, {
                                                  default: withCtx(() => [
                                                    unref(store).color === catcolor ? (openBlock(), createBlock(_component_CheckIcon, {
                                                      key: 0,
                                                      size: "13"
                                                    })) : createCommentVNode("", true)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color", "onClick"]);
                                              }), 128)) : createCommentVNode("", true)
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
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_v_btn, {
                          color: "primary",
                          onClick: ($event) => filterReset(),
                          size: "large",
                          rounded: "pill"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Reset Filters")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_text, { class: "py-4 px-6" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode("p", { class: "text-grey100 text-subtitle-1 font-weight-medium pr-4" }, "Filter by:"),
                      createVNode(_component_v_menu, {
                        "close-on-content-click": false,
                        class: "Category_popup",
                        transition: "scale-transition"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode("div", mergeProps({
                            icon: "",
                            class: "cursor-pointer",
                            flat: ""
                          }, props, { size: "small" }), [
                            createVNode("div", { class: "font-weight-semibold text-15 text-grey200 d-flex" }, [
                              createTextVNode(" Category "),
                              createVNode("span", {
                                class: "mdi mdi-menu-down",
                                style: { "font-size": "20px" }
                              })
                            ])
                          ], 16)
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_v_sheet, {
                            rounded: "md",
                            width: "150",
                            elevation: "10",
                            class: "mt-5 dropdown-box"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_perfect_scrollbar, { style: { "height": "260px" } }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, {
                                    class: "py-0 theme-list",
                                    lines: "two"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, {
                                        color: "primary",
                                        class: "pa-3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, { "no-gutters": "" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "All",
                                                    density: "compact",
                                                    modelValue: selectedCategory.value,
                                                    "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                    color: "primary",
                                                    value: "all",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Kitchen",
                                                    density: "compact",
                                                    modelValue: selectedCategory.value,
                                                    "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                    color: "primary",
                                                    value: "kitchen",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Electronics",
                                                    density: "compact",
                                                    modelValue: selectedCategory.value,
                                                    "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                    color: "primary",
                                                    value: "electronics",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Books",
                                                    density: "compact",
                                                    modelValue: selectedCategory.value,
                                                    "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                    color: "primary",
                                                    value: "books",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Fashion",
                                                    density: "compact",
                                                    modelValue: selectedCategory.value,
                                                    "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                    color: "primary",
                                                    value: "fashion",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Toys",
                                                    density: "compact",
                                                    modelValue: selectedCategory.value,
                                                    "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                    color: "primary",
                                                    value: "toys",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_divider, {
                        vertical: "",
                        class: "mx-5"
                      }),
                      createVNode(_component_v_menu, {
                        "close-on-content-click": false,
                        class: "Pricing_popup",
                        transition: "scale-transition"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode("div", mergeProps({
                            icon: "",
                            class: "cursor-pointer",
                            flat: ""
                          }, props, { size: "small" }), [
                            createVNode("div", { class: "font-weight-semibold text-15 text-grey200 d-flex" }, [
                              createTextVNode(" Pricing "),
                              createVNode("span", {
                                class: "mdi mdi-menu-down",
                                style: { "font-size": "20px" }
                              })
                            ])
                          ], 16)
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_v_sheet, {
                            rounded: "md",
                            width: "180",
                            elevation: "10",
                            class: "mt-5 dropdown-box"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_perfect_scrollbar, { style: { "max-height": "250px" } }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, {
                                    class: "py-0 theme-list",
                                    lines: "two"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, {
                                        color: "primary",
                                        class: "pa-3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_radio_group, {
                                            modelValue: selectPrice.value,
                                            "onUpdate:modelValue": ($event) => selectPrice.value = $event,
                                            class: "custom-radio-box"
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(Fragment, null, renderList(priceSort, (pricing) => {
                                                return createVNode(_component_v_radio, {
                                                  key: pricing.label,
                                                  label: pricing.label,
                                                  modelValue: selectPrice.value,
                                                  "onUpdate:modelValue": ($event) => selectPrice.value = $event,
                                                  color: "primary",
                                                  value: pricing.price,
                                                  "hide-details": ""
                                                }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "value"]);
                                              }), 64))
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
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
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_divider, {
                        vertical: "",
                        class: "mx-5"
                      }),
                      createVNode(_component_v_menu, {
                        "close-on-content-click": false,
                        class: "Gender_popup",
                        transition: "scale-transition"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode("div", mergeProps({
                            icon: "",
                            class: "cursor-pointer",
                            flat: ""
                          }, props, { size: "small" }), [
                            createVNode("div", { class: "font-weight-semibold text-15 text-grey200 d-flex" }, [
                              createTextVNode(" Gender "),
                              createVNode("span", {
                                class: "mdi mdi-menu-down",
                                style: { "font-size": "20px" }
                              })
                            ])
                          ], 16)
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_v_sheet, {
                            rounded: "md",
                            width: "150",
                            elevation: "10",
                            class: "mt-5 dropdown-box"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_perfect_scrollbar, { style: { "max-height": "200px" } }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, {
                                    class: "py-0 theme-list",
                                    lines: "two"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, {
                                        color: "primary",
                                        class: "pa-3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, { "no-gutters": "" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Male",
                                                    density: "compact",
                                                    modelValue: selectedGender.value,
                                                    "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                    color: "primary",
                                                    value: "male",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Female",
                                                    density: "compact",
                                                    modelValue: selectedGender.value,
                                                    "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                    color: "secondary",
                                                    value: "female",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Kids",
                                                    density: "compact",
                                                    modelValue: selectedGender.value,
                                                    "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                    color: "error",
                                                    value: "kids",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_divider, {
                        vertical: "",
                        class: "mx-5"
                      }),
                      createVNode(_component_v_menu, {
                        "close-on-content-click": false,
                        class: "Color_popup",
                        transition: "scale-transition"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode("div", mergeProps({
                            icon: "",
                            class: "cursor-pointer",
                            flat: ""
                          }, props, { size: "small" }), [
                            createVNode("div", { class: "font-weight-semibold text-15 text-grey200 d-flex" }, [
                              createTextVNode(" Color "),
                              createVNode("span", {
                                class: "mdi mdi-menu-down",
                                style: { "font-size": "20px" }
                              })
                            ])
                          ], 16)
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_v_sheet, {
                            rounded: "md",
                            width: "200",
                            elevation: "10",
                            class: "mt-5 dropdown-box"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_perfect_scrollbar, { style: { "max-height": "200px" } }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, {
                                    class: "py-0 theme-list",
                                    lines: "two"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, {
                                        color: "primary",
                                        class: "pa-3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex gap-2 flex-wrap v-col-11 px-0" }, [
                                            filterbyColors.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(filterbyColors.value, (catcolor, i) => {
                                              return openBlock(), createBlock(_component_v_avatar, {
                                                key: i,
                                                class: "cursor-pointer",
                                                color: catcolor,
                                                variant: "flat",
                                                size: "30",
                                                onClick: ($event) => unref(store).sortByColor(catcolor)
                                              }, {
                                                default: withCtx(() => [
                                                  unref(store).color === catcolor ? (openBlock(), createBlock(_component_CheckIcon, {
                                                    key: 0,
                                                    size: "13"
                                                  })) : createCommentVNode("", true)
                                                ]),
                                                _: 2
                                              }, 1032, ["color", "onClick"]);
                                            }), 128)) : createCommentVNode("", true)
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
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_v_btn, {
                        color: "primary",
                        onClick: ($event) => filterReset(),
                        size: "large",
                        rounded: "pill"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Reset Filters")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/ecommerce/listing/ProductfilterOne.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductsOne",
  __ssrInlineRender: true,
  setup(__props) {
    const select = ref("March 2023");
    const items = ref(["Most recent", "April 2023", "May 2023", "June 2023"]);
    const page = ref(1);
    const store = useEcomStore();
    const getProducts = computed(() => {
      return store.products;
    });
    const selected = ref("Price:Low to High");
    const searchValue = ref("");
    const getVisibleProduct = (products, sortBy, search, gender, category, colors, price) => {
      if (sortBy === "Popularity") {
        products = orderBy(products, ["rating"], ["desc"]);
      }
      if (sortBy === "Price:High to Low") {
        products = orderBy(products, ["salePrice"], ["desc"]);
      }
      if (sortBy === "Price:Low to High") {
        products = orderBy(products, ["salePrice"], ["asc"]);
      }
      if (sortBy === "Fresh Arrivals") {
        products = orderBy(products, ["created"], ["asc"]);
      }
      if (gender) {
        products = products.filter((product) => {
          return product.gender.includes(gender);
        });
      }
      if (price) {
        products = products.filter((product) => {
          return product.price.includes(price);
        });
      }
      if (category !== "all") {
        products = products.filter((product) => {
          return product.categories.includes(category);
        });
      }
      if (search) {
        products = products.filter((product) => {
          return product.name.toLowerCase().includes(search.value.toLowerCase());
        });
      }
      if (colors !== "All") {
        products = products.filter((_product) => _product.colors.includes(colors));
      }
      return products;
    };
    const filteredProducts = computed(() => {
      return getVisibleProduct(
        getProducts.value,
        selected.value,
        searchValue,
        store.gender,
        store.category,
        store.color,
        store.price
      );
    });
    ref(false);
    function AddCart(p) {
      store.AddToCart(p);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_pagination = resolveComponent("v-pagination");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_component_v_card, {
        elevation: "10",
        class: "inside-left-sidebar overflow-hidden"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              rightpart: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_sheet, { class: "pa-8" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-sm-flex gap-2 align-center mb-5" data-v-bc446a0d${_scopeId3}><h5 class="text-h5 d-sm-flex font-weight-semibold" data-v-bc446a0d${_scopeId3}>Products</h5>`);
                        _push4(ssrRenderComponent(_component_v_sheet, { class: "ml-sm-auto mt-sm-0 mt-3 searchbox" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                variant: "outlined",
                                modelValue: searchValue.value,
                                "onUpdate:modelValue": ($event) => searchValue.value = $event,
                                "prepend-inner-icon": "mdi-magnify",
                                placeholder: "Search Product",
                                "hide-details": "",
                                density: "compact",
                                color: "primary"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  variant: "outlined",
                                  modelValue: searchValue.value,
                                  "onUpdate:modelValue": ($event) => searchValue.value = $event,
                                  "prepend-inner-icon": "mdi-magnify",
                                  placeholder: "Search Product",
                                  "hide-details": "",
                                  density: "compact",
                                  color: "primary"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="my-sm-0 my-3" data-v-bc446a0d${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_select, {
                          modelValue: select.value,
                          "onUpdate:modelValue": ($event) => select.value = $event,
                          items: items.value,
                          density: "compact",
                          class: "bg-lightsecondary rounded-md font-weight-semibold text-h6 text-grey100",
                          "hide-details": ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                        if (filteredProducts.value.length >= 1) {
                          _push4(ssrRenderComponent(_component_v_row, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(filteredProducts.value, (product) => {
                                  _push5(ssrRenderComponent(_component_v_col, {
                                    cols: "12",
                                    md: "3",
                                    sm: "6",
                                    key: product.id
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(ProductItemVue, {
                                          name: product.name,
                                          image: product.image,
                                          desc: product.description,
                                          salePrice: product.salePrice,
                                          rank: product.rank,
                                          offerPrice: product.offerPrice,
                                          rating: product.rating,
                                          goto: product.id,
                                          onHandlecart: ($event) => AddCart(product)
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(ProductItemVue, {
                                            name: product.name,
                                            image: product.image,
                                            desc: product.description,
                                            salePrice: product.salePrice,
                                            rank: product.rank,
                                            offerPrice: product.offerPrice,
                                            rating: product.rating,
                                            goto: product.id,
                                            onHandlecart: ($event) => AddCart(product)
                                          }, null, 8, ["name", "image", "desc", "salePrice", "rank", "offerPrice", "rating", "goto", "onHandlecart"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                                _push5(ssrRenderComponent(_component_v_col, {
                                  cols: "12",
                                  class: "text-sm-right text-center"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_divider, null, null, _parent6, _scopeId5));
                                      _push6(`<div class="d-flex justify-end mt-4" data-v-bc446a0d${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_v_pagination, {
                                        modelValue: page.value,
                                        "onUpdate:modelValue": ($event) => page.value = $event,
                                        density: "compact",
                                        length: 8,
                                        rounded: "circle",
                                        class: "text-subtitle-1 text-grey100"
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      return [
                                        createVNode(_component_v_divider),
                                        createVNode("div", { class: "d-flex justify-end mt-4" }, [
                                          createVNode(_component_v_pagination, {
                                            modelValue: page.value,
                                            "onUpdate:modelValue": ($event) => page.value = $event,
                                            density: "compact",
                                            length: 8,
                                            rounded: "circle",
                                            class: "text-subtitle-1 text-grey100"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(filteredProducts.value, (product) => {
                                    return openBlock(), createBlock(_component_v_col, {
                                      cols: "12",
                                      md: "3",
                                      sm: "6",
                                      key: product.id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(ProductItemVue, {
                                          name: product.name,
                                          image: product.image,
                                          desc: product.description,
                                          salePrice: product.salePrice,
                                          rank: product.rank,
                                          offerPrice: product.offerPrice,
                                          rating: product.rating,
                                          goto: product.id,
                                          onHandlecart: ($event) => AddCart(product)
                                        }, null, 8, ["name", "image", "desc", "salePrice", "rank", "offerPrice", "rating", "goto", "onHandlecart"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128)),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    class: "text-sm-right text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_divider),
                                      createVNode("div", { class: "d-flex justify-end mt-4" }, [
                                        createVNode(_component_v_pagination, {
                                          modelValue: page.value,
                                          "onUpdate:modelValue": ($event) => page.value = $event,
                                          density: "compact",
                                          length: 8,
                                          rounded: "circle",
                                          class: "text-subtitle-1 text-grey100"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_sfc_main$4, null, null, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          createVNode("div", { class: "d-sm-flex gap-2 align-center mb-5" }, [
                            createVNode("h5", { class: "text-h5 d-sm-flex font-weight-semibold" }, "Products"),
                            createVNode(_component_v_sheet, { class: "ml-sm-auto mt-sm-0 mt-3 searchbox" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  variant: "outlined",
                                  modelValue: searchValue.value,
                                  "onUpdate:modelValue": ($event) => searchValue.value = $event,
                                  "prepend-inner-icon": "mdi-magnify",
                                  placeholder: "Search Product",
                                  "hide-details": "",
                                  density: "compact",
                                  color: "primary"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "my-sm-0 my-3" }, [
                              createVNode(_component_v_select, {
                                modelValue: select.value,
                                "onUpdate:modelValue": ($event) => select.value = $event,
                                items: items.value,
                                density: "compact",
                                class: "bg-lightsecondary rounded-md font-weight-semibold text-h6 text-grey100",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ])
                          ]),
                          filteredProducts.value.length >= 1 ? (openBlock(), createBlock(_component_v_row, { key: 0 }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(filteredProducts.value, (product) => {
                                return openBlock(), createBlock(_component_v_col, {
                                  cols: "12",
                                  md: "3",
                                  sm: "6",
                                  key: product.id
                                }, {
                                  default: withCtx(() => [
                                    createVNode(ProductItemVue, {
                                      name: product.name,
                                      image: product.image,
                                      desc: product.description,
                                      salePrice: product.salePrice,
                                      rank: product.rank,
                                      offerPrice: product.offerPrice,
                                      rating: product.rating,
                                      goto: product.id,
                                      onHandlecart: ($event) => AddCart(product)
                                    }, null, 8, ["name", "image", "desc", "salePrice", "rank", "offerPrice", "rating", "goto", "onHandlecart"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128)),
                              createVNode(_component_v_col, {
                                cols: "12",
                                class: "text-sm-right text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_divider),
                                  createVNode("div", { class: "d-flex justify-end mt-4" }, [
                                    createVNode(_component_v_pagination, {
                                      modelValue: page.value,
                                      "onUpdate:modelValue": ($event) => page.value = $event,
                                      density: "compact",
                                      length: 8,
                                      rounded: "circle",
                                      class: "text-subtitle-1 text-grey100"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(_sfc_main$4, { key: 1 }))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_sheet, { class: "pa-8" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-sm-flex gap-2 align-center mb-5" }, [
                          createVNode("h5", { class: "text-h5 d-sm-flex font-weight-semibold" }, "Products"),
                          createVNode(_component_v_sheet, { class: "ml-sm-auto mt-sm-0 mt-3 searchbox" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                variant: "outlined",
                                modelValue: searchValue.value,
                                "onUpdate:modelValue": ($event) => searchValue.value = $event,
                                "prepend-inner-icon": "mdi-magnify",
                                placeholder: "Search Product",
                                "hide-details": "",
                                density: "compact",
                                color: "primary"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "my-sm-0 my-3" }, [
                            createVNode(_component_v_select, {
                              modelValue: select.value,
                              "onUpdate:modelValue": ($event) => select.value = $event,
                              items: items.value,
                              density: "compact",
                              class: "bg-lightsecondary rounded-md font-weight-semibold text-h6 text-grey100",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ])
                        ]),
                        filteredProducts.value.length >= 1 ? (openBlock(), createBlock(_component_v_row, { key: 0 }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(filteredProducts.value, (product) => {
                              return openBlock(), createBlock(_component_v_col, {
                                cols: "12",
                                md: "3",
                                sm: "6",
                                key: product.id
                              }, {
                                default: withCtx(() => [
                                  createVNode(ProductItemVue, {
                                    name: product.name,
                                    image: product.image,
                                    desc: product.description,
                                    salePrice: product.salePrice,
                                    rank: product.rank,
                                    offerPrice: product.offerPrice,
                                    rating: product.rating,
                                    goto: product.id,
                                    onHandlecart: ($event) => AddCart(product)
                                  }, null, 8, ["name", "image", "desc", "salePrice", "rank", "offerPrice", "rating", "goto", "onHandlecart"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128)),
                            createVNode(_component_v_col, {
                              cols: "12",
                              class: "text-sm-right text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_divider),
                                createVNode("div", { class: "d-flex justify-end mt-4" }, [
                                  createVNode(_component_v_pagination, {
                                    modelValue: page.value,
                                    "onUpdate:modelValue": ($event) => page.value = $event,
                                    density: "compact",
                                    length: 8,
                                    rounded: "circle",
                                    class: "text-subtitle-1 text-grey100"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(_sfc_main$4, { key: 1 }))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              mobileLeftContent: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, null, {
                rightpart: withCtx(() => [
                  createVNode(_component_v_sheet, { class: "pa-8" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-sm-flex gap-2 align-center mb-5" }, [
                        createVNode("h5", { class: "text-h5 d-sm-flex font-weight-semibold" }, "Products"),
                        createVNode(_component_v_sheet, { class: "ml-sm-auto mt-sm-0 mt-3 searchbox" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              variant: "outlined",
                              modelValue: searchValue.value,
                              "onUpdate:modelValue": ($event) => searchValue.value = $event,
                              "prepend-inner-icon": "mdi-magnify",
                              placeholder: "Search Product",
                              "hide-details": "",
                              density: "compact",
                              color: "primary"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "my-sm-0 my-3" }, [
                          createVNode(_component_v_select, {
                            modelValue: select.value,
                            "onUpdate:modelValue": ($event) => select.value = $event,
                            items: items.value,
                            density: "compact",
                            class: "bg-lightsecondary rounded-md font-weight-semibold text-h6 text-grey100",
                            "hide-details": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ])
                      ]),
                      filteredProducts.value.length >= 1 ? (openBlock(), createBlock(_component_v_row, { key: 0 }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(filteredProducts.value, (product) => {
                            return openBlock(), createBlock(_component_v_col, {
                              cols: "12",
                              md: "3",
                              sm: "6",
                              key: product.id
                            }, {
                              default: withCtx(() => [
                                createVNode(ProductItemVue, {
                                  name: product.name,
                                  image: product.image,
                                  desc: product.description,
                                  salePrice: product.salePrice,
                                  rank: product.rank,
                                  offerPrice: product.offerPrice,
                                  rating: product.rating,
                                  goto: product.id,
                                  onHandlecart: ($event) => AddCart(product)
                                }, null, 8, ["name", "image", "desc", "salePrice", "rank", "offerPrice", "rating", "goto", "onHandlecart"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128)),
                          createVNode(_component_v_col, {
                            cols: "12",
                            class: "text-sm-right text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_divider),
                              createVNode("div", { class: "d-flex justify-end mt-4" }, [
                                createVNode(_component_v_pagination, {
                                  modelValue: page.value,
                                  "onUpdate:modelValue": ($event) => page.value = $event,
                                  density: "compact",
                                  length: 8,
                                  rounded: "circle",
                                  class: "text-subtitle-1 text-grey100"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(_sfc_main$4, { key: 1 }))
                    ]),
                    _: 1
                  })
                ]),
                mobileLeftContent: withCtx(() => [
                  createVNode(_sfc_main$3)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/eCommerce/ProductsOne.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductsOne = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bc446a0d"]]);
export {
  ProductsOne as default
};
//# sourceMappingURL=ProductsOne-CzzjnJKe.js.map
