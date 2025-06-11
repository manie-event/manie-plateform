import { defineComponent, ref, resolveComponent, withCtx, createVNode, mergeProps, createTextVNode, unref, createBlock, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { R as user2 } from './server.mjs';
import { T as TeacherSkillData } from './detail_tables-DaSOttKS.mjs';
import { _ as _sfc_main$3 } from './BaseBreadcrumb-DAIjkUfv.mjs';
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
import 'vue-tabler-icons';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TeacherProfile",
  __ssrInlineRender: true,
  setup(__props) {
    const editteacherprofile = ref(false);
    const name = ref("John Mednath");
    const gender = ref("female");
    const teacherclass = ref("11 (Science)");
    const teachersection = ref("B");
    const teacherdob = ref("03/08/1993");
    const idno = ref("498376");
    const phoneno = ref("+ 123 9988568");
    const email = ref("johnmednath@gmail.com");
    const checkbox = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_CheckIcon = resolveComponent("CheckIcon");
      const _component_CpuIcon = resolveComponent("CpuIcon");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_EditIcon = resolveComponent("EditIcon");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_perfect_scrollbar = resolveComponent("perfect-scrollbar");
      const _component_v_label = resolveComponent("v-label");
      const _component_VTextField = resolveComponent("VTextField");
      const _component_v_radio_group = resolveComponent("v-radio-group");
      const _component_v_radio = resolveComponent("v-radio");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      const _component_TrashIcon = resolveComponent("TrashIcon");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex justify-center text-center"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_avatar, {
                    class: "rounded-xl",
                    size: "110"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", user2)} height="110" width="110"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: user2,
                            height: "110",
                            width: "110"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<h5 class="text-h5 mt-3 mb-1"${_scopeId2}>John Mednath</h5>`);
                  _push3(ssrRenderComponent(_component_v_chip, {
                    size: "small",
                    color: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Teacher `);
                      } else {
                        return [
                          createTextVNode(" Teacher ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="d-flex justify-space-between mt-12"${_scopeId2}><div class="d-flex align-items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_avatar, {
                    class: "bg-lightsuccess",
                    size: "50"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_CheckIcon, {
                          class: "text-success",
                          "stroke-width": "1.5",
                          size: "24",
                          col: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_CheckIcon, {
                            class: "text-success",
                            "stroke-width": "1.5",
                            size: "24",
                            col: ""
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="ms-3"${_scopeId2}><p class="text-h5 mb-1"${_scopeId2}>1.23k</p><p class="text-subtitle-1 text-grey100"${_scopeId2}>Tasks Done</p></div></div><div class="d-flex align-items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_avatar, {
                    class: "bg-lightsuccess",
                    size: "50"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_CpuIcon, {
                          class: "text-success",
                          "stroke-width": "1.5",
                          size: "24",
                          col: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_CpuIcon, {
                            class: "text-success",
                            "stroke-width": "1.5",
                            size: "24",
                            col: ""
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="ms-3"${_scopeId2}><p class="text-h5 mb-1"${_scopeId2}>568</p><p class="text-subtitle-1 text-grey100"${_scopeId2}>Projects Done</p></div></div></div><div class="mt-12"${_scopeId2}><div class="pb-1 mb-2 border-bottom pb-3"${_scopeId2}><h6 class="text-subtitle-1 font-weight-semibold"${_scopeId2}>Details</h6></div><div${_scopeId2}><div class="py-3"${_scopeId2}><p class="text-subtitle-1 font-weight-semibold mb-0"${_scopeId2}> Name: <span class="text-subtitle-1 text-grey100 ms-1"${_scopeId2}>John Mednath</span></p></div><div class="py-3"${_scopeId2}><p class="text-subtitle-1 font-weight-semibold mb-0"${_scopeId2}> Gender: <span class="text-subtitle-1 text-grey100 ms-1"${_scopeId2}>Female</span></p></div><div class="py-3"${_scopeId2}><p class="text-subtitle-1 font-weight-semibold mb-0"${_scopeId2}> Class: <span class="text-subtitle-1 text-grey100 ms-1"${_scopeId2}>11 (Science)</span></p></div><div class="py-3"${_scopeId2}><p class="text-subtitle-1 font-weight-semibold mb-0"${_scopeId2}> Section: <span class="text-subtitle-1 text-grey100 ms-1"${_scopeId2}>B</span></p></div><div class="py-3"${_scopeId2}><p class="text-subtitle-1 font-weight-semibold mb-0"${_scopeId2}> Date Of Birth: <span class="text-subtitle-1 text-grey100 ms-1"${_scopeId2}>03/08/1993</span></p></div><div class="py-3"${_scopeId2}><p class="text-subtitle-1 font-weight-semibold mb-0"${_scopeId2}> Id No. : <span class="text-subtitle-1 text-grey100 ms-1"${_scopeId2}>498376</span></p></div><div class="py-3"${_scopeId2}><p class="text-subtitle-1 font-weight-semibold mb-0"${_scopeId2}> Phone: <span class="text-subtitle-1 text-grey100 ms-1"${_scopeId2}>+ 123 9988568</span></p></div><div class="py-3"${_scopeId2}><p class="text-subtitle-1 font-weight-semibold mb-0"${_scopeId2}> Email: <span class="text-subtitle-1 text-grey100 ms-1"${_scopeId2}>johnmednath@gmail.com</span></p></div></div></div><div class="mt-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_dialog, {
                                modelValue: editteacherprofile.value,
                                "onUpdate:modelValue": ($event) => editteacherprofile.value = $event,
                                "max-width": "500",
                                class: "add-class"
                              }, {
                                activator: withCtx(({ props }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_btn, mergeProps({
                                      color: "primary",
                                      rounded: "pill",
                                      block: ""
                                    }, props, {
                                      size: "large",
                                      class: "ml-auto"
                                    }), {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_EditIcon, {
                                            "stroke-width": "2",
                                            size: "20",
                                            class: "mr-2"
                                          }, null, _parent7, _scopeId6));
                                          _push7(` Edit `);
                                        } else {
                                          return [
                                            createVNode(_component_EditIcon, {
                                              "stroke-width": "2",
                                              size: "20",
                                              class: "mr-2"
                                            }),
                                            createTextVNode(" Edit ")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_btn, mergeProps({
                                        color: "primary",
                                        rounded: "pill",
                                        block: ""
                                      }, props, {
                                        size: "large",
                                        class: "ml-auto"
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(_component_EditIcon, {
                                            "stroke-width": "2",
                                            size: "20",
                                            class: "mr-2"
                                          }),
                                          createTextVNode(" Edit ")
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_card, {
                                      elevation: "10",
                                      class: "overflow-hidden"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_card_title, { class: "px-4 pb-6 justify-space-between d-flex align-center pt-4" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<span class="text-h5"${_scopeId7}>Edit Teacher Details</span>`);
                                                _push8(ssrRenderComponent(_component_v_btn, {
                                                  onClick: ($event) => editteacherprofile.value = false,
                                                  ripple: false,
                                                  density: "compact",
                                                  icon: "mdi-close"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode("span", { class: "text-h5" }, "Edit Teacher Details"),
                                                  createVNode(_component_v_btn, {
                                                    onClick: ($event) => editteacherprofile.value = false,
                                                    ripple: false,
                                                    density: "compact",
                                                    icon: "mdi-close"
                                                  }, null, 8, ["onClick"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_card_text, { class: "px-4 pb-4" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_row, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_perfect_scrollbar, {
                                                        "suppressScrollX:": "",
                                                        true: "",
                                                        style: { "max-height": "500px", "overflow-x": "hidden" },
                                                        class: "pt-4"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_row, { class: "px-4" }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                          default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                            if (_push13) {
                                                                              _push13(`Name`);
                                                                            } else {
                                                                              return [
                                                                                createTextVNode("Name")
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 1
                                                                        }, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_VTextField, {
                                                                          type: "text",
                                                                          "hide-details": "",
                                                                          density: "compact",
                                                                          modelValue: name.value,
                                                                          "onUpdate:modelValue": ($event) => name.value = $event
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode("Name")
                                                                            ]),
                                                                            _: 1
                                                                          }),
                                                                          createVNode(_component_VTextField, {
                                                                            type: "text",
                                                                            "hide-details": "",
                                                                            density: "compact",
                                                                            modelValue: name.value,
                                                                            "onUpdate:modelValue": ($event) => name.value = $event
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                          default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                            if (_push13) {
                                                                              _push13(`Gender`);
                                                                            } else {
                                                                              return [
                                                                                createTextVNode("Gender")
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 1
                                                                        }, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_v_radio_group, {
                                                                          "hide-details": "",
                                                                          modelValue: gender.value,
                                                                          "onUpdate:modelValue": ($event) => gender.value = $event,
                                                                          column: ""
                                                                        }, {
                                                                          default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                            if (_push13) {
                                                                              _push13(ssrRenderComponent(_component_v_radio, {
                                                                                label: "Male",
                                                                                color: "primary",
                                                                                density: "compact",
                                                                                value: "male"
                                                                              }, null, _parent13, _scopeId12));
                                                                              _push13(ssrRenderComponent(_component_v_radio, {
                                                                                label: "Female",
                                                                                color: "primary",
                                                                                density: "compact",
                                                                                value: "female"
                                                                              }, null, _parent13, _scopeId12));
                                                                            } else {
                                                                              return [
                                                                                createVNode(_component_v_radio, {
                                                                                  label: "Male",
                                                                                  color: "primary",
                                                                                  density: "compact",
                                                                                  value: "male"
                                                                                }),
                                                                                createVNode(_component_v_radio, {
                                                                                  label: "Female",
                                                                                  color: "primary",
                                                                                  density: "compact",
                                                                                  value: "female"
                                                                                })
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 1
                                                                        }, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode("Gender")
                                                                            ]),
                                                                            _: 1
                                                                          }),
                                                                          createVNode(_component_v_radio_group, {
                                                                            "hide-details": "",
                                                                            modelValue: gender.value,
                                                                            "onUpdate:modelValue": ($event) => gender.value = $event,
                                                                            column: ""
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(_component_v_radio, {
                                                                                label: "Male",
                                                                                color: "primary",
                                                                                density: "compact",
                                                                                value: "male"
                                                                              }),
                                                                              createVNode(_component_v_radio, {
                                                                                label: "Female",
                                                                                color: "primary",
                                                                                density: "compact",
                                                                                value: "female"
                                                                              })
                                                                            ]),
                                                                            _: 1
                                                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                          default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                            if (_push13) {
                                                                              _push13(`Class`);
                                                                            } else {
                                                                              return [
                                                                                createTextVNode("Class")
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 1
                                                                        }, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_VTextField, {
                                                                          type: "text",
                                                                          "hide-details": "",
                                                                          density: "compact",
                                                                          modelValue: teacherclass.value,
                                                                          "onUpdate:modelValue": ($event) => teacherclass.value = $event
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode("Class")
                                                                            ]),
                                                                            _: 1
                                                                          }),
                                                                          createVNode(_component_VTextField, {
                                                                            type: "text",
                                                                            "hide-details": "",
                                                                            density: "compact",
                                                                            modelValue: teacherclass.value,
                                                                            "onUpdate:modelValue": ($event) => teacherclass.value = $event
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                          default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                            if (_push13) {
                                                                              _push13(`Section`);
                                                                            } else {
                                                                              return [
                                                                                createTextVNode("Section")
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 1
                                                                        }, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_VTextField, {
                                                                          type: "text",
                                                                          "hide-details": "",
                                                                          density: "compact",
                                                                          modelValue: teachersection.value,
                                                                          "onUpdate:modelValue": ($event) => teachersection.value = $event
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode("Section")
                                                                            ]),
                                                                            _: 1
                                                                          }),
                                                                          createVNode(_component_VTextField, {
                                                                            type: "text",
                                                                            "hide-details": "",
                                                                            density: "compact",
                                                                            modelValue: teachersection.value,
                                                                            "onUpdate:modelValue": ($event) => teachersection.value = $event
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                          default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                            if (_push13) {
                                                                              _push13(`Date Of Birth`);
                                                                            } else {
                                                                              return [
                                                                                createTextVNode("Date Of Birth")
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 1
                                                                        }, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_VTextField, {
                                                                          type: "text",
                                                                          "hide-details": "",
                                                                          density: "compact",
                                                                          modelValue: teacherdob.value,
                                                                          "onUpdate:modelValue": ($event) => teacherdob.value = $event
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode("Date Of Birth")
                                                                            ]),
                                                                            _: 1
                                                                          }),
                                                                          createVNode(_component_VTextField, {
                                                                            type: "text",
                                                                            "hide-details": "",
                                                                            density: "compact",
                                                                            modelValue: teacherdob.value,
                                                                            "onUpdate:modelValue": ($event) => teacherdob.value = $event
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                          default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                            if (_push13) {
                                                                              _push13(`Id No.`);
                                                                            } else {
                                                                              return [
                                                                                createTextVNode("Id No.")
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 1
                                                                        }, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_VTextField, {
                                                                          type: "text",
                                                                          "hide-details": "",
                                                                          density: "compact",
                                                                          modelValue: idno.value,
                                                                          "onUpdate:modelValue": ($event) => idno.value = $event
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode("Id No.")
                                                                            ]),
                                                                            _: 1
                                                                          }),
                                                                          createVNode(_component_VTextField, {
                                                                            type: "text",
                                                                            "hide-details": "",
                                                                            density: "compact",
                                                                            modelValue: idno.value,
                                                                            "onUpdate:modelValue": ($event) => idno.value = $event
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                          default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                            if (_push13) {
                                                                              _push13(`Phone`);
                                                                            } else {
                                                                              return [
                                                                                createTextVNode("Phone")
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 1
                                                                        }, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_VTextField, {
                                                                          type: "text",
                                                                          "hide-details": "",
                                                                          density: "compact",
                                                                          modelValue: phoneno.value,
                                                                          "onUpdate:modelValue": ($event) => phoneno.value = $event
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode("Phone")
                                                                            ]),
                                                                            _: 1
                                                                          }),
                                                                          createVNode(_component_VTextField, {
                                                                            type: "text",
                                                                            "hide-details": "",
                                                                            density: "compact",
                                                                            modelValue: phoneno.value,
                                                                            "onUpdate:modelValue": ($event) => phoneno.value = $event
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                          default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                            if (_push13) {
                                                                              _push13(`Email`);
                                                                            } else {
                                                                              return [
                                                                                createTextVNode("Email")
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 1
                                                                        }, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(_component_VTextField, {
                                                                          type: "text",
                                                                          "hide-details": "",
                                                                          density: "compact",
                                                                          modelValue: email.value,
                                                                          "onUpdate:modelValue": ($event) => email.value = $event
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode("Email")
                                                                            ]),
                                                                            _: 1
                                                                          }),
                                                                          createVNode(_component_VTextField, {
                                                                            type: "text",
                                                                            "hide-details": "",
                                                                            density: "compact",
                                                                            modelValue: email.value,
                                                                            "onUpdate:modelValue": ($event) => email.value = $event
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, {
                                                                    cols: "12",
                                                                    class: "py-0"
                                                                  }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_checkbox, {
                                                                          modelValue: checkbox.value,
                                                                          "onUpdate:modelValue": ($event) => checkbox.value = $event,
                                                                          class: "ml-n2",
                                                                          "hide-details": "",
                                                                          color: "primary"
                                                                        }, {
                                                                          label: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                            if (_push13) {
                                                                              _push13(`Are you sure want to update profile`);
                                                                            } else {
                                                                              return [
                                                                                createTextVNode("Are you sure want to update profile")
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 1
                                                                        }, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_checkbox, {
                                                                            modelValue: checkbox.value,
                                                                            "onUpdate:modelValue": ($event) => checkbox.value = $event,
                                                                            class: "ml-n2",
                                                                            "hide-details": "",
                                                                            color: "primary"
                                                                          }, {
                                                                            label: withCtx(() => [
                                                                              createTextVNode("Are you sure want to update profile")
                                                                            ]),
                                                                            _: 1
                                                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("Name")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode(_component_VTextField, {
                                                                          type: "text",
                                                                          "hide-details": "",
                                                                          density: "compact",
                                                                          modelValue: name.value,
                                                                          "onUpdate:modelValue": ($event) => name.value = $event
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("Gender")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode(_component_v_radio_group, {
                                                                          "hide-details": "",
                                                                          modelValue: gender.value,
                                                                          "onUpdate:modelValue": ($event) => gender.value = $event,
                                                                          column: ""
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_radio, {
                                                                              label: "Male",
                                                                              color: "primary",
                                                                              density: "compact",
                                                                              value: "male"
                                                                            }),
                                                                            createVNode(_component_v_radio, {
                                                                              label: "Female",
                                                                              color: "primary",
                                                                              density: "compact",
                                                                              value: "female"
                                                                            })
                                                                          ]),
                                                                          _: 1
                                                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("Class")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode(_component_VTextField, {
                                                                          type: "text",
                                                                          "hide-details": "",
                                                                          density: "compact",
                                                                          modelValue: teacherclass.value,
                                                                          "onUpdate:modelValue": ($event) => teacherclass.value = $event
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("Section")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode(_component_VTextField, {
                                                                          type: "text",
                                                                          "hide-details": "",
                                                                          density: "compact",
                                                                          modelValue: teachersection.value,
                                                                          "onUpdate:modelValue": ($event) => teachersection.value = $event
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("Date Of Birth")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode(_component_VTextField, {
                                                                          type: "text",
                                                                          "hide-details": "",
                                                                          density: "compact",
                                                                          modelValue: teacherdob.value,
                                                                          "onUpdate:modelValue": ($event) => teacherdob.value = $event
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("Id No.")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode(_component_VTextField, {
                                                                          type: "text",
                                                                          "hide-details": "",
                                                                          density: "compact",
                                                                          modelValue: idno.value,
                                                                          "onUpdate:modelValue": ($event) => idno.value = $event
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("Phone")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode(_component_VTextField, {
                                                                          type: "text",
                                                                          "hide-details": "",
                                                                          density: "compact",
                                                                          modelValue: phoneno.value,
                                                                          "onUpdate:modelValue": ($event) => phoneno.value = $event
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("Email")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode(_component_VTextField, {
                                                                          type: "text",
                                                                          "hide-details": "",
                                                                          density: "compact",
                                                                          modelValue: email.value,
                                                                          "onUpdate:modelValue": ($event) => email.value = $event
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, {
                                                                      cols: "12",
                                                                      class: "py-0"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_checkbox, {
                                                                          modelValue: checkbox.value,
                                                                          "onUpdate:modelValue": ($event) => checkbox.value = $event,
                                                                          class: "ml-n2",
                                                                          "hide-details": "",
                                                                          color: "primary"
                                                                        }, {
                                                                          label: withCtx(() => [
                                                                            createTextVNode("Are you sure want to update profile")
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
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_row, { class: "px-4" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("Name")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createVNode(_component_VTextField, {
                                                                        type: "text",
                                                                        "hide-details": "",
                                                                        density: "compact",
                                                                        modelValue: name.value,
                                                                        "onUpdate:modelValue": ($event) => name.value = $event
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("Gender")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createVNode(_component_v_radio_group, {
                                                                        "hide-details": "",
                                                                        modelValue: gender.value,
                                                                        "onUpdate:modelValue": ($event) => gender.value = $event,
                                                                        column: ""
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_radio, {
                                                                            label: "Male",
                                                                            color: "primary",
                                                                            density: "compact",
                                                                            value: "male"
                                                                          }),
                                                                          createVNode(_component_v_radio, {
                                                                            label: "Female",
                                                                            color: "primary",
                                                                            density: "compact",
                                                                            value: "female"
                                                                          })
                                                                        ]),
                                                                        _: 1
                                                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("Class")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createVNode(_component_VTextField, {
                                                                        type: "text",
                                                                        "hide-details": "",
                                                                        density: "compact",
                                                                        modelValue: teacherclass.value,
                                                                        "onUpdate:modelValue": ($event) => teacherclass.value = $event
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("Section")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createVNode(_component_VTextField, {
                                                                        type: "text",
                                                                        "hide-details": "",
                                                                        density: "compact",
                                                                        modelValue: teachersection.value,
                                                                        "onUpdate:modelValue": ($event) => teachersection.value = $event
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("Date Of Birth")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createVNode(_component_VTextField, {
                                                                        type: "text",
                                                                        "hide-details": "",
                                                                        density: "compact",
                                                                        modelValue: teacherdob.value,
                                                                        "onUpdate:modelValue": ($event) => teacherdob.value = $event
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("Id No.")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createVNode(_component_VTextField, {
                                                                        type: "text",
                                                                        "hide-details": "",
                                                                        density: "compact",
                                                                        modelValue: idno.value,
                                                                        "onUpdate:modelValue": ($event) => idno.value = $event
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("Phone")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createVNode(_component_VTextField, {
                                                                        type: "text",
                                                                        "hide-details": "",
                                                                        density: "compact",
                                                                        modelValue: phoneno.value,
                                                                        "onUpdate:modelValue": ($event) => phoneno.value = $event
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("Email")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createVNode(_component_VTextField, {
                                                                        type: "text",
                                                                        "hide-details": "",
                                                                        density: "compact",
                                                                        modelValue: email.value,
                                                                        "onUpdate:modelValue": ($event) => email.value = $event
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, {
                                                                    cols: "12",
                                                                    class: "py-0"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_checkbox, {
                                                                        modelValue: checkbox.value,
                                                                        "onUpdate:modelValue": ($event) => checkbox.value = $event,
                                                                        class: "ml-n2",
                                                                        "hide-details": "",
                                                                        color: "primary"
                                                                      }, {
                                                                        label: withCtx(() => [
                                                                          createTextVNode("Are you sure want to update profile")
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
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<div class="mt-4 d-flex justify-end"${_scopeId9}><div class="ml-auto"${_scopeId9}>`);
                                                            _push10(ssrRenderComponent(_component_v_btn, {
                                                              color: "error",
                                                              rounded: "pill",
                                                              class: "mr-3",
                                                              onClick: ($event) => editteacherprofile.value = false
                                                            }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(`Cancel`);
                                                                } else {
                                                                  return [
                                                                    createTextVNode("Cancel")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_btn, {
                                                              color: "primary",
                                                              rounded: "pill",
                                                              class: ""
                                                            }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(`Update Changes`);
                                                                } else {
                                                                  return [
                                                                    createTextVNode("Update Changes")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(`</div></div>`);
                                                          } else {
                                                            return [
                                                              createVNode("div", { class: "mt-4 d-flex justify-end" }, [
                                                                createVNode("div", { class: "ml-auto" }, [
                                                                  createVNode(_component_v_btn, {
                                                                    color: "error",
                                                                    rounded: "pill",
                                                                    class: "mr-3",
                                                                    onClick: ($event) => editteacherprofile.value = false
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
                                                                      createTextVNode("Update Changes")
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ])
                                                              ])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
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
                                                                        createTextVNode("Name")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_VTextField, {
                                                                      type: "text",
                                                                      "hide-details": "",
                                                                      density: "compact",
                                                                      modelValue: name.value,
                                                                      "onUpdate:modelValue": ($event) => name.value = $event
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, { cols: "12" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("Gender")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_radio_group, {
                                                                      "hide-details": "",
                                                                      modelValue: gender.value,
                                                                      "onUpdate:modelValue": ($event) => gender.value = $event,
                                                                      column: ""
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_radio, {
                                                                          label: "Male",
                                                                          color: "primary",
                                                                          density: "compact",
                                                                          value: "male"
                                                                        }),
                                                                        createVNode(_component_v_radio, {
                                                                          label: "Female",
                                                                          color: "primary",
                                                                          density: "compact",
                                                                          value: "female"
                                                                        })
                                                                      ]),
                                                                      _: 1
                                                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, { cols: "12" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("Class")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_VTextField, {
                                                                      type: "text",
                                                                      "hide-details": "",
                                                                      density: "compact",
                                                                      modelValue: teacherclass.value,
                                                                      "onUpdate:modelValue": ($event) => teacherclass.value = $event
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, { cols: "12" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("Section")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_VTextField, {
                                                                      type: "text",
                                                                      "hide-details": "",
                                                                      density: "compact",
                                                                      modelValue: teachersection.value,
                                                                      "onUpdate:modelValue": ($event) => teachersection.value = $event
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, { cols: "12" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("Date Of Birth")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_VTextField, {
                                                                      type: "text",
                                                                      "hide-details": "",
                                                                      density: "compact",
                                                                      modelValue: teacherdob.value,
                                                                      "onUpdate:modelValue": ($event) => teacherdob.value = $event
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, { cols: "12" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("Id No.")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_VTextField, {
                                                                      type: "text",
                                                                      "hide-details": "",
                                                                      density: "compact",
                                                                      modelValue: idno.value,
                                                                      "onUpdate:modelValue": ($event) => idno.value = $event
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, { cols: "12" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("Phone")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_VTextField, {
                                                                      type: "text",
                                                                      "hide-details": "",
                                                                      density: "compact",
                                                                      modelValue: phoneno.value,
                                                                      "onUpdate:modelValue": ($event) => phoneno.value = $event
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, { cols: "12" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("Email")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_VTextField, {
                                                                      type: "text",
                                                                      "hide-details": "",
                                                                      density: "compact",
                                                                      modelValue: email.value,
                                                                      "onUpdate:modelValue": ($event) => email.value = $event
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, {
                                                                  cols: "12",
                                                                  class: "py-0"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_checkbox, {
                                                                      modelValue: checkbox.value,
                                                                      "onUpdate:modelValue": ($event) => checkbox.value = $event,
                                                                      class: "ml-n2",
                                                                      "hide-details": "",
                                                                      color: "primary"
                                                                    }, {
                                                                      label: withCtx(() => [
                                                                        createTextVNode("Are you sure want to update profile")
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
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode("div", { class: "mt-4 d-flex justify-end" }, [
                                                              createVNode("div", { class: "ml-auto" }, [
                                                                createVNode(_component_v_btn, {
                                                                  color: "error",
                                                                  rounded: "pill",
                                                                  class: "mr-3",
                                                                  onClick: ($event) => editteacherprofile.value = false
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
                                                                    createTextVNode("Update Changes")
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
                                                }, _parent8, _scopeId7));
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
                                                                      createTextVNode("Name")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_VTextField, {
                                                                    type: "text",
                                                                    "hide-details": "",
                                                                    density: "compact",
                                                                    modelValue: name.value,
                                                                    "onUpdate:modelValue": ($event) => name.value = $event
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, { cols: "12" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("Gender")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_radio_group, {
                                                                    "hide-details": "",
                                                                    modelValue: gender.value,
                                                                    "onUpdate:modelValue": ($event) => gender.value = $event,
                                                                    column: ""
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_radio, {
                                                                        label: "Male",
                                                                        color: "primary",
                                                                        density: "compact",
                                                                        value: "male"
                                                                      }),
                                                                      createVNode(_component_v_radio, {
                                                                        label: "Female",
                                                                        color: "primary",
                                                                        density: "compact",
                                                                        value: "female"
                                                                      })
                                                                    ]),
                                                                    _: 1
                                                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, { cols: "12" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("Class")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_VTextField, {
                                                                    type: "text",
                                                                    "hide-details": "",
                                                                    density: "compact",
                                                                    modelValue: teacherclass.value,
                                                                    "onUpdate:modelValue": ($event) => teacherclass.value = $event
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, { cols: "12" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("Section")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_VTextField, {
                                                                    type: "text",
                                                                    "hide-details": "",
                                                                    density: "compact",
                                                                    modelValue: teachersection.value,
                                                                    "onUpdate:modelValue": ($event) => teachersection.value = $event
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, { cols: "12" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("Date Of Birth")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_VTextField, {
                                                                    type: "text",
                                                                    "hide-details": "",
                                                                    density: "compact",
                                                                    modelValue: teacherdob.value,
                                                                    "onUpdate:modelValue": ($event) => teacherdob.value = $event
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, { cols: "12" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("Id No.")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_VTextField, {
                                                                    type: "text",
                                                                    "hide-details": "",
                                                                    density: "compact",
                                                                    modelValue: idno.value,
                                                                    "onUpdate:modelValue": ($event) => idno.value = $event
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, { cols: "12" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("Phone")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_VTextField, {
                                                                    type: "text",
                                                                    "hide-details": "",
                                                                    density: "compact",
                                                                    modelValue: phoneno.value,
                                                                    "onUpdate:modelValue": ($event) => phoneno.value = $event
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, { cols: "12" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("Email")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_VTextField, {
                                                                    type: "text",
                                                                    "hide-details": "",
                                                                    density: "compact",
                                                                    modelValue: email.value,
                                                                    "onUpdate:modelValue": ($event) => email.value = $event
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, {
                                                                cols: "12",
                                                                class: "py-0"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_checkbox, {
                                                                    modelValue: checkbox.value,
                                                                    "onUpdate:modelValue": ($event) => checkbox.value = $event,
                                                                    class: "ml-n2",
                                                                    "hide-details": "",
                                                                    color: "primary"
                                                                  }, {
                                                                    label: withCtx(() => [
                                                                      createTextVNode("Are you sure want to update profile")
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
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "mt-4 d-flex justify-end" }, [
                                                            createVNode("div", { class: "ml-auto" }, [
                                                              createVNode(_component_v_btn, {
                                                                color: "error",
                                                                rounded: "pill",
                                                                class: "mr-3",
                                                                onClick: ($event) => editteacherprofile.value = false
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
                                                                  createTextVNode("Update Changes")
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_card_title, { class: "px-4 pb-6 justify-space-between d-flex align-center pt-4" }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "text-h5" }, "Edit Teacher Details"),
                                                createVNode(_component_v_btn, {
                                                  onClick: ($event) => editteacherprofile.value = false,
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
                                                                    createTextVNode("Name")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_VTextField, {
                                                                  type: "text",
                                                                  "hide-details": "",
                                                                  density: "compact",
                                                                  modelValue: name.value,
                                                                  "onUpdate:modelValue": ($event) => name.value = $event
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, { cols: "12" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Gender")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_radio_group, {
                                                                  "hide-details": "",
                                                                  modelValue: gender.value,
                                                                  "onUpdate:modelValue": ($event) => gender.value = $event,
                                                                  column: ""
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_radio, {
                                                                      label: "Male",
                                                                      color: "primary",
                                                                      density: "compact",
                                                                      value: "male"
                                                                    }),
                                                                    createVNode(_component_v_radio, {
                                                                      label: "Female",
                                                                      color: "primary",
                                                                      density: "compact",
                                                                      value: "female"
                                                                    })
                                                                  ]),
                                                                  _: 1
                                                                }, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, { cols: "12" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Class")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_VTextField, {
                                                                  type: "text",
                                                                  "hide-details": "",
                                                                  density: "compact",
                                                                  modelValue: teacherclass.value,
                                                                  "onUpdate:modelValue": ($event) => teacherclass.value = $event
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, { cols: "12" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Section")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_VTextField, {
                                                                  type: "text",
                                                                  "hide-details": "",
                                                                  density: "compact",
                                                                  modelValue: teachersection.value,
                                                                  "onUpdate:modelValue": ($event) => teachersection.value = $event
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, { cols: "12" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Date Of Birth")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_VTextField, {
                                                                  type: "text",
                                                                  "hide-details": "",
                                                                  density: "compact",
                                                                  modelValue: teacherdob.value,
                                                                  "onUpdate:modelValue": ($event) => teacherdob.value = $event
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, { cols: "12" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Id No.")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_VTextField, {
                                                                  type: "text",
                                                                  "hide-details": "",
                                                                  density: "compact",
                                                                  modelValue: idno.value,
                                                                  "onUpdate:modelValue": ($event) => idno.value = $event
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, { cols: "12" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Phone")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_VTextField, {
                                                                  type: "text",
                                                                  "hide-details": "",
                                                                  density: "compact",
                                                                  modelValue: phoneno.value,
                                                                  "onUpdate:modelValue": ($event) => phoneno.value = $event
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, { cols: "12" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Email")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_VTextField, {
                                                                  type: "text",
                                                                  "hide-details": "",
                                                                  density: "compact",
                                                                  modelValue: email.value,
                                                                  "onUpdate:modelValue": ($event) => email.value = $event
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, {
                                                              cols: "12",
                                                              class: "py-0"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_checkbox, {
                                                                  modelValue: checkbox.value,
                                                                  "onUpdate:modelValue": ($event) => checkbox.value = $event,
                                                                  class: "ml-n2",
                                                                  "hide-details": "",
                                                                  color: "primary"
                                                                }, {
                                                                  label: withCtx(() => [
                                                                    createTextVNode("Are you sure want to update profile")
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
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "mt-4 d-flex justify-end" }, [
                                                          createVNode("div", { class: "ml-auto" }, [
                                                            createVNode(_component_v_btn, {
                                                              color: "error",
                                                              rounded: "pill",
                                                              class: "mr-3",
                                                              onClick: ($event) => editteacherprofile.value = false
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
                                                                createTextVNode("Update Changes")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_card, {
                                        elevation: "10",
                                        class: "overflow-hidden"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card_title, { class: "px-4 pb-6 justify-space-between d-flex align-center pt-4" }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "text-h5" }, "Edit Teacher Details"),
                                              createVNode(_component_v_btn, {
                                                onClick: ($event) => editteacherprofile.value = false,
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
                                                                  createTextVNode("Name")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_VTextField, {
                                                                type: "text",
                                                                "hide-details": "",
                                                                density: "compact",
                                                                modelValue: name.value,
                                                                "onUpdate:modelValue": ($event) => name.value = $event
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, { cols: "12" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Gender")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_radio_group, {
                                                                "hide-details": "",
                                                                modelValue: gender.value,
                                                                "onUpdate:modelValue": ($event) => gender.value = $event,
                                                                column: ""
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_radio, {
                                                                    label: "Male",
                                                                    color: "primary",
                                                                    density: "compact",
                                                                    value: "male"
                                                                  }),
                                                                  createVNode(_component_v_radio, {
                                                                    label: "Female",
                                                                    color: "primary",
                                                                    density: "compact",
                                                                    value: "female"
                                                                  })
                                                                ]),
                                                                _: 1
                                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, { cols: "12" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Class")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_VTextField, {
                                                                type: "text",
                                                                "hide-details": "",
                                                                density: "compact",
                                                                modelValue: teacherclass.value,
                                                                "onUpdate:modelValue": ($event) => teacherclass.value = $event
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, { cols: "12" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Section")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_VTextField, {
                                                                type: "text",
                                                                "hide-details": "",
                                                                density: "compact",
                                                                modelValue: teachersection.value,
                                                                "onUpdate:modelValue": ($event) => teachersection.value = $event
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, { cols: "12" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Date Of Birth")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_VTextField, {
                                                                type: "text",
                                                                "hide-details": "",
                                                                density: "compact",
                                                                modelValue: teacherdob.value,
                                                                "onUpdate:modelValue": ($event) => teacherdob.value = $event
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, { cols: "12" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Id No.")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_VTextField, {
                                                                type: "text",
                                                                "hide-details": "",
                                                                density: "compact",
                                                                modelValue: idno.value,
                                                                "onUpdate:modelValue": ($event) => idno.value = $event
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, { cols: "12" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Phone")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_VTextField, {
                                                                type: "text",
                                                                "hide-details": "",
                                                                density: "compact",
                                                                modelValue: phoneno.value,
                                                                "onUpdate:modelValue": ($event) => phoneno.value = $event
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, { cols: "12" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Email")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_VTextField, {
                                                                type: "text",
                                                                "hide-details": "",
                                                                density: "compact",
                                                                modelValue: email.value,
                                                                "onUpdate:modelValue": ($event) => email.value = $event
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, {
                                                            cols: "12",
                                                            class: "py-0"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_checkbox, {
                                                                modelValue: checkbox.value,
                                                                "onUpdate:modelValue": ($event) => checkbox.value = $event,
                                                                class: "ml-n2",
                                                                "hide-details": "",
                                                                color: "primary"
                                                              }, {
                                                                label: withCtx(() => [
                                                                  createTextVNode("Are you sure want to update profile")
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
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "mt-4 d-flex justify-end" }, [
                                                        createVNode("div", { class: "ml-auto" }, [
                                                          createVNode(_component_v_btn, {
                                                            color: "error",
                                                            rounded: "pill",
                                                            class: "mr-3",
                                                            onClick: ($event) => editteacherprofile.value = false
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
                                                              createTextVNode("Update Changes")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_dialog, {
                                  modelValue: editteacherprofile.value,
                                  "onUpdate:modelValue": ($event) => editteacherprofile.value = $event,
                                  "max-width": "500",
                                  class: "add-class"
                                }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(_component_v_btn, mergeProps({
                                      color: "primary",
                                      rounded: "pill",
                                      block: ""
                                    }, props, {
                                      size: "large",
                                      class: "ml-auto"
                                    }), {
                                      default: withCtx(() => [
                                        createVNode(_component_EditIcon, {
                                          "stroke-width": "2",
                                          size: "20",
                                          class: "mr-2"
                                        }),
                                        createTextVNode(" Edit ")
                                      ]),
                                      _: 2
                                    }, 1040)
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, {
                                      elevation: "10",
                                      class: "overflow-hidden"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_title, { class: "px-4 pb-6 justify-space-between d-flex align-center pt-4" }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "text-h5" }, "Edit Teacher Details"),
                                            createVNode(_component_v_btn, {
                                              onClick: ($event) => editteacherprofile.value = false,
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
                                                                createTextVNode("Name")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_VTextField, {
                                                              type: "text",
                                                              "hide-details": "",
                                                              density: "compact",
                                                              modelValue: name.value,
                                                              "onUpdate:modelValue": ($event) => name.value = $event
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Gender")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_radio_group, {
                                                              "hide-details": "",
                                                              modelValue: gender.value,
                                                              "onUpdate:modelValue": ($event) => gender.value = $event,
                                                              column: ""
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_radio, {
                                                                  label: "Male",
                                                                  color: "primary",
                                                                  density: "compact",
                                                                  value: "male"
                                                                }),
                                                                createVNode(_component_v_radio, {
                                                                  label: "Female",
                                                                  color: "primary",
                                                                  density: "compact",
                                                                  value: "female"
                                                                })
                                                              ]),
                                                              _: 1
                                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Class")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_VTextField, {
                                                              type: "text",
                                                              "hide-details": "",
                                                              density: "compact",
                                                              modelValue: teacherclass.value,
                                                              "onUpdate:modelValue": ($event) => teacherclass.value = $event
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Section")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_VTextField, {
                                                              type: "text",
                                                              "hide-details": "",
                                                              density: "compact",
                                                              modelValue: teachersection.value,
                                                              "onUpdate:modelValue": ($event) => teachersection.value = $event
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Date Of Birth")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_VTextField, {
                                                              type: "text",
                                                              "hide-details": "",
                                                              density: "compact",
                                                              modelValue: teacherdob.value,
                                                              "onUpdate:modelValue": ($event) => teacherdob.value = $event
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Id No.")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_VTextField, {
                                                              type: "text",
                                                              "hide-details": "",
                                                              density: "compact",
                                                              modelValue: idno.value,
                                                              "onUpdate:modelValue": ($event) => idno.value = $event
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Phone")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_VTextField, {
                                                              type: "text",
                                                              "hide-details": "",
                                                              density: "compact",
                                                              modelValue: phoneno.value,
                                                              "onUpdate:modelValue": ($event) => phoneno.value = $event
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Email")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_VTextField, {
                                                              type: "text",
                                                              "hide-details": "",
                                                              density: "compact",
                                                              modelValue: email.value,
                                                              "onUpdate:modelValue": ($event) => email.value = $event
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, {
                                                          cols: "12",
                                                          class: "py-0"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_checkbox, {
                                                              modelValue: checkbox.value,
                                                              "onUpdate:modelValue": ($event) => checkbox.value = $event,
                                                              class: "ml-n2",
                                                              "hide-details": "",
                                                              color: "primary"
                                                            }, {
                                                              label: withCtx(() => [
                                                                createTextVNode("Are you sure want to update profile")
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
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "mt-4 d-flex justify-end" }, [
                                                      createVNode("div", { class: "ml-auto" }, [
                                                        createVNode(_component_v_btn, {
                                                          color: "error",
                                                          rounded: "pill",
                                                          class: "mr-3",
                                                          onClick: ($event) => editteacherprofile.value = false
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
                                                            createTextVNode("Update Changes")
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
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "error",
                                size: "large",
                                rounded: "pill",
                                block: "",
                                class: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_TrashIcon, {
                                      "stroke-width": "2",
                                      size: "20",
                                      class: "mr-2"
                                    }, null, _parent6, _scopeId5));
                                    _push6(` Delete `);
                                  } else {
                                    return [
                                      createVNode(_component_TrashIcon, {
                                        "stroke-width": "2",
                                        size: "20",
                                        class: "mr-2"
                                      }),
                                      createTextVNode(" Delete ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, {
                                  color: "error",
                                  size: "large",
                                  rounded: "pill",
                                  block: "",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_TrashIcon, {
                                      "stroke-width": "2",
                                      size: "20",
                                      class: "mr-2"
                                    }),
                                    createTextVNode(" Delete ")
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
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_dialog, {
                                modelValue: editteacherprofile.value,
                                "onUpdate:modelValue": ($event) => editteacherprofile.value = $event,
                                "max-width": "500",
                                class: "add-class"
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(_component_v_btn, mergeProps({
                                    color: "primary",
                                    rounded: "pill",
                                    block: ""
                                  }, props, {
                                    size: "large",
                                    class: "ml-auto"
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(_component_EditIcon, {
                                        "stroke-width": "2",
                                        size: "20",
                                        class: "mr-2"
                                      }),
                                      createTextVNode(" Edit ")
                                    ]),
                                    _: 2
                                  }, 1040)
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_v_card, {
                                    elevation: "10",
                                    class: "overflow-hidden"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_title, { class: "px-4 pb-6 justify-space-between d-flex align-center pt-4" }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-h5" }, "Edit Teacher Details"),
                                          createVNode(_component_v_btn, {
                                            onClick: ($event) => editteacherprofile.value = false,
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
                                                              createTextVNode("Name")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_VTextField, {
                                                            type: "text",
                                                            "hide-details": "",
                                                            density: "compact",
                                                            modelValue: name.value,
                                                            "onUpdate:modelValue": ($event) => name.value = $event
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Gender")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_radio_group, {
                                                            "hide-details": "",
                                                            modelValue: gender.value,
                                                            "onUpdate:modelValue": ($event) => gender.value = $event,
                                                            column: ""
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_radio, {
                                                                label: "Male",
                                                                color: "primary",
                                                                density: "compact",
                                                                value: "male"
                                                              }),
                                                              createVNode(_component_v_radio, {
                                                                label: "Female",
                                                                color: "primary",
                                                                density: "compact",
                                                                value: "female"
                                                              })
                                                            ]),
                                                            _: 1
                                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Class")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_VTextField, {
                                                            type: "text",
                                                            "hide-details": "",
                                                            density: "compact",
                                                            modelValue: teacherclass.value,
                                                            "onUpdate:modelValue": ($event) => teacherclass.value = $event
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Section")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_VTextField, {
                                                            type: "text",
                                                            "hide-details": "",
                                                            density: "compact",
                                                            modelValue: teachersection.value,
                                                            "onUpdate:modelValue": ($event) => teachersection.value = $event
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Date Of Birth")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_VTextField, {
                                                            type: "text",
                                                            "hide-details": "",
                                                            density: "compact",
                                                            modelValue: teacherdob.value,
                                                            "onUpdate:modelValue": ($event) => teacherdob.value = $event
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Id No.")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_VTextField, {
                                                            type: "text",
                                                            "hide-details": "",
                                                            density: "compact",
                                                            modelValue: idno.value,
                                                            "onUpdate:modelValue": ($event) => idno.value = $event
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Phone")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_VTextField, {
                                                            type: "text",
                                                            "hide-details": "",
                                                            density: "compact",
                                                            modelValue: phoneno.value,
                                                            "onUpdate:modelValue": ($event) => phoneno.value = $event
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Email")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_VTextField, {
                                                            type: "text",
                                                            "hide-details": "",
                                                            density: "compact",
                                                            modelValue: email.value,
                                                            "onUpdate:modelValue": ($event) => email.value = $event
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, {
                                                        cols: "12",
                                                        class: "py-0"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_checkbox, {
                                                            modelValue: checkbox.value,
                                                            "onUpdate:modelValue": ($event) => checkbox.value = $event,
                                                            class: "ml-n2",
                                                            "hide-details": "",
                                                            color: "primary"
                                                          }, {
                                                            label: withCtx(() => [
                                                              createTextVNode("Are you sure want to update profile")
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
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "mt-4 d-flex justify-end" }, [
                                                    createVNode("div", { class: "ml-auto" }, [
                                                      createVNode(_component_v_btn, {
                                                        color: "error",
                                                        rounded: "pill",
                                                        class: "mr-3",
                                                        onClick: ($event) => editteacherprofile.value = false
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
                                                          createTextVNode("Update Changes")
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
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                color: "error",
                                size: "large",
                                rounded: "pill",
                                block: "",
                                class: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_TrashIcon, {
                                    "stroke-width": "2",
                                    size: "20",
                                    class: "mr-2"
                                  }),
                                  createTextVNode(" Delete ")
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
                    createVNode("div", { class: "d-flex justify-center text-center" }, [
                      createVNode("div", null, [
                        createVNode(_component_v_avatar, {
                          class: "rounded-xl",
                          size: "110"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: user2,
                              height: "110",
                              width: "110"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("h5", { class: "text-h5 mt-3 mb-1" }, "John Mednath"),
                        createVNode(_component_v_chip, {
                          size: "small",
                          color: "primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Teacher ")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { class: "d-flex justify-space-between mt-12" }, [
                      createVNode("div", { class: "d-flex align-items-center" }, [
                        createVNode(_component_v_avatar, {
                          class: "bg-lightsuccess",
                          size: "50"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_CheckIcon, {
                              class: "text-success",
                              "stroke-width": "1.5",
                              size: "24",
                              col: ""
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "ms-3" }, [
                          createVNode("p", { class: "text-h5 mb-1" }, "1.23k"),
                          createVNode("p", { class: "text-subtitle-1 text-grey100" }, "Tasks Done")
                        ])
                      ]),
                      createVNode("div", { class: "d-flex align-items-center" }, [
                        createVNode(_component_v_avatar, {
                          class: "bg-lightsuccess",
                          size: "50"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_CpuIcon, {
                              class: "text-success",
                              "stroke-width": "1.5",
                              size: "24",
                              col: ""
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "ms-3" }, [
                          createVNode("p", { class: "text-h5 mb-1" }, "568"),
                          createVNode("p", { class: "text-subtitle-1 text-grey100" }, "Projects Done")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mt-12" }, [
                      createVNode("div", { class: "pb-1 mb-2 border-bottom pb-3" }, [
                        createVNode("h6", { class: "text-subtitle-1 font-weight-semibold" }, "Details")
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "py-3" }, [
                          createVNode("p", { class: "text-subtitle-1 font-weight-semibold mb-0" }, [
                            createTextVNode(" Name: "),
                            createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "John Mednath")
                          ])
                        ]),
                        createVNode("div", { class: "py-3" }, [
                          createVNode("p", { class: "text-subtitle-1 font-weight-semibold mb-0" }, [
                            createTextVNode(" Gender: "),
                            createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "Female")
                          ])
                        ]),
                        createVNode("div", { class: "py-3" }, [
                          createVNode("p", { class: "text-subtitle-1 font-weight-semibold mb-0" }, [
                            createTextVNode(" Class: "),
                            createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "11 (Science)")
                          ])
                        ]),
                        createVNode("div", { class: "py-3" }, [
                          createVNode("p", { class: "text-subtitle-1 font-weight-semibold mb-0" }, [
                            createTextVNode(" Section: "),
                            createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "B")
                          ])
                        ]),
                        createVNode("div", { class: "py-3" }, [
                          createVNode("p", { class: "text-subtitle-1 font-weight-semibold mb-0" }, [
                            createTextVNode(" Date Of Birth: "),
                            createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "03/08/1993")
                          ])
                        ]),
                        createVNode("div", { class: "py-3" }, [
                          createVNode("p", { class: "text-subtitle-1 font-weight-semibold mb-0" }, [
                            createTextVNode(" Id No. : "),
                            createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "498376")
                          ])
                        ]),
                        createVNode("div", { class: "py-3" }, [
                          createVNode("p", { class: "text-subtitle-1 font-weight-semibold mb-0" }, [
                            createTextVNode(" Phone: "),
                            createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "+ 123 9988568")
                          ])
                        ]),
                        createVNode("div", { class: "py-3" }, [
                          createVNode("p", { class: "text-subtitle-1 font-weight-semibold mb-0" }, [
                            createTextVNode(" Email: "),
                            createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "johnmednath@gmail.com")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mt-8" }, [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_dialog, {
                                modelValue: editteacherprofile.value,
                                "onUpdate:modelValue": ($event) => editteacherprofile.value = $event,
                                "max-width": "500",
                                class: "add-class"
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(_component_v_btn, mergeProps({
                                    color: "primary",
                                    rounded: "pill",
                                    block: ""
                                  }, props, {
                                    size: "large",
                                    class: "ml-auto"
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(_component_EditIcon, {
                                        "stroke-width": "2",
                                        size: "20",
                                        class: "mr-2"
                                      }),
                                      createTextVNode(" Edit ")
                                    ]),
                                    _: 2
                                  }, 1040)
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_v_card, {
                                    elevation: "10",
                                    class: "overflow-hidden"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_title, { class: "px-4 pb-6 justify-space-between d-flex align-center pt-4" }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-h5" }, "Edit Teacher Details"),
                                          createVNode(_component_v_btn, {
                                            onClick: ($event) => editteacherprofile.value = false,
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
                                                              createTextVNode("Name")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_VTextField, {
                                                            type: "text",
                                                            "hide-details": "",
                                                            density: "compact",
                                                            modelValue: name.value,
                                                            "onUpdate:modelValue": ($event) => name.value = $event
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Gender")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_radio_group, {
                                                            "hide-details": "",
                                                            modelValue: gender.value,
                                                            "onUpdate:modelValue": ($event) => gender.value = $event,
                                                            column: ""
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_radio, {
                                                                label: "Male",
                                                                color: "primary",
                                                                density: "compact",
                                                                value: "male"
                                                              }),
                                                              createVNode(_component_v_radio, {
                                                                label: "Female",
                                                                color: "primary",
                                                                density: "compact",
                                                                value: "female"
                                                              })
                                                            ]),
                                                            _: 1
                                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Class")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_VTextField, {
                                                            type: "text",
                                                            "hide-details": "",
                                                            density: "compact",
                                                            modelValue: teacherclass.value,
                                                            "onUpdate:modelValue": ($event) => teacherclass.value = $event
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Section")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_VTextField, {
                                                            type: "text",
                                                            "hide-details": "",
                                                            density: "compact",
                                                            modelValue: teachersection.value,
                                                            "onUpdate:modelValue": ($event) => teachersection.value = $event
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Date Of Birth")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_VTextField, {
                                                            type: "text",
                                                            "hide-details": "",
                                                            density: "compact",
                                                            modelValue: teacherdob.value,
                                                            "onUpdate:modelValue": ($event) => teacherdob.value = $event
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Id No.")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_VTextField, {
                                                            type: "text",
                                                            "hide-details": "",
                                                            density: "compact",
                                                            modelValue: idno.value,
                                                            "onUpdate:modelValue": ($event) => idno.value = $event
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Phone")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_VTextField, {
                                                            type: "text",
                                                            "hide-details": "",
                                                            density: "compact",
                                                            modelValue: phoneno.value,
                                                            "onUpdate:modelValue": ($event) => phoneno.value = $event
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Email")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_VTextField, {
                                                            type: "text",
                                                            "hide-details": "",
                                                            density: "compact",
                                                            modelValue: email.value,
                                                            "onUpdate:modelValue": ($event) => email.value = $event
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, {
                                                        cols: "12",
                                                        class: "py-0"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_checkbox, {
                                                            modelValue: checkbox.value,
                                                            "onUpdate:modelValue": ($event) => checkbox.value = $event,
                                                            class: "ml-n2",
                                                            "hide-details": "",
                                                            color: "primary"
                                                          }, {
                                                            label: withCtx(() => [
                                                              createTextVNode("Are you sure want to update profile")
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
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "mt-4 d-flex justify-end" }, [
                                                    createVNode("div", { class: "ml-auto" }, [
                                                      createVNode(_component_v_btn, {
                                                        color: "error",
                                                        rounded: "pill",
                                                        class: "mr-3",
                                                        onClick: ($event) => editteacherprofile.value = false
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
                                                          createTextVNode("Update Changes")
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
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                color: "error",
                                size: "large",
                                rounded: "pill",
                                block: "",
                                class: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_TrashIcon, {
                                    "stroke-width": "2",
                                    size: "20",
                                    class: "mr-2"
                                  }),
                                  createTextVNode(" Delete ")
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
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex justify-center text-center" }, [
                    createVNode("div", null, [
                      createVNode(_component_v_avatar, {
                        class: "rounded-xl",
                        size: "110"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: user2,
                            height: "110",
                            width: "110"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("h5", { class: "text-h5 mt-3 mb-1" }, "John Mednath"),
                      createVNode(_component_v_chip, {
                        size: "small",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Teacher ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "d-flex justify-space-between mt-12" }, [
                    createVNode("div", { class: "d-flex align-items-center" }, [
                      createVNode(_component_v_avatar, {
                        class: "bg-lightsuccess",
                        size: "50"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_CheckIcon, {
                            class: "text-success",
                            "stroke-width": "1.5",
                            size: "24",
                            col: ""
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "ms-3" }, [
                        createVNode("p", { class: "text-h5 mb-1" }, "1.23k"),
                        createVNode("p", { class: "text-subtitle-1 text-grey100" }, "Tasks Done")
                      ])
                    ]),
                    createVNode("div", { class: "d-flex align-items-center" }, [
                      createVNode(_component_v_avatar, {
                        class: "bg-lightsuccess",
                        size: "50"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_CpuIcon, {
                            class: "text-success",
                            "stroke-width": "1.5",
                            size: "24",
                            col: ""
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "ms-3" }, [
                        createVNode("p", { class: "text-h5 mb-1" }, "568"),
                        createVNode("p", { class: "text-subtitle-1 text-grey100" }, "Projects Done")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "mt-12" }, [
                    createVNode("div", { class: "pb-1 mb-2 border-bottom pb-3" }, [
                      createVNode("h6", { class: "text-subtitle-1 font-weight-semibold" }, "Details")
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "py-3" }, [
                        createVNode("p", { class: "text-subtitle-1 font-weight-semibold mb-0" }, [
                          createTextVNode(" Name: "),
                          createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "John Mednath")
                        ])
                      ]),
                      createVNode("div", { class: "py-3" }, [
                        createVNode("p", { class: "text-subtitle-1 font-weight-semibold mb-0" }, [
                          createTextVNode(" Gender: "),
                          createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "Female")
                        ])
                      ]),
                      createVNode("div", { class: "py-3" }, [
                        createVNode("p", { class: "text-subtitle-1 font-weight-semibold mb-0" }, [
                          createTextVNode(" Class: "),
                          createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "11 (Science)")
                        ])
                      ]),
                      createVNode("div", { class: "py-3" }, [
                        createVNode("p", { class: "text-subtitle-1 font-weight-semibold mb-0" }, [
                          createTextVNode(" Section: "),
                          createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "B")
                        ])
                      ]),
                      createVNode("div", { class: "py-3" }, [
                        createVNode("p", { class: "text-subtitle-1 font-weight-semibold mb-0" }, [
                          createTextVNode(" Date Of Birth: "),
                          createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "03/08/1993")
                        ])
                      ]),
                      createVNode("div", { class: "py-3" }, [
                        createVNode("p", { class: "text-subtitle-1 font-weight-semibold mb-0" }, [
                          createTextVNode(" Id No. : "),
                          createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "498376")
                        ])
                      ]),
                      createVNode("div", { class: "py-3" }, [
                        createVNode("p", { class: "text-subtitle-1 font-weight-semibold mb-0" }, [
                          createTextVNode(" Phone: "),
                          createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "+ 123 9988568")
                        ])
                      ]),
                      createVNode("div", { class: "py-3" }, [
                        createVNode("p", { class: "text-subtitle-1 font-weight-semibold mb-0" }, [
                          createTextVNode(" Email: "),
                          createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "johnmednath@gmail.com")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "mt-8" }, [
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_dialog, {
                              modelValue: editteacherprofile.value,
                              "onUpdate:modelValue": ($event) => editteacherprofile.value = $event,
                              "max-width": "500",
                              class: "add-class"
                            }, {
                              activator: withCtx(({ props }) => [
                                createVNode(_component_v_btn, mergeProps({
                                  color: "primary",
                                  rounded: "pill",
                                  block: ""
                                }, props, {
                                  size: "large",
                                  class: "ml-auto"
                                }), {
                                  default: withCtx(() => [
                                    createVNode(_component_EditIcon, {
                                      "stroke-width": "2",
                                      size: "20",
                                      class: "mr-2"
                                    }),
                                    createTextVNode(" Edit ")
                                  ]),
                                  _: 2
                                }, 1040)
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_v_card, {
                                  elevation: "10",
                                  class: "overflow-hidden"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_title, { class: "px-4 pb-6 justify-space-between d-flex align-center pt-4" }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-h5" }, "Edit Teacher Details"),
                                        createVNode(_component_v_btn, {
                                          onClick: ($event) => editteacherprofile.value = false,
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
                                                            createTextVNode("Name")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_VTextField, {
                                                          type: "text",
                                                          "hide-details": "",
                                                          density: "compact",
                                                          modelValue: name.value,
                                                          "onUpdate:modelValue": ($event) => name.value = $event
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Gender")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_radio_group, {
                                                          "hide-details": "",
                                                          modelValue: gender.value,
                                                          "onUpdate:modelValue": ($event) => gender.value = $event,
                                                          column: ""
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_radio, {
                                                              label: "Male",
                                                              color: "primary",
                                                              density: "compact",
                                                              value: "male"
                                                            }),
                                                            createVNode(_component_v_radio, {
                                                              label: "Female",
                                                              color: "primary",
                                                              density: "compact",
                                                              value: "female"
                                                            })
                                                          ]),
                                                          _: 1
                                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Class")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_VTextField, {
                                                          type: "text",
                                                          "hide-details": "",
                                                          density: "compact",
                                                          modelValue: teacherclass.value,
                                                          "onUpdate:modelValue": ($event) => teacherclass.value = $event
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Section")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_VTextField, {
                                                          type: "text",
                                                          "hide-details": "",
                                                          density: "compact",
                                                          modelValue: teachersection.value,
                                                          "onUpdate:modelValue": ($event) => teachersection.value = $event
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Date Of Birth")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_VTextField, {
                                                          type: "text",
                                                          "hide-details": "",
                                                          density: "compact",
                                                          modelValue: teacherdob.value,
                                                          "onUpdate:modelValue": ($event) => teacherdob.value = $event
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Id No.")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_VTextField, {
                                                          type: "text",
                                                          "hide-details": "",
                                                          density: "compact",
                                                          modelValue: idno.value,
                                                          "onUpdate:modelValue": ($event) => idno.value = $event
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Phone")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_VTextField, {
                                                          type: "text",
                                                          "hide-details": "",
                                                          density: "compact",
                                                          modelValue: phoneno.value,
                                                          "onUpdate:modelValue": ($event) => phoneno.value = $event
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_label, { class: "mb-2 text-grey100" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Email")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_VTextField, {
                                                          type: "text",
                                                          "hide-details": "",
                                                          density: "compact",
                                                          modelValue: email.value,
                                                          "onUpdate:modelValue": ($event) => email.value = $event
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "12",
                                                      class: "py-0"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_checkbox, {
                                                          modelValue: checkbox.value,
                                                          "onUpdate:modelValue": ($event) => checkbox.value = $event,
                                                          class: "ml-n2",
                                                          "hide-details": "",
                                                          color: "primary"
                                                        }, {
                                                          label: withCtx(() => [
                                                            createTextVNode("Are you sure want to update profile")
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
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "mt-4 d-flex justify-end" }, [
                                                  createVNode("div", { class: "ml-auto" }, [
                                                    createVNode(_component_v_btn, {
                                                      color: "error",
                                                      rounded: "pill",
                                                      class: "mr-3",
                                                      onClick: ($event) => editteacherprofile.value = false
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
                                                        createTextVNode("Update Changes")
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
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, {
                              color: "error",
                              size: "large",
                              rounded: "pill",
                              block: "",
                              class: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_TrashIcon, {
                                  "stroke-width": "2",
                                  size: "20",
                                  class: "mr-2"
                                }),
                                createTextVNode(" Delete ")
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/school-pages/teachers/TeacherProfile.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TeacherSkills",
  __ssrInlineRender: true,
  setup(__props) {
    const tab = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      const _component_VCard = resolveComponent("VCard");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_window = resolveComponent("v-window");
      const _component_v_window_item = resolveComponent("v-window-item");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_progress_linear = resolveComponent("v-progress-linear");
      const _component_CircleCheckIcon = resolveComponent("CircleCheckIcon");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "upcomming-schedule" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_tabs, {
        modelValue: tab.value,
        "onUpdate:modelValue": ($event) => tab.value = $event,
        "bg-color": "transparent",
        "min-height": "42",
        height: "42"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_tab, {
              value: "Skill",
              color: "white",
              class: "text-h6 mr-3 v-btn--elevated",
              rounded: "pill"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Teacher Skill`);
                } else {
                  return [
                    createTextVNode("Teacher Skill")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_tab, {
              value: "Salary",
              color: "white",
              class: "text-h6 v-btn--elevated",
              rounded: "pill"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Salary`);
                } else {
                  return [
                    createTextVNode("Salary")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_tab, {
                value: "Skill",
                color: "white",
                class: "text-h6 mr-3 v-btn--elevated",
                rounded: "pill"
              }, {
                default: withCtx(() => [
                  createTextVNode("Teacher Skill")
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, {
                value: "Salary",
                color: "white",
                class: "text-h6 v-btn--elevated",
                rounded: "pill"
              }, {
                default: withCtx(() => [
                  createTextVNode("Salary")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_VCard, {
        elevation: "10",
        class: "mt-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_window, {
                    modelValue: tab.value,
                    "onUpdate:modelValue": ($event) => tab.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "Skill" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h5 class="text-h5 font-weight-semibold pb-3"${_scopeId4}>Teacher Skill</h5>`);
                              _push5(ssrRenderComponent(_component_v_divider, null, null, _parent5, _scopeId4));
                              _push5(`<div class="border-table mt-5"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_table, { class: "month-table" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<thead${_scopeId5}><tr${_scopeId5}><th class="text-h6 text-no-wrap"${_scopeId5}>Code</th><th class="text-h6 text-no-wrap"${_scopeId5}>Subject Name</th><th class="text-h6 text-no-wrap"${_scopeId5}>Marks</th><th class="text-h6 text-no-wrap"${_scopeId5}>Grade</th></tr></thead><tbody${_scopeId5}><!--[-->`);
                                    ssrRenderList(unref(TeacherSkillData), (item) => {
                                      _push6(`<tr class="month-item"${_scopeId5}><td${_scopeId5}><h6 class="text-subtitle-1 font-weight-medium text-grey200"${_scopeId5}>${ssrInterpolate(item.code)}</h6></td><td class="text-subtitle-1 font-weight-medium text-grey200 text-no-wrap mt-1"${_scopeId5}>${ssrInterpolate(item.sub)}</td><td${_scopeId5}><div class=""${_scopeId5}><div class="text-subtitle-2 font-weight-medium text-grey200 mb-1"${_scopeId5}>${ssrInterpolate(item.marks)}</div>`);
                                      _push6(ssrRenderComponent(_component_v_progress_linear, {
                                        height: "7",
                                        color: item.statuscolor,
                                        "bg-color": "light" + item.statuscolor,
                                        rounded: "",
                                        "model-value": item.marks
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</div></td><td class="${ssrRenderClass(
                                        "text-subtitle-1 font-weight-semibold textSecondary text-no-wrap mt-1 text-" + item.statuscolor
                                      )}"${_scopeId5}>${ssrInterpolate(item.grad)}</td></tr>`);
                                    });
                                    _push6(`<!--]--></tbody>`);
                                  } else {
                                    return [
                                      createVNode("thead", null, [
                                        createVNode("tr", null, [
                                          createVNode("th", { class: "text-h6 text-no-wrap" }, "Code"),
                                          createVNode("th", { class: "text-h6 text-no-wrap" }, "Subject Name"),
                                          createVNode("th", { class: "text-h6 text-no-wrap" }, "Marks"),
                                          createVNode("th", { class: "text-h6 text-no-wrap" }, "Grade")
                                        ])
                                      ]),
                                      createVNode("tbody", null, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(TeacherSkillData), (item) => {
                                          return openBlock(), createBlock("tr", {
                                            key: item.code,
                                            class: "month-item"
                                          }, [
                                            createVNode("td", null, [
                                              createVNode("h6", { class: "text-subtitle-1 font-weight-medium text-grey200" }, toDisplayString(item.code), 1)
                                            ]),
                                            createVNode("td", { class: "text-subtitle-1 font-weight-medium text-grey200 text-no-wrap mt-1" }, toDisplayString(item.sub), 1),
                                            createVNode("td", null, [
                                              createVNode("div", { class: "" }, [
                                                createVNode("div", { class: "text-subtitle-2 font-weight-medium text-grey200 mb-1" }, toDisplayString(item.marks), 1),
                                                createVNode(_component_v_progress_linear, {
                                                  height: "7",
                                                  color: item.statuscolor,
                                                  "bg-color": "light" + item.statuscolor,
                                                  rounded: "",
                                                  "model-value": item.marks
                                                }, null, 8, ["color", "bg-color", "model-value"])
                                              ])
                                            ]),
                                            createVNode("td", {
                                              class: "text-subtitle-1 font-weight-semibold textSecondary text-no-wrap mt-1 text-" + item.statuscolor
                                            }, toDisplayString(item.grad), 3)
                                          ]);
                                        }), 128))
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("h5", { class: "text-h5 font-weight-semibold pb-3" }, "Teacher Skill"),
                                createVNode(_component_v_divider),
                                createVNode("div", { class: "border-table mt-5" }, [
                                  createVNode(_component_v_table, { class: "month-table" }, {
                                    default: withCtx(() => [
                                      createVNode("thead", null, [
                                        createVNode("tr", null, [
                                          createVNode("th", { class: "text-h6 text-no-wrap" }, "Code"),
                                          createVNode("th", { class: "text-h6 text-no-wrap" }, "Subject Name"),
                                          createVNode("th", { class: "text-h6 text-no-wrap" }, "Marks"),
                                          createVNode("th", { class: "text-h6 text-no-wrap" }, "Grade")
                                        ])
                                      ]),
                                      createVNode("tbody", null, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(TeacherSkillData), (item) => {
                                          return openBlock(), createBlock("tr", {
                                            key: item.code,
                                            class: "month-item"
                                          }, [
                                            createVNode("td", null, [
                                              createVNode("h6", { class: "text-subtitle-1 font-weight-medium text-grey200" }, toDisplayString(item.code), 1)
                                            ]),
                                            createVNode("td", { class: "text-subtitle-1 font-weight-medium text-grey200 text-no-wrap mt-1" }, toDisplayString(item.sub), 1),
                                            createVNode("td", null, [
                                              createVNode("div", { class: "" }, [
                                                createVNode("div", { class: "text-subtitle-2 font-weight-medium text-grey200 mb-1" }, toDisplayString(item.marks), 1),
                                                createVNode(_component_v_progress_linear, {
                                                  height: "7",
                                                  color: item.statuscolor,
                                                  "bg-color": "light" + item.statuscolor,
                                                  rounded: "",
                                                  "model-value": item.marks
                                                }, null, 8, ["color", "bg-color", "model-value"])
                                              ])
                                            ]),
                                            createVNode("td", {
                                              class: "text-subtitle-1 font-weight-semibold textSecondary text-no-wrap mt-1 text-" + item.statuscolor
                                            }, toDisplayString(item.grad), 3)
                                          ]);
                                        }), 128))
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "Salary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="mb-4 border-bottom pb-3"${_scopeId4}><h5 class="text-h5 font-weight-semibold"${_scopeId4}>Salary Report</h5></div><div class="d-flex justify-space-between mt-12 w-100"${_scopeId4}><div class="text-subtitle-1 text-grey100 d-flex align-items-center"${_scopeId4}>Standard</div><div class="d-flex align-items-center"${_scopeId4}><div class="d-flex justify-content-end"${_scopeId4}><sup class="text-h5 mt-3 text-primary mr-1"${_scopeId4}>$</sup><h1 class="display-1 font-weight-light mb-0 text-primary"${_scopeId4}>50</h1><sub class="text-h4 mt-6 text-grey100 font-weight-regular"${_scopeId4}>/ month</sub></div></div></div><ul class="g-2 my-4"${_scopeId4}><li class="mb-2 d-flex align-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_CircleCheckIcon, {
                                "stroke-width": "1.5",
                                size: "20",
                                class: "text-success"
                              }, null, _parent5, _scopeId4));
                              _push5(`<span class="text-subtitle-1 text-grey100 pl-2"${_scopeId4}>3 Periods per day</span></li><li class="mb-2 d-flex align-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_CircleCheckIcon, {
                                "stroke-width": "1.5",
                                size: "20",
                                class: "text-success"
                              }, null, _parent5, _scopeId4));
                              _push5(`<span class="text-subtitle-1 text-grey100 pl-2"${_scopeId4}>Included Documents</span></li><li class="mb-2 d-flex align-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_CircleCheckIcon, {
                                "stroke-width": "1.5",
                                size: "20",
                                class: "text-success"
                              }, null, _parent5, _scopeId4));
                              _push5(`<span class="text-subtitle-1 text-grey100 pl-2"${_scopeId4}>Free Books</span></li><li class="mb-2 d-flex align-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_CircleCheckIcon, {
                                "stroke-width": "1.5",
                                size: "20",
                                class: "text-success"
                              }, null, _parent5, _scopeId4));
                              _push5(`<span class="text-subtitle-1 text-grey100 pl-2"${_scopeId4}>Students Help Salary</span></li></ul><div class="d-flex align-center justify-space-between mb-2 mt-6"${_scopeId4}><h5 class="text-h6 text-grey100"${_scopeId4}>Days</h5><div class="text-subtitle-1 text-grey100"${_scopeId4}>75% Completed</div></div>`);
                              _push5(ssrRenderComponent(_component_v_progress_linear, {
                                "model-value": "75",
                                height: "7",
                                color: "primary",
                                "bg-color": "lightprimary",
                                rounded: ""
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="progress bg-light-primary mb-1"${_scopeId4}><div class="progress-bar bg-primary w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"${_scopeId4}></div></div><span class="text-subtitle-1 text-grey100"${_scopeId4}>4 days remaining</span><div class="d-grid w-100 mt-4 pt-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "primary",
                                class: "mt-4 mb-2"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Pay Full Salary`);
                                  } else {
                                    return [
                                      createTextVNode(" Pay Full Salary")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "mb-4 border-bottom pb-3" }, [
                                  createVNode("h5", { class: "text-h5 font-weight-semibold" }, "Salary Report")
                                ]),
                                createVNode("div", { class: "d-flex justify-space-between mt-12 w-100" }, [
                                  createVNode("div", { class: "text-subtitle-1 text-grey100 d-flex align-items-center" }, "Standard"),
                                  createVNode("div", { class: "d-flex align-items-center" }, [
                                    createVNode("div", { class: "d-flex justify-content-end" }, [
                                      createVNode("sup", { class: "text-h5 mt-3 text-primary mr-1" }, "$"),
                                      createVNode("h1", { class: "display-1 font-weight-light mb-0 text-primary" }, "50"),
                                      createVNode("sub", { class: "text-h4 mt-6 text-grey100 font-weight-regular" }, "/ month")
                                    ])
                                  ])
                                ]),
                                createVNode("ul", { class: "g-2 my-4" }, [
                                  createVNode("li", { class: "mb-2 d-flex align-center" }, [
                                    createVNode(_component_CircleCheckIcon, {
                                      "stroke-width": "1.5",
                                      size: "20",
                                      class: "text-success"
                                    }),
                                    createVNode("span", { class: "text-subtitle-1 text-grey100 pl-2" }, "3 Periods per day")
                                  ]),
                                  createVNode("li", { class: "mb-2 d-flex align-center" }, [
                                    createVNode(_component_CircleCheckIcon, {
                                      "stroke-width": "1.5",
                                      size: "20",
                                      class: "text-success"
                                    }),
                                    createVNode("span", { class: "text-subtitle-1 text-grey100 pl-2" }, "Included Documents")
                                  ]),
                                  createVNode("li", { class: "mb-2 d-flex align-center" }, [
                                    createVNode(_component_CircleCheckIcon, {
                                      "stroke-width": "1.5",
                                      size: "20",
                                      class: "text-success"
                                    }),
                                    createVNode("span", { class: "text-subtitle-1 text-grey100 pl-2" }, "Free Books")
                                  ]),
                                  createVNode("li", { class: "mb-2 d-flex align-center" }, [
                                    createVNode(_component_CircleCheckIcon, {
                                      "stroke-width": "1.5",
                                      size: "20",
                                      class: "text-success"
                                    }),
                                    createVNode("span", { class: "text-subtitle-1 text-grey100 pl-2" }, "Students Help Salary")
                                  ])
                                ]),
                                createVNode("div", { class: "d-flex align-center justify-space-between mb-2 mt-6" }, [
                                  createVNode("h5", { class: "text-h6 text-grey100" }, "Days"),
                                  createVNode("div", { class: "text-subtitle-1 text-grey100" }, "75% Completed")
                                ]),
                                createVNode(_component_v_progress_linear, {
                                  "model-value": "75",
                                  height: "7",
                                  color: "primary",
                                  "bg-color": "lightprimary",
                                  rounded: ""
                                }),
                                createVNode("div", { class: "progress bg-light-primary mb-1" }, [
                                  createVNode("div", {
                                    class: "progress-bar bg-primary w-75",
                                    role: "progressbar",
                                    "aria-valuenow": "75",
                                    "aria-valuemin": "0",
                                    "aria-valuemax": "100"
                                  })
                                ]),
                                createVNode("span", { class: "text-subtitle-1 text-grey100" }, "4 days remaining"),
                                createVNode("div", { class: "d-grid w-100 mt-4 pt-2" }, [
                                  createVNode(_component_v_btn, {
                                    color: "primary",
                                    class: "mt-4 mb-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Pay Full Salary")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_window_item, { value: "Skill" }, {
                            default: withCtx(() => [
                              createVNode("h5", { class: "text-h5 font-weight-semibold pb-3" }, "Teacher Skill"),
                              createVNode(_component_v_divider),
                              createVNode("div", { class: "border-table mt-5" }, [
                                createVNode(_component_v_table, { class: "month-table" }, {
                                  default: withCtx(() => [
                                    createVNode("thead", null, [
                                      createVNode("tr", null, [
                                        createVNode("th", { class: "text-h6 text-no-wrap" }, "Code"),
                                        createVNode("th", { class: "text-h6 text-no-wrap" }, "Subject Name"),
                                        createVNode("th", { class: "text-h6 text-no-wrap" }, "Marks"),
                                        createVNode("th", { class: "text-h6 text-no-wrap" }, "Grade")
                                      ])
                                    ]),
                                    createVNode("tbody", null, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(TeacherSkillData), (item) => {
                                        return openBlock(), createBlock("tr", {
                                          key: item.code,
                                          class: "month-item"
                                        }, [
                                          createVNode("td", null, [
                                            createVNode("h6", { class: "text-subtitle-1 font-weight-medium text-grey200" }, toDisplayString(item.code), 1)
                                          ]),
                                          createVNode("td", { class: "text-subtitle-1 font-weight-medium text-grey200 text-no-wrap mt-1" }, toDisplayString(item.sub), 1),
                                          createVNode("td", null, [
                                            createVNode("div", { class: "" }, [
                                              createVNode("div", { class: "text-subtitle-2 font-weight-medium text-grey200 mb-1" }, toDisplayString(item.marks), 1),
                                              createVNode(_component_v_progress_linear, {
                                                height: "7",
                                                color: item.statuscolor,
                                                "bg-color": "light" + item.statuscolor,
                                                rounded: "",
                                                "model-value": item.marks
                                              }, null, 8, ["color", "bg-color", "model-value"])
                                            ])
                                          ]),
                                          createVNode("td", {
                                            class: "text-subtitle-1 font-weight-semibold textSecondary text-no-wrap mt-1 text-" + item.statuscolor
                                          }, toDisplayString(item.grad), 3)
                                        ]);
                                      }), 128))
                                    ])
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_window_item, { value: "Salary" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-4 border-bottom pb-3" }, [
                                createVNode("h5", { class: "text-h5 font-weight-semibold" }, "Salary Report")
                              ]),
                              createVNode("div", { class: "d-flex justify-space-between mt-12 w-100" }, [
                                createVNode("div", { class: "text-subtitle-1 text-grey100 d-flex align-items-center" }, "Standard"),
                                createVNode("div", { class: "d-flex align-items-center" }, [
                                  createVNode("div", { class: "d-flex justify-content-end" }, [
                                    createVNode("sup", { class: "text-h5 mt-3 text-primary mr-1" }, "$"),
                                    createVNode("h1", { class: "display-1 font-weight-light mb-0 text-primary" }, "50"),
                                    createVNode("sub", { class: "text-h4 mt-6 text-grey100 font-weight-regular" }, "/ month")
                                  ])
                                ])
                              ]),
                              createVNode("ul", { class: "g-2 my-4" }, [
                                createVNode("li", { class: "mb-2 d-flex align-center" }, [
                                  createVNode(_component_CircleCheckIcon, {
                                    "stroke-width": "1.5",
                                    size: "20",
                                    class: "text-success"
                                  }),
                                  createVNode("span", { class: "text-subtitle-1 text-grey100 pl-2" }, "3 Periods per day")
                                ]),
                                createVNode("li", { class: "mb-2 d-flex align-center" }, [
                                  createVNode(_component_CircleCheckIcon, {
                                    "stroke-width": "1.5",
                                    size: "20",
                                    class: "text-success"
                                  }),
                                  createVNode("span", { class: "text-subtitle-1 text-grey100 pl-2" }, "Included Documents")
                                ]),
                                createVNode("li", { class: "mb-2 d-flex align-center" }, [
                                  createVNode(_component_CircleCheckIcon, {
                                    "stroke-width": "1.5",
                                    size: "20",
                                    class: "text-success"
                                  }),
                                  createVNode("span", { class: "text-subtitle-1 text-grey100 pl-2" }, "Free Books")
                                ]),
                                createVNode("li", { class: "mb-2 d-flex align-center" }, [
                                  createVNode(_component_CircleCheckIcon, {
                                    "stroke-width": "1.5",
                                    size: "20",
                                    class: "text-success"
                                  }),
                                  createVNode("span", { class: "text-subtitle-1 text-grey100 pl-2" }, "Students Help Salary")
                                ])
                              ]),
                              createVNode("div", { class: "d-flex align-center justify-space-between mb-2 mt-6" }, [
                                createVNode("h5", { class: "text-h6 text-grey100" }, "Days"),
                                createVNode("div", { class: "text-subtitle-1 text-grey100" }, "75% Completed")
                              ]),
                              createVNode(_component_v_progress_linear, {
                                "model-value": "75",
                                height: "7",
                                color: "primary",
                                "bg-color": "lightprimary",
                                rounded: ""
                              }),
                              createVNode("div", { class: "progress bg-light-primary mb-1" }, [
                                createVNode("div", {
                                  class: "progress-bar bg-primary w-75",
                                  role: "progressbar",
                                  "aria-valuenow": "75",
                                  "aria-valuemin": "0",
                                  "aria-valuemax": "100"
                                })
                              ]),
                              createVNode("span", { class: "text-subtitle-1 text-grey100" }, "4 days remaining"),
                              createVNode("div", { class: "d-grid w-100 mt-4 pt-2" }, [
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  class: "mt-4 mb-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Pay Full Salary")
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
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "justify-center" }, [
                      createVNode(_component_v_window, {
                        modelValue: tab.value,
                        "onUpdate:modelValue": ($event) => tab.value = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_window_item, { value: "Skill" }, {
                            default: withCtx(() => [
                              createVNode("h5", { class: "text-h5 font-weight-semibold pb-3" }, "Teacher Skill"),
                              createVNode(_component_v_divider),
                              createVNode("div", { class: "border-table mt-5" }, [
                                createVNode(_component_v_table, { class: "month-table" }, {
                                  default: withCtx(() => [
                                    createVNode("thead", null, [
                                      createVNode("tr", null, [
                                        createVNode("th", { class: "text-h6 text-no-wrap" }, "Code"),
                                        createVNode("th", { class: "text-h6 text-no-wrap" }, "Subject Name"),
                                        createVNode("th", { class: "text-h6 text-no-wrap" }, "Marks"),
                                        createVNode("th", { class: "text-h6 text-no-wrap" }, "Grade")
                                      ])
                                    ]),
                                    createVNode("tbody", null, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(TeacherSkillData), (item) => {
                                        return openBlock(), createBlock("tr", {
                                          key: item.code,
                                          class: "month-item"
                                        }, [
                                          createVNode("td", null, [
                                            createVNode("h6", { class: "text-subtitle-1 font-weight-medium text-grey200" }, toDisplayString(item.code), 1)
                                          ]),
                                          createVNode("td", { class: "text-subtitle-1 font-weight-medium text-grey200 text-no-wrap mt-1" }, toDisplayString(item.sub), 1),
                                          createVNode("td", null, [
                                            createVNode("div", { class: "" }, [
                                              createVNode("div", { class: "text-subtitle-2 font-weight-medium text-grey200 mb-1" }, toDisplayString(item.marks), 1),
                                              createVNode(_component_v_progress_linear, {
                                                height: "7",
                                                color: item.statuscolor,
                                                "bg-color": "light" + item.statuscolor,
                                                rounded: "",
                                                "model-value": item.marks
                                              }, null, 8, ["color", "bg-color", "model-value"])
                                            ])
                                          ]),
                                          createVNode("td", {
                                            class: "text-subtitle-1 font-weight-semibold textSecondary text-no-wrap mt-1 text-" + item.statuscolor
                                          }, toDisplayString(item.grad), 3)
                                        ]);
                                      }), 128))
                                    ])
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_window_item, { value: "Salary" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-4 border-bottom pb-3" }, [
                                createVNode("h5", { class: "text-h5 font-weight-semibold" }, "Salary Report")
                              ]),
                              createVNode("div", { class: "d-flex justify-space-between mt-12 w-100" }, [
                                createVNode("div", { class: "text-subtitle-1 text-grey100 d-flex align-items-center" }, "Standard"),
                                createVNode("div", { class: "d-flex align-items-center" }, [
                                  createVNode("div", { class: "d-flex justify-content-end" }, [
                                    createVNode("sup", { class: "text-h5 mt-3 text-primary mr-1" }, "$"),
                                    createVNode("h1", { class: "display-1 font-weight-light mb-0 text-primary" }, "50"),
                                    createVNode("sub", { class: "text-h4 mt-6 text-grey100 font-weight-regular" }, "/ month")
                                  ])
                                ])
                              ]),
                              createVNode("ul", { class: "g-2 my-4" }, [
                                createVNode("li", { class: "mb-2 d-flex align-center" }, [
                                  createVNode(_component_CircleCheckIcon, {
                                    "stroke-width": "1.5",
                                    size: "20",
                                    class: "text-success"
                                  }),
                                  createVNode("span", { class: "text-subtitle-1 text-grey100 pl-2" }, "3 Periods per day")
                                ]),
                                createVNode("li", { class: "mb-2 d-flex align-center" }, [
                                  createVNode(_component_CircleCheckIcon, {
                                    "stroke-width": "1.5",
                                    size: "20",
                                    class: "text-success"
                                  }),
                                  createVNode("span", { class: "text-subtitle-1 text-grey100 pl-2" }, "Included Documents")
                                ]),
                                createVNode("li", { class: "mb-2 d-flex align-center" }, [
                                  createVNode(_component_CircleCheckIcon, {
                                    "stroke-width": "1.5",
                                    size: "20",
                                    class: "text-success"
                                  }),
                                  createVNode("span", { class: "text-subtitle-1 text-grey100 pl-2" }, "Free Books")
                                ]),
                                createVNode("li", { class: "mb-2 d-flex align-center" }, [
                                  createVNode(_component_CircleCheckIcon, {
                                    "stroke-width": "1.5",
                                    size: "20",
                                    class: "text-success"
                                  }),
                                  createVNode("span", { class: "text-subtitle-1 text-grey100 pl-2" }, "Students Help Salary")
                                ])
                              ]),
                              createVNode("div", { class: "d-flex align-center justify-space-between mb-2 mt-6" }, [
                                createVNode("h5", { class: "text-h6 text-grey100" }, "Days"),
                                createVNode("div", { class: "text-subtitle-1 text-grey100" }, "75% Completed")
                              ]),
                              createVNode(_component_v_progress_linear, {
                                "model-value": "75",
                                height: "7",
                                color: "primary",
                                "bg-color": "lightprimary",
                                rounded: ""
                              }),
                              createVNode("div", { class: "progress bg-light-primary mb-1" }, [
                                createVNode("div", {
                                  class: "progress-bar bg-primary w-75",
                                  role: "progressbar",
                                  "aria-valuenow": "75",
                                  "aria-valuemin": "0",
                                  "aria-valuemax": "100"
                                })
                              ]),
                              createVNode("span", { class: "text-subtitle-1 text-grey100" }, "4 days remaining"),
                              createVNode("div", { class: "d-grid w-100 mt-4 pt-2" }, [
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  class: "mt-4 mb-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Pay Full Salary")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "justify-center" }, [
                    createVNode(_component_v_window, {
                      modelValue: tab.value,
                      "onUpdate:modelValue": ($event) => tab.value = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_window_item, { value: "Skill" }, {
                          default: withCtx(() => [
                            createVNode("h5", { class: "text-h5 font-weight-semibold pb-3" }, "Teacher Skill"),
                            createVNode(_component_v_divider),
                            createVNode("div", { class: "border-table mt-5" }, [
                              createVNode(_component_v_table, { class: "month-table" }, {
                                default: withCtx(() => [
                                  createVNode("thead", null, [
                                    createVNode("tr", null, [
                                      createVNode("th", { class: "text-h6 text-no-wrap" }, "Code"),
                                      createVNode("th", { class: "text-h6 text-no-wrap" }, "Subject Name"),
                                      createVNode("th", { class: "text-h6 text-no-wrap" }, "Marks"),
                                      createVNode("th", { class: "text-h6 text-no-wrap" }, "Grade")
                                    ])
                                  ]),
                                  createVNode("tbody", null, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(TeacherSkillData), (item) => {
                                      return openBlock(), createBlock("tr", {
                                        key: item.code,
                                        class: "month-item"
                                      }, [
                                        createVNode("td", null, [
                                          createVNode("h6", { class: "text-subtitle-1 font-weight-medium text-grey200" }, toDisplayString(item.code), 1)
                                        ]),
                                        createVNode("td", { class: "text-subtitle-1 font-weight-medium text-grey200 text-no-wrap mt-1" }, toDisplayString(item.sub), 1),
                                        createVNode("td", null, [
                                          createVNode("div", { class: "" }, [
                                            createVNode("div", { class: "text-subtitle-2 font-weight-medium text-grey200 mb-1" }, toDisplayString(item.marks), 1),
                                            createVNode(_component_v_progress_linear, {
                                              height: "7",
                                              color: item.statuscolor,
                                              "bg-color": "light" + item.statuscolor,
                                              rounded: "",
                                              "model-value": item.marks
                                            }, null, 8, ["color", "bg-color", "model-value"])
                                          ])
                                        ]),
                                        createVNode("td", {
                                          class: "text-subtitle-1 font-weight-semibold textSecondary text-no-wrap mt-1 text-" + item.statuscolor
                                        }, toDisplayString(item.grad), 3)
                                      ]);
                                    }), 128))
                                  ])
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_window_item, { value: "Salary" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-4 border-bottom pb-3" }, [
                              createVNode("h5", { class: "text-h5 font-weight-semibold" }, "Salary Report")
                            ]),
                            createVNode("div", { class: "d-flex justify-space-between mt-12 w-100" }, [
                              createVNode("div", { class: "text-subtitle-1 text-grey100 d-flex align-items-center" }, "Standard"),
                              createVNode("div", { class: "d-flex align-items-center" }, [
                                createVNode("div", { class: "d-flex justify-content-end" }, [
                                  createVNode("sup", { class: "text-h5 mt-3 text-primary mr-1" }, "$"),
                                  createVNode("h1", { class: "display-1 font-weight-light mb-0 text-primary" }, "50"),
                                  createVNode("sub", { class: "text-h4 mt-6 text-grey100 font-weight-regular" }, "/ month")
                                ])
                              ])
                            ]),
                            createVNode("ul", { class: "g-2 my-4" }, [
                              createVNode("li", { class: "mb-2 d-flex align-center" }, [
                                createVNode(_component_CircleCheckIcon, {
                                  "stroke-width": "1.5",
                                  size: "20",
                                  class: "text-success"
                                }),
                                createVNode("span", { class: "text-subtitle-1 text-grey100 pl-2" }, "3 Periods per day")
                              ]),
                              createVNode("li", { class: "mb-2 d-flex align-center" }, [
                                createVNode(_component_CircleCheckIcon, {
                                  "stroke-width": "1.5",
                                  size: "20",
                                  class: "text-success"
                                }),
                                createVNode("span", { class: "text-subtitle-1 text-grey100 pl-2" }, "Included Documents")
                              ]),
                              createVNode("li", { class: "mb-2 d-flex align-center" }, [
                                createVNode(_component_CircleCheckIcon, {
                                  "stroke-width": "1.5",
                                  size: "20",
                                  class: "text-success"
                                }),
                                createVNode("span", { class: "text-subtitle-1 text-grey100 pl-2" }, "Free Books")
                              ]),
                              createVNode("li", { class: "mb-2 d-flex align-center" }, [
                                createVNode(_component_CircleCheckIcon, {
                                  "stroke-width": "1.5",
                                  size: "20",
                                  class: "text-success"
                                }),
                                createVNode("span", { class: "text-subtitle-1 text-grey100 pl-2" }, "Students Help Salary")
                              ])
                            ]),
                            createVNode("div", { class: "d-flex align-center justify-space-between mb-2 mt-6" }, [
                              createVNode("h5", { class: "text-h6 text-grey100" }, "Days"),
                              createVNode("div", { class: "text-subtitle-1 text-grey100" }, "75% Completed")
                            ]),
                            createVNode(_component_v_progress_linear, {
                              "model-value": "75",
                              height: "7",
                              color: "primary",
                              "bg-color": "lightprimary",
                              rounded: ""
                            }),
                            createVNode("div", { class: "progress bg-light-primary mb-1" }, [
                              createVNode("div", {
                                class: "progress-bar bg-primary w-75",
                                role: "progressbar",
                                "aria-valuenow": "75",
                                "aria-valuemin": "0",
                                "aria-valuemax": "100"
                              })
                            ]),
                            createVNode("span", { class: "text-subtitle-1 text-grey100" }, "4 days remaining"),
                            createVNode("div", { class: "d-grid w-100 mt-4 pt-2" }, [
                              createVNode(_component_v_btn, {
                                color: "primary",
                                class: "mt-4 mb-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Pay Full Salary")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
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
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/school-pages/teachers/TeacherSkills.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Teacher Details" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Teacher Details",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$3, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              lg: "8"
            }, {
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
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                lg: "8"
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
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/school-pages/teachers/details/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cg1C61F2.mjs.map
