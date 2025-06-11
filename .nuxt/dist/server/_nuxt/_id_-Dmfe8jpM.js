import { defineComponent, computed, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, unref, createBlock, createCommentVNode, openBlock, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./TextBannerCard-D4T5bcr7.js";
import { _ as _sfc_main$2 } from "./Layout-pJxOOMlF.js";
import { format } from "date-fns";
import { useRoute } from "vue-router";
import { u as useBlogStore } from "./blog-DVMJJEFA.js";
import { _ as _sfc_main$4 } from "./PurchaseTemplate-D9pvsFKX.js";
import "hookable";
import "vue-tabler-icons";
import "#internal/nuxt/paths";
import "../server.mjs";
import "ofetch";
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
import "lodash";
import "vue-draggable-next";
import "vue3-easy-data-table";
import "vue-easy-lightbox";
import "vue-scrollto";
import "./Logo-DggZ73XB.js";
import "./nuxt-link-DZ3wFR7I.js";
import "./customizer-CM6PVnj3.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BlogDetails",
  __ssrInlineRender: true,
  setup(__props) {
    const title = useRoute();
    title.path.split("/").pop();
    const store = useBlogStore();
    const post = computed(() => {
      return store.selectedPost;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
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
      _push(ssrRenderComponent(_component_v_container, mergeProps({ class: "max-width-1218 py-10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (post.value) {
              _push2(ssrRenderComponent(_component_v_row, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_card, {
                            elevation: "10",
                            rounded: "md"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_img, {
                                  src: post.value.coverImg,
                                  height: "440",
                                  cover: "",
                                  class: "rounded-t-md align-end text-right"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_card_item, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_chip, {
                                              class: "bg-surface text-body-2 font-weight-medium",
                                              size: "small"
                                            }, null, _parent7, _scopeId6));
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
                                      }, _parent6, _scopeId5));
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
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_avatar, {
                                  size: "40",
                                  class: "mt-n7 mx-6"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    var _a, _b;
                                    if (_push6) {
                                      _push6(`<img${ssrRenderAttr("src", (_a = post.value.author) == null ? void 0 : _a.avatar)} alt="icon" height="40"${_scopeId5}>`);
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
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_card_item, { class: "pt-4" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    var _a, _b;
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_chip, {
                                        class: "text-body-2 font-weight-medium bg-grey100",
                                        size: "small"
                                      }, null, _parent6, _scopeId5));
                                      _push6(`<h1 class="text-h1 text-13 my-6"${_scopeId5}>${ssrInterpolate(post.value.title)}</h1><div class="d-flex align-center justify-space-between"${_scopeId5}><div${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_v_avatar, {
                                        class: "",
                                        size: "18"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_EyeIcon, { size: "18" }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_EyeIcon, { size: "18" })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`<span class="text-subtitle-1 ml-2"${_scopeId5}>${ssrInterpolate(post.value.view)}</span>`);
                                      _push6(ssrRenderComponent(_component_v_avatar, {
                                        class: "ml-4",
                                        size: "18"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_Message2Icon, { size: "18" }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_Message2Icon, { size: "18" })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`<span class="text-subtitle-1 ml-2"${_scopeId5}>${ssrInterpolate((_a = post.value.comments) == null ? void 0 : _a.length)}</span></div>`);
                                      if (post.value.createdAt) {
                                        _push6(`<div${_scopeId5}>`);
                                        _push6(ssrRenderComponent(_component_v_avatar, { size: "10" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_CircleIcon, { size: "10" }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_CircleIcon, { size: "10" })
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                        _push6(`<span class="text-subtitle-2 ml-2"${_scopeId5}>${ssrInterpolate(unref(format)(new Date(post.value.createdAt), "E, MMM d"))}</span></div>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(`</div>`);
                                    } else {
                                      return [
                                        createVNode(_component_v_chip, {
                                          class: "text-body-2 font-weight-medium bg-grey100",
                                          size: "small",
                                          textContent: toDisplayString(post.value.category)
                                        }, null, 8, ["textContent"]),
                                        createVNode("h1", { class: "text-h1 text-13 my-6" }, toDisplayString(post.value.title), 1),
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
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_divider, null, null, _parent5, _scopeId4));
                                _push5(`<div class="pa-6"${_scopeId4}><h2 class="text-h2"${_scopeId4}>Title of the paragraph</h2><p class="my-4 text-body-1 text-10"${_scopeId4}> But you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list. </p><p class="my-4 text-body-1 text-10"${_scopeId4}> Gigure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the </p><p class="text-subtitle-1 font-weight-bold text-10"${_scopeId4}>This is strong text.</p><p class="text-subtitle-1 font-italic text-10"${_scopeId4}>This is italic text.</p>`);
                                _push5(ssrRenderComponent(_component_v_divider, { class: "my-8" }, null, _parent5, _scopeId4));
                                _push5(`<h3 class="text-h3"${_scopeId4}>Unorder list.</h3><ul class="ml-10 mt-3"${_scopeId4}><li class="text-body-1"${_scopeId4}>Gigure out what it is or</li><li class="text-body-1"${_scopeId4}>The links it currently</li><li class="text-body-1"${_scopeId4}>It allows you to start your bid</li><li class="text-body-1"${_scopeId4}>Gigure out what it is or</li><li class="text-body-1"${_scopeId4}>The links it currently</li><li class="text-body-1"${_scopeId4}>It allows you to start your bid</li></ul>`);
                                _push5(ssrRenderComponent(_component_v_divider, { class: "my-8" }, null, _parent5, _scopeId4));
                                _push5(`<h3 class="text-h3"${_scopeId4}>Order list.</h3><ol class="ml-10 mt-3"${_scopeId4}><li class="text-body-1"${_scopeId4}>Gigure out what it is or</li><li class="text-body-1"${_scopeId4}>The links it currently</li><li class="text-body-1"${_scopeId4}>It allows you to start your bid</li><li class="text-body-1"${_scopeId4}>Gigure out what it is or</li><li class="text-body-1"${_scopeId4}>The links it currently</li><li class="text-body-1"${_scopeId4}>It allows you to start your bid</li></ol>`);
                                _push5(ssrRenderComponent(_component_v_divider, { class: "my-8" }, null, _parent5, _scopeId4));
                                _push5(`<h3 class="text-h3"${_scopeId4}>Quotes</h3><div class="d-flex mt-8 font-weight-bold ml-4"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_QuoteIcon, { class: "mt-n2" }, null, _parent5, _scopeId4));
                                _push5(` Life is short, Smile while you still have teeth! </div></div>`);
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
                                  createVNode(_component_v_card_item, { class: "pt-4" }, {
                                    default: withCtx(() => {
                                      var _a;
                                      return [
                                        createVNode(_component_v_chip, {
                                          class: "text-body-2 font-weight-medium bg-grey100",
                                          size: "small",
                                          textContent: toDisplayString(post.value.category)
                                        }, null, 8, ["textContent"]),
                                        createVNode("h1", { class: "text-h1 text-13 my-6" }, toDisplayString(post.value.title), 1),
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
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_card, {
                              elevation: "10",
                              rounded: "md"
                            }, {
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
                                createVNode(_component_v_card_item, { class: "pt-4" }, {
                                  default: withCtx(() => {
                                    var _a;
                                    return [
                                      createVNode(_component_v_chip, {
                                        class: "text-body-2 font-weight-medium bg-grey100",
                                        size: "small",
                                        textContent: toDisplayString(post.value.category)
                                      }, null, 8, ["textContent"]),
                                      createVNode("h1", { class: "text-h1 text-13 my-6" }, toDisplayString(post.value.title), 1),
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
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_col, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            elevation: "10",
                            rounded: "md"
                          }, {
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
                              createVNode(_component_v_card_item, { class: "pt-4" }, {
                                default: withCtx(() => {
                                  var _a;
                                  return [
                                    createVNode(_component_v_chip, {
                                      class: "text-body-2 font-weight-medium bg-grey100",
                                      size: "small",
                                      textContent: toDisplayString(post.value.category)
                                    }, null, 8, ["textContent"]),
                                    createVNode("h1", { class: "text-h1 text-13 my-6" }, toDisplayString(post.value.title), 1),
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
              _push2(`<!---->`);
            }
          } else {
            return [
              post.value ? (openBlock(), createBlock(_component_v_row, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, {
                        elevation: "10",
                        rounded: "md"
                      }, {
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
                          createVNode(_component_v_card_item, { class: "pt-4" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode(_component_v_chip, {
                                  class: "text-body-2 font-weight-medium bg-grey100",
                                  size: "small",
                                  textContent: toDisplayString(post.value.category)
                                }, null, 8, ["textContent"]),
                                createVNode("h1", { class: "text-h1 text-13 my-6" }, toDisplayString(post.value.title), 1),
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
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/Blog/details/BlogDetails.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, {
              title: "Our most recent articles",
              caption: "Blog Details"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, {
                title: "Our most recent articles",
                caption: "Blog Details"
              }),
              createVNode(_sfc_main$1),
              createVNode(_sfc_main$4)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/front-pages/blog/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-Dmfe8jpM.js.map
