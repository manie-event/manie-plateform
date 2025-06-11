import { defineComponent, ref, computed, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './BaseBreadcrumb-DAIjkUfv.mjs';
import { useRoute } from 'vue-router';
import { u as useInvoicestore } from './index-BkClx3X_.mjs';
import { _ as _sfc_main$3 } from './Logo-DggZ73XB.mjs';
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
import './nuxt-link-DZ3wFR7I.mjs';
import './customizer-CM6PVnj3.mjs';

const vatRate = 0.1;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Detail",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useInvoicestore();
    route.params.id;
    const invoiceDetail = ref(null);
    const subtotal = computed(() => {
      var _a2;
      var _a;
      return ((_a2 = (_a = invoiceDetail.value) == null ? void 0 : _a.orders) != null ? _a2 : []).reduce((sum, order) => {
        var _a3, _b;
        return sum + ((_a3 = order.unitPrice) != null ? _a3 : 0) * ((_b = order.units) != null ? _b : 0);
      }, 0);
    });
    const vat = computed(() => {
      return subtotal.value * vatRate;
    });
    const grandTotal = computed(() => {
      return subtotal.value + vat.value;
    });
    const calculateTotalCost = (unitPrice, units) => {
      return (unitPrice != null ? unitPrice : 0) * (units != null ? units : 0);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (invoiceDetail.value) {
                    _push3(`<div${_scopeId2}><div class="d-flex justify-space-between align-content-start mb-6"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$3, null, null, _parent3, _scopeId2));
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_chip, {
                      rounded: "pill",
                      color: invoiceDetail.value.status === "Shipped" ? "success" : invoiceDetail.value.status === "Delivered" ? "info" : invoiceDetail.value.status === "Pending" ? "warning" : "primary",
                      variant: "flat",
                      size: "small",
                      label: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(invoiceDetail.value.status)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(invoiceDetail.value.status), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<h5 class="text-20 text-end mt-1"${_scopeId2}># ${ssrInterpolate(invoiceDetail.value.id)}</h5></div></div><div class="mb-6"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_row, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<h6 class="text-h6"${_scopeId4}>Bill From</h6><div class="text-14 textSecondary lh-normal"${_scopeId4}><p${_scopeId4}>${ssrInterpolate(invoiceDetail.value.billFrom)}</p><p${_scopeId4}>${ssrInterpolate(invoiceDetail.value.billFromEmail)}</p><p${_scopeId4}>${ssrInterpolate(invoiceDetail.value.billFromAddress)}</p><p${_scopeId4}>${ssrInterpolate(invoiceDetail.value.billFromPhone)}</p></div>`);
                              } else {
                                return [
                                  createVNode("h6", { class: "text-h6" }, "Bill From"),
                                  createVNode("div", { class: "text-14 textSecondary lh-normal" }, [
                                    createVNode("p", null, toDisplayString(invoiceDetail.value.billFrom), 1),
                                    createVNode("p", null, toDisplayString(invoiceDetail.value.billFromEmail), 1),
                                    createVNode("p", null, toDisplayString(invoiceDetail.value.billFromAddress), 1),
                                    createVNode("p", null, toDisplayString(invoiceDetail.value.billFromPhone), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            lg: "6",
                            class: "text-end"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<h6 class="text-h6"${_scopeId4}>Bill To</h6><div class="text-14 textSecondary lh-normal"${_scopeId4}><p${_scopeId4}>${ssrInterpolate(invoiceDetail.value.billTo)}</p><p${_scopeId4}>${ssrInterpolate(invoiceDetail.value.billToEmail)}</p><p${_scopeId4}>${ssrInterpolate(invoiceDetail.value.billToAddress)}</p><p${_scopeId4}>${ssrInterpolate(invoiceDetail.value.billToPhone)}</p></div>`);
                              } else {
                                return [
                                  createVNode("h6", { class: "text-h6" }, "Bill To"),
                                  createVNode("div", { class: "text-14 textSecondary lh-normal" }, [
                                    createVNode("p", null, toDisplayString(invoiceDetail.value.billTo), 1),
                                    createVNode("p", null, toDisplayString(invoiceDetail.value.billToEmail), 1),
                                    createVNode("p", null, toDisplayString(invoiceDetail.value.billToAddress), 1),
                                    createVNode("p", null, toDisplayString(invoiceDetail.value.billToPhone), 1)
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
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6" }, "Bill From"),
                                createVNode("div", { class: "text-14 textSecondary lh-normal" }, [
                                  createVNode("p", null, toDisplayString(invoiceDetail.value.billFrom), 1),
                                  createVNode("p", null, toDisplayString(invoiceDetail.value.billFromEmail), 1),
                                  createVNode("p", null, toDisplayString(invoiceDetail.value.billFromAddress), 1),
                                  createVNode("p", null, toDisplayString(invoiceDetail.value.billFromPhone), 1)
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "6",
                              class: "text-end"
                            }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6" }, "Bill To"),
                                createVNode("div", { class: "text-14 textSecondary lh-normal" }, [
                                  createVNode("p", null, toDisplayString(invoiceDetail.value.billTo), 1),
                                  createVNode("p", null, toDisplayString(invoiceDetail.value.billToEmail), 1),
                                  createVNode("p", null, toDisplayString(invoiceDetail.value.billToAddress), 1),
                                  createVNode("p", null, toDisplayString(invoiceDetail.value.billToPhone), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(_component_v_table, { class: "invoice-table" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<thead${_scopeId3}><tr${_scopeId3}><th class="text-14 text-no-wrap"${_scopeId3}>Item Name</th><th class="text-14 text-no-wrap"${_scopeId3}>Unit Price</th><th class="text-14 text-no-wrap"${_scopeId3}>Unit</th><th class="text-14 text-no-wrap text-end"${_scopeId3}>Total Cost</th></tr></thead><tbody${_scopeId3}><!--[-->`);
                          ssrRenderList(invoiceDetail.value.orders, (invoice) => {
                            _push4(`<tr${_scopeId3}><td class="text-14 font-weight-semibold"${_scopeId3}>${ssrInterpolate(invoice.itemName)}</td><td class="text-14"${_scopeId3}>${ssrInterpolate(invoice.unitPrice)}</td><td class="text-14"${_scopeId3}>${ssrInterpolate(invoice.units)}</td><td class="text-14 font-weight-semibold text-end"${_scopeId3}>${ssrInterpolate(calculateTotalCost(invoice.unitPrice, invoice.units))}</td></tr>`);
                          });
                          _push4(`<!--]--></tbody>`);
                        } else {
                          return [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", { class: "text-14 text-no-wrap" }, "Item Name"),
                                createVNode("th", { class: "text-14 text-no-wrap" }, "Unit Price"),
                                createVNode("th", { class: "text-14 text-no-wrap" }, "Unit"),
                                createVNode("th", { class: "text-14 text-no-wrap text-end" }, "Total Cost")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(invoiceDetail.value.orders, (invoice) => {
                                return openBlock(), createBlock("tr", {
                                  key: invoice.itemName
                                }, [
                                  createVNode("td", { class: "text-14 font-weight-semibold" }, toDisplayString(invoice.itemName), 1),
                                  createVNode("td", { class: "text-14" }, toDisplayString(invoice.unitPrice), 1),
                                  createVNode("td", { class: "text-14" }, toDisplayString(invoice.units), 1),
                                  createVNode("td", { class: "text-14 font-weight-semibold text-end" }, toDisplayString(calculateTotalCost(invoice.unitPrice, invoice.units)), 1)
                                ]);
                              }), 128))
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_row, { class: "d-flex justify-end border-t mt-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            md: "3",
                            class: "mt-3"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex align-center justify-space-between text-14 font-weight-semibold mb-4"${_scopeId4}><p class="text-muted"${_scopeId4}>Sub Total:</p><p class="text-16"${_scopeId4}>${ssrInterpolate(subtotal.value)}</p></div><div class="d-flex align-center justify-space-between text-14 font-weight-semibold mb-4"${_scopeId4}><p class="text-muted"${_scopeId4}>Vat:</p><p class="text-16"${_scopeId4}>${ssrInterpolate(vat.value)}</p></div><div class="d-flex align-center justify-space-between text-14 font-weight-semibold"${_scopeId4}><p class="text-muted"${_scopeId4}>Grand Total:</p><p class="text-16"${_scopeId4}>${ssrInterpolate(grandTotal.value)}</p></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex align-center justify-space-between text-14 font-weight-semibold mb-4" }, [
                                    createVNode("p", { class: "text-muted" }, "Sub Total:"),
                                    createVNode("p", { class: "text-16" }, toDisplayString(subtotal.value), 1)
                                  ]),
                                  createVNode("div", { class: "d-flex align-center justify-space-between text-14 font-weight-semibold mb-4" }, [
                                    createVNode("p", { class: "text-muted" }, "Vat:"),
                                    createVNode("p", { class: "text-16" }, toDisplayString(vat.value), 1)
                                  ]),
                                  createVNode("div", { class: "d-flex align-center justify-space-between text-14 font-weight-semibold" }, [
                                    createVNode("p", { class: "text-muted" }, "Grand Total:"),
                                    createVNode("p", { class: "text-16" }, toDisplayString(grandTotal.value), 1)
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
                              md: "3",
                              class: "mt-3"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex align-center justify-space-between text-14 font-weight-semibold mb-4" }, [
                                  createVNode("p", { class: "text-muted" }, "Sub Total:"),
                                  createVNode("p", { class: "text-16" }, toDisplayString(subtotal.value), 1)
                                ]),
                                createVNode("div", { class: "d-flex align-center justify-space-between text-14 font-weight-semibold mb-4" }, [
                                  createVNode("p", { class: "text-muted" }, "Vat:"),
                                  createVNode("p", { class: "text-16" }, toDisplayString(vat.value), 1)
                                ]),
                                createVNode("div", { class: "d-flex align-center justify-space-between text-14 font-weight-semibold" }, [
                                  createVNode("p", { class: "text-muted" }, "Grand Total:"),
                                  createVNode("p", { class: "text-16" }, toDisplayString(grandTotal.value), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="d-flex ga-3 justify-end mt-6"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_btn, {
                      color: "warning",
                      to: `/apps/invoice/edit/${invoiceDetail.value.id}`,
                      flat: "",
                      rounded: "pill"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Edit Invoice`);
                        } else {
                          return [
                            createTextVNode("Edit Invoice")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_btn, {
                      to: "/apps/invoice",
                      color: "primary",
                      rounded: "pill",
                      flat: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Back To Invoice List`);
                        } else {
                          return [
                            createTextVNode("Back To Invoice List")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<div${_scopeId2}><p${_scopeId2}>No Data</p></div>`);
                  }
                } else {
                  return [
                    invoiceDetail.value ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("div", { class: "d-flex justify-space-between align-content-start mb-6" }, [
                        createVNode(_sfc_main$3),
                        createVNode("div", null, [
                          createVNode(_component_v_chip, {
                            rounded: "pill",
                            color: invoiceDetail.value.status === "Shipped" ? "success" : invoiceDetail.value.status === "Delivered" ? "info" : invoiceDetail.value.status === "Pending" ? "warning" : "primary",
                            variant: "flat",
                            size: "small",
                            label: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(invoiceDetail.value.status), 1)
                            ]),
                            _: 1
                          }, 8, ["color"]),
                          createVNode("h5", { class: "text-20 text-end mt-1" }, "# " + toDisplayString(invoiceDetail.value.id), 1)
                        ])
                      ]),
                      createVNode("div", { class: "mb-6" }, [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6" }, "Bill From"),
                                createVNode("div", { class: "text-14 textSecondary lh-normal" }, [
                                  createVNode("p", null, toDisplayString(invoiceDetail.value.billFrom), 1),
                                  createVNode("p", null, toDisplayString(invoiceDetail.value.billFromEmail), 1),
                                  createVNode("p", null, toDisplayString(invoiceDetail.value.billFromAddress), 1),
                                  createVNode("p", null, toDisplayString(invoiceDetail.value.billFromPhone), 1)
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "6",
                              class: "text-end"
                            }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6" }, "Bill To"),
                                createVNode("div", { class: "text-14 textSecondary lh-normal" }, [
                                  createVNode("p", null, toDisplayString(invoiceDetail.value.billTo), 1),
                                  createVNode("p", null, toDisplayString(invoiceDetail.value.billToEmail), 1),
                                  createVNode("p", null, toDisplayString(invoiceDetail.value.billToAddress), 1),
                                  createVNode("p", null, toDisplayString(invoiceDetail.value.billToPhone), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_v_table, { class: "invoice-table" }, {
                        default: withCtx(() => [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "text-14 text-no-wrap" }, "Item Name"),
                              createVNode("th", { class: "text-14 text-no-wrap" }, "Unit Price"),
                              createVNode("th", { class: "text-14 text-no-wrap" }, "Unit"),
                              createVNode("th", { class: "text-14 text-no-wrap text-end" }, "Total Cost")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(invoiceDetail.value.orders, (invoice) => {
                              return openBlock(), createBlock("tr", {
                                key: invoice.itemName
                              }, [
                                createVNode("td", { class: "text-14 font-weight-semibold" }, toDisplayString(invoice.itemName), 1),
                                createVNode("td", { class: "text-14" }, toDisplayString(invoice.unitPrice), 1),
                                createVNode("td", { class: "text-14" }, toDisplayString(invoice.units), 1),
                                createVNode("td", { class: "text-14 font-weight-semibold text-end" }, toDisplayString(calculateTotalCost(invoice.unitPrice, invoice.units)), 1)
                              ]);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, { class: "d-flex justify-end border-t mt-1" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "3",
                            class: "mt-3"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center justify-space-between text-14 font-weight-semibold mb-4" }, [
                                createVNode("p", { class: "text-muted" }, "Sub Total:"),
                                createVNode("p", { class: "text-16" }, toDisplayString(subtotal.value), 1)
                              ]),
                              createVNode("div", { class: "d-flex align-center justify-space-between text-14 font-weight-semibold mb-4" }, [
                                createVNode("p", { class: "text-muted" }, "Vat:"),
                                createVNode("p", { class: "text-16" }, toDisplayString(vat.value), 1)
                              ]),
                              createVNode("div", { class: "d-flex align-center justify-space-between text-14 font-weight-semibold" }, [
                                createVNode("p", { class: "text-muted" }, "Grand Total:"),
                                createVNode("p", { class: "text-16" }, toDisplayString(grandTotal.value), 1)
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "d-flex ga-3 justify-end mt-6" }, [
                        createVNode(_component_v_btn, {
                          color: "warning",
                          to: `/apps/invoice/edit/${invoiceDetail.value.id}`,
                          flat: "",
                          rounded: "pill"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Edit Invoice")
                          ]),
                          _: 1
                        }, 8, ["to"]),
                        createVNode(_component_v_btn, {
                          to: "/apps/invoice",
                          color: "primary",
                          rounded: "pill",
                          flat: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Back To Invoice List")
                          ]),
                          _: 1
                        })
                      ])
                    ])) : (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode("p", null, "No Data")
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_item, null, {
                default: withCtx(() => [
                  invoiceDetail.value ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("div", { class: "d-flex justify-space-between align-content-start mb-6" }, [
                      createVNode(_sfc_main$3),
                      createVNode("div", null, [
                        createVNode(_component_v_chip, {
                          rounded: "pill",
                          color: invoiceDetail.value.status === "Shipped" ? "success" : invoiceDetail.value.status === "Delivered" ? "info" : invoiceDetail.value.status === "Pending" ? "warning" : "primary",
                          variant: "flat",
                          size: "small",
                          label: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(invoiceDetail.value.status), 1)
                          ]),
                          _: 1
                        }, 8, ["color"]),
                        createVNode("h5", { class: "text-20 text-end mt-1" }, "# " + toDisplayString(invoiceDetail.value.id), 1)
                      ])
                    ]),
                    createVNode("div", { class: "mb-6" }, [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-h6" }, "Bill From"),
                              createVNode("div", { class: "text-14 textSecondary lh-normal" }, [
                                createVNode("p", null, toDisplayString(invoiceDetail.value.billFrom), 1),
                                createVNode("p", null, toDisplayString(invoiceDetail.value.billFromEmail), 1),
                                createVNode("p", null, toDisplayString(invoiceDetail.value.billFromAddress), 1),
                                createVNode("p", null, toDisplayString(invoiceDetail.value.billFromPhone), 1)
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "6",
                            class: "text-end"
                          }, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-h6" }, "Bill To"),
                              createVNode("div", { class: "text-14 textSecondary lh-normal" }, [
                                createVNode("p", null, toDisplayString(invoiceDetail.value.billTo), 1),
                                createVNode("p", null, toDisplayString(invoiceDetail.value.billToEmail), 1),
                                createVNode("p", null, toDisplayString(invoiceDetail.value.billToAddress), 1),
                                createVNode("p", null, toDisplayString(invoiceDetail.value.billToPhone), 1)
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_v_table, { class: "invoice-table" }, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", { class: "text-14 text-no-wrap" }, "Item Name"),
                            createVNode("th", { class: "text-14 text-no-wrap" }, "Unit Price"),
                            createVNode("th", { class: "text-14 text-no-wrap" }, "Unit"),
                            createVNode("th", { class: "text-14 text-no-wrap text-end" }, "Total Cost")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(invoiceDetail.value.orders, (invoice) => {
                            return openBlock(), createBlock("tr", {
                              key: invoice.itemName
                            }, [
                              createVNode("td", { class: "text-14 font-weight-semibold" }, toDisplayString(invoice.itemName), 1),
                              createVNode("td", { class: "text-14" }, toDisplayString(invoice.unitPrice), 1),
                              createVNode("td", { class: "text-14" }, toDisplayString(invoice.units), 1),
                              createVNode("td", { class: "text-14 font-weight-semibold text-end" }, toDisplayString(calculateTotalCost(invoice.unitPrice, invoice.units)), 1)
                            ]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "d-flex justify-end border-t mt-1" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "3",
                          class: "mt-3"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center justify-space-between text-14 font-weight-semibold mb-4" }, [
                              createVNode("p", { class: "text-muted" }, "Sub Total:"),
                              createVNode("p", { class: "text-16" }, toDisplayString(subtotal.value), 1)
                            ]),
                            createVNode("div", { class: "d-flex align-center justify-space-between text-14 font-weight-semibold mb-4" }, [
                              createVNode("p", { class: "text-muted" }, "Vat:"),
                              createVNode("p", { class: "text-16" }, toDisplayString(vat.value), 1)
                            ]),
                            createVNode("div", { class: "d-flex align-center justify-space-between text-14 font-weight-semibold" }, [
                              createVNode("p", { class: "text-muted" }, "Grand Total:"),
                              createVNode("p", { class: "text-16" }, toDisplayString(grandTotal.value), 1)
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "d-flex ga-3 justify-end mt-6" }, [
                      createVNode(_component_v_btn, {
                        color: "warning",
                        to: `/apps/invoice/edit/${invoiceDetail.value.id}`,
                        flat: "",
                        rounded: "pill"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Edit Invoice")
                        ]),
                        _: 1
                      }, 8, ["to"]),
                      createVNode(_component_v_btn, {
                        to: "/apps/invoice",
                        color: "primary",
                        rounded: "pill",
                        flat: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Back To Invoice List")
                        ]),
                        _: 1
                      })
                    ])
                  ])) : (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode("p", null, "No Data")
                  ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/invoice/Detail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Invoice Details" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "#"
      },
      {
        text: "Invoice Details",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/invoice/details/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-KPdWzWkP.mjs.map
