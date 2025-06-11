import { defineComponent, ref, resolveComponent, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./UiParentCard-DhlYzLUl.js";
import { _ as _sfc_main$2 } from "./UiChildCard-Xt7dDOL6.js";
import { MailIcon, EyeIcon, LockIcon } from "vue-tabler-icons";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TextField",
  __ssrInlineRender: true,
  setup(__props) {
    ref({ title: "Textfield" });
    const caption_email1 = ref("demo@company.com");
    const caption_email2 = ref("demo@company.com");
    const caption_email3 = ref("demo@company.com");
    const validate_email1 = ref("demo.sd");
    const validate_email2 = ref("demo.sd");
    const multiline2 = ref("Default Value");
    const select_sm = ref(["Small"]);
    ref("Default");
    const full_text = ref("Default");
    const some_imp1 = ref("Default");
    const some_imp2 = ref("Default");
    const some_imp3 = ref("Default");
    const rules = ref({
      required: (value) => !!value || "Required.",
      counter: (value) => value.length <= 20 || "Max 20 characters",
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    });
    const items = ref(["None", "demo@company.com", "Judiya@company.com", "taju_diya@company.com"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_v_select = resolveComponent("v-select");
      _push(ssrRenderComponent(_component_v_row, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, { title: "Textfield" }, {
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
                                    _push6(ssrRenderComponent(_sfc_main$2, { title: "Variant" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            label: "Outlined",
                                            color: "primary",
                                            placeholder: "Placeholder",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            label: "Filled",
                                            color: "primary",
                                            placeholder: "Placeholder",
                                            variant: "filled"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            label: "Underlined",
                                            color: "primary",
                                            placeholder: "Placeholder",
                                            variant: "underlined"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", null, [
                                              createVNode(_component_v_text_field, {
                                                label: "Outlined",
                                                color: "primary",
                                                placeholder: "Placeholder",
                                                variant: "outlined"
                                              }),
                                              createVNode(_component_v_text_field, {
                                                label: "Filled",
                                                color: "primary",
                                                placeholder: "Placeholder",
                                                variant: "filled"
                                              }),
                                              createVNode(_component_v_text_field, {
                                                label: "Underlined",
                                                color: "primary",
                                                placeholder: "Placeholder",
                                                variant: "underlined"
                                              })
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$2, { title: "Variant" }, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode(_component_v_text_field, {
                                              label: "Outlined",
                                              color: "primary",
                                              placeholder: "Placeholder",
                                              variant: "outlined"
                                            }),
                                            createVNode(_component_v_text_field, {
                                              label: "Filled",
                                              color: "primary",
                                              placeholder: "Placeholder",
                                              variant: "filled"
                                            }),
                                            createVNode(_component_v_text_field, {
                                              label: "Underlined",
                                              color: "primary",
                                              placeholder: "Placeholder",
                                              variant: "underlined"
                                            })
                                          ])
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
                                    _push6(ssrRenderComponent(_sfc_main$2, { title: "General" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            color: "primary",
                                            placeholder: "Email Address",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            color: "primary",
                                            placeholder: "Email Address",
                                            value: "demo@company.com",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            color: "primary",
                                            placeholder: "demo@company.com",
                                            variant: "outlined",
                                            disabled: ""
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", null, [
                                              createVNode(_component_v_text_field, {
                                                color: "primary",
                                                placeholder: "Email Address",
                                                variant: "outlined"
                                              }),
                                              createVNode(_component_v_text_field, {
                                                color: "primary",
                                                placeholder: "Email Address",
                                                value: "demo@company.com",
                                                variant: "outlined"
                                              }),
                                              createVNode(_component_v_text_field, {
                                                color: "primary",
                                                placeholder: "demo@company.com",
                                                variant: "outlined",
                                                disabled: ""
                                              })
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$2, { title: "General" }, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              placeholder: "Email Address",
                                              variant: "outlined"
                                            }),
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              placeholder: "Email Address",
                                              value: "demo@company.com",
                                              variant: "outlined"
                                            }),
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              placeholder: "demo@company.com",
                                              variant: "outlined",
                                              disabled: ""
                                            })
                                          ])
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
                                    _push6(ssrRenderComponent(_sfc_main$2, { title: "With Caption" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            color: "primary",
                                            modelValue: caption_email1.value,
                                            "onUpdate:modelValue": ($event) => caption_email1.value = $event,
                                            label: "Email Address",
                                            variant: "outlined",
                                            placeholder: "email address"
                                          }, {
                                            "prepend-inner": withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(MailIcon), {
                                                  "stroke-width": "1.5",
                                                  size: "22"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(MailIcon), {
                                                    "stroke-width": "1.5",
                                                    size: "22"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            color: "primary",
                                            modelValue: caption_email2.value,
                                            "onUpdate:modelValue": ($event) => caption_email2.value = $event,
                                            label: "Email Address",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            color: "primary",
                                            modelValue: caption_email3.value,
                                            "onUpdate:modelValue": ($event) => caption_email3.value = $event,
                                            label: "Email Address",
                                            variant: "outlined"
                                          }, {
                                            "append-inner": withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(MailIcon), {
                                                  "stroke-width": "1.5",
                                                  size: "22"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(MailIcon), {
                                                    "stroke-width": "1.5",
                                                    size: "22"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              modelValue: caption_email1.value,
                                              "onUpdate:modelValue": ($event) => caption_email1.value = $event,
                                              label: "Email Address",
                                              variant: "outlined",
                                              placeholder: "email address"
                                            }, {
                                              "prepend-inner": withCtx(() => [
                                                createVNode(unref(MailIcon), {
                                                  "stroke-width": "1.5",
                                                  size: "22"
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              modelValue: caption_email2.value,
                                              "onUpdate:modelValue": ($event) => caption_email2.value = $event,
                                              label: "Email Address",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              modelValue: caption_email3.value,
                                              "onUpdate:modelValue": ($event) => caption_email3.value = $event,
                                              label: "Email Address",
                                              variant: "outlined"
                                            }, {
                                              "append-inner": withCtx(() => [
                                                createVNode(unref(MailIcon), {
                                                  "stroke-width": "1.5",
                                                  size: "22"
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$2, { title: "With Caption" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            modelValue: caption_email1.value,
                                            "onUpdate:modelValue": ($event) => caption_email1.value = $event,
                                            label: "Email Address",
                                            variant: "outlined",
                                            placeholder: "email address"
                                          }, {
                                            "prepend-inner": withCtx(() => [
                                              createVNode(unref(MailIcon), {
                                                "stroke-width": "1.5",
                                                size: "22"
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            modelValue: caption_email2.value,
                                            "onUpdate:modelValue": ($event) => caption_email2.value = $event,
                                            label: "Email Address",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            modelValue: caption_email3.value,
                                            "onUpdate:modelValue": ($event) => caption_email3.value = $event,
                                            label: "Email Address",
                                            variant: "outlined"
                                          }, {
                                            "append-inner": withCtx(() => [
                                              createVNode(unref(MailIcon), {
                                                "stroke-width": "1.5",
                                                size: "22"
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$2, { title: "With Validation" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            color: "error",
                                            modelValue: validate_email1.value,
                                            "onUpdate:modelValue": ($event) => validate_email1.value = $event,
                                            rules: [rules.value.required, rules.value.email],
                                            label: "Email Address",
                                            variant: "outlined",
                                            placeholder: "demo",
                                            error: ""
                                          }, {
                                            "prepend-inner": withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(MailIcon), {
                                                  "stroke-width": "1.5",
                                                  size: "22"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(MailIcon), {
                                                    "stroke-width": "1.5",
                                                    size: "22"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            color: "error",
                                            error: "",
                                            modelValue: validate_email2.value,
                                            "onUpdate:modelValue": ($event) => validate_email2.value = $event,
                                            rules: [rules.value.required, rules.value.email],
                                            label: "Email Address",
                                            variant: "outlined",
                                            placeholder: "demo"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            color: "error",
                                            label: "Email Address",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_text_field, {
                                              color: "error",
                                              modelValue: validate_email1.value,
                                              "onUpdate:modelValue": ($event) => validate_email1.value = $event,
                                              rules: [rules.value.required, rules.value.email],
                                              label: "Email Address",
                                              variant: "outlined",
                                              placeholder: "demo",
                                              error: ""
                                            }, {
                                              "prepend-inner": withCtx(() => [
                                                createVNode(unref(MailIcon), {
                                                  "stroke-width": "1.5",
                                                  size: "22"
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                            createVNode(_component_v_text_field, {
                                              color: "error",
                                              error: "",
                                              modelValue: validate_email2.value,
                                              "onUpdate:modelValue": ($event) => validate_email2.value = $event,
                                              rules: [rules.value.required, rules.value.email],
                                              label: "Email Address",
                                              variant: "outlined",
                                              placeholder: "demo"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                            createVNode(_component_v_text_field, {
                                              color: "error",
                                              label: "Email Address",
                                              variant: "outlined"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$2, { title: "With Validation" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            color: "error",
                                            modelValue: validate_email1.value,
                                            "onUpdate:modelValue": ($event) => validate_email1.value = $event,
                                            rules: [rules.value.required, rules.value.email],
                                            label: "Email Address",
                                            variant: "outlined",
                                            placeholder: "demo",
                                            error: ""
                                          }, {
                                            "prepend-inner": withCtx(() => [
                                              createVNode(unref(MailIcon), {
                                                "stroke-width": "1.5",
                                                size: "22"
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                          createVNode(_component_v_text_field, {
                                            color: "error",
                                            error: "",
                                            modelValue: validate_email2.value,
                                            "onUpdate:modelValue": ($event) => validate_email2.value = $event,
                                            rules: [rules.value.required, rules.value.email],
                                            label: "Email Address",
                                            variant: "outlined",
                                            placeholder: "demo"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                          createVNode(_component_v_text_field, {
                                            color: "error",
                                            label: "Email Address",
                                            variant: "outlined"
                                          })
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
                                    _push6(ssrRenderComponent(_sfc_main$2, { title: "With Icon & Adornments" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            variant: "outlined",
                                            color: "primary",
                                            placeholder: "Email address"
                                          }, {
                                            "prepend-inner": withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(MailIcon), {
                                                  "stroke-width": "1.5",
                                                  size: "22"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(MailIcon), {
                                                    "stroke-width": "1.5",
                                                    size: "22"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            variant: "outlined",
                                            color: "primary",
                                            placeholder: "Email address"
                                          }, {
                                            "prepend-inner": withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(LockIcon), {
                                                  "stroke-width": "1.5",
                                                  size: "22"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(LockIcon), {
                                                    "stroke-width": "1.5",
                                                    size: "22"
                                                  })
                                                ];
                                              }
                                            }),
                                            "append-inner": withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(EyeIcon), {
                                                  "stroke-width": "1.5",
                                                  size: "22"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(EyeIcon), {
                                                    "stroke-width": "1.5",
                                                    size: "22"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            placeholder: "John Deo",
                                            color: "primary",
                                            variant: "outlined"
                                          }, {
                                            "prepend-inner": withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<span class="v-card-subtitle px-0"${_scopeId7}>Mr</span>`);
                                                _push8(ssrRenderComponent(_component_v_divider, {
                                                  class: "ml-3 my-3 mt-n1",
                                                  vertical: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode("span", { class: "v-card-subtitle px-0" }, "Mr"),
                                                  createVNode(_component_v_divider, {
                                                    class: "ml-3 my-3 mt-n1",
                                                    vertical: ""
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            placeholder: "Password",
                                            color: "primary",
                                            variant: "outlined"
                                          }, {
                                            "append-inner": withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_divider, {
                                                  class: "mr-3 my-3 mt-n1",
                                                  vertical: ""
                                                }, null, _parent8, _scopeId7));
                                                _push8(`<span class="v-card-subtitle px-0"${_scopeId7}>.com</span>`);
                                              } else {
                                                return [
                                                  createVNode(_component_v_divider, {
                                                    class: "mr-3 my-3 mt-n1",
                                                    vertical: ""
                                                  }),
                                                  createVNode("span", { class: "v-card-subtitle px-0" }, ".com")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_text_field, {
                                              variant: "outlined",
                                              color: "primary",
                                              placeholder: "Email address"
                                            }, {
                                              "prepend-inner": withCtx(() => [
                                                createVNode(unref(MailIcon), {
                                                  "stroke-width": "1.5",
                                                  size: "22"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              variant: "outlined",
                                              color: "primary",
                                              placeholder: "Email address"
                                            }, {
                                              "prepend-inner": withCtx(() => [
                                                createVNode(unref(LockIcon), {
                                                  "stroke-width": "1.5",
                                                  size: "22"
                                                })
                                              ]),
                                              "append-inner": withCtx(() => [
                                                createVNode(unref(EyeIcon), {
                                                  "stroke-width": "1.5",
                                                  size: "22"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              placeholder: "John Deo",
                                              color: "primary",
                                              variant: "outlined"
                                            }, {
                                              "prepend-inner": withCtx(() => [
                                                createVNode("span", { class: "v-card-subtitle px-0" }, "Mr"),
                                                createVNode(_component_v_divider, {
                                                  class: "ml-3 my-3 mt-n1",
                                                  vertical: ""
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              placeholder: "Password",
                                              color: "primary",
                                              variant: "outlined"
                                            }, {
                                              "append-inner": withCtx(() => [
                                                createVNode(_component_v_divider, {
                                                  class: "mr-3 my-3 mt-n1",
                                                  vertical: ""
                                                }),
                                                createVNode("span", { class: "v-card-subtitle px-0" }, ".com")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$2, { title: "With Icon & Adornments" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            variant: "outlined",
                                            color: "primary",
                                            placeholder: "Email address"
                                          }, {
                                            "prepend-inner": withCtx(() => [
                                              createVNode(unref(MailIcon), {
                                                "stroke-width": "1.5",
                                                size: "22"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            variant: "outlined",
                                            color: "primary",
                                            placeholder: "Email address"
                                          }, {
                                            "prepend-inner": withCtx(() => [
                                              createVNode(unref(LockIcon), {
                                                "stroke-width": "1.5",
                                                size: "22"
                                              })
                                            ]),
                                            "append-inner": withCtx(() => [
                                              createVNode(unref(EyeIcon), {
                                                "stroke-width": "1.5",
                                                size: "22"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            placeholder: "John Deo",
                                            color: "primary",
                                            variant: "outlined"
                                          }, {
                                            "prepend-inner": withCtx(() => [
                                              createVNode("span", { class: "v-card-subtitle px-0" }, "Mr"),
                                              createVNode(_component_v_divider, {
                                                class: "ml-3 my-3 mt-n1",
                                                vertical: ""
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            placeholder: "Password",
                                            color: "primary",
                                            variant: "outlined"
                                          }, {
                                            "append-inner": withCtx(() => [
                                              createVNode(_component_v_divider, {
                                                class: "mr-3 my-3 mt-n1",
                                                vertical: ""
                                              }),
                                              createVNode("span", { class: "v-card-subtitle px-0" }, ".com")
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$2, { title: "Multiline" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_textarea, {
                                            filled: "",
                                            "auto-grow": "",
                                            label: "Multiline Placeholder",
                                            rows: "1",
                                            "row-height": "20",
                                            color: "primary",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_textarea, {
                                            filled: "",
                                            "auto-grow": "",
                                            label: "Multiline Placeholder",
                                            variant: "outlined",
                                            rows: "4",
                                            color: "primary",
                                            modelValue: multiline2.value,
                                            "onUpdate:modelValue": ($event) => multiline2.value = $event
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_textarea, {
                                            clearable: "",
                                            "clear-icon": "mdi-close-circle",
                                            variant: "outlined",
                                            label: "Multiline Clearable",
                                            rows: "1",
                                            "row-height": "20",
                                            value: "This is clearable text.",
                                            color: "primary"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_textarea, {
                                              filled: "",
                                              "auto-grow": "",
                                              label: "Multiline Placeholder",
                                              rows: "1",
                                              "row-height": "20",
                                              color: "primary",
                                              variant: "outlined"
                                            }),
                                            createVNode(_component_v_textarea, {
                                              filled: "",
                                              "auto-grow": "",
                                              label: "Multiline Placeholder",
                                              variant: "outlined",
                                              rows: "4",
                                              color: "primary",
                                              modelValue: multiline2.value,
                                              "onUpdate:modelValue": ($event) => multiline2.value = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_textarea, {
                                              clearable: "",
                                              "clear-icon": "mdi-close-circle",
                                              variant: "outlined",
                                              label: "Multiline Clearable",
                                              rows: "1",
                                              "row-height": "20",
                                              value: "This is clearable text.",
                                              color: "primary"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$2, { title: "Multiline" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_textarea, {
                                            filled: "",
                                            "auto-grow": "",
                                            label: "Multiline Placeholder",
                                            rows: "1",
                                            "row-height": "20",
                                            color: "primary",
                                            variant: "outlined"
                                          }),
                                          createVNode(_component_v_textarea, {
                                            filled: "",
                                            "auto-grow": "",
                                            label: "Multiline Placeholder",
                                            variant: "outlined",
                                            rows: "4",
                                            color: "primary",
                                            modelValue: multiline2.value,
                                            "onUpdate:modelValue": ($event) => multiline2.value = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_textarea, {
                                            clearable: "",
                                            "clear-icon": "mdi-close-circle",
                                            variant: "outlined",
                                            label: "Multiline Clearable",
                                            rows: "1",
                                            "row-height": "20",
                                            value: "This is clearable text.",
                                            color: "primary"
                                          })
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
                                    _push6(ssrRenderComponent(_sfc_main$2, { title: "Select" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_select, {
                                            items: items.value,
                                            color: "primary",
                                            label: "Email Address",
                                            variant: "outlined",
                                            density: "comfortable"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_select, {
                                            items: items.value,
                                            color: "primary",
                                            label: "Email Address",
                                            variant: "outlined",
                                            density: "compact",
                                            modelValue: select_sm.value,
                                            "onUpdate:modelValue": ($event) => select_sm.value = $event,
                                            outlined: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_select, {
                                              items: items.value,
                                              color: "primary",
                                              label: "Email Address",
                                              variant: "outlined",
                                              density: "comfortable"
                                            }, null, 8, ["items"]),
                                            createVNode(_component_v_select, {
                                              items: items.value,
                                              color: "primary",
                                              label: "Email Address",
                                              variant: "outlined",
                                              density: "compact",
                                              modelValue: select_sm.value,
                                              "onUpdate:modelValue": ($event) => select_sm.value = $event,
                                              outlined: ""
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$2, { title: "Select" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            items: items.value,
                                            color: "primary",
                                            label: "Email Address",
                                            variant: "outlined",
                                            density: "comfortable"
                                          }, null, 8, ["items"]),
                                          createVNode(_component_v_select, {
                                            items: items.value,
                                            color: "primary",
                                            label: "Email Address",
                                            variant: "outlined",
                                            density: "compact",
                                            modelValue: select_sm.value,
                                            "onUpdate:modelValue": ($event) => select_sm.value = $event,
                                            outlined: ""
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
                                    _push6(ssrRenderComponent(_sfc_main$2, { title: "Size" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            variant: "outlined",
                                            color: "primary",
                                            placeholder: "Default",
                                            label: "Default"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            variant: "outlined",
                                            color: "primary",
                                            placeholder: "Default",
                                            density: "compact"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_text_field, {
                                              variant: "outlined",
                                              color: "primary",
                                              placeholder: "Default",
                                              label: "Default"
                                            }),
                                            createVNode(_component_v_text_field, {
                                              variant: "outlined",
                                              color: "primary",
                                              placeholder: "Default",
                                              density: "compact"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$2, { title: "Size" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            variant: "outlined",
                                            color: "primary",
                                            placeholder: "Default",
                                            label: "Default"
                                          }),
                                          createVNode(_component_v_text_field, {
                                            variant: "outlined",
                                            color: "primary",
                                            placeholder: "Default",
                                            density: "compact"
                                          })
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
                                    _push6(ssrRenderComponent(_sfc_main$2, { title: "Layout" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            label: "Label",
                                            hint: "Full Width!",
                                            modelValue: full_text.value,
                                            "onUpdate:modelValue": ($event) => full_text.value = $event,
                                            "persistent-hint": "",
                                            variant: "outlined",
                                            color: "primary"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_row, { class: "mt-5" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "12",
                                                  lg: "4"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        label: "None",
                                                        hint: "Some important text",
                                                        modelValue: some_imp1.value,
                                                        "onUpdate:modelValue": ($event) => some_imp1.value = $event,
                                                        "persistent-hint": "",
                                                        variant: "outlined",
                                                        color: "primary"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          label: "None",
                                                          hint: "Some important text",
                                                          modelValue: some_imp1.value,
                                                          "onUpdate:modelValue": ($event) => some_imp1.value = $event,
                                                          "persistent-hint": "",
                                                          variant: "outlined",
                                                          color: "primary"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "12",
                                                  lg: "4"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        label: "Dense",
                                                        hint: "Some important text",
                                                        modelValue: some_imp2.value,
                                                        "onUpdate:modelValue": ($event) => some_imp2.value = $event,
                                                        "persistent-hint": "",
                                                        variant: "outlined",
                                                        color: "primary",
                                                        density: "compact"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          label: "Dense",
                                                          hint: "Some important text",
                                                          modelValue: some_imp2.value,
                                                          "onUpdate:modelValue": ($event) => some_imp2.value = $event,
                                                          "persistent-hint": "",
                                                          variant: "outlined",
                                                          color: "primary",
                                                          density: "compact"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "12",
                                                  lg: "4"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        label: "Normal",
                                                        hint: "Some important text",
                                                        modelValue: some_imp3.value,
                                                        "onUpdate:modelValue": ($event) => some_imp3.value = $event,
                                                        "persistent-hint": "",
                                                        variant: "outlined",
                                                        color: "primary"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          label: "Normal",
                                                          hint: "Some important text",
                                                          modelValue: some_imp3.value,
                                                          "onUpdate:modelValue": ($event) => some_imp3.value = $event,
                                                          "persistent-hint": "",
                                                          variant: "outlined",
                                                          color: "primary"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    lg: "4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        label: "None",
                                                        hint: "Some important text",
                                                        modelValue: some_imp1.value,
                                                        "onUpdate:modelValue": ($event) => some_imp1.value = $event,
                                                        "persistent-hint": "",
                                                        variant: "outlined",
                                                        color: "primary"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    lg: "4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        label: "Dense",
                                                        hint: "Some important text",
                                                        modelValue: some_imp2.value,
                                                        "onUpdate:modelValue": ($event) => some_imp2.value = $event,
                                                        "persistent-hint": "",
                                                        variant: "outlined",
                                                        color: "primary",
                                                        density: "compact"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    lg: "4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        label: "Normal",
                                                        hint: "Some important text",
                                                        modelValue: some_imp3.value,
                                                        "onUpdate:modelValue": ($event) => some_imp3.value = $event,
                                                        "persistent-hint": "",
                                                        variant: "outlined",
                                                        color: "primary"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_text_field, {
                                              label: "Label",
                                              hint: "Full Width!",
                                              modelValue: full_text.value,
                                              "onUpdate:modelValue": ($event) => full_text.value = $event,
                                              "persistent-hint": "",
                                              variant: "outlined",
                                              color: "primary"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_row, { class: "mt-5" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  lg: "4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      label: "None",
                                                      hint: "Some important text",
                                                      modelValue: some_imp1.value,
                                                      "onUpdate:modelValue": ($event) => some_imp1.value = $event,
                                                      "persistent-hint": "",
                                                      variant: "outlined",
                                                      color: "primary"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  lg: "4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      label: "Dense",
                                                      hint: "Some important text",
                                                      modelValue: some_imp2.value,
                                                      "onUpdate:modelValue": ($event) => some_imp2.value = $event,
                                                      "persistent-hint": "",
                                                      variant: "outlined",
                                                      color: "primary",
                                                      density: "compact"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  lg: "4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      label: "Normal",
                                                      hint: "Some important text",
                                                      modelValue: some_imp3.value,
                                                      "onUpdate:modelValue": ($event) => some_imp3.value = $event,
                                                      "persistent-hint": "",
                                                      variant: "outlined",
                                                      color: "primary"
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$2, { title: "Layout" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            label: "Label",
                                            hint: "Full Width!",
                                            modelValue: full_text.value,
                                            "onUpdate:modelValue": ($event) => full_text.value = $event,
                                            "persistent-hint": "",
                                            variant: "outlined",
                                            color: "primary"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_row, { class: "mt-5" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                lg: "4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    label: "None",
                                                    hint: "Some important text",
                                                    modelValue: some_imp1.value,
                                                    "onUpdate:modelValue": ($event) => some_imp1.value = $event,
                                                    "persistent-hint": "",
                                                    variant: "outlined",
                                                    color: "primary"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                lg: "4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    label: "Dense",
                                                    hint: "Some important text",
                                                    modelValue: some_imp2.value,
                                                    "onUpdate:modelValue": ($event) => some_imp2.value = $event,
                                                    "persistent-hint": "",
                                                    variant: "outlined",
                                                    color: "primary",
                                                    density: "compact"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                lg: "4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    label: "Normal",
                                                    hint: "Some important text",
                                                    modelValue: some_imp3.value,
                                                    "onUpdate:modelValue": ($event) => some_imp3.value = $event,
                                                    "persistent-hint": "",
                                                    variant: "outlined",
                                                    color: "primary"
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$2, { title: "Variant" }, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode(_component_v_text_field, {
                                            label: "Outlined",
                                            color: "primary",
                                            placeholder: "Placeholder",
                                            variant: "outlined"
                                          }),
                                          createVNode(_component_v_text_field, {
                                            label: "Filled",
                                            color: "primary",
                                            placeholder: "Placeholder",
                                            variant: "filled"
                                          }),
                                          createVNode(_component_v_text_field, {
                                            label: "Underlined",
                                            color: "primary",
                                            placeholder: "Placeholder",
                                            variant: "underlined"
                                          })
                                        ])
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
                                    createVNode(_sfc_main$2, { title: "General" }, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            placeholder: "Email Address",
                                            variant: "outlined"
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            placeholder: "Email Address",
                                            value: "demo@company.com",
                                            variant: "outlined"
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            placeholder: "demo@company.com",
                                            variant: "outlined",
                                            disabled: ""
                                          })
                                        ])
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
                                    createVNode(_sfc_main$2, { title: "With Caption" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          modelValue: caption_email1.value,
                                          "onUpdate:modelValue": ($event) => caption_email1.value = $event,
                                          label: "Email Address",
                                          variant: "outlined",
                                          placeholder: "email address"
                                        }, {
                                          "prepend-inner": withCtx(() => [
                                            createVNode(unref(MailIcon), {
                                              "stroke-width": "1.5",
                                              size: "22"
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          modelValue: caption_email2.value,
                                          "onUpdate:modelValue": ($event) => caption_email2.value = $event,
                                          label: "Email Address",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          modelValue: caption_email3.value,
                                          "onUpdate:modelValue": ($event) => caption_email3.value = $event,
                                          label: "Email Address",
                                          variant: "outlined"
                                        }, {
                                          "append-inner": withCtx(() => [
                                            createVNode(unref(MailIcon), {
                                              "stroke-width": "1.5",
                                              size: "22"
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
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
                                    createVNode(_sfc_main$2, { title: "With Validation" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          color: "error",
                                          modelValue: validate_email1.value,
                                          "onUpdate:modelValue": ($event) => validate_email1.value = $event,
                                          rules: [rules.value.required, rules.value.email],
                                          label: "Email Address",
                                          variant: "outlined",
                                          placeholder: "demo",
                                          error: ""
                                        }, {
                                          "prepend-inner": withCtx(() => [
                                            createVNode(unref(MailIcon), {
                                              "stroke-width": "1.5",
                                              size: "22"
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                        createVNode(_component_v_text_field, {
                                          color: "error",
                                          error: "",
                                          modelValue: validate_email2.value,
                                          "onUpdate:modelValue": ($event) => validate_email2.value = $event,
                                          rules: [rules.value.required, rules.value.email],
                                          label: "Email Address",
                                          variant: "outlined",
                                          placeholder: "demo"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                        createVNode(_component_v_text_field, {
                                          color: "error",
                                          label: "Email Address",
                                          variant: "outlined"
                                        })
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
                                    createVNode(_sfc_main$2, { title: "With Icon & Adornments" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          variant: "outlined",
                                          color: "primary",
                                          placeholder: "Email address"
                                        }, {
                                          "prepend-inner": withCtx(() => [
                                            createVNode(unref(MailIcon), {
                                              "stroke-width": "1.5",
                                              size: "22"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          variant: "outlined",
                                          color: "primary",
                                          placeholder: "Email address"
                                        }, {
                                          "prepend-inner": withCtx(() => [
                                            createVNode(unref(LockIcon), {
                                              "stroke-width": "1.5",
                                              size: "22"
                                            })
                                          ]),
                                          "append-inner": withCtx(() => [
                                            createVNode(unref(EyeIcon), {
                                              "stroke-width": "1.5",
                                              size: "22"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          placeholder: "John Deo",
                                          color: "primary",
                                          variant: "outlined"
                                        }, {
                                          "prepend-inner": withCtx(() => [
                                            createVNode("span", { class: "v-card-subtitle px-0" }, "Mr"),
                                            createVNode(_component_v_divider, {
                                              class: "ml-3 my-3 mt-n1",
                                              vertical: ""
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          placeholder: "Password",
                                          color: "primary",
                                          variant: "outlined"
                                        }, {
                                          "append-inner": withCtx(() => [
                                            createVNode(_component_v_divider, {
                                              class: "mr-3 my-3 mt-n1",
                                              vertical: ""
                                            }),
                                            createVNode("span", { class: "v-card-subtitle px-0" }, ".com")
                                          ]),
                                          _: 1
                                        })
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
                                    createVNode(_sfc_main$2, { title: "Multiline" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_textarea, {
                                          filled: "",
                                          "auto-grow": "",
                                          label: "Multiline Placeholder",
                                          rows: "1",
                                          "row-height": "20",
                                          color: "primary",
                                          variant: "outlined"
                                        }),
                                        createVNode(_component_v_textarea, {
                                          filled: "",
                                          "auto-grow": "",
                                          label: "Multiline Placeholder",
                                          variant: "outlined",
                                          rows: "4",
                                          color: "primary",
                                          modelValue: multiline2.value,
                                          "onUpdate:modelValue": ($event) => multiline2.value = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_textarea, {
                                          clearable: "",
                                          "clear-icon": "mdi-close-circle",
                                          variant: "outlined",
                                          label: "Multiline Clearable",
                                          rows: "1",
                                          "row-height": "20",
                                          value: "This is clearable text.",
                                          color: "primary"
                                        })
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
                                    createVNode(_sfc_main$2, { title: "Select" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          items: items.value,
                                          color: "primary",
                                          label: "Email Address",
                                          variant: "outlined",
                                          density: "comfortable"
                                        }, null, 8, ["items"]),
                                        createVNode(_component_v_select, {
                                          items: items.value,
                                          color: "primary",
                                          label: "Email Address",
                                          variant: "outlined",
                                          density: "compact",
                                          modelValue: select_sm.value,
                                          "onUpdate:modelValue": ($event) => select_sm.value = $event,
                                          outlined: ""
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
                                    createVNode(_sfc_main$2, { title: "Size" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          variant: "outlined",
                                          color: "primary",
                                          placeholder: "Default",
                                          label: "Default"
                                        }),
                                        createVNode(_component_v_text_field, {
                                          variant: "outlined",
                                          color: "primary",
                                          placeholder: "Default",
                                          density: "compact"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$2, { title: "Layout" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          label: "Label",
                                          hint: "Full Width!",
                                          modelValue: full_text.value,
                                          "onUpdate:modelValue": ($event) => full_text.value = $event,
                                          "persistent-hint": "",
                                          variant: "outlined",
                                          color: "primary"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_row, { class: "mt-5" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              lg: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  label: "None",
                                                  hint: "Some important text",
                                                  modelValue: some_imp1.value,
                                                  "onUpdate:modelValue": ($event) => some_imp1.value = $event,
                                                  "persistent-hint": "",
                                                  variant: "outlined",
                                                  color: "primary"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              lg: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  label: "Dense",
                                                  hint: "Some important text",
                                                  modelValue: some_imp2.value,
                                                  "onUpdate:modelValue": ($event) => some_imp2.value = $event,
                                                  "persistent-hint": "",
                                                  variant: "outlined",
                                                  color: "primary",
                                                  density: "compact"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              lg: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  label: "Normal",
                                                  hint: "Some important text",
                                                  modelValue: some_imp3.value,
                                                  "onUpdate:modelValue": ($event) => some_imp3.value = $event,
                                                  "persistent-hint": "",
                                                  variant: "outlined",
                                                  color: "primary"
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
                                  createVNode(_sfc_main$2, { title: "Variant" }, {
                                    default: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode(_component_v_text_field, {
                                          label: "Outlined",
                                          color: "primary",
                                          placeholder: "Placeholder",
                                          variant: "outlined"
                                        }),
                                        createVNode(_component_v_text_field, {
                                          label: "Filled",
                                          color: "primary",
                                          placeholder: "Placeholder",
                                          variant: "filled"
                                        }),
                                        createVNode(_component_v_text_field, {
                                          label: "Underlined",
                                          color: "primary",
                                          placeholder: "Placeholder",
                                          variant: "underlined"
                                        })
                                      ])
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
                                  createVNode(_sfc_main$2, { title: "General" }, {
                                    default: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          placeholder: "Email Address",
                                          variant: "outlined"
                                        }),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          placeholder: "Email Address",
                                          value: "demo@company.com",
                                          variant: "outlined"
                                        }),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          placeholder: "demo@company.com",
                                          variant: "outlined",
                                          disabled: ""
                                        })
                                      ])
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
                                  createVNode(_sfc_main$2, { title: "With Caption" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        modelValue: caption_email1.value,
                                        "onUpdate:modelValue": ($event) => caption_email1.value = $event,
                                        label: "Email Address",
                                        variant: "outlined",
                                        placeholder: "email address"
                                      }, {
                                        "prepend-inner": withCtx(() => [
                                          createVNode(unref(MailIcon), {
                                            "stroke-width": "1.5",
                                            size: "22"
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        modelValue: caption_email2.value,
                                        "onUpdate:modelValue": ($event) => caption_email2.value = $event,
                                        label: "Email Address",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        modelValue: caption_email3.value,
                                        "onUpdate:modelValue": ($event) => caption_email3.value = $event,
                                        label: "Email Address",
                                        variant: "outlined"
                                      }, {
                                        "append-inner": withCtx(() => [
                                          createVNode(unref(MailIcon), {
                                            "stroke-width": "1.5",
                                            size: "22"
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
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
                                  createVNode(_sfc_main$2, { title: "With Validation" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        color: "error",
                                        modelValue: validate_email1.value,
                                        "onUpdate:modelValue": ($event) => validate_email1.value = $event,
                                        rules: [rules.value.required, rules.value.email],
                                        label: "Email Address",
                                        variant: "outlined",
                                        placeholder: "demo",
                                        error: ""
                                      }, {
                                        "prepend-inner": withCtx(() => [
                                          createVNode(unref(MailIcon), {
                                            "stroke-width": "1.5",
                                            size: "22"
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(_component_v_text_field, {
                                        color: "error",
                                        error: "",
                                        modelValue: validate_email2.value,
                                        "onUpdate:modelValue": ($event) => validate_email2.value = $event,
                                        rules: [rules.value.required, rules.value.email],
                                        label: "Email Address",
                                        variant: "outlined",
                                        placeholder: "demo"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(_component_v_text_field, {
                                        color: "error",
                                        label: "Email Address",
                                        variant: "outlined"
                                      })
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
                                  createVNode(_sfc_main$2, { title: "With Icon & Adornments" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        variant: "outlined",
                                        color: "primary",
                                        placeholder: "Email address"
                                      }, {
                                        "prepend-inner": withCtx(() => [
                                          createVNode(unref(MailIcon), {
                                            "stroke-width": "1.5",
                                            size: "22"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        variant: "outlined",
                                        color: "primary",
                                        placeholder: "Email address"
                                      }, {
                                        "prepend-inner": withCtx(() => [
                                          createVNode(unref(LockIcon), {
                                            "stroke-width": "1.5",
                                            size: "22"
                                          })
                                        ]),
                                        "append-inner": withCtx(() => [
                                          createVNode(unref(EyeIcon), {
                                            "stroke-width": "1.5",
                                            size: "22"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        placeholder: "John Deo",
                                        color: "primary",
                                        variant: "outlined"
                                      }, {
                                        "prepend-inner": withCtx(() => [
                                          createVNode("span", { class: "v-card-subtitle px-0" }, "Mr"),
                                          createVNode(_component_v_divider, {
                                            class: "ml-3 my-3 mt-n1",
                                            vertical: ""
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        placeholder: "Password",
                                        color: "primary",
                                        variant: "outlined"
                                      }, {
                                        "append-inner": withCtx(() => [
                                          createVNode(_component_v_divider, {
                                            class: "mr-3 my-3 mt-n1",
                                            vertical: ""
                                          }),
                                          createVNode("span", { class: "v-card-subtitle px-0" }, ".com")
                                        ]),
                                        _: 1
                                      })
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
                                  createVNode(_sfc_main$2, { title: "Multiline" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_textarea, {
                                        filled: "",
                                        "auto-grow": "",
                                        label: "Multiline Placeholder",
                                        rows: "1",
                                        "row-height": "20",
                                        color: "primary",
                                        variant: "outlined"
                                      }),
                                      createVNode(_component_v_textarea, {
                                        filled: "",
                                        "auto-grow": "",
                                        label: "Multiline Placeholder",
                                        variant: "outlined",
                                        rows: "4",
                                        color: "primary",
                                        modelValue: multiline2.value,
                                        "onUpdate:modelValue": ($event) => multiline2.value = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_textarea, {
                                        clearable: "",
                                        "clear-icon": "mdi-close-circle",
                                        variant: "outlined",
                                        label: "Multiline Clearable",
                                        rows: "1",
                                        "row-height": "20",
                                        value: "This is clearable text.",
                                        color: "primary"
                                      })
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
                                  createVNode(_sfc_main$2, { title: "Select" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        items: items.value,
                                        color: "primary",
                                        label: "Email Address",
                                        variant: "outlined",
                                        density: "comfortable"
                                      }, null, 8, ["items"]),
                                      createVNode(_component_v_select, {
                                        items: items.value,
                                        color: "primary",
                                        label: "Email Address",
                                        variant: "outlined",
                                        density: "compact",
                                        modelValue: select_sm.value,
                                        "onUpdate:modelValue": ($event) => select_sm.value = $event,
                                        outlined: ""
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
                                  createVNode(_sfc_main$2, { title: "Size" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        variant: "outlined",
                                        color: "primary",
                                        placeholder: "Default",
                                        label: "Default"
                                      }),
                                      createVNode(_component_v_text_field, {
                                        variant: "outlined",
                                        color: "primary",
                                        placeholder: "Default",
                                        density: "compact"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$2, { title: "Layout" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        label: "Label",
                                        hint: "Full Width!",
                                        modelValue: full_text.value,
                                        "onUpdate:modelValue": ($event) => full_text.value = $event,
                                        "persistent-hint": "",
                                        variant: "outlined",
                                        color: "primary"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_row, { class: "mt-5" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            lg: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                label: "None",
                                                hint: "Some important text",
                                                modelValue: some_imp1.value,
                                                "onUpdate:modelValue": ($event) => some_imp1.value = $event,
                                                "persistent-hint": "",
                                                variant: "outlined",
                                                color: "primary"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            lg: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                label: "Dense",
                                                hint: "Some important text",
                                                modelValue: some_imp2.value,
                                                "onUpdate:modelValue": ($event) => some_imp2.value = $event,
                                                "persistent-hint": "",
                                                variant: "outlined",
                                                color: "primary",
                                                density: "compact"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            lg: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                label: "Normal",
                                                hint: "Some important text",
                                                modelValue: some_imp3.value,
                                                "onUpdate:modelValue": ($event) => some_imp3.value = $event,
                                                "persistent-hint": "",
                                                variant: "outlined",
                                                color: "primary"
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
                    createVNode(_sfc_main$1, { title: "Textfield" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$2, { title: "Variant" }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode(_component_v_text_field, {
                                        label: "Outlined",
                                        color: "primary",
                                        placeholder: "Placeholder",
                                        variant: "outlined"
                                      }),
                                      createVNode(_component_v_text_field, {
                                        label: "Filled",
                                        color: "primary",
                                        placeholder: "Placeholder",
                                        variant: "filled"
                                      }),
                                      createVNode(_component_v_text_field, {
                                        label: "Underlined",
                                        color: "primary",
                                        placeholder: "Placeholder",
                                        variant: "underlined"
                                      })
                                    ])
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
                                createVNode(_sfc_main$2, { title: "General" }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        placeholder: "Email Address",
                                        variant: "outlined"
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        placeholder: "Email Address",
                                        value: "demo@company.com",
                                        variant: "outlined"
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        placeholder: "demo@company.com",
                                        variant: "outlined",
                                        disabled: ""
                                      })
                                    ])
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
                                createVNode(_sfc_main$2, { title: "With Caption" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      color: "primary",
                                      modelValue: caption_email1.value,
                                      "onUpdate:modelValue": ($event) => caption_email1.value = $event,
                                      label: "Email Address",
                                      variant: "outlined",
                                      placeholder: "email address"
                                    }, {
                                      "prepend-inner": withCtx(() => [
                                        createVNode(unref(MailIcon), {
                                          "stroke-width": "1.5",
                                          size: "22"
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_v_text_field, {
                                      color: "primary",
                                      modelValue: caption_email2.value,
                                      "onUpdate:modelValue": ($event) => caption_email2.value = $event,
                                      label: "Email Address",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_v_text_field, {
                                      color: "primary",
                                      modelValue: caption_email3.value,
                                      "onUpdate:modelValue": ($event) => caption_email3.value = $event,
                                      label: "Email Address",
                                      variant: "outlined"
                                    }, {
                                      "append-inner": withCtx(() => [
                                        createVNode(unref(MailIcon), {
                                          "stroke-width": "1.5",
                                          size: "22"
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
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
                                createVNode(_sfc_main$2, { title: "With Validation" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      color: "error",
                                      modelValue: validate_email1.value,
                                      "onUpdate:modelValue": ($event) => validate_email1.value = $event,
                                      rules: [rules.value.required, rules.value.email],
                                      label: "Email Address",
                                      variant: "outlined",
                                      placeholder: "demo",
                                      error: ""
                                    }, {
                                      "prepend-inner": withCtx(() => [
                                        createVNode(unref(MailIcon), {
                                          "stroke-width": "1.5",
                                          size: "22"
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                    createVNode(_component_v_text_field, {
                                      color: "error",
                                      error: "",
                                      modelValue: validate_email2.value,
                                      "onUpdate:modelValue": ($event) => validate_email2.value = $event,
                                      rules: [rules.value.required, rules.value.email],
                                      label: "Email Address",
                                      variant: "outlined",
                                      placeholder: "demo"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                    createVNode(_component_v_text_field, {
                                      color: "error",
                                      label: "Email Address",
                                      variant: "outlined"
                                    })
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
                                createVNode(_sfc_main$2, { title: "With Icon & Adornments" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      variant: "outlined",
                                      color: "primary",
                                      placeholder: "Email address"
                                    }, {
                                      "prepend-inner": withCtx(() => [
                                        createVNode(unref(MailIcon), {
                                          "stroke-width": "1.5",
                                          size: "22"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      variant: "outlined",
                                      color: "primary",
                                      placeholder: "Email address"
                                    }, {
                                      "prepend-inner": withCtx(() => [
                                        createVNode(unref(LockIcon), {
                                          "stroke-width": "1.5",
                                          size: "22"
                                        })
                                      ]),
                                      "append-inner": withCtx(() => [
                                        createVNode(unref(EyeIcon), {
                                          "stroke-width": "1.5",
                                          size: "22"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      placeholder: "John Deo",
                                      color: "primary",
                                      variant: "outlined"
                                    }, {
                                      "prepend-inner": withCtx(() => [
                                        createVNode("span", { class: "v-card-subtitle px-0" }, "Mr"),
                                        createVNode(_component_v_divider, {
                                          class: "ml-3 my-3 mt-n1",
                                          vertical: ""
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      placeholder: "Password",
                                      color: "primary",
                                      variant: "outlined"
                                    }, {
                                      "append-inner": withCtx(() => [
                                        createVNode(_component_v_divider, {
                                          class: "mr-3 my-3 mt-n1",
                                          vertical: ""
                                        }),
                                        createVNode("span", { class: "v-card-subtitle px-0" }, ".com")
                                      ]),
                                      _: 1
                                    })
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
                                createVNode(_sfc_main$2, { title: "Multiline" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_textarea, {
                                      filled: "",
                                      "auto-grow": "",
                                      label: "Multiline Placeholder",
                                      rows: "1",
                                      "row-height": "20",
                                      color: "primary",
                                      variant: "outlined"
                                    }),
                                    createVNode(_component_v_textarea, {
                                      filled: "",
                                      "auto-grow": "",
                                      label: "Multiline Placeholder",
                                      variant: "outlined",
                                      rows: "4",
                                      color: "primary",
                                      modelValue: multiline2.value,
                                      "onUpdate:modelValue": ($event) => multiline2.value = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_v_textarea, {
                                      clearable: "",
                                      "clear-icon": "mdi-close-circle",
                                      variant: "outlined",
                                      label: "Multiline Clearable",
                                      rows: "1",
                                      "row-height": "20",
                                      value: "This is clearable text.",
                                      color: "primary"
                                    })
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
                                createVNode(_sfc_main$2, { title: "Select" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_select, {
                                      items: items.value,
                                      color: "primary",
                                      label: "Email Address",
                                      variant: "outlined",
                                      density: "comfortable"
                                    }, null, 8, ["items"]),
                                    createVNode(_component_v_select, {
                                      items: items.value,
                                      color: "primary",
                                      label: "Email Address",
                                      variant: "outlined",
                                      density: "compact",
                                      modelValue: select_sm.value,
                                      "onUpdate:modelValue": ($event) => select_sm.value = $event,
                                      outlined: ""
                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
                                createVNode(_sfc_main$2, { title: "Size" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      variant: "outlined",
                                      color: "primary",
                                      placeholder: "Default",
                                      label: "Default"
                                    }),
                                    createVNode(_component_v_text_field, {
                                      variant: "outlined",
                                      color: "primary",
                                      placeholder: "Default",
                                      density: "compact"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$2, { title: "Layout" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      label: "Label",
                                      hint: "Full Width!",
                                      modelValue: full_text.value,
                                      "onUpdate:modelValue": ($event) => full_text.value = $event,
                                      "persistent-hint": "",
                                      variant: "outlined",
                                      color: "primary"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_v_row, { class: "mt-5" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          lg: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              label: "None",
                                              hint: "Some important text",
                                              modelValue: some_imp1.value,
                                              "onUpdate:modelValue": ($event) => some_imp1.value = $event,
                                              "persistent-hint": "",
                                              variant: "outlined",
                                              color: "primary"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          lg: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              label: "Dense",
                                              hint: "Some important text",
                                              modelValue: some_imp2.value,
                                              "onUpdate:modelValue": ($event) => some_imp2.value = $event,
                                              "persistent-hint": "",
                                              variant: "outlined",
                                              color: "primary",
                                              density: "compact"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          lg: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              label: "Normal",
                                              hint: "Some important text",
                                              modelValue: some_imp3.value,
                                              "onUpdate:modelValue": ($event) => some_imp3.value = $event,
                                              "persistent-hint": "",
                                              variant: "outlined",
                                              color: "primary"
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
                  createVNode(_sfc_main$1, { title: "Textfield" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2, { title: "Variant" }, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode(_component_v_text_field, {
                                      label: "Outlined",
                                      color: "primary",
                                      placeholder: "Placeholder",
                                      variant: "outlined"
                                    }),
                                    createVNode(_component_v_text_field, {
                                      label: "Filled",
                                      color: "primary",
                                      placeholder: "Placeholder",
                                      variant: "filled"
                                    }),
                                    createVNode(_component_v_text_field, {
                                      label: "Underlined",
                                      color: "primary",
                                      placeholder: "Placeholder",
                                      variant: "underlined"
                                    })
                                  ])
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
                              createVNode(_sfc_main$2, { title: "General" }, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode(_component_v_text_field, {
                                      color: "primary",
                                      placeholder: "Email Address",
                                      variant: "outlined"
                                    }),
                                    createVNode(_component_v_text_field, {
                                      color: "primary",
                                      placeholder: "Email Address",
                                      value: "demo@company.com",
                                      variant: "outlined"
                                    }),
                                    createVNode(_component_v_text_field, {
                                      color: "primary",
                                      placeholder: "demo@company.com",
                                      variant: "outlined",
                                      disabled: ""
                                    })
                                  ])
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
                              createVNode(_sfc_main$2, { title: "With Caption" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    color: "primary",
                                    modelValue: caption_email1.value,
                                    "onUpdate:modelValue": ($event) => caption_email1.value = $event,
                                    label: "Email Address",
                                    variant: "outlined",
                                    placeholder: "email address"
                                  }, {
                                    "prepend-inner": withCtx(() => [
                                      createVNode(unref(MailIcon), {
                                        "stroke-width": "1.5",
                                        size: "22"
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_text_field, {
                                    color: "primary",
                                    modelValue: caption_email2.value,
                                    "onUpdate:modelValue": ($event) => caption_email2.value = $event,
                                    label: "Email Address",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_text_field, {
                                    color: "primary",
                                    modelValue: caption_email3.value,
                                    "onUpdate:modelValue": ($event) => caption_email3.value = $event,
                                    label: "Email Address",
                                    variant: "outlined"
                                  }, {
                                    "append-inner": withCtx(() => [
                                      createVNode(unref(MailIcon), {
                                        "stroke-width": "1.5",
                                        size: "22"
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
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
                              createVNode(_sfc_main$2, { title: "With Validation" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    color: "error",
                                    modelValue: validate_email1.value,
                                    "onUpdate:modelValue": ($event) => validate_email1.value = $event,
                                    rules: [rules.value.required, rules.value.email],
                                    label: "Email Address",
                                    variant: "outlined",
                                    placeholder: "demo",
                                    error: ""
                                  }, {
                                    "prepend-inner": withCtx(() => [
                                      createVNode(unref(MailIcon), {
                                        "stroke-width": "1.5",
                                        size: "22"
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                  createVNode(_component_v_text_field, {
                                    color: "error",
                                    error: "",
                                    modelValue: validate_email2.value,
                                    "onUpdate:modelValue": ($event) => validate_email2.value = $event,
                                    rules: [rules.value.required, rules.value.email],
                                    label: "Email Address",
                                    variant: "outlined",
                                    placeholder: "demo"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                  createVNode(_component_v_text_field, {
                                    color: "error",
                                    label: "Email Address",
                                    variant: "outlined"
                                  })
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
                              createVNode(_sfc_main$2, { title: "With Icon & Adornments" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    variant: "outlined",
                                    color: "primary",
                                    placeholder: "Email address"
                                  }, {
                                    "prepend-inner": withCtx(() => [
                                      createVNode(unref(MailIcon), {
                                        "stroke-width": "1.5",
                                        size: "22"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    variant: "outlined",
                                    color: "primary",
                                    placeholder: "Email address"
                                  }, {
                                    "prepend-inner": withCtx(() => [
                                      createVNode(unref(LockIcon), {
                                        "stroke-width": "1.5",
                                        size: "22"
                                      })
                                    ]),
                                    "append-inner": withCtx(() => [
                                      createVNode(unref(EyeIcon), {
                                        "stroke-width": "1.5",
                                        size: "22"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    placeholder: "John Deo",
                                    color: "primary",
                                    variant: "outlined"
                                  }, {
                                    "prepend-inner": withCtx(() => [
                                      createVNode("span", { class: "v-card-subtitle px-0" }, "Mr"),
                                      createVNode(_component_v_divider, {
                                        class: "ml-3 my-3 mt-n1",
                                        vertical: ""
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    placeholder: "Password",
                                    color: "primary",
                                    variant: "outlined"
                                  }, {
                                    "append-inner": withCtx(() => [
                                      createVNode(_component_v_divider, {
                                        class: "mr-3 my-3 mt-n1",
                                        vertical: ""
                                      }),
                                      createVNode("span", { class: "v-card-subtitle px-0" }, ".com")
                                    ]),
                                    _: 1
                                  })
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
                              createVNode(_sfc_main$2, { title: "Multiline" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_textarea, {
                                    filled: "",
                                    "auto-grow": "",
                                    label: "Multiline Placeholder",
                                    rows: "1",
                                    "row-height": "20",
                                    color: "primary",
                                    variant: "outlined"
                                  }),
                                  createVNode(_component_v_textarea, {
                                    filled: "",
                                    "auto-grow": "",
                                    label: "Multiline Placeholder",
                                    variant: "outlined",
                                    rows: "4",
                                    color: "primary",
                                    modelValue: multiline2.value,
                                    "onUpdate:modelValue": ($event) => multiline2.value = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_textarea, {
                                    clearable: "",
                                    "clear-icon": "mdi-close-circle",
                                    variant: "outlined",
                                    label: "Multiline Clearable",
                                    rows: "1",
                                    "row-height": "20",
                                    value: "This is clearable text.",
                                    color: "primary"
                                  })
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
                              createVNode(_sfc_main$2, { title: "Select" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_select, {
                                    items: items.value,
                                    color: "primary",
                                    label: "Email Address",
                                    variant: "outlined",
                                    density: "comfortable"
                                  }, null, 8, ["items"]),
                                  createVNode(_component_v_select, {
                                    items: items.value,
                                    color: "primary",
                                    label: "Email Address",
                                    variant: "outlined",
                                    density: "compact",
                                    modelValue: select_sm.value,
                                    "onUpdate:modelValue": ($event) => select_sm.value = $event,
                                    outlined: ""
                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
                              createVNode(_sfc_main$2, { title: "Size" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    variant: "outlined",
                                    color: "primary",
                                    placeholder: "Default",
                                    label: "Default"
                                  }),
                                  createVNode(_component_v_text_field, {
                                    variant: "outlined",
                                    color: "primary",
                                    placeholder: "Default",
                                    density: "compact"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2, { title: "Layout" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    label: "Label",
                                    hint: "Full Width!",
                                    modelValue: full_text.value,
                                    "onUpdate:modelValue": ($event) => full_text.value = $event,
                                    "persistent-hint": "",
                                    variant: "outlined",
                                    color: "primary"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_row, { class: "mt-5" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        lg: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            label: "None",
                                            hint: "Some important text",
                                            modelValue: some_imp1.value,
                                            "onUpdate:modelValue": ($event) => some_imp1.value = $event,
                                            "persistent-hint": "",
                                            variant: "outlined",
                                            color: "primary"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        lg: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            label: "Dense",
                                            hint: "Some important text",
                                            modelValue: some_imp2.value,
                                            "onUpdate:modelValue": ($event) => some_imp2.value = $event,
                                            "persistent-hint": "",
                                            variant: "outlined",
                                            color: "primary",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        lg: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            label: "Normal",
                                            hint: "Some important text",
                                            modelValue: some_imp3.value,
                                            "onUpdate:modelValue": ($event) => some_imp3.value = $event,
                                            "persistent-hint": "",
                                            variant: "outlined",
                                            color: "primary"
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forms/form-elements/TextField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=TextField-DA8wB60G.js.map
