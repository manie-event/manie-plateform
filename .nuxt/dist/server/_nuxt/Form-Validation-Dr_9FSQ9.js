import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, renderSlot, useSSRContext, toRef, unref, createTextVNode, ref, computed, createBlock, createCommentVNode, openBlock, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$b } from "./UiParentCard-DhlYzLUl.js";
import { _ as _sfc_main$9 } from "./Logo-DggZ73XB.js";
import { useField, Form } from "vee-validate";
import * as Yup from "yup";
import { _ as _sfc_main$a } from "./BaseBreadcrumb-DAIjkUfv.js";
import "./nuxt-link-DZ3wFR7I.js";
import "ufo";
import "../server.mjs";
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
import "@vue/devtools-api";
import "destr";
import "klona";
import "vue-tabler-icons";
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
import "./customizer-CM6PVnj3.js";
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "UiParentCardLogo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_LcFullLogo = _sfc_main$9;
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_card_text = resolveComponent("v-card-text");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        elevation: "10",
        class: "overflow-hidden"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, { class: "v-card-item bg-surface pt-4 pb-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-sm-flex align-center justify-space-between"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_card_title, { class: "text-h5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_LcFullLogo, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_LcFullLogo)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  ssrRenderSlot(_ctx.$slots, "action", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-sm-flex align-center justify-space-between" }, [
                      createVNode(_component_v_card_title, { class: "text-h5" }, {
                        default: withCtx(() => [
                          createVNode(_component_LcFullLogo)
                        ]),
                        _: 1
                      }),
                      renderSlot(_ctx.$slots, "action")
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_divider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_item, { class: "v-card-item bg-surface pt-4 pb-2" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-sm-flex align-center justify-space-between" }, [
                    createVNode(_component_v_card_title, { class: "text-h5" }, {
                      default: withCtx(() => [
                        createVNode(_component_LcFullLogo)
                      ]),
                      _: 1
                    }),
                    renderSlot(_ctx.$slots, "action")
                  ])
                ]),
                _: 3
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/UiParentCardLogo.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "TextInput",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    successMessage: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const name = toRef(props, "name");
    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta
    } = useField(name, void 0, {
      initialValue: props.value
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_text_field = resolveComponent("v-text-field");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["TextInput", { "has-error": !!unref(errorMessage), success: unref(meta).valid }]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_text_field, {
        name: name.value,
        id: name.value,
        type: __props.type,
        "v-model": unref(inputValue),
        variant: "outlined",
        valid: unref(meta).valid,
        label: __props.label,
        color: unref(meta).valid ? "success" : "",
        "error-messages": unref(errorMessage),
        placeholder: __props.placeholder,
        onInput: unref(handleChange),
        onBlur: unref(handleBlur),
        "hide-details": "auto"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-validation/TextInput.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "VeeValidation",
  __ssrInlineRender: true,
  setup(__props) {
    function onInvalidSubmit() {
      const submitBtn = (void 0).querySelector(".submit-btn");
      submitBtn.classList.add("invalid");
      setTimeout(() => {
        submitBtn.classList.remove("invalid");
      }, 1e3);
    }
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email1: Yup.string().email().required(),
      password1: Yup.string().min(6).required(),
      confirm_password: Yup.string().required().oneOf([Yup.ref("password")], "Passwords do not match")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Form), {
        "validation-schema": unref(schema),
        onInvalidSubmit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mb-2 font-weight-medium text-subtitle-1"${_scopeId3}>Name</div>`);
                        _push4(ssrRenderComponent(_sfc_main$7, {
                          name: "name",
                          type: "text",
                          "success-message": "Nice to meet you!",
                          label: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Name"),
                          createVNode(_sfc_main$7, {
                            name: "name",
                            type: "text",
                            "success-message": "Nice to meet you!",
                            label: ""
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mb-2 font-weight-medium text-subtitle-1"${_scopeId3}>Email</div>`);
                        _push4(ssrRenderComponent(_sfc_main$7, {
                          name: "email1",
                          type: "email",
                          "success-message": "Got it, we won't spam you!",
                          label: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Email"),
                          createVNode(_sfc_main$7, {
                            name: "email1",
                            type: "email",
                            "success-message": "Got it, we won't spam you!",
                            label: ""
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mb-2 font-weight-medium text-subtitle-1"${_scopeId3}>Password</div>`);
                        _push4(ssrRenderComponent(_sfc_main$7, {
                          name: "password1",
                          type: "password",
                          "success-message": "Nice and secure!",
                          label: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Password"),
                          createVNode(_sfc_main$7, {
                            name: "password1",
                            type: "password",
                            "success-message": "Nice and secure!",
                            label: ""
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mb-2 font-weight-medium text-subtitle-1"${_scopeId3}>Confirm Password</div>`);
                        _push4(ssrRenderComponent(_sfc_main$7, {
                          name: "confirm_password",
                          type: "password",
                          "success-message": "Glad you remembered it!",
                          label: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Confirm Password"),
                          createVNode(_sfc_main$7, {
                            name: "confirm_password",
                            type: "password",
                            "success-message": "Glad you remembered it!",
                            label: ""
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-sm-flex align-center mb-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_checkbox, {
                          density: "compact",
                          "hide-details": "",
                          color: "primary",
                          label: "Remember this Device"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="ml-auto"${_scopeId3}><a href="javascript:void(0)" class="text-primary text-decoration-none"${_scopeId3}>Forgot password?</a></div></div>`);
                        _push4(ssrRenderComponent(_component_v_btn, {
                          type: "submit",
                          class: "submit-btn mt-2",
                          rounded: "pill",
                          color: "primary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Submit`);
                            } else {
                              return [
                                createTextVNode("Submit")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "d-sm-flex align-center mb-4" }, [
                            createVNode(_component_v_checkbox, {
                              density: "compact",
                              "hide-details": "",
                              color: "primary",
                              label: "Remember this Device"
                            }),
                            createVNode("div", { class: "ml-auto" }, [
                              createVNode("a", {
                                href: "javascript:void(0)",
                                class: "text-primary text-decoration-none"
                              }, "Forgot password?")
                            ])
                          ]),
                          createVNode(_component_v_btn, {
                            type: "submit",
                            class: "submit-btn mt-2",
                            rounded: "pill",
                            color: "primary"
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Name"),
                        createVNode(_sfc_main$7, {
                          name: "name",
                          type: "text",
                          "success-message": "Nice to meet you!",
                          label: ""
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Email"),
                        createVNode(_sfc_main$7, {
                          name: "email1",
                          type: "email",
                          "success-message": "Got it, we won't spam you!",
                          label: ""
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Password"),
                        createVNode(_sfc_main$7, {
                          name: "password1",
                          type: "password",
                          "success-message": "Nice and secure!",
                          label: ""
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Confirm Password"),
                        createVNode(_sfc_main$7, {
                          name: "confirm_password",
                          type: "password",
                          "success-message": "Glad you remembered it!",
                          label: ""
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-sm-flex align-center mb-4" }, [
                          createVNode(_component_v_checkbox, {
                            density: "compact",
                            "hide-details": "",
                            color: "primary",
                            label: "Remember this Device"
                          }),
                          createVNode("div", { class: "ml-auto" }, [
                            createVNode("a", {
                              href: "javascript:void(0)",
                              class: "text-primary text-decoration-none"
                            }, "Forgot password?")
                          ])
                        ]),
                        createVNode(_component_v_btn, {
                          type: "submit",
                          class: "submit-btn mt-2",
                          rounded: "pill",
                          color: "primary"
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  createVNode(_component_v_col, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Name"),
                      createVNode(_sfc_main$7, {
                        name: "name",
                        type: "text",
                        "success-message": "Nice to meet you!",
                        label: ""
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Email"),
                      createVNode(_sfc_main$7, {
                        name: "email1",
                        type: "email",
                        "success-message": "Got it, we won't spam you!",
                        label: ""
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Password"),
                      createVNode(_sfc_main$7, {
                        name: "password1",
                        type: "password",
                        "success-message": "Nice and secure!",
                        label: ""
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Confirm Password"),
                      createVNode(_sfc_main$7, {
                        name: "confirm_password",
                        type: "password",
                        "success-message": "Glad you remembered it!",
                        label: ""
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-sm-flex align-center mb-4" }, [
                        createVNode(_component_v_checkbox, {
                          density: "compact",
                          "hide-details": "",
                          color: "primary",
                          label: "Remember this Device"
                        }),
                        createVNode("div", { class: "ml-auto" }, [
                          createVNode("a", {
                            href: "javascript:void(0)",
                            class: "text-primary text-decoration-none"
                          }, "Forgot password?")
                        ])
                      ]),
                      createVNode(_component_v_btn, {
                        type: "submit",
                        class: "submit-btn mt-2",
                        rounded: "pill",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Submit")
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-validation/VeeValidation.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "MailValidation",
  __ssrInlineRender: true,
  setup(__props) {
    function onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    }
    function onInvalidSubmit() {
      const submitBtn = (void 0).querySelector(".submit-btn");
      submitBtn.classList.add("invalid");
      setTimeout(() => {
        submitBtn.classList.remove("invalid");
      }, 1e3);
    }
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
      confirm_password: Yup.string().required().oneOf([Yup.ref("password")], "Passwords do not match")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Form), {
        onSubmit,
        "validation-schema": unref(schema),
        onInvalidSubmit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mb-2 font-weight-medium text-subtitle-1"${_scopeId3}>Email</div>`);
                        _push4(ssrRenderComponent(_sfc_main$7, {
                          name: "email",
                          type: "email",
                          id: "valemail",
                          "success-message": "Got it, we won't spam you!",
                          label: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Email"),
                          createVNode(_sfc_main$7, {
                            name: "email",
                            type: "email",
                            id: "valemail",
                            "success-message": "Got it, we won't spam you!",
                            label: ""
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mb-2 font-weight-medium text-subtitle-1"${_scopeId3}>Password</div>`);
                        _push4(ssrRenderComponent(_sfc_main$7, {
                          name: "password",
                          id: "valpwd",
                          type: "password",
                          "success-message": "Nice and secure!",
                          label: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Password"),
                          createVNode(_sfc_main$7, {
                            name: "password",
                            id: "valpwd",
                            type: "password",
                            "success-message": "Nice and secure!",
                            label: ""
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-sm-flex align-center mb-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_checkbox, {
                          density: "compact",
                          "hide-details": "",
                          color: "primary",
                          label: "Remember this Device"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="ml-auto"${_scopeId3}><a href="javascript:void(0)" class="text-primary text-decoration-none"${_scopeId3}>Forgot password?</a></div></div>`);
                        _push4(ssrRenderComponent(_component_v_btn, {
                          type: "submit",
                          class: "submit-btn mt-2",
                          rounded: "pill",
                          color: "primary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Submit`);
                            } else {
                              return [
                                createTextVNode("Submit")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "d-sm-flex align-center mb-4" }, [
                            createVNode(_component_v_checkbox, {
                              density: "compact",
                              "hide-details": "",
                              color: "primary",
                              label: "Remember this Device"
                            }),
                            createVNode("div", { class: "ml-auto" }, [
                              createVNode("a", {
                                href: "javascript:void(0)",
                                class: "text-primary text-decoration-none"
                              }, "Forgot password?")
                            ])
                          ]),
                          createVNode(_component_v_btn, {
                            type: "submit",
                            class: "submit-btn mt-2",
                            rounded: "pill",
                            color: "primary"
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Email"),
                        createVNode(_sfc_main$7, {
                          name: "email",
                          type: "email",
                          id: "valemail",
                          "success-message": "Got it, we won't spam you!",
                          label: ""
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Password"),
                        createVNode(_sfc_main$7, {
                          name: "password",
                          id: "valpwd",
                          type: "password",
                          "success-message": "Nice and secure!",
                          label: ""
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-sm-flex align-center mb-4" }, [
                          createVNode(_component_v_checkbox, {
                            density: "compact",
                            "hide-details": "",
                            color: "primary",
                            label: "Remember this Device"
                          }),
                          createVNode("div", { class: "ml-auto" }, [
                            createVNode("a", {
                              href: "javascript:void(0)",
                              class: "text-primary text-decoration-none"
                            }, "Forgot password?")
                          ])
                        ]),
                        createVNode(_component_v_btn, {
                          type: "submit",
                          class: "submit-btn mt-2",
                          rounded: "pill",
                          color: "primary"
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  createVNode(_component_v_col, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Email"),
                      createVNode(_sfc_main$7, {
                        name: "email",
                        type: "email",
                        id: "valemail",
                        "success-message": "Got it, we won't spam you!",
                        label: ""
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Password"),
                      createVNode(_sfc_main$7, {
                        name: "password",
                        id: "valpwd",
                        type: "password",
                        "success-message": "Nice and secure!",
                        label: ""
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-sm-flex align-center mb-4" }, [
                        createVNode(_component_v_checkbox, {
                          density: "compact",
                          "hide-details": "",
                          color: "primary",
                          label: "Remember this Device"
                        }),
                        createVNode("div", { class: "ml-auto" }, [
                          createVNode("a", {
                            href: "javascript:void(0)",
                            class: "text-primary text-decoration-none"
                          }, "Forgot password?")
                        ])
                      ]),
                      createVNode(_component_v_btn, {
                        type: "submit",
                        class: "submit-btn mt-2",
                        rounded: "pill",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Submit")
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-validation/MailValidation.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "OnType",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const rules = ref({
      required: (value) => !!value || "Required.",
      counter: (value) => value.length <= 20 || "Max 20 characters",
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
      firstname: (value) => value.length > 2 || "More than two letters required",
      lastname: (value) => value.length > 2 || "More than two letters required"
    });
    const password = ref("");
    const pwdrules = ref({
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(unref(Form), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mb-2 font-weight-medium text-subtitle-1"${_scopeId3}>Email</div>`);
                        _push4(ssrRenderComponent(_component_v_text_field, {
                          modelValue: email.value,
                          "onUpdate:modelValue": ($event) => email.value = $event,
                          rules: [rules.value.required, rules.value.email],
                          variant: "outlined",
                          "hide-details": "auto",
                          id: "otypeemail"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Email"),
                          createVNode(_component_v_text_field, {
                            modelValue: email.value,
                            "onUpdate:modelValue": ($event) => email.value = $event,
                            rules: [rules.value.required, rules.value.email],
                            variant: "outlined",
                            "hide-details": "auto",
                            id: "otypeemail"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mb-2 font-weight-medium text-subtitle-1"${_scopeId3}>Password</div>`);
                        _push4(ssrRenderComponent(_component_v_text_field, {
                          color: "primary",
                          id: "otypepwd",
                          modelValue: password.value,
                          "onUpdate:modelValue": ($event) => password.value = $event,
                          rules: [pwdrules.value.required, pwdrules.value.min],
                          "hide-details": "auto",
                          variant: "outlined",
                          hint: "At least 8 characters",
                          type: "password"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Password"),
                          createVNode(_component_v_text_field, {
                            color: "primary",
                            id: "otypepwd",
                            modelValue: password.value,
                            "onUpdate:modelValue": ($event) => password.value = $event,
                            rules: [pwdrules.value.required, pwdrules.value.min],
                            "hide-details": "auto",
                            variant: "outlined",
                            hint: "At least 8 characters",
                            type: "password"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex justify-sm-end"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_btn, {
                          type: "submit",
                          class: "submit-btn mt-2",
                          rounded: "pill",
                          color: "primary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Submit`);
                            } else {
                              return [
                                createTextVNode("Submit")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex justify-sm-end" }, [
                            createVNode(_component_v_btn, {
                              type: "submit",
                              class: "submit-btn mt-2",
                              rounded: "pill",
                              color: "primary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Submit")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Email"),
                        createVNode(_component_v_text_field, {
                          modelValue: email.value,
                          "onUpdate:modelValue": ($event) => email.value = $event,
                          rules: [rules.value.required, rules.value.email],
                          variant: "outlined",
                          "hide-details": "auto",
                          id: "otypeemail"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Password"),
                        createVNode(_component_v_text_field, {
                          color: "primary",
                          id: "otypepwd",
                          modelValue: password.value,
                          "onUpdate:modelValue": ($event) => password.value = $event,
                          rules: [pwdrules.value.required, pwdrules.value.min],
                          "hide-details": "auto",
                          variant: "outlined",
                          hint: "At least 8 characters",
                          type: "password"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex justify-sm-end" }, [
                          createVNode(_component_v_btn, {
                            type: "submit",
                            class: "submit-btn mt-2",
                            rounded: "pill",
                            color: "primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Submit")
                            ]),
                            _: 1
                          })
                        ])
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
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  createVNode(_component_v_col, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Email"),
                      createVNode(_component_v_text_field, {
                        modelValue: email.value,
                        "onUpdate:modelValue": ($event) => email.value = $event,
                        rules: [rules.value.required, rules.value.email],
                        variant: "outlined",
                        "hide-details": "auto",
                        id: "otypeemail"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Password"),
                      createVNode(_component_v_text_field, {
                        color: "primary",
                        id: "otypepwd",
                        modelValue: password.value,
                        "onUpdate:modelValue": ($event) => password.value = $event,
                        rules: [pwdrules.value.required, pwdrules.value.min],
                        "hide-details": "auto",
                        variant: "outlined",
                        hint: "At least 8 characters",
                        type: "password"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex justify-sm-end" }, [
                        createVNode(_component_v_btn, {
                          type: "submit",
                          class: "submit-btn mt-2",
                          rounded: "pill",
                          color: "primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Submit")
                          ]),
                          _: 1
                        })
                      ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-validation/OnType.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Radio",
  __ssrInlineRender: true,
  setup(__props) {
    const drinks = ref([
      { id: 1, name: "None" },
      { id: 2, name: "Tea" },
      { id: 3, name: "Coffee" }
    ]);
    const selectedRadioValues = ref([]);
    const myRadioform = ref(null);
    const validateRadio = computed(() => {
      return [selectedRadioValues.value.length > 0 || "Choose at-list one Drink"];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_form = resolveComponent("v-form");
      const _component_v_radio_group = resolveComponent("v-radio-group");
      const _component_v_radio = resolveComponent("v-radio");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_form, mergeProps({
        ref_key: "myRadioform",
        ref: myRadioform
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex gap-3"${_scopeId}><!--[-->`);
            ssrRenderList(drinks.value, (drink) => {
              _push2(ssrRenderComponent(_component_v_radio_group, {
                key: drink.id,
                modelValue: selectedRadioValues.value,
                "onUpdate:modelValue": ($event) => selectedRadioValues.value = $event,
                rules: validateRadio.value,
                "hide-details": ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_radio, {
                      value: drink.id,
                      label: drink.name,
                      color: "primary"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_radio, {
                        value: drink.id,
                        label: drink.name,
                        color: "primary"
                      }, null, 8, ["value", "label"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            if (selectedRadioValues.value.length < 1) {
              _push2(`<p class="text-error mb-4 text-subtitle-2"${_scopeId}> You have to choose one Drink </p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="d-flex justify-sm-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              rounded: "pill",
              class: "mt-3",
              color: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Submit`);
                } else {
                  return [
                    createTextVNode("Submit")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex gap-3" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(drinks.value, (drink) => {
                  return openBlock(), createBlock(_component_v_radio_group, {
                    key: drink.id,
                    modelValue: selectedRadioValues.value,
                    "onUpdate:modelValue": ($event) => selectedRadioValues.value = $event,
                    rules: validateRadio.value,
                    "hide-details": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_radio, {
                        value: drink.id,
                        label: drink.name,
                        color: "primary"
                      }, null, 8, ["value", "label"])
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "onUpdate:modelValue", "rules"]);
                }), 128))
              ]),
              selectedRadioValues.value.length < 1 ? (openBlock(), createBlock("p", {
                key: 0,
                class: "text-error mb-4 text-subtitle-2"
              }, " You have to choose one Drink ")) : createCommentVNode("", true),
              createVNode("div", { class: "d-flex justify-sm-end" }, [
                createVNode(_component_v_btn, {
                  rounded: "pill",
                  class: "mt-3",
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Submit")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-validation/Radio.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CheckBox",
  __ssrInlineRender: true,
  setup(__props) {
    const drinks = ref([
      { id: 1, name: "None" },
      { id: 2, name: "Tea" },
      { id: 3, name: "Coffee" }
    ]);
    const selectedValues = ref([]);
    const myform = ref();
    const validateCheckbox = computed(() => {
      return [selectedValues.value.length > 0 || "Choose at-list one Drink"];
    });
    function submit() {
      myform.value.validate();
    }
    function isLast(index) {
      return drinks.value.length - 1 === index;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_form = resolveComponent("v-form");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_form, mergeProps({
        ref_key: "myform",
        ref: myform
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class=""${_scopeId}><!--[-->`);
            ssrRenderList(drinks.value, (drink, index) => {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_checkbox, {
                modelValue: selectedValues.value,
                "onUpdate:modelValue": ($event) => selectedValues.value = $event,
                value: drink.id,
                label: drink.name,
                color: "primary",
                "hide-details": !isLast(index),
                rules: validateCheckbox.value
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div><div class="d-flex justify-sm-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              onClick: submit,
              flat: "",
              color: "primary",
              class: "mt-4",
              rounded: "pill"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Submit `);
                } else {
                  return [
                    createTextVNode(" Submit ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(drinks.value, (drink, index) => {
                  return openBlock(), createBlock("div", {
                    key: drink.id
                  }, [
                    createVNode(_component_v_checkbox, {
                      modelValue: selectedValues.value,
                      "onUpdate:modelValue": ($event) => selectedValues.value = $event,
                      value: drink.id,
                      label: drink.name,
                      color: "primary",
                      "hide-details": !isLast(index),
                      rules: validateCheckbox.value
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "label", "hide-details", "rules"])
                  ]);
                }), 128))
              ]),
              createVNode("div", { class: "d-flex justify-sm-end" }, [
                createVNode(_component_v_btn, {
                  onClick: submit,
                  flat: "",
                  color: "primary",
                  class: "mt-4",
                  rounded: "pill"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Submit ")
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-validation/CheckBox.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Select",
  __ssrInlineRender: true,
  setup(__props) {
    const defaultForm = Object.freeze({
      age: ""
    });
    const form = ref(Object.assign({}, defaultForm));
    const rules = ref({
      age: [(val) => (val || "").length > 0 || "This field is required"]
    });
    const age = ref(["Ten", "Twenty", "Thirty"]);
    function submitForm() {
      form.value = Object.assign({}, defaultForm);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_form = resolveComponent("v-form");
      const _component_v_label = resolveComponent("v-label");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_form, mergeProps({
        ref_key: "form",
        ref: form
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_label, {
              class: "mb-2 font-weight-medium",
              for: "selage"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Age`);
                } else {
                  return [
                    createTextVNode("Age")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_select, {
              modelValue: form.value.age,
              "onUpdate:modelValue": ($event) => form.value.age = $event,
              items: age.value,
              rules: rules.value.age,
              color: "primary",
              variant: "outlined",
              required: "",
              id: "selage"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, {
              color: "primary",
              class: "mt-3",
              rounded: "pill",
              onClick: submitForm
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`submit`);
                } else {
                  return [
                    createTextVNode("submit")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_label, {
                class: "mb-2 font-weight-medium",
                for: "selage"
              }, {
                default: withCtx(() => [
                  createTextVNode("Age")
                ]),
                _: 1
              }),
              createVNode(_component_v_select, {
                modelValue: form.value.age,
                "onUpdate:modelValue": ($event) => form.value.age = $event,
                items: age.value,
                rules: rules.value.age,
                color: "primary",
                variant: "outlined",
                required: "",
                id: "selage"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
              createVNode(_component_v_btn, {
                color: "primary",
                class: "mt-3",
                rounded: "pill",
                onClick: submitForm
              }, {
                default: withCtx(() => [
                  createTextVNode("submit")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-validation/Select.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Form-Validation",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Form Validation" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Form validation",
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
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              lg: "6",
              class: "mb-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$8, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$6, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$6)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$8, null, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$6)
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
              lg: "6",
              class: "mb-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$8, null, {
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
                  _push3(ssrRenderComponent(_sfc_main$b, {
                    title: "Select",
                    class: "mt-6"
                  }, {
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
                    createVNode(_sfc_main$8, null, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$5)
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$b, {
                      title: "Select",
                      class: "mt-6"
                    }, {
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
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              lg: "6",
              class: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$b, { title: "On Leave" }, {
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
                } else {
                  return [
                    createVNode(_sfc_main$b, { title: "On Leave" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$4)
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
              lg: "6",
              class: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$b, { title: "Checkboxes" }, {
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
                    createVNode(_sfc_main$b, { title: "Checkboxes" }, {
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
              lg: "6",
              class: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$b, { title: "Radio" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$3, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$3)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$b, { title: "Radio" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$3)
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
                lg: "6",
                class: "mb-0"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$8, null, {
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
                lg: "6",
                class: "mb-0"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$8, null, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$5)
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$b, {
                    title: "Select",
                    class: "mt-6"
                  }, {
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
                lg: "6",
                class: ""
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$b, { title: "On Leave" }, {
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
                lg: "6",
                class: ""
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$b, { title: "Checkboxes" }, {
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
                lg: "6",
                class: ""
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$b, { title: "Radio" }, {
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
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forms/Form-Validation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Form-Validation-Dr_9FSQ9.js.map
