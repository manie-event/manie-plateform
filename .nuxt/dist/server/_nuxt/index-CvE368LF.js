import { defineComponent, resolveComponent, mergeProps, useSSRContext, ref, withCtx, createVNode } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$6 } from "./BaseBreadcrumb-DAIjkUfv.js";
import { _ as _sfc_main$7 } from "./UiParentCard-DhlYzLUl.js";
import { _ as _sfc_main$8 } from "./UiChildCard-Xt7dDOL6.js";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Basic",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        id: 1,
        title: "Applications :",
        children: [
          { id: 2, title: "Calendar : app" },
          { id: 3, title: "Chrome : app" },
          { id: 4, title: "Webstorm : app" }
        ]
      },
      {
        id: 5,
        title: "Documents :",
        children: [
          {
            id: 6,
            title: "vuetify :",
            children: [
              {
                id: 7,
                title: "src :",
                children: [
                  { id: 8, title: "index : ts" },
                  { id: 9, title: "bootstrap : ts" }
                ]
              }
            ]
          },
          {
            id: 10,
            title: "material2 :",
            children: [
              {
                id: 11,
                title: "src :",
                children: [
                  { id: 12, title: "v-btn : ts" },
                  { id: 13, title: "v-card : ts" },
                  { id: 14, title: "v-window : ts" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        title: "Downloads :",
        children: [
          { id: 16, title: "October : pdf" },
          { id: 17, title: "November : pdf" },
          { id: 18, title: "Tutorial : html" }
        ]
      },
      {
        id: 19,
        title: "Videos :",
        children: [
          {
            id: 20,
            title: "Tutorials :",
            children: [
              { id: 21, title: "Basic layouts : mp4" },
              { id: 22, title: "Advanced techniques : mp4" },
              { id: 23, title: "All about app : dir" }
            ]
          },
          { id: 24, title: "Intro : mov" },
          { id: 25, title: "Conference introduction : avi" }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_treeview = resolveComponent("v-treeview");
      _push(ssrRenderComponent(_component_v_treeview, mergeProps({ items }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/treeview/Basic.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Activatable",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        id: 1,
        title: "Applications :",
        children: [
          { id: 2, title: "Calendar : app" },
          { id: 3, title: "Chrome : app" },
          { id: 4, title: "Webstorm : app" }
        ]
      },
      {
        id: 5,
        title: "Documents :",
        children: [
          {
            id: 6,
            title: "vuetify :",
            children: [
              {
                id: 7,
                title: "src :",
                children: [
                  { id: 8, title: "index : ts" },
                  { id: 9, title: "bootstrap : ts" }
                ]
              }
            ]
          },
          {
            id: 10,
            title: "material2 :",
            children: [
              {
                id: 11,
                title: "src :",
                children: [
                  { id: 12, title: "v-btn : ts" },
                  { id: 13, title: "v-card : ts" },
                  { id: 14, title: "v-window : ts" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        title: "Downloads :",
        children: [
          { id: 16, title: "October : pdf" },
          { id: 17, title: "November : pdf" },
          { id: 18, title: "Tutorial : html" }
        ]
      },
      {
        id: 19,
        title: "Videos :",
        children: [
          {
            id: 20,
            title: "Tutorials :",
            children: [
              { id: 21, title: "Basic layouts : mp4" },
              { id: 22, title: "Advanced techniques : mp4" },
              { id: 23, title: "All about app : dir" }
            ]
          },
          { id: 24, title: "Intro : mov" },
          { id: 25, title: "Conference introduction : avi" }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_treeview = resolveComponent("v-treeview");
      _push(ssrRenderComponent(_component_v_treeview, mergeProps({
        items,
        activatable: ""
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/treeview/Activatable.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Colors",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        id: 1,
        title: "Applications :",
        children: [
          { id: 2, title: "Calendar : app" },
          { id: 3, title: "Chrome : app" },
          { id: 4, title: "Webstorm : app" }
        ]
      },
      {
        id: 5,
        title: "Documents :",
        children: [
          {
            id: 6,
            title: "vuetify :",
            children: [
              {
                id: 7,
                title: "src :",
                children: [
                  { id: 8, title: "index : ts" },
                  { id: 9, title: "bootstrap : ts" }
                ]
              }
            ]
          },
          {
            id: 10,
            title: "material2 :",
            children: [
              {
                id: 11,
                title: "src :",
                children: [
                  { id: 12, title: "v-btn : ts" },
                  { id: 13, title: "v-card : ts" },
                  { id: 14, title: "v-window : ts" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        title: "Downloads :",
        children: [
          { id: 16, title: "October : pdf" },
          { id: 17, title: "November : pdf" },
          { id: 18, title: "Tutorial : html" }
        ]
      },
      {
        id: 19,
        title: "Videos :",
        children: [
          {
            id: 20,
            title: "Tutorials :",
            children: [
              { id: 21, title: "Basic layouts : mp4" },
              { id: 22, title: "Advanced techniques : mp4" },
              { id: 23, title: "All about app : dir" }
            ]
          },
          { id: 24, title: "Intro : mov" },
          { id: 25, title: "Conference introduction : avi" }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_treeview = resolveComponent("v-treeview");
      _push(ssrRenderComponent(_component_v_treeview, mergeProps({
        items,
        color: "primary",
        activatable: ""
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/treeview/Colors.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DenseMode",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        id: 1,
        title: "Applications :",
        children: [
          { id: 2, title: "Calendar : app" },
          { id: 3, title: "Chrome : app" },
          { id: 4, title: "Webstorm : app" }
        ]
      },
      {
        id: 5,
        title: "Documents :",
        children: [
          {
            id: 6,
            title: "vuetify :",
            children: [
              {
                id: 7,
                title: "src :",
                children: [
                  { id: 8, title: "index : ts" },
                  { id: 9, title: "bootstrap : ts" }
                ]
              }
            ]
          },
          {
            id: 10,
            title: "material2 :",
            children: [
              {
                id: 11,
                title: "src :",
                children: [
                  { id: 12, title: "v-btn : ts" },
                  { id: 13, title: "v-card : ts" },
                  { id: 14, title: "v-window : ts" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        title: "Downloads :",
        children: [
          { id: 16, title: "October : pdf" },
          { id: 17, title: "November : pdf" },
          { id: 18, title: "Tutorial : html" }
        ]
      },
      {
        id: 19,
        title: "Videos :",
        children: [
          {
            id: 20,
            title: "Tutorials :",
            children: [
              { id: 21, title: "Basic layouts : mp4" },
              { id: 22, title: "Advanced techniques : mp4" },
              { id: 23, title: "All about app : dir" }
            ]
          },
          { id: 24, title: "Intro : mov" },
          { id: 25, title: "Conference introduction : avi" }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_treeview = resolveComponent("v-treeview");
      _push(ssrRenderComponent(_component_v_treeview, mergeProps({
        items,
        density: "compact"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/treeview/DenseMode.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OpenAll",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        id: 1,
        title: "Applications :",
        children: [
          { id: 2, title: "Calendar : app" },
          { id: 3, title: "Chrome : app" },
          { id: 4, title: "Webstorm : app" }
        ]
      },
      {
        id: 5,
        title: "Documents :",
        children: [
          {
            id: 6,
            title: "vuetify :",
            children: [
              {
                id: 7,
                title: "src :",
                children: [
                  { id: 8, title: "index : ts" },
                  { id: 9, title: "bootstrap : ts" }
                ]
              }
            ]
          },
          {
            id: 10,
            title: "material2 :",
            children: [
              {
                id: 11,
                title: "src :",
                children: [
                  { id: 12, title: "v-btn : ts" },
                  { id: 13, title: "v-card : ts" },
                  { id: 14, title: "v-window : ts" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        title: "Downloads :",
        children: [
          { id: 16, title: "October : pdf" },
          { id: 17, title: "November : pdf" },
          { id: 18, title: "Tutorial : html" }
        ]
      },
      {
        id: 19,
        title: "Videos :",
        children: [
          {
            id: 20,
            title: "Tutorials :",
            children: [
              { id: 21, title: "Basic layouts : mp4" },
              { id: 22, title: "Advanced techniques : mp4" },
              { id: 23, title: "All about app : dir" }
            ]
          },
          { id: 24, title: "Intro : mov" },
          { id: 25, title: "Conference introduction : avi" }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_treeview = resolveComponent("v-treeview");
      _push(ssrRenderComponent(_component_v_treeview, mergeProps({
        items,
        "item-value": "id",
        "open-all": ""
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/treeview/OpenAll.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Treeview" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "#"
      },
      {
        text: "Treeview",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$6, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$7, { title: "Treeview" }, {
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
                                    _push6(ssrRenderComponent(_sfc_main$8, { title: "Basic" }, {
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
                                      createVNode(_sfc_main$8, { title: "Basic" }, {
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
                                    _push6(ssrRenderComponent(_sfc_main$8, { title: "Activatable" }, {
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
                                      createVNode(_sfc_main$8, { title: "Activatable" }, {
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
                                    _push6(ssrRenderComponent(_sfc_main$8, { title: "Color" }, {
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
                                      createVNode(_sfc_main$8, { title: "Color" }, {
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
                                lg: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$8, { title: "Density" }, {
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
                                      createVNode(_sfc_main$8, { title: "Density" }, {
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
                                lg: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$8, { title: "Open all" }, {
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
                                      createVNode(_sfc_main$8, { title: "Open all" }, {
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
                                  lg: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$8, { title: "Basic" }, {
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
                                    createVNode(_sfc_main$8, { title: "Activatable" }, {
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
                                    createVNode(_sfc_main$8, { title: "Color" }, {
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
                                  lg: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$8, { title: "Density" }, {
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
                                  lg: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$8, { title: "Open all" }, {
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
                                lg: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$8, { title: "Basic" }, {
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
                                  createVNode(_sfc_main$8, { title: "Activatable" }, {
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
                                  createVNode(_sfc_main$8, { title: "Color" }, {
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
                                lg: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$8, { title: "Density" }, {
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
                                lg: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$8, { title: "Open all" }, {
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
                    createVNode(_sfc_main$7, { title: "Treeview" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$8, { title: "Basic" }, {
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
                                createVNode(_sfc_main$8, { title: "Activatable" }, {
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
                                createVNode(_sfc_main$8, { title: "Color" }, {
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
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$8, { title: "Density" }, {
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
                              lg: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$8, { title: "Open all" }, {
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
                  createVNode(_sfc_main$7, { title: "Treeview" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$8, { title: "Basic" }, {
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
                              createVNode(_sfc_main$8, { title: "Activatable" }, {
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
                              createVNode(_sfc_main$8, { title: "Color" }, {
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
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$8, { title: "Density" }, {
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
                            lg: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$8, { title: "Open all" }, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/theme-pages/treeview/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CvE368LF.js.map
