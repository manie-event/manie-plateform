import { defineComponent, ref, resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./BaseBreadcrumb-DAIjkUfv.js";
import { _ as _sfc_main$2 } from "./UiParentCard-DhlYzLUl.js";
import FullCalendar from "./FullCalender-D63TTNjM.js";
import { f as useDate } from "../server.mjs";
import "@fullcalendar/vue3";
import "@fullcalendar/daygrid";
import "@fullcalendar/timegrid";
import "@fullcalendar/interaction";
import "date-fns";
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
import "lodash";
import "vue-draggable-next";
import "vue3-easy-data-table";
import "vue-easy-lightbox";
import "vue-scrollto";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const date = ref(/* @__PURE__ */ new Date());
    const seldate = ref(/* @__PURE__ */ new Date("2018-03-02"));
    const adapter = useDate();
    function allowedDates(val) {
      return parseInt(adapter.toISO(val).split("-")[2], 10) % 2 === 0;
    }
    const page = ref({ title: "Calendar" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "#"
      },
      {
        text: "Calendar",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_date_picker = resolveComponent("v-date-picker");
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
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "Full Calender" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(FullCalendar, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(FullCalendar)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2, { title: "Full Calender" }, {
                      default: withCtx(() => [
                        createVNode(FullCalendar)
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
              lg: "4",
              sm: "12"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "Calendar with Date" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_date_picker, {
                          color: "primary",
                          modelValue: date.value,
                          "onUpdate:modelValue": ($event) => date.value = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_date_picker, {
                            color: "primary",
                            modelValue: date.value,
                            "onUpdate:modelValue": ($event) => date.value = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2, { title: "Calendar with Date" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_date_picker, {
                          color: "primary",
                          modelValue: date.value,
                          "onUpdate:modelValue": ($event) => date.value = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
              lg: "4",
              sm: "12"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "Calendar with Sibling Month" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_date_picker, {
                          color: "primary",
                          "show-adjacent-months": "",
                          modelValue: date.value,
                          "onUpdate:modelValue": ($event) => date.value = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_date_picker, {
                            color: "primary",
                            "show-adjacent-months": "",
                            modelValue: date.value,
                            "onUpdate:modelValue": ($event) => date.value = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2, { title: "Calendar with Sibling Month" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_date_picker, {
                          color: "primary",
                          "show-adjacent-months": "",
                          modelValue: date.value,
                          "onUpdate:modelValue": ($event) => date.value = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
              lg: "4",
              sm: "12"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "Calendar with Allowed Dates" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_date_picker, {
                          color: "primary",
                          modelValue: seldate.value,
                          "onUpdate:modelValue": ($event) => seldate.value = $event,
                          "allowed-dates": allowedDates,
                          min: "2016-06-15",
                          max: "2018-03-20"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_date_picker, {
                            color: "primary",
                            modelValue: seldate.value,
                            "onUpdate:modelValue": ($event) => seldate.value = $event,
                            "allowed-dates": allowedDates,
                            min: "2016-06-15",
                            max: "2018-03-20"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2, { title: "Calendar with Allowed Dates" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_date_picker, {
                          color: "primary",
                          modelValue: seldate.value,
                          "onUpdate:modelValue": ($event) => seldate.value = $event,
                          "allowed-dates": allowedDates,
                          min: "2016-06-15",
                          max: "2018-03-20"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  createVNode(_sfc_main$2, { title: "Full Calender" }, {
                    default: withCtx(() => [
                      createVNode(FullCalendar)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                lg: "4",
                sm: "12"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2, { title: "Calendar with Date" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_date_picker, {
                        color: "primary",
                        modelValue: date.value,
                        "onUpdate:modelValue": ($event) => date.value = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                lg: "4",
                sm: "12"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2, { title: "Calendar with Sibling Month" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_date_picker, {
                        color: "primary",
                        "show-adjacent-months": "",
                        modelValue: date.value,
                        "onUpdate:modelValue": ($event) => date.value = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                lg: "4",
                sm: "12"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2, { title: "Calendar with Allowed Dates" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_date_picker, {
                        color: "primary",
                        modelValue: seldate.value,
                        "onUpdate:modelValue": ($event) => seldate.value = $event,
                        "allowed-dates": allowedDates,
                        min: "2016-06-15",
                        max: "2018-03-20"
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
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/calendar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-D4viUK86.js.map
