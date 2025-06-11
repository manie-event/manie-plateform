import { defineComponent, resolveComponent, mergeProps, withCtx, unref, createTextVNode, createBlock, createCommentVNode, createVNode, openBlock, Fragment, renderList, toDisplayString, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { P as Packages } from './Layout-pJxOOMlF.mjs';
import { CircleXIcon, CircleCheckIcon } from 'vue-tabler-icons';
import { p as publicAssetsURL } from '../routes/renderer.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Packages",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-96 bg-surface" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_container, {
        class: "max-width-1218 package py-0",
        id: "pricing"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pb-12 text-center"${_scopeId}><h2 class="display-1 font-weight-bold textPrimary"${_scopeId}>Fair pricing for everyone.</h2><p class="text-grey100 pt-4 text-17 lh-32"${_scopeId}> Our robust analytics offer rich insights into the information buyers want, informing where teams. </p></div>`);
            _push2(ssrRenderComponent(_component_v_row, { class: "d-flex justify-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(Packages), (card) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      lg: "3",
                      sm: "6",
                      key: card.caption
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_card, {
                            elevation: "0",
                            class: "rounded-16 pa-6 border"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="pb-4"${_scopeId4}><div class="d-flex ga-2 align-center"${_scopeId4}><h4 class="text-20 font-weight-semibold textPrimary mb-4"${_scopeId4}>${ssrInterpolate(card.caption)}</h4>`);
                                if (card.tagtext) {
                                  _push5(ssrRenderComponent(_component_v_chip, {
                                    size: "small",
                                    class: "mt-sm-n4 font-weight-bold",
                                    rounded: "md",
                                    color: "primary"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`Popular`);
                                      } else {
                                        return [
                                          createTextVNode("Popular")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</div><p class="text-14 text-grey100 font-weight-medium"${_scopeId4}>${ssrInterpolate(card.subtext)}</p></div><div class="d-flex align-center mt-3"${_scopeId4}><h2 class="display-2 text-primary font-weight-bold"${_scopeId4}>$${ssrInterpolate(card.price)}</h2><span class="text-grey100 mt-4 ms-2 text-16"${_scopeId4}>/${ssrInterpolate(card.period)}</span></div>`);
                                _push5(ssrRenderComponent(_component_v_list, { class: "mb-0 pl-0 bg-transparent pt-5" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(card.list, (desc) => {
                                        _push6(ssrRenderComponent(_component_v_list_item, {
                                          class: "pa-0",
                                          key: desc.listtitle
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              if (desc.status) {
                                                _push7(ssrRenderComponent(_component_v_list_item_title, {
                                                  class: [{ "opacity-80": desc.disable }, "text-14 d-flex align-center font-weight-medium"]
                                                }, {
                                                  default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                    var _a;
                                                    if (_push8) {
                                                      if (desc.icon) {
                                                        _push8(ssrRenderComponent(unref(CircleXIcon), {
                                                          "stroke-width": "1.5",
                                                          size: "20",
                                                          class: "mr-2 text-error"
                                                        }, null, _parent8, _scopeId7));
                                                      } else {
                                                        _push8(`<!---->`);
                                                      }
                                                      _push8(`<span${_scopeId7}>${(_a = desc.listtitle) != null ? _a : ""}</span>`);
                                                    } else {
                                                      return [
                                                        desc.icon ? (openBlock(), createBlock(unref(CircleXIcon), {
                                                          key: 0,
                                                          "stroke-width": "1.5",
                                                          size: "20",
                                                          class: "mr-2 text-error"
                                                        })) : createCommentVNode("", true),
                                                        createVNode("span", {
                                                          innerHTML: desc.listtitle
                                                        }, null, 8, ["innerHTML"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent7, _scopeId6));
                                              } else {
                                                _push7(ssrRenderComponent(_component_v_list_item_title, {
                                                  class: [{ "opacity-50": desc.disable }, "text-14 d-flex align-center font-weight-medium"]
                                                }, {
                                                  default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                    var _a;
                                                    if (_push8) {
                                                      if (desc.icon) {
                                                        _push8(ssrRenderComponent(unref(CircleCheckIcon), {
                                                          "stroke-width": "1.5",
                                                          size: "20",
                                                          class: "mr-2 text-primary"
                                                        }, null, _parent8, _scopeId7));
                                                      } else {
                                                        _push8(`<!---->`);
                                                      }
                                                      _push8(`<span${_scopeId7}>${(_a = desc.listtitle) != null ? _a : ""}</span>`);
                                                    } else {
                                                      return [
                                                        desc.icon ? (openBlock(), createBlock(unref(CircleCheckIcon), {
                                                          key: 0,
                                                          "stroke-width": "1.5",
                                                          size: "20",
                                                          class: "mr-2 text-primary"
                                                        })) : createCommentVNode("", true),
                                                        createVNode("span", {
                                                          innerHTML: desc.listtitle
                                                        }, null, 8, ["innerHTML"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent7, _scopeId6));
                                              }
                                            } else {
                                              return [
                                                desc.status ? (openBlock(), createBlock(_component_v_list_item_title, {
                                                  key: 0,
                                                  class: [{ "opacity-80": desc.disable }, "text-14 d-flex align-center font-weight-medium"]
                                                }, {
                                                  default: withCtx(() => [
                                                    desc.icon ? (openBlock(), createBlock(unref(CircleXIcon), {
                                                      key: 0,
                                                      "stroke-width": "1.5",
                                                      size: "20",
                                                      class: "mr-2 text-error"
                                                    })) : createCommentVNode("", true),
                                                    createVNode("span", {
                                                      innerHTML: desc.listtitle
                                                    }, null, 8, ["innerHTML"])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"])) : (openBlock(), createBlock(_component_v_list_item_title, {
                                                  key: 1,
                                                  class: [{ "opacity-50": desc.disable }, "text-14 d-flex align-center font-weight-medium"]
                                                }, {
                                                  default: withCtx(() => [
                                                    desc.icon ? (openBlock(), createBlock(unref(CircleCheckIcon), {
                                                      key: 0,
                                                      "stroke-width": "1.5",
                                                      size: "20",
                                                      class: "mr-2 text-primary"
                                                    })) : createCommentVNode("", true),
                                                    createVNode("span", {
                                                      innerHTML: desc.listtitle
                                                    }, null, 8, ["innerHTML"])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"]))
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(card.list, (desc) => {
                                          return openBlock(), createBlock(_component_v_list_item, {
                                            class: "pa-0",
                                            key: desc.listtitle
                                          }, {
                                            default: withCtx(() => [
                                              desc.status ? (openBlock(), createBlock(_component_v_list_item_title, {
                                                key: 0,
                                                class: [{ "opacity-80": desc.disable }, "text-14 d-flex align-center font-weight-medium"]
                                              }, {
                                                default: withCtx(() => [
                                                  desc.icon ? (openBlock(), createBlock(unref(CircleXIcon), {
                                                    key: 0,
                                                    "stroke-width": "1.5",
                                                    size: "20",
                                                    class: "mr-2 text-error"
                                                  })) : createCommentVNode("", true),
                                                  createVNode("span", {
                                                    innerHTML: desc.listtitle
                                                  }, null, 8, ["innerHTML"])
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])) : (openBlock(), createBlock(_component_v_list_item_title, {
                                                key: 1,
                                                class: [{ "opacity-50": desc.disable }, "text-14 d-flex align-center font-weight-medium"]
                                              }, {
                                                default: withCtx(() => [
                                                  desc.icon ? (openBlock(), createBlock(unref(CircleCheckIcon), {
                                                    key: 0,
                                                    "stroke-width": "1.5",
                                                    size: "20",
                                                    class: "mr-2 text-primary"
                                                  })) : createCommentVNode("", true),
                                                  createVNode("span", {
                                                    innerHTML: desc.listtitle
                                                  }, null, 8, ["innerHTML"])
                                                ]),
                                                _: 2
                                              }, 1032, ["class"]))
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  color: "primary",
                                  size: "large",
                                  class: "mt-4 font-weight-medium",
                                  rounded: "pill",
                                  href: "card.url",
                                  target: "_blank",
                                  flat: "",
                                  block: ""
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(card.buttontext)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(card.buttontext), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode("div", { class: "pb-4" }, [
                                    createVNode("div", { class: "d-flex ga-2 align-center" }, [
                                      createVNode("h4", {
                                        class: "text-20 font-weight-semibold textPrimary mb-4",
                                        textContent: toDisplayString(card.caption)
                                      }, null, 8, ["textContent"]),
                                      card.tagtext ? (openBlock(), createBlock(_component_v_chip, {
                                        key: 0,
                                        size: "small",
                                        class: "mt-sm-n4 font-weight-bold",
                                        rounded: "md",
                                        color: "primary"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Popular")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ]),
                                    createVNode("p", { class: "text-14 text-grey100 font-weight-medium" }, toDisplayString(card.subtext), 1)
                                  ]),
                                  createVNode("div", { class: "d-flex align-center mt-3" }, [
                                    createVNode("h2", { class: "display-2 text-primary font-weight-bold" }, "$" + toDisplayString(card.price), 1),
                                    createVNode("span", { class: "text-grey100 mt-4 ms-2 text-16" }, "/" + toDisplayString(card.period), 1)
                                  ]),
                                  createVNode(_component_v_list, { class: "mb-0 pl-0 bg-transparent pt-5" }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(card.list, (desc) => {
                                        return openBlock(), createBlock(_component_v_list_item, {
                                          class: "pa-0",
                                          key: desc.listtitle
                                        }, {
                                          default: withCtx(() => [
                                            desc.status ? (openBlock(), createBlock(_component_v_list_item_title, {
                                              key: 0,
                                              class: [{ "opacity-80": desc.disable }, "text-14 d-flex align-center font-weight-medium"]
                                            }, {
                                              default: withCtx(() => [
                                                desc.icon ? (openBlock(), createBlock(unref(CircleXIcon), {
                                                  key: 0,
                                                  "stroke-width": "1.5",
                                                  size: "20",
                                                  class: "mr-2 text-error"
                                                })) : createCommentVNode("", true),
                                                createVNode("span", {
                                                  innerHTML: desc.listtitle
                                                }, null, 8, ["innerHTML"])
                                              ]),
                                              _: 2
                                            }, 1032, ["class"])) : (openBlock(), createBlock(_component_v_list_item_title, {
                                              key: 1,
                                              class: [{ "opacity-50": desc.disable }, "text-14 d-flex align-center font-weight-medium"]
                                            }, {
                                              default: withCtx(() => [
                                                desc.icon ? (openBlock(), createBlock(unref(CircleCheckIcon), {
                                                  key: 0,
                                                  "stroke-width": "1.5",
                                                  size: "20",
                                                  class: "mr-2 text-primary"
                                                })) : createCommentVNode("", true),
                                                createVNode("span", {
                                                  innerHTML: desc.listtitle
                                                }, null, 8, ["innerHTML"])
                                              ]),
                                              _: 2
                                            }, 1032, ["class"]))
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_btn, {
                                    color: "primary",
                                    size: "large",
                                    class: "mt-4 font-weight-medium",
                                    rounded: "pill",
                                    href: "card.url",
                                    target: "_blank",
                                    flat: "",
                                    block: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(card.buttontext), 1)
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
                            createVNode(_component_v_card, {
                              elevation: "0",
                              class: "rounded-16 pa-6 border"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "pb-4" }, [
                                  createVNode("div", { class: "d-flex ga-2 align-center" }, [
                                    createVNode("h4", {
                                      class: "text-20 font-weight-semibold textPrimary mb-4",
                                      textContent: toDisplayString(card.caption)
                                    }, null, 8, ["textContent"]),
                                    card.tagtext ? (openBlock(), createBlock(_component_v_chip, {
                                      key: 0,
                                      size: "small",
                                      class: "mt-sm-n4 font-weight-bold",
                                      rounded: "md",
                                      color: "primary"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Popular")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ]),
                                  createVNode("p", { class: "text-14 text-grey100 font-weight-medium" }, toDisplayString(card.subtext), 1)
                                ]),
                                createVNode("div", { class: "d-flex align-center mt-3" }, [
                                  createVNode("h2", { class: "display-2 text-primary font-weight-bold" }, "$" + toDisplayString(card.price), 1),
                                  createVNode("span", { class: "text-grey100 mt-4 ms-2 text-16" }, "/" + toDisplayString(card.period), 1)
                                ]),
                                createVNode(_component_v_list, { class: "mb-0 pl-0 bg-transparent pt-5" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(card.list, (desc) => {
                                      return openBlock(), createBlock(_component_v_list_item, {
                                        class: "pa-0",
                                        key: desc.listtitle
                                      }, {
                                        default: withCtx(() => [
                                          desc.status ? (openBlock(), createBlock(_component_v_list_item_title, {
                                            key: 0,
                                            class: [{ "opacity-80": desc.disable }, "text-14 d-flex align-center font-weight-medium"]
                                          }, {
                                            default: withCtx(() => [
                                              desc.icon ? (openBlock(), createBlock(unref(CircleXIcon), {
                                                key: 0,
                                                "stroke-width": "1.5",
                                                size: "20",
                                                class: "mr-2 text-error"
                                              })) : createCommentVNode("", true),
                                              createVNode("span", {
                                                innerHTML: desc.listtitle
                                              }, null, 8, ["innerHTML"])
                                            ]),
                                            _: 2
                                          }, 1032, ["class"])) : (openBlock(), createBlock(_component_v_list_item_title, {
                                            key: 1,
                                            class: [{ "opacity-50": desc.disable }, "text-14 d-flex align-center font-weight-medium"]
                                          }, {
                                            default: withCtx(() => [
                                              desc.icon ? (openBlock(), createBlock(unref(CircleCheckIcon), {
                                                key: 0,
                                                "stroke-width": "1.5",
                                                size: "20",
                                                class: "mr-2 text-primary"
                                              })) : createCommentVNode("", true),
                                              createVNode("span", {
                                                innerHTML: desc.listtitle
                                              }, null, 8, ["innerHTML"])
                                            ]),
                                            _: 2
                                          }, 1032, ["class"]))
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  size: "large",
                                  class: "mt-4 font-weight-medium",
                                  rounded: "pill",
                                  href: "card.url",
                                  target: "_blank",
                                  flat: "",
                                  block: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(card.buttontext), 1)
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(Packages), (card) => {
                      return openBlock(), createBlock(_component_v_col, {
                        cols: "12",
                        lg: "3",
                        sm: "6",
                        key: card.caption
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            elevation: "0",
                            class: "rounded-16 pa-6 border"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "pb-4" }, [
                                createVNode("div", { class: "d-flex ga-2 align-center" }, [
                                  createVNode("h4", {
                                    class: "text-20 font-weight-semibold textPrimary mb-4",
                                    textContent: toDisplayString(card.caption)
                                  }, null, 8, ["textContent"]),
                                  card.tagtext ? (openBlock(), createBlock(_component_v_chip, {
                                    key: 0,
                                    size: "small",
                                    class: "mt-sm-n4 font-weight-bold",
                                    rounded: "md",
                                    color: "primary"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Popular")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                createVNode("p", { class: "text-14 text-grey100 font-weight-medium" }, toDisplayString(card.subtext), 1)
                              ]),
                              createVNode("div", { class: "d-flex align-center mt-3" }, [
                                createVNode("h2", { class: "display-2 text-primary font-weight-bold" }, "$" + toDisplayString(card.price), 1),
                                createVNode("span", { class: "text-grey100 mt-4 ms-2 text-16" }, "/" + toDisplayString(card.period), 1)
                              ]),
                              createVNode(_component_v_list, { class: "mb-0 pl-0 bg-transparent pt-5" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(card.list, (desc) => {
                                    return openBlock(), createBlock(_component_v_list_item, {
                                      class: "pa-0",
                                      key: desc.listtitle
                                    }, {
                                      default: withCtx(() => [
                                        desc.status ? (openBlock(), createBlock(_component_v_list_item_title, {
                                          key: 0,
                                          class: [{ "opacity-80": desc.disable }, "text-14 d-flex align-center font-weight-medium"]
                                        }, {
                                          default: withCtx(() => [
                                            desc.icon ? (openBlock(), createBlock(unref(CircleXIcon), {
                                              key: 0,
                                              "stroke-width": "1.5",
                                              size: "20",
                                              class: "mr-2 text-error"
                                            })) : createCommentVNode("", true),
                                            createVNode("span", {
                                              innerHTML: desc.listtitle
                                            }, null, 8, ["innerHTML"])
                                          ]),
                                          _: 2
                                        }, 1032, ["class"])) : (openBlock(), createBlock(_component_v_list_item_title, {
                                          key: 1,
                                          class: [{ "opacity-50": desc.disable }, "text-14 d-flex align-center font-weight-medium"]
                                        }, {
                                          default: withCtx(() => [
                                            desc.icon ? (openBlock(), createBlock(unref(CircleCheckIcon), {
                                              key: 0,
                                              "stroke-width": "1.5",
                                              size: "20",
                                              class: "mr-2 text-primary"
                                            })) : createCommentVNode("", true),
                                            createVNode("span", {
                                              innerHTML: desc.listtitle
                                            }, null, 8, ["innerHTML"])
                                          ]),
                                          _: 2
                                        }, 1032, ["class"]))
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_btn, {
                                color: "primary",
                                size: "large",
                                class: "mt-4 font-weight-medium",
                                rounded: "pill",
                                href: "card.url",
                                target: "_blank",
                                flat: "",
                                block: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(card.buttontext), 1)
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
              createVNode("div", { class: "pb-12 text-center" }, [
                createVNode("h2", { class: "display-1 font-weight-bold textPrimary" }, "Fair pricing for everyone."),
                createVNode("p", { class: "text-grey100 pt-4 text-17 lh-32" }, " Our robust analytics offer rich insights into the information buyers want, informing where teams. ")
              ]),
              createVNode(_component_v_row, { class: "d-flex justify-center" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(Packages), (card) => {
                    return openBlock(), createBlock(_component_v_col, {
                      cols: "12",
                      lg: "3",
                      sm: "6",
                      key: card.caption
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, {
                          elevation: "0",
                          class: "rounded-16 pa-6 border"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "pb-4" }, [
                              createVNode("div", { class: "d-flex ga-2 align-center" }, [
                                createVNode("h4", {
                                  class: "text-20 font-weight-semibold textPrimary mb-4",
                                  textContent: toDisplayString(card.caption)
                                }, null, 8, ["textContent"]),
                                card.tagtext ? (openBlock(), createBlock(_component_v_chip, {
                                  key: 0,
                                  size: "small",
                                  class: "mt-sm-n4 font-weight-bold",
                                  rounded: "md",
                                  color: "primary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Popular")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              createVNode("p", { class: "text-14 text-grey100 font-weight-medium" }, toDisplayString(card.subtext), 1)
                            ]),
                            createVNode("div", { class: "d-flex align-center mt-3" }, [
                              createVNode("h2", { class: "display-2 text-primary font-weight-bold" }, "$" + toDisplayString(card.price), 1),
                              createVNode("span", { class: "text-grey100 mt-4 ms-2 text-16" }, "/" + toDisplayString(card.period), 1)
                            ]),
                            createVNode(_component_v_list, { class: "mb-0 pl-0 bg-transparent pt-5" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(card.list, (desc) => {
                                  return openBlock(), createBlock(_component_v_list_item, {
                                    class: "pa-0",
                                    key: desc.listtitle
                                  }, {
                                    default: withCtx(() => [
                                      desc.status ? (openBlock(), createBlock(_component_v_list_item_title, {
                                        key: 0,
                                        class: [{ "opacity-80": desc.disable }, "text-14 d-flex align-center font-weight-medium"]
                                      }, {
                                        default: withCtx(() => [
                                          desc.icon ? (openBlock(), createBlock(unref(CircleXIcon), {
                                            key: 0,
                                            "stroke-width": "1.5",
                                            size: "20",
                                            class: "mr-2 text-error"
                                          })) : createCommentVNode("", true),
                                          createVNode("span", {
                                            innerHTML: desc.listtitle
                                          }, null, 8, ["innerHTML"])
                                        ]),
                                        _: 2
                                      }, 1032, ["class"])) : (openBlock(), createBlock(_component_v_list_item_title, {
                                        key: 1,
                                        class: [{ "opacity-50": desc.disable }, "text-14 d-flex align-center font-weight-medium"]
                                      }, {
                                        default: withCtx(() => [
                                          desc.icon ? (openBlock(), createBlock(unref(CircleCheckIcon), {
                                            key: 0,
                                            "stroke-width": "1.5",
                                            size: "20",
                                            class: "mr-2 text-primary"
                                          })) : createCommentVNode("", true),
                                          createVNode("span", {
                                            innerHTML: desc.listtitle
                                          }, null, 8, ["innerHTML"])
                                        ]),
                                        _: 2
                                      }, 1032, ["class"]))
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_btn, {
                              color: "primary",
                              size: "large",
                              class: "mt-4 font-weight-medium",
                              rounded: "pill",
                              href: "card.url",
                              target: "_blank",
                              flat: "",
                              block: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(card.buttontext), 1)
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/Homepage/Packages.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const visa = publicAssetsURL("/images/front-pages/payments/visa.svg");
const master = publicAssetsURL("/images/front-pages/payments/master.svg");
const ae = publicAssetsURL("/images/front-pages/payments/american-exp.svg");
const discover = publicAssetsURL("/images/front-pages/payments/discover.svg");
const paypal = publicAssetsURL("/images/front-pages/payments/paypal.svg");
const maestro = publicAssetsURL("/images/front-pages/payments/maesro.svg");
const jcb = publicAssetsURL("/images/front-pages/payments/jcb.svg");
const dinner = publicAssetsURL("/images/front-pages/payments/dinners-clb.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SecurePayment",
  __ssrInlineRender: true,
  setup(__props) {
    const icons = ref([
      {
        img: visa
      },
      {
        img: master
      },
      {
        img: ae
      },
      {
        img: discover
      },
      {
        img: paypal
      },
      {
        img: maestro
      },
      {
        img: jcb
      },
      {
        img: dinner
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      _push(ssrRenderComponent(_component_v_container, mergeProps({ class: "max-width-1218 pt-12" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h6 class="text-16 text-muted text-center pb-8 font-weight-medium"${_scopeId}> Secured payment with PayPal &amp; Razorpay </h6><div class="d-flex flex-wrap align-center ga-sm-12 ga-6 justify-center"${_scopeId}><!--[-->`);
            ssrRenderList(icons.value, (item) => {
              _push2(`<div${_scopeId}><img${ssrRenderAttr("src", item.img)} alt="icon"${_scopeId}></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("h6", { class: "text-16 text-muted text-center pb-8 font-weight-medium" }, " Secured payment with PayPal & Razorpay "),
              createVNode("div", { class: "d-flex flex-wrap align-center ga-sm-12 ga-6 justify-center" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(icons.value, (item) => {
                  return openBlock(), createBlock("div", {
                    key: item.img
                  }, [
                    createVNode("img", {
                      src: item.img,
                      alt: "icon"
                    }, null, 8, ["src"])
                  ]);
                }), 128))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/Homepage/SecurePayment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=SecurePayment-BKBIxxo4.mjs.map
