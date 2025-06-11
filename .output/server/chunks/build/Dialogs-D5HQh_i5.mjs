import { defineComponent, ref, resolveComponent, withCtx, createVNode, mergeProps, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _sfc_main$9 } from './BaseBreadcrumb-DAIjkUfv.mjs';
import { _ as _sfc_main$a } from './UiParentCard-DhlYzLUl.mjs';
import { _ as _sfc_main$b } from './UiChildCard-Xt7dDOL6.mjs';
import { XIcon } from 'vue-tabler-icons';

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "DialogsActivator",
  __ssrInlineRender: true,
  setup(__props) {
    const dialog = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center mt-4 mt-sm-0" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_btn, {
        color: "primary",
        class: "w-100 px-4 rounded-pill"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Open Simple Dialog `);
            _push2(ssrRenderComponent(_component_v_dialog, {
              modelValue: dialog.value,
              "onUpdate:modelValue": ($event) => dialog.value = $event,
              activator: "parent",
              "max-width": "800"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_text, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `);
                            } else {
                              return [
                                createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_card_actions, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "primary",
                                onClick: ($event) => dialog.value = false,
                                variant: "tonal",
                                class: "px-4 rounded-pill"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Close Dialog`);
                                  } else {
                                    return [
                                      createTextVNode("Close Dialog")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  onClick: ($event) => dialog.value = false,
                                  variant: "tonal",
                                  class: "px-4 rounded-pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Close Dialog")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_actions, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                color: "primary",
                                onClick: ($event) => dialog.value = false,
                                variant: "tonal",
                                class: "px-4 rounded-pill"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Close Dialog")
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card_actions, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, {
                              color: "primary",
                              onClick: ($event) => dialog.value = false,
                              variant: "tonal",
                              class: "px-4 rounded-pill"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Close Dialog")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Open Simple Dialog "),
              createVNode(_component_v_dialog, {
                modelValue: dialog.value,
                "onUpdate:modelValue": ($event) => dialog.value = $event,
                activator: "parent",
                "max-width": "800"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_text, null, {
                        default: withCtx(() => [
                          createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_actions, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
                            color: "primary",
                            onClick: ($event) => dialog.value = false,
                            variant: "tonal",
                            class: "px-4 rounded-pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Close Dialog")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/dialogs/DialogsActivator.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "DialogsModel",
  __ssrInlineRender: true,
  setup(__props) {
    const dialog = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_btn, {
        color: "secondary",
        class: "w-100 px-4 rounded-pill",
        onClick: ($event) => dialog.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Open Dialog `);
          } else {
            return [
              createTextVNode(" Open Dialog ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: dialog.value,
        "onUpdate:modelValue": ($event) => dialog.value = $event,
        "max-width": "800"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `);
                      } else {
                        return [
                          createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_actions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "secondary",
                          class: "px-4 rounded-pill mx-auto",
                          onClick: ($event) => dialog.value = false,
                          variant: "tonal"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Close Dialog`);
                            } else {
                              return [
                                createTextVNode("Close Dialog")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            color: "secondary",
                            class: "px-4 rounded-pill mx-auto",
                            onClick: ($event) => dialog.value = false,
                            variant: "tonal"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Close Dialog")
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
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_actions, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          color: "secondary",
                          class: "px-4 rounded-pill mx-auto",
                          onClick: ($event) => dialog.value = false,
                          variant: "tonal"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Close Dialog")
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
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        color: "secondary",
                        class: "px-4 rounded-pill mx-auto",
                        onClick: ($event) => dialog.value = false,
                        variant: "tonal"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Close Dialog")
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
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/dialogs/DialogsModel.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DialogsFullscreen",
  __ssrInlineRender: true,
  setup(__props) {
    const dialog = ref(false);
    const notifications = ref(false);
    const sound = ref(true);
    const widgets = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_toolbar = resolveComponent("v-toolbar");
      const _component_v_toolbar_title = resolveComponent("v-toolbar-title");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_toolbar_items = resolveComponent("v-toolbar-items");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: dialog.value,
        "onUpdate:modelValue": ($event) => dialog.value = $event,
        fullscreen: "",
        scrim: false,
        transition: "dialog-bottom-transition"
      }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, mergeProps({
              color: "error",
              class: "w-100 px-4 rounded-pill",
              dark: ""
            }, props), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Open Fullscreen Dialog `);
                } else {
                  return [
                    createTextVNode(" Open Fullscreen Dialog ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, mergeProps({
                color: "error",
                class: "w-100 px-4 rounded-pill",
                dark: ""
              }, props), {
                default: withCtx(() => [
                  createTextVNode(" Open Fullscreen Dialog ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_toolbar, {
                    dark: "",
                    style: { "flex": "unset" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          icon: "",
                          color: "white",
                          onClick: ($event) => dialog.value = false,
                          flat: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(XIcon), { width: "20" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(XIcon), { width: "20" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_toolbar_title, { class: "text-white" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Settings`);
                            } else {
                              return [
                                createTextVNode("Settings")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_spacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_toolbar_items, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, {
                                dark: "",
                                color: "white",
                                onClick: ($event) => dialog.value = false,
                                flat: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Save `);
                                  } else {
                                    return [
                                      createTextVNode(" Save ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, {
                                  dark: "",
                                  color: "white",
                                  onClick: ($event) => dialog.value = false,
                                  flat: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Save ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            icon: "",
                            color: "white",
                            onClick: ($event) => dialog.value = false,
                            flat: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(XIcon), { width: "20" })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_v_toolbar_title, { class: "text-white" }, {
                            default: withCtx(() => [
                              createTextVNode("Settings")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_spacer),
                          createVNode(_component_v_toolbar_items, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                dark: "",
                                color: "white",
                                onClick: ($event) => dialog.value = false,
                                flat: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Save ")
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list, {
                          lines: "two",
                          subheader: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` User Controls `);
                              _push5(ssrRenderComponent(_component_v_list_item, {
                                title: "Content filtering",
                                subtitle: "Set the content filtering level to restrict apps that can be downloaded"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_list_item, {
                                title: "Password",
                                subtitle: "Require password for purchase or use password to restrict purchase"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(" User Controls "),
                                createVNode(_component_v_list_item, {
                                  title: "Content filtering",
                                  subtitle: "Set the content filtering level to restrict apps that can be downloaded"
                                }),
                                createVNode(_component_v_list_item, {
                                  title: "Password",
                                  subtitle: "Require password for purchase or use password to restrict purchase"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_divider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_list, {
                          lines: "two",
                          subheader: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` General `);
                              _push5(ssrRenderComponent(_component_v_list_item, {
                                title: "Notifications",
                                subtitle: "Notify me about updates to apps or games that I downloaded"
                              }, {
                                prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_checkbox, {
                                      modelValue: notifications.value,
                                      "onUpdate:modelValue": ($event) => notifications.value = $event
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_checkbox, {
                                        modelValue: notifications.value,
                                        "onUpdate:modelValue": ($event) => notifications.value = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_list_item, {
                                title: "Sound",
                                subtitle: "Auto-update apps at any time. Data charges may apply"
                              }, {
                                prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_checkbox, {
                                      modelValue: sound.value,
                                      "onUpdate:modelValue": ($event) => sound.value = $event
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_checkbox, {
                                        modelValue: sound.value,
                                        "onUpdate:modelValue": ($event) => sound.value = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_list_item, {
                                title: "Auto-add widgets",
                                subtitle: "Automatically add home screen widgets"
                              }, {
                                prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_checkbox, {
                                      modelValue: widgets.value,
                                      "onUpdate:modelValue": ($event) => widgets.value = $event
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_checkbox, {
                                        modelValue: widgets.value,
                                        "onUpdate:modelValue": ($event) => widgets.value = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(" General "),
                                createVNode(_component_v_list_item, {
                                  title: "Notifications",
                                  subtitle: "Notify me about updates to apps or games that I downloaded"
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(_component_v_checkbox, {
                                      modelValue: notifications.value,
                                      "onUpdate:modelValue": ($event) => notifications.value = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_list_item, {
                                  title: "Sound",
                                  subtitle: "Auto-update apps at any time. Data charges may apply"
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(_component_v_checkbox, {
                                      modelValue: sound.value,
                                      "onUpdate:modelValue": ($event) => sound.value = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_list_item, {
                                  title: "Auto-add widgets",
                                  subtitle: "Automatically add home screen widgets"
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(_component_v_checkbox, {
                                      modelValue: widgets.value,
                                      "onUpdate:modelValue": ($event) => widgets.value = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                          createVNode(_component_v_list, {
                            lines: "two",
                            subheader: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" User Controls "),
                              createVNode(_component_v_list_item, {
                                title: "Content filtering",
                                subtitle: "Set the content filtering level to restrict apps that can be downloaded"
                              }),
                              createVNode(_component_v_list_item, {
                                title: "Password",
                                subtitle: "Require password for purchase or use password to restrict purchase"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_divider),
                          createVNode(_component_v_list, {
                            lines: "two",
                            subheader: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" General "),
                              createVNode(_component_v_list_item, {
                                title: "Notifications",
                                subtitle: "Notify me about updates to apps or games that I downloaded"
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(_component_v_checkbox, {
                                    modelValue: notifications.value,
                                    "onUpdate:modelValue": ($event) => notifications.value = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_list_item, {
                                title: "Sound",
                                subtitle: "Auto-update apps at any time. Data charges may apply"
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(_component_v_checkbox, {
                                    modelValue: sound.value,
                                    "onUpdate:modelValue": ($event) => sound.value = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_list_item, {
                                title: "Auto-add widgets",
                                subtitle: "Automatically add home screen widgets"
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(_component_v_checkbox, {
                                    modelValue: widgets.value,
                                    "onUpdate:modelValue": ($event) => widgets.value = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                    createVNode(_component_v_toolbar, {
                      dark: "",
                      style: { "flex": "unset" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          icon: "",
                          color: "white",
                          onClick: ($event) => dialog.value = false,
                          flat: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(XIcon), { width: "20" })
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_v_toolbar_title, { class: "text-white" }, {
                          default: withCtx(() => [
                            createTextVNode("Settings")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_spacer),
                        createVNode(_component_v_toolbar_items, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, {
                              dark: "",
                              color: "white",
                              onClick: ($event) => dialog.value = false,
                              flat: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Save ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_list, {
                          lines: "two",
                          subheader: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" User Controls "),
                            createVNode(_component_v_list_item, {
                              title: "Content filtering",
                              subtitle: "Set the content filtering level to restrict apps that can be downloaded"
                            }),
                            createVNode(_component_v_list_item, {
                              title: "Password",
                              subtitle: "Require password for purchase or use password to restrict purchase"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_divider),
                        createVNode(_component_v_list, {
                          lines: "two",
                          subheader: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" General "),
                            createVNode(_component_v_list_item, {
                              title: "Notifications",
                              subtitle: "Notify me about updates to apps or games that I downloaded"
                            }, {
                              prepend: withCtx(() => [
                                createVNode(_component_v_checkbox, {
                                  modelValue: notifications.value,
                                  "onUpdate:modelValue": ($event) => notifications.value = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_list_item, {
                              title: "Sound",
                              subtitle: "Auto-update apps at any time. Data charges may apply"
                            }, {
                              prepend: withCtx(() => [
                                createVNode(_component_v_checkbox, {
                                  modelValue: sound.value,
                                  "onUpdate:modelValue": ($event) => sound.value = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_list_item, {
                              title: "Auto-add widgets",
                              subtitle: "Automatically add home screen widgets"
                            }, {
                              prepend: withCtx(() => [
                                createVNode(_component_v_checkbox, {
                                  modelValue: widgets.value,
                                  "onUpdate:modelValue": ($event) => widgets.value = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_toolbar, {
                    dark: "",
                    style: { "flex": "unset" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        icon: "",
                        color: "white",
                        onClick: ($event) => dialog.value = false,
                        flat: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(XIcon), { width: "20" })
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_v_toolbar_title, { class: "text-white" }, {
                        default: withCtx(() => [
                          createTextVNode("Settings")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_spacer),
                      createVNode(_component_v_toolbar_items, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
                            dark: "",
                            color: "white",
                            onClick: ($event) => dialog.value = false,
                            flat: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Save ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_item, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_list, {
                        lines: "two",
                        subheader: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" User Controls "),
                          createVNode(_component_v_list_item, {
                            title: "Content filtering",
                            subtitle: "Set the content filtering level to restrict apps that can be downloaded"
                          }),
                          createVNode(_component_v_list_item, {
                            title: "Password",
                            subtitle: "Require password for purchase or use password to restrict purchase"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_divider),
                      createVNode(_component_v_list, {
                        lines: "two",
                        subheader: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" General "),
                          createVNode(_component_v_list_item, {
                            title: "Notifications",
                            subtitle: "Notify me about updates to apps or games that I downloaded"
                          }, {
                            prepend: withCtx(() => [
                              createVNode(_component_v_checkbox, {
                                modelValue: notifications.value,
                                "onUpdate:modelValue": ($event) => notifications.value = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, {
                            title: "Sound",
                            subtitle: "Auto-update apps at any time. Data charges may apply"
                          }, {
                            prepend: withCtx(() => [
                              createVNode(_component_v_checkbox, {
                                modelValue: sound.value,
                                "onUpdate:modelValue": ($event) => sound.value = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, {
                            title: "Auto-add widgets",
                            subtitle: "Automatically add home screen widgets"
                          }, {
                            prepend: withCtx(() => [
                              createVNode(_component_v_checkbox, {
                                modelValue: widgets.value,
                                "onUpdate:modelValue": ($event) => widgets.value = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/dialogs/DialogsFullscreen.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DialogsTransitions",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_toolbar = resolveComponent("v-toolbar");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_dialog, {
        transition: "dialog-bottom-transition",
        "max-width": "800"
      }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, mergeProps({
              color: "success",
              class: "w-100 px-4 rounded-pill"
            }, props), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Open Transition Dialog`);
                } else {
                  return [
                    createTextVNode("Open Transition Dialog")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, mergeProps({
                color: "success",
                class: "w-100 px-4 rounded-pill"
              }, props), {
                default: withCtx(() => [
                  createTextVNode("Open Transition Dialog")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_toolbar, {
                    color: "primary",
                    class: "px-4"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Opening from the bottom`);
                      } else {
                        return [
                          createTextVNode("Opening from the bottom")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_item, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-h2 pa-12"${_scopeId3}>Hello world!</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-h2 pa-12" }, "Hello world!")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_actions, { class: "justify-end" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "error",
                          variant: "tonal",
                          onClick: ($event) => isActive.value = false,
                          class: "px-4 rounded-pill"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Close`);
                            } else {
                              return [
                                createTextVNode("Close")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            color: "error",
                            variant: "tonal",
                            onClick: ($event) => isActive.value = false,
                            class: "px-4 rounded-pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Close")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_toolbar, {
                      color: "primary",
                      class: "px-4"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Opening from the bottom")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_item, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-h2 pa-12" }, "Hello world!")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_actions, { class: "justify-end" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          color: "error",
                          variant: "tonal",
                          onClick: ($event) => isActive.value = false,
                          class: "px-4 rounded-pill"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Close")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_toolbar, {
                    color: "primary",
                    class: "px-4"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Opening from the bottom")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_item, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-h2 pa-12" }, "Hello world!")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, { class: "justify-end" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        color: "error",
                        variant: "tonal",
                        onClick: ($event) => isActive.value = false,
                        class: "px-4 rounded-pill"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Close")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/dialogs/DialogsTransitions.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DialogsPersistent",
  __ssrInlineRender: true,
  setup(__props) {
    const dialog = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_spacer = resolveComponent("v-spacer");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: dialog.value,
        "onUpdate:modelValue": ($event) => dialog.value = $event,
        persistent: "",
        "max-width": "800"
      }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, mergeProps({
              color: "primary",
              class: "w-100 px-4 rounded-pill"
            }, props), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Open Dialog `);
                } else {
                  return [
                    createTextVNode(" Open Dialog ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, mergeProps({
                color: "primary",
                class: "w-100 px-4 rounded-pill"
              }, props), {
                default: withCtx(() => [
                  createTextVNode(" Open Dialog ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, { class: "pa-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, { class: "text-h5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Use Google&#39;s location service? `);
                      } else {
                        return [
                          createTextVNode(" Use Google's location service? ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.`);
                      } else {
                        return [
                          createTextVNode("Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_actions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_spacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "primary",
                          text: "",
                          onClick: ($event) => dialog.value = false,
                          variant: "tonal",
                          class: "px-4 rounded-pill"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Disagree `);
                            } else {
                              return [
                                createTextVNode(" Disagree ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "secondary",
                          text: "",
                          onClick: ($event) => dialog.value = false,
                          variant: "tonal",
                          class: "px-4 rounded-pill"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Agree `);
                            } else {
                              return [
                                createTextVNode(" Agree ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_spacer),
                          createVNode(_component_v_btn, {
                            color: "primary",
                            text: "",
                            onClick: ($event) => dialog.value = false,
                            variant: "tonal",
                            class: "px-4 rounded-pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Disagree ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_v_btn, {
                            color: "secondary",
                            text: "",
                            onClick: ($event) => dialog.value = false,
                            variant: "tonal",
                            class: "px-4 rounded-pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Agree ")
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
                    createVNode(_component_v_card_title, { class: "text-h5" }, {
                      default: withCtx(() => [
                        createTextVNode(" Use Google's location service? ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createTextVNode("Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_actions, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_spacer),
                        createVNode(_component_v_btn, {
                          color: "primary",
                          text: "",
                          onClick: ($event) => dialog.value = false,
                          variant: "tonal",
                          class: "px-4 rounded-pill"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Disagree ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_v_btn, {
                          color: "secondary",
                          text: "",
                          onClick: ($event) => dialog.value = false,
                          variant: "tonal",
                          class: "px-4 rounded-pill"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Agree ")
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
              createVNode(_component_v_card, { class: "pa-6" }, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, { class: "text-h5" }, {
                    default: withCtx(() => [
                      createTextVNode(" Use Google's location service? ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createTextVNode("Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_spacer),
                      createVNode(_component_v_btn, {
                        color: "primary",
                        text: "",
                        onClick: ($event) => dialog.value = false,
                        variant: "tonal",
                        class: "px-4 rounded-pill"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Disagree ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_v_btn, {
                        color: "secondary",
                        text: "",
                        onClick: ($event) => dialog.value = false,
                        variant: "tonal",
                        class: "px-4 rounded-pill"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Agree ")
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
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/dialogs/DialogsPersistent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DialogsScrollable",
  __ssrInlineRender: true,
  setup(__props) {
    const dialogm1 = ref("");
    const dialog = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_radio_group = resolveComponent("v-radio-group");
      const _component_v_radio = resolveComponent("v-radio");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: dialog.value,
        "onUpdate:modelValue": ($event) => dialog.value = $event,
        scrollable: "",
        "max-width": "800"
      }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, mergeProps({
              color: "success",
              class: "w-100 px-4 rounded-pill"
            }, props), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Open Scrolling Dialog `);
                } else {
                  return [
                    createTextVNode(" Open Scrolling Dialog ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, mergeProps({
                color: "success",
                class: "w-100 px-4 rounded-pill"
              }, props), {
                default: withCtx(() => [
                  createTextVNode(" Open Scrolling Dialog ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Select Country`);
                      } else {
                        return [
                          createTextVNode("Select Country")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_text, {
                    style: { "height": "300px" },
                    class: "overflow-auto"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_radio_group, {
                          modelValue: dialogm1.value,
                          "onUpdate:modelValue": ($event) => dialogm1.value = $event,
                          column: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Bahamas, The",
                                value: "bahamas"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Bahrain",
                                value: "bahrain"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Bangladesh",
                                value: "bangladesh"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Barbados",
                                value: "barbados"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Belarus",
                                value: "belarus"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Belgium",
                                value: "belgium"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Belize",
                                value: "belize"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Benin",
                                value: "benin"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Bhutan",
                                value: "bhutan"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Bolivia",
                                value: "bolivia"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Bosnia and Herzegovina",
                                value: "bosnia"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Botswana",
                                value: "botswana"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Brazil",
                                value: "brazil"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Brunei",
                                value: "brunei"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Bulgaria",
                                value: "bulgaria"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Burkina Faso",
                                value: "burkina"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Burma",
                                value: "burma"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Burundi",
                                value: "burundi"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_radio, {
                                  label: "Bahamas, The",
                                  value: "bahamas"
                                }),
                                createVNode(_component_v_radio, {
                                  label: "Bahrain",
                                  value: "bahrain"
                                }),
                                createVNode(_component_v_radio, {
                                  label: "Bangladesh",
                                  value: "bangladesh"
                                }),
                                createVNode(_component_v_radio, {
                                  label: "Barbados",
                                  value: "barbados"
                                }),
                                createVNode(_component_v_radio, {
                                  label: "Belarus",
                                  value: "belarus"
                                }),
                                createVNode(_component_v_radio, {
                                  label: "Belgium",
                                  value: "belgium"
                                }),
                                createVNode(_component_v_radio, {
                                  label: "Belize",
                                  value: "belize"
                                }),
                                createVNode(_component_v_radio, {
                                  label: "Benin",
                                  value: "benin"
                                }),
                                createVNode(_component_v_radio, {
                                  label: "Bhutan",
                                  value: "bhutan"
                                }),
                                createVNode(_component_v_radio, {
                                  label: "Bolivia",
                                  value: "bolivia"
                                }),
                                createVNode(_component_v_radio, {
                                  label: "Bosnia and Herzegovina",
                                  value: "bosnia"
                                }),
                                createVNode(_component_v_radio, {
                                  label: "Botswana",
                                  value: "botswana"
                                }),
                                createVNode(_component_v_radio, {
                                  label: "Brazil",
                                  value: "brazil"
                                }),
                                createVNode(_component_v_radio, {
                                  label: "Brunei",
                                  value: "brunei"
                                }),
                                createVNode(_component_v_radio, {
                                  label: "Bulgaria",
                                  value: "bulgaria"
                                }),
                                createVNode(_component_v_radio, {
                                  label: "Burkina Faso",
                                  value: "burkina"
                                }),
                                createVNode(_component_v_radio, {
                                  label: "Burma",
                                  value: "burma"
                                }),
                                createVNode(_component_v_radio, {
                                  label: "Burundi",
                                  value: "burundi"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_radio_group, {
                            modelValue: dialogm1.value,
                            "onUpdate:modelValue": ($event) => dialogm1.value = $event,
                            column: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_radio, {
                                label: "Bahamas, The",
                                value: "bahamas"
                              }),
                              createVNode(_component_v_radio, {
                                label: "Bahrain",
                                value: "bahrain"
                              }),
                              createVNode(_component_v_radio, {
                                label: "Bangladesh",
                                value: "bangladesh"
                              }),
                              createVNode(_component_v_radio, {
                                label: "Barbados",
                                value: "barbados"
                              }),
                              createVNode(_component_v_radio, {
                                label: "Belarus",
                                value: "belarus"
                              }),
                              createVNode(_component_v_radio, {
                                label: "Belgium",
                                value: "belgium"
                              }),
                              createVNode(_component_v_radio, {
                                label: "Belize",
                                value: "belize"
                              }),
                              createVNode(_component_v_radio, {
                                label: "Benin",
                                value: "benin"
                              }),
                              createVNode(_component_v_radio, {
                                label: "Bhutan",
                                value: "bhutan"
                              }),
                              createVNode(_component_v_radio, {
                                label: "Bolivia",
                                value: "bolivia"
                              }),
                              createVNode(_component_v_radio, {
                                label: "Bosnia and Herzegovina",
                                value: "bosnia"
                              }),
                              createVNode(_component_v_radio, {
                                label: "Botswana",
                                value: "botswana"
                              }),
                              createVNode(_component_v_radio, {
                                label: "Brazil",
                                value: "brazil"
                              }),
                              createVNode(_component_v_radio, {
                                label: "Brunei",
                                value: "brunei"
                              }),
                              createVNode(_component_v_radio, {
                                label: "Bulgaria",
                                value: "bulgaria"
                              }),
                              createVNode(_component_v_radio, {
                                label: "Burkina Faso",
                                value: "burkina"
                              }),
                              createVNode(_component_v_radio, {
                                label: "Burma",
                                value: "burma"
                              }),
                              createVNode(_component_v_radio, {
                                label: "Burundi",
                                value: "burundi"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_actions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "error",
                          variant: "tonal",
                          onClick: ($event) => dialog.value = false,
                          class: "px-4 rounded-pill"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Close `);
                            } else {
                              return [
                                createTextVNode(" Close ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "success",
                          variant: "tonal",
                          onClick: ($event) => dialog.value = false,
                          class: "px-4 rounded-pill"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Save `);
                            } else {
                              return [
                                createTextVNode(" Save ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            color: "error",
                            variant: "tonal",
                            onClick: ($event) => dialog.value = false,
                            class: "px-4 rounded-pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Close ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_v_btn, {
                            color: "success",
                            variant: "tonal",
                            onClick: ($event) => dialog.value = false,
                            class: "px-4 rounded-pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Save ")
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
                    createVNode(_component_v_card_title, null, {
                      default: withCtx(() => [
                        createTextVNode("Select Country")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_divider),
                    createVNode(_component_v_card_text, {
                      style: { "height": "300px" },
                      class: "overflow-auto"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_radio_group, {
                          modelValue: dialogm1.value,
                          "onUpdate:modelValue": ($event) => dialogm1.value = $event,
                          column: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_radio, {
                              label: "Bahamas, The",
                              value: "bahamas"
                            }),
                            createVNode(_component_v_radio, {
                              label: "Bahrain",
                              value: "bahrain"
                            }),
                            createVNode(_component_v_radio, {
                              label: "Bangladesh",
                              value: "bangladesh"
                            }),
                            createVNode(_component_v_radio, {
                              label: "Barbados",
                              value: "barbados"
                            }),
                            createVNode(_component_v_radio, {
                              label: "Belarus",
                              value: "belarus"
                            }),
                            createVNode(_component_v_radio, {
                              label: "Belgium",
                              value: "belgium"
                            }),
                            createVNode(_component_v_radio, {
                              label: "Belize",
                              value: "belize"
                            }),
                            createVNode(_component_v_radio, {
                              label: "Benin",
                              value: "benin"
                            }),
                            createVNode(_component_v_radio, {
                              label: "Bhutan",
                              value: "bhutan"
                            }),
                            createVNode(_component_v_radio, {
                              label: "Bolivia",
                              value: "bolivia"
                            }),
                            createVNode(_component_v_radio, {
                              label: "Bosnia and Herzegovina",
                              value: "bosnia"
                            }),
                            createVNode(_component_v_radio, {
                              label: "Botswana",
                              value: "botswana"
                            }),
                            createVNode(_component_v_radio, {
                              label: "Brazil",
                              value: "brazil"
                            }),
                            createVNode(_component_v_radio, {
                              label: "Brunei",
                              value: "brunei"
                            }),
                            createVNode(_component_v_radio, {
                              label: "Bulgaria",
                              value: "bulgaria"
                            }),
                            createVNode(_component_v_radio, {
                              label: "Burkina Faso",
                              value: "burkina"
                            }),
                            createVNode(_component_v_radio, {
                              label: "Burma",
                              value: "burma"
                            }),
                            createVNode(_component_v_radio, {
                              label: "Burundi",
                              value: "burundi"
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_divider),
                    createVNode(_component_v_card_actions, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          color: "error",
                          variant: "tonal",
                          onClick: ($event) => dialog.value = false,
                          class: "px-4 rounded-pill"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Close ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_v_btn, {
                          color: "success",
                          variant: "tonal",
                          onClick: ($event) => dialog.value = false,
                          class: "px-4 rounded-pill"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Save ")
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
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, null, {
                    default: withCtx(() => [
                      createTextVNode("Select Country")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_divider),
                  createVNode(_component_v_card_text, {
                    style: { "height": "300px" },
                    class: "overflow-auto"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_radio_group, {
                        modelValue: dialogm1.value,
                        "onUpdate:modelValue": ($event) => dialogm1.value = $event,
                        column: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_radio, {
                            label: "Bahamas, The",
                            value: "bahamas"
                          }),
                          createVNode(_component_v_radio, {
                            label: "Bahrain",
                            value: "bahrain"
                          }),
                          createVNode(_component_v_radio, {
                            label: "Bangladesh",
                            value: "bangladesh"
                          }),
                          createVNode(_component_v_radio, {
                            label: "Barbados",
                            value: "barbados"
                          }),
                          createVNode(_component_v_radio, {
                            label: "Belarus",
                            value: "belarus"
                          }),
                          createVNode(_component_v_radio, {
                            label: "Belgium",
                            value: "belgium"
                          }),
                          createVNode(_component_v_radio, {
                            label: "Belize",
                            value: "belize"
                          }),
                          createVNode(_component_v_radio, {
                            label: "Benin",
                            value: "benin"
                          }),
                          createVNode(_component_v_radio, {
                            label: "Bhutan",
                            value: "bhutan"
                          }),
                          createVNode(_component_v_radio, {
                            label: "Bolivia",
                            value: "bolivia"
                          }),
                          createVNode(_component_v_radio, {
                            label: "Bosnia and Herzegovina",
                            value: "bosnia"
                          }),
                          createVNode(_component_v_radio, {
                            label: "Botswana",
                            value: "botswana"
                          }),
                          createVNode(_component_v_radio, {
                            label: "Brazil",
                            value: "brazil"
                          }),
                          createVNode(_component_v_radio, {
                            label: "Brunei",
                            value: "brunei"
                          }),
                          createVNode(_component_v_radio, {
                            label: "Bulgaria",
                            value: "bulgaria"
                          }),
                          createVNode(_component_v_radio, {
                            label: "Burkina Faso",
                            value: "burkina"
                          }),
                          createVNode(_component_v_radio, {
                            label: "Burma",
                            value: "burma"
                          }),
                          createVNode(_component_v_radio, {
                            label: "Burundi",
                            value: "burundi"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_divider),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        color: "error",
                        variant: "tonal",
                        onClick: ($event) => dialog.value = false,
                        class: "px-4 rounded-pill"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Close ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_v_btn, {
                        color: "success",
                        variant: "tonal",
                        onClick: ($event) => dialog.value = false,
                        class: "px-4 rounded-pill"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Save ")
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
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/dialogs/DialogsScrollable.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DialogsForm",
  __ssrInlineRender: true,
  setup(__props) {
    const dialog = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_autocomplete = resolveComponent("v-autocomplete");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_spacer = resolveComponent("v-spacer");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: dialog.value,
        "onUpdate:modelValue": ($event) => dialog.value = $event,
        persistent: "",
        "max-width": "800"
      }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, mergeProps({
              color: "warning",
              class: "w-100 px-4 rounded-pill"
            }, props), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Open Form Dialog `);
                } else {
                  return [
                    createTextVNode(" Open Form Dialog ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, mergeProps({
                color: "warning",
                class: "w-100 px-4 rounded-pill"
              }, props), {
                default: withCtx(() => [
                  createTextVNode(" Open Form Dialog ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, {
              style: { "height": "400px" },
              class: "overflow-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_container, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_title, { class: "pa-5" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-h5"${_scopeId4}>User Profile</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-h5" }, "User Profile")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_card_text, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            label: "Legal first name*",
                                            required: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_text_field, {
                                              label: "Legal first name*",
                                              required: ""
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            label: "Legal middle name",
                                            hint: "example of helper text only on focus"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_text_field, {
                                              label: "Legal middle name",
                                              hint: "example of helper text only on focus"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            label: "Legal last name*",
                                            hint: "example of persistent helper text",
                                            "persistent-hint": "",
                                            required: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_text_field, {
                                              label: "Legal last name*",
                                              hint: "example of persistent helper text",
                                              "persistent-hint": "",
                                              required: ""
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            label: "Email*",
                                            required: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_text_field, {
                                              label: "Email*",
                                              required: ""
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            label: "Password*",
                                            type: "password",
                                            required: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_text_field, {
                                              label: "Password*",
                                              type: "password",
                                              required: ""
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_select, {
                                            items: ["0-17", "18-29", "30-54", "54+"],
                                            label: "Age*",
                                            required: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_select, {
                                              items: ["0-17", "18-29", "30-54", "54+"],
                                              label: "Age*",
                                              required: ""
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_autocomplete, {
                                            items: [
                                              "Skiing",
                                              "Ice hockey",
                                              "Soccer",
                                              "Basketball",
                                              "Hockey",
                                              "Reading",
                                              "Writing",
                                              "Coding",
                                              "Basejump"
                                            ],
                                            label: "Interests",
                                            multiple: "",
                                            density: "comfortable",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_autocomplete, {
                                              items: [
                                                "Skiing",
                                                "Ice hockey",
                                                "Soccer",
                                                "Basketball",
                                                "Hockey",
                                                "Reading",
                                                "Writing",
                                                "Coding",
                                                "Basejump"
                                              ],
                                              label: "Interests",
                                              multiple: "",
                                              density: "comfortable",
                                              variant: "outlined"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            label: "Legal first name*",
                                            required: ""
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            label: "Legal middle name",
                                            hint: "example of helper text only on focus"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            label: "Legal last name*",
                                            hint: "example of persistent helper text",
                                            "persistent-hint": "",
                                            required: ""
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            label: "Email*",
                                            required: ""
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            label: "Password*",
                                            type: "password",
                                            required: ""
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            items: ["0-17", "18-29", "30-54", "54+"],
                                            label: "Age*",
                                            required: ""
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_autocomplete, {
                                            items: [
                                              "Skiing",
                                              "Ice hockey",
                                              "Soccer",
                                              "Basketball",
                                              "Hockey",
                                              "Reading",
                                              "Writing",
                                              "Coding",
                                              "Basejump"
                                            ],
                                            label: "Interests",
                                            multiple: "",
                                            density: "comfortable",
                                            variant: "outlined"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<small${_scopeId4}>*indicates required field</small>`);
                            } else {
                              return [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          label: "Legal first name*",
                                          required: ""
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          label: "Legal middle name",
                                          hint: "example of helper text only on focus"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          label: "Legal last name*",
                                          hint: "example of persistent helper text",
                                          "persistent-hint": "",
                                          required: ""
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          label: "Email*",
                                          required: ""
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          label: "Password*",
                                          type: "password",
                                          required: ""
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          items: ["0-17", "18-29", "30-54", "54+"],
                                          label: "Age*",
                                          required: ""
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_autocomplete, {
                                          items: [
                                            "Skiing",
                                            "Ice hockey",
                                            "Soccer",
                                            "Basketball",
                                            "Hockey",
                                            "Reading",
                                            "Writing",
                                            "Coding",
                                            "Basejump"
                                          ],
                                          label: "Interests",
                                          multiple: "",
                                          density: "comfortable",
                                          variant: "outlined"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("small", null, "*indicates required field")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_card_actions, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_spacer, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "error",
                                text: "",
                                onClick: ($event) => dialog.value = false,
                                variant: "tonal",
                                class: "px-4 rounded-pill"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Close `);
                                  } else {
                                    return [
                                      createTextVNode(" Close ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "success",
                                text: "",
                                onClick: ($event) => dialog.value = false,
                                variant: "tonal",
                                class: "px-4 rounded-pill"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Save `);
                                  } else {
                                    return [
                                      createTextVNode(" Save ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_spacer),
                                createVNode(_component_v_btn, {
                                  color: "error",
                                  text: "",
                                  onClick: ($event) => dialog.value = false,
                                  variant: "tonal",
                                  class: "px-4 rounded-pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Close ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_v_btn, {
                                  color: "success",
                                  text: "",
                                  onClick: ($event) => dialog.value = false,
                                  variant: "tonal",
                                  class: "px-4 rounded-pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Save ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card_title, { class: "pa-5" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-h5" }, "User Profile")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        label: "Legal first name*",
                                        required: ""
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        label: "Legal middle name",
                                        hint: "example of helper text only on focus"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        label: "Legal last name*",
                                        hint: "example of persistent helper text",
                                        "persistent-hint": "",
                                        required: ""
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        label: "Email*",
                                        required: ""
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        label: "Password*",
                                        type: "password",
                                        required: ""
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        items: ["0-17", "18-29", "30-54", "54+"],
                                        label: "Age*",
                                        required: ""
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_autocomplete, {
                                        items: [
                                          "Skiing",
                                          "Ice hockey",
                                          "Soccer",
                                          "Basketball",
                                          "Hockey",
                                          "Reading",
                                          "Writing",
                                          "Coding",
                                          "Basejump"
                                        ],
                                        label: "Interests",
                                        multiple: "",
                                        density: "comfortable",
                                        variant: "outlined"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("small", null, "*indicates required field")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_actions, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_spacer),
                              createVNode(_component_v_btn, {
                                color: "error",
                                text: "",
                                onClick: ($event) => dialog.value = false,
                                variant: "tonal",
                                class: "px-4 rounded-pill"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Close ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_v_btn, {
                                color: "success",
                                text: "",
                                onClick: ($event) => dialog.value = false,
                                variant: "tonal",
                                class: "px-4 rounded-pill"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Save ")
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_container, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { class: "pa-5" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-h5" }, "User Profile")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      label: "Legal first name*",
                                      required: ""
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      label: "Legal middle name",
                                      hint: "example of helper text only on focus"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      label: "Legal last name*",
                                      hint: "example of persistent helper text",
                                      "persistent-hint": "",
                                      required: ""
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      label: "Email*",
                                      required: ""
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      label: "Password*",
                                      type: "password",
                                      required: ""
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_select, {
                                      items: ["0-17", "18-29", "30-54", "54+"],
                                      label: "Age*",
                                      required: ""
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_autocomplete, {
                                      items: [
                                        "Skiing",
                                        "Ice hockey",
                                        "Soccer",
                                        "Basketball",
                                        "Hockey",
                                        "Reading",
                                        "Writing",
                                        "Coding",
                                        "Basejump"
                                      ],
                                      label: "Interests",
                                      multiple: "",
                                      density: "comfortable",
                                      variant: "outlined"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("small", null, "*indicates required field")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card_actions, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_spacer),
                            createVNode(_component_v_btn, {
                              color: "error",
                              text: "",
                              onClick: ($event) => dialog.value = false,
                              variant: "tonal",
                              class: "px-4 rounded-pill"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Close ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_v_btn, {
                              color: "success",
                              text: "",
                              onClick: ($event) => dialog.value = false,
                              variant: "tonal",
                              class: "px-4 rounded-pill"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Save ")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card, {
                style: { "height": "400px" },
                class: "overflow-auto"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_container, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_title, { class: "pa-5" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-h5" }, "User Profile")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_text, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "6",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    label: "Legal first name*",
                                    required: ""
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "6",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    label: "Legal middle name",
                                    hint: "example of helper text only on focus"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "6",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    label: "Legal last name*",
                                    hint: "example of persistent helper text",
                                    "persistent-hint": "",
                                    required: ""
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    label: "Email*",
                                    required: ""
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    label: "Password*",
                                    type: "password",
                                    required: ""
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_select, {
                                    items: ["0-17", "18-29", "30-54", "54+"],
                                    label: "Age*",
                                    required: ""
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_autocomplete, {
                                    items: [
                                      "Skiing",
                                      "Ice hockey",
                                      "Soccer",
                                      "Basketball",
                                      "Hockey",
                                      "Reading",
                                      "Writing",
                                      "Coding",
                                      "Basejump"
                                    ],
                                    label: "Interests",
                                    multiple: "",
                                    density: "comfortable",
                                    variant: "outlined"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("small", null, "*indicates required field")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_actions, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_spacer),
                          createVNode(_component_v_btn, {
                            color: "error",
                            text: "",
                            onClick: ($event) => dialog.value = false,
                            variant: "tonal",
                            class: "px-4 rounded-pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Close ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_v_btn, {
                            color: "success",
                            text: "",
                            onClick: ($event) => dialog.value = false,
                            variant: "tonal",
                            class: "px-4 rounded-pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Save ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/dialogs/DialogsForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DialogsNested",
  __ssrInlineRender: true,
  setup(__props) {
    const dialog = ref(false);
    const dialog2 = ref(false);
    const dialog3 = ref(false);
    ref(false);
    ref(true);
    ref(false);
    ref([
      {
        title: "Click Me"
      },
      {
        title: "Click Me"
      },
      {
        title: "Click Me"
      },
      {
        title: "Click Me 2"
      }
    ]);
    ref([
      { text: "State 1" },
      { text: "State 2" },
      { text: "State 3" },
      { text: "State 4" },
      { text: "State 5" },
      { text: "State 6" },
      { text: "State 7" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_btn, {
        color: "secondary",
        class: "px-4 rounded-pill w-100",
        onClick: ($event) => dialog.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Open Dialog 1 `);
          } else {
            return [
              createTextVNode(" Open Dialog 1 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: dialog.value,
        "onUpdate:modelValue": ($event) => dialog.value = $event,
        "max-width": "800"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, { class: "pa-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Dialog 1 `);
                      } else {
                        return [
                          createTextVNode(" Dialog 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "primary",
                          onClick: ($event) => dialog2.value = true,
                          variant: "tonal",
                          class: "px-4 rounded-pill"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Open Dialog 2 `);
                            } else {
                              return [
                                createTextVNode(" Open Dialog 2 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            color: "primary",
                            onClick: ($event) => dialog2.value = true,
                            variant: "tonal",
                            class: "px-4 rounded-pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Open Dialog 2 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_actions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "error",
                          text: "",
                          onClick: ($event) => dialog.value = false,
                          variant: "tonal",
                          class: "px-4 rounded-pill"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Close `);
                            } else {
                              return [
                                createTextVNode(" Close ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            color: "error",
                            text: "",
                            onClick: ($event) => dialog.value = false,
                            variant: "tonal",
                            class: "px-4 rounded-pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Close ")
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
                    createVNode(_component_v_card_title, null, {
                      default: withCtx(() => [
                        createTextVNode(" Dialog 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          color: "primary",
                          onClick: ($event) => dialog2.value = true,
                          variant: "tonal",
                          class: "px-4 rounded-pill"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Open Dialog 2 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_actions, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          color: "error",
                          text: "",
                          onClick: ($event) => dialog.value = false,
                          variant: "tonal",
                          class: "px-4 rounded-pill"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Close ")
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
              createVNode(_component_v_card, { class: "pa-6" }, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, null, {
                    default: withCtx(() => [
                      createTextVNode(" Dialog 1 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        color: "primary",
                        onClick: ($event) => dialog2.value = true,
                        variant: "tonal",
                        class: "px-4 rounded-pill"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Open Dialog 2 ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        color: "error",
                        text: "",
                        onClick: ($event) => dialog.value = false,
                        variant: "tonal",
                        class: "px-4 rounded-pill"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Close ")
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
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: dialog2.value,
        "onUpdate:modelValue": ($event) => dialog2.value = $event,
        "max-width": "700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, { class: "pa-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Dialog 2 `);
                      } else {
                        return [
                          createTextVNode(" Dialog 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "secondary",
                          onClick: ($event) => dialog3.value = !dialog3.value,
                          variant: "tonal",
                          class: "px-4 rounded-pill"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Open Dialog 3 `);
                            } else {
                              return [
                                createTextVNode(" Open Dialog 3 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            color: "secondary",
                            onClick: ($event) => dialog3.value = !dialog3.value,
                            variant: "tonal",
                            class: "px-4 rounded-pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Open Dialog 3 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_actions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "error",
                          text: "",
                          onClick: ($event) => dialog2.value = false,
                          variant: "tonal",
                          class: "px-4 rounded-pill"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Close `);
                            } else {
                              return [
                                createTextVNode(" Close ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            color: "error",
                            text: "",
                            onClick: ($event) => dialog2.value = false,
                            variant: "tonal",
                            class: "px-4 rounded-pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Close ")
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
                    createVNode(_component_v_card_title, null, {
                      default: withCtx(() => [
                        createTextVNode(" Dialog 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          color: "secondary",
                          onClick: ($event) => dialog3.value = !dialog3.value,
                          variant: "tonal",
                          class: "px-4 rounded-pill"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Open Dialog 3 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_actions, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          color: "error",
                          text: "",
                          onClick: ($event) => dialog2.value = false,
                          variant: "tonal",
                          class: "px-4 rounded-pill"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Close ")
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
              createVNode(_component_v_card, { class: "pa-6" }, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, null, {
                    default: withCtx(() => [
                      createTextVNode(" Dialog 2 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        color: "secondary",
                        onClick: ($event) => dialog3.value = !dialog3.value,
                        variant: "tonal",
                        class: "px-4 rounded-pill"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Open Dialog 3 ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        color: "error",
                        text: "",
                        onClick: ($event) => dialog2.value = false,
                        variant: "tonal",
                        class: "px-4 rounded-pill"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Close ")
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
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: dialog3.value,
        "onUpdate:modelValue": ($event) => dialog3.value = $event,
        "max-width": "600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, { class: "pa-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Dialog 3</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Dialog 3")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_actions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "error",
                          text: "",
                          onClick: ($event) => dialog3.value = false,
                          variant: "tonal",
                          class: "px-4 rounded-pill"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Close `);
                            } else {
                              return [
                                createTextVNode(" Close ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            color: "error",
                            text: "",
                            onClick: ($event) => dialog3.value = false,
                            variant: "tonal",
                            class: "px-4 rounded-pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Close ")
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
                    createVNode(_component_v_card_title, null, {
                      default: withCtx(() => [
                        createVNode("span", null, "Dialog 3")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_actions, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          color: "error",
                          text: "",
                          onClick: ($event) => dialog3.value = false,
                          variant: "tonal",
                          class: "px-4 rounded-pill"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Close ")
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
              createVNode(_component_v_card, { class: "pa-6" }, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, null, {
                    default: withCtx(() => [
                      createVNode("span", null, "Dialog 3")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        color: "error",
                        text: "",
                        onClick: ($event) => dialog3.value = false,
                        variant: "tonal",
                        class: "px-4 rounded-pill"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Close ")
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
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/dialogs/DialogsNested.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dialogs",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Dialog" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Dialog",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$9, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$a, { title: "Dialog" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                sm: "12",
                                lg: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Simple" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$8, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$8)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$b, { title: "Simple" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$8)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                sm: "12",
                                lg: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "V-model" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$7, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$7)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$b, { title: "V-model" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$7)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                sm: "12",
                                lg: "4",
                                class: "d-flex align-items-stretch"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Transition" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$5, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$5)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$b, { title: "Transition" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$5)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                sm: "12",
                                lg: "4",
                                class: "d-flex align-items-stretch"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Form" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$2, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$2)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$b, { title: "Form" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$2)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                sm: "12",
                                lg: "4",
                                class: "d-flex align-items-stretch"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Full screen" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$6, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$6)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$b, { title: "Full screen" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$6)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                sm: "12",
                                lg: "4",
                                class: "d-flex align-items-stretch"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Persistent" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$4, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$4)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$b, { title: "Persistent" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$4)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                sm: "12",
                                lg: "4",
                                class: "d-flex align-items-stretch"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Scrollable" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$3, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$3)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$b, { title: "Scrollable" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$3)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                sm: "12",
                                lg: "4",
                                class: "d-flex align-items-stretch"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Nested Dialog" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$1, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$b, { title: "Nested Dialog" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$1)
                                        ]),
                                        _: 1
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
                                  sm: "12",
                                  lg: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b, { title: "Simple" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$8)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "12",
                                  lg: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b, { title: "V-model" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$7)
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
                                  class: "d-flex align-items-stretch"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b, { title: "Transition" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$5)
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
                                  class: "d-flex align-items-stretch"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b, { title: "Form" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$2)
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
                                  class: "d-flex align-items-stretch"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b, { title: "Full screen" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$6)
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
                                  class: "d-flex align-items-stretch"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b, { title: "Persistent" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$4)
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
                                  class: "d-flex align-items-stretch"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b, { title: "Scrollable" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$3)
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
                                  class: "d-flex align-items-stretch"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b, { title: "Nested Dialog" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$1)
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "12",
                                lg: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$b, { title: "Simple" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$8)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                sm: "12",
                                lg: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$b, { title: "V-model" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$7)
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
                                class: "d-flex align-items-stretch"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$b, { title: "Transition" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$5)
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
                                class: "d-flex align-items-stretch"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$b, { title: "Form" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$2)
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
                                class: "d-flex align-items-stretch"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$b, { title: "Full screen" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$6)
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
                                class: "d-flex align-items-stretch"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$b, { title: "Persistent" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$4)
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
                                class: "d-flex align-items-stretch"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$b, { title: "Scrollable" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$3)
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
                                class: "d-flex align-items-stretch"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$b, { title: "Nested Dialog" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$1)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$a, { title: "Dialog" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "12",
                              lg: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$b, { title: "Simple" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$8)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "12",
                              lg: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$b, { title: "V-model" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$7)
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
                              class: "d-flex align-items-stretch"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$b, { title: "Transition" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$5)
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
                              class: "d-flex align-items-stretch"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$b, { title: "Form" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$2)
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
                              class: "d-flex align-items-stretch"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$b, { title: "Full screen" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$6)
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
                              class: "d-flex align-items-stretch"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$b, { title: "Persistent" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$4)
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
                              class: "d-flex align-items-stretch"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$b, { title: "Scrollable" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$3)
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
                              class: "d-flex align-items-stretch"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$b, { title: "Nested Dialog" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$1)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$a, { title: "Dialog" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "12",
                            lg: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, { title: "Simple" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$8)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "12",
                            lg: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, { title: "V-model" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$7)
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
                            class: "d-flex align-items-stretch"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, { title: "Transition" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$5)
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
                            class: "d-flex align-items-stretch"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, { title: "Form" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$2)
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
                            class: "d-flex align-items-stretch"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, { title: "Full screen" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$6)
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
                            class: "d-flex align-items-stretch"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, { title: "Persistent" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$4)
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
                            class: "d-flex align-items-stretch"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, { title: "Scrollable" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$3)
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
                            class: "d-flex align-items-stretch"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, { title: "Nested Dialog" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ui-components/Dialogs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Dialogs-D5HQh_i5.mjs.map
