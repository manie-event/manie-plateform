import { defineComponent, ref, resolveComponent, withCtx, createVNode, computed, createTextVNode, mergeProps, toDisplayString, createBlock, createCommentVNode, openBlock, unref, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { ClockIcon, Book2Icon } from 'vue-tabler-icons';
import { u as useClassesStore } from './classes-BU0ZMmxI.mjs';
import { _ as _sfc_main$2 } from './BaseBreadcrumb-DAIjkUfv.mjs';
import './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ClassesData",
  __ssrInlineRender: true,
  props: { post: Object },
  setup(__props) {
    var _a, _b;
    const store = useClassesStore();
    const getPosts = computed(() => {
      return store.classinfo;
    });
    const props = __props;
    (_b = (_a = props.post) == null ? void 0 : _a.title) == null ? void 0 : _b.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
    const addclassdialog = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_row = resolveComponent("v-row");
      const _component_perfect_scrollbar = resolveComponent("perfect-scrollbar");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_label = resolveComponent("v-label");
      const _component_VTextField = resolveComponent("VTextField");
      const _component_v_file_input = resolveComponent("v-file-input");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_avatar = resolveComponent("v-avatar");
      _push(`<!--[--><div class="d-flex align-center"><h5 class="text-h5 font-weight-semibold">Todays Classes</h5>`);
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: addclassdialog.value,
        "onUpdate:modelValue": ($event) => addclassdialog.value = $event,
        "max-width": "500",
        class: "add-class"
      }, {
        activator: withCtx(({ props: props2 }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, mergeProps({ color: "primary" }, props2, {
              rounded: "pill",
              class: "ml-auto"
            }), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Add Classes `);
                } else {
                  return [
                    createTextVNode(" Add Classes ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, mergeProps({ color: "primary" }, props2, {
                rounded: "pill",
                class: "ml-auto"
              }), {
                default: withCtx(() => [
                  createTextVNode(" Add Classes ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, {
              elevation: "10",
              class: "overflow-hidden"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, { class: "px-4 pb-6 justify-space-between d-flex align-center pt-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-h5"${_scopeId3}>Add Classes</span>`);
                        _push4(ssrRenderComponent(_component_v_btn, {
                          onClick: ($event) => addclassdialog.value = false,
                          ripple: false,
                          density: "compact",
                          icon: "mdi-close"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", { class: "text-h5" }, "Add Classes"),
                          createVNode(_component_v_btn, {
                            onClick: ($event) => addclassdialog.value = false,
                            ripple: false,
                            density: "compact",
                            icon: "mdi-close"
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_text, { class: "px-4 pb-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_perfect_scrollbar, {
                                "suppressScrollX:": "",
                                true: "",
                                style: { "max-height": "500px", "overflow-x": "hidden" },
                                class: "pt-4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_row, { class: "px-4" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Class Name`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Class Name")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_VTextField, {
                                                  type: "text",
                                                  "hide-details": "",
                                                  density: "compact"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Class Name")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_VTextField, {
                                                    type: "text",
                                                    "hide-details": "",
                                                    density: "compact"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Class Profile`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Class Profile")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_file_input, {
                                                  accept: "image/*",
                                                  "hide-details": "",
                                                  variant: "outlined",
                                                  density: "compact"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Class Profile")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_file_input, {
                                                    accept: "image/*",
                                                    "hide-details": "",
                                                    variant: "outlined",
                                                    density: "compact"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Class Detail`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Class Detail")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_VTextField, {
                                                  type: "text",
                                                  "hide-details": "",
                                                  density: "compact"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Class Detail")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_VTextField, {
                                                    type: "text",
                                                    "hide-details": "",
                                                    density: "compact"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Class Lesson`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Class Lesson")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_VTextField, {
                                                  type: "text",
                                                  "hide-details": "",
                                                  density: "compact"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Class Lesson")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_VTextField, {
                                                    type: "text",
                                                    "hide-details": "",
                                                    density: "compact"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Time Duration`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Time Duration")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_VTextField, {
                                                  type: "text",
                                                  "hide-details": "",
                                                  density: "compact"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Time Duration")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_VTextField, {
                                                    type: "text",
                                                    "hide-details": "",
                                                    density: "compact"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Teacher Name`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Teacher Name")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_VTextField, {
                                                  type: "text",
                                                  "hide-details": "",
                                                  density: "compact"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Teacher Name")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_VTextField, {
                                                    type: "text",
                                                    "hide-details": "",
                                                    density: "compact"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Teacher Profile`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Teacher Profile")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_file_input, {
                                                  accept: "image/*",
                                                  "hide-details": "",
                                                  variant: "outlined",
                                                  density: "compact"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Teacher Profile")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_file_input, {
                                                    accept: "image/*",
                                                    "hide-details": "",
                                                    variant: "outlined",
                                                    density: "compact"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Class Name")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_VTextField, {
                                                  type: "text",
                                                  "hide-details": "",
                                                  density: "compact"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Class Profile")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_file_input, {
                                                  accept: "image/*",
                                                  "hide-details": "",
                                                  variant: "outlined",
                                                  density: "compact"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Class Detail")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_VTextField, {
                                                  type: "text",
                                                  "hide-details": "",
                                                  density: "compact"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Class Lesson")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_VTextField, {
                                                  type: "text",
                                                  "hide-details": "",
                                                  density: "compact"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Time Duration")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_VTextField, {
                                                  type: "text",
                                                  "hide-details": "",
                                                  density: "compact"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Teacher Name")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_VTextField, {
                                                  type: "text",
                                                  "hide-details": "",
                                                  density: "compact"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Teacher Profile")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_file_input, {
                                                  accept: "image/*",
                                                  "hide-details": "",
                                                  variant: "outlined",
                                                  density: "compact"
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
                                      createVNode(_component_v_row, { class: "px-4" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Class Name")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_VTextField, {
                                                type: "text",
                                                "hide-details": "",
                                                density: "compact"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Class Profile")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_file_input, {
                                                accept: "image/*",
                                                "hide-details": "",
                                                variant: "outlined",
                                                density: "compact"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Class Detail")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_VTextField, {
                                                type: "text",
                                                "hide-details": "",
                                                density: "compact"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Class Lesson")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_VTextField, {
                                                type: "text",
                                                "hide-details": "",
                                                density: "compact"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Time Duration")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_VTextField, {
                                                type: "text",
                                                "hide-details": "",
                                                density: "compact"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Teacher Name")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_VTextField, {
                                                type: "text",
                                                "hide-details": "",
                                                density: "compact"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Teacher Profile")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_file_input, {
                                                accept: "image/*",
                                                "hide-details": "",
                                                variant: "outlined",
                                                density: "compact"
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
                                    _push6(`<div class="mt-4 d-flex justify-end"${_scopeId5}><div class="ml-auto"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      color: "error",
                                      rounded: "pill",
                                      class: "mr-3",
                                      onClick: ($event) => addclassdialog.value = false
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
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      color: "primary",
                                      rounded: "pill",
                                      class: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Add Class`);
                                        } else {
                                          return [
                                            createTextVNode("Add Class")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "mt-4 d-flex justify-end" }, [
                                        createVNode("div", { class: "ml-auto" }, [
                                          createVNode(_component_v_btn, {
                                            color: "error",
                                            rounded: "pill",
                                            class: "mr-3",
                                            onClick: ($event) => addclassdialog.value = false
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Cancel")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode(_component_v_btn, {
                                            color: "primary",
                                            rounded: "pill",
                                            class: ""
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Add Class")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_perfect_scrollbar, {
                                  "suppressScrollX:": "",
                                  true: "",
                                  style: { "max-height": "500px", "overflow-x": "hidden" },
                                  class: "pt-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, { class: "px-4" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Class Name")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_VTextField, {
                                              type: "text",
                                              "hide-details": "",
                                              density: "compact"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Class Profile")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_file_input, {
                                              accept: "image/*",
                                              "hide-details": "",
                                              variant: "outlined",
                                              density: "compact"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Class Detail")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_VTextField, {
                                              type: "text",
                                              "hide-details": "",
                                              density: "compact"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Class Lesson")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_VTextField, {
                                              type: "text",
                                              "hide-details": "",
                                              density: "compact"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Time Duration")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_VTextField, {
                                              type: "text",
                                              "hide-details": "",
                                              density: "compact"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Teacher Name")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_VTextField, {
                                              type: "text",
                                              "hide-details": "",
                                              density: "compact"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Teacher Profile")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_file_input, {
                                              accept: "image/*",
                                              "hide-details": "",
                                              variant: "outlined",
                                              density: "compact"
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
                                    createVNode("div", { class: "mt-4 d-flex justify-end" }, [
                                      createVNode("div", { class: "ml-auto" }, [
                                        createVNode(_component_v_btn, {
                                          color: "error",
                                          rounded: "pill",
                                          class: "mr-3",
                                          onClick: ($event) => addclassdialog.value = false
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Cancel")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(_component_v_btn, {
                                          color: "primary",
                                          rounded: "pill",
                                          class: ""
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Add Class")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ])
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
                              createVNode(_component_perfect_scrollbar, {
                                "suppressScrollX:": "",
                                true: "",
                                style: { "max-height": "500px", "overflow-x": "hidden" },
                                class: "pt-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, { class: "px-4" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Class Name")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_VTextField, {
                                            type: "text",
                                            "hide-details": "",
                                            density: "compact"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Class Profile")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_file_input, {
                                            accept: "image/*",
                                            "hide-details": "",
                                            variant: "outlined",
                                            density: "compact"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Class Detail")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_VTextField, {
                                            type: "text",
                                            "hide-details": "",
                                            density: "compact"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Class Lesson")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_VTextField, {
                                            type: "text",
                                            "hide-details": "",
                                            density: "compact"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Time Duration")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_VTextField, {
                                            type: "text",
                                            "hide-details": "",
                                            density: "compact"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Teacher Name")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_VTextField, {
                                            type: "text",
                                            "hide-details": "",
                                            density: "compact"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Teacher Profile")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_file_input, {
                                            accept: "image/*",
                                            "hide-details": "",
                                            variant: "outlined",
                                            density: "compact"
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
                                  createVNode("div", { class: "mt-4 d-flex justify-end" }, [
                                    createVNode("div", { class: "ml-auto" }, [
                                      createVNode(_component_v_btn, {
                                        color: "error",
                                        rounded: "pill",
                                        class: "mr-3",
                                        onClick: ($event) => addclassdialog.value = false
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Cancel")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_v_btn, {
                                        color: "primary",
                                        rounded: "pill",
                                        class: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Add Class")
                                        ]),
                                        _: 1
                                      })
                                    ])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card_title, { class: "px-4 pb-6 justify-space-between d-flex align-center pt-4" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-h5" }, "Add Classes"),
                        createVNode(_component_v_btn, {
                          onClick: ($event) => addclassdialog.value = false,
                          ripple: false,
                          density: "compact",
                          icon: "mdi-close"
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_text, { class: "px-4 pb-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_perfect_scrollbar, {
                              "suppressScrollX:": "",
                              true: "",
                              style: { "max-height": "500px", "overflow-x": "hidden" },
                              class: "pt-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_row, { class: "px-4" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Class Name")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_VTextField, {
                                          type: "text",
                                          "hide-details": "",
                                          density: "compact"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Class Profile")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_file_input, {
                                          accept: "image/*",
                                          "hide-details": "",
                                          variant: "outlined",
                                          density: "compact"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Class Detail")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_VTextField, {
                                          type: "text",
                                          "hide-details": "",
                                          density: "compact"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Class Lesson")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_VTextField, {
                                          type: "text",
                                          "hide-details": "",
                                          density: "compact"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Time Duration")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_VTextField, {
                                          type: "text",
                                          "hide-details": "",
                                          density: "compact"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Teacher Name")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_VTextField, {
                                          type: "text",
                                          "hide-details": "",
                                          density: "compact"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Teacher Profile")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_file_input, {
                                          accept: "image/*",
                                          "hide-details": "",
                                          variant: "outlined",
                                          density: "compact"
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
                                createVNode("div", { class: "mt-4 d-flex justify-end" }, [
                                  createVNode("div", { class: "ml-auto" }, [
                                    createVNode(_component_v_btn, {
                                      color: "error",
                                      rounded: "pill",
                                      class: "mr-3",
                                      onClick: ($event) => addclassdialog.value = false
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Cancel")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_v_btn, {
                                      color: "primary",
                                      rounded: "pill",
                                      class: ""
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Add Class")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
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
              createVNode(_component_v_card, {
                elevation: "10",
                class: "overflow-hidden"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, { class: "px-4 pb-6 justify-space-between d-flex align-center pt-4" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-h5" }, "Add Classes"),
                      createVNode(_component_v_btn, {
                        onClick: ($event) => addclassdialog.value = false,
                        ripple: false,
                        density: "compact",
                        icon: "mdi-close"
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_text, { class: "px-4 pb-4" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_perfect_scrollbar, {
                            "suppressScrollX:": "",
                            true: "",
                            style: { "max-height": "500px", "overflow-x": "hidden" },
                            class: "pt-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { class: "px-4" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Class Name")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_VTextField, {
                                        type: "text",
                                        "hide-details": "",
                                        density: "compact"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Class Profile")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_file_input, {
                                        accept: "image/*",
                                        "hide-details": "",
                                        variant: "outlined",
                                        density: "compact"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Class Detail")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_VTextField, {
                                        type: "text",
                                        "hide-details": "",
                                        density: "compact"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Class Lesson")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_VTextField, {
                                        type: "text",
                                        "hide-details": "",
                                        density: "compact"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Time Duration")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_VTextField, {
                                        type: "text",
                                        "hide-details": "",
                                        density: "compact"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Teacher Name")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_VTextField, {
                                        type: "text",
                                        "hide-details": "",
                                        density: "compact"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Teacher Profile")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_file_input, {
                                        accept: "image/*",
                                        "hide-details": "",
                                        variant: "outlined",
                                        density: "compact"
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
                              createVNode("div", { class: "mt-4 d-flex justify-end" }, [
                                createVNode("div", { class: "ml-auto" }, [
                                  createVNode(_component_v_btn, {
                                    color: "error",
                                    rounded: "pill",
                                    class: "mr-3",
                                    onClick: ($event) => addclassdialog.value = false
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cancel")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_v_btn, {
                                    color: "primary",
                                    rounded: "pill",
                                    class: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Add Class")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
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
      _push(`</div>`);
      _push(ssrRenderComponent(_component_v_row, { class: "mt-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(getPosts.value, (post, i) => {
              _push2(ssrRenderComponent(_component_v_col, {
                cols: "12",
                md: "4",
                sm: "6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_img, {
                            src: post == null ? void 0 : post.img,
                            height: "240px",
                            alt: "post",
                            cover: "",
                            class: "align-start text-left"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (post == null ? void 0 : post.chip) {
                                  _push5(`<div class="pl-2 pt-3"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_v_chip, {
                                    class: "text-subtitle-1 font-weight-medium bg-" + (post == null ? void 0 : post.chipbg),
                                    size: "small"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(post == null ? void 0 : post.chip)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(post == null ? void 0 : post.chip), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  (post == null ? void 0 : post.chip) ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "pl-2 pt-3"
                                  }, [
                                    createVNode(_component_v_chip, {
                                      class: "text-subtitle-1 font-weight-medium bg-" + (post == null ? void 0 : post.chipbg),
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(post == null ? void 0 : post.chip), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])
                                  ])) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_card_text, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-subtitle-1 text-grey100 mb-2"${_scopeId4}>${ssrInterpolate(post == null ? void 0 : post.caption)}</div><h5 class="text-h5 mb-6"${_scopeId4}>${ssrInterpolate(post == null ? void 0 : post.title)}</h5><div class="d-flex align-center mb-5"${_scopeId4}><div class="d-flex align-center text-subtitle-1 text-grey100"${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(ClockIcon), {
                                  "stroke-width": "1.5",
                                  size: "15",
                                  class: "text-grey100 mr-2"
                                }, null, _parent5, _scopeId4));
                                _push5(`${ssrInterpolate(post == null ? void 0 : post.lesson)}</div><div class="mx-5 text-grey100"${_scopeId4}>/</div><div class="d-flex align-center text-subtitle-1 text-grey100"${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(Book2Icon), {
                                  "stroke-width": "1.5",
                                  size: "15",
                                  class: "text-grey100 mr-2"
                                }, null, _parent5, _scopeId4));
                                _push5(`${ssrInterpolate(post == null ? void 0 : post.hour)}</div></div><div class="d-flex align-center"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_v_avatar, { size: "46" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<img${ssrRenderAttr("src", post == null ? void 0 : post.profileimg)} height="46" width="46"${_scopeId5}>`);
                                    } else {
                                      return [
                                        createVNode("img", {
                                          src: post == null ? void 0 : post.profileimg,
                                          height: "46",
                                          width: "46"
                                        }, null, 8, ["src"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<h5 class="text-subtitle-1 font-weight-medium ml-3"${_scopeId4}>${ssrInterpolate(post == null ? void 0 : post.name)}</h5></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-subtitle-1 text-grey100 mb-2" }, toDisplayString(post == null ? void 0 : post.caption), 1),
                                  createVNode("h5", { class: "text-h5 mb-6" }, toDisplayString(post == null ? void 0 : post.title), 1),
                                  createVNode("div", { class: "d-flex align-center mb-5" }, [
                                    createVNode("div", { class: "d-flex align-center text-subtitle-1 text-grey100" }, [
                                      createVNode(unref(ClockIcon), {
                                        "stroke-width": "1.5",
                                        size: "15",
                                        class: "text-grey100 mr-2"
                                      }),
                                      createTextVNode(toDisplayString(post == null ? void 0 : post.lesson), 1)
                                    ]),
                                    createVNode("div", { class: "mx-5 text-grey100" }, "/"),
                                    createVNode("div", { class: "d-flex align-center text-subtitle-1 text-grey100" }, [
                                      createVNode(unref(Book2Icon), {
                                        "stroke-width": "1.5",
                                        size: "15",
                                        class: "text-grey100 mr-2"
                                      }),
                                      createTextVNode(toDisplayString(post == null ? void 0 : post.hour), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode(_component_v_avatar, { size: "46" }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: post == null ? void 0 : post.profileimg,
                                          height: "46",
                                          width: "46"
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("h5", { class: "text-subtitle-1 font-weight-medium ml-3" }, toDisplayString(post == null ? void 0 : post.name), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_img, {
                              src: post == null ? void 0 : post.img,
                              height: "240px",
                              alt: "post",
                              cover: "",
                              class: "align-start text-left"
                            }, {
                              default: withCtx(() => [
                                (post == null ? void 0 : post.chip) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "pl-2 pt-3"
                                }, [
                                  createVNode(_component_v_chip, {
                                    class: "text-subtitle-1 font-weight-medium bg-" + (post == null ? void 0 : post.chipbg),
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(post == null ? void 0 : post.chip), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"])
                                ])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1032, ["src"]),
                            createVNode(_component_v_card_text, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-subtitle-1 text-grey100 mb-2" }, toDisplayString(post == null ? void 0 : post.caption), 1),
                                createVNode("h5", { class: "text-h5 mb-6" }, toDisplayString(post == null ? void 0 : post.title), 1),
                                createVNode("div", { class: "d-flex align-center mb-5" }, [
                                  createVNode("div", { class: "d-flex align-center text-subtitle-1 text-grey100" }, [
                                    createVNode(unref(ClockIcon), {
                                      "stroke-width": "1.5",
                                      size: "15",
                                      class: "text-grey100 mr-2"
                                    }),
                                    createTextVNode(toDisplayString(post == null ? void 0 : post.lesson), 1)
                                  ]),
                                  createVNode("div", { class: "mx-5 text-grey100" }, "/"),
                                  createVNode("div", { class: "d-flex align-center text-subtitle-1 text-grey100" }, [
                                    createVNode(unref(Book2Icon), {
                                      "stroke-width": "1.5",
                                      size: "15",
                                      class: "text-grey100 mr-2"
                                    }),
                                    createTextVNode(toDisplayString(post == null ? void 0 : post.hour), 1)
                                  ])
                                ]),
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode(_component_v_avatar, { size: "46" }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: post == null ? void 0 : post.profileimg,
                                        height: "46",
                                        width: "46"
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("h5", { class: "text-subtitle-1 font-weight-medium ml-3" }, toDisplayString(post == null ? void 0 : post.name), 1)
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_card, { elevation: "10" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_img, {
                            src: post == null ? void 0 : post.img,
                            height: "240px",
                            alt: "post",
                            cover: "",
                            class: "align-start text-left"
                          }, {
                            default: withCtx(() => [
                              (post == null ? void 0 : post.chip) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "pl-2 pt-3"
                              }, [
                                createVNode(_component_v_chip, {
                                  class: "text-subtitle-1 font-weight-medium bg-" + (post == null ? void 0 : post.chipbg),
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(post == null ? void 0 : post.chip), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class"])
                              ])) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1032, ["src"]),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-subtitle-1 text-grey100 mb-2" }, toDisplayString(post == null ? void 0 : post.caption), 1),
                              createVNode("h5", { class: "text-h5 mb-6" }, toDisplayString(post == null ? void 0 : post.title), 1),
                              createVNode("div", { class: "d-flex align-center mb-5" }, [
                                createVNode("div", { class: "d-flex align-center text-subtitle-1 text-grey100" }, [
                                  createVNode(unref(ClockIcon), {
                                    "stroke-width": "1.5",
                                    size: "15",
                                    class: "text-grey100 mr-2"
                                  }),
                                  createTextVNode(toDisplayString(post == null ? void 0 : post.lesson), 1)
                                ]),
                                createVNode("div", { class: "mx-5 text-grey100" }, "/"),
                                createVNode("div", { class: "d-flex align-center text-subtitle-1 text-grey100" }, [
                                  createVNode(unref(Book2Icon), {
                                    "stroke-width": "1.5",
                                    size: "15",
                                    class: "text-grey100 mr-2"
                                  }),
                                  createTextVNode(toDisplayString(post == null ? void 0 : post.hour), 1)
                                ])
                              ]),
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode(_component_v_avatar, { size: "46" }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: post == null ? void 0 : post.profileimg,
                                      height: "46",
                                      width: "46"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("h5", { class: "text-subtitle-1 font-weight-medium ml-3" }, toDisplayString(post == null ? void 0 : post.name), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(getPosts.value, (post, i) => {
                return openBlock(), createBlock(_component_v_col, {
                  key: post == null ? void 0 : post.id,
                  cols: "12",
                  md: "4",
                  sm: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card, { elevation: "10" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_img, {
                          src: post == null ? void 0 : post.img,
                          height: "240px",
                          alt: "post",
                          cover: "",
                          class: "align-start text-left"
                        }, {
                          default: withCtx(() => [
                            (post == null ? void 0 : post.chip) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "pl-2 pt-3"
                            }, [
                              createVNode(_component_v_chip, {
                                class: "text-subtitle-1 font-weight-medium bg-" + (post == null ? void 0 : post.chipbg),
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(post == null ? void 0 : post.chip), 1)
                                ]),
                                _: 2
                              }, 1032, ["class"])
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1032, ["src"]),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-subtitle-1 text-grey100 mb-2" }, toDisplayString(post == null ? void 0 : post.caption), 1),
                            createVNode("h5", { class: "text-h5 mb-6" }, toDisplayString(post == null ? void 0 : post.title), 1),
                            createVNode("div", { class: "d-flex align-center mb-5" }, [
                              createVNode("div", { class: "d-flex align-center text-subtitle-1 text-grey100" }, [
                                createVNode(unref(ClockIcon), {
                                  "stroke-width": "1.5",
                                  size: "15",
                                  class: "text-grey100 mr-2"
                                }),
                                createTextVNode(toDisplayString(post == null ? void 0 : post.lesson), 1)
                              ]),
                              createVNode("div", { class: "mx-5 text-grey100" }, "/"),
                              createVNode("div", { class: "d-flex align-center text-subtitle-1 text-grey100" }, [
                                createVNode(unref(Book2Icon), {
                                  "stroke-width": "1.5",
                                  size: "15",
                                  class: "text-grey100 mr-2"
                                }),
                                createTextVNode(toDisplayString(post == null ? void 0 : post.hour), 1)
                              ])
                            ]),
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(_component_v_avatar, { size: "46" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: post == null ? void 0 : post.profileimg,
                                    height: "46",
                                    width: "46"
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("h5", { class: "text-subtitle-1 font-weight-medium ml-3" }, toDisplayString(post == null ? void 0 : post.name), 1)
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/school-pages/classes/ClassesData.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Classes" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Classes",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/school-pages/classes/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cx_WyH8W.mjs.map
