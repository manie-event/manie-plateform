import { defineComponent, ref, resolveComponent, unref, withCtx, createVNode, createTextVNode, renderSlot, useSSRContext, computed, mergeProps, createBlock, openBlock, Fragment, renderList } from "vue";
import { ssrRenderSlot, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { g as useDisplay, _ as _export_sfc } from "../server.mjs";
import { _ as _sfc_main$3 } from "./ProductItem-C25Mm-U3.js";
import { u as useEcomStore } from "./eCommerce-D0OnZgt2.js";
import { orderBy } from "lodash";
import { _ as _sfc_main$2, a as _sfc_main$4 } from "./ProductFilters-B1BPbBDv.js";
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
import "./client-only-Bwxzq3Sq.js";
import "./virtual_public-BYsXtuI9.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "eCommerceCard",
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
      _push(`<!--[--><div class="d-flex mainbox">`);
      if (unref(lgAndUp)) {
        _push(`<div class="left-part">`);
        ssrRenderSlot(_ctx.$slots, "leftpart", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="right-part">`);
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/eCommerceCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductsTwo",
  __ssrInlineRender: true,
  setup(__props) {
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
      const _component_perfect_scrollbar = resolveComponent("perfect-scrollbar");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        elevation: "10",
        class: "inside-left-sidebar overflow-hidden"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, {
              leftpart: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2)
                  ];
                }
              }),
              rightpart: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_perfect_scrollbar, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_sheet, { class: "pa-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex gap-2 align-center mb-4 justify-space-between" data-v-07667164${_scopeId4}><h5 class="text-h5 d-none d-lg-flex font-weight-semibold" data-v-07667164${_scopeId4}>Products</h5>`);
                              _push5(ssrRenderComponent(_component_v_sheet, { width: "250" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      variant: "outlined",
                                      modelValue: searchValue.value,
                                      "onUpdate:modelValue": ($event) => searchValue.value = $event,
                                      "prepend-inner-icon": "mdi-magnify",
                                      placeholder: "Search Product",
                                      "hide-details": "",
                                      density: "compact",
                                      color: "primary"
                                    }, null, _parent6, _scopeId5));
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
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                              if (filteredProducts.value.length >= 1) {
                                _push5(ssrRenderComponent(_component_v_row, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(filteredProducts.value, (product) => {
                                        _push6(ssrRenderComponent(_component_v_col, {
                                          cols: "12",
                                          lg: "4",
                                          sm: "6",
                                          key: product.id
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_sfc_main$3, {
                                                name: product.name,
                                                image: product.image,
                                                desc: product.description,
                                                salePrice: product.salePrice,
                                                offerPrice: product.offerPrice,
                                                rating: product.rating,
                                                goto: product.id,
                                                onHandlecart: ($event) => AddCart(product)
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_sfc_main$3, {
                                                  name: product.name,
                                                  image: product.image,
                                                  desc: product.description,
                                                  salePrice: product.salePrice,
                                                  offerPrice: product.offerPrice,
                                                  rating: product.rating,
                                                  goto: product.id,
                                                  onHandlecart: ($event) => AddCart(product)
                                                }, null, 8, ["name", "image", "desc", "salePrice", "offerPrice", "rating", "goto", "onHandlecart"])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(filteredProducts.value, (product) => {
                                          return openBlock(), createBlock(_component_v_col, {
                                            cols: "12",
                                            lg: "4",
                                            sm: "6",
                                            key: product.id
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_sfc_main$3, {
                                                name: product.name,
                                                image: product.image,
                                                desc: product.description,
                                                salePrice: product.salePrice,
                                                offerPrice: product.offerPrice,
                                                rating: product.rating,
                                                goto: product.id,
                                                onHandlecart: ($event) => AddCart(product)
                                              }, null, 8, ["name", "image", "desc", "salePrice", "offerPrice", "rating", "goto", "onHandlecart"])
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(ssrRenderComponent(_sfc_main$4, null, null, _parent5, _scopeId4));
                              }
                            } else {
                              return [
                                createVNode("div", { class: "d-flex gap-2 align-center mb-4 justify-space-between" }, [
                                  createVNode("h5", { class: "text-h5 d-none d-lg-flex font-weight-semibold" }, "Products"),
                                  createVNode(_component_v_sheet, { width: "250" }, {
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
                                  })
                                ]),
                                filteredProducts.value.length >= 1 ? (openBlock(), createBlock(_component_v_row, { key: 0 }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(filteredProducts.value, (product) => {
                                      return openBlock(), createBlock(_component_v_col, {
                                        cols: "12",
                                        lg: "4",
                                        sm: "6",
                                        key: product.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$3, {
                                            name: product.name,
                                            image: product.image,
                                            desc: product.description,
                                            salePrice: product.salePrice,
                                            offerPrice: product.offerPrice,
                                            rating: product.rating,
                                            goto: product.id,
                                            onHandlecart: ($event) => AddCart(product)
                                          }, null, 8, ["name", "image", "desc", "salePrice", "offerPrice", "rating", "goto", "onHandlecart"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                })) : (openBlock(), createBlock(_sfc_main$4, { key: 1 }))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_sheet, { class: "pa-6" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex gap-2 align-center mb-4 justify-space-between" }, [
                                createVNode("h5", { class: "text-h5 d-none d-lg-flex font-weight-semibold" }, "Products"),
                                createVNode(_component_v_sheet, { width: "250" }, {
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
                                })
                              ]),
                              filteredProducts.value.length >= 1 ? (openBlock(), createBlock(_component_v_row, { key: 0 }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(filteredProducts.value, (product) => {
                                    return openBlock(), createBlock(_component_v_col, {
                                      cols: "12",
                                      lg: "4",
                                      sm: "6",
                                      key: product.id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$3, {
                                          name: product.name,
                                          image: product.image,
                                          desc: product.description,
                                          salePrice: product.salePrice,
                                          offerPrice: product.offerPrice,
                                          rating: product.rating,
                                          goto: product.id,
                                          onHandlecart: ($event) => AddCart(product)
                                        }, null, 8, ["name", "image", "desc", "salePrice", "offerPrice", "rating", "goto", "onHandlecart"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              })) : (openBlock(), createBlock(_sfc_main$4, { key: 1 }))
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
                    createVNode(_component_perfect_scrollbar, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_sheet, { class: "pa-6" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex gap-2 align-center mb-4 justify-space-between" }, [
                              createVNode("h5", { class: "text-h5 d-none d-lg-flex font-weight-semibold" }, "Products"),
                              createVNode(_component_v_sheet, { width: "250" }, {
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
                              })
                            ]),
                            filteredProducts.value.length >= 1 ? (openBlock(), createBlock(_component_v_row, { key: 0 }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(filteredProducts.value, (product) => {
                                  return openBlock(), createBlock(_component_v_col, {
                                    cols: "12",
                                    lg: "4",
                                    sm: "6",
                                    key: product.id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$3, {
                                        name: product.name,
                                        image: product.image,
                                        desc: product.description,
                                        salePrice: product.salePrice,
                                        offerPrice: product.offerPrice,
                                        rating: product.rating,
                                        goto: product.id,
                                        onHandlecart: ($event) => AddCart(product)
                                      }, null, 8, ["name", "image", "desc", "salePrice", "offerPrice", "rating", "goto", "onHandlecart"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock(_sfc_main$4, { key: 1 }))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              mobileLeftContent: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, null, {
                leftpart: withCtx(() => [
                  createVNode(_sfc_main$2)
                ]),
                rightpart: withCtx(() => [
                  createVNode(_component_perfect_scrollbar, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_sheet, { class: "pa-6" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex gap-2 align-center mb-4 justify-space-between" }, [
                            createVNode("h5", { class: "text-h5 d-none d-lg-flex font-weight-semibold" }, "Products"),
                            createVNode(_component_v_sheet, { width: "250" }, {
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
                            })
                          ]),
                          filteredProducts.value.length >= 1 ? (openBlock(), createBlock(_component_v_row, { key: 0 }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(filteredProducts.value, (product) => {
                                return openBlock(), createBlock(_component_v_col, {
                                  cols: "12",
                                  lg: "4",
                                  sm: "6",
                                  key: product.id
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$3, {
                                      name: product.name,
                                      image: product.image,
                                      desc: product.description,
                                      salePrice: product.salePrice,
                                      offerPrice: product.offerPrice,
                                      rating: product.rating,
                                      goto: product.id,
                                      onHandlecart: ($event) => AddCart(product)
                                    }, null, 8, ["name", "image", "desc", "salePrice", "offerPrice", "rating", "goto", "onHandlecart"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(_sfc_main$4, { key: 1 }))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                mobileLeftContent: withCtx(() => [
                  createVNode(_sfc_main$2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/eCommerce/ProductsTwo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductsTwo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-07667164"]]);
export {
  ProductsTwo as default
};
//# sourceMappingURL=ProductsTwo-C79nQBbR.js.map
