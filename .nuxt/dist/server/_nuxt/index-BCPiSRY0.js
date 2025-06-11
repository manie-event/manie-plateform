import { defineComponent, resolveComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext, createCommentVNode, ref } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { t as textCardsData, _ as _imports_0$1, a as _imports_1$1, b as _sfc_main$7, c as _sfc_main$8 } from "./UpcommingSchedule-DNrt39r_.js";
import { Icon } from "@iconify/vue";
import { _ as _export_sfc } from "../server.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _imports_3 } from "./virtual_public-YD_fu6S0.js";
import { _ as _imports_2$1 } from "./virtual_public-QBV-rUkt.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-DZ3wFR7I.js";
import { CircleIcon } from "vue-tabler-icons";
import { _ as _sfc_main$6 } from "./BaseBreadcrumb-DAIjkUfv.js";
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
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TopCards",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      _push(ssrRenderComponent(_component_v_row, mergeProps({ class: "d-flex" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(textCardsData), (item) => {
              _push2(ssrRenderComponent(_component_v_col, {
                key: item.title,
                cols: "12",
                sm: "3",
                class: "d-flex"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_card, {
                      elevation: "10",
                      color: "primary"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_card_text, { class: "pl-5 pr-7" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img${ssrRenderAttr("src", item.shape)} alt="shape" class="shape" data-v-011185d3${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(Icon), {
                                  icon: "solar:" + item.icon,
                                  width: "30",
                                  height: "30",
                                  class: "mb-6"
                                }, null, _parent5, _scopeId4));
                                _push5(`<h5 class="text-h4 font-weight-semibold mb-2 text-white" data-v-011185d3${_scopeId4}>${ssrInterpolate(item.num)}<span class="text-subtitle-2 pl-1" data-v-011185d3${_scopeId4}>${ssrInterpolate(item.percent)}</span></h5><p class="text-subtitle-1 opacity-50 font-weight-medium" data-v-011185d3${_scopeId4}>${ssrInterpolate(item.title)}</p>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: item.shape,
                                    alt: "shape",
                                    class: "shape"
                                  }, null, 8, ["src"]),
                                  createVNode(unref(Icon), {
                                    icon: "solar:" + item.icon,
                                    width: "30",
                                    height: "30",
                                    class: "mb-6"
                                  }, null, 8, ["icon"]),
                                  createVNode("h5", { class: "text-h4 font-weight-semibold mb-2 text-white" }, [
                                    createTextVNode(toDisplayString(item.num), 1),
                                    createVNode("span", { class: "text-subtitle-2 pl-1" }, toDisplayString(item.percent), 1)
                                  ]),
                                  createVNode("p", { class: "text-subtitle-1 opacity-50 font-weight-medium" }, toDisplayString(item.title), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_card_text, { class: "pl-5 pr-7" }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: item.shape,
                                  alt: "shape",
                                  class: "shape"
                                }, null, 8, ["src"]),
                                createVNode(unref(Icon), {
                                  icon: "solar:" + item.icon,
                                  width: "30",
                                  height: "30",
                                  class: "mb-6"
                                }, null, 8, ["icon"]),
                                createVNode("h5", { class: "text-h4 font-weight-semibold mb-2 text-white" }, [
                                  createTextVNode(toDisplayString(item.num), 1),
                                  createVNode("span", { class: "text-subtitle-2 pl-1" }, toDisplayString(item.percent), 1)
                                ]),
                                createVNode("p", { class: "text-subtitle-1 opacity-50 font-weight-medium" }, toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_card, {
                        elevation: "10",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_text, { class: "pl-5 pr-7" }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: item.shape,
                                alt: "shape",
                                class: "shape"
                              }, null, 8, ["src"]),
                              createVNode(unref(Icon), {
                                icon: "solar:" + item.icon,
                                width: "30",
                                height: "30",
                                class: "mb-6"
                              }, null, 8, ["icon"]),
                              createVNode("h5", { class: "text-h4 font-weight-semibold mb-2 text-white" }, [
                                createTextVNode(toDisplayString(item.num), 1),
                                createVNode("span", { class: "text-subtitle-2 pl-1" }, toDisplayString(item.percent), 1)
                              ]),
                              createVNode("p", { class: "text-subtitle-1 opacity-50 font-weight-medium" }, toDisplayString(item.title), 1)
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
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(textCardsData), (item) => {
                return openBlock(), createBlock(_component_v_col, {
                  key: item.title,
                  cols: "12",
                  sm: "3",
                  class: "d-flex"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card, {
                      elevation: "10",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_text, { class: "pl-5 pr-7" }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: item.shape,
                              alt: "shape",
                              class: "shape"
                            }, null, 8, ["src"]),
                            createVNode(unref(Icon), {
                              icon: "solar:" + item.icon,
                              width: "30",
                              height: "30",
                              class: "mb-6"
                            }, null, 8, ["icon"]),
                            createVNode("h5", { class: "text-h4 font-weight-semibold mb-2 text-white" }, [
                              createTextVNode(toDisplayString(item.num), 1),
                              createVNode("span", { class: "text-subtitle-2 pl-1" }, toDisplayString(item.percent), 1)
                            ]),
                            createVNode("p", { class: "text-subtitle-1 opacity-50 font-weight-medium" }, toDisplayString(item.title), 1)
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
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/cards/TopCards.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TopCards = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-011185d3"]]);
const _imports_0 = publicAssetsURL("/images/svgs/basket.svg");
const _imports_1 = publicAssetsURL("/images/svgs/player-pause.svg");
const _imports_2 = publicAssetsURL("/images/svgs/truck.svg");
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_avatar = resolveComponent("v-avatar");
  _push(ssrRenderComponent(_component_v_card, mergeProps({
    elevation: "10",
    class: "roun-"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_text, { class: "position-relative pb-0" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h5 class="text-h4 mb-1 font-weight-semibold"${_scopeId2}>Congratulations Jonathan</h5><div class="text-subtitle-1 text-grey100 pb-1 font-weight-medium"${_scopeId2}> You have done 38% more sales </div><div class="mt-6 d-sm-flex d-block"${_scopeId2}><ul class="list-unstyled mb-0"${_scopeId2}><li class="d-flex align-center mb-5"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_avatar, {
                class: "bg-lightsuccess p-7 me-4 rounded-circle d-flex align-items-center justify-content-center",
                size: "48"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_0,
                        alt: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div${_scopeId2}><h6 class="mb-1 text-h6 font-weight-semibold"${_scopeId2}>64 new orders</h6><p class="text-subtitle-1 text-grey100 font-weight-medium"${_scopeId2}>Processing</p></div></li><li class="d-flex align-center mb-5"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_avatar, {
                class: "bg-lightwarning p-7 me-4 rounded-circle d-flex align-items-center justify-content-center",
                size: "48"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_1,
                        alt: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div${_scopeId2}><h6 class="mb-1 text-h6 font-weight-semibold"${_scopeId2}>4 orders</h6><p class="text-subtitle-1 text-grey100 font-weight-medium"${_scopeId2}>On hold</p></div></li><li class="d-flex align-center mb-5"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_avatar, {
                class: "bg-lightindigo p-7 me-4 rounded-circle d-flex align-items-center justify-content-center",
                size: "48"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_2,
                        alt: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div${_scopeId2}><h6 class="mb-1 text-h6 font-weight-semibold"${_scopeId2}>12 orders</h6><p class="text-subtitle-1 text-grey100 font-weight-medium"${_scopeId2}>Delivered</p></div></li><li class="d-flex align-center mb-5"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_avatar, {
                class: "bg-lightwarning p-7 me-4 rounded-circle d-flex align-items-center justify-content-center",
                size: "48"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_1,
                        alt: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div${_scopeId2}><h6 class="mb-1 text-h6 font-weight-semibold"${_scopeId2}>8 orders</h6><p class="text-subtitle-1 text-grey100 font-weight-medium"${_scopeId2}>On hold</p></div></li></ul><div class="man-working-on-laptop ml-auto mt-16 mb-n3"${_scopeId2}><img${ssrRenderAttr("src", _imports_3)} class="w-100" alt=""${_scopeId2}></div></div>`);
            } else {
              return [
                createVNode("h5", { class: "text-h4 mb-1 font-weight-semibold" }, "Congratulations Jonathan"),
                createVNode("div", { class: "text-subtitle-1 text-grey100 pb-1 font-weight-medium" }, " You have done 38% more sales "),
                createVNode("div", { class: "mt-6 d-sm-flex d-block" }, [
                  createVNode("ul", { class: "list-unstyled mb-0" }, [
                    createVNode("li", { class: "d-flex align-center mb-5" }, [
                      createVNode(_component_v_avatar, {
                        class: "bg-lightsuccess p-7 me-4 rounded-circle d-flex align-items-center justify-content-center",
                        size: "48"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_0,
                            alt: ""
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", null, [
                        createVNode("h6", { class: "mb-1 text-h6 font-weight-semibold" }, "64 new orders"),
                        createVNode("p", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "Processing")
                      ])
                    ]),
                    createVNode("li", { class: "d-flex align-center mb-5" }, [
                      createVNode(_component_v_avatar, {
                        class: "bg-lightwarning p-7 me-4 rounded-circle d-flex align-items-center justify-content-center",
                        size: "48"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_1,
                            alt: ""
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", null, [
                        createVNode("h6", { class: "mb-1 text-h6 font-weight-semibold" }, "4 orders"),
                        createVNode("p", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "On hold")
                      ])
                    ]),
                    createVNode("li", { class: "d-flex align-center mb-5" }, [
                      createVNode(_component_v_avatar, {
                        class: "bg-lightindigo p-7 me-4 rounded-circle d-flex align-items-center justify-content-center",
                        size: "48"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_2,
                            alt: ""
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", null, [
                        createVNode("h6", { class: "mb-1 text-h6 font-weight-semibold" }, "12 orders"),
                        createVNode("p", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "Delivered")
                      ])
                    ]),
                    createVNode("li", { class: "d-flex align-center mb-5" }, [
                      createVNode(_component_v_avatar, {
                        class: "bg-lightwarning p-7 me-4 rounded-circle d-flex align-items-center justify-content-center",
                        size: "48"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_1,
                            alt: ""
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", null, [
                        createVNode("h6", { class: "mb-1 text-h6 font-weight-semibold" }, "8 orders"),
                        createVNode("p", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "On hold")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "man-working-on-laptop ml-auto mt-16 mb-n3" }, [
                    createVNode("img", {
                      src: _imports_3,
                      class: "w-100",
                      alt: ""
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card_text, { class: "position-relative pb-0" }, {
            default: withCtx(() => [
              createVNode("h5", { class: "text-h4 mb-1 font-weight-semibold" }, "Congratulations Jonathan"),
              createVNode("div", { class: "text-subtitle-1 text-grey100 pb-1 font-weight-medium" }, " You have done 38% more sales "),
              createVNode("div", { class: "mt-6 d-sm-flex d-block" }, [
                createVNode("ul", { class: "list-unstyled mb-0" }, [
                  createVNode("li", { class: "d-flex align-center mb-5" }, [
                    createVNode(_component_v_avatar, {
                      class: "bg-lightsuccess p-7 me-4 rounded-circle d-flex align-items-center justify-content-center",
                      size: "48"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_0,
                          alt: ""
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", null, [
                      createVNode("h6", { class: "mb-1 text-h6 font-weight-semibold" }, "64 new orders"),
                      createVNode("p", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "Processing")
                    ])
                  ]),
                  createVNode("li", { class: "d-flex align-center mb-5" }, [
                    createVNode(_component_v_avatar, {
                      class: "bg-lightwarning p-7 me-4 rounded-circle d-flex align-items-center justify-content-center",
                      size: "48"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_1,
                          alt: ""
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", null, [
                      createVNode("h6", { class: "mb-1 text-h6 font-weight-semibold" }, "4 orders"),
                      createVNode("p", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "On hold")
                    ])
                  ]),
                  createVNode("li", { class: "d-flex align-center mb-5" }, [
                    createVNode(_component_v_avatar, {
                      class: "bg-lightindigo p-7 me-4 rounded-circle d-flex align-items-center justify-content-center",
                      size: "48"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_2,
                          alt: ""
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", null, [
                      createVNode("h6", { class: "mb-1 text-h6 font-weight-semibold" }, "12 orders"),
                      createVNode("p", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "Delivered")
                    ])
                  ]),
                  createVNode("li", { class: "d-flex align-center mb-5" }, [
                    createVNode(_component_v_avatar, {
                      class: "bg-lightwarning p-7 me-4 rounded-circle d-flex align-items-center justify-content-center",
                      size: "48"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_1,
                          alt: ""
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", null, [
                      createVNode("h6", { class: "mb-1 text-h6 font-weight-semibold" }, "8 orders"),
                      createVNode("p", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "On hold")
                    ])
                  ])
                ]),
                createVNode("div", { class: "man-working-on-laptop ml-auto mt-16 mb-n3" }, [
                  createVNode("img", {
                    src: _imports_3,
                    class: "w-100",
                    alt: ""
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
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/cards/CongtsCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const CongratsCard = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_item = resolveComponent("v-card-item");
  const _component_v_avatar = resolveComponent("v-avatar");
  const _component_v_progress_linear = resolveComponent("v-progress-linear");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_v_card, {
    elevation: "10",
    class: "bg-lightprimary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_item, { class: "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_0$1)} alt="shape" class="shape" data-v-3321a014${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_avatar, {
                class: "bg-info mb-8",
                size: "48"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_1$1)} height="24" width="24" data-v-3321a014${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_1$1,
                        height: "24",
                        width: "24"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="d-flex align-center justify-space-between mb-4" data-v-3321a014${_scopeId2}><h5 class="text-h6 font-weight-semibold" data-v-3321a014${_scopeId2}>New Goals</h5><div class="text-subtitle-1 text-primary font-weight-medium" data-v-3321a014${_scopeId2}>83%</div></div>`);
              _push3(ssrRenderComponent(_component_v_progress_linear, {
                "model-value": "70",
                height: "7",
                color: "primary",
                "bg-color": "lightprimary",
                rounded: ""
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode("img", {
                  src: _imports_0$1,
                  alt: "shape",
                  class: "shape"
                }),
                createVNode(_component_v_avatar, {
                  class: "bg-info mb-8",
                  size: "48"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_1$1,
                      height: "24",
                      width: "24"
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "d-flex align-center justify-space-between mb-4" }, [
                  createVNode("h5", { class: "text-h6 font-weight-semibold" }, "New Goals"),
                  createVNode("div", { class: "text-subtitle-1 text-primary font-weight-medium" }, "83%")
                ]),
                createVNode(_component_v_progress_linear, {
                  "model-value": "70",
                  height: "7",
                  color: "primary",
                  "bg-color": "lightprimary",
                  rounded: ""
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card_item, { class: "" }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_0$1,
                alt: "shape",
                class: "shape"
              }),
              createVNode(_component_v_avatar, {
                class: "bg-info mb-8",
                size: "48"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_1$1,
                    height: "24",
                    width: "24"
                  })
                ]),
                _: 1
              }),
              createVNode("div", { class: "d-flex align-center justify-space-between mb-4" }, [
                createVNode("h5", { class: "text-h6 font-weight-semibold" }, "New Goals"),
                createVNode("div", { class: "text-subtitle-1 text-primary font-weight-medium" }, "83%")
              ]),
              createVNode(_component_v_progress_linear, {
                "model-value": "70",
                height: "7",
                color: "primary",
                "bg-color": "lightprimary",
                rounded: ""
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_card, {
    elevation: "10",
    class: "mt-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_item, { class: "bg-lightwarning" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="d-flex justify-space-between" data-v-3321a014${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_avatar, {
                class: "mb-8 bg-warning",
                size: "68",
                rounded: "xl"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_2$1)} height="68" width="68" data-v-3321a014${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_2$1,
                        height: "68",
                        width: "68"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<p class="text-subtitle-1 font-weight-semibold text-warning" data-v-3321a014${_scopeId2}>#1 in DevOps</p></div><div class="" data-v-3321a014${_scopeId2}><h5 class="text-h6 font-weight-semibold" data-v-3321a014${_scopeId2}>Adam Johnson</h5><div class="text-subtitle-1 text-grey100 mt-1" data-v-3321a014${_scopeId2}>Top Developer</div></div>`);
            } else {
              return [
                createVNode("div", { class: "d-flex justify-space-between" }, [
                  createVNode(_component_v_avatar, {
                    class: "mb-8 bg-warning",
                    size: "68",
                    rounded: "xl"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_2$1,
                        height: "68",
                        width: "68"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("p", { class: "text-subtitle-1 font-weight-semibold text-warning" }, "#1 in DevOps")
                ]),
                createVNode("div", { class: "" }, [
                  createVNode("h5", { class: "text-h6 font-weight-semibold" }, "Adam Johnson"),
                  createVNode("div", { class: "text-subtitle-1 text-grey100 mt-1" }, "Top Developer")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card_item, { class: "bg-lightwarning" }, {
            default: withCtx(() => [
              createVNode("div", { class: "d-flex justify-space-between" }, [
                createVNode(_component_v_avatar, {
                  class: "mb-8 bg-warning",
                  size: "68",
                  rounded: "xl"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_2$1,
                      height: "68",
                      width: "68"
                    })
                  ]),
                  _: 1
                }),
                createVNode("p", { class: "text-subtitle-1 font-weight-semibold text-warning" }, "#1 in DevOps")
              ]),
              createVNode("div", { class: "" }, [
                createVNode("h5", { class: "text-h6 font-weight-semibold" }, "Adam Johnson"),
                createVNode("div", { class: "text-subtitle-1 text-grey100 mt-1" }, "Top Developer")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/cards/ProfileBoxCards.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProfileBoxCards = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3321a014"]]);
const icon4 = publicAssetsURL("/images/svgs/bank-transfer.svg");
const icon3 = publicAssetsURL("/images/svgs/credit-card.svg");
const icon1 = publicAssetsURL("/images/svgs/paypal2.svg");
const icon5 = publicAssetsURL("/images/svgs/refund.svg");
const icon2 = publicAssetsURL("/images/svgs/wallet.svg");
publicAssetsURL("/images/svgs/icon-briefcase.svg");
publicAssetsURL("/images/svgs/icon-connect.svg");
publicAssetsURL("/images/svgs/icon-favorites.svg");
publicAssetsURL("/images/svgs/icon-mailbox.svg");
publicAssetsURL("/images/svgs/icon-speech-bubble.svg");
publicAssetsURL("/images/svgs/icon-user-male.svg");
const paymentGateways = [
  {
    img: icon1,
    title: "Paypal",
    subtitle: "Big Brands",
    rank: "+$6,235",
    disable: "",
    bgcolor: "primary"
  },
  {
    img: icon2,
    title: "Wallet",
    subtitle: "Bill payment",
    rank: "+$345",
    disable: "",
    bgcolor: "error"
  },
  {
    img: icon3,
    title: "Credit Card",
    subtitle: "Money reversed",
    rank: "+$2,235",
    disable: "",
    bgcolor: "indigo"
  },
  {
    img: icon4,
    title: "Bank Transfer",
    subtitle: "Money added",
    rank: "-$320",
    disable: "",
    bgcolor: "success"
  },
  {
    img: icon5,
    title: "Refund",
    subtitle: "Bill Payment",
    rank: "-$32",
    disable: "",
    bgcolor: "warning"
  }
];
const recentTransaction = [
  {
    title: "09:30",
    subtitle: "Payment received from John Doe of $385.90",
    textcolor: "primary",
    boldtext: false,
    line: true,
    link: "",
    url: ""
  },
  {
    title: "10:00 am",
    subtitle: "New sale recorded",
    textcolor: "info",
    boldtext: true,
    line: true,
    link: "#ML-3467",
    url: ""
  },
  {
    title: "12:00 am",
    subtitle: "Payment was made of $64.95 to Michael",
    textcolor: "success",
    boldtext: false,
    line: true,
    link: "",
    url: ""
  },
  {
    title: "09:30 am",
    subtitle: "New sale recorded",
    textcolor: "warning",
    boldtext: true,
    line: true,
    link: "#ML-3467",
    url: ""
  },
  {
    title: "09:30 am",
    subtitle: "New arrival recorded",
    textcolor: "error",
    boldtext: true,
    line: true,
    link: "#ML-3467",
    url: ""
  },
  {
    title: "12:00 am",
    subtitle: "Payment Done",
    textcolor: "success",
    boldtext: false,
    line: false,
    link: "",
    url: ""
  }
];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RecentTransactions",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, { class: "text-h5 font-weight-semibold" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Recent Transactions`);
                      } else {
                        return [
                          createTextVNode("Recent Transactions")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="recent-transaction mt-16 px-3"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(recentTransaction), (list) => {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_row, { class: "d-flex mb-4" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_col, {
                            cols: "3",
                            sm: "3",
                            class: "px-0 pt-0 pb-1 text-right"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<h6 class="text-subtitle-1 text-grey200 text-no-wrap font-weight-medium pr-2"${_scopeId4}>${ssrInterpolate(list.title)}</h6>`);
                              } else {
                                return [
                                  createVNode("h6", { class: "text-subtitle-1 text-grey200 text-no-wrap font-weight-medium pr-2" }, toDisplayString(list.title), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_col, {
                            cols: "1",
                            sm: "1",
                            class: "px-0 text-center pt-0 pb-1 mt-n1"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(CircleIcon), {
                                  size: "13",
                                  "stroke-width": "2",
                                  class: "text-" + list.textcolor
                                }, null, _parent5, _scopeId4));
                                if (list.line) {
                                  _push5(`<div class="line mx-auto bg-borderColor"${_scopeId4}></div>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  createVNode(unref(CircleIcon), {
                                    size: "13",
                                    "stroke-width": "2",
                                    class: "text-" + list.textcolor
                                  }, null, 8, ["class"]),
                                  list.line ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "line mx-auto bg-borderColor"
                                  })) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_col, {
                            cols: "7",
                            sm: "8",
                            class: "pt-0 pb-1"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (list.boldtext) {
                                  _push5(`<h6 class="text-subtitle-1 text-grey200 font-weight-bold"${_scopeId4}>${ssrInterpolate(list.subtitle)}</h6>`);
                                } else {
                                  _push5(`<h6 class="text-subtitle-1 text-grey200 font-weight-medium"${_scopeId4}>${ssrInterpolate(list.subtitle)}</h6>`);
                                }
                                _push5(`<div class="mt-n1"${_scopeId4}>`);
                                if (list.link) {
                                  _push5(ssrRenderComponent(_component_NuxtLink, {
                                    to: list.url,
                                    class: "text-body-1 text-primary text-decoration-none"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(list.link)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(list.link), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</div>`);
                              } else {
                                return [
                                  list.boldtext ? (openBlock(), createBlock("h6", {
                                    key: 0,
                                    class: "text-subtitle-1 text-grey200 font-weight-bold"
                                  }, toDisplayString(list.subtitle), 1)) : (openBlock(), createBlock("h6", {
                                    key: 1,
                                    class: "text-subtitle-1 text-grey200 font-weight-medium"
                                  }, toDisplayString(list.subtitle), 1)),
                                  createVNode("div", { class: "mt-n1" }, [
                                    list.link ? (openBlock(), createBlock(_component_NuxtLink, {
                                      key: 0,
                                      to: list.url,
                                      class: "text-body-1 text-primary text-decoration-none"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(list.link), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])) : createCommentVNode("", true)
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_col, {
                              cols: "3",
                              sm: "3",
                              class: "px-0 pt-0 pb-1 text-right"
                            }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-subtitle-1 text-grey200 text-no-wrap font-weight-medium pr-2" }, toDisplayString(list.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_col, {
                              cols: "1",
                              sm: "1",
                              class: "px-0 text-center pt-0 pb-1 mt-n1"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(CircleIcon), {
                                  size: "13",
                                  "stroke-width": "2",
                                  class: "text-" + list.textcolor
                                }, null, 8, ["class"]),
                                list.line ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "line mx-auto bg-borderColor"
                                })) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_col, {
                              cols: "7",
                              sm: "8",
                              class: "pt-0 pb-1"
                            }, {
                              default: withCtx(() => [
                                list.boldtext ? (openBlock(), createBlock("h6", {
                                  key: 0,
                                  class: "text-subtitle-1 text-grey200 font-weight-bold"
                                }, toDisplayString(list.subtitle), 1)) : (openBlock(), createBlock("h6", {
                                  key: 1,
                                  class: "text-subtitle-1 text-grey200 font-weight-medium"
                                }, toDisplayString(list.subtitle), 1)),
                                createVNode("div", { class: "mt-n1" }, [
                                  list.link ? (openBlock(), createBlock(_component_NuxtLink, {
                                    key: 0,
                                    to: list.url,
                                    class: "text-body-1 text-primary text-decoration-none"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(list.link), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode(_component_v_card_title, { class: "text-h5 font-weight-semibold" }, {
                      default: withCtx(() => [
                        createTextVNode("Recent Transactions")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "recent-transaction mt-16 px-3" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(recentTransaction), (list) => {
                        return openBlock(), createBlock("div", {
                          key: list.title
                        }, [
                          createVNode(_component_v_row, { class: "d-flex mb-4" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "3",
                                sm: "3",
                                class: "px-0 pt-0 pb-1 text-right"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h6", { class: "text-subtitle-1 text-grey200 text-no-wrap font-weight-medium pr-2" }, toDisplayString(list.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_col, {
                                cols: "1",
                                sm: "1",
                                class: "px-0 text-center pt-0 pb-1 mt-n1"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(CircleIcon), {
                                    size: "13",
                                    "stroke-width": "2",
                                    class: "text-" + list.textcolor
                                  }, null, 8, ["class"]),
                                  list.line ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "line mx-auto bg-borderColor"
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_col, {
                                cols: "7",
                                sm: "8",
                                class: "pt-0 pb-1"
                              }, {
                                default: withCtx(() => [
                                  list.boldtext ? (openBlock(), createBlock("h6", {
                                    key: 0,
                                    class: "text-subtitle-1 text-grey200 font-weight-bold"
                                  }, toDisplayString(list.subtitle), 1)) : (openBlock(), createBlock("h6", {
                                    key: 1,
                                    class: "text-subtitle-1 text-grey200 font-weight-medium"
                                  }, toDisplayString(list.subtitle), 1)),
                                  createVNode("div", { class: "mt-n1" }, [
                                    list.link ? (openBlock(), createBlock(_component_NuxtLink, {
                                      key: 0,
                                      to: list.url,
                                      class: "text-body-1 text-primary text-decoration-none"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(list.link), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]);
                      }), 128))
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
                  createVNode(_component_v_card_title, { class: "text-h5 font-weight-semibold" }, {
                    default: withCtx(() => [
                      createTextVNode("Recent Transactions")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "recent-transaction mt-16 px-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(recentTransaction), (list) => {
                      return openBlock(), createBlock("div", {
                        key: list.title
                      }, [
                        createVNode(_component_v_row, { class: "d-flex mb-4" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "3",
                              sm: "3",
                              class: "px-0 pt-0 pb-1 text-right"
                            }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-subtitle-1 text-grey200 text-no-wrap font-weight-medium pr-2" }, toDisplayString(list.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_col, {
                              cols: "1",
                              sm: "1",
                              class: "px-0 text-center pt-0 pb-1 mt-n1"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(CircleIcon), {
                                  size: "13",
                                  "stroke-width": "2",
                                  class: "text-" + list.textcolor
                                }, null, 8, ["class"]),
                                list.line ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "line mx-auto bg-borderColor"
                                })) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_col, {
                              cols: "7",
                              sm: "8",
                              class: "pt-0 pb-1"
                            }, {
                              default: withCtx(() => [
                                list.boldtext ? (openBlock(), createBlock("h6", {
                                  key: 0,
                                  class: "text-subtitle-1 text-grey200 font-weight-bold"
                                }, toDisplayString(list.subtitle), 1)) : (openBlock(), createBlock("h6", {
                                  key: 1,
                                  class: "text-subtitle-1 text-grey200 font-weight-medium"
                                }, toDisplayString(list.subtitle), 1)),
                                createVNode("div", { class: "mt-n1" }, [
                                  list.link ? (openBlock(), createBlock(_component_NuxtLink, {
                                    key: 0,
                                    to: list.url,
                                    class: "text-body-1 text-primary text-decoration-none"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(list.link), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]);
                    }), 128))
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/cards/RecentTransactions.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PaymentGateway",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, { class: "text-h5 font-weight-semibold" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Payment Gateways`);
                      } else {
                        return [
                          createTextVNode("Payment Gateways")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_subtitle, { class: "text-subtitle-1 textSecondary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Platform For Income`);
                      } else {
                        return [
                          createTextVNode("Platform For Income")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="mt-10"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(paymentGateways), (list) => {
                    _push3(`<div class="d-flex align-center mb-7"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_avatar, {
                      class: "bg-light" + list.bgcolor,
                      size: "40"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", list.img)}${ssrRenderAttr("alt", list.img)} width="25"${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: list.img,
                              alt: list.img,
                              width: "25"
                            }, null, 8, ["src", "alt"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="pl-4 mt-n1"${_scopeId2}><h5 class="text-h6 font-weight-semibold"${_scopeId2}>${ssrInterpolate(list.title)}</h5><h6 class="text-subtitle-1 text-grey100 mt-1"${_scopeId2}>${ssrInterpolate(list.subtitle)}</h6></div><div class="${ssrRenderClass(
                      "ml-auto font-weight-medium text-subtitle-1 text-grey100 text-medium-" + list.disable
                    )}"${_scopeId2}>${ssrInterpolate(list.rank)}</div></div>`);
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(_component_v_btn, {
                    class: "mt-10",
                    block: "",
                    variant: "outlined",
                    size: "large",
                    color: "primary",
                    rounded: "pill"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`View all transactions`);
                      } else {
                        return [
                          createTextVNode("View all transactions")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_v_card_title, { class: "text-h5 font-weight-semibold" }, {
                      default: withCtx(() => [
                        createTextVNode("Payment Gateways")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_subtitle, { class: "text-subtitle-1 textSecondary" }, {
                      default: withCtx(() => [
                        createTextVNode("Platform For Income")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "mt-10" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(paymentGateways), (list) => {
                        return openBlock(), createBlock("div", {
                          class: "d-flex align-center mb-7",
                          key: list.title
                        }, [
                          createVNode(_component_v_avatar, {
                            class: "bg-light" + list.bgcolor,
                            size: "40"
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: list.img,
                                alt: list.img,
                                width: "25"
                              }, null, 8, ["src", "alt"])
                            ]),
                            _: 2
                          }, 1032, ["class"]),
                          createVNode("div", { class: "pl-4 mt-n1" }, [
                            createVNode("h5", { class: "text-h6 font-weight-semibold" }, toDisplayString(list.title), 1),
                            createVNode("h6", { class: "text-subtitle-1 text-grey100 mt-1" }, toDisplayString(list.subtitle), 1)
                          ]),
                          createVNode("div", {
                            class: "ml-auto font-weight-medium text-subtitle-1 text-grey100 text-medium-" + list.disable
                          }, toDisplayString(list.rank), 3)
                        ]);
                      }), 128)),
                      createVNode(_component_v_btn, {
                        class: "mt-10",
                        block: "",
                        variant: "outlined",
                        size: "large",
                        color: "primary",
                        rounded: "pill"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("View all transactions")
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
              createVNode(_component_v_card_item, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, { class: "text-h5 font-weight-semibold" }, {
                    default: withCtx(() => [
                      createTextVNode("Payment Gateways")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_subtitle, { class: "text-subtitle-1 textSecondary" }, {
                    default: withCtx(() => [
                      createTextVNode("Platform For Income")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-10" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(paymentGateways), (list) => {
                      return openBlock(), createBlock("div", {
                        class: "d-flex align-center mb-7",
                        key: list.title
                      }, [
                        createVNode(_component_v_avatar, {
                          class: "bg-light" + list.bgcolor,
                          size: "40"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: list.img,
                              alt: list.img,
                              width: "25"
                            }, null, 8, ["src", "alt"])
                          ]),
                          _: 2
                        }, 1032, ["class"]),
                        createVNode("div", { class: "pl-4 mt-n1" }, [
                          createVNode("h5", { class: "text-h6 font-weight-semibold" }, toDisplayString(list.title), 1),
                          createVNode("h6", { class: "text-subtitle-1 text-grey100 mt-1" }, toDisplayString(list.subtitle), 1)
                        ]),
                        createVNode("div", {
                          class: "ml-auto font-weight-medium text-subtitle-1 text-grey100 text-medium-" + list.disable
                        }, toDisplayString(list.rank), 3)
                      ]);
                    }), 128)),
                    createVNode(_component_v_btn, {
                      class: "mt-10",
                      block: "",
                      variant: "outlined",
                      size: "large",
                      color: "primary",
                      rounded: "pill"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("View all transactions")
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/cards/PaymentGateway.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Cards" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Cards",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$6, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TopCards, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TopCards)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              md: "6",
              class: "d-flex"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CongratsCard, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CongratsCard)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              md: "6",
              class: "d-flex"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(ProfileBoxCards, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(ProfileBoxCards)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "6",
                          class: "d-flex"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$7, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$7)
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
                              createVNode(ProfileBoxCards)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            class: "d-flex"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$7)
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
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(ProfileBoxCards)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "6",
                          class: "d-flex"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$7)
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
              sm: "12",
              lg: "4",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$8, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$8)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              lg: "4",
              md: "6",
              class: "d-flex"
            }, {
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
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              lg: "4",
              class: "d-flex"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
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
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(TopCards)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                md: "6",
                class: "d-flex"
              }, {
                default: withCtx(() => [
                  createVNode(CongratsCard)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                md: "6",
                class: "d-flex"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(ProfileBoxCards)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "6",
                        class: "d-flex"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$7)
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
                sm: "12",
                lg: "4",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$8)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                lg: "4",
                md: "6",
                class: "d-flex"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                lg: "4",
                class: "d-flex"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/widgets/cards/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BCPiSRY0.js.map
