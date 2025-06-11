import { defineComponent, resolveComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext, computed, createBlock, openBlock, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./nuxt-link-DZ3wFR7I.js";
import { format } from "date-fns";
import { u as useBlogStore } from "./blog-DVMJJEFA.js";
import "ufo";
import "../server.mjs";
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
import "@vue/devtools-api";
import "destr";
import "klona";
import "vue-tabler-icons";
import "vue3-perfect-scrollbar";
import "maska";
import "axios-mock-adapter";
import "axios";
import "chance";
import "lodash";
import "vue-draggable-next";
import "vue3-easy-data-table";
import "vue-easy-lightbox";
import "vue-scrollto";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "blogCardGrid",
  __ssrInlineRender: true,
  props: { post: Object },
  setup(__props) {
    var _a, _b;
    const props = __props;
    const linkTo = (_b = (_a = props.post) == null ? void 0 : _a.title) == null ? void 0 : _b.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_NuxtLink = __nuxt_component_0;
      const _component_v_img = resolveComponent("v-img");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_EyeIcon = resolveComponent("EyeIcon");
      const _component_Message2Icon = resolveComponent("Message2Icon");
      const _component_CircleIcon = resolveComponent("CircleIcon");
      _push(ssrRenderComponent(_component_v_col, mergeProps({
        cols: "12",
        md: "4",
        sm: "4"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, {
              elevation: "10",
              class: "card-hover"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: unref(linkTo),
                    class: "text-decoration-none"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a2, _b2;
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_img, {
                          src: (_a2 = __props.post) == null ? void 0 : _a2.coverImg,
                          height: "250px",
                          alt: "post",
                          cover: "",
                          class: "rounded-t-md align-end text-right"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_item, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_chip, {
                                      class: "bg-surface text-body-2 font-weight-medium",
                                      size: "small"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_chip, {
                                        class: "bg-surface text-body-2 font-weight-medium",
                                        size: "small",
                                        textContent: "2 min read"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card_item, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_chip, {
                                      class: "bg-surface text-body-2 font-weight-medium",
                                      size: "small",
                                      textContent: "2 min read"
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
                          createVNode(_component_v_img, {
                            src: (_b2 = __props.post) == null ? void 0 : _b2.coverImg,
                            height: "250px",
                            alt: "post",
                            cover: "",
                            class: "rounded-t-md align-end text-right"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_item, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_chip, {
                                    class: "bg-surface text-body-2 font-weight-medium",
                                    size: "small",
                                    textContent: "2 min read"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["src"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_avatar, {
                    size: "40",
                    class: "mt-n7 mx-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a2, _b2;
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", (_a2 = __props.post) == null ? void 0 : _a2.author.avatar)} alt="icon" height="40"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: (_b2 = __props.post) == null ? void 0 : _b2.author.avatar,
                            alt: "icon",
                            height: "40"
                          }, null, 8, ["src"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_item, { class: "px-6 pt-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a2, _b2, _c, _d, _e, _f, _g;
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_chip, {
                          class: "text-body-2 font-weight-medium bg-grey100",
                          size: "small"
                        }, null, _parent4, _scopeId3));
                        _push4(`<h5 class="text-h5 text-13 my-6"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          class: "text-decoration-none color-inherits",
                          to: unref(linkTo)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a3, _b3;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a3 = __props.post) == null ? void 0 : _a3.title)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b3 = __props.post) == null ? void 0 : _b3.title), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</h5><div class="d-flex align-center justify-space-between"${_scopeId3}><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_avatar, {
                          class: "",
                          size: "18"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_EyeIcon, { size: "18" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_EyeIcon, { size: "18" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span class="text-subtitle-1 ml-2"${_scopeId3}>${ssrInterpolate((_a2 = __props.post) == null ? void 0 : _a2.view)}</span>`);
                        _push4(ssrRenderComponent(_component_v_avatar, {
                          class: "ml-4",
                          size: "18"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Message2Icon, { size: "18" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Message2Icon, { size: "18" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span class="text-subtitle-1 ml-2"${_scopeId3}>${ssrInterpolate((_b2 = __props.post) == null ? void 0 : _b2.comments.length)}</span></div><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_avatar, { size: "10" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_CircleIcon, { size: "10" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_CircleIcon, { size: "10" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span class="text-subtitle-2 ml-2"${_scopeId3}>${ssrInterpolate(unref(format)(new Date((_c = __props.post) == null ? void 0 : _c.createdAt), "E, MMM d"))}</span></div></div>`);
                      } else {
                        return [
                          createVNode(_component_v_chip, {
                            class: "text-body-2 font-weight-medium bg-grey100",
                            size: "small",
                            textContent: toDisplayString((_d = __props.post) == null ? void 0 : _d.category)
                          }, null, 8, ["textContent"]),
                          createVNode("h5", { class: "text-h5 text-13 my-6" }, [
                            createVNode(_component_NuxtLink, {
                              class: "text-decoration-none color-inherits",
                              to: unref(linkTo)
                            }, {
                              default: withCtx(() => {
                                var _a3;
                                return [
                                  createTextVNode(toDisplayString((_a3 = __props.post) == null ? void 0 : _a3.title), 1)
                                ];
                              }),
                              _: 1
                            }, 8, ["to"])
                          ]),
                          createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                            createVNode("div", null, [
                              createVNode(_component_v_avatar, {
                                class: "",
                                size: "18"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_EyeIcon, { size: "18" })
                                ]),
                                _: 1
                              }),
                              createVNode("span", {
                                class: "text-subtitle-1 ml-2",
                                textContent: toDisplayString((_e = __props.post) == null ? void 0 : _e.view)
                              }, null, 8, ["textContent"]),
                              createVNode(_component_v_avatar, {
                                class: "ml-4",
                                size: "18"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Message2Icon, { size: "18" })
                                ]),
                                _: 1
                              }),
                              createVNode("span", {
                                class: "text-subtitle-1 ml-2",
                                textContent: toDisplayString((_f = __props.post) == null ? void 0 : _f.comments.length)
                              }, null, 8, ["textContent"])
                            ]),
                            createVNode("div", null, [
                              createVNode(_component_v_avatar, { size: "10" }, {
                                default: withCtx(() => [
                                  createVNode(_component_CircleIcon, { size: "10" })
                                ]),
                                _: 1
                              }),
                              createVNode("span", {
                                class: "text-subtitle-2 ml-2",
                                textContent: toDisplayString(unref(format)(new Date((_g = __props.post) == null ? void 0 : _g.createdAt), "E, MMM d"))
                              }, null, 8, ["textContent"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode(_component_NuxtLink, {
                        to: unref(linkTo),
                        class: "text-decoration-none"
                      }, {
                        default: withCtx(() => {
                          var _a2;
                          return [
                            createVNode(_component_v_img, {
                              src: (_a2 = __props.post) == null ? void 0 : _a2.coverImg,
                              height: "250px",
                              alt: "post",
                              cover: "",
                              class: "rounded-t-md align-end text-right"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_item, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_chip, {
                                      class: "bg-surface text-body-2 font-weight-medium",
                                      size: "small",
                                      textContent: "2 min read"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["src"])
                          ];
                        }),
                        _: 1
                      }, 8, ["to"]),
                      createVNode(_component_v_avatar, {
                        size: "40",
                        class: "mt-n7 mx-6"
                      }, {
                        default: withCtx(() => {
                          var _a2;
                          return [
                            createVNode("img", {
                              src: (_a2 = __props.post) == null ? void 0 : _a2.author.avatar,
                              alt: "icon",
                              height: "40"
                            }, null, 8, ["src"])
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_v_card_item, { class: "px-6 pt-4" }, {
                        default: withCtx(() => {
                          var _a2, _b2, _c, _d;
                          return [
                            createVNode(_component_v_chip, {
                              class: "text-body-2 font-weight-medium bg-grey100",
                              size: "small",
                              textContent: toDisplayString((_a2 = __props.post) == null ? void 0 : _a2.category)
                            }, null, 8, ["textContent"]),
                            createVNode("h5", { class: "text-h5 text-13 my-6" }, [
                              createVNode(_component_NuxtLink, {
                                class: "text-decoration-none color-inherits",
                                to: unref(linkTo)
                              }, {
                                default: withCtx(() => {
                                  var _a3;
                                  return [
                                    createTextVNode(toDisplayString((_a3 = __props.post) == null ? void 0 : _a3.title), 1)
                                  ];
                                }),
                                _: 1
                              }, 8, ["to"])
                            ]),
                            createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                              createVNode("div", null, [
                                createVNode(_component_v_avatar, {
                                  class: "",
                                  size: "18"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_EyeIcon, { size: "18" })
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", {
                                  class: "text-subtitle-1 ml-2",
                                  textContent: toDisplayString((_b2 = __props.post) == null ? void 0 : _b2.view)
                                }, null, 8, ["textContent"]),
                                createVNode(_component_v_avatar, {
                                  class: "ml-4",
                                  size: "18"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Message2Icon, { size: "18" })
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", {
                                  class: "text-subtitle-1 ml-2",
                                  textContent: toDisplayString((_c = __props.post) == null ? void 0 : _c.comments.length)
                                }, null, 8, ["textContent"])
                              ]),
                              createVNode("div", null, [
                                createVNode(_component_v_avatar, { size: "10" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_CircleIcon, { size: "10" })
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", {
                                  class: "text-subtitle-2 ml-2",
                                  textContent: toDisplayString(unref(format)(new Date((_d = __props.post) == null ? void 0 : _d.createdAt), "E, MMM d"))
                                }, null, 8, ["textContent"])
                              ])
                            ])
                          ];
                        }),
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
              createVNode(_component_v_card, {
                elevation: "10",
                class: "card-hover"
              }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode(_component_NuxtLink, {
                      to: unref(linkTo),
                      class: "text-decoration-none"
                    }, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createVNode(_component_v_img, {
                            src: (_a2 = __props.post) == null ? void 0 : _a2.coverImg,
                            height: "250px",
                            alt: "post",
                            cover: "",
                            class: "rounded-t-md align-end text-right"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_item, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_chip, {
                                    class: "bg-surface text-body-2 font-weight-medium",
                                    size: "small",
                                    textContent: "2 min read"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["src"])
                        ];
                      }),
                      _: 1
                    }, 8, ["to"]),
                    createVNode(_component_v_avatar, {
                      size: "40",
                      class: "mt-n7 mx-6"
                    }, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createVNode("img", {
                            src: (_a2 = __props.post) == null ? void 0 : _a2.author.avatar,
                            alt: "icon",
                            height: "40"
                          }, null, 8, ["src"])
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_v_card_item, { class: "px-6 pt-4" }, {
                      default: withCtx(() => {
                        var _a2, _b2, _c, _d;
                        return [
                          createVNode(_component_v_chip, {
                            class: "text-body-2 font-weight-medium bg-grey100",
                            size: "small",
                            textContent: toDisplayString((_a2 = __props.post) == null ? void 0 : _a2.category)
                          }, null, 8, ["textContent"]),
                          createVNode("h5", { class: "text-h5 text-13 my-6" }, [
                            createVNode(_component_NuxtLink, {
                              class: "text-decoration-none color-inherits",
                              to: unref(linkTo)
                            }, {
                              default: withCtx(() => {
                                var _a3;
                                return [
                                  createTextVNode(toDisplayString((_a3 = __props.post) == null ? void 0 : _a3.title), 1)
                                ];
                              }),
                              _: 1
                            }, 8, ["to"])
                          ]),
                          createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                            createVNode("div", null, [
                              createVNode(_component_v_avatar, {
                                class: "",
                                size: "18"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_EyeIcon, { size: "18" })
                                ]),
                                _: 1
                              }),
                              createVNode("span", {
                                class: "text-subtitle-1 ml-2",
                                textContent: toDisplayString((_b2 = __props.post) == null ? void 0 : _b2.view)
                              }, null, 8, ["textContent"]),
                              createVNode(_component_v_avatar, {
                                class: "ml-4",
                                size: "18"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Message2Icon, { size: "18" })
                                ]),
                                _: 1
                              }),
                              createVNode("span", {
                                class: "text-subtitle-1 ml-2",
                                textContent: toDisplayString((_c = __props.post) == null ? void 0 : _c.comments.length)
                              }, null, 8, ["textContent"])
                            ]),
                            createVNode("div", null, [
                              createVNode(_component_v_avatar, { size: "10" }, {
                                default: withCtx(() => [
                                  createVNode(_component_CircleIcon, { size: "10" })
                                ]),
                                _: 1
                              }),
                              createVNode("span", {
                                class: "text-subtitle-2 ml-2",
                                textContent: toDisplayString(unref(format)(new Date((_d = __props.post) == null ? void 0 : _d.createdAt), "E, MMM d"))
                              }, null, 8, ["textContent"])
                            ])
                          ])
                        ];
                      }),
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/blog/blogCardGrid.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "featureBlogCard",
  __ssrInlineRender: true,
  props: { post: Object, index: Number },
  setup(__props) {
    var _a, _b;
    const props = __props;
    const mainPost = props.index === 0;
    const linkTo = (_b = (_a = props.post) == null ? void 0 : _a.title) == null ? void 0 : _b.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_NuxtLink = __nuxt_component_0;
      const _component_EyeIcon = resolveComponent("EyeIcon");
      const _component_Message2Icon = resolveComponent("Message2Icon");
      const _component_CircleIcon = resolveComponent("CircleIcon");
      _push(ssrRenderComponent(_component_v_col, mergeProps({
        cols: "12",
        sm: "12",
        md: "12",
        lg: mainPost ? 8 : 4
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, {
              elevation: "10",
              class: "overflow-hidden card-hover"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c, _d;
                if (_push3) {
                  _push3(`<div class="position-relative feature-card"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_img, {
                    class: "align-start text-white",
                    height: "400",
                    src: (_a2 = __props.post) == null ? void 0 : _a2.coverImg,
                    alt: (_b2 = __props.post) == null ? void 0 : _b2.coverImg,
                    cover: "",
                    gradient: "to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5)"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a3, _b3, _c2, _d2, _e, _f, _g;
                      if (_push4) {
                        _push4(`<div class="pa-6 d-flex justify-space-between flex-column h-100 position-relative"${_scopeId3}><div class="d-flex justify-space-between align-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_avatar, { size: "40" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a4, _b4;
                            if (_push5) {
                              _push5(`<img${ssrRenderAttr("src", (_a4 = __props.post) == null ? void 0 : _a4.author.avatar)} alt="icon" height="40"${_scopeId4}>`);
                            } else {
                              return [
                                createVNode("img", {
                                  src: (_b4 = __props.post) == null ? void 0 : _b4.author.avatar,
                                  alt: "icon",
                                  height: "40"
                                }, null, 8, ["src"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_chip, {
                          class: "text-body-2 font-weight-medium bg-primary",
                          size: "small"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div${_scopeId3}><h3 class="text-h3 text-20 my-6"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          class: "text-decoration-none text-white",
                          to: unref(linkTo)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a4, _b4;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a4 = __props.post) == null ? void 0 : _a4.title)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b4 = __props.post) == null ? void 0 : _b4.title), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</h3><div class="d-flex align-center justify-space-between"${_scopeId3}><div class="d-flex align-center"${_scopeId3}><div class="d-flex align-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_avatar, {
                          class: "text-white",
                          size: "18"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_EyeIcon, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_EyeIcon)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span class="text-subtitle-1 ml-2"${_scopeId3}>${ssrInterpolate((_a3 = __props.post) == null ? void 0 : _a3.view)}</span></div><div class="d-flex align-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_avatar, {
                          class: "ml-6 text-white",
                          size: "18"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Message2Icon, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Message2Icon)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span class="text-subtitle-1 ml-2"${_scopeId3}>${ssrInterpolate((_b3 = __props.post) == null ? void 0 : _b3.comments.length)}</span></div></div><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_avatar, {
                          size: "10",
                          class: "text-white"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_CircleIcon, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_CircleIcon)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span class="text-subtitle-2 ml-2"${_scopeId3}>${ssrInterpolate(unref(format)(new Date((_c2 = __props.post) == null ? void 0 : _c2.createdAt), "E, MMM d"))}</span></div></div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "pa-6 d-flex justify-space-between flex-column h-100 position-relative" }, [
                            createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                              createVNode(_component_v_avatar, { size: "40" }, {
                                default: withCtx(() => {
                                  var _a4;
                                  return [
                                    createVNode("img", {
                                      src: (_a4 = __props.post) == null ? void 0 : _a4.author.avatar,
                                      alt: "icon",
                                      height: "40"
                                    }, null, 8, ["src"])
                                  ];
                                }),
                                _: 1
                              }),
                              createVNode(_component_v_chip, {
                                class: "text-body-2 font-weight-medium bg-primary",
                                size: "small",
                                textContent: toDisplayString((_d2 = __props.post) == null ? void 0 : _d2.category)
                              }, null, 8, ["textContent"])
                            ]),
                            createVNode("div", null, [
                              createVNode("h3", { class: "text-h3 text-20 my-6" }, [
                                createVNode(_component_NuxtLink, {
                                  class: "text-decoration-none text-white",
                                  to: unref(linkTo)
                                }, {
                                  default: withCtx(() => {
                                    var _a4;
                                    return [
                                      createTextVNode(toDisplayString((_a4 = __props.post) == null ? void 0 : _a4.title), 1)
                                    ];
                                  }),
                                  _: 1
                                }, 8, ["to"])
                              ]),
                              createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode(_component_v_avatar, {
                                      class: "text-white",
                                      size: "18"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_EyeIcon)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("span", {
                                      class: "text-subtitle-1 ml-2",
                                      textContent: toDisplayString((_e = __props.post) == null ? void 0 : _e.view)
                                    }, null, 8, ["textContent"])
                                  ]),
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode(_component_v_avatar, {
                                      class: "ml-6 text-white",
                                      size: "18"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Message2Icon)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("span", {
                                      class: "text-subtitle-1 ml-2",
                                      textContent: toDisplayString((_f = __props.post) == null ? void 0 : _f.comments.length)
                                    }, null, 8, ["textContent"])
                                  ])
                                ]),
                                createVNode("div", null, [
                                  createVNode(_component_v_avatar, {
                                    size: "10",
                                    class: "text-white"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_CircleIcon)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("span", {
                                    class: "text-subtitle-2 ml-2",
                                    textContent: toDisplayString(unref(format)(new Date((_g = __props.post) == null ? void 0 : _g.createdAt), "E, MMM d"))
                                  }, null, 8, ["textContent"])
                                ])
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "position-relative feature-card" }, [
                      createVNode(_component_v_img, {
                        class: "align-start text-white",
                        height: "400",
                        src: (_c = __props.post) == null ? void 0 : _c.coverImg,
                        alt: (_d = __props.post) == null ? void 0 : _d.coverImg,
                        cover: "",
                        gradient: "to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5)"
                      }, {
                        default: withCtx(() => {
                          var _a3, _b3, _c2, _d2;
                          return [
                            createVNode("div", { class: "pa-6 d-flex justify-space-between flex-column h-100 position-relative" }, [
                              createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                createVNode(_component_v_avatar, { size: "40" }, {
                                  default: withCtx(() => {
                                    var _a4;
                                    return [
                                      createVNode("img", {
                                        src: (_a4 = __props.post) == null ? void 0 : _a4.author.avatar,
                                        alt: "icon",
                                        height: "40"
                                      }, null, 8, ["src"])
                                    ];
                                  }),
                                  _: 1
                                }),
                                createVNode(_component_v_chip, {
                                  class: "text-body-2 font-weight-medium bg-primary",
                                  size: "small",
                                  textContent: toDisplayString((_a3 = __props.post) == null ? void 0 : _a3.category)
                                }, null, 8, ["textContent"])
                              ]),
                              createVNode("div", null, [
                                createVNode("h3", { class: "text-h3 text-20 my-6" }, [
                                  createVNode(_component_NuxtLink, {
                                    class: "text-decoration-none text-white",
                                    to: unref(linkTo)
                                  }, {
                                    default: withCtx(() => {
                                      var _a4;
                                      return [
                                        createTextVNode(toDisplayString((_a4 = __props.post) == null ? void 0 : _a4.title), 1)
                                      ];
                                    }),
                                    _: 1
                                  }, 8, ["to"])
                                ]),
                                createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode("div", { class: "d-flex align-center" }, [
                                      createVNode(_component_v_avatar, {
                                        class: "text-white",
                                        size: "18"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_EyeIcon)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", {
                                        class: "text-subtitle-1 ml-2",
                                        textContent: toDisplayString((_b3 = __props.post) == null ? void 0 : _b3.view)
                                      }, null, 8, ["textContent"])
                                    ]),
                                    createVNode("div", { class: "d-flex align-center" }, [
                                      createVNode(_component_v_avatar, {
                                        class: "ml-6 text-white",
                                        size: "18"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Message2Icon)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", {
                                        class: "text-subtitle-1 ml-2",
                                        textContent: toDisplayString((_c2 = __props.post) == null ? void 0 : _c2.comments.length)
                                      }, null, 8, ["textContent"])
                                    ])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode(_component_v_avatar, {
                                      size: "10",
                                      class: "text-white"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_CircleIcon)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("span", {
                                      class: "text-subtitle-2 ml-2",
                                      textContent: toDisplayString(unref(format)(new Date((_d2 = __props.post) == null ? void 0 : _d2.createdAt), "E, MMM d"))
                                    }, null, 8, ["textContent"])
                                  ])
                                ])
                              ])
                            ])
                          ];
                        }),
                        _: 1
                      }, 8, ["src", "alt"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card, {
                elevation: "10",
                class: "overflow-hidden card-hover"
              }, {
                default: withCtx(() => {
                  var _a2, _b2;
                  return [
                    createVNode("div", { class: "position-relative feature-card" }, [
                      createVNode(_component_v_img, {
                        class: "align-start text-white",
                        height: "400",
                        src: (_a2 = __props.post) == null ? void 0 : _a2.coverImg,
                        alt: (_b2 = __props.post) == null ? void 0 : _b2.coverImg,
                        cover: "",
                        gradient: "to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5)"
                      }, {
                        default: withCtx(() => {
                          var _a3, _b3, _c, _d;
                          return [
                            createVNode("div", { class: "pa-6 d-flex justify-space-between flex-column h-100 position-relative" }, [
                              createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                createVNode(_component_v_avatar, { size: "40" }, {
                                  default: withCtx(() => {
                                    var _a4;
                                    return [
                                      createVNode("img", {
                                        src: (_a4 = __props.post) == null ? void 0 : _a4.author.avatar,
                                        alt: "icon",
                                        height: "40"
                                      }, null, 8, ["src"])
                                    ];
                                  }),
                                  _: 1
                                }),
                                createVNode(_component_v_chip, {
                                  class: "text-body-2 font-weight-medium bg-primary",
                                  size: "small",
                                  textContent: toDisplayString((_a3 = __props.post) == null ? void 0 : _a3.category)
                                }, null, 8, ["textContent"])
                              ]),
                              createVNode("div", null, [
                                createVNode("h3", { class: "text-h3 text-20 my-6" }, [
                                  createVNode(_component_NuxtLink, {
                                    class: "text-decoration-none text-white",
                                    to: unref(linkTo)
                                  }, {
                                    default: withCtx(() => {
                                      var _a4;
                                      return [
                                        createTextVNode(toDisplayString((_a4 = __props.post) == null ? void 0 : _a4.title), 1)
                                      ];
                                    }),
                                    _: 1
                                  }, 8, ["to"])
                                ]),
                                createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode("div", { class: "d-flex align-center" }, [
                                      createVNode(_component_v_avatar, {
                                        class: "text-white",
                                        size: "18"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_EyeIcon)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", {
                                        class: "text-subtitle-1 ml-2",
                                        textContent: toDisplayString((_b3 = __props.post) == null ? void 0 : _b3.view)
                                      }, null, 8, ["textContent"])
                                    ]),
                                    createVNode("div", { class: "d-flex align-center" }, [
                                      createVNode(_component_v_avatar, {
                                        class: "ml-6 text-white",
                                        size: "18"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Message2Icon)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", {
                                        class: "text-subtitle-1 ml-2",
                                        textContent: toDisplayString((_c = __props.post) == null ? void 0 : _c.comments.length)
                                      }, null, 8, ["textContent"])
                                    ])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode(_component_v_avatar, {
                                      size: "10",
                                      class: "text-white"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_CircleIcon)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("span", {
                                      class: "text-subtitle-2 ml-2",
                                      textContent: toDisplayString(unref(format)(new Date((_d = __props.post) == null ? void 0 : _d.createdAt), "E, MMM d"))
                                    }, null, 8, ["textContent"])
                                  ])
                                ])
                              ])
                            ])
                          ];
                        }),
                        _: 1
                      }, 8, ["src", "alt"])
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
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/blog/featureBlogCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "blogPosts",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useBlogStore();
    const getPosts = computed(() => {
      return store.blogposts;
    });
    const filterFeaturedpost = computed(() => {
      return getPosts.value.filter((post) => {
        return post.featured;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      _push(ssrRenderComponent(_component_v_row, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(filterFeaturedpost.value, (post, i) => {
              _push2(ssrRenderComponent(_sfc_main$2, {
                post,
                index: i
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--><!--[-->`);
            ssrRenderList(getPosts.value, (post, i) => {
              _push2(ssrRenderComponent(_sfc_main$3, { post }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(filterFeaturedpost.value, (post, i) => {
                return openBlock(), createBlock(_sfc_main$2, {
                  key: post.id,
                  post,
                  index: i
                }, null, 8, ["post", "index"]);
              }), 128)),
              (openBlock(true), createBlock(Fragment, null, renderList(getPosts.value, (post, i) => {
                return openBlock(), createBlock(_sfc_main$3, {
                  key: post.id,
                  post
                }, null, 8, ["post"]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/blog/blogPosts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Posts",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(ssrRenderComponent(_component_v_row, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
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
          } else {
            return [
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/blog/Posts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Posts-DfRYl6pS.js.map
