import { defineComponent, ref, resolveComponent, withCtx, createVNode, mergeProps, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$8 } from './UiParentCard-DhlYzLUl.mjs';
import { _ as _sfc_main$9 } from './UiChildCard-Xt7dDOL6.mjs';
import { _ as _sfc_main$7 } from './BaseBreadcrumb-DAIjkUfv.mjs';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Default",
  __ssrInlineRender: true,
  setup(__props) {
    const radioGroup = ref("1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_radio_group = resolveComponent("v-radio-group");
      const _component_v_radio = resolveComponent("v-radio");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex gap-3 align-center flex-column flex-sm-row" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_radio_group, {
        inline: "",
        "hide-details": "",
        modelValue: radioGroup.value,
        "onUpdate:modelValue": ($event) => radioGroup.value = $event,
        class: "d-flex justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_radio, {
              color: "primary",
              value: "1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_radio, {
              disabled: "",
              color: "primary",
              value: "3"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_radio, {
              color: "primary",
              value: "2"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_radio, {
                color: "primary",
                value: "1"
              }),
              createVNode(_component_v_radio, {
                disabled: "",
                color: "primary",
                value: "3"
              }),
              createVNode(_component_v_radio, {
                color: "primary",
                value: "2"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/radio/Default.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Label",
  __ssrInlineRender: true,
  setup(__props) {
    const radioGroup3 = ref("1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_radio_group = resolveComponent("v-radio-group");
      const _component_v_radio = resolveComponent("v-radio");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex align-center flex-column flex-sm-row" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_radio_group, {
        "hide-details": "",
        modelValue: radioGroup3.value,
        "onUpdate:modelValue": ($event) => radioGroup3.value = $event,
        inline: "",
        class: "d-flex gap-3 justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_radio, {
              label: "Primary",
              color: "primary",
              value: "1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_radio, {
              label: "Secondary",
              color: "primary",
              value: "2"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_radio, {
              label: "Success",
              color: "primary",
              value: "3"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_radio, {
              label: "Warning",
              color: "primary",
              value: "4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_radio, {
                label: "Primary",
                color: "primary",
                value: "1"
              }),
              createVNode(_component_v_radio, {
                label: "Secondary",
                color: "primary",
                value: "2"
              }),
              createVNode(_component_v_radio, {
                label: "Success",
                color: "primary",
                value: "3"
              }),
              createVNode(_component_v_radio, {
                label: "Warning",
                color: "primary",
                value: "4"
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/radio/Label.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DefaultDirection",
  __ssrInlineRender: true,
  setup(__props) {
    const radioColumn = ref("1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_radio_group = resolveComponent("v-radio-group");
      const _component_v_radio = resolveComponent("v-radio");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex gap-3 align-center flex-column flex-sm-row" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_radio_group, {
        "hide-details": "",
        modelValue: radioColumn.value,
        "onUpdate:modelValue": ($event) => radioColumn.value = $event,
        column: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_radio, {
              label: "Option 1",
              color: "primary",
              value: "1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_radio, {
              label: "Option 2",
              color: "primary",
              value: "2"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_radio, {
                label: "Option 1",
                color: "primary",
                value: "1"
              }),
              createVNode(_component_v_radio, {
                label: "Option 2",
                color: "primary",
                value: "2"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/radio/DefaultDirection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "InlineDirection",
  __ssrInlineRender: true,
  setup(__props) {
    const radioGroup3 = ref("1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_radio_group = resolveComponent("v-radio-group");
      const _component_v_radio = resolveComponent("v-radio");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-center align-center flex-column flex-sm-row" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_radio_group, {
        "hide-details": "",
        modelValue: radioGroup3.value,
        "onUpdate:modelValue": ($event) => radioGroup3.value = $event,
        inline: "",
        class: "d-flex gap-3 justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_radio, {
              label: "Option 1",
              color: "primary",
              value: "1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_radio, {
              label: "Option 2",
              color: "primary",
              value: "2"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_radio, {
              label: "Option 3",
              color: "primary",
              value: "3"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_radio, {
              label: "Option 4",
              color: "primary",
              value: "4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_radio, {
              label: "Option 5",
              color: "primary",
              value: "5"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_radio, {
              label: "Option 6",
              color: "primary",
              value: "6"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_radio, {
              label: "Option 7",
              color: "primary",
              value: "7"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_radio, {
              label: "Option 8",
              color: "primary",
              value: "8"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_radio, {
                label: "Option 1",
                color: "primary",
                value: "1"
              }),
              createVNode(_component_v_radio, {
                label: "Option 2",
                color: "primary",
                value: "2"
              }),
              createVNode(_component_v_radio, {
                label: "Option 3",
                color: "primary",
                value: "3"
              }),
              createVNode(_component_v_radio, {
                label: "Option 4",
                color: "primary",
                value: "4"
              }),
              createVNode(_component_v_radio, {
                label: "Option 5",
                color: "primary",
                value: "5"
              }),
              createVNode(_component_v_radio, {
                label: "Option 6",
                color: "primary",
                value: "6"
              }),
              createVNode(_component_v_radio, {
                label: "Option 7",
                color: "primary",
                value: "7"
              }),
              createVNode(_component_v_radio, {
                label: "Option 8",
                color: "primary",
                value: "8"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/radio/InlineDirection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Color",
  __ssrInlineRender: true,
  setup(__props) {
    const radioColors = ref("1");
    const radioColor = ref(["primary", "secondary", "success", "error"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_radio_group = resolveComponent("v-radio-group");
      const _component_v_radio = resolveComponent("v-radio");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_radio_group, {
        modelValue: radioColors.value,
        "onUpdate:modelValue": ($event) => radioColors.value = $event,
        inline: "",
        class: "d-flex gap-3 justify-center align-center flex-column flex-sm-row"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(radioColor.value, (btn) => {
              _push2(ssrRenderComponent(_component_v_radio, {
                key: btn,
                color: btn,
                value: "1",
                "hide-details": ""
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(radioColor.value, (btn) => {
                return openBlock(), createBlock(_component_v_radio, {
                  key: btn,
                  color: btn,
                  value: "1",
                  "hide-details": ""
                }, null, 8, ["color"]);
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/radio/Color.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LabelwithColor",
  __ssrInlineRender: true,
  setup(__props) {
    const radioColors = ref("1");
    const radioColor = ref(["primary", "secondary", "success", "error"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_radio_group = resolveComponent("v-radio-group");
      const _component_v_radio = resolveComponent("v-radio");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_radio_group, {
        modelValue: radioColors.value,
        "onUpdate:modelValue": ($event) => radioColors.value = $event,
        inline: "",
        class: "d-flex gap-3 justify-center align-center flex-column flex-sm-row"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(radioColor.value, (btn) => {
              _push2(ssrRenderComponent(_component_v_radio, {
                key: btn,
                color: btn,
                label: btn,
                value: "1",
                "hide-details": ""
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(radioColor.value, (btn) => {
                return openBlock(), createBlock(_component_v_radio, {
                  key: btn,
                  color: btn,
                  label: btn,
                  value: "1",
                  "hide-details": ""
                }, null, 8, ["color", "label"]);
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/radio/LabelwithColor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Radio",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Radio" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Radio",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$7, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$8, { title: "Radio" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$9, { title: "Default" }, {
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
                                      createVNode(_sfc_main$9, { title: "Default" }, {
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
                                lg: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$9, { title: "Label" }, {
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
                                      createVNode(_sfc_main$9, { title: "Label" }, {
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
                                lg: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$9, { title: "Colors" }, {
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
                                      createVNode(_sfc_main$9, { title: "Colors" }, {
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
                                lg: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$9, { title: "Colors with Label" }, {
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
                                      createVNode(_sfc_main$9, { title: "Colors with Label" }, {
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
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$9, { title: "Default Direction" }, {
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
                                      createVNode(_sfc_main$9, { title: "Default Direction" }, {
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
                                lg: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$9, { title: "Inline Direction" }, {
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
                                      createVNode(_sfc_main$9, { title: "Inline Direction" }, {
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
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$9, { title: "Default" }, {
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
                                  lg: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$9, { title: "Label" }, {
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
                                  lg: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$9, { title: "Colors" }, {
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
                                  lg: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$9, { title: "Colors with Label" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$9, { title: "Default Direction" }, {
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
                                  lg: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$9, { title: "Inline Direction" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$3)
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
                                lg: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$9, { title: "Default" }, {
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
                                lg: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$9, { title: "Label" }, {
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
                                lg: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$9, { title: "Colors" }, {
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
                                lg: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$9, { title: "Colors with Label" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$9, { title: "Default Direction" }, {
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
                                lg: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$9, { title: "Inline Direction" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$3)
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
                    createVNode(_sfc_main$8, { title: "Radio" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$9, { title: "Default" }, {
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
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$9, { title: "Label" }, {
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
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$9, { title: "Colors" }, {
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
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$9, { title: "Colors with Label" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$9, { title: "Default Direction" }, {
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
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$9, { title: "Inline Direction" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$3)
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
                  createVNode(_sfc_main$8, { title: "Radio" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$9, { title: "Default" }, {
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
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$9, { title: "Label" }, {
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
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$9, { title: "Colors" }, {
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
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$9, { title: "Colors with Label" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$9, { title: "Default Direction" }, {
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
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$9, { title: "Inline Direction" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$3)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forms/form-elements/Radio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Radio-DxC6B0Qn.mjs.map
