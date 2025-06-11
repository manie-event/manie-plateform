import { defineComponent, ref, resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./BaseBreadcrumb-DAIjkUfv.js";
import { _ as _sfc_main$2 } from "./UiParentCard-DhlYzLUl.js";
import { _ as _sfc_main$3 } from "./UiChildCard-Xt7dDOL6.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TimePicker",
  __ssrInlineRender: true,
  setup(__props) {
    const picker = ref(null);
    const start = ref("");
    const end = ref("");
    const page = ref({ title: "Time Picker" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "#"
      },
      {
        text: "Time Picker",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_time_picker = resolveComponent("v-time-picker");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "Time Picker" }, {
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
                                    _push6(ssrRenderComponent(_sfc_main$3, { title: "Default" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_time_picker, { class: "mx-auto" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_time_picker, { class: "mx-auto" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$3, { title: "Default" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_time_picker, { class: "mx-auto" })
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
                                    _push6(ssrRenderComponent(_sfc_main$3, { title: "Format" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_time_picker, {
                                            format: "24hr",
                                            class: "mx-auto"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_time_picker, {
                                              format: "24hr",
                                              class: "mx-auto"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$3, { title: "Format" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_time_picker, {
                                            format: "24hr",
                                            class: "mx-auto"
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
                                    _push6(ssrRenderComponent(_sfc_main$3, { title: "Scrollable" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_time_picker, {
                                            modelValue: picker.value,
                                            "onUpdate:modelValue": ($event) => picker.value = $event,
                                            scrollable: "",
                                            class: "mx-auto"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_time_picker, {
                                              modelValue: picker.value,
                                              "onUpdate:modelValue": ($event) => picker.value = $event,
                                              scrollable: "",
                                              class: "mx-auto"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$3, { title: "Scrollable" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_time_picker, {
                                            modelValue: picker.value,
                                            "onUpdate:modelValue": ($event) => picker.value = $event,
                                            scrollable: "",
                                            class: "mx-auto"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                    _push6(ssrRenderComponent(_sfc_main$3, { title: "Use seconds" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_time_picker, {
                                            "use-seconds": "",
                                            class: "mx-auto"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_time_picker, {
                                              "use-seconds": "",
                                              class: "mx-auto"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$3, { title: "Use seconds" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_time_picker, {
                                            "use-seconds": "",
                                            class: "mx-auto"
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
                                    _push6(ssrRenderComponent(_sfc_main$3, { title: "Colors" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_row, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "12",
                                                  lg: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_time_picker, {
                                                        color: "primary",
                                                        class: "mx-auto"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_time_picker, {
                                                          color: "primary",
                                                          class: "mx-auto"
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "12",
                                                  lg: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_time_picker, {
                                                        color: "error",
                                                        class: "mx-auto"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_time_picker, {
                                                          color: "error",
                                                          class: "mx-auto"
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    lg: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_time_picker, {
                                                        color: "primary",
                                                        class: "mx-auto"
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    lg: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_time_picker, {
                                                        color: "error",
                                                        class: "mx-auto"
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
                                            createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  lg: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_time_picker, {
                                                      color: "primary",
                                                      class: "mx-auto"
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  lg: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_time_picker, {
                                                      color: "error",
                                                      class: "mx-auto"
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
                                      createVNode(_sfc_main$3, { title: "Colors" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                lg: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_time_picker, {
                                                    color: "primary",
                                                    class: "mx-auto"
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                lg: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_time_picker, {
                                                    color: "error",
                                                    class: "mx-auto"
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
                                    _push6(ssrRenderComponent(_sfc_main$3, { title: "Range" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_row, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "12",
                                                  lg: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_time_picker, {
                                                        modelValue: start.value,
                                                        "onUpdate:modelValue": ($event) => start.value = $event,
                                                        max: end.value,
                                                        class: "mx-auto"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_time_picker, {
                                                          modelValue: start.value,
                                                          "onUpdate:modelValue": ($event) => start.value = $event,
                                                          max: end.value,
                                                          class: "mx-auto"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "max"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "12",
                                                  lg: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_time_picker, {
                                                        modelValue: end.value,
                                                        "onUpdate:modelValue": ($event) => end.value = $event,
                                                        min: start.value,
                                                        class: "mx-auto"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_time_picker, {
                                                          modelValue: end.value,
                                                          "onUpdate:modelValue": ($event) => end.value = $event,
                                                          min: start.value,
                                                          class: "mx-auto"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "min"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    lg: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_time_picker, {
                                                        modelValue: start.value,
                                                        "onUpdate:modelValue": ($event) => start.value = $event,
                                                        max: end.value,
                                                        class: "mx-auto"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "max"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    lg: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_time_picker, {
                                                        modelValue: end.value,
                                                        "onUpdate:modelValue": ($event) => end.value = $event,
                                                        min: start.value,
                                                        class: "mx-auto"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "min"])
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
                                            createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  lg: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_time_picker, {
                                                      modelValue: start.value,
                                                      "onUpdate:modelValue": ($event) => start.value = $event,
                                                      max: end.value,
                                                      class: "mx-auto"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "max"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  lg: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_time_picker, {
                                                      modelValue: end.value,
                                                      "onUpdate:modelValue": ($event) => end.value = $event,
                                                      min: start.value,
                                                      class: "mx-auto"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "min"])
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
                                      createVNode(_sfc_main$3, { title: "Range" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                lg: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_time_picker, {
                                                    modelValue: start.value,
                                                    "onUpdate:modelValue": ($event) => start.value = $event,
                                                    max: end.value,
                                                    class: "mx-auto"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "max"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                lg: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_time_picker, {
                                                    modelValue: end.value,
                                                    "onUpdate:modelValue": ($event) => end.value = $event,
                                                    min: start.value,
                                                    class: "mx-auto"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "min"])
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
                                    createVNode(_sfc_main$3, { title: "Default" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_time_picker, { class: "mx-auto" })
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
                                    createVNode(_sfc_main$3, { title: "Format" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_time_picker, {
                                          format: "24hr",
                                          class: "mx-auto"
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
                                    createVNode(_sfc_main$3, { title: "Scrollable" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_time_picker, {
                                          modelValue: picker.value,
                                          "onUpdate:modelValue": ($event) => picker.value = $event,
                                          scrollable: "",
                                          class: "mx-auto"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                    createVNode(_sfc_main$3, { title: "Use seconds" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_time_picker, {
                                          "use-seconds": "",
                                          class: "mx-auto"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$3, { title: "Colors" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              lg: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_time_picker, {
                                                  color: "primary",
                                                  class: "mx-auto"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              lg: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_time_picker, {
                                                  color: "error",
                                                  class: "mx-auto"
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
                                    createVNode(_sfc_main$3, { title: "Range" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              lg: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_time_picker, {
                                                  modelValue: start.value,
                                                  "onUpdate:modelValue": ($event) => start.value = $event,
                                                  max: end.value,
                                                  class: "mx-auto"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "max"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              lg: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_time_picker, {
                                                  modelValue: end.value,
                                                  "onUpdate:modelValue": ($event) => end.value = $event,
                                                  min: start.value,
                                                  class: "mx-auto"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "min"])
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
                                  createVNode(_sfc_main$3, { title: "Default" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_time_picker, { class: "mx-auto" })
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
                                  createVNode(_sfc_main$3, { title: "Format" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_time_picker, {
                                        format: "24hr",
                                        class: "mx-auto"
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
                                  createVNode(_sfc_main$3, { title: "Scrollable" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_time_picker, {
                                        modelValue: picker.value,
                                        "onUpdate:modelValue": ($event) => picker.value = $event,
                                        scrollable: "",
                                        class: "mx-auto"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                  createVNode(_sfc_main$3, { title: "Use seconds" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_time_picker, {
                                        "use-seconds": "",
                                        class: "mx-auto"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$3, { title: "Colors" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            lg: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_time_picker, {
                                                color: "primary",
                                                class: "mx-auto"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            lg: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_time_picker, {
                                                color: "error",
                                                class: "mx-auto"
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
                                  createVNode(_sfc_main$3, { title: "Range" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            lg: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_time_picker, {
                                                modelValue: start.value,
                                                "onUpdate:modelValue": ($event) => start.value = $event,
                                                max: end.value,
                                                class: "mx-auto"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "max"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            lg: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_time_picker, {
                                                modelValue: end.value,
                                                "onUpdate:modelValue": ($event) => end.value = $event,
                                                min: start.value,
                                                class: "mx-auto"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "min"])
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
                    createVNode(_sfc_main$2, { title: "Time Picker" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$3, { title: "Default" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_time_picker, { class: "mx-auto" })
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
                                createVNode(_sfc_main$3, { title: "Format" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_time_picker, {
                                      format: "24hr",
                                      class: "mx-auto"
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
                                createVNode(_sfc_main$3, { title: "Scrollable" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_time_picker, {
                                      modelValue: picker.value,
                                      "onUpdate:modelValue": ($event) => picker.value = $event,
                                      scrollable: "",
                                      class: "mx-auto"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                createVNode(_sfc_main$3, { title: "Use seconds" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_time_picker, {
                                      "use-seconds": "",
                                      class: "mx-auto"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$3, { title: "Colors" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          lg: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_time_picker, {
                                              color: "primary",
                                              class: "mx-auto"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          lg: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_time_picker, {
                                              color: "error",
                                              class: "mx-auto"
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
                                createVNode(_sfc_main$3, { title: "Range" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          lg: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_time_picker, {
                                              modelValue: start.value,
                                              "onUpdate:modelValue": ($event) => start.value = $event,
                                              max: end.value,
                                              class: "mx-auto"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "max"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          lg: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_time_picker, {
                                              modelValue: end.value,
                                              "onUpdate:modelValue": ($event) => end.value = $event,
                                              min: start.value,
                                              class: "mx-auto"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "min"])
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
                  createVNode(_sfc_main$2, { title: "Time Picker" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$3, { title: "Default" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_time_picker, { class: "mx-auto" })
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
                              createVNode(_sfc_main$3, { title: "Format" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_time_picker, {
                                    format: "24hr",
                                    class: "mx-auto"
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
                              createVNode(_sfc_main$3, { title: "Scrollable" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_time_picker, {
                                    modelValue: picker.value,
                                    "onUpdate:modelValue": ($event) => picker.value = $event,
                                    scrollable: "",
                                    class: "mx-auto"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                              createVNode(_sfc_main$3, { title: "Use seconds" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_time_picker, {
                                    "use-seconds": "",
                                    class: "mx-auto"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$3, { title: "Colors" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        lg: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_time_picker, {
                                            color: "primary",
                                            class: "mx-auto"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        lg: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_time_picker, {
                                            color: "error",
                                            class: "mx-auto"
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
                              createVNode(_sfc_main$3, { title: "Range" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        lg: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_time_picker, {
                                            modelValue: start.value,
                                            "onUpdate:modelValue": ($event) => start.value = $event,
                                            max: end.value,
                                            class: "mx-auto"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "max"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        lg: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_time_picker, {
                                            modelValue: end.value,
                                            "onUpdate:modelValue": ($event) => end.value = $event,
                                            min: start.value,
                                            class: "mx-auto"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "min"])
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forms/form-elements/TimePicker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=TimePicker-CYtd3eAX.js.map
