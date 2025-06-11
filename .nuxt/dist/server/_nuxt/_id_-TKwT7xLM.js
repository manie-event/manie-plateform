import { defineComponent, resolveComponent, withCtx, createVNode, unref, mergeProps, createBlock, createCommentVNode, openBlock, toDisplayString, createTextVNode, useSSRContext, computed, Fragment, renderList, ref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { format } from "date-fns";
import { _ as _export_sfc } from "../server.mjs";
import { useRoute } from "vue-router";
import { u as useBlogStore } from "./blog-DVMJJEFA.js";
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
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "addCommnet",
  __ssrInlineRender: true,
  props: { comments: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_CircleIcon = resolveComponent("CircleIcon");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_ArrowBackUpIcon = resolveComponent("ArrowBackUpIcon");
      if (__props.comments) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-19e10616>`);
        _push(ssrRenderComponent(_component_v_card, {
          variant: "flat",
          class: "mb-5 pa-5 border"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b, _c, _d;
            if (_push2) {
              if (__props.comments.profile) {
                _push2(`<div class="d-flex gap-3 align-center" data-v-19e10616${_scopeId}>`);
                _push2(ssrRenderComponent(_component_v_avatar, { size: "30" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", __props.comments.profile.avatar)} width="30" alt="avatar" data-v-19e10616${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: __props.comments.profile.avatar,
                          width: "30",
                          alt: "avatar"
                        }, null, 8, ["src"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<div class="d-block d-sm-flex align-center gap-3" data-v-19e10616${_scopeId}><h6 class="text-h6" data-v-19e10616${_scopeId}>${ssrInterpolate((_a = __props.comments.profile) == null ? void 0 : _a.name)}</h6><span class="text-subtitle-2 text-grey100" data-v-19e10616${_scopeId}>`);
                _push2(ssrRenderComponent(_component_CircleIcon, {
                  size: "8",
                  fill: "inherit",
                  class: "opacity-50 mr-1"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(unref(format)(new Date((_b = __props.comments) == null ? void 0 : _b.time), "E, MMM d"))}</span></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="py-3 text-body-1" data-v-19e10616${_scopeId}>${ssrInterpolate(__props.comments.comment)}</div><div class="my-1 d-flex align-center gap-3" data-v-19e10616${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_tooltip, { text: "Reply" }, {
                activator: withCtx(({ props: props2 }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_btn, mergeProps({
                      icon: "",
                      color: "secondary",
                      variant: "flat"
                    }, props2, { size: "x-small" }), {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ArrowBackUpIcon, { size: "16" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ArrowBackUpIcon, { size: "16" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_btn, mergeProps({
                        icon: "",
                        color: "secondary",
                        variant: "flat"
                      }, props2, { size: "x-small" }), {
                        default: withCtx(() => [
                          createVNode(_component_ArrowBackUpIcon, { size: "16" })
                        ]),
                        _: 2
                      }, 1040)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                __props.comments.profile ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "d-flex gap-3 align-center"
                }, [
                  createVNode(_component_v_avatar, { size: "30" }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: __props.comments.profile.avatar,
                        width: "30",
                        alt: "avatar"
                      }, null, 8, ["src"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "d-block d-sm-flex align-center gap-3" }, [
                    createVNode("h6", { class: "text-h6" }, toDisplayString((_c = __props.comments.profile) == null ? void 0 : _c.name), 1),
                    createVNode("span", { class: "text-subtitle-2 text-grey100" }, [
                      createVNode(_component_CircleIcon, {
                        size: "8",
                        fill: "inherit",
                        class: "opacity-50 mr-1"
                      }),
                      createTextVNode(" " + toDisplayString(unref(format)(new Date((_d = __props.comments) == null ? void 0 : _d.time), "E, MMM d")), 1)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "py-3 text-body-1" }, toDisplayString(__props.comments.comment), 1),
                createVNode("div", { class: "my-1 d-flex align-center gap-3" }, [
                  createVNode(_component_v_tooltip, { text: "Reply" }, {
                    activator: withCtx(({ props: props2 }) => [
                      createVNode(_component_v_btn, mergeProps({
                        icon: "",
                        color: "secondary",
                        variant: "flat"
                      }, props2, { size: "x-small" }), {
                        default: withCtx(() => [
                          createVNode(_component_ArrowBackUpIcon, { size: "16" })
                        ]),
                        _: 2
                      }, 1040)
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--[-->`);
        ssrRenderList(__props.comments.replies, (reply, i) => {
          _push(`<div class="ml-10" data-v-19e10616>`);
          if (reply) {
            _push(ssrRenderComponent(_component_v_card, {
              variant: "flat",
              class: "mb-5 pa-5 border"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                var _a, _b;
                if (_push2) {
                  if (reply.profile) {
                    _push2(`<div class="d-flex gap-3 align-center" data-v-19e10616${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_v_avatar, { size: "30" }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<img${ssrRenderAttr("src", reply.profile.avatar)} width="30" alt="avatar" data-v-19e10616${_scopeId2}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: reply.profile.avatar,
                              width: "30",
                              alt: "avatar"
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`<div class="d-block d-sm-flex align-center gap-3" data-v-19e10616${_scopeId}><h6 class="text-h6" data-v-19e10616${_scopeId}>${ssrInterpolate((_a = reply.profile) == null ? void 0 : _a.name)}</h6><span class="text-subtitle-2 text-grey100" data-v-19e10616${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_CircleIcon, {
                      size: "8",
                      fill: "inherit",
                      class: "opacity-50 mr-1"
                    }, null, _parent2, _scopeId));
                    _push2(` ${ssrInterpolate(unref(format)(new Date(reply == null ? void 0 : reply.time), "E, MMM d"))}</span></div></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<div class="py-3 text-body-1" data-v-19e10616${_scopeId}>${ssrInterpolate(reply.comment)}</div>`);
                } else {
                  return [
                    reply.profile ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "d-flex gap-3 align-center"
                    }, [
                      createVNode(_component_v_avatar, { size: "30" }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: reply.profile.avatar,
                            width: "30",
                            alt: "avatar"
                          }, null, 8, ["src"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("div", { class: "d-block d-sm-flex align-center gap-3" }, [
                        createVNode("h6", { class: "text-h6" }, toDisplayString((_b = reply.profile) == null ? void 0 : _b.name), 1),
                        createVNode("span", { class: "text-subtitle-2 text-grey100" }, [
                          createVNode(_component_CircleIcon, {
                            size: "8",
                            fill: "inherit",
                            class: "opacity-50 mr-1"
                          }),
                          createTextVNode(" " + toDisplayString(unref(format)(new Date(reply == null ? void 0 : reply.time), "E, MMM d")), 1)
                        ])
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "py-3 text-body-1" }, toDisplayString(reply.comment), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/blog/detail/addCommnet.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AddComment = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-19e10616"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "blogDetail",
  __ssrInlineRender: true,
  setup(__props) {
    const title = useRoute();
    title.path.split("/").pop();
    const store = useBlogStore();
    const post = computed(() => {
      return store.selectedPost;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_EyeIcon = resolveComponent("EyeIcon");
      const _component_Message2Icon = resolveComponent("Message2Icon");
      const _component_CircleIcon = resolveComponent("CircleIcon");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_QuoteIcon = resolveComponent("QuoteIcon");
      if (post.value) {
        _push(ssrRenderComponent(_component_v_row, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_img, {
                            src: post.value.coverImg,
                            height: "440",
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
                                          textContent: toDisplayString(post.value.view)
                                        }, null, 8, ["textContent"])
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
                                        textContent: toDisplayString(post.value.view)
                                      }, null, 8, ["textContent"])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_avatar, {
                            size: "40",
                            class: "mt-n7 mx-6"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a, _b;
                              if (_push5) {
                                _push5(`<img${ssrRenderAttr("src", (_a = post.value.author) == null ? void 0 : _a.avatar)} alt="icon" height="40"${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: (_b = post.value.author) == null ? void 0 : _b.avatar,
                                    alt: "icon",
                                    height: "40"
                                  }, null, 8, ["src"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_card_item, { class: "pt-4 blog-detail" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a, _b;
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_chip, {
                                  class: "text-body-2 font-weight-medium bg-grey100",
                                  size: "small"
                                }, null, _parent5, _scopeId4));
                                _push5(`<h1 class="text-h1 font-weight-medium my-6"${_scopeId4}>${ssrInterpolate(post.value.title)}</h1><div class="d-flex align-center justify-space-between"${_scopeId4}><div${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_v_avatar, {
                                  class: "",
                                  size: "18"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_EyeIcon, { size: "18" }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_EyeIcon, { size: "18" })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<span class="text-subtitle-1 ml-2"${_scopeId4}>${ssrInterpolate(post.value.view)}</span>`);
                                _push5(ssrRenderComponent(_component_v_avatar, {
                                  class: "ml-4",
                                  size: "18"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_Message2Icon, { size: "18" }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_Message2Icon, { size: "18" })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<span class="text-subtitle-1 ml-2"${_scopeId4}>${ssrInterpolate((_a = post.value.comments) == null ? void 0 : _a.length)}</span></div>`);
                                if (post.value.createdAt) {
                                  _push5(`<div${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_v_avatar, { size: "10" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_CircleIcon, { size: "10" }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_CircleIcon, { size: "10" })
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent5, _scopeId4));
                                  _push5(`<span class="text-subtitle-2 ml-2"${_scopeId4}>${ssrInterpolate(unref(format)(new Date(post.value.createdAt), "E, MMM d"))}</span></div>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode(_component_v_chip, {
                                    class: "text-body-2 font-weight-medium bg-grey100",
                                    size: "small",
                                    textContent: toDisplayString(post.value.category)
                                  }, null, 8, ["textContent"]),
                                  createVNode("h1", { class: "text-h1 font-weight-medium my-6" }, toDisplayString(post.value.title), 1),
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
                                        textContent: toDisplayString(post.value.view)
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
                                        textContent: toDisplayString((_b = post.value.comments) == null ? void 0 : _b.length)
                                      }, null, 8, ["textContent"])
                                    ]),
                                    post.value.createdAt ? (openBlock(), createBlock("div", { key: 0 }, [
                                      createVNode(_component_v_avatar, { size: "10" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_CircleIcon, { size: "10" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", {
                                        class: "text-subtitle-2 ml-2",
                                        textContent: toDisplayString(unref(format)(new Date(post.value.createdAt), "E, MMM d"))
                                      }, null, 8, ["textContent"])
                                    ])) : createCommentVNode("", true)
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_divider, null, null, _parent4, _scopeId3));
                          _push4(`<div class="pa-6"${_scopeId3}><h2 class="text-h2"${_scopeId3}>Title of the paragraph</h2><p class="my-4 text-body-1 text-10"${_scopeId3}> But you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list. </p><p class="my-4 text-body-1 text-10"${_scopeId3}> Gigure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the </p><p class="text-subtitle-1 font-weight-bold text-10"${_scopeId3}>This is strong text.</p><p class="text-subtitle-1 font-italic text-10"${_scopeId3}>This is italic text.</p>`);
                          _push4(ssrRenderComponent(_component_v_divider, { class: "my-8" }, null, _parent4, _scopeId3));
                          _push4(`<h3 class="text-h3"${_scopeId3}>Unorder list.</h3><ul class="ml-10 mt-3"${_scopeId3}><li class="text-body-1"${_scopeId3}>Gigure out what it is or</li><li class="text-body-1"${_scopeId3}>The links it currently</li><li class="text-body-1"${_scopeId3}>It allows you to start your bid</li><li class="text-body-1"${_scopeId3}>Gigure out what it is or</li><li class="text-body-1"${_scopeId3}>The links it currently</li><li class="text-body-1"${_scopeId3}>It allows you to start your bid</li></ul>`);
                          _push4(ssrRenderComponent(_component_v_divider, { class: "my-8" }, null, _parent4, _scopeId3));
                          _push4(`<h3 class="text-h3"${_scopeId3}>Order list.</h3><ol class="ml-10 mt-3"${_scopeId3}><li class="text-body-1"${_scopeId3}>Gigure out what it is or</li><li class="text-body-1"${_scopeId3}>The links it currently</li><li class="text-body-1"${_scopeId3}>It allows you to start your bid</li><li class="text-body-1"${_scopeId3}>Gigure out what it is or</li><li class="text-body-1"${_scopeId3}>The links it currently</li><li class="text-body-1"${_scopeId3}>It allows you to start your bid</li></ol>`);
                          _push4(ssrRenderComponent(_component_v_divider, { class: "my-8" }, null, _parent4, _scopeId3));
                          _push4(`<h3 class="text-h3"${_scopeId3}>Quotes</h3><div class="d-flex mt-8 font-weight-bold ml-4"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_QuoteIcon, { class: "mt-n2" }, null, _parent4, _scopeId3));
                          _push4(` Life is short, Smile while you still have teeth! </div></div>`);
                        } else {
                          return [
                            createVNode(_component_v_img, {
                              src: post.value.coverImg,
                              height: "440",
                              cover: "",
                              class: "rounded-t-md align-end text-right"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_item, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_chip, {
                                      class: "bg-surface text-body-2 font-weight-medium",
                                      size: "small",
                                      textContent: toDisplayString(post.value.view)
                                    }, null, 8, ["textContent"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["src"]),
                            createVNode(_component_v_avatar, {
                              size: "40",
                              class: "mt-n7 mx-6"
                            }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode("img", {
                                    src: (_a = post.value.author) == null ? void 0 : _a.avatar,
                                    alt: "icon",
                                    height: "40"
                                  }, null, 8, ["src"])
                                ];
                              }),
                              _: 1
                            }),
                            createVNode(_component_v_card_item, { class: "pt-4 blog-detail" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_v_chip, {
                                    class: "text-body-2 font-weight-medium bg-grey100",
                                    size: "small",
                                    textContent: toDisplayString(post.value.category)
                                  }, null, 8, ["textContent"]),
                                  createVNode("h1", { class: "text-h1 font-weight-medium my-6" }, toDisplayString(post.value.title), 1),
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
                                        textContent: toDisplayString(post.value.view)
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
                                        textContent: toDisplayString((_a = post.value.comments) == null ? void 0 : _a.length)
                                      }, null, 8, ["textContent"])
                                    ]),
                                    post.value.createdAt ? (openBlock(), createBlock("div", { key: 0 }, [
                                      createVNode(_component_v_avatar, { size: "10" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_CircleIcon, { size: "10" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", {
                                        class: "text-subtitle-2 ml-2",
                                        textContent: toDisplayString(unref(format)(new Date(post.value.createdAt), "E, MMM d"))
                                      }, null, 8, ["textContent"])
                                    ])) : createCommentVNode("", true)
                                  ])
                                ];
                              }),
                              _: 1
                            }),
                            createVNode(_component_v_divider),
                            createVNode("div", { class: "pa-6" }, [
                              createVNode("h2", { class: "text-h2" }, "Title of the paragraph"),
                              createVNode("p", { class: "my-4 text-body-1 text-10" }, " But you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list. "),
                              createVNode("p", { class: "my-4 text-body-1 text-10" }, " Gigure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the "),
                              createVNode("p", { class: "text-subtitle-1 font-weight-bold text-10" }, "This is strong text."),
                              createVNode("p", { class: "text-subtitle-1 font-italic text-10" }, "This is italic text."),
                              createVNode(_component_v_divider, { class: "my-8" }),
                              createVNode("h3", { class: "text-h3" }, "Unorder list."),
                              createVNode("ul", { class: "ml-10 mt-3" }, [
                                createVNode("li", { class: "text-body-1" }, "Gigure out what it is or"),
                                createVNode("li", { class: "text-body-1" }, "The links it currently"),
                                createVNode("li", { class: "text-body-1" }, "It allows you to start your bid"),
                                createVNode("li", { class: "text-body-1" }, "Gigure out what it is or"),
                                createVNode("li", { class: "text-body-1" }, "The links it currently"),
                                createVNode("li", { class: "text-body-1" }, "It allows you to start your bid")
                              ]),
                              createVNode(_component_v_divider, { class: "my-8" }),
                              createVNode("h3", { class: "text-h3" }, "Order list."),
                              createVNode("ol", { class: "ml-10 mt-3" }, [
                                createVNode("li", { class: "text-body-1" }, "Gigure out what it is or"),
                                createVNode("li", { class: "text-body-1" }, "The links it currently"),
                                createVNode("li", { class: "text-body-1" }, "It allows you to start your bid"),
                                createVNode("li", { class: "text-body-1" }, "Gigure out what it is or"),
                                createVNode("li", { class: "text-body-1" }, "The links it currently"),
                                createVNode("li", { class: "text-body-1" }, "It allows you to start your bid")
                              ]),
                              createVNode(_component_v_divider, { class: "my-8" }),
                              createVNode("h3", { class: "text-h3" }, "Quotes"),
                              createVNode("div", { class: "d-flex mt-8 font-weight-bold ml-4" }, [
                                createVNode(_component_QuoteIcon, { class: "mt-n2" }),
                                createTextVNode(" Life is short, Smile while you still have teeth! ")
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_card, {
                      elevation: "10",
                      class: "pa-6 mt-6",
                      rounded: "md"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a;
                        if (_push4) {
                          _push4(`<h3 class="text-h4 mb-6"${_scopeId3}> Comments `);
                          _push4(ssrRenderComponent(_component_v_chip, {
                            class: "bg-primary",
                            size: "small"
                          }, null, _parent4, _scopeId3));
                          _push4(`</h3><!--[-->`);
                          ssrRenderList(post.value.comments, (comments, i) => {
                            _push4(ssrRenderComponent(AddComment, { comments }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode("h3", { class: "text-h4 mb-6" }, [
                              createTextVNode(" Comments "),
                              createVNode(_component_v_chip, {
                                class: "bg-primary",
                                size: "small",
                                textContent: toDisplayString((_a = post.value.comments) == null ? void 0 : _a.length)
                              }, null, 8, ["textContent"])
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(post.value.comments, (comments, i) => {
                              return openBlock(), createBlock(AddComment, {
                                key: post.value.id,
                                comments
                              }, null, 8, ["comments"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_card, { elevation: "10" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_img, {
                            src: post.value.coverImg,
                            height: "440",
                            cover: "",
                            class: "rounded-t-md align-end text-right"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_item, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_chip, {
                                    class: "bg-surface text-body-2 font-weight-medium",
                                    size: "small",
                                    textContent: toDisplayString(post.value.view)
                                  }, null, 8, ["textContent"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["src"]),
                          createVNode(_component_v_avatar, {
                            size: "40",
                            class: "mt-n7 mx-6"
                          }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode("img", {
                                  src: (_a = post.value.author) == null ? void 0 : _a.avatar,
                                  alt: "icon",
                                  height: "40"
                                }, null, 8, ["src"])
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_v_card_item, { class: "pt-4 blog-detail" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode(_component_v_chip, {
                                  class: "text-body-2 font-weight-medium bg-grey100",
                                  size: "small",
                                  textContent: toDisplayString(post.value.category)
                                }, null, 8, ["textContent"]),
                                createVNode("h1", { class: "text-h1 font-weight-medium my-6" }, toDisplayString(post.value.title), 1),
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
                                      textContent: toDisplayString(post.value.view)
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
                                      textContent: toDisplayString((_a = post.value.comments) == null ? void 0 : _a.length)
                                    }, null, 8, ["textContent"])
                                  ]),
                                  post.value.createdAt ? (openBlock(), createBlock("div", { key: 0 }, [
                                    createVNode(_component_v_avatar, { size: "10" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_CircleIcon, { size: "10" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("span", {
                                      class: "text-subtitle-2 ml-2",
                                      textContent: toDisplayString(unref(format)(new Date(post.value.createdAt), "E, MMM d"))
                                    }, null, 8, ["textContent"])
                                  ])) : createCommentVNode("", true)
                                ])
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_v_divider),
                          createVNode("div", { class: "pa-6" }, [
                            createVNode("h2", { class: "text-h2" }, "Title of the paragraph"),
                            createVNode("p", { class: "my-4 text-body-1 text-10" }, " But you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list. "),
                            createVNode("p", { class: "my-4 text-body-1 text-10" }, " Gigure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the "),
                            createVNode("p", { class: "text-subtitle-1 font-weight-bold text-10" }, "This is strong text."),
                            createVNode("p", { class: "text-subtitle-1 font-italic text-10" }, "This is italic text."),
                            createVNode(_component_v_divider, { class: "my-8" }),
                            createVNode("h3", { class: "text-h3" }, "Unorder list."),
                            createVNode("ul", { class: "ml-10 mt-3" }, [
                              createVNode("li", { class: "text-body-1" }, "Gigure out what it is or"),
                              createVNode("li", { class: "text-body-1" }, "The links it currently"),
                              createVNode("li", { class: "text-body-1" }, "It allows you to start your bid"),
                              createVNode("li", { class: "text-body-1" }, "Gigure out what it is or"),
                              createVNode("li", { class: "text-body-1" }, "The links it currently"),
                              createVNode("li", { class: "text-body-1" }, "It allows you to start your bid")
                            ]),
                            createVNode(_component_v_divider, { class: "my-8" }),
                            createVNode("h3", { class: "text-h3" }, "Order list."),
                            createVNode("ol", { class: "ml-10 mt-3" }, [
                              createVNode("li", { class: "text-body-1" }, "Gigure out what it is or"),
                              createVNode("li", { class: "text-body-1" }, "The links it currently"),
                              createVNode("li", { class: "text-body-1" }, "It allows you to start your bid"),
                              createVNode("li", { class: "text-body-1" }, "Gigure out what it is or"),
                              createVNode("li", { class: "text-body-1" }, "The links it currently"),
                              createVNode("li", { class: "text-body-1" }, "It allows you to start your bid")
                            ]),
                            createVNode(_component_v_divider, { class: "my-8" }),
                            createVNode("h3", { class: "text-h3" }, "Quotes"),
                            createVNode("div", { class: "d-flex mt-8 font-weight-bold ml-4" }, [
                              createVNode(_component_QuoteIcon, { class: "mt-n2" }),
                              createTextVNode(" Life is short, Smile while you still have teeth! ")
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card, {
                        elevation: "10",
                        class: "pa-6 mt-6",
                        rounded: "md"
                      }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode("h3", { class: "text-h4 mb-6" }, [
                              createTextVNode(" Comments "),
                              createVNode(_component_v_chip, {
                                class: "bg-primary",
                                size: "small",
                                textContent: toDisplayString((_a = post.value.comments) == null ? void 0 : _a.length)
                              }, null, 8, ["textContent"])
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(post.value.comments, (comments, i) => {
                              return openBlock(), createBlock(AddComment, {
                                key: post.value.id,
                                comments
                              }, null, 8, ["comments"]);
                            }), 128))
                          ];
                        }),
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
                        createVNode(_component_v_img, {
                          src: post.value.coverImg,
                          height: "440",
                          cover: "",
                          class: "rounded-t-md align-end text-right"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_item, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_chip, {
                                  class: "bg-surface text-body-2 font-weight-medium",
                                  size: "small",
                                  textContent: toDisplayString(post.value.view)
                                }, null, 8, ["textContent"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["src"]),
                        createVNode(_component_v_avatar, {
                          size: "40",
                          class: "mt-n7 mx-6"
                        }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode("img", {
                                src: (_a = post.value.author) == null ? void 0 : _a.avatar,
                                alt: "icon",
                                height: "40"
                              }, null, 8, ["src"])
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_v_card_item, { class: "pt-4 blog-detail" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode(_component_v_chip, {
                                class: "text-body-2 font-weight-medium bg-grey100",
                                size: "small",
                                textContent: toDisplayString(post.value.category)
                              }, null, 8, ["textContent"]),
                              createVNode("h1", { class: "text-h1 font-weight-medium my-6" }, toDisplayString(post.value.title), 1),
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
                                    textContent: toDisplayString(post.value.view)
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
                                    textContent: toDisplayString((_a = post.value.comments) == null ? void 0 : _a.length)
                                  }, null, 8, ["textContent"])
                                ]),
                                post.value.createdAt ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createVNode(_component_v_avatar, { size: "10" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_CircleIcon, { size: "10" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("span", {
                                    class: "text-subtitle-2 ml-2",
                                    textContent: toDisplayString(unref(format)(new Date(post.value.createdAt), "E, MMM d"))
                                  }, null, 8, ["textContent"])
                                ])) : createCommentVNode("", true)
                              ])
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_v_divider),
                        createVNode("div", { class: "pa-6" }, [
                          createVNode("h2", { class: "text-h2" }, "Title of the paragraph"),
                          createVNode("p", { class: "my-4 text-body-1 text-10" }, " But you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list. "),
                          createVNode("p", { class: "my-4 text-body-1 text-10" }, " Gigure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the "),
                          createVNode("p", { class: "text-subtitle-1 font-weight-bold text-10" }, "This is strong text."),
                          createVNode("p", { class: "text-subtitle-1 font-italic text-10" }, "This is italic text."),
                          createVNode(_component_v_divider, { class: "my-8" }),
                          createVNode("h3", { class: "text-h3" }, "Unorder list."),
                          createVNode("ul", { class: "ml-10 mt-3" }, [
                            createVNode("li", { class: "text-body-1" }, "Gigure out what it is or"),
                            createVNode("li", { class: "text-body-1" }, "The links it currently"),
                            createVNode("li", { class: "text-body-1" }, "It allows you to start your bid"),
                            createVNode("li", { class: "text-body-1" }, "Gigure out what it is or"),
                            createVNode("li", { class: "text-body-1" }, "The links it currently"),
                            createVNode("li", { class: "text-body-1" }, "It allows you to start your bid")
                          ]),
                          createVNode(_component_v_divider, { class: "my-8" }),
                          createVNode("h3", { class: "text-h3" }, "Order list."),
                          createVNode("ol", { class: "ml-10 mt-3" }, [
                            createVNode("li", { class: "text-body-1" }, "Gigure out what it is or"),
                            createVNode("li", { class: "text-body-1" }, "The links it currently"),
                            createVNode("li", { class: "text-body-1" }, "It allows you to start your bid"),
                            createVNode("li", { class: "text-body-1" }, "Gigure out what it is or"),
                            createVNode("li", { class: "text-body-1" }, "The links it currently"),
                            createVNode("li", { class: "text-body-1" }, "It allows you to start your bid")
                          ]),
                          createVNode(_component_v_divider, { class: "my-8" }),
                          createVNode("h3", { class: "text-h3" }, "Quotes"),
                          createVNode("div", { class: "d-flex mt-8 font-weight-bold ml-4" }, [
                            createVNode(_component_QuoteIcon, { class: "mt-n2" }),
                            createTextVNode(" Life is short, Smile while you still have teeth! ")
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card, {
                      elevation: "10",
                      class: "pa-6 mt-6",
                      rounded: "md"
                    }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode("h3", { class: "text-h4 mb-6" }, [
                            createTextVNode(" Comments "),
                            createVNode(_component_v_chip, {
                              class: "bg-primary",
                              size: "small",
                              textContent: toDisplayString((_a = post.value.comments) == null ? void 0 : _a.length)
                            }, null, 8, ["textContent"])
                          ]),
                          (openBlock(true), createBlock(Fragment, null, renderList(post.value.comments, (comments, i) => {
                            return openBlock(), createBlock(AddComment, {
                              key: post.value.id,
                              comments
                            }, null, 8, ["comments"]);
                          }), 128))
                        ];
                      }),
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
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/blog/detail/blogDetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    ref({ title: "Blog Detail" });
    ref([
      {
        text: "Home",
        disabled: false,
        to: "/"
      },
      {
        text: "Blog",
        disabled: false,
        to: "/apps/blog/posts"
      },
      {
        text: "Blog post",
        disabled: true
      }
    ]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/blog/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-TKwT7xLM.js.map
