import { defineComponent, ref, resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext, unref } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$9 } from "./UiParentCard-DhlYzLUl.js";
import { _ as _export_sfc } from "../server.mjs";
import { UserIcon, MailIcon, LockIcon } from "vue-tabler-icons";
import { _ as _sfc_main$8 } from "./BaseBreadcrumb-DAIjkUfv.js";
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
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "OrdinaryForm",
  __ssrInlineRender: true,
  setup(__props) {
    const checkbox1 = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_label = resolveComponent("v-label");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_row, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              lg: "12"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "oemail"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Email`);
                      } else {
                        return [
                          createTextVNode("Email")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    hint: "We'll never share your email with anyone else.",
                    "persistent-hint": "",
                    variant: "outlined",
                    placeholder: "Enter email",
                    color: "primary",
                    id: "oemail"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "mb-2 font-weight-medium mt-5",
                    for: "paswrd"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Password`);
                      } else {
                        return [
                          createTextVNode(" Password")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    "persistent-hint": "",
                    variant: "outlined",
                    "hide-details": "",
                    type: "password",
                    placeholder: "Enter password",
                    color: "primary",
                    id: "paswrd"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="my-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_checkbox, {
                    density: "compact",
                    modelValue: checkbox1.value,
                    "onUpdate:modelValue": ($event) => checkbox1.value = $event,
                    "hide-details": "",
                    color: "primary",
                    label: "Check Me Out!"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "primary",
                    rounded: "pill"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Submit`);
                      } else {
                        return [
                          createTextVNode("Submit")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_label, {
                      class: "mb-2 font-weight-medium",
                      for: "oemail"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Email")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      hint: "We'll never share your email with anyone else.",
                      "persistent-hint": "",
                      variant: "outlined",
                      placeholder: "Enter email",
                      color: "primary",
                      id: "oemail"
                    }),
                    createVNode(_component_v_label, {
                      class: "mb-2 font-weight-medium mt-5",
                      for: "paswrd"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Password")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      "persistent-hint": "",
                      variant: "outlined",
                      "hide-details": "",
                      type: "password",
                      placeholder: "Enter password",
                      color: "primary",
                      id: "paswrd"
                    }),
                    createVNode("div", { class: "my-3" }, [
                      createVNode(_component_v_checkbox, {
                        density: "compact",
                        modelValue: checkbox1.value,
                        "onUpdate:modelValue": ($event) => checkbox1.value = $event,
                        "hide-details": "",
                        color: "primary",
                        label: "Check Me Out!"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode(_component_v_btn, {
                      color: "primary",
                      rounded: "pill"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Submit")
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
                lg: "12"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "oemail"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Email")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    hint: "We'll never share your email with anyone else.",
                    "persistent-hint": "",
                    variant: "outlined",
                    placeholder: "Enter email",
                    color: "primary",
                    id: "oemail"
                  }),
                  createVNode(_component_v_label, {
                    class: "mb-2 font-weight-medium mt-5",
                    for: "paswrd"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Password")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    "persistent-hint": "",
                    variant: "outlined",
                    "hide-details": "",
                    type: "password",
                    placeholder: "Enter password",
                    color: "primary",
                    id: "paswrd"
                  }),
                  createVNode("div", { class: "my-3" }, [
                    createVNode(_component_v_checkbox, {
                      density: "compact",
                      modelValue: checkbox1.value,
                      "onUpdate:modelValue": ($event) => checkbox1.value = $event,
                      "hide-details": "",
                      color: "primary",
                      label: "Check Me Out!"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(_component_v_btn, {
                    color: "primary",
                    rounded: "pill"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Submit")
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-layouts/OrdinaryForm.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_label = resolveComponent("v-label");
  const _component_v_text_field = resolveComponent("v-text-field");
  _push(ssrRenderComponent(_component_v_row, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_col, {
          cols: "12",
          lg: "12"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_label, {
                class: "mb-2 font-weight-medium",
                for: "si"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Success Input`);
                  } else {
                    return [
                      createTextVNode("Success Input")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                variant: "outlined",
                placeholder: "Success value",
                color: "success",
                id: "si"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_label, {
                class: "mb-2 font-weight-medium",
                for: "ei"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Error Input`);
                  } else {
                    return [
                      createTextVNode("Error Input")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                variant: "outlined",
                color: "error",
                id: "ei"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_label, {
                class: "mb-2 font-weight-medium",
                for: "et"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Input with Error text`);
                  } else {
                    return [
                      createTextVNode("Input with Error text")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                variant: "outlined",
                id: "et",
                color: "error",
                hint: "Incorrect entry.",
                "persistent-hint": ""
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_label, {
                  class: "mb-2 font-weight-medium",
                  for: "si"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Success Input")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_text_field, {
                  variant: "outlined",
                  placeholder: "Success value",
                  color: "success",
                  id: "si"
                }),
                createVNode(_component_v_label, {
                  class: "mb-2 font-weight-medium",
                  for: "ei"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Error Input")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_text_field, {
                  variant: "outlined",
                  color: "error",
                  id: "ei"
                }),
                createVNode(_component_v_label, {
                  class: "mb-2 font-weight-medium",
                  for: "et"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Input with Error text")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_text_field, {
                  variant: "outlined",
                  id: "et",
                  color: "error",
                  hint: "Incorrect entry.",
                  "persistent-hint": ""
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
            lg: "12"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_label, {
                class: "mb-2 font-weight-medium",
                for: "si"
              }, {
                default: withCtx(() => [
                  createTextVNode("Success Input")
                ]),
                _: 1
              }),
              createVNode(_component_v_text_field, {
                variant: "outlined",
                placeholder: "Success value",
                color: "success",
                id: "si"
              }),
              createVNode(_component_v_label, {
                class: "mb-2 font-weight-medium",
                for: "ei"
              }, {
                default: withCtx(() => [
                  createTextVNode("Error Input")
                ]),
                _: 1
              }),
              createVNode(_component_v_text_field, {
                variant: "outlined",
                color: "error",
                id: "ei"
              }),
              createVNode(_component_v_label, {
                class: "mb-2 font-weight-medium",
                for: "et"
              }, {
                default: withCtx(() => [
                  createTextVNode("Input with Error text")
                ]),
                _: 1
              }),
              createVNode(_component_v_text_field, {
                variant: "outlined",
                id: "et",
                color: "error",
                hint: "Incorrect entry.",
                "persistent-hint": ""
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-layouts/InputVarients.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const InputVarients = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DefaultForm",
  __ssrInlineRender: true,
  setup(__props) {
    const select = ref("select");
    const items = ref(["One", "Two", "Three", "Four"]);
    const defaultcheckbox1 = ref(false);
    const defaultcheckbox2 = ref(false);
    const defaultcheckbox3 = ref(false);
    const defaultcheckbox4 = ref(false);
    const defaultcheckbox5 = ref(false);
    const defaultcheckbox6 = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_label = resolveComponent("v-label");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_row, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              lg: "12"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "dt"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Default Text`);
                      } else {
                        return [
                          createTextVNode("Default Text")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    variant: "outlined",
                    color: "primary",
                    id: "dt",
                    "model-value": "George deo"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "de"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Email`);
                      } else {
                        return [
                          createTextVNode("Email")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    variant: "outlined",
                    color: "primary",
                    id: "de"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "dp"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Password`);
                      } else {
                        return [
                          createTextVNode("Password")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    variant: "outlined",
                    type: "password",
                    id: "dp",
                    color: "primary"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "do"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Read Only`);
                      } else {
                        return [
                          createTextVNode("Read Only")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    variant: "outlined",
                    color: "primary",
                    id: "do",
                    "model-value": "Hello World",
                    readonly: "",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "my-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "8"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      lg: "6",
                                      md: "12"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_checkbox, {
                                            density: "compact",
                                            modelValue: defaultcheckbox1.value,
                                            "onUpdate:modelValue": ($event) => defaultcheckbox1.value = $event,
                                            "hide-details": "",
                                            color: "primary",
                                            label: "Check this custom checkbox"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_checkbox, {
                                            density: "compact",
                                            modelValue: defaultcheckbox2.value,
                                            "onUpdate:modelValue": ($event) => defaultcheckbox2.value = $event,
                                            "hide-details": "",
                                            color: "primary",
                                            label: "Check this custom checkbox"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_checkbox, {
                                            density: "compact",
                                            modelValue: defaultcheckbox3.value,
                                            "onUpdate:modelValue": ($event) => defaultcheckbox3.value = $event,
                                            "hide-details": "",
                                            color: "primary",
                                            label: "Check this custom checkbox"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_checkbox, {
                                              density: "compact",
                                              modelValue: defaultcheckbox1.value,
                                              "onUpdate:modelValue": ($event) => defaultcheckbox1.value = $event,
                                              "hide-details": "",
                                              color: "primary",
                                              label: "Check this custom checkbox"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_checkbox, {
                                              density: "compact",
                                              modelValue: defaultcheckbox2.value,
                                              "onUpdate:modelValue": ($event) => defaultcheckbox2.value = $event,
                                              "hide-details": "",
                                              color: "primary",
                                              label: "Check this custom checkbox"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_checkbox, {
                                              density: "compact",
                                              modelValue: defaultcheckbox3.value,
                                              "onUpdate:modelValue": ($event) => defaultcheckbox3.value = $event,
                                              "hide-details": "",
                                              color: "primary",
                                              label: "Check this custom checkbox"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      lg: "6",
                                      md: "12"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_checkbox, {
                                            density: "compact",
                                            modelValue: defaultcheckbox4.value,
                                            "onUpdate:modelValue": ($event) => defaultcheckbox4.value = $event,
                                            "hide-details": "",
                                            color: "primary",
                                            label: "Check this custom checkbox"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_checkbox, {
                                            density: "compact",
                                            modelValue: defaultcheckbox5.value,
                                            "onUpdate:modelValue": ($event) => defaultcheckbox5.value = $event,
                                            "hide-details": "",
                                            color: "primary",
                                            label: "Check this custom checkbox"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_checkbox, {
                                            density: "compact",
                                            modelValue: defaultcheckbox6.value,
                                            "onUpdate:modelValue": ($event) => defaultcheckbox6.value = $event,
                                            "hide-details": "",
                                            color: "primary",
                                            label: "Check this custom checkbox"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_checkbox, {
                                              density: "compact",
                                              modelValue: defaultcheckbox4.value,
                                              "onUpdate:modelValue": ($event) => defaultcheckbox4.value = $event,
                                              "hide-details": "",
                                              color: "primary",
                                              label: "Check this custom checkbox"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_checkbox, {
                                              density: "compact",
                                              modelValue: defaultcheckbox5.value,
                                              "onUpdate:modelValue": ($event) => defaultcheckbox5.value = $event,
                                              "hide-details": "",
                                              color: "primary",
                                              label: "Check this custom checkbox"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_checkbox, {
                                              density: "compact",
                                              modelValue: defaultcheckbox6.value,
                                              "onUpdate:modelValue": ($event) => defaultcheckbox6.value = $event,
                                              "hide-details": "",
                                              color: "primary",
                                              label: "Check this custom checkbox"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        lg: "6",
                                        md: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_checkbox, {
                                            density: "compact",
                                            modelValue: defaultcheckbox1.value,
                                            "onUpdate:modelValue": ($event) => defaultcheckbox1.value = $event,
                                            "hide-details": "",
                                            color: "primary",
                                            label: "Check this custom checkbox"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_checkbox, {
                                            density: "compact",
                                            modelValue: defaultcheckbox2.value,
                                            "onUpdate:modelValue": ($event) => defaultcheckbox2.value = $event,
                                            "hide-details": "",
                                            color: "primary",
                                            label: "Check this custom checkbox"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_checkbox, {
                                            density: "compact",
                                            modelValue: defaultcheckbox3.value,
                                            "onUpdate:modelValue": ($event) => defaultcheckbox3.value = $event,
                                            "hide-details": "",
                                            color: "primary",
                                            label: "Check this custom checkbox"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        lg: "6",
                                        md: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_checkbox, {
                                            density: "compact",
                                            modelValue: defaultcheckbox4.value,
                                            "onUpdate:modelValue": ($event) => defaultcheckbox4.value = $event,
                                            "hide-details": "",
                                            color: "primary",
                                            label: "Check this custom checkbox"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_checkbox, {
                                            density: "compact",
                                            modelValue: defaultcheckbox5.value,
                                            "onUpdate:modelValue": ($event) => defaultcheckbox5.value = $event,
                                            "hide-details": "",
                                            color: "primary",
                                            label: "Check this custom checkbox"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_checkbox, {
                                            density: "compact",
                                            modelValue: defaultcheckbox6.value,
                                            "onUpdate:modelValue": ($event) => defaultcheckbox6.value = $event,
                                            "hide-details": "",
                                            color: "primary",
                                            label: "Check this custom checkbox"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      lg: "6",
                                      md: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_checkbox, {
                                          density: "compact",
                                          modelValue: defaultcheckbox1.value,
                                          "onUpdate:modelValue": ($event) => defaultcheckbox1.value = $event,
                                          "hide-details": "",
                                          color: "primary",
                                          label: "Check this custom checkbox"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_checkbox, {
                                          density: "compact",
                                          modelValue: defaultcheckbox2.value,
                                          "onUpdate:modelValue": ($event) => defaultcheckbox2.value = $event,
                                          "hide-details": "",
                                          color: "primary",
                                          label: "Check this custom checkbox"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_checkbox, {
                                          density: "compact",
                                          modelValue: defaultcheckbox3.value,
                                          "onUpdate:modelValue": ($event) => defaultcheckbox3.value = $event,
                                          "hide-details": "",
                                          color: "primary",
                                          label: "Check this custom checkbox"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      lg: "6",
                                      md: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_checkbox, {
                                          density: "compact",
                                          modelValue: defaultcheckbox4.value,
                                          "onUpdate:modelValue": ($event) => defaultcheckbox4.value = $event,
                                          "hide-details": "",
                                          color: "primary",
                                          label: "Check this custom checkbox"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_checkbox, {
                                          density: "compact",
                                          modelValue: defaultcheckbox5.value,
                                          "onUpdate:modelValue": ($event) => defaultcheckbox5.value = $event,
                                          "hide-details": "",
                                          color: "primary",
                                          label: "Check this custom checkbox"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_checkbox, {
                                          density: "compact",
                                          modelValue: defaultcheckbox6.value,
                                          "onUpdate:modelValue": ($event) => defaultcheckbox6.value = $event,
                                          "hide-details": "",
                                          color: "primary",
                                          label: "Check this custom checkbox"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "8"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    lg: "6",
                                    md: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_checkbox, {
                                        density: "compact",
                                        modelValue: defaultcheckbox1.value,
                                        "onUpdate:modelValue": ($event) => defaultcheckbox1.value = $event,
                                        "hide-details": "",
                                        color: "primary",
                                        label: "Check this custom checkbox"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_checkbox, {
                                        density: "compact",
                                        modelValue: defaultcheckbox2.value,
                                        "onUpdate:modelValue": ($event) => defaultcheckbox2.value = $event,
                                        "hide-details": "",
                                        color: "primary",
                                        label: "Check this custom checkbox"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_checkbox, {
                                        density: "compact",
                                        modelValue: defaultcheckbox3.value,
                                        "onUpdate:modelValue": ($event) => defaultcheckbox3.value = $event,
                                        "hide-details": "",
                                        color: "primary",
                                        label: "Check this custom checkbox"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    lg: "6",
                                    md: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_checkbox, {
                                        density: "compact",
                                        modelValue: defaultcheckbox4.value,
                                        "onUpdate:modelValue": ($event) => defaultcheckbox4.value = $event,
                                        "hide-details": "",
                                        color: "primary",
                                        label: "Check this custom checkbox"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_checkbox, {
                                        density: "compact",
                                        modelValue: defaultcheckbox5.value,
                                        "onUpdate:modelValue": ($event) => defaultcheckbox5.value = $event,
                                        "hide-details": "",
                                        color: "primary",
                                        label: "Check this custom checkbox"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_checkbox, {
                                        density: "compact",
                                        modelValue: defaultcheckbox6.value,
                                        "onUpdate:modelValue": ($event) => defaultcheckbox6.value = $event,
                                        "hide-details": "",
                                        color: "primary",
                                        label: "Check this custom checkbox"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "sel"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Select`);
                      } else {
                        return [
                          createTextVNode("Select")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_select, {
                    modelValue: select.value,
                    "onUpdate:modelValue": ($event) => select.value = $event,
                    items: items.value,
                    "item-title": "state",
                    "item-value": "abbr",
                    label: "Select",
                    "return-object": "",
                    "single-line": "",
                    variant: "outlined",
                    id: "sel"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "primary",
                    rounded: "pill"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Submit`);
                      } else {
                        return [
                          createTextVNode("Submit")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_label, {
                      class: "mb-2 font-weight-medium",
                      for: "dt"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Default Text")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      variant: "outlined",
                      color: "primary",
                      id: "dt",
                      "model-value": "George deo"
                    }),
                    createVNode(_component_v_label, {
                      class: "mb-2 font-weight-medium",
                      for: "de"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Email")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      variant: "outlined",
                      color: "primary",
                      id: "de"
                    }),
                    createVNode(_component_v_label, {
                      class: "mb-2 font-weight-medium",
                      for: "dp"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Password")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      variant: "outlined",
                      type: "password",
                      id: "dp",
                      color: "primary"
                    }),
                    createVNode(_component_v_label, {
                      class: "mb-2 font-weight-medium",
                      for: "do"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Read Only")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      variant: "outlined",
                      color: "primary",
                      id: "do",
                      "model-value": "Hello World",
                      readonly: "",
                      "hide-details": ""
                    }),
                    createVNode(_component_v_row, { class: "my-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "8"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "6",
                                  md: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_checkbox, {
                                      density: "compact",
                                      modelValue: defaultcheckbox1.value,
                                      "onUpdate:modelValue": ($event) => defaultcheckbox1.value = $event,
                                      "hide-details": "",
                                      color: "primary",
                                      label: "Check this custom checkbox"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_v_checkbox, {
                                      density: "compact",
                                      modelValue: defaultcheckbox2.value,
                                      "onUpdate:modelValue": ($event) => defaultcheckbox2.value = $event,
                                      "hide-details": "",
                                      color: "primary",
                                      label: "Check this custom checkbox"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_v_checkbox, {
                                      density: "compact",
                                      modelValue: defaultcheckbox3.value,
                                      "onUpdate:modelValue": ($event) => defaultcheckbox3.value = $event,
                                      "hide-details": "",
                                      color: "primary",
                                      label: "Check this custom checkbox"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "6",
                                  md: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_checkbox, {
                                      density: "compact",
                                      modelValue: defaultcheckbox4.value,
                                      "onUpdate:modelValue": ($event) => defaultcheckbox4.value = $event,
                                      "hide-details": "",
                                      color: "primary",
                                      label: "Check this custom checkbox"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_v_checkbox, {
                                      density: "compact",
                                      modelValue: defaultcheckbox5.value,
                                      "onUpdate:modelValue": ($event) => defaultcheckbox5.value = $event,
                                      "hide-details": "",
                                      color: "primary",
                                      label: "Check this custom checkbox"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_v_checkbox, {
                                      density: "compact",
                                      modelValue: defaultcheckbox6.value,
                                      "onUpdate:modelValue": ($event) => defaultcheckbox6.value = $event,
                                      "hide-details": "",
                                      color: "primary",
                                      label: "Check this custom checkbox"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                    }),
                    createVNode(_component_v_label, {
                      class: "mb-2 font-weight-medium",
                      for: "sel"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Select")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_select, {
                      modelValue: select.value,
                      "onUpdate:modelValue": ($event) => select.value = $event,
                      items: items.value,
                      "item-title": "state",
                      "item-value": "abbr",
                      label: "Select",
                      "return-object": "",
                      "single-line": "",
                      variant: "outlined",
                      id: "sel"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                    createVNode(_component_v_btn, {
                      color: "primary",
                      rounded: "pill"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Submit")
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
                lg: "12"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "dt"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Default Text")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    variant: "outlined",
                    color: "primary",
                    id: "dt",
                    "model-value": "George deo"
                  }),
                  createVNode(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "de"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Email")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    variant: "outlined",
                    color: "primary",
                    id: "de"
                  }),
                  createVNode(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "dp"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Password")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    variant: "outlined",
                    type: "password",
                    id: "dp",
                    color: "primary"
                  }),
                  createVNode(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "do"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Read Only")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    variant: "outlined",
                    color: "primary",
                    id: "do",
                    "model-value": "Hello World",
                    readonly: "",
                    "hide-details": ""
                  }),
                  createVNode(_component_v_row, { class: "my-3" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "8"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                lg: "6",
                                md: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_checkbox, {
                                    density: "compact",
                                    modelValue: defaultcheckbox1.value,
                                    "onUpdate:modelValue": ($event) => defaultcheckbox1.value = $event,
                                    "hide-details": "",
                                    color: "primary",
                                    label: "Check this custom checkbox"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_checkbox, {
                                    density: "compact",
                                    modelValue: defaultcheckbox2.value,
                                    "onUpdate:modelValue": ($event) => defaultcheckbox2.value = $event,
                                    "hide-details": "",
                                    color: "primary",
                                    label: "Check this custom checkbox"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_checkbox, {
                                    density: "compact",
                                    modelValue: defaultcheckbox3.value,
                                    "onUpdate:modelValue": ($event) => defaultcheckbox3.value = $event,
                                    "hide-details": "",
                                    color: "primary",
                                    label: "Check this custom checkbox"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                lg: "6",
                                md: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_checkbox, {
                                    density: "compact",
                                    modelValue: defaultcheckbox4.value,
                                    "onUpdate:modelValue": ($event) => defaultcheckbox4.value = $event,
                                    "hide-details": "",
                                    color: "primary",
                                    label: "Check this custom checkbox"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_checkbox, {
                                    density: "compact",
                                    modelValue: defaultcheckbox5.value,
                                    "onUpdate:modelValue": ($event) => defaultcheckbox5.value = $event,
                                    "hide-details": "",
                                    color: "primary",
                                    label: "Check this custom checkbox"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_checkbox, {
                                    density: "compact",
                                    modelValue: defaultcheckbox6.value,
                                    "onUpdate:modelValue": ($event) => defaultcheckbox6.value = $event,
                                    "hide-details": "",
                                    color: "primary",
                                    label: "Check this custom checkbox"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  }),
                  createVNode(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "sel"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Select")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_select, {
                    modelValue: select.value,
                    "onUpdate:modelValue": ($event) => select.value = $event,
                    items: items.value,
                    "item-title": "state",
                    "item-value": "abbr",
                    label: "Select",
                    "return-object": "",
                    "single-line": "",
                    variant: "outlined",
                    id: "sel"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                  createVNode(_component_v_btn, {
                    color: "primary",
                    rounded: "pill"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Submit")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-layouts/DefaultForm.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BasicHeaderForm",
  __ssrInlineRender: true,
  setup(__props) {
    ref("select");
    const gender = ref(["Male", "Female"]);
    const inline = ref(null);
    const country = ref(["USA", "United Kingdom", "India", "Srilanka"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_alert = resolveComponent("v-alert");
      const _component_v_label = resolveComponent("v-label");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_radio_group = resolveComponent("v-radio-group");
      const _component_v_radio = resolveComponent("v-radio");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_row, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              lg: "12"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_alert, {
                    variant: "tonal",
                    type: "warning",
                    color: "primary",
                    class: "mb-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Person Info `);
                      } else {
                        return [
                          createTextVNode(" Person Info ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "mb-2 font-weight-medium",
                                for: "fn"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`First Name`);
                                  } else {
                                    return [
                                      createTextVNode("First Name")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                variant: "outlined",
                                color: "primary",
                                id: "fn"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "mb-2 font-weight-medium",
                                for: "sg"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Select Gender`);
                                  } else {
                                    return [
                                      createTextVNode("Select Gender")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_select, {
                                items: gender.value,
                                "item-title": "gender",
                                id: "sg",
                                "item-value": "abbr",
                                "return-object": "",
                                "single-line": "",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "mb-2 font-weight-medium",
                                  for: "fn"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("First Name")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  variant: "outlined",
                                  color: "primary",
                                  id: "fn"
                                }),
                                createVNode(_component_v_label, {
                                  class: "mb-2 font-weight-medium",
                                  for: "sg"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Select Gender")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_select, {
                                  items: gender.value,
                                  "item-title": "gender",
                                  id: "sg",
                                  "item-value": "abbr",
                                  "return-object": "",
                                  "single-line": "",
                                  variant: "outlined"
                                }, null, 8, ["items"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "mb-2 font-weight-medium",
                                for: "ln"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Last Name`);
                                  } else {
                                    return [
                                      createTextVNode("Last Name")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                variant: "outlined",
                                color: "primary",
                                id: "ln"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "mb-2 font-weight-medium",
                                for: "dob"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Date of Birth`);
                                  } else {
                                    return [
                                      createTextVNode("Date of Birth")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "dob",
                                type: "date"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "mb-2 font-weight-medium",
                                  for: "ln"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Last Name")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  variant: "outlined",
                                  color: "primary",
                                  id: "ln"
                                }),
                                createVNode(_component_v_label, {
                                  class: "mb-2 font-weight-medium",
                                  for: "dob"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Date of Birth")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "dob",
                                  type: "date"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "mb-2 font-weight-medium",
                                for: "fn"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("First Name")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                variant: "outlined",
                                color: "primary",
                                id: "fn"
                              }),
                              createVNode(_component_v_label, {
                                class: "mb-2 font-weight-medium",
                                for: "sg"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Select Gender")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_select, {
                                items: gender.value,
                                "item-title": "gender",
                                id: "sg",
                                "item-value": "abbr",
                                "return-object": "",
                                "single-line": "",
                                variant: "outlined"
                              }, null, 8, ["items"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "mb-2 font-weight-medium",
                                for: "ln"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Last Name")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                variant: "outlined",
                                color: "primary",
                                id: "ln"
                              }),
                              createVNode(_component_v_label, {
                                class: "mb-2 font-weight-medium",
                                for: "dob"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Date of Birth")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "dob",
                                type: "date"
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "mmb"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Membership`);
                      } else {
                        return [
                          createTextVNode("Membership")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_radio_group, {
                    modelValue: inline.value,
                    "onUpdate:modelValue": ($event) => inline.value = $event,
                    inline: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_radio, {
                          label: "Free",
                          value: "radio-1",
                          color: "primary",
                          id: "mmb"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_radio, {
                          label: "Paid",
                          value: "radio-2",
                          color: "primary",
                          id: "mmb2"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_radio, {
                            label: "Free",
                            value: "radio-1",
                            color: "primary",
                            id: "mmb"
                          }),
                          createVNode(_component_v_radio, {
                            label: "Paid",
                            value: "radio-2",
                            color: "primary",
                            id: "mmb2"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_alert, {
                    variant: "tonal",
                    type: "warning",
                    color: "primary",
                    class: "mb-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Address `);
                      } else {
                        return [
                          createTextVNode(" Address ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "mb-2 font-weight-medium",
                                for: "str"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Street`);
                                  } else {
                                    return [
                                      createTextVNode("Street")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                variant: "outlined",
                                color: "primary",
                                id: "str",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "mb-2 font-weight-medium",
                                  for: "str"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Street")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  variant: "outlined",
                                  color: "primary",
                                  id: "str",
                                  "hide-details": ""
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "mb-2 font-weight-medium",
                                for: "ct"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`City`);
                                  } else {
                                    return [
                                      createTextVNode("City")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                variant: "outlined",
                                color: "primary",
                                id: "ct"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "mb-2 font-weight-medium",
                                for: "pc"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Post Code`);
                                  } else {
                                    return [
                                      createTextVNode("Post Code")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                variant: "outlined",
                                color: "primary",
                                id: "pc"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "mb-2 font-weight-medium",
                                  for: "ct"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("City")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  variant: "outlined",
                                  color: "primary",
                                  id: "ct"
                                }),
                                createVNode(_component_v_label, {
                                  class: "mb-2 font-weight-medium",
                                  for: "pc"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Post Code")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  variant: "outlined",
                                  color: "primary",
                                  id: "pc"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "mb-2 font-weight-medium",
                                for: "stt"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`State`);
                                  } else {
                                    return [
                                      createTextVNode("State")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                variant: "outlined",
                                color: "primary",
                                id: "stt"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "mb-2 font-weight-medium",
                                for: "cnt"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Country`);
                                  } else {
                                    return [
                                      createTextVNode("Country")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_select, {
                                items: country.value,
                                "item-title": "country",
                                "item-value": "abbr",
                                "return-object": "",
                                "single-line": "",
                                variant: "outlined",
                                id: "cnt"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "mb-2 font-weight-medium",
                                  for: "stt"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("State")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  variant: "outlined",
                                  color: "primary",
                                  id: "stt"
                                }),
                                createVNode(_component_v_label, {
                                  class: "mb-2 font-weight-medium",
                                  for: "cnt"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Country")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_select, {
                                  items: country.value,
                                  "item-title": "country",
                                  "item-value": "abbr",
                                  "return-object": "",
                                  "single-line": "",
                                  variant: "outlined",
                                  id: "cnt"
                                }, null, 8, ["items"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "mb-2 font-weight-medium",
                                for: "str"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Street")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                variant: "outlined",
                                color: "primary",
                                id: "str",
                                "hide-details": ""
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "mb-2 font-weight-medium",
                                for: "ct"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("City")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                variant: "outlined",
                                color: "primary",
                                id: "ct"
                              }),
                              createVNode(_component_v_label, {
                                class: "mb-2 font-weight-medium",
                                for: "pc"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Post Code")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                variant: "outlined",
                                color: "primary",
                                id: "pc"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "mb-2 font-weight-medium",
                                for: "stt"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("State")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                variant: "outlined",
                                color: "primary",
                                id: "stt"
                              }),
                              createVNode(_component_v_label, {
                                class: "mb-2 font-weight-medium",
                                for: "cnt"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Country")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_select, {
                                items: country.value,
                                "item-title": "country",
                                "item-value": "abbr",
                                "return-object": "",
                                "single-line": "",
                                variant: "outlined",
                                id: "cnt"
                              }, null, 8, ["items"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "error",
                    class: "mr-3",
                    rounded: "pill"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Cancel`);
                      } else {
                        return [
                          createTextVNode("Cancel")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "primary",
                    rounded: "pill"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Submit`);
                      } else {
                        return [
                          createTextVNode("Submit")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_alert, {
                      variant: "tonal",
                      type: "warning",
                      color: "primary",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Person Info ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "mb-2 font-weight-medium",
                              for: "fn"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("First Name")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_text_field, {
                              variant: "outlined",
                              color: "primary",
                              id: "fn"
                            }),
                            createVNode(_component_v_label, {
                              class: "mb-2 font-weight-medium",
                              for: "sg"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Select Gender")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_select, {
                              items: gender.value,
                              "item-title": "gender",
                              id: "sg",
                              "item-value": "abbr",
                              "return-object": "",
                              "single-line": "",
                              variant: "outlined"
                            }, null, 8, ["items"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "mb-2 font-weight-medium",
                              for: "ln"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Last Name")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_text_field, {
                              variant: "outlined",
                              color: "primary",
                              id: "ln"
                            }),
                            createVNode(_component_v_label, {
                              class: "mb-2 font-weight-medium",
                              for: "dob"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Date of Birth")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "dob",
                              type: "date"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_label, {
                      class: "mb-2 font-weight-medium",
                      for: "mmb"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Membership")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_radio_group, {
                      modelValue: inline.value,
                      "onUpdate:modelValue": ($event) => inline.value = $event,
                      inline: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_radio, {
                          label: "Free",
                          value: "radio-1",
                          color: "primary",
                          id: "mmb"
                        }),
                        createVNode(_component_v_radio, {
                          label: "Paid",
                          value: "radio-2",
                          color: "primary",
                          id: "mmb2"
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_alert, {
                      variant: "tonal",
                      type: "warning",
                      color: "primary",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Address ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "mb-2 font-weight-medium",
                              for: "str"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Street")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_text_field, {
                              variant: "outlined",
                              color: "primary",
                              id: "str",
                              "hide-details": ""
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "mb-2 font-weight-medium",
                              for: "ct"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("City")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_text_field, {
                              variant: "outlined",
                              color: "primary",
                              id: "ct"
                            }),
                            createVNode(_component_v_label, {
                              class: "mb-2 font-weight-medium",
                              for: "pc"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Post Code")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_text_field, {
                              variant: "outlined",
                              color: "primary",
                              id: "pc"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "mb-2 font-weight-medium",
                              for: "stt"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("State")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_text_field, {
                              variant: "outlined",
                              color: "primary",
                              id: "stt"
                            }),
                            createVNode(_component_v_label, {
                              class: "mb-2 font-weight-medium",
                              for: "cnt"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Country")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_select, {
                              items: country.value,
                              "item-title": "country",
                              "item-value": "abbr",
                              "return-object": "",
                              "single-line": "",
                              variant: "outlined",
                              id: "cnt"
                            }, null, 8, ["items"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_btn, {
                      color: "error",
                      class: "mr-3",
                      rounded: "pill"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Cancel")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_btn, {
                      color: "primary",
                      rounded: "pill"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Submit")
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
                lg: "12"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_alert, {
                    variant: "tonal",
                    type: "warning",
                    color: "primary",
                    class: "mb-6"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Person Info ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, {
                            class: "mb-2 font-weight-medium",
                            for: "fn"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("First Name")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_text_field, {
                            variant: "outlined",
                            color: "primary",
                            id: "fn"
                          }),
                          createVNode(_component_v_label, {
                            class: "mb-2 font-weight-medium",
                            for: "sg"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Select Gender")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_select, {
                            items: gender.value,
                            "item-title": "gender",
                            id: "sg",
                            "item-value": "abbr",
                            "return-object": "",
                            "single-line": "",
                            variant: "outlined"
                          }, null, 8, ["items"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, {
                            class: "mb-2 font-weight-medium",
                            for: "ln"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Last Name")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_text_field, {
                            variant: "outlined",
                            color: "primary",
                            id: "ln"
                          }),
                          createVNode(_component_v_label, {
                            class: "mb-2 font-weight-medium",
                            for: "dob"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Date of Birth")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_text_field, {
                            color: "primary",
                            variant: "outlined",
                            id: "dob",
                            type: "date"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "mmb"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Membership")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_radio_group, {
                    modelValue: inline.value,
                    "onUpdate:modelValue": ($event) => inline.value = $event,
                    inline: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_radio, {
                        label: "Free",
                        value: "radio-1",
                        color: "primary",
                        id: "mmb"
                      }),
                      createVNode(_component_v_radio, {
                        label: "Paid",
                        value: "radio-2",
                        color: "primary",
                        id: "mmb2"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_alert, {
                    variant: "tonal",
                    type: "warning",
                    color: "primary",
                    class: "mb-6"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Address ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, {
                            class: "mb-2 font-weight-medium",
                            for: "str"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Street")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_text_field, {
                            variant: "outlined",
                            color: "primary",
                            id: "str",
                            "hide-details": ""
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, {
                            class: "mb-2 font-weight-medium",
                            for: "ct"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("City")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_text_field, {
                            variant: "outlined",
                            color: "primary",
                            id: "ct"
                          }),
                          createVNode(_component_v_label, {
                            class: "mb-2 font-weight-medium",
                            for: "pc"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Post Code")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_text_field, {
                            variant: "outlined",
                            color: "primary",
                            id: "pc"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, {
                            class: "mb-2 font-weight-medium",
                            for: "stt"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("State")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_text_field, {
                            variant: "outlined",
                            color: "primary",
                            id: "stt"
                          }),
                          createVNode(_component_v_label, {
                            class: "mb-2 font-weight-medium",
                            for: "cnt"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Country")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_select, {
                            items: country.value,
                            "item-title": "country",
                            "item-value": "abbr",
                            "return-object": "",
                            "single-line": "",
                            variant: "outlined",
                            id: "cnt"
                          }, null, 8, ["items"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_btn, {
                    color: "error",
                    class: "mr-3",
                    rounded: "pill"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Cancel")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_btn, {
                    color: "primary",
                    rounded: "pill"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Submit")
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-layouts/BasicHeaderForm.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_label = resolveComponent("v-label");
  const _component_v_text_field = resolveComponent("v-text-field");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_row, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_col, {
          cols: "12",
          lg: "12"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_label, {
                class: "mb-2 font-weight-medium",
                for: "dnm"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Name`);
                  } else {
                    return [
                      createTextVNode("Name")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                variant: "outlined",
                color: "primary",
                id: "dnm",
                disabled: ""
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_label, {
                class: "mb-2 font-weight-medium",
                for: "dml"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Email`);
                  } else {
                    return [
                      createTextVNode("Email")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                hint: "We'll never share your email with anyone else.",
                "persistent-hint": "",
                variant: "outlined",
                placeholder: "Enter email",
                disabled: "",
                color: "primary",
                id: "dml"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_label, {
                class: "mb-2 font-weight-medium mt-5",
                for: "dpl"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Password`);
                  } else {
                    return [
                      createTextVNode("Password")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                "persistent-hint": "",
                variant: "outlined",
                "hide-details": "",
                type: "password",
                placeholder: "Enter password",
                color: "primary",
                disabled: "",
                id: "dpl"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_btn, {
                color: "primary",
                disabled: "",
                class: "mt-6",
                rounded: "pill"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Submit`);
                  } else {
                    return [
                      createTextVNode("Submit")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_label, {
                  class: "mb-2 font-weight-medium",
                  for: "dnm"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Name")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_text_field, {
                  variant: "outlined",
                  color: "primary",
                  id: "dnm",
                  disabled: ""
                }),
                createVNode(_component_v_label, {
                  class: "mb-2 font-weight-medium",
                  for: "dml"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Email")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_text_field, {
                  hint: "We'll never share your email with anyone else.",
                  "persistent-hint": "",
                  variant: "outlined",
                  placeholder: "Enter email",
                  disabled: "",
                  color: "primary",
                  id: "dml"
                }),
                createVNode(_component_v_label, {
                  class: "mb-2 font-weight-medium mt-5",
                  for: "dpl"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Password")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_text_field, {
                  "persistent-hint": "",
                  variant: "outlined",
                  "hide-details": "",
                  type: "password",
                  placeholder: "Enter password",
                  color: "primary",
                  disabled: "",
                  id: "dpl"
                }),
                createVNode(_component_v_btn, {
                  color: "primary",
                  disabled: "",
                  class: "mt-6",
                  rounded: "pill"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Submit")
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
            lg: "12"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_label, {
                class: "mb-2 font-weight-medium",
                for: "dnm"
              }, {
                default: withCtx(() => [
                  createTextVNode("Name")
                ]),
                _: 1
              }),
              createVNode(_component_v_text_field, {
                variant: "outlined",
                color: "primary",
                id: "dnm",
                disabled: ""
              }),
              createVNode(_component_v_label, {
                class: "mb-2 font-weight-medium",
                for: "dml"
              }, {
                default: withCtx(() => [
                  createTextVNode("Email")
                ]),
                _: 1
              }),
              createVNode(_component_v_text_field, {
                hint: "We'll never share your email with anyone else.",
                "persistent-hint": "",
                variant: "outlined",
                placeholder: "Enter email",
                disabled: "",
                color: "primary",
                id: "dml"
              }),
              createVNode(_component_v_label, {
                class: "mb-2 font-weight-medium mt-5",
                for: "dpl"
              }, {
                default: withCtx(() => [
                  createTextVNode("Password")
                ]),
                _: 1
              }),
              createVNode(_component_v_text_field, {
                "persistent-hint": "",
                variant: "outlined",
                "hide-details": "",
                type: "password",
                placeholder: "Enter password",
                color: "primary",
                disabled: "",
                id: "dpl"
              }),
              createVNode(_component_v_btn, {
                color: "primary",
                disabled: "",
                class: "mt-6",
                rounded: "pill"
              }, {
                default: withCtx(() => [
                  createTextVNode("Submit")
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
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-layouts/DisabledForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const DisabledForm = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FormLeftIcon",
  __ssrInlineRender: true,
  setup(__props) {
    const checkbox1 = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_label = resolveComponent("v-label");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_label, {
        class: "mb-2 font-weight-medium",
        for: "lunm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Username`);
          } else {
            return [
              createTextVNode("Username")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_text_field, {
        variant: "outlined",
        type: "text",
        id: "lunm",
        placeholder: "Username",
        color: "primary"
      }, {
        "prepend-inner": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(UserIcon), {
              "stroke-width": "1.5",
              size: "22",
              class: "text-medium-emphasis"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(UserIcon), {
                "stroke-width": "1.5",
                size: "22",
                class: "text-medium-emphasis"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_label, {
        class: "mb-2 font-weight-medium",
        for: "lmail"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Email`);
          } else {
            return [
              createTextVNode("Email")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_text_field, {
        variant: "outlined",
        type: "email",
        id: "lmail",
        placeholder: "Email",
        color: "primary"
      }, {
        "prepend-inner": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MailIcon), {
              "stroke-width": "1.5",
              size: "22",
              class: "text-medium-emphasis"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MailIcon), {
                "stroke-width": "1.5",
                size: "22",
                class: "text-medium-emphasis"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_label, {
        class: "mb-2 font-weight-medium",
        for: "lpwd"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Password`);
          } else {
            return [
              createTextVNode("Password")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_text_field, {
        variant: "outlined",
        type: "password",
        id: "lpwd",
        placeholder: "Password",
        color: "primary"
      }, {
        "prepend-inner": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(LockIcon), {
              "stroke-width": "1.5",
              size: "22",
              class: "text-medium-emphasis"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(LockIcon), {
                "stroke-width": "1.5",
                size: "22",
                class: "text-medium-emphasis"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_label, {
        class: "mb-2 font-weight-medium",
        for: "lcpwd"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Confirm Password`);
          } else {
            return [
              createTextVNode("Confirm Password")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_text_field, {
        variant: "outlined",
        type: "password",
        id: "lcpwd",
        color: "primary",
        "hide-details": "",
        placeholder: "Confirm Password"
      }, {
        "prepend-inner": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(LockIcon), {
              "stroke-width": "1.5",
              size: "22",
              class: "text-medium-emphasis"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(LockIcon), {
                "stroke-width": "1.5",
                size: "22",
                class: "text-medium-emphasis"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="my-3">`);
      _push(ssrRenderComponent(_component_v_checkbox, {
        density: "compact",
        modelValue: checkbox1.value,
        "onUpdate:modelValue": ($event) => checkbox1.value = $event,
        "hide-details": "",
        color: "primary",
        label: "Check Me Out!"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_v_btn, {
        color: "primary",
        class: "mr-3",
        rounded: "pill"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Submit`);
          } else {
            return [
              createTextVNode("Submit")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        color: "error",
        class: "mr-3",
        rounded: "pill"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cancel`);
          } else {
            return [
              createTextVNode("Cancel")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-layouts/FormLeftIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormRightIcon",
  __ssrInlineRender: true,
  setup(__props) {
    const checkbox1 = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_label = resolveComponent("v-label");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_label, {
        class: "mb-2 font-weight-medium",
        for: "runm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Username`);
          } else {
            return [
              createTextVNode("Username")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_text_field, {
        variant: "outlined",
        type: "text",
        placeholder: "Username",
        color: "primary",
        id: "runm"
      }, {
        "append-inner": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(UserIcon), {
              "stroke-width": "1.5",
              size: "22",
              class: "text-medium-emphasis"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(UserIcon), {
                "stroke-width": "1.5",
                size: "22",
                class: "text-medium-emphasis"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_label, {
        class: "mb-2 font-weight-medium",
        for: "reml"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Email`);
          } else {
            return [
              createTextVNode("Email")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_text_field, {
        variant: "outlined",
        type: "email",
        placeholder: "Email",
        color: "primary",
        id: "reml"
      }, {
        "append-inner": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MailIcon), {
              "stroke-width": "1.5",
              size: "22",
              class: "text-medium-emphasis"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MailIcon), {
                "stroke-width": "1.5",
                size: "22",
                class: "text-medium-emphasis"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_label, {
        class: "mb-2 font-weight-medium",
        for: "rpwd"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Password`);
          } else {
            return [
              createTextVNode("Password")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_text_field, {
        variant: "outlined",
        type: "password",
        placeholder: "Password",
        color: "primary",
        id: "rpwd"
      }, {
        "append-inner": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(LockIcon), {
              "stroke-width": "1.5",
              size: "22",
              class: "text-medium-emphasis"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(LockIcon), {
                "stroke-width": "1.5",
                size: "22",
                class: "text-medium-emphasis"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_label, {
        class: "mb-2 font-weight-medium",
        for: "crpwd"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Confirm Password`);
          } else {
            return [
              createTextVNode("Confirm Password")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_text_field, {
        variant: "outlined",
        type: "password",
        color: "primary",
        "hide-details": "",
        placeholder: "Confirm Password",
        id: "crpwd"
      }, {
        "append-inner": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(LockIcon), {
              "stroke-width": "1.5",
              size: "22",
              class: "text-medium-emphasis"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(LockIcon), {
                "stroke-width": "1.5",
                size: "22",
                class: "text-medium-emphasis"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="my-3">`);
      _push(ssrRenderComponent(_component_v_checkbox, {
        density: "compact",
        modelValue: checkbox1.value,
        "onUpdate:modelValue": ($event) => checkbox1.value = $event,
        "hide-details": "",
        color: "primary",
        label: "Check Me Out!"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_v_btn, {
        color: "primary",
        class: "mr-3",
        rounded: "pill"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Submit`);
          } else {
            return [
              createTextVNode("Submit")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        color: "error",
        class: "mr-3",
        rounded: "pill"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cancel`);
          } else {
            return [
              createTextVNode("Cancel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-layouts/FormRightIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Form-Layouts",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Form Layout" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Form layout",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$8, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$9, { title: "Ordinary Form" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$7, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$7)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$9, {
                    title: "Input Variants",
                    class: "mt-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(InputVarients, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(InputVarients)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$9, {
                    title: "Default Form",
                    class: "mt-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$5, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$5)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$9, {
                    title: "Basic Header Form",
                    class: "mt-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$4, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$4)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$9, {
                    title: "Disabled Form",
                    class: "mt-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(DisabledForm, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(DisabledForm)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$9, { title: "Ordinary Form" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$7)
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$9, {
                      title: "Input Variants",
                      class: "mt-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(InputVarients)
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$9, {
                      title: "Default Form",
                      class: "mt-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$5)
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$9, {
                      title: "Basic Header Form",
                      class: "mt-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$4)
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$9, {
                      title: "Disabled Form",
                      class: "mt-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(DisabledForm)
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
                  _push3(ssrRenderComponent(_sfc_main$9, { title: "Form with Left Icon" }, {
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
                    createVNode(_sfc_main$9, { title: "Form with Left Icon" }, {
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
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$9, { title: "Form with Right Icon" }, {
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
                    createVNode(_sfc_main$9, { title: "Form with Right Icon" }, {
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
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$9, { title: "Ordinary Form" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$7)
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$9, {
                    title: "Input Variants",
                    class: "mt-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(InputVarients)
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$9, {
                    title: "Default Form",
                    class: "mt-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$5)
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$9, {
                    title: "Basic Header Form",
                    class: "mt-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$4)
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$9, {
                    title: "Disabled Form",
                    class: "mt-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(DisabledForm)
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
                  createVNode(_sfc_main$9, { title: "Form with Left Icon" }, {
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
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$9, { title: "Form with Right Icon" }, {
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
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forms/Form-Layouts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Form-Layouts-C3Znxptt.js.map
