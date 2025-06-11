import { _ as __nuxt_component_0 } from "./client-only-Bwxzq3Sq.js";
import { defineComponent, ref, computed, resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./BaseBreadcrumb-DAIjkUfv.js";
import { _ as _sfc_main$2 } from "./UiParentCard-DhlYzLUl.js";
import { g as getPrimary, a as getSecondary } from "./UpdateColors-BuecEAty.js";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
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
import "./customizer-CM6PVnj3.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Line-Chart",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Line Chart" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Line Chart",
        disabled: true,
        href: "#"
      }
    ]);
    const chartOptions = computed(() => {
      return {
        chart: {
          height: 350,
          type: "line",
          fontFamily: `inherit`,
          zoom: {
            type: "x",
            enabled: true
          },
          toolbar: {
            show: false
          },
          shadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 1
          }
        },
        colors: [getPrimary.value, getSecondary.value],
        markers: {
          size: 1
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          title: {
            text: "Month"
          }
        },
        grid: {
          show: false
        },
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: "straight",
          width: "2"
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5
        },
        tooltip: {
          theme: "dark",
          x: {
            format: "dd/MM/yy HH:mm"
          }
        }
      };
    });
    const lineChart = {
      series: [
        {
          name: "High - 2013",
          data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
          name: "Low - 2013",
          data: [12, 11, 14, 18, 17, 13, 13]
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_ClientOnly = __nuxt_component_0;
      const _component_apexchart = resolveComponent("apexchart");
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
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "Line Chart" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ClientOnly, null, {}, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_apexchart, {
                                type: "line",
                                height: "350",
                                options: chartOptions.value,
                                series: lineChart.series
                              }, null, 8, ["options", "series"])
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
                    createVNode(_sfc_main$2, { title: "Line Chart" }, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_apexchart, {
                              type: "line",
                              height: "350",
                              options: chartOptions.value,
                              series: lineChart.series
                            }, null, 8, ["options", "series"])
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
                  createVNode(_sfc_main$2, { title: "Line Chart" }, {
                    default: withCtx(() => [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_apexchart, {
                            type: "line",
                            height: "350",
                            options: chartOptions.value,
                            series: lineChart.series
                          }, null, 8, ["options", "series"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/charts/Line-Chart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Line-Chart-B1AgEQXo.js.map
