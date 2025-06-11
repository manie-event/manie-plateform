import { defineComponent, ref, resolveComponent, withCtx, createVNode, mergeProps, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$7 } from './BaseBreadcrumb-DAIjkUfv.mjs';
import { _ as _sfc_main$8 } from './UiParentCard-DhlYzLUl.mjs';
import { _ as _sfc_main$9 } from './UiChildCard-Xt7dDOL6.mjs';
import { _ as _export_sfc } from './server.mjs';
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
  const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
  const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
  const _component_v_expansion_panel_title = resolveComponent("v-expansion-panel-title");
  const _component_v_expansion_panel_text = resolveComponent("v-expansion-panel-text");
  const _component_v_divider = resolveComponent("v-divider");
  _push(ssrRenderComponent(_component_v_expansion_panels, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_expansion_panel, { elevation: "10" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_expansion_panel_title, { class: "text-h6" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Accordion 1`);
                  } else {
                    return [
                      createTextVNode("Accordion 1")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`);
                  } else {
                    return [
                      createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                  default: withCtx(() => [
                    createTextVNode("Accordion 1")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_expansion_panel_text, null, {
                  default: withCtx(() => [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_divider, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_expansion_panel, { elevation: "10" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_expansion_panel_title, { class: "text-h6" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Accordion 2`);
                  } else {
                    return [
                      createTextVNode("Accordion 2")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`);
                  } else {
                    return [
                      createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                  default: withCtx(() => [
                    createTextVNode("Accordion 2")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_expansion_panel_text, null, {
                  default: withCtx(() => [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_divider, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_expansion_panel, { elevation: "10" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_expansion_panel_title, { class: "text-h6" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Accordion 3`);
                  } else {
                    return [
                      createTextVNode("Accordion 3")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`);
                  } else {
                    return [
                      createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                  default: withCtx(() => [
                    createTextVNode("Accordion 3")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_expansion_panel_text, null, {
                  default: withCtx(() => [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_divider, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_expansion_panel, { elevation: "10" }, {
            default: withCtx(() => [
              createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                default: withCtx(() => [
                  createTextVNode("Accordion 1")
                ]),
                _: 1
              }),
              createVNode(_component_v_expansion_panel_text, null, {
                default: withCtx(() => [
                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_divider),
          createVNode(_component_v_expansion_panel, { elevation: "10" }, {
            default: withCtx(() => [
              createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                default: withCtx(() => [
                  createTextVNode("Accordion 2")
                ]),
                _: 1
              }),
              createVNode(_component_v_expansion_panel_text, null, {
                default: withCtx(() => [
                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_divider),
          createVNode(_component_v_expansion_panel, { elevation: "10" }, {
            default: withCtx(() => [
              createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                default: withCtx(() => [
                  createTextVNode("Accordion 3")
                ]),
                _: 1
              }),
              createVNode(_component_v_expansion_panel_text, null, {
                default: withCtx(() => [
                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_divider)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/expansionpanel/Basic.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Basic = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DefaultExpand",
  __ssrInlineRender: true,
  setup(__props) {
    const panel = ref([0]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
      const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
      const _component_v_expansion_panel_title = resolveComponent("v-expansion-panel-title");
      const _component_v_expansion_panel_text = resolveComponent("v-expansion-panel-text");
      const _component_v_divider = resolveComponent("v-divider");
      _push(ssrRenderComponent(_component_v_expansion_panels, mergeProps({
        modelValue: panel.value,
        "onUpdate:modelValue": ($event) => panel.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_expansion_panel, { elevation: "10" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_expansion_panel_title, { class: "text-h6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Accordion 1`);
                      } else {
                        return [
                          createTextVNode("Accordion 1")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_expansion_panel_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`);
                      } else {
                        return [
                          createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                      default: withCtx(() => [
                        createTextVNode("Accordion 1")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_expansion_panel_text, null, {
                      default: withCtx(() => [
                        createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_divider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_expansion_panel, { elevation: "10" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_expansion_panel_title, { class: "text-h6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Accordion 2`);
                      } else {
                        return [
                          createTextVNode("Accordion 2")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_expansion_panel_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`);
                      } else {
                        return [
                          createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                      default: withCtx(() => [
                        createTextVNode("Accordion 2")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_expansion_panel_text, null, {
                      default: withCtx(() => [
                        createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_divider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_expansion_panel, { elevation: "10" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_expansion_panel_title, { class: "text-h6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Accordion 3`);
                      } else {
                        return [
                          createTextVNode("Accordion 3")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_expansion_panel_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`);
                      } else {
                        return [
                          createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                      default: withCtx(() => [
                        createTextVNode("Accordion 3")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_expansion_panel_text, null, {
                      default: withCtx(() => [
                        createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
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
              createVNode(_component_v_expansion_panel, { elevation: "10" }, {
                default: withCtx(() => [
                  createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                    default: withCtx(() => [
                      createTextVNode("Accordion 1")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_expansion_panel_text, null, {
                    default: withCtx(() => [
                      createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_expansion_panel, { elevation: "10" }, {
                default: withCtx(() => [
                  createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                    default: withCtx(() => [
                      createTextVNode("Accordion 2")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_expansion_panel_text, null, {
                    default: withCtx(() => [
                      createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_expansion_panel, { elevation: "10" }, {
                default: withCtx(() => [
                  createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                    default: withCtx(() => [
                      createTextVNode("Accordion 3")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_expansion_panel_text, null, {
                    default: withCtx(() => [
                      createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
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
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/expansionpanel/DefaultExpand.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
  const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
  const _component_v_expansion_panel_title = resolveComponent("v-expansion-panel-title");
  const _component_v_expansion_panel_text = resolveComponent("v-expansion-panel-text");
  const _component_v_divider = resolveComponent("v-divider");
  _push(ssrRenderComponent(_component_v_expansion_panels, mergeProps({ variant: "inset" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_expansion_panel, { elevation: "10" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_expansion_panel_title, { class: "text-h6" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Accordion 1`);
                  } else {
                    return [
                      createTextVNode("Accordion 1")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`);
                  } else {
                    return [
                      createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                  default: withCtx(() => [
                    createTextVNode("Accordion 1")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_expansion_panel_text, null, {
                  default: withCtx(() => [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_divider)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_expansion_panel, { elevation: "10" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_expansion_panel_title, { class: "text-h6" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Accordion 2`);
                  } else {
                    return [
                      createTextVNode("Accordion 2")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`);
                  } else {
                    return [
                      createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                  default: withCtx(() => [
                    createTextVNode("Accordion 2")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_expansion_panel_text, null, {
                  default: withCtx(() => [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_divider)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_expansion_panel, { elevation: "10" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_expansion_panel_title, { class: "text-h6" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Accordion 3`);
                  } else {
                    return [
                      createTextVNode("Accordion 3")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`);
                  } else {
                    return [
                      createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                  default: withCtx(() => [
                    createTextVNode("Accordion 3")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_expansion_panel_text, null, {
                  default: withCtx(() => [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_divider)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_expansion_panel, { elevation: "10" }, {
            default: withCtx(() => [
              createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                default: withCtx(() => [
                  createTextVNode("Accordion 1")
                ]),
                _: 1
              }),
              createVNode(_component_v_expansion_panel_text, null, {
                default: withCtx(() => [
                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                ]),
                _: 1
              }),
              createVNode(_component_v_divider)
            ]),
            _: 1
          }),
          createVNode(_component_v_expansion_panel, { elevation: "10" }, {
            default: withCtx(() => [
              createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                default: withCtx(() => [
                  createTextVNode("Accordion 2")
                ]),
                _: 1
              }),
              createVNode(_component_v_expansion_panel_text, null, {
                default: withCtx(() => [
                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                ]),
                _: 1
              }),
              createVNode(_component_v_divider)
            ]),
            _: 1
          }),
          createVNode(_component_v_expansion_panel, { elevation: "10" }, {
            default: withCtx(() => [
              createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                default: withCtx(() => [
                  createTextVNode("Accordion 3")
                ]),
                _: 1
              }),
              createVNode(_component_v_expansion_panel_text, null, {
                default: withCtx(() => [
                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                ]),
                _: 1
              }),
              createVNode(_component_v_divider)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/expansionpanel/Inset.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Inset = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
  const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
  const _component_v_expansion_panel_title = resolveComponent("v-expansion-panel-title");
  const _component_v_expansion_panel_text = resolveComponent("v-expansion-panel-text");
  const _component_v_divider = resolveComponent("v-divider");
  _push(ssrRenderComponent(_component_v_expansion_panels, mergeProps({ variant: "popout" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_expansion_panel, { elevation: "10" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_expansion_panel_title, { class: "text-h6" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Accordion 1`);
                  } else {
                    return [
                      createTextVNode("Accordion 1")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`);
                  } else {
                    return [
                      createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                  default: withCtx(() => [
                    createTextVNode("Accordion 1")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_expansion_panel_text, null, {
                  default: withCtx(() => [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_divider)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_expansion_panel, { elevation: "10" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_expansion_panel_title, { class: "text-h6" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Accordion 2`);
                  } else {
                    return [
                      createTextVNode("Accordion 2")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`);
                  } else {
                    return [
                      createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                  default: withCtx(() => [
                    createTextVNode("Accordion 2")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_expansion_panel_text, null, {
                  default: withCtx(() => [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_divider)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_expansion_panel, { elevation: "10" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_expansion_panel_title, { class: "text-h6" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Accordion 3`);
                  } else {
                    return [
                      createTextVNode("Accordion 3")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`);
                  } else {
                    return [
                      createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                  default: withCtx(() => [
                    createTextVNode("Accordion 3")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_expansion_panel_text, null, {
                  default: withCtx(() => [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_divider)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_expansion_panel, { elevation: "10" }, {
            default: withCtx(() => [
              createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                default: withCtx(() => [
                  createTextVNode("Accordion 1")
                ]),
                _: 1
              }),
              createVNode(_component_v_expansion_panel_text, null, {
                default: withCtx(() => [
                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                ]),
                _: 1
              }),
              createVNode(_component_v_divider)
            ]),
            _: 1
          }),
          createVNode(_component_v_expansion_panel, { elevation: "10" }, {
            default: withCtx(() => [
              createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                default: withCtx(() => [
                  createTextVNode("Accordion 2")
                ]),
                _: 1
              }),
              createVNode(_component_v_expansion_panel_text, null, {
                default: withCtx(() => [
                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                ]),
                _: 1
              }),
              createVNode(_component_v_divider)
            ]),
            _: 1
          }),
          createVNode(_component_v_expansion_panel, { elevation: "10" }, {
            default: withCtx(() => [
              createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                default: withCtx(() => [
                  createTextVNode("Accordion 3")
                ]),
                _: 1
              }),
              createVNode(_component_v_expansion_panel_text, null, {
                default: withCtx(() => [
                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")
                ]),
                _: 1
              }),
              createVNode(_component_v_divider)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/expansionpanel/Popout.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Popout = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CustomizedIcon",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
      const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
      const _component_v_expansion_panel_title = resolveComponent("v-expansion-panel-title");
      const _component_v_expansion_panel_text = resolveComponent("v-expansion-panel-text");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_icon = resolveComponent("v-icon");
      _push(ssrRenderComponent(_component_v_expansion_panels, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_expansion_panel, { elevation: "10" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_expansion_panel_title, {
                    "expand-icon": "mdi-plus",
                    "collapse-icon": "mdi-minus",
                    class: "text-h6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Accordion 1 `);
                      } else {
                        return [
                          createTextVNode(" Accordion 1 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_expansion_panel_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `);
                      } else {
                        return [
                          createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_expansion_panel_title, {
                      "expand-icon": "mdi-plus",
                      "collapse-icon": "mdi-minus",
                      class: "text-h6"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Accordion 1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_expansion_panel_text, null, {
                      default: withCtx(() => [
                        createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_divider)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_expansion_panel, { elevation: "10" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_expansion_panel_title, { class: "text-h6" }, {
                    actions: withCtx(({ expanded }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, {
                          color: !expanded ? "teal" : "",
                          icon: expanded ? "mdi-pencil" : "mdi-check"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_icon, {
                            color: !expanded ? "teal" : "",
                            icon: expanded ? "mdi-pencil" : "mdi-check"
                          }, null, 8, ["color", "icon"])
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Accordion 2 `);
                      } else {
                        return [
                          createTextVNode(" Accordion 2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_expansion_panel_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `);
                      } else {
                        return [
                          createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                      actions: withCtx(({ expanded }) => [
                        createVNode(_component_v_icon, {
                          color: !expanded ? "teal" : "",
                          icon: expanded ? "mdi-pencil" : "mdi-check"
                        }, null, 8, ["color", "icon"])
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Accordion 2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_expansion_panel_text, null, {
                      default: withCtx(() => [
                        createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_divider)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_expansion_panel, { elevation: "10" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_expansion_panel_title, {
                    "disable-icon-rotate": "",
                    class: "text-h6"
                  }, {
                    actions: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, {
                          color: "primary",
                          icon: "mdi-alert-circle"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_icon, {
                            color: "primary",
                            icon: "mdi-alert-circle"
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Accordion 3 `);
                      } else {
                        return [
                          createTextVNode(" Accordion 3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_expansion_panel_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `);
                      } else {
                        return [
                          createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_expansion_panel_title, {
                      "disable-icon-rotate": "",
                      class: "text-h6"
                    }, {
                      actions: withCtx(() => [
                        createVNode(_component_v_icon, {
                          color: "primary",
                          icon: "mdi-alert-circle"
                        })
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Accordion 3 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_expansion_panel_text, null, {
                      default: withCtx(() => [
                        createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_divider)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_expansion_panel, { elevation: "10" }, {
                default: withCtx(() => [
                  createVNode(_component_v_expansion_panel_title, {
                    "expand-icon": "mdi-plus",
                    "collapse-icon": "mdi-minus",
                    class: "text-h6"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Accordion 1 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_expansion_panel_text, null, {
                    default: withCtx(() => [
                      createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_divider)
                ]),
                _: 1
              }),
              createVNode(_component_v_expansion_panel, { elevation: "10" }, {
                default: withCtx(() => [
                  createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                    actions: withCtx(({ expanded }) => [
                      createVNode(_component_v_icon, {
                        color: !expanded ? "teal" : "",
                        icon: expanded ? "mdi-pencil" : "mdi-check"
                      }, null, 8, ["color", "icon"])
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" Accordion 2 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_expansion_panel_text, null, {
                    default: withCtx(() => [
                      createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_divider)
                ]),
                _: 1
              }),
              createVNode(_component_v_expansion_panel, { elevation: "10" }, {
                default: withCtx(() => [
                  createVNode(_component_v_expansion_panel_title, {
                    "disable-icon-rotate": "",
                    class: "text-h6"
                  }, {
                    actions: withCtx(() => [
                      createVNode(_component_v_icon, {
                        color: "primary",
                        icon: "mdi-alert-circle"
                      })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" Accordion 3 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_expansion_panel_text, null, {
                    default: withCtx(() => [
                      createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_divider)
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/expansionpanel/CustomizedIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
  const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
  const _component_v_expansion_panel_title = resolveComponent("v-expansion-panel-title");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_expansion_panel_text = resolveComponent("v-expansion-panel-text");
  const _component_v_divider = resolveComponent("v-divider");
  _push(ssrRenderComponent(_component_v_expansion_panels, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_expansion_panel, { elevation: "10" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_expansion_panel_title, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_row, { "no-gutters": "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            md: "5",
                            class: "d-flex justify-start"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<h6 class="text-h6"${_scopeId5}>General settings</h6>`);
                              } else {
                                return [
                                  createVNode("h6", { class: "text-h6" }, "General settings")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            md: "6",
                            class: "d-flex justify-start mt-md-0 mt-3"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<h6 class="text-subtitle-1"${_scopeId5}>i am an accordion</h6>`);
                              } else {
                                return [
                                  createVNode("h6", { class: "text-subtitle-1" }, "i am an accordion")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "5",
                              class: "d-flex justify-start"
                            }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6" }, "General settings")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6",
                              class: "d-flex justify-start mt-md-0 mt-3"
                            }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-subtitle-1" }, "i am an accordion")
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
                      createVNode(_component_v_row, { "no-gutters": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "5",
                            class: "d-flex justify-start"
                          }, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-h6" }, "General settings")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6",
                            class: "d-flex justify-start mt-md-0 mt-3"
                          }, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-subtitle-1" }, "i am an accordion")
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
              _push3(ssrRenderComponent(_component_v_expansion_panel_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam. `);
                  } else {
                    return [
                      createTextVNode(" Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam. ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_expansion_panel_title, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_row, { "no-gutters": "" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "5",
                          class: "d-flex justify-start"
                        }, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-h6" }, "General settings")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6",
                          class: "d-flex justify-start mt-md-0 mt-3"
                        }, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-subtitle-1" }, "i am an accordion")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_expansion_panel_text, null, {
                  default: withCtx(() => [
                    createTextVNode(" Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam. ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_divider)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_expansion_panel, { elevation: "10" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_expansion_panel_title, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_row, { "no-gutters": "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            md: "5",
                            class: "d-flex justify-start"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<h6 class="text-h6"${_scopeId5}>Users</h6>`);
                              } else {
                                return [
                                  createVNode("h6", { class: "text-h6" }, "Users")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            md: "6",
                            class: "d-flex justify-start mt-md-0 mt-3"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<h6 class="text-subtitle-1"${_scopeId5}>You are currently not an owner</h6>`);
                              } else {
                                return [
                                  createVNode("h6", { class: "text-subtitle-1" }, "You are currently not an owner")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "5",
                              class: "d-flex justify-start"
                            }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6" }, "Users")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6",
                              class: "d-flex justify-start mt-md-0 mt-3"
                            }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-subtitle-1" }, "You are currently not an owner")
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
                      createVNode(_component_v_row, { "no-gutters": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "5",
                            class: "d-flex justify-start"
                          }, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-h6" }, "Users")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6",
                            class: "d-flex justify-start mt-md-0 mt-3"
                          }, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-subtitle-1" }, "You are currently not an owner")
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
              _push3(ssrRenderComponent(_component_v_expansion_panel_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam. `);
                  } else {
                    return [
                      createTextVNode(" Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam. ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_expansion_panel_title, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_row, { "no-gutters": "" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "5",
                          class: "d-flex justify-start"
                        }, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-h6" }, "Users")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6",
                          class: "d-flex justify-start mt-md-0 mt-3"
                        }, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-subtitle-1" }, "You are currently not an owner")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_expansion_panel_text, null, {
                  default: withCtx(() => [
                    createTextVNode(" Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam. ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_divider)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_expansion_panel, { elevation: "10" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_expansion_panel_title, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_row, { "no-gutters": "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            md: "5",
                            class: "d-flex justify-start"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<h6 class="text-h6"${_scopeId5}>Advance Settings</h6>`);
                              } else {
                                return [
                                  createVNode("h6", { class: "text-h6" }, "Advance Settings")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            md: "6",
                            class: "d-flex justify-start mt-md-0 mt-3"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<h6 class="text-subtitle-1"${_scopeId5}> Filtering has been entirely disabled for whole web server </h6>`);
                              } else {
                                return [
                                  createVNode("h6", { class: "text-subtitle-1" }, " Filtering has been entirely disabled for whole web server ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "5",
                              class: "d-flex justify-start"
                            }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6" }, "Advance Settings")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6",
                              class: "d-flex justify-start mt-md-0 mt-3"
                            }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-subtitle-1" }, " Filtering has been entirely disabled for whole web server ")
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
                      createVNode(_component_v_row, { "no-gutters": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "5",
                            class: "d-flex justify-start"
                          }, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-h6" }, "Advance Settings")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6",
                            class: "d-flex justify-start mt-md-0 mt-3"
                          }, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-subtitle-1" }, " Filtering has been entirely disabled for whole web server ")
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
              _push3(ssrRenderComponent(_component_v_expansion_panel_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam. `);
                  } else {
                    return [
                      createTextVNode(" Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam. ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_expansion_panel_title, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_row, { "no-gutters": "" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "5",
                          class: "d-flex justify-start"
                        }, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-h6" }, "Advance Settings")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6",
                          class: "d-flex justify-start mt-md-0 mt-3"
                        }, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-subtitle-1" }, " Filtering has been entirely disabled for whole web server ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_expansion_panel_text, null, {
                  default: withCtx(() => [
                    createTextVNode(" Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam. ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_divider)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_expansion_panel, { elevation: "10" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_expansion_panel_title, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_row, { "no-gutters": "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_col, {
                            cols: "10",
                            class: "d-flex justify-start mt-md-0 mt-3"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<h6 class="text-h6"${_scopeId5}>Personal data</h6>`);
                              } else {
                                return [
                                  createVNode("h6", { class: "text-h6" }, "Personal data")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_col, {
                              cols: "10",
                              class: "d-flex justify-start mt-md-0 mt-3"
                            }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6" }, "Personal data")
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
                      createVNode(_component_v_row, { "no-gutters": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "10",
                            class: "d-flex justify-start mt-md-0 mt-3"
                          }, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-h6" }, "Personal data")
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
              _push3(ssrRenderComponent(_component_v_expansion_panel_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam. `);
                  } else {
                    return [
                      createTextVNode(" Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam. ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_expansion_panel_title, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_row, { "no-gutters": "" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "10",
                          class: "d-flex justify-start mt-md-0 mt-3"
                        }, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-h6" }, "Personal data")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_expansion_panel_text, null, {
                  default: withCtx(() => [
                    createTextVNode(" Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam. ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_divider)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_expansion_panel, { elevation: "10" }, {
            default: withCtx(() => [
              createVNode(_component_v_expansion_panel_title, null, {
                default: withCtx(() => [
                  createVNode(_component_v_row, { "no-gutters": "" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "5",
                        class: "d-flex justify-start"
                      }, {
                        default: withCtx(() => [
                          createVNode("h6", { class: "text-h6" }, "General settings")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6",
                        class: "d-flex justify-start mt-md-0 mt-3"
                      }, {
                        default: withCtx(() => [
                          createVNode("h6", { class: "text-subtitle-1" }, "i am an accordion")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_expansion_panel_text, null, {
                default: withCtx(() => [
                  createTextVNode(" Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam. ")
                ]),
                _: 1
              }),
              createVNode(_component_v_divider)
            ]),
            _: 1
          }),
          createVNode(_component_v_expansion_panel, { elevation: "10" }, {
            default: withCtx(() => [
              createVNode(_component_v_expansion_panel_title, null, {
                default: withCtx(() => [
                  createVNode(_component_v_row, { "no-gutters": "" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "5",
                        class: "d-flex justify-start"
                      }, {
                        default: withCtx(() => [
                          createVNode("h6", { class: "text-h6" }, "Users")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6",
                        class: "d-flex justify-start mt-md-0 mt-3"
                      }, {
                        default: withCtx(() => [
                          createVNode("h6", { class: "text-subtitle-1" }, "You are currently not an owner")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_expansion_panel_text, null, {
                default: withCtx(() => [
                  createTextVNode(" Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam. ")
                ]),
                _: 1
              }),
              createVNode(_component_v_divider)
            ]),
            _: 1
          }),
          createVNode(_component_v_expansion_panel, { elevation: "10" }, {
            default: withCtx(() => [
              createVNode(_component_v_expansion_panel_title, null, {
                default: withCtx(() => [
                  createVNode(_component_v_row, { "no-gutters": "" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "5",
                        class: "d-flex justify-start"
                      }, {
                        default: withCtx(() => [
                          createVNode("h6", { class: "text-h6" }, "Advance Settings")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6",
                        class: "d-flex justify-start mt-md-0 mt-3"
                      }, {
                        default: withCtx(() => [
                          createVNode("h6", { class: "text-subtitle-1" }, " Filtering has been entirely disabled for whole web server ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_expansion_panel_text, null, {
                default: withCtx(() => [
                  createTextVNode(" Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam. ")
                ]),
                _: 1
              }),
              createVNode(_component_v_divider)
            ]),
            _: 1
          }),
          createVNode(_component_v_expansion_panel, { elevation: "10" }, {
            default: withCtx(() => [
              createVNode(_component_v_expansion_panel_title, null, {
                default: withCtx(() => [
                  createVNode(_component_v_row, { "no-gutters": "" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "10",
                        class: "d-flex justify-start mt-md-0 mt-3"
                      }, {
                        default: withCtx(() => [
                          createVNode("h6", { class: "text-h6" }, "Personal data")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_expansion_panel_text, null, {
                default: withCtx(() => [
                  createTextVNode(" Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam. ")
                ]),
                _: 1
              }),
              createVNode(_component_v_divider)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/expansionpanel/Advance.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Advance = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Accordion",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Accordian" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Accordian",
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
                  _push3(ssrRenderComponent(_sfc_main$8, { title: "Accordian" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$9, { title: "Basic" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(Basic, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(Basic)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$9, { title: "Basic" }, {
                                        default: withCtx(() => [
                                          createVNode(Basic)
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
                                lg: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$9, { title: "Default Expand" }, {
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
                                      createVNode(_sfc_main$9, { title: "Default Expand" }, {
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
                                lg: "12"
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
                                lg: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$9, { title: "Popout" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(Popout, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(Popout)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$9, { title: "Popout" }, {
                                        default: withCtx(() => [
                                          createVNode(Popout)
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
                                lg: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$9, { title: "Advance" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(Advance, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(Advance)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$9, { title: "Advance" }, {
                                        default: withCtx(() => [
                                          createVNode(Advance)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$9, { title: "Customized Icon" }, {
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
                                      createVNode(_sfc_main$9, { title: "Customized Icon" }, {
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
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$9, { title: "Basic" }, {
                                      default: withCtx(() => [
                                        createVNode(Basic)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$9, { title: "Default Expand" }, {
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
                                  lg: "12"
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
                                  lg: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$9, { title: "Popout" }, {
                                      default: withCtx(() => [
                                        createVNode(Popout)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$9, { title: "Advance" }, {
                                      default: withCtx(() => [
                                        createVNode(Advance)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$9, { title: "Customized Icon" }, {
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
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$9, { title: "Basic" }, {
                                    default: withCtx(() => [
                                      createVNode(Basic)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                lg: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$9, { title: "Default Expand" }, {
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
                                lg: "12"
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
                                lg: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$9, { title: "Popout" }, {
                                    default: withCtx(() => [
                                      createVNode(Popout)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                lg: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$9, { title: "Advance" }, {
                                    default: withCtx(() => [
                                      createVNode(Advance)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$9, { title: "Customized Icon" }, {
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
                    createVNode(_sfc_main$8, { title: "Accordian" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$9, { title: "Basic" }, {
                                  default: withCtx(() => [
                                    createVNode(Basic)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$9, { title: "Default Expand" }, {
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
                              lg: "12"
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
                              lg: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$9, { title: "Popout" }, {
                                  default: withCtx(() => [
                                    createVNode(Popout)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$9, { title: "Advance" }, {
                                  default: withCtx(() => [
                                    createVNode(Advance)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$9, { title: "Customized Icon" }, {
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
                  createVNode(_sfc_main$8, { title: "Accordian" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$9, { title: "Basic" }, {
                                default: withCtx(() => [
                                  createVNode(Basic)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$9, { title: "Default Expand" }, {
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
                            lg: "12"
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
                            lg: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$9, { title: "Popout" }, {
                                default: withCtx(() => [
                                  createVNode(Popout)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$9, { title: "Advance" }, {
                                default: withCtx(() => [
                                  createVNode(Advance)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$9, { title: "Customized Icon" }, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ui-components/Accordion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Accordion-DkJ7JB68.mjs.map
