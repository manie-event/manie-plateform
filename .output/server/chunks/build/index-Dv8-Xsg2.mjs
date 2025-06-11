import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createVNode, unref, computed, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _sfc_main$6 } from './AppBaseCard-BbBEC2T8.mjs';
import { _ as _export_sfc, h as user1, d as defineStore, g as useDisplay, a as axiosServices } from './server.mjs';
import { formatDistanceToNowStrict, sub } from 'date-fns';
import { last, uniq, flatten } from 'lodash';
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
import 'vue-router';
import 'vue-tabler-icons';
import 'vue3-perfect-scrollbar';
import 'maska';
import 'axios-mock-adapter';
import 'axios';
import 'chance';
import 'vue-draggable-next';
import 'vue3-easy-data-table';
import 'vue-easy-lightbox';
import 'vue-scrollto';

const useChatStore = defineStore({
  id: "chat",
  state: () => ({
    chats: [],
    chatContent: 1
  }),
  getters: {
    // Get Chats from Getters
    // getChats(state) {
    //     return state.chats;
    // }
  },
  actions: {
    // Fetch Chat from action
    async fetchChats() {
      try {
        const data = await axiosServices.get("/api/data/chat/ChatData");
        this.chats = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    //select chat
    SelectChat(itemID) {
      this.chatContent = itemID;
    },
    sendMsg(itemID, item) {
      const newMessage = {
        id: itemID,
        msg: item,
        type: "text",
        attachments: [],
        createdAt: sub(/* @__PURE__ */ new Date(), { seconds: 1 }),
        senderId: itemID
      };
      this.chats = this.chats.filter((chat) => {
        return chat.id === itemID ? {
          ...chat,
          ...chat.chatHistory.push(newMessage)
        } : chat;
      });
    }
  }
});
const _sfc_main$5 = {
  __name: "ChatListing",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useChatStore();
    const getChats = computed(() => {
      return store.chats;
    });
    const chatItem = getChats;
    const searchValue = ref("");
    const filteredChats = computed(() => {
      return chatItem.value.filter((chat) => {
        return chat.name.toLowerCase().includes(searchValue.value.toLowerCase());
      });
    });
    const lastActivity = (chat) => last(chat.chatHistory).createdAt;
    const items = ref([
      { title: "Sort by time" },
      { title: "Sort by Unread" },
      { title: "Mark all as read" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_ChevronDownIcon = resolveComponent("ChevronDownIcon");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_perfect_scrollbar = resolveComponent("perfect-scrollbar");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_badge = resolveComponent("v-badge");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_sheet, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-6 pt-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_text_field, {
              variant: "outlined",
              modelValue: searchValue.value,
              "onUpdate:modelValue": ($event) => searchValue.value = $event,
              "append-inner-icon": "mdi-magnify",
              placeholder: "Search Contact",
              "hide-details": "",
              density: "compact"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_menu, null, {
              activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, mergeProps({
                    color: "white",
                    variant: "flat",
                    class: "mt-4 text-medium-emphasis"
                  }, props), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Recent Chats `);
                        _push4(ssrRenderComponent(_component_ChevronDownIcon, {
                          size: "18",
                          class: "ml-2"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode("Recent Chats "),
                          createVNode(_component_ChevronDownIcon, {
                            size: "18",
                            class: "ml-2"
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, mergeProps({
                      color: "white",
                      variant: "flat",
                      class: "mt-4 text-medium-emphasis"
                    }, props), {
                      default: withCtx(() => [
                        createTextVNode("Recent Chats "),
                        createVNode(_component_ChevronDownIcon, {
                          size: "18",
                          class: "ml-2"
                        })
                      ]),
                      _: 2
                    }, 1040)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_list, { class: "elevation-10" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(items.value, (item, index2) => {
                          _push4(ssrRenderComponent(_component_v_list_item, {
                            key: index2,
                            value: index2
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_list_item_title, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.title)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_list_item_title, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index2) => {
                            return openBlock(), createBlock(_component_v_list_item, {
                              key: index2,
                              value: index2
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.title), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_list, { class: "elevation-10" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index2) => {
                          return openBlock(), createBlock(_component_v_list_item, {
                            key: index2,
                            value: index2
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "px-6 pt-3" }, [
                createVNode(_component_v_text_field, {
                  variant: "outlined",
                  modelValue: searchValue.value,
                  "onUpdate:modelValue": ($event) => searchValue.value = $event,
                  "append-inner-icon": "mdi-magnify",
                  placeholder: "Search Contact",
                  "hide-details": "",
                  density: "compact"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_menu, null, {
                  activator: withCtx(({ props }) => [
                    createVNode(_component_v_btn, mergeProps({
                      color: "white",
                      variant: "flat",
                      class: "mt-4 text-medium-emphasis"
                    }, props), {
                      default: withCtx(() => [
                        createTextVNode("Recent Chats "),
                        createVNode(_component_ChevronDownIcon, {
                          size: "18",
                          class: "ml-2"
                        })
                      ]),
                      _: 2
                    }, 1040)
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_v_list, { class: "elevation-10" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index2) => {
                          return openBlock(), createBlock(_component_v_list_item, {
                            key: index2,
                            value: index2
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
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
      }, _parent));
      _push(ssrRenderComponent(_component_perfect_scrollbar, { class: "lgScroll h-100" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_list, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(filteredChats.value, (chat) => {
                    _push3(ssrRenderComponent(_component_v_list_item, {
                      value: chat.id,
                      color: "primary",
                      class: "text-no-wrap chatItem",
                      key: chat.id,
                      lines: "two",
                      active: unref(store).chatContent === chat.id,
                      onClick: ($event) => unref(store).SelectChat(chat.id)
                    }, {
                      prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_avatar, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img${ssrRenderAttr("src", chat.thumb)} alt="pro" width="50"${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: chat.thumb,
                                    alt: "pro",
                                    width: "50"
                                  }, null, 8, ["src"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_badge, {
                            class: "badg-dot",
                            dot: "",
                            color: chat.status === "away" ? "warning" : chat.status === "busy" ? "error" : chat.status === "online" ? "success" : "containerBg"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_avatar, null, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: chat.thumb,
                                  alt: "pro",
                                  width: "50"
                                }, null, 8, ["src"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_badge, {
                              class: "badg-dot",
                              dot: "",
                              color: chat.status === "away" ? "warning" : chat.status === "busy" ? "error" : chat.status === "online" ? "success" : "containerBg"
                            }, null, 8, ["color"])
                          ];
                        }
                      }),
                      append: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="d-flex flex-column text-right w-25"${_scopeId3}><small class="textPrimary text-subtitle-2"${_scopeId3}>${ssrInterpolate(unref(formatDistanceToNowStrict)(new Date(lastActivity(chat)), {
                            addSuffix: false
                          }))}</small></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "d-flex flex-column text-right w-25" }, [
                              createVNode("small", { class: "textPrimary text-subtitle-2" }, toDisplayString(unref(formatDistanceToNowStrict)(new Date(lastActivity(chat)), {
                                addSuffix: false
                              })), 1)
                            ])
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_list_item_title, { class: "text-subtitle-1 textPrimary w-100 font-weight-semibold" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(chat.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(chat.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          if (chat.chatHistory.slice(-1)[0].type == "img") {
                            _push4(ssrRenderComponent(_component_v_sheet, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<small class="textPrimary text-subtitle-2"${_scopeId4}>Sent a Photo</small>`);
                                } else {
                                  return [
                                    createVNode("small", { class: "textPrimary text-subtitle-2" }, "Sent a Photo")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<div class="text-subtitle-2 textPrimary mt-1 text-truncate w-100"${_scopeId3}>${ssrInterpolate(chat.chatHistory.slice(-1)[0].msg)}</div>`);
                          }
                        } else {
                          return [
                            createVNode(_component_v_list_item_title, { class: "text-subtitle-1 textPrimary w-100 font-weight-semibold" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(chat.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            chat.chatHistory.slice(-1)[0].type == "img" ? (openBlock(), createBlock(_component_v_sheet, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode("small", { class: "textPrimary text-subtitle-2" }, "Sent a Photo")
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "text-subtitle-2 textPrimary mt-1 text-truncate w-100"
                            }, toDisplayString(chat.chatHistory.slice(-1)[0].msg), 1))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(filteredChats.value, (chat) => {
                      return openBlock(), createBlock(_component_v_list_item, {
                        value: chat.id,
                        color: "primary",
                        class: "text-no-wrap chatItem",
                        key: chat.id,
                        lines: "two",
                        active: unref(store).chatContent === chat.id,
                        onClick: ($event) => unref(store).SelectChat(chat.id)
                      }, {
                        prepend: withCtx(() => [
                          createVNode(_component_v_avatar, null, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: chat.thumb,
                                alt: "pro",
                                width: "50"
                              }, null, 8, ["src"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_v_badge, {
                            class: "badg-dot",
                            dot: "",
                            color: chat.status === "away" ? "warning" : chat.status === "busy" ? "error" : chat.status === "online" ? "success" : "containerBg"
                          }, null, 8, ["color"])
                        ]),
                        append: withCtx(() => [
                          createVNode("div", { class: "d-flex flex-column text-right w-25" }, [
                            createVNode("small", { class: "textPrimary text-subtitle-2" }, toDisplayString(unref(formatDistanceToNowStrict)(new Date(lastActivity(chat)), {
                              addSuffix: false
                            })), 1)
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_v_list_item_title, { class: "text-subtitle-1 textPrimary w-100 font-weight-semibold" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(chat.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          chat.chatHistory.slice(-1)[0].type == "img" ? (openBlock(), createBlock(_component_v_sheet, { key: 0 }, {
                            default: withCtx(() => [
                              createVNode("small", { class: "textPrimary text-subtitle-2" }, "Sent a Photo")
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "text-subtitle-2 textPrimary mt-1 text-truncate w-100"
                          }, toDisplayString(chat.chatHistory.slice(-1)[0].msg), 1))
                        ]),
                        _: 2
                      }, 1032, ["value", "active", "onClick"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_list, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(filteredChats.value, (chat) => {
                    return openBlock(), createBlock(_component_v_list_item, {
                      value: chat.id,
                      color: "primary",
                      class: "text-no-wrap chatItem",
                      key: chat.id,
                      lines: "two",
                      active: unref(store).chatContent === chat.id,
                      onClick: ($event) => unref(store).SelectChat(chat.id)
                    }, {
                      prepend: withCtx(() => [
                        createVNode(_component_v_avatar, null, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: chat.thumb,
                              alt: "pro",
                              width: "50"
                            }, null, 8, ["src"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_badge, {
                          class: "badg-dot",
                          dot: "",
                          color: chat.status === "away" ? "warning" : chat.status === "busy" ? "error" : chat.status === "online" ? "success" : "containerBg"
                        }, null, 8, ["color"])
                      ]),
                      append: withCtx(() => [
                        createVNode("div", { class: "d-flex flex-column text-right w-25" }, [
                          createVNode("small", { class: "textPrimary text-subtitle-2" }, toDisplayString(unref(formatDistanceToNowStrict)(new Date(lastActivity(chat)), {
                            addSuffix: false
                          })), 1)
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_v_list_item_title, { class: "text-subtitle-1 textPrimary w-100 font-weight-semibold" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(chat.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        chat.chatHistory.slice(-1)[0].type == "img" ? (openBlock(), createBlock(_component_v_sheet, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode("small", { class: "textPrimary text-subtitle-2" }, "Sent a Photo")
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "text-subtitle-2 textPrimary mt-1 text-truncate w-100"
                        }, toDisplayString(chat.chatHistory.slice(-1)[0].msg), 1))
                      ]),
                      _: 2
                    }, 1032, ["value", "active", "onClick"]);
                  }), 128))
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
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/chats/ChatListing.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ChatSendMsg",
  __ssrInlineRender: true,
  setup(__props) {
    const msg = ref("");
    useChatStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_MoodSmileIcon = resolveComponent("MoodSmileIcon");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_SendIcon = resolveComponent("SendIcon");
      const _component_PhotoIcon = resolveComponent("PhotoIcon");
      const _component_PaperclipIcon = resolveComponent("PaperclipIcon");
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "d-flex align-center pa-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_btn, {
        icon: "",
        variant: "text",
        class: "text-medium-emphasis"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_MoodSmileIcon, { size: "24" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_MoodSmileIcon, { size: "24" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_text_field, {
        variant: "solo",
        "hide-details": "",
        modelValue: msg.value,
        "onUpdate:modelValue": ($event) => msg.value = $event,
        color: "primary",
        class: "shadow-none",
        density: "compact",
        placeholder: "Type a Message"
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        icon: "",
        variant: "text",
        type: "submit",
        class: "text-medium-emphasis",
        disabled: !msg.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SendIcon, { size: "20" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SendIcon, { size: "20" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        icon: "",
        variant: "text",
        class: "text-medium-emphasis"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PhotoIcon, { size: "20" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PhotoIcon, { size: "20" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        icon: "",
        variant: "text",
        class: "text-medium-emphasis"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PaperclipIcon, { size: "20" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PaperclipIcon, { size: "20" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/chats/ChatSendMsg.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChatInfo",
  __ssrInlineRender: true,
  props: { chatDetail: Object },
  setup(__props) {
    const props = __props;
    const totalAttachment = computed(() => {
      var _a;
      return uniq(flatten((_a = props.chatDetail) == null ? void 0 : _a.chatHistory.map((item) => item.attachment))).length;
    });
    const totalMedia = computed(() => {
      var _a;
      return uniq(
        flatten(
          (_a = props.chatDetail) == null ? void 0 : _a.chatHistory.map((item) => (item == null ? void 0 : item.type) === "img" ? item.msg : null)
        )
      ).length - 1;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_alert = resolveComponent("v-alert");
      if (__props.chatDetail) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "pa-6" }, _attrs))}><h6 class="text-h6 mb-3">Media (${ssrInterpolate(totalMedia.value)})</h6><!--[-->`);
        ssrRenderList(__props.chatDetail.chatHistory, (chat) => {
          _push(`<div>`);
          if (chat.type == "img") {
            _push(`<div><img${ssrRenderAttr("src", chat.msg)} alt="img" width="100"></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--><h6 class="text-h6 mb-3 mt-7">Attachments (${ssrInterpolate(totalAttachment.value)})</h6>`);
        if (totalAttachment.value != 0) {
          _push(ssrRenderComponent(_component_v_sheet, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(__props.chatDetail.chatHistory, (chat) => {
                  _push2(`<div${_scopeId}><!--[-->`);
                  ssrRenderList(chat.attachment, (atch) => {
                    _push2(`<div class="d-flex align-center mt-7"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_v_avatar, {
                      class: "rounded-md bg-lightsecondary",
                      size: "48"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<img width="24" alt="file"${ssrRenderAttr("src", atch.icon)}${_scopeId2}>`);
                        } else {
                          return [
                            createVNode("img", {
                              width: "24",
                              alt: "file",
                              src: atch.icon
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`<div class="pl-4"${_scopeId}><h6 class="text-subtitle-1 font-weight-semibold"${_scopeId}>${ssrInterpolate(atch.file)}</h6><h5 class="text-subtitle-2 mt-1"${_scopeId}>${ssrInterpolate(atch.fileSize)}</h5></div></div>`);
                  });
                  _push2(`<!--]--></div>`);
                });
                _push2(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.chatDetail.chatHistory, (chat) => {
                    return openBlock(), createBlock("div", {
                      key: chat.id
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(chat.attachment, (atch) => {
                        return openBlock(), createBlock("div", {
                          class: "d-flex align-center mt-7",
                          key: atch.file
                        }, [
                          createVNode(_component_v_avatar, {
                            class: "rounded-md bg-lightsecondary",
                            size: "48"
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                width: "24",
                                alt: "file",
                                src: atch.icon
                              }, null, 8, ["src"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("div", { class: "pl-4" }, [
                            createVNode("h6", { class: "text-subtitle-1 font-weight-semibold" }, toDisplayString(atch.file), 1),
                            createVNode("h5", { class: "text-subtitle-2 mt-1" }, toDisplayString(atch.fileSize), 1)
                          ])
                        ]);
                      }), 128))
                    ]);
                  }), 128))
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(ssrRenderComponent(_component_v_sheet, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_v_alert, {
                  color: "error",
                  type: "warning",
                  density: "compact",
                  variant: "tonal",
                  class: "text-subtitle-1"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` No Attachments Found! `);
                    } else {
                      return [
                        createTextVNode(" No Attachments Found! ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_v_alert, {
                    color: "error",
                    type: "warning",
                    density: "compact",
                    variant: "tonal",
                    class: "text-subtitle-1"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" No Attachments Found! ")
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/chats/ChatInfo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ChatDetail",
  __ssrInlineRender: true,
  setup(__props) {
    const { lgAndUp } = useDisplay();
    const store = useChatStore();
    const chatDetail = computed(() => {
      return store.chats[store.chatContent - 1];
    });
    const Rpart = ref(lgAndUp ? true : false);
    const isMobileDrawerOpen = ref(false);
    function toggleRpart() {
      Rpart.value = !Rpart.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_badge = resolveComponent("v-badge");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_PhoneIcon = resolveComponent("PhoneIcon");
      const _component_VideoPlusIcon = resolveComponent("VideoPlusIcon");
      const _component_Menu2Icon = resolveComponent("Menu2Icon");
      const _component_DotsVerticalIcon = resolveComponent("DotsVerticalIcon");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_perfect_scrollbar = resolveComponent("perfect-scrollbar");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      _push(`<!--[-->`);
      if (chatDetail.value) {
        _push(`<div class="customHeight"><div><div class="d-flex align-center gap-3 pa-4 justify-space-between"><div class="d-flex gap-2 align-center">`);
        _push(ssrRenderComponent(_component_v_avatar, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", chatDetail.value.thumb)} alt="pro" width="50"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: chatDetail.value.thumb,
                  alt: "pro",
                  width: "50"
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_v_badge, {
          class: "badg-dotDetail",
          dot: "",
          color: chatDetail.value.status === "away" ? "warning" : chatDetail.value.status === "busy" ? "error" : chatDetail.value.status === "online" ? "success" : "containerBg"
        }, null, _parent));
        _push(`<div><h5 class="text-h5 mb-n1">${ssrInterpolate(chatDetail.value.name)}</h5><small class="textPrimary">${ssrInterpolate(chatDetail.value.status)}</small></div></div><div class="d-flex">`);
        _push(ssrRenderComponent(_component_v_btn, {
          icon: "",
          variant: "text",
          class: "text-medium-emphasis"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_PhoneIcon, { size: "24" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_PhoneIcon, { size: "24" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_v_btn, {
          icon: "",
          variant: "text",
          class: "text-medium-emphasis"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_VideoPlusIcon, { size: "24" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_VideoPlusIcon, { size: "24" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_v_btn, {
          icon: "",
          variant: "text",
          class: "text-medium-emphasis d-lg-flex d-none",
          onClick: toggleRpart
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Menu2Icon, { size: "24" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Menu2Icon, { size: "24" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_v_btn, {
          icon: "",
          variant: "text",
          class: "text-medium-emphasis d-lg-none d-flex",
          onClick: ($event) => isMobileDrawerOpen.value = !isMobileDrawerOpen.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_DotsVerticalIcon, { size: "24" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_DotsVerticalIcon, { size: "24" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
        _push(ssrRenderComponent(_component_v_divider, null, null, _parent));
        _push(ssrRenderComponent(_component_perfect_scrollbar, { class: "rightpartHeight h-100" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="d-flex"${_scopeId}><div class="w-100" style="${ssrRenderStyle({ "height": "calc(100vh - 360px)" })}"${_scopeId}><!--[-->`);
              ssrRenderList(chatDetail.value.chatHistory, (chat) => {
                _push2(`<div class="pa-5"${_scopeId}>`);
                if (chatDetail.value.id === chat.senderId) {
                  _push2(`<div class="justify-end d-flex text-end mb-1"${_scopeId}><div${_scopeId}>`);
                  if (chat.createdAt) {
                    _push2(`<small class="text-medium-emphasis text-subtitle-2"${_scopeId}>${ssrInterpolate(unref(formatDistanceToNowStrict)(new Date(chat.createdAt), {
                      addSuffix: false
                    }))} ago</small>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (chat.type == "text") {
                    _push2(ssrRenderComponent(_component_v_sheet, { class: "bg-lightprimary rounded-md px-3 py-2 mb-1" }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<p class="text-body-1"${_scopeId2}>${ssrInterpolate(chat.msg)}</p>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-body-1" }, toDisplayString(chat.msg), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  if (chat.type == "img") {
                    _push2(ssrRenderComponent(_component_v_sheet, { class: "mb-1" }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<img${ssrRenderAttr("src", chat.msg)} class="rounded-md" alt="pro" width="250"${_scopeId2}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: chat.msg,
                              class: "rounded-md",
                              alt: "pro",
                              width: "250"
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div></div>`);
                } else {
                  _push2(`<div class="d-flex align-items-start gap-3 mb-1"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_v_avatar, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<img${ssrRenderAttr("src", chatDetail.value.thumb)} alt="pro" width="40"${_scopeId2}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: chatDetail.value.thumb,
                            alt: "pro",
                            width: "40"
                          }, null, 8, ["src"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`<div${_scopeId}>`);
                  if (chat.createdAt) {
                    _push2(`<small class="text-medium-emphasis text-subtitle-2"${_scopeId}>${ssrInterpolate(chatDetail.value.name)}, ${ssrInterpolate(unref(formatDistanceToNowStrict)(new Date(chat.createdAt), {
                      addSuffix: false
                    }))} ago </small>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (chat.type == "text") {
                    _push2(ssrRenderComponent(_component_v_sheet, { class: "bg-lightsecondary rounded-md px-3 py-2 mb-1" }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<p class="text-body-1"${_scopeId2}>${ssrInterpolate(chat.msg)}</p>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-body-1" }, toDisplayString(chat.msg), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  if (chat.type == "img") {
                    _push2(ssrRenderComponent(_component_v_sheet, { class: "mb-1" }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<img${ssrRenderAttr("src", chat.msg)} class="rounded-md" alt="pro" width="250"${_scopeId2}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: chat.msg,
                              class: "rounded-md",
                              alt: "pro",
                              width: "250"
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div></div>`);
                }
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
              if (Rpart.value) {
                _push2(`<div class="right-sidebar d-lg-flex d-none"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_v_sheet, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_sfc_main$3, { chatDetail: chatDetail.value }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_sfc_main$3, { chatDetail: chatDetail.value }, null, 8, ["chatDetail"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "d-flex" }, [
                  createVNode("div", {
                    class: "w-100",
                    style: { "height": "calc(100vh - 360px)" }
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(chatDetail.value.chatHistory, (chat) => {
                      return openBlock(), createBlock("div", {
                        key: chat.id,
                        class: "pa-5"
                      }, [
                        chatDetail.value.id === chat.senderId ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "justify-end d-flex text-end mb-1"
                        }, [
                          createVNode("div", null, [
                            chat.createdAt ? (openBlock(), createBlock("small", {
                              key: 0,
                              class: "text-medium-emphasis text-subtitle-2"
                            }, toDisplayString(unref(formatDistanceToNowStrict)(new Date(chat.createdAt), {
                              addSuffix: false
                            })) + " ago", 1)) : createCommentVNode("", true),
                            chat.type == "text" ? (openBlock(), createBlock(_component_v_sheet, {
                              key: 1,
                              class: "bg-lightprimary rounded-md px-3 py-2 mb-1"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", { class: "text-body-1" }, toDisplayString(chat.msg), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            chat.type == "img" ? (openBlock(), createBlock(_component_v_sheet, {
                              key: 2,
                              class: "mb-1"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: chat.msg,
                                  class: "rounded-md",
                                  alt: "pro",
                                  width: "250"
                                }, null, 8, ["src"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ])
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "d-flex align-items-start gap-3 mb-1"
                        }, [
                          createVNode(_component_v_avatar, null, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: chatDetail.value.thumb,
                                alt: "pro",
                                width: "40"
                              }, null, 8, ["src"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", null, [
                            chat.createdAt ? (openBlock(), createBlock("small", {
                              key: 0,
                              class: "text-medium-emphasis text-subtitle-2"
                            }, toDisplayString(chatDetail.value.name) + ", " + toDisplayString(unref(formatDistanceToNowStrict)(new Date(chat.createdAt), {
                              addSuffix: false
                            })) + " ago ", 1)) : createCommentVNode("", true),
                            chat.type == "text" ? (openBlock(), createBlock(_component_v_sheet, {
                              key: 1,
                              class: "bg-lightsecondary rounded-md px-3 py-2 mb-1"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", { class: "text-body-1" }, toDisplayString(chat.msg), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            chat.type == "img" ? (openBlock(), createBlock(_component_v_sheet, {
                              key: 2,
                              class: "mb-1"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: chat.msg,
                                  class: "rounded-md",
                                  alt: "pro",
                                  width: "250"
                                }, null, 8, ["src"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ])
                        ]))
                      ]);
                    }), 128))
                  ]),
                  Rpart.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "right-sidebar d-lg-flex d-none"
                  }, [
                    createVNode(_component_v_sheet, null, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$3, { chatDetail: chatDetail.value }, null, 8, ["chatDetail"])
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_v_divider, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_v_navigation_drawer, {
        modelValue: isMobileDrawerOpen.value,
        "onUpdate:modelValue": ($event) => isMobileDrawerOpen.value = $event,
        location: "right",
        class: "drawer-top-zero",
        temporary: "",
        width: "350"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, { chatDetail: chatDetail.value }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, { chatDetail: chatDetail.value }, null, 8, ["chatDetail"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/chats/ChatDetail.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ChatProfile",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_badge = resolveComponent("v-badge");
      _push(ssrRenderComponent(_component_v_sheet, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex gap-2 align-center pa-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_avatar, { size: "large" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", unref(user1))} alt="pro" width="54"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: unref(user1),
                      alt: "pro",
                      width: "54"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_badge, {
              class: "badg-dotDetail",
              dot: "",
              color: "success"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><h5 class="text-subtitle-1 font-weight-semibold"${_scopeId}>Mike Nielsen</h5><h6 class="text-subtitle-2"${_scopeId}>Designer</h6></div></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex gap-2 align-center pa-6" }, [
                createVNode(_component_v_avatar, { size: "large" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: unref(user1),
                      alt: "pro",
                      width: "54"
                    }, null, 8, ["src"])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_badge, {
                  class: "badg-dotDetail",
                  dot: "",
                  color: "success"
                }),
                createVNode("div", null, [
                  createVNode("h5", { class: "text-subtitle-1 font-weight-semibold" }, "Mike Nielsen"),
                  createVNode("h6", { class: "text-subtitle-2" }, "Designer")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/chats/ChatProfile.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref({ title: "Chat app" });
    ref([
      {
        text: "Messenger",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$6, null, {
              leftpart: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="no-scrollbar" data-v-40c55e1a${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$5, null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "no-scrollbar" }, [
                      createVNode(_sfc_main$1),
                      createVNode(_sfc_main$5)
                    ])
                  ];
                }
              }),
              rightpart: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2)
                  ];
                }
              }),
              mobileLeftContent: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$5, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1),
                    createVNode(_sfc_main$5)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$6, null, {
                leftpart: withCtx(() => [
                  createVNode("div", { class: "no-scrollbar" }, [
                    createVNode(_sfc_main$1),
                    createVNode(_sfc_main$5)
                  ])
                ]),
                rightpart: withCtx(() => [
                  createVNode(_sfc_main$2)
                ]),
                mobileLeftContent: withCtx(() => [
                  createVNode(_sfc_main$1),
                  createVNode(_sfc_main$5)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/chats/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-40c55e1a"]]);

export { index as default };
//# sourceMappingURL=index-Dv8-Xsg2.mjs.map
