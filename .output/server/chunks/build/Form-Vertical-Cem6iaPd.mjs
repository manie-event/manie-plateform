import { defineComponent, ref, resolveComponent, withCtx, createVNode, createTextVNode, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$9 } from './UiParentCard-DhlYzLUl.mjs';
import { _ as _export_sfc } from './server.mjs';
import { UserIcon, BuildingArchIcon, MailIcon, PhoneIcon, Message2Icon, HelpIcon } from 'vue-tabler-icons';
import { _ as _sfc_main$8 } from './BaseBreadcrumb-DAIjkUfv.mjs';
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

const _sfc_main$7 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_label = resolveComponent("v-label");
  const _component_VTextField = resolveComponent("VTextField");
  const _component_VTextarea = resolveComponent("VTextarea");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_row, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_label, {
                class: "font-weight-medium mb-2",
                for: "vnm"
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
              _push3(ssrRenderComponent(_component_VTextField, {
                type: "text",
                placeholder: "John Deo",
                id: "vnm",
                "hide-details": ""
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_label, {
                  class: "font-weight-medium mb-2",
                  for: "vnm"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Name")
                  ]),
                  _: 1
                }),
                createVNode(_component_VTextField, {
                  type: "text",
                  placeholder: "John Deo",
                  id: "vnm",
                  "hide-details": ""
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_label, {
                class: "font-weight-medium mb-2",
                for: "vcnp"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Company`);
                  } else {
                    return [
                      createTextVNode("Company")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_VTextField, {
                type: "text",
                placeholder: "ACME Inc.",
                id: "vcnp",
                "hide-details": ""
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_label, {
                  class: "font-weight-medium mb-2",
                  for: "vcnp"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Company")
                  ]),
                  _: 1
                }),
                createVNode(_component_VTextField, {
                  type: "text",
                  placeholder: "ACME Inc.",
                  id: "vcnp",
                  "hide-details": ""
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_label, {
                class: "font-weight-medium mb-2",
                for: "veml"
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
              _push3(ssrRenderComponent(_component_VTextField, {
                type: "email",
                placeholder: "john.deo",
                id: "veml",
                suffix: "@example.com",
                "hide-details": ""
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_label, {
                  class: "font-weight-medium mb-2",
                  for: "veml"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Email")
                  ]),
                  _: 1
                }),
                createVNode(_component_VTextField, {
                  type: "email",
                  placeholder: "john.deo",
                  id: "veml",
                  suffix: "@example.com",
                  "hide-details": ""
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_label, {
                class: "font-weight-medium mb-2",
                for: "vph"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Phone No`);
                  } else {
                    return [
                      createTextVNode("Phone No")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_VTextField, {
                type: "text",
                placeholder: "412 2150 451",
                id: "vph",
                "hide-details": ""
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_label, {
                  class: "font-weight-medium mb-2",
                  for: "vph"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Phone No")
                  ]),
                  _: 1
                }),
                createVNode(_component_VTextField, {
                  type: "text",
                  placeholder: "412 2150 451",
                  id: "vph",
                  "hide-details": ""
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_label, {
                class: "font-weight-medium mb-2",
                for: "vmsg"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Message`);
                  } else {
                    return [
                      createTextVNode("Message")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_VTextarea, {
                "auto-grow": "",
                placeholder: "Hi, Do you  have a moment to talk Jeo ?",
                rows: "2",
                color: "primary",
                "row-height": "25",
                shaped: "",
                "hide-details": "",
                id: "vmsg"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_label, {
                  class: "font-weight-medium mb-2",
                  for: "vmsg"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Message")
                  ]),
                  _: 1
                }),
                createVNode(_component_VTextarea, {
                  "auto-grow": "",
                  placeholder: "Hi, Do you  have a moment to talk Jeo ?",
                  rows: "2",
                  color: "primary",
                  "row-height": "25",
                  shaped: "",
                  "hide-details": "",
                  id: "vmsg"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_col, {
          cols: "12",
          class: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_btn, {
                color: "primary",
                rounded: "pill"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Send`);
                  } else {
                    return [
                      createTextVNode("Send")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_btn, {
                  color: "primary",
                  rounded: "pill"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Send")
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
              createVNode(_component_v_label, {
                class: "font-weight-medium mb-2",
                for: "vnm"
              }, {
                default: withCtx(() => [
                  createTextVNode("Name")
                ]),
                _: 1
              }),
              createVNode(_component_VTextField, {
                type: "text",
                placeholder: "John Deo",
                id: "vnm",
                "hide-details": ""
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_col, { cols: "12" }, {
            default: withCtx(() => [
              createVNode(_component_v_label, {
                class: "font-weight-medium mb-2",
                for: "vcnp"
              }, {
                default: withCtx(() => [
                  createTextVNode("Company")
                ]),
                _: 1
              }),
              createVNode(_component_VTextField, {
                type: "text",
                placeholder: "ACME Inc.",
                id: "vcnp",
                "hide-details": ""
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_col, { cols: "12" }, {
            default: withCtx(() => [
              createVNode(_component_v_label, {
                class: "font-weight-medium mb-2",
                for: "veml"
              }, {
                default: withCtx(() => [
                  createTextVNode("Email")
                ]),
                _: 1
              }),
              createVNode(_component_VTextField, {
                type: "email",
                placeholder: "john.deo",
                id: "veml",
                suffix: "@example.com",
                "hide-details": ""
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_col, { cols: "12" }, {
            default: withCtx(() => [
              createVNode(_component_v_label, {
                class: "font-weight-medium mb-2",
                for: "vph"
              }, {
                default: withCtx(() => [
                  createTextVNode("Phone No")
                ]),
                _: 1
              }),
              createVNode(_component_VTextField, {
                type: "text",
                placeholder: "412 2150 451",
                id: "vph",
                "hide-details": ""
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_col, { cols: "12" }, {
            default: withCtx(() => [
              createVNode(_component_v_label, {
                class: "font-weight-medium mb-2",
                for: "vmsg"
              }, {
                default: withCtx(() => [
                  createTextVNode("Message")
                ]),
                _: 1
              }),
              createVNode(_component_VTextarea, {
                "auto-grow": "",
                placeholder: "Hi, Do you  have a moment to talk Jeo ?",
                rows: "2",
                color: "primary",
                "row-height": "25",
                shaped: "",
                "hide-details": "",
                id: "vmsg"
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_col, {
            cols: "12",
            class: ""
          }, {
            default: withCtx(() => [
              createVNode(_component_v_btn, {
                color: "primary",
                rounded: "pill"
              }, {
                default: withCtx(() => [
                  createTextVNode("Send")
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-vertical/BasicLayout.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const BasicLayout = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "BasicWithIcons",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_label = resolveComponent("v-label");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_row, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "bvnm"
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
                    color: "primary",
                    variant: "outlined",
                    id: "bvnm",
                    type: "text",
                    placeholder: "John Deo",
                    "hide-details": ""
                  }, {
                    "prepend-inner": withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(UserIcon), {
                          "stroke-width": "1.5",
                          size: "22",
                          class: "text-medium-emphasis mr-3"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(UserIcon), {
                            "stroke-width": "1.5",
                            size: "22",
                            class: "text-medium-emphasis mr-3"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_label, {
                      class: "font-weight-medium mb-2",
                      for: "bvnm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Name")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      color: "primary",
                      variant: "outlined",
                      id: "bvnm",
                      type: "text",
                      placeholder: "John Deo",
                      "hide-details": ""
                    }, {
                      "prepend-inner": withCtx(() => [
                        createVNode(unref(UserIcon), {
                          "stroke-width": "1.5",
                          size: "22",
                          class: "text-medium-emphasis mr-3"
                        })
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
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "bvcmp"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Company`);
                      } else {
                        return [
                          createTextVNode("Company")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    color: "primary",
                    variant: "outlined",
                    type: "text",
                    id: "bvcmp",
                    placeholder: "ACME Inc.",
                    "hide-details": ""
                  }, {
                    "prepend-inner": withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(BuildingArchIcon), {
                          "stroke-width": "1.5",
                          size: "22",
                          class: "text-medium-emphasis mr-3"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(BuildingArchIcon), {
                            "stroke-width": "1.5",
                            size: "22",
                            class: "text-medium-emphasis mr-3"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_label, {
                      class: "font-weight-medium mb-2",
                      for: "bvcmp"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Company")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      color: "primary",
                      variant: "outlined",
                      type: "text",
                      id: "bvcmp",
                      placeholder: "ACME Inc.",
                      "hide-details": ""
                    }, {
                      "prepend-inner": withCtx(() => [
                        createVNode(unref(BuildingArchIcon), {
                          "stroke-width": "1.5",
                          size: "22",
                          class: "text-medium-emphasis mr-3"
                        })
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
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "bvempl"
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
                    color: "primary",
                    variant: "outlined",
                    type: "email",
                    id: "bvempl",
                    placeholder: "john.deo",
                    "hide-details": ""
                  }, {
                    "prepend-inner": withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(MailIcon), {
                          "stroke-width": "1.5",
                          size: "22",
                          class: "text-medium-emphasis mr-3"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(MailIcon), {
                            "stroke-width": "1.5",
                            size: "22",
                            class: "text-medium-emphasis mr-3"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_label, {
                      class: "font-weight-medium mb-2",
                      for: "bvempl"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Email")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      color: "primary",
                      variant: "outlined",
                      type: "email",
                      id: "bvempl",
                      placeholder: "john.deo",
                      "hide-details": ""
                    }, {
                      "prepend-inner": withCtx(() => [
                        createVNode(unref(MailIcon), {
                          "stroke-width": "1.5",
                          size: "22",
                          class: "text-medium-emphasis mr-3"
                        })
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
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "bvph"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Phone No`);
                      } else {
                        return [
                          createTextVNode("Phone No")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    color: "primary",
                    variant: "outlined",
                    type: "text",
                    id: "bvph",
                    placeholder: "412 2150 451",
                    "hide-details": ""
                  }, {
                    "prepend-inner": withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(PhoneIcon), {
                          "stroke-width": "1.5",
                          size: "22",
                          class: "text-medium-emphasis mr-3"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(PhoneIcon), {
                            "stroke-width": "1.5",
                            size: "22",
                            class: "text-medium-emphasis mr-3"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_label, {
                      class: "font-weight-medium mb-2",
                      for: "bvph"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Phone No")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      color: "primary",
                      variant: "outlined",
                      type: "text",
                      id: "bvph",
                      placeholder: "412 2150 451",
                      "hide-details": ""
                    }, {
                      "prepend-inner": withCtx(() => [
                        createVNode(unref(PhoneIcon), {
                          "stroke-width": "1.5",
                          size: "22",
                          class: "text-medium-emphasis mr-3"
                        })
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
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "bvmsg"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Message`);
                      } else {
                        return [
                          createTextVNode("Message")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_textarea, {
                    "auto-grow": "",
                    variant: "outlined",
                    placeholder: "Hi, Do you  have a moment to talk Jeo ?",
                    rows: "2",
                    color: "primary",
                    "row-height": "25",
                    shaped: "",
                    "hide-details": "",
                    id: "bvmsg"
                  }, {
                    "prepend-inner": withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Message2Icon), {
                          "stroke-width": "1.5",
                          size: "22",
                          class: "text-medium-emphasis mr-3"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Message2Icon), {
                            "stroke-width": "1.5",
                            size: "22",
                            class: "text-medium-emphasis mr-3"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_label, {
                      class: "font-weight-medium mb-2",
                      for: "bvmsg"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Message")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_textarea, {
                      "auto-grow": "",
                      variant: "outlined",
                      placeholder: "Hi, Do you  have a moment to talk Jeo ?",
                      rows: "2",
                      color: "primary",
                      "row-height": "25",
                      shaped: "",
                      "hide-details": "",
                      id: "bvmsg"
                    }, {
                      "prepend-inner": withCtx(() => [
                        createVNode(unref(Message2Icon), {
                          "stroke-width": "1.5",
                          size: "22",
                          class: "text-medium-emphasis mr-3"
                        })
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
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "primary",
                    rounded: "pill"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Send`);
                      } else {
                        return [
                          createTextVNode("Send")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      color: "primary",
                      rounded: "pill"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Send")
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
                  createVNode(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "bvnm"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Name")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    color: "primary",
                    variant: "outlined",
                    id: "bvnm",
                    type: "text",
                    placeholder: "John Deo",
                    "hide-details": ""
                  }, {
                    "prepend-inner": withCtx(() => [
                      createVNode(unref(UserIcon), {
                        "stroke-width": "1.5",
                        size: "22",
                        class: "text-medium-emphasis mr-3"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "bvcmp"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Company")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    color: "primary",
                    variant: "outlined",
                    type: "text",
                    id: "bvcmp",
                    placeholder: "ACME Inc.",
                    "hide-details": ""
                  }, {
                    "prepend-inner": withCtx(() => [
                      createVNode(unref(BuildingArchIcon), {
                        "stroke-width": "1.5",
                        size: "22",
                        class: "text-medium-emphasis mr-3"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "bvempl"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Email")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    color: "primary",
                    variant: "outlined",
                    type: "email",
                    id: "bvempl",
                    placeholder: "john.deo",
                    "hide-details": ""
                  }, {
                    "prepend-inner": withCtx(() => [
                      createVNode(unref(MailIcon), {
                        "stroke-width": "1.5",
                        size: "22",
                        class: "text-medium-emphasis mr-3"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "bvph"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Phone No")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    color: "primary",
                    variant: "outlined",
                    type: "text",
                    id: "bvph",
                    placeholder: "412 2150 451",
                    "hide-details": ""
                  }, {
                    "prepend-inner": withCtx(() => [
                      createVNode(unref(PhoneIcon), {
                        "stroke-width": "1.5",
                        size: "22",
                        class: "text-medium-emphasis mr-3"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "bvmsg"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Message")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_textarea, {
                    "auto-grow": "",
                    variant: "outlined",
                    placeholder: "Hi, Do you  have a moment to talk Jeo ?",
                    rows: "2",
                    color: "primary",
                    "row-height": "25",
                    shaped: "",
                    "hide-details": "",
                    id: "bvmsg"
                  }, {
                    "prepend-inner": withCtx(() => [
                      createVNode(unref(Message2Icon), {
                        "stroke-width": "1.5",
                        size: "22",
                        class: "text-medium-emphasis mr-3"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_btn, {
                    color: "primary",
                    rounded: "pill"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Send")
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-vertical/BasicWithIcons.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "FormSeprator",
  __ssrInlineRender: true,
  setup(__props) {
    const show2 = ref(true);
    const show3 = ref(true);
    const select = ref("");
    const location = ref(["India", "United Kingdom", "Srilanka"]);
    const selectlng = ref("");
    const lang = ref(["English", "French"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_label = resolveComponent("v-label");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-sm-flex align-center justify-space-between"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_card_title, { class: "text-h5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Multi Column with Form Separator`);
                      } else {
                        return [
                          createTextVNode("Multi Column with Form Separator")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-sm-flex align-center justify-space-between" }, [
                      createVNode(_component_v_card_title, { class: "text-h5" }, {
                        default: withCtx(() => [
                          createTextVNode("Multi Column with Form Separator")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_divider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_text, { class: "pb-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6 class="text-h6"${_scopeId2}>Account Details</h6>`);
                  _push3(ssrRenderComponent(_component_v_row, { class: "mt-5 mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="mb-6"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vfsunm"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Username`);
                                  } else {
                                    return [
                                      createTextVNode("Username")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "vfsunm",
                                type: "text",
                                placeholder: "John Deo",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class=""${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vfpwd1"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Password`);
                                  } else {
                                    return [
                                      createTextVNode("Password")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: show2.value ? "text" : "password",
                                placeholder: "john.deo",
                                "hide-details": "",
                                "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                                "onClick:appendInner": ($event) => show2.value = !show2.value,
                                id: "vfpwd1"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "mb-6" }, [
                                  createVNode(_component_v_label, {
                                    class: "font-weight-medium mb-2",
                                    for: "vfsunm"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Username")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    color: "primary",
                                    variant: "outlined",
                                    id: "vfsunm",
                                    type: "text",
                                    placeholder: "John Deo",
                                    "hide-details": ""
                                  })
                                ]),
                                createVNode("div", { class: "" }, [
                                  createVNode(_component_v_label, {
                                    class: "font-weight-medium mb-2",
                                    for: "vfpwd1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Password")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    color: "primary",
                                    variant: "outlined",
                                    type: show2.value ? "text" : "password",
                                    placeholder: "john.deo",
                                    "hide-details": "",
                                    "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                                    "onClick:appendInner": ($event) => show2.value = !show2.value,
                                    id: "vfpwd1"
                                  }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                                ])
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
                              _push5(`<div class="mb-6"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vfemp1"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Email`);
                                  } else {
                                    return [
                                      createTextVNode("Email")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: "email",
                                placeholder: "john.deo",
                                suffix: "@example.com",
                                id: "vfemp1",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vfcmpp"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Confirm Password`);
                                  } else {
                                    return [
                                      createTextVNode("Confirm Password")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: show3.value ? "text" : "password",
                                placeholder: "john.deo",
                                "hide-details": "",
                                "append-inner-icon": show3.value ? "mdi-eye" : "mdi-eye-off",
                                "onClick:appendInner": ($event) => show3.value = !show3.value,
                                id: "vfcmpp"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "mb-6" }, [
                                  createVNode(_component_v_label, {
                                    class: "font-weight-medium mb-2",
                                    for: "vfemp1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Email")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    color: "primary",
                                    variant: "outlined",
                                    type: "email",
                                    placeholder: "john.deo",
                                    suffix: "@example.com",
                                    id: "vfemp1",
                                    "hide-details": ""
                                  })
                                ]),
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium mb-2",
                                  for: "vfcmpp"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Confirm Password")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  type: show3.value ? "text" : "password",
                                  placeholder: "john.deo",
                                  "hide-details": "",
                                  "append-inner-icon": show3.value ? "mdi-eye" : "mdi-eye-off",
                                  "onClick:appendInner": ($event) => show3.value = !show3.value,
                                  id: "vfcmpp"
                                }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
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
                              createVNode("div", { class: "mb-6" }, [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium mb-2",
                                  for: "vfsunm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Username")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "vfsunm",
                                  type: "text",
                                  placeholder: "John Deo",
                                  "hide-details": ""
                                })
                              ]),
                              createVNode("div", { class: "" }, [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium mb-2",
                                  for: "vfpwd1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Password")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  type: show2.value ? "text" : "password",
                                  placeholder: "john.deo",
                                  "hide-details": "",
                                  "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                                  "onClick:appendInner": ($event) => show2.value = !show2.value,
                                  id: "vfpwd1"
                                }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-6" }, [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium mb-2",
                                  for: "vfemp1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Email")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  type: "email",
                                  placeholder: "john.deo",
                                  suffix: "@example.com",
                                  id: "vfemp1",
                                  "hide-details": ""
                                })
                              ]),
                              createVNode(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vfcmpp"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Confirm Password")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: show3.value ? "text" : "password",
                                placeholder: "john.deo",
                                "hide-details": "",
                                "append-inner-icon": show3.value ? "mdi-eye" : "mdi-eye-off",
                                "onClick:appendInner": ($event) => show3.value = !show3.value,
                                id: "vfcmpp"
                              }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
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
                    createVNode("h6", { class: "text-h6" }, "Account Details"),
                    createVNode(_component_v_row, { class: "mt-5 mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-6" }, [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vfsunm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Username")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "vfsunm",
                                type: "text",
                                placeholder: "John Deo",
                                "hide-details": ""
                              })
                            ]),
                            createVNode("div", { class: "" }, [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vfpwd1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Password")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: show2.value ? "text" : "password",
                                placeholder: "john.deo",
                                "hide-details": "",
                                "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                                "onClick:appendInner": ($event) => show2.value = !show2.value,
                                id: "vfpwd1"
                              }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-6" }, [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vfemp1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Email")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: "email",
                                placeholder: "john.deo",
                                suffix: "@example.com",
                                id: "vfemp1",
                                "hide-details": ""
                              })
                            ]),
                            createVNode(_component_v_label, {
                              class: "font-weight-medium mb-2",
                              for: "vfcmpp"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Confirm Password")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              type: show3.value ? "text" : "password",
                              placeholder: "john.deo",
                              "hide-details": "",
                              "append-inner-icon": show3.value ? "mdi-eye" : "mdi-eye-off",
                              "onClick:appendInner": ($event) => show3.value = !show3.value,
                              id: "vfcmpp"
                            }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
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
            _push2(ssrRenderComponent(_component_v_divider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_text, { class: "pb-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6 class="text-h6"${_scopeId2}>Personal Info</h6>`);
                  _push3(ssrRenderComponent(_component_v_row, { class: "mt-5 mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="mb-6"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vffs"
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
                                color: "primary",
                                variant: "outlined",
                                id: "vffs",
                                type: "text",
                                placeholder: "John Deo",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="mb-6"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vfcntry"
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
                                modelValue: select.value,
                                "onUpdate:modelValue": ($event) => select.value = $event,
                                items: location.value,
                                "item-title": "state",
                                "item-value": "abbr",
                                label: "Select",
                                "return-object": "",
                                "single-line": "",
                                variant: "outlined",
                                "hide-details": "",
                                id: "vfcntry"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vfdob1"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Birth Date`);
                                  } else {
                                    return [
                                      createTextVNode("Birth Date")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "vfdob1",
                                type: "date",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "mb-6" }, [
                                  createVNode(_component_v_label, {
                                    class: "font-weight-medium mb-2",
                                    for: "vffs"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("First Name")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    color: "primary",
                                    variant: "outlined",
                                    id: "vffs",
                                    type: "text",
                                    placeholder: "John Deo",
                                    "hide-details": ""
                                  })
                                ]),
                                createVNode("div", { class: "mb-6" }, [
                                  createVNode(_component_v_label, {
                                    class: "font-weight-medium mb-2",
                                    for: "vfcntry"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Country")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_select, {
                                    modelValue: select.value,
                                    "onUpdate:modelValue": ($event) => select.value = $event,
                                    items: location.value,
                                    "item-title": "state",
                                    "item-value": "abbr",
                                    label: "Select",
                                    "return-object": "",
                                    "single-line": "",
                                    variant: "outlined",
                                    "hide-details": "",
                                    id: "vfcntry"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                ]),
                                createVNode("div", null, [
                                  createVNode(_component_v_label, {
                                    class: "font-weight-medium mb-2",
                                    for: "vfdob1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Birth Date")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    color: "primary",
                                    variant: "outlined",
                                    id: "vfdob1",
                                    type: "date",
                                    "hide-details": ""
                                  })
                                ])
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
                              _push5(`<div class="mb-6"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vfname1"
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
                                color: "primary",
                                variant: "outlined",
                                id: "vfname1",
                                type: "text",
                                placeholder: "Deo",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="mb-6"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vflngg"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Language`);
                                  } else {
                                    return [
                                      createTextVNode("Language")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_select, {
                                modelValue: selectlng.value,
                                "onUpdate:modelValue": ($event) => selectlng.value = $event,
                                items: lang.value,
                                id: "vflngg",
                                "single-line": "",
                                variant: "outlined",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vfphone1"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Phone No`);
                                  } else {
                                    return [
                                      createTextVNode("Phone No")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "vfphone1",
                                type: "text",
                                placeholder: "412 2150 451",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "mb-6" }, [
                                  createVNode(_component_v_label, {
                                    class: "font-weight-medium mb-2",
                                    for: "vfname1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Last Name")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    color: "primary",
                                    variant: "outlined",
                                    id: "vfname1",
                                    type: "text",
                                    placeholder: "Deo",
                                    "hide-details": ""
                                  })
                                ]),
                                createVNode("div", { class: "mb-6" }, [
                                  createVNode(_component_v_label, {
                                    class: "font-weight-medium mb-2",
                                    for: "vflngg"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Language")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_select, {
                                    modelValue: selectlng.value,
                                    "onUpdate:modelValue": ($event) => selectlng.value = $event,
                                    items: lang.value,
                                    id: "vflngg",
                                    "single-line": "",
                                    variant: "outlined",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                ]),
                                createVNode("div", null, [
                                  createVNode(_component_v_label, {
                                    class: "font-weight-medium mb-2",
                                    for: "vfphone1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Phone No")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    color: "primary",
                                    variant: "outlined",
                                    id: "vfphone1",
                                    type: "text",
                                    placeholder: "412 2150 451",
                                    "hide-details": ""
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "primary",
                                rounded: "pill"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Submit`);
                                  } else {
                                    return [
                                      createTextVNode("Submit")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_btn, {
                                class: "bg-lighterror text-error ml-4",
                                rounded: "pill"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Cancel`);
                                  } else {
                                    return [
                                      createTextVNode("Cancel")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  rounded: "pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Submit")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  class: "bg-lighterror text-error ml-4",
                                  rounded: "pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cancel")
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
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-6" }, [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium mb-2",
                                  for: "vffs"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("First Name")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "vffs",
                                  type: "text",
                                  placeholder: "John Deo",
                                  "hide-details": ""
                                })
                              ]),
                              createVNode("div", { class: "mb-6" }, [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium mb-2",
                                  for: "vfcntry"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Country")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_select, {
                                  modelValue: select.value,
                                  "onUpdate:modelValue": ($event) => select.value = $event,
                                  items: location.value,
                                  "item-title": "state",
                                  "item-value": "abbr",
                                  label: "Select",
                                  "return-object": "",
                                  "single-line": "",
                                  variant: "outlined",
                                  "hide-details": "",
                                  id: "vfcntry"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ]),
                              createVNode("div", null, [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium mb-2",
                                  for: "vfdob1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Birth Date")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "vfdob1",
                                  type: "date",
                                  "hide-details": ""
                                })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-6" }, [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium mb-2",
                                  for: "vfname1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Last Name")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "vfname1",
                                  type: "text",
                                  placeholder: "Deo",
                                  "hide-details": ""
                                })
                              ]),
                              createVNode("div", { class: "mb-6" }, [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium mb-2",
                                  for: "vflngg"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Language")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_select, {
                                  modelValue: selectlng.value,
                                  "onUpdate:modelValue": ($event) => selectlng.value = $event,
                                  items: lang.value,
                                  id: "vflngg",
                                  "single-line": "",
                                  variant: "outlined",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ]),
                              createVNode("div", null, [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium mb-2",
                                  for: "vfphone1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Phone No")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "vfphone1",
                                  type: "text",
                                  placeholder: "412 2150 451",
                                  "hide-details": ""
                                })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                color: "primary",
                                rounded: "pill"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Submit")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                class: "bg-lighterror text-error ml-4",
                                rounded: "pill"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Cancel")
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
                    createVNode("h6", { class: "text-h6" }, "Personal Info"),
                    createVNode(_component_v_row, { class: "mt-5 mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-6" }, [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vffs"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("First Name")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "vffs",
                                type: "text",
                                placeholder: "John Deo",
                                "hide-details": ""
                              })
                            ]),
                            createVNode("div", { class: "mb-6" }, [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vfcntry"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Country")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_select, {
                                modelValue: select.value,
                                "onUpdate:modelValue": ($event) => select.value = $event,
                                items: location.value,
                                "item-title": "state",
                                "item-value": "abbr",
                                label: "Select",
                                "return-object": "",
                                "single-line": "",
                                variant: "outlined",
                                "hide-details": "",
                                id: "vfcntry"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            createVNode("div", null, [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vfdob1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Birth Date")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "vfdob1",
                                type: "date",
                                "hide-details": ""
                              })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-6" }, [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vfname1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Last Name")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "vfname1",
                                type: "text",
                                placeholder: "Deo",
                                "hide-details": ""
                              })
                            ]),
                            createVNode("div", { class: "mb-6" }, [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vflngg"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Language")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_select, {
                                modelValue: selectlng.value,
                                "onUpdate:modelValue": ($event) => selectlng.value = $event,
                                items: lang.value,
                                id: "vflngg",
                                "single-line": "",
                                variant: "outlined",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            createVNode("div", null, [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vfphone1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Phone No")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "vfphone1",
                                type: "text",
                                placeholder: "412 2150 451",
                                "hide-details": ""
                              })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, {
                              color: "primary",
                              rounded: "pill"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Submit")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              class: "bg-lighterror text-error ml-4",
                              rounded: "pill"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Cancel")
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
              createVNode(_component_v_card_item, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-sm-flex align-center justify-space-between" }, [
                    createVNode(_component_v_card_title, { class: "text-h5" }, {
                      default: withCtx(() => [
                        createTextVNode("Multi Column with Form Separator")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_card_text, { class: "pb-0" }, {
                default: withCtx(() => [
                  createVNode("h6", { class: "text-h6" }, "Account Details"),
                  createVNode(_component_v_row, { class: "mt-5 mb-3" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mb-6" }, [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium mb-2",
                              for: "vfsunm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Username")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "vfsunm",
                              type: "text",
                              placeholder: "John Deo",
                              "hide-details": ""
                            })
                          ]),
                          createVNode("div", { class: "" }, [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium mb-2",
                              for: "vfpwd1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Password")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              type: show2.value ? "text" : "password",
                              placeholder: "john.deo",
                              "hide-details": "",
                              "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                              "onClick:appendInner": ($event) => show2.value = !show2.value,
                              id: "vfpwd1"
                            }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mb-6" }, [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium mb-2",
                              for: "vfemp1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Email")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              type: "email",
                              placeholder: "john.deo",
                              suffix: "@example.com",
                              id: "vfemp1",
                              "hide-details": ""
                            })
                          ]),
                          createVNode(_component_v_label, {
                            class: "font-weight-medium mb-2",
                            for: "vfcmpp"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Confirm Password")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_text_field, {
                            color: "primary",
                            variant: "outlined",
                            type: show3.value ? "text" : "password",
                            placeholder: "john.deo",
                            "hide-details": "",
                            "append-inner-icon": show3.value ? "mdi-eye" : "mdi-eye-off",
                            "onClick:appendInner": ($event) => show3.value = !show3.value,
                            id: "vfcmpp"
                          }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_card_text, { class: "pb-1" }, {
                default: withCtx(() => [
                  createVNode("h6", { class: "text-h6" }, "Personal Info"),
                  createVNode(_component_v_row, { class: "mt-5 mb-3" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mb-6" }, [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium mb-2",
                              for: "vffs"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("First Name")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "vffs",
                              type: "text",
                              placeholder: "John Deo",
                              "hide-details": ""
                            })
                          ]),
                          createVNode("div", { class: "mb-6" }, [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium mb-2",
                              for: "vfcntry"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Country")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_select, {
                              modelValue: select.value,
                              "onUpdate:modelValue": ($event) => select.value = $event,
                              items: location.value,
                              "item-title": "state",
                              "item-value": "abbr",
                              label: "Select",
                              "return-object": "",
                              "single-line": "",
                              variant: "outlined",
                              "hide-details": "",
                              id: "vfcntry"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          createVNode("div", null, [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium mb-2",
                              for: "vfdob1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Birth Date")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "vfdob1",
                              type: "date",
                              "hide-details": ""
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mb-6" }, [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium mb-2",
                              for: "vfname1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Last Name")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "vfname1",
                              type: "text",
                              placeholder: "Deo",
                              "hide-details": ""
                            })
                          ]),
                          createVNode("div", { class: "mb-6" }, [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium mb-2",
                              for: "vflngg"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Language")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_select, {
                              modelValue: selectlng.value,
                              "onUpdate:modelValue": ($event) => selectlng.value = $event,
                              items: lang.value,
                              id: "vflngg",
                              "single-line": "",
                              variant: "outlined",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          createVNode("div", null, [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium mb-2",
                              for: "vfphone1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Phone No")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "vfphone1",
                              type: "text",
                              placeholder: "412 2150 451",
                              "hide-details": ""
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
                            color: "primary",
                            rounded: "pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Submit")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_btn, {
                            class: "bg-lighterror text-error ml-4",
                            rounded: "pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cancel")
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-vertical/FormSeprator.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Collapsible",
  __ssrInlineRender: true,
  setup(__props) {
    const select = ref("");
    const location = ref(["Alaska", "Arizona", "Hawaii"]);
    const radioColumn = ref("1");
    const radioInline = ref("1");
    const paymentradio = ref("1");
    const openpanel = ref([0]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
      const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
      const _component_v_expansion_panel_title = resolveComponent("v-expansion-panel-title");
      const _component_v_expansion_panel_text = resolveComponent("v-expansion-panel-text");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_label = resolveComponent("v-label");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_radio_group = resolveComponent("v-radio-group");
      const _component_v_radio = resolveComponent("v-radio");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<!--[--><h5 class="text-h5 mb-6 mt-3">Collapsible Section</h5>`);
      _push(ssrRenderComponent(_component_v_expansion_panels, {
        modelValue: openpanel.value,
        "onUpdate:modelValue": ($event) => openpanel.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_expansion_panel, { elevation: "10" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_expansion_panel_title, { class: "text-h6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Delivery Address`);
                      } else {
                        return [
                          createTextVNode("Delivery Address")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_expansion_panel_text, { class: "mt-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_label, {
                                      class: "font-weight-medium mb-2",
                                      for: "vfname"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Full Name`);
                                        } else {
                                          return [
                                            createTextVNode("Full Name")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      id: "vfname",
                                      type: "text",
                                      placeholder: "John Deo",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_label, {
                                        class: "font-weight-medium mb-2",
                                        for: "vfname"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Full Name")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        id: "vfname",
                                        type: "text",
                                        placeholder: "John Deo",
                                        "hide-details": ""
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_label, {
                                      class: "font-weight-medium mb-2",
                                      for: "vfphno"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Phone No`);
                                        } else {
                                          return [
                                            createTextVNode("Phone No")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      id: "vfphno",
                                      type: "text",
                                      placeholder: "1340 2154 123",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_label, {
                                        class: "font-weight-medium mb-2",
                                        for: "vfphno"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Phone No")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        id: "vfphno",
                                        type: "text",
                                        placeholder: "1340 2154 123",
                                        "hide-details": ""
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_label, {
                                      class: "font-weight-medium mb-2",
                                      for: "vfaddd"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Address`);
                                        } else {
                                          return [
                                            createTextVNode("Address")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_textarea, {
                                      "auto-grow": "",
                                      variant: "outlined",
                                      placeholder: "150, Ring Road",
                                      rows: "2",
                                      color: "primary",
                                      "row-height": "25",
                                      shaped: "",
                                      id: "vfaddd",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_label, {
                                        class: "font-weight-medium mb-2",
                                        for: "vfaddd"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Address")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_textarea, {
                                        "auto-grow": "",
                                        variant: "outlined",
                                        placeholder: "150, Ring Road",
                                        rows: "2",
                                        color: "primary",
                                        "row-height": "25",
                                        shaped: "",
                                        id: "vfaddd",
                                        "hide-details": ""
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_label, {
                                      class: "font-weight-medium mb-2",
                                      for: "vfpncd"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Pincode`);
                                        } else {
                                          return [
                                            createTextVNode("Pincode")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      type: "text",
                                      id: "vfpncd",
                                      placeholder: "120125",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_label, {
                                        class: "font-weight-medium mb-2",
                                        for: "vfpncd"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Pincode")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        type: "text",
                                        id: "vfpncd",
                                        placeholder: "120125",
                                        "hide-details": ""
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_label, {
                                      class: "font-weight-medium mb-2",
                                      for: "vflmmp"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Landmark`);
                                        } else {
                                          return [
                                            createTextVNode("Landmark")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      id: "vflmmp",
                                      type: "text",
                                      placeholder: "Nr.Wall Street",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_label, {
                                        class: "font-weight-medium mb-2",
                                        for: "vflmmp"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Landmark")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        id: "vflmmp",
                                        type: "text",
                                        placeholder: "Nr.Wall Street",
                                        "hide-details": ""
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_label, {
                                      class: "font-weight-medium mb-2",
                                      for: "vfcty"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`City`);
                                        } else {
                                          return [
                                            createTextVNode("City")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      id: "vfcty",
                                      type: "text",
                                      placeholder: "Vadodara",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_label, {
                                        class: "font-weight-medium mb-2",
                                        for: "vfcty"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("City")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        id: "vfcty",
                                        type: "text",
                                        placeholder: "Vadodara",
                                        "hide-details": ""
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_label, {
                                      class: "font-weight-medium mb-2",
                                      for: "vfstt"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`State`);
                                        } else {
                                          return [
                                            createTextVNode("State")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_select, {
                                      modelValue: select.value,
                                      "onUpdate:modelValue": ($event) => select.value = $event,
                                      items: location.value,
                                      "item-title": "state",
                                      "item-value": "abbr",
                                      label: "Select",
                                      "return-object": "",
                                      "single-line": "",
                                      variant: "outlined",
                                      "hide-details": "",
                                      id: "vfstt"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_label, {
                                        class: "font-weight-medium mb-2",
                                        for: "vfstt"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("State")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_select, {
                                        modelValue: select.value,
                                        "onUpdate:modelValue": ($event) => select.value = $event,
                                        items: location.value,
                                        "item-title": "state",
                                        "item-value": "abbr",
                                        label: "Select",
                                        "return-object": "",
                                        "single-line": "",
                                        variant: "outlined",
                                        "hide-details": "",
                                        id: "vfstt"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_label, {
                                      class: "font-weight-medium mb-2",
                                      for: "vfaty"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Address Type`);
                                        } else {
                                          return [
                                            createTextVNode("Address Type")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_radio_group, {
                                      modelValue: radioColumn.value,
                                      "onUpdate:modelValue": ($event) => radioColumn.value = $event,
                                      inline: "",
                                      class: "ml-n3",
                                      "hide-details": ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_radio, {
                                            label: "Home (All day delivery)",
                                            color: "primary",
                                            value: "1",
                                            id: "vfaty"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_radio, {
                                            label: "Office (Delivery between 10 AM - 5 PM)",
                                            color: "primary",
                                            value: "2",
                                            id: "vfaty2"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_radio, {
                                              label: "Home (All day delivery)",
                                              color: "primary",
                                              value: "1",
                                              id: "vfaty"
                                            }),
                                            createVNode(_component_v_radio, {
                                              label: "Office (Delivery between 10 AM - 5 PM)",
                                              color: "primary",
                                              value: "2",
                                              id: "vfaty2"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_label, {
                                        class: "font-weight-medium mb-2",
                                        for: "vfaty"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Address Type")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_radio_group, {
                                        modelValue: radioColumn.value,
                                        "onUpdate:modelValue": ($event) => radioColumn.value = $event,
                                        inline: "",
                                        class: "ml-n3",
                                        "hide-details": ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_radio, {
                                            label: "Home (All day delivery)",
                                            color: "primary",
                                            value: "1",
                                            id: "vfaty"
                                          }),
                                          createVNode(_component_v_radio, {
                                            label: "Office (Delivery between 10 AM - 5 PM)",
                                            color: "primary",
                                            value: "2",
                                            id: "vfaty2"
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_label, {
                                      class: "font-weight-medium mb-2",
                                      for: "vfname"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Full Name")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      id: "vfname",
                                      type: "text",
                                      placeholder: "John Deo",
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
                                      class: "font-weight-medium mb-2",
                                      for: "vfphno"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Phone No")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      id: "vfphno",
                                      type: "text",
                                      placeholder: "1340 2154 123",
                                      "hide-details": ""
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_label, {
                                      class: "font-weight-medium mb-2",
                                      for: "vfaddd"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Address")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_textarea, {
                                      "auto-grow": "",
                                      variant: "outlined",
                                      placeholder: "150, Ring Road",
                                      rows: "2",
                                      color: "primary",
                                      "row-height": "25",
                                      shaped: "",
                                      id: "vfaddd",
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
                                      class: "font-weight-medium mb-2",
                                      for: "vfpncd"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Pincode")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      type: "text",
                                      id: "vfpncd",
                                      placeholder: "120125",
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
                                      class: "font-weight-medium mb-2",
                                      for: "vflmmp"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Landmark")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      id: "vflmmp",
                                      type: "text",
                                      placeholder: "Nr.Wall Street",
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
                                      class: "font-weight-medium mb-2",
                                      for: "vfcty"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("City")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      id: "vfcty",
                                      type: "text",
                                      placeholder: "Vadodara",
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
                                      class: "font-weight-medium mb-2",
                                      for: "vfstt"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("State")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_select, {
                                      modelValue: select.value,
                                      "onUpdate:modelValue": ($event) => select.value = $event,
                                      items: location.value,
                                      "item-title": "state",
                                      "item-value": "abbr",
                                      label: "Select",
                                      "return-object": "",
                                      "single-line": "",
                                      variant: "outlined",
                                      "hide-details": "",
                                      id: "vfstt"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_label, {
                                      class: "font-weight-medium mb-2",
                                      for: "vfaty"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Address Type")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_radio_group, {
                                      modelValue: radioColumn.value,
                                      "onUpdate:modelValue": ($event) => radioColumn.value = $event,
                                      inline: "",
                                      class: "ml-n3",
                                      "hide-details": ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_radio, {
                                          label: "Home (All day delivery)",
                                          color: "primary",
                                          value: "1",
                                          id: "vfaty"
                                        }),
                                        createVNode(_component_v_radio, {
                                          label: "Office (Delivery between 10 AM - 5 PM)",
                                          color: "primary",
                                          value: "2",
                                          id: "vfaty2"
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_label, {
                                    class: "font-weight-medium mb-2",
                                    for: "vfname"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Full Name")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    color: "primary",
                                    variant: "outlined",
                                    id: "vfname",
                                    type: "text",
                                    placeholder: "John Deo",
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
                                    class: "font-weight-medium mb-2",
                                    for: "vfphno"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Phone No")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    color: "primary",
                                    variant: "outlined",
                                    id: "vfphno",
                                    type: "text",
                                    placeholder: "1340 2154 123",
                                    "hide-details": ""
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_label, {
                                    class: "font-weight-medium mb-2",
                                    for: "vfaddd"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Address")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_textarea, {
                                    "auto-grow": "",
                                    variant: "outlined",
                                    placeholder: "150, Ring Road",
                                    rows: "2",
                                    color: "primary",
                                    "row-height": "25",
                                    shaped: "",
                                    id: "vfaddd",
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
                                    class: "font-weight-medium mb-2",
                                    for: "vfpncd"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Pincode")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    color: "primary",
                                    variant: "outlined",
                                    type: "text",
                                    id: "vfpncd",
                                    placeholder: "120125",
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
                                    class: "font-weight-medium mb-2",
                                    for: "vflmmp"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Landmark")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    color: "primary",
                                    variant: "outlined",
                                    id: "vflmmp",
                                    type: "text",
                                    placeholder: "Nr.Wall Street",
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
                                    class: "font-weight-medium mb-2",
                                    for: "vfcty"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("City")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    color: "primary",
                                    variant: "outlined",
                                    id: "vfcty",
                                    type: "text",
                                    placeholder: "Vadodara",
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
                                    class: "font-weight-medium mb-2",
                                    for: "vfstt"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("State")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_select, {
                                    modelValue: select.value,
                                    "onUpdate:modelValue": ($event) => select.value = $event,
                                    items: location.value,
                                    "item-title": "state",
                                    "item-value": "abbr",
                                    label: "Select",
                                    "return-object": "",
                                    "single-line": "",
                                    variant: "outlined",
                                    "hide-details": "",
                                    id: "vfstt"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_label, {
                                    class: "font-weight-medium mb-2",
                                    for: "vfaty"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Address Type")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_radio_group, {
                                    modelValue: radioColumn.value,
                                    "onUpdate:modelValue": ($event) => radioColumn.value = $event,
                                    inline: "",
                                    class: "ml-n3",
                                    "hide-details": ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_radio, {
                                        label: "Home (All day delivery)",
                                        color: "primary",
                                        value: "1",
                                        id: "vfaty"
                                      }),
                                      createVNode(_component_v_radio, {
                                        label: "Office (Delivery between 10 AM - 5 PM)",
                                        color: "primary",
                                        value: "2",
                                        id: "vfaty2"
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
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
                    createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                      default: withCtx(() => [
                        createTextVNode("Delivery Address")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_expansion_panel_text, { class: "mt-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium mb-2",
                                  for: "vfname"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Full Name")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "vfname",
                                  type: "text",
                                  placeholder: "John Deo",
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
                                  class: "font-weight-medium mb-2",
                                  for: "vfphno"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Phone No")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "vfphno",
                                  type: "text",
                                  placeholder: "1340 2154 123",
                                  "hide-details": ""
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium mb-2",
                                  for: "vfaddd"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Address")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_textarea, {
                                  "auto-grow": "",
                                  variant: "outlined",
                                  placeholder: "150, Ring Road",
                                  rows: "2",
                                  color: "primary",
                                  "row-height": "25",
                                  shaped: "",
                                  id: "vfaddd",
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
                                  class: "font-weight-medium mb-2",
                                  for: "vfpncd"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Pincode")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  type: "text",
                                  id: "vfpncd",
                                  placeholder: "120125",
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
                                  class: "font-weight-medium mb-2",
                                  for: "vflmmp"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Landmark")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "vflmmp",
                                  type: "text",
                                  placeholder: "Nr.Wall Street",
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
                                  class: "font-weight-medium mb-2",
                                  for: "vfcty"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("City")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "vfcty",
                                  type: "text",
                                  placeholder: "Vadodara",
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
                                  class: "font-weight-medium mb-2",
                                  for: "vfstt"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("State")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_select, {
                                  modelValue: select.value,
                                  "onUpdate:modelValue": ($event) => select.value = $event,
                                  items: location.value,
                                  "item-title": "state",
                                  "item-value": "abbr",
                                  label: "Select",
                                  "return-object": "",
                                  "single-line": "",
                                  variant: "outlined",
                                  "hide-details": "",
                                  id: "vfstt"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium mb-2",
                                  for: "vfaty"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Address Type")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_radio_group, {
                                  modelValue: radioColumn.value,
                                  "onUpdate:modelValue": ($event) => radioColumn.value = $event,
                                  inline: "",
                                  class: "ml-n3",
                                  "hide-details": ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_radio, {
                                      label: "Home (All day delivery)",
                                      color: "primary",
                                      value: "1",
                                      id: "vfaty"
                                    }),
                                    createVNode(_component_v_radio, {
                                      label: "Office (Delivery between 10 AM - 5 PM)",
                                      color: "primary",
                                      value: "2",
                                      id: "vfaty2"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
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
            _push2(ssrRenderComponent(_component_v_expansion_panel, {
              elevation: "10",
              class: "mt-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_expansion_panel_title, { class: "text-h6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Delivery Options`);
                      } else {
                        return [
                          createTextVNode("Delivery Options")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_expansion_panel_text, { class: "mt-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_radio_group, {
                          modelValue: radioInline.value,
                          "onUpdate:modelValue": ($event) => radioInline.value = $event,
                          inline: "",
                          "hide-details": "",
                          class: "ml-n3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Standard 3-5 Days",
                                color: "primary",
                                value: "1"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Express",
                                color: "primary",
                                value: "2"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Overnight",
                                color: "primary",
                                value: "3"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_radio, {
                                  label: "Standard 3-5 Days",
                                  color: "primary",
                                  value: "1"
                                }),
                                createVNode(_component_v_radio, {
                                  label: "Express",
                                  color: "primary",
                                  value: "2"
                                }),
                                createVNode(_component_v_radio, {
                                  label: "Overnight",
                                  color: "primary",
                                  value: "3"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_radio_group, {
                            modelValue: radioInline.value,
                            "onUpdate:modelValue": ($event) => radioInline.value = $event,
                            inline: "",
                            "hide-details": "",
                            class: "ml-n3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_radio, {
                                label: "Standard 3-5 Days",
                                color: "primary",
                                value: "1"
                              }),
                              createVNode(_component_v_radio, {
                                label: "Express",
                                color: "primary",
                                value: "2"
                              }),
                              createVNode(_component_v_radio, {
                                label: "Overnight",
                                color: "primary",
                                value: "3"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                      default: withCtx(() => [
                        createTextVNode("Delivery Options")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_expansion_panel_text, { class: "mt-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_radio_group, {
                          modelValue: radioInline.value,
                          "onUpdate:modelValue": ($event) => radioInline.value = $event,
                          inline: "",
                          "hide-details": "",
                          class: "ml-n3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_radio, {
                              label: "Standard 3-5 Days",
                              color: "primary",
                              value: "1"
                            }),
                            createVNode(_component_v_radio, {
                              label: "Express",
                              color: "primary",
                              value: "2"
                            }),
                            createVNode(_component_v_radio, {
                              label: "Overnight",
                              color: "primary",
                              value: "3"
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_expansion_panel, {
              elevation: "10",
              class: "mt-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_expansion_panel_title, { class: "text-h6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Payment Method`);
                      } else {
                        return [
                          createTextVNode("Payment Method")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_expansion_panel_text, { class: "mt-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_radio_group, {
                          modelValue: paymentradio.value,
                          "onUpdate:modelValue": ($event) => paymentradio.value = $event,
                          inline: "",
                          "hide-details": "",
                          class: "ml-n3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Credit/Debit/ATM Card",
                                color: "primary",
                                value: "1"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_radio, {
                                label: "Cash on Delivery",
                                color: "primary",
                                value: "2"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_radio, {
                                  label: "Credit/Debit/ATM Card",
                                  color: "primary",
                                  value: "1"
                                }),
                                createVNode(_component_v_radio, {
                                  label: "Cash on Delivery",
                                  color: "primary",
                                  value: "2"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_row, { class: "mt-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "8"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_label, {
                                      class: "mb-2 font-weight-medium",
                                      for: "vcdnm"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Card Number`);
                                        } else {
                                          return [
                                            createTextVNode("Card Number")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      id: "vcdnm",
                                      type: "text",
                                      placeholder: "1250 4521 5630 1540"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_row, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, {
                                                  class: "mb-2 font-weight-medium",
                                                  for: "vcnm"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Name`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Name")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  id: "vcnm",
                                                  type: "text",
                                                  placeholder: "John Deo",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, {
                                                    class: "mb-2 font-weight-medium",
                                                    for: "vcnm"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Name")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_text_field, {
                                                    color: "primary",
                                                    variant: "outlined",
                                                    id: "vcnm",
                                                    type: "text",
                                                    placeholder: "John Deo",
                                                    "hide-details": ""
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            md: "3",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, {
                                                  class: "mb-2 font-weight-medium",
                                                  for: "vcexpd"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Exp. Date`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Exp. Date")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  id: "vcexpd",
                                                  type: "text",
                                                  placeholder: "MM/YY",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, {
                                                    class: "mb-2 font-weight-medium",
                                                    for: "vcexpd"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Exp. Date")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_text_field, {
                                                    color: "primary",
                                                    variant: "outlined",
                                                    id: "vcexpd",
                                                    type: "text",
                                                    placeholder: "MM/YY",
                                                    "hide-details": ""
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            md: "3",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, {
                                                  class: "mb-2 font-weight-medium",
                                                  for: "vcvv"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`CVV Code`);
                                                    } else {
                                                      return [
                                                        createTextVNode("CVV Code")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  id: "vcvv",
                                                  type: "text",
                                                  placeholder: "456",
                                                  "hide-details": ""
                                                }, {
                                                  "append-inner": withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(unref(HelpIcon), {
                                                        "stroke-width": "1.5",
                                                        size: "22",
                                                        class: "text-medium-emphasis ml-3"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(unref(HelpIcon), {
                                                          "stroke-width": "1.5",
                                                          size: "22",
                                                          class: "text-medium-emphasis ml-3"
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, {
                                                    class: "mb-2 font-weight-medium",
                                                    for: "vcvv"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("CVV Code")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_text_field, {
                                                    color: "primary",
                                                    variant: "outlined",
                                                    id: "vcvv",
                                                    type: "text",
                                                    placeholder: "456",
                                                    "hide-details": ""
                                                  }, {
                                                    "append-inner": withCtx(() => [
                                                      createVNode(unref(HelpIcon), {
                                                        "stroke-width": "1.5",
                                                        size: "22",
                                                        class: "text-medium-emphasis ml-3"
                                                      })
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
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, {
                                                  class: "mb-2 font-weight-medium",
                                                  for: "vcnm"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Name")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  id: "vcnm",
                                                  type: "text",
                                                  placeholder: "John Deo",
                                                  "hide-details": ""
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "3",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, {
                                                  class: "mb-2 font-weight-medium",
                                                  for: "vcexpd"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Exp. Date")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  id: "vcexpd",
                                                  type: "text",
                                                  placeholder: "MM/YY",
                                                  "hide-details": ""
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "3",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, {
                                                  class: "mb-2 font-weight-medium",
                                                  for: "vcvv"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("CVV Code")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  id: "vcvv",
                                                  type: "text",
                                                  placeholder: "456",
                                                  "hide-details": ""
                                                }, {
                                                  "append-inner": withCtx(() => [
                                                    createVNode(unref(HelpIcon), {
                                                      "stroke-width": "1.5",
                                                      size: "22",
                                                      class: "text-medium-emphasis ml-3"
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_label, {
                                        class: "mb-2 font-weight-medium",
                                        for: "vcdnm"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Card Number")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        id: "vcdnm",
                                        type: "text",
                                        placeholder: "1250 4521 5630 1540"
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
                                                for: "vcnm"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Name")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_text_field, {
                                                color: "primary",
                                                variant: "outlined",
                                                id: "vcnm",
                                                type: "text",
                                                placeholder: "John Deo",
                                                "hide-details": ""
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "3",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, {
                                                class: "mb-2 font-weight-medium",
                                                for: "vcexpd"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Exp. Date")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_text_field, {
                                                color: "primary",
                                                variant: "outlined",
                                                id: "vcexpd",
                                                type: "text",
                                                placeholder: "MM/YY",
                                                "hide-details": ""
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "3",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, {
                                                class: "mb-2 font-weight-medium",
                                                for: "vcvv"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("CVV Code")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_text_field, {
                                                color: "primary",
                                                variant: "outlined",
                                                id: "vcvv",
                                                type: "text",
                                                placeholder: "456",
                                                "hide-details": ""
                                              }, {
                                                "append-inner": withCtx(() => [
                                                  createVNode(unref(HelpIcon), {
                                                    "stroke-width": "1.5",
                                                    size: "22",
                                                    class: "text-medium-emphasis ml-3"
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      color: "primary",
                                      rounded: "pill"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Submit`);
                                        } else {
                                          return [
                                            createTextVNode("Submit")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      class: "bg-lighterror text-error ml-4",
                                      rounded: "pill"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Cancel`);
                                        } else {
                                          return [
                                            createTextVNode("Cancel")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_btn, {
                                        color: "primary",
                                        rounded: "pill"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Submit")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_btn, {
                                        class: "bg-lighterror text-error ml-4",
                                        rounded: "pill"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Cancel")
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
                                  md: "8"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_label, {
                                      class: "mb-2 font-weight-medium",
                                      for: "vcdnm"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Card Number")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      id: "vcdnm",
                                      type: "text",
                                      placeholder: "1250 4521 5630 1540"
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
                                              for: "vcnm"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Name")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              variant: "outlined",
                                              id: "vcnm",
                                              type: "text",
                                              placeholder: "John Deo",
                                              "hide-details": ""
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "3",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, {
                                              class: "mb-2 font-weight-medium",
                                              for: "vcexpd"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Exp. Date")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              variant: "outlined",
                                              id: "vcexpd",
                                              type: "text",
                                              placeholder: "MM/YY",
                                              "hide-details": ""
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "3",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, {
                                              class: "mb-2 font-weight-medium",
                                              for: "vcvv"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("CVV Code")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              variant: "outlined",
                                              id: "vcvv",
                                              type: "text",
                                              placeholder: "456",
                                              "hide-details": ""
                                            }, {
                                              "append-inner": withCtx(() => [
                                                createVNode(unref(HelpIcon), {
                                                  "stroke-width": "1.5",
                                                  size: "22",
                                                  class: "text-medium-emphasis ml-3"
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
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      color: "primary",
                                      rounded: "pill"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Submit")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_btn, {
                                      class: "bg-lighterror text-error ml-4",
                                      rounded: "pill"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Cancel")
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
                          createVNode(_component_v_radio_group, {
                            modelValue: paymentradio.value,
                            "onUpdate:modelValue": ($event) => paymentradio.value = $event,
                            inline: "",
                            "hide-details": "",
                            class: "ml-n3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_radio, {
                                label: "Credit/Debit/ATM Card",
                                color: "primary",
                                value: "1"
                              }),
                              createVNode(_component_v_radio, {
                                label: "Cash on Delivery",
                                color: "primary",
                                value: "2"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_v_row, { class: "mt-4" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "8"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_label, {
                                    class: "mb-2 font-weight-medium",
                                    for: "vcdnm"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Card Number")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    color: "primary",
                                    variant: "outlined",
                                    id: "vcdnm",
                                    type: "text",
                                    placeholder: "1250 4521 5630 1540"
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
                                            for: "vcnm"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Name")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            id: "vcnm",
                                            type: "text",
                                            placeholder: "John Deo",
                                            "hide-details": ""
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "3",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, {
                                            class: "mb-2 font-weight-medium",
                                            for: "vcexpd"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Exp. Date")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            id: "vcexpd",
                                            type: "text",
                                            placeholder: "MM/YY",
                                            "hide-details": ""
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "3",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, {
                                            class: "mb-2 font-weight-medium",
                                            for: "vcvv"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("CVV Code")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            id: "vcvv",
                                            type: "text",
                                            placeholder: "456",
                                            "hide-details": ""
                                          }, {
                                            "append-inner": withCtx(() => [
                                              createVNode(unref(HelpIcon), {
                                                "stroke-width": "1.5",
                                                size: "22",
                                                class: "text-medium-emphasis ml-3"
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
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_btn, {
                                    color: "primary",
                                    rounded: "pill"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Submit")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_btn, {
                                    class: "bg-lighterror text-error ml-4",
                                    rounded: "pill"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cancel")
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
                    createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                      default: withCtx(() => [
                        createTextVNode("Payment Method")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_expansion_panel_text, { class: "mt-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_radio_group, {
                          modelValue: paymentradio.value,
                          "onUpdate:modelValue": ($event) => paymentradio.value = $event,
                          inline: "",
                          "hide-details": "",
                          class: "ml-n3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_radio, {
                              label: "Credit/Debit/ATM Card",
                              color: "primary",
                              value: "1"
                            }),
                            createVNode(_component_v_radio, {
                              label: "Cash on Delivery",
                              color: "primary",
                              value: "2"
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_v_row, { class: "mt-4" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "8"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_label, {
                                  class: "mb-2 font-weight-medium",
                                  for: "vcdnm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Card Number")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "vcdnm",
                                  type: "text",
                                  placeholder: "1250 4521 5630 1540"
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
                                          for: "vcnm"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Name")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          id: "vcnm",
                                          type: "text",
                                          placeholder: "John Deo",
                                          "hide-details": ""
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "3",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, {
                                          class: "mb-2 font-weight-medium",
                                          for: "vcexpd"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Exp. Date")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          id: "vcexpd",
                                          type: "text",
                                          placeholder: "MM/YY",
                                          "hide-details": ""
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "3",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, {
                                          class: "mb-2 font-weight-medium",
                                          for: "vcvv"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("CVV Code")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          id: "vcvv",
                                          type: "text",
                                          placeholder: "456",
                                          "hide-details": ""
                                        }, {
                                          "append-inner": withCtx(() => [
                                            createVNode(unref(HelpIcon), {
                                              "stroke-width": "1.5",
                                              size: "22",
                                              class: "text-medium-emphasis ml-3"
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
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  rounded: "pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Submit")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  class: "bg-lighterror text-error ml-4",
                                  rounded: "pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cancel")
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
              createVNode(_component_v_expansion_panel, { elevation: "10" }, {
                default: withCtx(() => [
                  createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                    default: withCtx(() => [
                      createTextVNode("Delivery Address")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_expansion_panel_text, { class: "mt-4" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vfname"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Full Name")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "vfname",
                                type: "text",
                                placeholder: "John Deo",
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
                                class: "font-weight-medium mb-2",
                                for: "vfphno"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Phone No")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "vfphno",
                                type: "text",
                                placeholder: "1340 2154 123",
                                "hide-details": ""
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vfaddd"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Address")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_textarea, {
                                "auto-grow": "",
                                variant: "outlined",
                                placeholder: "150, Ring Road",
                                rows: "2",
                                color: "primary",
                                "row-height": "25",
                                shaped: "",
                                id: "vfaddd",
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
                                class: "font-weight-medium mb-2",
                                for: "vfpncd"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Pincode")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: "text",
                                id: "vfpncd",
                                placeholder: "120125",
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
                                class: "font-weight-medium mb-2",
                                for: "vflmmp"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Landmark")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "vflmmp",
                                type: "text",
                                placeholder: "Nr.Wall Street",
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
                                class: "font-weight-medium mb-2",
                                for: "vfcty"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("City")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "vfcty",
                                type: "text",
                                placeholder: "Vadodara",
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
                                class: "font-weight-medium mb-2",
                                for: "vfstt"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("State")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_select, {
                                modelValue: select.value,
                                "onUpdate:modelValue": ($event) => select.value = $event,
                                items: location.value,
                                "item-title": "state",
                                "item-value": "abbr",
                                label: "Select",
                                "return-object": "",
                                "single-line": "",
                                variant: "outlined",
                                "hide-details": "",
                                id: "vfstt"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium mb-2",
                                for: "vfaty"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Address Type")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_radio_group, {
                                modelValue: radioColumn.value,
                                "onUpdate:modelValue": ($event) => radioColumn.value = $event,
                                inline: "",
                                class: "ml-n3",
                                "hide-details": ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_radio, {
                                    label: "Home (All day delivery)",
                                    color: "primary",
                                    value: "1",
                                    id: "vfaty"
                                  }),
                                  createVNode(_component_v_radio, {
                                    label: "Office (Delivery between 10 AM - 5 PM)",
                                    color: "primary",
                                    value: "2",
                                    id: "vfaty2"
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(_component_v_expansion_panel, {
                elevation: "10",
                class: "mt-3"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                    default: withCtx(() => [
                      createTextVNode("Delivery Options")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_expansion_panel_text, { class: "mt-4" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_radio_group, {
                        modelValue: radioInline.value,
                        "onUpdate:modelValue": ($event) => radioInline.value = $event,
                        inline: "",
                        "hide-details": "",
                        class: "ml-n3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_radio, {
                            label: "Standard 3-5 Days",
                            color: "primary",
                            value: "1"
                          }),
                          createVNode(_component_v_radio, {
                            label: "Express",
                            color: "primary",
                            value: "2"
                          }),
                          createVNode(_component_v_radio, {
                            label: "Overnight",
                            color: "primary",
                            value: "3"
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
              createVNode(_component_v_expansion_panel, {
                elevation: "10",
                class: "mt-3"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_expansion_panel_title, { class: "text-h6" }, {
                    default: withCtx(() => [
                      createTextVNode("Payment Method")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_expansion_panel_text, { class: "mt-4" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_radio_group, {
                        modelValue: paymentradio.value,
                        "onUpdate:modelValue": ($event) => paymentradio.value = $event,
                        inline: "",
                        "hide-details": "",
                        class: "ml-n3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_radio, {
                            label: "Credit/Debit/ATM Card",
                            color: "primary",
                            value: "1"
                          }),
                          createVNode(_component_v_radio, {
                            label: "Cash on Delivery",
                            color: "primary",
                            value: "2"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_row, { class: "mt-4" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "8"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "mb-2 font-weight-medium",
                                for: "vcdnm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Card Number")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "vcdnm",
                                type: "text",
                                placeholder: "1250 4521 5630 1540"
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
                                        for: "vcnm"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Name")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        id: "vcnm",
                                        type: "text",
                                        placeholder: "John Deo",
                                        "hide-details": ""
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "3",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, {
                                        class: "mb-2 font-weight-medium",
                                        for: "vcexpd"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Exp. Date")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        id: "vcexpd",
                                        type: "text",
                                        placeholder: "MM/YY",
                                        "hide-details": ""
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "3",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, {
                                        class: "mb-2 font-weight-medium",
                                        for: "vcvv"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("CVV Code")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        id: "vcvv",
                                        type: "text",
                                        placeholder: "456",
                                        "hide-details": ""
                                      }, {
                                        "append-inner": withCtx(() => [
                                          createVNode(unref(HelpIcon), {
                                            "stroke-width": "1.5",
                                            size: "22",
                                            class: "text-medium-emphasis ml-3"
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
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                color: "primary",
                                rounded: "pill"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Submit")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                class: "bg-lighterror text-error ml-4",
                                rounded: "pill"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Cancel")
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-vertical/Collapsible.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PersonalInfoTab",
  __ssrInlineRender: true,
  setup(__props) {
    const select = ref("");
    const location = ref(["India", "United Kingdom", "Srilanka"]);
    const selectlng = ref("");
    const language = ref(["English", "French"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_label = resolveComponent("v-label");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_row, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mb-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "vpifn"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`First Name`);
                      } else {
                        return [
                          createTextVNode("First Name")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    color: "primary",
                    variant: "outlined",
                    id: "vpifn",
                    type: "text",
                    placeholder: "John",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mb-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "vpicnt"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Country`);
                      } else {
                        return [
                          createTextVNode("Country")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_select, {
                    modelValue: select.value,
                    "onUpdate:modelValue": ($event) => select.value = $event,
                    items: location.value,
                    "single-line": "",
                    variant: "outlined",
                    id: "vpicnt",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "vpodob"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Birth Date`);
                      } else {
                        return [
                          createTextVNode("Birth Date")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    color: "primary",
                    variant: "outlined",
                    id: "vpodob",
                    type: "date",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "mb-6" }, [
                      createVNode(_component_v_label, {
                        class: "font-weight-medium mb-2",
                        for: "vpifn"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("First Name")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_text_field, {
                        color: "primary",
                        variant: "outlined",
                        id: "vpifn",
                        type: "text",
                        placeholder: "John",
                        "hide-details": ""
                      })
                    ]),
                    createVNode("div", { class: "mb-6" }, [
                      createVNode(_component_v_label, {
                        class: "font-weight-medium mb-2",
                        for: "vpicnt"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Country")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_select, {
                        modelValue: select.value,
                        "onUpdate:modelValue": ($event) => select.value = $event,
                        items: location.value,
                        "single-line": "",
                        variant: "outlined",
                        id: "vpicnt",
                        "hide-details": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_v_label, {
                        class: "font-weight-medium mb-2",
                        for: "vpodob"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Birth Date")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_text_field, {
                        color: "primary",
                        variant: "outlined",
                        id: "vpodob",
                        type: "date",
                        "hide-details": ""
                      })
                    ])
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
                  _push3(`<div class="mb-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "vplssnm"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Last Name`);
                      } else {
                        return [
                          createTextVNode("Last Name")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    color: "primary",
                    variant: "outlined",
                    id: "vplssnm",
                    type: "text",
                    placeholder: "Doe",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mb-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "vpilng"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Language`);
                      } else {
                        return [
                          createTextVNode("Language")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_select, {
                    modelValue: selectlng.value,
                    "onUpdate:modelValue": ($event) => selectlng.value = $event,
                    items: language.value,
                    id: "vpilng",
                    "single-line": "",
                    variant: "outlined",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "vpiphno"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Phone no`);
                      } else {
                        return [
                          createTextVNode("Phone no")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    color: "primary",
                    variant: "outlined",
                    id: "vpiphno",
                    type: "text",
                    placeholder: "123 4567 201",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "mb-6" }, [
                      createVNode(_component_v_label, {
                        class: "font-weight-medium mb-2",
                        for: "vplssnm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Last Name")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_text_field, {
                        color: "primary",
                        variant: "outlined",
                        id: "vplssnm",
                        type: "text",
                        placeholder: "Doe",
                        "hide-details": ""
                      })
                    ]),
                    createVNode("div", { class: "mb-6" }, [
                      createVNode(_component_v_label, {
                        class: "font-weight-medium mb-2",
                        for: "vpilng"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Language")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_select, {
                        modelValue: selectlng.value,
                        "onUpdate:modelValue": ($event) => selectlng.value = $event,
                        items: language.value,
                        id: "vpilng",
                        "single-line": "",
                        variant: "outlined",
                        "hide-details": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_v_label, {
                        class: "font-weight-medium mb-2",
                        for: "vpiphno"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Phone no")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_text_field, {
                        color: "primary",
                        variant: "outlined",
                        id: "vpiphno",
                        type: "text",
                        placeholder: "123 4567 201",
                        "hide-details": ""
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
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
                  _push3(ssrRenderComponent(_component_v_btn, {
                    class: "bg-lighterror text-error ml-4",
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
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      color: "primary",
                      rounded: "pill"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Submit")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_btn, {
                      class: "bg-lighterror text-error ml-4",
                      rounded: "pill"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Cancel")
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
                  createVNode("div", { class: "mb-6" }, [
                    createVNode(_component_v_label, {
                      class: "font-weight-medium mb-2",
                      for: "vpifn"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("First Name")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      color: "primary",
                      variant: "outlined",
                      id: "vpifn",
                      type: "text",
                      placeholder: "John",
                      "hide-details": ""
                    })
                  ]),
                  createVNode("div", { class: "mb-6" }, [
                    createVNode(_component_v_label, {
                      class: "font-weight-medium mb-2",
                      for: "vpicnt"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Country")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_select, {
                      modelValue: select.value,
                      "onUpdate:modelValue": ($event) => select.value = $event,
                      items: location.value,
                      "single-line": "",
                      variant: "outlined",
                      id: "vpicnt",
                      "hide-details": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_v_label, {
                      class: "font-weight-medium mb-2",
                      for: "vpodob"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Birth Date")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      color: "primary",
                      variant: "outlined",
                      id: "vpodob",
                      type: "date",
                      "hide-details": ""
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-6" }, [
                    createVNode(_component_v_label, {
                      class: "font-weight-medium mb-2",
                      for: "vplssnm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Last Name")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      color: "primary",
                      variant: "outlined",
                      id: "vplssnm",
                      type: "text",
                      placeholder: "Doe",
                      "hide-details": ""
                    })
                  ]),
                  createVNode("div", { class: "mb-6" }, [
                    createVNode(_component_v_label, {
                      class: "font-weight-medium mb-2",
                      for: "vpilng"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Language")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_select, {
                      modelValue: selectlng.value,
                      "onUpdate:modelValue": ($event) => selectlng.value = $event,
                      items: language.value,
                      id: "vpilng",
                      "single-line": "",
                      variant: "outlined",
                      "hide-details": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_v_label, {
                      class: "font-weight-medium mb-2",
                      for: "vpiphno"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Phone no")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      color: "primary",
                      variant: "outlined",
                      id: "vpiphno",
                      type: "text",
                      placeholder: "123 4567 201",
                      "hide-details": ""
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                class: "mb-2"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_btn, {
                    color: "primary",
                    rounded: "pill"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Submit")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_btn, {
                    class: "bg-lighterror text-error ml-4",
                    rounded: "pill"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Cancel")
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-vertical/PersonalInfoTab.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AccountDetailsTab",
  __ssrInlineRender: true,
  setup(__props) {
    const show2 = ref(true);
    const show3 = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
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
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mb-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "vaunm"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`User Name`);
                      } else {
                        return [
                          createTextVNode("User Name")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    color: "primary",
                    variant: "outlined",
                    id: "vaunm",
                    type: "text",
                    placeholder: "John",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "vapwd"
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
                    color: "primary",
                    variant: "outlined",
                    type: show2.value ? "text" : "password",
                    placeholder: "john.deo",
                    "hide-details": "",
                    class: "text-subtitle-1",
                    "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                    "onClick:appendInner": ($event) => show2.value = !show2.value,
                    id: "vapwd"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "mb-6" }, [
                      createVNode(_component_v_label, {
                        class: "font-weight-medium mb-2",
                        for: "vaunm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("User Name")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_text_field, {
                        color: "primary",
                        variant: "outlined",
                        id: "vaunm",
                        type: "text",
                        placeholder: "John",
                        "hide-details": ""
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_v_label, {
                        class: "font-weight-medium mb-2",
                        for: "vapwd"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Password")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_text_field, {
                        color: "primary",
                        variant: "outlined",
                        type: show2.value ? "text" : "password",
                        placeholder: "john.deo",
                        "hide-details": "",
                        class: "text-subtitle-1",
                        "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                        "onClick:appendInner": ($event) => show2.value = !show2.value,
                        id: "vapwd"
                      }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                    ])
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
                  _push3(`<div class="mb-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "vaenpm"
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
                    color: "primary",
                    variant: "outlined",
                    id: "vaenpm",
                    type: "email",
                    placeholder: "john.deo",
                    suffix: "@example.com",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "vacnmp"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Confirm`);
                      } else {
                        return [
                          createTextVNode("Confirm")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    color: "primary",
                    variant: "outlined",
                    type: show3.value ? "text" : "password",
                    placeholder: "john.deo",
                    "hide-details": "",
                    class: "text-subtitle-1",
                    "append-inner-icon": show3.value ? "mdi-eye" : "mdi-eye-off",
                    "onClick:appendInner": ($event) => show3.value = !show3.value,
                    id: "vacnmp"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "mb-6" }, [
                      createVNode(_component_v_label, {
                        class: "font-weight-medium mb-2",
                        for: "vaenpm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Email")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_text_field, {
                        color: "primary",
                        variant: "outlined",
                        id: "vaenpm",
                        type: "email",
                        placeholder: "john.deo",
                        suffix: "@example.com",
                        "hide-details": ""
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_v_label, {
                        class: "font-weight-medium mb-2",
                        for: "vacnmp"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Confirm")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_text_field, {
                        color: "primary",
                        variant: "outlined",
                        type: show3.value ? "text" : "password",
                        placeholder: "john.deo",
                        "hide-details": "",
                        class: "text-subtitle-1",
                        "append-inner-icon": show3.value ? "mdi-eye" : "mdi-eye-off",
                        "onClick:appendInner": ($event) => show3.value = !show3.value,
                        id: "vacnmp"
                      }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
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
                  _push3(ssrRenderComponent(_component_v_btn, {
                    class: "bg-lighterror text-error ml-4",
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
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      color: "primary",
                      rounded: "pill"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Submit")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_btn, {
                      class: "bg-lighterror text-error ml-4",
                      rounded: "pill"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Cancel")
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
                  createVNode("div", { class: "mb-6" }, [
                    createVNode(_component_v_label, {
                      class: "font-weight-medium mb-2",
                      for: "vaunm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("User Name")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      color: "primary",
                      variant: "outlined",
                      id: "vaunm",
                      type: "text",
                      placeholder: "John",
                      "hide-details": ""
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_v_label, {
                      class: "font-weight-medium mb-2",
                      for: "vapwd"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Password")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      color: "primary",
                      variant: "outlined",
                      type: show2.value ? "text" : "password",
                      placeholder: "john.deo",
                      "hide-details": "",
                      class: "text-subtitle-1",
                      "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                      "onClick:appendInner": ($event) => show2.value = !show2.value,
                      id: "vapwd"
                    }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-6" }, [
                    createVNode(_component_v_label, {
                      class: "font-weight-medium mb-2",
                      for: "vaenpm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Email")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      color: "primary",
                      variant: "outlined",
                      id: "vaenpm",
                      type: "email",
                      placeholder: "john.deo",
                      suffix: "@example.com",
                      "hide-details": ""
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_v_label, {
                      class: "font-weight-medium mb-2",
                      for: "vacnmp"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Confirm")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      color: "primary",
                      variant: "outlined",
                      type: show3.value ? "text" : "password",
                      placeholder: "john.deo",
                      "hide-details": "",
                      class: "text-subtitle-1",
                      "append-inner-icon": show3.value ? "mdi-eye" : "mdi-eye-off",
                      "onClick:appendInner": ($event) => show3.value = !show3.value,
                      id: "vacnmp"
                    }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                class: "mb-2"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_btn, {
                    color: "primary",
                    rounded: "pill"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Submit")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_btn, {
                    class: "bg-lighterror text-error ml-4",
                    rounded: "pill"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Cancel")
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-vertical/AccountDetailsTab.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
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
          md: "6"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="mb-6"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_label, {
                class: "font-weight-medium mb-2",
                for: "vitw"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Twitter`);
                  } else {
                    return [
                      createTextVNode("Twitter")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                color: "primary",
                variant: "outlined",
                id: "vitw",
                type: "text",
                placeholder: "https://twitter.com/abc",
                "hide-details": ""
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="mb-6"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_label, {
                class: "font-weight-medium mb-2",
                for: "viggl"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Google`);
                  } else {
                    return [
                      createTextVNode("Google")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                color: "primary",
                variant: "outlined",
                id: "viggl",
                type: "text",
                placeholder: "https://plus.google.com/abc",
                "hide-details": ""
              }, null, _parent3, _scopeId2));
              _push3(`</div><div${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_label, {
                class: "font-weight-medium mb-2",
                for: "viin"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Instagram`);
                  } else {
                    return [
                      createTextVNode("Instagram")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                color: "primary",
                variant: "outlined",
                id: "viin",
                type: "text",
                placeholder: "https://instagram.com/abc",
                "hide-details": ""
              }, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "mb-6" }, [
                  createVNode(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "vitw"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Twitter")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    color: "primary",
                    variant: "outlined",
                    id: "vitw",
                    type: "text",
                    placeholder: "https://twitter.com/abc",
                    "hide-details": ""
                  })
                ]),
                createVNode("div", { class: "mb-6" }, [
                  createVNode(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "viggl"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Google")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    color: "primary",
                    variant: "outlined",
                    id: "viggl",
                    type: "text",
                    placeholder: "https://plus.google.com/abc",
                    "hide-details": ""
                  })
                ]),
                createVNode("div", null, [
                  createVNode(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "viin"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Instagram")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    color: "primary",
                    variant: "outlined",
                    id: "viin",
                    type: "text",
                    placeholder: "https://instagram.com/abc",
                    "hide-details": ""
                  })
                ])
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
              _push3(`<div class="mb-6"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_label, {
                class: "font-weight-medium mb-2",
                for: "vsfb1"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Facebook`);
                  } else {
                    return [
                      createTextVNode("Facebook")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                color: "primary",
                variant: "outlined",
                id: "vsfb1",
                type: "text",
                placeholder: "https://facebook.com/abc",
                "hide-details": ""
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="mb-6"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_label, {
                class: "font-weight-medium mb-2",
                for: "vsln1"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Linkedin`);
                  } else {
                    return [
                      createTextVNode("Linkedin")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                color: "primary",
                variant: "outlined",
                id: "vsln1",
                type: "text",
                placeholder: "https://Linkedin.com/abc",
                "hide-details": ""
              }, null, _parent3, _scopeId2));
              _push3(`</div><div${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_label, {
                class: "font-weight-medium mb-2",
                for: "vsquora"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Quora`);
                  } else {
                    return [
                      createTextVNode("Quora")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                color: "primary",
                variant: "outlined",
                id: "vsquora",
                type: "text",
                placeholder: "https://Quora.com/abc",
                "hide-details": ""
              }, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "mb-6" }, [
                  createVNode(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "vsfb1"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Facebook")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    color: "primary",
                    variant: "outlined",
                    id: "vsfb1",
                    type: "text",
                    placeholder: "https://facebook.com/abc",
                    "hide-details": ""
                  })
                ]),
                createVNode("div", { class: "mb-6" }, [
                  createVNode(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "vsln1"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Linkedin")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    color: "primary",
                    variant: "outlined",
                    id: "vsln1",
                    type: "text",
                    placeholder: "https://Linkedin.com/abc",
                    "hide-details": ""
                  })
                ]),
                createVNode("div", null, [
                  createVNode(_component_v_label, {
                    class: "font-weight-medium mb-2",
                    for: "vsquora"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Quora")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    color: "primary",
                    variant: "outlined",
                    id: "vsquora",
                    type: "text",
                    placeholder: "https://Quora.com/abc",
                    "hide-details": ""
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_col, {
          cols: "12",
          class: "mb-2"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
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
              _push3(ssrRenderComponent(_component_v_btn, {
                class: "bg-lighterror text-error ml-4",
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
            } else {
              return [
                createVNode(_component_v_btn, {
                  color: "primary",
                  rounded: "pill"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Submit")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_btn, {
                  class: "bg-lighterror text-error ml-4",
                  rounded: "pill"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Cancel")
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
              createVNode("div", { class: "mb-6" }, [
                createVNode(_component_v_label, {
                  class: "font-weight-medium mb-2",
                  for: "vitw"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Twitter")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_text_field, {
                  color: "primary",
                  variant: "outlined",
                  id: "vitw",
                  type: "text",
                  placeholder: "https://twitter.com/abc",
                  "hide-details": ""
                })
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode(_component_v_label, {
                  class: "font-weight-medium mb-2",
                  for: "viggl"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Google")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_text_field, {
                  color: "primary",
                  variant: "outlined",
                  id: "viggl",
                  type: "text",
                  placeholder: "https://plus.google.com/abc",
                  "hide-details": ""
                })
              ]),
              createVNode("div", null, [
                createVNode(_component_v_label, {
                  class: "font-weight-medium mb-2",
                  for: "viin"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Instagram")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_text_field, {
                  color: "primary",
                  variant: "outlined",
                  id: "viin",
                  type: "text",
                  placeholder: "https://instagram.com/abc",
                  "hide-details": ""
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_v_col, {
            cols: "12",
            md: "6"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "mb-6" }, [
                createVNode(_component_v_label, {
                  class: "font-weight-medium mb-2",
                  for: "vsfb1"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Facebook")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_text_field, {
                  color: "primary",
                  variant: "outlined",
                  id: "vsfb1",
                  type: "text",
                  placeholder: "https://facebook.com/abc",
                  "hide-details": ""
                })
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode(_component_v_label, {
                  class: "font-weight-medium mb-2",
                  for: "vsln1"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Linkedin")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_text_field, {
                  color: "primary",
                  variant: "outlined",
                  id: "vsln1",
                  type: "text",
                  placeholder: "https://Linkedin.com/abc",
                  "hide-details": ""
                })
              ]),
              createVNode("div", null, [
                createVNode(_component_v_label, {
                  class: "font-weight-medium mb-2",
                  for: "vsquora"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Quora")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_text_field, {
                  color: "primary",
                  variant: "outlined",
                  id: "vsquora",
                  type: "text",
                  placeholder: "https://Quora.com/abc",
                  "hide-details": ""
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_v_col, {
            cols: "12",
            class: "mb-2"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_btn, {
                color: "primary",
                rounded: "pill"
              }, {
                default: withCtx(() => [
                  createTextVNode("Submit")
                ]),
                _: 1
              }),
              createVNode(_component_v_btn, {
                class: "bg-lighterror text-error ml-4",
                rounded: "pill"
              }, {
                default: withCtx(() => [
                  createTextVNode("Cancel")
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-vertical/SocialLinksTab.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SocialLinksTab = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Form-Vertical",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Form Vertical" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Form vertical",
        disabled: true,
        href: "#"
      }
    ]);
    const tab = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_window = resolveComponent("v-window");
      const _component_v_window_item = resolveComponent("v-window-item");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$8, {
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
                  _push3(ssrRenderComponent(_sfc_main$9, { title: "Basic Layout" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(BasicLayout, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(BasicLayout)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$9, { title: "Basic Layout" }, {
                      default: withCtx(() => [
                        createVNode(BasicLayout)
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
                  _push3(ssrRenderComponent(_sfc_main$9, { title: "Basic with Icons" }, {
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
                    createVNode(_sfc_main$9, { title: "Basic with Icons" }, {
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
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$5, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$5)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$4, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$4)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5 mb-6 mt-3"${_scopeId2}>Form with Tabs</h5>`);
                  _push3(ssrRenderComponent(_component_v_card, {
                    elevation: "10",
                    class: "",
                    rounded: "md"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_tabs, {
                          modelValue: tab.value,
                          "onUpdate:modelValue": ($event) => tab.value = $event,
                          "bg-color": "transparent",
                          color: "primary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_tab, {
                                value: "PersonalInfo",
                                class: "text-medium-emphasis"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Personal Info`);
                                  } else {
                                    return [
                                      createTextVNode("Personal Info")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_tab, {
                                value: "AccountDetails",
                                class: "text-medium-emphasis"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Account Details`);
                                  } else {
                                    return [
                                      createTextVNode("Account Details")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_tab, {
                                value: "SocialLinks",
                                class: "text-medium-emphasis"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Social Links`);
                                  } else {
                                    return [
                                      createTextVNode("Social Links")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_tab, {
                                  value: "PersonalInfo",
                                  class: "text-medium-emphasis"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Personal Info")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_tab, {
                                  value: "AccountDetails",
                                  class: "text-medium-emphasis"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Account Details")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_tab, {
                                  value: "SocialLinks",
                                  class: "text-medium-emphasis"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Social Links")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_divider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_card_text, { class: "pa-sm-6 pa-3 pb-sm-6 pb-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_window, {
                                modelValue: tab.value,
                                "onUpdate:modelValue": ($event) => tab.value = $event
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_window_item, { value: "PersonalInfo" }, {
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
                                    _push6(ssrRenderComponent(_component_v_window_item, { value: "AccountDetails" }, {
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
                                    _push6(ssrRenderComponent(_component_v_window_item, { value: "SocialLinks" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(SocialLinksTab, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(SocialLinksTab)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_window_item, { value: "PersonalInfo" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$3)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_window_item, { value: "AccountDetails" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$2)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_window_item, { value: "SocialLinks" }, {
                                        default: withCtx(() => [
                                          createVNode(SocialLinksTab)
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
                                createVNode(_component_v_window, {
                                  modelValue: tab.value,
                                  "onUpdate:modelValue": ($event) => tab.value = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_window_item, { value: "PersonalInfo" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$3)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_window_item, { value: "AccountDetails" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$2)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_window_item, { value: "SocialLinks" }, {
                                      default: withCtx(() => [
                                        createVNode(SocialLinksTab)
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_tabs, {
                            modelValue: tab.value,
                            "onUpdate:modelValue": ($event) => tab.value = $event,
                            "bg-color": "transparent",
                            color: "primary"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_tab, {
                                value: "PersonalInfo",
                                class: "text-medium-emphasis"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Personal Info")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_tab, {
                                value: "AccountDetails",
                                class: "text-medium-emphasis"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Account Details")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_tab, {
                                value: "SocialLinks",
                                class: "text-medium-emphasis"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Social Links")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_v_divider),
                          createVNode(_component_v_card_text, { class: "pa-sm-6 pa-3 pb-sm-6 pb-6" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_window, {
                                modelValue: tab.value,
                                "onUpdate:modelValue": ($event) => tab.value = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_window_item, { value: "PersonalInfo" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$3)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_window_item, { value: "AccountDetails" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$2)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_window_item, { value: "SocialLinks" }, {
                                    default: withCtx(() => [
                                      createVNode(SocialLinksTab)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h5", { class: "text-h5 mb-6 mt-3" }, "Form with Tabs"),
                    createVNode(_component_v_card, {
                      elevation: "10",
                      class: "",
                      rounded: "md"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_tabs, {
                          modelValue: tab.value,
                          "onUpdate:modelValue": ($event) => tab.value = $event,
                          "bg-color": "transparent",
                          color: "primary"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_tab, {
                              value: "PersonalInfo",
                              class: "text-medium-emphasis"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Personal Info")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_tab, {
                              value: "AccountDetails",
                              class: "text-medium-emphasis"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Account Details")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_tab, {
                              value: "SocialLinks",
                              class: "text-medium-emphasis"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Social Links")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_v_divider),
                        createVNode(_component_v_card_text, { class: "pa-sm-6 pa-3 pb-sm-6 pb-6" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_window, {
                              modelValue: tab.value,
                              "onUpdate:modelValue": ($event) => tab.value = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_window_item, { value: "PersonalInfo" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$3)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_window_item, { value: "AccountDetails" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$2)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_window_item, { value: "SocialLinks" }, {
                                  default: withCtx(() => [
                                    createVNode(SocialLinksTab)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(_component_v_col, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$9, { title: "Basic Layout" }, {
                    default: withCtx(() => [
                      createVNode(BasicLayout)
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
                  createVNode(_sfc_main$9, { title: "Basic with Icons" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$6)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$4)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h5 mb-6 mt-3" }, "Form with Tabs"),
                  createVNode(_component_v_card, {
                    elevation: "10",
                    class: "",
                    rounded: "md"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_tabs, {
                        modelValue: tab.value,
                        "onUpdate:modelValue": ($event) => tab.value = $event,
                        "bg-color": "transparent",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_tab, {
                            value: "PersonalInfo",
                            class: "text-medium-emphasis"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Personal Info")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_tab, {
                            value: "AccountDetails",
                            class: "text-medium-emphasis"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Account Details")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_tab, {
                            value: "SocialLinks",
                            class: "text-medium-emphasis"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Social Links")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_divider),
                      createVNode(_component_v_card_text, { class: "pa-sm-6 pa-3 pb-sm-6 pb-6" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_window, {
                            modelValue: tab.value,
                            "onUpdate:modelValue": ($event) => tab.value = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_window_item, { value: "PersonalInfo" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$3)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_window_item, { value: "AccountDetails" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$2)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_window_item, { value: "SocialLinks" }, {
                                default: withCtx(() => [
                                  createVNode(SocialLinksTab)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forms/Form-Vertical.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Form-Vertical-Cem6iaPd.mjs.map
