import { defineComponent, resolveComponent, withCtx, createVNode, ref, computed, mergeProps, createTextVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './client-only-Bwxzq3Sq.mjs';
import { u as useEcomStore } from './eCommerce-D0OnZgt2.mjs';
import { useRoute, RouterLink } from 'vue-router';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { t as image1$1, v as image2$1, w as img6$2, x as proimg1, y as proimg2, z as img9, A as img10, s as img11 } from './server.mjs';
import { _ as _sfc_main$6 } from './ProductItem-C25Mm-U3.mjs';
import { P as ProductDescription } from './ProductDescription-2bFBUTXs.mjs';
import 'lodash';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-tabler-icons';
import 'vue3-perfect-scrollbar';
import 'maska';
import 'axios-mock-adapter';
import 'axios';
import 'chance';
import 'date-fns';
import 'vue-draggable-next';
import 'vue3-easy-data-table';
import 'vue-easy-lightbox';
import 'vue-scrollto';

const _sfc_main$5 = {
  __name: "ProductCarousel",
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
        image: image1$1,
        id: 2
      },
      {
        image: image2$1,
        id: 3
      },
      {
        image: img6$2,
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
      const _component_ChevronRightIcon = resolveComponent("ChevronRightIcon");
      const _component_ChevronLeftIcon = resolveComponent("ChevronLeftIcon");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Carousel), {
        id: "gallery",
        "items-to-show": 1,
        "wrap-around": false,
        modelValue: currentSlide.value,
        "onUpdate:modelValue": ($event) => currentSlide.value = $event
      }, {
        addons: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Navigation), { class: "navarrow mt-n9" }, {
              next: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_avatar, {
                    size: "25",
                    class: "bg-grey100"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ChevronRightIcon, {
                          class: "text-surface",
                          size: "22",
                          "stroke-width": "2"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ChevronRightIcon, {
                            class: "text-surface",
                            size: "22",
                            "stroke-width": "2"
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
                        size: "25",
                        class: "bg-grey100"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ChevronRightIcon, {
                            class: "text-surface",
                            size: "22",
                            "stroke-width": "2"
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
                    size: "25",
                    class: "bg-grey100"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ChevronLeftIcon, {
                          class: "text-surface",
                          size: "22",
                          "stroke-width": "2"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ChevronLeftIcon, {
                            class: "text-surface",
                            size: "22",
                            "stroke-width": "2"
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
                        size: "25",
                        class: "bg-grey100"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ChevronLeftIcon, {
                            class: "text-surface",
                            size: "22",
                            "stroke-width": "2"
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
                      size: "25",
                      class: "bg-grey100"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ChevronRightIcon, {
                          class: "text-surface",
                          size: "22",
                          "stroke-width": "2"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                prev: withCtx(() => [
                  createVNode("span", null, [
                    createVNode(_component_v_avatar, {
                      size: "25",
                      class: "bg-grey100"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ChevronLeftIcon, {
                          class: "text-surface",
                          size: "22",
                          "stroke-width": "2"
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
            ssrRenderList(slideShow, (slide, i) => {
              _push2(ssrRenderComponent(unref(Slide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="carousel__item"${_scopeId2}><img alt="product"${ssrRenderAttr("src", slide.image)} class="w-100 rounded-md"${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "carousel__item" }, [
                        createVNode("img", {
                          alt: "product",
                          src: slide.image,
                          class: "w-100 rounded-md"
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
                        class: "w-100 rounded-md"
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
        currentSlide: currentSlide.value,
        transition: 500,
        "items-to-show": 6,
        "wrap-around": false,
        modelValue: currentSlide.value,
        "onUpdate:modelValue": ($event) => currentSlide.value = $event,
        ref: "carousel",
        class: "mt-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(slideShow, (slide, i) => {
              _push2(ssrRenderComponent(unref(Slide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="carousel__item cursor-pointer"${_scopeId2}><img alt="product"${ssrRenderAttr("src", slide.image)} class="w-100 rounded-md"${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "carousel__item cursor-pointer",
                        onClick: ($event) => slideTo(slide.id - 1)
                      }, [
                        createVNode("img", {
                          alt: "product",
                          src: slide.image,
                          class: "w-100 rounded-md"
                        }, null, 8, ["src"])
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
                      createVNode("img", {
                        alt: "product",
                        src: slide.image,
                        class: "w-100 rounded-md"
                      }, null, 8, ["src"])
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/ecommerce/detail/ProductCarousel.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "ProductDetail",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useEcomStore();
    const route = useRoute();
    ref(["10", "09", "08", "07"]);
    ref(["10"]);
    const setColor = ref(1);
    const getProduct = computed(() => {
      return store.products[route.params.id - 1];
    });
    function selectColor(e) {
      setColor.value = e;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_ClientOnly = __nuxt_component_0;
      const _component_v_rating = resolveComponent("v-rating");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_CheckIcon = resolveComponent("CheckIcon");
      const _component_v_btn_toggle = resolveComponent("v-btn-toggle");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_MinusIcon = resolveComponent("MinusIcon");
      const _component_PlusIcon = resolveComponent("PlusIcon");
      if (getProduct.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-detail-two" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_v_row, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_col, {
                lg: "6",
                sm: "12"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$5, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$5)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_col, {
                lg: "6",
                sm: "12",
                class: "pl-lg-5"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div${_scopeId2}><div class="d-flex align-center gap-2"${_scopeId2}>`);
                    if (getProduct.value.isStock) {
                      _push3(ssrRenderComponent(_component_v_chip, {
                        color: "success",
                        variant: "elevated",
                        size: "x-small",
                        elevation: "0"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` In Stock `);
                          } else {
                            return [
                              createTextVNode(" In Stock ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(_component_v_chip, { color: "error" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Out of Stock `);
                          } else {
                            return [
                              createTextVNode(" Out of Stock ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    }
                    _push3(`<span class="text-subtitle-2"${_scopeId2}>${ssrInterpolate(getProduct.value.gender)}</span></div><h3 class="text-h4 my-2"${_scopeId2}>${ssrInterpolate(getProduct.value.name)}</h3></div><p class="px-0 h5 font-weight-medium my-4 text-grey100"${_scopeId2}>${ssrInterpolate(getProduct.value.description)}</p><div class="d-flex align-center gap-2"${_scopeId2}><p class="text-decoration-line-through text-h4 text-grey100"${_scopeId2}> $${ssrInterpolate(getProduct.value.offerPrice)}</p><h4 class="text-h4"${_scopeId2}>$${ssrInterpolate(getProduct.value.salePrice)}</h4></div><div class="text-medium-emphasis align-center d-flex mt-3 gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                    _push3(`<span class="text-subtitle-1 text-primary font-weight-medium"${_scopeId2}>(${ssrInterpolate(getProduct.value.rank)} reviews)</span></div>`);
                    _push3(ssrRenderComponent(_component_v_divider, { class: "my-5" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_row, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_col, {
                            cols: "6",
                            sm: "2",
                            class: "d-flex align-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<h6 class="text-h6"${_scopeId4}>Colors<span class="text-error"${_scopeId4}>*</span></h6>`);
                              } else {
                                return [
                                  createVNode("h6", { class: "text-h6" }, [
                                    createTextVNode("Colors"),
                                    createVNode("span", { class: "text-error" }, "*")
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_col, {
                            cols: "6",
                            sm: "10"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(getProduct.value.colors, (color, i) => {
                                  _push5(ssrRenderComponent(_component_v_avatar, {
                                    onClick: ($event) => selectColor(i),
                                    variant: "flat",
                                    color,
                                    size: "x-small",
                                    class: "mr-1 cursor-pointer"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        if (setColor.value == i) {
                                          _push6(ssrRenderComponent(_component_CheckIcon, { size: "13" }, null, _parent6, _scopeId5));
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                      } else {
                                        return [
                                          setColor.value == i ? (openBlock(), createBlock(_component_CheckIcon, {
                                            key: 0,
                                            size: "13"
                                          })) : createCommentVNode("", true)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(getProduct.value.colors, (color, i) => {
                                    return openBlock(), createBlock(_component_v_avatar, {
                                      key: i,
                                      onClick: ($event) => selectColor(i),
                                      variant: "flat",
                                      color,
                                      size: "x-small",
                                      class: "mr-1 cursor-pointer"
                                    }, {
                                      default: withCtx(() => [
                                        setColor.value == i ? (openBlock(), createBlock(_component_CheckIcon, {
                                          key: 0,
                                          size: "13"
                                        })) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick", "color"]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_col, {
                            cols: "6",
                            sm: "2",
                            class: "d-flex align-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<h6 class="text-h6"${_scopeId4}>Quantity</h6>`);
                              } else {
                                return [
                                  createVNode("h6", { class: "text-h6" }, "Quantity")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_col, {
                            cols: "6",
                            sm: "10"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_btn_toggle, {
                                  divided: "",
                                  variant: "outlined",
                                  rounded: "md"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_btn, {
                                        size: "small",
                                        density: "compact",
                                        class: "border-right",
                                        color: "secondary",
                                        onClick: ($event) => unref(store).decrementQty(getProduct.value.id)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_MinusIcon, {
                                              size: "16",
                                              class: "text-grey100"
                                            }, null, _parent7, _scopeId6));
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
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_btn, {
                                        size: "small",
                                        density: "compact",
                                        color: "secondary",
                                        class: "text-h6 text-grey100 font-weight-semibold border-right"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(getProduct.value.qty)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(getProduct.value.qty), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_btn, {
                                        size: "small",
                                        density: "compact",
                                        color: "secondary",
                                        onClick: ($event) => unref(store).incrementQty(getProduct.value.id)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_PlusIcon, {
                                              size: "16",
                                              class: "text-grey100"
                                            }, null, _parent7, _scopeId6));
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
                                      }, _parent6, _scopeId5));
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
                                }, _parent5, _scopeId4));
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
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_col, {
                              cols: "6",
                              sm: "2",
                              class: "d-flex align-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6" }, [
                                  createTextVNode("Colors"),
                                  createVNode("span", { class: "text-error" }, "*")
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "6",
                              sm: "10"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(getProduct.value.colors, (color, i) => {
                                  return openBlock(), createBlock(_component_v_avatar, {
                                    key: i,
                                    onClick: ($event) => selectColor(i),
                                    variant: "flat",
                                    color,
                                    size: "x-small",
                                    class: "mr-1 cursor-pointer"
                                  }, {
                                    default: withCtx(() => [
                                      setColor.value == i ? (openBlock(), createBlock(_component_CheckIcon, {
                                        key: 0,
                                        size: "13"
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick", "color"]);
                                }), 128))
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "6",
                              sm: "2",
                              class: "d-flex align-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6" }, "Quantity")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "6",
                              sm: "10"
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
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_divider, { class: "my-5" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_row, { class: "mt-6" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            md: "auto",
                            sm: "3"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  block: "",
                                  size: "large",
                                  rounded: "pill",
                                  class: "px-sm-12",
                                  color: "primary",
                                  to: "/apps/ecommerce/checkout",
                                  onClick: ($event) => unref(store).AddToCart(getProduct.value)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Buy Now`);
                                    } else {
                                      return [
                                        createTextVNode("Buy Now")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_btn, {
                                    block: "",
                                    size: "large",
                                    rounded: "pill",
                                    class: "px-sm-12",
                                    color: "primary",
                                    to: "/apps/ecommerce/checkout",
                                    onClick: ($event) => unref(store).AddToCart(getProduct.value)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Buy Now")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            md: "auto",
                            sm: "3"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  block: "",
                                  size: "large",
                                  class: "px-sm-8",
                                  rounded: "pill",
                                  color: "error",
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
                                    size: "large",
                                    class: "px-sm-8",
                                    rounded: "pill",
                                    color: "error",
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
                              md: "auto",
                              sm: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_btn, {
                                  block: "",
                                  size: "large",
                                  rounded: "pill",
                                  class: "px-sm-12",
                                  color: "primary",
                                  to: "/apps/ecommerce/checkout",
                                  onClick: ($event) => unref(store).AddToCart(getProduct.value)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Buy Now")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "auto",
                              sm: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_btn, {
                                  block: "",
                                  size: "large",
                                  class: "px-sm-8",
                                  rounded: "pill",
                                  color: "error",
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
                    _push3(`<div class="mt-8"${_scopeId2}><h6 class="text-subtitle-1 font-weight-medium text-grey100"${_scopeId2}>Dispatched in 2-3 weeks</h6>`);
                    _push3(ssrRenderComponent(unref(RouterLink), {
                      to: "/",
                      class: "text-subtitle-1 text-decoration-none font-weight-medium text-primary"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Why the longer time for delivery?`);
                        } else {
                          return [
                            createTextVNode("Why the longer time for delivery?")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", null, [
                        createVNode("div", { class: "d-flex align-center gap-2" }, [
                          getProduct.value.isStock ? (openBlock(), createBlock(_component_v_chip, {
                            key: 0,
                            color: "success",
                            variant: "elevated",
                            size: "x-small",
                            elevation: "0"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" In Stock ")
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(_component_v_chip, {
                            key: 1,
                            color: "error"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Out of Stock ")
                            ]),
                            _: 1
                          })),
                          createVNode("span", { class: "text-subtitle-2" }, toDisplayString(getProduct.value.gender), 1)
                        ]),
                        createVNode("h3", { class: "text-h4 my-2" }, toDisplayString(getProduct.value.name), 1)
                      ]),
                      createVNode("p", { class: "px-0 h5 font-weight-medium my-4 text-grey100" }, toDisplayString(getProduct.value.description), 1),
                      createVNode("div", { class: "d-flex align-center gap-2" }, [
                        createVNode("p", { class: "text-decoration-line-through text-h4 text-grey100" }, " $" + toDisplayString(getProduct.value.offerPrice), 1),
                        createVNode("h4", { class: "text-h4" }, "$" + toDisplayString(getProduct.value.salePrice), 1)
                      ]),
                      createVNode("div", { class: "text-medium-emphasis align-center d-flex mt-3 gap-2" }, [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_rating, {
                              color: "warning",
                              "half-increments": "",
                              modelValue: getProduct.value.rating,
                              "onUpdate:modelValue": ($event) => getProduct.value.rating = $event,
                              size: "small",
                              density: "compact"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode("span", { class: "text-subtitle-1 text-primary font-weight-medium" }, "(" + toDisplayString(getProduct.value.rank) + " reviews)", 1)
                      ]),
                      createVNode(_component_v_divider, { class: "my-5" }),
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "6",
                            sm: "2",
                            class: "d-flex align-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-h6" }, [
                                createTextVNode("Colors"),
                                createVNode("span", { class: "text-error" }, "*")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "6",
                            sm: "10"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(getProduct.value.colors, (color, i) => {
                                return openBlock(), createBlock(_component_v_avatar, {
                                  key: i,
                                  onClick: ($event) => selectColor(i),
                                  variant: "flat",
                                  color,
                                  size: "x-small",
                                  class: "mr-1 cursor-pointer"
                                }, {
                                  default: withCtx(() => [
                                    setColor.value == i ? (openBlock(), createBlock(_component_CheckIcon, {
                                      key: 0,
                                      size: "13"
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick", "color"]);
                              }), 128))
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "6",
                            sm: "2",
                            class: "d-flex align-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-h6" }, "Quantity")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "6",
                            sm: "10"
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
                        _: 1
                      }),
                      createVNode(_component_v_divider, { class: "my-5" }),
                      createVNode(_component_v_row, { class: "mt-6" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "auto",
                            sm: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                block: "",
                                size: "large",
                                rounded: "pill",
                                class: "px-sm-12",
                                color: "primary",
                                to: "/apps/ecommerce/checkout",
                                onClick: ($event) => unref(store).AddToCart(getProduct.value)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Buy Now")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "auto",
                            sm: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                block: "",
                                size: "large",
                                class: "px-sm-8",
                                rounded: "pill",
                                color: "error",
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
                      createVNode("div", { class: "mt-8" }, [
                        createVNode("h6", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "Dispatched in 2-3 weeks"),
                        createVNode(unref(RouterLink), {
                          to: "/",
                          class: "text-subtitle-1 text-decoration-none font-weight-medium text-primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Why the longer time for delivery?")
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
                  lg: "6",
                  sm: "12"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$5)
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  lg: "6",
                  sm: "12",
                  class: "pl-lg-5"
                }, {
                  default: withCtx(() => [
                    createVNode("div", null, [
                      createVNode("div", { class: "d-flex align-center gap-2" }, [
                        getProduct.value.isStock ? (openBlock(), createBlock(_component_v_chip, {
                          key: 0,
                          color: "success",
                          variant: "elevated",
                          size: "x-small",
                          elevation: "0"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" In Stock ")
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(_component_v_chip, {
                          key: 1,
                          color: "error"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Out of Stock ")
                          ]),
                          _: 1
                        })),
                        createVNode("span", { class: "text-subtitle-2" }, toDisplayString(getProduct.value.gender), 1)
                      ]),
                      createVNode("h3", { class: "text-h4 my-2" }, toDisplayString(getProduct.value.name), 1)
                    ]),
                    createVNode("p", { class: "px-0 h5 font-weight-medium my-4 text-grey100" }, toDisplayString(getProduct.value.description), 1),
                    createVNode("div", { class: "d-flex align-center gap-2" }, [
                      createVNode("p", { class: "text-decoration-line-through text-h4 text-grey100" }, " $" + toDisplayString(getProduct.value.offerPrice), 1),
                      createVNode("h4", { class: "text-h4" }, "$" + toDisplayString(getProduct.value.salePrice), 1)
                    ]),
                    createVNode("div", { class: "text-medium-emphasis align-center d-flex mt-3 gap-2" }, [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_rating, {
                            color: "warning",
                            "half-increments": "",
                            modelValue: getProduct.value.rating,
                            "onUpdate:modelValue": ($event) => getProduct.value.rating = $event,
                            size: "small",
                            density: "compact"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode("span", { class: "text-subtitle-1 text-primary font-weight-medium" }, "(" + toDisplayString(getProduct.value.rank) + " reviews)", 1)
                    ]),
                    createVNode(_component_v_divider, { class: "my-5" }),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "6",
                          sm: "2",
                          class: "d-flex align-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-h6" }, [
                              createTextVNode("Colors"),
                              createVNode("span", { class: "text-error" }, "*")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "6",
                          sm: "10"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(getProduct.value.colors, (color, i) => {
                              return openBlock(), createBlock(_component_v_avatar, {
                                key: i,
                                onClick: ($event) => selectColor(i),
                                variant: "flat",
                                color,
                                size: "x-small",
                                class: "mr-1 cursor-pointer"
                              }, {
                                default: withCtx(() => [
                                  setColor.value == i ? (openBlock(), createBlock(_component_CheckIcon, {
                                    key: 0,
                                    size: "13"
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1032, ["onClick", "color"]);
                            }), 128))
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "6",
                          sm: "2",
                          class: "d-flex align-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-h6" }, "Quantity")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "6",
                          sm: "10"
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
                      _: 1
                    }),
                    createVNode(_component_v_divider, { class: "my-5" }),
                    createVNode(_component_v_row, { class: "mt-6" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "auto",
                          sm: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, {
                              block: "",
                              size: "large",
                              rounded: "pill",
                              class: "px-sm-12",
                              color: "primary",
                              to: "/apps/ecommerce/checkout",
                              onClick: ($event) => unref(store).AddToCart(getProduct.value)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Buy Now")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "auto",
                          sm: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, {
                              block: "",
                              size: "large",
                              class: "px-sm-8",
                              rounded: "pill",
                              color: "error",
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
                    createVNode("div", { class: "mt-8" }, [
                      createVNode("h6", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "Dispatched in 2-3 weeks"),
                      createVNode(unref(RouterLink), {
                        to: "/",
                        class: "text-subtitle-1 text-decoration-none font-weight-medium text-primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Why the longer time for delivery?")
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
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/ecommerce/detail/ProductDetail.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "RelatedProducts",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useEcomStore();
    const getProducts = computed(() => {
      return store.products;
    });
    ref({
      itemsToShow: 1,
      snapAlign: "center"
    });
    ref({
      700: {
        itemsToShow: 3,
        snapAlign: "center"
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: "center"
      },
      2e3: {
        itemsToShow: 5,
        snapAlign: "start"
      }
    });
    function AddCart(p) {
      store.AddToCart(p);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[--><h4 class="text-h4 mt-8 mb-4 font-weight-semibold">Related Products</h4>`);
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList((_a = getProducts.value) == null ? void 0 : _a.slice(0, 4), (product) => {
              _push2(ssrRenderComponent(_component_v_col, {
                key: product.id,
                cols: "12",
                sm: "6",
                lg: "3"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      name: product.name,
                      image: product.image,
                      desc: product.description,
                      salePrice: product.salePrice,
                      offerPrice: product.offerPrice,
                      rating: product.rating,
                      goto: 1,
                      onHandlecart: ($event) => AddCart(product)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$6, {
                        name: product.name,
                        image: product.image,
                        desc: product.description,
                        salePrice: product.salePrice,
                        offerPrice: product.offerPrice,
                        rating: product.rating,
                        goto: 1,
                        onHandlecart: ($event) => AddCart(product)
                      }, null, 8, ["name", "image", "desc", "salePrice", "offerPrice", "rating", "onHandlecart"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList((_b = getProducts.value) == null ? void 0 : _b.slice(0, 4), (product) => {
                return openBlock(), createBlock(_component_v_col, {
                  key: product.id,
                  cols: "12",
                  sm: "6",
                  lg: "3"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$6, {
                      name: product.name,
                      image: product.image,
                      desc: product.description,
                      salePrice: product.salePrice,
                      offerPrice: product.offerPrice,
                      rating: product.rating,
                      goto: 1,
                      onHandlecart: ($event) => AddCart(product)
                    }, null, 8, ["name", "image", "desc", "salePrice", "offerPrice", "rating", "onHandlecart"])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/ecommerce/detail/RelatedProducts.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProductReview",
  __ssrInlineRender: true,
  setup(__props) {
    const rating = ref(4);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_ClientOnly = __nuxt_component_0;
      const _component_v_rating = resolveComponent("v-rating");
      const _component_v_progress_linear = resolveComponent("v-progress-linear");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_PencilIcon = resolveComponent("PencilIcon");
      _push(ssrRenderComponent(_component_v_row, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              lg: "4",
              class: "align-streach"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, {
                    variant: "outlined",
                    elevation: "0",
                    class: "text-center h-100 d-flex align-center justify-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="pa-7 py-9"${_scopeId3}><h6 class="text-subtitle-1 font-weight-regular"${_scopeId3}>Average Rating</h6><h1 class="text-primary text-h1 my-4"${_scopeId3}>4/5</h1><div class="text-medium-emphasis align-center justify-center d-flex mb-3 gap-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ClientOnly, null, {}, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "pa-7 py-9" }, [
                            createVNode("h6", { class: "text-subtitle-1 font-weight-regular" }, "Average Rating"),
                            createVNode("h1", { class: "text-primary text-h1 my-4" }, "4/5"),
                            createVNode("div", { class: "text-medium-emphasis align-center justify-center d-flex mb-3 gap-2" }, [
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_rating, {
                                    color: "warning",
                                    "half-increments": "",
                                    modelValue: rating.value,
                                    "onUpdate:modelValue": ($event) => rating.value = $event,
                                    density: "compact"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card, {
                      variant: "outlined",
                      elevation: "0",
                      class: "text-center h-100 d-flex align-center justify-center"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "pa-7 py-9" }, [
                          createVNode("h6", { class: "text-subtitle-1 font-weight-regular" }, "Average Rating"),
                          createVNode("h1", { class: "text-primary text-h1 my-4" }, "4/5"),
                          createVNode("div", { class: "text-medium-emphasis align-center justify-center d-flex mb-3 gap-2" }, [
                            createVNode(_component_ClientOnly, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_rating, {
                                  color: "warning",
                                  "half-increments": "",
                                  modelValue: rating.value,
                                  "onUpdate:modelValue": ($event) => rating.value = $event,
                                  density: "compact"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              lg: "4",
              class: "align-streach justify-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, {
                    variant: "outlined",
                    elevation: "0",
                    class: "text-center justify-center h-100"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="pa-5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_row, { class: "align-center justify-space-between" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "3",
                                md: "auto",
                                sm: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="text-no-wrap text-subtitle-2"${_scopeId5}>1 Stars</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "1 Stars")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "6",
                                md: "8",
                                sm: "6",
                                class: "px-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_progress_linear, {
                                      "model-value": "15",
                                      color: "primary",
                                      "bg-color": "lightprimary",
                                      rounded: "md"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_progress_linear, {
                                        "model-value": "15",
                                        color: "primary",
                                        "bg-color": "lightprimary",
                                        rounded: "md"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "3",
                                md: "auto",
                                sm: "3",
                                class: "px-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span class="text-subtitle-1"${_scopeId5}>(125)</span>`);
                                  } else {
                                    return [
                                      createVNode("span", { class: "text-subtitle-1" }, "(125)")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "3",
                                  md: "auto",
                                  sm: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "1 Stars")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "6",
                                  md: "8",
                                  sm: "6",
                                  class: "px-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_progress_linear, {
                                      "model-value": "15",
                                      color: "primary",
                                      "bg-color": "lightprimary",
                                      rounded: "md"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "3",
                                  md: "auto",
                                  sm: "3",
                                  class: "px-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-subtitle-1" }, "(125)")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_row, { class: "align-center justify-space-between mt-0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "3",
                                md: "auto",
                                sm: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="text-no-wrap text-subtitle-2"${_scopeId5}>2 Stars</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "2 Stars")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "6",
                                md: "8",
                                sm: "6",
                                class: "px-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_progress_linear, {
                                      "model-value": "20",
                                      color: "primary",
                                      "bg-color": "lightprimary",
                                      rounded: "md"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_progress_linear, {
                                        "model-value": "20",
                                        color: "primary",
                                        "bg-color": "lightprimary",
                                        rounded: "md"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "3",
                                md: "auto",
                                sm: "3",
                                class: "px-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span class="text-subtitle-1"${_scopeId5}>(130)</span>`);
                                  } else {
                                    return [
                                      createVNode("span", { class: "text-subtitle-1" }, "(130)")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "3",
                                  md: "auto",
                                  sm: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "2 Stars")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "6",
                                  md: "8",
                                  sm: "6",
                                  class: "px-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_progress_linear, {
                                      "model-value": "20",
                                      color: "primary",
                                      "bg-color": "lightprimary",
                                      rounded: "md"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "3",
                                  md: "auto",
                                  sm: "3",
                                  class: "px-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-subtitle-1" }, "(130)")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_row, { class: "align-center justify-space-between mt-0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "3",
                                md: "auto",
                                sm: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="text-no-wrap text-subtitle-2"${_scopeId5}>3 Stars</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "3 Stars")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "6",
                                md: "8",
                                sm: "6",
                                class: "px-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_progress_linear, {
                                      "model-value": "40",
                                      color: "primary",
                                      "bg-color": "lightprimary",
                                      rounded: "md"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_progress_linear, {
                                        "model-value": "40",
                                        color: "primary",
                                        "bg-color": "lightprimary",
                                        rounded: "md"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "3",
                                md: "auto",
                                sm: "3",
                                class: "px-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span class="text-subtitle-1"${_scopeId5}>(160)</span>`);
                                  } else {
                                    return [
                                      createVNode("span", { class: "text-subtitle-1" }, "(160)")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "3",
                                  md: "auto",
                                  sm: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "3 Stars")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "6",
                                  md: "8",
                                  sm: "6",
                                  class: "px-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_progress_linear, {
                                      "model-value": "40",
                                      color: "primary",
                                      "bg-color": "lightprimary",
                                      rounded: "md"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "3",
                                  md: "auto",
                                  sm: "3",
                                  class: "px-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-subtitle-1" }, "(160)")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_row, { class: "align-center justify-space-between mt-0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "3",
                                md: "auto",
                                sm: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="text-no-wrap text-subtitle-2"${_scopeId5}>4 Stars</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "4 Stars")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "6",
                                md: "8",
                                sm: "6",
                                class: "px-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_progress_linear, {
                                      "model-value": "15",
                                      color: "primary",
                                      "bg-color": "lightprimary",
                                      rounded: "md"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_progress_linear, {
                                        "model-value": "15",
                                        color: "primary",
                                        "bg-color": "lightprimary",
                                        rounded: "md"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "3",
                                md: "auto",
                                sm: "3",
                                class: "px-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span class="text-subtitle-1"${_scopeId5}>(105)</span>`);
                                  } else {
                                    return [
                                      createVNode("span", { class: "text-subtitle-1" }, "(105)")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "3",
                                  md: "auto",
                                  sm: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "4 Stars")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "6",
                                  md: "8",
                                  sm: "6",
                                  class: "px-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_progress_linear, {
                                      "model-value": "15",
                                      color: "primary",
                                      "bg-color": "lightprimary",
                                      rounded: "md"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "3",
                                  md: "auto",
                                  sm: "3",
                                  class: "px-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-subtitle-1" }, "(105)")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_row, { class: "align-center justify-space-between mt-0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "3",
                                md: "auto",
                                sm: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="text-no-wrap text-subtitle-2"${_scopeId5}>5 Stars</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "5 Stars")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "6",
                                md: "8",
                                sm: "6",
                                class: "px-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_progress_linear, {
                                      "model-value": "50",
                                      color: "primary",
                                      "bg-color": "lightprimary",
                                      rounded: "md"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_progress_linear, {
                                        "model-value": "50",
                                        color: "primary",
                                        "bg-color": "lightprimary",
                                        rounded: "md"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "3",
                                md: "auto",
                                sm: "3",
                                class: "px-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span class="text-subtitle-1"${_scopeId5}>(325)</span>`);
                                  } else {
                                    return [
                                      createVNode("span", { class: "text-subtitle-1" }, "(325)")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "3",
                                  md: "auto",
                                  sm: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "5 Stars")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "6",
                                  md: "8",
                                  sm: "6",
                                  class: "px-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_progress_linear, {
                                      "model-value": "50",
                                      color: "primary",
                                      "bg-color": "lightprimary",
                                      rounded: "md"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "3",
                                  md: "auto",
                                  sm: "3",
                                  class: "px-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-subtitle-1" }, "(325)")
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
                          createVNode("div", { class: "pa-5" }, [
                            createVNode(_component_v_row, { class: "align-center justify-space-between" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "3",
                                  md: "auto",
                                  sm: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "1 Stars")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "6",
                                  md: "8",
                                  sm: "6",
                                  class: "px-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_progress_linear, {
                                      "model-value": "15",
                                      color: "primary",
                                      "bg-color": "lightprimary",
                                      rounded: "md"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "3",
                                  md: "auto",
                                  sm: "3",
                                  class: "px-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-subtitle-1" }, "(125)")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_row, { class: "align-center justify-space-between mt-0" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "3",
                                  md: "auto",
                                  sm: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "2 Stars")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "6",
                                  md: "8",
                                  sm: "6",
                                  class: "px-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_progress_linear, {
                                      "model-value": "20",
                                      color: "primary",
                                      "bg-color": "lightprimary",
                                      rounded: "md"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "3",
                                  md: "auto",
                                  sm: "3",
                                  class: "px-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-subtitle-1" }, "(130)")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_row, { class: "align-center justify-space-between mt-0" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "3",
                                  md: "auto",
                                  sm: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "3 Stars")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "6",
                                  md: "8",
                                  sm: "6",
                                  class: "px-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_progress_linear, {
                                      "model-value": "40",
                                      color: "primary",
                                      "bg-color": "lightprimary",
                                      rounded: "md"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "3",
                                  md: "auto",
                                  sm: "3",
                                  class: "px-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-subtitle-1" }, "(160)")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_row, { class: "align-center justify-space-between mt-0" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "3",
                                  md: "auto",
                                  sm: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "4 Stars")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "6",
                                  md: "8",
                                  sm: "6",
                                  class: "px-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_progress_linear, {
                                      "model-value": "15",
                                      color: "primary",
                                      "bg-color": "lightprimary",
                                      rounded: "md"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "3",
                                  md: "auto",
                                  sm: "3",
                                  class: "px-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-subtitle-1" }, "(105)")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_row, { class: "align-center justify-space-between mt-0" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "3",
                                  md: "auto",
                                  sm: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "5 Stars")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "6",
                                  md: "8",
                                  sm: "6",
                                  class: "px-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_progress_linear, {
                                      "model-value": "50",
                                      color: "primary",
                                      "bg-color": "lightprimary",
                                      rounded: "md"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "3",
                                  md: "auto",
                                  sm: "3",
                                  class: "px-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-subtitle-1" }, "(325)")
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
                    createVNode(_component_v_card, {
                      variant: "outlined",
                      elevation: "0",
                      class: "text-center justify-center h-100"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "pa-5" }, [
                          createVNode(_component_v_row, { class: "align-center justify-space-between" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "3",
                                md: "auto",
                                sm: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "1 Stars")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "6",
                                md: "8",
                                sm: "6",
                                class: "px-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_progress_linear, {
                                    "model-value": "15",
                                    color: "primary",
                                    "bg-color": "lightprimary",
                                    rounded: "md"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "3",
                                md: "auto",
                                sm: "3",
                                class: "px-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-subtitle-1" }, "(125)")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, { class: "align-center justify-space-between mt-0" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "3",
                                md: "auto",
                                sm: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "2 Stars")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "6",
                                md: "8",
                                sm: "6",
                                class: "px-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_progress_linear, {
                                    "model-value": "20",
                                    color: "primary",
                                    "bg-color": "lightprimary",
                                    rounded: "md"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "3",
                                md: "auto",
                                sm: "3",
                                class: "px-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-subtitle-1" }, "(130)")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, { class: "align-center justify-space-between mt-0" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "3",
                                md: "auto",
                                sm: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "3 Stars")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "6",
                                md: "8",
                                sm: "6",
                                class: "px-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_progress_linear, {
                                    "model-value": "40",
                                    color: "primary",
                                    "bg-color": "lightprimary",
                                    rounded: "md"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "3",
                                md: "auto",
                                sm: "3",
                                class: "px-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-subtitle-1" }, "(160)")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, { class: "align-center justify-space-between mt-0" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "3",
                                md: "auto",
                                sm: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "4 Stars")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "6",
                                md: "8",
                                sm: "6",
                                class: "px-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_progress_linear, {
                                    "model-value": "15",
                                    color: "primary",
                                    "bg-color": "lightprimary",
                                    rounded: "md"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "3",
                                md: "auto",
                                sm: "3",
                                class: "px-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-subtitle-1" }, "(105)")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, { class: "align-center justify-space-between mt-0" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "3",
                                md: "auto",
                                sm: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "5 Stars")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "6",
                                md: "8",
                                sm: "6",
                                class: "px-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_progress_linear, {
                                    "model-value": "50",
                                    color: "primary",
                                    "bg-color": "lightprimary",
                                    rounded: "md"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "3",
                                md: "auto",
                                sm: "3",
                                class: "px-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-subtitle-1" }, "(325)")
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
            _push2(ssrRenderComponent(_component_v_col, {
              lg: "4",
              class: "align-streach"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, {
                    variant: "outlined",
                    elevation: "0",
                    class: "d-flex align-center justify-center h-100"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="pa-7 py-9"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_btn, {
                          variant: "outlined",
                          size: "large",
                          color: "primary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_PencilIcon, {
                                size: "20",
                                class: "mr-1"
                              }, null, _parent5, _scopeId4));
                              _push5(` Write a Review `);
                            } else {
                              return [
                                createVNode(_component_PencilIcon, {
                                  size: "20",
                                  class: "mr-1"
                                }),
                                createTextVNode(" Write a Review ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "pa-7 py-9" }, [
                            createVNode(_component_v_btn, {
                              variant: "outlined",
                              size: "large",
                              color: "primary"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_PencilIcon, {
                                  size: "20",
                                  class: "mr-1"
                                }),
                                createTextVNode(" Write a Review ")
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
                    createVNode(_component_v_card, {
                      variant: "outlined",
                      elevation: "0",
                      class: "d-flex align-center justify-center h-100"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "pa-7 py-9" }, [
                          createVNode(_component_v_btn, {
                            variant: "outlined",
                            size: "large",
                            color: "primary"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_PencilIcon, {
                                size: "20",
                                class: "mr-1"
                              }),
                              createTextVNode(" Write a Review ")
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
              createVNode(_component_v_col, {
                lg: "4",
                class: "align-streach"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, {
                    variant: "outlined",
                    elevation: "0",
                    class: "text-center h-100 d-flex align-center justify-center"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "pa-7 py-9" }, [
                        createVNode("h6", { class: "text-subtitle-1 font-weight-regular" }, "Average Rating"),
                        createVNode("h1", { class: "text-primary text-h1 my-4" }, "4/5"),
                        createVNode("div", { class: "text-medium-emphasis align-center justify-center d-flex mb-3 gap-2" }, [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_rating, {
                                color: "warning",
                                "half-increments": "",
                                modelValue: rating.value,
                                "onUpdate:modelValue": ($event) => rating.value = $event,
                                density: "compact"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
              }),
              createVNode(_component_v_col, {
                lg: "4",
                class: "align-streach justify-center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, {
                    variant: "outlined",
                    elevation: "0",
                    class: "text-center justify-center h-100"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "pa-5" }, [
                        createVNode(_component_v_row, { class: "align-center justify-space-between" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "3",
                              md: "auto",
                              sm: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "1 Stars")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "6",
                              md: "8",
                              sm: "6",
                              class: "px-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_progress_linear, {
                                  "model-value": "15",
                                  color: "primary",
                                  "bg-color": "lightprimary",
                                  rounded: "md"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "3",
                              md: "auto",
                              sm: "3",
                              class: "px-0"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-subtitle-1" }, "(125)")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_row, { class: "align-center justify-space-between mt-0" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "3",
                              md: "auto",
                              sm: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "2 Stars")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "6",
                              md: "8",
                              sm: "6",
                              class: "px-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_progress_linear, {
                                  "model-value": "20",
                                  color: "primary",
                                  "bg-color": "lightprimary",
                                  rounded: "md"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "3",
                              md: "auto",
                              sm: "3",
                              class: "px-0"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-subtitle-1" }, "(130)")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_row, { class: "align-center justify-space-between mt-0" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "3",
                              md: "auto",
                              sm: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "3 Stars")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "6",
                              md: "8",
                              sm: "6",
                              class: "px-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_progress_linear, {
                                  "model-value": "40",
                                  color: "primary",
                                  "bg-color": "lightprimary",
                                  rounded: "md"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "3",
                              md: "auto",
                              sm: "3",
                              class: "px-0"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-subtitle-1" }, "(160)")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_row, { class: "align-center justify-space-between mt-0" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "3",
                              md: "auto",
                              sm: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "4 Stars")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "6",
                              md: "8",
                              sm: "6",
                              class: "px-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_progress_linear, {
                                  "model-value": "15",
                                  color: "primary",
                                  "bg-color": "lightprimary",
                                  rounded: "md"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "3",
                              md: "auto",
                              sm: "3",
                              class: "px-0"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-subtitle-1" }, "(105)")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_row, { class: "align-center justify-space-between mt-0" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "3",
                              md: "auto",
                              sm: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-no-wrap text-subtitle-2" }, "5 Stars")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "6",
                              md: "8",
                              sm: "6",
                              class: "px-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_progress_linear, {
                                  "model-value": "50",
                                  color: "primary",
                                  "bg-color": "lightprimary",
                                  rounded: "md"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "3",
                              md: "auto",
                              sm: "3",
                              class: "px-0"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-subtitle-1" }, "(325)")
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
              }),
              createVNode(_component_v_col, {
                lg: "4",
                class: "align-streach"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, {
                    variant: "outlined",
                    elevation: "0",
                    class: "d-flex align-center justify-center h-100"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "pa-7 py-9" }, [
                        createVNode(_component_v_btn, {
                          variant: "outlined",
                          size: "large",
                          color: "primary"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_PencilIcon, {
                              size: "20",
                              class: "mr-1"
                            }),
                            createTextVNode(" Write a Review ")
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
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/ecommerce/detail/ProductReview.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProductTab",
  __ssrInlineRender: true,
  setup(__props) {
    const tab = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      const _component_v_window = resolveComponent("v-window");
      const _component_v_window_item = resolveComponent("v-window-item");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_tabs, {
                    modelValue: tab.value,
                    "onUpdate:modelValue": ($event) => tab.value = $event,
                    color: "primary",
                    class: "border-bottom"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_tab, { value: "one" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Description`);
                            } else {
                              return [
                                createTextVNode("Description")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_tab, { value: "two" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Review`);
                            } else {
                              return [
                                createTextVNode("Review")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_tab, { value: "one" }, {
                            default: withCtx(() => [
                              createTextVNode("Description")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_tab, { value: "two" }, {
                            default: withCtx(() => [
                              createTextVNode("Review")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="mt-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_window, {
                    modelValue: tab.value,
                    "onUpdate:modelValue": ($event) => tab.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "one" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(ProductDescription, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(ProductDescription)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "two" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$2, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$2)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_window_item, { value: "one" }, {
                            default: withCtx(() => [
                              createVNode(ProductDescription)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_window_item, { value: "two" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2)
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
                    createVNode(_component_v_tabs, {
                      modelValue: tab.value,
                      "onUpdate:modelValue": ($event) => tab.value = $event,
                      color: "primary",
                      class: "border-bottom"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_tab, { value: "one" }, {
                          default: withCtx(() => [
                            createTextVNode("Description")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_tab, { value: "two" }, {
                          default: withCtx(() => [
                            createTextVNode("Review")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "mt-5" }, [
                      createVNode(_component_v_window, {
                        modelValue: tab.value,
                        "onUpdate:modelValue": ($event) => tab.value = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_window_item, { value: "one" }, {
                            default: withCtx(() => [
                              createVNode(ProductDescription)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_window_item, { value: "two" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2)
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
              createVNode(_component_v_card_item, null, {
                default: withCtx(() => [
                  createVNode(_component_v_tabs, {
                    modelValue: tab.value,
                    "onUpdate:modelValue": ($event) => tab.value = $event,
                    color: "primary",
                    class: "border-bottom"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_tab, { value: "one" }, {
                        default: withCtx(() => [
                          createTextVNode("Description")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_tab, { value: "two" }, {
                        default: withCtx(() => [
                          createTextVNode("Review")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("div", { class: "mt-5" }, [
                    createVNode(_component_v_window, {
                      modelValue: tab.value,
                      "onUpdate:modelValue": ($event) => tab.value = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_window_item, { value: "one" }, {
                          default: withCtx(() => [
                            createVNode(ProductDescription)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_window_item, { value: "two" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2)
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
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/ecommerce/detail/ProductTab.vue");
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
                              _push5(ssrRenderComponent(_sfc_main$4, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$4)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4)
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
                            createVNode(_sfc_main$4)
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
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
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
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, { elevation: "10" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_text, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$4)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/eCommerce/producttwo/two/detail/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-ChWNCdUw.mjs.map
