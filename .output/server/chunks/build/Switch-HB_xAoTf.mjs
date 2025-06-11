import { defineComponent, ref, resolveComponent, withCtx, createVNode, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$8 } from './UiParentCard-DhlYzLUl.mjs';
import { _ as _sfc_main$9 } from './UiChildCard-Xt7dDOL6.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$7 } from './BaseBreadcrumb-DAIjkUfv.mjs';
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
import 'date-fns';
import 'lodash';
import 'vue-draggable-next';
import 'vue3-easy-data-table';
import 'vue-easy-lightbox';
import 'vue-scrollto';

const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_v_switch = resolveComponent("v-switch");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-center" }, _attrs))}><div class="d-flex gap-4 justify-center align-center flex-column flex-wrap flex-xl-nowrap flex-sm-row fill-height">`);
  _push(ssrRenderComponent(_component_v_switch, {
    color: "primary",
    "model-value": true,
    "hide-details": ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_v_switch, {
    color: "primary",
    "model-value": false,
    "hide-details": ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_v_switch, {
    color: "primary",
    "model-value": true,
    disabled: "",
    "hide-details": ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_v_switch, {
    color: "primary",
    "model-value": false,
    disabled: "",
    "hide-details": ""
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/switch/Default.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Default = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_v_switch = resolveComponent("v-switch");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_v_switch, {
    color: "primary",
    "model-value": true,
    label: "Label",
    "hide-details": ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_v_switch, {
    color: "primary",
    disabled: "",
    label: "Disabled",
    "model-value": false,
    "hide-details": ""
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/switch/Label.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Label = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_switch = resolveComponent("v-switch");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-center" }, _attrs))}><div class="d-flex gap-4 justify-center align-center flex-column flex-wrap flex-xl-nowrap flex-sm-row fill-height">`);
  _push(ssrRenderComponent(_component_v_switch, {
    color: "primary",
    "model-value": true,
    "hide-details": "",
    inset: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_v_switch, {
    color: "primary",
    "model-value": false,
    "hide-details": "",
    inset: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_v_switch, {
    color: "primary",
    "model-value": true,
    disabled: "",
    "hide-details": "",
    inset: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_v_switch, {
    color: "primary",
    "model-value": false,
    disabled: "",
    "hide-details": "",
    inset: ""
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/switch/Inset.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Inset = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "InsetColors",
  __ssrInlineRender: true,
  setup(__props) {
    ref(true);
    const switchColor = ref(["primary", "secondary", "success", "error", "warning"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_switch = resolveComponent("v-switch");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-center" }, _attrs))}><div class="d-flex gap-4 justify-center align-center flex-column flex-wrap flex-xl-nowrap flex-sm-row fill-height"><!--[-->`);
      ssrRenderList(switchColor.value, (btn) => {
        _push(ssrRenderComponent(_component_v_switch, {
          key: btn,
          color: btn,
          "model-value": true,
          "hide-details": "",
          inset: ""
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/switch/InsetColors.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Colors",
  __ssrInlineRender: true,
  setup(__props) {
    ref(true);
    const switchColor = ref(["primary", "secondary", "success", "error", "warning"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_switch = resolveComponent("v-switch");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-center" }, _attrs))}><div class="d-flex gap-4 justify-center align-center flex-column flex-wrap flex-xl-nowrap flex-sm-row fill-height"><!--[-->`);
      ssrRenderList(switchColor.value, (btn) => {
        _push(ssrRenderComponent(_component_v_switch, {
          key: btn,
          color: btn,
          "model-value": true,
          "hide-details": ""
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/switch/Colors.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_switch = resolveComponent("v-switch");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_v_switch, {
    loading: "warning",
    "model-value": true,
    label: "on loading",
    "hide-details": ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_v_switch, {
    "model-value": false,
    loading: "warning",
    label: "off loading",
    "hide-details": ""
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/switch/States.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const States = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Switch",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Switch" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Switch",
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
                  _push3(ssrRenderComponent(_sfc_main$8, { title: "Switch" }, {
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
                                          _push7(ssrRenderComponent(Default, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(Default)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$9, { title: "Default" }, {
                                        default: withCtx(() => [
                                          createVNode(Default)
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
                                    _push6(ssrRenderComponent(_sfc_main$9, { title: "Inset" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(Inset, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(Inset)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$9, { title: "Inset" }, {
                                        default: withCtx(() => [
                                          createVNode(Inset)
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
                                    _push6(ssrRenderComponent(_sfc_main$9, { title: "With Label" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(Label, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(Label)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$9, { title: "With Label" }, {
                                        default: withCtx(() => [
                                          createVNode(Label)
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
                                    _push6(ssrRenderComponent(_sfc_main$9, { title: "States" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(States, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(States)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$9, { title: "States" }, {
                                        default: withCtx(() => [
                                          createVNode(States)
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
                                    _push6(ssrRenderComponent(_sfc_main$9, { title: "Inset Colors" }, {
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
                                      createVNode(_sfc_main$9, { title: "Inset Colors" }, {
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
                                        createVNode(Default)
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
                                    createVNode(_sfc_main$9, { title: "Inset" }, {
                                      default: withCtx(() => [
                                        createVNode(Inset)
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
                                    createVNode(_sfc_main$9, { title: "With Label" }, {
                                      default: withCtx(() => [
                                        createVNode(Label)
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
                                    createVNode(_sfc_main$9, { title: "States" }, {
                                      default: withCtx(() => [
                                        createVNode(States)
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
                                    createVNode(_sfc_main$9, { title: "Inset Colors" }, {
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
                                      createVNode(Default)
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
                                  createVNode(_sfc_main$9, { title: "Inset" }, {
                                    default: withCtx(() => [
                                      createVNode(Inset)
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
                                  createVNode(_sfc_main$9, { title: "With Label" }, {
                                    default: withCtx(() => [
                                      createVNode(Label)
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
                                  createVNode(_sfc_main$9, { title: "States" }, {
                                    default: withCtx(() => [
                                      createVNode(States)
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
                                  createVNode(_sfc_main$9, { title: "Inset Colors" }, {
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
                    createVNode(_sfc_main$8, { title: "Switch" }, {
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
                                    createVNode(Default)
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
                                createVNode(_sfc_main$9, { title: "Inset" }, {
                                  default: withCtx(() => [
                                    createVNode(Inset)
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
                                createVNode(_sfc_main$9, { title: "With Label" }, {
                                  default: withCtx(() => [
                                    createVNode(Label)
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
                                createVNode(_sfc_main$9, { title: "States" }, {
                                  default: withCtx(() => [
                                    createVNode(States)
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
                                createVNode(_sfc_main$9, { title: "Inset Colors" }, {
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
                  createVNode(_sfc_main$8, { title: "Switch" }, {
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
                                  createVNode(Default)
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
                              createVNode(_sfc_main$9, { title: "Inset" }, {
                                default: withCtx(() => [
                                  createVNode(Inset)
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
                              createVNode(_sfc_main$9, { title: "With Label" }, {
                                default: withCtx(() => [
                                  createVNode(Label)
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
                              createVNode(_sfc_main$9, { title: "States" }, {
                                default: withCtx(() => [
                                  createVNode(States)
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
                              createVNode(_sfc_main$9, { title: "Inset Colors" }, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forms/form-elements/Switch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Switch-HB_xAoTf.mjs.map
