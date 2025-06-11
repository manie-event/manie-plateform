import { computed, ref, resolveComponent, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext, defineComponent, createTextVNode, mergeProps, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { u as useEcomStore } from "./eCommerce-D0OnZgt2.js";
import { useRoute } from "vue-router";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { t as image1, v as image2, w as img6, x as proimg1, y as proimg2, z as img9, A as img10, s as img11 } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./client-only-Bwxzq3Sq.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-DZ3wFR7I.js";
import { P as ProductDescription } from "./ProductDescription-2bFBUTXs.js";
import { P as ProductItemVue } from "./ProductItemOne-DBRBLEM8.js";
import { ChevronLeftIcon, ChevronRightIcon } from "vue-tabler-icons";
import "lodash";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
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
import "vue-draggable-next";
import "vue3-easy-data-table";
import "vue-easy-lightbox";
import "vue-scrollto";
const _sfc_main$4 = {
  __name: "ProducOneCurosel",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useEcomStore();
    const route = useRoute();
    const getDetailImage = computed(() => {
      return store.products[route.params.id - 1].image;
    });
    const slideShow = [
      {
        image: getDetailImage.value,
        id: 1
      },
      {
        image: image1,
        id: 2
      },
      {
        image: image2,
        id: 3
      },
      {
        image: img6,
        id: 4
      },
      {
        image: proimg1,
        id: 5
      },
      {
        image: proimg2,
        id: 6
      },
      {
        image: img9,
        id: 7
      },
      {
        image: img10,
        id: 8
      },
      {
        image: img11,
        id: 9
      }
    ];
    const currentSlide = ref(0);
    function slideTo(val) {
      currentSlide.value = val;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_avatar = resolveComponent("v-avatar");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Carousel), {
        id: "gallery",
        "items-to-show": 1,
        "wrap-around": false,
        modelValue: currentSlide.value,
        "onUpdate:modelValue": ($event) => currentSlide.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(slideShow, (slide, i) => {
              _push2(ssrRenderComponent(unref(Slide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="carousel__item"${_scopeId2}><img alt="product"${ssrRenderAttr("src", slide.image)} class="w-100 rounded-xl"${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "carousel__item" }, [
                        createVNode("img", {
                          alt: "product",
                          src: slide.image,
                          class: "w-100 rounded-xl"
                        }, null, 8, ["src"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(slideShow, (slide, i) => {
                return createVNode(unref(Slide), { key: i }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "carousel__item" }, [
                      createVNode("img", {
                        alt: "product",
                        src: slide.image,
                        class: "w-100 rounded-xl"
                      }, null, 8, ["src"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Carousel), {
        id: "thumbnails",
        class: "mt-4",
        currentSlide: currentSlide.value,
        transition: 500,
        "items-to-show": 7,
        "wrap-around": false,
        modelValue: currentSlide.value,
        "onUpdate:modelValue": ($event) => currentSlide.value = $event,
        ref: "carousel"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(slideShow, (slide, i) => {
              _push2(ssrRenderComponent(unref(Slide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="carousel__item cursor-pointer"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_avatar, { class: "thumb" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img alt="product"${ssrRenderAttr("src", slide.image)} class="rounded-circle w-100"${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              alt: "product",
                              src: slide.image,
                              class: "rounded-circle w-100"
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "carousel__item cursor-pointer",
                        onClick: ($event) => slideTo(slide.id - 1)
                      }, [
                        createVNode(_component_v_avatar, { class: "thumb" }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              alt: "product",
                              src: slide.image,
                              class: "rounded-circle w-100"
                            }, null, 8, ["src"])
                          ]),
                          _: 2
                        }, 1024)
                      ], 8, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(slideShow, (slide, i) => {
                return createVNode(unref(Slide), { key: i }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "carousel__item cursor-pointer",
                      onClick: ($event) => slideTo(slide.id - 1)
                    }, [
                      createVNode(_component_v_avatar, { class: "thumb" }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            alt: "product",
                            src: slide.image,
                            class: "rounded-circle w-100"
                          }, null, 8, ["src"])
                        ]),
                        _: 2
                      }, 1024)
                    ], 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/ecommerce/detail/one/ProducOneCurosel.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ProductReviewOne",
  __ssrInlineRender: true,
  setup(__props) {
    const rating = ref(4);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VCard = resolveComponent("VCard");
      const _component_ClientOnly = __nuxt_component_0;
      const _component_v_rating = resolveComponent("v-rating");
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_VCard, {
        elevation: "0",
        class: "bg-lightsecondary pa-4 mb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class=""${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
            _push2(`<h5 class="text-h5 mb-3"${_scopeId}>Brooklyn Simmons</h5><p class="text-subtitle-1 text-grey200 font-weight-medium"${_scopeId}> &quot;We&#39;re loving it. This is simply unbelievable! I like it more and more each day because it makes my life a lot easier.&quot; </p></div>`);
          } else {
            return [
              createVNode("div", { class: "" }, [
                createVNode(_component_ClientOnly, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_rating, {
                      color: "warning",
                      "half-increments": "",
                      modelValue: rating.value,
                      "onUpdate:modelValue": ($event) => rating.value = $event,
                      size: "small",
                      density: "compact",
                      class: "mb-2"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("h5", { class: "text-h5 mb-3" }, "Brooklyn Simmons"),
                createVNode("p", { class: "text-subtitle-1 text-grey200 font-weight-medium" }, ` "We're loving it. This is simply unbelievable! I like it more and more each day because it makes my life a lot easier." `)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_VCard, {
        elevation: "0",
        class: "bg-lightsecondary pa-4 mb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class=""${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
            _push2(`<h5 class="text-h5 mb-3"${_scopeId}>Ralph Edwards</h5><p class="text-subtitle-1 text-grey200 font-weight-medium"${_scopeId}> &quot;I&#39;d be lost without it. It&#39;s incredible. It&#39;s is the real deal! Since I invested in it I made over 100,000 dollars profits.&quot; </p></div>`);
          } else {
            return [
              createVNode("div", { class: "" }, [
                createVNode(_component_ClientOnly, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_rating, {
                      color: "warning",
                      "half-increments": "",
                      modelValue: rating.value,
                      "onUpdate:modelValue": ($event) => rating.value = $event,
                      size: "small",
                      density: "compact",
                      class: "mb-2"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("h5", { class: "text-h5 mb-3" }, "Ralph Edwards"),
                createVNode("p", { class: "text-subtitle-1 text-grey200 font-weight-medium" }, ` "I'd be lost without it. It's incredible. It's is the real deal! Since I invested in it I made over 100,000 dollars profits." `)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_VCard, {
        elevation: "0",
        class: "bg-lightsecondary pa-4 mb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class=""${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
            _push2(`<h5 class="text-h5 mb-3"${_scopeId}>Savannah Nguyen</h5><p class="text-subtitle-1 text-grey200 font-weight-medium"${_scopeId}> &quot;I STRONGLY recommend it to EVERYONE interested in running a successful online business!&quot; </p></div>`);
          } else {
            return [
              createVNode("div", { class: "" }, [
                createVNode(_component_ClientOnly, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_rating, {
                      color: "warning",
                      "half-increments": "",
                      modelValue: rating.value,
                      "onUpdate:modelValue": ($event) => rating.value = $event,
                      size: "small",
                      density: "compact",
                      class: "mb-2"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("h5", { class: "text-h5 mb-3" }, "Savannah Nguyen"),
                createVNode("p", { class: "text-subtitle-1 text-grey200 font-weight-medium" }, ' "I STRONGLY recommend it to EVERYONE interested in running a successful online business!" ')
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "",
        class: "text-primary text-subtitle-1 font-weight-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View all reviews`);
          } else {
            return [
              createTextVNode("View all reviews")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/ecommerce/detail/one/ProductReviewOne.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "ProductDetailOne",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useEcomStore();
    const route = useRoute();
    ref(["10", "09", "08", "07"]);
    ref(["10"]);
    ref(1);
    const getProduct = computed(() => {
      return store.products[route.params.id - 1];
    });
    const sizev = ref("Medium");
    const Sizeitems = ref(["Small", "Medium", "Large", "X-Large"]);
    const colorv = ref("Red");
    const coloritems = ref(["Yellow", "Brown", "Green", "Black"]);
    ref([0]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_btn_toggle = resolveComponent("v-btn-toggle");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_MinusIcon = resolveComponent("MinusIcon");
      const _component_PlusIcon = resolveComponent("PlusIcon");
      const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
      const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
      const _component_v_expansion_panel_title = resolveComponent("v-expansion-panel-title");
      const _component_v_expansion_panel_text = resolveComponent("v-expansion-panel-text");
      if (getProduct.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-detail" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_v_row, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_col, {
                md: "6",
                sm: "12"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$4, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$4)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_col, {
                md: "6",
                sm: "12",
                class: "pl-lg-5"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b;
                  if (_push3) {
                    _push3(`<div${_scopeId2}><h3 class="text-28 text-grey200 font-weight-semibold"${_scopeId2}>${ssrInterpolate(getProduct.value.name)}</h3></div><div class="text-medium-emphasis align-center d-flex mt-1 gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_icon, {
                      icon: "mdi-star",
                      color: "warning",
                      size: "20"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="font-weight-semibold text-grey200 text-h5 ml-n1"${_scopeId2}>${ssrInterpolate((_a = getProduct.value.rating) == null ? void 0 : _a.toFixed(1))}</span><span class="font-weight-medium text-grey100 text-h5"${_scopeId2}>(${ssrInterpolate(getProduct.value.rank)} reviews)</span></div><p class="px-0 h5 font-weight-medium my-4"${_scopeId2}>${ssrInterpolate(getProduct.value.description)}</p><div class="d-flex align-center gap-2"${_scopeId2}><p class="text-decoration-line-through text-h4"${_scopeId2}>$${ssrInterpolate(getProduct.value.offerPrice)}</p><h4 class="text-h4 text-grey100"${_scopeId2}>$${ssrInterpolate(getProduct.value.salePrice)}</h4></div>`);
                    _push3(ssrRenderComponent(_component_v_divider, { class: "my-5" }, null, _parent3, _scopeId2));
                    _push3(`<div class="d-flex align-center mb-6"${_scopeId2}><h4 class="text-h5 me-6"${_scopeId2}>Size:</h4>`);
                    _push3(ssrRenderComponent(_component_v_col, {
                      sm: "auto",
                      class: "py-0"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_select, {
                            modelValue: sizev.value,
                            "onUpdate:modelValue": ($event) => sizev.value = $event,
                            items: Sizeitems.value,
                            variant: "outlined",
                            density: "comfortable",
                            class: "font-weight-semibold text-h5 text-grey100",
                            "hide-details": ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_select, {
                              modelValue: sizev.value,
                              "onUpdate:modelValue": ($event) => sizev.value = $event,
                              items: Sizeitems.value,
                              variant: "outlined",
                              density: "comfortable",
                              class: "font-weight-semibold text-h5 text-grey100",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="d-flex align-center mb-6"${_scopeId2}><h4 class="text-h5 me-3"${_scopeId2}>Color:</h4>`);
                    _push3(ssrRenderComponent(_component_v_col, {
                      sm: "auto",
                      class: "py-0"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_select, {
                            modelValue: colorv.value,
                            "onUpdate:modelValue": ($event) => colorv.value = $event,
                            items: coloritems.value,
                            variant: "outlined",
                            density: "comfortable",
                            class: "font-weight-semibold text-h5 text-grey100",
                            "hide-details": ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_select, {
                              modelValue: colorv.value,
                              "onUpdate:modelValue": ($event) => colorv.value = $event,
                              items: coloritems.value,
                              variant: "outlined",
                              density: "comfortable",
                              class: "font-weight-semibold text-h5 text-grey100",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="d-flex align-center mb-3"${_scopeId2}><h4 class="text-h5 me-7"${_scopeId2}>Qty:</h4>`);
                    _push3(ssrRenderComponent(_component_v_col, {
                      sm: "auto",
                      class: "py-0"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_btn_toggle, {
                            divided: "",
                            variant: "outlined",
                            rounded: "md"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  size: "small",
                                  density: "compact",
                                  class: "border-right",
                                  color: "secondary",
                                  onClick: ($event) => unref(store).decrementQty(getProduct.value.id)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_MinusIcon, {
                                        size: "16",
                                        class: "text-grey100"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_MinusIcon, {
                                          size: "16",
                                          class: "text-grey100"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  size: "small",
                                  density: "compact",
                                  color: "secondary",
                                  class: "text-h6 text-grey100 font-weight-semibold border-right"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(getProduct.value.qty)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(getProduct.value.qty), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  size: "small",
                                  density: "compact",
                                  color: "secondary",
                                  onClick: ($event) => unref(store).incrementQty(getProduct.value.id)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_PlusIcon, {
                                        size: "16",
                                        class: "text-grey100"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_PlusIcon, {
                                          size: "16",
                                          class: "text-grey100"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_btn, {
                                    size: "small",
                                    density: "compact",
                                    class: "border-right",
                                    color: "secondary",
                                    onClick: ($event) => unref(store).decrementQty(getProduct.value.id)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_MinusIcon, {
                                        size: "16",
                                        class: "text-grey100"
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_v_btn, {
                                    size: "small",
                                    density: "compact",
                                    color: "secondary",
                                    class: "text-h6 text-grey100 font-weight-semibold border-right"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(getProduct.value.qty), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_btn, {
                                    size: "small",
                                    density: "compact",
                                    color: "secondary",
                                    onClick: ($event) => unref(store).incrementQty(getProduct.value.id)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_PlusIcon, {
                                        size: "16",
                                        class: "text-grey100"
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_btn_toggle, {
                              divided: "",
                              variant: "outlined",
                              rounded: "md"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_btn, {
                                  size: "small",
                                  density: "compact",
                                  class: "border-right",
                                  color: "secondary",
                                  onClick: ($event) => unref(store).decrementQty(getProduct.value.id)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_MinusIcon, {
                                      size: "16",
                                      class: "text-grey100"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_v_btn, {
                                  size: "small",
                                  density: "compact",
                                  color: "secondary",
                                  class: "text-h6 text-grey100 font-weight-semibold border-right"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(getProduct.value.qty), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  size: "small",
                                  density: "compact",
                                  color: "secondary",
                                  onClick: ($event) => unref(store).incrementQty(getProduct.value.id)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_PlusIcon, {
                                      size: "16",
                                      class: "text-grey100"
                                    })
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
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(_component_v_row, { class: "mt-3" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  block: "",
                                  variant: "outlined",
                                  size: "x-large",
                                  rounded: "pill",
                                  color: "primary"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Add to Wishlist`);
                                    } else {
                                      return [
                                        createTextVNode("Add to Wishlist")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_btn, {
                                    block: "",
                                    variant: "outlined",
                                    size: "x-large",
                                    rounded: "pill",
                                    color: "primary"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Add to Wishlist")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            class: "mt-sm-0 mt-n3"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  block: "",
                                  size: "x-large",
                                  rounded: "pill",
                                  color: "primary",
                                  onClick: ($event) => unref(store).AddToCart(getProduct.value)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Add To Cart`);
                                    } else {
                                      return [
                                        createTextVNode("Add To Cart")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_btn, {
                                    block: "",
                                    size: "x-large",
                                    rounded: "pill",
                                    color: "primary",
                                    onClick: ($event) => unref(store).AddToCart(getProduct.value)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Add To Cart")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_btn, {
                                  block: "",
                                  variant: "outlined",
                                  size: "x-large",
                                  rounded: "pill",
                                  color: "primary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Add to Wishlist")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "6",
                              class: "mt-sm-0 mt-n3"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_btn, {
                                  block: "",
                                  size: "x-large",
                                  rounded: "pill",
                                  color: "primary",
                                  onClick: ($event) => unref(store).AddToCart(getProduct.value)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Add To Cart")
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
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_divider, { class: "mt-6" }, null, _parent3, _scopeId2));
                    _push3(`<div class="product-overview"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_expansion_panels, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_expansion_panel, { elevation: "0" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_expansion_panel_title, { class: "text-h5 px-0 py-6" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Description`);
                                    } else {
                                      return [
                                        createTextVNode("Description")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_expansion_panel_text, { class: "px-0 text-subtitle-1 text-grey200 font-weight-medium" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(ProductDescription, null, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(ProductDescription)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_expansion_panel_title, { class: "text-h5 px-0 py-6" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Description")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_expansion_panel_text, { class: "px-0 text-subtitle-1 text-grey200 font-weight-medium" }, {
                                    default: withCtx(() => [
                                      createVNode(ProductDescription)
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
                                _push5(ssrRenderComponent(_component_v_expansion_panel_title, { class: "text-h5 px-0 py-6" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="align-center d-flex mt-1 gap-2"${_scopeId5}><span class="text-h5"${_scopeId5}>${ssrInterpolate(getProduct.value.rank)} reviews</span></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "align-center d-flex mt-1 gap-2" }, [
                                          createVNode("span", { class: "text-h5" }, toDisplayString(getProduct.value.rank) + " reviews", 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_expansion_panel_text, { class: "px-0 text-subtitle-1 text-grey200 font-weight-medium" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_sfc_main$3, null, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_sfc_main$3)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_expansion_panel_title, { class: "text-h5 px-0 py-6" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "align-center d-flex mt-1 gap-2" }, [
                                        createVNode("span", { class: "text-h5" }, toDisplayString(getProduct.value.rank) + " reviews", 1)
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_expansion_panel_text, { class: "px-0 text-subtitle-1 text-grey200 font-weight-medium" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$3)
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_divider, null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_expansion_panel, { elevation: "0" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_expansion_panel_title, { class: "text-h5 px-0 py-6" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Description")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_expansion_panel_text, { class: "px-0 text-subtitle-1 text-grey200 font-weight-medium" }, {
                                  default: withCtx(() => [
                                    createVNode(ProductDescription)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_divider),
                            createVNode(_component_v_expansion_panel, { elevation: "0" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_expansion_panel_title, { class: "text-h5 px-0 py-6" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "align-center d-flex mt-1 gap-2" }, [
                                      createVNode("span", { class: "text-h5" }, toDisplayString(getProduct.value.rank) + " reviews", 1)
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_expansion_panel_text, { class: "px-0 text-subtitle-1 text-grey200 font-weight-medium" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$3)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_divider)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-28 text-grey200 font-weight-semibold" }, toDisplayString(getProduct.value.name), 1)
                      ]),
                      createVNode("div", { class: "text-medium-emphasis align-center d-flex mt-1 gap-2" }, [
                        createVNode(_component_v_icon, {
                          icon: "mdi-star",
                          color: "warning",
                          size: "20"
                        }),
                        createVNode("span", { class: "font-weight-semibold text-grey200 text-h5 ml-n1" }, toDisplayString((_b = getProduct.value.rating) == null ? void 0 : _b.toFixed(1)), 1),
                        createVNode("span", { class: "font-weight-medium text-grey100 text-h5" }, "(" + toDisplayString(getProduct.value.rank) + " reviews)", 1)
                      ]),
                      createVNode("p", { class: "px-0 h5 font-weight-medium my-4" }, toDisplayString(getProduct.value.description), 1),
                      createVNode("div", { class: "d-flex align-center gap-2" }, [
                        createVNode("p", { class: "text-decoration-line-through text-h4" }, "$" + toDisplayString(getProduct.value.offerPrice), 1),
                        createVNode("h4", { class: "text-h4 text-grey100" }, "$" + toDisplayString(getProduct.value.salePrice), 1)
                      ]),
                      createVNode(_component_v_divider, { class: "my-5" }),
                      createVNode("div", { class: "d-flex align-center mb-6" }, [
                        createVNode("h4", { class: "text-h5 me-6" }, "Size:"),
                        createVNode(_component_v_col, {
                          sm: "auto",
                          class: "py-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_select, {
                              modelValue: sizev.value,
                              "onUpdate:modelValue": ($event) => sizev.value = $event,
                              items: Sizeitems.value,
                              variant: "outlined",
                              density: "comfortable",
                              class: "font-weight-semibold text-h5 text-grey100",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "d-flex align-center mb-6" }, [
                        createVNode("h4", { class: "text-h5 me-3" }, "Color:"),
                        createVNode(_component_v_col, {
                          sm: "auto",
                          class: "py-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_select, {
                              modelValue: colorv.value,
                              "onUpdate:modelValue": ($event) => colorv.value = $event,
                              items: coloritems.value,
                              variant: "outlined",
                              density: "comfortable",
                              class: "font-weight-semibold text-h5 text-grey100",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "d-flex align-center mb-3" }, [
                        createVNode("h4", { class: "text-h5 me-7" }, "Qty:"),
                        createVNode(_component_v_col, {
                          sm: "auto",
                          class: "py-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn_toggle, {
                              divided: "",
                              variant: "outlined",
                              rounded: "md"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_btn, {
                                  size: "small",
                                  density: "compact",
                                  class: "border-right",
                                  color: "secondary",
                                  onClick: ($event) => unref(store).decrementQty(getProduct.value.id)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_MinusIcon, {
                                      size: "16",
                                      class: "text-grey100"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_v_btn, {
                                  size: "small",
                                  density: "compact",
                                  color: "secondary",
                                  class: "text-h6 text-grey100 font-weight-semibold border-right"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(getProduct.value.qty), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  size: "small",
                                  density: "compact",
                                  color: "secondary",
                                  onClick: ($event) => unref(store).incrementQty(getProduct.value.id)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_PlusIcon, {
                                      size: "16",
                                      class: "text-grey100"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_v_row, { class: "mt-3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                block: "",
                                variant: "outlined",
                                size: "x-large",
                                rounded: "pill",
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Add to Wishlist")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            class: "mt-sm-0 mt-n3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                block: "",
                                size: "x-large",
                                rounded: "pill",
                                color: "primary",
                                onClick: ($event) => unref(store).AddToCart(getProduct.value)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Add To Cart")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_divider, { class: "mt-6" }),
                      createVNode("div", { class: "product-overview" }, [
                        createVNode(_component_v_expansion_panels, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_expansion_panel, { elevation: "0" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_expansion_panel_title, { class: "text-h5 px-0 py-6" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Description")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_expansion_panel_text, { class: "px-0 text-subtitle-1 text-grey200 font-weight-medium" }, {
                                  default: withCtx(() => [
                                    createVNode(ProductDescription)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_divider),
                            createVNode(_component_v_expansion_panel, { elevation: "0" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_expansion_panel_title, { class: "text-h5 px-0 py-6" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "align-center d-flex mt-1 gap-2" }, [
                                      createVNode("span", { class: "text-h5" }, toDisplayString(getProduct.value.rank) + " reviews", 1)
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_expansion_panel_text, { class: "px-0 text-subtitle-1 text-grey200 font-weight-medium" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$3)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_divider)
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
                createVNode(_component_v_col, {
                  md: "6",
                  sm: "12"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$4)
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  md: "6",
                  sm: "12",
                  class: "pl-lg-5"
                }, {
                  default: withCtx(() => {
                    var _a;
                    return [
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-28 text-grey200 font-weight-semibold" }, toDisplayString(getProduct.value.name), 1)
                      ]),
                      createVNode("div", { class: "text-medium-emphasis align-center d-flex mt-1 gap-2" }, [
                        createVNode(_component_v_icon, {
                          icon: "mdi-star",
                          color: "warning",
                          size: "20"
                        }),
                        createVNode("span", { class: "font-weight-semibold text-grey200 text-h5 ml-n1" }, toDisplayString((_a = getProduct.value.rating) == null ? void 0 : _a.toFixed(1)), 1),
                        createVNode("span", { class: "font-weight-medium text-grey100 text-h5" }, "(" + toDisplayString(getProduct.value.rank) + " reviews)", 1)
                      ]),
                      createVNode("p", { class: "px-0 h5 font-weight-medium my-4" }, toDisplayString(getProduct.value.description), 1),
                      createVNode("div", { class: "d-flex align-center gap-2" }, [
                        createVNode("p", { class: "text-decoration-line-through text-h4" }, "$" + toDisplayString(getProduct.value.offerPrice), 1),
                        createVNode("h4", { class: "text-h4 text-grey100" }, "$" + toDisplayString(getProduct.value.salePrice), 1)
                      ]),
                      createVNode(_component_v_divider, { class: "my-5" }),
                      createVNode("div", { class: "d-flex align-center mb-6" }, [
                        createVNode("h4", { class: "text-h5 me-6" }, "Size:"),
                        createVNode(_component_v_col, {
                          sm: "auto",
                          class: "py-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_select, {
                              modelValue: sizev.value,
                              "onUpdate:modelValue": ($event) => sizev.value = $event,
                              items: Sizeitems.value,
                              variant: "outlined",
                              density: "comfortable",
                              class: "font-weight-semibold text-h5 text-grey100",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "d-flex align-center mb-6" }, [
                        createVNode("h4", { class: "text-h5 me-3" }, "Color:"),
                        createVNode(_component_v_col, {
                          sm: "auto",
                          class: "py-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_select, {
                              modelValue: colorv.value,
                              "onUpdate:modelValue": ($event) => colorv.value = $event,
                              items: coloritems.value,
                              variant: "outlined",
                              density: "comfortable",
                              class: "font-weight-semibold text-h5 text-grey100",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "d-flex align-center mb-3" }, [
                        createVNode("h4", { class: "text-h5 me-7" }, "Qty:"),
                        createVNode(_component_v_col, {
                          sm: "auto",
                          class: "py-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn_toggle, {
                              divided: "",
                              variant: "outlined",
                              rounded: "md"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_btn, {
                                  size: "small",
                                  density: "compact",
                                  class: "border-right",
                                  color: "secondary",
                                  onClick: ($event) => unref(store).decrementQty(getProduct.value.id)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_MinusIcon, {
                                      size: "16",
                                      class: "text-grey100"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_v_btn, {
                                  size: "small",
                                  density: "compact",
                                  color: "secondary",
                                  class: "text-h6 text-grey100 font-weight-semibold border-right"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(getProduct.value.qty), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  size: "small",
                                  density: "compact",
                                  color: "secondary",
                                  onClick: ($event) => unref(store).incrementQty(getProduct.value.id)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_PlusIcon, {
                                      size: "16",
                                      class: "text-grey100"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_v_row, { class: "mt-3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                block: "",
                                variant: "outlined",
                                size: "x-large",
                                rounded: "pill",
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Add to Wishlist")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            class: "mt-sm-0 mt-n3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                block: "",
                                size: "x-large",
                                rounded: "pill",
                                color: "primary",
                                onClick: ($event) => unref(store).AddToCart(getProduct.value)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Add To Cart")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_divider, { class: "mt-6" }),
                      createVNode("div", { class: "product-overview" }, [
                        createVNode(_component_v_expansion_panels, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_expansion_panel, { elevation: "0" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_expansion_panel_title, { class: "text-h5 px-0 py-6" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Description")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_expansion_panel_text, { class: "px-0 text-subtitle-1 text-grey200 font-weight-medium" }, {
                                  default: withCtx(() => [
                                    createVNode(ProductDescription)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_divider),
                            createVNode(_component_v_expansion_panel, { elevation: "0" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_expansion_panel_title, { class: "text-h5 px-0 py-6" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "align-center d-flex mt-1 gap-2" }, [
                                      createVNode("span", { class: "text-h5" }, toDisplayString(getProduct.value.rank) + " reviews", 1)
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_expansion_panel_text, { class: "px-0 text-subtitle-1 text-grey200 font-weight-medium" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$3)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_divider)
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/ecommerce/detail/one/ProductDetailOne.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const RelatedSlider = {
  snapAlign: "start",
  itemsToShow: 4,
  itemsToScroll: 1,
  autoplay: false,
  transition: 600,
  wrapAround: true
};
const RelatedSliderBreakpoints = {
  300: { itemsToShow: 1 },
  600: { itemsToShow: 2 },
  767: { itemsToShow: 2 },
  991: { itemsToShow: 3 },
  1024: { itemsToShow: 3 },
  1500: { itemsToShow: 4 }
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RelatedProductOne",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useEcomStore();
    const getProducts = computed(() => {
      return store.products;
    });
    function AddCart(p) {
      store.AddToCart(p);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_avatar = resolveComponent("v-avatar");
      _push(`<!--[--><h4 class="text-h4 my-7 font-weight-semibold">You might also like</h4>`);
      _push(ssrRenderComponent(unref(Carousel), {
        settings: unref(RelatedSlider),
        breakpoints: unref(RelatedSliderBreakpoints),
        class: "related-Product"
      }, {
        addons: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Navigation), { class: "navarrow mt-n9" }, {
              next: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_avatar, {
                    size: "36",
                    class: "bg-lightsecondary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ChevronRightIcon), {
                          class: "text-grey200",
                          size: "20",
                          "stroke-width": "1.5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(ChevronRightIcon), {
                            class: "text-grey200",
                            size: "20",
                            "stroke-width": "1.5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</span>`);
                } else {
                  return [
                    createVNode("span", null, [
                      createVNode(_component_v_avatar, {
                        size: "36",
                        class: "bg-lightsecondary"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ChevronRightIcon), {
                            class: "text-grey200",
                            size: "20",
                            "stroke-width": "1.5"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              prev: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_avatar, {
                    size: "36",
                    class: "bg-lightsecondary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ChevronLeftIcon), {
                          class: "text-grey200",
                          size: "20",
                          "stroke-width": "1.5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(ChevronLeftIcon), {
                            class: "text-grey200",
                            size: "20",
                            "stroke-width": "1.5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</span>`);
                } else {
                  return [
                    createVNode("span", null, [
                      createVNode(_component_v_avatar, {
                        size: "36",
                        class: "bg-lightsecondary"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ChevronLeftIcon), {
                            class: "text-grey200",
                            size: "20",
                            "stroke-width": "1.5"
                          })
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
              createVNode(unref(Navigation), { class: "navarrow mt-n9" }, {
                next: withCtx(() => [
                  createVNode("span", null, [
                    createVNode(_component_v_avatar, {
                      size: "36",
                      class: "bg-lightsecondary"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ChevronRightIcon), {
                          class: "text-grey200",
                          size: "20",
                          "stroke-width": "1.5"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                prev: withCtx(() => [
                  createVNode("span", null, [
                    createVNode(_component_v_avatar, {
                      size: "36",
                      class: "bg-lightsecondary"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ChevronLeftIcon), {
                          class: "text-grey200",
                          size: "20",
                          "stroke-width": "1.5"
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
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(getProducts.value, (product) => {
              _push2(ssrRenderComponent(unref(Slide), {
                key: product.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(ProductItemVue, {
                      name: product.name,
                      image: product.image,
                      desc: product.description,
                      salePrice: product.salePrice,
                      offerPrice: product.offerPrice,
                      rating: product.rating,
                      rank: product.rank,
                      goto: 1,
                      onHandlecart: ($event) => AddCart(product)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(ProductItemVue, {
                        name: product.name,
                        image: product.image,
                        desc: product.description,
                        salePrice: product.salePrice,
                        offerPrice: product.offerPrice,
                        rating: product.rating,
                        rank: product.rank,
                        goto: 1,
                        onHandlecart: ($event) => AddCart(product)
                      }, null, 8, ["name", "image", "desc", "salePrice", "offerPrice", "rating", "rank", "onHandlecart"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(getProducts.value, (product) => {
                return openBlock(), createBlock(unref(Slide), {
                  key: product.id
                }, {
                  default: withCtx(() => [
                    createVNode(ProductItemVue, {
                      name: product.name,
                      image: product.image,
                      desc: product.description,
                      salePrice: product.salePrice,
                      offerPrice: product.offerPrice,
                      rating: product.rating,
                      rank: product.rank,
                      goto: 1,
                      onHandlecart: ($event) => AddCart(product)
                    }, null, 8, ["name", "image", "desc", "salePrice", "offerPrice", "rating", "rank", "onHandlecart"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/ecommerce/detail/one/RelatedProductOne.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_divider = resolveComponent("v-divider");
      _push(ssrRenderComponent(_component_v_row, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_text, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$2, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_divider, { class: "mt-10" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_sfc_main$1, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$2),
                                createVNode(_component_v_divider, { class: "mt-10" }),
                                createVNode(_sfc_main$1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2),
                              createVNode(_component_v_divider, { class: "mt-10" }),
                              createVNode(_sfc_main$1)
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
                    createVNode(_component_v_card, { elevation: "10" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2),
                            createVNode(_component_v_divider, { class: "mt-10" }),
                            createVNode(_sfc_main$1)
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
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, { elevation: "10" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_text, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$2),
                          createVNode(_component_v_divider, { class: "mt-10" }),
                          createVNode(_sfc_main$1)
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
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/eCommerce/product/one/detail/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-AUOnX_5Z.js.map
