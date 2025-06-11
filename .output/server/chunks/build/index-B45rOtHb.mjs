import { defineComponent, resolveComponent, withCtx, createVNode, ref, computed, mergeProps, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$1$2, a as _sfc_main$7, p as projectTableData, t as textCardsData, b as _imports_0$1, c as _imports_1 } from './UpcommingSchedule-DNrt39r_.mjs';
import { Icon } from '@iconify/vue';
import { _ as _sfc_main$1$1, a as _sfc_main$6 } from './ProductSales-sxEpYFrz.mjs';
import { _ as __nuxt_component_0 } from './client-only-Bwxzq3Sq.mjs';
import { d as getLight100, e as getWarning, f as getError, g as getPrimary } from './UpdateColors-BuecEAty.mjs';
import { DotsVerticalIcon, CircleIcon } from 'vue-tabler-icons';
import { _ as _imports_0$2 } from './virtual_public-Do_DI_-i.mjs';
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
import './nuxt-link-DZ3wFR7I.mjs';
import './customizer-CM6PVnj3.mjs';

const _imports_0 = publicAssetsURL("/images/backgrounds/school.png");
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_card, mergeProps({
    elevation: "10",
    class: "overflow-visible"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_text, { class: "position-relative pb-5" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h5 class="text-h5 mb-1 font-weight-semibold" data-v-f4341997${_scopeId2}>Welcome Jonathan Deo</h5><div class="text-subtitle-1 text-grey100 pb-1" data-v-f4341997${_scopeId2}>Check all the statastics</div>`);
              _push3(ssrRenderComponent(_component_v_btn, {
                color: "primary",
                class: "mt-4 mb-2 px-7",
                rounded: "pill",
                size: "large"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` visit now `);
                  } else {
                    return [
                      createTextVNode(" visit now ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Welcome Jonathan Deo"),
                createVNode("div", { class: "text-subtitle-1 text-grey100 pb-1" }, "Check all the statastics"),
                createVNode(_component_v_btn, {
                  color: "primary",
                  class: "mt-4 mb-2 px-7",
                  rounded: "pill",
                  size: "large"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" visit now ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<img${ssrRenderAttr("src", _imports_0)} class="bg-img-1 mt-sm-0 mt-sm-n10" data-v-f4341997${_scopeId}>`);
      } else {
        return [
          createVNode(_component_v_card_text, { class: "position-relative pb-5" }, {
            default: withCtx(() => [
              createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Welcome Jonathan Deo"),
              createVNode("div", { class: "text-subtitle-1 text-grey100 pb-1" }, "Check all the statastics"),
              createVNode(_component_v_btn, {
                color: "primary",
                class: "mt-4 mb-2 px-7",
                rounded: "pill",
                size: "large"
              }, {
                default: withCtx(() => [
                  createTextVNode(" visit now ")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode("img", {
            src: _imports_0,
            class: "bg-img-1 mt-sm-0 mt-sm-n10"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboards/dashboard2/WelcomeCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const WelcomeCard = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-f4341997"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TextCards",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      _push(ssrRenderComponent(_component_v_row, mergeProps({ class: "d-flex" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(textCardsData).slice(0, 3), (item) => {
              _push2(ssrRenderComponent(_component_v_col, {
                key: item.title,
                cols: "12",
                sm: "4",
                class: "d-flex"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_card, {
                      elevation: "10",
                      color: "primary"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_card_text, { class: "pl-5 pr-7" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img${ssrRenderAttr("src", item.shape)} alt="shape" class="shape" data-v-1f11ca1e${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(Icon), {
                                  icon: "solar:" + item.icon,
                                  width: "30",
                                  height: "30",
                                  class: "mb-6"
                                }, null, _parent5, _scopeId4));
                                _push5(`<h5 class="text-h4 font-weight-semibold mb-2 text-white" data-v-1f11ca1e${_scopeId4}>${ssrInterpolate(item.num)}<span class="text-subtitle-2 pl-1" data-v-1f11ca1e${_scopeId4}>${ssrInterpolate(item.percent)}</span></h5><p class="text-subtitle-1 opacity-50 font-weight-medium" data-v-1f11ca1e${_scopeId4}>${ssrInterpolate(item.title)}</p>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: item.shape,
                                    alt: "shape",
                                    class: "shape"
                                  }, null, 8, ["src"]),
                                  createVNode(unref(Icon), {
                                    icon: "solar:" + item.icon,
                                    width: "30",
                                    height: "30",
                                    class: "mb-6"
                                  }, null, 8, ["icon"]),
                                  createVNode("h5", { class: "text-h4 font-weight-semibold mb-2 text-white" }, [
                                    createTextVNode(toDisplayString(item.num), 1),
                                    createVNode("span", { class: "text-subtitle-2 pl-1" }, toDisplayString(item.percent), 1)
                                  ]),
                                  createVNode("p", { class: "text-subtitle-1 opacity-50 font-weight-medium" }, toDisplayString(item.title), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_card_text, { class: "pl-5 pr-7" }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: item.shape,
                                  alt: "shape",
                                  class: "shape"
                                }, null, 8, ["src"]),
                                createVNode(unref(Icon), {
                                  icon: "solar:" + item.icon,
                                  width: "30",
                                  height: "30",
                                  class: "mb-6"
                                }, null, 8, ["icon"]),
                                createVNode("h5", { class: "text-h4 font-weight-semibold mb-2 text-white" }, [
                                  createTextVNode(toDisplayString(item.num), 1),
                                  createVNode("span", { class: "text-subtitle-2 pl-1" }, toDisplayString(item.percent), 1)
                                ]),
                                createVNode("p", { class: "text-subtitle-1 opacity-50 font-weight-medium" }, toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_card, {
                        elevation: "10",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_text, { class: "pl-5 pr-7" }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: item.shape,
                                alt: "shape",
                                class: "shape"
                              }, null, 8, ["src"]),
                              createVNode(unref(Icon), {
                                icon: "solar:" + item.icon,
                                width: "30",
                                height: "30",
                                class: "mb-6"
                              }, null, 8, ["icon"]),
                              createVNode("h5", { class: "text-h4 font-weight-semibold mb-2 text-white" }, [
                                createTextVNode(toDisplayString(item.num), 1),
                                createVNode("span", { class: "text-subtitle-2 pl-1" }, toDisplayString(item.percent), 1)
                              ]),
                              createVNode("p", { class: "text-subtitle-1 opacity-50 font-weight-medium" }, toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(textCardsData).slice(0, 3), (item) => {
                return openBlock(), createBlock(_component_v_col, {
                  key: item.title,
                  cols: "12",
                  sm: "4",
                  class: "d-flex"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card, {
                      elevation: "10",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_text, { class: "pl-5 pr-7" }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: item.shape,
                              alt: "shape",
                              class: "shape"
                            }, null, 8, ["src"]),
                            createVNode(unref(Icon), {
                              icon: "solar:" + item.icon,
                              width: "30",
                              height: "30",
                              class: "mb-6"
                            }, null, 8, ["icon"]),
                            createVNode("h5", { class: "text-h4 font-weight-semibold mb-2 text-white" }, [
                              createTextVNode(toDisplayString(item.num), 1),
                              createVNode("span", { class: "text-subtitle-2 pl-1" }, toDisplayString(item.percent), 1)
                            ]),
                            createVNode("p", { class: "text-subtitle-1 opacity-50 font-weight-medium" }, toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboards/dashboard2/TextCards.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TextCards = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-1f11ca1e"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TrafficDistribution",
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
          height: 280,
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
              size: "75%",
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
                  _push3(ssrRenderComponent(_component_v_row, { class: "d-sm-flex align-center mt-sm-8 mt-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          lg: "7",
                          md: "5"
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
                                      height: "280",
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
                          md: "7"
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
                            md: "5"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  createVNode(_component_apexchart, {
                                    type: "donut",
                                    height: "280",
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
                            md: "7"
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
                    createVNode(_component_v_row, { class: "d-sm-flex align-center mt-sm-8 mt-5" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          lg: "7",
                          md: "5"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ClientOnly, null, {
                              default: withCtx(() => [
                                createVNode(_component_apexchart, {
                                  type: "donut",
                                  height: "280",
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
                          md: "7"
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
                  createVNode(_component_v_row, { class: "d-sm-flex align-center mt-sm-8 mt-5" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        lg: "7",
                        md: "5"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_apexchart, {
                                type: "donut",
                                height: "280",
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
                        md: "7"
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboards/dashboard2/TrafficDistribution.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_item = resolveComponent("v-card-item");
  const _component_v_avatar = resolveComponent("v-avatar");
  const _component_v_progress_linear = resolveComponent("v-progress-linear");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_v_card, {
    elevation: "10",
    class: "bg-lightprimary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_item, { class: "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_0$1)} alt="shape" class="shape" data-v-893996ee${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_avatar, {
                class: "bg-info mb-8",
                size: "48"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_1)} height="24" width="24" data-v-893996ee${_scopeId3}>`);
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
              }, _parent3, _scopeId2));
              _push3(`<div class="d-flex align-center justify-space-between mb-4" data-v-893996ee${_scopeId2}><h5 class="text-h6 font-weight-semibold" data-v-893996ee${_scopeId2}>New Goals</h5><div class="text-subtitle-1 text-grey200 font-weight-medium" data-v-893996ee${_scopeId2}>83%</div></div>`);
              _push3(ssrRenderComponent(_component_v_progress_linear, {
                "model-value": "70",
                height: "7",
                color: "primary",
                "bg-color": "lightsecondary",
                rounded: ""
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode("img", {
                  src: _imports_0$1,
                  alt: "shape",
                  class: "shape"
                }),
                createVNode(_component_v_avatar, {
                  class: "bg-info mb-8",
                  size: "48"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_1,
                      height: "24",
                      width: "24"
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "d-flex align-center justify-space-between mb-4" }, [
                  createVNode("h5", { class: "text-h6 font-weight-semibold" }, "New Goals"),
                  createVNode("div", { class: "text-subtitle-1 text-grey200 font-weight-medium" }, "83%")
                ]),
                createVNode(_component_v_progress_linear, {
                  "model-value": "70",
                  height: "7",
                  color: "primary",
                  "bg-color": "lightsecondary",
                  rounded: ""
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card_item, { class: "" }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_0$1,
                alt: "shape",
                class: "shape"
              }),
              createVNode(_component_v_avatar, {
                class: "bg-info mb-8",
                size: "48"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_1,
                    height: "24",
                    width: "24"
                  })
                ]),
                _: 1
              }),
              createVNode("div", { class: "d-flex align-center justify-space-between mb-4" }, [
                createVNode("h5", { class: "text-h6 font-weight-semibold" }, "New Goals"),
                createVNode("div", { class: "text-subtitle-1 text-grey200 font-weight-medium" }, "83%")
              ]),
              createVNode(_component_v_progress_linear, {
                "model-value": "70",
                height: "7",
                color: "primary",
                "bg-color": "lightsecondary",
                rounded: ""
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_card, {
    elevation: "10",
    class: "mt-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_item, { class: "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="d-flex justify-space-between" data-v-893996ee${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_avatar, {
                class: "mb-8",
                size: "68"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_0$2)} height="68" width="68" data-v-893996ee${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_0$2,
                        height: "68",
                        width: "68"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<p class="text-subtitle-1 font-weight-semibold text-warning" data-v-893996ee${_scopeId2}>#1 in DevOps</p></div><div class="" data-v-893996ee${_scopeId2}><h5 class="text-h6 font-weight-semibold" data-v-893996ee${_scopeId2}>Adam Johnson</h5><div class="text-subtitle-1 text-grey100 mt-1" data-v-893996ee${_scopeId2}>Top Developer</div></div>`);
            } else {
              return [
                createVNode("div", { class: "d-flex justify-space-between" }, [
                  createVNode(_component_v_avatar, {
                    class: "mb-8",
                    size: "68"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_0$2,
                        height: "68",
                        width: "68"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("p", { class: "text-subtitle-1 font-weight-semibold text-warning" }, "#1 in DevOps")
                ]),
                createVNode("div", { class: "" }, [
                  createVNode("h5", { class: "text-h6 font-weight-semibold" }, "Adam Johnson"),
                  createVNode("div", { class: "text-subtitle-1 text-grey100 mt-1" }, "Top Developer")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card_item, { class: "" }, {
            default: withCtx(() => [
              createVNode("div", { class: "d-flex justify-space-between" }, [
                createVNode(_component_v_avatar, {
                  class: "mb-8",
                  size: "68"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_0$2,
                      height: "68",
                      width: "68"
                    })
                  ]),
                  _: 1
                }),
                createVNode("p", { class: "text-subtitle-1 font-weight-semibold text-warning" }, "#1 in DevOps")
              ]),
              createVNode("div", { class: "" }, [
                createVNode("h5", { class: "text-h6 font-weight-semibold" }, "Adam Johnson"),
                createVNode("div", { class: "text-subtitle-1 text-grey100 mt-1" }, "Top Developer")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboards/dashboard2/ProfileCards.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProfileCards = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-893996ee"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PayingTable",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      { title: "Action" },
      { title: "Another action" },
      { title: "Something else here" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VCard = resolveComponent("VCard");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_DotsVerticalIcon = resolveComponent("DotsVerticalIcon");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_chip = resolveComponent("v-chip");
      _push(ssrRenderComponent(_component_VCard, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center justify-space-between"${_scopeId2}><div${_scopeId2}><h5 class="text-h5 mb-1 font-weight-semibold"${_scopeId2}>Top Employees</h5></div><div${_scopeId2}>`);
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
                              _push5(ssrRenderComponent(_component_DotsVerticalIcon, {
                                "stroke-width": "1.5",
                                size: "24",
                                class: "text-grey100"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_DotsVerticalIcon, {
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
                              createVNode(_component_DotsVerticalIcon, {
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
                  _push3(`</div></div><div class="month-table"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_table, { class: "mt-5 mb-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<thead${_scopeId3}><tr${_scopeId3}><th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap"${_scopeId3}> Profile </th><th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap"${_scopeId3}> Hour Rate </th><th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap"${_scopeId3}> Skills </th><th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap"${_scopeId3}> Status </th></tr></thead><tbody${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(projectTableData), (item) => {
                          _push4(`<tr class="${ssrRenderClass([item.activestate, "month-item"])}"${_scopeId3}><td${_scopeId3}><div class="d-flex align-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_avatar, { size: "50" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img${ssrRenderAttr("src", item.img)} alt="user" width="50"${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: item.img,
                                    alt: "user",
                                    width: "50"
                                  }, null, 8, ["src"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<div class="mx-4"${_scopeId3}><h4 class="text-subtitle-1 font-weight-bold text-no-wrap text-grey200"${_scopeId3}>${ssrInterpolate(item.leadname)}</h4><h6 class="text-subtitle-1 text-no-wrap font-weight-medium mt-1 text-grey200"${_scopeId3}>${ssrInterpolate(item.leademail)}</h6></div></div></td><td${_scopeId3}><h5 class="text-subtitle-1 font-weight-medium text-no-wrap text-grey200"${_scopeId3}>${ssrInterpolate(item.projectname)}</h5></td><td${_scopeId3}><h4 class="text-subtitle-1 text-no-wrap font-weight-medium text-grey200"${_scopeId3}>${ssrInterpolate(item.skill)}</h4></td><td${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_chip, {
                            class: "text-subtitle-1 font-weight-medium bg-light" + item.statuscolor,
                            variant: "outlined",
                            size: "x-small",
                            color: item.statuscolor
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.statustext)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.statustext), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</td></tr>`);
                        });
                        _push4(`<!--]--></tbody>`);
                      } else {
                        return [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap" }, " Profile "),
                              createVNode("th", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap" }, " Hour Rate "),
                              createVNode("th", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap" }, " Skills "),
                              createVNode("th", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap" }, " Status ")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(projectTableData), (item) => {
                              return openBlock(), createBlock("tr", {
                                key: item.leadname,
                                class: [item.activestate, "month-item"]
                              }, [
                                createVNode("td", null, [
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode(_component_v_avatar, { size: "50" }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: item.img,
                                          alt: "user",
                                          width: "50"
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", { class: "mx-4" }, [
                                      createVNode("h4", { class: "text-subtitle-1 font-weight-bold text-no-wrap text-grey200" }, toDisplayString(item.leadname), 1),
                                      createVNode("h6", { class: "text-subtitle-1 text-no-wrap font-weight-medium mt-1 text-grey200" }, toDisplayString(item.leademail), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("td", null, [
                                  createVNode("h5", { class: "text-subtitle-1 font-weight-medium text-no-wrap text-grey200" }, toDisplayString(item.projectname), 1)
                                ]),
                                createVNode("td", null, [
                                  createVNode("h4", { class: "text-subtitle-1 text-no-wrap font-weight-medium text-grey200" }, toDisplayString(item.skill), 1)
                                ]),
                                createVNode("td", null, [
                                  createVNode(_component_v_chip, {
                                    class: "text-subtitle-1 font-weight-medium bg-light" + item.statuscolor,
                                    variant: "outlined",
                                    size: "x-small",
                                    color: item.statuscolor
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.statustext), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "color"])
                                ])
                              ], 2);
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
                    createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                      createVNode("div", null, [
                        createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Top Employees")
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
                                createVNode(_component_DotsVerticalIcon, {
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
                    createVNode("div", { class: "month-table" }, [
                      createVNode(_component_v_table, { class: "mt-5 mb-0" }, {
                        default: withCtx(() => [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap" }, " Profile "),
                              createVNode("th", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap" }, " Hour Rate "),
                              createVNode("th", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap" }, " Skills "),
                              createVNode("th", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap" }, " Status ")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(projectTableData), (item) => {
                              return openBlock(), createBlock("tr", {
                                key: item.leadname,
                                class: [item.activestate, "month-item"]
                              }, [
                                createVNode("td", null, [
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode(_component_v_avatar, { size: "50" }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: item.img,
                                          alt: "user",
                                          width: "50"
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", { class: "mx-4" }, [
                                      createVNode("h4", { class: "text-subtitle-1 font-weight-bold text-no-wrap text-grey200" }, toDisplayString(item.leadname), 1),
                                      createVNode("h6", { class: "text-subtitle-1 text-no-wrap font-weight-medium mt-1 text-grey200" }, toDisplayString(item.leademail), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("td", null, [
                                  createVNode("h5", { class: "text-subtitle-1 font-weight-medium text-no-wrap text-grey200" }, toDisplayString(item.projectname), 1)
                                ]),
                                createVNode("td", null, [
                                  createVNode("h4", { class: "text-subtitle-1 text-no-wrap font-weight-medium text-grey200" }, toDisplayString(item.skill), 1)
                                ]),
                                createVNode("td", null, [
                                  createVNode(_component_v_chip, {
                                    class: "text-subtitle-1 font-weight-medium bg-light" + item.statuscolor,
                                    variant: "outlined",
                                    size: "x-small",
                                    color: item.statuscolor
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.statustext), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "color"])
                                ])
                              ], 2);
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
                  createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                    createVNode("div", null, [
                      createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Top Employees")
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
                              createVNode(_component_DotsVerticalIcon, {
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
                  createVNode("div", { class: "month-table" }, [
                    createVNode(_component_v_table, { class: "mt-5 mb-0" }, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap" }, " Profile "),
                            createVNode("th", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap" }, " Hour Rate "),
                            createVNode("th", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap" }, " Skills "),
                            createVNode("th", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap" }, " Status ")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(projectTableData), (item) => {
                            return openBlock(), createBlock("tr", {
                              key: item.leadname,
                              class: [item.activestate, "month-item"]
                            }, [
                              createVNode("td", null, [
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode(_component_v_avatar, { size: "50" }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: item.img,
                                        alt: "user",
                                        width: "50"
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "mx-4" }, [
                                    createVNode("h4", { class: "text-subtitle-1 font-weight-bold text-no-wrap text-grey200" }, toDisplayString(item.leadname), 1),
                                    createVNode("h6", { class: "text-subtitle-1 text-no-wrap font-weight-medium mt-1 text-grey200" }, toDisplayString(item.leademail), 1)
                                  ])
                                ])
                              ]),
                              createVNode("td", null, [
                                createVNode("h5", { class: "text-subtitle-1 font-weight-medium text-no-wrap text-grey200" }, toDisplayString(item.projectname), 1)
                              ]),
                              createVNode("td", null, [
                                createVNode("h4", { class: "text-subtitle-1 text-no-wrap font-weight-medium text-grey200" }, toDisplayString(item.skill), 1)
                              ]),
                              createVNode("td", null, [
                                createVNode(_component_v_chip, {
                                  class: "text-subtitle-1 font-weight-medium bg-light" + item.statuscolor,
                                  variant: "outlined",
                                  size: "x-small",
                                  color: item.statuscolor
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.statustext), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class", "color"])
                              ])
                            ], 2);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboards/dashboard2/PayingTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(ssrRenderComponent(_component_v_row, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              lg: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(WelcomeCard, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(WelcomeCard)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              lg: "6",
              class: "d-flex"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TextCards, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TextCards)
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
              lg: "4",
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
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              lg: "6"
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
              sm: "12",
              lg: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(ProfileCards, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(ProfileCards)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "6",
                          class: "d-flex"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$1$2, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$1$2)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(ProfileCards)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            class: "d-flex"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1$2)
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
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(ProfileCards)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "6",
                          class: "d-flex"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$1$2)
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
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$7, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$7)
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
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode(WelcomeCard)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                lg: "6",
                class: "d-flex"
              }, {
                default: withCtx(() => [
                  createVNode(TextCards)
                ]),
                _: 1
              }),
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
                lg: "4",
                class: "d-flex"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$6)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(ProfileCards)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "6",
                        class: "d-flex"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1$2)
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
                sm: "12",
                lg: "8"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$7)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/dashboard2/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B45rOtHb.mjs.map
