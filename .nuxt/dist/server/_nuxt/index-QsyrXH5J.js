import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext, defineComponent, ref } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
import { _ as _imports_0$2 } from "./virtual_public-DE-cyr71.js";
import { _ as _imports_0$3 } from "./virtual_public-B_rsBGXt.js";
import { _ as _imports_0$4 } from "./virtual_public-BYsXtuI9.js";
import { _ as _imports_2 } from "./virtual_public-QBV-rUkt.js";
import { _ as _sfc_main$7 } from "./BaseBreadcrumb-DAIjkUfv.js";
import "ofetch";
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
import "lodash";
import "vue-draggable-next";
import "vue3-easy-data-table";
import "vue-easy-lightbox";
import "vue-scrollto";
const _imports_0$1 = publicAssetsURL("/images/backgrounds/welcome-bg2.png");
const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_item = resolveComponent("v-card-item");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_card, mergeProps({
    elevation: "0",
    class: "bg-lightprimary border-0"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_item, { class: "py-0" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_row, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      sm: "7",
                      class: "pa-6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h5 class="text-h5 pt-3 font-weight-semibold"${_scopeId4}>Welcome back Natalia!</h5><h6 class="text-subtitle-1 text-13 py-4 text-grey100"${_scopeId4}> You have earned 54% more than last month which is great thing. </h6>`);
                          _push5(ssrRenderComponent(_component_v_btn, {
                            size: "large",
                            color: "primary",
                            rounded: "pill"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Check`);
                              } else {
                                return [
                                  createTextVNode("Check")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode("h5", { class: "text-h5 pt-3 font-weight-semibold" }, "Welcome back Natalia!"),
                            createVNode("h6", { class: "text-subtitle-1 text-13 py-4 text-grey100" }, " You have earned 54% more than last month which is great thing. "),
                            createVNode(_component_v_btn, {
                              size: "large",
                              color: "primary",
                              rounded: "pill"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Check")
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
                      sm: "5"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="mb-n2"${_scopeId4}><img${ssrRenderAttr("src", _imports_0$1)} class="mb-n16 mt-4" alt="image" width="300"${_scopeId4}></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "mb-n2" }, [
                              createVNode("img", {
                                src: _imports_0$1,
                                class: "mb-n16 mt-4",
                                alt: "image",
                                width: "300"
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "7",
                        class: "pa-6"
                      }, {
                        default: withCtx(() => [
                          createVNode("h5", { class: "text-h5 pt-3 font-weight-semibold" }, "Welcome back Natalia!"),
                          createVNode("h6", { class: "text-subtitle-1 text-13 py-4 text-grey100" }, " You have earned 54% more than last month which is great thing. "),
                          createVNode(_component_v_btn, {
                            size: "large",
                            color: "primary",
                            rounded: "pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Check")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "5"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mb-n2" }, [
                            createVNode("img", {
                              src: _imports_0$1,
                              class: "mb-n16 mt-4",
                              alt: "image",
                              width: "300"
                            })
                          ])
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
                createVNode(_component_v_row, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "7",
                      class: "pa-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("h5", { class: "text-h5 pt-3 font-weight-semibold" }, "Welcome back Natalia!"),
                        createVNode("h6", { class: "text-subtitle-1 text-13 py-4 text-grey100" }, " You have earned 54% more than last month which is great thing. "),
                        createVNode(_component_v_btn, {
                          size: "large",
                          color: "primary",
                          rounded: "pill"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Check")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "5"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-n2" }, [
                          createVNode("img", {
                            src: _imports_0$1,
                            class: "mb-n16 mt-4",
                            alt: "image",
                            width: "300"
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
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card_item, { class: "py-0" }, {
            default: withCtx(() => [
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "7",
                    class: "pa-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("h5", { class: "text-h5 pt-3 font-weight-semibold" }, "Welcome back Natalia!"),
                      createVNode("h6", { class: "text-subtitle-1 text-13 py-4 text-grey100" }, " You have earned 54% more than last month which is great thing. "),
                      createVNode(_component_v_btn, {
                        size: "large",
                        color: "primary",
                        rounded: "pill"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Check")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "5"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mb-n2" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          class: "mb-n16 mt-4",
                          alt: "image",
                          width: "300"
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
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/banners/Banner1.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Banner1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_item = resolveComponent("v-card-item");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_card, mergeProps({
    elevation: "0",
    class: "mt-6 bg-lightsecondary"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_item, { class: "py-0" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_row, { class: "d-flex align-center" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      sm: "7",
                      class: "pa-6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h5 class="text-h5 font-weight-semibold pt-3"${_scopeId4}>Track your every Transaction Easily</h5><h6 class="text-subtitle-1 text-13 py-4 text-grey100"${_scopeId4}> Track and record your every income and expence easily to control your balance </h6>`);
                          _push5(ssrRenderComponent(_component_v_btn, {
                            size: "large",
                            color: "secondary",
                            rounded: "pill"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Download`);
                              } else {
                                return [
                                  createTextVNode("Download")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode("h5", { class: "text-h5 font-weight-semibold pt-3" }, "Track your every Transaction Easily"),
                            createVNode("h6", { class: "text-subtitle-1 text-13 py-4 text-grey100" }, " Track and record your every income and expence easily to control your balance "),
                            createVNode(_component_v_btn, {
                              size: "large",
                              color: "secondary",
                              rounded: "pill"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Download")
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
                      sm: "5"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="px-11 pt-5 pb-7"${_scopeId4}><img${ssrRenderAttr("src", _imports_0$2)} height="215" class="mb-n12 ml-sm-5" alt="image"${_scopeId4}></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "px-11 pt-5 pb-7" }, [
                              createVNode("img", {
                                src: _imports_0$2,
                                height: "215",
                                class: "mb-n12 ml-sm-5",
                                alt: "image"
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "7",
                        class: "pa-6"
                      }, {
                        default: withCtx(() => [
                          createVNode("h5", { class: "text-h5 font-weight-semibold pt-3" }, "Track your every Transaction Easily"),
                          createVNode("h6", { class: "text-subtitle-1 text-13 py-4 text-grey100" }, " Track and record your every income and expence easily to control your balance "),
                          createVNode(_component_v_btn, {
                            size: "large",
                            color: "secondary",
                            rounded: "pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Download")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "5"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "px-11 pt-5 pb-7" }, [
                            createVNode("img", {
                              src: _imports_0$2,
                              height: "215",
                              class: "mb-n12 ml-sm-5",
                              alt: "image"
                            })
                          ])
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
                createVNode(_component_v_row, { class: "d-flex align-center" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "7",
                      class: "pa-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("h5", { class: "text-h5 font-weight-semibold pt-3" }, "Track your every Transaction Easily"),
                        createVNode("h6", { class: "text-subtitle-1 text-13 py-4 text-grey100" }, " Track and record your every income and expence easily to control your balance "),
                        createVNode(_component_v_btn, {
                          size: "large",
                          color: "secondary",
                          rounded: "pill"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Download")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "5"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "px-11 pt-5 pb-7" }, [
                          createVNode("img", {
                            src: _imports_0$2,
                            height: "215",
                            class: "mb-n12 ml-sm-5",
                            alt: "image"
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
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card_item, { class: "py-0" }, {
            default: withCtx(() => [
              createVNode(_component_v_row, { class: "d-flex align-center" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "7",
                    class: "pa-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("h5", { class: "text-h5 font-weight-semibold pt-3" }, "Track your every Transaction Easily"),
                      createVNode("h6", { class: "text-subtitle-1 text-13 py-4 text-grey100" }, " Track and record your every income and expence easily to control your balance "),
                      createVNode(_component_v_btn, {
                        size: "large",
                        color: "secondary",
                        rounded: "pill"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Download")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "5"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "px-11 pt-5 pb-7" }, [
                        createVNode("img", {
                          src: _imports_0$2,
                          height: "215",
                          class: "mb-n12 ml-sm-5",
                          alt: "image"
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
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/banners/Banner2.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Banner2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_item = resolveComponent("v-card-item");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_card, mergeProps({
    elevation: "10",
    class: "mt-6"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_item, { class: "text-center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_0$3)} width="200" alt="image"${_scopeId2}><h5 class="text-h5 pt-3 font-weight-semibold"${_scopeId2}>Oops something went wrong!</h5><h6 class="text-subtitle-1 text-13 mt-2 mb-4 text-grey100"${_scopeId2}> Trying again to bypasses these<br${_scopeId2}> temporary error. </h6>`);
              _push3(ssrRenderComponent(_component_v_btn, {
                size: "large",
                color: "error",
                class: "mb-2",
                rounded: "pill"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Retry`);
                  } else {
                    return [
                      createTextVNode("Retry")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode("img", {
                  src: _imports_0$3,
                  width: "200",
                  alt: "image"
                }),
                createVNode("h5", { class: "text-h5 pt-3 font-weight-semibold" }, "Oops something went wrong!"),
                createVNode("h6", { class: "text-subtitle-1 text-13 mt-2 mb-4 text-grey100" }, [
                  createTextVNode(" Trying again to bypasses these"),
                  createVNode("br"),
                  createTextVNode(" temporary error. ")
                ]),
                createVNode(_component_v_btn, {
                  size: "large",
                  color: "error",
                  class: "mb-2",
                  rounded: "pill"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Retry")
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
          createVNode(_component_v_card_item, { class: "text-center" }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_0$3,
                width: "200",
                alt: "image"
              }),
              createVNode("h5", { class: "text-h5 pt-3 font-weight-semibold" }, "Oops something went wrong!"),
              createVNode("h6", { class: "text-subtitle-1 text-13 mt-2 mb-4 text-grey100" }, [
                createTextVNode(" Trying again to bypasses these"),
                createVNode("br"),
                createTextVNode(" temporary error. ")
              ]),
              createVNode(_component_v_btn, {
                size: "large",
                color: "error",
                class: "mb-2",
                rounded: "pill"
              }, {
                default: withCtx(() => [
                  createTextVNode("Retry")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/banners/Banner3.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Banner3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_item = resolveComponent("v-card-item");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_card, mergeProps({
    elevation: "10",
    class: "mt-6"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_item, { class: "text-center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_0$4)} alt="image" width="200"${_scopeId2}><h5 class="text-h5 pt-3 font-weight-semibold"${_scopeId2}>Oop, Your cart is empty!</h5><h6 class="text-subtitle-1 text-13 mt-2 mb-4 text-grey100"${_scopeId2}> Get back to shopping and get <br${_scopeId2}> rewards from it. </h6>`);
              _push3(ssrRenderComponent(_component_v_btn, {
                size: "large",
                color: "primary",
                class: "mb-2",
                rounded: "pill"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Go for shopping`);
                  } else {
                    return [
                      createTextVNode("Go for shopping")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode("img", {
                  src: _imports_0$4,
                  alt: "image",
                  width: "200"
                }),
                createVNode("h5", { class: "text-h5 pt-3 font-weight-semibold" }, "Oop, Your cart is empty!"),
                createVNode("h6", { class: "text-subtitle-1 text-13 mt-2 mb-4 text-grey100" }, [
                  createTextVNode(" Get back to shopping and get "),
                  createVNode("br"),
                  createTextVNode(" rewards from it. ")
                ]),
                createVNode(_component_v_btn, {
                  size: "large",
                  color: "primary",
                  class: "mb-2",
                  rounded: "pill"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Go for shopping")
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
          createVNode(_component_v_card_item, { class: "text-center" }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_0$4,
                alt: "image",
                width: "200"
              }),
              createVNode("h5", { class: "text-h5 pt-3 font-weight-semibold" }, "Oop, Your cart is empty!"),
              createVNode("h6", { class: "text-subtitle-1 text-13 mt-2 mb-4 text-grey100" }, [
                createTextVNode(" Get back to shopping and get "),
                createVNode("br"),
                createTextVNode(" rewards from it. ")
              ]),
              createVNode(_component_v_btn, {
                size: "large",
                color: "primary",
                class: "mb-2",
                rounded: "pill"
              }, {
                default: withCtx(() => [
                  createTextVNode("Go for shopping")
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/banners/Banner4.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Banner4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = publicAssetsURL("/images/backgrounds/gold.png");
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_item = resolveComponent("v-card-item");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_card, mergeProps({
    elevation: "10",
    class: "mt-sm-0 mt-6"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_item, { class: "text-center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h6 class="text-subtitle-1 mb-4"${_scopeId2}>LEVEL UP</h6><img${ssrRenderAttr("src", _imports_0)} alt="image" width="150"${_scopeId2}><h5 class="text-h5 pt-3 font-weight-semibold"${_scopeId2}>You reach all Notifications</h5><h6 class="text-subtitle-1 text-13 mt-2 mb-4 text-grey100"${_scopeId2}> Congratulations, Tap to continue<br${_scopeId2}> next task. </h6>`);
              _push3(ssrRenderComponent(_component_v_btn, {
                size: "large",
                color: "primary",
                class: "mb-2",
                rounded: "pill"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Yes, Got it!`);
                  } else {
                    return [
                      createTextVNode("Yes, Got it!")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode("h6", { class: "text-subtitle-1 mb-4" }, "LEVEL UP"),
                createVNode("img", {
                  src: _imports_0,
                  alt: "image",
                  width: "150"
                }),
                createVNode("h5", { class: "text-h5 pt-3 font-weight-semibold" }, "You reach all Notifications"),
                createVNode("h6", { class: "text-subtitle-1 text-13 mt-2 mb-4 text-grey100" }, [
                  createTextVNode(" Congratulations, Tap to continue"),
                  createVNode("br"),
                  createTextVNode(" next task. ")
                ]),
                createVNode(_component_v_btn, {
                  size: "large",
                  color: "primary",
                  class: "mb-2",
                  rounded: "pill"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Yes, Got it!")
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
          createVNode(_component_v_card_item, { class: "text-center" }, {
            default: withCtx(() => [
              createVNode("h6", { class: "text-subtitle-1 mb-4" }, "LEVEL UP"),
              createVNode("img", {
                src: _imports_0,
                alt: "image",
                width: "150"
              }),
              createVNode("h5", { class: "text-h5 pt-3 font-weight-semibold" }, "You reach all Notifications"),
              createVNode("h6", { class: "text-subtitle-1 text-13 mt-2 mb-4 text-grey100" }, [
                createTextVNode(" Congratulations, Tap to continue"),
                createVNode("br"),
                createTextVNode(" next task. ")
              ]),
              createVNode(_component_v_btn, {
                size: "large",
                color: "primary",
                class: "mb-2",
                rounded: "pill"
              }, {
                default: withCtx(() => [
                  createTextVNode("Yes, Got it!")
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/banners/Banner5.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Banner5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_item = resolveComponent("v-card-item");
  const _component_v_badge = resolveComponent("v-badge");
  const _component_v_avatar = resolveComponent("v-avatar");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_card, mergeProps({
    elevation: "10",
    class: "mt-6"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_item, { class: "text-center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h5 class="text-h5 mb-6 font-weight-semibold"${_scopeId2}>Mutual Friend Revealed</h5>`);
              _push3(ssrRenderComponent(_component_v_badge, {
                content: "1",
                color: "error",
                "offset-x": "18",
                "offset-y": "18"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_avatar, { size: "140" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<img${ssrRenderAttr("src", _imports_2)} height="140" alt="image"${_scopeId4}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: _imports_2,
                              height: "140",
                              alt: "image"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_avatar, { size: "140" }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_2,
                            height: "140",
                            alt: "image"
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<h5 class="text-h5 pt-3 mt-3 font-weight-semibold"${_scopeId2}>Tommoie Henderson</h5><h6 class="text-subtitle-1 text-13 mt-2 mb-4 text-grey100"${_scopeId2}> Accept the request and<br${_scopeId2}> type a message </h6><div class="mb-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_btn, {
                size: "large",
                color: "primary",
                rounded: "pill"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`accept`);
                  } else {
                    return [
                      createTextVNode("accept")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_btn, {
                size: "large",
                variant: "outlined",
                class: "ml-4",
                color: "error",
                rounded: "pill"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`remove`);
                  } else {
                    return [
                      createTextVNode("remove")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("h5", { class: "text-h5 mb-6 font-weight-semibold" }, "Mutual Friend Revealed"),
                createVNode(_component_v_badge, {
                  content: "1",
                  color: "error",
                  "offset-x": "18",
                  "offset-y": "18"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_avatar, { size: "140" }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_2,
                          height: "140",
                          alt: "image"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode("h5", { class: "text-h5 pt-3 mt-3 font-weight-semibold" }, "Tommoie Henderson"),
                createVNode("h6", { class: "text-subtitle-1 text-13 mt-2 mb-4 text-grey100" }, [
                  createTextVNode(" Accept the request and"),
                  createVNode("br"),
                  createTextVNode(" type a message ")
                ]),
                createVNode("div", { class: "mb-2" }, [
                  createVNode(_component_v_btn, {
                    size: "large",
                    color: "primary",
                    rounded: "pill"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("accept")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_btn, {
                    size: "large",
                    variant: "outlined",
                    class: "ml-4",
                    color: "error",
                    rounded: "pill"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("remove")
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
          createVNode(_component_v_card_item, { class: "text-center" }, {
            default: withCtx(() => [
              createVNode("h5", { class: "text-h5 mb-6 font-weight-semibold" }, "Mutual Friend Revealed"),
              createVNode(_component_v_badge, {
                content: "1",
                color: "error",
                "offset-x": "18",
                "offset-y": "18"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_avatar, { size: "140" }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_2,
                        height: "140",
                        alt: "image"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("h5", { class: "text-h5 pt-3 mt-3 font-weight-semibold" }, "Tommoie Henderson"),
              createVNode("h6", { class: "text-subtitle-1 text-13 mt-2 mb-4 text-grey100" }, [
                createTextVNode(" Accept the request and"),
                createVNode("br"),
                createTextVNode(" type a message ")
              ]),
              createVNode("div", { class: "mb-2" }, [
                createVNode(_component_v_btn, {
                  size: "large",
                  color: "primary",
                  rounded: "pill"
                }, {
                  default: withCtx(() => [
                    createTextVNode("accept")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_btn, {
                  size: "large",
                  variant: "outlined",
                  class: "ml-4",
                  color: "error",
                  rounded: "pill"
                }, {
                  default: withCtx(() => [
                    createTextVNode("remove")
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
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/banners/Banner6.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Banner6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Banner" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Banner",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$7, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              lg: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(Banner1, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Banner2, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(Banner3, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(Banner3)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(Banner4, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(Banner4)
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
                              createVNode(Banner3)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(Banner4)
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
                    createVNode(Banner1),
                    createVNode(Banner2),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(Banner3)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(Banner4)
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
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(Banner5, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Banner6, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(Banner5),
                    createVNode(Banner6)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, {
                cols: "12",
                lg: "8"
              }, {
                default: withCtx(() => [
                  createVNode(Banner1),
                  createVNode(Banner2),
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(Banner3)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(Banner4)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(Banner5),
                  createVNode(Banner6)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/widgets/banners/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-QsyrXH5J.js.map
