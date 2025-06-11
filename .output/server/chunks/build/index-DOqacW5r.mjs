import { defineComponent, ref, resolveComponent, withCtx, createVNode, computed, mergeProps, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$1$1, a as _sfc_main$5 } from './ProductSales-sxEpYFrz.mjs';
import { _ as __nuxt_component_0 } from './client-only-Bwxzq3Sq.mjs';
import { b as getTextGrey100, g as getPrimary, c as getLightborder, d as getLight100, e as getWarning, f as getError } from './UpdateColors-BuecEAty.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$2, b as _sfc_main$6 } from './Customers-B37AzJE0.mjs';
import { DotsVerticalIcon, CircleIcon } from 'vue-tabler-icons';
import { _ as _sfc_main$4 } from './BaseBreadcrumb-DAIjkUfv.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@iconify/vue';
import './server.mjs';
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
import './customizer-CM6PVnj3.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NetSells",
  __ssrInlineRender: true,
  setup(__props) {
    const select = ref("March 2023");
    const items = ref(["March 2023", "April 2023", "May 2023"]);
    const chartOptions = computed(() => {
      return {
        series: [
          {
            name: "BTC",
            data: [10, 30, 20, 30, 27, 45, 100, 70, 60, 40, 90]
          },
          {
            name: "ETH",
            data: [20, -25, 5, 10, -10, 25, -20, -25, -25, 15, -20]
          }
        ],
        chart: {
          fontFamily: `inherit`,
          foreColor: "#adb0bb",
          height: 250,
          type: "line",
          toolbar: {
            show: false
          },
          offsetX: -5,
          stacked: true
        },
        legend: {
          show: false
        },
        stroke: {
          width: 2
        },
        grid: {
          borderColor: getLightborder.value,
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          },
          padding: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }
        },
        colors: [getPrimary.value, "#5AC8FA"],
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            gradientToColors: ["#6993ff"],
            shadeIntensity: 1,
            type: "horizontal",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          }
        },
        markers: {
          size: 0
        },
        xaxis: {
          labels: {
            show: true,
            style: {
              colors: getTextGrey100.value
            }
          },
          type: "category",
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov"],
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        tooltip: {
          theme: "dark"
        }
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_select = resolveComponent("v-select");
      const _component_ClientOnly = __nuxt_component_0;
      const _component_apexchart = resolveComponent("apexchart");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, { class: "position-relative pb-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-sm-flex justify-space-between d-block align-center"${_scopeId2}><div${_scopeId2}><h5 class="text-h4 mb-1 font-weight-semibold"${_scopeId2}>Net Sells</h5><div class="text-subtitle-1 text-grey100 pb-1 font-weight-medium"${_scopeId2}> Payment received across all channels </div></div><div class="my-sm-0 my-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_select, {
                    modelValue: select.value,
                    "onUpdate:modelValue": ($event) => select.value = $event,
                    items: items.value,
                    variant: "outlined",
                    density: "compact",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-sm-flex justify-space-between d-block align-center" }, [
                      createVNode("div", null, [
                        createVNode("h5", { class: "text-h4 mb-1 font-weight-semibold" }, "Net Sells"),
                        createVNode("div", { class: "text-subtitle-1 text-grey100 pb-1 font-weight-medium" }, " Payment received across all channels ")
                      ]),
                      createVNode("div", { class: "my-sm-0 my-3" }, [
                        createVNode(_component_v_select, {
                          modelValue: select.value,
                          "onUpdate:modelValue": ($event) => select.value = $event,
                          items: items.value,
                          variant: "outlined",
                          density: "compact",
                          "hide-details": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_apexchart, {
                            type: "line",
                            class: "netsell",
                            height: "250",
                            options: chartOptions.value,
                            series: chartOptions.value.series
                          }, null, 8, ["options", "series"])
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
              createVNode(_component_v_card_text, { class: "position-relative pb-3" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-sm-flex justify-space-between d-block align-center" }, [
                    createVNode("div", null, [
                      createVNode("h5", { class: "text-h4 mb-1 font-weight-semibold" }, "Net Sells"),
                      createVNode("div", { class: "text-subtitle-1 text-grey100 pb-1 font-weight-medium" }, " Payment received across all channels ")
                    ]),
                    createVNode("div", { class: "my-sm-0 my-3" }, [
                      createVNode(_component_v_select, {
                        modelValue: select.value,
                        "onUpdate:modelValue": ($event) => select.value = $event,
                        items: items.value,
                        variant: "outlined",
                        density: "compact",
                        "hide-details": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(_component_apexchart, {
                          type: "line",
                          class: "netsell",
                          height: "250",
                          options: chartOptions.value,
                          series: chartOptions.value.series
                        }, null, 8, ["options", "series"])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/charts/NetSells.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TraficDistributionChart",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      { title: "Action" },
      { title: "Another action" },
      { title: "Something else here" }
    ]);
    const chartOptions = computed(() => {
      return {
        series: [5368, 3319, 3500, 4106],
        labels: ["5368", "Direct Traffic", "Refferal Traffic", "Oragnic Traffic"],
        chart: {
          height: 250,
          type: "donut",
          fontFamily: `inherit`,
          foreColor: "#c6d1e9",
          offsetX: -15
        },
        tooltip: {
          theme: "dark",
          fillSeriesColor: false
        },
        colors: [getLight100.value, getWarning.value, getError.value, getPrimary.value],
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        stroke: {
          show: false
        },
        plotOptions: {
          pie: {
            donut: {
              size: "68%",
              background: "none",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "18px",
                  color: void 0,
                  offsetY: 5
                },
                value: {
                  show: false,
                  color: "#98aab4"
                }
              }
            }
          }
        }
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_ClientOnly = __nuxt_component_0;
      const _component_apexchart = resolveComponent("apexchart");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center justify-space-between"${_scopeId2}><div${_scopeId2}><h5 class="text-h5 mb-1 font-weight-semibold"${_scopeId2}>Traffic Distribution</h5></div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_menu, {
                    bottom: "",
                    left: ""
                  }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, mergeProps({ icon: "" }, props, { flat: "" }), {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(DotsVerticalIcon), {
                                "stroke-width": "1.5",
                                size: "24",
                                class: "text-grey100"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(DotsVerticalIcon), {
                                  "stroke-width": "1.5",
                                  size: "24",
                                  class: "text-grey100"
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, mergeProps({ icon: "" }, props, { flat: "" }), {
                            default: withCtx(() => [
                              createVNode(unref(DotsVerticalIcon), {
                                "stroke-width": "1.5",
                                size: "24",
                                class: "text-grey100"
                              })
                            ]),
                            _: 2
                          }, 1040)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list, { density: "compact" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(items.value, (item, i) => {
                                _push5(ssrRenderComponent(_component_v_list_item, {
                                  key: i,
                                  value: i
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_list_item_title, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.title)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.title), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_list_item_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, i) => {
                                  return openBlock(), createBlock(_component_v_list_item, {
                                    key: i,
                                    value: i
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list, { density: "compact" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, i) => {
                                return openBlock(), createBlock(_component_v_list_item, {
                                  key: i,
                                  value: i
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_v_row, { class: "d-sm-flex align-center mt-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          lg: "7",
                          sm: "5"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ClientOnly, null, {}, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ClientOnly, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_apexchart, {
                                      type: "donut",
                                      height: "250",
                                      options: chartOptions.value,
                                      series: chartOptions.value.series
                                    }, null, 8, ["options", "series"])
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
                          lg: "5",
                          sm: "7"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex mb-6 pb-3"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(CircleIcon), {
                                "stroke-width": "1.5",
                                size: "18",
                                class: "text-primary"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="ml-2 mt-n1"${_scopeId4}><h5 class="text-h5 d-flex font-weight-semibold"${_scopeId4}> 4,106<span class="text-subtitle-2 text-success ml-1 pt-2"${_scopeId4}>+23%</span></h5><h6 class="text-subtitle-1 text-grey100"${_scopeId4}>Oragnic Traffic</h6></div></div><div class="d-flex mb-6 pb-3"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(CircleIcon), {
                                "stroke-width": "1.5",
                                size: "18",
                                class: "text-error"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="ml-2 mt-n1"${_scopeId4}><h5 class="text-h5 font-weight-semibold"${_scopeId4}>3,500</h5><h6 class="text-subtitle-1 text-grey100"${_scopeId4}>Refferal Traffic</h6></div></div><div class="d-flex"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(CircleIcon), {
                                "stroke-width": "1.5",
                                size: "18",
                                class: "text-warning"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="ml-2 mt-n1"${_scopeId4}><h5 class="text-h5 font-weight-semibold"${_scopeId4}>3,319</h5><h6 class="text-subtitle-1 text-grey100"${_scopeId4}>Direct Traffic</h6></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex mb-6 pb-3" }, [
                                  createVNode(unref(CircleIcon), {
                                    "stroke-width": "1.5",
                                    size: "18",
                                    class: "text-primary"
                                  }),
                                  createVNode("div", { class: "ml-2 mt-n1" }, [
                                    createVNode("h5", { class: "text-h5 d-flex font-weight-semibold" }, [
                                      createTextVNode(" 4,106"),
                                      createVNode("span", { class: "text-subtitle-2 text-success ml-1 pt-2" }, "+23%")
                                    ]),
                                    createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Oragnic Traffic")
                                  ])
                                ]),
                                createVNode("div", { class: "d-flex mb-6 pb-3" }, [
                                  createVNode(unref(CircleIcon), {
                                    "stroke-width": "1.5",
                                    size: "18",
                                    class: "text-error"
                                  }),
                                  createVNode("div", { class: "ml-2 mt-n1" }, [
                                    createVNode("h5", { class: "text-h5 font-weight-semibold" }, "3,500"),
                                    createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Refferal Traffic")
                                  ])
                                ]),
                                createVNode("div", { class: "d-flex" }, [
                                  createVNode(unref(CircleIcon), {
                                    "stroke-width": "1.5",
                                    size: "18",
                                    class: "text-warning"
                                  }),
                                  createVNode("div", { class: "ml-2 mt-n1" }, [
                                    createVNode("h5", { class: "text-h5 font-weight-semibold" }, "3,319"),
                                    createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Direct Traffic")
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "7",
                            sm: "5"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  createVNode(_component_apexchart, {
                                    type: "donut",
                                    height: "250",
                                    options: chartOptions.value,
                                    series: chartOptions.value.series
                                  }, null, 8, ["options", "series"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "5",
                            sm: "7"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex mb-6 pb-3" }, [
                                createVNode(unref(CircleIcon), {
                                  "stroke-width": "1.5",
                                  size: "18",
                                  class: "text-primary"
                                }),
                                createVNode("div", { class: "ml-2 mt-n1" }, [
                                  createVNode("h5", { class: "text-h5 d-flex font-weight-semibold" }, [
                                    createTextVNode(" 4,106"),
                                    createVNode("span", { class: "text-subtitle-2 text-success ml-1 pt-2" }, "+23%")
                                  ]),
                                  createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Oragnic Traffic")
                                ])
                              ]),
                              createVNode("div", { class: "d-flex mb-6 pb-3" }, [
                                createVNode(unref(CircleIcon), {
                                  "stroke-width": "1.5",
                                  size: "18",
                                  class: "text-error"
                                }),
                                createVNode("div", { class: "ml-2 mt-n1" }, [
                                  createVNode("h5", { class: "text-h5 font-weight-semibold" }, "3,500"),
                                  createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Refferal Traffic")
                                ])
                              ]),
                              createVNode("div", { class: "d-flex" }, [
                                createVNode(unref(CircleIcon), {
                                  "stroke-width": "1.5",
                                  size: "18",
                                  class: "text-warning"
                                }),
                                createVNode("div", { class: "ml-2 mt-n1" }, [
                                  createVNode("h5", { class: "text-h5 font-weight-semibold" }, "3,319"),
                                  createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Direct Traffic")
                                ])
                              ])
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
                    createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                      createVNode("div", null, [
                        createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Traffic Distribution")
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_v_menu, {
                          bottom: "",
                          left: ""
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps({ icon: "" }, props, { flat: "" }), {
                              default: withCtx(() => [
                                createVNode(unref(DotsVerticalIcon), {
                                  "stroke-width": "1.5",
                                  size: "24",
                                  class: "text-grey100"
                                })
                              ]),
                              _: 2
                            }, 1040)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_list, { density: "compact" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, i) => {
                                  return openBlock(), createBlock(_component_v_list_item, {
                                    key: i,
                                    value: i
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode(_component_v_row, { class: "d-sm-flex align-center mt-5" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          lg: "7",
                          sm: "5"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ClientOnly, null, {
                              default: withCtx(() => [
                                createVNode(_component_apexchart, {
                                  type: "donut",
                                  height: "250",
                                  options: chartOptions.value,
                                  series: chartOptions.value.series
                                }, null, 8, ["options", "series"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          lg: "5",
                          sm: "7"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex mb-6 pb-3" }, [
                              createVNode(unref(CircleIcon), {
                                "stroke-width": "1.5",
                                size: "18",
                                class: "text-primary"
                              }),
                              createVNode("div", { class: "ml-2 mt-n1" }, [
                                createVNode("h5", { class: "text-h5 d-flex font-weight-semibold" }, [
                                  createTextVNode(" 4,106"),
                                  createVNode("span", { class: "text-subtitle-2 text-success ml-1 pt-2" }, "+23%")
                                ]),
                                createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Oragnic Traffic")
                              ])
                            ]),
                            createVNode("div", { class: "d-flex mb-6 pb-3" }, [
                              createVNode(unref(CircleIcon), {
                                "stroke-width": "1.5",
                                size: "18",
                                class: "text-error"
                              }),
                              createVNode("div", { class: "ml-2 mt-n1" }, [
                                createVNode("h5", { class: "text-h5 font-weight-semibold" }, "3,500"),
                                createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Refferal Traffic")
                              ])
                            ]),
                            createVNode("div", { class: "d-flex" }, [
                              createVNode(unref(CircleIcon), {
                                "stroke-width": "1.5",
                                size: "18",
                                class: "text-warning"
                              }),
                              createVNode("div", { class: "ml-2 mt-n1" }, [
                                createVNode("h5", { class: "text-h5 font-weight-semibold" }, "3,319"),
                                createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Direct Traffic")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_item, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                    createVNode("div", null, [
                      createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Traffic Distribution")
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_v_menu, {
                        bottom: "",
                        left: ""
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(_component_v_btn, mergeProps({ icon: "" }, props, { flat: "" }), {
                            default: withCtx(() => [
                              createVNode(unref(DotsVerticalIcon), {
                                "stroke-width": "1.5",
                                size: "24",
                                class: "text-grey100"
                              })
                            ]),
                            _: 2
                          }, 1040)
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_v_list, { density: "compact" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, i) => {
                                return openBlock(), createBlock(_component_v_list_item, {
                                  key: i,
                                  value: i
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode(_component_v_row, { class: "d-sm-flex align-center mt-5" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        lg: "7",
                        sm: "5"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_apexchart, {
                                type: "donut",
                                height: "250",
                                options: chartOptions.value,
                                series: chartOptions.value.series
                              }, null, 8, ["options", "series"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        lg: "5",
                        sm: "7"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex mb-6 pb-3" }, [
                            createVNode(unref(CircleIcon), {
                              "stroke-width": "1.5",
                              size: "18",
                              class: "text-primary"
                            }),
                            createVNode("div", { class: "ml-2 mt-n1" }, [
                              createVNode("h5", { class: "text-h5 d-flex font-weight-semibold" }, [
                                createTextVNode(" 4,106"),
                                createVNode("span", { class: "text-subtitle-2 text-success ml-1 pt-2" }, "+23%")
                              ]),
                              createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Oragnic Traffic")
                            ])
                          ]),
                          createVNode("div", { class: "d-flex mb-6 pb-3" }, [
                            createVNode(unref(CircleIcon), {
                              "stroke-width": "1.5",
                              size: "18",
                              class: "text-error"
                            }),
                            createVNode("div", { class: "ml-2 mt-n1" }, [
                              createVNode("h5", { class: "text-h5 font-weight-semibold" }, "3,500"),
                              createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Refferal Traffic")
                            ])
                          ]),
                          createVNode("div", { class: "d-flex" }, [
                            createVNode(unref(CircleIcon), {
                              "stroke-width": "1.5",
                              size: "18",
                              class: "text-warning"
                            }),
                            createVNode("div", { class: "ml-2 mt-n1" }, [
                              createVNode("h5", { class: "text-h5 font-weight-semibold" }, "3,319"),
                              createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Direct Traffic")
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
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/charts/TraficDistributionChart.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PayingChart",
  __ssrInlineRender: true,
  setup(__props) {
    const chartOptions = computed(() => {
      return {
        series: [35],
        chart: {
          type: "radialBar",
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#D9D9D9",
              strokeWidth: "85%",
              margin: 15
              // margin is in pixels
            }
          }
        },
        grid: {
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          colors: "#0085DB",
          type: "solid",
          gradient: {
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
          }
        },
        labels: [""]
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
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
                  _push3(`<div class="d-block"${_scopeId2}><div${_scopeId2}><h5 class="text-h5 mb-1 font-weight-semibold"${_scopeId2}>Paying vs non paying</h5><div class="text-subtitle-1 text-grey100 pb-1 font-weight-medium"${_scopeId2}>Last 7 days</div></div></div><div class="my-10"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                  _push3(`</div><div class="d-flex align-center justify-space-between mb-3"${_scopeId2}><div class="d-flex align-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_CircleIcon, {
                    size: "16",
                    class: "text-info"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-subtitle-1 text-grey100 font-weight-medium ml-1"${_scopeId2}>Paying customers</div></div><div class="text-subtitle-1 text-grey100 font-weight-medium"${_scopeId2}>26%</div></div><div class="d-flex align-center justify-space-between"${_scopeId2}><div class="d-flex align-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_CircleIcon, {
                    size: "16",
                    class: "text-grey100 text-disabled"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-subtitle-1 text-grey100 font-weight-medium ml-1"${_scopeId2}> Non-paying customers </div></div><div class="text-subtitle-1 text-grey100 font-weight-medium"${_scopeId2}>74%</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-block" }, [
                      createVNode("div", null, [
                        createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Paying vs non paying"),
                        createVNode("div", { class: "text-subtitle-1 text-grey100 pb-1 font-weight-medium" }, "Last 7 days")
                      ])
                    ]),
                    createVNode("div", { class: "my-10" }, [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_apexchart, {
                            type: "radialBar",
                            class: "paymentchart",
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
                        createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium ml-1" }, "Paying customers")
                      ]),
                      createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "26%")
                    ]),
                    createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                      createVNode("div", { class: "d-flex align-center" }, [
                        createVNode(_component_CircleIcon, {
                          size: "16",
                          class: "text-grey100 text-disabled"
                        }),
                        createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium ml-1" }, " Non-paying customers ")
                      ]),
                      createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "74%")
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
                  createVNode("div", { class: "d-block" }, [
                    createVNode("div", null, [
                      createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Paying vs non paying"),
                      createVNode("div", { class: "text-subtitle-1 text-grey100 pb-1 font-weight-medium" }, "Last 7 days")
                    ])
                  ]),
                  createVNode("div", { class: "my-10" }, [
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(_component_apexchart, {
                          type: "radialBar",
                          class: "paymentchart",
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
                      createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium ml-1" }, "Paying customers")
                    ]),
                    createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "26%")
                  ]),
                  createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode(_component_CircleIcon, {
                        size: "16",
                        class: "text-grey100 text-disabled"
                      }),
                      createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium ml-1" }, " Non-paying customers ")
                    ]),
                    createVNode("div", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "74%")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/charts/PayingChart.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Charts" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Charts",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$4, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              lg: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1$1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              md: "6",
              lg: "4",
              class: "d-flex"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$5, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$5)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              md: "6",
              lg: "6",
              class: "d-flex"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              lg: "3",
              sm: "6",
              class: "d-flex"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2$1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              lg: "3",
              sm: "6",
              class: "d-flex"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1$2, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1$2)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              lg: "6"
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
              lg: "3",
              sm: "6",
              class: "d-flex"
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
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              lg: "3",
              sm: "6",
              class: "d-flex"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$6, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$6)
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
                lg: "8"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1$1)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                md: "6",
                lg: "4",
                class: "d-flex"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                md: "6",
                lg: "6",
                class: "d-flex"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                lg: "3",
                sm: "6",
                class: "d-flex"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2$1)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                lg: "3",
                sm: "6",
                class: "d-flex"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1$2)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                lg: "3",
                sm: "6",
                class: "d-flex"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                lg: "3",
                sm: "6",
                class: "d-flex"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$6)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/widgets/charts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DOqacW5r.mjs.map
