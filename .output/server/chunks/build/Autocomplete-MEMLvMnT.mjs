import { defineComponent, ref, resolveComponent, withCtx, createVNode, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$4 } from './BaseBreadcrumb-DAIjkUfv.mjs';
import { _ as _sfc_main$5 } from './UiParentCard-DhlYzLUl.mjs';
import { _ as _sfc_main$6 } from './UiChildCard-Xt7dDOL6.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ComboBox",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(["The Dark Knight"]);
    const items = ref([
      "The Dark Knight",
      "Control with Control",
      "Combo with Solo",
      "The Dark",
      "Fight Club",
      "demo@company.com",
      "Pulp Fiction"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_autocomplete = resolveComponent("v-autocomplete");
      _push(ssrRenderComponent(_component_v_autocomplete, mergeProps({
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        items: items.value,
        color: "primary",
        variant: "outlined",
        "hide-details": ""
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/autocomplete/ComboBox.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "WithCaption",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      "The Dark Knight",
      "Control with Control",
      "Combo with Solo",
      "The Dark",
      "Fight Club",
      "demo@company.com",
      "Pulp Fiction"
    ]);
    ref(["The Dark Knight"]);
    const cap_value = ref(["demo@company.com"]);
    const cap_value2 = ref(["demo@company.com"]);
    ref(["The Dark Knight", "Fight Club"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_autocomplete = resolveComponent("v-autocomplete");
      const _component_MailIcon = resolveComponent("MailIcon");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_autocomplete, {
        modelValue: cap_value.value,
        "onUpdate:modelValue": ($event) => cap_value.value = $event,
        items: items.value,
        color: "primary",
        label: "Email Address",
        variant: "outlined",
        "hide-details": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_autocomplete, {
        modelValue: cap_value2.value,
        "onUpdate:modelValue": ($event) => cap_value2.value = $event,
        items: items.value,
        color: "primary",
        label: "Email Address",
        variant: "outlined",
        "hide-details": "",
        class: "mt-5"
      }, {
        "prepend-inner": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_MailIcon, {
              "stroke-width": "1.5",
              size: "22"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_MailIcon, {
                "stroke-width": "1.5",
                size: "22"
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/autocomplete/WithCaption.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MultipleOptions",
  __ssrInlineRender: true,
  setup(__props) {
    const items2 = ref([
      "The Dark Knight",
      "Control with Control",
      "Combo with Solo",
      "The Dark",
      "Fight Club",
      "demo@company.com",
      "Pulp Fiction"
    ]);
    ref(["The Dark Knight"]);
    const multi_value = ref(["The Dark Knight", "Fight Club"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_autocomplete = resolveComponent("v-autocomplete");
      const _component_v_chip = resolveComponent("v-chip");
      _push(ssrRenderComponent(_component_v_autocomplete, mergeProps({
        modelValue: multi_value.value,
        "onUpdate:modelValue": ($event) => multi_value.value = $event,
        items: items2.value,
        variant: "outlined",
        color: "primary",
        label: "Outlined",
        multiple: "",
        "hide-details": "",
        "closable-chips": ""
      }, _attrs), {
        chip: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_chip, {
              label: "",
              color: "primary",
              size: "large",
              class: "mb-1 text-subtitle-1 font-weight-regular"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_chip, {
                label: "",
                color: "primary",
                size: "large",
                class: "mb-1 text-subtitle-1 font-weight-regular"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/autocomplete/MultipleOptions.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Autocomplete",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Autocomplete" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Autocomplete",
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
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$5, { title: "Autocomplete" }, {
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
                                    _push6(ssrRenderComponent(_sfc_main$6, { title: "Combo Box" }, {
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
                                      createVNode(_sfc_main$6, { title: "Combo Box" }, {
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
                                    _push6(ssrRenderComponent(_sfc_main$6, { title: "With Caption" }, {
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
                                      createVNode(_sfc_main$6, { title: "With Caption" }, {
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
                                lg: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$6, { title: "Combo with Multiple Options" }, {
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
                                      createVNode(_sfc_main$6, { title: "Combo with Multiple Options" }, {
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
                                  lg: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$6, { title: "Combo Box" }, {
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
                                    createVNode(_sfc_main$6, { title: "With Caption" }, {
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
                                  lg: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$6, { title: "Combo with Multiple Options" }, {
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
                                lg: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$6, { title: "Combo Box" }, {
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
                                  createVNode(_sfc_main$6, { title: "With Caption" }, {
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
                                lg: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$6, { title: "Combo with Multiple Options" }, {
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
                    createVNode(_sfc_main$5, { title: "Autocomplete" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$6, { title: "Combo Box" }, {
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
                                createVNode(_sfc_main$6, { title: "With Caption" }, {
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
                              lg: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$6, { title: "Combo with Multiple Options" }, {
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
                  createVNode(_sfc_main$5, { title: "Autocomplete" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$6, { title: "Combo Box" }, {
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
                              createVNode(_sfc_main$6, { title: "With Caption" }, {
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
                            lg: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$6, { title: "Combo with Multiple Options" }, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forms/form-elements/Autocomplete.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Autocomplete-MEMLvMnT.mjs.map
