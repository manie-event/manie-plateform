import { defineComponent, ref, resolveComponent, withCtx, createVNode, mergeProps, createTextVNode, toDisplayString, createBlock, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './BaseBreadcrumb-DAIjkUfv.mjs';
import { _ as _sfc_main$4 } from './UiParentCard-DhlYzLUl.mjs';
import { _ as _sfc_main$5 } from './UiChildCard-Xt7dDOL6.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ComboboxDense",
  __ssrInlineRender: true,
  setup(__props) {
    const values = ref("foo");
    const items = ref(["Programming", "Design", "Vue", "Vuetify"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_combobox = resolveComponent("v-combobox");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_combobox, {
                    modelValue: values.value,
                    "onUpdate:modelValue": ($event) => values.value = $event,
                    items: items.value,
                    label: "Default",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_combobox, {
                      modelValue: values.value,
                      "onUpdate:modelValue": ($event) => values.value = $event,
                      items: items.value,
                      label: "Default",
                      "hide-details": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_combobox, {
                    modelValue: values.value,
                    "onUpdate:modelValue": ($event) => values.value = $event,
                    items: items.value,
                    density: "comfortable",
                    label: "Comfortable",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_combobox, {
                      modelValue: values.value,
                      "onUpdate:modelValue": ($event) => values.value = $event,
                      items: items.value,
                      density: "comfortable",
                      label: "Comfortable",
                      "hide-details": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_combobox, {
                    modelValue: values.value,
                    "onUpdate:modelValue": ($event) => values.value = $event,
                    items: items.value,
                    density: "compact",
                    label: "Compact",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_combobox, {
                      modelValue: values.value,
                      "onUpdate:modelValue": ($event) => values.value = $event,
                      items: items.value,
                      density: "compact",
                      label: "Compact",
                      "hide-details": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_combobox, {
                    modelValue: values.value,
                    "onUpdate:modelValue": ($event) => values.value = $event,
                    items: items.value,
                    label: "Default",
                    "hide-details": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_combobox, {
                    modelValue: values.value,
                    "onUpdate:modelValue": ($event) => values.value = $event,
                    items: items.value,
                    density: "comfortable",
                    label: "Comfortable",
                    "hide-details": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_combobox, {
                    modelValue: values.value,
                    "onUpdate:modelValue": ($event) => values.value = $event,
                    items: items.value,
                    density: "compact",
                    label: "Compact",
                    "hide-details": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/combobox/ComboboxDense.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ComboboxMultiple",
  __ssrInlineRender: true,
  setup(__props) {
    const select = ref(["Vuetify", "Programming"]);
    const items = ref(["Programming", "Design", "Vue", "Vuetify"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_combobox = resolveComponent("v-combobox");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_avatar = resolveComponent("v-avatar");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_combobox, {
                    modelValue: select.value,
                    "onUpdate:modelValue": ($event) => select.value = $event,
                    items: items.value,
                    "hide-details": "",
                    label: "Select a favorite activity or create a new one",
                    multiple: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_combobox, {
                      modelValue: select.value,
                      "onUpdate:modelValue": ($event) => select.value = $event,
                      items: items.value,
                      "hide-details": "",
                      label: "Select a favorite activity or create a new one",
                      multiple: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_combobox, {
                    modelValue: select.value,
                    "onUpdate:modelValue": ($event) => select.value = $event,
                    items: items.value,
                    "hide-details": "",
                    label: "I use chips",
                    multiple: "",
                    chips: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_combobox, {
                      modelValue: select.value,
                      "onUpdate:modelValue": ($event) => select.value = $event,
                      items: items.value,
                      "hide-details": "",
                      label: "I use chips",
                      multiple: "",
                      chips: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_combobox, {
                    modelValue: select.value,
                    "onUpdate:modelValue": ($event) => select.value = $event,
                    items: items.value,
                    "hide-details": "",
                    label: "I use a scoped slot",
                    multiple: ""
                  }, {
                    selection: withCtx((data, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_chip, mergeProps({
                          key: JSON.stringify(data.item)
                        }, data.attrs, {
                          "model-value": data.selected,
                          disabled: data.disabled,
                          size: "small",
                          "onClick:close": ($event) => data.parent.selectItem(data.item)
                        }), {
                          prepend: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                class: "bg-primary text-uppercase",
                                start: ""
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(data.item.title.slice(0, 1))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(data.item.title.slice(0, 1)), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_avatar, {
                                  class: "bg-primary text-uppercase",
                                  start: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(data.item.title.slice(0, 1)), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ];
                            }
                          }),
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` ${ssrInterpolate(data.item.title)}`);
                            } else {
                              return [
                                createTextVNode(" " + toDisplayString(data.item.title), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          (openBlock(), createBlock(_component_v_chip, mergeProps({
                            key: JSON.stringify(data.item)
                          }, data.attrs, {
                            "model-value": data.selected,
                            disabled: data.disabled,
                            size: "small",
                            "onClick:close": ($event) => data.parent.selectItem(data.item)
                          }), {
                            prepend: withCtx(() => [
                              createVNode(_component_v_avatar, {
                                class: "bg-primary text-uppercase",
                                start: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(data.item.title.slice(0, 1)), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" " + toDisplayString(data.item.title), 1)
                            ]),
                            _: 2
                          }, 1040, ["model-value", "disabled", "onClick:close"]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_combobox, {
                      modelValue: select.value,
                      "onUpdate:modelValue": ($event) => select.value = $event,
                      items: items.value,
                      "hide-details": "",
                      label: "I use a scoped slot",
                      multiple: ""
                    }, {
                      selection: withCtx((data) => [
                        (openBlock(), createBlock(_component_v_chip, mergeProps({
                          key: JSON.stringify(data.item)
                        }, data.attrs, {
                          "model-value": data.selected,
                          disabled: data.disabled,
                          size: "small",
                          "onClick:close": ($event) => data.parent.selectItem(data.item)
                        }), {
                          prepend: withCtx(() => [
                            createVNode(_component_v_avatar, {
                              class: "bg-primary text-uppercase",
                              start: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(data.item.title.slice(0, 1)), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" " + toDisplayString(data.item.title), 1)
                          ]),
                          _: 2
                        }, 1040, ["model-value", "disabled", "onClick:close"]))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_combobox, {
                    modelValue: select.value,
                    "onUpdate:modelValue": ($event) => select.value = $event,
                    "hide-details": "",
                    label: "I'm readonly",
                    chips: "",
                    multiple: "",
                    readonly: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_combobox, {
                      modelValue: select.value,
                      "onUpdate:modelValue": ($event) => select.value = $event,
                      "hide-details": "",
                      label: "I'm readonly",
                      chips: "",
                      multiple: "",
                      readonly: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_combobox, {
                    modelValue: select.value,
                    "onUpdate:modelValue": ($event) => select.value = $event,
                    items: items.value,
                    "hide-details": "",
                    label: "Select a favorite activity or create a new one",
                    multiple: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_combobox, {
                    modelValue: select.value,
                    "onUpdate:modelValue": ($event) => select.value = $event,
                    items: items.value,
                    "hide-details": "",
                    label: "I use chips",
                    multiple: "",
                    chips: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_combobox, {
                    modelValue: select.value,
                    "onUpdate:modelValue": ($event) => select.value = $event,
                    items: items.value,
                    "hide-details": "",
                    label: "I use a scoped slot",
                    multiple: ""
                  }, {
                    selection: withCtx((data) => [
                      (openBlock(), createBlock(_component_v_chip, mergeProps({
                        key: JSON.stringify(data.item)
                      }, data.attrs, {
                        "model-value": data.selected,
                        disabled: data.disabled,
                        size: "small",
                        "onClick:close": ($event) => data.parent.selectItem(data.item)
                      }), {
                        prepend: withCtx(() => [
                          createVNode(_component_v_avatar, {
                            class: "bg-primary text-uppercase",
                            start: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(data.item.title.slice(0, 1)), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" " + toDisplayString(data.item.title), 1)
                        ]),
                        _: 2
                      }, 1040, ["model-value", "disabled", "onClick:close"]))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "items"])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_combobox, {
                    modelValue: select.value,
                    "onUpdate:modelValue": ($event) => select.value = $event,
                    "hide-details": "",
                    label: "I'm readonly",
                    chips: "",
                    multiple: "",
                    readonly: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/combobox/ComboboxMultiple.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Combobox",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Combobox" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Combobox",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$3, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$4, { title: "Combobox" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                sm: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$5, { title: "Density" }, {
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
                                      createVNode(_sfc_main$5, { title: "Density" }, {
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
                                sm: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$5, { title: "Multiple" }, {
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
                                      createVNode(_sfc_main$5, { title: "Multiple" }, {
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
                                  sm: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$5, { title: "Density" }, {
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
                                  sm: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$5, { title: "Multiple" }, {
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
                                sm: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$5, { title: "Density" }, {
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
                                sm: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$5, { title: "Multiple" }, {
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
                    createVNode(_sfc_main$4, { title: "Combobox" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$5, { title: "Density" }, {
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
                              sm: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$5, { title: "Multiple" }, {
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
                  createVNode(_sfc_main$4, { title: "Combobox" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$5, { title: "Density" }, {
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
                            sm: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$5, { title: "Multiple" }, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forms/form-elements/Combobox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Combobox-DkpT-dkD.mjs.map
