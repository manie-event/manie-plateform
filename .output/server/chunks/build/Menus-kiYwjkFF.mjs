import { defineComponent, ref, resolveComponent, withCtx, createVNode, mergeProps, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$5 } from './BaseBreadcrumb-DAIjkUfv.mjs';
import { _ as _sfc_main$6 } from './UiParentCard-DhlYzLUl.mjs';
import { _ as _sfc_main$7 } from './UiChildCard-Xt7dDOL6.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MenusAnchor",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]);
    const locations = ref(["top", "bottom", "start", "end", "center"]);
    const location = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_select = resolveComponent("v-select");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center mt-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_select, {
        modelValue: location.value,
        "onUpdate:modelValue": ($event) => location.value = $event,
        items: locations.value,
        label: "Location"
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_menu, { location: location.value }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, mergeProps({
              color: "primary",
              dark: ""
            }, props, { class: "px-4 rounded-pill" }), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Dropdown `);
                } else {
                  return [
                    createTextVNode(" Dropdown ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, mergeProps({
                color: "primary",
                dark: ""
              }, props, { class: "px-4 rounded-pill" }), {
                default: withCtx(() => [
                  createTextVNode(" Dropdown ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_list, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(items.value, (item, index) => {
                    _push3(ssrRenderComponent(_component_v_list_item, { key: index }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_list_item_title, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.title)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
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
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                      return openBlock(), createBlock(_component_v_list_item, { key: index }, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item_title, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.title), 1)
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
              createVNode(_component_v_list, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                    return openBlock(), createBlock(_component_v_list_item, { key: index }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item_title, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/menus/MenusAnchor.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MenusHover",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center mt-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_menu, { "open-on-hover": "" }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, mergeProps({ color: "secondary" }, props, { class: "px-4 rounded-pill" }), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Dropdown `);
                } else {
                  return [
                    createTextVNode(" Dropdown ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, mergeProps({ color: "secondary" }, props, { class: "px-4 rounded-pill" }), {
                default: withCtx(() => [
                  createTextVNode(" Dropdown ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_list, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(items.value, (item, index) => {
                    _push3(ssrRenderComponent(_component_v_list_item, { key: index }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_list_item_title, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.title)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
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
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                      return openBlock(), createBlock(_component_v_list_item, { key: index }, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item_title, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.title), 1)
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
              createVNode(_component_v_list, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                    return openBlock(), createBlock(_component_v_list_item, { key: index }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item_title, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/menus/MenusHover.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MenusActivatorTooltip",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]);
    mergeProps();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center mt-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_menu, null, {
        activator: withCtx(({ props: menu }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_tooltip, { anchor: "top" }, {
              activator: withCtx(({ props: tooltip }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, mergeProps({ color: "primary" }, mergeProps(menu, tooltip), { class: "px-4 rounded-pill" }), {
                    default: withCtx((_, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Dropdown w/ Tooltip `);
                      } else {
                        return [
                          createTextVNode(" Dropdown w/ Tooltip ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, mergeProps({ color: "primary" }, mergeProps(menu, tooltip), { class: "px-4 rounded-pill" }), {
                      default: withCtx(() => [
                        createTextVNode(" Dropdown w/ Tooltip ")
                      ]),
                      _: 2
                    }, 1040)
                  ];
                }
              }),
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>I&#39;m A Tooltip</span>`);
                } else {
                  return [
                    createVNode("span", null, "I'm A Tooltip")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_tooltip, { anchor: "top" }, {
                activator: withCtx(({ props: tooltip }) => [
                  createVNode(_component_v_btn, mergeProps({ color: "primary" }, mergeProps(menu, tooltip), { class: "px-4 rounded-pill" }), {
                    default: withCtx(() => [
                      createTextVNode(" Dropdown w/ Tooltip ")
                    ]),
                    _: 2
                  }, 1040)
                ]),
                default: withCtx(() => [
                  createVNode("span", null, "I'm A Tooltip")
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_list, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(items.value, (item, index) => {
                    _push3(ssrRenderComponent(_component_v_list_item, { key: index }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_list_item_title, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.title)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
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
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                      return openBlock(), createBlock(_component_v_list_item, { key: index }, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item_title, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.title), 1)
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
              createVNode(_component_v_list, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                    return openBlock(), createBlock(_component_v_list_item, { key: index }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item_title, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/menus/MenusActivatorTooltip.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MenusPopover",
  __ssrInlineRender: true,
  setup(__props) {
    const fav = ref(true);
    const menu = ref(false);
    const message = ref(false);
    const hints = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_switch = resolveComponent("v-switch");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_spacer = resolveComponent("v-spacer");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center mt-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_menu, {
        modelValue: menu.value,
        "onUpdate:modelValue": ($event) => menu.value = $event,
        "close-on-content-click": false,
        anchor: "top"
      }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, mergeProps({ color: "secondary" }, props, { class: "px-4 rounded-pill" }), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Menu as Popover `);
                } else {
                  return [
                    createTextVNode(" Menu as Popover ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, mergeProps({ color: "secondary" }, props, { class: "px-4 rounded-pill" }), {
                default: withCtx(() => [
                  createTextVNode(" Menu as Popover ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, { "min-width": "300" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_list, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_item, {
                          "prepend-avatar": "https://cdn.vuetifyjs.com/images/john.jpg",
                          title: "John Leider",
                          subtitle: "Founder of Vuetify"
                        }, {
                          append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, {
                                variant: "text",
                                class: fav.value ? "text-primary" : "",
                                icon: "mdi-heart",
                                onClick: ($event) => fav.value = !fav.value,
                                flat: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, {
                                  variant: "text",
                                  class: fav.value ? "text-primary" : "",
                                  icon: "mdi-heart",
                                  onClick: ($event) => fav.value = !fav.value,
                                  flat: ""
                                }, null, 8, ["class", "onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list_item, {
                            "prepend-avatar": "https://cdn.vuetifyjs.com/images/john.jpg",
                            title: "John Leider",
                            subtitle: "Founder of Vuetify"
                          }, {
                            append: withCtx(() => [
                              createVNode(_component_v_btn, {
                                variant: "text",
                                class: fav.value ? "text-primary" : "",
                                icon: "mdi-heart",
                                onClick: ($event) => fav.value = !fav.value,
                                flat: ""
                              }, null, 8, ["class", "onClick"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_list, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_switch, {
                                modelValue: message.value,
                                "onUpdate:modelValue": ($event) => message.value = $event,
                                color: "primary",
                                label: "Enable messages",
                                "hide-details": "",
                                class: "pl-2"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_switch, {
                                  modelValue: message.value,
                                  "onUpdate:modelValue": ($event) => message.value = $event,
                                  color: "primary",
                                  label: "Enable messages",
                                  "hide-details": "",
                                  class: "pl-2"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_list_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_switch, {
                                modelValue: hints.value,
                                "onUpdate:modelValue": ($event) => hints.value = $event,
                                color: "primary",
                                label: "Enable hints",
                                "hide-details": "",
                                class: "pl-2"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_switch, {
                                  modelValue: hints.value,
                                  "onUpdate:modelValue": ($event) => hints.value = $event,
                                  color: "primary",
                                  label: "Enable hints",
                                  "hide-details": "",
                                  class: "pl-2"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_switch, {
                                modelValue: message.value,
                                "onUpdate:modelValue": ($event) => message.value = $event,
                                color: "primary",
                                label: "Enable messages",
                                "hide-details": "",
                                class: "pl-2"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_switch, {
                                modelValue: hints.value,
                                "onUpdate:modelValue": ($event) => hints.value = $event,
                                color: "primary",
                                label: "Enable hints",
                                "hide-details": "",
                                class: "pl-2"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
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
                          text: "",
                          onClick: ($event) => menu.value = false,
                          flat: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Cancel `);
                            } else {
                              return [
                                createTextVNode(" Cancel ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "primary",
                          text: "",
                          onClick: ($event) => menu.value = false,
                          flat: ""
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
                          createVNode(_component_v_spacer),
                          createVNode(_component_v_btn, {
                            text: "",
                            onClick: ($event) => menu.value = false,
                            flat: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Cancel ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_v_btn, {
                            color: "primary",
                            text: "",
                            onClick: ($event) => menu.value = false,
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_list, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item, {
                          "prepend-avatar": "https://cdn.vuetifyjs.com/images/john.jpg",
                          title: "John Leider",
                          subtitle: "Founder of Vuetify"
                        }, {
                          append: withCtx(() => [
                            createVNode(_component_v_btn, {
                              variant: "text",
                              class: fav.value ? "text-primary" : "",
                              icon: "mdi-heart",
                              onClick: ($event) => fav.value = !fav.value,
                              flat: ""
                            }, null, 8, ["class", "onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_divider),
                    createVNode(_component_v_list, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_switch, {
                              modelValue: message.value,
                              "onUpdate:modelValue": ($event) => message.value = $event,
                              color: "primary",
                              label: "Enable messages",
                              "hide-details": "",
                              class: "pl-2"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_list_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_switch, {
                              modelValue: hints.value,
                              "onUpdate:modelValue": ($event) => hints.value = $event,
                              color: "primary",
                              label: "Enable hints",
                              "hide-details": "",
                              class: "pl-2"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_actions, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_spacer),
                        createVNode(_component_v_btn, {
                          text: "",
                          onClick: ($event) => menu.value = false,
                          flat: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_v_btn, {
                          color: "primary",
                          text: "",
                          onClick: ($event) => menu.value = false,
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card, { "min-width": "300" }, {
                default: withCtx(() => [
                  createVNode(_component_v_list, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_list_item, {
                        "prepend-avatar": "https://cdn.vuetifyjs.com/images/john.jpg",
                        title: "John Leider",
                        subtitle: "Founder of Vuetify"
                      }, {
                        append: withCtx(() => [
                          createVNode(_component_v_btn, {
                            variant: "text",
                            class: fav.value ? "text-primary" : "",
                            icon: "mdi-heart",
                            onClick: ($event) => fav.value = !fav.value,
                            flat: ""
                          }, null, 8, ["class", "onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_divider),
                  createVNode(_component_v_list, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_list_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_switch, {
                            modelValue: message.value,
                            "onUpdate:modelValue": ($event) => message.value = $event,
                            color: "primary",
                            label: "Enable messages",
                            "hide-details": "",
                            class: "pl-2"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_list_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_switch, {
                            modelValue: hints.value,
                            "onUpdate:modelValue": ($event) => hints.value = $event,
                            color: "primary",
                            label: "Enable hints",
                            "hide-details": "",
                            class: "pl-2"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_spacer),
                      createVNode(_component_v_btn, {
                        text: "",
                        onClick: ($event) => menu.value = false,
                        flat: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_v_btn, {
                        color: "primary",
                        text: "",
                        onClick: ($event) => menu.value = false,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/menus/MenusPopover.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Menus",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Menus" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "#"
      },
      {
        text: "Menus",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$5, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, { title: "Menus" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    sm: "12",
                    lg: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$7, { title: "Anchor" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$4, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$4)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$7, { title: "Anchor" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    sm: "12",
                    lg: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$7, { title: "Hover" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$3, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$3)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$7, { title: "Hover" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$3)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    sm: "12",
                    lg: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$7, { title: "Activator and tooltip" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$2, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$2)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$7, { title: "Activator and tooltip" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    sm: "12",
                    lg: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$7, { title: "Popover" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$1, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$7, { title: "Popover" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1)
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
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "12",
                      lg: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$7, { title: "Anchor" }, {
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
                      lg: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$7, { title: "Hover" }, {
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
                      lg: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$7, { title: "Activator and tooltip" }, {
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
                      lg: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$7, { title: "Popover" }, {
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "12",
                    lg: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$7, { title: "Anchor" }, {
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
                    lg: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$7, { title: "Hover" }, {
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
                    lg: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$7, { title: "Activator and tooltip" }, {
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
                    lg: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$7, { title: "Popover" }, {
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
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ui-components/Menus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Menus-kiYwjkFF.mjs.map
