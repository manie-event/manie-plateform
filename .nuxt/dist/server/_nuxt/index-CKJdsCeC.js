import { defineComponent, ref, computed, resolveComponent, mergeProps, withCtx, unref, createVNode, useSSRContext, createTextVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, resolveDynamicComponent } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./client-only-Bwxzq3Sq.js";
import { _ as _imports_3 } from "./virtual_public-YD_fu6S0.js";
import { b as getTextGrey100, g as getPrimary, c as getLightborder } from "./UpdateColors-BuecEAty.js";
import { Icon } from "@iconify/vue";
import { _ as _sfc_main$7, a as _sfc_main$8, b as _sfc_main$9 } from "./Customers-B37AzJE0.js";
import { h as user1, R as user2, l as user3, m as user4, j as img5, _ as _export_sfc } from "../server.mjs";
import { PlusIcon, EditIcon, TrashIcon, SearchIcon } from "vue-tabler-icons";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "svgmap";
import "hookable";
import "./customizer-CM6PVnj3.js";
import "ofetch";
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
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CongratulationsCard",
  __ssrInlineRender: true,
  setup(__props) {
    const select = ref("This Week");
    const items = ref(["March 2023", "April 2023", "May 2023"]);
    const chartOptions = computed(() => {
      return {
        series: [
          {
            name: "",
            data: [0, 20, 15, 19, 14, 25, 32]
          },
          {
            name: "",
            data: [0, 12, 19, 13, 26, 16, 25]
          }
        ],
        chart: {
          type: "line",
          fontFamily: `inherit`,
          foreColor: "#adb0bb",
          width: "100%",
          height: 260,
          toolbar: {
            show: false
          },
          stacked: false
        },
        legend: {
          show: false
        },
        stroke: {
          width: 3,
          curve: "smooth"
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
              show: true
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
        tooltip: {
          theme: "dark"
        },
        xaxis: {
          labels: {
            show: true,
            style: {
              colors: getTextGrey100.value
            }
          },
          type: "category",
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTicks: {
            show: false
          },
          axisBorder: {
            show: false
          }
        },
        yaxis: {
          axisTicks: {
            show: false
          },
          axisBorder: {
            show: false
          },
          labels: {
            style: {
              colors: getTextGrey100.value
            }
          }
        }
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_select = resolveComponent("v-select");
      const _component_ClientOnly = __nuxt_component_0;
      const _component_apexchart = resolveComponent("apexchart");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, { class: "position-relative pb-0 border-bottom" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h4 mb-1 font-weight-semibold"${_scopeId2}>Congratulations Jonathan</h5><div class="text-subtitle-1 text-grey100 pb-1 font-weight-medium"${_scopeId2}> You have done 38% more sales </div><div class="mt-6 d-sm-flex d-block"${_scopeId2}><ul class="list-unstyled mb-0"${_scopeId2}><li class="d-flex align-center mb-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_avatar, {
                    class: "bg-lightsuccess p-7 me-4 rounded-circle d-flex align-items-center justify-content-center",
                    size: "48"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          icon: "solar:cart-3-line-duotone",
                          height: "24",
                          width: "24",
                          class: "text-success"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Icon), {
                            icon: "solar:cart-3-line-duotone",
                            height: "24",
                            width: "24",
                            class: "text-success"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}><h6 class="mb-1 text-h6 font-weight-semibold"${_scopeId2}>64 new orders</h6><p class="text-subtitle-1 text-grey100 font-weight-medium"${_scopeId2}>Processing</p></div></li><li class="d-flex align-center mb-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_avatar, {
                    class: "bg-lightwarning p-7 me-4 rounded-circle d-flex align-items-center justify-content-center",
                    size: "48"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          icon: "solar:pause-linear",
                          height: "24",
                          width: "24",
                          class: "text-warning"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Icon), {
                            icon: "solar:pause-linear",
                            height: "24",
                            width: "24",
                            class: "text-warning"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}><h6 class="mb-1 text-h6 font-weight-semibold"${_scopeId2}>4 orders</h6><p class="text-subtitle-1 text-grey100 font-weight-medium"${_scopeId2}>On hold</p></div></li><li class="d-flex align-center mb-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_avatar, {
                    class: "bg-lightinfo p-7 me-4 rounded-circle d-flex align-items-center justify-content-center",
                    size: "48"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          icon: "solar:delivery-linear",
                          height: "24",
                          width: "24",
                          class: "text-info"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Icon), {
                            icon: "solar:delivery-linear",
                            height: "24",
                            width: "24",
                            class: "text-info"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}><h6 class="mb-1 text-h6 font-weight-semibold"${_scopeId2}>12 orders</h6><p class="text-subtitle-1 text-grey100 font-weight-medium"${_scopeId2}>Delivered</p></div></li></ul><div class="man-working-on-laptop ml-auto mb-n1 mr-n8"${_scopeId2}><img${ssrRenderAttr("src", _imports_3)} class="w-100" alt=""${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("h5", { class: "text-h4 mb-1 font-weight-semibold" }, "Congratulations Jonathan"),
                    createVNode("div", { class: "text-subtitle-1 text-grey100 pb-1 font-weight-medium" }, " You have done 38% more sales "),
                    createVNode("div", { class: "mt-6 d-sm-flex d-block" }, [
                      createVNode("ul", { class: "list-unstyled mb-0" }, [
                        createVNode("li", { class: "d-flex align-center mb-5" }, [
                          createVNode(_component_v_avatar, {
                            class: "bg-lightsuccess p-7 me-4 rounded-circle d-flex align-items-center justify-content-center",
                            size: "48"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "solar:cart-3-line-duotone",
                                height: "24",
                                width: "24",
                                class: "text-success"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", null, [
                            createVNode("h6", { class: "mb-1 text-h6 font-weight-semibold" }, "64 new orders"),
                            createVNode("p", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "Processing")
                          ])
                        ]),
                        createVNode("li", { class: "d-flex align-center mb-5" }, [
                          createVNode(_component_v_avatar, {
                            class: "bg-lightwarning p-7 me-4 rounded-circle d-flex align-items-center justify-content-center",
                            size: "48"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "solar:pause-linear",
                                height: "24",
                                width: "24",
                                class: "text-warning"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", null, [
                            createVNode("h6", { class: "mb-1 text-h6 font-weight-semibold" }, "4 orders"),
                            createVNode("p", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "On hold")
                          ])
                        ]),
                        createVNode("li", { class: "d-flex align-center mb-5" }, [
                          createVNode(_component_v_avatar, {
                            class: "bg-lightinfo p-7 me-4 rounded-circle d-flex align-items-center justify-content-center",
                            size: "48"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "solar:delivery-linear",
                                height: "24",
                                width: "24",
                                class: "text-info"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", null, [
                            createVNode("h6", { class: "mb-1 text-h6 font-weight-semibold" }, "12 orders"),
                            createVNode("p", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "Delivered")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "man-working-on-laptop ml-auto mb-n1 mr-n8" }, [
                        createVNode("img", {
                          src: _imports_3,
                          class: "w-100",
                          alt: ""
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_text, { class: "position-relative" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-sm-flex justify-space-between d-block align-center"${_scopeId2}><div${_scopeId2}><h5 class="text-h4 mb-1 font-weight-semibold"${_scopeId2}>Total Orders</h5><div class="text-subtitle-1 text-grey100 pb-1 font-weight-medium"${_scopeId2}> Weekly order updates </div></div><div class="my-sm-0 my-3"${_scopeId2}>`);
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
                        createVNode("h5", { class: "text-h4 mb-1 font-weight-semibold" }, "Total Orders"),
                        createVNode("div", { class: "text-subtitle-1 text-grey100 pb-1 font-weight-medium" }, " Weekly order updates ")
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
                            height: "260",
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
              createVNode(_component_v_card_text, { class: "position-relative pb-0 border-bottom" }, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h4 mb-1 font-weight-semibold" }, "Congratulations Jonathan"),
                  createVNode("div", { class: "text-subtitle-1 text-grey100 pb-1 font-weight-medium" }, " You have done 38% more sales "),
                  createVNode("div", { class: "mt-6 d-sm-flex d-block" }, [
                    createVNode("ul", { class: "list-unstyled mb-0" }, [
                      createVNode("li", { class: "d-flex align-center mb-5" }, [
                        createVNode(_component_v_avatar, {
                          class: "bg-lightsuccess p-7 me-4 rounded-circle d-flex align-items-center justify-content-center",
                          size: "48"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Icon), {
                              icon: "solar:cart-3-line-duotone",
                              height: "24",
                              width: "24",
                              class: "text-success"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", null, [
                          createVNode("h6", { class: "mb-1 text-h6 font-weight-semibold" }, "64 new orders"),
                          createVNode("p", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "Processing")
                        ])
                      ]),
                      createVNode("li", { class: "d-flex align-center mb-5" }, [
                        createVNode(_component_v_avatar, {
                          class: "bg-lightwarning p-7 me-4 rounded-circle d-flex align-items-center justify-content-center",
                          size: "48"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Icon), {
                              icon: "solar:pause-linear",
                              height: "24",
                              width: "24",
                              class: "text-warning"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", null, [
                          createVNode("h6", { class: "mb-1 text-h6 font-weight-semibold" }, "4 orders"),
                          createVNode("p", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "On hold")
                        ])
                      ]),
                      createVNode("li", { class: "d-flex align-center mb-5" }, [
                        createVNode(_component_v_avatar, {
                          class: "bg-lightinfo p-7 me-4 rounded-circle d-flex align-items-center justify-content-center",
                          size: "48"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Icon), {
                              icon: "solar:delivery-linear",
                              height: "24",
                              width: "24",
                              class: "text-info"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", null, [
                          createVNode("h6", { class: "mb-1 text-h6 font-weight-semibold" }, "12 orders"),
                          createVNode("p", { class: "text-subtitle-1 text-grey100 font-weight-medium" }, "Delivered")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "man-working-on-laptop ml-auto mb-n1 mr-n8" }, [
                      createVNode("img", {
                        src: _imports_3,
                        class: "w-100",
                        alt: ""
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_card_text, { class: "position-relative" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-sm-flex justify-space-between d-block align-center" }, [
                    createVNode("div", null, [
                      createVNode("h5", { class: "text-h4 mb-1 font-weight-semibold" }, "Total Orders"),
                      createVNode("div", { class: "text-subtitle-1 text-grey100 pb-1 font-weight-medium" }, " Weekly order updates ")
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
                          height: "260",
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboards/dashboard1/CongratulationsCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const product1 = publicAssetsURL("/images/products/product-5.png");
const product2 = publicAssetsURL("/images/products/product-6.png");
const product3 = publicAssetsURL("/images/products/product-7.png");
const product5 = publicAssetsURL("/images/products/product-8.png");
const product4 = publicAssetsURL("/images/products/product-9.png");
const profileImages = [
  {
    img: user1
  },
  {
    img: user2
  },
  {
    img: user3
  },
  {
    img: user4
  }
];
const ProductTableData = [
  {
    img: product1,
    name: "iPhone 13 pro max-Pacific Blue-128GB storage",
    payment: "$180",
    paymentstatus: "Partially paid",
    process: 45,
    processcolor: "warning",
    statuscolor: "indigo",
    statustext: "Confirmed"
  },
  {
    img: product2,
    name: "Apple MacBook Pro 13 inch-M1-8/256GB-space",
    payment: "$120",
    paymentstatus: "Full paid",
    process: 100,
    processcolor: "success",
    statuscolor: "success",
    statustext: "Confirmed"
  },
  {
    img: product3,
    name: "PlayStation 5 DualSense Wireless Controller",
    payment: "$120",
    paymentstatus: "Cancelled",
    process: 100,
    processcolor: "error",
    statuscolor: "error",
    statustext: "Cancelled"
  },
  {
    img: product5,
    name: "Amazon Basics Mesh, Mid-Back, Swivel Office",
    payment: "$120",
    paymentstatus: "Partially paid",
    process: 45,
    processcolor: "warning",
    statuscolor: "indigo",
    statustext: "Confirmed"
  },
  {
    img: product4,
    name: "Sony X85J 75 Inch Sony 4K Ultra HD LED Smart",
    payment: "$120",
    paymentstatus: "Full paid",
    process: 100,
    processcolor: "success",
    statuscolor: "success",
    statustext: "Confirmed"
  }
];
const tableActionData = [
  {
    icon: PlusIcon,
    listtitle: "Add"
  },
  {
    icon: EditIcon,
    listtitle: "Edit"
  },
  {
    icon: TrashIcon,
    listtitle: "Delete"
  }
];
const LatestReviewData = [
  {
    img: product1,
    name: "iPhone 13 pro max-Pacific Blue-128GB storage",
    profile: user1,
    customername: "Arlene McCoy",
    customeremail: "macoy@arlene.com",
    review: 3.5,
    reviewtext: "This theme is great. Clean and easy to understand. Perfect for those who don t havetime to",
    statuscolor: "success",
    statustext: "Confirmed",
    time: "Nov 8"
  },
  {
    img: product2,
    name: "Apple MacBook Pro 13 inch-M1-8/256GB-space",
    profile: user2,
    customername: "Jerome Bell",
    customeremail: "belljerome@yahoo.com",
    review: 4,
    reviewtext: "It is a Mac, after all. Once you have gone Mac,there s no going back. My first Maclastedover nine years",
    statuscolor: "warning",
    statustext: "Pending",
    time: "Nov 8"
  },
  {
    img: product3,
    name: "PlayStation 5 DualSense Wireless Controller",
    profile: user3,
    customername: "Jacob Jones",
    customeremail: "jones009@hotmail.com",
    review: 3.5,
    reviewtext: " The best experience we could hope for.Customer service team is amazing and thequality of their products",
    statuscolor: "warning",
    statustext: "Pending",
    time: "Nov 8"
  },
  {
    img: product5,
    name: "Amazon Basics Mesh, Mid-Back, Swivel Office",
    profile: user4,
    customername: "Annette Black",
    customeremail: "blackanne@yahoo.com",
    review: 3.5,
    reviewtext: " The controller is quite comfy for me. Despiteits increased size, the controller still fits well",
    statuscolor: "success",
    statustext: "Confirmed",
    time: "Nov 8"
  },
  {
    img: product4,
    name: "Sony X85J 75 Inch Sony 4K Ultra HD LED Smart",
    profile: img5,
    customername: "Albert Flores",
    customeremail: "albertflo9@gmail.com",
    review: 3.5,
    reviewtext: "This theme is great. Perfect for those whodon want have time to start everything from",
    statuscolor: "warning",
    statustext: "Pending",
    time: "Nov 8"
  }
];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "LatestDeals",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_progress_linear = resolveComponent("v-progress-linear");
      const _component_v_avatar = resolveComponent("v-avatar");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        elevation: "10",
        class: "roun-"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, { class: "position-relative" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex justify-space-between d-block"${_scopeId2}><div${_scopeId2}><h5 class="text-h5 mb-1 font-weight-semibold"${_scopeId2}>Latest Deal</h5><div class="text-subtitle-1 text-grey100 pb-1 font-weight-medium"${_scopeId2}>Last 7 days</div></div><div class="mt-1 text-right"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_chip, {
                    color: "success",
                    class: "bg-lightsuccess",
                    variant: "outlined",
                    size: "x-small"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`86.5%`);
                      } else {
                        return [
                          createTextVNode("86.5%")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="my-sm-14 my-8"${_scopeId2}><div class="d-flex align-center justify-space-between mb-2"${_scopeId2}><h5 class="text-h6 font-weight-semibold"${_scopeId2}>$98,500</h5><div class="text-subtitle-1 font-weight-semibold"${_scopeId2}>$1,22,900</div></div>`);
                  _push3(ssrRenderComponent(_component_v_progress_linear, {
                    "model-value": "80",
                    height: "7",
                    "bg-color": "bglight",
                    color: "primary",
                    rounded: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<p class="text-subtitle-1 text-grey100 mt-2 font-weight-medium"${_scopeId2}>Coupons used: 18/22</p></div><div class="pb-md-2"${_scopeId2}><h6 class="text-subtitle-1 font-weight-semibold mb-4"${_scopeId2}>Recent Purchasers</h6><!--[-->`);
                  ssrRenderList(unref(profileImages), (item) => {
                    _push3(ssrRenderComponent(_component_v_avatar, {
                      key: item.img,
                      size: "40",
                      class: "ms-n2 avatar-border"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", item.img)} alt="profile" height="40" width="40" class=""${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: item.img,
                              alt: "profile",
                              height: "40",
                              width: "40",
                              class: ""
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(_component_v_avatar, {
                    size: "40",
                    class: "ms-n2 avatar-border bg-lightprimary text-subtitle-1 font-weight-semibold text-primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div height="40" width="40"${_scopeId3}>+8</div>`);
                      } else {
                        return [
                          createVNode("div", {
                            height: "40",
                            width: "40"
                          }, "+8")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex justify-space-between d-block" }, [
                      createVNode("div", null, [
                        createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Latest Deal"),
                        createVNode("div", { class: "text-subtitle-1 text-grey100 pb-1 font-weight-medium" }, "Last 7 days")
                      ]),
                      createVNode("div", { class: "mt-1 text-right" }, [
                        createVNode(_component_v_chip, {
                          color: "success",
                          class: "bg-lightsuccess",
                          variant: "outlined",
                          size: "x-small"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("86.5%")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { class: "my-sm-14 my-8" }, [
                      createVNode("div", { class: "d-flex align-center justify-space-between mb-2" }, [
                        createVNode("h5", { class: "text-h6 font-weight-semibold" }, "$98,500"),
                        createVNode("div", { class: "text-subtitle-1 font-weight-semibold" }, "$1,22,900")
                      ]),
                      createVNode(_component_v_progress_linear, {
                        "model-value": "80",
                        height: "7",
                        "bg-color": "bglight",
                        color: "primary",
                        rounded: ""
                      }),
                      createVNode("p", { class: "text-subtitle-1 text-grey100 mt-2 font-weight-medium" }, "Coupons used: 18/22")
                    ]),
                    createVNode("div", { class: "pb-md-2" }, [
                      createVNode("h6", { class: "text-subtitle-1 font-weight-semibold mb-4" }, "Recent Purchasers"),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImages), (item) => {
                        return openBlock(), createBlock(_component_v_avatar, {
                          key: item.img,
                          size: "40",
                          class: "ms-n2 avatar-border"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: item.img,
                              alt: "profile",
                              height: "40",
                              width: "40",
                              class: ""
                            }, null, 8, ["src"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128)),
                      createVNode(_component_v_avatar, {
                        size: "40",
                        class: "ms-n2 avatar-border bg-lightprimary text-subtitle-1 font-weight-semibold text-primary"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            height: "40",
                            width: "40"
                          }, "+8")
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
              createVNode(_component_v_card_text, { class: "position-relative" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex justify-space-between d-block" }, [
                    createVNode("div", null, [
                      createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Latest Deal"),
                      createVNode("div", { class: "text-subtitle-1 text-grey100 pb-1 font-weight-medium" }, "Last 7 days")
                    ]),
                    createVNode("div", { class: "mt-1 text-right" }, [
                      createVNode(_component_v_chip, {
                        color: "success",
                        class: "bg-lightsuccess",
                        variant: "outlined",
                        size: "x-small"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("86.5%")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "my-sm-14 my-8" }, [
                    createVNode("div", { class: "d-flex align-center justify-space-between mb-2" }, [
                      createVNode("h5", { class: "text-h6 font-weight-semibold" }, "$98,500"),
                      createVNode("div", { class: "text-subtitle-1 font-weight-semibold" }, "$1,22,900")
                    ]),
                    createVNode(_component_v_progress_linear, {
                      "model-value": "80",
                      height: "7",
                      "bg-color": "bglight",
                      color: "primary",
                      rounded: ""
                    }),
                    createVNode("p", { class: "text-subtitle-1 text-grey100 mt-2 font-weight-medium" }, "Coupons used: 18/22")
                  ]),
                  createVNode("div", { class: "pb-md-2" }, [
                    createVNode("h6", { class: "text-subtitle-1 font-weight-semibold mb-4" }, "Recent Purchasers"),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImages), (item) => {
                      return openBlock(), createBlock(_component_v_avatar, {
                        key: item.img,
                        size: "40",
                        class: "ms-n2 avatar-border"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: item.img,
                            alt: "profile",
                            height: "40",
                            width: "40",
                            class: ""
                          }, null, 8, ["src"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    createVNode(_component_v_avatar, {
                      size: "40",
                      class: "ms-n2 avatar-border bg-lightprimary text-subtitle-1 font-weight-semibold text-primary"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          height: "40",
                          width: "40"
                        }, "+8")
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboards/dashboard1/LatestDeals.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ProductsTable",
  __ssrInlineRender: true,
  setup(__props) {
    ref([
      { title: "Action" },
      { title: "Another action" },
      { title: "Something else here" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VCard = resolveComponent("VCard");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_progress_linear = resolveComponent("v-progress-linear");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_DotsVerticalIcon = resolveComponent("DotsVerticalIcon");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      _push(ssrRenderComponent(_component_VCard, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="border-table"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_table, { class: "mb-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<thead${_scopeId3}><tr${_scopeId3}><th class="text-h6 font-weight-semibold text-no-wrap"${_scopeId3}>Products</th><th class="text-h6 font-weight-semibold text-no-wrap"${_scopeId3}>Payment</th><th class="text-h6 font-weight-semibold text-no-wrap"${_scopeId3}>Status</th><th class="text-h6 font-weight-semibold text-no-wrap"${_scopeId3}></th></tr></thead><tbody${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(ProductTableData), (item) => {
                          _push4(`<tr class="month-item"${_scopeId3}><td${_scopeId3}><div class="d-flex align-center overflow-hidden"${_scopeId3}><img${ssrRenderAttr("src", item.img)} alt="user" width="60"${_scopeId3}><div class="mx-4" style="${ssrRenderStyle({ "width": "130px" })}"${_scopeId3}><h6 class="text-h6 font-weight-semibold text-no-wrap text-truncate"${_scopeId3}>${ssrInterpolate(item.name)}</h6></div></div></td><td${_scopeId3}><h5 class="text-h6 font-weight-semibold text-no-wrap mb-1 text-no-wrap"${_scopeId3}>${ssrInterpolate(item.payment)}<span class="text-grey100"${_scopeId3}>/ 499</span></h5><div class="text-subtitle-1 font-weight-medium text-grey100 mb-3 text-no-wrap"${_scopeId3}>${ssrInterpolate(item.paymentstatus)}</div><div${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_progress_linear, {
                            color: item.processcolor,
                            "bg-color": "light" + item.processcolor,
                            rounded: "sm",
                            "model-value": item.process
                          }, null, _parent4, _scopeId3));
                          _push4(`</div></td><td${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_chip, {
                            class: "font-weight-medium bg-light" + item.statuscolor,
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
                          _push4(`</td><td class="text-right"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_btn, {
                            size: "30",
                            icon: "",
                            variant: "flat",
                            class: "grey100"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_avatar, { size: "22" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_DotsVerticalIcon, {
                                        size: "20",
                                        color: "grey100"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_DotsVerticalIcon, {
                                          size: "20",
                                          color: "grey100"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_menu, { activator: "parent" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_list, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<!--[-->`);
                                            ssrRenderList(unref(tableActionData), (list) => {
                                              _push7(ssrRenderComponent(_component_v_list_item, {
                                                value: "action",
                                                key: list.listtitle,
                                                "hide-details": "",
                                                "min-height": "38"
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(_component_v_list_item_title, null, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(_component_v_avatar, {
                                                            size: "20",
                                                            class: "mr-2"
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                ssrRenderVNode(_push10, createVNode(resolveDynamicComponent(list.icon), {
                                                                  "stroke-width": "2",
                                                                  size: "20"
                                                                }, null), _parent10, _scopeId9);
                                                              } else {
                                                                return [
                                                                  (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                                    "stroke-width": "2",
                                                                    size: "20"
                                                                  }))
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                          _push9(` ${ssrInterpolate(list.listtitle)}`);
                                                        } else {
                                                          return [
                                                            createVNode(_component_v_avatar, {
                                                              size: "20",
                                                              class: "mr-2"
                                                            }, {
                                                              default: withCtx(() => [
                                                                (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                                  "stroke-width": "2",
                                                                  size: "20"
                                                                }))
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(_component_v_list_item_title, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_avatar, {
                                                            size: "20",
                                                            class: "mr-2"
                                                          }, {
                                                            default: withCtx(() => [
                                                              (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                                "stroke-width": "2",
                                                                size: "20"
                                                              }))
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            });
                                            _push7(`<!--]-->`);
                                          } else {
                                            return [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                                return openBlock(), createBlock(_component_v_list_item, {
                                                  value: "action",
                                                  key: list.listtitle,
                                                  "hide-details": "",
                                                  "min-height": "38"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_list_item_title, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_avatar, {
                                                          size: "20",
                                                          class: "mr-2"
                                                        }, {
                                                          default: withCtx(() => [
                                                            (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                              "stroke-width": "2",
                                                              size: "20"
                                                            }))
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createTextVNode(" " + toDisplayString(list.listtitle), 1)
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
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_list, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                              return openBlock(), createBlock(_component_v_list_item, {
                                                value: "action",
                                                key: list.listtitle,
                                                "hide-details": "",
                                                "min-height": "38"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_list_item_title, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_avatar, {
                                                        size: "20",
                                                        class: "mr-2"
                                                      }, {
                                                        default: withCtx(() => [
                                                          (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                            "stroke-width": "2",
                                                            size: "20"
                                                          }))
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_avatar, { size: "22" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_DotsVerticalIcon, {
                                        size: "20",
                                        color: "grey100"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_menu, { activator: "parent" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                            return openBlock(), createBlock(_component_v_list_item, {
                                              value: "action",
                                              key: list.listtitle,
                                              "hide-details": "",
                                              "min-height": "38"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item_title, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_avatar, {
                                                      size: "20",
                                                      class: "mr-2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                          "stroke-width": "2",
                                                          size: "20"
                                                        }))
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
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
                              createVNode("th", { class: "text-h6 font-weight-semibold text-no-wrap" }, "Products"),
                              createVNode("th", { class: "text-h6 font-weight-semibold text-no-wrap" }, "Payment"),
                              createVNode("th", { class: "text-h6 font-weight-semibold text-no-wrap" }, "Status"),
                              createVNode("th", { class: "text-h6 font-weight-semibold text-no-wrap" })
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(ProductTableData), (item) => {
                              return openBlock(), createBlock("tr", {
                                key: item.name,
                                class: "month-item"
                              }, [
                                createVNode("td", null, [
                                  createVNode("div", { class: "d-flex align-center overflow-hidden" }, [
                                    createVNode("img", {
                                      src: item.img,
                                      alt: "user",
                                      width: "60"
                                    }, null, 8, ["src"]),
                                    createVNode("div", {
                                      class: "mx-4",
                                      style: { "width": "130px" }
                                    }, [
                                      createVNode("h6", { class: "text-h6 font-weight-semibold text-no-wrap text-truncate" }, toDisplayString(item.name), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("td", null, [
                                  createVNode("h5", { class: "text-h6 font-weight-semibold text-no-wrap mb-1 text-no-wrap" }, [
                                    createTextVNode(toDisplayString(item.payment), 1),
                                    createVNode("span", { class: "text-grey100" }, "/ 499")
                                  ]),
                                  createVNode("div", { class: "text-subtitle-1 font-weight-medium text-grey100 mb-3 text-no-wrap" }, toDisplayString(item.paymentstatus), 1),
                                  createVNode("div", null, [
                                    createVNode(_component_v_progress_linear, {
                                      color: item.processcolor,
                                      "bg-color": "light" + item.processcolor,
                                      rounded: "sm",
                                      "model-value": item.process
                                    }, null, 8, ["color", "bg-color", "model-value"])
                                  ])
                                ]),
                                createVNode("td", null, [
                                  createVNode(_component_v_chip, {
                                    class: "font-weight-medium bg-light" + item.statuscolor,
                                    variant: "outlined",
                                    size: "x-small",
                                    color: item.statuscolor
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.statustext), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "color"])
                                ]),
                                createVNode("td", { class: "text-right" }, [
                                  createVNode(_component_v_btn, {
                                    size: "30",
                                    icon: "",
                                    variant: "flat",
                                    class: "grey100"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_avatar, { size: "22" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_DotsVerticalIcon, {
                                            size: "20",
                                            color: "grey100"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_menu, { activator: "parent" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                                return openBlock(), createBlock(_component_v_list_item, {
                                                  value: "action",
                                                  key: list.listtitle,
                                                  "hide-details": "",
                                                  "min-height": "38"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_list_item_title, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_avatar, {
                                                          size: "20",
                                                          class: "mr-2"
                                                        }, {
                                                          default: withCtx(() => [
                                                            (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                              "stroke-width": "2",
                                                              size: "20"
                                                            }))
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]);
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
                    createVNode("div", { class: "border-table" }, [
                      createVNode(_component_v_table, { class: "mb-0" }, {
                        default: withCtx(() => [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "text-h6 font-weight-semibold text-no-wrap" }, "Products"),
                              createVNode("th", { class: "text-h6 font-weight-semibold text-no-wrap" }, "Payment"),
                              createVNode("th", { class: "text-h6 font-weight-semibold text-no-wrap" }, "Status"),
                              createVNode("th", { class: "text-h6 font-weight-semibold text-no-wrap" })
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(ProductTableData), (item) => {
                              return openBlock(), createBlock("tr", {
                                key: item.name,
                                class: "month-item"
                              }, [
                                createVNode("td", null, [
                                  createVNode("div", { class: "d-flex align-center overflow-hidden" }, [
                                    createVNode("img", {
                                      src: item.img,
                                      alt: "user",
                                      width: "60"
                                    }, null, 8, ["src"]),
                                    createVNode("div", {
                                      class: "mx-4",
                                      style: { "width": "130px" }
                                    }, [
                                      createVNode("h6", { class: "text-h6 font-weight-semibold text-no-wrap text-truncate" }, toDisplayString(item.name), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("td", null, [
                                  createVNode("h5", { class: "text-h6 font-weight-semibold text-no-wrap mb-1 text-no-wrap" }, [
                                    createTextVNode(toDisplayString(item.payment), 1),
                                    createVNode("span", { class: "text-grey100" }, "/ 499")
                                  ]),
                                  createVNode("div", { class: "text-subtitle-1 font-weight-medium text-grey100 mb-3 text-no-wrap" }, toDisplayString(item.paymentstatus), 1),
                                  createVNode("div", null, [
                                    createVNode(_component_v_progress_linear, {
                                      color: item.processcolor,
                                      "bg-color": "light" + item.processcolor,
                                      rounded: "sm",
                                      "model-value": item.process
                                    }, null, 8, ["color", "bg-color", "model-value"])
                                  ])
                                ]),
                                createVNode("td", null, [
                                  createVNode(_component_v_chip, {
                                    class: "font-weight-medium bg-light" + item.statuscolor,
                                    variant: "outlined",
                                    size: "x-small",
                                    color: item.statuscolor
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.statustext), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "color"])
                                ]),
                                createVNode("td", { class: "text-right" }, [
                                  createVNode(_component_v_btn, {
                                    size: "30",
                                    icon: "",
                                    variant: "flat",
                                    class: "grey100"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_avatar, { size: "22" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_DotsVerticalIcon, {
                                            size: "20",
                                            color: "grey100"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_menu, { activator: "parent" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                                return openBlock(), createBlock(_component_v_list_item, {
                                                  value: "action",
                                                  key: list.listtitle,
                                                  "hide-details": "",
                                                  "min-height": "38"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_list_item_title, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_avatar, {
                                                          size: "20",
                                                          class: "mr-2"
                                                        }, {
                                                          default: withCtx(() => [
                                                            (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                              "stroke-width": "2",
                                                              size: "20"
                                                            }))
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]);
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
                  createVNode("div", { class: "border-table" }, [
                    createVNode(_component_v_table, { class: "mb-0" }, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", { class: "text-h6 font-weight-semibold text-no-wrap" }, "Products"),
                            createVNode("th", { class: "text-h6 font-weight-semibold text-no-wrap" }, "Payment"),
                            createVNode("th", { class: "text-h6 font-weight-semibold text-no-wrap" }, "Status"),
                            createVNode("th", { class: "text-h6 font-weight-semibold text-no-wrap" })
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(ProductTableData), (item) => {
                            return openBlock(), createBlock("tr", {
                              key: item.name,
                              class: "month-item"
                            }, [
                              createVNode("td", null, [
                                createVNode("div", { class: "d-flex align-center overflow-hidden" }, [
                                  createVNode("img", {
                                    src: item.img,
                                    alt: "user",
                                    width: "60"
                                  }, null, 8, ["src"]),
                                  createVNode("div", {
                                    class: "mx-4",
                                    style: { "width": "130px" }
                                  }, [
                                    createVNode("h6", { class: "text-h6 font-weight-semibold text-no-wrap text-truncate" }, toDisplayString(item.name), 1)
                                  ])
                                ])
                              ]),
                              createVNode("td", null, [
                                createVNode("h5", { class: "text-h6 font-weight-semibold text-no-wrap mb-1 text-no-wrap" }, [
                                  createTextVNode(toDisplayString(item.payment), 1),
                                  createVNode("span", { class: "text-grey100" }, "/ 499")
                                ]),
                                createVNode("div", { class: "text-subtitle-1 font-weight-medium text-grey100 mb-3 text-no-wrap" }, toDisplayString(item.paymentstatus), 1),
                                createVNode("div", null, [
                                  createVNode(_component_v_progress_linear, {
                                    color: item.processcolor,
                                    "bg-color": "light" + item.processcolor,
                                    rounded: "sm",
                                    "model-value": item.process
                                  }, null, 8, ["color", "bg-color", "model-value"])
                                ])
                              ]),
                              createVNode("td", null, [
                                createVNode(_component_v_chip, {
                                  class: "font-weight-medium bg-light" + item.statuscolor,
                                  variant: "outlined",
                                  size: "x-small",
                                  color: item.statuscolor
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.statustext), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class", "color"])
                              ]),
                              createVNode("td", { class: "text-right" }, [
                                createVNode(_component_v_btn, {
                                  size: "30",
                                  icon: "",
                                  variant: "flat",
                                  class: "grey100"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_avatar, { size: "22" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_DotsVerticalIcon, {
                                          size: "20",
                                          color: "grey100"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_menu, { activator: "parent" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                              return openBlock(), createBlock(_component_v_list_item, {
                                                value: "action",
                                                key: list.listtitle,
                                                "hide-details": "",
                                                "min-height": "38"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_list_item_title, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_avatar, {
                                                        size: "20",
                                                        class: "mr-2"
                                                      }, {
                                                        default: withCtx(() => [
                                                          (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                            "stroke-width": "2",
                                                            size: "20"
                                                          }))
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ]);
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboards/dashboard1/ProductsTable.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "VisitFromUsa",
  __ssrInlineRender: true,
  setup(__props) {
    const map = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VCard = resolveComponent("VCard");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_progress_linear = resolveComponent("v-progress-linear");
      _push(ssrRenderComponent(_component_VCard, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, { class: "position-relative" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5 mb-3 font-weight-semibold"${_scopeId2}>Visit From USA</h5><div id="svgMap" class="mt-5"${_scopeId2}></div>`);
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center justify-space-between mt-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "2",
                          md: "auto",
                          sm: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h6 class="text-subtitle-1 font-weight-semibold text-grey200"${_scopeId4}>LA</h6>`);
                            } else {
                              return [
                                createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200" }, "LA")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "7",
                          md: "8",
                          class: "px-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_progress_linear, {
                                "model-value": "28",
                                height: "5",
                                color: "info",
                                "bg-color": "lightinfo",
                                rounded: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_progress_linear, {
                                  "model-value": "28",
                                  height: "5",
                                  color: "info",
                                  "bg-color": "lightinfo",
                                  rounded: ""
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "3",
                          md: "auto",
                          sm: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h6 class="text-subtitle-1 font-weight-semibold text-grey200 text-right"${_scopeId4}>28%</h6>`);
                            } else {
                              return [
                                createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-right" }, "28%")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "2",
                            md: "auto",
                            sm: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200" }, "LA")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "7",
                            md: "8",
                            class: "px-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_progress_linear, {
                                "model-value": "28",
                                height: "5",
                                color: "info",
                                "bg-color": "lightinfo",
                                rounded: ""
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "3",
                            md: "auto",
                            sm: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-right" }, "28%")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center justify-space-between" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "2",
                          md: "auto",
                          sm: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h6 class="text-subtitle-1 font-weight-semibold text-grey200"${_scopeId4}>NY</h6>`);
                            } else {
                              return [
                                createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200" }, "NY")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "7",
                          md: "8",
                          class: "px-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_progress_linear, {
                                "model-value": "21",
                                height: "5",
                                color: "primary",
                                "bg-color": "lightprimary",
                                rounded: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_progress_linear, {
                                  "model-value": "21",
                                  height: "5",
                                  color: "primary",
                                  "bg-color": "lightprimary",
                                  rounded: ""
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "3",
                          md: "auto",
                          sm: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h6 class="text-subtitle-1 font-weight-semibold text-grey200 text-right"${_scopeId4}>21%</h6>`);
                            } else {
                              return [
                                createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-right" }, "21%")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "2",
                            md: "auto",
                            sm: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200" }, "NY")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "7",
                            md: "8",
                            class: "px-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_progress_linear, {
                                "model-value": "21",
                                height: "5",
                                color: "primary",
                                "bg-color": "lightprimary",
                                rounded: ""
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "3",
                            md: "auto",
                            sm: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-right" }, "21%")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center justify-space-between" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "2",
                          md: "auto",
                          sm: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h6 class="text-subtitle-1 font-weight-semibold text-grey200"${_scopeId4}>KA</h6>`);
                            } else {
                              return [
                                createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200" }, "KA")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "7",
                          md: "8",
                          class: "px-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_progress_linear, {
                                "model-value": "18",
                                height: "5",
                                color: "error",
                                "bg-color": "lighterror",
                                rounded: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_progress_linear, {
                                  "model-value": "18",
                                  height: "5",
                                  color: "error",
                                  "bg-color": "lighterror",
                                  rounded: ""
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "3",
                          md: "auto",
                          sm: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h6 class="text-subtitle-1 font-weight-semibold text-grey200 text-right"${_scopeId4}>18%</h6>`);
                            } else {
                              return [
                                createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-right" }, "18%")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "2",
                            md: "auto",
                            sm: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200" }, "KA")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "7",
                            md: "8",
                            class: "px-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_progress_linear, {
                                "model-value": "18",
                                height: "5",
                                color: "error",
                                "bg-color": "lighterror",
                                rounded: ""
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "3",
                            md: "auto",
                            sm: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-right" }, "18%")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "align-center justify-space-between" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "2",
                          md: "auto",
                          sm: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h6 class="text-subtitle-1 font-weight-semibold text-grey200"${_scopeId4}>AZ</h6>`);
                            } else {
                              return [
                                createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200" }, "AZ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "7",
                          md: "8",
                          class: "px-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_progress_linear, {
                                "model-value": "12",
                                height: "5",
                                color: "indigo",
                                "bg-color": "lightindigo",
                                rounded: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_progress_linear, {
                                  "model-value": "12",
                                  height: "5",
                                  color: "indigo",
                                  "bg-color": "lightindigo",
                                  rounded: ""
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "3",
                          md: "auto",
                          sm: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h6 class="text-subtitle-1 font-weight-semibold text-grey200 text-right"${_scopeId4}>12%</h6>`);
                            } else {
                              return [
                                createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-right" }, "12%")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "2",
                            md: "auto",
                            sm: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200" }, "AZ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "7",
                            md: "8",
                            class: "px-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_progress_linear, {
                                "model-value": "12",
                                height: "5",
                                color: "indigo",
                                "bg-color": "lightindigo",
                                rounded: ""
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "3",
                            md: "auto",
                            sm: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-right" }, "12%")
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
                    createVNode("h5", { class: "text-h5 mb-3 font-weight-semibold" }, "Visit From USA"),
                    createVNode("div", {
                      id: "svgMap",
                      ref_key: "map",
                      ref: map,
                      class: "mt-5"
                    }, null, 512),
                    createVNode(_component_v_row, { class: "align-center justify-space-between mt-6" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "2",
                          md: "auto",
                          sm: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200" }, "LA")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "7",
                          md: "8",
                          class: "px-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_progress_linear, {
                              "model-value": "28",
                              height: "5",
                              color: "info",
                              "bg-color": "lightinfo",
                              rounded: ""
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "3",
                          md: "auto",
                          sm: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-right" }, "28%")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "align-center justify-space-between" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "2",
                          md: "auto",
                          sm: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200" }, "NY")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "7",
                          md: "8",
                          class: "px-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_progress_linear, {
                              "model-value": "21",
                              height: "5",
                              color: "primary",
                              "bg-color": "lightprimary",
                              rounded: ""
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "3",
                          md: "auto",
                          sm: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-right" }, "21%")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "align-center justify-space-between" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "2",
                          md: "auto",
                          sm: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200" }, "KA")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "7",
                          md: "8",
                          class: "px-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_progress_linear, {
                              "model-value": "18",
                              height: "5",
                              color: "error",
                              "bg-color": "lighterror",
                              rounded: ""
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "3",
                          md: "auto",
                          sm: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-right" }, "18%")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "align-center justify-space-between" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "2",
                          md: "auto",
                          sm: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200" }, "AZ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "7",
                          md: "8",
                          class: "px-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_progress_linear, {
                              "model-value": "12",
                              height: "5",
                              color: "indigo",
                              "bg-color": "lightindigo",
                              rounded: ""
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "3",
                          md: "auto",
                          sm: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-right" }, "12%")
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
              createVNode(_component_v_card_text, { class: "position-relative" }, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h5 mb-3 font-weight-semibold" }, "Visit From USA"),
                  createVNode("div", {
                    id: "svgMap",
                    ref_key: "map",
                    ref: map,
                    class: "mt-5"
                  }, null, 512),
                  createVNode(_component_v_row, { class: "align-center justify-space-between mt-6" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "2",
                        md: "auto",
                        sm: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200" }, "LA")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "7",
                        md: "8",
                        class: "px-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_progress_linear, {
                            "model-value": "28",
                            height: "5",
                            color: "info",
                            "bg-color": "lightinfo",
                            rounded: ""
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "3",
                        md: "auto",
                        sm: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-right" }, "28%")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, { class: "align-center justify-space-between" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "2",
                        md: "auto",
                        sm: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200" }, "NY")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "7",
                        md: "8",
                        class: "px-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_progress_linear, {
                            "model-value": "21",
                            height: "5",
                            color: "primary",
                            "bg-color": "lightprimary",
                            rounded: ""
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "3",
                        md: "auto",
                        sm: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-right" }, "21%")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, { class: "align-center justify-space-between" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "2",
                        md: "auto",
                        sm: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200" }, "KA")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "7",
                        md: "8",
                        class: "px-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_progress_linear, {
                            "model-value": "18",
                            height: "5",
                            color: "error",
                            "bg-color": "lighterror",
                            rounded: ""
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "3",
                        md: "auto",
                        sm: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-right" }, "18%")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, { class: "align-center justify-space-between" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "2",
                        md: "auto",
                        sm: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200" }, "AZ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "7",
                        md: "8",
                        class: "px-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_progress_linear, {
                            "model-value": "12",
                            height: "5",
                            color: "indigo",
                            "bg-color": "lightindigo",
                            rounded: ""
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "3",
                        md: "auto",
                        sm: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-grey200 text-right" }, "12%")
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
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboards/dashboard1/VisitFromUsa.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LatestReviews",
  __ssrInlineRender: true,
  setup(__props) {
    ref([
      { title: "Action" },
      { title: "Another action" },
      { title: "Something else here" }
    ]);
    const page = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VCard = resolveComponent("VCard");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_DotsVerticalIcon = resolveComponent("DotsVerticalIcon");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      const _component_ClientOnly = __nuxt_component_0;
      const _component_v_rating = resolveComponent("v-rating");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_pagination = resolveComponent("v-pagination");
      _push(ssrRenderComponent(_component_VCard, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-sm-flex d-block justify-space-between d-block align-center mb-4"${_scopeId2}><div${_scopeId2}><h5 class="text-h5 mb-1 font-weight-semibold"${_scopeId2}>Latest Reviews</h5><div class="text-subtitle-1 text-grey100 pb-1 font-weight-medium"${_scopeId2}> Reviewd received across all channels </div></div><div class="text-right my-sm-0 my-3"${_scopeId2}><div class="d-flex align-center"${_scopeId2}><div class="mr-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    placeholder: "Search",
                    color: "primary",
                    density: "compact",
                    variant: "outlined",
                    "hide-details": "",
                    style: { "min-width": "230px" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(SearchIcon), {
                          size: "20",
                          "stroke-width": "1.5",
                          class: "mr-3"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(SearchIcon), {
                            size: "20",
                            "stroke-width": "1.5",
                            class: "mr-3"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_v_btn, {
                    size: "40",
                    variant: "outlined",
                    color: "inputBorder",
                    class: "px-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_avatar, { size: "22" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DotsVerticalIcon, {
                                size: "20",
                                color: "grey100"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_DotsVerticalIcon, {
                                  size: "20",
                                  color: "grey100"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_menu, { activator: "parent" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(tableActionData), (list) => {
                                      _push6(ssrRenderComponent(_component_v_list_item, {
                                        value: "action",
                                        key: list.listtitle,
                                        "hide-details": "",
                                        "min-height": "38"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_list_item_title, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_v_avatar, {
                                                    size: "20",
                                                    class: "mr-2"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        ssrRenderVNode(_push9, createVNode(resolveDynamicComponent(list.icon), {
                                                          "stroke-width": "2",
                                                          size: "20"
                                                        }, null), _parent9, _scopeId8);
                                                      } else {
                                                        return [
                                                          (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                            "stroke-width": "2",
                                                            size: "20"
                                                          }))
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(` ${ssrInterpolate(list.listtitle)}`);
                                                } else {
                                                  return [
                                                    createVNode(_component_v_avatar, {
                                                      size: "20",
                                                      class: "mr-2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                          "stroke-width": "2",
                                                          size: "20"
                                                        }))
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_list_item_title, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_avatar, {
                                                    size: "20",
                                                    class: "mr-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                        "stroke-width": "2",
                                                        size: "20"
                                                      }))
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                        return openBlock(), createBlock(_component_v_list_item, {
                                          value: "action",
                                          key: list.listtitle,
                                          "hide-details": "",
                                          "min-height": "38"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_title, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_avatar, {
                                                  size: "20",
                                                  class: "mr-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                      "stroke-width": "2",
                                                      size: "20"
                                                    }))
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createTextVNode(" " + toDisplayString(list.listtitle), 1)
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_list, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                      return openBlock(), createBlock(_component_v_list_item, {
                                        value: "action",
                                        key: list.listtitle,
                                        "hide-details": "",
                                        "min-height": "38"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_title, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_avatar, {
                                                size: "20",
                                                class: "mr-2"
                                              }, {
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                    "stroke-width": "2",
                                                    size: "20"
                                                  }))
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
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
                          createVNode(_component_v_avatar, { size: "22" }, {
                            default: withCtx(() => [
                              createVNode(_component_DotsVerticalIcon, {
                                size: "20",
                                color: "grey100"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_menu, { activator: "parent" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                    return openBlock(), createBlock(_component_v_list_item, {
                                      value: "action",
                                      key: list.listtitle,
                                      "hide-details": "",
                                      "min-height": "38"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_title, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_avatar, {
                                              size: "20",
                                              class: "mr-2"
                                            }, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                  "stroke-width": "2",
                                                  size: "20"
                                                }))
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
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
                  _push3(`</div></div></div><div class="border-table"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_table, { class: "mb-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<thead${_scopeId3}><tr${_scopeId3}><th class="pl-0"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_checkbox, {
                          color: "primary",
                          density: "compact",
                          "hide-details": ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</th><th class="text-h6 font-weight-semibold"${_scopeId3}>Products</th><th class="text-h6 font-weight-semibold"${_scopeId3}>Customer</th><th class="text-h6 font-weight-semibold"${_scopeId3}>Reviews</th><th class="text-h6 font-weight-semibold"${_scopeId3}>Status</th><th class="text-h6 font-weight-semibold"${_scopeId3}>Time</th><th class="text-h6 font-weight-semibold"${_scopeId3}></th></tr></thead><tbody${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(LatestReviewData), (item) => {
                          _push4(`<tr class="month-item"${_scopeId3}><td class="pl-0"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_checkbox, {
                            color: "primary",
                            density: "compact",
                            "hide-details": ""
                          }, null, _parent4, _scopeId3));
                          _push4(`</td><td${_scopeId3}><div class="d-flex align-center overflow-hidden"${_scopeId3}><img${ssrRenderAttr("src", item.img)} alt="user" width="60"${_scopeId3}><div class="mx-4" style="${ssrRenderStyle({ "width": "130px" })}"${_scopeId3}><h6 class="text-h6 font-weight-semibold text-no-wrap text-truncate"${_scopeId3}>${ssrInterpolate(item.name)}</h6></div></div></td><td${_scopeId3}><div class="d-flex align-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_avatar, {
                            size: "32",
                            class: "mr-3"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img${ssrRenderAttr("src", item.profile)} alt="profile" height="32" width="32"${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: item.profile,
                                    alt: "profile",
                                    height: "32",
                                    width: "32"
                                  }, null, 8, ["src"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<div${_scopeId3}><h6 class="text-h6 font-weight-semibold"${_scopeId3}>${ssrInterpolate(item.customername)}</h6><div class="text-subtitle-1 text-grey200"${_scopeId3}>${ssrInterpolate(item.customeremail)}</div></div></div></td><td${_scopeId3}><div class=""${_scopeId3}><div class="ml-n1"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_ClientOnly, null, {}, _parent4, _scopeId3));
                          _push4(`</div><p class="text-grey200 text-subtitle-1 font-weight-medium line-clamp mt-n1"${_scopeId3}>${ssrInterpolate(item.reviewtext)}</p></div></td><td${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_chip, {
                            class: "font-weight-medium bg-light" + item.statuscolor,
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
                          _push4(`</td><td${_scopeId3}><p class="text-subtitle-1 font-weight-medium text-grey200"${_scopeId3}>${ssrInterpolate(item.time)}</p></td><td class="text-right"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_btn, {
                            size: "30",
                            icon: "",
                            variant: "flat",
                            class: "grey100"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_avatar, { size: "22" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_DotsVerticalIcon, {
                                        size: "20",
                                        color: "grey100"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_DotsVerticalIcon, {
                                          size: "20",
                                          color: "grey100"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_menu, { activator: "parent" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_list, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<!--[-->`);
                                            ssrRenderList(unref(tableActionData), (list) => {
                                              _push7(ssrRenderComponent(_component_v_list_item, {
                                                value: "action",
                                                key: list.listtitle,
                                                "hide-details": "",
                                                "min-height": "38"
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(_component_v_list_item_title, null, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(_component_v_avatar, {
                                                            size: "20",
                                                            class: "mr-2"
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                ssrRenderVNode(_push10, createVNode(resolveDynamicComponent(list.icon), {
                                                                  "stroke-width": "2",
                                                                  size: "20"
                                                                }, null), _parent10, _scopeId9);
                                                              } else {
                                                                return [
                                                                  (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                                    "stroke-width": "2",
                                                                    size: "20"
                                                                  }))
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                          _push9(` ${ssrInterpolate(list.listtitle)}`);
                                                        } else {
                                                          return [
                                                            createVNode(_component_v_avatar, {
                                                              size: "20",
                                                              class: "mr-2"
                                                            }, {
                                                              default: withCtx(() => [
                                                                (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                                  "stroke-width": "2",
                                                                  size: "20"
                                                                }))
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(_component_v_list_item_title, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_avatar, {
                                                            size: "20",
                                                            class: "mr-2"
                                                          }, {
                                                            default: withCtx(() => [
                                                              (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                                "stroke-width": "2",
                                                                size: "20"
                                                              }))
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            });
                                            _push7(`<!--]-->`);
                                          } else {
                                            return [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                                return openBlock(), createBlock(_component_v_list_item, {
                                                  value: "action",
                                                  key: list.listtitle,
                                                  "hide-details": "",
                                                  "min-height": "38"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_list_item_title, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_avatar, {
                                                          size: "20",
                                                          class: "mr-2"
                                                        }, {
                                                          default: withCtx(() => [
                                                            (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                              "stroke-width": "2",
                                                              size: "20"
                                                            }))
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createTextVNode(" " + toDisplayString(list.listtitle), 1)
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
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_list, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                              return openBlock(), createBlock(_component_v_list_item, {
                                                value: "action",
                                                key: list.listtitle,
                                                "hide-details": "",
                                                "min-height": "38"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_list_item_title, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_avatar, {
                                                        size: "20",
                                                        class: "mr-2"
                                                      }, {
                                                        default: withCtx(() => [
                                                          (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                            "stroke-width": "2",
                                                            size: "20"
                                                          }))
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_avatar, { size: "22" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_DotsVerticalIcon, {
                                        size: "20",
                                        color: "grey100"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_menu, { activator: "parent" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                            return openBlock(), createBlock(_component_v_list_item, {
                                              value: "action",
                                              key: list.listtitle,
                                              "hide-details": "",
                                              "min-height": "38"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item_title, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_avatar, {
                                                      size: "20",
                                                      class: "mr-2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                          "stroke-width": "2",
                                                          size: "20"
                                                        }))
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
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
                              createVNode("th", { class: "pl-0" }, [
                                createVNode(_component_v_checkbox, {
                                  color: "primary",
                                  density: "compact",
                                  "hide-details": ""
                                })
                              ]),
                              createVNode("th", { class: "text-h6 font-weight-semibold" }, "Products"),
                              createVNode("th", { class: "text-h6 font-weight-semibold" }, "Customer"),
                              createVNode("th", { class: "text-h6 font-weight-semibold" }, "Reviews"),
                              createVNode("th", { class: "text-h6 font-weight-semibold" }, "Status"),
                              createVNode("th", { class: "text-h6 font-weight-semibold" }, "Time"),
                              createVNode("th", { class: "text-h6 font-weight-semibold" })
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(LatestReviewData), (item) => {
                              return openBlock(), createBlock("tr", {
                                key: item.name,
                                class: "month-item"
                              }, [
                                createVNode("td", { class: "pl-0" }, [
                                  createVNode(_component_v_checkbox, {
                                    color: "primary",
                                    density: "compact",
                                    "hide-details": ""
                                  })
                                ]),
                                createVNode("td", null, [
                                  createVNode("div", { class: "d-flex align-center overflow-hidden" }, [
                                    createVNode("img", {
                                      src: item.img,
                                      alt: "user",
                                      width: "60"
                                    }, null, 8, ["src"]),
                                    createVNode("div", {
                                      class: "mx-4",
                                      style: { "width": "130px" }
                                    }, [
                                      createVNode("h6", { class: "text-h6 font-weight-semibold text-no-wrap text-truncate" }, toDisplayString(item.name), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("td", null, [
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode(_component_v_avatar, {
                                      size: "32",
                                      class: "mr-3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: item.profile,
                                          alt: "profile",
                                          height: "32",
                                          width: "32"
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", null, [
                                      createVNode("h6", { class: "text-h6 font-weight-semibold" }, toDisplayString(item.customername), 1),
                                      createVNode("div", { class: "text-subtitle-1 text-grey200" }, toDisplayString(item.customeremail), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("td", null, [
                                  createVNode("div", { class: "" }, [
                                    createVNode("div", { class: "ml-n1" }, [
                                      createVNode(_component_ClientOnly, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_rating, {
                                            modelValue: item.review,
                                            "onUpdate:modelValue": ($event) => item.review = $event,
                                            hover: "",
                                            density: "comfortable",
                                            "half-increments": "",
                                            readonly: "",
                                            size: "x-small",
                                            color: "warning"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    createVNode("p", { class: "text-grey200 text-subtitle-1 font-weight-medium line-clamp mt-n1" }, toDisplayString(item.reviewtext), 1)
                                  ])
                                ]),
                                createVNode("td", null, [
                                  createVNode(_component_v_chip, {
                                    class: "font-weight-medium bg-light" + item.statuscolor,
                                    variant: "outlined",
                                    size: "x-small",
                                    color: item.statuscolor
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.statustext), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "color"])
                                ]),
                                createVNode("td", null, [
                                  createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey200" }, toDisplayString(item.time), 1)
                                ]),
                                createVNode("td", { class: "text-right" }, [
                                  createVNode(_component_v_btn, {
                                    size: "30",
                                    icon: "",
                                    variant: "flat",
                                    class: "grey100"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_avatar, { size: "22" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_DotsVerticalIcon, {
                                            size: "20",
                                            color: "grey100"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_menu, { activator: "parent" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                                return openBlock(), createBlock(_component_v_list_item, {
                                                  value: "action",
                                                  key: list.listtitle,
                                                  "hide-details": "",
                                                  "min-height": "38"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_list_item_title, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_avatar, {
                                                          size: "20",
                                                          class: "mr-2"
                                                        }, {
                                                          default: withCtx(() => [
                                                            (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                              "stroke-width": "2",
                                                              size: "20"
                                                            }))
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
                  _push3(`<div class="d-sm-flex align-center justify-space-between pt-5"${_scopeId2}><div class="text-grey100 font-weight-medium text-subtitle-1 text-sm-left text-center mb-sm-0 mb-2"${_scopeId2}> 1-6 of 32 </div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_pagination, {
                    modelValue: page.value,
                    "onUpdate:modelValue": ($event) => page.value = $event,
                    length: 4,
                    rounded: "circle",
                    density: "compact",
                    class: "text-subtitle-1 text-grey100"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-sm-flex d-block justify-space-between d-block align-center mb-4" }, [
                      createVNode("div", null, [
                        createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Latest Reviews"),
                        createVNode("div", { class: "text-subtitle-1 text-grey100 pb-1 font-weight-medium" }, " Reviewd received across all channels ")
                      ]),
                      createVNode("div", { class: "text-right my-sm-0 my-3" }, [
                        createVNode("div", { class: "d-flex align-center" }, [
                          createVNode("div", { class: "mr-3" }, [
                            createVNode(_component_v_text_field, {
                              placeholder: "Search",
                              color: "primary",
                              density: "compact",
                              variant: "outlined",
                              "hide-details": "",
                              style: { "min-width": "230px" }
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(SearchIcon), {
                                  size: "20",
                                  "stroke-width": "1.5",
                                  class: "mr-3"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(_component_v_btn, {
                            size: "40",
                            variant: "outlined",
                            color: "inputBorder",
                            class: "px-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_avatar, { size: "22" }, {
                                default: withCtx(() => [
                                  createVNode(_component_DotsVerticalIcon, {
                                    size: "20",
                                    color: "grey100"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_menu, { activator: "parent" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                        return openBlock(), createBlock(_component_v_list_item, {
                                          value: "action",
                                          key: list.listtitle,
                                          "hide-details": "",
                                          "min-height": "38"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_title, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_avatar, {
                                                  size: "20",
                                                  class: "mr-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                      "stroke-width": "2",
                                                      size: "20"
                                                    }))
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "border-table" }, [
                      createVNode(_component_v_table, { class: "mb-0" }, {
                        default: withCtx(() => [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "pl-0" }, [
                                createVNode(_component_v_checkbox, {
                                  color: "primary",
                                  density: "compact",
                                  "hide-details": ""
                                })
                              ]),
                              createVNode("th", { class: "text-h6 font-weight-semibold" }, "Products"),
                              createVNode("th", { class: "text-h6 font-weight-semibold" }, "Customer"),
                              createVNode("th", { class: "text-h6 font-weight-semibold" }, "Reviews"),
                              createVNode("th", { class: "text-h6 font-weight-semibold" }, "Status"),
                              createVNode("th", { class: "text-h6 font-weight-semibold" }, "Time"),
                              createVNode("th", { class: "text-h6 font-weight-semibold" })
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(LatestReviewData), (item) => {
                              return openBlock(), createBlock("tr", {
                                key: item.name,
                                class: "month-item"
                              }, [
                                createVNode("td", { class: "pl-0" }, [
                                  createVNode(_component_v_checkbox, {
                                    color: "primary",
                                    density: "compact",
                                    "hide-details": ""
                                  })
                                ]),
                                createVNode("td", null, [
                                  createVNode("div", { class: "d-flex align-center overflow-hidden" }, [
                                    createVNode("img", {
                                      src: item.img,
                                      alt: "user",
                                      width: "60"
                                    }, null, 8, ["src"]),
                                    createVNode("div", {
                                      class: "mx-4",
                                      style: { "width": "130px" }
                                    }, [
                                      createVNode("h6", { class: "text-h6 font-weight-semibold text-no-wrap text-truncate" }, toDisplayString(item.name), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("td", null, [
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode(_component_v_avatar, {
                                      size: "32",
                                      class: "mr-3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: item.profile,
                                          alt: "profile",
                                          height: "32",
                                          width: "32"
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", null, [
                                      createVNode("h6", { class: "text-h6 font-weight-semibold" }, toDisplayString(item.customername), 1),
                                      createVNode("div", { class: "text-subtitle-1 text-grey200" }, toDisplayString(item.customeremail), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("td", null, [
                                  createVNode("div", { class: "" }, [
                                    createVNode("div", { class: "ml-n1" }, [
                                      createVNode(_component_ClientOnly, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_rating, {
                                            modelValue: item.review,
                                            "onUpdate:modelValue": ($event) => item.review = $event,
                                            hover: "",
                                            density: "comfortable",
                                            "half-increments": "",
                                            readonly: "",
                                            size: "x-small",
                                            color: "warning"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    createVNode("p", { class: "text-grey200 text-subtitle-1 font-weight-medium line-clamp mt-n1" }, toDisplayString(item.reviewtext), 1)
                                  ])
                                ]),
                                createVNode("td", null, [
                                  createVNode(_component_v_chip, {
                                    class: "font-weight-medium bg-light" + item.statuscolor,
                                    variant: "outlined",
                                    size: "x-small",
                                    color: item.statuscolor
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.statustext), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "color"])
                                ]),
                                createVNode("td", null, [
                                  createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey200" }, toDisplayString(item.time), 1)
                                ]),
                                createVNode("td", { class: "text-right" }, [
                                  createVNode(_component_v_btn, {
                                    size: "30",
                                    icon: "",
                                    variant: "flat",
                                    class: "grey100"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_avatar, { size: "22" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_DotsVerticalIcon, {
                                            size: "20",
                                            color: "grey100"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_menu, { activator: "parent" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                                return openBlock(), createBlock(_component_v_list_item, {
                                                  value: "action",
                                                  key: list.listtitle,
                                                  "hide-details": "",
                                                  "min-height": "38"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_list_item_title, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_avatar, {
                                                          size: "20",
                                                          class: "mr-2"
                                                        }, {
                                                          default: withCtx(() => [
                                                            (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                              "stroke-width": "2",
                                                              size: "20"
                                                            }))
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_v_divider),
                    createVNode("div", { class: "d-sm-flex align-center justify-space-between pt-5" }, [
                      createVNode("div", { class: "text-grey100 font-weight-medium text-subtitle-1 text-sm-left text-center mb-sm-0 mb-2" }, " 1-6 of 32 "),
                      createVNode("div", null, [
                        createVNode(_component_v_pagination, {
                          modelValue: page.value,
                          "onUpdate:modelValue": ($event) => page.value = $event,
                          length: 4,
                          rounded: "circle",
                          density: "compact",
                          class: "text-subtitle-1 text-grey100"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
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
                  createVNode("div", { class: "d-sm-flex d-block justify-space-between d-block align-center mb-4" }, [
                    createVNode("div", null, [
                      createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Latest Reviews"),
                      createVNode("div", { class: "text-subtitle-1 text-grey100 pb-1 font-weight-medium" }, " Reviewd received across all channels ")
                    ]),
                    createVNode("div", { class: "text-right my-sm-0 my-3" }, [
                      createVNode("div", { class: "d-flex align-center" }, [
                        createVNode("div", { class: "mr-3" }, [
                          createVNode(_component_v_text_field, {
                            placeholder: "Search",
                            color: "primary",
                            density: "compact",
                            variant: "outlined",
                            "hide-details": "",
                            style: { "min-width": "230px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(SearchIcon), {
                                size: "20",
                                "stroke-width": "1.5",
                                class: "mr-3"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(_component_v_btn, {
                          size: "40",
                          variant: "outlined",
                          color: "inputBorder",
                          class: "px-6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_avatar, { size: "22" }, {
                              default: withCtx(() => [
                                createVNode(_component_DotsVerticalIcon, {
                                  size: "20",
                                  color: "grey100"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_menu, { activator: "parent" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                      return openBlock(), createBlock(_component_v_list_item, {
                                        value: "action",
                                        key: list.listtitle,
                                        "hide-details": "",
                                        "min-height": "38"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_title, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_avatar, {
                                                size: "20",
                                                class: "mr-2"
                                              }, {
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                    "stroke-width": "2",
                                                    size: "20"
                                                  }))
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "border-table" }, [
                    createVNode(_component_v_table, { class: "mb-0" }, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", { class: "pl-0" }, [
                              createVNode(_component_v_checkbox, {
                                color: "primary",
                                density: "compact",
                                "hide-details": ""
                              })
                            ]),
                            createVNode("th", { class: "text-h6 font-weight-semibold" }, "Products"),
                            createVNode("th", { class: "text-h6 font-weight-semibold" }, "Customer"),
                            createVNode("th", { class: "text-h6 font-weight-semibold" }, "Reviews"),
                            createVNode("th", { class: "text-h6 font-weight-semibold" }, "Status"),
                            createVNode("th", { class: "text-h6 font-weight-semibold" }, "Time"),
                            createVNode("th", { class: "text-h6 font-weight-semibold" })
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(LatestReviewData), (item) => {
                            return openBlock(), createBlock("tr", {
                              key: item.name,
                              class: "month-item"
                            }, [
                              createVNode("td", { class: "pl-0" }, [
                                createVNode(_component_v_checkbox, {
                                  color: "primary",
                                  density: "compact",
                                  "hide-details": ""
                                })
                              ]),
                              createVNode("td", null, [
                                createVNode("div", { class: "d-flex align-center overflow-hidden" }, [
                                  createVNode("img", {
                                    src: item.img,
                                    alt: "user",
                                    width: "60"
                                  }, null, 8, ["src"]),
                                  createVNode("div", {
                                    class: "mx-4",
                                    style: { "width": "130px" }
                                  }, [
                                    createVNode("h6", { class: "text-h6 font-weight-semibold text-no-wrap text-truncate" }, toDisplayString(item.name), 1)
                                  ])
                                ])
                              ]),
                              createVNode("td", null, [
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode(_component_v_avatar, {
                                    size: "32",
                                    class: "mr-3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: item.profile,
                                        alt: "profile",
                                        height: "32",
                                        width: "32"
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", null, [
                                    createVNode("h6", { class: "text-h6 font-weight-semibold" }, toDisplayString(item.customername), 1),
                                    createVNode("div", { class: "text-subtitle-1 text-grey200" }, toDisplayString(item.customeremail), 1)
                                  ])
                                ])
                              ]),
                              createVNode("td", null, [
                                createVNode("div", { class: "" }, [
                                  createVNode("div", { class: "ml-n1" }, [
                                    createVNode(_component_ClientOnly, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_rating, {
                                          modelValue: item.review,
                                          "onUpdate:modelValue": ($event) => item.review = $event,
                                          hover: "",
                                          density: "comfortable",
                                          "half-increments": "",
                                          readonly: "",
                                          size: "x-small",
                                          color: "warning"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  createVNode("p", { class: "text-grey200 text-subtitle-1 font-weight-medium line-clamp mt-n1" }, toDisplayString(item.reviewtext), 1)
                                ])
                              ]),
                              createVNode("td", null, [
                                createVNode(_component_v_chip, {
                                  class: "font-weight-medium bg-light" + item.statuscolor,
                                  variant: "outlined",
                                  size: "x-small",
                                  color: item.statuscolor
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.statustext), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class", "color"])
                              ]),
                              createVNode("td", null, [
                                createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey200" }, toDisplayString(item.time), 1)
                              ]),
                              createVNode("td", { class: "text-right" }, [
                                createVNode(_component_v_btn, {
                                  size: "30",
                                  icon: "",
                                  variant: "flat",
                                  class: "grey100"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_avatar, { size: "22" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_DotsVerticalIcon, {
                                          size: "20",
                                          color: "grey100"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_menu, { activator: "parent" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                              return openBlock(), createBlock(_component_v_list_item, {
                                                value: "action",
                                                key: list.listtitle,
                                                "hide-details": "",
                                                "min-height": "38"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_list_item_title, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_avatar, {
                                                        size: "20",
                                                        class: "mr-2"
                                                      }, {
                                                        default: withCtx(() => [
                                                          (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                            "stroke-width": "2",
                                                            size: "20"
                                                          }))
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_v_divider),
                  createVNode("div", { class: "d-sm-flex align-center justify-space-between pt-5" }, [
                    createVNode("div", { class: "text-grey100 font-weight-medium text-subtitle-1 text-sm-left text-center mb-sm-0 mb-2" }, " 1-6 of 32 "),
                    createVNode("div", null, [
                      createVNode(_component_v_pagination, {
                        modelValue: page.value,
                        "onUpdate:modelValue": ($event) => page.value = $event,
                        length: 4,
                        rounded: "circle",
                        density: "compact",
                        class: "text-subtitle-1 text-grey100"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboards/dashboard1/LatestReviews.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  setup() {
    const showSnackbar = ref(false);
    const close = () => {
      showSnackbar.value = false;
    };
    setTimeout(() => {
      showSnackbar.value = true;
    }, 1500);
    return {
      showSnackbar,
      close
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_snackbar = resolveComponent("v-snackbar");
  const _component_InfoCircleIcon = resolveComponent("InfoCircleIcon");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_XIcon = resolveComponent("XIcon");
  _push(ssrRenderComponent(_component_v_snackbar, mergeProps({
    rounded: "xl",
    color: "primary",
    class: "mt-4",
    modelValue: $setup.showSnackbar,
    "onUpdate:modelValue": ($event) => $setup.showSnackbar = $event,
    location: "top right",
    elevation: "0"
  }, _attrs), {
    actions: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_btn, {
          variant: "text",
          onClick: ($event) => $setup.showSnackbar = false
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_XIcon, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_XIcon)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_btn, {
            variant: "text",
            onClick: ($event) => $setup.showSnackbar = false
          }, {
            default: withCtx(() => [
              createVNode(_component_XIcon)
            ]),
            _: 1
          }, 8, ["onClick"])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="d-flex gap-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_InfoCircleIcon, { size: "22" }, null, _parent2, _scopeId));
        _push2(`<div class=""${_scopeId}><h5 class="text-body-1"${_scopeId}>Welcome to Spike Admin</h5><p class="text-12"${_scopeId}>Easy to costomize the Template!!!</p></div></div>`);
      } else {
        return [
          createVNode("div", { class: "d-flex gap-2" }, [
            createVNode(_component_InfoCircleIcon, { size: "22" }),
            createVNode("div", { class: "" }, [
              createVNode("h5", { class: "text-body-1" }, "Welcome to Spike Admin"),
              createVNode("p", { class: "text-12" }, "Easy to costomize the Template!!!")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboards/snackbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Snackbar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Snackbar, null, null, _parent));
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              lg: "6"
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
              md: "12",
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
                              _push5(ssrRenderComponent(_sfc_main$7, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$7)
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
                              _push5(ssrRenderComponent(_sfc_main$8, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$8)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$5, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$5)
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
                              _push5(ssrRenderComponent(_sfc_main$9, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$9)
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
                              createVNode(_sfc_main$7)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            class: "d-flex"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$8)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$5)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            class: "d-flex"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$9)
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
                            createVNode(_sfc_main$7)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "6",
                          class: "d-flex"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$8)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$5)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "6",
                          class: "d-flex"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$9)
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
                  _push3(ssrRenderComponent(_sfc_main$4, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$4)
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
              lg: "12"
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
          } else {
            return [
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$6)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                md: "12",
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
                          createVNode(_sfc_main$7)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "6",
                        class: "d-flex"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$8)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$5)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "6",
                        class: "d-flex"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$9)
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
                  createVNode(_sfc_main$4)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                lg: "12"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/dashboard1/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CKJdsCeC.js.map
