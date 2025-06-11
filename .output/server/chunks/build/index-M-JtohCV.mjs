import { defineComponent, ref, computed, resolveComponent, withCtx, createVNode, createTextVNode, unref, mergeProps, toDisplayString, createBlock, openBlock, Fragment, renderList, watch, withModifiers, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { d as defineStore, g as useDisplay, a as axiosServices } from './server.mjs';
import { _ as _sfc_main$5 } from './BaseBreadcrumb-DAIjkUfv.mjs';
import { Icon } from '@iconify/vue';
import { format } from 'date-fns';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-tabler-icons';
import 'vue3-perfect-scrollbar';
import 'maska';
import 'axios-mock-adapter';
import 'axios';
import 'chance';
import 'lodash';
import 'vue-draggable-next';
import 'vue3-easy-data-table';
import 'vue-easy-lightbox';
import 'vue-scrollto';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const useEmailStore = defineStore({
  id: "email",
  state: () => ({
    emails: [],
    selectedEmail: null
    // Initialize as null
  }),
  actions: {
    toggleStarred(emailId) {
      const email = this.emails.find((e) => e.id === emailId);
      if (email) {
        email.starred = !email.starred;
      }
    },
    toggleImportant(emailId) {
      const email = this.emails.find((e) => e.id === emailId);
      if (email) {
        email.important = !email.important;
      }
    },
    async fetchEmails() {
      try {
        const data = await axiosServices.get("/api/data/email/EmailData");
        this.emails = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    selectEmail(email) {
      this.selectedEmail = email;
    },
    deleteEmail(id) {
      this.emails = this.emails.filter((email) => email.id !== id);
      this.selectedEmail = null;
    }
  }
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AppEmailCard",
  __ssrInlineRender: true,
  setup(__props) {
    const { lgAndUp } = useDisplay();
    ref(false);
    const eDrawer = ref(false);
    const selectedEmail = ref(null);
    const openEmailDetails = (email) => {
      selectedEmail.value = email;
      eDrawer.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_divider = resolveComponent("v-divider");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex mainbox" }, _attrs))}>`);
      if (unref(lgAndUp)) {
        _push(`<div class="compose pa-6">`);
        ssrRenderSlot(_ctx.$slots, "mailCompose", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mail-list">`);
      _push(ssrRenderComponent(_component_v_divider, { class: "d-lg-none d-block" }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "mailList", { openEmailDetails }, null, _push, _parent);
      _push(`</div><div class="mail-details pa-6 d-md-block d-none">`);
      ssrRenderSlot(_ctx.$slots, "mailDetail", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/AppEmailCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "EmailCompose",
  __ssrInlineRender: true,
  emits: ["filter-change"],
  setup(__props, { emit: __emit }) {
    const filterData1 = [
      { id: 2, name: "inbox", icon: "solar:inbox-line-broken" },
      { id: 3, name: "sent", icon: "solar:plain-2-linear" },
      { id: 4, name: "draft", icon: "solar:notes-linear" },
      { id: 5, name: "spam", icon: "solar:flag-2-outline" },
      { id: 6, name: "trash", icon: "solar:trash-bin-trash-outline" },
      {
        id: 7,
        name: "starred",
        icon: "solar:star-fall-minimalistic-2-line-duotone"
      },
      {
        id: 8,
        name: "important",
        icon: "solar:bell-bing-linear"
      },
      {
        id: 10,
        name: "promotional",
        icon: "solar:folder-open-linear",
        color: "primary"
      },
      {
        id: 11,
        name: "social",
        icon: "solar:folder-open-linear",
        color: "error"
      },
      {
        id: 12,
        name: "health",
        icon: "solar:folder-open-linear",
        color: "success"
      }
    ];
    const selectedFilter = ref("inbox");
    const emit = __emit;
    const handleFilterClick = (filterName) => {
      selectedFilter.value = filterName;
      emit("filter-change", filterName);
    };
    const showComposeEmail = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_v_file_input = resolveComponent("v-file-input");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      _push(`<!--[--><div>`);
      _push(ssrRenderComponent(_component_v_btn, {
        color: "primary",
        class: "w-100 rounded-pill",
        onClick: ($event) => showComposeEmail.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`compose`);
          } else {
            return [
              createTextVNode("compose")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_list, { class: "my-4 theme-list" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(filterData1.slice(0, 5), (item) => {
              _push2(ssrRenderComponent(_component_v_list_item, {
                key: item.id,
                value: item,
                color: "primary",
                rounded: "md",
                class: ["mail-items", {
                  "active bg-light text-primary": selectedFilter.value === item.name
                }],
                onClick: ($event) => handleFilterClick(item.name)
              }, {
                prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Icon), {
                      icon: item.icon,
                      height: "18"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Icon), {
                        icon: item.icon,
                        height: "18"
                      }, null, 8, ["icon"])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_list_item_title, { class: "ms-3 text-capitalize" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_list_item_title, { class: "ms-3 text-capitalize" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.name), 1)
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
            _push2(ssrRenderComponent(_component_v_list_item_title, { class: "mt-4 mb-2 border-t pt-5 text-uppercase text-12 font-weight-semibold" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Sort By`);
                } else {
                  return [
                    createTextVNode("Sort By")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(filterData1.slice(5, 7), (item) => {
              _push2(ssrRenderComponent(_component_v_list_item, {
                key: item.id,
                value: item,
                color: "primary",
                rounded: "md",
                class: ["mail-items", {
                  "active bg-light text-primary": selectedFilter.value === item.name
                }],
                onClick: ($event) => handleFilterClick(item.name)
              }, {
                prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Icon), {
                      icon: item.icon,
                      height: "18"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Icon), {
                        icon: item.icon,
                        height: "18"
                      }, null, 8, ["icon"])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_list_item_title, { class: "ms-3 text-capitalize" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_list_item_title, { class: "ms-3 text-capitalize" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.name), 1)
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
            _push2(ssrRenderComponent(_component_v_list_item_title, { class: "mt-4 mb-2 border-t pt-5 text-uppercase text-12 font-weight-semibold" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Labels`);
                } else {
                  return [
                    createTextVNode("Labels")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(filterData1.slice(7), (item) => {
              _push2(ssrRenderComponent(_component_v_list_item, {
                key: item.id,
                value: item,
                color: "primary",
                rounded: "md",
                class: ["mail-items", {
                  "active bg-bglight text-primary": selectedFilter.value === item.name
                }],
                onClick: ($event) => handleFilterClick(item.name)
              }, {
                prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Icon), {
                      icon: item.icon,
                      height: "18",
                      class: "text-" + item.color
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Icon), {
                        icon: item.icon,
                        height: "18",
                        class: "text-" + item.color
                      }, null, 8, ["icon", "class"])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_list_item_title, { class: "ms-3 text-capitalize" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_list_item_title, { class: "ms-3 text-capitalize" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.name), 1)
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
              (openBlock(true), createBlock(Fragment, null, renderList(filterData1.slice(0, 5), (item) => {
                return openBlock(), createBlock(_component_v_list_item, {
                  key: item.id,
                  value: item,
                  color: "primary",
                  rounded: "md",
                  class: ["mail-items", {
                    "active bg-light text-primary": selectedFilter.value === item.name
                  }],
                  onClick: ($event) => handleFilterClick(item.name)
                }, {
                  prepend: withCtx(() => [
                    createVNode(unref(Icon), {
                      icon: item.icon,
                      height: "18"
                    }, null, 8, ["icon"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_v_list_item_title, { class: "ms-3 text-capitalize" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.name), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["value", "class", "onClick"]);
              }), 128)),
              createVNode(_component_v_list_item_title, { class: "mt-4 mb-2 border-t pt-5 text-uppercase text-12 font-weight-semibold" }, {
                default: withCtx(() => [
                  createTextVNode("Sort By")
                ]),
                _: 1
              }),
              (openBlock(true), createBlock(Fragment, null, renderList(filterData1.slice(5, 7), (item) => {
                return openBlock(), createBlock(_component_v_list_item, {
                  key: item.id,
                  value: item,
                  color: "primary",
                  rounded: "md",
                  class: ["mail-items", {
                    "active bg-light text-primary": selectedFilter.value === item.name
                  }],
                  onClick: ($event) => handleFilterClick(item.name)
                }, {
                  prepend: withCtx(() => [
                    createVNode(unref(Icon), {
                      icon: item.icon,
                      height: "18"
                    }, null, 8, ["icon"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_v_list_item_title, { class: "ms-3 text-capitalize" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.name), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["value", "class", "onClick"]);
              }), 128)),
              createVNode(_component_v_list_item_title, { class: "mt-4 mb-2 border-t pt-5 text-uppercase text-12 font-weight-semibold" }, {
                default: withCtx(() => [
                  createTextVNode("Labels")
                ]),
                _: 1
              }),
              (openBlock(true), createBlock(Fragment, null, renderList(filterData1.slice(7), (item) => {
                return openBlock(), createBlock(_component_v_list_item, {
                  key: item.id,
                  value: item,
                  color: "primary",
                  rounded: "md",
                  class: ["mail-items", {
                    "active bg-bglight text-primary": selectedFilter.value === item.name
                  }],
                  onClick: ($event) => handleFilterClick(item.name)
                }, {
                  prepend: withCtx(() => [
                    createVNode(unref(Icon), {
                      icon: item.icon,
                      height: "18",
                      class: "text-" + item.color
                    }, null, 8, ["icon", "class"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_v_list_item_title, { class: "ms-3 text-capitalize" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.name), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["value", "class", "onClick"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: showComposeEmail.value,
        "onUpdate:modelValue": ($event) => showComposeEmail.value = $event,
        "max-width": "500px"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, { class: "pa-4 bg-primary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Compose Mail`);
                      } else {
                        return [
                          createTextVNode("Compose Mail")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_form, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                label: "To",
                                required: ""
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                label: "Subject",
                                required: ""
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_textarea, {
                                label: "Message",
                                rows: "4",
                                required: ""
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_file_input, {
                                "prepend-icon": "null",
                                "append-icon": "null",
                                label: "Attachment",
                                variant: "outlined",
                                "hide-details": "",
                                class: "w-100 mx-0 no-icon"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  label: "To",
                                  required: ""
                                }),
                                createVNode(_component_v_text_field, {
                                  label: "Subject",
                                  required: ""
                                }),
                                createVNode(_component_v_textarea, {
                                  label: "Message",
                                  rows: "4",
                                  required: ""
                                }),
                                createVNode(_component_v_file_input, {
                                  "prepend-icon": "null",
                                  "append-icon": "null",
                                  label: "Attachment",
                                  variant: "outlined",
                                  "hide-details": "",
                                  class: "w-100 mx-0 no-icon"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_form, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                label: "To",
                                required: ""
                              }),
                              createVNode(_component_v_text_field, {
                                label: "Subject",
                                required: ""
                              }),
                              createVNode(_component_v_textarea, {
                                label: "Message",
                                rows: "4",
                                required: ""
                              }),
                              createVNode(_component_v_file_input, {
                                "prepend-icon": "null",
                                "append-icon": "null",
                                label: "Attachment",
                                variant: "outlined",
                                "hide-details": "",
                                class: "w-100 mx-0 no-icon"
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_actions, { class: "ga-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "error",
                          rounded: "pill",
                          variant: "flat",
                          class: "px-5",
                          onClick: ($event) => showComposeEmail.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Cancel`);
                            } else {
                              return [
                                createTextVNode("Cancel")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "primary",
                          rounded: "pill",
                          class: "px-5",
                          variant: "flat"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Send`);
                            } else {
                              return [
                                createTextVNode("Send")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            color: "error",
                            rounded: "pill",
                            variant: "flat",
                            class: "px-5",
                            onClick: ($event) => showComposeEmail.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cancel")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_v_btn, {
                            color: "primary",
                            rounded: "pill",
                            class: "px-5",
                            variant: "flat"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Send")
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
                    createVNode(_component_v_card_title, { class: "pa-4 bg-primary" }, {
                      default: withCtx(() => [
                        createTextVNode("Compose Mail")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_form, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              label: "To",
                              required: ""
                            }),
                            createVNode(_component_v_text_field, {
                              label: "Subject",
                              required: ""
                            }),
                            createVNode(_component_v_textarea, {
                              label: "Message",
                              rows: "4",
                              required: ""
                            }),
                            createVNode(_component_v_file_input, {
                              "prepend-icon": "null",
                              "append-icon": "null",
                              label: "Attachment",
                              variant: "outlined",
                              "hide-details": "",
                              class: "w-100 mx-0 no-icon"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_actions, { class: "ga-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          color: "error",
                          rounded: "pill",
                          variant: "flat",
                          class: "px-5",
                          onClick: ($event) => showComposeEmail.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Cancel")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_v_btn, {
                          color: "primary",
                          rounded: "pill",
                          class: "px-5",
                          variant: "flat"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Send")
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
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, { class: "pa-4 bg-primary" }, {
                    default: withCtx(() => [
                      createTextVNode("Compose Mail")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_form, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            label: "To",
                            required: ""
                          }),
                          createVNode(_component_v_text_field, {
                            label: "Subject",
                            required: ""
                          }),
                          createVNode(_component_v_textarea, {
                            label: "Message",
                            rows: "4",
                            required: ""
                          }),
                          createVNode(_component_v_file_input, {
                            "prepend-icon": "null",
                            "append-icon": "null",
                            label: "Attachment",
                            variant: "outlined",
                            "hide-details": "",
                            class: "w-100 mx-0 no-icon"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, { class: "ga-3" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        color: "error",
                        rounded: "pill",
                        variant: "flat",
                        class: "px-5",
                        onClick: ($event) => showComposeEmail.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cancel")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_v_btn, {
                        color: "primary",
                        rounded: "pill",
                        class: "px-5",
                        variant: "flat"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Send")
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/email/EmailCompose.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "EmailListing",
  __ssrInlineRender: true,
  props: {
    emails: {}
  },
  setup(__props) {
    const props = __props;
    const store = useEmailStore();
    const selectedEmail = ref(null);
    const selectedEmails = ref([]);
    const searchTerm = ref("");
    const filteredEmails = computed(() => {
      return props.emails.filter(
        (email) => email.from.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });
    const selectEmail = (email) => {
      selectedEmail.value = email;
      store.selectEmail(email);
    };
    const toggleEmailSelection = (email) => {
      const index = selectedEmails.value.findIndex((e) => e.id === email.id);
      if (index === -1) {
        selectedEmails.value.push(email);
      } else {
        selectedEmails.value.splice(index, 1);
      }
    };
    const deleteSelectedEmails = (email) => {
      store.deleteEmail(email.id);
      selectedEmails.value = selectedEmails.value.filter((e) => e.id !== email.id);
    };
    computed(() => selectedEmails.value.length > 0);
    watch(
      () => props.emails,
      (newEmails) => {
        if (newEmails.length > 0 && !selectedEmail.value) {
          selectedEmail.value = newEmails[0];
          store.selectEmail(newEmails[0]);
        }
      },
      { immediate: true }
    );
    const toggleIcon = (email) => {
      store.toggleStarred(email.id);
    };
    const toggleIconimportant = (email) => {
      store.toggleImportant(email.id);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_perfect_scrollbar = resolveComponent("perfect-scrollbar");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_alert = resolveComponent("v-alert");
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_v_text_field, {
        modelValue: searchTerm.value,
        "onUpdate:modelValue": ($event) => searchTerm.value = $event,
        label: "Search Emails",
        variant: "outlined",
        "hide-details": "",
        class: "w-100 mb-1 pa-6",
        density: "compact",
        onClick: () => {
        }
      }, {
        "prepend-inner": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "solar:magnifer-linear",
              height: "18",
              width: "25"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Icon), {
                icon: "solar:magnifer-linear",
                height: "18",
                width: "25"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_perfect_scrollbar, { class: "max-h-600" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (filteredEmails.value.length) {
              _push2(`<div${_scopeId}><!--[-->`);
              ssrRenderList(filteredEmails.value, (email) => {
                _push2(`<div class="${ssrRenderClass([
                  "email-items cursor-pointer",
                  { "selected-email bg-bglight": email === selectedEmail.value }
                ])}"${_scopeId}><div class="d-flex align-center justify-space-between"${_scopeId}><div class="d-flex align-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_v_checkbox, {
                  "hide-details": "",
                  color: "primary",
                  class: "ms-n2",
                  "model-value": selectedEmails.value.includes(email),
                  onChange: ($event) => toggleEmailSelection(email)
                }, null, _parent2, _scopeId));
                _push2(`<h6 class="text-14 font-weight-semibold email-title"${_scopeId}>${ssrInterpolate(email.from)}</h6></div>`);
                _push2(ssrRenderComponent(_component_v_chip, {
                  class: "text-12",
                  color: email.label === "Promotional" ? "primary" : email.label === "Social" ? "error" : email.label === "Health" ? "success" : "secondary",
                  variant: "flat",
                  size: "small",
                  rounded: "pill",
                  label: ""
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(email.label)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(email.label), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><div class="ps-8 mt-n1"${_scopeId}><p class="text-truncate text-14"${_scopeId}>${ssrInterpolate(email.subject)}</p><div class="d-flex align-center justify-space-between mt-3"${_scopeId}><div class="d-flex align-center ga-2"${_scopeId}><button${_scopeId}>`);
                if (email.starred) {
                  _push2(ssrRenderComponent(unref(Icon), {
                    icon: "solar:star-bold",
                    height: "15",
                    class: "text-warning"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(unref(Icon), {
                    icon: "solar:star-line-duotone",
                    height: "15"
                  }, null, _parent2, _scopeId));
                }
                _push2(`</button><button${_scopeId}>`);
                if (email.important) {
                  _push2(ssrRenderComponent(unref(Icon), {
                    icon: "solar:info-circle-bold",
                    height: "15",
                    class: "text-info"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(unref(Icon), {
                    icon: "solar:info-circle-outline",
                    height: "15"
                  }, null, _parent2, _scopeId));
                }
                _push2(`</button><button${_scopeId}>`);
                if (selectedEmails.value.includes(email)) {
                  _push2(ssrRenderComponent(unref(Icon), {
                    icon: "solar:trash-bin-trash-outline",
                    height: "15",
                    class: "delete-icon"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</button></div><small class="text-muted"${_scopeId}>${ssrInterpolate(email.time ? unref(format)(new Date(email.time), "E, MMM d") : "N/A")}</small></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div${_scopeId}><div class="px-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_alert, {
                color: "warning",
                variant: "tonal",
                class: "mb-4"
              }, {
                prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_icon, { class: "text-24" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`mdi-alert-circle-outline`);
                        } else {
                          return [
                            createTextVNode("mdi-alert-circle-outline")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_icon, { class: "text-24" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-alert-circle-outline")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div${_scopeId2}>No Email found for this search</div>`);
                  } else {
                    return [
                      createVNode("div", null, "No Email found for this search")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
          } else {
            return [
              filteredEmails.value.length ? (openBlock(), createBlock("div", { key: 0 }, [
                (openBlock(true), createBlock(Fragment, null, renderList(filteredEmails.value, (email) => {
                  return openBlock(), createBlock("div", {
                    key: email.id,
                    class: [
                      "email-items cursor-pointer",
                      { "selected-email bg-bglight": email === selectedEmail.value }
                    ],
                    onClick: ($event) => selectEmail(email)
                  }, [
                    createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                      createVNode("div", { class: "d-flex align-center" }, [
                        createVNode(_component_v_checkbox, {
                          "hide-details": "",
                          color: "primary",
                          class: "ms-n2",
                          "model-value": selectedEmails.value.includes(email),
                          onChange: ($event) => toggleEmailSelection(email)
                        }, null, 8, ["model-value", "onChange"]),
                        createVNode("h6", { class: "text-14 font-weight-semibold email-title" }, toDisplayString(email.from), 1)
                      ]),
                      createVNode(_component_v_chip, {
                        class: "text-12",
                        color: email.label === "Promotional" ? "primary" : email.label === "Social" ? "error" : email.label === "Health" ? "success" : "secondary",
                        variant: "flat",
                        size: "small",
                        rounded: "pill",
                        label: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(email.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])
                    ]),
                    createVNode("div", { class: "ps-8 mt-n1" }, [
                      createVNode("p", { class: "text-truncate text-14" }, toDisplayString(email.subject), 1),
                      createVNode("div", { class: "d-flex align-center justify-space-between mt-3" }, [
                        createVNode("div", { class: "d-flex align-center ga-2" }, [
                          createVNode("button", {
                            onClick: withModifiers(($event) => toggleIcon(email), ["stop"])
                          }, [
                            email.starred ? (openBlock(), createBlock(unref(Icon), {
                              key: 0,
                              icon: "solar:star-bold",
                              height: "15",
                              class: "text-warning"
                            })) : (openBlock(), createBlock(unref(Icon), {
                              key: 1,
                              icon: "solar:star-line-duotone",
                              height: "15"
                            }))
                          ], 8, ["onClick"]),
                          createVNode("button", {
                            onClick: withModifiers(($event) => toggleIconimportant(email), ["stop"])
                          }, [
                            email.important ? (openBlock(), createBlock(unref(Icon), {
                              key: 0,
                              icon: "solar:info-circle-bold",
                              height: "15",
                              class: "text-info"
                            })) : (openBlock(), createBlock(unref(Icon), {
                              key: 1,
                              icon: "solar:info-circle-outline",
                              height: "15"
                            }))
                          ], 8, ["onClick"]),
                          createVNode("button", {
                            onClick: withModifiers(($event) => deleteSelectedEmails(email), ["stop"])
                          }, [
                            selectedEmails.value.includes(email) ? (openBlock(), createBlock(unref(Icon), {
                              key: 0,
                              icon: "solar:trash-bin-trash-outline",
                              height: "15",
                              class: "delete-icon"
                            })) : createCommentVNode("", true)
                          ], 8, ["onClick"])
                        ]),
                        createVNode("small", { class: "text-muted" }, toDisplayString(email.time ? unref(format)(new Date(email.time), "E, MMM d") : "N/A"), 1)
                      ])
                    ])
                  ], 10, ["onClick"]);
                }), 128))
              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", { class: "px-6" }, [
                  createVNode(_component_v_alert, {
                    color: "warning",
                    variant: "tonal",
                    class: "mb-4"
                  }, {
                    prepend: withCtx(() => [
                      createVNode(_component_v_icon, { class: "text-24" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-alert-circle-outline")
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode("div", null, "No Email found for this search")
                    ]),
                    _: 1
                  })
                ])
              ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/email/EmailListing.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/images/backgrounds/empty_mail.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "EmailDetail",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useEmailStore();
    const deleteEmail = () => {
      if (store.selectedEmail) {
        store.deleteEmail(store.selectedEmail.id);
      }
    };
    const toggleIcon = (email) => {
      store.toggleStarred(email.id);
    };
    const toggleIconimportant = (email) => {
      store.toggleImportant(email.id);
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_v_alert = resolveComponent("v-alert");
      const _component_v_icon = resolveComponent("v-icon");
      if (unref(store).selectedEmail) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "email-detail" }, _attrs))}><div class="d-flex align-center ga-1 pb-6">`);
        _push(ssrRenderComponent(_component_v_btn, {
          icon: "",
          rounded: "circle",
          size: "small",
          variant: "text",
          color: "primary",
          onClick: ($event) => toggleIcon(unref(store).selectedEmail)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(store).selectedEmail.starred) {
                _push2(ssrRenderComponent(unref(Icon), {
                  icon: "solar:star-bold",
                  height: "18",
                  class: "text-warning"
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(unref(Icon), {
                  icon: "solar:star-line-duotone",
                  class: "textPrimary",
                  height: "18"
                }, null, _parent2, _scopeId));
              }
              _push2(ssrRenderComponent(_component_v_tooltip, {
                activator: "parent",
                location: "bottom"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Star`);
                  } else {
                    return [
                      createTextVNode("Star")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                unref(store).selectedEmail.starred ? (openBlock(), createBlock(unref(Icon), {
                  key: 0,
                  icon: "solar:star-bold",
                  height: "18",
                  class: "text-warning"
                })) : (openBlock(), createBlock(unref(Icon), {
                  key: 1,
                  icon: "solar:star-line-duotone",
                  class: "textPrimary",
                  height: "18"
                })),
                createVNode(_component_v_tooltip, {
                  activator: "parent",
                  location: "bottom"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Star")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_v_btn, {
          icon: "",
          rounded: "circle",
          size: "small",
          variant: "text",
          color: "primary",
          onClick: ($event) => toggleIconimportant(unref(store).selectedEmail)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(store).selectedEmail.important) {
                _push2(ssrRenderComponent(unref(Icon), {
                  icon: "solar:info-circle-bold",
                  height: "18",
                  class: "text-info"
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(unref(Icon), {
                  icon: "solar:info-circle-outline",
                  class: "textPrimary",
                  height: "18"
                }, null, _parent2, _scopeId));
              }
              _push2(ssrRenderComponent(_component_v_tooltip, {
                activator: "parent",
                location: "bottom"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Importnat`);
                  } else {
                    return [
                      createTextVNode("Importnat")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                unref(store).selectedEmail.important ? (openBlock(), createBlock(unref(Icon), {
                  key: 0,
                  icon: "solar:info-circle-bold",
                  height: "18",
                  class: "text-info"
                })) : (openBlock(), createBlock(unref(Icon), {
                  key: 1,
                  icon: "solar:info-circle-outline",
                  class: "textPrimary",
                  height: "18"
                })),
                createVNode(_component_v_tooltip, {
                  activator: "parent",
                  location: "bottom"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Importnat")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_v_btn, {
          icon: "",
          rounded: "circle",
          size: "small",
          variant: "text",
          color: "primary",
          onClick: deleteEmail
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "solar:trash-bin-minimalistic-linear",
                class: "textPrimary",
                height: "18"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_tooltip, {
                activator: "parent",
                location: "bottom"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Delete`);
                  } else {
                    return [
                      createTextVNode("Delete")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Icon), {
                  icon: "solar:trash-bin-minimalistic-linear",
                  class: "textPrimary",
                  height: "18"
                }),
                createVNode(_component_v_tooltip, {
                  activator: "parent",
                  location: "bottom"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Delete")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="d-flex align-center justify-space-between mb-7"><div class="d-flex align-center ga-2">`);
        _push(ssrRenderComponent(_component_v_avatar, { size: "48" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", unref(store).selectedEmail.thumbnail)} alt="user" width="48"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: unref(store).selectedEmail.thumbnail,
                  alt: "user",
                  width: "48"
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div><h6 class="text-14 lh-normal">${ssrInterpolate(unref(store).selectedEmail.from)}</h6><p class="text-14 lh-normal">${ssrInterpolate(unref(store).selectedEmail.To)}</p></div></div>`);
        _push(ssrRenderComponent(_component_v_chip, {
          class: "text-12",
          rounded: "pill",
          color: unref(store).selectedEmail.label === "Promotional" ? "primary" : unref(store).selectedEmail.label === "Social" ? "error" : unref(store).selectedEmail.label === "Health" ? "success" : "secondary",
          variant: "flat",
          size: "small",
          label: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(store).selectedEmail.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(store).selectedEmail.label), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><h5 class="text-20">${ssrInterpolate(unref(store).selectedEmail.subject)}</h5><div class="email-content"><p class="opacity-80">${(_a = unref(store).selectedEmail.emailContent) != null ? _a : ""}</p></div>`);
        if (unref(store).selectedEmail.attchments != 0) {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_v_divider, { class: "my-6" }, null, _parent));
          _push(`<h6 class="text-14 mb-3">Attachments</h6>`);
          _push(ssrRenderComponent(_component_v_row, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(unref(store).selectedEmail.attchments, (item) => {
                  _push2(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    md: "4",
                    key: item.id
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="d-flex align-center ga-3"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_v_avatar, {
                          size: "48",
                          rounded: "md",
                          color: "light"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<img${ssrRenderAttr("src", item.image)} alt="user" width="24"${_scopeId3}>`);
                            } else {
                              return [
                                createVNode("img", {
                                  src: item.image,
                                  alt: "user",
                                  width: "24"
                                }, null, 8, ["src"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`<div${_scopeId2}><h5 class="text-14 lh-normal cursor-pointer hover-primary"${_scopeId2}>${ssrInterpolate(item.title)}</h5><p class="text-14"${_scopeId2}>${ssrInterpolate(item.fileSize)}</p></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex align-center ga-3" }, [
                            createVNode(_component_v_avatar, {
                              size: "48",
                              rounded: "md",
                              color: "light"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: item.image,
                                  alt: "user",
                                  width: "24"
                                }, null, 8, ["src"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("div", null, [
                              createVNode("h5", { class: "text-14 lh-normal cursor-pointer hover-primary" }, toDisplayString(item.title), 1),
                              createVNode("p", { class: "text-14" }, toDisplayString(item.fileSize), 1)
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(store).selectedEmail.attchments, (item) => {
                    return openBlock(), createBlock(_component_v_col, {
                      cols: "12",
                      md: "4",
                      key: item.id
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center ga-3" }, [
                          createVNode(_component_v_avatar, {
                            size: "48",
                            rounded: "md",
                            color: "light"
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: item.image,
                                alt: "user",
                                width: "24"
                              }, null, 8, ["src"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("div", null, [
                            createVNode("h5", { class: "text-14 lh-normal cursor-pointer hover-primary" }, toDisplayString(item.title), 1),
                            createVNode("p", { class: "text-14" }, toDisplayString(item.fileSize), 1)
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
          }, _parent));
          _push(ssrRenderComponent(_component_v_divider, { class: "mt-6" }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="d-flex align-center ga-4 mt-6">`);
        _push(ssrRenderComponent(_component_RouterLink, {
          to: "",
          class: "cursor-pointer link d-flex align-center ga-1 textPrimary hover-primary text-14"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "solar:undo-left-bold",
                height: "16"
              }, null, _parent2, _scopeId));
              _push2(`Reply`);
            } else {
              return [
                createVNode(unref(Icon), {
                  icon: "solar:undo-left-bold",
                  height: "16"
                }),
                createTextVNode("Reply")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_RouterLink, {
          to: "",
          class: "cursor-pointer link d-flex align-center ga-1 textPrimary hover-primary text-14"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "solar:undo-right-bold",
                height: "16"
              }, null, _parent2, _scopeId));
              _push2(` Forward`);
            } else {
              return [
                createVNode(unref(Icon), {
                  icon: "solar:undo-right-bold",
                  height: "16"
                }),
                createTextVNode(" Forward")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_v_alert, {
          color: "error",
          variant: "tonal",
          class: "mb-4"
        }, {
          prepend: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_icon, { class: "text-24" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`mdi-alert-circle-outline`);
                  } else {
                    return [
                      createTextVNode("mdi-alert-circle-outline")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_icon, { class: "text-24" }, {
                  default: withCtx(() => [
                    createTextVNode("mdi-alert-circle-outline")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}>Select an email to view its details.</div>`);
            } else {
              return [
                createVNode("div", null, "Select an email to view its details.")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="mx-auto text-center"><img${ssrRenderAttr("src", _imports_0)} alt="user"></div></div>`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/email/EmailDetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useEmailStore();
    const page = ref({ title: "Email App" });
    const breadcrumbs = ref([
      { text: "Dashboard", disabled: false, href: "#" },
      { text: "Email App", disabled: true, href: "#" }
    ]);
    const selectedFilter = ref("inbox");
    const filteredEmails = computed(() => {
      return selectedFilter.value ? store.emails.filter((email) => email[selectedFilter.value]) : store.emails;
    });
    const handleFilterChange = (filterName) => {
      selectedFilter.value = filterName;
    };
    const isMobileDrawerOpen = ref(false);
    const isMobileEmailCategory = ref(false);
    const { lgAndUp } = useDisplay();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_Menu2Icon = resolveComponent("Menu2Icon");
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      const _component_v_card_text = resolveComponent("v-card-text");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$5, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, null, {
              mailCompose: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, { onFilterChange: handleFilterChange }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3, { onFilterChange: handleFilterChange })
                  ];
                }
              }),
              mailList: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="pa-lg-0 pa-6 pb-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_btn, {
                    block: "",
                    onClick: ($event) => isMobileEmailCategory.value = !isMobileEmailCategory.value,
                    color: "primary",
                    class: "d-lg-none d-md-flex d-sm-flex"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Menu2Icon, {
                          size: "20",
                          class: "mr-2"
                        }, null, _parent4, _scopeId3));
                        _push4(` Email Category `);
                      } else {
                        return [
                          createVNode(_component_Menu2Icon, {
                            size: "20",
                            class: "mr-2"
                          }),
                          createTextVNode(" Email Category ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    emails: filteredEmails.value,
                    class: "d-md-block d-none"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    emails: filteredEmails.value,
                    class: "d-md-none d-block",
                    onClick: ($event) => isMobileDrawerOpen.value = !isMobileDrawerOpen.value
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "pa-lg-0 pa-6 pb-0" }, [
                      createVNode(_component_v_btn, {
                        block: "",
                        onClick: ($event) => isMobileEmailCategory.value = !isMobileEmailCategory.value,
                        color: "primary",
                        class: "d-lg-none d-md-flex d-sm-flex"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Menu2Icon, {
                            size: "20",
                            class: "mr-2"
                          }),
                          createTextVNode(" Email Category ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    createVNode(_sfc_main$2, {
                      emails: filteredEmails.value,
                      class: "d-md-block d-none"
                    }, null, 8, ["emails"]),
                    createVNode(_sfc_main$2, {
                      emails: filteredEmails.value,
                      class: "d-md-none d-block",
                      onClick: ($event) => isMobileDrawerOpen.value = !isMobileDrawerOpen.value
                    }, null, 8, ["emails", "onClick"])
                  ];
                }
              }),
              mailDetail: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, { class: "d-md-block d-none" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1, { class: "d-md-block d-none" })
                  ];
                }
              }),
              mobileLeftContent: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, { onFilterChange: handleFilterChange }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3, { onFilterChange: handleFilterChange })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$4, null, {
                mailCompose: withCtx(() => [
                  createVNode(_sfc_main$3, { onFilterChange: handleFilterChange })
                ]),
                mailList: withCtx(() => [
                  createVNode("div", { class: "pa-lg-0 pa-6 pb-0" }, [
                    createVNode(_component_v_btn, {
                      block: "",
                      onClick: ($event) => isMobileEmailCategory.value = !isMobileEmailCategory.value,
                      color: "primary",
                      class: "d-lg-none d-md-flex d-sm-flex"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Menu2Icon, {
                          size: "20",
                          class: "mr-2"
                        }),
                        createTextVNode(" Email Category ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  createVNode(_sfc_main$2, {
                    emails: filteredEmails.value,
                    class: "d-md-block d-none"
                  }, null, 8, ["emails"]),
                  createVNode(_sfc_main$2, {
                    emails: filteredEmails.value,
                    class: "d-md-none d-block",
                    onClick: ($event) => isMobileDrawerOpen.value = !isMobileDrawerOpen.value
                  }, null, 8, ["emails", "onClick"])
                ]),
                mailDetail: withCtx(() => [
                  createVNode(_sfc_main$1, { class: "d-md-block d-none" })
                ]),
                mobileLeftContent: withCtx(() => [
                  createVNode(_sfc_main$3, { onFilterChange: handleFilterChange })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_navigation_drawer, {
        modelValue: isMobileDrawerOpen.value,
        "onUpdate:modelValue": ($event) => isMobileDrawerOpen.value = $event,
        location: "right",
        temporary: "",
        width: "350",
        class: "drawer-top-zero"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, { class: "pa-6" }, {
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
              createVNode(_component_v_card_text, { class: "pa-6" }, {
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
      if (!unref(lgAndUp)) {
        _push(ssrRenderComponent(_component_v_navigation_drawer, {
          modelValue: isMobileEmailCategory.value,
          "onUpdate:modelValue": ($event) => isMobileEmailCategory.value = $event,
          location: "left",
          temporary: "",
          width: "350",
          class: "drawer-top-zero"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_card_text, { class: "pa-6" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$3, { onFilterChange: handleFilterChange }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$3, { onFilterChange: handleFilterChange })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_card_text, { class: "pa-6" }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$3, { onFilterChange: handleFilterChange })
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/email/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-M-JtohCV.mjs.map
