import { defineComponent, ref, resolveComponent, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './UiParentCard-DhlYzLUl.mjs';
import { VolumeIcon, Volume2Icon } from 'vue-tabler-icons';
import { _ as _sfc_main$2 } from './BaseBreadcrumb-DAIjkUfv.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CustomFrom",
  __ssrInlineRender: true,
  setup(__props) {
    const select = ref("One");
    const items = ref(["One", "Two", "Three", "Four"]);
    const radios = ref("Male");
    const checked = ref(true);
    const range = ref([20, 40]);
    const sel1 = ref("750");
    const sel2 = ref("950");
    const select1 = ref(["750", "850", "950"]);
    const select2 = ref(["950", "1050", "1150"]);
    const volume = ref(40);
    const model = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_label = resolveComponent("v-label");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_radio_group = resolveComponent("v-radio-group");
      const _component_v_radio = resolveComponent("v-radio");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      const _component_v_range_slider = resolveComponent("v-range-slider");
      const _component_v_slider = resolveComponent("v-slider");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_switch = resolveComponent("v-switch");
      _push(ssrRenderComponent(_component_v_row, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "fcname"
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
                    id: "fcname",
                    placeholder: "Enter Text",
                    color: "primary"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "fcseldrop"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Select Dropdown`);
                      } else {
                        return [
                          createTextVNode("Select Dropdown")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_select, {
                    items: items.value,
                    "item-title": "items",
                    "item-value": "abbr",
                    "return-object": "",
                    "single-line": "",
                    variant: "outlined",
                    modelValue: select.value,
                    "onUpdate:modelValue": ($event) => select.value = $event,
                    id: "fcseldrop"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_label, {
                      class: "mb-2 font-weight-medium",
                      for: "fcname"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Name")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      variant: "outlined",
                      id: "fcname",
                      placeholder: "Enter Text",
                      color: "primary"
                    }),
                    createVNode(_component_v_label, {
                      class: "mb-2 font-weight-medium",
                      for: "fcseldrop"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Select Dropdown")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_select, {
                      items: items.value,
                      "item-title": "items",
                      "item-value": "abbr",
                      "return-object": "",
                      "single-line": "",
                      variant: "outlined",
                      modelValue: select.value,
                      "onUpdate:modelValue": ($event) => select.value = $event,
                      id: "fcseldrop"
                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "fccnm"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Company Name`);
                      } else {
                        return [
                          createTextVNode("Company Name")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    variant: "outlined",
                    placeholder: "Enter Text",
                    id: "fccnm",
                    color: "primary"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "fctime"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Time`);
                      } else {
                        return [
                          createTextVNode("Time")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    variant: "outlined",
                    placeholder: "hh:mm",
                    id: "fctime",
                    type: "time",
                    color: "primary"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_label, {
                      class: "mb-2 font-weight-medium",
                      for: "fccnm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Company Name")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      variant: "outlined",
                      placeholder: "Enter Text",
                      id: "fccnm",
                      color: "primary"
                    }),
                    createVNode(_component_v_label, {
                      class: "mb-2 font-weight-medium",
                      for: "fctime"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Time")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      variant: "outlined",
                      placeholder: "hh:mm",
                      id: "fctime",
                      type: "time",
                      color: "primary"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "fcindtype"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Industry Type`);
                      } else {
                        return [
                          createTextVNode("Industry Type")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    variant: "outlined",
                    placeholder: "Disabled Filled",
                    id: "fcindtype",
                    color: "primary"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "fcdt"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Date`);
                      } else {
                        return [
                          createTextVNode("Date")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    variant: "outlined",
                    type: "date",
                    id: "fcdt",
                    color: "primary"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_label, {
                      class: "mb-2 font-weight-medium",
                      for: "fcindtype"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Industry Type")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      variant: "outlined",
                      placeholder: "Disabled Filled",
                      id: "fcindtype",
                      color: "primary"
                    }),
                    createVNode(_component_v_label, {
                      class: "mb-2 font-weight-medium",
                      for: "fcdt"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Date")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      variant: "outlined",
                      type: "date",
                      id: "fcdt",
                      color: "primary"
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
                    class: "mb-2 font-weight-medium",
                    for: "gndr"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Lorem ipsum dolor sit amet`);
                      } else {
                        return [
                          createTextVNode("Lorem ipsum dolor sit amet")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_radio_group, {
                    inline: "",
                    modelValue: radios.value,
                    "onUpdate:modelValue": ($event) => radios.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_radio, {
                                      label: "Male",
                                      color: "primary",
                                      value: "Male",
                                      id: "gndr"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_radio, {
                                        label: "Male",
                                        color: "primary",
                                        value: "Male",
                                        id: "gndr"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_radio, {
                                      label: "Female",
                                      color: "primary",
                                      value: "Female",
                                      id: "gndr2"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_radio, {
                                        label: "Female",
                                        color: "primary",
                                        value: "Female",
                                        id: "gndr2"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_radio, {
                                      label: "Disabled",
                                      color: "primary",
                                      value: "Disabled",
                                      id: "gndr3",
                                      disabled: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_radio, {
                                        label: "Disabled",
                                        color: "primary",
                                        value: "Disabled",
                                        id: "gndr3",
                                        disabled: ""
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
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_radio, {
                                      label: "Male",
                                      color: "primary",
                                      value: "Male",
                                      id: "gndr"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_radio, {
                                      label: "Female",
                                      color: "primary",
                                      value: "Female",
                                      id: "gndr2"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_radio, {
                                      label: "Disabled",
                                      color: "primary",
                                      value: "Disabled",
                                      id: "gndr3",
                                      disabled: ""
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
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_radio, {
                                    label: "Male",
                                    color: "primary",
                                    value: "Male",
                                    id: "gndr"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_radio, {
                                    label: "Female",
                                    color: "primary",
                                    value: "Female",
                                    id: "gndr2"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_radio, {
                                    label: "Disabled",
                                    color: "primary",
                                    value: "Disabled",
                                    id: "gndr3",
                                    disabled: ""
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
                    for: "isdtype"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Industry Type`);
                      } else {
                        return [
                          createTextVNode("Industry Type")
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
                          md: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_checkbox, {
                                modelValue: checked.value,
                                "onUpdate:modelValue": ($event) => checked.value = $event,
                                color: "primary",
                                label: "Enter text",
                                id: "isdtype"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_checkbox, {
                                  modelValue: checked.value,
                                  "onUpdate:modelValue": ($event) => checked.value = $event,
                                  color: "primary",
                                  label: "Enter text",
                                  id: "isdtype"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_checkbox, {
                                label: "Enter text",
                                color: "primary",
                                id: "isdtype2"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_checkbox, {
                                  label: "Enter text",
                                  color: "primary",
                                  id: "isdtype2"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_checkbox, {
                                label: "Disabled",
                                id: "isdtype3",
                                disabled: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_checkbox, {
                                  label: "Disabled",
                                  id: "isdtype3",
                                  disabled: ""
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
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_checkbox, {
                                modelValue: checked.value,
                                "onUpdate:modelValue": ($event) => checked.value = $event,
                                color: "primary",
                                label: "Enter text",
                                id: "isdtype"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_checkbox, {
                                label: "Enter text",
                                color: "primary",
                                id: "isdtype2"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_checkbox, {
                                label: "Disabled",
                                id: "isdtype3",
                                disabled: ""
                              })
                            ]),
                            _: 1
                          })
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
                          md: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="mb-2 font-weight-medium text-subtitle-1"${_scopeId4}>Slider</div>`);
                              _push5(ssrRenderComponent(_component_v_range_slider, {
                                modelValue: range.value,
                                "onUpdate:modelValue": ($event) => range.value = $event,
                                strict: "",
                                color: "primary"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_row, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_select, {
                                            items: select1.value,
                                            "item-title": "select1",
                                            "item-value": "abbr",
                                            "return-object": "",
                                            "single-line": "",
                                            variant: "outlined",
                                            modelValue: sel1.value,
                                            "onUpdate:modelValue": ($event) => sel1.value = $event
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_select, {
                                              items: select1.value,
                                              "item-title": "select1",
                                              "item-value": "abbr",
                                              "return-object": "",
                                              "single-line": "",
                                              variant: "outlined",
                                              modelValue: sel1.value,
                                              "onUpdate:modelValue": ($event) => sel1.value = $event
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_select, {
                                            items: select2.value,
                                            "item-title": "select2",
                                            "item-value": "abbr",
                                            "return-object": "",
                                            "single-line": "",
                                            variant: "outlined",
                                            modelValue: sel2.value,
                                            "onUpdate:modelValue": ($event) => sel2.value = $event
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_select, {
                                              items: select2.value,
                                              "item-title": "select2",
                                              "item-value": "abbr",
                                              "return-object": "",
                                              "single-line": "",
                                              variant: "outlined",
                                              modelValue: sel2.value,
                                              "onUpdate:modelValue": ($event) => sel2.value = $event
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            items: select1.value,
                                            "item-title": "select1",
                                            "item-value": "abbr",
                                            "return-object": "",
                                            "single-line": "",
                                            variant: "outlined",
                                            modelValue: sel1.value,
                                            "onUpdate:modelValue": ($event) => sel1.value = $event
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            items: select2.value,
                                            "item-title": "select2",
                                            "item-value": "abbr",
                                            "return-object": "",
                                            "single-line": "",
                                            variant: "outlined",
                                            modelValue: sel2.value,
                                            "onUpdate:modelValue": ($event) => sel2.value = $event
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_label, {
                                class: "mb-2 font-weight-medium",
                                for: "vlm"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Volume`);
                                  } else {
                                    return [
                                      createTextVNode("Volume")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_slider, {
                                modelValue: volume.value,
                                "onUpdate:modelValue": ($event) => volume.value = $event,
                                color: "primary",
                                id: "vlm"
                              }, {
                                prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      size: "small",
                                      variant: "text",
                                      color: "primary"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(Volume2Icon), {
                                            "stroke-width": "1.5",
                                            size: "20"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(Volume2Icon), {
                                              "stroke-width": "1.5",
                                              size: "20"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_btn, {
                                        size: "small",
                                        variant: "text",
                                        color: "primary"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Volume2Icon), {
                                            "stroke-width": "1.5",
                                            size: "20"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                append: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      size: "small",
                                      variant: "text",
                                      color: "primary"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(VolumeIcon), {
                                            "stroke-width": "1.5",
                                            size: "20"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(VolumeIcon), {
                                              "stroke-width": "1.5",
                                              size: "20"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_btn, {
                                        size: "small",
                                        variant: "text",
                                        color: "primary"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(VolumeIcon), {
                                            "stroke-width": "1.5",
                                            size: "20"
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
                                createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Slider"),
                                createVNode(_component_v_range_slider, {
                                  modelValue: range.value,
                                  "onUpdate:modelValue": ($event) => range.value = $event,
                                  strict: "",
                                  color: "primary"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          items: select1.value,
                                          "item-title": "select1",
                                          "item-value": "abbr",
                                          "return-object": "",
                                          "single-line": "",
                                          variant: "outlined",
                                          modelValue: sel1.value,
                                          "onUpdate:modelValue": ($event) => sel1.value = $event
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          items: select2.value,
                                          "item-title": "select2",
                                          "item-value": "abbr",
                                          "return-object": "",
                                          "single-line": "",
                                          variant: "outlined",
                                          modelValue: sel2.value,
                                          "onUpdate:modelValue": ($event) => sel2.value = $event
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_label, {
                                  class: "mb-2 font-weight-medium",
                                  for: "vlm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Volume")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_slider, {
                                  modelValue: volume.value,
                                  "onUpdate:modelValue": ($event) => volume.value = $event,
                                  color: "primary",
                                  id: "vlm"
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      size: "small",
                                      variant: "text",
                                      color: "primary"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Volume2Icon), {
                                          "stroke-width": "1.5",
                                          size: "20"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  append: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      size: "small",
                                      variant: "text",
                                      color: "primary"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(VolumeIcon), {
                                          "stroke-width": "1.5",
                                          size: "20"
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Slider"),
                              createVNode(_component_v_range_slider, {
                                modelValue: range.value,
                                "onUpdate:modelValue": ($event) => range.value = $event,
                                strict: "",
                                color: "primary"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        items: select1.value,
                                        "item-title": "select1",
                                        "item-value": "abbr",
                                        "return-object": "",
                                        "single-line": "",
                                        variant: "outlined",
                                        modelValue: sel1.value,
                                        "onUpdate:modelValue": ($event) => sel1.value = $event
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        items: select2.value,
                                        "item-title": "select2",
                                        "item-value": "abbr",
                                        "return-object": "",
                                        "single-line": "",
                                        variant: "outlined",
                                        modelValue: sel2.value,
                                        "onUpdate:modelValue": ($event) => sel2.value = $event
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_label, {
                                class: "mb-2 font-weight-medium",
                                for: "vlm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Volume")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_slider, {
                                modelValue: volume.value,
                                "onUpdate:modelValue": ($event) => volume.value = $event,
                                color: "primary",
                                id: "vlm"
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(_component_v_btn, {
                                    size: "small",
                                    variant: "text",
                                    color: "primary"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Volume2Icon), {
                                        "stroke-width": "1.5",
                                        size: "20"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                append: withCtx(() => [
                                  createVNode(_component_v_btn, {
                                    size: "small",
                                    variant: "text",
                                    color: "primary"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(VolumeIcon), {
                                        "stroke-width": "1.5",
                                        size: "20"
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_label, {
                    class: "mb-2 font-weight-medium mt-4",
                    for: "swtch"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Switch`);
                      } else {
                        return [
                          createTextVNode("Switch")
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
                          md: "3",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_switch, {
                                modelValue: model.value,
                                "onUpdate:modelValue": ($event) => model.value = $event,
                                "hide-details": "",
                                color: "primary",
                                label: "Enter text",
                                id: "swtch",
                                inset: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_switch, {
                                  modelValue: model.value,
                                  "onUpdate:modelValue": ($event) => model.value = $event,
                                  "hide-details": "",
                                  color: "primary",
                                  label: "Enter text",
                                  id: "swtch",
                                  inset: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "3",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_switch, {
                                "hide-details": "",
                                color: "primary",
                                label: "Enter text",
                                id: "swtch2",
                                inset: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_switch, {
                                  "hide-details": "",
                                  color: "primary",
                                  label: "Enter text",
                                  id: "swtch2",
                                  inset: ""
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "3",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_switch, {
                                "hide-details": "",
                                label: "Disabled",
                                disabled: "",
                                inset: "",
                                id: "swtch3"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_switch, {
                                  "hide-details": "",
                                  label: "Disabled",
                                  disabled: "",
                                  inset: "",
                                  id: "swtch3"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "3",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_switch, {
                                "hide-details": "",
                                label: "Disabled",
                                modelValue: model.value,
                                "onUpdate:modelValue": ($event) => model.value = $event,
                                color: "primary",
                                id: "swtch4",
                                disabled: "",
                                inset: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_switch, {
                                  "hide-details": "",
                                  label: "Disabled",
                                  modelValue: model.value,
                                  "onUpdate:modelValue": ($event) => model.value = $event,
                                  color: "primary",
                                  id: "swtch4",
                                  disabled: "",
                                  inset: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "3",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_switch, {
                                modelValue: model.value,
                                "onUpdate:modelValue": ($event) => model.value = $event,
                                "hide-details": "",
                                color: "primary",
                                label: "Enter text",
                                id: "swtch",
                                inset: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "3",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_switch, {
                                "hide-details": "",
                                color: "primary",
                                label: "Enter text",
                                id: "swtch2",
                                inset: ""
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
                              createVNode(_component_v_switch, {
                                "hide-details": "",
                                label: "Disabled",
                                disabled: "",
                                inset: "",
                                id: "swtch3"
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
                              createVNode(_component_v_switch, {
                                "hide-details": "",
                                label: "Disabled",
                                modelValue: model.value,
                                "onUpdate:modelValue": ($event) => model.value = $event,
                                color: "primary",
                                id: "swtch4",
                                disabled: "",
                                inset: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "mt-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "primary",
                                class: "mr-3",
                                rounded: "pill"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`add new`);
                                  } else {
                                    return [
                                      createTextVNode("add new")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "primary",
                                class: "mr-3",
                                disabled: "",
                                rounded: "pill"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`add new`);
                                  } else {
                                    return [
                                      createTextVNode("add new")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "primary",
                                variant: "outlined",
                                class: "mr-3",
                                rounded: "pill"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`add new`);
                                  } else {
                                    return [
                                      createTextVNode("add new")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  class: "mr-3",
                                  rounded: "pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("add new")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  class: "mr-3",
                                  disabled: "",
                                  rounded: "pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("add new")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  variant: "outlined",
                                  class: "mr-3",
                                  rounded: "pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("add new")
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
                          md: "6",
                          class: "d-flex justify-end"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "info",
                                class: "mr-3",
                                rounded: "pill"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`add new`);
                                  } else {
                                    return [
                                      createTextVNode("add new")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "success",
                                rounded: "pill"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`add new`);
                                  } else {
                                    return [
                                      createTextVNode("add new")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, {
                                  color: "info",
                                  class: "mr-3",
                                  rounded: "pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("add new")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  color: "success",
                                  rounded: "pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("add new")
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
                              createVNode(_component_v_btn, {
                                color: "primary",
                                class: "mr-3",
                                rounded: "pill"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("add new")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                color: "primary",
                                class: "mr-3",
                                disabled: "",
                                rounded: "pill"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("add new")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                color: "primary",
                                variant: "outlined",
                                class: "mr-3",
                                rounded: "pill"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("add new")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6",
                            class: "d-flex justify-end"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                color: "info",
                                class: "mr-3",
                                rounded: "pill"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("add new")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                color: "success",
                                rounded: "pill"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("add new")
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
                    createVNode(_component_v_label, {
                      class: "mb-2 font-weight-medium",
                      for: "gndr"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Lorem ipsum dolor sit amet")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_radio_group, {
                      inline: "",
                      modelValue: radios.value,
                      "onUpdate:modelValue": ($event) => radios.value = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_radio, {
                                  label: "Male",
                                  color: "primary",
                                  value: "Male",
                                  id: "gndr"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_radio, {
                                  label: "Female",
                                  color: "primary",
                                  value: "Female",
                                  id: "gndr2"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_radio, {
                                  label: "Disabled",
                                  color: "primary",
                                  value: "Disabled",
                                  id: "gndr3",
                                  disabled: ""
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_label, {
                      class: "mb-2 font-weight-medium",
                      for: "isdtype"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Industry Type")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_checkbox, {
                              modelValue: checked.value,
                              "onUpdate:modelValue": ($event) => checked.value = $event,
                              color: "primary",
                              label: "Enter text",
                              id: "isdtype"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_checkbox, {
                              label: "Enter text",
                              color: "primary",
                              id: "isdtype2"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_checkbox, {
                              label: "Disabled",
                              id: "isdtype3",
                              disabled: ""
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Slider"),
                            createVNode(_component_v_range_slider, {
                              modelValue: range.value,
                              "onUpdate:modelValue": ($event) => range.value = $event,
                              strict: "",
                              color: "primary"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_select, {
                                      items: select1.value,
                                      "item-title": "select1",
                                      "item-value": "abbr",
                                      "return-object": "",
                                      "single-line": "",
                                      variant: "outlined",
                                      modelValue: sel1.value,
                                      "onUpdate:modelValue": ($event) => sel1.value = $event
                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_select, {
                                      items: select2.value,
                                      "item-title": "select2",
                                      "item-value": "abbr",
                                      "return-object": "",
                                      "single-line": "",
                                      variant: "outlined",
                                      modelValue: sel2.value,
                                      "onUpdate:modelValue": ($event) => sel2.value = $event
                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_label, {
                              class: "mb-2 font-weight-medium",
                              for: "vlm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Volume")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_slider, {
                              modelValue: volume.value,
                              "onUpdate:modelValue": ($event) => volume.value = $event,
                              color: "primary",
                              id: "vlm"
                            }, {
                              prepend: withCtx(() => [
                                createVNode(_component_v_btn, {
                                  size: "small",
                                  variant: "text",
                                  color: "primary"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Volume2Icon), {
                                      "stroke-width": "1.5",
                                      size: "20"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              append: withCtx(() => [
                                createVNode(_component_v_btn, {
                                  size: "small",
                                  variant: "text",
                                  color: "primary"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(VolumeIcon), {
                                      "stroke-width": "1.5",
                                      size: "20"
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
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_label, {
                      class: "mb-2 font-weight-medium mt-4",
                      for: "swtch"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Switch")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "3",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_switch, {
                              modelValue: model.value,
                              "onUpdate:modelValue": ($event) => model.value = $event,
                              "hide-details": "",
                              color: "primary",
                              label: "Enter text",
                              id: "swtch",
                              inset: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "3",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_switch, {
                              "hide-details": "",
                              color: "primary",
                              label: "Enter text",
                              id: "swtch2",
                              inset: ""
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
                            createVNode(_component_v_switch, {
                              "hide-details": "",
                              label: "Disabled",
                              disabled: "",
                              inset: "",
                              id: "swtch3"
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
                            createVNode(_component_v_switch, {
                              "hide-details": "",
                              label: "Disabled",
                              modelValue: model.value,
                              "onUpdate:modelValue": ($event) => model.value = $event,
                              color: "primary",
                              id: "swtch4",
                              disabled: "",
                              inset: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "mt-6" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, {
                              color: "primary",
                              class: "mr-3",
                              rounded: "pill"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("add new")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              color: "primary",
                              class: "mr-3",
                              disabled: "",
                              rounded: "pill"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("add new")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              color: "primary",
                              variant: "outlined",
                              class: "mr-3",
                              rounded: "pill"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("add new")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6",
                          class: "d-flex justify-end"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, {
                              color: "info",
                              class: "mr-3",
                              rounded: "pill"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("add new")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              color: "success",
                              rounded: "pill"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("add new")
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
                sm: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "fcname"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Name")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    variant: "outlined",
                    id: "fcname",
                    placeholder: "Enter Text",
                    color: "primary"
                  }),
                  createVNode(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "fcseldrop"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Select Dropdown")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_select, {
                    items: items.value,
                    "item-title": "items",
                    "item-value": "abbr",
                    "return-object": "",
                    "single-line": "",
                    variant: "outlined",
                    modelValue: select.value,
                    "onUpdate:modelValue": ($event) => select.value = $event,
                    id: "fcseldrop"
                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "fccnm"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Company Name")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    variant: "outlined",
                    placeholder: "Enter Text",
                    id: "fccnm",
                    color: "primary"
                  }),
                  createVNode(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "fctime"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Time")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    variant: "outlined",
                    placeholder: "hh:mm",
                    id: "fctime",
                    type: "time",
                    color: "primary"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "fcindtype"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Industry Type")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    variant: "outlined",
                    placeholder: "Disabled Filled",
                    id: "fcindtype",
                    color: "primary"
                  }),
                  createVNode(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "fcdt"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Date")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    variant: "outlined",
                    type: "date",
                    id: "fcdt",
                    color: "primary"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "gndr"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Lorem ipsum dolor sit amet")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_radio_group, {
                    inline: "",
                    modelValue: radios.value,
                    "onUpdate:modelValue": ($event) => radios.value = $event
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_radio, {
                                label: "Male",
                                color: "primary",
                                value: "Male",
                                id: "gndr"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_radio, {
                                label: "Female",
                                color: "primary",
                                value: "Female",
                                id: "gndr2"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_radio, {
                                label: "Disabled",
                                color: "primary",
                                value: "Disabled",
                                id: "gndr3",
                                disabled: ""
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_label, {
                    class: "mb-2 font-weight-medium",
                    for: "isdtype"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Industry Type")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_checkbox, {
                            modelValue: checked.value,
                            "onUpdate:modelValue": ($event) => checked.value = $event,
                            color: "primary",
                            label: "Enter text",
                            id: "isdtype"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_checkbox, {
                            label: "Enter text",
                            color: "primary",
                            id: "isdtype2"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_checkbox, {
                            label: "Disabled",
                            id: "isdtype3",
                            disabled: ""
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mb-2 font-weight-medium text-subtitle-1" }, "Slider"),
                          createVNode(_component_v_range_slider, {
                            modelValue: range.value,
                            "onUpdate:modelValue": ($event) => range.value = $event,
                            strict: "",
                            color: "primary"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_select, {
                                    items: select1.value,
                                    "item-title": "select1",
                                    "item-value": "abbr",
                                    "return-object": "",
                                    "single-line": "",
                                    variant: "outlined",
                                    modelValue: sel1.value,
                                    "onUpdate:modelValue": ($event) => sel1.value = $event
                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_select, {
                                    items: select2.value,
                                    "item-title": "select2",
                                    "item-value": "abbr",
                                    "return-object": "",
                                    "single-line": "",
                                    variant: "outlined",
                                    modelValue: sel2.value,
                                    "onUpdate:modelValue": ($event) => sel2.value = $event
                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_label, {
                            class: "mb-2 font-weight-medium",
                            for: "vlm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Volume")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_slider, {
                            modelValue: volume.value,
                            "onUpdate:modelValue": ($event) => volume.value = $event,
                            color: "primary",
                            id: "vlm"
                          }, {
                            prepend: withCtx(() => [
                              createVNode(_component_v_btn, {
                                size: "small",
                                variant: "text",
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Volume2Icon), {
                                    "stroke-width": "1.5",
                                    size: "20"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            append: withCtx(() => [
                              createVNode(_component_v_btn, {
                                size: "small",
                                variant: "text",
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(VolumeIcon), {
                                    "stroke-width": "1.5",
                                    size: "20"
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
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_label, {
                    class: "mb-2 font-weight-medium mt-4",
                    for: "swtch"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Switch")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "3",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_switch, {
                            modelValue: model.value,
                            "onUpdate:modelValue": ($event) => model.value = $event,
                            "hide-details": "",
                            color: "primary",
                            label: "Enter text",
                            id: "swtch",
                            inset: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "3",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_switch, {
                            "hide-details": "",
                            color: "primary",
                            label: "Enter text",
                            id: "swtch2",
                            inset: ""
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
                          createVNode(_component_v_switch, {
                            "hide-details": "",
                            label: "Disabled",
                            disabled: "",
                            inset: "",
                            id: "swtch3"
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
                          createVNode(_component_v_switch, {
                            "hide-details": "",
                            label: "Disabled",
                            modelValue: model.value,
                            "onUpdate:modelValue": ($event) => model.value = $event,
                            color: "primary",
                            id: "swtch4",
                            disabled: "",
                            inset: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, { class: "mt-6" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
                            color: "primary",
                            class: "mr-3",
                            rounded: "pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("add new")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_btn, {
                            color: "primary",
                            class: "mr-3",
                            disabled: "",
                            rounded: "pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("add new")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_btn, {
                            color: "primary",
                            variant: "outlined",
                            class: "mr-3",
                            rounded: "pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("add new")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6",
                        class: "d-flex justify-end"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
                            color: "info",
                            class: "mr-3",
                            rounded: "pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("add new")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_btn, {
                            color: "success",
                            rounded: "pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("add new")
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-custom/CustomFrom.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Form-Custom",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Custom Form" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Custom form",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              class: "mb-12"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, { title: "Custom Form" }, {
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
                    createVNode(_sfc_main$3, { title: "Custom Form" }, {
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
                class: "mb-12"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3, { title: "Custom Form" }, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forms/Form-Custom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Form-Custom-WMTHAwDJ.mjs.map
