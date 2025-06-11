import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext, defineComponent, unref, createBlock, openBlock, Fragment, renderList, toDisplayString, ref } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc, R as user2 } from "../server.mjs";
import { P as ProgressReportData } from "./detail_tables-DaSOttKS.js";
import { _ as _sfc_main$3 } from "./BaseBreadcrumb-DAIjkUfv.js";
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
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_avatar = resolveComponent("v-avatar");
  const _component_v_chip = resolveComponent("v-chip");
  const _component_CheckIcon = resolveComponent("CheckIcon");
  const _component_CpuIcon = resolveComponent("CpuIcon");
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
              _push3(`<h5 class="text-h5 mt-3 mb-1"${_scopeId2}>Violet Mendoza</h5>`);
              _push3(ssrRenderComponent(_component_v_chip, {
                size: "small",
                color: "primary"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Student `);
                  } else {
                    return [
                      createTextVNode(" Student ")
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
              _push3(`<div class="ms-3"${_scopeId2}><p class="text-h5 mb-1"${_scopeId2}>568</p><p class="text-subtitle-1 text-grey100"${_scopeId2}>Projects Done</p></div></div></div><div class="mt-12"${_scopeId2}><div class="pb-1 mb-2 border-bottom pb-3"${_scopeId2}><h6 class="text-subtitle-1 font-weight-semibold"${_scopeId2}>Details</h6></div><div${_scopeId2}><div class="py-3"${_scopeId2}><p class="text-subtitle-1 font-weight-semibold mb-0"${_scopeId2}> Name: <span class="text-subtitle-1 text-grey100 ms-1"${_scopeId2}>Violet Mendoza</span></p></div><div class="py-3"${_scopeId2}><p class="text-subtitle-1 font-weight-semibold mb-0"${_scopeId2}> Class: <span class="text-subtitle-1 text-grey100 ms-1"${_scopeId2}>12</span></p></div><div class="py-3"${_scopeId2}><p class="text-subtitle-1 font-weight-semibold mb-0"${_scopeId2}> Section: <span class="text-subtitle-1 text-grey100 ms-1"${_scopeId2}>B</span></p></div><div class="py-3"${_scopeId2}><p class="text-subtitle-1 font-weight-semibold mb-0"${_scopeId2}> Date Of Birth: <span class="text-subtitle-1 text-grey100 ms-1"${_scopeId2}>12/12/2002</span></p></div><div class="py-3"${_scopeId2}><p class="text-subtitle-1 font-weight-semibold mb-0"${_scopeId2}> Parents : <span class="text-subtitle-1 text-grey100 ms-1"${_scopeId2}>Joshi David</span></p></div><div class="py-3"${_scopeId2}><p class="text-subtitle-1 font-weight-semibold mb-0"${_scopeId2}> Phone: <span class="text-subtitle-1 text-grey100 ms-1"${_scopeId2}>+ 123 9988568</span></p></div><div class="py-3"${_scopeId2}><p class="text-subtitle-1 font-weight-semibold mb-0"${_scopeId2}> Email: <span class="text-subtitle-1 text-grey100 ms-1"${_scopeId2}>davidzonar@gmail.com</span></p></div></div></div>`);
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
                    createVNode("h5", { class: "text-h5 mt-3 mb-1" }, "Violet Mendoza"),
                    createVNode(_component_v_chip, {
                      size: "small",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Student ")
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
                        createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "Violet Mendoza")
                      ])
                    ]),
                    createVNode("div", { class: "py-3" }, [
                      createVNode("p", { class: "text-subtitle-1 font-weight-semibold mb-0" }, [
                        createTextVNode(" Class: "),
                        createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "12")
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
                        createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "12/12/2002")
                      ])
                    ]),
                    createVNode("div", { class: "py-3" }, [
                      createVNode("p", { class: "text-subtitle-1 font-weight-semibold mb-0" }, [
                        createTextVNode(" Parents : "),
                        createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "Joshi David")
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
                        createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "davidzonar@gmail.com")
                      ])
                    ])
                  ])
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
                  createVNode("h5", { class: "text-h5 mt-3 mb-1" }, "Violet Mendoza"),
                  createVNode(_component_v_chip, {
                    size: "small",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Student ")
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
                      createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "Violet Mendoza")
                    ])
                  ]),
                  createVNode("div", { class: "py-3" }, [
                    createVNode("p", { class: "text-subtitle-1 font-weight-semibold mb-0" }, [
                      createTextVNode(" Class: "),
                      createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "12")
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
                      createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "12/12/2002")
                    ])
                  ]),
                  createVNode("div", { class: "py-3" }, [
                    createVNode("p", { class: "text-subtitle-1 font-weight-semibold mb-0" }, [
                      createTextVNode(" Parents : "),
                      createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "Joshi David")
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
                      createVNode("span", { class: "text-subtitle-1 text-grey100 ms-1" }, "davidzonar@gmail.com")
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/school-pages/exam/StudentProfile.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const StudentProfile = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProgressReport",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_progress_linear = resolveComponent("v-progress-linear");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5 font-weight-semibold"${_scopeId2}>Progress Report</h5><div class="border-table mt-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_table, { class: "month-table" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<thead${_scopeId3}><tr${_scopeId3}><th class="text-h6 text-no-wrap"${_scopeId3}>Code</th><th class="text-h6 text-no-wrap"${_scopeId3}>Subject Name</th><th class="text-h6 text-no-wrap"${_scopeId3}>Marks</th><th class="text-h6 text-no-wrap"${_scopeId3}>Grade</th><th class="text-h6 text-no-wrap"${_scopeId3}>Remarks</th></tr></thead><tbody${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(ProgressReportData), (item) => {
                          _push4(`<tr class="month-item"${_scopeId3}><td${_scopeId3}><h6 class="text-subtitle-1 font-weight-medium text-grey200"${_scopeId3}>${ssrInterpolate(item.code)}</h6></td><td class="text-subtitle-1 font-weight-medium text-grey200 text-no-wrap mt-1"${_scopeId3}>${ssrInterpolate(item.sub)}</td><td${_scopeId3}><div class=""${_scopeId3}><div class="text-subtitle-2 font-weight-medium text-grey200 mb-1"${_scopeId3}>${ssrInterpolate(item.marks)}</div>`);
                          _push4(ssrRenderComponent(_component_v_progress_linear, {
                            height: "7",
                            color: item.statuscolor,
                            "bg-color": "light" + item.statuscolor,
                            rounded: "",
                            "model-value": item.marks
                          }, null, _parent4, _scopeId3));
                          _push4(`</div></td><td class="${ssrRenderClass(
                            "text-subtitle-1 font-weight-semibold  text-no-wrap mt-1 text-" + item.statuscolor
                          )}"${_scopeId3}>${ssrInterpolate(item.grad)}</td><td class="${ssrRenderClass(
                            "text-subtitle-1 font-weight-semibold  text-no-wrap mt-1 text-" + item.remarkcolor
                          )}"${_scopeId3}>${ssrInterpolate(item.remarks)}</td></tr>`);
                        });
                        _push4(`<!--]--></tbody>`);
                      } else {
                        return [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "text-h6 text-no-wrap" }, "Code"),
                              createVNode("th", { class: "text-h6 text-no-wrap" }, "Subject Name"),
                              createVNode("th", { class: "text-h6 text-no-wrap" }, "Marks"),
                              createVNode("th", { class: "text-h6 text-no-wrap" }, "Grade"),
                              createVNode("th", { class: "text-h6 text-no-wrap" }, "Remarks")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(ProgressReportData), (item) => {
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
                                  class: "text-subtitle-1 font-weight-semibold  text-no-wrap mt-1 text-" + item.statuscolor
                                }, toDisplayString(item.grad), 3),
                                createVNode("td", {
                                  class: "text-subtitle-1 font-weight-semibold  text-no-wrap mt-1 text-" + item.remarkcolor
                                }, toDisplayString(item.remarks), 3)
                              ]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("h5", { class: "text-h5 font-weight-semibold" }, "Progress Report"),
                    createVNode("div", { class: "border-table mt-5" }, [
                      createVNode(_component_v_table, { class: "month-table" }, {
                        default: withCtx(() => [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "text-h6 text-no-wrap" }, "Code"),
                              createVNode("th", { class: "text-h6 text-no-wrap" }, "Subject Name"),
                              createVNode("th", { class: "text-h6 text-no-wrap" }, "Marks"),
                              createVNode("th", { class: "text-h6 text-no-wrap" }, "Grade"),
                              createVNode("th", { class: "text-h6 text-no-wrap" }, "Remarks")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(ProgressReportData), (item) => {
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
                                  class: "text-subtitle-1 font-weight-semibold  text-no-wrap mt-1 text-" + item.statuscolor
                                }, toDisplayString(item.grad), 3),
                                createVNode("td", {
                                  class: "text-subtitle-1 font-weight-semibold  text-no-wrap mt-1 text-" + item.remarkcolor
                                }, toDisplayString(item.remarks), 3)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h5 font-weight-semibold" }, "Progress Report"),
                  createVNode("div", { class: "border-table mt-5" }, [
                    createVNode(_component_v_table, { class: "month-table" }, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", { class: "text-h6 text-no-wrap" }, "Code"),
                            createVNode("th", { class: "text-h6 text-no-wrap" }, "Subject Name"),
                            createVNode("th", { class: "text-h6 text-no-wrap" }, "Marks"),
                            createVNode("th", { class: "text-h6 text-no-wrap" }, "Grade"),
                            createVNode("th", { class: "text-h6 text-no-wrap" }, "Remarks")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(ProgressReportData), (item) => {
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
                                class: "text-subtitle-1 font-weight-semibold  text-no-wrap mt-1 text-" + item.statuscolor
                              }, toDisplayString(item.grad), 3),
                              createVNode("td", {
                                class: "text-subtitle-1 font-weight-semibold  text-no-wrap mt-1 text-" + item.remarkcolor
                              }, toDisplayString(item.remarks), 3)
                            ]);
                          }), 128))
                        ])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/school-pages/exam/ProgressReport.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Exam Results Details" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Exam Results Details",
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
                  _push3(ssrRenderComponent(StudentProfile, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(StudentProfile)
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
                  createVNode(StudentProfile)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/school-pages/exam/result-details/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-G_1_77KS.js.map
