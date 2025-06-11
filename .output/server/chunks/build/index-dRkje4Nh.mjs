import { defineComponent, mergeProps, ref, resolveComponent, withCtx, createVNode, unref, withModifiers, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$8 } from './Logo-DggZ73XB.mjs';
import { u as useCustomizerStore } from './customizer-CM6PVnj3.mjs';
import { R as Revolution, _ as _sfc_main$1$1, a as _sfc_main$7, b as _sfc_main$3$1, F as Footer, p as productsSlider, c as FrontPageMenu, d as demosMegamenu, e as appsMegamenu } from './aos-CPm6hj59.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DZ3wFR7I.mjs';
import { a as appsLink, q as quickLink } from './headerData-B8k9Po-x.mjs';
import { Menu2Icon, ChevronDownIcon } from 'vue-tabler-icons';
import { l as user3, R as user2, h as user1 } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './client-only-Bwxzq3Sq.mjs';
import 'vue3-carousel';
import 'vue-router';
import 'vue3-perfect-scrollbar';
import 'maska';
import 'axios-mock-adapter';
import 'axios';
import 'chance';
import 'date-fns';
import 'lodash';
import 'vue-draggable-next';
import 'vue3-easy-data-table';
import 'vue-easy-lightbox';
import 'vue-scrollto';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "PageMegamenu",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_NuxtLink = __nuxt_component_0;
      const _component_v_avatar = resolveComponent("v-avatar");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(appsLink), (item, i) => {
              _push2(ssrRenderComponent(_component_v_col, {
                cols: "12",
                lg: "6",
                key: i
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: item.href,
                      class: "text-decoration-none custom-text-primary"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="d-flex align-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_avatar, {
                            size: "45",
                            color: "lightsecondary",
                            rounded: "md"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img${ssrRenderAttr("src", item.avatar)} width="24" height="24"${ssrRenderAttr("alt", item.avatar)}${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: item.avatar,
                                    width: "24",
                                    height: "24",
                                    alt: item.avatar
                                  }, null, 8, ["src", "alt"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<div class="ml-3"${_scopeId3}><h6 class="text-subtitle-1 font-weight-semibold mb-1 custom-title text-grey200"${_scopeId3}>${ssrInterpolate(item.title)}</h6><p class="text-subtitle-2 text-grey100 font-weight-medium"${_scopeId3}>${ssrInterpolate(item.subtext)}</p></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(_component_v_avatar, {
                                size: "45",
                                color: "lightsecondary",
                                rounded: "md"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: item.avatar,
                                    width: "24",
                                    height: "24",
                                    alt: item.avatar
                                  }, null, 8, ["src", "alt"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "ml-3" }, [
                                createVNode("h6", { class: "text-subtitle-1 font-weight-semibold mb-1 custom-title text-grey200" }, toDisplayString(item.title), 1),
                                createVNode("p", { class: "text-subtitle-2 text-grey100 font-weight-medium" }, toDisplayString(item.subtext), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, {
                        to: item.href,
                        class: "text-decoration-none custom-text-primary"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode(_component_v_avatar, {
                              size: "45",
                              color: "lightsecondary",
                              rounded: "md"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: item.avatar,
                                  width: "24",
                                  height: "24",
                                  alt: item.avatar
                                }, null, 8, ["src", "alt"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("div", { class: "ml-3" }, [
                              createVNode("h6", { class: "text-subtitle-1 font-weight-semibold mb-1 custom-title text-grey200" }, toDisplayString(item.title), 1),
                              createVNode("p", { class: "text-subtitle-2 text-grey100 font-weight-medium" }, toDisplayString(item.subtext), 1)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(appsLink), (item, i) => {
                return openBlock(), createBlock(_component_v_col, {
                  cols: "12",
                  lg: "6",
                  key: i
                }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      to: item.href,
                      class: "text-decoration-none custom-text-primary"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center" }, [
                          createVNode(_component_v_avatar, {
                            size: "45",
                            color: "lightsecondary",
                            rounded: "md"
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: item.avatar,
                                width: "24",
                                height: "24",
                                alt: item.avatar
                              }, null, 8, ["src", "alt"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("div", { class: "ml-3" }, [
                            createVNode("h6", { class: "text-subtitle-1 font-weight-semibold mb-1 custom-title text-grey200" }, toDisplayString(item.title), 1),
                            createVNode("p", { class: "text-subtitle-2 text-grey100 font-weight-medium" }, toDisplayString(item.subtext), 1)
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  _: 2
                }, 1024);
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landingpage/layout/PageMegamenu.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PageMenuQuicklinks",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[-->`);
      ssrRenderList(unref(quickLink), (item, i) => {
        _push(`<div class="py-2">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.href,
          class: "text-decoration-none text-hover-primary font-weight-semibold text-subtitle-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landingpage/layout/PageMenuQuicklinks.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Navigation",
  __ssrInlineRender: true,
  setup(__props) {
    const hoverStates = ref(
      demosMegamenu.reduce(
        (acc, demo) => {
          acc[demo.img] = false;
          return acc;
        },
        {}
      )
    );
    const setHoverState = (key, value) => {
      hoverStates.value[key] = value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_overlay = resolveComponent("v-overlay");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_divider = resolveComponent("v-divider");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_menu, {
        "open-on-hover": "",
        "open-delay": "1",
        "close-on-content-click": false,
        class: "lp_wrapper position-relative"
      }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, mergeProps({
              class: "hidden-sm-and-down nav-links custom-hover-primary",
              ripple: false,
              rounded: "pill",
              variant: "text"
            }, props), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Demos`);
                  _push3(ssrRenderComponent(unref(ChevronDownIcon), {
                    size: "18",
                    class: "mt-1 ml-1"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode("Demos"),
                    createVNode(unref(ChevronDownIcon), {
                      size: "18",
                      class: "mt-1 ml-1"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, mergeProps({
                class: "hidden-sm-and-down nav-links custom-hover-primary",
                ripple: false,
                rounded: "pill",
                variant: "text"
              }, props), {
                default: withCtx(() => [
                  createTextVNode("Demos"),
                  createVNode(unref(ChevronDownIcon), {
                    size: "18",
                    class: "mt-1 ml-1"
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
              "max-width": "100%",
              width: "1150",
              height: "100%",
              elevation: "10",
              rounded: "xl",
              class: "pa-8 mx-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5"${_scopeId2}>Different Demos</h5><h6 class="text-subtitle-1 mt-1"${_scopeId2}>Included with the package</h6><div class="v-row mt-3"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(demosMegamenu), (demo) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      key: demo.img
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_sheet, { class: "text-center position-relative" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="overflow-hidden rounded-md border"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_v_card, {
                                  class: "mx-auto",
                                  rounded: "0",
                                  onMouseenter: ($event) => setHoverState(demo.img, true),
                                  onMouseleave: ($event) => setHoverState(demo.img, false)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<img${ssrRenderAttr("src", demo.img)}${ssrRenderAttr("alt", demo.img)} class="w-100"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_v_overlay, {
                                        "model-value": hoverStates.value[demo.img],
                                        class: "align-center justify-center",
                                        scrim: "rgba(55, 114, 255, 0.5)",
                                        contained: ""
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_btn, {
                                              color: "primary",
                                              size: "small",
                                              rounded: "pill",
                                              flat: "",
                                              target: "_blank",
                                              href: demo.link
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Live Preview`);
                                                } else {
                                                  return [
                                                    createTextVNode("Live Preview")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_btn, {
                                                color: "primary",
                                                size: "small",
                                                rounded: "pill",
                                                flat: "",
                                                target: "_blank",
                                                href: demo.link
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Live Preview")
                                                ]),
                                                _: 2
                                              }, 1032, ["href"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode("img", {
                                          src: demo.img,
                                          alt: demo.img,
                                          class: "w-100"
                                        }, null, 8, ["src", "alt"]),
                                        createVNode(_component_v_overlay, {
                                          "model-value": hoverStates.value[demo.img],
                                          class: "align-center justify-center",
                                          scrim: "rgba(55, 114, 255, 0.5)",
                                          contained: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, {
                                              color: "primary",
                                              size: "small",
                                              rounded: "pill",
                                              flat: "",
                                              target: "_blank",
                                              href: demo.link
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Live Preview")
                                              ]),
                                              _: 2
                                            }, 1032, ["href"])
                                          ]),
                                          _: 2
                                        }, 1032, ["model-value"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "overflow-hidden rounded-md border" }, [
                                    createVNode(_component_v_card, {
                                      class: "mx-auto",
                                      rounded: "0",
                                      onMouseenter: ($event) => setHoverState(demo.img, true),
                                      onMouseleave: ($event) => setHoverState(demo.img, false)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: demo.img,
                                          alt: demo.img,
                                          class: "w-100"
                                        }, null, 8, ["src", "alt"]),
                                        createVNode(_component_v_overlay, {
                                          "model-value": hoverStates.value[demo.img],
                                          class: "align-center justify-center",
                                          scrim: "rgba(55, 114, 255, 0.5)",
                                          contained: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, {
                                              color: "primary",
                                              size: "small",
                                              rounded: "pill",
                                              flat: "",
                                              target: "_blank",
                                              href: demo.link
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Live Preview")
                                              ]),
                                              _: 2
                                            }, 1032, ["href"])
                                          ]),
                                          _: 2
                                        }, 1032, ["model-value"])
                                      ]),
                                      _: 2
                                    }, 1032, ["onMouseenter", "onMouseleave"])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<p class="text-body-1 font-weight-semibold text-grey200 text-center mt-1"${_scopeId3}>${ssrInterpolate(demo.name)}</p>`);
                        } else {
                          return [
                            createVNode(_component_v_sheet, { class: "text-center position-relative" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "overflow-hidden rounded-md border" }, [
                                  createVNode(_component_v_card, {
                                    class: "mx-auto",
                                    rounded: "0",
                                    onMouseenter: ($event) => setHoverState(demo.img, true),
                                    onMouseleave: ($event) => setHoverState(demo.img, false)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: demo.img,
                                        alt: demo.img,
                                        class: "w-100"
                                      }, null, 8, ["src", "alt"]),
                                      createVNode(_component_v_overlay, {
                                        "model-value": hoverStates.value[demo.img],
                                        class: "align-center justify-center",
                                        scrim: "rgba(55, 114, 255, 0.5)",
                                        contained: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            color: "primary",
                                            size: "small",
                                            rounded: "pill",
                                            flat: "",
                                            target: "_blank",
                                            href: demo.link
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Live Preview")
                                            ]),
                                            _: 2
                                          }, 1032, ["href"])
                                        ]),
                                        _: 2
                                      }, 1032, ["model-value"])
                                    ]),
                                    _: 2
                                  }, 1032, ["onMouseenter", "onMouseleave"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("p", { class: "text-body-1 font-weight-semibold text-grey200 text-center mt-1" }, toDisplayString(demo.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div><div class="mt-8"${_scopeId2}><h5 class="text-h5"${_scopeId2}>Different Apps</h5><div class="v-row mt-3"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(appsMegamenu), (demo) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      key: demo.img
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_sheet, { class: "text-center position-relative" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="overflow-hidden rounded-md border"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_v_card, {
                                  class: "mx-auto",
                                  rounded: "0",
                                  onMouseenter: ($event) => setHoverState(demo.img, true),
                                  onMouseleave: ($event) => setHoverState(demo.img, false)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<img${ssrRenderAttr("src", demo.img)}${ssrRenderAttr("alt", demo.img)} class="w-100"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_v_overlay, {
                                        "model-value": hoverStates.value[demo.img],
                                        class: "align-center justify-center",
                                        scrim: "rgba(55, 114, 255, 0.5)",
                                        contained: ""
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_btn, {
                                              color: "primary",
                                              size: "small",
                                              rounded: "pill",
                                              flat: "",
                                              target: "_blank",
                                              href: demo.link
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Live Preview`);
                                                } else {
                                                  return [
                                                    createTextVNode("Live Preview")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_btn, {
                                                color: "primary",
                                                size: "small",
                                                rounded: "pill",
                                                flat: "",
                                                target: "_blank",
                                                href: demo.link
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Live Preview")
                                                ]),
                                                _: 2
                                              }, 1032, ["href"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode("img", {
                                          src: demo.img,
                                          alt: demo.img,
                                          class: "w-100"
                                        }, null, 8, ["src", "alt"]),
                                        createVNode(_component_v_overlay, {
                                          "model-value": hoverStates.value[demo.img],
                                          class: "align-center justify-center",
                                          scrim: "rgba(55, 114, 255, 0.5)",
                                          contained: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, {
                                              color: "primary",
                                              size: "small",
                                              rounded: "pill",
                                              flat: "",
                                              target: "_blank",
                                              href: demo.link
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Live Preview")
                                              ]),
                                              _: 2
                                            }, 1032, ["href"])
                                          ]),
                                          _: 2
                                        }, 1032, ["model-value"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "overflow-hidden rounded-md border" }, [
                                    createVNode(_component_v_card, {
                                      class: "mx-auto",
                                      rounded: "0",
                                      onMouseenter: ($event) => setHoverState(demo.img, true),
                                      onMouseleave: ($event) => setHoverState(demo.img, false)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: demo.img,
                                          alt: demo.img,
                                          class: "w-100"
                                        }, null, 8, ["src", "alt"]),
                                        createVNode(_component_v_overlay, {
                                          "model-value": hoverStates.value[demo.img],
                                          class: "align-center justify-center",
                                          scrim: "rgba(55, 114, 255, 0.5)",
                                          contained: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, {
                                              color: "primary",
                                              size: "small",
                                              rounded: "pill",
                                              flat: "",
                                              target: "_blank",
                                              href: demo.link
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Live Preview")
                                              ]),
                                              _: 2
                                            }, 1032, ["href"])
                                          ]),
                                          _: 2
                                        }, 1032, ["model-value"])
                                      ]),
                                      _: 2
                                    }, 1032, ["onMouseenter", "onMouseleave"])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<p class="text-body-1 font-weight-semibold text-grey200 text-center mt-1"${_scopeId3}>${ssrInterpolate(demo.name)}</p>`);
                        } else {
                          return [
                            createVNode(_component_v_sheet, { class: "text-center position-relative" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "overflow-hidden rounded-md border" }, [
                                  createVNode(_component_v_card, {
                                    class: "mx-auto",
                                    rounded: "0",
                                    onMouseenter: ($event) => setHoverState(demo.img, true),
                                    onMouseleave: ($event) => setHoverState(demo.img, false)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: demo.img,
                                        alt: demo.img,
                                        class: "w-100"
                                      }, null, 8, ["src", "alt"]),
                                      createVNode(_component_v_overlay, {
                                        "model-value": hoverStates.value[demo.img],
                                        class: "align-center justify-center",
                                        scrim: "rgba(55, 114, 255, 0.5)",
                                        contained: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            color: "primary",
                                            size: "small",
                                            rounded: "pill",
                                            flat: "",
                                            target: "_blank",
                                            href: demo.link
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Live Preview")
                                            ]),
                                            _: 2
                                          }, 1032, ["href"])
                                        ]),
                                        _: 2
                                      }, 1032, ["model-value"])
                                    ]),
                                    _: 2
                                  }, 1032, ["onMouseenter", "onMouseleave"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("p", { class: "text-body-1 font-weight-semibold text-grey200 text-center mt-1" }, toDisplayString(demo.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div></div>`);
                } else {
                  return [
                    createVNode("h5", { class: "text-h5" }, "Different Demos"),
                    createVNode("h6", { class: "text-subtitle-1 mt-1" }, "Included with the package"),
                    createVNode("div", { class: "v-row mt-3" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(demosMegamenu), (demo) => {
                        return openBlock(), createBlock(_component_v_col, {
                          key: demo.img
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_sheet, { class: "text-center position-relative" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "overflow-hidden rounded-md border" }, [
                                  createVNode(_component_v_card, {
                                    class: "mx-auto",
                                    rounded: "0",
                                    onMouseenter: ($event) => setHoverState(demo.img, true),
                                    onMouseleave: ($event) => setHoverState(demo.img, false)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: demo.img,
                                        alt: demo.img,
                                        class: "w-100"
                                      }, null, 8, ["src", "alt"]),
                                      createVNode(_component_v_overlay, {
                                        "model-value": hoverStates.value[demo.img],
                                        class: "align-center justify-center",
                                        scrim: "rgba(55, 114, 255, 0.5)",
                                        contained: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            color: "primary",
                                            size: "small",
                                            rounded: "pill",
                                            flat: "",
                                            target: "_blank",
                                            href: demo.link
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Live Preview")
                                            ]),
                                            _: 2
                                          }, 1032, ["href"])
                                        ]),
                                        _: 2
                                      }, 1032, ["model-value"])
                                    ]),
                                    _: 2
                                  }, 1032, ["onMouseenter", "onMouseleave"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("p", { class: "text-body-1 font-weight-semibold text-grey200 text-center mt-1" }, toDisplayString(demo.name), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    createVNode("div", { class: "mt-8" }, [
                      createVNode("h5", { class: "text-h5" }, "Different Apps"),
                      createVNode("div", { class: "v-row mt-3" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(appsMegamenu), (demo) => {
                          return openBlock(), createBlock(_component_v_col, {
                            key: demo.img
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_sheet, { class: "text-center position-relative" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "overflow-hidden rounded-md border" }, [
                                    createVNode(_component_v_card, {
                                      class: "mx-auto",
                                      rounded: "0",
                                      onMouseenter: ($event) => setHoverState(demo.img, true),
                                      onMouseleave: ($event) => setHoverState(demo.img, false)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: demo.img,
                                          alt: demo.img,
                                          class: "w-100"
                                        }, null, 8, ["src", "alt"]),
                                        createVNode(_component_v_overlay, {
                                          "model-value": hoverStates.value[demo.img],
                                          class: "align-center justify-center",
                                          scrim: "rgba(55, 114, 255, 0.5)",
                                          contained: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, {
                                              color: "primary",
                                              size: "small",
                                              rounded: "pill",
                                              flat: "",
                                              target: "_blank",
                                              href: demo.link
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Live Preview")
                                              ]),
                                              _: 2
                                            }, 1032, ["href"])
                                          ]),
                                          _: 2
                                        }, 1032, ["model-value"])
                                      ]),
                                      _: 2
                                    }, 1032, ["onMouseenter", "onMouseleave"])
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("p", { class: "text-body-1 font-weight-semibold text-grey200 text-center mt-1" }, toDisplayString(demo.name), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_sheet, {
                "max-width": "100%",
                width: "1150",
                height: "100%",
                elevation: "10",
                rounded: "xl",
                class: "pa-8 mx-auto"
              }, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h5" }, "Different Demos"),
                  createVNode("h6", { class: "text-subtitle-1 mt-1" }, "Included with the package"),
                  createVNode("div", { class: "v-row mt-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(demosMegamenu), (demo) => {
                      return openBlock(), createBlock(_component_v_col, {
                        key: demo.img
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_sheet, { class: "text-center position-relative" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "overflow-hidden rounded-md border" }, [
                                createVNode(_component_v_card, {
                                  class: "mx-auto",
                                  rounded: "0",
                                  onMouseenter: ($event) => setHoverState(demo.img, true),
                                  onMouseleave: ($event) => setHoverState(demo.img, false)
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: demo.img,
                                      alt: demo.img,
                                      class: "w-100"
                                    }, null, 8, ["src", "alt"]),
                                    createVNode(_component_v_overlay, {
                                      "model-value": hoverStates.value[demo.img],
                                      class: "align-center justify-center",
                                      scrim: "rgba(55, 114, 255, 0.5)",
                                      contained: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, {
                                          color: "primary",
                                          size: "small",
                                          rounded: "pill",
                                          flat: "",
                                          target: "_blank",
                                          href: demo.link
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Live Preview")
                                          ]),
                                          _: 2
                                        }, 1032, ["href"])
                                      ]),
                                      _: 2
                                    }, 1032, ["model-value"])
                                  ]),
                                  _: 2
                                }, 1032, ["onMouseenter", "onMouseleave"])
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("p", { class: "text-body-1 font-weight-semibold text-grey200 text-center mt-1" }, toDisplayString(demo.name), 1)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  createVNode("div", { class: "mt-8" }, [
                    createVNode("h5", { class: "text-h5" }, "Different Apps"),
                    createVNode("div", { class: "v-row mt-3" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(appsMegamenu), (demo) => {
                        return openBlock(), createBlock(_component_v_col, {
                          key: demo.img
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_sheet, { class: "text-center position-relative" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "overflow-hidden rounded-md border" }, [
                                  createVNode(_component_v_card, {
                                    class: "mx-auto",
                                    rounded: "0",
                                    onMouseenter: ($event) => setHoverState(demo.img, true),
                                    onMouseleave: ($event) => setHoverState(demo.img, false)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: demo.img,
                                        alt: demo.img,
                                        class: "w-100"
                                      }, null, 8, ["src", "alt"]),
                                      createVNode(_component_v_overlay, {
                                        "model-value": hoverStates.value[demo.img],
                                        class: "align-center justify-center",
                                        scrim: "rgba(55, 114, 255, 0.5)",
                                        contained: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            color: "primary",
                                            size: "small",
                                            rounded: "pill",
                                            flat: "",
                                            target: "_blank",
                                            href: demo.link
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Live Preview")
                                            ]),
                                            _: 2
                                          }, 1032, ["href"])
                                        ]),
                                        _: 2
                                      }, 1032, ["model-value"])
                                    ]),
                                    _: 2
                                  }, 1032, ["onMouseenter", "onMouseleave"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("p", { class: "text-body-1 font-weight-semibold text-grey200 text-center mt-1" }, toDisplayString(demo.name), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
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
      _push(ssrRenderComponent(_component_v_menu, {
        "open-on-hover": "",
        "close-on-content-click": false,
        class: "lp_wrapper position-relative"
      }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, mergeProps({
              class: "hidden-sm-and-down nav-links custom-hover-primary font-weight-regular",
              rounded: "pill",
              variant: "text"
            }, props), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`A propos`);
                  _push3(ssrRenderComponent(unref(ChevronDownIcon), {
                    size: "18",
                    class: "mt-1 ml-1"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode("A propos"),
                    createVNode(unref(ChevronDownIcon), {
                      size: "18",
                      class: "mt-1 ml-1"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, mergeProps({
                class: "hidden-sm-and-down nav-links custom-hover-primary font-weight-regular",
                rounded: "pill",
                variant: "text"
              }, props), {
                default: withCtx(() => [
                  createTextVNode("A propos"),
                  createVNode(unref(ChevronDownIcon), {
                    size: "18",
                    class: "mt-1 ml-1"
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
              "max-width": "100%",
              width: "1150",
              height: "100%",
              elevation: "10",
              rounded: "md",
              class: "pa-8 mx-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5"${_scopeId2}>Different Front Pages</h5><p class="text-subtitle-1 font-weight-medium textSecondary mt-1"${_scopeId2}>Included with the package</p><div class="v-row mt-3"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(FrontPageMenu).slice(0, 4), (demo) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      key: demo.img
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_sheet, { class: "text-center position-relative" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="overflow-hidden rounded-md border"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_v_card, {
                                  class: "mx-auto",
                                  rounded: "0",
                                  onMouseenter: ($event) => setHoverState(demo.img, true),
                                  onMouseleave: ($event) => setHoverState(demo.img, false)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<img${ssrRenderAttr("src", demo.img)}${ssrRenderAttr("alt", demo.img)} class="w-100"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_v_overlay, {
                                        "model-value": hoverStates.value[demo.img],
                                        class: "align-center justify-center",
                                        scrim: "rgba(55, 114, 255, 0.5)",
                                        contained: ""
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_btn, {
                                              color: "primary",
                                              size: "small",
                                              rounded: "pill",
                                              flat: "",
                                              target: "_blank",
                                              href: demo.link
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Live Preview`);
                                                } else {
                                                  return [
                                                    createTextVNode("Live Preview")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_btn, {
                                                color: "primary",
                                                size: "small",
                                                rounded: "pill",
                                                flat: "",
                                                target: "_blank",
                                                href: demo.link
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Live Preview")
                                                ]),
                                                _: 2
                                              }, 1032, ["href"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode("img", {
                                          src: demo.img,
                                          alt: demo.img,
                                          class: "w-100"
                                        }, null, 8, ["src", "alt"]),
                                        createVNode(_component_v_overlay, {
                                          "model-value": hoverStates.value[demo.img],
                                          class: "align-center justify-center",
                                          scrim: "rgba(55, 114, 255, 0.5)",
                                          contained: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, {
                                              color: "primary",
                                              size: "small",
                                              rounded: "pill",
                                              flat: "",
                                              target: "_blank",
                                              href: demo.link
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Live Preview")
                                              ]),
                                              _: 2
                                            }, 1032, ["href"])
                                          ]),
                                          _: 2
                                        }, 1032, ["model-value"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "overflow-hidden rounded-md border" }, [
                                    createVNode(_component_v_card, {
                                      class: "mx-auto",
                                      rounded: "0",
                                      onMouseenter: ($event) => setHoverState(demo.img, true),
                                      onMouseleave: ($event) => setHoverState(demo.img, false)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: demo.img,
                                          alt: demo.img,
                                          class: "w-100"
                                        }, null, 8, ["src", "alt"]),
                                        createVNode(_component_v_overlay, {
                                          "model-value": hoverStates.value[demo.img],
                                          class: "align-center justify-center",
                                          scrim: "rgba(55, 114, 255, 0.5)",
                                          contained: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, {
                                              color: "primary",
                                              size: "small",
                                              rounded: "pill",
                                              flat: "",
                                              target: "_blank",
                                              href: demo.link
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Live Preview")
                                              ]),
                                              _: 2
                                            }, 1032, ["href"])
                                          ]),
                                          _: 2
                                        }, 1032, ["model-value"])
                                      ]),
                                      _: 2
                                    }, 1032, ["onMouseenter", "onMouseleave"])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<p class="text-body-1 font-weight-medium text-center mt-1"${_scopeId3}>${ssrInterpolate(demo.name)}</p>`);
                        } else {
                          return [
                            createVNode(_component_v_sheet, { class: "text-center position-relative" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "overflow-hidden rounded-md border" }, [
                                  createVNode(_component_v_card, {
                                    class: "mx-auto",
                                    rounded: "0",
                                    onMouseenter: ($event) => setHoverState(demo.img, true),
                                    onMouseleave: ($event) => setHoverState(demo.img, false)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: demo.img,
                                        alt: demo.img,
                                        class: "w-100"
                                      }, null, 8, ["src", "alt"]),
                                      createVNode(_component_v_overlay, {
                                        "model-value": hoverStates.value[demo.img],
                                        class: "align-center justify-center",
                                        scrim: "rgba(55, 114, 255, 0.5)",
                                        contained: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            color: "primary",
                                            size: "small",
                                            rounded: "pill",
                                            flat: "",
                                            target: "_blank",
                                            href: demo.link
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Live Preview")
                                            ]),
                                            _: 2
                                          }, 1032, ["href"])
                                        ]),
                                        _: 2
                                      }, 1032, ["model-value"])
                                    ]),
                                    _: 2
                                  }, 1032, ["onMouseenter", "onMouseleave"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("p", { class: "text-body-1 font-weight-medium text-center mt-1" }, toDisplayString(demo.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("h5", { class: "text-h5" }, "Different Front Pages"),
                    createVNode("p", { class: "text-subtitle-1 font-weight-medium textSecondary mt-1" }, "Included with the package"),
                    createVNode("div", { class: "v-row mt-3" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(FrontPageMenu).slice(0, 4), (demo) => {
                        return openBlock(), createBlock(_component_v_col, {
                          key: demo.img
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_sheet, { class: "text-center position-relative" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "overflow-hidden rounded-md border" }, [
                                  createVNode(_component_v_card, {
                                    class: "mx-auto",
                                    rounded: "0",
                                    onMouseenter: ($event) => setHoverState(demo.img, true),
                                    onMouseleave: ($event) => setHoverState(demo.img, false)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: demo.img,
                                        alt: demo.img,
                                        class: "w-100"
                                      }, null, 8, ["src", "alt"]),
                                      createVNode(_component_v_overlay, {
                                        "model-value": hoverStates.value[demo.img],
                                        class: "align-center justify-center",
                                        scrim: "rgba(55, 114, 255, 0.5)",
                                        contained: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            color: "primary",
                                            size: "small",
                                            rounded: "pill",
                                            flat: "",
                                            target: "_blank",
                                            href: demo.link
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Live Preview")
                                            ]),
                                            _: 2
                                          }, 1032, ["href"])
                                        ]),
                                        _: 2
                                      }, 1032, ["model-value"])
                                    ]),
                                    _: 2
                                  }, 1032, ["onMouseenter", "onMouseleave"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("p", { class: "text-body-1 font-weight-medium text-center mt-1" }, toDisplayString(demo.name), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_sheet, {
                "max-width": "100%",
                width: "1150",
                height: "100%",
                elevation: "10",
                rounded: "md",
                class: "pa-8 mx-auto"
              }, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h5" }, "Different Front Pages"),
                  createVNode("p", { class: "text-subtitle-1 font-weight-medium textSecondary mt-1" }, "Included with the package"),
                  createVNode("div", { class: "v-row mt-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(FrontPageMenu).slice(0, 4), (demo) => {
                      return openBlock(), createBlock(_component_v_col, {
                        key: demo.img
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_sheet, { class: "text-center position-relative" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "overflow-hidden rounded-md border" }, [
                                createVNode(_component_v_card, {
                                  class: "mx-auto",
                                  rounded: "0",
                                  onMouseenter: ($event) => setHoverState(demo.img, true),
                                  onMouseleave: ($event) => setHoverState(demo.img, false)
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: demo.img,
                                      alt: demo.img,
                                      class: "w-100"
                                    }, null, 8, ["src", "alt"]),
                                    createVNode(_component_v_overlay, {
                                      "model-value": hoverStates.value[demo.img],
                                      class: "align-center justify-center",
                                      scrim: "rgba(55, 114, 255, 0.5)",
                                      contained: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, {
                                          color: "primary",
                                          size: "small",
                                          rounded: "pill",
                                          flat: "",
                                          target: "_blank",
                                          href: demo.link
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Live Preview")
                                          ]),
                                          _: 2
                                        }, 1032, ["href"])
                                      ]),
                                      _: 2
                                    }, 1032, ["model-value"])
                                  ]),
                                  _: 2
                                }, 1032, ["onMouseenter", "onMouseleave"])
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("p", { class: "text-body-1 font-weight-medium text-center mt-1" }, toDisplayString(demo.name), 1)
                        ]),
                        _: 2
                      }, 1024);
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
      _push(ssrRenderComponent(_component_v_menu, {
        "open-on-hover": "",
        "open-delay": "1",
        "close-on-content-click": false,
        class: "lp_wrapper position-relative"
      }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, mergeProps({
              class: "hidden-sm-and-down custom-hover-primary nav-links",
              ripple: false,
              rounded: "pill",
              variant: "text",
              color: "primary"
            }, props), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Pages`);
                  _push3(ssrRenderComponent(unref(ChevronDownIcon), {
                    size: "18",
                    class: "mt-1 ml-1"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode("Pages"),
                    createVNode(unref(ChevronDownIcon), {
                      size: "18",
                      class: "mt-1 ml-1"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, mergeProps({
                class: "hidden-sm-and-down custom-hover-primary nav-links",
                ripple: false,
                rounded: "pill",
                variant: "text",
                color: "primary"
              }, props), {
                default: withCtx(() => [
                  createTextVNode("Pages"),
                  createVNode(unref(ChevronDownIcon), {
                    size: "18",
                    class: "mt-1 ml-1"
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
              width: "900",
              height: "400",
              elevation: "10",
              rounded: "xl",
              class: "pa-4 pb-0 mx-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          lg: "8",
                          class: "d-flex py-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="pa-4 pb-0 pr-0"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_sfc_main$6, null, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                              _push5(ssrRenderComponent(_component_v_divider, { vertical: "" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "pa-4 pb-0 pr-0" }, [
                                  createVNode(_sfc_main$6)
                                ]),
                                createVNode(_component_v_divider, { vertical: "" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          lg: "4",
                          class: "py-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="pa-4"${_scopeId4}><h5 class="text-h5 mb-4"${_scopeId4}>Quick Links</h5>`);
                              _push5(ssrRenderComponent(_sfc_main$5, null, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "pa-4" }, [
                                  createVNode("h5", { class: "text-h5 mb-4" }, "Quick Links"),
                                  createVNode(_sfc_main$5)
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
                            lg: "8",
                            class: "d-flex py-0"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "pa-4 pb-0 pr-0" }, [
                                createVNode(_sfc_main$6)
                              ]),
                              createVNode(_component_v_divider, { vertical: "" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "4",
                            class: "py-0"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "pa-4" }, [
                                createVNode("h5", { class: "text-h5 mb-4" }, "Quick Links"),
                                createVNode(_sfc_main$5)
                              ])
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
                    createVNode("div", null, [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "8",
                            class: "d-flex py-0"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "pa-4 pb-0 pr-0" }, [
                                createVNode(_sfc_main$6)
                              ]),
                              createVNode(_component_v_divider, { vertical: "" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "4",
                            class: "py-0"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "pa-4" }, [
                                createVNode("h5", { class: "text-h5 mb-4" }, "Quick Links"),
                                createVNode(_sfc_main$5)
                              ])
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_sheet, {
                width: "900",
                height: "400",
                elevation: "10",
                rounded: "xl",
                class: "pa-4 pb-0 mx-auto"
              }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          lg: "8",
                          class: "d-flex py-0"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "pa-4 pb-0 pr-0" }, [
                              createVNode(_sfc_main$6)
                            ]),
                            createVNode(_component_v_divider, { vertical: "" })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          lg: "4",
                          class: "py-0"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "pa-4" }, [
                              createVNode("h5", { class: "text-h5 mb-4" }, "Quick Links"),
                              createVNode(_sfc_main$5)
                            ])
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
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        variant: "text",
        color: "primary",
        class: "custom-hover-primary nav-links",
        rounded: "pill",
        ripple: false,
        href: "https://demos.wrappixel.com/premium-admin-templates/nuxtjs/spike-nuxtjs/docs/index.html"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Formules`);
          } else {
            return [
              createTextVNode("Formules")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        variant: "text",
        color: "primary",
        class: "custom-hover-primary nav-links",
        rounded: "pill",
        href: "/front-pages/Contact-us",
        ripple: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landingpage/layout/Navigation.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MobileSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    useCustomizerStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LcFullLogo = _sfc_main$8;
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_group = resolveComponent("v-list-group");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-6 lp-mobile-sidebar" }, _attrs))}><div class="ml-6 mb-3">`);
      _push(ssrRenderComponent(_component_LcFullLogo, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_v_list, { class: "right-sidebar py-0 px-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_list_group, { value: "Apps" }, {
              activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_list_item, mergeProps(props, { rounded: "md" }), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h5 class="text-subtitle-1"${_scopeId3}>Demos</h5>`);
                      } else {
                        return [
                          createVNode("h5", { class: "text-subtitle-1" }, "Demos")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_list_item, mergeProps(props, { rounded: "md" }), {
                      default: withCtx(() => [
                        createVNode("h5", { class: "text-subtitle-1" }, "Demos")
                      ]),
                      _: 2
                    }, 1040)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_list_item, { class: "px-6 pb-6 lp_wrapper" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mt-4"${_scopeId3}><h5 class="text-h5"${_scopeId3}>Different Demos</h5><h6 class="text-subtitle-1 mt-1"${_scopeId3}>Included with the package</h6>`);
                        _push4(ssrRenderComponent(_component_v_row, { class: "mt-3" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(demosMegamenu), (demo) => {
                                _push5(ssrRenderComponent(_component_v_col, {
                                  cols: "12",
                                  lg: "12",
                                  key: demo.img
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="text-center position-relative"${_scopeId5}><div class="overflow-hidden rounded-md"${_scopeId5}><div class="megamenu"${_scopeId5}><img${ssrRenderAttr("src", demo.img)}${ssrRenderAttr("alt", demo.img)} class="w-100 rounded-md"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_v_btn, {
                                        class: "bg-primary text-white position-absolute mx-sm-12 pr-3",
                                        flat: "",
                                        target: "_blank",
                                        rounded: "pill",
                                        href: demo.link
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Live Preview`);
                                          } else {
                                            return [
                                              createTextVNode("Live Preview")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</div></div></div><p class="text-body-1 text-center mt-1"${_scopeId5}>${ssrInterpolate(demo.name)}</p>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "text-center position-relative" }, [
                                          createVNode("div", { class: "overflow-hidden rounded-md" }, [
                                            createVNode("div", { class: "megamenu" }, [
                                              createVNode("img", {
                                                src: demo.img,
                                                alt: demo.img,
                                                class: "w-100 rounded-md"
                                              }, null, 8, ["src", "alt"]),
                                              createVNode(_component_v_btn, {
                                                class: "bg-primary text-white position-absolute mx-sm-12 pr-3",
                                                flat: "",
                                                target: "_blank",
                                                rounded: "pill",
                                                href: demo.link
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Live Preview")
                                                ]),
                                                _: 2
                                              }, 1032, ["href"])
                                            ])
                                          ])
                                        ]),
                                        createVNode("p", { class: "text-body-1 text-center mt-1" }, toDisplayString(demo.name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(demosMegamenu), (demo) => {
                                  return openBlock(), createBlock(_component_v_col, {
                                    cols: "12",
                                    lg: "12",
                                    key: demo.img
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-center position-relative" }, [
                                        createVNode("div", { class: "overflow-hidden rounded-md" }, [
                                          createVNode("div", { class: "megamenu" }, [
                                            createVNode("img", {
                                              src: demo.img,
                                              alt: demo.img,
                                              class: "w-100 rounded-md"
                                            }, null, 8, ["src", "alt"]),
                                            createVNode(_component_v_btn, {
                                              class: "bg-primary text-white position-absolute mx-sm-12 pr-3",
                                              flat: "",
                                              target: "_blank",
                                              rounded: "pill",
                                              href: demo.link
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Live Preview")
                                              ]),
                                              _: 2
                                            }, 1032, ["href"])
                                          ])
                                        ])
                                      ]),
                                      createVNode("p", { class: "text-body-1 text-center mt-1" }, toDisplayString(demo.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="mt-8"${_scopeId3}><h5 class="text-h5"${_scopeId3}>Different Apps</h5>`);
                        _push4(ssrRenderComponent(_component_v_row, { class: "mt-3" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(appsMegamenu), (demo) => {
                                _push5(ssrRenderComponent(_component_v_col, {
                                  cols: "12",
                                  key: demo.img
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="text-center position-relative"${_scopeId5}><div class="overflow-hidden rounded-md"${_scopeId5}><div class="megamenu"${_scopeId5}><img${ssrRenderAttr("src", demo.img)}${ssrRenderAttr("alt", demo.img)} class="w-100 rounded-md"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_v_btn, {
                                        class: "bg-primary text-white position-absolute mx-sm-12 pr-3",
                                        flat: "",
                                        target: "_blank",
                                        rounded: "pill",
                                        href: demo.link
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Live Preview`);
                                          } else {
                                            return [
                                              createTextVNode("Live Preview")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</div></div></div><p class="text-body-1 font-weight-semibold text-grey200 text-center mt-1"${_scopeId5}>${ssrInterpolate(demo.name)}</p>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "text-center position-relative" }, [
                                          createVNode("div", { class: "overflow-hidden rounded-md" }, [
                                            createVNode("div", { class: "megamenu" }, [
                                              createVNode("img", {
                                                src: demo.img,
                                                alt: demo.img,
                                                class: "w-100 rounded-md"
                                              }, null, 8, ["src", "alt"]),
                                              createVNode(_component_v_btn, {
                                                class: "bg-primary text-white position-absolute mx-sm-12 pr-3",
                                                flat: "",
                                                target: "_blank",
                                                rounded: "pill",
                                                href: demo.link
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Live Preview")
                                                ]),
                                                _: 2
                                              }, 1032, ["href"])
                                            ])
                                          ])
                                        ]),
                                        createVNode("p", { class: "text-body-1 font-weight-semibold text-grey200 text-center mt-1" }, toDisplayString(demo.name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(appsMegamenu), (demo) => {
                                  return openBlock(), createBlock(_component_v_col, {
                                    cols: "12",
                                    key: demo.img
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-center position-relative" }, [
                                        createVNode("div", { class: "overflow-hidden rounded-md" }, [
                                          createVNode("div", { class: "megamenu" }, [
                                            createVNode("img", {
                                              src: demo.img,
                                              alt: demo.img,
                                              class: "w-100 rounded-md"
                                            }, null, 8, ["src", "alt"]),
                                            createVNode(_component_v_btn, {
                                              class: "bg-primary text-white position-absolute mx-sm-12 pr-3",
                                              flat: "",
                                              target: "_blank",
                                              rounded: "pill",
                                              href: demo.link
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Live Preview")
                                              ]),
                                              _: 2
                                            }, 1032, ["href"])
                                          ])
                                        ])
                                      ]),
                                      createVNode("p", { class: "text-body-1 font-weight-semibold text-grey200 text-center mt-1" }, toDisplayString(demo.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "mt-4" }, [
                            createVNode("h5", { class: "text-h5" }, "Different Demos"),
                            createVNode("h6", { class: "text-subtitle-1 mt-1" }, "Included with the package"),
                            createVNode(_component_v_row, { class: "mt-3" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(demosMegamenu), (demo) => {
                                  return openBlock(), createBlock(_component_v_col, {
                                    cols: "12",
                                    lg: "12",
                                    key: demo.img
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-center position-relative" }, [
                                        createVNode("div", { class: "overflow-hidden rounded-md" }, [
                                          createVNode("div", { class: "megamenu" }, [
                                            createVNode("img", {
                                              src: demo.img,
                                              alt: demo.img,
                                              class: "w-100 rounded-md"
                                            }, null, 8, ["src", "alt"]),
                                            createVNode(_component_v_btn, {
                                              class: "bg-primary text-white position-absolute mx-sm-12 pr-3",
                                              flat: "",
                                              target: "_blank",
                                              rounded: "pill",
                                              href: demo.link
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Live Preview")
                                              ]),
                                              _: 2
                                            }, 1032, ["href"])
                                          ])
                                        ])
                                      ]),
                                      createVNode("p", { class: "text-body-1 text-center mt-1" }, toDisplayString(demo.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "mt-8" }, [
                              createVNode("h5", { class: "text-h5" }, "Different Apps"),
                              createVNode(_component_v_row, { class: "mt-3" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(appsMegamenu), (demo) => {
                                    return openBlock(), createBlock(_component_v_col, {
                                      cols: "12",
                                      key: demo.img
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-center position-relative" }, [
                                          createVNode("div", { class: "overflow-hidden rounded-md" }, [
                                            createVNode("div", { class: "megamenu" }, [
                                              createVNode("img", {
                                                src: demo.img,
                                                alt: demo.img,
                                                class: "w-100 rounded-md"
                                              }, null, 8, ["src", "alt"]),
                                              createVNode(_component_v_btn, {
                                                class: "bg-primary text-white position-absolute mx-sm-12 pr-3",
                                                flat: "",
                                                target: "_blank",
                                                rounded: "pill",
                                                href: demo.link
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Live Preview")
                                                ]),
                                                _: 2
                                              }, 1032, ["href"])
                                            ])
                                          ])
                                        ]),
                                        createVNode("p", { class: "text-body-1 font-weight-semibold text-grey200 text-center mt-1" }, toDisplayString(demo.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
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
                    createVNode(_component_v_list_item, { class: "px-6 pb-6 lp_wrapper" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mt-4" }, [
                          createVNode("h5", { class: "text-h5" }, "Different Demos"),
                          createVNode("h6", { class: "text-subtitle-1 mt-1" }, "Included with the package"),
                          createVNode(_component_v_row, { class: "mt-3" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(demosMegamenu), (demo) => {
                                return openBlock(), createBlock(_component_v_col, {
                                  cols: "12",
                                  lg: "12",
                                  key: demo.img
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-center position-relative" }, [
                                      createVNode("div", { class: "overflow-hidden rounded-md" }, [
                                        createVNode("div", { class: "megamenu" }, [
                                          createVNode("img", {
                                            src: demo.img,
                                            alt: demo.img,
                                            class: "w-100 rounded-md"
                                          }, null, 8, ["src", "alt"]),
                                          createVNode(_component_v_btn, {
                                            class: "bg-primary text-white position-absolute mx-sm-12 pr-3",
                                            flat: "",
                                            target: "_blank",
                                            rounded: "pill",
                                            href: demo.link
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Live Preview")
                                            ]),
                                            _: 2
                                          }, 1032, ["href"])
                                        ])
                                      ])
                                    ]),
                                    createVNode("p", { class: "text-body-1 text-center mt-1" }, toDisplayString(demo.name), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "mt-8" }, [
                            createVNode("h5", { class: "text-h5" }, "Different Apps"),
                            createVNode(_component_v_row, { class: "mt-3" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(appsMegamenu), (demo) => {
                                  return openBlock(), createBlock(_component_v_col, {
                                    cols: "12",
                                    key: demo.img
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-center position-relative" }, [
                                        createVNode("div", { class: "overflow-hidden rounded-md" }, [
                                          createVNode("div", { class: "megamenu" }, [
                                            createVNode("img", {
                                              src: demo.img,
                                              alt: demo.img,
                                              class: "w-100 rounded-md"
                                            }, null, 8, ["src", "alt"]),
                                            createVNode(_component_v_btn, {
                                              class: "bg-primary text-white position-absolute mx-sm-12 pr-3",
                                              flat: "",
                                              target: "_blank",
                                              rounded: "pill",
                                              href: demo.link
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Live Preview")
                                              ]),
                                              _: 2
                                            }, 1032, ["href"])
                                          ])
                                        ])
                                      ]),
                                      createVNode("p", { class: "text-body-1 font-weight-semibold text-grey200 text-center mt-1" }, toDisplayString(demo.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
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
          } else {
            return [
              createVNode(_component_v_list_group, { value: "Apps" }, {
                activator: withCtx(({ props }) => [
                  createVNode(_component_v_list_item, mergeProps(props, { rounded: "md" }), {
                    default: withCtx(() => [
                      createVNode("h5", { class: "text-subtitle-1" }, "Demos")
                    ]),
                    _: 2
                  }, 1040)
                ]),
                default: withCtx(() => [
                  createVNode(_component_v_list_item, { class: "px-6 pb-6 lp_wrapper" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mt-4" }, [
                        createVNode("h5", { class: "text-h5" }, "Different Demos"),
                        createVNode("h6", { class: "text-subtitle-1 mt-1" }, "Included with the package"),
                        createVNode(_component_v_row, { class: "mt-3" }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(demosMegamenu), (demo) => {
                              return openBlock(), createBlock(_component_v_col, {
                                cols: "12",
                                lg: "12",
                                key: demo.img
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-center position-relative" }, [
                                    createVNode("div", { class: "overflow-hidden rounded-md" }, [
                                      createVNode("div", { class: "megamenu" }, [
                                        createVNode("img", {
                                          src: demo.img,
                                          alt: demo.img,
                                          class: "w-100 rounded-md"
                                        }, null, 8, ["src", "alt"]),
                                        createVNode(_component_v_btn, {
                                          class: "bg-primary text-white position-absolute mx-sm-12 pr-3",
                                          flat: "",
                                          target: "_blank",
                                          rounded: "pill",
                                          href: demo.link
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Live Preview")
                                          ]),
                                          _: 2
                                        }, 1032, ["href"])
                                      ])
                                    ])
                                  ]),
                                  createVNode("p", { class: "text-body-1 text-center mt-1" }, toDisplayString(demo.name), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "mt-8" }, [
                          createVNode("h5", { class: "text-h5" }, "Different Apps"),
                          createVNode(_component_v_row, { class: "mt-3" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(appsMegamenu), (demo) => {
                                return openBlock(), createBlock(_component_v_col, {
                                  cols: "12",
                                  key: demo.img
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-center position-relative" }, [
                                      createVNode("div", { class: "overflow-hidden rounded-md" }, [
                                        createVNode("div", { class: "megamenu" }, [
                                          createVNode("img", {
                                            src: demo.img,
                                            alt: demo.img,
                                            class: "w-100 rounded-md"
                                          }, null, 8, ["src", "alt"]),
                                          createVNode(_component_v_btn, {
                                            class: "bg-primary text-white position-absolute mx-sm-12 pr-3",
                                            flat: "",
                                            target: "_blank",
                                            rounded: "pill",
                                            href: demo.link
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Live Preview")
                                            ]),
                                            _: 2
                                          }, 1032, ["href"])
                                        ])
                                      ])
                                    ]),
                                    createVNode("p", { class: "text-body-1 font-weight-semibold text-grey200 text-center mt-1" }, toDisplayString(demo.name), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
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
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_list, { class: "right-sidebar py-0 px-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_list_group, { value: "Apps" }, {
              activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_list_item, mergeProps(props, { rounded: "md" }), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h5 class="text-subtitle-1"${_scopeId3}>Pages</h5>`);
                      } else {
                        return [
                          createVNode("h5", { class: "text-subtitle-1" }, "Pages")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_list_item, mergeProps(props, { rounded: "md" }), {
                      default: withCtx(() => [
                        createVNode("h5", { class: "text-subtitle-1" }, "Pages")
                      ]),
                      _: 2
                    }, 1040)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_list_item, { class: "pl-6 pb-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mt-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_sfc_main$6, null, null, _parent4, _scopeId3));
                        _push4(`</div><div class="mt-8"${_scopeId3}><h5 class="text-h5 mb-3"${_scopeId3}>Quick Links</h5>`);
                        _push4(ssrRenderComponent(_sfc_main$5, null, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "mt-4" }, [
                            createVNode(_sfc_main$6)
                          ]),
                          createVNode("div", { class: "mt-8" }, [
                            createVNode("h5", { class: "text-h5 mb-3" }, "Quick Links"),
                            createVNode(_sfc_main$5)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_list_item, { class: "pl-6 pb-6" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mt-4" }, [
                          createVNode(_sfc_main$6)
                        ]),
                        createVNode("div", { class: "mt-8" }, [
                          createVNode("h5", { class: "text-h5 mb-3" }, "Quick Links"),
                          createVNode(_sfc_main$5)
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
              createVNode(_component_v_list_group, { value: "Apps" }, {
                activator: withCtx(({ props }) => [
                  createVNode(_component_v_list_item, mergeProps(props, { rounded: "md" }), {
                    default: withCtx(() => [
                      createVNode("h5", { class: "text-subtitle-1" }, "Pages")
                    ]),
                    _: 2
                  }, 1040)
                ]),
                default: withCtx(() => [
                  createVNode(_component_v_list_item, { class: "pl-6 pb-6" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mt-4" }, [
                        createVNode(_sfc_main$6)
                      ]),
                      createVNode("div", { class: "mt-8" }, [
                        createVNode("h5", { class: "text-h5 mb-3" }, "Quick Links"),
                        createVNode(_sfc_main$5)
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
      _push(ssrRenderComponent(_component_v_list, { class: "py-0 px-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_list_item, { rounded: "md" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, {
                    variant: "text",
                    class: "custom-hover-primary px-0 text-left",
                    flat: "",
                    href: "https://demos.wrappixel.com/premium-admin-templates/nuxtjs/spike-nuxtjs/docs/index.html",
                    target: "_blank"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h5 class="text-subtitle-1"${_scopeId3}>Documentation</h5>`);
                      } else {
                        return [
                          createVNode("h5", { class: "text-subtitle-1" }, "Documentation")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      variant: "text",
                      class: "custom-hover-primary px-0 text-left",
                      flat: "",
                      href: "https://demos.wrappixel.com/premium-admin-templates/nuxtjs/spike-nuxtjs/docs/index.html",
                      target: "_blank"
                    }, {
                      default: withCtx(() => [
                        createVNode("h5", { class: "text-subtitle-1" }, "Documentation")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_list_item, {
              class: "mt-2",
              rounded: "md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, {
                    class: "custom-hover-primary bg-primary",
                    rounded: "pill",
                    block: "",
                    flat: "",
                    href: "/auth/login",
                    target: "_blank"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Login`);
                      } else {
                        return [
                          createTextVNode("Login")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      class: "custom-hover-primary bg-primary",
                      rounded: "pill",
                      block: "",
                      flat: "",
                      href: "/auth/login",
                      target: "_blank"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Login")
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
              createVNode(_component_v_list_item, { rounded: "md" }, {
                default: withCtx(() => [
                  createVNode(_component_v_btn, {
                    variant: "text",
                    class: "custom-hover-primary px-0 text-left",
                    flat: "",
                    href: "https://demos.wrappixel.com/premium-admin-templates/nuxtjs/spike-nuxtjs/docs/index.html",
                    target: "_blank"
                  }, {
                    default: withCtx(() => [
                      createVNode("h5", { class: "text-subtitle-1" }, "Documentation")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_list_item, {
                class: "mt-2",
                rounded: "md"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_btn, {
                    class: "custom-hover-primary bg-primary",
                    rounded: "pill",
                    block: "",
                    flat: "",
                    href: "/auth/login",
                    target: "_blank"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Login")
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landingpage/layout/MobileSidebar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const appsdrawer = ref(false);
    useCustomizerStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_toolbar = resolveComponent("v-toolbar");
      const _component_LcFullLogo = _sfc_main$8;
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
      _push(ssrRenderComponent(_component_v_app_bar, {
        height: "80",
        class: "lp-header",
        flat: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_container, { class: "maxWidth py-sm-4 py-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_toolbar, { class: "d-flex align-center bg-surface" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_LcFullLogo, null, null, _parent4, _scopeId3));
                        _push4(`</div><div class="navigation d-lg-flex d-none ga-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_sfc_main$4, null, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(_component_v_btn, {
                          class: "custom-hover-primary bg-primary d-lg-flex d-none px-8 align-center login-shadow",
                          rounded: "pill",
                          to: "/auth/login"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-white"${_scopeId4}>Se connecter</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-white" }, "Se connecter")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          variant: "text",
                          class: "hidden-lg-and-up",
                          icon: "",
                          onClick: ($event) => appsdrawer.value = !appsdrawer.value
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Menu2Icon), {
                                size: "22",
                                "stroke-width": "1.5"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Menu2Icon), {
                                  size: "22",
                                  "stroke-width": "1.5"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode(_component_LcFullLogo)
                          ]),
                          createVNode("div", { class: "navigation d-lg-flex d-none ga-3" }, [
                            createVNode(_sfc_main$4)
                          ]),
                          createVNode(_component_v_btn, {
                            class: "custom-hover-primary bg-primary d-lg-flex d-none px-8 align-center login-shadow",
                            rounded: "pill",
                            to: "/auth/login"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-white" }, "Se connecter")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_btn, {
                            variant: "text",
                            class: "hidden-lg-and-up",
                            icon: "",
                            onClick: withModifiers(($event) => appsdrawer.value = !appsdrawer.value, ["stop"])
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Menu2Icon), {
                                size: "22",
                                "stroke-width": "1.5"
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_toolbar, { class: "d-flex align-center bg-surface" }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode(_component_LcFullLogo)
                        ]),
                        createVNode("div", { class: "navigation d-lg-flex d-none ga-3" }, [
                          createVNode(_sfc_main$4)
                        ]),
                        createVNode(_component_v_btn, {
                          class: "custom-hover-primary bg-primary d-lg-flex d-none px-8 align-center login-shadow",
                          rounded: "pill",
                          to: "/auth/login"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-white" }, "Se connecter")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_btn, {
                          variant: "text",
                          class: "hidden-lg-and-up",
                          icon: "",
                          onClick: withModifiers(($event) => appsdrawer.value = !appsdrawer.value, ["stop"])
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Menu2Icon), {
                              size: "22",
                              "stroke-width": "1.5"
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_container, { class: "maxWidth py-sm-4 py-0" }, {
                default: withCtx(() => [
                  createVNode(_component_v_toolbar, { class: "d-flex align-center bg-surface" }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode(_component_LcFullLogo)
                      ]),
                      createVNode("div", { class: "navigation d-lg-flex d-none ga-3" }, [
                        createVNode(_sfc_main$4)
                      ]),
                      createVNode(_component_v_btn, {
                        class: "custom-hover-primary bg-primary d-lg-flex d-none px-8 align-center login-shadow",
                        rounded: "pill",
                        to: "/auth/login"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-white" }, "Se connecter")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_btn, {
                        variant: "text",
                        class: "hidden-lg-and-up",
                        icon: "",
                        onClick: withModifiers(($event) => appsdrawer.value = !appsdrawer.value, ["stop"])
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Menu2Icon), {
                            size: "22",
                            "stroke-width": "1.5"
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
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_v_navigation_drawer, {
        class: "lp-drawer",
        modelValue: appsdrawer.value,
        "onUpdate:modelValue": ($event) => appsdrawer.value = $event,
        location: "left",
        temporary: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landingpage/layout/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ourProducts",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_hover = resolveComponent("v-hover");
      const _component_v_overlay = resolveComponent("v-overlay");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-md-16 bg-containerBg" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_container, {
        class: "maxWidth py-md-16",
        id: "demos"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { class: "justify-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    lg: "8",
                    sm: "10",
                    "data-aos": "fade-up",
                    "data-aos-duration": "500"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-sm-flex align-center text-center justify-center"${_scopeId3}><div class="d-flex flex-row-reverse justify-sm-start justify-center ml-sm-0 ml-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_avatar, {
                          class: "ml-n2 avtar-border",
                          size: "28"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<img${ssrRenderAttr("src", user3)} height="28" alt="usericon"${_scopeId4}>`);
                            } else {
                              return [
                                createVNode("img", {
                                  src: user3,
                                  height: "28",
                                  alt: "usericon"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_avatar, {
                          class: "ml-n2 avtar-border",
                          size: "28"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<img${ssrRenderAttr("src", user2)} height="28" alt="usericon"${_scopeId4}>`);
                            } else {
                              return [
                                createVNode("img", {
                                  src: user2,
                                  height: "28",
                                  alt: "usericon"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_avatar, {
                          class: "ml-n2 avtar-border",
                          size: "28"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<img${ssrRenderAttr("src", user1)} height="28" alt="usericon"${_scopeId4}>`);
                            } else {
                              return [
                                createVNode("img", {
                                  src: user1,
                                  height: "28",
                                  alt: "usericon"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><h6 class="text-h5 ml-2 mt-2 mt-sm-0 text-grey100"${_scopeId3}>52,589+</h6><h6 class="text-h5 ml-2 text-grey100"${_scopeId3}>developers &amp; agencies using our templates</h6></div><h2 class="text-center mt-6 sectionTitle font-weight-bold text-grey200"${_scopeId3}> Production Ready &amp; Developer Friendly Vuetify Vue Admin Template </h2>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-sm-flex align-center text-center justify-center" }, [
                            createVNode("div", { class: "d-flex flex-row-reverse justify-sm-start justify-center ml-sm-0 ml-3" }, [
                              createVNode(_component_v_avatar, {
                                class: "ml-n2 avtar-border",
                                size: "28"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: user3,
                                    height: "28",
                                    alt: "usericon"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_avatar, {
                                class: "ml-n2 avtar-border",
                                size: "28"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: user2,
                                    height: "28",
                                    alt: "usericon"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_avatar, {
                                class: "ml-n2 avtar-border",
                                size: "28"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: user1,
                                    height: "28",
                                    alt: "usericon"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("h6", { class: "text-h5 ml-2 mt-2 mt-sm-0 text-grey100" }, "52,589+"),
                            createVNode("h6", { class: "text-h5 ml-2 text-grey100" }, "developers & agencies using our templates")
                          ]),
                          createVNode("h2", { class: "text-center mt-6 sectionTitle font-weight-bold text-grey200" }, " Production Ready & Developer Friendly Vuetify Vue Admin Template ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "8",
                      sm: "10",
                      "data-aos": "fade-up",
                      "data-aos-duration": "500"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-sm-flex align-center text-center justify-center" }, [
                          createVNode("div", { class: "d-flex flex-row-reverse justify-sm-start justify-center ml-sm-0 ml-3" }, [
                            createVNode(_component_v_avatar, {
                              class: "ml-n2 avtar-border",
                              size: "28"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: user3,
                                  height: "28",
                                  alt: "usericon"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_avatar, {
                              class: "ml-n2 avtar-border",
                              size: "28"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: user2,
                                  height: "28",
                                  alt: "usericon"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_avatar, {
                              class: "ml-n2 avtar-border",
                              size: "28"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: user1,
                                  height: "28",
                                  alt: "usericon"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("h6", { class: "text-h5 ml-2 mt-2 mt-sm-0 text-grey100" }, "52,589+"),
                          createVNode("h6", { class: "text-h5 ml-2 text-grey100" }, "developers & agencies using our templates")
                        ]),
                        createVNode("h2", { class: "text-center mt-6 sectionTitle font-weight-bold text-grey200" }, " Production Ready & Developer Friendly Vuetify Vue Admin Template ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-sm-16 mt-10"${_scopeId}><div class="product-slider position-relative lp_wrapper"${_scopeId}><div class="d-flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_chip, { class: "bg-primary text-white" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Demos`);
                } else {
                  return [
                    createTextVNode("Demos")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_v_row, { class: "mt-3 row-up" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(productsSlider), (demo) => {
                    _push3(`<!--[-->`);
                    if (demo.type) {
                      _push3(ssrRenderComponent(_component_v_col, {
                        cols: "12",
                        md: "4",
                        sm: "6"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_v_card, {
                              class: "border",
                              elevation: "0",
                              variant: "outlined",
                              rounded: "lg"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_v_sheet, { class: "text-center pa-5 pb-0 bg-light rounded-t-md" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="overflow-hidden position-relative rounded-t-md"${_scopeId5}>`);
                                        _push6(ssrRenderComponent(_component_v_hover, null, {
                                          default: withCtx(({ isHovering, props }, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_v_card, mergeProps({
                                                class: "mx-auto",
                                                ref_for: true
                                              }, props, { rounded: "0" }), {
                                                default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`<img${ssrRenderAttr("src", demo.img)}${ssrRenderAttr("alt", demo.img)} class="w-100"${_scopeId7}>`);
                                                    _push8(ssrRenderComponent(_component_v_overlay, {
                                                      "model-value": !!isHovering,
                                                      class: "align-center justify-center",
                                                      scrim: "rgba(0, 133, 219, 0.3)",
                                                      contained: ""
                                                    }, {
                                                      default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(_component_v_btn, {
                                                            color: "primary",
                                                            rounded: "pill",
                                                            flat: "",
                                                            target: "_blank",
                                                            href: demo.link
                                                          }, {
                                                            default: withCtx((_8, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`Live Preview`);
                                                              } else {
                                                                return [
                                                                  createTextVNode("Live Preview")
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(_component_v_btn, {
                                                              color: "primary",
                                                              rounded: "pill",
                                                              flat: "",
                                                              target: "_blank",
                                                              href: demo.link
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Live Preview")
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["href"])
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode("img", {
                                                        src: demo.img,
                                                        alt: demo.img,
                                                        class: "w-100"
                                                      }, null, 8, ["src", "alt"]),
                                                      createVNode(_component_v_overlay, {
                                                        "model-value": !!isHovering,
                                                        class: "align-center justify-center",
                                                        scrim: "rgba(0, 133, 219, 0.3)",
                                                        contained: ""
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_btn, {
                                                            color: "primary",
                                                            rounded: "pill",
                                                            flat: "",
                                                            target: "_blank",
                                                            href: demo.link
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Live Preview")
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["href"])
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["model-value"])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_v_card, mergeProps({
                                                  class: "mx-auto",
                                                  ref_for: true
                                                }, props, { rounded: "0" }), {
                                                  default: withCtx(() => [
                                                    createVNode("img", {
                                                      src: demo.img,
                                                      alt: demo.img,
                                                      class: "w-100"
                                                    }, null, 8, ["src", "alt"]),
                                                    createVNode(_component_v_overlay, {
                                                      "model-value": !!isHovering,
                                                      class: "align-center justify-center",
                                                      scrim: "rgba(0, 133, 219, 0.3)",
                                                      contained: ""
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_btn, {
                                                          color: "primary",
                                                          rounded: "pill",
                                                          flat: "",
                                                          target: "_blank",
                                                          href: demo.link
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Live Preview")
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["href"])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["model-value"])
                                                  ]),
                                                  _: 2
                                                }, 1040)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(`</div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "overflow-hidden position-relative rounded-t-md" }, [
                                            createVNode(_component_v_hover, null, {
                                              default: withCtx(({ isHovering, props }) => [
                                                createVNode(_component_v_card, mergeProps({
                                                  class: "mx-auto",
                                                  ref_for: true
                                                }, props, { rounded: "0" }), {
                                                  default: withCtx(() => [
                                                    createVNode("img", {
                                                      src: demo.img,
                                                      alt: demo.img,
                                                      class: "w-100"
                                                    }, null, 8, ["src", "alt"]),
                                                    createVNode(_component_v_overlay, {
                                                      "model-value": !!isHovering,
                                                      class: "align-center justify-center",
                                                      scrim: "rgba(0, 133, 219, 0.3)",
                                                      contained: ""
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_btn, {
                                                          color: "primary",
                                                          rounded: "pill",
                                                          flat: "",
                                                          target: "_blank",
                                                          href: demo.link
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Live Preview")
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["href"])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["model-value"])
                                                  ]),
                                                  _: 2
                                                }, 1040)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`<div class="pa-4"${_scopeId4}><h6 class="text-h6 font-weight-semibold"${_scopeId4}>${ssrInterpolate(demo.name)}</h6><p class="text-subtitle-1 text-grey100 mt-1"${_scopeId4}>Demo</p></div>`);
                                } else {
                                  return [
                                    createVNode(_component_v_sheet, { class: "text-center pa-5 pb-0 bg-light rounded-t-md" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "overflow-hidden position-relative rounded-t-md" }, [
                                          createVNode(_component_v_hover, null, {
                                            default: withCtx(({ isHovering, props }) => [
                                              createVNode(_component_v_card, mergeProps({
                                                class: "mx-auto",
                                                ref_for: true
                                              }, props, { rounded: "0" }), {
                                                default: withCtx(() => [
                                                  createVNode("img", {
                                                    src: demo.img,
                                                    alt: demo.img,
                                                    class: "w-100"
                                                  }, null, 8, ["src", "alt"]),
                                                  createVNode(_component_v_overlay, {
                                                    "model-value": !!isHovering,
                                                    class: "align-center justify-center",
                                                    scrim: "rgba(0, 133, 219, 0.3)",
                                                    contained: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_btn, {
                                                        color: "primary",
                                                        rounded: "pill",
                                                        flat: "",
                                                        target: "_blank",
                                                        href: demo.link
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Live Preview")
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["href"])
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["model-value"])
                                                ]),
                                                _: 2
                                              }, 1040)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", { class: "pa-4" }, [
                                      createVNode("h6", { class: "text-h6 font-weight-semibold" }, toDisplayString(demo.name), 1),
                                      createVNode("p", { class: "text-subtitle-1 text-grey100 mt-1" }, "Demo")
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_v_card, {
                                class: "border",
                                elevation: "0",
                                variant: "outlined",
                                rounded: "lg"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_sheet, { class: "text-center pa-5 pb-0 bg-light rounded-t-md" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "overflow-hidden position-relative rounded-t-md" }, [
                                        createVNode(_component_v_hover, null, {
                                          default: withCtx(({ isHovering, props }) => [
                                            createVNode(_component_v_card, mergeProps({
                                              class: "mx-auto",
                                              ref_for: true
                                            }, props, { rounded: "0" }), {
                                              default: withCtx(() => [
                                                createVNode("img", {
                                                  src: demo.img,
                                                  alt: demo.img,
                                                  class: "w-100"
                                                }, null, 8, ["src", "alt"]),
                                                createVNode(_component_v_overlay, {
                                                  "model-value": !!isHovering,
                                                  class: "align-center justify-center",
                                                  scrim: "rgba(0, 133, 219, 0.3)",
                                                  contained: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, {
                                                      color: "primary",
                                                      rounded: "pill",
                                                      flat: "",
                                                      target: "_blank",
                                                      href: demo.link
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Live Preview")
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["href"])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["model-value"])
                                              ]),
                                              _: 2
                                            }, 1040)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "pa-4" }, [
                                    createVNode("h6", { class: "text-h6 font-weight-semibold" }, toDisplayString(demo.name), 1),
                                    createVNode("p", { class: "text-subtitle-1 text-grey100 mt-1" }, "Demo")
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<!--]-->`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(productsSlider), (demo) => {
                      return openBlock(), createBlock(Fragment, {
                        key: demo.img
                      }, [
                        demo.type ? (openBlock(), createBlock(_component_v_col, {
                          key: 0,
                          cols: "12",
                          md: "4",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              class: "border",
                              elevation: "0",
                              variant: "outlined",
                              rounded: "lg"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_sheet, { class: "text-center pa-5 pb-0 bg-light rounded-t-md" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "overflow-hidden position-relative rounded-t-md" }, [
                                      createVNode(_component_v_hover, null, {
                                        default: withCtx(({ isHovering, props }) => [
                                          createVNode(_component_v_card, mergeProps({
                                            class: "mx-auto",
                                            ref_for: true
                                          }, props, { rounded: "0" }), {
                                            default: withCtx(() => [
                                              createVNode("img", {
                                                src: demo.img,
                                                alt: demo.img,
                                                class: "w-100"
                                              }, null, 8, ["src", "alt"]),
                                              createVNode(_component_v_overlay, {
                                                "model-value": !!isHovering,
                                                class: "align-center justify-center",
                                                scrim: "rgba(0, 133, 219, 0.3)",
                                                contained: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_btn, {
                                                    color: "primary",
                                                    rounded: "pill",
                                                    flat: "",
                                                    target: "_blank",
                                                    href: demo.link
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Live Preview")
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["href"])
                                                ]),
                                                _: 2
                                              }, 1032, ["model-value"])
                                            ]),
                                            _: 2
                                          }, 1040)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { class: "pa-4" }, [
                                  createVNode("h6", { class: "text-h6 font-weight-semibold" }, toDisplayString(demo.name), 1),
                                  createVNode("p", { class: "text-subtitle-1 text-grey100 mt-1" }, "Demo")
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ], 64);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="d-flex justify-center mt-sm-12 mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_chip, { class: "bg-primary text-white" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Apps`);
                } else {
                  return [
                    createTextVNode("Apps")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_v_row, { class: "mt-3 row-up" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(productsSlider), (demo) => {
                    _push3(`<!--[-->`);
                    if (!demo.type) {
                      _push3(ssrRenderComponent(_component_v_col, {
                        cols: "12",
                        md: "4",
                        sm: "6"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_v_card, {
                              class: "border",
                              elevation: "0",
                              variant: "outlined",
                              rounded: "lg"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_v_sheet, { class: "text-center pa-5 pb-0 bg-light rounded-t-md" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="overflow-hidden position-relative rounded-t-md"${_scopeId5}>`);
                                        _push6(ssrRenderComponent(_component_v_hover, null, {
                                          default: withCtx(({ isHovering, props }, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_v_card, mergeProps({
                                                class: "mx-auto",
                                                ref_for: true
                                              }, props, { rounded: "0" }), {
                                                default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`<img${ssrRenderAttr("src", demo.img)}${ssrRenderAttr("alt", demo.img)} class="w-100"${_scopeId7}>`);
                                                    _push8(ssrRenderComponent(_component_v_overlay, {
                                                      "model-value": !!isHovering,
                                                      class: "align-center justify-center",
                                                      scrim: "rgba(0, 133, 219, 0.3)",
                                                      contained: ""
                                                    }, {
                                                      default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(_component_v_btn, {
                                                            color: "primary",
                                                            rounded: "pill",
                                                            flat: "",
                                                            target: "_blank",
                                                            href: demo.link
                                                          }, {
                                                            default: withCtx((_8, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`Live Preview`);
                                                              } else {
                                                                return [
                                                                  createTextVNode("Live Preview")
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(_component_v_btn, {
                                                              color: "primary",
                                                              rounded: "pill",
                                                              flat: "",
                                                              target: "_blank",
                                                              href: demo.link
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Live Preview")
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["href"])
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode("img", {
                                                        src: demo.img,
                                                        alt: demo.img,
                                                        class: "w-100"
                                                      }, null, 8, ["src", "alt"]),
                                                      createVNode(_component_v_overlay, {
                                                        "model-value": !!isHovering,
                                                        class: "align-center justify-center",
                                                        scrim: "rgba(0, 133, 219, 0.3)",
                                                        contained: ""
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_btn, {
                                                            color: "primary",
                                                            rounded: "pill",
                                                            flat: "",
                                                            target: "_blank",
                                                            href: demo.link
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Live Preview")
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["href"])
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["model-value"])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_v_card, mergeProps({
                                                  class: "mx-auto",
                                                  ref_for: true
                                                }, props, { rounded: "0" }), {
                                                  default: withCtx(() => [
                                                    createVNode("img", {
                                                      src: demo.img,
                                                      alt: demo.img,
                                                      class: "w-100"
                                                    }, null, 8, ["src", "alt"]),
                                                    createVNode(_component_v_overlay, {
                                                      "model-value": !!isHovering,
                                                      class: "align-center justify-center",
                                                      scrim: "rgba(0, 133, 219, 0.3)",
                                                      contained: ""
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_btn, {
                                                          color: "primary",
                                                          rounded: "pill",
                                                          flat: "",
                                                          target: "_blank",
                                                          href: demo.link
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Live Preview")
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["href"])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["model-value"])
                                                  ]),
                                                  _: 2
                                                }, 1040)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(`</div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "overflow-hidden position-relative rounded-t-md" }, [
                                            createVNode(_component_v_hover, null, {
                                              default: withCtx(({ isHovering, props }) => [
                                                createVNode(_component_v_card, mergeProps({
                                                  class: "mx-auto",
                                                  ref_for: true
                                                }, props, { rounded: "0" }), {
                                                  default: withCtx(() => [
                                                    createVNode("img", {
                                                      src: demo.img,
                                                      alt: demo.img,
                                                      class: "w-100"
                                                    }, null, 8, ["src", "alt"]),
                                                    createVNode(_component_v_overlay, {
                                                      "model-value": !!isHovering,
                                                      class: "align-center justify-center",
                                                      scrim: "rgba(0, 133, 219, 0.3)",
                                                      contained: ""
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_btn, {
                                                          color: "primary",
                                                          rounded: "pill",
                                                          flat: "",
                                                          target: "_blank",
                                                          href: demo.link
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Live Preview")
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["href"])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["model-value"])
                                                  ]),
                                                  _: 2
                                                }, 1040)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`<div class="pa-4"${_scopeId4}><h6 class="text-h6 font-weight-semibold"${_scopeId4}>${ssrInterpolate(demo.name)}</h6><p class="text-subtitle-1 text-grey100 mt-1"${_scopeId4}>Application</p></div>`);
                                } else {
                                  return [
                                    createVNode(_component_v_sheet, { class: "text-center pa-5 pb-0 bg-light rounded-t-md" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "overflow-hidden position-relative rounded-t-md" }, [
                                          createVNode(_component_v_hover, null, {
                                            default: withCtx(({ isHovering, props }) => [
                                              createVNode(_component_v_card, mergeProps({
                                                class: "mx-auto",
                                                ref_for: true
                                              }, props, { rounded: "0" }), {
                                                default: withCtx(() => [
                                                  createVNode("img", {
                                                    src: demo.img,
                                                    alt: demo.img,
                                                    class: "w-100"
                                                  }, null, 8, ["src", "alt"]),
                                                  createVNode(_component_v_overlay, {
                                                    "model-value": !!isHovering,
                                                    class: "align-center justify-center",
                                                    scrim: "rgba(0, 133, 219, 0.3)",
                                                    contained: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_btn, {
                                                        color: "primary",
                                                        rounded: "pill",
                                                        flat: "",
                                                        target: "_blank",
                                                        href: demo.link
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Live Preview")
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["href"])
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["model-value"])
                                                ]),
                                                _: 2
                                              }, 1040)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", { class: "pa-4" }, [
                                      createVNode("h6", { class: "text-h6 font-weight-semibold" }, toDisplayString(demo.name), 1),
                                      createVNode("p", { class: "text-subtitle-1 text-grey100 mt-1" }, "Application")
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_v_card, {
                                class: "border",
                                elevation: "0",
                                variant: "outlined",
                                rounded: "lg"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_sheet, { class: "text-center pa-5 pb-0 bg-light rounded-t-md" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "overflow-hidden position-relative rounded-t-md" }, [
                                        createVNode(_component_v_hover, null, {
                                          default: withCtx(({ isHovering, props }) => [
                                            createVNode(_component_v_card, mergeProps({
                                              class: "mx-auto",
                                              ref_for: true
                                            }, props, { rounded: "0" }), {
                                              default: withCtx(() => [
                                                createVNode("img", {
                                                  src: demo.img,
                                                  alt: demo.img,
                                                  class: "w-100"
                                                }, null, 8, ["src", "alt"]),
                                                createVNode(_component_v_overlay, {
                                                  "model-value": !!isHovering,
                                                  class: "align-center justify-center",
                                                  scrim: "rgba(0, 133, 219, 0.3)",
                                                  contained: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, {
                                                      color: "primary",
                                                      rounded: "pill",
                                                      flat: "",
                                                      target: "_blank",
                                                      href: demo.link
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Live Preview")
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["href"])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["model-value"])
                                              ]),
                                              _: 2
                                            }, 1040)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "pa-4" }, [
                                    createVNode("h6", { class: "text-h6 font-weight-semibold" }, toDisplayString(demo.name), 1),
                                    createVNode("p", { class: "text-subtitle-1 text-grey100 mt-1" }, "Application")
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<!--]-->`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(productsSlider), (demo) => {
                      return openBlock(), createBlock(Fragment, {
                        key: demo.img
                      }, [
                        !demo.type ? (openBlock(), createBlock(_component_v_col, {
                          key: 0,
                          cols: "12",
                          md: "4",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              class: "border",
                              elevation: "0",
                              variant: "outlined",
                              rounded: "lg"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_sheet, { class: "text-center pa-5 pb-0 bg-light rounded-t-md" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "overflow-hidden position-relative rounded-t-md" }, [
                                      createVNode(_component_v_hover, null, {
                                        default: withCtx(({ isHovering, props }) => [
                                          createVNode(_component_v_card, mergeProps({
                                            class: "mx-auto",
                                            ref_for: true
                                          }, props, { rounded: "0" }), {
                                            default: withCtx(() => [
                                              createVNode("img", {
                                                src: demo.img,
                                                alt: demo.img,
                                                class: "w-100"
                                              }, null, 8, ["src", "alt"]),
                                              createVNode(_component_v_overlay, {
                                                "model-value": !!isHovering,
                                                class: "align-center justify-center",
                                                scrim: "rgba(0, 133, 219, 0.3)",
                                                contained: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_btn, {
                                                    color: "primary",
                                                    rounded: "pill",
                                                    flat: "",
                                                    target: "_blank",
                                                    href: demo.link
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Live Preview")
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["href"])
                                                ]),
                                                _: 2
                                              }, 1032, ["model-value"])
                                            ]),
                                            _: 2
                                          }, 1040)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { class: "pa-4" }, [
                                  createVNode("h6", { class: "text-h6 font-weight-semibold" }, toDisplayString(demo.name), 1),
                                  createVNode("p", { class: "text-subtitle-1 text-grey100 mt-1" }, "Application")
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ], 64);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="d-flex justify-center mt-sm-12 mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_chip, { class: "bg-primary text-white" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Frontend Pages`);
                } else {
                  return [
                    createTextVNode("Frontend Pages")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_v_row, { class: "mt-3 row-up" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(FrontPageMenu), (demo) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      md: "4",
                      sm: "6"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_card, {
                            class: "border",
                            elevation: "0",
                            variant: "outlined",
                            rounded: "lg",
                            "data-aos": "fade-up",
                            "data-aos-delay": "600",
                            "data-aos-duration": "1000"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_sheet, { class: "text-center pa-5 pb-0 bg-light rounded-t-md" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="overflow-hidden position-relative rounded-t-md"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_v_hover, null, {
                                        default: withCtx(({ isHovering, props }, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_card, mergeProps({
                                              class: "mx-auto",
                                              ref_for: true
                                            }, props, { rounded: "0" }), {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<img${ssrRenderAttr("src", demo.img)}${ssrRenderAttr("alt", demo.img)} class="w-100"${_scopeId7}>`);
                                                  _push8(ssrRenderComponent(_component_v_overlay, {
                                                    "model-value": !!isHovering,
                                                    class: "align-center justify-center",
                                                    scrim: "rgba(0, 133, 219, 0.3)",
                                                    contained: ""
                                                  }, {
                                                    default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_v_btn, {
                                                          color: "primary",
                                                          rounded: "pill",
                                                          flat: "",
                                                          target: "_blank",
                                                          href: demo.link
                                                        }, {
                                                          default: withCtx((_8, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`Live Preview`);
                                                            } else {
                                                              return [
                                                                createTextVNode("Live Preview")
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_btn, {
                                                            color: "primary",
                                                            rounded: "pill",
                                                            flat: "",
                                                            target: "_blank",
                                                            href: demo.link
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Live Preview")
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["href"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode("img", {
                                                      src: demo.img,
                                                      alt: demo.img,
                                                      class: "w-100"
                                                    }, null, 8, ["src", "alt"]),
                                                    createVNode(_component_v_overlay, {
                                                      "model-value": !!isHovering,
                                                      class: "align-center justify-center",
                                                      scrim: "rgba(0, 133, 219, 0.3)",
                                                      contained: ""
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_btn, {
                                                          color: "primary",
                                                          rounded: "pill",
                                                          flat: "",
                                                          target: "_blank",
                                                          href: demo.link
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Live Preview")
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["href"])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["model-value"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_card, mergeProps({
                                                class: "mx-auto",
                                                ref_for: true
                                              }, props, { rounded: "0" }), {
                                                default: withCtx(() => [
                                                  createVNode("img", {
                                                    src: demo.img,
                                                    alt: demo.img,
                                                    class: "w-100"
                                                  }, null, 8, ["src", "alt"]),
                                                  createVNode(_component_v_overlay, {
                                                    "model-value": !!isHovering,
                                                    class: "align-center justify-center",
                                                    scrim: "rgba(0, 133, 219, 0.3)",
                                                    contained: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_btn, {
                                                        color: "primary",
                                                        rounded: "pill",
                                                        flat: "",
                                                        target: "_blank",
                                                        href: demo.link
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Live Preview")
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["href"])
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["model-value"])
                                                ]),
                                                _: 2
                                              }, 1040)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "overflow-hidden position-relative rounded-t-md" }, [
                                          createVNode(_component_v_hover, null, {
                                            default: withCtx(({ isHovering, props }) => [
                                              createVNode(_component_v_card, mergeProps({
                                                class: "mx-auto",
                                                ref_for: true
                                              }, props, { rounded: "0" }), {
                                                default: withCtx(() => [
                                                  createVNode("img", {
                                                    src: demo.img,
                                                    alt: demo.img,
                                                    class: "w-100"
                                                  }, null, 8, ["src", "alt"]),
                                                  createVNode(_component_v_overlay, {
                                                    "model-value": !!isHovering,
                                                    class: "align-center justify-center",
                                                    scrim: "rgba(0, 133, 219, 0.3)",
                                                    contained: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_btn, {
                                                        color: "primary",
                                                        rounded: "pill",
                                                        flat: "",
                                                        target: "_blank",
                                                        href: demo.link
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Live Preview")
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["href"])
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["model-value"])
                                                ]),
                                                _: 2
                                              }, 1040)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<div class="pa-4"${_scopeId4}><h6 class="text-h6 font-weight-semibold"${_scopeId4}>${ssrInterpolate(demo.name)}</h6><p class="text-subtitle-1 textSecondary mt-1"${_scopeId4}>Frontend Pages</p></div>`);
                              } else {
                                return [
                                  createVNode(_component_v_sheet, { class: "text-center pa-5 pb-0 bg-light rounded-t-md" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "overflow-hidden position-relative rounded-t-md" }, [
                                        createVNode(_component_v_hover, null, {
                                          default: withCtx(({ isHovering, props }) => [
                                            createVNode(_component_v_card, mergeProps({
                                              class: "mx-auto",
                                              ref_for: true
                                            }, props, { rounded: "0" }), {
                                              default: withCtx(() => [
                                                createVNode("img", {
                                                  src: demo.img,
                                                  alt: demo.img,
                                                  class: "w-100"
                                                }, null, 8, ["src", "alt"]),
                                                createVNode(_component_v_overlay, {
                                                  "model-value": !!isHovering,
                                                  class: "align-center justify-center",
                                                  scrim: "rgba(0, 133, 219, 0.3)",
                                                  contained: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, {
                                                      color: "primary",
                                                      rounded: "pill",
                                                      flat: "",
                                                      target: "_blank",
                                                      href: demo.link
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Live Preview")
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["href"])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["model-value"])
                                              ]),
                                              _: 2
                                            }, 1040)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "pa-4" }, [
                                    createVNode("h6", { class: "text-h6 font-weight-semibold" }, toDisplayString(demo.name), 1),
                                    createVNode("p", { class: "text-subtitle-1 textSecondary mt-1" }, "Frontend Pages")
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_card, {
                              class: "border",
                              elevation: "0",
                              variant: "outlined",
                              rounded: "lg",
                              "data-aos": "fade-up",
                              "data-aos-delay": "600",
                              "data-aos-duration": "1000"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_sheet, { class: "text-center pa-5 pb-0 bg-light rounded-t-md" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "overflow-hidden position-relative rounded-t-md" }, [
                                      createVNode(_component_v_hover, null, {
                                        default: withCtx(({ isHovering, props }) => [
                                          createVNode(_component_v_card, mergeProps({
                                            class: "mx-auto",
                                            ref_for: true
                                          }, props, { rounded: "0" }), {
                                            default: withCtx(() => [
                                              createVNode("img", {
                                                src: demo.img,
                                                alt: demo.img,
                                                class: "w-100"
                                              }, null, 8, ["src", "alt"]),
                                              createVNode(_component_v_overlay, {
                                                "model-value": !!isHovering,
                                                class: "align-center justify-center",
                                                scrim: "rgba(0, 133, 219, 0.3)",
                                                contained: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_btn, {
                                                    color: "primary",
                                                    rounded: "pill",
                                                    flat: "",
                                                    target: "_blank",
                                                    href: demo.link
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Live Preview")
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["href"])
                                                ]),
                                                _: 2
                                              }, 1032, ["model-value"])
                                            ]),
                                            _: 2
                                          }, 1040)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { class: "pa-4" }, [
                                  createVNode("h6", { class: "text-h6 font-weight-semibold" }, toDisplayString(demo.name), 1),
                                  createVNode("p", { class: "text-subtitle-1 textSecondary mt-1" }, "Frontend Pages")
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(FrontPageMenu), (demo) => {
                      return openBlock(), createBlock(_component_v_col, {
                        key: demo.img,
                        cols: "12",
                        md: "4",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            class: "border",
                            elevation: "0",
                            variant: "outlined",
                            rounded: "lg",
                            "data-aos": "fade-up",
                            "data-aos-delay": "600",
                            "data-aos-duration": "1000"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_sheet, { class: "text-center pa-5 pb-0 bg-light rounded-t-md" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "overflow-hidden position-relative rounded-t-md" }, [
                                    createVNode(_component_v_hover, null, {
                                      default: withCtx(({ isHovering, props }) => [
                                        createVNode(_component_v_card, mergeProps({
                                          class: "mx-auto",
                                          ref_for: true
                                        }, props, { rounded: "0" }), {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              src: demo.img,
                                              alt: demo.img,
                                              class: "w-100"
                                            }, null, 8, ["src", "alt"]),
                                            createVNode(_component_v_overlay, {
                                              "model-value": !!isHovering,
                                              class: "align-center justify-center",
                                              scrim: "rgba(0, 133, 219, 0.3)",
                                              contained: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_btn, {
                                                  color: "primary",
                                                  rounded: "pill",
                                                  flat: "",
                                                  target: "_blank",
                                                  href: demo.link
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Live Preview")
                                                  ]),
                                                  _: 2
                                                }, 1032, ["href"])
                                              ]),
                                              _: 2
                                            }, 1032, ["model-value"])
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "pa-4" }, [
                                createVNode("h6", { class: "text-h6 font-weight-semibold" }, toDisplayString(demo.name), 1),
                                createVNode("p", { class: "text-subtitle-1 textSecondary mt-1" }, "Frontend Pages")
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
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(_component_v_row, { class: "justify-center" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    lg: "8",
                    sm: "10",
                    "data-aos": "fade-up",
                    "data-aos-duration": "500"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-sm-flex align-center text-center justify-center" }, [
                        createVNode("div", { class: "d-flex flex-row-reverse justify-sm-start justify-center ml-sm-0 ml-3" }, [
                          createVNode(_component_v_avatar, {
                            class: "ml-n2 avtar-border",
                            size: "28"
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: user3,
                                height: "28",
                                alt: "usericon"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_avatar, {
                            class: "ml-n2 avtar-border",
                            size: "28"
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: user2,
                                height: "28",
                                alt: "usericon"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_avatar, {
                            class: "ml-n2 avtar-border",
                            size: "28"
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: user1,
                                height: "28",
                                alt: "usericon"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("h6", { class: "text-h5 ml-2 mt-2 mt-sm-0 text-grey100" }, "52,589+"),
                        createVNode("h6", { class: "text-h5 ml-2 text-grey100" }, "developers & agencies using our templates")
                      ]),
                      createVNode("h2", { class: "text-center mt-6 sectionTitle font-weight-bold text-grey200" }, " Production Ready & Developer Friendly Vuetify Vue Admin Template ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("div", { class: "mt-sm-16 mt-10" }, [
                createVNode("div", { class: "product-slider position-relative lp_wrapper" }, [
                  createVNode("div", { class: "d-flex justify-center" }, [
                    createVNode(_component_v_chip, { class: "bg-primary text-white" }, {
                      default: withCtx(() => [
                        createTextVNode("Demos")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_v_row, { class: "mt-3 row-up" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(productsSlider), (demo) => {
                        return openBlock(), createBlock(Fragment, {
                          key: demo.img
                        }, [
                          demo.type ? (openBlock(), createBlock(_component_v_col, {
                            key: 0,
                            cols: "12",
                            md: "4",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, {
                                class: "border",
                                elevation: "0",
                                variant: "outlined",
                                rounded: "lg"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_sheet, { class: "text-center pa-5 pb-0 bg-light rounded-t-md" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "overflow-hidden position-relative rounded-t-md" }, [
                                        createVNode(_component_v_hover, null, {
                                          default: withCtx(({ isHovering, props }) => [
                                            createVNode(_component_v_card, mergeProps({
                                              class: "mx-auto",
                                              ref_for: true
                                            }, props, { rounded: "0" }), {
                                              default: withCtx(() => [
                                                createVNode("img", {
                                                  src: demo.img,
                                                  alt: demo.img,
                                                  class: "w-100"
                                                }, null, 8, ["src", "alt"]),
                                                createVNode(_component_v_overlay, {
                                                  "model-value": !!isHovering,
                                                  class: "align-center justify-center",
                                                  scrim: "rgba(0, 133, 219, 0.3)",
                                                  contained: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, {
                                                      color: "primary",
                                                      rounded: "pill",
                                                      flat: "",
                                                      target: "_blank",
                                                      href: demo.link
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Live Preview")
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["href"])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["model-value"])
                                              ]),
                                              _: 2
                                            }, 1040)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "pa-4" }, [
                                    createVNode("h6", { class: "text-h6 font-weight-semibold" }, toDisplayString(demo.name), 1),
                                    createVNode("p", { class: "text-subtitle-1 text-grey100 mt-1" }, "Demo")
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true)
                        ], 64);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "d-flex justify-center mt-sm-12 mt-6" }, [
                    createVNode(_component_v_chip, { class: "bg-primary text-white" }, {
                      default: withCtx(() => [
                        createTextVNode("Apps")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_v_row, { class: "mt-3 row-up" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(productsSlider), (demo) => {
                        return openBlock(), createBlock(Fragment, {
                          key: demo.img
                        }, [
                          !demo.type ? (openBlock(), createBlock(_component_v_col, {
                            key: 0,
                            cols: "12",
                            md: "4",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, {
                                class: "border",
                                elevation: "0",
                                variant: "outlined",
                                rounded: "lg"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_sheet, { class: "text-center pa-5 pb-0 bg-light rounded-t-md" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "overflow-hidden position-relative rounded-t-md" }, [
                                        createVNode(_component_v_hover, null, {
                                          default: withCtx(({ isHovering, props }) => [
                                            createVNode(_component_v_card, mergeProps({
                                              class: "mx-auto",
                                              ref_for: true
                                            }, props, { rounded: "0" }), {
                                              default: withCtx(() => [
                                                createVNode("img", {
                                                  src: demo.img,
                                                  alt: demo.img,
                                                  class: "w-100"
                                                }, null, 8, ["src", "alt"]),
                                                createVNode(_component_v_overlay, {
                                                  "model-value": !!isHovering,
                                                  class: "align-center justify-center",
                                                  scrim: "rgba(0, 133, 219, 0.3)",
                                                  contained: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, {
                                                      color: "primary",
                                                      rounded: "pill",
                                                      flat: "",
                                                      target: "_blank",
                                                      href: demo.link
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Live Preview")
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["href"])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["model-value"])
                                              ]),
                                              _: 2
                                            }, 1040)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "pa-4" }, [
                                    createVNode("h6", { class: "text-h6 font-weight-semibold" }, toDisplayString(demo.name), 1),
                                    createVNode("p", { class: "text-subtitle-1 text-grey100 mt-1" }, "Application")
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true)
                        ], 64);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "d-flex justify-center mt-sm-12 mt-6" }, [
                    createVNode(_component_v_chip, { class: "bg-primary text-white" }, {
                      default: withCtx(() => [
                        createTextVNode("Frontend Pages")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_v_row, { class: "mt-3 row-up" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(FrontPageMenu), (demo) => {
                        return openBlock(), createBlock(_component_v_col, {
                          key: demo.img,
                          cols: "12",
                          md: "4",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              class: "border",
                              elevation: "0",
                              variant: "outlined",
                              rounded: "lg",
                              "data-aos": "fade-up",
                              "data-aos-delay": "600",
                              "data-aos-duration": "1000"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_sheet, { class: "text-center pa-5 pb-0 bg-light rounded-t-md" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "overflow-hidden position-relative rounded-t-md" }, [
                                      createVNode(_component_v_hover, null, {
                                        default: withCtx(({ isHovering, props }) => [
                                          createVNode(_component_v_card, mergeProps({
                                            class: "mx-auto",
                                            ref_for: true
                                          }, props, { rounded: "0" }), {
                                            default: withCtx(() => [
                                              createVNode("img", {
                                                src: demo.img,
                                                alt: demo.img,
                                                class: "w-100"
                                              }, null, 8, ["src", "alt"]),
                                              createVNode(_component_v_overlay, {
                                                "model-value": !!isHovering,
                                                class: "align-center justify-center",
                                                scrim: "rgba(0, 133, 219, 0.3)",
                                                contained: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_btn, {
                                                    color: "primary",
                                                    rounded: "pill",
                                                    flat: "",
                                                    target: "_blank",
                                                    href: demo.link
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Live Preview")
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["href"])
                                                ]),
                                                _: 2
                                              }, 1032, ["model-value"])
                                            ]),
                                            _: 2
                                          }, 1040)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { class: "pa-4" }, [
                                  createVNode("h6", { class: "text-h6 font-weight-semibold" }, toDisplayString(demo.name), 1),
                                  createVNode("p", { class: "text-subtitle-1 textSecondary mt-1" }, "Frontend Pages")
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
                  })
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landingpage/section/ourProducts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lp-wraper" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(Revolution, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1$1, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3$1, null, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/theme-pages/landingpage/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-dRkje4Nh.mjs.map
