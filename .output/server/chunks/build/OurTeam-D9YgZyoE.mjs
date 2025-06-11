import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, unref, toDisplayString, createBlock, openBlock, Fragment, renderList, ref, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderVNode, ssrRenderClass } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import { ChevronLeftIcon, ChevronRightIcon } from 'vue-tabler-icons';
import { O as OurLeaders, u as userReviewFrront, T as ThemeFeature1, a as ThemeFeature2, b as ThemeFeature3, F as FAQData } from './Layout-pJxOOMlF.mjs';

const _imports_0 = publicAssetsURL("/images/front-pages/background/quotes.svg");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ClientReviews",
  __ssrInlineRender: true,
  setup(__props) {
    const currentSlide = ref(0);
    const totalSlides = userReviewFrront.length;
    const goToNextSlide = () => {
      if (currentSlide.value < totalSlides - 1) {
        currentSlide.value++;
      } else {
        currentSlide.value = 0;
      }
    };
    const goToPrevSlide = () => {
      if (currentSlide.value > 0) {
        currentSlide.value--;
      } else {
        currentSlide.value = totalSlides - 1;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_avatar = resolveComponent("v-avatar");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-96 pb-lg-14 pb-10 bg-surface testimonials" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_container, { class: "max-width-1218 position-relative" }, {
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
                        _push4(`<h2 class="display-1 textPrimary font-weight-bold"${_scopeId3}>Words from customers.</h2><p class="text-grey100 py-6 text-17 lh-32 pe-lg-4 font-weight-medium"${_scopeId3}> Pellentesque varius semper odio non pretium. </p><div class="slide-counter d-xl-block d-none"${_scopeId3}>${ssrInterpolate(currentSlide.value + 1)} / ${ssrInterpolate(unref(totalSlides))}</div>`);
                      } else {
                        return [
                          createVNode("h2", { class: "display-1 textPrimary font-weight-bold" }, "Words from customers."),
                          createVNode("p", { class: "text-grey100 py-6 text-17 lh-32 pe-lg-4 font-weight-medium" }, " Pellentesque varius semper odio non pretium. "),
                          createVNode("div", { class: "slide-counter d-xl-block d-none" }, toDisplayString(currentSlide.value + 1) + " / " + toDisplayString(unref(totalSlides)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    lg: "7"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Carousel), {
                          itemsToShow: 1,
                          wrapAround: true,
                          transition: 500,
                          class: "",
                          "current-slide": currentSlide.value
                        }, {
                          addons: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Navigation), { class: "navarrow" }, {
                                next: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(ChevronRightIcon), {
                                      class: "textPrimary rtlnav",
                                      size: "20",
                                      "stroke-width": "1.5"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</span>`);
                                  } else {
                                    return [
                                      createVNode("span", { onClick: goToNextSlide }, [
                                        createVNode(unref(ChevronRightIcon), {
                                          class: "textPrimary rtlnav",
                                          size: "20",
                                          "stroke-width": "1.5"
                                        })
                                      ])
                                    ];
                                  }
                                }),
                                prev: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(ChevronLeftIcon), {
                                      class: "textPrimary rtlnav",
                                      size: "20",
                                      "stroke-width": "1.5"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</span>`);
                                  } else {
                                    return [
                                      createVNode("span", { onClick: goToPrevSlide }, [
                                        createVNode(unref(ChevronLeftIcon), {
                                          class: "textPrimary rtlnav",
                                          size: "20",
                                          "stroke-width": "1.5"
                                        })
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Pagination), { class: "mt-6 d-xl-none d-flex" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Navigation), { class: "navarrow" }, {
                                  next: withCtx(() => [
                                    createVNode("span", { onClick: goToNextSlide }, [
                                      createVNode(unref(ChevronRightIcon), {
                                        class: "textPrimary rtlnav",
                                        size: "20",
                                        "stroke-width": "1.5"
                                      })
                                    ])
                                  ]),
                                  prev: withCtx(() => [
                                    createVNode("span", { onClick: goToPrevSlide }, [
                                      createVNode(unref(ChevronLeftIcon), {
                                        class: "textPrimary rtlnav",
                                        size: "20",
                                        "stroke-width": "1.5"
                                      })
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Pagination), { class: "mt-6 d-xl-none d-flex" })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(userReviewFrront), (card, index) => {
                                _push5(ssrRenderComponent(unref(Slide), {
                                  key: card.img
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_card, { elevation: "0" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="text-left"${_scopeId6}><p class="text-24 opacity-70 clamped-text mb-6"${_scopeId6}>${ssrInterpolate(card.review)}</p><div class="d-flex ga-4 align-center justify-space-between rtl-reviews pt-4"${_scopeId6}><div class="d-flex ga-4 align-center"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_v_avatar, { size: "56" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<img${ssrRenderAttr("src", card.img)}${ssrRenderAttr("alt", card.img)} width="56"${_scopeId7}>`);
                                                } else {
                                                  return [
                                                    createVNode("img", {
                                                      src: card.img,
                                                      alt: card.img,
                                                      width: "56"
                                                    }, null, 8, ["src", "alt"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`<div${_scopeId6}><h6 class="text-h5 font-semibold textPrimary"${_scopeId6}>${ssrInterpolate(card.title)}</h6><p class="text-15 text-grey100"${_scopeId6}>${ssrInterpolate(card.subtitle)}</p></div></div><div class="round-48 rounded-circle bg-primary d-flex justify-center align-center"${_scopeId6}><img${ssrRenderAttr("src", _imports_0)} alt="reviews" width="20"${_scopeId6}></div></div></div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "text-left" }, [
                                                createVNode("p", { class: "text-24 opacity-70 clamped-text mb-6" }, toDisplayString(card.review), 1),
                                                createVNode("div", { class: "d-flex ga-4 align-center justify-space-between rtl-reviews pt-4" }, [
                                                  createVNode("div", { class: "d-flex ga-4 align-center" }, [
                                                    createVNode(_component_v_avatar, { size: "56" }, {
                                                      default: withCtx(() => [
                                                        createVNode("img", {
                                                          src: card.img,
                                                          alt: card.img,
                                                          width: "56"
                                                        }, null, 8, ["src", "alt"])
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode("div", null, [
                                                      createVNode("h6", { class: "text-h5 font-semibold textPrimary" }, toDisplayString(card.title), 1),
                                                      createVNode("p", { class: "text-15 text-grey100" }, toDisplayString(card.subtitle), 1)
                                                    ])
                                                  ]),
                                                  createVNode("div", { class: "round-48 rounded-circle bg-primary d-flex justify-center align-center" }, [
                                                    createVNode("img", {
                                                      src: _imports_0,
                                                      alt: "reviews",
                                                      width: "20"
                                                    })
                                                  ])
                                                ])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_card, { elevation: "0" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-left" }, [
                                              createVNode("p", { class: "text-24 opacity-70 clamped-text mb-6" }, toDisplayString(card.review), 1),
                                              createVNode("div", { class: "d-flex ga-4 align-center justify-space-between rtl-reviews pt-4" }, [
                                                createVNode("div", { class: "d-flex ga-4 align-center" }, [
                                                  createVNode(_component_v_avatar, { size: "56" }, {
                                                    default: withCtx(() => [
                                                      createVNode("img", {
                                                        src: card.img,
                                                        alt: card.img,
                                                        width: "56"
                                                      }, null, 8, ["src", "alt"])
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode("div", null, [
                                                    createVNode("h6", { class: "text-h5 font-semibold textPrimary" }, toDisplayString(card.title), 1),
                                                    createVNode("p", { class: "text-15 text-grey100" }, toDisplayString(card.subtitle), 1)
                                                  ])
                                                ]),
                                                createVNode("div", { class: "round-48 rounded-circle bg-primary d-flex justify-center align-center" }, [
                                                  createVNode("img", {
                                                    src: _imports_0,
                                                    alt: "reviews",
                                                    width: "20"
                                                  })
                                                ])
                                              ])
                                            ])
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(userReviewFrront), (card, index) => {
                                  return openBlock(), createBlock(unref(Slide), {
                                    key: card.img
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, { elevation: "0" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-left" }, [
                                            createVNode("p", { class: "text-24 opacity-70 clamped-text mb-6" }, toDisplayString(card.review), 1),
                                            createVNode("div", { class: "d-flex ga-4 align-center justify-space-between rtl-reviews pt-4" }, [
                                              createVNode("div", { class: "d-flex ga-4 align-center" }, [
                                                createVNode(_component_v_avatar, { size: "56" }, {
                                                  default: withCtx(() => [
                                                    createVNode("img", {
                                                      src: card.img,
                                                      alt: card.img,
                                                      width: "56"
                                                    }, null, 8, ["src", "alt"])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode("div", null, [
                                                  createVNode("h6", { class: "text-h5 font-semibold textPrimary" }, toDisplayString(card.title), 1),
                                                  createVNode("p", { class: "text-15 text-grey100" }, toDisplayString(card.subtitle), 1)
                                                ])
                                              ]),
                                              createVNode("div", { class: "round-48 rounded-circle bg-primary d-flex justify-center align-center" }, [
                                                createVNode("img", {
                                                  src: _imports_0,
                                                  alt: "reviews",
                                                  width: "20"
                                                })
                                              ])
                                            ])
                                          ])
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
                          createVNode(unref(Carousel), {
                            itemsToShow: 1,
                            wrapAround: true,
                            transition: 500,
                            class: "",
                            "current-slide": currentSlide.value
                          }, {
                            addons: withCtx(() => [
                              createVNode(unref(Navigation), { class: "navarrow" }, {
                                next: withCtx(() => [
                                  createVNode("span", { onClick: goToNextSlide }, [
                                    createVNode(unref(ChevronRightIcon), {
                                      class: "textPrimary rtlnav",
                                      size: "20",
                                      "stroke-width": "1.5"
                                    })
                                  ])
                                ]),
                                prev: withCtx(() => [
                                  createVNode("span", { onClick: goToPrevSlide }, [
                                    createVNode(unref(ChevronLeftIcon), {
                                      class: "textPrimary rtlnav",
                                      size: "20",
                                      "stroke-width": "1.5"
                                    })
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Pagination), { class: "mt-6 d-xl-none d-flex" })
                            ]),
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(userReviewFrront), (card, index) => {
                                return openBlock(), createBlock(unref(Slide), {
                                  key: card.img
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, { elevation: "0" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-left" }, [
                                          createVNode("p", { class: "text-24 opacity-70 clamped-text mb-6" }, toDisplayString(card.review), 1),
                                          createVNode("div", { class: "d-flex ga-4 align-center justify-space-between rtl-reviews pt-4" }, [
                                            createVNode("div", { class: "d-flex ga-4 align-center" }, [
                                              createVNode(_component_v_avatar, { size: "56" }, {
                                                default: withCtx(() => [
                                                  createVNode("img", {
                                                    src: card.img,
                                                    alt: card.img,
                                                    width: "56"
                                                  }, null, 8, ["src", "alt"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode("div", null, [
                                                createVNode("h6", { class: "text-h5 font-semibold textPrimary" }, toDisplayString(card.title), 1),
                                                createVNode("p", { class: "text-15 text-grey100" }, toDisplayString(card.subtitle), 1)
                                              ])
                                            ]),
                                            createVNode("div", { class: "round-48 rounded-circle bg-primary d-flex justify-center align-center" }, [
                                              createVNode("img", {
                                                src: _imports_0,
                                                alt: "reviews",
                                                width: "20"
                                              })
                                            ])
                                          ])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["current-slide"])
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
                        createVNode("h2", { class: "display-1 textPrimary font-weight-bold" }, "Words from customers."),
                        createVNode("p", { class: "text-grey100 py-6 text-17 lh-32 pe-lg-4 font-weight-medium" }, " Pellentesque varius semper odio non pretium. "),
                        createVNode("div", { class: "slide-counter d-xl-block d-none" }, toDisplayString(currentSlide.value + 1) + " / " + toDisplayString(unref(totalSlides)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "7"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Carousel), {
                          itemsToShow: 1,
                          wrapAround: true,
                          transition: 500,
                          class: "",
                          "current-slide": currentSlide.value
                        }, {
                          addons: withCtx(() => [
                            createVNode(unref(Navigation), { class: "navarrow" }, {
                              next: withCtx(() => [
                                createVNode("span", { onClick: goToNextSlide }, [
                                  createVNode(unref(ChevronRightIcon), {
                                    class: "textPrimary rtlnav",
                                    size: "20",
                                    "stroke-width": "1.5"
                                  })
                                ])
                              ]),
                              prev: withCtx(() => [
                                createVNode("span", { onClick: goToPrevSlide }, [
                                  createVNode(unref(ChevronLeftIcon), {
                                    class: "textPrimary rtlnav",
                                    size: "20",
                                    "stroke-width": "1.5"
                                  })
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Pagination), { class: "mt-6 d-xl-none d-flex" })
                          ]),
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(userReviewFrront), (card, index) => {
                              return openBlock(), createBlock(unref(Slide), {
                                key: card.img
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, { elevation: "0" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-left" }, [
                                        createVNode("p", { class: "text-24 opacity-70 clamped-text mb-6" }, toDisplayString(card.review), 1),
                                        createVNode("div", { class: "d-flex ga-4 align-center justify-space-between rtl-reviews pt-4" }, [
                                          createVNode("div", { class: "d-flex ga-4 align-center" }, [
                                            createVNode(_component_v_avatar, { size: "56" }, {
                                              default: withCtx(() => [
                                                createVNode("img", {
                                                  src: card.img,
                                                  alt: card.img,
                                                  width: "56"
                                                }, null, 8, ["src", "alt"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode("div", null, [
                                              createVNode("h6", { class: "text-h5 font-semibold textPrimary" }, toDisplayString(card.title), 1),
                                              createVNode("p", { class: "text-15 text-grey100" }, toDisplayString(card.subtitle), 1)
                                            ])
                                          ]),
                                          createVNode("div", { class: "round-48 rounded-circle bg-primary d-flex justify-center align-center" }, [
                                            createVNode("img", {
                                              src: _imports_0,
                                              alt: "reviews",
                                              width: "20"
                                            })
                                          ])
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["current-slide"])
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
                      createVNode("h2", { class: "display-1 textPrimary font-weight-bold" }, "Words from customers."),
                      createVNode("p", { class: "text-grey100 py-6 text-17 lh-32 pe-lg-4 font-weight-medium" }, " Pellentesque varius semper odio non pretium. "),
                      createVNode("div", { class: "slide-counter d-xl-block d-none" }, toDisplayString(currentSlide.value + 1) + " / " + toDisplayString(unref(totalSlides)), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    lg: "7"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Carousel), {
                        itemsToShow: 1,
                        wrapAround: true,
                        transition: 500,
                        class: "",
                        "current-slide": currentSlide.value
                      }, {
                        addons: withCtx(() => [
                          createVNode(unref(Navigation), { class: "navarrow" }, {
                            next: withCtx(() => [
                              createVNode("span", { onClick: goToNextSlide }, [
                                createVNode(unref(ChevronRightIcon), {
                                  class: "textPrimary rtlnav",
                                  size: "20",
                                  "stroke-width": "1.5"
                                })
                              ])
                            ]),
                            prev: withCtx(() => [
                              createVNode("span", { onClick: goToPrevSlide }, [
                                createVNode(unref(ChevronLeftIcon), {
                                  class: "textPrimary rtlnav",
                                  size: "20",
                                  "stroke-width": "1.5"
                                })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Pagination), { class: "mt-6 d-xl-none d-flex" })
                        ]),
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(userReviewFrront), (card, index) => {
                            return openBlock(), createBlock(unref(Slide), {
                              key: card.img
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, { elevation: "0" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-left" }, [
                                      createVNode("p", { class: "text-24 opacity-70 clamped-text mb-6" }, toDisplayString(card.review), 1),
                                      createVNode("div", { class: "d-flex ga-4 align-center justify-space-between rtl-reviews pt-4" }, [
                                        createVNode("div", { class: "d-flex ga-4 align-center" }, [
                                          createVNode(_component_v_avatar, { size: "56" }, {
                                            default: withCtx(() => [
                                              createVNode("img", {
                                                src: card.img,
                                                alt: card.img,
                                                width: "56"
                                              }, null, 8, ["src", "alt"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode("div", null, [
                                            createVNode("h6", { class: "text-h5 font-semibold textPrimary" }, toDisplayString(card.title), 1),
                                            createVNode("p", { class: "text-15 text-grey100" }, toDisplayString(card.subtitle), 1)
                                          ])
                                        ]),
                                        createVNode("div", { class: "round-48 rounded-circle bg-primary d-flex justify-center align-center" }, [
                                          createVNode("img", {
                                            src: _imports_0,
                                            alt: "reviews",
                                            width: "20"
                                          })
                                        ])
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["current-slide"])
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/Homepage/ClientReviews.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const comp1 = publicAssetsURL("/images/front-pages/componies/intel.svg");
const comp2 = publicAssetsURL("/images/front-pages/componies/oracle.svg");
const comp3 = publicAssetsURL("/images/front-pages/componies/dell.svg");
const comp4 = publicAssetsURL("/images/front-pages/componies/samsung.svg");
const comp5 = publicAssetsURL("/images/front-pages/componies/infosys.svg");
const comp6 = publicAssetsURL("/images/front-pages/componies/capgemini.svg");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Componies",
  __ssrInlineRender: true,
  setup(__props) {
    const companies = [
      {
        img: comp1
      },
      {
        img: comp2
      },
      {
        img: comp3
      },
      {
        img: comp4
      },
      {
        img: comp5
      },
      {
        img: comp6
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-surface" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_container, { class: "max-width-1218 py-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex flex-wrap justify-md-space-between justify-center align-center gap-4 pt-lg-14 pt-7 border-t"${_scopeId}><!--[-->`);
            ssrRenderList(companies, (item) => {
              _push2(`<div${_scopeId}><img${ssrRenderAttr("src", item.img)} alt="company"${_scopeId}></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex flex-wrap justify-md-space-between justify-center align-center gap-4 pt-lg-14 pt-7 border-t" }, [
                (openBlock(), createBlock(Fragment, null, renderList(companies, (item) => {
                  return createVNode("div", {
                    key: item.img
                  }, [
                    createVNode("img", {
                      src: item.img,
                      alt: "company"
                    }, null, 8, ["src"])
                  ]);
                }), 64))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/Homepage/Componies.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FAQ",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
      const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
      const _component_v_expansion_panel_title = resolveComponent("v-expansion-panel-title");
      const _component_v_expansion_panel_text = resolveComponent("v-expansion-panel-text");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-p-96 lp-faq" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_container, { class: "max-width-800 py-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center mb-8"${_scopeId}><h3 class="display-2 font-weight-bold textPrimary"${_scopeId}>Frequently asked questions</h3></div>`);
            _push2(ssrRenderComponent(_component_v_expansion_panels, {
              elevation: "0",
              class: "mt-14 d-flex flex-column ga-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(FAQData), (item) => {
                    _push3(ssrRenderComponent(_component_v_expansion_panel, {
                      elevation: "0",
                      class: "border",
                      key: item.title
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_expansion_panel_title, {
                            "collapse-icon": "mdi-minus",
                            "expand-icon": "mdi-plus",
                            class: "text-18 font-weight-semibold textPrimary py-5"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.title)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_expansion_panel_text, { class: "text-16 text-grey100" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.subtitle)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.subtitle), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_expansion_panel_title, {
                              "collapse-icon": "mdi-minus",
                              "expand-icon": "mdi-plus",
                              class: "text-18 font-weight-semibold textPrimary py-5"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_expansion_panel_text, { class: "text-16 text-grey100" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.subtitle), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(FAQData), (item) => {
                      return openBlock(), createBlock(_component_v_expansion_panel, {
                        elevation: "0",
                        class: "border",
                        key: item.title
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_expansion_panel_title, {
                            "collapse-icon": "mdi-minus",
                            "expand-icon": "mdi-plus",
                            class: "text-18 font-weight-semibold textPrimary py-5"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_v_expansion_panel_text, { class: "text-16 text-grey100" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.subtitle), 1)
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
            }, _parent2, _scopeId));
            _push2(`<div class="d-flex justify-center mt-14"${_scopeId}><div class="pa-2 border border-dashed rounded-md font-weight-medium text-14 text-grey100 font-weight-medium d-flex align-center"${_scopeId}> Still have a question? <a href="https://discord.com/invite/eMzE8F6Wqs" target="_blank" class="text-underline text-grey100 hover-primary underline-btn mx-1"${_scopeId}>Ask on discord</a> or <a href="https://support.wrappixel.com/" target="_blank" class="text-grey100 hover-primary mx-1 underline-btn"${_scopeId}>submit a ticket</a></div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center mb-8" }, [
                createVNode("h3", { class: "display-2 font-weight-bold textPrimary" }, "Frequently asked questions")
              ]),
              createVNode(_component_v_expansion_panels, {
                elevation: "0",
                class: "mt-14 d-flex flex-column ga-4"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(FAQData), (item) => {
                    return openBlock(), createBlock(_component_v_expansion_panel, {
                      elevation: "0",
                      class: "border",
                      key: item.title
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_expansion_panel_title, {
                          "collapse-icon": "mdi-minus",
                          "expand-icon": "mdi-plus",
                          class: "text-18 font-weight-semibold textPrimary py-5"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_expansion_panel_text, { class: "text-16 text-grey100" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.subtitle), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode("div", { class: "d-flex justify-center mt-14" }, [
                createVNode("div", { class: "pa-2 border border-dashed rounded-md font-weight-medium text-14 text-grey100 font-weight-medium d-flex align-center" }, [
                  createTextVNode(" Still have a question? "),
                  createVNode("a", {
                    href: "https://discord.com/invite/eMzE8F6Wqs",
                    target: "_blank",
                    class: "text-underline text-grey100 hover-primary underline-btn mx-1"
                  }, "Ask on discord"),
                  createTextVNode(" or "),
                  createVNode("a", {
                    href: "https://support.wrappixel.com/",
                    target: "_blank",
                    class: "text-grey100 hover-primary mx-1 underline-btn"
                  }, "submit a ticket")
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/Homepage/FAQ.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Highlights",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_card = resolveComponent("v-card");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-96 bg-surface" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_container, { class: "max-width-1218 overflow-hidden" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex ga-6 marquee1-group"${_scopeId}><!--[-->`);
            ssrRenderList(unref(ThemeFeature1), (item) => {
              _push2(`<div class="flex-grow-0 flex-shrink-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_card, {
                elevation: "0",
                class: ["d-flex align-center justify-center py-5 px-8 ga-3 rounded-16", "bg-light" + item.color]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(item.icon), {
                      "stroke-width": "1.5",
                      class: "text-" + item.color,
                      size: "24"
                    }, null), _parent3, _scopeId2);
                    _push3(`<h5 class="${ssrRenderClass("text-15  font-weight-semibold text-" + item.color)}"${_scopeId2}>${ssrInterpolate(item.title)}</h5>`);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                        "stroke-width": "1.5",
                        class: "text-" + item.color,
                        size: "24"
                      }, null, 8, ["class"])),
                      createVNode("h5", {
                        class: "text-15  font-weight-semibold text-" + item.color
                      }, toDisplayString(item.title), 3)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--><!--[-->`);
            ssrRenderList(unref(ThemeFeature1), (item) => {
              _push2(`<div class="flex-grow-0 flex-shrink-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_card, {
                elevation: "0",
                class: ["d-flex align-center justify-center py-5 px-8 ga-3 rounded-16", "bg-light" + item.color]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(item.icon), {
                      "stroke-width": "1.5",
                      class: "text-" + item.color,
                      size: "24"
                    }, null), _parent3, _scopeId2);
                    _push3(`<h5 class="${ssrRenderClass("text-15  font-weight-semibold text-" + item.color)}"${_scopeId2}>${ssrInterpolate(item.title)}</h5>`);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                        "stroke-width": "1.5",
                        class: "text-" + item.color,
                        size: "24"
                      }, null, 8, ["class"])),
                      createVNode("h5", {
                        class: "text-15  font-weight-semibold text-" + item.color
                      }, toDisplayString(item.title), 3)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--><!--[-->`);
            ssrRenderList(unref(ThemeFeature1), (item) => {
              _push2(`<div class="flex-grow-0 flex-shrink-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_card, {
                elevation: "0",
                class: ["d-flex align-center justify-center py-5 px-8 ga-3 rounded-16", "bg-light" + item.color]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(item.icon), {
                      "stroke-width": "1.5",
                      class: "text-" + item.color,
                      size: "24"
                    }, null), _parent3, _scopeId2);
                    _push3(`<h5 class="${ssrRenderClass("text-15  font-weight-semibold text-" + item.color)}"${_scopeId2}>${ssrInterpolate(item.title)}</h5>`);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                        "stroke-width": "1.5",
                        class: "text-" + item.color,
                        size: "24"
                      }, null, 8, ["class"])),
                      createVNode("h5", {
                        class: "text-15  font-weight-semibold text-" + item.color
                      }, toDisplayString(item.title), 3)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div><div class="d-flex ga-6 marquee2-group pt-6"${_scopeId}><!--[-->`);
            ssrRenderList(unref(ThemeFeature2), (item) => {
              _push2(`<div class="flex-grow-0 flex-shrink-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_card, {
                elevation: "0",
                class: ["d-flex align-center justify-center py-5 px-8 ga-3 rounded-16", "bg-light" + item.color]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(item.icon), {
                      "stroke-width": "1.5",
                      class: "text-" + item.color,
                      size: "24"
                    }, null), _parent3, _scopeId2);
                    _push3(`<h5 class="${ssrRenderClass("text-15  font-weight-semibold text-" + item.color)}"${_scopeId2}>${ssrInterpolate(item.title)}</h5>`);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                        "stroke-width": "1.5",
                        class: "text-" + item.color,
                        size: "24"
                      }, null, 8, ["class"])),
                      createVNode("h5", {
                        class: "text-15  font-weight-semibold text-" + item.color
                      }, toDisplayString(item.title), 3)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--><!--[-->`);
            ssrRenderList(unref(ThemeFeature2), (item) => {
              _push2(`<div class="flex-grow-0 flex-shrink-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_card, {
                elevation: "0",
                class: ["d-flex align-center justify-center py-5 px-8 ga-3 rounded-16", "bg-light" + item.color]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(item.icon), {
                      "stroke-width": "1.5",
                      class: "text-" + item.color,
                      size: "24"
                    }, null), _parent3, _scopeId2);
                    _push3(`<h5 class="${ssrRenderClass("text-15  font-weight-semibold text-" + item.color)}"${_scopeId2}>${ssrInterpolate(item.title)}</h5>`);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                        "stroke-width": "1.5",
                        class: "text-" + item.color,
                        size: "24"
                      }, null, 8, ["class"])),
                      createVNode("h5", {
                        class: "text-15  font-weight-semibold text-" + item.color
                      }, toDisplayString(item.title), 3)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--><!--[-->`);
            ssrRenderList(unref(ThemeFeature2), (item) => {
              _push2(`<div class="flex-grow-0 flex-shrink-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_card, {
                elevation: "0",
                class: ["d-flex align-center justify-center py-5 px-8 ga-3 rounded-16", "bg-light" + item.color]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(item.icon), {
                      "stroke-width": "1.5",
                      class: "text-" + item.color,
                      size: "24"
                    }, null), _parent3, _scopeId2);
                    _push3(`<h5 class="${ssrRenderClass("text-15  font-weight-semibold text-" + item.color)}"${_scopeId2}>${ssrInterpolate(item.title)}</h5>`);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                        "stroke-width": "1.5",
                        class: "text-" + item.color,
                        size: "24"
                      }, null, 8, ["class"])),
                      createVNode("h5", {
                        class: "text-15  font-weight-semibold text-" + item.color
                      }, toDisplayString(item.title), 3)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--><!--[-->`);
            ssrRenderList(unref(ThemeFeature2), (item) => {
              _push2(`<div class="flex-grow-0 flex-shrink-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_card, {
                elevation: "0",
                class: ["d-flex align-center justify-center py-5 px-8 ga-3 rounded-16", "bg-light" + item.color]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(item.icon), {
                      "stroke-width": "1.5",
                      class: "text-" + item.color,
                      size: "24"
                    }, null), _parent3, _scopeId2);
                    _push3(`<h5 class="${ssrRenderClass("text-15  font-weight-semibold text-" + item.color)}"${_scopeId2}>${ssrInterpolate(item.title)}</h5>`);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                        "stroke-width": "1.5",
                        class: "text-" + item.color,
                        size: "24"
                      }, null, 8, ["class"])),
                      createVNode("h5", {
                        class: "text-15  font-weight-semibold text-" + item.color
                      }, toDisplayString(item.title), 3)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div><div class="d-flex ga-6 marquee1-group pt-6"${_scopeId}><!--[-->`);
            ssrRenderList(unref(ThemeFeature3), (item) => {
              _push2(`<div class="flex-grow-0 flex-shrink-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_card, {
                elevation: "0",
                class: ["d-flex align-center justify-center py-5 px-8 ga-3 rounded-16", "bg-light" + item.color]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(item.icon), {
                      "stroke-width": "1.5",
                      class: "text-" + item.color,
                      size: "24"
                    }, null), _parent3, _scopeId2);
                    _push3(`<h5 class="${ssrRenderClass("text-15  font-weight-semibold text-" + item.color)}"${_scopeId2}>${ssrInterpolate(item.title)}</h5>`);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                        "stroke-width": "1.5",
                        class: "text-" + item.color,
                        size: "24"
                      }, null, 8, ["class"])),
                      createVNode("h5", {
                        class: "text-15  font-weight-semibold text-" + item.color
                      }, toDisplayString(item.title), 3)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--><!--[-->`);
            ssrRenderList(unref(ThemeFeature3), (item) => {
              _push2(`<div class="flex-grow-0 flex-shrink-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_card, {
                elevation: "0",
                class: ["d-flex align-center justify-center py-5 px-8 ga-3 rounded-16", "bg-light" + item.color]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(item.icon), {
                      "stroke-width": "1.5",
                      class: "text-" + item.color,
                      size: "24"
                    }, null), _parent3, _scopeId2);
                    _push3(`<h5 class="${ssrRenderClass("text-15  font-weight-semibold text-" + item.color)}"${_scopeId2}>${ssrInterpolate(item.title)}</h5>`);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                        "stroke-width": "1.5",
                        class: "text-" + item.color,
                        size: "24"
                      }, null, 8, ["class"])),
                      createVNode("h5", {
                        class: "text-15  font-weight-semibold text-" + item.color
                      }, toDisplayString(item.title), 3)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--><!--[-->`);
            ssrRenderList(unref(ThemeFeature3), (item) => {
              _push2(`<div class="flex-grow-0 flex-shrink-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_card, {
                elevation: "0",
                class: ["d-flex align-center justify-center py-5 px-8 ga-3 rounded-16", "bg-light" + item.color]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(item.icon), {
                      "stroke-width": "1.5",
                      class: "text-" + item.color,
                      size: "24"
                    }, null), _parent3, _scopeId2);
                    _push3(`<h5 class="${ssrRenderClass("text-15  font-weight-semibold text-" + item.color)}"${_scopeId2}>${ssrInterpolate(item.title)}</h5>`);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                        "stroke-width": "1.5",
                        class: "text-" + item.color,
                        size: "24"
                      }, null, 8, ["class"])),
                      createVNode("h5", {
                        class: "text-15  font-weight-semibold text-" + item.color
                      }, toDisplayString(item.title), 3)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex ga-6 marquee1-group" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(ThemeFeature1), (item) => {
                  return openBlock(), createBlock("div", {
                    class: "flex-grow-0 flex-shrink-0",
                    key: item.title
                  }, [
                    createVNode(_component_v_card, {
                      elevation: "0",
                      class: ["d-flex align-center justify-center py-5 px-8 ga-3 rounded-16", "bg-light" + item.color]
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                          "stroke-width": "1.5",
                          class: "text-" + item.color,
                          size: "24"
                        }, null, 8, ["class"])),
                        createVNode("h5", {
                          class: "text-15  font-weight-semibold text-" + item.color
                        }, toDisplayString(item.title), 3)
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ]);
                }), 128)),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(ThemeFeature1), (item) => {
                  return openBlock(), createBlock("div", {
                    class: "flex-grow-0 flex-shrink-0",
                    key: item.title
                  }, [
                    createVNode(_component_v_card, {
                      elevation: "0",
                      class: ["d-flex align-center justify-center py-5 px-8 ga-3 rounded-16", "bg-light" + item.color]
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                          "stroke-width": "1.5",
                          class: "text-" + item.color,
                          size: "24"
                        }, null, 8, ["class"])),
                        createVNode("h5", {
                          class: "text-15  font-weight-semibold text-" + item.color
                        }, toDisplayString(item.title), 3)
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ]);
                }), 128)),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(ThemeFeature1), (item) => {
                  return openBlock(), createBlock("div", {
                    class: "flex-grow-0 flex-shrink-0",
                    key: item.title
                  }, [
                    createVNode(_component_v_card, {
                      elevation: "0",
                      class: ["d-flex align-center justify-center py-5 px-8 ga-3 rounded-16", "bg-light" + item.color]
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                          "stroke-width": "1.5",
                          class: "text-" + item.color,
                          size: "24"
                        }, null, 8, ["class"])),
                        createVNode("h5", {
                          class: "text-15  font-weight-semibold text-" + item.color
                        }, toDisplayString(item.title), 3)
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ]);
                }), 128))
              ]),
              createVNode("div", { class: "d-flex ga-6 marquee2-group pt-6" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(ThemeFeature2), (item) => {
                  return openBlock(), createBlock("div", {
                    class: "flex-grow-0 flex-shrink-0",
                    key: item.title
                  }, [
                    createVNode(_component_v_card, {
                      elevation: "0",
                      class: ["d-flex align-center justify-center py-5 px-8 ga-3 rounded-16", "bg-light" + item.color]
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                          "stroke-width": "1.5",
                          class: "text-" + item.color,
                          size: "24"
                        }, null, 8, ["class"])),
                        createVNode("h5", {
                          class: "text-15  font-weight-semibold text-" + item.color
                        }, toDisplayString(item.title), 3)
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ]);
                }), 128)),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(ThemeFeature2), (item) => {
                  return openBlock(), createBlock("div", {
                    class: "flex-grow-0 flex-shrink-0",
                    key: item.title
                  }, [
                    createVNode(_component_v_card, {
                      elevation: "0",
                      class: ["d-flex align-center justify-center py-5 px-8 ga-3 rounded-16", "bg-light" + item.color]
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                          "stroke-width": "1.5",
                          class: "text-" + item.color,
                          size: "24"
                        }, null, 8, ["class"])),
                        createVNode("h5", {
                          class: "text-15  font-weight-semibold text-" + item.color
                        }, toDisplayString(item.title), 3)
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ]);
                }), 128)),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(ThemeFeature2), (item) => {
                  return openBlock(), createBlock("div", {
                    class: "flex-grow-0 flex-shrink-0",
                    key: item.title
                  }, [
                    createVNode(_component_v_card, {
                      elevation: "0",
                      class: ["d-flex align-center justify-center py-5 px-8 ga-3 rounded-16", "bg-light" + item.color]
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                          "stroke-width": "1.5",
                          class: "text-" + item.color,
                          size: "24"
                        }, null, 8, ["class"])),
                        createVNode("h5", {
                          class: "text-15  font-weight-semibold text-" + item.color
                        }, toDisplayString(item.title), 3)
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ]);
                }), 128)),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(ThemeFeature2), (item) => {
                  return openBlock(), createBlock("div", {
                    class: "flex-grow-0 flex-shrink-0",
                    key: item.title
                  }, [
                    createVNode(_component_v_card, {
                      elevation: "0",
                      class: ["d-flex align-center justify-center py-5 px-8 ga-3 rounded-16", "bg-light" + item.color]
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                          "stroke-width": "1.5",
                          class: "text-" + item.color,
                          size: "24"
                        }, null, 8, ["class"])),
                        createVNode("h5", {
                          class: "text-15  font-weight-semibold text-" + item.color
                        }, toDisplayString(item.title), 3)
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ]);
                }), 128))
              ]),
              createVNode("div", { class: "d-flex ga-6 marquee1-group pt-6" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(ThemeFeature3), (item) => {
                  return openBlock(), createBlock("div", {
                    class: "flex-grow-0 flex-shrink-0",
                    key: item.title
                  }, [
                    createVNode(_component_v_card, {
                      elevation: "0",
                      class: ["d-flex align-center justify-center py-5 px-8 ga-3 rounded-16", "bg-light" + item.color]
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                          "stroke-width": "1.5",
                          class: "text-" + item.color,
                          size: "24"
                        }, null, 8, ["class"])),
                        createVNode("h5", {
                          class: "text-15  font-weight-semibold text-" + item.color
                        }, toDisplayString(item.title), 3)
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ]);
                }), 128)),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(ThemeFeature3), (item) => {
                  return openBlock(), createBlock("div", {
                    class: "flex-grow-0 flex-shrink-0",
                    key: item.title
                  }, [
                    createVNode(_component_v_card, {
                      elevation: "0",
                      class: ["d-flex align-center justify-center py-5 px-8 ga-3 rounded-16", "bg-light" + item.color]
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                          "stroke-width": "1.5",
                          class: "text-" + item.color,
                          size: "24"
                        }, null, 8, ["class"])),
                        createVNode("h5", {
                          class: "text-15  font-weight-semibold text-" + item.color
                        }, toDisplayString(item.title), 3)
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ]);
                }), 128)),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(ThemeFeature3), (item) => {
                  return openBlock(), createBlock("div", {
                    class: "flex-grow-0 flex-shrink-0",
                    key: item.title
                  }, [
                    createVNode(_component_v_card, {
                      elevation: "0",
                      class: ["d-flex align-center justify-center py-5 px-8 ga-3 rounded-16", "bg-light" + item.color]
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                          "stroke-width": "1.5",
                          class: "text-" + item.color,
                          size: "24"
                        }, null, 8, ["class"])),
                        createVNode("h5", {
                          class: "text-15  font-weight-semibold text-" + item.color
                        }, toDisplayString(item.title), 3)
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ]);
                }), 128))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/Homepage/Highlights.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OurTeam",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-p-96 bg-bgdark" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_container, { class: "max-width-1218" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { class: "pb-8" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    lg: "7"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="display-2 font-weight-bold"${_scopeId3}>Meet our team</h2>`);
                      } else {
                        return [
                          createVNode("h2", { class: "display-2 font-weight-bold" }, "Meet our team")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    lg: "5"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="text-16 font-medium text-white opacity-50 text-md-end"${_scopeId3}> Our robust analytics offer rich insights into the <br${_scopeId3}> information buyers want, informing where teams </p>`);
                      } else {
                        return [
                          createVNode("p", { class: "text-16 font-medium text-white opacity-50 text-md-end" }, [
                            createTextVNode(" Our robust analytics offer rich insights into the "),
                            createVNode("br"),
                            createTextVNode(" information buyers want, informing where teams ")
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
                      lg: "7"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "display-2 font-weight-bold" }, "Meet our team")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "5"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-16 font-medium text-white opacity-50 text-md-end" }, [
                          createTextVNode(" Our robust analytics offer rich insights into the "),
                          createVNode("br"),
                          createTextVNode(" information buyers want, informing where teams ")
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(OurLeaders), (card) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      lg: "3",
                      sm: "6",
                      key: card.img
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="position-relative rounded-16 team"${_scopeId3}><img${ssrRenderAttr("src", card.img)} alt="leader" class="w-100"${_scopeId3}><div class="bg-surface position-absolute py-4 px-3 text-center rounded-md intro"${_scopeId3}><h5 class="text-h5 textPrimary"${_scopeId3}>${ssrInterpolate(card.name)}</h5><p class="text-14 text-grey100"${_scopeId3}>${ssrInterpolate(card.position)}</p></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "position-relative rounded-16 team" }, [
                              createVNode("img", {
                                src: card.img,
                                alt: "leader",
                                class: "w-100"
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "bg-surface position-absolute py-4 px-3 text-center rounded-md intro" }, [
                                createVNode("h5", { class: "text-h5 textPrimary" }, toDisplayString(card.name), 1),
                                createVNode("p", { class: "text-14 text-grey100" }, toDisplayString(card.position), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(OurLeaders), (card) => {
                      return openBlock(), createBlock(_component_v_col, {
                        cols: "12",
                        lg: "3",
                        sm: "6",
                        key: card.img
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "position-relative rounded-16 team" }, [
                            createVNode("img", {
                              src: card.img,
                              alt: "leader",
                              class: "w-100"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "bg-surface position-absolute py-4 px-3 text-center rounded-md intro" }, [
                              createVNode("h5", { class: "text-h5 textPrimary" }, toDisplayString(card.name), 1),
                              createVNode("p", { class: "text-14 text-grey100" }, toDisplayString(card.position), 1)
                            ])
                          ])
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
              createVNode(_component_v_row, { class: "pb-8" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    lg: "7"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "display-2 font-weight-bold" }, "Meet our team")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    lg: "5"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-16 font-medium text-white opacity-50 text-md-end" }, [
                        createTextVNode(" Our robust analytics offer rich insights into the "),
                        createVNode("br"),
                        createTextVNode(" information buyers want, informing where teams ")
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(OurLeaders), (card) => {
                    return openBlock(), createBlock(_component_v_col, {
                      cols: "12",
                      lg: "3",
                      sm: "6",
                      key: card.img
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "position-relative rounded-16 team" }, [
                          createVNode("img", {
                            src: card.img,
                            alt: "leader",
                            class: "w-100"
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "bg-surface position-absolute py-4 px-3 text-center rounded-md intro" }, [
                            createVNode("h5", { class: "text-h5 textPrimary" }, toDisplayString(card.name), 1),
                            createVNode("p", { class: "text-14 text-grey100" }, toDisplayString(card.position), 1)
                          ])
                        ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/Homepage/OurTeam.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$4 as a, _sfc_main$3 as b, _sfc_main$1 as c, _sfc_main$2 as d };
//# sourceMappingURL=OurTeam-D9YgZyoE.mjs.map
