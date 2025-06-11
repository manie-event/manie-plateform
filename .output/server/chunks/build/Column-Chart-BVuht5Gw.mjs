import { _ as __nuxt_component_0 } from './client-only-Bwxzq3Sq.mjs';
import { defineComponent, ref, computed, resolveComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { g as getPrimary, a as getSecondary } from './UpdateColors-BuecEAty.mjs';
import { _ as _sfc_main$1 } from './BaseBreadcrumb-DAIjkUfv.mjs';
import { _ as _sfc_main$2 } from './UiParentCard-DhlYzLUl.mjs';
import { q as useTheme } from './server.mjs';
import './customizer-CM6PVnj3.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Column-Chart",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Column Chart" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "#"
      },
      {
        text: "Column Chart",
        disabled: true,
        href: "#"
      }
    ]);
    useTheme();
    const chartOptions = computed(() => {
      return {
        chart: {
          type: "bar",
          height: 350,
          fontFamily: `inherit`,
          foreColor: "#a1aab2",
          toolbar: {
            show: false
          }
        },
        colors: ["rgba(var(--v-theme-error))", getPrimary.value, getSecondary.value],
        plotOptions: {
          bar: {
            horizontal: false,
            endingShape: "rounded",
            columnWidth: "20%"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        xaxis: {
          categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
        },
        yaxis: {
          title: {
            text: "$ (thousands)"
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          theme: "dark",
          y: {
            formatter(val) {
              return `$ ${val} thousands`;
            }
          }
        },
        grid: {
          show: false
        },
        legend: {
          show: true,
          position: "bottom",
          width: "50px"
        },
        responsive: [
          {
            breakpoint: 600,
            options: {
              yaxis: {
                show: false
              }
            }
          }
        ]
      };
    });
    const columnChart = {
      series: [
        {
          name: "Desktop",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Mobile",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Other",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
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
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "Column Chart" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ClientOnly, null, {}, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_apexchart, {
                                type: "bar",
                                height: "300",
                                options: chartOptions.value,
                                series: columnChart.series
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
                    createVNode(_sfc_main$2, { title: "Column Chart" }, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_apexchart, {
                              type: "bar",
                              height: "300",
                              options: chartOptions.value,
                              series: columnChart.series
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
                  createVNode(_sfc_main$2, { title: "Column Chart" }, {
                    default: withCtx(() => [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_apexchart, {
                            type: "bar",
                            height: "300",
                            options: chartOptions.value,
                            series: columnChart.series
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/charts/Column-Chart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Column-Chart-BVuht5Gw.mjs.map
