import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext, defineComponent, mergeProps, unref, resolveDynamicComponent, createBlock, openBlock, toDisplayString, Fragment, renderList, ref } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderVNode, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, l as user3, h as user1, R as user2 } from "../server.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as __nuxt_component_0 } from "./client-only-Bwxzq3Sq.js";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { WandIcon, ShieldLockIcon, ArchiveIcon, PresentationIcon, AdjustmentsIcon, TagIcon, DiamondIcon, DatabaseIcon, LanguageKatakanaIcon, BuildingCarouselIcon, ArrowsShuffleIcon, ChartPieIcon, LayersIntersectIcon, RefreshIcon, BookIcon, CalendarIcon, MessageIcon, ArrowLeftIcon, ArrowRightIcon } from "vue-tabler-icons";
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  _push(ssrRenderComponent(_component_v_container, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, { class: "justify-center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "12",
                class: "text-center"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="pt-2 pb-4"${_scopeId3}><p class="text-subtitle-1 text-grey100 font-weight-medium"${_scopeId3}> All rights reserved by Spike Admin. Designed &amp; Developed by <a href="https://wrappixel.com/" class="text-decoration-none text-primary" target="_blank"${_scopeId3}>wrappixel</a></p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "pt-2 pb-4" }, [
                        createVNode("p", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, [
                          createTextVNode(" All rights reserved by Spike Admin. Designed & Developed by "),
                          createVNode("a", {
                            href: "https://wrappixel.com/",
                            class: "text-decoration-none text-primary",
                            target: "_blank"
                          }, "wrappixel")
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
                  class: "text-center"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "pt-2 pb-4" }, [
                      createVNode("p", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, [
                        createTextVNode(" All rights reserved by Spike Admin. Designed & Developed by "),
                        createVNode("a", {
                          href: "https://wrappixel.com/",
                          class: "text-decoration-none text-primary",
                          target: "_blank"
                        }, "wrappixel")
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
          createVNode(_component_v_row, { class: "justify-center" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                cols: "12",
                class: "text-center"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "pt-2 pb-4" }, [
                    createVNode("p", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, [
                      createTextVNode(" All rights reserved by Spike Admin. Designed & Developed by "),
                      createVNode("a", {
                        href: "https://wrappixel.com/",
                        class: "text-decoration-none text-primary",
                        target: "_blank"
                      }, "wrappixel")
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
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landingpage/layout/Footer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0$1 = publicAssetsURL("/images/landingpage/background/school.png");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Purchase",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-containerBg" }, _attrs))}><div class="pt-8">`);
      _push(ssrRenderComponent(_component_v_container, { class: "maxWidth" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, {
              elevation: "0",
              class: "bg-bgdark build-app position-realtive overflow-visible"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_item, { class: "pb-md-8 pb-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, { class: "justify-space-between" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6",
                                class: "text-md-left text-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h2 class="text-h1 text-white lh-md"${_scopeId5}>Haven&#39;t found an answer to your question?</h2><div class="d-flex justify-md-start justify-center mt-4"${_scopeId5}><span class="text-h5 text-white font-weight-regular"${_scopeId5}>Connect with us either on discord or email us</span></div><div class="mt-sm-10 mt-6 d-sm-flex gap-3"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      href: "https://discord.com/invite/eMzE8F6Wqs",
                                      target: "_blank",
                                      color: "primary",
                                      size: "large",
                                      class: "m-btn-full px-6",
                                      rounded: "pill"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Ask on Discord`);
                                        } else {
                                          return [
                                            createTextVNode("Ask on Discord")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      href: "https://support.wrappixel.com/",
                                      target: "_blank",
                                      variant: "outlined",
                                      rounded: "pill",
                                      class: "lp-btn-shadow m-btn-full px-6 mt-sm-0 mt-4",
                                      size: "large"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Submit ticket`);
                                        } else {
                                          return [
                                            createTextVNode("Submit ticket")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div><img${ssrRenderAttr("src", _imports_0$1)} class="d-md-none d-block w-100"${_scopeId5}>`);
                                  } else {
                                    return [
                                      createVNode("h2", { class: "text-h1 text-white lh-md" }, "Haven't found an answer to your question?"),
                                      createVNode("div", { class: "d-flex justify-md-start justify-center mt-4" }, [
                                        createVNode("span", { class: "text-h5 text-white font-weight-regular" }, "Connect with us either on discord or email us")
                                      ]),
                                      createVNode("div", { class: "mt-sm-10 mt-6 d-sm-flex gap-3" }, [
                                        createVNode(_component_v_btn, {
                                          href: "https://discord.com/invite/eMzE8F6Wqs",
                                          target: "_blank",
                                          color: "primary",
                                          size: "large",
                                          class: "m-btn-full px-6",
                                          rounded: "pill"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Ask on Discord")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_btn, {
                                          href: "https://support.wrappixel.com/",
                                          target: "_blank",
                                          variant: "outlined",
                                          rounded: "pill",
                                          class: "lp-btn-shadow m-btn-full px-6 mt-sm-0 mt-4",
                                          size: "large"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Submit ticket")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("img", {
                                        src: _imports_0$1,
                                        class: "d-md-none d-block w-100"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6",
                                  class: "text-md-left text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h2", { class: "text-h1 text-white lh-md" }, "Haven't found an answer to your question?"),
                                    createVNode("div", { class: "d-flex justify-md-start justify-center mt-4" }, [
                                      createVNode("span", { class: "text-h5 text-white font-weight-regular" }, "Connect with us either on discord or email us")
                                    ]),
                                    createVNode("div", { class: "mt-sm-10 mt-6 d-sm-flex gap-3" }, [
                                      createVNode(_component_v_btn, {
                                        href: "https://discord.com/invite/eMzE8F6Wqs",
                                        target: "_blank",
                                        color: "primary",
                                        size: "large",
                                        class: "m-btn-full px-6",
                                        rounded: "pill"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Ask on Discord")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_btn, {
                                        href: "https://support.wrappixel.com/",
                                        target: "_blank",
                                        variant: "outlined",
                                        rounded: "pill",
                                        class: "lp-btn-shadow m-btn-full px-6 mt-sm-0 mt-4",
                                        size: "large"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Submit ticket")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("img", {
                                      src: _imports_0$1,
                                      class: "d-md-none d-block w-100"
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
                          createVNode(_component_v_row, { class: "justify-space-between" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6",
                                class: "text-md-left text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h2", { class: "text-h1 text-white lh-md" }, "Haven't found an answer to your question?"),
                                  createVNode("div", { class: "d-flex justify-md-start justify-center mt-4" }, [
                                    createVNode("span", { class: "text-h5 text-white font-weight-regular" }, "Connect with us either on discord or email us")
                                  ]),
                                  createVNode("div", { class: "mt-sm-10 mt-6 d-sm-flex gap-3" }, [
                                    createVNode(_component_v_btn, {
                                      href: "https://discord.com/invite/eMzE8F6Wqs",
                                      target: "_blank",
                                      color: "primary",
                                      size: "large",
                                      class: "m-btn-full px-6",
                                      rounded: "pill"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Ask on Discord")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_btn, {
                                      href: "https://support.wrappixel.com/",
                                      target: "_blank",
                                      variant: "outlined",
                                      rounded: "pill",
                                      class: "lp-btn-shadow m-btn-full px-6 mt-sm-0 mt-4",
                                      size: "large"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Submit ticket")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("img", {
                                    src: _imports_0$1,
                                    class: "d-md-none d-block w-100"
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
                } else {
                  return [
                    createVNode(_component_v_card_item, { class: "pb-md-8 pb-0" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, { class: "justify-space-between" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6",
                              class: "text-md-left text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("h2", { class: "text-h1 text-white lh-md" }, "Haven't found an answer to your question?"),
                                createVNode("div", { class: "d-flex justify-md-start justify-center mt-4" }, [
                                  createVNode("span", { class: "text-h5 text-white font-weight-regular" }, "Connect with us either on discord or email us")
                                ]),
                                createVNode("div", { class: "mt-sm-10 mt-6 d-sm-flex gap-3" }, [
                                  createVNode(_component_v_btn, {
                                    href: "https://discord.com/invite/eMzE8F6Wqs",
                                    target: "_blank",
                                    color: "primary",
                                    size: "large",
                                    class: "m-btn-full px-6",
                                    rounded: "pill"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Ask on Discord")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_btn, {
                                    href: "https://support.wrappixel.com/",
                                    target: "_blank",
                                    variant: "outlined",
                                    rounded: "pill",
                                    class: "lp-btn-shadow m-btn-full px-6 mt-sm-0 mt-4",
                                    size: "large"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Submit ticket")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("img", {
                                  src: _imports_0$1,
                                  class: "d-md-none d-block w-100"
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card, {
                elevation: "0",
                class: "bg-bgdark build-app position-realtive overflow-visible"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card_item, { class: "pb-md-8 pb-0" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, { class: "justify-space-between" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6",
                            class: "text-md-left text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("h2", { class: "text-h1 text-white lh-md" }, "Haven't found an answer to your question?"),
                              createVNode("div", { class: "d-flex justify-md-start justify-center mt-4" }, [
                                createVNode("span", { class: "text-h5 text-white font-weight-regular" }, "Connect with us either on discord or email us")
                              ]),
                              createVNode("div", { class: "mt-sm-10 mt-6 d-sm-flex gap-3" }, [
                                createVNode(_component_v_btn, {
                                  href: "https://discord.com/invite/eMzE8F6Wqs",
                                  target: "_blank",
                                  color: "primary",
                                  size: "large",
                                  class: "m-btn-full px-6",
                                  rounded: "pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Ask on Discord")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  href: "https://support.wrappixel.com/",
                                  target: "_blank",
                                  variant: "outlined",
                                  rounded: "pill",
                                  class: "lp-btn-shadow m-btn-full px-6 mt-sm-0 mt-4",
                                  size: "large"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Submit ticket")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("img", {
                                src: _imports_0$1,
                                class: "d-md-none d-block w-100"
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
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landingpage/section/Purchase.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/images/landingpage/slider/slider-group.png");
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_btn = resolveComponent("v-btn");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "revotion bg-bglight py-14" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_container, { class: "maxWidth" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, { class: "justify-center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "12",
                md: "9",
                class: "text-center"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h1 class="text-48 text-grey200 bannerTitle" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000"${_scopeId3}> Crée ton événement, de A à Z, comme un grand. </h1><p class="my-6 font-weight-semibold text-grey100 text-h5 mb-12" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000"${_scopeId3}> Imaginer, connecter, vivre. </p><div class="mt-6 d-sm-flex gap-3 justify-center" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_v_btn, {
                      to: "/auth/Login",
                      color: "primary",
                      rounded: "pill",
                      class: "mt-sm-0 mt-4 lp-btn-shadow m-btn-full btn-custom-lg mb-sm-0 mb-4",
                      size: "large"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Je crée mon évènement !`);
                        } else {
                          return [
                            createTextVNode("Je crée mon évènement !")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("h1", {
                        class: "text-48 text-grey200 bannerTitle",
                        "data-aos": "fade-up",
                        "data-aos-delay": "400",
                        "data-aos-duration": "1000"
                      }, " Crée ton événement, de A à Z, comme un grand. "),
                      createVNode("p", {
                        class: "my-6 font-weight-semibold text-grey100 text-h5 mb-12",
                        "data-aos": "fade-up",
                        "data-aos-delay": "600",
                        "data-aos-duration": "1000"
                      }, " Imaginer, connecter, vivre. "),
                      createVNode("div", {
                        class: "mt-6 d-sm-flex gap-3 justify-center",
                        "data-aos": "fade-up",
                        "data-aos-delay": "800",
                        "data-aos-duration": "1000"
                      }, [
                        createVNode(_component_v_btn, {
                          to: "/auth/Login",
                          color: "primary",
                          rounded: "pill",
                          class: "mt-sm-0 mt-4 lp-btn-shadow m-btn-full btn-custom-lg mb-sm-0 mb-4",
                          size: "large"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Je crée mon évènement !")
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
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "9",
                  class: "text-center"
                }, {
                  default: withCtx(() => [
                    createVNode("h1", {
                      class: "text-48 text-grey200 bannerTitle",
                      "data-aos": "fade-up",
                      "data-aos-delay": "400",
                      "data-aos-duration": "1000"
                    }, " Crée ton événement, de A à Z, comme un grand. "),
                    createVNode("p", {
                      class: "my-6 font-weight-semibold text-grey100 text-h5 mb-12",
                      "data-aos": "fade-up",
                      "data-aos-delay": "600",
                      "data-aos-duration": "1000"
                    }, " Imaginer, connecter, vivre. "),
                    createVNode("div", {
                      class: "mt-6 d-sm-flex gap-3 justify-center",
                      "data-aos": "fade-up",
                      "data-aos-delay": "800",
                      "data-aos-duration": "1000"
                    }, [
                      createVNode(_component_v_btn, {
                        to: "/auth/Login",
                        color: "primary",
                        rounded: "pill",
                        class: "mt-sm-0 mt-4 lp-btn-shadow m-btn-full btn-custom-lg mb-sm-0 mb-4",
                        size: "large"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Je crée mon évènement !")
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
          createVNode(_component_v_row, { class: "justify-center" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                cols: "12",
                md: "9",
                class: "text-center"
              }, {
                default: withCtx(() => [
                  createVNode("h1", {
                    class: "text-48 text-grey200 bannerTitle",
                    "data-aos": "fade-up",
                    "data-aos-delay": "400",
                    "data-aos-duration": "1000"
                  }, " Crée ton événement, de A à Z, comme un grand. "),
                  createVNode("p", {
                    class: "my-6 font-weight-semibold text-grey100 text-h5 mb-12",
                    "data-aos": "fade-up",
                    "data-aos-delay": "600",
                    "data-aos-duration": "1000"
                  }, " Imaginer, connecter, vivre. "),
                  createVNode("div", {
                    class: "mt-6 d-sm-flex gap-3 justify-center",
                    "data-aos": "fade-up",
                    "data-aos-delay": "800",
                    "data-aos-duration": "1000"
                  }, [
                    createVNode(_component_v_btn, {
                      to: "/auth/Login",
                      color: "primary",
                      rounded: "pill",
                      class: "mt-sm-0 mt-4 lp-btn-shadow m-btn-full btn-custom-lg mb-sm-0 mb-4",
                      size: "large"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Je crée mon évènement !")
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
  _push(`<div class=""><div class="d-flex flex-row mt-sm-8 mt-5 overflow-hidden"><div class="slider-group"><img${ssrRenderAttr("src", _imports_0)}></div><div class="slider-group"><img${ssrRenderAttr("src", _imports_0)}></div><div class="slider-group"><img${ssrRenderAttr("src", _imports_0)}></div><div class="slider-group"><img${ssrRenderAttr("src", _imports_0)}></div><div class="slider-group"><img${ssrRenderAttr("src", _imports_0)}></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landingpage/section/Revolution.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Revolution = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const img15 = publicAssetsURL("/images/landingpage/apps/app-blog-detail.jpg");
const img11 = publicAssetsURL("/images/landingpage/apps/app-blog.jpg");
const img6 = publicAssetsURL("/images/landingpage/apps/app-calendar.jpg");
const img7 = publicAssetsURL("/images/landingpage/apps/app-chat.jpg");
const img8 = publicAssetsURL("/images/landingpage/apps/app-contact.jpg");
const img14 = publicAssetsURL("/images/landingpage/apps/app-invoice.jpg");
const img17 = publicAssetsURL("/images/landingpage/apps/app-kanban.jpg");
const img10 = publicAssetsURL("/images/landingpage/apps/app-note.jpg");
const img16 = publicAssetsURL("/images/landingpage/apps/app-product-detail.jpg");
const img13 = publicAssetsURL("/images/landingpage/apps/app-productlist.jpg");
const img12 = publicAssetsURL("/images/landingpage/apps/app-shop.jpg");
const img9 = publicAssetsURL("/images/landingpage/apps/app-user-profile.jpg");
const img2 = publicAssetsURL("/images/landingpage/demos/demo-dark.jpg");
const img3 = publicAssetsURL("/images/landingpage/demos/demo-horizontal.jpg");
const img1 = publicAssetsURL("/images/landingpage/demos/demo-main.jpg");
const img4 = publicAssetsURL("/images/landingpage/demos/demo-mini.jpg");
const img5 = publicAssetsURL("/images/landingpage/demos/demo-rtl.jpg");
const frnt2 = publicAssetsURL("/images/landingpage/frontpages/aboutus.jpg");
const frnt3 = publicAssetsURL("/images/landingpage/frontpages/contactus.jpg");
const frnt1 = publicAssetsURL("/images/landingpage/frontpages/homepage.jpg");
const frnt4 = publicAssetsURL("/images/landingpage/frontpages/portfolio.jpg");
const productsSlider = [
  {
    type: true,
    img: img1,
    name: "Main",
    link: "https://spike-nuxtjs-pro-main.netlify.app/dashboards/dashboard1"
  },
  {
    type: true,
    img: img2,
    name: "Dark",
    link: "https://spike-nuxtjs-pro-dark.netlify.app/dashboards/dashboard1"
  },
  {
    type: true,
    img: img3,
    name: "Horizontal",
    link: "https://spike-nuxtjs-pro-horizontal.netlify.app/dashboards/dashboard1"
  },
  {
    type: true,
    img: img4,
    name: "Minisidebar",
    link: "https://spike-nuxtjs-pro-minisidebar.netlify.app/dashboards/dashboard1"
  },
  {
    type: true,
    img: img5,
    name: "RTL",
    link: "https://spike-nuxtjs-pro-rtl.netlify.app/dashboards/dashboard1"
  },
  {
    type: false,
    img: img6,
    name: "Calandar App",
    link: "/apps/calendar"
  },
  {
    type: false,
    img: img7,
    name: "Chat App",
    link: "/apps/chats"
  },
  {
    type: false,
    img: img8,
    name: "Contact App",
    link: "/apps/contacts"
  },
  {
    type: false,
    img: img9,
    name: "User Profile App",
    link: "/apps/userprofile/one"
  },
  {
    type: false,
    img: img10,
    name: "Notes App",
    link: "/apps/notes"
  },
  {
    type: false,
    img: img11,
    name: "Blog App",
    link: "/apps/blog/posts"
  },
  {
    type: false,
    img: img15,
    name: "Blog Detail App",
    link: "/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones"
  },
  {
    type: false,
    img: img12,
    name: "eCommerce Shop App",
    link: "/apps/ecommerce/productsone"
  },
  {
    type: false,
    img: img16,
    name: "eCommerce Product Detail App",
    link: "/apps/ecommerce/product/one/detail/1"
  },
  {
    type: false,
    img: img13,
    name: "eCommerce Product List App",
    link: "/apps/ecommerce/productlist"
  },
  {
    type: false,
    img: img14,
    name: "Invoice App",
    link: "/apps/invoice"
  },
  {
    type: false,
    img: img17,
    name: "Kanban Application",
    link: "/apps/kanban"
  }
];
const userReview = [
  {
    img: user3,
    title: "Leslie Alexander",
    subtitle: "Product Designer, Appzio",
    review: "Such a beautiful, detailed, and extensive template. Spike admin is the perfect foundation for any project. I highly recommend this huge time saver."
  },
  {
    img: user1,
    title: "Jenny Wilson",
    subtitle: "Features avaibility",
    review: "The dashboard template from wrappixel has helped me provide a cleanand sleek look to my dashboard and made it look exactly the way I wanted it to, mainly without having."
  },
  {
    img: user2,
    title: "Minshan Cui",
    subtitle: "Features avaibility",
    review: "The quality of design is excellent, customizability and flexibility much better than the other products available in the market.I strongly recommend the wrappixel to other."
  }
];
const listFeature = [
  {
    icon: WandIcon,
    title: "6 Theme Colors",
    subtitle: "We have included 6 pre-defined Theme Colors with Spike Admin.",
    bgcolor: "primary"
  },
  {
    icon: ShieldLockIcon,
    title: "Authguard",
    subtitle: "We have AUTH guard functionality which is based on JWT.",
    bgcolor: "error"
  },
  {
    icon: ArchiveIcon,
    title: "65+ Page Templates",
    subtitle: "Yes, we have 5 demos & 65+ Pages per demo to make it easier.",
    bgcolor: "info"
  },
  {
    icon: PresentationIcon,
    title: "4+ Frontend Pages",
    subtitle: "We have added useful frontend pages with Spike Admin",
    bgcolor: "warning"
  },
  {
    icon: AdjustmentsIcon,
    title: "45+ UI Components",
    subtitle: "Almost 45+ UI Components being given with Spike Admin Pack.",
    bgcolor: "success"
  },
  {
    icon: TagIcon,
    title: "Vuetify",
    subtitle: "It is made with Vuetify which is a powerful UI Component Framework.",
    bgcolor: "warning"
  },
  {
    icon: DiamondIcon,
    title: "3400+ Font Icons",
    subtitle: "Lots of Icon Fonts are included here in the package of Spike Admin.",
    bgcolor: "success"
  },
  {
    icon: DatabaseIcon,
    title: "Axios",
    subtitle: "Axios is a promise-based HTTP Client for node.js and the browser.",
    bgcolor: "indigo"
  },
  {
    icon: LanguageKatakanaIcon,
    title: "i18n Vue",
    subtitle: "Vue i18n is a powerful internationalization framework for Vue.",
    bgcolor: "primary"
  },
  {
    icon: BuildingCarouselIcon,
    title: "Vue3 Carousel",
    // subtitle: 'The Last Vue3 Carousel You will Ever Need!'
    subtitle: "Flexible, responsive, and highly customizable Vue carousel component",
    bgcolor: "error"
  },
  {
    icon: ArrowsShuffleIcon,
    title: "Easy to Customize",
    subtitle: "Customization will be easy as we understand your pain.",
    bgcolor: "info"
  },
  {
    icon: ChartPieIcon,
    title: "Lots of Chart Options",
    subtitle: "You name it and we have it, Yes lots of variations for Charts.",
    bgcolor: "success"
  },
  {
    icon: LayersIntersectIcon,
    title: "Lots of Table Examples",
    subtitle: "Data Tables are initial requirement and we added them.",
    bgcolor: "warning"
  },
  {
    icon: RefreshIcon,
    title: "Regular Updates",
    subtitle: "We are constantly updating our pack with new features.",
    bgcolor: "warning"
  },
  {
    icon: BookIcon,
    title: "Detailed Documentation",
    subtitle: "We have made detailed documentation, so it will easy to use.",
    bgcolor: "indigo"
  },
  {
    icon: CalendarIcon,
    title: "Calendar Design",
    subtitle: "Calendar is available with our package & in nice design.",
    bgcolor: "primary"
  },
  {
    icon: MessageIcon,
    title: "Dedicated Support",
    subtitle: "We believe in supreme support is key and we offer that.",
    bgcolor: "error"
  }
];
const demosMegamenu = [
  {
    img: img1,
    name: "Main",
    link: "https://spike-nuxtjs-pro-main.netlify.app/dashboards/dashboard1"
  },
  {
    img: img2,
    name: "Dark",
    link: "https://spike-nuxtjs-pro-dark.netlify.app/dashboards/dashboard1"
  },
  {
    img: img3,
    name: "Horizontal",
    link: "https://spike-nuxtjs-pro-horizontal.netlify.app/dashboards/dashboard1"
  },
  {
    img: img4,
    name: "Minisidebar",
    link: "https://spike-nuxtjs-pro-minisidebar.netlify.app/dashboards/dashboard1"
  },
  {
    img: img5,
    name: "RTL",
    link: "https://spike-nuxtjs-pro-rtl.netlify.app/dashboards/dashboard1"
  }
];
const appsMegamenu = [
  {
    img: img6,
    name: "Calandar App",
    link: "/apps/calendar"
  },
  {
    img: img7,
    name: "Chat App",
    link: "/apps/chats"
  },
  {
    img: img8,
    name: "Contact App",
    link: "/apps/contacts"
  },
  {
    img: img9,
    name: "User Profile App",
    link: "/apps/userprofile/one"
  },
  {
    img: img10,
    name: "Notes App",
    link: "/apps/notes"
  }
];
const FrontPageMenu = [
  {
    img: frnt1,
    name: "Notre histoire",
    link: "/front-pages/homepage"
  },
  {
    img: frnt2,
    name: "Nos valeurs",
    link: "/front-pages/about-us"
  },
  {
    img: frnt3,
    name: "Nos engagements",
    link: "/front-pages/contact-us"
  },
  {
    img: frnt4,
    name: "L’équipe",
    link: "/front-pages/portfolio"
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "otherFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_avatar = resolveComponent("v-avatar");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-sm-16 py-10 bg-bglight" }, _attrs))}><div class="py-sm-16 py-10">`);
      _push(ssrRenderComponent(_component_v_container, { class: "maxWidth" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { class: "justify-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h5 class="text-h5 text-grey100 text-center font-weight-medium mb-6"${_scopeId3}> Almost covered everything </h5><h2 class="sectionTitle text-center font-weight-bold mb-4"${_scopeId3}> Other Amazing Features &amp; Flexibility Provided </h2>`);
                      } else {
                        return [
                          createVNode("h5", { class: "text-h5 text-grey100 text-center font-weight-medium mb-6" }, " Almost covered everything "),
                          createVNode("h2", { class: "sectionTitle text-center font-weight-bold mb-4" }, " Other Amazing Features & Flexibility Provided ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("h5", { class: "text-h5 text-grey100 text-center font-weight-medium mb-6" }, " Almost covered everything "),
                        createVNode("h2", { class: "sectionTitle text-center font-weight-bold mb-4" }, " Other Amazing Features & Flexibility Provided ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, { class: "mt-10" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(listFeature), (list) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      md: "3",
                      sm: "4",
                      class: "pl-sm-3 pr-sm-2 d-flex",
                      key: list.title
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_card_item, { class: "pa-6" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_avatar, {
                                        size: "50",
                                        class: "rounded-md bg-light" + list.bgcolor
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            ssrRenderVNode(_push7, createVNode(resolveDynamicComponent(list.icon), {
                                              "stroke-width": "1.5",
                                              size: "30",
                                              class: "text-" + list.bgcolor
                                            }, null), _parent7, _scopeId6);
                                          } else {
                                            return [
                                              (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                "stroke-width": "1.5",
                                                size: "30",
                                                class: "text-" + list.bgcolor
                                              }, null, 8, ["class"]))
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<h4 class="text-h4 mt-6"${_scopeId5}>${ssrInterpolate(list.title)}</h4><h6 class="text-h6 text-grey100 font-weight-medium lh-md mt-2"${_scopeId5}>${ssrInterpolate(list.subtitle)}</h6>`);
                                    } else {
                                      return [
                                        createVNode(_component_v_avatar, {
                                          size: "50",
                                          class: "rounded-md bg-light" + list.bgcolor
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                              "stroke-width": "1.5",
                                              size: "30",
                                              class: "text-" + list.bgcolor
                                            }, null, 8, ["class"]))
                                          ]),
                                          _: 2
                                        }, 1032, ["class"]),
                                        createVNode("h4", { class: "text-h4 mt-6" }, toDisplayString(list.title), 1),
                                        createVNode("h6", { class: "text-h6 text-grey100 font-weight-medium lh-md mt-2" }, toDisplayString(list.subtitle), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_card_item, { class: "pa-6" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_avatar, {
                                        size: "50",
                                        class: "rounded-md bg-light" + list.bgcolor
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                            "stroke-width": "1.5",
                                            size: "30",
                                            class: "text-" + list.bgcolor
                                          }, null, 8, ["class"]))
                                        ]),
                                        _: 2
                                      }, 1032, ["class"]),
                                      createVNode("h4", { class: "text-h4 mt-6" }, toDisplayString(list.title), 1),
                                      createVNode("h6", { class: "text-h6 text-grey100 font-weight-medium lh-md mt-2" }, toDisplayString(list.subtitle), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_card, { elevation: "10" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_item, { class: "pa-6" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_avatar, {
                                      size: "50",
                                      class: "rounded-md bg-light" + list.bgcolor
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                          "stroke-width": "1.5",
                                          size: "30",
                                          class: "text-" + list.bgcolor
                                        }, null, 8, ["class"]))
                                      ]),
                                      _: 2
                                    }, 1032, ["class"]),
                                    createVNode("h4", { class: "text-h4 mt-6" }, toDisplayString(list.title), 1),
                                    createVNode("h6", { class: "text-h6 text-grey100 font-weight-medium lh-md mt-2" }, toDisplayString(list.subtitle), 1)
                                  ]),
                                  _: 2
                                }, 1024)
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(listFeature), (list) => {
                      return openBlock(), createBlock(_component_v_col, {
                        cols: "12",
                        md: "3",
                        sm: "4",
                        class: "pl-sm-3 pr-sm-2 d-flex",
                        key: list.title
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, { elevation: "10" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_item, { class: "pa-6" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_avatar, {
                                    size: "50",
                                    class: "rounded-md bg-light" + list.bgcolor
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                        "stroke-width": "1.5",
                                        size: "30",
                                        class: "text-" + list.bgcolor
                                      }, null, 8, ["class"]))
                                    ]),
                                    _: 2
                                  }, 1032, ["class"]),
                                  createVNode("h4", { class: "text-h4 mt-6" }, toDisplayString(list.title), 1),
                                  createVNode("h6", { class: "text-h6 text-grey100 font-weight-medium lh-md mt-2" }, toDisplayString(list.subtitle), 1)
                                ]),
                                _: 2
                              }, 1024)
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
          } else {
            return [
              createVNode(_component_v_row, { class: "justify-center" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("h5", { class: "text-h5 text-grey100 text-center font-weight-medium mb-6" }, " Almost covered everything "),
                      createVNode("h2", { class: "sectionTitle text-center font-weight-bold mb-4" }, " Other Amazing Features & Flexibility Provided ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, { class: "mt-10" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(listFeature), (list) => {
                    return openBlock(), createBlock(_component_v_col, {
                      cols: "12",
                      md: "3",
                      sm: "4",
                      class: "pl-sm-3 pr-sm-2 d-flex",
                      key: list.title
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { elevation: "10" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_item, { class: "pa-6" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_avatar, {
                                  size: "50",
                                  class: "rounded-md bg-light" + list.bgcolor
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                      "stroke-width": "1.5",
                                      size: "30",
                                      class: "text-" + list.bgcolor
                                    }, null, 8, ["class"]))
                                  ]),
                                  _: 2
                                }, 1032, ["class"]),
                                createVNode("h4", { class: "text-h4 mt-6" }, toDisplayString(list.title), 1),
                                createVNode("h6", { class: "text-h6 text-grey100 font-weight-medium lh-md mt-2" }, toDisplayString(list.subtitle), 1)
                              ]),
                              _: 2
                            }, 1024)
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
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landingpage/section/otherFeatures.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const testimonialSettings = {
  snapAlign: "start",
  wrapAround: true,
  itemsToShow: 1,
  autoplay: 4e3
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "userReview",
  __ssrInlineRender: true,
  setup(__props) {
    const rating = ref(5);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VContainer = resolveComponent("VContainer");
      const _component_VCard = resolveComponent("VCard");
      const _component_ClientOnly = __nuxt_component_0;
      const _component_VRating = resolveComponent("VRating");
      const _component_VAvatar = resolveComponent("VAvatar");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-sm-15 py-7 bg-containerBg" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_VContainer, { class: "maxWidth" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="testimonials" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Carousel), {
              settings: unref(testimonialSettings),
              class: "overflow-hidden"
            }, {
              addons: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Pagination), { class: "mt-sm-8 mt-6" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Navigation), { class: "navarrow mt-md-n3 d-md-block d-none" }, {
                    next: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="mt-sm-0 mt-16"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(ArrowRightIcon), {
                          class: "mt-md-0 mt-7 pa-sm-0 pa-0 arrow-light",
                          size: "25",
                          "stroke-width": "1.5"
                        }, null, _parent4, _scopeId3));
                        _push4(`</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "mt-sm-0 mt-16" }, [
                            createVNode(unref(ArrowRightIcon), {
                              class: "mt-md-0 mt-7 pa-sm-0 pa-0 arrow-light",
                              size: "25",
                              "stroke-width": "1.5"
                            })
                          ])
                        ];
                      }
                    }),
                    prev: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="mt-sm-0 mt-16"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(ArrowLeftIcon), {
                          class: "mt-md-0 mt-7 pa-sm-0 pa-0 arrow-light",
                          size: "25",
                          "stroke-width": "1.5"
                        }, null, _parent4, _scopeId3));
                        _push4(`</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "mt-sm-0 mt-16" }, [
                            createVNode(unref(ArrowLeftIcon), {
                              class: "mt-md-0 mt-7 pa-sm-0 pa-0 arrow-light",
                              size: "25",
                              "stroke-width": "1.5"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Pagination), { class: "mt-sm-8 mt-6" }),
                    createVNode(unref(Navigation), { class: "navarrow mt-md-n3 d-md-block d-none" }, {
                      next: withCtx(() => [
                        createVNode("span", { class: "mt-sm-0 mt-16" }, [
                          createVNode(unref(ArrowRightIcon), {
                            class: "mt-md-0 mt-7 pa-sm-0 pa-0 arrow-light",
                            size: "25",
                            "stroke-width": "1.5"
                          })
                        ])
                      ]),
                      prev: withCtx(() => [
                        createVNode("span", { class: "mt-sm-0 mt-16" }, [
                          createVNode(unref(ArrowLeftIcon), {
                            class: "mt-md-0 mt-7 pa-sm-0 pa-0 arrow-light",
                            size: "25",
                            "stroke-width": "1.5"
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(userReview), (card) => {
                    _push3(ssrRenderComponent(unref(Slide), {
                      key: card.img
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_VCard, {
                            elevation: "0",
                            class: "text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="review-box py-4"${_scopeId4}><div${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_ClientOnly, null, {}, _parent5, _scopeId4));
                                _push5(`</div><p class="text-h1 font-weight-medium mt-6 col-sm-8"${_scopeId4}>${ssrInterpolate(card.review)}</p><div class="d-flex justify-center align-center mt-8 gap-3"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_VAvatar, { size: "64" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<img${ssrRenderAttr("src", card.img)}${ssrRenderAttr("alt", card.img)} width="64"${_scopeId5}>`);
                                    } else {
                                      return [
                                        createVNode("img", {
                                          src: card.img,
                                          alt: card.img,
                                          width: "64"
                                        }, null, 8, ["src", "alt"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<div class="text-left mt-n1"${_scopeId4}><h6 class="text-h5 mb-1"${_scopeId4}>${ssrInterpolate(card.title)}</h6><h6 class="text-h6 font-weight-medium text-grey100"${_scopeId4}>${ssrInterpolate(card.subtitle)}</h6>`);
                                _push5(ssrRenderComponent(_component_ClientOnly, null, {}, _parent5, _scopeId4));
                                _push5(`</div></div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "review-box py-4" }, [
                                    createVNode("div", null, [
                                      createVNode(_component_ClientOnly, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_VRating, {
                                            modelValue: rating.value,
                                            "onUpdate:modelValue": ($event) => rating.value = $event,
                                            hover: "",
                                            size: "x-large",
                                            density: "compact",
                                            color: "warning"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("p", { class: "text-h1 font-weight-medium mt-6 col-sm-8" }, toDisplayString(card.review), 1),
                                    createVNode("div", { class: "d-flex justify-center align-center mt-8 gap-3" }, [
                                      createVNode(_component_VAvatar, { size: "64" }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: card.img,
                                            alt: card.img,
                                            width: "64"
                                          }, null, 8, ["src", "alt"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("div", { class: "text-left mt-n1" }, [
                                        createVNode("h6", { class: "text-h5 mb-1" }, toDisplayString(card.title), 1),
                                        createVNode("h6", { class: "text-h6 font-weight-medium text-grey100" }, toDisplayString(card.subtitle), 1),
                                        createVNode(_component_ClientOnly, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_VRating, {
                                              modelValue: rating.value,
                                              "onUpdate:modelValue": ($event) => rating.value = $event,
                                              hover: "",
                                              size: "small",
                                              density: "compact",
                                              color: "warning",
                                              class: "d-sm-none"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_VCard, {
                              elevation: "0",
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "review-box py-4" }, [
                                  createVNode("div", null, [
                                    createVNode(_component_ClientOnly, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_VRating, {
                                          modelValue: rating.value,
                                          "onUpdate:modelValue": ($event) => rating.value = $event,
                                          hover: "",
                                          size: "x-large",
                                          density: "compact",
                                          color: "warning"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("p", { class: "text-h1 font-weight-medium mt-6 col-sm-8" }, toDisplayString(card.review), 1),
                                  createVNode("div", { class: "d-flex justify-center align-center mt-8 gap-3" }, [
                                    createVNode(_component_VAvatar, { size: "64" }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: card.img,
                                          alt: card.img,
                                          width: "64"
                                        }, null, 8, ["src", "alt"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", { class: "text-left mt-n1" }, [
                                      createVNode("h6", { class: "text-h5 mb-1" }, toDisplayString(card.title), 1),
                                      createVNode("h6", { class: "text-h6 font-weight-medium text-grey100" }, toDisplayString(card.subtitle), 1),
                                      createVNode(_component_ClientOnly, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_VRating, {
                                            modelValue: rating.value,
                                            "onUpdate:modelValue": ($event) => rating.value = $event,
                                            hover: "",
                                            size: "small",
                                            density: "compact",
                                            color: "warning",
                                            class: "d-sm-none"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
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
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(userReview), (card) => {
                      return openBlock(), createBlock(unref(Slide), {
                        key: card.img
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_VCard, {
                            elevation: "0",
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "review-box py-4" }, [
                                createVNode("div", null, [
                                  createVNode(_component_ClientOnly, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_VRating, {
                                        modelValue: rating.value,
                                        "onUpdate:modelValue": ($event) => rating.value = $event,
                                        hover: "",
                                        size: "x-large",
                                        density: "compact",
                                        color: "warning"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("p", { class: "text-h1 font-weight-medium mt-6 col-sm-8" }, toDisplayString(card.review), 1),
                                createVNode("div", { class: "d-flex justify-center align-center mt-8 gap-3" }, [
                                  createVNode(_component_VAvatar, { size: "64" }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: card.img,
                                        alt: card.img,
                                        width: "64"
                                      }, null, 8, ["src", "alt"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "text-left mt-n1" }, [
                                    createVNode("h6", { class: "text-h5 mb-1" }, toDisplayString(card.title), 1),
                                    createVNode("h6", { class: "text-h6 font-weight-medium text-grey100" }, toDisplayString(card.subtitle), 1),
                                    createVNode(_component_ClientOnly, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_VRating, {
                                          modelValue: rating.value,
                                          "onUpdate:modelValue": ($event) => rating.value = $event,
                                          hover: "",
                                          size: "small",
                                          density: "compact",
                                          color: "warning",
                                          class: "d-sm-none"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
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
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: "testimonials",
                "data-aos": "fade-up",
                "data-aos-delay": "400",
                "data-aos-duration": "1000"
              }, [
                createVNode(unref(Carousel), {
                  settings: unref(testimonialSettings),
                  class: "overflow-hidden"
                }, {
                  addons: withCtx(() => [
                    createVNode(unref(Pagination), { class: "mt-sm-8 mt-6" }),
                    createVNode(unref(Navigation), { class: "navarrow mt-md-n3 d-md-block d-none" }, {
                      next: withCtx(() => [
                        createVNode("span", { class: "mt-sm-0 mt-16" }, [
                          createVNode(unref(ArrowRightIcon), {
                            class: "mt-md-0 mt-7 pa-sm-0 pa-0 arrow-light",
                            size: "25",
                            "stroke-width": "1.5"
                          })
                        ])
                      ]),
                      prev: withCtx(() => [
                        createVNode("span", { class: "mt-sm-0 mt-16" }, [
                          createVNode(unref(ArrowLeftIcon), {
                            class: "mt-md-0 mt-7 pa-sm-0 pa-0 arrow-light",
                            size: "25",
                            "stroke-width": "1.5"
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(userReview), (card) => {
                      return openBlock(), createBlock(unref(Slide), {
                        key: card.img
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_VCard, {
                            elevation: "0",
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "review-box py-4" }, [
                                createVNode("div", null, [
                                  createVNode(_component_ClientOnly, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_VRating, {
                                        modelValue: rating.value,
                                        "onUpdate:modelValue": ($event) => rating.value = $event,
                                        hover: "",
                                        size: "x-large",
                                        density: "compact",
                                        color: "warning"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("p", { class: "text-h1 font-weight-medium mt-6 col-sm-8" }, toDisplayString(card.review), 1),
                                createVNode("div", { class: "d-flex justify-center align-center mt-8 gap-3" }, [
                                  createVNode(_component_VAvatar, { size: "64" }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: card.img,
                                        alt: card.img,
                                        width: "64"
                                      }, null, 8, ["src", "alt"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "text-left mt-n1" }, [
                                    createVNode("h6", { class: "text-h5 mb-1" }, toDisplayString(card.title), 1),
                                    createVNode("h6", { class: "text-h6 font-weight-medium text-grey100" }, toDisplayString(card.subtitle), 1),
                                    createVNode(_component_ClientOnly, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_VRating, {
                                          modelValue: rating.value,
                                          "onUpdate:modelValue": ($event) => rating.value = $event,
                                          hover: "",
                                          size: "small",
                                          density: "compact",
                                          color: "warning",
                                          class: "d-sm-none"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
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
                }, 8, ["settings"])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landingpage/section/userReview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  Footer as F,
  Revolution as R,
  _sfc_main$1 as _,
  _sfc_main as a,
  _sfc_main$3 as b,
  appsMegamenu as c,
  demosMegamenu as d,
  FrontPageMenu as e,
  productsSlider as p
};
//# sourceMappingURL=aos-CPm6hj59.js.map
