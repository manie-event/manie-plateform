import { ref, resolveComponent, withCtx, createVNode, defineComponent, mergeProps, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$4 } from './BaseBreadcrumb-DAIjkUfv.mjs';
import { _ as _sfc_main$5 } from './UiParentCard-DhlYzLUl.mjs';
import { _ as _export_sfc } from './server.mjs';
import { UserIcon, HeartIcon, MoodSmileIcon } from 'vue-tabler-icons';
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

const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_tooltip = resolveComponent("v-tooltip");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-sm-row gap-3 justify-center" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_btn, {
    color: "primary",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Start `);
        _push2(ssrRenderComponent(_component_v_tooltip, {
          activator: "parent",
          location: "start"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Tooltip`);
            } else {
              return [
                createTextVNode("Tooltip")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createTextVNode(" Start "),
          createVNode(_component_v_tooltip, {
            activator: "parent",
            location: "start"
          }, {
            default: withCtx(() => [
              createTextVNode("Tooltip")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    color: "primary",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` End `);
        _push2(ssrRenderComponent(_component_v_tooltip, {
          activator: "parent",
          location: "end"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Tooltip`);
            } else {
              return [
                createTextVNode("Tooltip")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createTextVNode(" End "),
          createVNode(_component_v_tooltip, {
            activator: "parent",
            location: "end"
          }, {
            default: withCtx(() => [
              createTextVNode("Tooltip")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    color: "primary",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Top `);
        _push2(ssrRenderComponent(_component_v_tooltip, {
          activator: "parent",
          location: "top"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Tooltip`);
            } else {
              return [
                createTextVNode("Tooltip")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createTextVNode(" Top "),
          createVNode(_component_v_tooltip, {
            activator: "parent",
            location: "top"
          }, {
            default: withCtx(() => [
              createTextVNode("Tooltip")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    color: "primary",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Bottom `);
        _push2(ssrRenderComponent(_component_v_tooltip, {
          activator: "parent",
          location: "bottom"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Tooltip`);
            } else {
              return [
                createTextVNode("Tooltip")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createTextVNode(" Bottom "),
          createVNode(_component_v_tooltip, {
            activator: "parent",
            location: "bottom"
          }, {
            default: withCtx(() => [
              createTextVNode("Tooltip")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/tooltip/SimpleTooltip.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SimpleTooltip = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "IconTooltip",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex gap-3 justify-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_avatar, { size: "35" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, {
              class: "rounded-circle",
              color: "primary",
              flat: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(UserIcon), { size: "22" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tooltip, {
                    activator: "parent",
                    location: "start"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` primary `);
                      } else {
                        return [
                          createTextVNode(" primary ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(UserIcon), { size: "22" }),
                    createVNode(_component_v_tooltip, {
                      activator: "parent",
                      location: "start"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" primary ")
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
              createVNode(_component_v_btn, {
                class: "rounded-circle",
                color: "primary",
                flat: ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(UserIcon), { size: "22" }),
                  createVNode(_component_v_tooltip, {
                    activator: "parent",
                    location: "start"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" primary ")
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
      _push(ssrRenderComponent(_component_v_avatar, { size: "35" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, {
              class: "rounded-circle",
              color: "secondary",
              flat: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(HeartIcon), {
                    color: "white",
                    size: "22"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tooltip, {
                    activator: "parent",
                    location: "top"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` secondary `);
                      } else {
                        return [
                          createTextVNode(" secondary ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(HeartIcon), {
                      color: "white",
                      size: "22"
                    }),
                    createVNode(_component_v_tooltip, {
                      activator: "parent",
                      location: "top"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" secondary ")
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
              createVNode(_component_v_btn, {
                class: "rounded-circle",
                color: "secondary",
                flat: ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(HeartIcon), {
                    color: "white",
                    size: "22"
                  }),
                  createVNode(_component_v_tooltip, {
                    activator: "parent",
                    location: "top"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" secondary ")
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
      _push(ssrRenderComponent(_component_v_avatar, { size: "35" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, {
              class: "rounded-circle",
              color: "warning",
              flat: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(MoodSmileIcon), {
                    size: "22",
                    color: "white"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tooltip, {
                    activator: "parent",
                    location: "end"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` warning `);
                      } else {
                        return [
                          createTextVNode(" warning ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(MoodSmileIcon), {
                      size: "22",
                      color: "white"
                    }),
                    createVNode(_component_v_tooltip, {
                      activator: "parent",
                      location: "end"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" warning ")
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
              createVNode(_component_v_btn, {
                class: "rounded-circle",
                color: "warning",
                flat: ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(MoodSmileIcon), {
                    size: "22",
                    color: "white"
                  }),
                  createVNode(_component_v_tooltip, {
                    activator: "parent",
                    location: "end"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" warning ")
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
      _push(ssrRenderComponent(_component_v_avatar, { size: "35" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, {
              class: "rounded-circle",
              color: "error",
              flat: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(HeartIcon), { size: "22" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tooltip, {
                    activator: "parent",
                    location: "bottom"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` error `);
                      } else {
                        return [
                          createTextVNode(" error ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(HeartIcon), { size: "22" }),
                    createVNode(_component_v_tooltip, {
                      activator: "parent",
                      location: "bottom"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" error ")
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
              createVNode(_component_v_btn, {
                class: "rounded-circle",
                color: "error",
                flat: ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(HeartIcon), { size: "22" }),
                  createVNode(_component_v_tooltip, {
                    activator: "parent",
                    location: "bottom"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" error ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/tooltip/IconTooltip.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ToggleTolltip",
  __ssrInlineRender: true,
  setup(__props) {
    const show = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_btn, {
        onClick: ($event) => show.value = !show.value,
        color: "primary",
        class: "px-4 rounded-pill"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(!show.value ? "Show Tooltip" : "Hide Tooltip")}`);
          } else {
            return [
              createTextVNode(toDisplayString(!show.value ? "Show Tooltip" : "Hide Tooltip"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_tooltip, {
        modelValue: show.value,
        "onUpdate:modelValue": ($event) => show.value = $event,
        top: ""
      }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, mergeProps({ icon: "" }, props, {
              class: "ml-6",
              color: "primary",
              flat: ""
            }), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_icon, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` mdi-cart `);
                      } else {
                        return [
                          createTextVNode(" mdi-cart ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_icon, null, {
                      default: withCtx(() => [
                        createTextVNode(" mdi-cart ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, mergeProps({ icon: "" }, props, {
                class: "ml-6",
                color: "primary",
                flat: ""
              }), {
                default: withCtx(() => [
                  createVNode(_component_v_icon, null, {
                    default: withCtx(() => [
                      createTextVNode(" mdi-cart ")
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Programmatic tooltip</span>`);
          } else {
            return [
              createVNode("span", null, "Programmatic tooltip")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/tooltip/ToggleTolltip.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Tooltip",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Tooltip" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Tooltip",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$4, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$5, { title: "Simple" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(SimpleTooltip, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(SimpleTooltip)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$5, { title: "Simple" }, {
                      default: withCtx(() => [
                        createVNode(SimpleTooltip)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$5, { title: "Icon" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$2, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$2)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$5, { title: "Icon" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$2)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$5, { title: "Toggle Tolltip" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$1, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$5, { title: "Toggle Tolltip" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1)
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
              createVNode(_component_v_col, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5, { title: "Simple" }, {
                    default: withCtx(() => [
                      createVNode(SimpleTooltip)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5, { title: "Icon" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$2)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5, { title: "Toggle Tolltip" }, {
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
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ui-components/Tooltip.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Tooltip-BVJ7Btin.mjs.map
