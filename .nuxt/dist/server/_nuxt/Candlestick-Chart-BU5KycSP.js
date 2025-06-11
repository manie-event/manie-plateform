import { _ as __nuxt_component_0 } from "./client-only-Bwxzq3Sq.js";
import { defineComponent, ref, computed, resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { a as getSecondary, g as getPrimary } from "./UpdateColors-BuecEAty.js";
import { _ as _sfc_main$1 } from "./BaseBreadcrumb-DAIjkUfv.js";
import { _ as _sfc_main$2 } from "./UiParentCard-DhlYzLUl.js";
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
  __name: "Candlestick-Chart",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Candlestick Chart" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "#"
      },
      {
        text: "Candlestick Chart",
        disabled: true,
        href: "#"
      }
    ]);
    const chartOptions = computed(() => {
      return {
        chart: {
          type: "candlestick",
          height: 350,
          offsetX: -5,
          fontFamily: `inherit`,
          foreColor: "#a1aab2"
        },
        forecastDataPoints: {
          count: 7
        },
        colors: [getPrimary.value, getSecondary.value],
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2,
          curve: "smooth"
        },
        xaxis: {
          type: "datetime",
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        title: {
          style: {
            fontSize: "16px",
            color: "#666"
          }
        },
        grid: {
          borderColor: "rgba(var(--v-theme-borderColor))"
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: getPrimary.value,
              downward: getSecondary.value
            },
            wick: {
              useFillColor: true
            }
          }
        }
      };
    });
    const candlestick = {
      series: [
        {
          data: [
            {
              x: /* @__PURE__ */ new Date(15387786e5),
              y: [6629.81, 6650.5, 6623.04, 6633.33]
            },
            {
              x: /* @__PURE__ */ new Date(15387804e5),
              y: [6632.01, 6643.59, 6620, 6630.11]
            },
            {
              x: /* @__PURE__ */ new Date(15387822e5),
              y: [6630.71, 6648.95, 6623.34, 6635.65]
            },
            {
              x: /* @__PURE__ */ new Date(1538784e6),
              y: [6635.65, 6651, 6629.67, 6638.24]
            },
            {
              x: /* @__PURE__ */ new Date(15387858e5),
              y: [6638.24, 6640, 6620, 6624.47]
            },
            {
              x: /* @__PURE__ */ new Date(15387876e5),
              y: [6624.53, 6636.03, 6621.68, 6624.31]
            },
            {
              x: /* @__PURE__ */ new Date(15387894e5),
              y: [6624.61, 6632.2, 6617, 6626.02]
            },
            {
              x: /* @__PURE__ */ new Date(15387912e5),
              y: [6627, 6627.62, 6584.22, 6603.02]
            },
            {
              x: /* @__PURE__ */ new Date(1538793e6),
              y: [6605, 6608.03, 6598.95, 6604.01]
            },
            {
              x: /* @__PURE__ */ new Date(15387948e5),
              y: [6604.5, 6614.4, 6602.26, 6608.02]
            },
            {
              x: /* @__PURE__ */ new Date(15387966e5),
              y: [6608.02, 6610.68, 6601.99, 6608.91]
            },
            {
              x: /* @__PURE__ */ new Date(15387984e5),
              y: [6608.91, 6618.99, 6608.01, 6612]
            },
            {
              x: /* @__PURE__ */ new Date(15388002e5),
              y: [6612, 6615.13, 6605.09, 6612]
            },
            {
              x: /* @__PURE__ */ new Date(1538802e6),
              y: [6612, 6624.12, 6608.43, 6622.95]
            },
            {
              x: /* @__PURE__ */ new Date(15388038e5),
              y: [6623.91, 6623.91, 6615, 6615.67]
            },
            {
              x: /* @__PURE__ */ new Date(15388056e5),
              y: [6618.69, 6618.74, 6610, 6610.4]
            },
            {
              x: /* @__PURE__ */ new Date(15388074e5),
              y: [6611, 6622.78, 6610.4, 6614.9]
            },
            {
              x: /* @__PURE__ */ new Date(15388092e5),
              y: [6614.9, 6626.2, 6613.33, 6623.45]
            },
            {
              x: /* @__PURE__ */ new Date(1538811e6),
              y: [6623.48, 6627, 6618.38, 6620.35]
            },
            {
              x: /* @__PURE__ */ new Date(15388128e5),
              y: [6619.43, 6620.35, 6610.05, 6615.53]
            },
            {
              x: /* @__PURE__ */ new Date(15388146e5),
              y: [6615.53, 6617.93, 6610, 6615.19]
            },
            {
              x: /* @__PURE__ */ new Date(15388164e5),
              y: [6615.19, 6621.6, 6608.2, 6620]
            },
            {
              x: /* @__PURE__ */ new Date(15388182e5),
              y: [6619.54, 6625.17, 6614.15, 6620]
            },
            {
              x: /* @__PURE__ */ new Date(153882e7),
              y: [6620.33, 6634.15, 6617.24, 6624.61]
            },
            {
              x: /* @__PURE__ */ new Date(15388218e5),
              y: [6625.95, 6626, 6611.66, 6617.58]
            },
            {
              x: /* @__PURE__ */ new Date(15388236e5),
              y: [6619, 6625.97, 6595.27, 6598.86]
            },
            {
              x: /* @__PURE__ */ new Date(15388254e5),
              y: [6598.86, 6598.88, 6570, 6587.16]
            },
            {
              x: /* @__PURE__ */ new Date(15388272e5),
              y: [6588.86, 6600, 6580, 6593.4]
            },
            {
              x: /* @__PURE__ */ new Date(1538829e6),
              y: [6593.99, 6598.89, 6585, 6587.81]
            },
            {
              x: /* @__PURE__ */ new Date(15388308e5),
              y: [6587.81, 6592.73, 6567.14, 6578]
            },
            {
              x: /* @__PURE__ */ new Date(15388326e5),
              y: [6578.35, 6581.72, 6567.39, 6579]
            },
            {
              x: /* @__PURE__ */ new Date(15388344e5),
              y: [6579.38, 6580.92, 6566.77, 6575.96]
            },
            {
              x: /* @__PURE__ */ new Date(15388362e5),
              y: [6575.96, 6589, 6571.77, 6588.92]
            },
            {
              x: /* @__PURE__ */ new Date(1538838e6),
              y: [6588.92, 6594, 6577.55, 6589.22]
            },
            {
              x: /* @__PURE__ */ new Date(15388398e5),
              y: [6589.3, 6598.89, 6589.1, 6596.08]
            },
            {
              x: /* @__PURE__ */ new Date(15388416e5),
              y: [6597.5, 6600, 6588.39, 6596.25]
            },
            {
              x: /* @__PURE__ */ new Date(15388434e5),
              y: [6598.03, 6600, 6588.73, 6595.97]
            },
            {
              x: /* @__PURE__ */ new Date(15388452e5),
              y: [6595.97, 6602.01, 6588.17, 6602]
            },
            {
              x: /* @__PURE__ */ new Date(1538847e6),
              y: [6602, 6607, 6596.51, 6599.95]
            },
            {
              x: /* @__PURE__ */ new Date(15388488e5),
              y: [6600.63, 6601.21, 6590.39, 6591.02]
            },
            {
              x: /* @__PURE__ */ new Date(15388506e5),
              y: [6591.02, 6603.08, 6591, 6591]
            },
            {
              x: /* @__PURE__ */ new Date(15388524e5),
              y: [6591, 6601.32, 6585, 6592]
            },
            {
              x: /* @__PURE__ */ new Date(15388542e5),
              y: [6593.13, 6596.01, 6590, 6593.34]
            },
            {
              x: /* @__PURE__ */ new Date(1538856e6),
              y: [6593.34, 6604.76, 6582.63, 6593.86]
            },
            {
              x: /* @__PURE__ */ new Date(15388578e5),
              y: [6593.86, 6604.28, 6586.57, 6600.01]
            },
            {
              x: /* @__PURE__ */ new Date(15388596e5),
              y: [6601.81, 6603.21, 6592.78, 6596.25]
            },
            {
              x: /* @__PURE__ */ new Date(15388614e5),
              y: [6596.25, 6604.2, 6590, 6602.99]
            },
            {
              x: /* @__PURE__ */ new Date(15388632e5),
              y: [6602.99, 6606, 6584.99, 6587.81]
            },
            {
              x: /* @__PURE__ */ new Date(1538865e6),
              y: [6587.81, 6595, 6583.27, 6591.96]
            },
            {
              x: /* @__PURE__ */ new Date(15388668e5),
              y: [6591.97, 6596.07, 6585, 6588.39]
            },
            {
              x: /* @__PURE__ */ new Date(15388686e5),
              y: [6587.6, 6598.21, 6587.6, 6594.27]
            },
            {
              x: /* @__PURE__ */ new Date(15388704e5),
              y: [6596.44, 6601, 6590, 6596.55]
            },
            {
              x: /* @__PURE__ */ new Date(15388722e5),
              y: [6598.91, 6605, 6596.61, 6600.02]
            },
            {
              x: /* @__PURE__ */ new Date(1538874e6),
              y: [6600.55, 6605, 6589.14, 6593.01]
            },
            {
              x: /* @__PURE__ */ new Date(15388758e5),
              y: [6593.15, 6605, 6592, 6603.06]
            },
            {
              x: /* @__PURE__ */ new Date(15388776e5),
              y: [6603.07, 6604.5, 6599.09, 6603.89]
            },
            {
              x: /* @__PURE__ */ new Date(15388794e5),
              y: [6604.44, 6604.44, 6600, 6603.5]
            },
            {
              x: /* @__PURE__ */ new Date(15388812e5),
              y: [6603.5, 6603.99, 6597.5, 6603.86]
            },
            {
              x: /* @__PURE__ */ new Date(1538883e6),
              y: [6603.85, 6605, 6600, 6604.07]
            },
            {
              x: /* @__PURE__ */ new Date(15388848e5),
              y: [6604.98, 6606, 6604.07, 6606]
            }
          ]
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
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "Candlestick Chart" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ClientOnly, null, {}, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_apexchart, {
                                type: "candlestick",
                                height: "350",
                                options: chartOptions.value,
                                series: candlestick.series
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
                    createVNode(_sfc_main$2, { title: "Candlestick Chart" }, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_apexchart, {
                              type: "candlestick",
                              height: "350",
                              options: chartOptions.value,
                              series: candlestick.series
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
                  createVNode(_sfc_main$2, { title: "Candlestick Chart" }, {
                    default: withCtx(() => [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_apexchart, {
                            type: "candlestick",
                            height: "350",
                            options: chartOptions.value,
                            series: candlestick.series
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/charts/Candlestick-Chart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Candlestick-Chart-BU5KycSP.js.map
