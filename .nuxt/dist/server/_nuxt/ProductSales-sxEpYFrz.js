import { _ as __nuxt_component_0 } from "./client-only-Bwxzq3Sq.js";
import { defineComponent, ref, computed, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { b as getTextGrey100, c as getLightborder, g as getPrimary } from "./UpdateColors-BuecEAty.js";
import { DotsVerticalIcon } from "vue-tabler-icons";
import { Icon } from "@iconify/vue";
const _imports_0 = publicAssetsURL("/images/svgs/biology.svg");
const _imports_1 = publicAssetsURL("/images/svgs/erase.svg");
const _imports_2 = publicAssetsURL("/images/svgs/globe.svg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProfitExpanse",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      { title: "Action" },
      { title: "Another action" },
      { title: "Something else here" }
    ]);
    const chartOptions = computed(() => {
      return {
        series: [
          {
            name: "Profit",
            data: [60, 40, 37, 35, 35, 20, 30]
          },
          {
            name: "Expenses",
            data: [15, 30, 15, 35, 25, 30, 30]
          }
        ],
        colors: [getPrimary.value, "#fb977d"],
        chart: {
          type: "bar",
          fontFamily: `inherit`,
          foreColor: "#adb0bb",
          width: "100%",
          height: 300,
          stacked: true,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "27%",
            borderRadius: 6
          }
        },
        dataLabels: {
          enabled: false
        },
        grid: {
          borderColor: getLightborder.value,
          padding: { top: 0, bottom: -8, left: 20, right: 20 }
        },
        tooltip: {
          theme: "dark"
        },
        toolbar: {
          show: false
        },
        xaxis: {
          categories: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            style: {
              colors: getTextGrey100.value
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: getTextGrey100.value
            }
          }
        },
        legend: {
          show: false
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
      const _component_v_avatar = resolveComponent("v-avatar");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center justify-space-between"${_scopeId2}><div${_scopeId2}><h5 class="text-h5 mb-1 font-weight-semibold"${_scopeId2}>Profit &amp; Expenses</h5></div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_menu, {
                    bottom: "",
                    left: ""
                  }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, mergeProps({
                          icon: "",
                          color: "inherit"
                        }, props, { flat: "" }), {
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
                          createVNode(_component_v_btn, mergeProps({
                            icon: "",
                            color: "inherit"
                          }, props, { flat: "" }), {
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
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "7",
                          class: "pt-7"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ClientOnly, null, {}, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ClientOnly, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_apexchart, {
                                      type: "bar",
                                      class: "profit-expense",
                                      height: "300",
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
                          sm: "5",
                          class: "mt-8 pb-6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex align-center gap-4 mb-6 pb-3"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, { class: "bg-lighterror" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<img${ssrRenderAttr("src", _imports_0)} height="24" width="24"${_scopeId5}>`);
                                  } else {
                                    return [
                                      createVNode("img", {
                                        src: _imports_0,
                                        height: "24",
                                        width: "24"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div${_scopeId4}><h5 class="text-h5 font-weight-semibold"${_scopeId4}>$63,489.50</h5><h6 class="text-subtitle-1 text-grey100"${_scopeId4}>Total Earnings</h6></div></div><div class="d-flex align-center gap-4 mb-6 pb-3"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, { class: "bg-lightinfo" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<img${ssrRenderAttr("src", _imports_1)} height="24" width="24"${_scopeId5}>`);
                                  } else {
                                    return [
                                      createVNode("img", {
                                        src: _imports_1,
                                        height: "24",
                                        width: "24"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div${_scopeId4}><h5 class="text-h5 font-weight-semibold"${_scopeId4}> $48,820.00 <span class="text-subtitle-2 text-success"${_scopeId4}>23%</span></h5><h6 class="text-subtitle-1 text-grey100"${_scopeId4}>Profit this year</h6></div></div><div class="d-flex align-center gap-4 mb-6 pb-3"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, { class: "bg-lightsecondary" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<img${ssrRenderAttr("src", _imports_2)} height="24" width="24"${_scopeId5}>`);
                                  } else {
                                    return [
                                      createVNode("img", {
                                        src: _imports_2,
                                        height: "24",
                                        width: "24"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div${_scopeId4}><h5 class="text-h5 font-weight-semibold"${_scopeId4}>$103,582.50</h5><h6 class="text-subtitle-1 text-grey100"${_scopeId4}>Overall earnings</h6></div></div>`);
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "primary",
                                class: "mt-2 px-6",
                                size: "large",
                                rounded: "pill"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`View Full Report`);
                                  } else {
                                    return [
                                      createTextVNode("View Full Report")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-center gap-4 mb-6 pb-3" }, [
                                  createVNode(_component_v_avatar, { class: "bg-lighterror" }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_0,
                                        height: "24",
                                        width: "24"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", null, [
                                    createVNode("h5", { class: "text-h5 font-weight-semibold" }, "$63,489.50"),
                                    createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Total Earnings")
                                  ])
                                ]),
                                createVNode("div", { class: "d-flex align-center gap-4 mb-6 pb-3" }, [
                                  createVNode(_component_v_avatar, { class: "bg-lightinfo" }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_1,
                                        height: "24",
                                        width: "24"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", null, [
                                    createVNode("h5", { class: "text-h5 font-weight-semibold" }, [
                                      createTextVNode(" $48,820.00 "),
                                      createVNode("span", { class: "text-subtitle-2 text-success" }, "23%")
                                    ]),
                                    createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Profit this year")
                                  ])
                                ]),
                                createVNode("div", { class: "d-flex align-center gap-4 mb-6 pb-3" }, [
                                  createVNode(_component_v_avatar, { class: "bg-lightsecondary" }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_2,
                                        height: "24",
                                        width: "24"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", null, [
                                    createVNode("h5", { class: "text-h5 font-weight-semibold" }, "$103,582.50"),
                                    createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Overall earnings")
                                  ])
                                ]),
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  class: "mt-2 px-6",
                                  size: "large",
                                  rounded: "pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("View Full Report")
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
                            sm: "7",
                            class: "pt-7"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  createVNode(_component_apexchart, {
                                    type: "bar",
                                    class: "profit-expense",
                                    height: "300",
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
                            sm: "5",
                            class: "mt-8 pb-6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center gap-4 mb-6 pb-3" }, [
                                createVNode(_component_v_avatar, { class: "bg-lighterror" }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_0,
                                      height: "24",
                                      width: "24"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", null, [
                                  createVNode("h5", { class: "text-h5 font-weight-semibold" }, "$63,489.50"),
                                  createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Total Earnings")
                                ])
                              ]),
                              createVNode("div", { class: "d-flex align-center gap-4 mb-6 pb-3" }, [
                                createVNode(_component_v_avatar, { class: "bg-lightinfo" }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_1,
                                      height: "24",
                                      width: "24"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", null, [
                                  createVNode("h5", { class: "text-h5 font-weight-semibold" }, [
                                    createTextVNode(" $48,820.00 "),
                                    createVNode("span", { class: "text-subtitle-2 text-success" }, "23%")
                                  ]),
                                  createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Profit this year")
                                ])
                              ]),
                              createVNode("div", { class: "d-flex align-center gap-4 mb-6 pb-3" }, [
                                createVNode(_component_v_avatar, { class: "bg-lightsecondary" }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_2,
                                      height: "24",
                                      width: "24"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", null, [
                                  createVNode("h5", { class: "text-h5 font-weight-semibold" }, "$103,582.50"),
                                  createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Overall earnings")
                                ])
                              ]),
                              createVNode(_component_v_btn, {
                                color: "primary",
                                class: "mt-2 px-6",
                                size: "large",
                                rounded: "pill"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("View Full Report")
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
                    createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                      createVNode("div", null, [
                        createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Profit & Expenses")
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_v_menu, {
                          bottom: "",
                          left: ""
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps({
                              icon: "",
                              color: "inherit"
                            }, props, { flat: "" }), {
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
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "7",
                          class: "pt-7"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ClientOnly, null, {
                              default: withCtx(() => [
                                createVNode(_component_apexchart, {
                                  type: "bar",
                                  class: "profit-expense",
                                  height: "300",
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
                          sm: "5",
                          class: "mt-8 pb-6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center gap-4 mb-6 pb-3" }, [
                              createVNode(_component_v_avatar, { class: "bg-lighterror" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0,
                                    height: "24",
                                    width: "24"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", null, [
                                createVNode("h5", { class: "text-h5 font-weight-semibold" }, "$63,489.50"),
                                createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Total Earnings")
                              ])
                            ]),
                            createVNode("div", { class: "d-flex align-center gap-4 mb-6 pb-3" }, [
                              createVNode(_component_v_avatar, { class: "bg-lightinfo" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_1,
                                    height: "24",
                                    width: "24"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", null, [
                                createVNode("h5", { class: "text-h5 font-weight-semibold" }, [
                                  createTextVNode(" $48,820.00 "),
                                  createVNode("span", { class: "text-subtitle-2 text-success" }, "23%")
                                ]),
                                createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Profit this year")
                              ])
                            ]),
                            createVNode("div", { class: "d-flex align-center gap-4 mb-6 pb-3" }, [
                              createVNode(_component_v_avatar, { class: "bg-lightsecondary" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_2,
                                    height: "24",
                                    width: "24"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", null, [
                                createVNode("h5", { class: "text-h5 font-weight-semibold" }, "$103,582.50"),
                                createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Overall earnings")
                              ])
                            ]),
                            createVNode(_component_v_btn, {
                              color: "primary",
                              class: "mt-2 px-6",
                              size: "large",
                              rounded: "pill"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("View Full Report")
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
              createVNode(_component_v_card_item, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                    createVNode("div", null, [
                      createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Profit & Expenses")
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_v_menu, {
                        bottom: "",
                        left: ""
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(_component_v_btn, mergeProps({
                            icon: "",
                            color: "inherit"
                          }, props, { flat: "" }), {
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
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "7",
                        class: "pt-7"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_apexchart, {
                                type: "bar",
                                class: "profit-expense",
                                height: "300",
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
                        sm: "5",
                        class: "mt-8 pb-6"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center gap-4 mb-6 pb-3" }, [
                            createVNode(_component_v_avatar, { class: "bg-lighterror" }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _imports_0,
                                  height: "24",
                                  width: "24"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", null, [
                              createVNode("h5", { class: "text-h5 font-weight-semibold" }, "$63,489.50"),
                              createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Total Earnings")
                            ])
                          ]),
                          createVNode("div", { class: "d-flex align-center gap-4 mb-6 pb-3" }, [
                            createVNode(_component_v_avatar, { class: "bg-lightinfo" }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _imports_1,
                                  height: "24",
                                  width: "24"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", null, [
                              createVNode("h5", { class: "text-h5 font-weight-semibold" }, [
                                createTextVNode(" $48,820.00 "),
                                createVNode("span", { class: "text-subtitle-2 text-success" }, "23%")
                              ]),
                              createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Profit this year")
                            ])
                          ]),
                          createVNode("div", { class: "d-flex align-center gap-4 mb-6 pb-3" }, [
                            createVNode(_component_v_avatar, { class: "bg-lightsecondary" }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _imports_2,
                                  height: "24",
                                  width: "24"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", null, [
                              createVNode("h5", { class: "text-h5 font-weight-semibold" }, "$103,582.50"),
                              createVNode("h6", { class: "text-subtitle-1 text-grey100" }, "Overall earnings")
                            ])
                          ]),
                          createVNode(_component_v_btn, {
                            color: "primary",
                            class: "mt-2 px-6",
                            size: "large",
                            rounded: "pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("View Full Report")
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
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboards/dashboard2/ProfitExpanse.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductSales",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      { title: "Action" },
      { title: "Another action" },
      { title: "Something else here" }
    ]);
    const chartOptions = computed(() => {
      return {
        series: [
          {
            name: "Test Results",
            data: [13, 15, 14, 17, 16, 19, 17]
          }
        ],
        chart: {
          height: 240,
          type: "area",
          fontFamily: `inherit`,
          foreColor: "#626b81",
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        grid: {
          borderColor: getLightborder.value,
          strokeDashArray: 4,
          strokeWidth: 1,
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        colors: [getPrimary.value],
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 0,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [20, 180]
          }
        },
        stroke: {
          curve: "smooth",
          width: "2"
        },
        xaxis: {
          categories: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          labels: {
            show: false,
            style: {
              colors: getTextGrey100.value
            }
          }
        },
        tooltip: {
          theme: "dark"
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
      const _component_ClientOnly = __nuxt_component_0;
      const _component_apexchart = resolveComponent("apexchart");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_chip = resolveComponent("v-chip");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center justify-space-between"${_scopeId2}><div${_scopeId2}><h5 class="text-h5 mb-1 font-weight-semibold"${_scopeId2}>Product Sales</h5></div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_menu, {
                    bottom: "",
                    left: ""
                  }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, mergeProps({
                          icon: "",
                          color: "inherit"
                        }, props, { flat: "" }), {
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
                          createVNode(_component_v_btn, mergeProps({
                            icon: "",
                            color: "inherit"
                          }, props, { flat: "" }), {
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
                  _push3(`</div></div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                  _push3(`<div class="d-flex align-center mt-2 gap-4"${_scopeId2}><div class="d-flex align-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_avatar, { class: "bg-lightprimary me-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          icon: "solar:user-circle-linear",
                          class: "text-primary",
                          width: "24",
                          height: "24"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Icon), {
                            icon: "solar:user-circle-linear",
                            class: "text-primary",
                            width: "24",
                            height: "24"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}><h6 class="text-h6 font-weight-semibold d-flex align-center"${_scopeId2}> 36,436 `);
                  _push3(ssrRenderComponent(_component_v_chip, {
                    color: "success",
                    class: "bg-lightsuccess ml-1",
                    variant: "outlined",
                    size: "x-small"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`+12%`);
                      } else {
                        return [
                          createTextVNode("+12%")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</h6><p class="text-subtitle-1 text-grey100 font-weight-medium"${_scopeId2}>New Customer</p></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                      createVNode("div", null, [
                        createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Product Sales")
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_v_menu, {
                          bottom: "",
                          left: ""
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps({
                              icon: "",
                              color: "inherit"
                            }, props, { flat: "" }), {
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
                    createVNode("div", null, [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_apexchart, {
                            type: "area",
                            height: "240",
                            options: chartOptions.value,
                            series: chartOptions.value.series
                          }, null, 8, ["options", "series"])
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "d-flex align-center mt-2 gap-4" }, [
                        createVNode("div", { class: "d-flex align-center" }, [
                          createVNode(_component_v_avatar, { class: "bg-lightprimary me-4" }, {
                            default: withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "solar:user-circle-linear",
                                class: "text-primary",
                                width: "24",
                                height: "24"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", null, [
                            createVNode("h6", { class: "text-h6 font-weight-semibold d-flex align-center" }, [
                              createTextVNode(" 36,436 "),
                              createVNode(_component_v_chip, {
                                color: "success",
                                class: "bg-lightsuccess ml-1",
                                variant: "outlined",
                                size: "x-small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("+12%")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("p", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "New Customer")
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
              createVNode(_component_v_card_item, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                    createVNode("div", null, [
                      createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Product Sales")
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_v_menu, {
                        bottom: "",
                        left: ""
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(_component_v_btn, mergeProps({
                            icon: "",
                            color: "inherit"
                          }, props, { flat: "" }), {
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
                  createVNode("div", null, [
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(_component_apexchart, {
                          type: "area",
                          height: "240",
                          options: chartOptions.value,
                          series: chartOptions.value.series
                        }, null, 8, ["options", "series"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "d-flex align-center mt-2 gap-4" }, [
                      createVNode("div", { class: "d-flex align-center" }, [
                        createVNode(_component_v_avatar, { class: "bg-lightprimary me-4" }, {
                          default: withCtx(() => [
                            createVNode(unref(Icon), {
                              icon: "solar:user-circle-linear",
                              class: "text-primary",
                              width: "24",
                              height: "24"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", null, [
                          createVNode("h6", { class: "text-h6 font-weight-semibold d-flex align-center" }, [
                            createTextVNode(" 36,436 "),
                            createVNode(_component_v_chip, {
                              color: "success",
                              class: "bg-lightsuccess ml-1",
                              variant: "outlined",
                              size: "x-small"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("+12%")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("p", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "New Customer")
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboards/dashboard2/ProductSales.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$1 as _,
  _sfc_main as a
};
//# sourceMappingURL=ProductSales-sxEpYFrz.js.map
