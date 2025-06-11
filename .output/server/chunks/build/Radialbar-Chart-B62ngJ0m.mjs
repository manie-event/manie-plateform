import { _ as __nuxt_component_0 } from './client-only-Bwxzq3Sq.mjs';
import { defineComponent, ref, computed, resolveComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { g as getPrimary } from './UpdateColors-BuecEAty.mjs';
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
  __name: "Radialbar-Chart",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Radialbar & Radar Chart" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "#"
      },
      {
        text: "Radialbar & Radar",
        disabled: true,
        href: "#"
      }
    ]);
    useTheme();
    const radialBarchartOptions = computed(() => {
      return {
        chart: {
          type: "radialBar",
          height: 300,
          fontFamily: `inherit`,
          foreColor: "#adb0bb",
          toolbar: {
            show: false
          }
        },
        colors: [
          "rgba(var(--v-theme-info))",
          "rgba(var(--v-theme-primary))",
          "rgba(var(--v-theme-error))",
          "rgba(var(--v-theme-warning ))"
        ],
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: "22px"
              },
              value: {
                fontSize: "16px"
              },
              total: {
                show: true,
                label: "Total",
                formatter() {
                  return 249;
                }
              }
            }
          }
        }
      };
    });
    const radialBarChart = {
      series: [44, 55, 67, 83]
    };
    const radarOptions = computed(() => {
      return {
        chart: {
          type: "radar",
          height: 300,
          fontFamily: `inherit`,
          toolbar: {
            show: false
          }
        },
        colors: [getPrimary.value],
        labels: ["January", "February", "March", "April", "May", "June"]
      };
    });
    const radarChart = {
      series: [
        {
          name: "Sales",
          data: [80, 50, 30, 40, 100, 20]
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
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          lg: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$2, { title: "Radialbar Chart" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ClientOnly, null, {}, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ClientOnly, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_apexchart, {
                                            type: "radialBar",
                                            height: "300",
                                            options: radialBarchartOptions.value,
                                            series: radialBarChart.series
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
                                createVNode(_sfc_main$2, { title: "Radialbar Chart" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ClientOnly, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_apexchart, {
                                          type: "radialBar",
                                          height: "300",
                                          options: radialBarchartOptions.value,
                                          series: radialBarChart.series
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
                              _push5(ssrRenderComponent(_sfc_main$2, { title: "Radar Chart" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ClientOnly, null, {}, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ClientOnly, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_apexchart, {
                                            type: "radar",
                                            height: "300",
                                            options: radarOptions.value,
                                            series: radarChart.series
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
                                createVNode(_sfc_main$2, { title: "Radar Chart" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ClientOnly, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_apexchart, {
                                          type: "radar",
                                          height: "300",
                                          options: radarOptions.value,
                                          series: radarChart.series
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
                              createVNode(_sfc_main$2, { title: "Radialbar Chart" }, {
                                default: withCtx(() => [
                                  createVNode(_component_ClientOnly, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_apexchart, {
                                        type: "radialBar",
                                        height: "300",
                                        options: radialBarchartOptions.value,
                                        series: radialBarChart.series
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
                              createVNode(_sfc_main$2, { title: "Radar Chart" }, {
                                default: withCtx(() => [
                                  createVNode(_component_ClientOnly, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_apexchart, {
                                        type: "radar",
                                        height: "300",
                                        options: radarOptions.value,
                                        series: radarChart.series
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
                            createVNode(_sfc_main$2, { title: "Radialbar Chart" }, {
                              default: withCtx(() => [
                                createVNode(_component_ClientOnly, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_apexchart, {
                                      type: "radialBar",
                                      height: "300",
                                      options: radialBarchartOptions.value,
                                      series: radialBarChart.series
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
                            createVNode(_sfc_main$2, { title: "Radar Chart" }, {
                              default: withCtx(() => [
                                createVNode(_component_ClientOnly, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_apexchart, {
                                      type: "radar",
                                      height: "300",
                                      options: radarOptions.value,
                                      series: radarChart.series
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
                          createVNode(_sfc_main$2, { title: "Radialbar Chart" }, {
                            default: withCtx(() => [
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  createVNode(_component_apexchart, {
                                    type: "radialBar",
                                    height: "300",
                                    options: radialBarchartOptions.value,
                                    series: radialBarChart.series
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
                          createVNode(_sfc_main$2, { title: "Radar Chart" }, {
                            default: withCtx(() => [
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  createVNode(_component_apexchart, {
                                    type: "radar",
                                    height: "300",
                                    options: radarOptions.value,
                                    series: radarChart.series
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/charts/Radialbar-Chart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Radialbar-Chart-B62ngJ0m.mjs.map
