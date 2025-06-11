import { defineComponent, ref, resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext, mergeProps, unref, toDisplayString, createBlock, openBlock, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$a } from "./BaseBreadcrumb-DAIjkUfv.js";
import { _ as _sfc_main$b } from "./UiParentCard-DhlYzLUl.js";
import { _ as _sfc_main$c } from "./UiChildCard-Xt7dDOL6.js";
import { PhoneIcon, HeartIcon, UserIcon } from "vue-tabler-icons";
import { _ as _export_sfc, S as img1, T as img2, U as img3, V as img4, W as img5, w as img6, x as proimg1, y as proimg2, z as img9, A as img10, s as img11, X as img12, Y as img13, B as proimg4, Z as img15 } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "@vue/devtools-api";
import "destr";
import "klona";
import "vue3-perfect-scrollbar";
import "maska";
import "axios-mock-adapter";
import "axios";
import "chance";
import "date-fns";
import "lodash";
import "vue-draggable-next";
import "vue3-easy-data-table";
import "vue-easy-lightbox";
import "vue-scrollto";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "BasicTabs",
  __ssrInlineRender: true,
  setup(__props) {
    const tab = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_window = resolveComponent("v-window");
      const _component_v_window_item = resolveComponent("v-window-item");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_tabs, {
        modelValue: tab.value,
        "onUpdate:modelValue": ($event) => tab.value = $event,
        "bg-color": "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_tab, { value: "one" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Item One`);
                } else {
                  return [
                    createTextVNode("Item One")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_tab, { value: "two" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Item Two`);
                } else {
                  return [
                    createTextVNode("Item Two")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_tab, { value: "three" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Item Three`);
                } else {
                  return [
                    createTextVNode("Item Three")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_tab, { value: "one" }, {
                default: withCtx(() => [
                  createTextVNode("Item One")
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, { value: "two" }, {
                default: withCtx(() => [
                  createTextVNode("Item Two")
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, { value: "three" }, {
                default: withCtx(() => [
                  createTextVNode("Item Three")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_divider, null, null, _parent));
      _push(ssrRenderComponent(_component_v_card_text, { class: "bg-lightsecondary mt-4 rounded-md" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_window, {
              modelValue: tab.value,
              "onUpdate:modelValue": ($event) => tab.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_window_item, { value: "one" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Item One `);
                      } else {
                        return [
                          createTextVNode(" Item One ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_window_item, { value: "two" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Item Two `);
                      } else {
                        return [
                          createTextVNode(" Item Two ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_window_item, { value: "three" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Item Three `);
                      } else {
                        return [
                          createTextVNode(" Item Three ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_window_item, { value: "one" }, {
                      default: withCtx(() => [
                        createTextVNode(" Item One ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_window_item, { value: "two" }, {
                      default: withCtx(() => [
                        createTextVNode(" Item Two ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_window_item, { value: "three" }, {
                      default: withCtx(() => [
                        createTextVNode(" Item Three ")
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
              createVNode(_component_v_window, {
                modelValue: tab.value,
                "onUpdate:modelValue": ($event) => tab.value = $event
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_window_item, { value: "one" }, {
                    default: withCtx(() => [
                      createTextVNode(" Item One ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_window_item, { value: "two" }, {
                    default: withCtx(() => [
                      createTextVNode(" Item Two ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_window_item, { value: "three" }, {
                    default: withCtx(() => [
                      createTextVNode(" Item Three ")
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/tabs/BasicTabs.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "CenterTabs",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "0" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_tabs, {
              "bg-color": "primary",
              "center-active": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_tab, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`One`);
                      } else {
                        return [
                          createTextVNode("One")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Two`);
                      } else {
                        return [
                          createTextVNode("Two")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Three`);
                      } else {
                        return [
                          createTextVNode("Three")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Four`);
                      } else {
                        return [
                          createTextVNode("Four")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Five`);
                      } else {
                        return [
                          createTextVNode("Five")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Six`);
                      } else {
                        return [
                          createTextVNode("Six")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Seven`);
                      } else {
                        return [
                          createTextVNode("Seven")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Eight`);
                      } else {
                        return [
                          createTextVNode("Eight")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Nine`);
                      } else {
                        return [
                          createTextVNode("Nine")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Ten`);
                      } else {
                        return [
                          createTextVNode("Ten")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Eleven`);
                      } else {
                        return [
                          createTextVNode("Eleven")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Twelve`);
                      } else {
                        return [
                          createTextVNode("Twelve")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Thirteen`);
                      } else {
                        return [
                          createTextVNode("Thirteen")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Fourteen`);
                      } else {
                        return [
                          createTextVNode("Fourteen")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_tab, null, {
                      default: withCtx(() => [
                        createTextVNode("One")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, null, {
                      default: withCtx(() => [
                        createTextVNode("Two")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, null, {
                      default: withCtx(() => [
                        createTextVNode("Three")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, null, {
                      default: withCtx(() => [
                        createTextVNode("Four")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, null, {
                      default: withCtx(() => [
                        createTextVNode("Five")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, null, {
                      default: withCtx(() => [
                        createTextVNode("Six")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, null, {
                      default: withCtx(() => [
                        createTextVNode("Seven")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, null, {
                      default: withCtx(() => [
                        createTextVNode("Eight")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, null, {
                      default: withCtx(() => [
                        createTextVNode("Nine")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, null, {
                      default: withCtx(() => [
                        createTextVNode("Ten")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, null, {
                      default: withCtx(() => [
                        createTextVNode("Eleven")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, null, {
                      default: withCtx(() => [
                        createTextVNode("Twelve")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, null, {
                      default: withCtx(() => [
                        createTextVNode("Thirteen")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, null, {
                      default: withCtx(() => [
                        createTextVNode("Fourteen")
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
              createVNode(_component_v_tabs, {
                "bg-color": "primary",
                "center-active": ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_tab, null, {
                    default: withCtx(() => [
                      createTextVNode("One")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tab, null, {
                    default: withCtx(() => [
                      createTextVNode("Two")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tab, null, {
                    default: withCtx(() => [
                      createTextVNode("Three")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tab, null, {
                    default: withCtx(() => [
                      createTextVNode("Four")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tab, null, {
                    default: withCtx(() => [
                      createTextVNode("Five")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tab, null, {
                    default: withCtx(() => [
                      createTextVNode("Six")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tab, null, {
                    default: withCtx(() => [
                      createTextVNode("Seven")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tab, null, {
                    default: withCtx(() => [
                      createTextVNode("Eight")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tab, null, {
                    default: withCtx(() => [
                      createTextVNode("Nine")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tab, null, {
                    default: withCtx(() => [
                      createTextVNode("Ten")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tab, null, {
                    default: withCtx(() => [
                      createTextVNode("Eleven")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tab, null, {
                    default: withCtx(() => [
                      createTextVNode("Twelve")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tab, null, {
                    default: withCtx(() => [
                      createTextVNode("Thirteen")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tab, null, {
                    default: withCtx(() => [
                      createTextVNode("Fourteen")
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/tabs/CenterTabs.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ColorTabs",
  __ssrInlineRender: true,
  setup(__props) {
    const tab6 = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_window = resolveComponent("v-window");
      const _component_v_window_item = resolveComponent("v-window-item");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_tabs, {
        modelValue: tab6.value,
        "onUpdate:modelValue": ($event) => tab6.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_tab, {
              value: "111111",
              color: "secondary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(PhoneIcon), {
                    "stroke-width": "1.5",
                    width: "20",
                    class: "v-icon--start"
                  }, null, _parent3, _scopeId2));
                  _push3(` Item One `);
                } else {
                  return [
                    createVNode(unref(PhoneIcon), {
                      "stroke-width": "1.5",
                      width: "20",
                      class: "v-icon--start"
                    }),
                    createTextVNode(" Item One ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_tab, {
              value: "222222",
              color: "warning"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(HeartIcon), {
                    "stroke-width": "1.5",
                    width: "20",
                    class: "v-icon--start"
                  }, null, _parent3, _scopeId2));
                  _push3(` Item Two `);
                } else {
                  return [
                    createVNode(unref(HeartIcon), {
                      "stroke-width": "1.5",
                      width: "20",
                      class: "v-icon--start"
                    }),
                    createTextVNode(" Item Two ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_tab, {
              value: "444444",
              color: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(UserIcon), {
                    "stroke-width": "1.5",
                    width: "20",
                    class: "v-icon--start"
                  }, null, _parent3, _scopeId2));
                  _push3(` Item Three `);
                } else {
                  return [
                    createVNode(unref(UserIcon), {
                      "stroke-width": "1.5",
                      width: "20",
                      class: "v-icon--start"
                    }),
                    createTextVNode(" Item Three ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_tab, {
                value: "111111",
                color: "secondary"
              }, {
                default: withCtx(() => [
                  createVNode(unref(PhoneIcon), {
                    "stroke-width": "1.5",
                    width: "20",
                    class: "v-icon--start"
                  }),
                  createTextVNode(" Item One ")
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, {
                value: "222222",
                color: "warning"
              }, {
                default: withCtx(() => [
                  createVNode(unref(HeartIcon), {
                    "stroke-width": "1.5",
                    width: "20",
                    class: "v-icon--start"
                  }),
                  createTextVNode(" Item Two ")
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, {
                value: "444444",
                color: "primary"
              }, {
                default: withCtx(() => [
                  createVNode(unref(UserIcon), {
                    "stroke-width": "1.5",
                    width: "20",
                    class: "v-icon--start"
                  }),
                  createTextVNode(" Item Three ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_card_text, { class: "bg-lightsecondary mt-4 rounded-md" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_window, {
              modelValue: tab6.value,
              "onUpdate:modelValue": ($event) => tab6.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_window_item, { value: "111111" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` item one `);
                      } else {
                        return [
                          createTextVNode(" item one ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_window_item, { value: "222222" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` item two `);
                      } else {
                        return [
                          createTextVNode(" item two ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_window_item, { value: "444444" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` item three `);
                      } else {
                        return [
                          createTextVNode(" item three ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_window_item, { value: "111111" }, {
                      default: withCtx(() => [
                        createTextVNode(" item one ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_window_item, { value: "222222" }, {
                      default: withCtx(() => [
                        createTextVNode(" item two ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_window_item, { value: "444444" }, {
                      default: withCtx(() => [
                        createTextVNode(" item three ")
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
              createVNode(_component_v_window, {
                modelValue: tab6.value,
                "onUpdate:modelValue": ($event) => tab6.value = $event
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_window_item, { value: "111111" }, {
                    default: withCtx(() => [
                      createTextVNode(" item one ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_window_item, { value: "222222" }, {
                    default: withCtx(() => [
                      createTextVNode(" item two ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_window_item, { value: "444444" }, {
                    default: withCtx(() => [
                      createTextVNode(" item three ")
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/tabs/ColorTabs.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DisableTabs",
  __ssrInlineRender: true,
  setup(__props) {
    const tab4 = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_window = resolveComponent("v-window");
      const _component_v_window_item = resolveComponent("v-window-item");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_tabs, {
        modelValue: tab4.value,
        "onUpdate:modelValue": ($event) => tab4.value = $event,
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_tab, { value: "1111" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(PhoneIcon), {
                    "stroke-width": "1.5",
                    width: "20",
                    class: "v-icon--start"
                  }, null, _parent3, _scopeId2));
                  _push3(` Item One `);
                } else {
                  return [
                    createVNode(unref(PhoneIcon), {
                      "stroke-width": "1.5",
                      width: "20",
                      class: "v-icon--start"
                    }),
                    createTextVNode(" Item One ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_tab, {
              value: "2222",
              disabled: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(HeartIcon), {
                    "stroke-width": "1.5",
                    width: "20",
                    class: "v-icon--start"
                  }, null, _parent3, _scopeId2));
                  _push3(` Item Two `);
                } else {
                  return [
                    createVNode(unref(HeartIcon), {
                      "stroke-width": "1.5",
                      width: "20",
                      class: "v-icon--start"
                    }),
                    createTextVNode(" Item Two ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_tab, { value: "4444" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(UserIcon), {
                    "stroke-width": "1.5",
                    width: "20",
                    class: "v-icon--start"
                  }, null, _parent3, _scopeId2));
                  _push3(` Item Three `);
                } else {
                  return [
                    createVNode(unref(UserIcon), {
                      "stroke-width": "1.5",
                      width: "20",
                      class: "v-icon--start"
                    }),
                    createTextVNode(" Item Three ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_tab, { value: "1111" }, {
                default: withCtx(() => [
                  createVNode(unref(PhoneIcon), {
                    "stroke-width": "1.5",
                    width: "20",
                    class: "v-icon--start"
                  }),
                  createTextVNode(" Item One ")
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, {
                value: "2222",
                disabled: ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(HeartIcon), {
                    "stroke-width": "1.5",
                    width: "20",
                    class: "v-icon--start"
                  }),
                  createTextVNode(" Item Two ")
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, { value: "4444" }, {
                default: withCtx(() => [
                  createVNode(unref(UserIcon), {
                    "stroke-width": "1.5",
                    width: "20",
                    class: "v-icon--start"
                  }),
                  createTextVNode(" Item Three ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_divider, null, null, _parent));
      _push(ssrRenderComponent(_component_v_card_text, { class: "bg-lightsecondary mt-4 rounded-md" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_window, {
              modelValue: tab4.value,
              "onUpdate:modelValue": ($event) => tab4.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_window_item, { value: "1111" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` item one `);
                      } else {
                        return [
                          createTextVNode(" item one ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_window_item, { value: "2222" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` item two `);
                      } else {
                        return [
                          createTextVNode(" item two ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_window_item, { value: "4444" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` item three `);
                      } else {
                        return [
                          createTextVNode(" item three ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_window_item, { value: "1111" }, {
                      default: withCtx(() => [
                        createTextVNode(" item one ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_window_item, { value: "2222" }, {
                      default: withCtx(() => [
                        createTextVNode(" item two ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_window_item, { value: "4444" }, {
                      default: withCtx(() => [
                        createTextVNode(" item three ")
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
              createVNode(_component_v_window, {
                modelValue: tab4.value,
                "onUpdate:modelValue": ($event) => tab4.value = $event
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_window_item, { value: "1111" }, {
                    default: withCtx(() => [
                      createTextVNode(" item one ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_window_item, { value: "2222" }, {
                    default: withCtx(() => [
                      createTextVNode(" item two ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_window_item, { value: "4444" }, {
                    default: withCtx(() => [
                      createTextVNode(" item three ")
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/tabs/DisableTabs.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "IconsWithLabelTabs",
  __ssrInlineRender: true,
  setup(__props) {
    const tab = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_window = resolveComponent("v-window");
      const _component_v_window_item = resolveComponent("v-window-item");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "0" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_tabs, {
              modelValue: tab.value,
              "onUpdate:modelValue": ($event) => tab.value = $event,
              "bg-color": "primary",
              centered: "",
              stacked: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_tab, { value: "1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(PhoneIcon), {
                          "stroke-width": "1.5",
                          width: "20"
                        }, null, _parent4, _scopeId3));
                        _push4(` Recents `);
                      } else {
                        return [
                          createVNode(unref(PhoneIcon), {
                            "stroke-width": "1.5",
                            width: "20"
                          }),
                          createTextVNode(" Recents ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, { value: "2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(HeartIcon), {
                          "stroke-width": "1.5",
                          width: "20"
                        }, null, _parent4, _scopeId3));
                        _push4(` Favorites `);
                      } else {
                        return [
                          createVNode(unref(HeartIcon), {
                            "stroke-width": "1.5",
                            width: "20"
                          }),
                          createTextVNode(" Favorites ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, { value: "3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(UserIcon), {
                          "stroke-width": "1.5",
                          width: "20"
                        }, null, _parent4, _scopeId3));
                        _push4(` Nearby `);
                      } else {
                        return [
                          createVNode(unref(UserIcon), {
                            "stroke-width": "1.5",
                            width: "20"
                          }),
                          createTextVNode(" Nearby ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_tab, { value: "1" }, {
                      default: withCtx(() => [
                        createVNode(unref(PhoneIcon), {
                          "stroke-width": "1.5",
                          width: "20"
                        }),
                        createTextVNode(" Recents ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "2" }, {
                      default: withCtx(() => [
                        createVNode(unref(HeartIcon), {
                          "stroke-width": "1.5",
                          width: "20"
                        }),
                        createTextVNode(" Favorites ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "3" }, {
                      default: withCtx(() => [
                        createVNode(unref(UserIcon), {
                          "stroke-width": "1.5",
                          width: "20"
                        }),
                        createTextVNode(" Nearby ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_text, { class: "bg-lightsecondary rounded-md mt-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_window, {
                    modelValue: tab.value,
                    "onUpdate:modelValue": ($event) => tab.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "1" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Item One `);
                            } else {
                              return [
                                createTextVNode(" Item One ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Item two `);
                            } else {
                              return [
                                createTextVNode(" Item two ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "3" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Item three `);
                            } else {
                              return [
                                createTextVNode(" Item three ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_window_item, { value: "1" }, {
                            default: withCtx(() => [
                              createTextVNode(" Item One ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_window_item, { value: "2" }, {
                            default: withCtx(() => [
                              createTextVNode(" Item two ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_window_item, { value: "3" }, {
                            default: withCtx(() => [
                              createTextVNode(" Item three ")
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
                    createVNode(_component_v_window, {
                      modelValue: tab.value,
                      "onUpdate:modelValue": ($event) => tab.value = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_window_item, { value: "1" }, {
                          default: withCtx(() => [
                            createTextVNode(" Item One ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_window_item, { value: "2" }, {
                          default: withCtx(() => [
                            createTextVNode(" Item two ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_window_item, { value: "3" }, {
                          default: withCtx(() => [
                            createTextVNode(" Item three ")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_tabs, {
                modelValue: tab.value,
                "onUpdate:modelValue": ($event) => tab.value = $event,
                "bg-color": "primary",
                centered: "",
                stacked: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_tab, { value: "1" }, {
                    default: withCtx(() => [
                      createVNode(unref(PhoneIcon), {
                        "stroke-width": "1.5",
                        width: "20"
                      }),
                      createTextVNode(" Recents ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tab, { value: "2" }, {
                    default: withCtx(() => [
                      createVNode(unref(HeartIcon), {
                        "stroke-width": "1.5",
                        width: "20"
                      }),
                      createTextVNode(" Favorites ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tab, { value: "3" }, {
                    default: withCtx(() => [
                      createVNode(unref(UserIcon), {
                        "stroke-width": "1.5",
                        width: "20"
                      }),
                      createTextVNode(" Nearby ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_card_text, { class: "bg-lightsecondary rounded-md mt-4" }, {
                default: withCtx(() => [
                  createVNode(_component_v_window, {
                    modelValue: tab.value,
                    "onUpdate:modelValue": ($event) => tab.value = $event
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_window_item, { value: "1" }, {
                        default: withCtx(() => [
                          createTextVNode(" Item One ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_window_item, { value: "2" }, {
                        default: withCtx(() => [
                          createTextVNode(" Item two ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_window_item, { value: "3" }, {
                        default: withCtx(() => [
                          createTextVNode(" Item three ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/tabs/IconsWithLabelTabs.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "IconTabs",
  __ssrInlineRender: true,
  setup(__props) {
    const tab3 = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_window = resolveComponent("v-window");
      const _component_v_window_item = resolveComponent("v-window-item");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_tabs, {
        modelValue: tab3.value,
        "onUpdate:modelValue": ($event) => tab3.value = $event,
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_tab, { value: "111" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(PhoneIcon), {
                    "stroke-width": "1.5",
                    width: "22"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(PhoneIcon), {
                      "stroke-width": "1.5",
                      width: "22"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_tab, { value: "222" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(HeartIcon), {
                    "stroke-width": "1.5",
                    width: "22"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(HeartIcon), {
                      "stroke-width": "1.5",
                      width: "22"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_tab, { value: "444" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(UserIcon), {
                    "stroke-width": "1.5",
                    width: "22"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(UserIcon), {
                      "stroke-width": "1.5",
                      width: "22"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_tab, { value: "111" }, {
                default: withCtx(() => [
                  createVNode(unref(PhoneIcon), {
                    "stroke-width": "1.5",
                    width: "22"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, { value: "222" }, {
                default: withCtx(() => [
                  createVNode(unref(HeartIcon), {
                    "stroke-width": "1.5",
                    width: "22"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, { value: "444" }, {
                default: withCtx(() => [
                  createVNode(unref(UserIcon), {
                    "stroke-width": "1.5",
                    width: "22"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_divider, null, null, _parent));
      _push(ssrRenderComponent(_component_v_card_text, { class: "bg-lightsecondary mt-4 rounded-md" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_window, {
              modelValue: tab3.value,
              "onUpdate:modelValue": ($event) => tab3.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_window_item, { value: "111" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Item One `);
                      } else {
                        return [
                          createTextVNode(" Item One ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_window_item, { value: "222" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Item two `);
                      } else {
                        return [
                          createTextVNode(" Item two ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_window_item, { value: "444" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Item three `);
                      } else {
                        return [
                          createTextVNode(" Item three ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_window_item, { value: "111" }, {
                      default: withCtx(() => [
                        createTextVNode(" Item One ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_window_item, { value: "222" }, {
                      default: withCtx(() => [
                        createTextVNode(" Item two ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_window_item, { value: "444" }, {
                      default: withCtx(() => [
                        createTextVNode(" Item three ")
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
              createVNode(_component_v_window, {
                modelValue: tab3.value,
                "onUpdate:modelValue": ($event) => tab3.value = $event
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_window_item, { value: "111" }, {
                    default: withCtx(() => [
                      createTextVNode(" Item One ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_window_item, { value: "222" }, {
                    default: withCtx(() => [
                      createTextVNode(" Item two ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_window_item, { value: "444" }, {
                    default: withCtx(() => [
                      createTextVNode(" Item three ")
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/tabs/IconTabs.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_sheet = resolveComponent("v-sheet");
  const _component_v_tabs = resolveComponent("v-tabs");
  const _component_v_tab = resolveComponent("v-tab");
  _push(ssrRenderComponent(_component_v_sheet, mergeProps({ elevation: "0" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_tabs, {
          "bg-color": "primary",
          "next-icon": "mdi-arrow-right-bold-box-outline",
          "prev-icon": "mdi-arrow-left-bold-box-outline",
          "show-arrows": ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(30, (i) => {
                _push3(ssrRenderComponent(_component_v_tab, { key: i }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Item ${ssrInterpolate(i)}`);
                    } else {
                      return [
                        createTextVNode(" Item " + toDisplayString(i), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(), createBlock(Fragment, null, renderList(30, (i) => {
                  return createVNode(_component_v_tab, { key: i }, {
                    default: withCtx(() => [
                      createTextVNode(" Item " + toDisplayString(i), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 64))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_tabs, {
            "bg-color": "primary",
            "next-icon": "mdi-arrow-right-bold-box-outline",
            "prev-icon": "mdi-arrow-left-bold-box-outline",
            "show-arrows": ""
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(Fragment, null, renderList(30, (i) => {
                return createVNode(_component_v_tab, { key: i }, {
                  default: withCtx(() => [
                    createTextVNode(" Item " + toDisplayString(i), 1)
                  ]),
                  _: 2
                }, 1024);
              }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/tabs/CustomIcons.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CustomIcons = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AlignCenterTabs",
  __ssrInlineRender: true,
  setup(__props) {
    const tab = ref(null);
    const tab1 = ref([
      { img: img1 },
      { img: img2 },
      { img: img3 },
      { img: img4 },
      { img: img5 },
      { img: img1 }
    ]);
    const tab2 = ref([
      { img: img6 },
      { img: proimg1 },
      { img: proimg2 },
      { img: img9 },
      { img: img10 },
      { img: img11 }
    ]);
    const tab3 = ref([
      { img: img12 },
      { img: img13 },
      { img: proimg4 },
      { img: img10 },
      { img: img15 },
      { img: img11 }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_window = resolveComponent("v-window");
      const _component_v_window_item = resolveComponent("v-window-item");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_img = resolveComponent("v-img");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "0" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_tabs, {
              modelValue: tab.value,
              "onUpdate:modelValue": ($event) => tab.value = $event,
              color: "primary",
              "align-tabs": "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_tab, { value: "1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Landscape`);
                      } else {
                        return [
                          createTextVNode("Landscape")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, { value: "2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Products`);
                      } else {
                        return [
                          createTextVNode("Products")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, { value: "3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Abstract`);
                      } else {
                        return [
                          createTextVNode("Abstract")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_tab, { value: "1" }, {
                      default: withCtx(() => [
                        createTextVNode("Landscape")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "2" }, {
                      default: withCtx(() => [
                        createTextVNode("Products")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "3" }, {
                      default: withCtx(() => [
                        createTextVNode("Abstract")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_text, { class: "rounded-md pa-0 mt-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_window, {
                    modelValue: tab.value,
                    "onUpdate:modelValue": ($event) => tab.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "1" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(tab1.value, (item) => {
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        key: item.img,
                                        cols: "12",
                                        md: "4",
                                        sm: "6"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_img, {
                                              src: item.img,
                                              alt: "tab",
                                              cover: "",
                                              class: "w-100",
                                              height: "250"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_img, {
                                                src: item.img,
                                                alt: "tab",
                                                cover: "",
                                                class: "w-100",
                                                height: "250"
                                              }, null, 8, ["src"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(tab1.value, (item) => {
                                        return openBlock(), createBlock(_component_v_col, {
                                          key: item.img,
                                          cols: "12",
                                          md: "4",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, {
                                              src: item.img,
                                              alt: "tab",
                                              cover: "",
                                              class: "w-100",
                                              height: "250"
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(tab1.value, (item) => {
                                      return openBlock(), createBlock(_component_v_col, {
                                        key: item.img,
                                        cols: "12",
                                        md: "4",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, {
                                            src: item.img,
                                            alt: "tab",
                                            cover: "",
                                            class: "w-100",
                                            height: "250"
                                          }, null, 8, ["src"])
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(tab2.value, (item) => {
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        key: item.img,
                                        cols: "12",
                                        md: "4",
                                        sm: "6"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_img, {
                                              src: item.img,
                                              alt: "tab",
                                              cover: "",
                                              class: "w-100",
                                              height: "250"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_img, {
                                                src: item.img,
                                                alt: "tab",
                                                cover: "",
                                                class: "w-100",
                                                height: "250"
                                              }, null, 8, ["src"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(tab2.value, (item) => {
                                        return openBlock(), createBlock(_component_v_col, {
                                          key: item.img,
                                          cols: "12",
                                          md: "4",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, {
                                              src: item.img,
                                              alt: "tab",
                                              cover: "",
                                              class: "w-100",
                                              height: "250"
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(tab2.value, (item) => {
                                      return openBlock(), createBlock(_component_v_col, {
                                        key: item.img,
                                        cols: "12",
                                        md: "4",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, {
                                            src: item.img,
                                            alt: "tab",
                                            cover: "",
                                            class: "w-100",
                                            height: "250"
                                          }, null, 8, ["src"])
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "3" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(tab3.value, (item) => {
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        key: item.img,
                                        cols: "12",
                                        md: "4",
                                        sm: "6"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_img, {
                                              src: item.img,
                                              alt: "tab",
                                              cover: "",
                                              class: "w-100",
                                              height: "250"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_img, {
                                                src: item.img,
                                                alt: "tab",
                                                cover: "",
                                                class: "w-100",
                                                height: "250"
                                              }, null, 8, ["src"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(tab3.value, (item) => {
                                        return openBlock(), createBlock(_component_v_col, {
                                          key: item.img,
                                          cols: "12",
                                          md: "4",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, {
                                              src: item.img,
                                              alt: "tab",
                                              cover: "",
                                              class: "w-100",
                                              height: "250"
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(tab3.value, (item) => {
                                      return openBlock(), createBlock(_component_v_col, {
                                        key: item.img,
                                        cols: "12",
                                        md: "4",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, {
                                            src: item.img,
                                            alt: "tab",
                                            cover: "",
                                            class: "w-100",
                                            height: "250"
                                          }, null, 8, ["src"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_window_item, { value: "1" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(tab1.value, (item) => {
                                    return openBlock(), createBlock(_component_v_col, {
                                      key: item.img,
                                      cols: "12",
                                      md: "4",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, {
                                          src: item.img,
                                          alt: "tab",
                                          cover: "",
                                          class: "w-100",
                                          height: "250"
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_window_item, { value: "2" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(tab2.value, (item) => {
                                    return openBlock(), createBlock(_component_v_col, {
                                      key: item.img,
                                      cols: "12",
                                      md: "4",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, {
                                          src: item.img,
                                          alt: "tab",
                                          cover: "",
                                          class: "w-100",
                                          height: "250"
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_window_item, { value: "3" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(tab3.value, (item) => {
                                    return openBlock(), createBlock(_component_v_col, {
                                      key: item.img,
                                      cols: "12",
                                      md: "4",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, {
                                          src: item.img,
                                          alt: "tab",
                                          cover: "",
                                          class: "w-100",
                                          height: "250"
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
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
                    createVNode(_component_v_window, {
                      modelValue: tab.value,
                      "onUpdate:modelValue": ($event) => tab.value = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_window_item, { value: "1" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(tab1.value, (item) => {
                                  return openBlock(), createBlock(_component_v_col, {
                                    key: item.img,
                                    cols: "12",
                                    md: "4",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, {
                                        src: item.img,
                                        alt: "tab",
                                        cover: "",
                                        class: "w-100",
                                        height: "250"
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_window_item, { value: "2" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(tab2.value, (item) => {
                                  return openBlock(), createBlock(_component_v_col, {
                                    key: item.img,
                                    cols: "12",
                                    md: "4",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, {
                                        src: item.img,
                                        alt: "tab",
                                        cover: "",
                                        class: "w-100",
                                        height: "250"
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_window_item, { value: "3" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(tab3.value, (item) => {
                                  return openBlock(), createBlock(_component_v_col, {
                                    key: item.img,
                                    cols: "12",
                                    md: "4",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, {
                                        src: item.img,
                                        alt: "tab",
                                        cover: "",
                                        class: "w-100",
                                        height: "250"
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_tabs, {
                modelValue: tab.value,
                "onUpdate:modelValue": ($event) => tab.value = $event,
                color: "primary",
                "align-tabs": "center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_tab, { value: "1" }, {
                    default: withCtx(() => [
                      createTextVNode("Landscape")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tab, { value: "2" }, {
                    default: withCtx(() => [
                      createTextVNode("Products")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tab, { value: "3" }, {
                    default: withCtx(() => [
                      createTextVNode("Abstract")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_card_text, { class: "rounded-md pa-0 mt-6" }, {
                default: withCtx(() => [
                  createVNode(_component_v_window, {
                    modelValue: tab.value,
                    "onUpdate:modelValue": ($event) => tab.value = $event
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_window_item, { value: "1" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(tab1.value, (item) => {
                                return openBlock(), createBlock(_component_v_col, {
                                  key: item.img,
                                  cols: "12",
                                  md: "4",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      src: item.img,
                                      alt: "tab",
                                      cover: "",
                                      class: "w-100",
                                      height: "250"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_window_item, { value: "2" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(tab2.value, (item) => {
                                return openBlock(), createBlock(_component_v_col, {
                                  key: item.img,
                                  cols: "12",
                                  md: "4",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      src: item.img,
                                      alt: "tab",
                                      cover: "",
                                      class: "w-100",
                                      height: "250"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_window_item, { value: "3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(tab3.value, (item) => {
                                return openBlock(), createBlock(_component_v_col, {
                                  key: item.img,
                                  cols: "12",
                                  md: "4",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      src: item.img,
                                      alt: "tab",
                                      cover: "",
                                      class: "w-100",
                                      height: "250"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/tabs/AlignCenterTabs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AlignEndTabs",
  __ssrInlineRender: true,
  setup(__props) {
    const tab = ref(null);
    const tab1 = ref([
      { img: img1 },
      { img: img2 },
      { img: img3 },
      { img: img4 },
      { img: img5 },
      { img: img1 }
    ]);
    const tab2 = ref([
      { img: img6 },
      { img: proimg1 },
      { img: proimg2 },
      { img: img9 },
      { img: img10 },
      { img: img11 }
    ]);
    const tab3 = ref([
      { img: img12 },
      { img: img13 },
      { img: proimg4 },
      { img: img10 },
      { img: img15 },
      { img: img11 }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_window = resolveComponent("v-window");
      const _component_v_window_item = resolveComponent("v-window-item");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_img = resolveComponent("v-img");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "0" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_tabs, {
              modelValue: tab.value,
              "onUpdate:modelValue": ($event) => tab.value = $event,
              color: "primary",
              "align-tabs": "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_tab, { value: "1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Landscape`);
                      } else {
                        return [
                          createTextVNode("Landscape")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, { value: "2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Products`);
                      } else {
                        return [
                          createTextVNode("Products")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, { value: "3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Abstract`);
                      } else {
                        return [
                          createTextVNode("Abstract")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_tab, { value: "1" }, {
                      default: withCtx(() => [
                        createTextVNode("Landscape")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "2" }, {
                      default: withCtx(() => [
                        createTextVNode("Products")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "3" }, {
                      default: withCtx(() => [
                        createTextVNode("Abstract")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_text, { class: "rounded-md pa-0 mt-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_window, {
                    modelValue: tab.value,
                    "onUpdate:modelValue": ($event) => tab.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "1" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(tab1.value, (item) => {
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        key: item.img,
                                        cols: "12",
                                        md: "4",
                                        sm: "6"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_img, {
                                              src: item.img,
                                              alt: "tab",
                                              cover: "",
                                              class: "w-100",
                                              height: "250"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_img, {
                                                src: item.img,
                                                alt: "tab",
                                                cover: "",
                                                class: "w-100",
                                                height: "250"
                                              }, null, 8, ["src"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(tab1.value, (item) => {
                                        return openBlock(), createBlock(_component_v_col, {
                                          key: item.img,
                                          cols: "12",
                                          md: "4",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, {
                                              src: item.img,
                                              alt: "tab",
                                              cover: "",
                                              class: "w-100",
                                              height: "250"
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(tab1.value, (item) => {
                                      return openBlock(), createBlock(_component_v_col, {
                                        key: item.img,
                                        cols: "12",
                                        md: "4",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, {
                                            src: item.img,
                                            alt: "tab",
                                            cover: "",
                                            class: "w-100",
                                            height: "250"
                                          }, null, 8, ["src"])
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(tab2.value, (item) => {
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        key: item.img,
                                        cols: "12",
                                        md: "4",
                                        sm: "6"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_img, {
                                              src: item.img,
                                              alt: "tab",
                                              cover: "",
                                              class: "w-100",
                                              height: "250"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_img, {
                                                src: item.img,
                                                alt: "tab",
                                                cover: "",
                                                class: "w-100",
                                                height: "250"
                                              }, null, 8, ["src"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(tab2.value, (item) => {
                                        return openBlock(), createBlock(_component_v_col, {
                                          key: item.img,
                                          cols: "12",
                                          md: "4",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, {
                                              src: item.img,
                                              alt: "tab",
                                              cover: "",
                                              class: "w-100",
                                              height: "250"
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(tab2.value, (item) => {
                                      return openBlock(), createBlock(_component_v_col, {
                                        key: item.img,
                                        cols: "12",
                                        md: "4",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, {
                                            src: item.img,
                                            alt: "tab",
                                            cover: "",
                                            class: "w-100",
                                            height: "250"
                                          }, null, 8, ["src"])
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "3" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(tab3.value, (item) => {
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        key: item.img,
                                        cols: "12",
                                        md: "4",
                                        sm: "6"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_img, {
                                              src: item.img,
                                              alt: "tab",
                                              cover: "",
                                              class: "w-100",
                                              height: "250"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_img, {
                                                src: item.img,
                                                alt: "tab",
                                                cover: "",
                                                class: "w-100",
                                                height: "250"
                                              }, null, 8, ["src"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(tab3.value, (item) => {
                                        return openBlock(), createBlock(_component_v_col, {
                                          key: item.img,
                                          cols: "12",
                                          md: "4",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, {
                                              src: item.img,
                                              alt: "tab",
                                              cover: "",
                                              class: "w-100",
                                              height: "250"
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(tab3.value, (item) => {
                                      return openBlock(), createBlock(_component_v_col, {
                                        key: item.img,
                                        cols: "12",
                                        md: "4",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, {
                                            src: item.img,
                                            alt: "tab",
                                            cover: "",
                                            class: "w-100",
                                            height: "250"
                                          }, null, 8, ["src"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_window_item, { value: "1" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(tab1.value, (item) => {
                                    return openBlock(), createBlock(_component_v_col, {
                                      key: item.img,
                                      cols: "12",
                                      md: "4",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, {
                                          src: item.img,
                                          alt: "tab",
                                          cover: "",
                                          class: "w-100",
                                          height: "250"
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_window_item, { value: "2" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(tab2.value, (item) => {
                                    return openBlock(), createBlock(_component_v_col, {
                                      key: item.img,
                                      cols: "12",
                                      md: "4",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, {
                                          src: item.img,
                                          alt: "tab",
                                          cover: "",
                                          class: "w-100",
                                          height: "250"
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_window_item, { value: "3" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(tab3.value, (item) => {
                                    return openBlock(), createBlock(_component_v_col, {
                                      key: item.img,
                                      cols: "12",
                                      md: "4",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, {
                                          src: item.img,
                                          alt: "tab",
                                          cover: "",
                                          class: "w-100",
                                          height: "250"
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
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
                    createVNode(_component_v_window, {
                      modelValue: tab.value,
                      "onUpdate:modelValue": ($event) => tab.value = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_window_item, { value: "1" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(tab1.value, (item) => {
                                  return openBlock(), createBlock(_component_v_col, {
                                    key: item.img,
                                    cols: "12",
                                    md: "4",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, {
                                        src: item.img,
                                        alt: "tab",
                                        cover: "",
                                        class: "w-100",
                                        height: "250"
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_window_item, { value: "2" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(tab2.value, (item) => {
                                  return openBlock(), createBlock(_component_v_col, {
                                    key: item.img,
                                    cols: "12",
                                    md: "4",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, {
                                        src: item.img,
                                        alt: "tab",
                                        cover: "",
                                        class: "w-100",
                                        height: "250"
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_window_item, { value: "3" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(tab3.value, (item) => {
                                  return openBlock(), createBlock(_component_v_col, {
                                    key: item.img,
                                    cols: "12",
                                    md: "4",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, {
                                        src: item.img,
                                        alt: "tab",
                                        cover: "",
                                        class: "w-100",
                                        height: "250"
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_tabs, {
                modelValue: tab.value,
                "onUpdate:modelValue": ($event) => tab.value = $event,
                color: "primary",
                "align-tabs": "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_tab, { value: "1" }, {
                    default: withCtx(() => [
                      createTextVNode("Landscape")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tab, { value: "2" }, {
                    default: withCtx(() => [
                      createTextVNode("Products")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tab, { value: "3" }, {
                    default: withCtx(() => [
                      createTextVNode("Abstract")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_card_text, { class: "rounded-md pa-0 mt-6" }, {
                default: withCtx(() => [
                  createVNode(_component_v_window, {
                    modelValue: tab.value,
                    "onUpdate:modelValue": ($event) => tab.value = $event
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_window_item, { value: "1" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(tab1.value, (item) => {
                                return openBlock(), createBlock(_component_v_col, {
                                  key: item.img,
                                  cols: "12",
                                  md: "4",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      src: item.img,
                                      alt: "tab",
                                      cover: "",
                                      class: "w-100",
                                      height: "250"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_window_item, { value: "2" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(tab2.value, (item) => {
                                return openBlock(), createBlock(_component_v_col, {
                                  key: item.img,
                                  cols: "12",
                                  md: "4",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      src: item.img,
                                      alt: "tab",
                                      cover: "",
                                      class: "w-100",
                                      height: "250"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_window_item, { value: "3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(tab3.value, (item) => {
                                return openBlock(), createBlock(_component_v_col, {
                                  key: item.img,
                                  cols: "12",
                                  md: "4",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      src: item.img,
                                      alt: "tab",
                                      cover: "",
                                      class: "w-100",
                                      height: "250"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/tabs/AlignEndTabs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Tabs" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Tabs",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$a, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$b, { title: "Tabs" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                lg: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$c, { title: "Basic" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$9, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$9)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$c, { title: "Basic" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$9)
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
                                    _push6(ssrRenderComponent(_sfc_main$c, { title: "Stacked" }, {
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
                                      createVNode(_sfc_main$c, { title: "Stacked" }, {
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
                                    _push6(ssrRenderComponent(_sfc_main$c, { title: "Center Active" }, {
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
                                      createVNode(_sfc_main$c, { title: "Center Active" }, {
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
                                lg: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$c, { title: "Custom Icons" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(CustomIcons, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(CustomIcons)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$c, { title: "Custom Icons" }, {
                                        default: withCtx(() => [
                                          createVNode(CustomIcons)
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
                                    _push6(ssrRenderComponent(_sfc_main$c, { title: "Align Center" }, {
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
                                      createVNode(_sfc_main$c, { title: "Align Center" }, {
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
                                    _push6(ssrRenderComponent(_sfc_main$c, { title: "Align End" }, {
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
                                      createVNode(_sfc_main$c, { title: "Align End" }, {
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
                                lg: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$c, { title: "Icon" }, {
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
                                      createVNode(_sfc_main$c, { title: "Icon" }, {
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
                                lg: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$c, { title: "Disabled" }, {
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
                                      createVNode(_sfc_main$c, { title: "Disabled" }, {
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
                                lg: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$c, { title: "Colors" }, {
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
                                      createVNode(_sfc_main$c, { title: "Colors" }, {
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
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$c, { title: "Basic" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$9)
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
                                    createVNode(_sfc_main$c, { title: "Stacked" }, {
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
                                    createVNode(_sfc_main$c, { title: "Center Active" }, {
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
                                  lg: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$c, { title: "Custom Icons" }, {
                                      default: withCtx(() => [
                                        createVNode(CustomIcons)
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
                                    createVNode(_sfc_main$c, { title: "Align Center" }, {
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
                                    createVNode(_sfc_main$c, { title: "Align End" }, {
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
                                  lg: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$c, { title: "Icon" }, {
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
                                  lg: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$c, { title: "Disabled" }, {
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
                                  lg: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$c, { title: "Colors" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$7)
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
                                lg: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$c, { title: "Basic" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$9)
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
                                  createVNode(_sfc_main$c, { title: "Stacked" }, {
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
                                  createVNode(_sfc_main$c, { title: "Center Active" }, {
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
                                lg: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$c, { title: "Custom Icons" }, {
                                    default: withCtx(() => [
                                      createVNode(CustomIcons)
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
                                  createVNode(_sfc_main$c, { title: "Align Center" }, {
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
                                  createVNode(_sfc_main$c, { title: "Align End" }, {
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
                                lg: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$c, { title: "Icon" }, {
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
                                lg: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$c, { title: "Disabled" }, {
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
                                lg: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$c, { title: "Colors" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$7)
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
                    createVNode(_sfc_main$b, { title: "Tabs" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$c, { title: "Basic" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$9)
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
                                createVNode(_sfc_main$c, { title: "Stacked" }, {
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
                                createVNode(_sfc_main$c, { title: "Center Active" }, {
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
                              lg: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$c, { title: "Custom Icons" }, {
                                  default: withCtx(() => [
                                    createVNode(CustomIcons)
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
                                createVNode(_sfc_main$c, { title: "Align Center" }, {
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
                                createVNode(_sfc_main$c, { title: "Align End" }, {
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
                              lg: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$c, { title: "Icon" }, {
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
                              lg: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$c, { title: "Disabled" }, {
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
                              lg: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$c, { title: "Colors" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$7)
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
                  createVNode(_sfc_main$b, { title: "Tabs" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$c, { title: "Basic" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$9)
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
                              createVNode(_sfc_main$c, { title: "Stacked" }, {
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
                              createVNode(_sfc_main$c, { title: "Center Active" }, {
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
                            lg: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$c, { title: "Custom Icons" }, {
                                default: withCtx(() => [
                                  createVNode(CustomIcons)
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
                              createVNode(_sfc_main$c, { title: "Align Center" }, {
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
                              createVNode(_sfc_main$c, { title: "Align End" }, {
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
                            lg: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$c, { title: "Icon" }, {
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
                            lg: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$c, { title: "Disabled" }, {
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
                            lg: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$c, { title: "Colors" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$7)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ui-components/Tabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Tabs-s5awIBhR.js.map
