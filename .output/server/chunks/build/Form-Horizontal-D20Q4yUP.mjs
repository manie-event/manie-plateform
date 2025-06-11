import { defineComponent, ref, resolveComponent, withCtx, createVNode, createTextVNode, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$a } from './UiParentCard-DhlYzLUl.mjs';
import { _ as _export_sfc } from './server.mjs';
import { UserIcon, BuildingArchIcon, MailIcon, PhoneIcon, Message2Icon, HelpIcon } from 'vue-tabler-icons';
import { _ as _sfc_main$9 } from './BaseBreadcrumb-DAIjkUfv.mjs';
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

const _sfc_main$8 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_label = resolveComponent("v-label");
  const _component_v_text_field = resolveComponent("v-text-field");
  const _component_v_textarea = resolveComponent("v-textarea");
  const _component_v_btn = resolveComponent("v-btn");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_col, {
          cols: "12",
          sm: "3",
          class: "pb-sm-3 pb-0"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_label, {
                class: "font-weight-medium",
                for: "hbnm"
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
            } else {
              return [
                createVNode(_component_v_label, {
                  class: "font-weight-medium",
                  for: "hbnm"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Name")
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
          sm: "9"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_text_field, {
                color: "primary",
                variant: "outlined",
                type: "text",
                id: "hbnm",
                placeholder: "John Deo",
                "hide-details": ""
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_text_field, {
                  color: "primary",
                  variant: "outlined",
                  type: "text",
                  id: "hbnm",
                  placeholder: "John Deo",
                  "hide-details": ""
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
            sm: "3",
            class: "pb-sm-3 pb-0"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_label, {
                class: "font-weight-medium",
                for: "hbnm"
              }, {
                default: withCtx(() => [
                  createTextVNode("Name")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_col, {
            cols: "12",
            sm: "9"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_text_field, {
                color: "primary",
                variant: "outlined",
                type: "text",
                id: "hbnm",
                placeholder: "John Deo",
                "hide-details": ""
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_col, {
          cols: "12",
          sm: "3",
          class: "pb-sm-3 pb-0"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_label, {
                class: "font-weight-medium",
                for: "hcpm"
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
            } else {
              return [
                createVNode(_component_v_label, {
                  class: "font-weight-medium",
                  for: "hcpm"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Company")
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
          sm: "9"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_text_field, {
                color: "primary",
                variant: "outlined",
                id: "hcpm",
                type: "text",
                placeholder: "ACME Inc.",
                "hide-details": ""
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_text_field, {
                  color: "primary",
                  variant: "outlined",
                  id: "hcpm",
                  type: "text",
                  placeholder: "ACME Inc.",
                  "hide-details": ""
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
            sm: "3",
            class: "pb-sm-3 pb-0"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_label, {
                class: "font-weight-medium",
                for: "hcpm"
              }, {
                default: withCtx(() => [
                  createTextVNode("Company")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_col, {
            cols: "12",
            sm: "9"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_text_field, {
                color: "primary",
                variant: "outlined",
                id: "hcpm",
                type: "text",
                placeholder: "ACME Inc.",
                "hide-details": ""
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_col, {
          cols: "12",
          sm: "3",
          class: "pb-sm-3 pb-0"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_label, {
                class: "font-weight-medium",
                for: "hem"
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
            } else {
              return [
                createVNode(_component_v_label, {
                  class: "font-weight-medium",
                  for: "hem"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Email")
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
          sm: "9"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_text_field, {
                color: "primary",
                variant: "outlined",
                id: "hem",
                type: "email",
                placeholder: "john.deo",
                suffix: "@example.com",
                "hide-details": ""
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_text_field, {
                  color: "primary",
                  variant: "outlined",
                  id: "hem",
                  type: "email",
                  placeholder: "john.deo",
                  suffix: "@example.com",
                  "hide-details": ""
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
            sm: "3",
            class: "pb-sm-3 pb-0"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_label, {
                class: "font-weight-medium",
                for: "hem"
              }, {
                default: withCtx(() => [
                  createTextVNode("Email")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_col, {
            cols: "12",
            sm: "9"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_text_field, {
                color: "primary",
                variant: "outlined",
                id: "hem",
                type: "email",
                placeholder: "john.deo",
                suffix: "@example.com",
                "hide-details": ""
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_col, {
          cols: "12",
          sm: "3",
          class: "pb-sm-3 pb-0"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_label, {
                class: "font-weight-medium",
                for: "hph"
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
            } else {
              return [
                createVNode(_component_v_label, {
                  class: "font-weight-medium",
                  for: "hph"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Phone No")
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
          sm: "9"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_text_field, {
                color: "primary",
                variant: "outlined",
                id: "hph",
                type: "text",
                placeholder: "412 2150 451",
                "hide-details": ""
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_text_field, {
                  color: "primary",
                  variant: "outlined",
                  id: "hph",
                  type: "text",
                  placeholder: "412 2150 451",
                  "hide-details": ""
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
            sm: "3",
            class: "pb-sm-3 pb-0"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_label, {
                class: "font-weight-medium",
                for: "hph"
              }, {
                default: withCtx(() => [
                  createTextVNode("Phone No")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_col, {
            cols: "12",
            sm: "9"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_text_field, {
                color: "primary",
                variant: "outlined",
                id: "hph",
                type: "text",
                placeholder: "412 2150 451",
                "hide-details": ""
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_col, {
          cols: "12",
          sm: "3",
          class: "pb-sm-3 pb-0"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_label, {
                class: "font-weight-medium",
                for: "hmsgs1"
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
            } else {
              return [
                createVNode(_component_v_label, {
                  class: "font-weight-medium",
                  for: "hmsgs1"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Message")
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
          sm: "9"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_textarea, {
                "auto-grow": "",
                variant: "outlined",
                placeholder: "Hi, Do you  have a moment to talk Jeo ?",
                rows: "2",
                color: "primary",
                "row-height": "25",
                shaped: "",
                "hide-details": "",
                id: "hmsgs1"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_textarea, {
                  "auto-grow": "",
                  variant: "outlined",
                  placeholder: "Hi, Do you  have a moment to talk Jeo ?",
                  rows: "2",
                  color: "primary",
                  "row-height": "25",
                  shaped: "",
                  "hide-details": "",
                  id: "hmsgs1"
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
            sm: "3",
            class: "pb-sm-3 pb-0"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_label, {
                class: "font-weight-medium",
                for: "hmsgs1"
              }, {
                default: withCtx(() => [
                  createTextVNode("Message")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_col, {
            cols: "12",
            sm: "9"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_textarea, {
                "auto-grow": "",
                variant: "outlined",
                placeholder: "Hi, Do you  have a moment to talk Jeo ?",
                rows: "2",
                color: "primary",
                "row-height": "25",
                shaped: "",
                "hide-details": "",
                id: "hmsgs1"
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_row, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_col, {
          cols: "12",
          sm: "9",
          "offset-sm": "3"
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
          createVNode(_component_v_col, {
            cols: "12",
            sm: "9",
            "offset-sm": "3"
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
  _push(`<!--]-->`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-horizontal/BasicLayout.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const BasicLayout = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
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
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "3",
              class: "pb-sm-3 pb-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "font-weight-medium",
                    for: "binm"
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
                } else {
                  return [
                    createVNode(_component_v_label, {
                      class: "font-weight-medium",
                      for: "binm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Name")
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
              sm: "9"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    color: "primary",
                    id: "binm",
                    variant: "outlined",
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
                    createVNode(_component_v_text_field, {
                      color: "primary",
                      id: "binm",
                      variant: "outlined",
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
          } else {
            return [
              createVNode(_component_v_col, {
                cols: "12",
                sm: "3",
                class: "pb-sm-3 pb-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_label, {
                    class: "font-weight-medium",
                    for: "binm"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Name")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "9"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_text_field, {
                    color: "primary",
                    id: "binm",
                    variant: "outlined",
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
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "3",
              class: "pb-sm-3 pb-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "font-weight-medium",
                    for: "bicmp"
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
                } else {
                  return [
                    createVNode(_component_v_label, {
                      class: "font-weight-medium",
                      for: "bicmp"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Company")
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
              sm: "9"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    color: "primary",
                    id: "bicmp",
                    variant: "outlined",
                    type: "text",
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
                    createVNode(_component_v_text_field, {
                      color: "primary",
                      id: "bicmp",
                      variant: "outlined",
                      type: "text",
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
          } else {
            return [
              createVNode(_component_v_col, {
                cols: "12",
                sm: "3",
                class: "pb-sm-3 pb-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_label, {
                    class: "font-weight-medium",
                    for: "bicmp"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Company")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "9"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_text_field, {
                    color: "primary",
                    id: "bicmp",
                    variant: "outlined",
                    type: "text",
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
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "3",
              class: "pb-sm-3 pb-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "font-weight-medium",
                    for: "bieml"
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
                } else {
                  return [
                    createVNode(_component_v_label, {
                      class: "font-weight-medium",
                      for: "bieml"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Email")
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
              sm: "9"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    color: "primary",
                    id: "bieml",
                    variant: "outlined",
                    type: "email",
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
                    createVNode(_component_v_text_field, {
                      color: "primary",
                      id: "bieml",
                      variant: "outlined",
                      type: "email",
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
          } else {
            return [
              createVNode(_component_v_col, {
                cols: "12",
                sm: "3",
                class: "pb-sm-3 pb-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_label, {
                    class: "font-weight-medium",
                    for: "bieml"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Email")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "9"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_text_field, {
                    color: "primary",
                    id: "bieml",
                    variant: "outlined",
                    type: "email",
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
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "3",
              class: "pb-sm-3 pb-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "font-weight-medium",
                    for: "biph"
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
                } else {
                  return [
                    createVNode(_component_v_label, {
                      class: "font-weight-medium",
                      for: "biph"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Phone No")
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
              sm: "9"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    color: "primary",
                    id: "biph",
                    variant: "outlined",
                    type: "text",
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
                    createVNode(_component_v_text_field, {
                      color: "primary",
                      id: "biph",
                      variant: "outlined",
                      type: "text",
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
          } else {
            return [
              createVNode(_component_v_col, {
                cols: "12",
                sm: "3",
                class: "pb-sm-3 pb-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_label, {
                    class: "font-weight-medium",
                    for: "biph"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Phone No")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "9"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_text_field, {
                    color: "primary",
                    id: "biph",
                    variant: "outlined",
                    type: "text",
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
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "3",
              class: "pb-sm-3 pb-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "font-weight-medium",
                    for: "bimsg2"
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
                } else {
                  return [
                    createVNode(_component_v_label, {
                      class: "font-weight-medium",
                      for: "bimsg2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Message")
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
              sm: "9"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_textarea, {
                    "auto-grow": "",
                    variant: "outlined",
                    placeholder: "Hi, Do you  have a moment to talk Jeo ?",
                    rows: "2",
                    color: "primary",
                    "row-height": "25",
                    shaped: "",
                    "hide-details": "",
                    id: "bimsg2",
                    type: "textarea"
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
                    createVNode(_component_v_textarea, {
                      "auto-grow": "",
                      variant: "outlined",
                      placeholder: "Hi, Do you  have a moment to talk Jeo ?",
                      rows: "2",
                      color: "primary",
                      "row-height": "25",
                      shaped: "",
                      "hide-details": "",
                      id: "bimsg2",
                      type: "textarea"
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
          } else {
            return [
              createVNode(_component_v_col, {
                cols: "12",
                sm: "3",
                class: "pb-sm-3 pb-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_label, {
                    class: "font-weight-medium",
                    for: "bimsg2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Message")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "9"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_textarea, {
                    "auto-grow": "",
                    variant: "outlined",
                    placeholder: "Hi, Do you  have a moment to talk Jeo ?",
                    rows: "2",
                    color: "primary",
                    "row-height": "25",
                    shaped: "",
                    "hide-details": "",
                    id: "bimsg2",
                    type: "textarea"
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
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "9",
              "offset-sm": "3"
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
              createVNode(_component_v_col, {
                cols: "12",
                sm: "9",
                "offset-sm": "3"
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-horizontal/BasicWithIcons.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "FormSeprator",
  __ssrInlineRender: true,
  setup(__props) {
    const show2 = ref(true);
    const select = ref("");
    const location = ref(["India", "United Kingdom", "Srilanka"]);
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
                        _push4(`Form Separator`);
                      } else {
                        return [
                          createTextVNode("Form Separator")
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
                          createTextVNode("Form Separator")
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
                  _push3(`<h6 class="text-h6"${_scopeId2}>Account Details</h6><div class="mt-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fsun"
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
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "fsun"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Username")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "fsun",
                                type: "text",
                                placeholder: "John Deo",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "fsun",
                                  type: "text",
                                  placeholder: "John Deo",
                                  "hide-details": ""
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
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fsun"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Username")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "fsun",
                                type: "text",
                                placeholder: "John Deo",
                                "hide-details": ""
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fseml"
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
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "fseml"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Email")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: "email",
                                placeholder: "john.deo",
                                suffix: "@example.com",
                                "hide-details": "",
                                id: "fseml"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  type: "email",
                                  placeholder: "john.deo",
                                  suffix: "@example.com",
                                  "hide-details": "",
                                  id: "fseml"
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
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fseml"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Email")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: "email",
                                placeholder: "john.deo",
                                suffix: "@example.com",
                                "hide-details": "",
                                id: "fseml"
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fspwd"
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
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "fspwd"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Password")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: show2.value ? "text" : "password",
                                placeholder: "john.deo",
                                "hide-details": "",
                                "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                                "onClick:appendInner": ($event) => show2.value = !show2.value,
                                id: "fspwd"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  type: show2.value ? "text" : "password",
                                  placeholder: "john.deo",
                                  "hide-details": "",
                                  "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                                  "onClick:appendInner": ($event) => show2.value = !show2.value,
                                  id: "fspwd"
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
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fspwd"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Password")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: show2.value ? "text" : "password",
                                placeholder: "john.deo",
                                "hide-details": "",
                                "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                                "onClick:appendInner": ($event) => show2.value = !show2.value,
                                id: "fspwd"
                              }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("h6", { class: "text-h6" }, "Account Details"),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode(_component_v_row, { class: "align-center mb-3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fsun"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Username")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "fsun",
                                type: "text",
                                placeholder: "John Deo",
                                "hide-details": ""
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, { class: "align-center mb-3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fseml"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Email")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: "email",
                                placeholder: "john.deo",
                                suffix: "@example.com",
                                "hide-details": "",
                                id: "fseml"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, { class: "align-center mb-3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fspwd"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Password")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: show2.value ? "text" : "password",
                                placeholder: "john.deo",
                                "hide-details": "",
                                "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                                "onClick:appendInner": ($event) => show2.value = !show2.value,
                                id: "fspwd"
                              }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                            ]),
                            _: 1
                          })
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
            _push2(ssrRenderComponent(_component_v_card_text, { class: "pb-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6 class="text-h6"${_scopeId2}>Personal Info</h6><div class="mt-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fsfn"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Full Name`);
                                  } else {
                                    return [
                                      createTextVNode("Full Name")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "fsfn"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Full Name")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "fsfn",
                                type: "text",
                                placeholder: "John Deo",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "fsfn",
                                  type: "text",
                                  placeholder: "John Deo",
                                  "hide-details": ""
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
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fsfn"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Full Name")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "fsfn",
                                type: "text",
                                placeholder: "John Deo",
                                "hide-details": ""
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fscnt"
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
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "fscnt"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Country")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
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
                                id: "fscnt"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
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
                                  id: "fscnt"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fscnt"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Country")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
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
                                id: "fscnt"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fsdob"
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
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "fsdob"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Birth Date")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "fsdob",
                                type: "date",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "fsdob",
                                  type: "date",
                                  "hide-details": ""
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
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fsdob"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Birth Date")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "fsdob",
                                type: "date",
                                "hide-details": ""
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fsph"
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
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "fsph"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Phone No")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "fsph",
                                type: "text",
                                placeholder: "123 4567 207",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "fsph",
                                  type: "text",
                                  placeholder: "123 4567 207",
                                  "hide-details": ""
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
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fsph"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Phone No")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "fsph",
                                type: "text",
                                placeholder: "123 4567 207",
                                "hide-details": ""
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9",
                          "offset-sm": "3"
                        }, {
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
                            sm: "9",
                            "offset-sm": "3"
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
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("h6", { class: "text-h6" }, "Personal Info"),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode(_component_v_row, { class: "align-center mb-3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fsfn"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Full Name")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "fsfn",
                                type: "text",
                                placeholder: "John Deo",
                                "hide-details": ""
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, { class: "align-center mb-3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fscnt"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Country")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
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
                                id: "fscnt"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, { class: "align-center mb-3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fsdob"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Birth Date")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "fsdob",
                                type: "date",
                                "hide-details": ""
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, { class: "align-center mb-3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fsph"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Phone No")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "fsph",
                                type: "text",
                                placeholder: "123 4567 207",
                                "hide-details": ""
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, { class: "align-center mb-3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9",
                            "offset-sm": "3"
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
                        ]),
                        _: 1
                      })
                    ])
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
                        createTextVNode("Form Separator")
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
                  createVNode("div", { class: "mt-6" }, [
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "fsun"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Username")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "fsun",
                              type: "text",
                              placeholder: "John Deo",
                              "hide-details": ""
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "fseml"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Email")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              type: "email",
                              placeholder: "john.deo",
                              suffix: "@example.com",
                              "hide-details": "",
                              id: "fseml"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "fspwd"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Password")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              type: show2.value ? "text" : "password",
                              placeholder: "john.deo",
                              "hide-details": "",
                              "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                              "onClick:appendInner": ($event) => show2.value = !show2.value,
                              id: "fspwd"
                            }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_card_text, { class: "pb-1" }, {
                default: withCtx(() => [
                  createVNode("h6", { class: "text-h6" }, "Personal Info"),
                  createVNode("div", { class: "mt-6" }, [
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "fsfn"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Full Name")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "fsfn",
                              type: "text",
                              placeholder: "John Deo",
                              "hide-details": ""
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "fscnt"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Country")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
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
                              id: "fscnt"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "fsdob"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Birth Date")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "fsdob",
                              type: "date",
                              "hide-details": ""
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "fsph"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Phone No")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "fsph",
                              type: "text",
                              placeholder: "123 4567 207",
                              "hide-details": ""
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9",
                          "offset-sm": "3"
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
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-horizontal/FormSeprator.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "FormLabelAlign",
  __ssrInlineRender: true,
  setup(__props) {
    const show2 = ref(true);
    const select = ref("");
    const location = ref(["India", "United Kingdom", "Srilanka"]);
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
                        _push4(`Form Label Alignment`);
                      } else {
                        return [
                          createTextVNode("Form Label Alignment")
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
                          createTextVNode("Form Label Alignment")
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
                  _push3(`<h6 class="text-h6"${_scopeId2}>Account Details</h6><div class="mt-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0 text-right"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fbnm"
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
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "fbnm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Username")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "fbnm",
                                type: "text",
                                placeholder: "John Deo",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "fbnm",
                                  type: "text",
                                  placeholder: "John Deo",
                                  "hide-details": ""
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
                            sm: "3",
                            class: "pb-sm-3 pb-0 text-right"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fbnm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Username")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "fbnm",
                                type: "text",
                                placeholder: "John Deo",
                                "hide-details": ""
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0 text-right"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fbeml"
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
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "fbeml"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Email")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: "email",
                                placeholder: "john.deo",
                                suffix: "@example.com",
                                "hide-details": "",
                                id: "fbeml"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  type: "email",
                                  placeholder: "john.deo",
                                  suffix: "@example.com",
                                  "hide-details": "",
                                  id: "fbeml"
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
                            sm: "3",
                            class: "pb-sm-3 pb-0 text-right"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fbeml"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Email")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: "email",
                                placeholder: "john.deo",
                                suffix: "@example.com",
                                "hide-details": "",
                                id: "fbeml"
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0 text-right"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fbpwd"
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
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "fbpwd"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Password")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: show2.value ? "text" : "password",
                                placeholder: "john.deo",
                                "hide-details": "",
                                "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                                "onClick:appendInner": ($event) => show2.value = !show2.value,
                                id: "fbpwd"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  type: show2.value ? "text" : "password",
                                  placeholder: "john.deo",
                                  "hide-details": "",
                                  "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                                  "onClick:appendInner": ($event) => show2.value = !show2.value,
                                  id: "fbpwd"
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
                            sm: "3",
                            class: "pb-sm-3 pb-0 text-right"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fbpwd"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Password")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: show2.value ? "text" : "password",
                                placeholder: "john.deo",
                                "hide-details": "",
                                "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                                "onClick:appendInner": ($event) => show2.value = !show2.value,
                                id: "fbpwd"
                              }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("h6", { class: "text-h6" }, "Account Details"),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode(_component_v_row, { class: "align-center mb-3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3",
                            class: "pb-sm-3 pb-0 text-right"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fbnm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Username")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "fbnm",
                                type: "text",
                                placeholder: "John Deo",
                                "hide-details": ""
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, { class: "align-center mb-3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3",
                            class: "pb-sm-3 pb-0 text-right"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fbeml"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Email")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: "email",
                                placeholder: "john.deo",
                                suffix: "@example.com",
                                "hide-details": "",
                                id: "fbeml"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, { class: "align-center mb-3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3",
                            class: "pb-sm-3 pb-0 text-right"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fbpwd"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Password")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: show2.value ? "text" : "password",
                                placeholder: "john.deo",
                                "hide-details": "",
                                "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                                "onClick:appendInner": ($event) => show2.value = !show2.value,
                                id: "fbpwd"
                              }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                            ]),
                            _: 1
                          })
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
            _push2(ssrRenderComponent(_component_v_card_text, { class: "pb-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6 class="text-h6"${_scopeId2}>Personal Info</h6><div class="mt-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0 text-right"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fbfnm"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Full Name`);
                                  } else {
                                    return [
                                      createTextVNode("Full Name")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "fbfnm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Full Name")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "fbfnm",
                                type: "text",
                                placeholder: "John Deo",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "fbfnm",
                                  type: "text",
                                  placeholder: "John Deo",
                                  "hide-details": ""
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
                            sm: "3",
                            class: "pb-sm-3 pb-0 text-right"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fbfnm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Full Name")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "fbfnm",
                                type: "text",
                                placeholder: "John Deo",
                                "hide-details": ""
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0 text-right"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fblcnt"
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
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "fblcnt"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Country")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
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
                                id: "fblcnt"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
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
                                  id: "fblcnt"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3",
                            class: "pb-sm-3 pb-0 text-right"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fblcnt"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Country")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
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
                                id: "fblcnt"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0 text-right"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fldob"
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
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "fldob"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Birth Date")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "fldob",
                                type: "date",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "fldob",
                                  type: "date",
                                  "hide-details": ""
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
                            sm: "3",
                            class: "pb-sm-3 pb-0 text-right"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fldob"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Birth Date")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "fldob",
                                type: "date",
                                "hide-details": ""
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0 text-right"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "flph"
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
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "flph"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Phone No")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "flph",
                                type: "text",
                                placeholder: "123 4567 207",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "flph",
                                  type: "text",
                                  placeholder: "123 4567 207",
                                  "hide-details": ""
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
                            sm: "3",
                            class: "pb-sm-3 pb-0 text-right"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "flph"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Phone No")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "flph",
                                type: "text",
                                placeholder: "123 4567 207",
                                "hide-details": ""
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9",
                          "offset-sm": "3"
                        }, {
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
                            sm: "9",
                            "offset-sm": "3"
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
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("h6", { class: "text-h6" }, "Personal Info"),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode(_component_v_row, { class: "align-center mb-3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3",
                            class: "pb-sm-3 pb-0 text-right"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fbfnm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Full Name")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "fbfnm",
                                type: "text",
                                placeholder: "John Deo",
                                "hide-details": ""
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, { class: "align-center mb-3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3",
                            class: "pb-sm-3 pb-0 text-right"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fblcnt"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Country")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
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
                                id: "fblcnt"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, { class: "align-center mb-3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3",
                            class: "pb-sm-3 pb-0 text-right"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fldob"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Birth Date")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "fldob",
                                type: "date",
                                "hide-details": ""
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, { class: "align-center mb-3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3",
                            class: "pb-sm-3 pb-0 text-right"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "flph"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Phone No")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "flph",
                                type: "text",
                                placeholder: "123 4567 207",
                                "hide-details": ""
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, { class: "align-center mb-3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9",
                            "offset-sm": "3"
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
                        ]),
                        _: 1
                      })
                    ])
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
                        createTextVNode("Form Label Alignment")
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
                  createVNode("div", { class: "mt-6" }, [
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0 text-right"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "fbnm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Username")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "fbnm",
                              type: "text",
                              placeholder: "John Deo",
                              "hide-details": ""
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0 text-right"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "fbeml"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Email")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              type: "email",
                              placeholder: "john.deo",
                              suffix: "@example.com",
                              "hide-details": "",
                              id: "fbeml"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0 text-right"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "fbpwd"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Password")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              type: show2.value ? "text" : "password",
                              placeholder: "john.deo",
                              "hide-details": "",
                              "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                              "onClick:appendInner": ($event) => show2.value = !show2.value,
                              id: "fbpwd"
                            }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_card_text, { class: "pb-1" }, {
                default: withCtx(() => [
                  createVNode("h6", { class: "text-h6" }, "Personal Info"),
                  createVNode("div", { class: "mt-6" }, [
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0 text-right"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "fbfnm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Full Name")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "fbfnm",
                              type: "text",
                              placeholder: "John Deo",
                              "hide-details": ""
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0 text-right"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "fblcnt"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Country")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
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
                              id: "fblcnt"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0 text-right"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "fldob"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Birth Date")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "fldob",
                              type: "date",
                              "hide-details": ""
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0 text-right"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "flph"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Phone No")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "flph",
                              type: "text",
                              placeholder: "123 4567 207",
                              "hide-details": ""
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9",
                          "offset-sm": "3"
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
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-horizontal/FormLabelAlign.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Collapsible",
  __ssrInlineRender: true,
  setup(__props) {
    const radioColumn = ref("1");
    const radioInline = ref("1");
    const paymentradio = ref("1");
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
      const _component_v_radio_group = resolveComponent("v-radio-group");
      const _component_v_radio = resolveComponent("v-radio");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<!--[--><h5 class="text-h5 mb-6 mt-3">Collapsible Section</h5>`);
      _push(ssrRenderComponent(_component_v_expansion_panels, null, {
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
                                    _push6(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "3",
                                            class: "pb-sm-3 pb-0 text-right"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, {
                                                  class: "font-weight-medium",
                                                  for: "clnm"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Full Name`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Full Name")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, {
                                                    class: "font-weight-medium",
                                                    for: "clnm"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Full Name")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "9"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  color: "primary",
                                                  id: "clnm",
                                                  variant: "outlined",
                                                  type: "text",
                                                  placeholder: "John Deo",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_text_field, {
                                                    color: "primary",
                                                    id: "clnm",
                                                    variant: "outlined",
                                                    type: "text",
                                                    placeholder: "John Deo",
                                                    "hide-details": ""
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
                                              sm: "3",
                                              class: "pb-sm-3 pb-0 text-right"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, {
                                                  class: "font-weight-medium",
                                                  for: "clnm"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Full Name")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "9"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  color: "primary",
                                                  id: "clnm",
                                                  variant: "outlined",
                                                  type: "text",
                                                  placeholder: "John Deo",
                                                  "hide-details": ""
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "3",
                                            class: "pb-sm-3 pb-0 text-right"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, {
                                                  class: "font-weight-medium",
                                                  for: "cladd"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Address`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Address")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, {
                                                    class: "font-weight-medium",
                                                    for: "cladd"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Address")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "9"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_textarea, {
                                                  "auto-grow": "",
                                                  variant: "outlined",
                                                  placeholder: "150, Ring Road",
                                                  rows: "2",
                                                  color: "primary",
                                                  "row-height": "25",
                                                  shaped: "",
                                                  "hide-details": "",
                                                  id: "cladd"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_textarea, {
                                                    "auto-grow": "",
                                                    variant: "outlined",
                                                    placeholder: "150, Ring Road",
                                                    rows: "2",
                                                    color: "primary",
                                                    "row-height": "25",
                                                    shaped: "",
                                                    "hide-details": "",
                                                    id: "cladd"
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
                                              sm: "3",
                                              class: "pb-sm-3 pb-0 text-right"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, {
                                                  class: "font-weight-medium",
                                                  for: "cladd"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Address")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "9"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_textarea, {
                                                  "auto-grow": "",
                                                  variant: "outlined",
                                                  placeholder: "150, Ring Road",
                                                  rows: "2",
                                                  color: "primary",
                                                  "row-height": "25",
                                                  shaped: "",
                                                  "hide-details": "",
                                                  id: "cladd"
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "3",
                                            class: "pb-sm-3 pb-0 text-right"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, {
                                                  class: "font-weight-medium",
                                                  for: "clcity"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`City`);
                                                    } else {
                                                      return [
                                                        createTextVNode("City")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, {
                                                    class: "font-weight-medium",
                                                    for: "clcity"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("City")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "9"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  id: "clcity",
                                                  type: "text",
                                                  placeholder: "Vadodara",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_text_field, {
                                                    color: "primary",
                                                    variant: "outlined",
                                                    id: "clcity",
                                                    type: "text",
                                                    placeholder: "Vadodara",
                                                    "hide-details": ""
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
                                              sm: "3",
                                              class: "pb-sm-3 pb-0 text-right"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, {
                                                  class: "font-weight-medium",
                                                  for: "clcity"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("City")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "9"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  id: "clcity",
                                                  type: "text",
                                                  placeholder: "Vadodara",
                                                  "hide-details": ""
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_row, { class: "align-start" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "3",
                                            class: "pb-sm-3 pb-0 text-right"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, {
                                                  class: "mt-sm-2 mt-0 font-weight-medium",
                                                  for: "claddtype"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Address Type`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Address Type")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, {
                                                    class: "mt-sm-2 mt-0 font-weight-medium",
                                                    for: "claddtype"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Address Type")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "9"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_radio_group, {
                                                  modelValue: radioColumn.value,
                                                  "onUpdate:modelValue": ($event) => radioColumn.value = $event,
                                                  column: "",
                                                  class: "ml-n3",
                                                  "hide-details": ""
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_radio, {
                                                        label: "Home (All day delivery)",
                                                        color: "primary",
                                                        value: "1",
                                                        id: "claddtype"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_radio, {
                                                        label: "Office (Delivery between 10 AM - 5 PM)",
                                                        color: "primary",
                                                        value: "2",
                                                        id: "claddtype2"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_radio, {
                                                          label: "Home (All day delivery)",
                                                          color: "primary",
                                                          value: "1",
                                                          id: "claddtype"
                                                        }),
                                                        createVNode(_component_v_radio, {
                                                          label: "Office (Delivery between 10 AM - 5 PM)",
                                                          color: "primary",
                                                          value: "2",
                                                          id: "claddtype2"
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_radio_group, {
                                                    modelValue: radioColumn.value,
                                                    "onUpdate:modelValue": ($event) => radioColumn.value = $event,
                                                    column: "",
                                                    class: "ml-n3",
                                                    "hide-details": ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_radio, {
                                                        label: "Home (All day delivery)",
                                                        color: "primary",
                                                        value: "1",
                                                        id: "claddtype"
                                                      }),
                                                      createVNode(_component_v_radio, {
                                                        label: "Office (Delivery between 10 AM - 5 PM)",
                                                        color: "primary",
                                                        value: "2",
                                                        id: "claddtype2"
                                                      })
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "3",
                                              class: "pb-sm-3 pb-0 text-right"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, {
                                                  class: "mt-sm-2 mt-0 font-weight-medium",
                                                  for: "claddtype"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Address Type")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "9"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_radio_group, {
                                                  modelValue: radioColumn.value,
                                                  "onUpdate:modelValue": ($event) => radioColumn.value = $event,
                                                  column: "",
                                                  class: "ml-n3",
                                                  "hide-details": ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_radio, {
                                                      label: "Home (All day delivery)",
                                                      color: "primary",
                                                      value: "1",
                                                      id: "claddtype"
                                                    }),
                                                    createVNode(_component_v_radio, {
                                                      label: "Office (Delivery between 10 AM - 5 PM)",
                                                      color: "primary",
                                                      value: "2",
                                                      id: "claddtype2"
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "3",
                                            class: "pb-sm-3 pb-0 text-right"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, {
                                                class: "font-weight-medium",
                                                for: "clnm"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Full Name")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "9"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                color: "primary",
                                                id: "clnm",
                                                variant: "outlined",
                                                type: "text",
                                                placeholder: "John Deo",
                                                "hide-details": ""
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "3",
                                            class: "pb-sm-3 pb-0 text-right"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, {
                                                class: "font-weight-medium",
                                                for: "cladd"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Address")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "9"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_textarea, {
                                                "auto-grow": "",
                                                variant: "outlined",
                                                placeholder: "150, Ring Road",
                                                rows: "2",
                                                color: "primary",
                                                "row-height": "25",
                                                shaped: "",
                                                "hide-details": "",
                                                id: "cladd"
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "3",
                                            class: "pb-sm-3 pb-0 text-right"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, {
                                                class: "font-weight-medium",
                                                for: "clcity"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("City")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "9"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                color: "primary",
                                                variant: "outlined",
                                                id: "clcity",
                                                type: "text",
                                                placeholder: "Vadodara",
                                                "hide-details": ""
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_row, { class: "align-start" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "3",
                                            class: "pb-sm-3 pb-0 text-right"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, {
                                                class: "mt-sm-2 mt-0 font-weight-medium",
                                                for: "claddtype"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Address Type")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "9"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_radio_group, {
                                                modelValue: radioColumn.value,
                                                "onUpdate:modelValue": ($event) => radioColumn.value = $event,
                                                column: "",
                                                class: "ml-n3",
                                                "hide-details": ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_radio, {
                                                    label: "Home (All day delivery)",
                                                    color: "primary",
                                                    value: "1",
                                                    id: "claddtype"
                                                  }),
                                                  createVNode(_component_v_radio, {
                                                    label: "Office (Delivery between 10 AM - 5 PM)",
                                                    color: "primary",
                                                    value: "2",
                                                    id: "claddtype2"
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "3",
                                            class: "pb-sm-3 pb-0 text-right"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, {
                                                  class: "font-weight-medium",
                                                  for: "clphn"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Phone No`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Phone No")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, {
                                                    class: "font-weight-medium",
                                                    for: "clphn"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Phone No")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "9"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  id: "clphn",
                                                  type: "text",
                                                  placeholder: "1340 2154 123",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_text_field, {
                                                    color: "primary",
                                                    variant: "outlined",
                                                    id: "clphn",
                                                    type: "text",
                                                    placeholder: "1340 2154 123",
                                                    "hide-details": ""
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
                                              sm: "3",
                                              class: "pb-sm-3 pb-0 text-right"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, {
                                                  class: "font-weight-medium",
                                                  for: "clphn"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Phone No")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "9"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  id: "clphn",
                                                  type: "text",
                                                  placeholder: "1340 2154 123",
                                                  "hide-details": ""
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "3",
                                            class: "pb-sm-3 pb-0 text-right"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, {
                                                  class: "font-weight-medium",
                                                  for: "clpc"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Pincode`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Pincode")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, {
                                                    class: "font-weight-medium",
                                                    for: "clpc"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Pincode")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "9"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  id: "clpc",
                                                  type: "text",
                                                  placeholder: "120125",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_text_field, {
                                                    color: "primary",
                                                    variant: "outlined",
                                                    id: "clpc",
                                                    type: "text",
                                                    placeholder: "120125",
                                                    "hide-details": ""
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
                                              sm: "3",
                                              class: "pb-sm-3 pb-0 text-right"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, {
                                                  class: "font-weight-medium",
                                                  for: "clpc"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Pincode")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "9"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  id: "clpc",
                                                  type: "text",
                                                  placeholder: "120125",
                                                  "hide-details": ""
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "3",
                                            class: "pb-sm-3 pb-0 text-right"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, {
                                                  class: "font-weight-medium",
                                                  for: "cllm"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Landmark`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Landmark")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, {
                                                    class: "font-weight-medium",
                                                    for: "cllm"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Landmark")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            sm: "9"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  id: "cllm",
                                                  type: "text",
                                                  placeholder: "Nr.Wall Street",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_text_field, {
                                                    color: "primary",
                                                    variant: "outlined",
                                                    id: "cllm",
                                                    type: "text",
                                                    placeholder: "Nr.Wall Street",
                                                    "hide-details": ""
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
                                              sm: "3",
                                              class: "pb-sm-3 pb-0 text-right"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, {
                                                  class: "font-weight-medium",
                                                  for: "cllm"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Landmark")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "9"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  id: "cllm",
                                                  type: "text",
                                                  placeholder: "Nr.Wall Street",
                                                  "hide-details": ""
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
                                      createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "3",
                                            class: "pb-sm-3 pb-0 text-right"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, {
                                                class: "font-weight-medium",
                                                for: "clphn"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Phone No")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "9"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                color: "primary",
                                                variant: "outlined",
                                                id: "clphn",
                                                type: "text",
                                                placeholder: "1340 2154 123",
                                                "hide-details": ""
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "3",
                                            class: "pb-sm-3 pb-0 text-right"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, {
                                                class: "font-weight-medium",
                                                for: "clpc"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Pincode")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "9"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                color: "primary",
                                                variant: "outlined",
                                                id: "clpc",
                                                type: "text",
                                                placeholder: "120125",
                                                "hide-details": ""
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "3",
                                            class: "pb-sm-3 pb-0 text-right"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, {
                                                class: "font-weight-medium",
                                                for: "cllm"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Landmark")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "9"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                color: "primary",
                                                variant: "outlined",
                                                id: "cllm",
                                                type: "text",
                                                placeholder: "Nr.Wall Street",
                                                "hide-details": ""
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
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "3",
                                          class: "pb-sm-3 pb-0 text-right"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, {
                                              class: "font-weight-medium",
                                              for: "clnm"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Full Name")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "9"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              id: "clnm",
                                              variant: "outlined",
                                              type: "text",
                                              placeholder: "John Deo",
                                              "hide-details": ""
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "3",
                                          class: "pb-sm-3 pb-0 text-right"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, {
                                              class: "font-weight-medium",
                                              for: "cladd"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Address")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "9"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_textarea, {
                                              "auto-grow": "",
                                              variant: "outlined",
                                              placeholder: "150, Ring Road",
                                              rows: "2",
                                              color: "primary",
                                              "row-height": "25",
                                              shaped: "",
                                              "hide-details": "",
                                              id: "cladd"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "3",
                                          class: "pb-sm-3 pb-0 text-right"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, {
                                              class: "font-weight-medium",
                                              for: "clcity"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("City")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "9"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              variant: "outlined",
                                              id: "clcity",
                                              type: "text",
                                              placeholder: "Vadodara",
                                              "hide-details": ""
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_row, { class: "align-start" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "3",
                                          class: "pb-sm-3 pb-0 text-right"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, {
                                              class: "mt-sm-2 mt-0 font-weight-medium",
                                              for: "claddtype"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Address Type")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "9"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_radio_group, {
                                              modelValue: radioColumn.value,
                                              "onUpdate:modelValue": ($event) => radioColumn.value = $event,
                                              column: "",
                                              class: "ml-n3",
                                              "hide-details": ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_radio, {
                                                  label: "Home (All day delivery)",
                                                  color: "primary",
                                                  value: "1",
                                                  id: "claddtype"
                                                }),
                                                createVNode(_component_v_radio, {
                                                  label: "Office (Delivery between 10 AM - 5 PM)",
                                                  color: "primary",
                                                  value: "2",
                                                  id: "claddtype2"
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
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "3",
                                          class: "pb-sm-3 pb-0 text-right"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, {
                                              class: "font-weight-medium",
                                              for: "clphn"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Phone No")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "9"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              variant: "outlined",
                                              id: "clphn",
                                              type: "text",
                                              placeholder: "1340 2154 123",
                                              "hide-details": ""
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "3",
                                          class: "pb-sm-3 pb-0 text-right"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, {
                                              class: "font-weight-medium",
                                              for: "clpc"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Pincode")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "9"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              variant: "outlined",
                                              id: "clpc",
                                              type: "text",
                                              placeholder: "120125",
                                              "hide-details": ""
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "3",
                                          class: "pb-sm-3 pb-0 text-right"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, {
                                              class: "font-weight-medium",
                                              for: "cllm"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Landmark")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "9"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              variant: "outlined",
                                              id: "cllm",
                                              type: "text",
                                              placeholder: "Nr.Wall Street",
                                              "hide-details": ""
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
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "3",
                                        class: "pb-sm-3 pb-0 text-right"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, {
                                            class: "font-weight-medium",
                                            for: "clnm"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Full Name")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "9"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            id: "clnm",
                                            variant: "outlined",
                                            type: "text",
                                            placeholder: "John Deo",
                                            "hide-details": ""
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "3",
                                        class: "pb-sm-3 pb-0 text-right"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, {
                                            class: "font-weight-medium",
                                            for: "cladd"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Address")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "9"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_textarea, {
                                            "auto-grow": "",
                                            variant: "outlined",
                                            placeholder: "150, Ring Road",
                                            rows: "2",
                                            color: "primary",
                                            "row-height": "25",
                                            shaped: "",
                                            "hide-details": "",
                                            id: "cladd"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "3",
                                        class: "pb-sm-3 pb-0 text-right"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, {
                                            class: "font-weight-medium",
                                            for: "clcity"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("City")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "9"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            id: "clcity",
                                            type: "text",
                                            placeholder: "Vadodara",
                                            "hide-details": ""
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_row, { class: "align-start" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "3",
                                        class: "pb-sm-3 pb-0 text-right"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, {
                                            class: "mt-sm-2 mt-0 font-weight-medium",
                                            for: "claddtype"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Address Type")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "9"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_radio_group, {
                                            modelValue: radioColumn.value,
                                            "onUpdate:modelValue": ($event) => radioColumn.value = $event,
                                            column: "",
                                            class: "ml-n3",
                                            "hide-details": ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_radio, {
                                                label: "Home (All day delivery)",
                                                color: "primary",
                                                value: "1",
                                                id: "claddtype"
                                              }),
                                              createVNode(_component_v_radio, {
                                                label: "Office (Delivery between 10 AM - 5 PM)",
                                                color: "primary",
                                                value: "2",
                                                id: "claddtype2"
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
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "3",
                                        class: "pb-sm-3 pb-0 text-right"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, {
                                            class: "font-weight-medium",
                                            for: "clphn"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Phone No")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "9"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            id: "clphn",
                                            type: "text",
                                            placeholder: "1340 2154 123",
                                            "hide-details": ""
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "3",
                                        class: "pb-sm-3 pb-0 text-right"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, {
                                            class: "font-weight-medium",
                                            for: "clpc"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Pincode")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "9"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            id: "clpc",
                                            type: "text",
                                            placeholder: "120125",
                                            "hide-details": ""
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "3",
                                        class: "pb-sm-3 pb-0 text-right"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, {
                                            class: "font-weight-medium",
                                            for: "cllm"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Landmark")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "9"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            id: "cllm",
                                            type: "text",
                                            placeholder: "Nr.Wall Street",
                                            "hide-details": ""
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
                                createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "3",
                                      class: "pb-sm-3 pb-0 text-right"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, {
                                          class: "font-weight-medium",
                                          for: "clnm"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Full Name")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "9"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          id: "clnm",
                                          variant: "outlined",
                                          type: "text",
                                          placeholder: "John Deo",
                                          "hide-details": ""
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "3",
                                      class: "pb-sm-3 pb-0 text-right"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, {
                                          class: "font-weight-medium",
                                          for: "cladd"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Address")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "9"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_textarea, {
                                          "auto-grow": "",
                                          variant: "outlined",
                                          placeholder: "150, Ring Road",
                                          rows: "2",
                                          color: "primary",
                                          "row-height": "25",
                                          shaped: "",
                                          "hide-details": "",
                                          id: "cladd"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "3",
                                      class: "pb-sm-3 pb-0 text-right"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, {
                                          class: "font-weight-medium",
                                          for: "clcity"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("City")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "9"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          id: "clcity",
                                          type: "text",
                                          placeholder: "Vadodara",
                                          "hide-details": ""
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_row, { class: "align-start" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "3",
                                      class: "pb-sm-3 pb-0 text-right"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, {
                                          class: "mt-sm-2 mt-0 font-weight-medium",
                                          for: "claddtype"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Address Type")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "9"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_radio_group, {
                                          modelValue: radioColumn.value,
                                          "onUpdate:modelValue": ($event) => radioColumn.value = $event,
                                          column: "",
                                          class: "ml-n3",
                                          "hide-details": ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_radio, {
                                              label: "Home (All day delivery)",
                                              color: "primary",
                                              value: "1",
                                              id: "claddtype"
                                            }),
                                            createVNode(_component_v_radio, {
                                              label: "Office (Delivery between 10 AM - 5 PM)",
                                              color: "primary",
                                              value: "2",
                                              id: "claddtype2"
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
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "3",
                                      class: "pb-sm-3 pb-0 text-right"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, {
                                          class: "font-weight-medium",
                                          for: "clphn"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Phone No")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "9"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          id: "clphn",
                                          type: "text",
                                          placeholder: "1340 2154 123",
                                          "hide-details": ""
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "3",
                                      class: "pb-sm-3 pb-0 text-right"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, {
                                          class: "font-weight-medium",
                                          for: "clpc"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Pincode")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "9"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          id: "clpc",
                                          type: "text",
                                          placeholder: "120125",
                                          "hide-details": ""
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "3",
                                      class: "pb-sm-3 pb-0 text-right"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, {
                                          class: "font-weight-medium",
                                          for: "cllm"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Landmark")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      sm: "9"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          id: "cllm",
                                          type: "text",
                                          placeholder: "Nr.Wall Street",
                                          "hide-details": ""
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
                                      for: "clcn"
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
                                      id: "clcn",
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
                                                  for: "clnmm"
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
                                                  id: "clnmm",
                                                  type: "text",
                                                  placeholder: "John Deo",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, {
                                                    class: "mb-2 font-weight-medium",
                                                    for: "clnmm"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Name")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_text_field, {
                                                    color: "primary",
                                                    variant: "outlined",
                                                    id: "clnmm",
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
                                                  for: "clexp"
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
                                                  id: "clexp",
                                                  type: "text",
                                                  placeholder: "MM/YY",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, {
                                                    class: "mb-2 font-weight-medium",
                                                    for: "clexp"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Exp. Date")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_text_field, {
                                                    color: "primary",
                                                    variant: "outlined",
                                                    id: "clexp",
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
                                                  for: "clcvv"
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
                                                  id: "clcvv",
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
                                                    for: "clcvv"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("CVV Code")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_text_field, {
                                                    color: "primary",
                                                    variant: "outlined",
                                                    id: "clcvv",
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
                                                  for: "clnmm"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Name")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  id: "clnmm",
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
                                                  for: "clexp"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Exp. Date")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  id: "clexp",
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
                                                  for: "clcvv"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("CVV Code")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  id: "clcvv",
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
                                        for: "clcn"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Card Number")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        id: "clcn",
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
                                                for: "clnmm"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Name")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_text_field, {
                                                color: "primary",
                                                variant: "outlined",
                                                id: "clnmm",
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
                                                for: "clexp"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Exp. Date")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_text_field, {
                                                color: "primary",
                                                variant: "outlined",
                                                id: "clexp",
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
                                                for: "clcvv"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("CVV Code")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_text_field, {
                                                color: "primary",
                                                variant: "outlined",
                                                id: "clcvv",
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
                                      for: "clcn"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Card Number")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      id: "clcn",
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
                                              for: "clnmm"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Name")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              variant: "outlined",
                                              id: "clnmm",
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
                                              for: "clexp"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Exp. Date")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              variant: "outlined",
                                              id: "clexp",
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
                                              for: "clcvv"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("CVV Code")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              variant: "outlined",
                                              id: "clcvv",
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
                                    for: "clcn"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Card Number")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    color: "primary",
                                    variant: "outlined",
                                    id: "clcn",
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
                                            for: "clnmm"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Name")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            id: "clnmm",
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
                                            for: "clexp"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Exp. Date")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            id: "clexp",
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
                                            for: "clcvv"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("CVV Code")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            id: "clcvv",
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
                                  for: "clcn"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Card Number")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "clcn",
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
                                          for: "clnmm"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Name")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          id: "clnmm",
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
                                          for: "clexp"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Exp. Date")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          id: "clexp",
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
                                          for: "clcvv"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("CVV Code")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          id: "clcvv",
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
                              createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "3",
                                    class: "pb-sm-3 pb-0 text-right"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, {
                                        class: "font-weight-medium",
                                        for: "clnm"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Full Name")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "9"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        id: "clnm",
                                        variant: "outlined",
                                        type: "text",
                                        placeholder: "John Deo",
                                        "hide-details": ""
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "3",
                                    class: "pb-sm-3 pb-0 text-right"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, {
                                        class: "font-weight-medium",
                                        for: "cladd"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Address")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "9"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_textarea, {
                                        "auto-grow": "",
                                        variant: "outlined",
                                        placeholder: "150, Ring Road",
                                        rows: "2",
                                        color: "primary",
                                        "row-height": "25",
                                        shaped: "",
                                        "hide-details": "",
                                        id: "cladd"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "3",
                                    class: "pb-sm-3 pb-0 text-right"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, {
                                        class: "font-weight-medium",
                                        for: "clcity"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("City")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "9"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        id: "clcity",
                                        type: "text",
                                        placeholder: "Vadodara",
                                        "hide-details": ""
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_row, { class: "align-start" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "3",
                                    class: "pb-sm-3 pb-0 text-right"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, {
                                        class: "mt-sm-2 mt-0 font-weight-medium",
                                        for: "claddtype"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Address Type")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "9"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_radio_group, {
                                        modelValue: radioColumn.value,
                                        "onUpdate:modelValue": ($event) => radioColumn.value = $event,
                                        column: "",
                                        class: "ml-n3",
                                        "hide-details": ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_radio, {
                                            label: "Home (All day delivery)",
                                            color: "primary",
                                            value: "1",
                                            id: "claddtype"
                                          }),
                                          createVNode(_component_v_radio, {
                                            label: "Office (Delivery between 10 AM - 5 PM)",
                                            color: "primary",
                                            value: "2",
                                            id: "claddtype2"
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
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "3",
                                    class: "pb-sm-3 pb-0 text-right"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, {
                                        class: "font-weight-medium",
                                        for: "clphn"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Phone No")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "9"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        id: "clphn",
                                        type: "text",
                                        placeholder: "1340 2154 123",
                                        "hide-details": ""
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "3",
                                    class: "pb-sm-3 pb-0 text-right"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, {
                                        class: "font-weight-medium",
                                        for: "clpc"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Pincode")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "9"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        id: "clpc",
                                        type: "text",
                                        placeholder: "120125",
                                        "hide-details": ""
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_row, { class: "align-center mb-3" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "3",
                                    class: "pb-sm-3 pb-0 text-right"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, {
                                        class: "font-weight-medium",
                                        for: "cllm"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Landmark")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    sm: "9"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        id: "cllm",
                                        type: "text",
                                        placeholder: "Nr.Wall Street",
                                        "hide-details": ""
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
                                for: "clcn"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Card Number")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "clcn",
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
                                        for: "clnmm"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Name")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        id: "clnmm",
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
                                        for: "clexp"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Exp. Date")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        id: "clexp",
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
                                        for: "clcvv"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("CVV Code")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        id: "clcvv",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-horizontal/Collapsible.vue");
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
      const _component_VTextField = resolveComponent("VTextField");
      const _component_VSelect = resolveComponent("VSelect");
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
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "tfnm"
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
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "tfnm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("First Name")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_VTextField, {
                                color: "primary",
                                type: "text",
                                id: "tfnm",
                                placeholder: "John",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VTextField, {
                                  color: "primary",
                                  type: "text",
                                  id: "tfnm",
                                  placeholder: "John",
                                  "hide-details": ""
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
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "tfnm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("First Name")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VTextField, {
                                color: "primary",
                                type: "text",
                                id: "tfnm",
                                placeholder: "John",
                                "hide-details": ""
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "tfcnt"
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
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "tfcnt"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Country")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_VSelect, {
                                modelValue: select.value,
                                "onUpdate:modelValue": ($event) => select.value = $event,
                                items: location.value,
                                id: "tfcnt",
                                "single-line": "",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VSelect, {
                                  modelValue: select.value,
                                  "onUpdate:modelValue": ($event) => select.value = $event,
                                  items: location.value,
                                  id: "tfcnt",
                                  "single-line": "",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "tfcnt"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Country")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VSelect, {
                                modelValue: select.value,
                                "onUpdate:modelValue": ($event) => select.value = $event,
                                items: location.value,
                                id: "tfcnt",
                                "single-line": "",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "tfdob"
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
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "tfdob"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Birth Date")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_VTextField, {
                                color: "primary",
                                id: "tfdob",
                                type: "date",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VTextField, {
                                  color: "primary",
                                  id: "tfdob",
                                  type: "date",
                                  "hide-details": ""
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
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "tfdob"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Birth Date")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VTextField, {
                                color: "primary",
                                id: "tfdob",
                                type: "date",
                                "hide-details": ""
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
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "tfnm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("First Name")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_VTextField, {
                              color: "primary",
                              type: "text",
                              id: "tfnm",
                              placeholder: "John",
                              "hide-details": ""
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "tfcnt"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Country")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_VSelect, {
                              modelValue: select.value,
                              "onUpdate:modelValue": ($event) => select.value = $event,
                              items: location.value,
                              id: "tfcnt",
                              "single-line": "",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "align-center" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "tfdob"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Birth Date")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_VTextField, {
                              color: "primary",
                              id: "tfdob",
                              type: "date",
                              "hide-details": ""
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
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "tflnm"
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
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "tflnm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Last Name")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "tflnm",
                                type: "text",
                                placeholder: "Doe",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "tflnm",
                                  type: "text",
                                  placeholder: "Doe",
                                  "hide-details": ""
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
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "tflnm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Last Name")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "tflnm",
                                type: "text",
                                placeholder: "Doe",
                                "hide-details": ""
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "tflng"
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
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "tflng"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Language")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_VSelect, {
                                modelValue: selectlng.value,
                                "onUpdate:modelValue": ($event) => selectlng.value = $event,
                                items: language.value,
                                id: "tflng",
                                "single-line": "",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VSelect, {
                                  modelValue: selectlng.value,
                                  "onUpdate:modelValue": ($event) => selectlng.value = $event,
                                  items: language.value,
                                  id: "tflng",
                                  "single-line": "",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "tflng"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Language")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VSelect, {
                                modelValue: selectlng.value,
                                "onUpdate:modelValue": ($event) => selectlng.value = $event,
                                items: language.value,
                                id: "tflng",
                                "single-line": "",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "tflph"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Phone no`);
                                  } else {
                                    return [
                                      createTextVNode("Phone no")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "tflph"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Phone no")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "tflph",
                                type: "text",
                                placeholder: "123 4567 201",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "tflph",
                                  type: "text",
                                  placeholder: "123 4567 201",
                                  "hide-details": ""
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
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "tflph"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Phone no")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "tflph",
                                type: "text",
                                placeholder: "123 4567 201",
                                "hide-details": ""
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
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "tflnm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Last Name")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "tflnm",
                              type: "text",
                              placeholder: "Doe",
                              "hide-details": ""
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "tflng"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Language")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_VSelect, {
                              modelValue: selectlng.value,
                              "onUpdate:modelValue": ($event) => selectlng.value = $event,
                              items: language.value,
                              id: "tflng",
                              "single-line": "",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "tflph"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Phone no")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "tflph",
                              type: "text",
                              placeholder: "123 4567 201",
                              "hide-details": ""
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
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "6",
              class: "mt-n6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center py-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9",
                          "offset-sm": "3"
                        }, {
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
                            sm: "9",
                            "offset-sm": "3"
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_row, { class: "align-center py-2" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9",
                          "offset-sm": "3"
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
                  createVNode(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "3",
                        class: "pb-sm-3 pb-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, {
                            class: "font-weight-medium",
                            for: "tfnm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("First Name")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "9"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_VTextField, {
                            color: "primary",
                            type: "text",
                            id: "tfnm",
                            placeholder: "John",
                            "hide-details": ""
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "3",
                        class: "pb-sm-3 pb-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, {
                            class: "font-weight-medium",
                            for: "tfcnt"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Country")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "9"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_VSelect, {
                            modelValue: select.value,
                            "onUpdate:modelValue": ($event) => select.value = $event,
                            items: location.value,
                            id: "tfcnt",
                            "single-line": "",
                            "hide-details": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, { class: "align-center" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "3",
                        class: "pb-sm-3 pb-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, {
                            class: "font-weight-medium",
                            for: "tfdob"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Birth Date")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "9"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_VTextField, {
                            color: "primary",
                            id: "tfdob",
                            type: "date",
                            "hide-details": ""
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
              createVNode(_component_v_col, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "3",
                        class: "pb-sm-3 pb-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, {
                            class: "font-weight-medium",
                            for: "tflnm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Last Name")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "9"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            color: "primary",
                            variant: "outlined",
                            id: "tflnm",
                            type: "text",
                            placeholder: "Doe",
                            "hide-details": ""
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "3",
                        class: "pb-sm-3 pb-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, {
                            class: "font-weight-medium",
                            for: "tflng"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Language")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "9"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_VSelect, {
                            modelValue: selectlng.value,
                            "onUpdate:modelValue": ($event) => selectlng.value = $event,
                            items: language.value,
                            id: "tflng",
                            "single-line": "",
                            "hide-details": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "3",
                        class: "pb-sm-3 pb-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, {
                            class: "font-weight-medium",
                            for: "tflph"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Phone no")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "9"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            color: "primary",
                            variant: "outlined",
                            id: "tflph",
                            type: "text",
                            placeholder: "123 4567 201",
                            "hide-details": ""
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
              createVNode(_component_v_col, {
                cols: "12",
                md: "6",
                class: "mt-n6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_row, { class: "align-center py-2" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "9",
                        "offset-sm": "3"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-horizontal/PersonalInfoTab.vue");
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
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "hnm"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`User Name`);
                                  } else {
                                    return [
                                      createTextVNode("User Name")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "hnm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("User Name")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "hnm",
                                type: "text",
                                placeholder: "John",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  id: "hnm",
                                  type: "text",
                                  placeholder: "John",
                                  "hide-details": ""
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
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "hnm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("User Name")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                id: "hnm",
                                type: "text",
                                placeholder: "John",
                                "hide-details": ""
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fpw"
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
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "fpw"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Password")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: show2.value ? "text" : "password",
                                placeholder: "john.deo",
                                "hide-details": "",
                                class: "text-subtitle-1",
                                "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                                "onClick:appendInner": ($event) => show2.value = !show2.value,
                                id: "fpw"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  type: show2.value ? "text" : "password",
                                  placeholder: "john.deo",
                                  "hide-details": "",
                                  class: "text-subtitle-1",
                                  "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                                  "onClick:appendInner": ($event) => show2.value = !show2.value,
                                  id: "fpw"
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
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "fpw"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Password")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: show2.value ? "text" : "password",
                                placeholder: "john.deo",
                                "hide-details": "",
                                class: "text-subtitle-1",
                                "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                                "onClick:appendInner": ($event) => show2.value = !show2.value,
                                id: "fpw"
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
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "hnm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("User Name")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "hnm",
                              type: "text",
                              placeholder: "John",
                              "hide-details": ""
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "align-center" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "fpw"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Password")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              type: show2.value ? "text" : "password",
                              placeholder: "john.deo",
                              "hide-details": "",
                              class: "text-subtitle-1",
                              "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                              "onClick:appendInner": ($event) => show2.value = !show2.value,
                              id: "fpw"
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
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "heml"
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
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "heml"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Email")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: "email",
                                placeholder: "john.deo",
                                suffix: "@example.com",
                                "hide-details": "",
                                id: "heml"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  type: "email",
                                  placeholder: "john.deo",
                                  suffix: "@example.com",
                                  "hide-details": "",
                                  id: "heml"
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
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "heml"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Email")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: "email",
                                placeholder: "john.deo",
                                suffix: "@example.com",
                                "hide-details": "",
                                id: "heml"
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "font-weight-medium",
                                for: "hcnf"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Confirm`);
                                  } else {
                                    return [
                                      createTextVNode("Confirm")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_label, {
                                  class: "font-weight-medium",
                                  for: "hcnf"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Confirm")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: show3.value ? "text" : "password",
                                placeholder: "john.deo",
                                "hide-details": "",
                                class: "text-subtitle-1",
                                "append-inner-icon": show3.value ? "mdi-eye" : "mdi-eye-off",
                                "onClick:appendInner": ($event) => show3.value = !show3.value,
                                id: "hcnf"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  type: show3.value ? "text" : "password",
                                  placeholder: "john.deo",
                                  "hide-details": "",
                                  class: "text-subtitle-1",
                                  "append-inner-icon": show3.value ? "mdi-eye" : "mdi-eye-off",
                                  "onClick:appendInner": ($event) => show3.value = !show3.value,
                                  id: "hcnf"
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
                            sm: "3",
                            class: "pb-sm-3 pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, {
                                class: "font-weight-medium",
                                for: "hcnf"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Confirm")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: show3.value ? "text" : "password",
                                placeholder: "john.deo",
                                "hide-details": "",
                                class: "text-subtitle-1",
                                "append-inner-icon": show3.value ? "mdi-eye" : "mdi-eye-off",
                                "onClick:appendInner": ($event) => show3.value = !show3.value,
                                id: "hcnf"
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
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "heml"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Email")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              type: "email",
                              placeholder: "john.deo",
                              suffix: "@example.com",
                              "hide-details": "",
                              id: "heml"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "align-center mb-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "pb-sm-3 pb-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "hcnf"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Confirm")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              type: show3.value ? "text" : "password",
                              placeholder: "john.deo",
                              "hide-details": "",
                              class: "text-subtitle-1",
                              "append-inner-icon": show3.value ? "mdi-eye" : "mdi-eye-off",
                              "onClick:appendInner": ($event) => show3.value = !show3.value,
                              id: "hcnf"
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
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "6",
              class: "mt-n6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center py-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "9",
                          "offset-sm": "3"
                        }, {
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
                            sm: "9",
                            "offset-sm": "3"
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_row, { class: "align-center py-2" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "9",
                          "offset-sm": "3"
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
                  createVNode(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "3",
                        class: "pb-sm-3 pb-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, {
                            class: "font-weight-medium",
                            for: "hnm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("User Name")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "9"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            color: "primary",
                            variant: "outlined",
                            id: "hnm",
                            type: "text",
                            placeholder: "John",
                            "hide-details": ""
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, { class: "align-center" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "3",
                        class: "pb-sm-3 pb-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, {
                            class: "font-weight-medium",
                            for: "fpw"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Password")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "9"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            color: "primary",
                            variant: "outlined",
                            type: show2.value ? "text" : "password",
                            placeholder: "john.deo",
                            "hide-details": "",
                            class: "text-subtitle-1",
                            "append-inner-icon": show2.value ? "mdi-eye" : "mdi-eye-off",
                            "onClick:appendInner": ($event) => show2.value = !show2.value,
                            id: "fpw"
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
              createVNode(_component_v_col, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "3",
                        class: "pb-sm-3 pb-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, {
                            class: "font-weight-medium",
                            for: "heml"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Email")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "9"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            color: "primary",
                            variant: "outlined",
                            type: "email",
                            placeholder: "john.deo",
                            suffix: "@example.com",
                            "hide-details": "",
                            id: "heml"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, { class: "align-center mb-3" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "3",
                        class: "pb-sm-3 pb-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, {
                            class: "font-weight-medium",
                            for: "hcnf"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Confirm")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "9"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            color: "primary",
                            variant: "outlined",
                            type: show3.value ? "text" : "password",
                            placeholder: "john.deo",
                            "hide-details": "",
                            class: "text-subtitle-1",
                            "append-inner-icon": show3.value ? "mdi-eye" : "mdi-eye-off",
                            "onClick:appendInner": ($event) => show3.value = !show3.value,
                            id: "hcnf"
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
              createVNode(_component_v_col, {
                cols: "12",
                md: "6",
                class: "mt-n6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_row, { class: "align-center py-2" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "9",
                        "offset-sm": "3"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-horizontal/AccountDetailsTab.vue");
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
              _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      sm: "3",
                      class: "pb-sm-3 pb-0"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_label, {
                            class: "font-weight-medium",
                            for: "tbtwit"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Twitter`);
                              } else {
                                return [
                                  createTextVNode("Twitter")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "tbtwit"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Twitter")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      sm: "9"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_text_field, {
                            color: "primary",
                            variant: "outlined",
                            id: "tbtwit",
                            type: "text",
                            placeholder: "https://twitter.com/abc",
                            "hide-details": ""
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "tbtwit",
                              type: "text",
                              placeholder: "https://twitter.com/abc",
                              "hide-details": ""
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
                        sm: "3",
                        class: "pb-sm-3 pb-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, {
                            class: "font-weight-medium",
                            for: "tbtwit"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Twitter")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "9"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            color: "primary",
                            variant: "outlined",
                            id: "tbtwit",
                            type: "text",
                            placeholder: "https://twitter.com/abc",
                            "hide-details": ""
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      sm: "3",
                      class: "pb-sm-3 pb-0"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_label, {
                            class: "font-weight-medium",
                            for: "tbtgg"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Google`);
                              } else {
                                return [
                                  createTextVNode("Google")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "tbtgg"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Google")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      sm: "9"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_text_field, {
                            color: "primary",
                            variant: "outlined",
                            id: "tbtgg",
                            type: "text",
                            placeholder: "https://plus.google.com/abc",
                            "hide-details": ""
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "tbtgg",
                              type: "text",
                              placeholder: "https://plus.google.com/abc",
                              "hide-details": ""
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
                        sm: "3",
                        class: "pb-sm-3 pb-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, {
                            class: "font-weight-medium",
                            for: "tbtgg"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Google")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "9"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            color: "primary",
                            variant: "outlined",
                            id: "tbtgg",
                            type: "text",
                            placeholder: "https://plus.google.com/abc",
                            "hide-details": ""
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      sm: "3",
                      class: "pb-sm-3 pb-0"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_label, {
                            class: "font-weight-medium",
                            for: "tbinst"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Instagram`);
                              } else {
                                return [
                                  createTextVNode("Instagram")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "tbinst"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Instagram")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      sm: "9"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_text_field, {
                            color: "primary",
                            variant: "outlined",
                            id: "tbinst",
                            type: "text",
                            placeholder: "https://instagram.com/abc",
                            "hide-details": ""
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "tbinst",
                              type: "text",
                              placeholder: "https://instagram.com/abc",
                              "hide-details": ""
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
                        sm: "3",
                        class: "pb-sm-3 pb-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, {
                            class: "font-weight-medium",
                            for: "tbinst"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Instagram")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "9"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            color: "primary",
                            variant: "outlined",
                            id: "tbinst",
                            type: "text",
                            placeholder: "https://instagram.com/abc",
                            "hide-details": ""
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
                createVNode(_component_v_row, { class: "align-center mb-3" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "3",
                      class: "pb-sm-3 pb-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_label, {
                          class: "font-weight-medium",
                          for: "tbtwit"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Twitter")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "9"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_text_field, {
                          color: "primary",
                          variant: "outlined",
                          id: "tbtwit",
                          type: "text",
                          placeholder: "https://twitter.com/abc",
                          "hide-details": ""
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_row, { class: "align-center mb-3" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "3",
                      class: "pb-sm-3 pb-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_label, {
                          class: "font-weight-medium",
                          for: "tbtgg"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Google")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "9"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_text_field, {
                          color: "primary",
                          variant: "outlined",
                          id: "tbtgg",
                          type: "text",
                          placeholder: "https://plus.google.com/abc",
                          "hide-details": ""
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_row, { class: "align-center mb-3" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "3",
                      class: "pb-sm-3 pb-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_label, {
                          class: "font-weight-medium",
                          for: "tbinst"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Instagram")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "9"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_text_field, {
                          color: "primary",
                          variant: "outlined",
                          id: "tbinst",
                          type: "text",
                          placeholder: "https://instagram.com/abc",
                          "hide-details": ""
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
        _push2(ssrRenderComponent(_component_v_col, {
          cols: "12",
          md: "6"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      sm: "3",
                      class: "pb-sm-3 pb-0"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_label, {
                            class: "font-weight-medium",
                            for: "tbfb"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Facebook`);
                              } else {
                                return [
                                  createTextVNode("Facebook")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "tbfb"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Facebook")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      sm: "9"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_text_field, {
                            color: "primary",
                            variant: "outlined",
                            id: "tbfb",
                            type: "text",
                            placeholder: "https://facebook.com/abc",
                            "hide-details": ""
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "tbfb",
                              type: "text",
                              placeholder: "https://facebook.com/abc",
                              "hide-details": ""
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
                        sm: "3",
                        class: "pb-sm-3 pb-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, {
                            class: "font-weight-medium",
                            for: "tbfb"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Facebook")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "9"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            color: "primary",
                            variant: "outlined",
                            id: "tbfb",
                            type: "text",
                            placeholder: "https://facebook.com/abc",
                            "hide-details": ""
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      sm: "3",
                      class: "pb-sm-3 pb-0"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_label, {
                            class: "font-weight-medium",
                            for: "tbln"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Linkedin`);
                              } else {
                                return [
                                  createTextVNode("Linkedin")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "tbln"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Linkedin")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      sm: "9"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_text_field, {
                            color: "primary",
                            variant: "outlined",
                            id: "tbln",
                            type: "text",
                            placeholder: "https://Linkedin.com/abc",
                            "hide-details": ""
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "tbln",
                              type: "text",
                              placeholder: "https://Linkedin.com/abc",
                              "hide-details": ""
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
                        sm: "3",
                        class: "pb-sm-3 pb-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, {
                            class: "font-weight-medium",
                            for: "tbln"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Linkedin")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "9"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            color: "primary",
                            variant: "outlined",
                            id: "tbln",
                            type: "text",
                            placeholder: "https://Linkedin.com/abc",
                            "hide-details": ""
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_row, { class: "align-center mb-3" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      sm: "3",
                      class: "pb-sm-3 pb-0"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_label, {
                            class: "font-weight-medium",
                            for: "tbqr"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Quora`);
                              } else {
                                return [
                                  createTextVNode("Quora")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_label, {
                              class: "font-weight-medium",
                              for: "tbqr"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Quora")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      sm: "9"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_text_field, {
                            color: "primary",
                            variant: "outlined",
                            id: "tbqr",
                            type: "text",
                            placeholder: "https://Quora.com/abc",
                            "hide-details": ""
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              id: "tbqr",
                              type: "text",
                              placeholder: "https://Quora.com/abc",
                              "hide-details": ""
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
                        sm: "3",
                        class: "pb-sm-3 pb-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, {
                            class: "font-weight-medium",
                            for: "tbqr"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Quora")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "9"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            color: "primary",
                            variant: "outlined",
                            id: "tbqr",
                            type: "text",
                            placeholder: "https://Quora.com/abc",
                            "hide-details": ""
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
                createVNode(_component_v_row, { class: "align-center mb-3" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "3",
                      class: "pb-sm-3 pb-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_label, {
                          class: "font-weight-medium",
                          for: "tbfb"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Facebook")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "9"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_text_field, {
                          color: "primary",
                          variant: "outlined",
                          id: "tbfb",
                          type: "text",
                          placeholder: "https://facebook.com/abc",
                          "hide-details": ""
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_row, { class: "align-center mb-3" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "3",
                      class: "pb-sm-3 pb-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_label, {
                          class: "font-weight-medium",
                          for: "tbln"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Linkedin")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "9"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_text_field, {
                          color: "primary",
                          variant: "outlined",
                          id: "tbln",
                          type: "text",
                          placeholder: "https://Linkedin.com/abc",
                          "hide-details": ""
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_row, { class: "align-center mb-3" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "3",
                      class: "pb-sm-3 pb-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_label, {
                          class: "font-weight-medium",
                          for: "tbqr"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Quora")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "9"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_text_field, {
                          color: "primary",
                          variant: "outlined",
                          id: "tbqr",
                          type: "text",
                          placeholder: "https://Quora.com/abc",
                          "hide-details": ""
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
        _push2(ssrRenderComponent(_component_v_col, {
          cols: "12",
          md: "6",
          class: "mt-n6"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_row, { class: "align-center py-2" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      sm: "9",
                      "offset-sm": "3"
                    }, {
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
                        sm: "9",
                        "offset-sm": "3"
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_row, { class: "align-center py-2" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "9",
                      "offset-sm": "3"
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
              createVNode(_component_v_row, { class: "align-center mb-3" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "3",
                    class: "pb-sm-3 pb-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_label, {
                        class: "font-weight-medium",
                        for: "tbtwit"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Twitter")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "9"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_text_field, {
                        color: "primary",
                        variant: "outlined",
                        id: "tbtwit",
                        type: "text",
                        placeholder: "https://twitter.com/abc",
                        "hide-details": ""
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, { class: "align-center mb-3" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "3",
                    class: "pb-sm-3 pb-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_label, {
                        class: "font-weight-medium",
                        for: "tbtgg"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Google")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "9"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_text_field, {
                        color: "primary",
                        variant: "outlined",
                        id: "tbtgg",
                        type: "text",
                        placeholder: "https://plus.google.com/abc",
                        "hide-details": ""
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, { class: "align-center mb-3" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "3",
                    class: "pb-sm-3 pb-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_label, {
                        class: "font-weight-medium",
                        for: "tbinst"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Instagram")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "9"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_text_field, {
                        color: "primary",
                        variant: "outlined",
                        id: "tbinst",
                        type: "text",
                        placeholder: "https://instagram.com/abc",
                        "hide-details": ""
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
          createVNode(_component_v_col, {
            cols: "12",
            md: "6"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_row, { class: "align-center mb-3" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "3",
                    class: "pb-sm-3 pb-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_label, {
                        class: "font-weight-medium",
                        for: "tbfb"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Facebook")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "9"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_text_field, {
                        color: "primary",
                        variant: "outlined",
                        id: "tbfb",
                        type: "text",
                        placeholder: "https://facebook.com/abc",
                        "hide-details": ""
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, { class: "align-center mb-3" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "3",
                    class: "pb-sm-3 pb-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_label, {
                        class: "font-weight-medium",
                        for: "tbln"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Linkedin")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "9"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_text_field, {
                        color: "primary",
                        variant: "outlined",
                        id: "tbln",
                        type: "text",
                        placeholder: "https://Linkedin.com/abc",
                        "hide-details": ""
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, { class: "align-center mb-3" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "3",
                    class: "pb-sm-3 pb-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_label, {
                        class: "font-weight-medium",
                        for: "tbqr"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Quora")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "9"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_text_field, {
                        color: "primary",
                        variant: "outlined",
                        id: "tbqr",
                        type: "text",
                        placeholder: "https://Quora.com/abc",
                        "hide-details": ""
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
          createVNode(_component_v_col, {
            cols: "12",
            md: "6",
            class: "mt-n6"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_row, { class: "align-center py-2" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "9",
                    "offset-sm": "3"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-horizontal/SocialLinksTab.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SocialLinksTab = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Form-Horizontal",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Form Horizontal" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Form horizontal",
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
      _push(ssrRenderComponent(_sfc_main$9, {
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
                  _push3(ssrRenderComponent(_sfc_main$a, { title: "Basic Layout" }, {
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
                    createVNode(_sfc_main$a, { title: "Basic Layout" }, {
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
                  _push3(ssrRenderComponent(_sfc_main$a, { title: "Basic with Icons" }, {
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
                } else {
                  return [
                    createVNode(_sfc_main$a, { title: "Basic with Icons" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$7)
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
                  _push3(ssrRenderComponent(_sfc_main$6, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$6)
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
                  createVNode(_sfc_main$a, { title: "Basic Layout" }, {
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
                  createVNode(_sfc_main$a, { title: "Basic with Icons" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$7)
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
                  createVNode(_sfc_main$6)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                md: "6"
              }, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forms/Form-Horizontal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Form-Horizontal-D20Q4yUP.mjs.map
