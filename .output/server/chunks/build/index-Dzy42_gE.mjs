import { defineComponent, ref, computed, watch, resolveComponent, withCtx, unref, createVNode, createBlock, openBlock, toDisplayString, createTextVNode, Fragment, renderList, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './BaseBreadcrumb-DAIjkUfv.mjs';
import { u as useInvoicestore } from './index-BkClx3X_.mjs';
import { Icon } from '@iconify/vue';
import './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "List",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useInvoicestore();
    const showConfirmation = ref(false);
    const ticketIdToDelete = ref(null);
    const getInvoice = computed(() => store.invoice);
    console.log("list", getInvoice);
    let FinalInvoice = ref([...getInvoice.value]);
    const searchValue = ref("");
    const InvoiceTypeVal = ref("total");
    const setInvoiceType = (type) => {
      InvoiceTypeVal.value = type;
      console.log(`InvoiceTypeVal changed to: ${type}`);
      if (InvoiceTypeVal.value === "total") {
        FinalInvoice.value = [...getInvoice.value];
      } else {
        FinalInvoice.value = getInvoice.value.filter((ticket) => {
          console.log("Filtering ticket:", ticket);
          return ticket.status && ticket.status.toLowerCase() === InvoiceTypeVal.value.toLowerCase();
        });
      }
      applySearchFilter();
    };
    const applySearchFilter = () => {
      if (InvoiceTypeVal.value === "total") {
        FinalInvoice.value = [...getInvoice.value];
      } else {
        FinalInvoice.value = getInvoice.value.filter((ticket) => {
          return ticket.status && ticket.status.toLowerCase() === InvoiceTypeVal.value.toLowerCase();
        });
      }
      if (searchValue.value) {
        FinalInvoice.value = FinalInvoice.value.filter(
          (invoice) => {
            var _a;
            return (_a = invoice.billFrom) == null ? void 0 : _a.toLowerCase().includes(searchValue.value.toLowerCase());
          }
        );
      }
    };
    watch(searchValue, applySearchFilter);
    const totalInvoiceCount = computed(() => getInvoice.value.length);
    const ShippedInvoiceCount = computed(
      () => getInvoice.value.filter((ticket) => ticket.status === "Shipped").length
    );
    const DeliveredInvoiceCount = computed(
      () => getInvoice.value.filter((ticket) => ticket.status === "Delivered").length
    );
    const PendingInvoiceCount = computed(
      () => getInvoice.value.filter((ticket) => ticket.status === "Pending").length
    );
    const handleDeleteTicket = (ticketId) => {
      ticketIdToDelete.value = ticketId;
      showConfirmation.value = true;
    };
    const confirmDelete = () => {
      if (ticketIdToDelete.value !== null) {
        store.deleteinvoice(ticketIdToDelete.value);
        ticketIdToDelete.value = null;
        showConfirmation.value = false;
        setInvoiceType(InvoiceTypeVal.value);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="overflow-x-reposive"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_row, { class: "d-flex flex-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "10",
                          md: "3",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="${ssrRenderClass([
                                "pa-6 d-flex ga-3 align-center cursor-pointer rounded-xl",
                                { "bg-bglight": InvoiceTypeVal.value === "total" }
                              ])}"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                size: "56",
                                class: "border border-md border-primary"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Icon), {
                                      icon: "solar:tag-horizontal-broken",
                                      height: "25",
                                      class: "text-primary"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(Icon), {
                                        icon: "solar:tag-horizontal-broken",
                                        height: "25",
                                        class: "text-primary"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div${_scopeId4}><h6 class="text-h6"${_scopeId4}>Total</h6>`);
                              if (totalInvoiceCount.value == 0) {
                                _push5(`<p class="text-14 lh-normal"${_scopeId4}>0 invoices</p>`);
                              } else {
                                _push5(`<p class="text-14 lh-normal"${_scopeId4}>${ssrInterpolate(totalInvoiceCount.value)} invoices</p>`);
                              }
                              _push5(`<h5 class="text-14 lh-normal"${_scopeId4}>$46,218.04</h5></div></div>`);
                            } else {
                              return [
                                createVNode("div", {
                                  class: [
                                    "pa-6 d-flex ga-3 align-center cursor-pointer rounded-xl",
                                    { "bg-bglight": InvoiceTypeVal.value === "total" }
                                  ],
                                  onClick: ($event) => setInvoiceType("total")
                                }, [
                                  createVNode(_component_v_avatar, {
                                    size: "56",
                                    class: "border border-md border-primary"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Icon), {
                                        icon: "solar:tag-horizontal-broken",
                                        height: "25",
                                        class: "text-primary"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", null, [
                                    createVNode("h6", { class: "text-h6" }, "Total"),
                                    totalInvoiceCount.value == 0 ? (openBlock(), createBlock("p", {
                                      key: 0,
                                      class: "text-14 lh-normal"
                                    }, "0 invoices")) : (openBlock(), createBlock("p", {
                                      key: 1,
                                      class: "text-14 lh-normal"
                                    }, toDisplayString(totalInvoiceCount.value) + " invoices", 1)),
                                    createVNode("h5", { class: "text-14 lh-normal" }, "$46,218.04")
                                  ])
                                ], 10, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "10",
                          md: "3",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="${ssrRenderClass([
                                "pa-6 d-flex ga-3 align-center cursor-pointer rounded-xl",
                                { "bg-bglight": InvoiceTypeVal.value === "Shipped" }
                              ])}"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                size: "56",
                                class: "border border-md border-success"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Icon), {
                                      icon: "solar:shield-up-linear",
                                      height: "25",
                                      class: "text-success"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(Icon), {
                                        icon: "solar:shield-up-linear",
                                        height: "25",
                                        class: "text-success"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div${_scopeId4}><h6 class="text-h6"${_scopeId4}>Shipped</h6>`);
                              if (ShippedInvoiceCount.value == 0) {
                                _push5(`<p class="text-14 lh-normal"${_scopeId4}>0 invoices</p>`);
                              } else {
                                _push5(`<p class="text-14 lh-normal"${_scopeId4}>${ssrInterpolate(ShippedInvoiceCount.value)} invoices</p>`);
                              }
                              _push5(`<h5 class="text-14 lh-normal"${_scopeId4}>$23,110.23</h5></div></div>`);
                            } else {
                              return [
                                createVNode("div", {
                                  class: [
                                    "pa-6 d-flex ga-3 align-center cursor-pointer rounded-xl",
                                    { "bg-bglight": InvoiceTypeVal.value === "Shipped" }
                                  ],
                                  onClick: ($event) => setInvoiceType("Shipped")
                                }, [
                                  createVNode(_component_v_avatar, {
                                    size: "56",
                                    class: "border border-md border-success"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Icon), {
                                        icon: "solar:shield-up-linear",
                                        height: "25",
                                        class: "text-success"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", null, [
                                    createVNode("h6", { class: "text-h6" }, "Shipped"),
                                    ShippedInvoiceCount.value == 0 ? (openBlock(), createBlock("p", {
                                      key: 0,
                                      class: "text-14 lh-normal"
                                    }, "0 invoices")) : (openBlock(), createBlock("p", {
                                      key: 1,
                                      class: "text-14 lh-normal"
                                    }, toDisplayString(ShippedInvoiceCount.value) + " invoices", 1)),
                                    createVNode("h5", { class: "text-14 lh-normal" }, "$23,110.23")
                                  ])
                                ], 10, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "10",
                          md: "3",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="${ssrRenderClass([
                                "pa-6 d-flex ga-3 align-center cursor-pointer rounded-xl",
                                { "bg-bglight": InvoiceTypeVal.value === "Delivered" }
                              ])}"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                size: "56",
                                class: "border border-md border-info"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Icon), {
                                      icon: "solar:map-point-wave-linear",
                                      height: "25",
                                      class: "text-info"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(Icon), {
                                        icon: "solar:map-point-wave-linear",
                                        height: "25",
                                        class: "text-info"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div${_scopeId4}><h6 class="text-h6"${_scopeId4}>Delivered</h6>`);
                              if (DeliveredInvoiceCount.value == 0) {
                                _push5(`<p class="text-14 lh-normal"${_scopeId4}>0 invoices</p>`);
                              } else {
                                _push5(`<p class="text-14 lh-normal"${_scopeId4}>${ssrInterpolate(DeliveredInvoiceCount.value)} invoices</p>`);
                              }
                              _push5(`<h5 class="text-14 lh-normal"${_scopeId4}>$13,825.05</h5></div></div>`);
                            } else {
                              return [
                                createVNode("div", {
                                  class: [
                                    "pa-6 d-flex ga-3 align-center cursor-pointer rounded-xl",
                                    { "bg-bglight": InvoiceTypeVal.value === "Delivered" }
                                  ],
                                  onClick: ($event) => setInvoiceType("Delivered")
                                }, [
                                  createVNode(_component_v_avatar, {
                                    size: "56",
                                    class: "border border-md border-info"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Icon), {
                                        icon: "solar:map-point-wave-linear",
                                        height: "25",
                                        class: "text-info"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", null, [
                                    createVNode("h6", { class: "text-h6" }, "Delivered"),
                                    DeliveredInvoiceCount.value == 0 ? (openBlock(), createBlock("p", {
                                      key: 0,
                                      class: "text-14 lh-normal"
                                    }, "0 invoices")) : (openBlock(), createBlock("p", {
                                      key: 1,
                                      class: "text-14 lh-normal"
                                    }, toDisplayString(DeliveredInvoiceCount.value) + " invoices", 1)),
                                    createVNode("h5", { class: "text-14 lh-normal" }, "$13,825.05")
                                  ])
                                ], 10, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "10",
                          md: "3",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="${ssrRenderClass([
                                "pa-6 d-flex ga-3 align-center cursor-pointer rounded-xl",
                                { "bg-bglight": InvoiceTypeVal.value === "Pending" }
                              ])}"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                size: "56",
                                class: "border border-md border-warning"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Icon), {
                                      icon: "solar:camera-rotate-broken",
                                      height: "25",
                                      class: "text-warning"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(Icon), {
                                        icon: "solar:camera-rotate-broken",
                                        height: "25",
                                        class: "text-warning"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div${_scopeId4}><h6 class="text-h6"${_scopeId4}>Pending</h6>`);
                              if (PendingInvoiceCount.value == 0) {
                                _push5(`<p class="text-14 lh-normal"${_scopeId4}>0 invoices</p>`);
                              } else {
                                _push5(`<p class="text-14 lh-normal"${_scopeId4}>${ssrInterpolate(PendingInvoiceCount.value)} invoices</p>`);
                              }
                              _push5(`<h5 class="text-14 lh-normal"${_scopeId4}>$4,655.63</h5></div></div>`);
                            } else {
                              return [
                                createVNode("div", {
                                  class: [
                                    "pa-6 d-flex ga-3 align-center cursor-pointer rounded-xl",
                                    { "bg-bglight": InvoiceTypeVal.value === "Pending" }
                                  ],
                                  onClick: ($event) => setInvoiceType("Pending")
                                }, [
                                  createVNode(_component_v_avatar, {
                                    size: "56",
                                    class: "border border-md border-warning"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Icon), {
                                        icon: "solar:camera-rotate-broken",
                                        height: "25",
                                        class: "text-warning"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", null, [
                                    createVNode("h6", { class: "text-h6" }, "Pending"),
                                    PendingInvoiceCount.value == 0 ? (openBlock(), createBlock("p", {
                                      key: 0,
                                      class: "text-14 lh-normal"
                                    }, "0 invoices")) : (openBlock(), createBlock("p", {
                                      key: 1,
                                      class: "text-14 lh-normal"
                                    }, toDisplayString(PendingInvoiceCount.value) + " invoices", 1)),
                                    createVNode("h5", { class: "text-14 lh-normal" }, "$4,655.63")
                                  ])
                                ], 10, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "10",
                            md: "3",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: [
                                  "pa-6 d-flex ga-3 align-center cursor-pointer rounded-xl",
                                  { "bg-bglight": InvoiceTypeVal.value === "total" }
                                ],
                                onClick: ($event) => setInvoiceType("total")
                              }, [
                                createVNode(_component_v_avatar, {
                                  size: "56",
                                  class: "border border-md border-primary"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), {
                                      icon: "solar:tag-horizontal-broken",
                                      height: "25",
                                      class: "text-primary"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", null, [
                                  createVNode("h6", { class: "text-h6" }, "Total"),
                                  totalInvoiceCount.value == 0 ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "text-14 lh-normal"
                                  }, "0 invoices")) : (openBlock(), createBlock("p", {
                                    key: 1,
                                    class: "text-14 lh-normal"
                                  }, toDisplayString(totalInvoiceCount.value) + " invoices", 1)),
                                  createVNode("h5", { class: "text-14 lh-normal" }, "$46,218.04")
                                ])
                              ], 10, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "10",
                            md: "3",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: [
                                  "pa-6 d-flex ga-3 align-center cursor-pointer rounded-xl",
                                  { "bg-bglight": InvoiceTypeVal.value === "Shipped" }
                                ],
                                onClick: ($event) => setInvoiceType("Shipped")
                              }, [
                                createVNode(_component_v_avatar, {
                                  size: "56",
                                  class: "border border-md border-success"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), {
                                      icon: "solar:shield-up-linear",
                                      height: "25",
                                      class: "text-success"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", null, [
                                  createVNode("h6", { class: "text-h6" }, "Shipped"),
                                  ShippedInvoiceCount.value == 0 ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "text-14 lh-normal"
                                  }, "0 invoices")) : (openBlock(), createBlock("p", {
                                    key: 1,
                                    class: "text-14 lh-normal"
                                  }, toDisplayString(ShippedInvoiceCount.value) + " invoices", 1)),
                                  createVNode("h5", { class: "text-14 lh-normal" }, "$23,110.23")
                                ])
                              ], 10, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "10",
                            md: "3",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: [
                                  "pa-6 d-flex ga-3 align-center cursor-pointer rounded-xl",
                                  { "bg-bglight": InvoiceTypeVal.value === "Delivered" }
                                ],
                                onClick: ($event) => setInvoiceType("Delivered")
                              }, [
                                createVNode(_component_v_avatar, {
                                  size: "56",
                                  class: "border border-md border-info"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), {
                                      icon: "solar:map-point-wave-linear",
                                      height: "25",
                                      class: "text-info"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", null, [
                                  createVNode("h6", { class: "text-h6" }, "Delivered"),
                                  DeliveredInvoiceCount.value == 0 ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "text-14 lh-normal"
                                  }, "0 invoices")) : (openBlock(), createBlock("p", {
                                    key: 1,
                                    class: "text-14 lh-normal"
                                  }, toDisplayString(DeliveredInvoiceCount.value) + " invoices", 1)),
                                  createVNode("h5", { class: "text-14 lh-normal" }, "$13,825.05")
                                ])
                              ], 10, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "10",
                            md: "3",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: [
                                  "pa-6 d-flex ga-3 align-center cursor-pointer rounded-xl",
                                  { "bg-bglight": InvoiceTypeVal.value === "Pending" }
                                ],
                                onClick: ($event) => setInvoiceType("Pending")
                              }, [
                                createVNode(_component_v_avatar, {
                                  size: "56",
                                  class: "border border-md border-warning"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), {
                                      icon: "solar:camera-rotate-broken",
                                      height: "25",
                                      class: "text-warning"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", null, [
                                  createVNode("h6", { class: "text-h6" }, "Pending"),
                                  PendingInvoiceCount.value == 0 ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "text-14 lh-normal"
                                  }, "0 invoices")) : (openBlock(), createBlock("p", {
                                    key: 1,
                                    class: "text-14 lh-normal"
                                  }, toDisplayString(PendingInvoiceCount.value) + " invoices", 1)),
                                  createVNode("h5", { class: "text-14 lh-normal" }, "$4,655.63")
                                ])
                              ], 10, ["onClick"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class=""${_scopeId2}><div class="d-sm-flex justify-space-between align-center my-7"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_sheet, {
                    width: "255",
                    class: "mb-lg-0 mb-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_text_field, {
                          modelValue: searchValue.value,
                          "onUpdate:modelValue": ($event) => searchValue.value = $event,
                          label: "Search Invoice",
                          variant: "outlined",
                          "hide-details": "",
                          class: "w-100",
                          density: "compact"
                        }, {
                          "prepend-inner": withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Icon), {
                                icon: "solar:magnifer-linear",
                                height: "18",
                                width: "25"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Icon), {
                                  icon: "solar:magnifer-linear",
                                  height: "18",
                                  width: "25"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_text_field, {
                            modelValue: searchValue.value,
                            "onUpdate:modelValue": ($event) => searchValue.value = $event,
                            label: "Search Invoice",
                            variant: "outlined",
                            "hide-details": "",
                            class: "w-100",
                            density: "compact"
                          }, {
                            "prepend-inner": withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "solar:magnifer-linear",
                                height: "18",
                                width: "25"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "primary",
                    rounded: "pill",
                    flat: "",
                    to: "/apps/invoice/create"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`New Invoice`);
                      } else {
                        return [
                          createTextVNode("New Invoice")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_v_table, { class: "invoice-table" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<thead${_scopeId3}><tr${_scopeId3}><th class="text-14"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_checkbox, {
                          "hide-details": "",
                          color: "primary"
                        }, null, _parent4, _scopeId3));
                        _push4(`</th><th class="text-14 text-no-wrap"${_scopeId3}>ID</th><th class="text-14 text-no-wrap"${_scopeId3}>BILL FROM</th><th class="text-14 text-no-wrap"${_scopeId3}>BILL TO</th><th class="text-14 text-no-wrap"${_scopeId3}>TOTAL COST</th><th class="text-14 text-no-wrap"${_scopeId3}>STATUS</th><th class="text-14 text-no-wrap text-center"${_scopeId3}>ACTION</th></tr></thead><tbody${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(FinalInvoice), (invoice) => {
                          _push4(`<tr${_scopeId3}><td${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_checkbox, {
                            color: "primary",
                            "hide-details": ""
                          }, null, _parent4, _scopeId3));
                          _push4(`</td><td class="text-14 font-weight-semibold"${_scopeId3}>${ssrInterpolate(invoice.id)}</td><td class="text-14 font-weight-semibold text-no-wrap"${_scopeId3}>${ssrInterpolate(invoice.billFrom)}</td><td class="text-14 text-no-wrap"${_scopeId3}>${ssrInterpolate(invoice.billTo)}</td><td class="text-14 text-no-wrap"${_scopeId3}>${ssrInterpolate(unref(store).grandTotal(invoice))}</td><td${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_chip, {
                            rounded: "pill",
                            color: invoice.status === "Shipped" ? "success" : invoice.status === "Delivered" ? "info" : invoice.status === "Pending" ? "warning" : "primary",
                            variant: "flat",
                            size: "small",
                            label: ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(invoice.status)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(invoice.status), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</td><td${_scopeId3}><div class="d-flex ga-3 align-center justify-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_RouterLink, {
                            to: `/apps/invoice/edit/${invoice.id}`
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_avatar, {
                                  color: "lightsuccess",
                                  size: "32"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(Icon), {
                                        icon: "solar:pen-linear",
                                        class: "text-success",
                                        height: "18"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(Icon), {
                                          icon: "solar:pen-linear",
                                          class: "text-success",
                                          height: "18"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_tooltip, {
                                  activator: "parent",
                                  location: "bottom"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Edit Invoice`);
                                    } else {
                                      return [
                                        createTextVNode("Edit Invoice")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_avatar, {
                                    color: "lightsuccess",
                                    size: "32"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Icon), {
                                        icon: "solar:pen-linear",
                                        class: "text-success",
                                        height: "18"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_tooltip, {
                                    activator: "parent",
                                    location: "bottom"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Edit Invoice")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_RouterLink, {
                            to: `/apps/invoice/details/${invoice.id}`
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_avatar, {
                                  color: "lightprimary",
                                  size: "32"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(Icon), {
                                        icon: "solar:eye-linear",
                                        class: "text-primary",
                                        height: "18"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(Icon), {
                                          icon: "solar:eye-linear",
                                          class: "text-primary",
                                          height: "18"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_tooltip, {
                                  activator: "parent",
                                  location: "bottom"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`View Invoice`);
                                    } else {
                                      return [
                                        createTextVNode("View Invoice")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_avatar, {
                                    color: "lightprimary",
                                    size: "32"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Icon), {
                                        icon: "solar:eye-linear",
                                        class: "text-primary",
                                        height: "18"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_tooltip, {
                                    activator: "parent",
                                    location: "bottom"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("View Invoice")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_RouterLink, {
                            to: "",
                            onClick: ($event) => handleDeleteTicket(invoice.id),
                            class: "cursor-pointer"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_avatar, {
                                  color: "lighterror",
                                  size: "32"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(Icon), {
                                        icon: "solar:trash-bin-minimalistic-linear",
                                        class: "text-error",
                                        height: "18"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(Icon), {
                                          icon: "solar:trash-bin-minimalistic-linear",
                                          class: "text-error",
                                          height: "18"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_tooltip, {
                                  activator: "parent",
                                  location: "bottom"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Delete Invoice`);
                                    } else {
                                      return [
                                        createTextVNode("Delete Invoice")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_avatar, {
                                    color: "lighterror",
                                    size: "32"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Icon), {
                                        icon: "solar:trash-bin-minimalistic-linear",
                                        class: "text-error",
                                        height: "18"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_tooltip, {
                                    activator: "parent",
                                    location: "bottom"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Delete Invoice")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></td></tr>`);
                        });
                        _push4(`<!--]--></tbody>`);
                      } else {
                        return [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "text-14" }, [
                                createVNode(_component_v_checkbox, {
                                  "hide-details": "",
                                  color: "primary"
                                })
                              ]),
                              createVNode("th", { class: "text-14 text-no-wrap" }, "ID"),
                              createVNode("th", { class: "text-14 text-no-wrap" }, "BILL FROM"),
                              createVNode("th", { class: "text-14 text-no-wrap" }, "BILL TO"),
                              createVNode("th", { class: "text-14 text-no-wrap" }, "TOTAL COST"),
                              createVNode("th", { class: "text-14 text-no-wrap" }, "STATUS"),
                              createVNode("th", { class: "text-14 text-no-wrap text-center" }, "ACTION")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(FinalInvoice), (invoice) => {
                              return openBlock(), createBlock("tr", {
                                key: invoice.id
                              }, [
                                createVNode("td", null, [
                                  createVNode(_component_v_checkbox, {
                                    color: "primary",
                                    "hide-details": ""
                                  })
                                ]),
                                createVNode("td", { class: "text-14 font-weight-semibold" }, toDisplayString(invoice.id), 1),
                                createVNode("td", { class: "text-14 font-weight-semibold text-no-wrap" }, toDisplayString(invoice.billFrom), 1),
                                createVNode("td", { class: "text-14 text-no-wrap" }, toDisplayString(invoice.billTo), 1),
                                createVNode("td", { class: "text-14 text-no-wrap" }, toDisplayString(unref(store).grandTotal(invoice)), 1),
                                createVNode("td", null, [
                                  createVNode(_component_v_chip, {
                                    rounded: "pill",
                                    color: invoice.status === "Shipped" ? "success" : invoice.status === "Delivered" ? "info" : invoice.status === "Pending" ? "warning" : "primary",
                                    variant: "flat",
                                    size: "small",
                                    label: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(invoice.status), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                createVNode("td", null, [
                                  createVNode("div", { class: "d-flex ga-3 align-center justify-center" }, [
                                    createVNode(_component_RouterLink, {
                                      to: `/apps/invoice/edit/${invoice.id}`
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_avatar, {
                                          color: "lightsuccess",
                                          size: "32"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Icon), {
                                              icon: "solar:pen-linear",
                                              class: "text-success",
                                              height: "18"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_tooltip, {
                                          activator: "parent",
                                          location: "bottom"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Edit Invoice")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["to"]),
                                    createVNode(_component_RouterLink, {
                                      to: `/apps/invoice/details/${invoice.id}`
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_avatar, {
                                          color: "lightprimary",
                                          size: "32"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Icon), {
                                              icon: "solar:eye-linear",
                                              class: "text-primary",
                                              height: "18"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_tooltip, {
                                          activator: "parent",
                                          location: "bottom"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("View Invoice")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["to"]),
                                    createVNode(_component_RouterLink, {
                                      to: "",
                                      onClick: withModifiers(($event) => handleDeleteTicket(invoice.id), ["stop"]),
                                      class: "cursor-pointer"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_avatar, {
                                          color: "lighterror",
                                          size: "32"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Icon), {
                                              icon: "solar:trash-bin-minimalistic-linear",
                                              class: "text-error",
                                              height: "18"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_tooltip, {
                                          activator: "parent",
                                          location: "bottom"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Delete Invoice")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ])
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
                    createVNode("div", { class: "overflow-x-reposive" }, [
                      createVNode(_component_v_row, { class: "d-flex flex-nowrap" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "10",
                            md: "3",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: [
                                  "pa-6 d-flex ga-3 align-center cursor-pointer rounded-xl",
                                  { "bg-bglight": InvoiceTypeVal.value === "total" }
                                ],
                                onClick: ($event) => setInvoiceType("total")
                              }, [
                                createVNode(_component_v_avatar, {
                                  size: "56",
                                  class: "border border-md border-primary"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), {
                                      icon: "solar:tag-horizontal-broken",
                                      height: "25",
                                      class: "text-primary"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", null, [
                                  createVNode("h6", { class: "text-h6" }, "Total"),
                                  totalInvoiceCount.value == 0 ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "text-14 lh-normal"
                                  }, "0 invoices")) : (openBlock(), createBlock("p", {
                                    key: 1,
                                    class: "text-14 lh-normal"
                                  }, toDisplayString(totalInvoiceCount.value) + " invoices", 1)),
                                  createVNode("h5", { class: "text-14 lh-normal" }, "$46,218.04")
                                ])
                              ], 10, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "10",
                            md: "3",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: [
                                  "pa-6 d-flex ga-3 align-center cursor-pointer rounded-xl",
                                  { "bg-bglight": InvoiceTypeVal.value === "Shipped" }
                                ],
                                onClick: ($event) => setInvoiceType("Shipped")
                              }, [
                                createVNode(_component_v_avatar, {
                                  size: "56",
                                  class: "border border-md border-success"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), {
                                      icon: "solar:shield-up-linear",
                                      height: "25",
                                      class: "text-success"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", null, [
                                  createVNode("h6", { class: "text-h6" }, "Shipped"),
                                  ShippedInvoiceCount.value == 0 ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "text-14 lh-normal"
                                  }, "0 invoices")) : (openBlock(), createBlock("p", {
                                    key: 1,
                                    class: "text-14 lh-normal"
                                  }, toDisplayString(ShippedInvoiceCount.value) + " invoices", 1)),
                                  createVNode("h5", { class: "text-14 lh-normal" }, "$23,110.23")
                                ])
                              ], 10, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "10",
                            md: "3",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: [
                                  "pa-6 d-flex ga-3 align-center cursor-pointer rounded-xl",
                                  { "bg-bglight": InvoiceTypeVal.value === "Delivered" }
                                ],
                                onClick: ($event) => setInvoiceType("Delivered")
                              }, [
                                createVNode(_component_v_avatar, {
                                  size: "56",
                                  class: "border border-md border-info"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), {
                                      icon: "solar:map-point-wave-linear",
                                      height: "25",
                                      class: "text-info"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", null, [
                                  createVNode("h6", { class: "text-h6" }, "Delivered"),
                                  DeliveredInvoiceCount.value == 0 ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "text-14 lh-normal"
                                  }, "0 invoices")) : (openBlock(), createBlock("p", {
                                    key: 1,
                                    class: "text-14 lh-normal"
                                  }, toDisplayString(DeliveredInvoiceCount.value) + " invoices", 1)),
                                  createVNode("h5", { class: "text-14 lh-normal" }, "$13,825.05")
                                ])
                              ], 10, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "10",
                            md: "3",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: [
                                  "pa-6 d-flex ga-3 align-center cursor-pointer rounded-xl",
                                  { "bg-bglight": InvoiceTypeVal.value === "Pending" }
                                ],
                                onClick: ($event) => setInvoiceType("Pending")
                              }, [
                                createVNode(_component_v_avatar, {
                                  size: "56",
                                  class: "border border-md border-warning"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), {
                                      icon: "solar:camera-rotate-broken",
                                      height: "25",
                                      class: "text-warning"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", null, [
                                  createVNode("h6", { class: "text-h6" }, "Pending"),
                                  PendingInvoiceCount.value == 0 ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "text-14 lh-normal"
                                  }, "0 invoices")) : (openBlock(), createBlock("p", {
                                    key: 1,
                                    class: "text-14 lh-normal"
                                  }, toDisplayString(PendingInvoiceCount.value) + " invoices", 1)),
                                  createVNode("h5", { class: "text-14 lh-normal" }, "$4,655.63")
                                ])
                              ], 10, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "" }, [
                      createVNode("div", { class: "d-sm-flex justify-space-between align-center my-7" }, [
                        createVNode(_component_v_sheet, {
                          width: "255",
                          class: "mb-lg-0 mb-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              modelValue: searchValue.value,
                              "onUpdate:modelValue": ($event) => searchValue.value = $event,
                              label: "Search Invoice",
                              variant: "outlined",
                              "hide-details": "",
                              class: "w-100",
                              density: "compact"
                            }, {
                              "prepend-inner": withCtx(() => [
                                createVNode(unref(Icon), {
                                  icon: "solar:magnifer-linear",
                                  height: "18",
                                  width: "25"
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_btn, {
                          color: "primary",
                          rounded: "pill",
                          flat: "",
                          to: "/apps/invoice/create"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("New Invoice")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_v_table, { class: "invoice-table" }, {
                        default: withCtx(() => [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "text-14" }, [
                                createVNode(_component_v_checkbox, {
                                  "hide-details": "",
                                  color: "primary"
                                })
                              ]),
                              createVNode("th", { class: "text-14 text-no-wrap" }, "ID"),
                              createVNode("th", { class: "text-14 text-no-wrap" }, "BILL FROM"),
                              createVNode("th", { class: "text-14 text-no-wrap" }, "BILL TO"),
                              createVNode("th", { class: "text-14 text-no-wrap" }, "TOTAL COST"),
                              createVNode("th", { class: "text-14 text-no-wrap" }, "STATUS"),
                              createVNode("th", { class: "text-14 text-no-wrap text-center" }, "ACTION")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(FinalInvoice), (invoice) => {
                              return openBlock(), createBlock("tr", {
                                key: invoice.id
                              }, [
                                createVNode("td", null, [
                                  createVNode(_component_v_checkbox, {
                                    color: "primary",
                                    "hide-details": ""
                                  })
                                ]),
                                createVNode("td", { class: "text-14 font-weight-semibold" }, toDisplayString(invoice.id), 1),
                                createVNode("td", { class: "text-14 font-weight-semibold text-no-wrap" }, toDisplayString(invoice.billFrom), 1),
                                createVNode("td", { class: "text-14 text-no-wrap" }, toDisplayString(invoice.billTo), 1),
                                createVNode("td", { class: "text-14 text-no-wrap" }, toDisplayString(unref(store).grandTotal(invoice)), 1),
                                createVNode("td", null, [
                                  createVNode(_component_v_chip, {
                                    rounded: "pill",
                                    color: invoice.status === "Shipped" ? "success" : invoice.status === "Delivered" ? "info" : invoice.status === "Pending" ? "warning" : "primary",
                                    variant: "flat",
                                    size: "small",
                                    label: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(invoice.status), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                createVNode("td", null, [
                                  createVNode("div", { class: "d-flex ga-3 align-center justify-center" }, [
                                    createVNode(_component_RouterLink, {
                                      to: `/apps/invoice/edit/${invoice.id}`
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_avatar, {
                                          color: "lightsuccess",
                                          size: "32"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Icon), {
                                              icon: "solar:pen-linear",
                                              class: "text-success",
                                              height: "18"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_tooltip, {
                                          activator: "parent",
                                          location: "bottom"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Edit Invoice")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["to"]),
                                    createVNode(_component_RouterLink, {
                                      to: `/apps/invoice/details/${invoice.id}`
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_avatar, {
                                          color: "lightprimary",
                                          size: "32"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Icon), {
                                              icon: "solar:eye-linear",
                                              class: "text-primary",
                                              height: "18"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_tooltip, {
                                          activator: "parent",
                                          location: "bottom"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("View Invoice")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["to"]),
                                    createVNode(_component_RouterLink, {
                                      to: "",
                                      onClick: withModifiers(($event) => handleDeleteTicket(invoice.id), ["stop"]),
                                      class: "cursor-pointer"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_avatar, {
                                          color: "lighterror",
                                          size: "32"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Icon), {
                                              icon: "solar:trash-bin-minimalistic-linear",
                                              class: "text-error",
                                              height: "18"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_tooltip, {
                                          activator: "parent",
                                          location: "bottom"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Delete Invoice")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ])
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
              createVNode(_component_v_card_item, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "overflow-x-reposive" }, [
                    createVNode(_component_v_row, { class: "d-flex flex-nowrap" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "10",
                          md: "3",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: [
                                "pa-6 d-flex ga-3 align-center cursor-pointer rounded-xl",
                                { "bg-bglight": InvoiceTypeVal.value === "total" }
                              ],
                              onClick: ($event) => setInvoiceType("total")
                            }, [
                              createVNode(_component_v_avatar, {
                                size: "56",
                                class: "border border-md border-primary"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "solar:tag-horizontal-broken",
                                    height: "25",
                                    class: "text-primary"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", null, [
                                createVNode("h6", { class: "text-h6" }, "Total"),
                                totalInvoiceCount.value == 0 ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-14 lh-normal"
                                }, "0 invoices")) : (openBlock(), createBlock("p", {
                                  key: 1,
                                  class: "text-14 lh-normal"
                                }, toDisplayString(totalInvoiceCount.value) + " invoices", 1)),
                                createVNode("h5", { class: "text-14 lh-normal" }, "$46,218.04")
                              ])
                            ], 10, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "10",
                          md: "3",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: [
                                "pa-6 d-flex ga-3 align-center cursor-pointer rounded-xl",
                                { "bg-bglight": InvoiceTypeVal.value === "Shipped" }
                              ],
                              onClick: ($event) => setInvoiceType("Shipped")
                            }, [
                              createVNode(_component_v_avatar, {
                                size: "56",
                                class: "border border-md border-success"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "solar:shield-up-linear",
                                    height: "25",
                                    class: "text-success"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", null, [
                                createVNode("h6", { class: "text-h6" }, "Shipped"),
                                ShippedInvoiceCount.value == 0 ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-14 lh-normal"
                                }, "0 invoices")) : (openBlock(), createBlock("p", {
                                  key: 1,
                                  class: "text-14 lh-normal"
                                }, toDisplayString(ShippedInvoiceCount.value) + " invoices", 1)),
                                createVNode("h5", { class: "text-14 lh-normal" }, "$23,110.23")
                              ])
                            ], 10, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "10",
                          md: "3",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: [
                                "pa-6 d-flex ga-3 align-center cursor-pointer rounded-xl",
                                { "bg-bglight": InvoiceTypeVal.value === "Delivered" }
                              ],
                              onClick: ($event) => setInvoiceType("Delivered")
                            }, [
                              createVNode(_component_v_avatar, {
                                size: "56",
                                class: "border border-md border-info"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "solar:map-point-wave-linear",
                                    height: "25",
                                    class: "text-info"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", null, [
                                createVNode("h6", { class: "text-h6" }, "Delivered"),
                                DeliveredInvoiceCount.value == 0 ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-14 lh-normal"
                                }, "0 invoices")) : (openBlock(), createBlock("p", {
                                  key: 1,
                                  class: "text-14 lh-normal"
                                }, toDisplayString(DeliveredInvoiceCount.value) + " invoices", 1)),
                                createVNode("h5", { class: "text-14 lh-normal" }, "$13,825.05")
                              ])
                            ], 10, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "10",
                          md: "3",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: [
                                "pa-6 d-flex ga-3 align-center cursor-pointer rounded-xl",
                                { "bg-bglight": InvoiceTypeVal.value === "Pending" }
                              ],
                              onClick: ($event) => setInvoiceType("Pending")
                            }, [
                              createVNode(_component_v_avatar, {
                                size: "56",
                                class: "border border-md border-warning"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "solar:camera-rotate-broken",
                                    height: "25",
                                    class: "text-warning"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", null, [
                                createVNode("h6", { class: "text-h6" }, "Pending"),
                                PendingInvoiceCount.value == 0 ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-14 lh-normal"
                                }, "0 invoices")) : (openBlock(), createBlock("p", {
                                  key: 1,
                                  class: "text-14 lh-normal"
                                }, toDisplayString(PendingInvoiceCount.value) + " invoices", 1)),
                                createVNode("h5", { class: "text-14 lh-normal" }, "$4,655.63")
                              ])
                            ], 10, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "" }, [
                    createVNode("div", { class: "d-sm-flex justify-space-between align-center my-7" }, [
                      createVNode(_component_v_sheet, {
                        width: "255",
                        class: "mb-lg-0 mb-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            modelValue: searchValue.value,
                            "onUpdate:modelValue": ($event) => searchValue.value = $event,
                            label: "Search Invoice",
                            variant: "outlined",
                            "hide-details": "",
                            class: "w-100",
                            density: "compact"
                          }, {
                            "prepend-inner": withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "solar:magnifer-linear",
                                height: "18",
                                width: "25"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_btn, {
                        color: "primary",
                        rounded: "pill",
                        flat: "",
                        to: "/apps/invoice/create"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("New Invoice")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_v_table, { class: "invoice-table" }, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", { class: "text-14" }, [
                              createVNode(_component_v_checkbox, {
                                "hide-details": "",
                                color: "primary"
                              })
                            ]),
                            createVNode("th", { class: "text-14 text-no-wrap" }, "ID"),
                            createVNode("th", { class: "text-14 text-no-wrap" }, "BILL FROM"),
                            createVNode("th", { class: "text-14 text-no-wrap" }, "BILL TO"),
                            createVNode("th", { class: "text-14 text-no-wrap" }, "TOTAL COST"),
                            createVNode("th", { class: "text-14 text-no-wrap" }, "STATUS"),
                            createVNode("th", { class: "text-14 text-no-wrap text-center" }, "ACTION")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(FinalInvoice), (invoice) => {
                            return openBlock(), createBlock("tr", {
                              key: invoice.id
                            }, [
                              createVNode("td", null, [
                                createVNode(_component_v_checkbox, {
                                  color: "primary",
                                  "hide-details": ""
                                })
                              ]),
                              createVNode("td", { class: "text-14 font-weight-semibold" }, toDisplayString(invoice.id), 1),
                              createVNode("td", { class: "text-14 font-weight-semibold text-no-wrap" }, toDisplayString(invoice.billFrom), 1),
                              createVNode("td", { class: "text-14 text-no-wrap" }, toDisplayString(invoice.billTo), 1),
                              createVNode("td", { class: "text-14 text-no-wrap" }, toDisplayString(unref(store).grandTotal(invoice)), 1),
                              createVNode("td", null, [
                                createVNode(_component_v_chip, {
                                  rounded: "pill",
                                  color: invoice.status === "Shipped" ? "success" : invoice.status === "Delivered" ? "info" : invoice.status === "Pending" ? "warning" : "primary",
                                  variant: "flat",
                                  size: "small",
                                  label: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(invoice.status), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              createVNode("td", null, [
                                createVNode("div", { class: "d-flex ga-3 align-center justify-center" }, [
                                  createVNode(_component_RouterLink, {
                                    to: `/apps/invoice/edit/${invoice.id}`
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_avatar, {
                                        color: "lightsuccess",
                                        size: "32"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Icon), {
                                            icon: "solar:pen-linear",
                                            class: "text-success",
                                            height: "18"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_tooltip, {
                                        activator: "parent",
                                        location: "bottom"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Edit Invoice")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]),
                                  createVNode(_component_RouterLink, {
                                    to: `/apps/invoice/details/${invoice.id}`
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_avatar, {
                                        color: "lightprimary",
                                        size: "32"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Icon), {
                                            icon: "solar:eye-linear",
                                            class: "text-primary",
                                            height: "18"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_tooltip, {
                                        activator: "parent",
                                        location: "bottom"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("View Invoice")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]),
                                  createVNode(_component_RouterLink, {
                                    to: "",
                                    onClick: withModifiers(($event) => handleDeleteTicket(invoice.id), ["stop"]),
                                    class: "cursor-pointer"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_avatar, {
                                        color: "lighterror",
                                        size: "32"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Icon), {
                                            icon: "solar:trash-bin-minimalistic-linear",
                                            class: "text-error",
                                            height: "18"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_tooltip, {
                                        activator: "parent",
                                        location: "bottom"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Delete Invoice")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ])
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
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: showConfirmation.value,
        "onUpdate:modelValue": ($event) => showConfirmation.value = $event,
        "max-width": "500px"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, { class: "pa-4 bg-primary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Delete Invoice`);
                      } else {
                        return [
                          createTextVNode("Delete Invoice")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h5 class="text-16"${_scopeId3}>Are you sure you want to delete this invoice?</h5>`);
                      } else {
                        return [
                          createVNode("h5", { class: "text-16" }, "Are you sure you want to delete this invoice?")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_actions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "primary",
                          class: "px-4",
                          variant: "flat",
                          rounded: "pill",
                          onClick: confirmDelete
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Yes, Delete`);
                            } else {
                              return [
                                createTextVNode("Yes, Delete")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "error",
                          variant: "flat",
                          rounded: "pill",
                          class: "px-4",
                          onClick: ($event) => showConfirmation.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Cancel`);
                            } else {
                              return [
                                createTextVNode("Cancel")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            color: "primary",
                            class: "px-4",
                            variant: "flat",
                            rounded: "pill",
                            onClick: confirmDelete
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Yes, Delete")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_btn, {
                            color: "error",
                            variant: "flat",
                            rounded: "pill",
                            class: "px-4",
                            onClick: ($event) => showConfirmation.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cancel")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card_title, { class: "pa-4 bg-primary" }, {
                      default: withCtx(() => [
                        createTextVNode("Delete Invoice")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createVNode("h5", { class: "text-16" }, "Are you sure you want to delete this invoice?")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_actions, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          color: "primary",
                          class: "px-4",
                          variant: "flat",
                          rounded: "pill",
                          onClick: confirmDelete
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Yes, Delete")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_btn, {
                          color: "error",
                          variant: "flat",
                          rounded: "pill",
                          class: "px-4",
                          onClick: ($event) => showConfirmation.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Cancel")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, { class: "pa-4 bg-primary" }, {
                    default: withCtx(() => [
                      createTextVNode("Delete Invoice")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createVNode("h5", { class: "text-16" }, "Are you sure you want to delete this invoice?")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        color: "primary",
                        class: "px-4",
                        variant: "flat",
                        rounded: "pill",
                        onClick: confirmDelete
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Yes, Delete")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_btn, {
                        color: "error",
                        variant: "flat",
                        rounded: "pill",
                        class: "px-4",
                        onClick: ($event) => showConfirmation.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cancel")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/invoice/List.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Invoice List" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "#"
      },
      {
        text: "Invoice List",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/invoice/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Dzy42_gE.mjs.map
