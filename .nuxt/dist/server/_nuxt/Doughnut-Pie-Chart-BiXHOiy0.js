import { _ as __nuxt_component_0 } from "./client-only-Bwxzq3Sq.js";
import { defineComponent, ref, computed, resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./BaseBreadcrumb-DAIjkUfv.js";
import { _ as _sfc_main$2 } from "./UiParentCard-DhlYzLUl.js";
import { q as useTheme } from "../server.mjs";
import "hookable";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Doughnut-Pie-Chart",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Doughnut Chart" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "#"
      },
      {
        text: "Doughnut Chart",
        disabled: true,
        href: "#"
      }
    ]);
    useTheme();
    const donutchartOptions = computed(() => {
      return {
        chart: {
          type: "donut",
          height: 300,
          fontFamily: `inherit`,
          foreColor: "#adb0bb"
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          pie: {
            donut: {
              size: "70px"
            }
          }
        },
        stroke: {
          width: 2,
          colors: "rgba(var(--v-theme-surface))"
        },
        legend: {
          show: true,
          position: "bottom",
          width: "50px"
        },
        colors: [
          "rgba(var(--v-theme-info))",
          "rgba(var(--v-theme-primary))",
          "rgba(var(--v-theme-error))",
          "rgba(var(--v-theme-success))",
          "rgba(var(--v-theme-warning ))"
        ],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };
    });
    const donutChart = {
      series: [44, 55, 41, 17, 15]
    };
    const piechartOptions = computed(() => {
      return {
        chart: {
          type: "pie",
          height: 300,
          fontFamily: `inherit`,
          foreColor: "#adb0bb",
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          pie: {
            donut: {
              size: "70px"
            }
          }
        },
        legend: {
          show: true,
          position: "bottom",
          width: "50px"
        },
        colors: [
          "rgba(var(--v-theme-info))",
          "rgba(var(--v-theme-primary))",
          "rgba(var(--v-theme-error))",
          "rgba(var(--v-theme-success))",
          "rgba(var(--v-theme-warning ))"
        ],
        tooltip: {
          fillSeriesColor: false
        },
        stroke: {
          width: 2,
          colors: "rgba(var(--v-theme-surface))"
        },
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };
    });
    const pieChart = {
      series: [44, 55, 13, 43, 22]
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
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          lg: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$2, { title: "Donut Chart" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ClientOnly, null, {}, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ClientOnly, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_apexchart, {
                                            type: "donut",
                                            height: "300",
                                            options: donutchartOptions.value,
                                            series: donutChart.series
                                          }, null, 8, ["options", "series"])
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
                                createVNode(_sfc_main$2, { title: "Donut Chart" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ClientOnly, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_apexchart, {
                                          type: "donut",
                                          height: "300",
                                          options: donutchartOptions.value,
                                          series: donutChart.series
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          lg: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$2, { title: "Pie Chart" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ClientOnly, null, {}, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ClientOnly, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_apexchart, {
                                            type: "pie",
                                            height: "300",
                                            options: piechartOptions.value,
                                            series: pieChart.series
                                          }, null, 8, ["options", "series"])
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
                                createVNode(_sfc_main$2, { title: "Pie Chart" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ClientOnly, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_apexchart, {
                                          type: "pie",
                                          height: "300",
                                          options: piechartOptions.value,
                                          series: pieChart.series
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2, { title: "Donut Chart" }, {
                                default: withCtx(() => [
                                  createVNode(_component_ClientOnly, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_apexchart, {
                                        type: "donut",
                                        height: "300",
                                        options: donutchartOptions.value,
                                        series: donutChart.series
                                      }, null, 8, ["options", "series"])
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
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2, { title: "Pie Chart" }, {
                                default: withCtx(() => [
                                  createVNode(_component_ClientOnly, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_apexchart, {
                                        type: "pie",
                                        height: "300",
                                        options: piechartOptions.value,
                                        series: pieChart.series
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          lg: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2, { title: "Donut Chart" }, {
                              default: withCtx(() => [
                                createVNode(_component_ClientOnly, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_apexchart, {
                                      type: "donut",
                                      height: "300",
                                      options: donutchartOptions.value,
                                      series: donutChart.series
                                    }, null, 8, ["options", "series"])
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
                          lg: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2, { title: "Pie Chart" }, {
                              default: withCtx(() => [
                                createVNode(_component_ClientOnly, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_apexchart, {
                                      type: "pie",
                                      height: "300",
                                      options: piechartOptions.value,
                                      series: pieChart.series
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
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        lg: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$2, { title: "Donut Chart" }, {
                            default: withCtx(() => [
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  createVNode(_component_apexchart, {
                                    type: "donut",
                                    height: "300",
                                    options: donutchartOptions.value,
                                    series: donutChart.series
                                  }, null, 8, ["options", "series"])
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
                        lg: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$2, { title: "Pie Chart" }, {
                            default: withCtx(() => [
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  createVNode(_component_apexchart, {
                                    type: "pie",
                                    height: "300",
                                    options: piechartOptions.value,
                                    series: pieChart.series
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/charts/Doughnut-Pie-Chart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Doughnut-Pie-Chart-BiXHOiy0.js.map
