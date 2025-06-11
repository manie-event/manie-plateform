import { defineComponent, ref, resolveComponent, withCtx, createVNode, mergeProps, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$a } from './UiParentCard-DhlYzLUl.mjs';
import { _ as _sfc_main$b } from './UiChildCard-Xt7dDOL6.mjs';
import { VolumeIcon, Volume2Icon } from 'vue-tabler-icons';
import { _ as _sfc_main$9 } from './BaseBreadcrumb-DAIjkUfv.mjs';

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Default",
  __ssrInlineRender: true,
  setup(__props) {
    const slider1 = ref(50);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_slider = resolveComponent("v-slider");
      _push(ssrRenderComponent(_component_v_slider, mergeProps({
        modelValue: slider1.value,
        "onUpdate:modelValue": ($event) => slider1.value = $event,
        "hide-details": "",
        color: "primary"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/slider/Default.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Disabled",
  __ssrInlineRender: true,
  setup(__props) {
    const slider2 = ref(40);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_slider = resolveComponent("v-slider");
      _push(ssrRenderComponent(_component_v_slider, mergeProps({
        modelValue: slider2.value,
        "onUpdate:modelValue": ($event) => slider2.value = $event,
        "hide-details": "",
        color: "primary",
        disabled: ""
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/slider/Disabled.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Volume",
  __ssrInlineRender: true,
  setup(__props) {
    const volume = ref(40);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_slider = resolveComponent("v-slider");
      _push(ssrRenderComponent(_component_v_slider, mergeProps({
        modelValue: volume.value,
        "onUpdate:modelValue": ($event) => volume.value = $event,
        "hide-details": "",
        color: "primary"
      }, _attrs), {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Volume2Icon), {
              "stroke-width": "1.5",
              size: "20"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Volume2Icon), {
                "stroke-width": "1.5",
                size: "20"
              })
            ];
          }
        }),
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VolumeIcon), {
              "stroke-width": "1.5",
              size: "20"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VolumeIcon), {
                "stroke-width": "1.5",
                size: "20"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/slider/Volume.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TickSize",
  __ssrInlineRender: true,
  setup(__props) {
    const slider6 = ref(40);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_slider = resolveComponent("v-slider");
      _push(ssrRenderComponent(_component_v_slider, mergeProps({
        class: "mt-3",
        modelValue: slider6.value,
        "onUpdate:modelValue": ($event) => slider6.value = $event,
        "tick-size": "4",
        "hide-details": "",
        color: "primary",
        step: "10",
        "show-ticks": "always",
        "thumb-label": "always"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/slider/TickSize.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Steps",
  __ssrInlineRender: true,
  setup(__props) {
    const slider5 = ref(40);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_slider = resolveComponent("v-slider");
      _push(ssrRenderComponent(_component_v_slider, mergeProps({
        class: "mt-3",
        modelValue: slider5.value,
        "onUpdate:modelValue": ($event) => slider5.value = $event,
        "hide-details": "",
        color: "primary",
        step: "1",
        "thumb-label": "always"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/slider/Steps.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Ticks",
  __ssrInlineRender: true,
  setup(__props) {
    const slider6 = ref(40);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_slider = resolveComponent("v-slider");
      _push(ssrRenderComponent(_component_v_slider, mergeProps({
        class: "mt-3",
        modelValue: slider6.value,
        "onUpdate:modelValue": ($event) => slider6.value = $event,
        "hide-details": "",
        color: "primary",
        step: "10",
        "show-ticks": "always",
        "thumb-label": "always"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/slider/Ticks.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Vertical",
  __ssrInlineRender: true,
  setup(__props) {
    const slider1 = ref(40);
    const slider2 = ref(50);
    const slider3 = ref(70);
    const slider4 = ref(80);
    const slider5 = ref(65);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_slider = resolveComponent("v-slider");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_slider, {
        modelValue: slider1.value,
        "onUpdate:modelValue": ($event) => slider1.value = $event,
        "hide-details": "",
        direction: "vertical",
        color: "primary"
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_slider, {
        modelValue: slider2.value,
        "onUpdate:modelValue": ($event) => slider2.value = $event,
        "hide-details": "",
        direction: "vertical",
        color: "primary"
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_slider, {
        modelValue: slider3.value,
        "onUpdate:modelValue": ($event) => slider3.value = $event,
        "hide-details": "",
        direction: "vertical",
        color: "primary"
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_slider, {
        modelValue: slider4.value,
        "onUpdate:modelValue": ($event) => slider4.value = $event,
        "hide-details": "",
        direction: "vertical",
        color: "primary"
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_slider, {
        modelValue: slider5.value,
        "onUpdate:modelValue": ($event) => slider5.value = $event,
        "hide-details": "",
        direction: "vertical",
        color: "primary",
        disabled: ""
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/slider/Vertical.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Custom",
  __ssrInlineRender: true,
  setup(__props) {
    const slider1 = ref(50);
    const slider2 = ref(70);
    const slider3 = ref(80);
    const thumb = ref(30);
    const tickLabels = ref({
      0: "Figs",
      1: "Lemon",
      2: "Pear",
      3: "Apple"
    });
    const modelValue = ref();
    const satisfactionEmojis = ref(["\u{1F62D}", "\u{1F622}", "\u2639\uFE0F", "\u{1F641}", "\u{1F610}", "\u{1F642}", "\u{1F60A}", "\u{1F601}", "\u{1F604}", "\u{1F60D}"]);
    const slider = ref(45);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_slider = resolveComponent("v-slider");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_v_slider, {
        step: "10",
        modelValue: thumb.value,
        "onUpdate:modelValue": ($event) => thumb.value = $event,
        "thumb-size": 30,
        color: "primary"
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_slider, {
        modelValue: slider1.value,
        "onUpdate:modelValue": ($event) => slider1.value = $event,
        color: "secondary"
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_slider, {
        modelValue: slider2.value,
        "onUpdate:modelValue": ($event) => slider2.value = $event,
        color: "primary",
        "track-color": "secondary"
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_slider, {
        modelValue: slider3.value,
        "onUpdate:modelValue": ($event) => slider3.value = $event,
        color: "primary",
        "thumb-color": "secondary"
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_slider, {
        ticks: tickLabels.value,
        max: 3,
        step: "1",
        color: "primary",
        "show-ticks": "always",
        "tick-size": "4"
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_slider, {
        modelValue: slider.value,
        "onUpdate:modelValue": ($event) => slider.value = $event,
        color: "primary",
        "thumb-label": "always",
        class: "mt-6",
        "hide-details": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<template${_scopeId}>${ssrInterpolate(satisfactionEmojis.value[Math.min(Math.floor(modelValue.value / 10), 9)])}</template>`);
          } else {
            return [
              createVNode("template", null, [
                createTextVNode(toDisplayString(satisfactionEmojis.value[Math.min(Math.floor(modelValue.value / 10), 9)]), 1)
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/slider/Custom.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Slider",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Slider" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Slider",
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
                  _push3(ssrRenderComponent(_sfc_main$a, { title: "Slider" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                lg: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Default" }, {
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
                                      createVNode(_sfc_main$b, { title: "Default" }, {
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
                                lg: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Icon" }, {
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
                                      createVNode(_sfc_main$b, { title: "Icon" }, {
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
                                lg: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Disabled" }, {
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
                                      createVNode(_sfc_main$b, { title: "Disabled" }, {
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
                                lg: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Steps" }, {
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
                                      createVNode(_sfc_main$b, { title: "Steps" }, {
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
                                lg: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Ticks" }, {
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
                                      createVNode(_sfc_main$b, { title: "Ticks" }, {
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
                                lg: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Tick Size" }, {
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
                                      createVNode(_sfc_main$b, { title: "Tick Size" }, {
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
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Custom" }, {
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
                                      createVNode(_sfc_main$b, { title: "Custom" }, {
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
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Vertical" }, {
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
                                      createVNode(_sfc_main$b, { title: "Vertical" }, {
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
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b, { title: "Default" }, {
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
                                  lg: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b, { title: "Icon" }, {
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
                                  lg: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b, { title: "Disabled" }, {
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
                                  lg: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b, { title: "Steps" }, {
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
                                  lg: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b, { title: "Ticks" }, {
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
                                  lg: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b, { title: "Tick Size" }, {
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
                                    createVNode(_sfc_main$b, { title: "Custom" }, {
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
                                    createVNode(_sfc_main$b, { title: "Vertical" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$2)
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
                                lg: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$b, { title: "Default" }, {
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
                                lg: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$b, { title: "Icon" }, {
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
                                lg: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$b, { title: "Disabled" }, {
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
                                lg: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$b, { title: "Steps" }, {
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
                                lg: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$b, { title: "Ticks" }, {
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
                                lg: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$b, { title: "Tick Size" }, {
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
                                  createVNode(_sfc_main$b, { title: "Custom" }, {
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
                                  createVNode(_sfc_main$b, { title: "Vertical" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$2)
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
                    createVNode(_sfc_main$a, { title: "Slider" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$b, { title: "Default" }, {
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
                              lg: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$b, { title: "Icon" }, {
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
                              lg: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$b, { title: "Disabled" }, {
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
                              lg: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$b, { title: "Steps" }, {
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
                              lg: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$b, { title: "Ticks" }, {
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
                              lg: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$b, { title: "Tick Size" }, {
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
                                createVNode(_sfc_main$b, { title: "Custom" }, {
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
                                createVNode(_sfc_main$b, { title: "Vertical" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$2)
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
                  createVNode(_sfc_main$a, { title: "Slider" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, { title: "Default" }, {
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
                            lg: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, { title: "Icon" }, {
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
                            lg: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, { title: "Disabled" }, {
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
                            lg: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, { title: "Steps" }, {
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
                            lg: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, { title: "Ticks" }, {
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
                            lg: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, { title: "Tick Size" }, {
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
                              createVNode(_sfc_main$b, { title: "Custom" }, {
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
                              createVNode(_sfc_main$b, { title: "Vertical" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forms/form-elements/Slider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Slider-Bl-sX8cX.mjs.map
