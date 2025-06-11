import { defineComponent, ref, computed, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, unref, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-BYsXtuI9.mjs';
import { _ as __nuxt_component_0 } from './client-only-Bwxzq3Sq.mjs';
import { u as useEcomStore } from './eCommerce-D0OnZgt2.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProductEmplty",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_img = resolveComponent("v-img");
      _push(ssrRenderComponent(_component_v_row, mergeProps({ class: "d-flex justify-conent-center" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              class: "text-center",
              lg: "12"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_img, {
                    src: unref(_imports_0),
                    alt: "cover",
                    class: "mx-auto my-10",
                    height: "350"
                  }, null, _parent3, _scopeId2));
                  _push3(`<h1 class="text-h1"${_scopeId2}>There is no Product</h1><p${_scopeId2}>Try checking your spelling or use more general terms</p>`);
                } else {
                  return [
                    createVNode(_component_v_img, {
                      src: unref(_imports_0),
                      alt: "cover",
                      class: "mx-auto my-10",
                      height: "350"
                    }, null, 8, ["src"]),
                    createVNode("h1", { class: "text-h1" }, "There is no Product"),
                    createVNode("p", null, "Try checking your spelling or use more general terms")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, {
                class: "text-center",
                lg: "12"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_img, {
                    src: unref(_imports_0),
                    alt: "cover",
                    class: "mx-auto my-10",
                    height: "350"
                  }, null, 8, ["src"]),
                  createVNode("h1", { class: "text-h1" }, "There is no Product"),
                  createVNode("p", null, "Try checking your spelling or use more general terms")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/ecommerce/listing/ProductEmplty.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductFilters",
  __ssrInlineRender: true,
  setup(__props) {
    const panel = ref([0, 1, 2, 3, 4]);
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
    const selectRating = ref(1);
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
      const _component_perfect_scrollbar = resolveComponent("perfect-scrollbar");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
      const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
      const _component_v_expansion_panel_title = resolveComponent("v-expansion-panel-title");
      const _component_v_expansion_panel_text = resolveComponent("v-expansion-panel-text");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_CheckIcon = resolveComponent("CheckIcon");
      const _component_v_radio_group = resolveComponent("v-radio-group");
      const _component_v_radio = resolveComponent("v-radio");
      const _component_ClientOnly = __nuxt_component_0;
      const _component_v_rating = resolveComponent("v-rating");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_perfect_scrollbar, mergeProps({ class: "overflow-y-hidden side_scroll" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_sheet, { class: "pa-4 pt-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_expansion_panels, {
                    modelValue: panel.value,
                    "onUpdate:modelValue": ($event) => panel.value = $event,
                    multiple: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_expansion_panel, { elevation: "0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Gender `);
                                  } else {
                                    return [
                                      createTextVNode(" Gender ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_expansion_panel_text, { class: "acco-body" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_row, { "no-gutters": "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_checkbox, {
                                                  label: "Male",
                                                  modelValue: selectedGender.value,
                                                  "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                  color: "primary",
                                                  value: "male",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Male",
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_checkbox, {
                                                  label: "Female",
                                                  modelValue: selectedGender.value,
                                                  "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                  color: "secondary",
                                                  value: "female",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Female",
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_checkbox, {
                                                  label: "Kids",
                                                  modelValue: selectedGender.value,
                                                  "onUpdate:modelValue": ($event) => selectedGender.value = $event,
                                                  color: "error",
                                                  value: "kids",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Kids",
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_checkbox, {
                                                  label: "Male",
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_row, { "no-gutters": "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_checkbox, {
                                                label: "Male",
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Gender ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_expansion_panel_text, { class: "acco-body" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, { "no-gutters": "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_checkbox, {
                                              label: "Male",
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_divider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_expansion_panel, { elevation: "0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Categories `);
                                  } else {
                                    return [
                                      createTextVNode(" Categories ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_expansion_panel_text, { class: "acco-body" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_row, { "no-gutters": "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_checkbox, {
                                                  label: "All",
                                                  modelValue: selectedCategory.value,
                                                  "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                  color: "primary",
                                                  value: "all",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "All",
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_checkbox, {
                                                  label: "Kitchen",
                                                  modelValue: selectedCategory.value,
                                                  "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                  color: "primary",
                                                  value: "kitchen",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Kitchen",
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_checkbox, {
                                                  label: "Electronics",
                                                  modelValue: selectedCategory.value,
                                                  "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                  color: "primary",
                                                  value: "electronics",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Electronics",
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_checkbox, {
                                                  label: "Books",
                                                  modelValue: selectedCategory.value,
                                                  "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                  color: "primary",
                                                  value: "books",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Books",
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_checkbox, {
                                                  label: "Fashion",
                                                  modelValue: selectedCategory.value,
                                                  "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                  color: "primary",
                                                  value: "fashion",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Fashion",
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_checkbox, {
                                                  label: "Toys",
                                                  modelValue: selectedCategory.value,
                                                  "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                                                  color: "primary",
                                                  value: "toys",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_checkbox, {
                                                    label: "Toys",
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_checkbox, {
                                                  label: "All",
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_row, { "no-gutters": "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_checkbox, {
                                                label: "All",
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Categories ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_expansion_panel_text, { class: "acco-body" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, { "no-gutters": "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_checkbox, {
                                              label: "All",
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_divider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_expansion_panel, { elevation: "0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Colors `);
                                  } else {
                                    return [
                                      createTextVNode(" Colors ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_expansion_panel_text, { class: "acco-body" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="d-flex gap-2 flex-wrap v-col-11 px-0"${_scopeId5}>`);
                                    if (filterbyColors.value.length > 0) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(filterbyColors.value, (catcolor, i) => {
                                        _push6(ssrRenderComponent(_component_v_avatar, {
                                          class: "cursor-pointer",
                                          color: catcolor,
                                          variant: "flat",
                                          size: "small",
                                          onClick: ($event) => unref(store).sortByColor(catcolor)
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              if (unref(store).color === catcolor) {
                                                _push7(ssrRenderComponent(_component_CheckIcon, { size: "13" }, null, _parent7, _scopeId6));
                                              } else {
                                                _push7(`<!---->`);
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
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "d-flex gap-2 flex-wrap v-col-11 px-0" }, [
                                        filterbyColors.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(filterbyColors.value, (catcolor, i) => {
                                          return openBlock(), createBlock(_component_v_avatar, {
                                            key: i,
                                            class: "cursor-pointer",
                                            color: catcolor,
                                            variant: "flat",
                                            size: "small",
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Colors ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_expansion_panel_text, { class: "acco-body" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex gap-2 flex-wrap v-col-11 px-0" }, [
                                      filterbyColors.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(filterbyColors.value, (catcolor, i) => {
                                        return openBlock(), createBlock(_component_v_avatar, {
                                          key: i,
                                          class: "cursor-pointer",
                                          color: catcolor,
                                          variant: "flat",
                                          size: "small",
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_divider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_expansion_panel, { elevation: "0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Price `);
                                  } else {
                                    return [
                                      createTextVNode(" Price ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_expansion_panel_text, { class: "acco-body" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_radio_group, {
                                      modelValue: selectPrice.value,
                                      "onUpdate:modelValue": ($event) => selectPrice.value = $event,
                                      class: "custom-radio-box"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(priceSort, (pricing) => {
                                            _push7(ssrRenderComponent(_component_v_radio, {
                                              key: pricing.label,
                                              label: pricing.label,
                                              modelValue: selectPrice.value,
                                              "onUpdate:modelValue": ($event) => selectPrice.value = $event,
                                              color: "primary",
                                              value: pricing.price,
                                              "hide-details": ""
                                            }, null, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
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
                                    }, _parent6, _scopeId5));
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Price ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_expansion_panel_text, { class: "acco-body" }, {
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_divider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_expansion_panel, { elevation: "0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Rating `);
                                  } else {
                                    return [
                                      createTextVNode(" Rating ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_expansion_panel_text, { class: "acco-body" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ClientOnly, null, {}, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ClientOnly, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_rating, {
                                            hover: "",
                                            color: "warning",
                                            modelValue: selectRating.value,
                                            "onUpdate:modelValue": ($event) => selectRating.value = $event,
                                            class: "ma-2",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                createVNode(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Rating ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_expansion_panel_text, { class: "acco-body" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ClientOnly, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_rating, {
                                          hover: "",
                                          color: "warning",
                                          modelValue: selectRating.value,
                                          "onUpdate:modelValue": ($event) => selectRating.value = $event,
                                          class: "ma-2",
                                          density: "compact"
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_expansion_panel, { elevation: "0" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Gender ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_expansion_panel_text, { class: "acco-body" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, { "no-gutters": "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_checkbox, {
                                            label: "Male",
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
                          }),
                          createVNode(_component_v_divider),
                          createVNode(_component_v_expansion_panel, { elevation: "0" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Categories ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_expansion_panel_text, { class: "acco-body" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, { "no-gutters": "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_checkbox, {
                                            label: "All",
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
                          }),
                          createVNode(_component_v_divider),
                          createVNode(_component_v_expansion_panel, { elevation: "0" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Colors ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_expansion_panel_text, { class: "acco-body" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex gap-2 flex-wrap v-col-11 px-0" }, [
                                    filterbyColors.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(filterbyColors.value, (catcolor, i) => {
                                      return openBlock(), createBlock(_component_v_avatar, {
                                        key: i,
                                        class: "cursor-pointer",
                                        color: catcolor,
                                        variant: "flat",
                                        size: "small",
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
                          }),
                          createVNode(_component_v_divider),
                          createVNode(_component_v_expansion_panel, { elevation: "0" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Price ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_expansion_panel_text, { class: "acco-body" }, {
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
                          }),
                          createVNode(_component_v_divider),
                          createVNode(_component_v_expansion_panel, { elevation: "0" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Rating ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_expansion_panel_text, { class: "acco-body" }, {
                                default: withCtx(() => [
                                  createVNode(_component_ClientOnly, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_rating, {
                                        hover: "",
                                        color: "warning",
                                        modelValue: selectRating.value,
                                        "onUpdate:modelValue": ($event) => selectRating.value = $event,
                                        class: "ma-2",
                                        density: "compact"
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "primary",
                    onClick: ($event) => filterReset(),
                    block: "",
                    class: "mt-5",
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
                } else {
                  return [
                    createVNode(_component_v_expansion_panels, {
                      modelValue: panel.value,
                      "onUpdate:modelValue": ($event) => panel.value = $event,
                      multiple: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_expansion_panel, { elevation: "0" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                              default: withCtx(() => [
                                createTextVNode(" Gender ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_expansion_panel_text, { class: "acco-body" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_row, { "no-gutters": "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_checkbox, {
                                          label: "Male",
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
                        }),
                        createVNode(_component_v_divider),
                        createVNode(_component_v_expansion_panel, { elevation: "0" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                              default: withCtx(() => [
                                createTextVNode(" Categories ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_expansion_panel_text, { class: "acco-body" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_row, { "no-gutters": "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_checkbox, {
                                          label: "All",
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
                        }),
                        createVNode(_component_v_divider),
                        createVNode(_component_v_expansion_panel, { elevation: "0" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                              default: withCtx(() => [
                                createTextVNode(" Colors ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_expansion_panel_text, { class: "acco-body" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex gap-2 flex-wrap v-col-11 px-0" }, [
                                  filterbyColors.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(filterbyColors.value, (catcolor, i) => {
                                    return openBlock(), createBlock(_component_v_avatar, {
                                      key: i,
                                      class: "cursor-pointer",
                                      color: catcolor,
                                      variant: "flat",
                                      size: "small",
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
                        }),
                        createVNode(_component_v_divider),
                        createVNode(_component_v_expansion_panel, { elevation: "0" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                              default: withCtx(() => [
                                createTextVNode(" Price ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_expansion_panel_text, { class: "acco-body" }, {
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
                        }),
                        createVNode(_component_v_divider),
                        createVNode(_component_v_expansion_panel, { elevation: "0" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                              default: withCtx(() => [
                                createTextVNode(" Rating ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_expansion_panel_text, { class: "acco-body" }, {
                              default: withCtx(() => [
                                createVNode(_component_ClientOnly, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_rating, {
                                      hover: "",
                                      color: "warning",
                                      modelValue: selectRating.value,
                                      "onUpdate:modelValue": ($event) => selectRating.value = $event,
                                      class: "ma-2",
                                      density: "compact"
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
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_btn, {
                      color: "primary",
                      onClick: ($event) => filterReset(),
                      block: "",
                      class: "mt-5",
                      rounded: "pill"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Reset Filters")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_sheet, { class: "pa-4 pt-1" }, {
                default: withCtx(() => [
                  createVNode(_component_v_expansion_panels, {
                    modelValue: panel.value,
                    "onUpdate:modelValue": ($event) => panel.value = $event,
                    multiple: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_expansion_panel, { elevation: "0" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                            default: withCtx(() => [
                              createTextVNode(" Gender ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_expansion_panel_text, { class: "acco-body" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { "no-gutters": "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_checkbox, {
                                        label: "Male",
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
                      }),
                      createVNode(_component_v_divider),
                      createVNode(_component_v_expansion_panel, { elevation: "0" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                            default: withCtx(() => [
                              createTextVNode(" Categories ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_expansion_panel_text, { class: "acco-body" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { "no-gutters": "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_checkbox, {
                                        label: "All",
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
                      }),
                      createVNode(_component_v_divider),
                      createVNode(_component_v_expansion_panel, { elevation: "0" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                            default: withCtx(() => [
                              createTextVNode(" Colors ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_expansion_panel_text, { class: "acco-body" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex gap-2 flex-wrap v-col-11 px-0" }, [
                                filterbyColors.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(filterbyColors.value, (catcolor, i) => {
                                  return openBlock(), createBlock(_component_v_avatar, {
                                    key: i,
                                    class: "cursor-pointer",
                                    color: catcolor,
                                    variant: "flat",
                                    size: "small",
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
                      }),
                      createVNode(_component_v_divider),
                      createVNode(_component_v_expansion_panel, { elevation: "0" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                            default: withCtx(() => [
                              createTextVNode(" Price ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_expansion_panel_text, { class: "acco-body" }, {
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
                      }),
                      createVNode(_component_v_divider),
                      createVNode(_component_v_expansion_panel, { elevation: "0" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_expansion_panel_title, { class: "font-weight-medium custom-accordion" }, {
                            default: withCtx(() => [
                              createTextVNode(" Rating ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_expansion_panel_text, { class: "acco-body" }, {
                            default: withCtx(() => [
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_rating, {
                                    hover: "",
                                    color: "warning",
                                    modelValue: selectRating.value,
                                    "onUpdate:modelValue": ($event) => selectRating.value = $event,
                                    class: "ma-2",
                                    density: "compact"
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
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_btn, {
                    color: "primary",
                    onClick: ($event) => filterReset(),
                    block: "",
                    class: "mt-5",
                    rounded: "pill"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Reset Filters")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/ecommerce/listing/ProductFilters.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$1 as a };
//# sourceMappingURL=ProductFilters-B1BPbBDv.mjs.map
