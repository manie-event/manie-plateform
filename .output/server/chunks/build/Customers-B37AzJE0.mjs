import { _ as __nuxt_component_0 } from './client-only-Bwxzq3Sq.mjs';
import { defineComponent, computed, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { b as getTextGrey100, g as getPrimary } from './UpdateColors-BuecEAty.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Payments",
  __ssrInlineRender: true,
  setup(__props) {
    const chartOptions = computed(() => {
      return {
        series: [
          {
            name: "Last Year ",
            data: [29, 52, 38, 47, 56, 41, 46]
          },
          {
            name: "This Year ",
            data: [71, 71, 71, 71, 71, 71, 71]
          }
        ],
        chart: {
          fontFamily: `inherit`,
          type: "bar",
          height: 150,
          stacked: true,
          toolbar: {
            show: false
          }
        },
        grid: {
          show: false,
          borderColor: "rgba(0,0,0,0.1)",
          strokeDashArray: 1,
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: true
            }
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        colors: [getPrimary.value, "#D9D9D9"],
        plotOptions: {
          bar: {
            horizontal: false,
            // barHeight: "90%",
            columnWidth: "26%",
            borderRadius: [3],
            borderRadiusApplication: "end",
            borderRadiusWhenStacked: "all"
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [["M"], ["T"], ["W"], ["T"], ["F"], ["S"], ["S"]],
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          //For Change Text Color
          labels: {
            style: {
              colors: getTextGrey100.value
            }
          }
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        tooltip: {
          theme: "dark"
        },
        legend: {
          show: false
        }
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_ClientOnly = __nuxt_component_0;
      const _component_apexchart = resolveComponent("apexchart");
      const _component_CircleIcon = resolveComponent("CircleIcon");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        elevation: "10",
        class: "roun-"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, { class: "position-relative" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex justify-space-between d-block align-center"${_scopeId2}><div${_scopeId2}><h5 class="text-h5 mb-1 font-weight-semibold"${_scopeId2}>Payments</h5><div class="text-subtitle-1 text-grey100 pb-1 font-weight-medium"${_scopeId2}>Last 7 days</div></div><div class="text-right"${_scopeId2}><h4 class="text-h5 mb-1 font-weight-semibold"${_scopeId2}>12,389</h4>`);
                  _push3(ssrRenderComponent(_component_v_chip, {
                    color: "warning",
                    class: "bg-lightwarning",
                    variant: "outlined",
                    size: "x-small"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`-3.8%`);
                      } else {
                        return [
                          createTextVNode("-3.8%")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="mb-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                  _push3(`</div><div class="d-flex align-center justify-space-between mb-3"${_scopeId2}><div class="d-flex align-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_CircleIcon, {
                    size: "16",
                    class: "text-info"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-subtitle-1 text-grey100 font-weight-medium ml-1"${_scopeId2}>Paypal</div></div><div class="text-subtitle-1 text-grey100 font-weight-medium"${_scopeId2}>52%</div></div><div class="d-flex align-center justify-space-between"${_scopeId2}><div class="d-flex align-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_CircleIcon, {
                    size: "16",
                    class: "text-grey100 text-disabled"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-subtitle-1 text-grey100 font-weight-medium ml-1"${_scopeId2}>Credit Card</div></div><div class="text-subtitle-1 text-grey100 font-weight-medium"${_scopeId2}>48%</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex justify-space-between d-block align-center" }, [
                      createVNode("div", null, [
                        createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Payments"),
                        createVNode("div", { class: "text-subtitle-1 text-grey100 pb-1 font-weight-medium" }, "Last 7 days")
                      ]),
                      createVNode("div", { class: "text-right" }, [
                        createVNode("h4", { class: "text-h5 mb-1 font-weight-semibold" }, "12,389"),
                        createVNode(_component_v_chip, {
                          color: "warning",
                          class: "bg-lightwarning",
                          variant: "outlined",
                          size: "x-small"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("-3.8%")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_apexchart, {
                            type: "bar",
                            class: "paymentchart",
                            height: "150",
                            options: chartOptions.value,
                            series: chartOptions.value.series
                          }, null, 8, ["options", "series"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                      createVNode("div", { class: "d-flex align-center" }, [
                        createVNode(_component_CircleIcon, {
                          size: "16",
                          class: "text-info"
                        }),
                        createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium ml-1" }, "Paypal")
                      ]),
                      createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "52%")
                    ]),
                    createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                      createVNode("div", { class: "d-flex align-center" }, [
                        createVNode(_component_CircleIcon, {
                          size: "16",
                          class: "text-grey100 text-disabled"
                        }),
                        createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium ml-1" }, "Credit Card")
                      ]),
                      createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "48%")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_text, { class: "position-relative" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex justify-space-between d-block align-center" }, [
                    createVNode("div", null, [
                      createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Payments"),
                      createVNode("div", { class: "text-subtitle-1 text-grey100 pb-1 font-weight-medium" }, "Last 7 days")
                    ]),
                    createVNode("div", { class: "text-right" }, [
                      createVNode("h4", { class: "text-h5 mb-1 font-weight-semibold" }, "12,389"),
                      createVNode(_component_v_chip, {
                        color: "warning",
                        class: "bg-lightwarning",
                        variant: "outlined",
                        size: "x-small"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("-3.8%")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "mb-4" }, [
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(_component_apexchart, {
                          type: "bar",
                          class: "paymentchart",
                          height: "150",
                          options: chartOptions.value,
                          series: chartOptions.value.series
                        }, null, 8, ["options", "series"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode(_component_CircleIcon, {
                        size: "16",
                        class: "text-info"
                      }),
                      createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium ml-1" }, "Paypal")
                    ]),
                    createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "52%")
                  ]),
                  createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode(_component_CircleIcon, {
                        size: "16",
                        class: "text-grey100 text-disabled"
                      }),
                      createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium ml-1" }, "Credit Card")
                    ]),
                    createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "48%")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboards/dashboard1/Payments.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProductsChart",
  __ssrInlineRender: true,
  setup(__props) {
    const chartOptions = computed(() => {
      return {
        series: [70, 18, 12],
        labels: ["2022", "2021", "2020"],
        chart: {
          height: 170,
          type: "donut",
          fontFamily: `inherit`,
          foreColor: "#adb0bb"
        },
        plotOptions: {
          pie: {
            startAngle: 0,
            endAngle: 360,
            donut: {
              size: "85%"
            }
          }
        },
        stroke: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        colors: [getPrimary.value, "#FB977D", "#5AC8FA"],
        tooltip: {
          theme: "dark",
          fillSeriesColor: false
        }
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_ClientOnly = __nuxt_component_0;
      const _component_apexchart = resolveComponent("apexchart");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        elevation: "10",
        class: "roun-"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, { class: "position-relative" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex justify-space-between d-block align-center"${_scopeId2}><div${_scopeId2}><h5 class="text-h5 mb-1 font-weight-semibold"${_scopeId2}>Products</h5><div class="text-subtitle-1 text-grey100 pb-1 font-weight-medium"${_scopeId2}>Last 7 days</div></div><div class="text-right"${_scopeId2}><h4 class="text-h5 mb-1 font-weight-semibold"${_scopeId2}>432</h4>`);
                  _push3(ssrRenderComponent(_component_v_chip, {
                    color: "success",
                    class: "bg-lightsuccess",
                    variant: "outlined",
                    size: "x-small"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`+26.5%`);
                      } else {
                        return [
                          createTextVNode("+26.5%")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="my-7"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                  _push3(`</div><p class="text-subtitle-1 text-grey100 font-weight-medium text-center pb-1"${_scopeId2}> $18k Profit more than last month </p>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex justify-space-between d-block align-center" }, [
                      createVNode("div", null, [
                        createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Products"),
                        createVNode("div", { class: "text-subtitle-1 text-grey100 pb-1 font-weight-medium" }, "Last 7 days")
                      ]),
                      createVNode("div", { class: "text-right" }, [
                        createVNode("h4", { class: "text-h5 mb-1 font-weight-semibold" }, "432"),
                        createVNode(_component_v_chip, {
                          color: "success",
                          class: "bg-lightsuccess",
                          variant: "outlined",
                          size: "x-small"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("+26.5%")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { class: "my-7" }, [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_apexchart, {
                            type: "donut",
                            class: "paymentchart",
                            height: "170",
                            options: chartOptions.value,
                            series: chartOptions.value.series
                          }, null, 8, ["options", "series"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("p", { class: "text-subtitle-1 text-grey100 font-weight-medium text-center pb-1" }, " $18k Profit more than last month ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_text, { class: "position-relative" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex justify-space-between d-block align-center" }, [
                    createVNode("div", null, [
                      createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Products"),
                      createVNode("div", { class: "text-subtitle-1 text-grey100 pb-1 font-weight-medium" }, "Last 7 days")
                    ]),
                    createVNode("div", { class: "text-right" }, [
                      createVNode("h4", { class: "text-h5 mb-1 font-weight-semibold" }, "432"),
                      createVNode(_component_v_chip, {
                        color: "success",
                        class: "bg-lightsuccess",
                        variant: "outlined",
                        size: "x-small"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("+26.5%")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "my-7" }, [
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(_component_apexchart, {
                          type: "donut",
                          class: "paymentchart",
                          height: "170",
                          options: chartOptions.value,
                          series: chartOptions.value.series
                        }, null, 8, ["options", "series"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("p", { class: "text-subtitle-1 text-grey100 font-weight-medium text-center pb-1" }, " $18k Profit more than last month ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboards/dashboard1/ProductsChart.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Customers",
  __ssrInlineRender: true,
  setup(__props) {
    const chartOptions = computed(() => {
      return {
        series: [
          {
            name: "monthly earnings",
            color: getPrimary.value,
            data: [25, 66, 20, 40, 12, 30]
          }
        ],
        chart: {
          fontFamily: `inherit`,
          type: "area",
          height: 103,
          sparkline: {
            enabled: true
          },
          group: "sparklines"
        },
        stroke: {
          curve: "smooth",
          width: 2
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 0,
            inverseColors: false,
            opacityFrom: 0.05,
            opacityTo: 0,
            stops: [20, 180]
          }
        },
        markers: {
          size: 0
        },
        tooltip: {
          theme: "dark",
          fixed: {
            enabled: true,
            position: "right"
          },
          x: {
            show: false
          }
        }
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_ClientOnly = __nuxt_component_0;
      const _component_apexchart = resolveComponent("apexchart");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        elevation: "10",
        class: "roun-"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, { class: "position-relative" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex justify-space-between d-block align-center"${_scopeId2}><div${_scopeId2}><h5 class="text-h5 mb-1 font-weight-semibold"${_scopeId2}>Customers</h5><div class="text-subtitle-1 text-grey100 pb-1 font-weight-medium"${_scopeId2}>Last 7 days</div></div><div class="text-right"${_scopeId2}><h4 class="text-h5 mb-1 font-weight-semibold"${_scopeId2}>6,380</h4>`);
                  _push3(ssrRenderComponent(_component_v_chip, {
                    color: "success",
                    class: "bg-lightsuccess",
                    variant: "outlined",
                    size: "x-small"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`+26.5%`);
                      } else {
                        return [
                          createTextVNode("+26.5%")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="mt-10 mb-sm-12 mb-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                  _push3(`</div><div class="d-flex align-center justify-space-between mb-3"${_scopeId2}><div class="text-subtitle-1 text-grey100 font-weight-medium"${_scopeId2}>April 07 - April 14</div><div class="text-subtitle-1 text-grey100 font-weight-medium"${_scopeId2}>6,380</div></div><div class="d-flex align-center justify-space-between pb-1"${_scopeId2}><div class="text-subtitle-1 text-grey100 font-weight-medium"${_scopeId2}>Last Week</div><div class="text-subtitle-1 text-grey100 font-weight-medium"${_scopeId2}>4,298</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex justify-space-between d-block align-center" }, [
                      createVNode("div", null, [
                        createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Customers"),
                        createVNode("div", { class: "text-subtitle-1 text-grey100 pb-1 font-weight-medium" }, "Last 7 days")
                      ]),
                      createVNode("div", { class: "text-right" }, [
                        createVNode("h4", { class: "text-h5 mb-1 font-weight-semibold" }, "6,380"),
                        createVNode(_component_v_chip, {
                          color: "success",
                          class: "bg-lightsuccess",
                          variant: "outlined",
                          size: "x-small"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("+26.5%")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { class: "mt-10 mb-sm-12 mb-8" }, [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_apexchart, {
                            type: "area",
                            height: "103",
                            options: chartOptions.value,
                            series: chartOptions.value.series
                          }, null, 8, ["options", "series"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                      createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "April 07 - April 14"),
                      createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "6,380")
                    ]),
                    createVNode("div", { class: "d-flex align-center justify-space-between pb-1" }, [
                      createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "Last Week"),
                      createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "4,298")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_text, { class: "position-relative" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex justify-space-between d-block align-center" }, [
                    createVNode("div", null, [
                      createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Customers"),
                      createVNode("div", { class: "text-subtitle-1 text-grey100 pb-1 font-weight-medium" }, "Last 7 days")
                    ]),
                    createVNode("div", { class: "text-right" }, [
                      createVNode("h4", { class: "text-h5 mb-1 font-weight-semibold" }, "6,380"),
                      createVNode(_component_v_chip, {
                        color: "success",
                        class: "bg-lightsuccess",
                        variant: "outlined",
                        size: "x-small"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("+26.5%")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "mt-10 mb-sm-12 mb-8" }, [
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(_component_apexchart, {
                          type: "area",
                          height: "103",
                          options: chartOptions.value,
                          series: chartOptions.value.series
                        }, null, 8, ["options", "series"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                    createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "April 07 - April 14"),
                    createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "6,380")
                  ]),
                  createVNode("div", { class: "d-flex align-center justify-space-between pb-1" }, [
                    createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "Last Week"),
                    createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "4,298")
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboards/dashboard1/Customers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$2 as _, _sfc_main$1 as a, _sfc_main as b };
//# sourceMappingURL=Customers-B37AzJE0.mjs.map
