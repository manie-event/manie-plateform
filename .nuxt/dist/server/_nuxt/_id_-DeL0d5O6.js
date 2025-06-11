import { defineComponent, ref, watch, computed, resolveComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./BaseBreadcrumb-DAIjkUfv.js";
import { u as useInvoicestore } from "./index-BkClx3X_.js";
import { format } from "date-fns";
import { CirclePlusIcon } from "vue-tabler-icons";
import { Icon } from "@iconify/vue";
import { useRouter, useRoute } from "vue-router";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
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
import "lodash";
import "vue-draggable-next";
import "vue3-easy-data-table";
import "vue-easy-lightbox";
import "vue-scrollto";
const vatRate = 0.1;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Edit",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useInvoicestore();
    const valid = ref(false);
    const loading = ref(true);
    const router = useRouter();
    const route = useRoute();
    const invoiceId = parseInt(route.params.id);
    const invoice = ref({
      orders: []
    });
    watch(
      () => invoiceId,
      async (newId) => {
        await store.fetchinvoice();
        invoice.value = store.invoice.find((inv) => inv.id === newId) || null;
        loading.value = false;
        if (!invoice.value) {
          router.push("/apps/invoice");
        }
      },
      { immediate: true }
    );
    const statuses = ["Pending", "Shipped", "Delivered"];
    const rules = [(v) => !!v || "This field is required"];
    const subtotal = computed(() => {
      var _a;
      return (((_a = invoice.value) == null ? void 0 : _a.orders) ?? []).reduce((sum, order) => {
        return sum + (order.unitPrice ?? 0) * (order.units ?? 0);
      }, 0);
    });
    const vat = computed(() => {
      return subtotal.value * vatRate;
    });
    const grandTotal = computed(() => {
      return subtotal.value + vat.value;
    });
    const addOrderRow = () => {
      if (invoice.value) {
        invoice.value.orders = invoice.value.orders || [];
        invoice.value.orders.push({
          itemName: "",
          unitPrice: 0,
          units: 0,
          unitTotalPrice: 0
        });
      }
    };
    const submitInvoice = async () => {
      if (valid.value && invoice.value) {
        try {
          await store.updateInvoice(invoice.value);
          router.push("/apps/invoice");
        } catch (error) {
          console.error("Update failed:", error);
        }
      } else {
        console.log("Form is invalid or invoice not found");
      }
    };
    const deleteOrderRow = (index) => {
      if (invoice.value && invoice.value.orders) {
        invoice.value.orders.splice(index, 1);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_label = resolveComponent("v-label");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_v_avatar = resolveComponent("v-avatar");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-20 mb-7"${_scopeId2}>Edit Invoice Details</h5>`);
                  if (invoice.value) {
                    _push3(`<p class="textSecondary text-14"${_scopeId2}>ID: ${ssrInterpolate(invoice.value.id)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (invoice.value) {
                    _push3(`<p class="textSecondary text-14"${_scopeId2}> Date: ${ssrInterpolate(invoice.value.orderDate ? unref(format)(new Date(invoice.value.orderDate), "E, MMM dd, yyyy") : "N/A")}</p>`);
                  } else {
                    _push3(`<p class="textSecondary"${_scopeId2}>Loading invoice...</p>`);
                  }
                  if (!loading.value && invoice.value) {
                    _push3(ssrRenderComponent(_component_v_form, {
                      ref: "formRef",
                      modelValue: valid.value,
                      "onUpdate:modelValue": ($event) => valid.value = $event,
                      "lazy-validation": ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="bg-bglight mt-6 pa-6 rounded-md"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_row, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_col, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Bill From`);
                                          } else {
                                            return [
                                              createTextVNode("Bill From")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_text_field, {
                                        "hide-details": "",
                                        modelValue: invoice.value.billFrom,
                                        "onUpdate:modelValue": ($event) => invoice.value.billFrom = $event,
                                        rules,
                                        required: ""
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Bill From")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          "hide-details": "",
                                          modelValue: invoice.value.billFrom,
                                          "onUpdate:modelValue": ($event) => invoice.value.billFrom = $event,
                                          rules,
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_col, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Bill To`);
                                          } else {
                                            return [
                                              createTextVNode("Bill To")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_text_field, {
                                        modelValue: invoice.value.billTo,
                                        "onUpdate:modelValue": ($event) => invoice.value.billTo = $event,
                                        rules,
                                        required: "",
                                        "hide-details": ""
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Bill To")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          modelValue: invoice.value.billTo,
                                          "onUpdate:modelValue": ($event) => invoice.value.billTo = $event,
                                          rules,
                                          required: "",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_col, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Status`);
                                          } else {
                                            return [
                                              createTextVNode("Status")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_select, {
                                        modelValue: invoice.value.status,
                                        "onUpdate:modelValue": ($event) => invoice.value.status = $event,
                                        "hide-details": "",
                                        items: statuses,
                                        required: ""
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Status")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_select, {
                                          modelValue: invoice.value.status,
                                          "onUpdate:modelValue": ($event) => invoice.value.status = $event,
                                          "hide-details": "",
                                          items: statuses,
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`From Address`);
                                          } else {
                                            return [
                                              createTextVNode("From Address")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_text_field, {
                                        modelValue: invoice.value.billFromAddress,
                                        "onUpdate:modelValue": ($event) => invoice.value.billFromAddress = $event,
                                        rules,
                                        required: "",
                                        "hide-details": ""
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode("From Address")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          modelValue: invoice.value.billFromAddress,
                                          "onUpdate:modelValue": ($event) => invoice.value.billFromAddress = $event,
                                          rules,
                                          required: "",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Bill To Address`);
                                          } else {
                                            return [
                                              createTextVNode("Bill To Address")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_text_field, {
                                        modelValue: invoice.value.billToAddress,
                                        "onUpdate:modelValue": ($event) => invoice.value.billToAddress = $event,
                                        rules,
                                        required: "",
                                        "hide-details": ""
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Bill To Address")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          modelValue: invoice.value.billToAddress,
                                          "onUpdate:modelValue": ($event) => invoice.value.billToAddress = $event,
                                          rules,
                                          required: "",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Bill From")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        "hide-details": "",
                                        modelValue: invoice.value.billFrom,
                                        "onUpdate:modelValue": ($event) => invoice.value.billFrom = $event,
                                        rules,
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Bill To")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        modelValue: invoice.value.billTo,
                                        "onUpdate:modelValue": ($event) => invoice.value.billTo = $event,
                                        rules,
                                        required: "",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Status")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_select, {
                                        modelValue: invoice.value.status,
                                        "onUpdate:modelValue": ($event) => invoice.value.status = $event,
                                        "hide-details": "",
                                        items: statuses,
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("From Address")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        modelValue: invoice.value.billFromAddress,
                                        "onUpdate:modelValue": ($event) => invoice.value.billFromAddress = $event,
                                        rules,
                                        required: "",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Bill To Address")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        modelValue: invoice.value.billToAddress,
                                        "onUpdate:modelValue": ($event) => invoice.value.billToAddress = $event,
                                        rules,
                                        required: "",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                          _push4(ssrRenderComponent(_component_v_table, { class: "invoice-table mt-6" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<thead${_scopeId4}><tr${_scopeId4}><th class="text-14 text-no-wrap"${_scopeId4}></th><th class="text-14 text-no-wrap"${_scopeId4}>Item Name</th><th class="text-14 text-no-wrap"${_scopeId4}>Unit Price</th><th class="text-14 text-no-wrap"${_scopeId4}>Units</th><th class="text-14 text-no-wrap"${_scopeId4}>Total Cost</th><th class="text-14 text-no-wrap text-end"${_scopeId4}>Actions</th></tr></thead><tbody${_scopeId4}><!--[-->`);
                                ssrRenderList(invoice.value.orders, (inv, index) => {
                                  _push5(`<tr${_scopeId4}><td${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_v_btn, {
                                    flat: "",
                                    icon: "",
                                    color: "lightprimary",
                                    size: "x-small",
                                    onClick: addOrderRow,
                                    class: "ms-3"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(unref(CirclePlusIcon), {
                                          class: "text-primary",
                                          size: "18"
                                        }, null, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_v_tooltip, {
                                          activator: "parent",
                                          location: "bottom"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`Add Item`);
                                            } else {
                                              return [
                                                createTextVNode("Add Item")
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(unref(CirclePlusIcon), {
                                            class: "text-primary",
                                            size: "18"
                                          }),
                                          createVNode(_component_v_tooltip, {
                                            activator: "parent",
                                            location: "bottom"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Add Item")
                                            ]),
                                            _: 1
                                          })
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</td><td width="300"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_v_text_field, {
                                    label: "Item Name",
                                    "hide-details": "",
                                    modelValue: inv.itemName,
                                    "onUpdate:modelValue": ($event) => inv.itemName = $event,
                                    rules,
                                    required: "",
                                    class: "py-4",
                                    width: "300"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</td><td width="150"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_v_text_field, {
                                    modelValue: inv.unitPrice,
                                    "onUpdate:modelValue": ($event) => inv.unitPrice = $event,
                                    label: "Unit Price",
                                    rules,
                                    required: "",
                                    "hide-details": "",
                                    width: "150",
                                    type: "number"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</td><td width="150"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_v_text_field, {
                                    modelValue: inv.units,
                                    "onUpdate:modelValue": ($event) => inv.units = $event,
                                    label: "Units",
                                    rules,
                                    required: "",
                                    "hide-details": "",
                                    width: "150",
                                    type: "number"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</td><td class="text-14"${_scopeId4}>${ssrInterpolate(unref(store).grandTotal(invoice.value))}</td><td class="text-end"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_RouterLink, {
                                    to: "",
                                    class: "cursor-pointer me-lg-3"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_v_avatar, {
                                          color: "lighterror",
                                          size: "32",
                                          onClick: ($event) => deleteOrderRow(index)
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(unref(Icon), {
                                                icon: "solar:trash-bin-minimalistic-linear",
                                                class: "text-error",
                                                height: "18"
                                              }, null, _parent7, _scopeId6));
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
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_v_tooltip, {
                                          activator: "parent",
                                          location: "bottom"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`Delete Invoice`);
                                            } else {
                                              return [
                                                createTextVNode("Delete Invoice")
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_v_avatar, {
                                            color: "lighterror",
                                            size: "32",
                                            onClick: ($event) => deleteOrderRow(index)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Icon), {
                                                icon: "solar:trash-bin-minimalistic-linear",
                                                class: "text-error",
                                                height: "18"
                                              })
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]),
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
                                  }, _parent5, _scopeId4));
                                  _push5(`</td></tr>`);
                                });
                                _push5(`<!--]--></tbody>`);
                              } else {
                                return [
                                  createVNode("thead", null, [
                                    createVNode("tr", null, [
                                      createVNode("th", { class: "text-14 text-no-wrap" }),
                                      createVNode("th", { class: "text-14 text-no-wrap" }, "Item Name"),
                                      createVNode("th", { class: "text-14 text-no-wrap" }, "Unit Price"),
                                      createVNode("th", { class: "text-14 text-no-wrap" }, "Units"),
                                      createVNode("th", { class: "text-14 text-no-wrap" }, "Total Cost"),
                                      createVNode("th", { class: "text-14 text-no-wrap text-end" }, "Actions")
                                    ])
                                  ]),
                                  createVNode("tbody", null, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(invoice.value.orders, (inv, index) => {
                                      return openBlock(), createBlock("tr", { key: index }, [
                                        createVNode("td", null, [
                                          createVNode(_component_v_btn, {
                                            flat: "",
                                            icon: "",
                                            color: "lightprimary",
                                            size: "x-small",
                                            onClick: addOrderRow,
                                            class: "ms-3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(CirclePlusIcon), {
                                                class: "text-primary",
                                                size: "18"
                                              }),
                                              createVNode(_component_v_tooltip, {
                                                activator: "parent",
                                                location: "bottom"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Add Item")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode("td", { width: "300" }, [
                                          createVNode(_component_v_text_field, {
                                            label: "Item Name",
                                            "hide-details": "",
                                            modelValue: inv.itemName,
                                            "onUpdate:modelValue": ($event) => inv.itemName = $event,
                                            rules,
                                            required: "",
                                            class: "py-4",
                                            width: "300"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("td", { width: "150" }, [
                                          createVNode(_component_v_text_field, {
                                            modelValue: inv.unitPrice,
                                            "onUpdate:modelValue": ($event) => inv.unitPrice = $event,
                                            label: "Unit Price",
                                            rules,
                                            required: "",
                                            "hide-details": "",
                                            width: "150",
                                            type: "number"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("td", { width: "150" }, [
                                          createVNode(_component_v_text_field, {
                                            modelValue: inv.units,
                                            "onUpdate:modelValue": ($event) => inv.units = $event,
                                            label: "Units",
                                            rules,
                                            required: "",
                                            "hide-details": "",
                                            width: "150",
                                            type: "number"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("td", { class: "text-14" }, toDisplayString(unref(store).grandTotal(invoice.value)), 1),
                                        createVNode("td", { class: "text-end" }, [
                                          createVNode(_component_RouterLink, {
                                            to: "",
                                            class: "cursor-pointer me-lg-3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_avatar, {
                                                color: "lighterror",
                                                size: "32",
                                                onClick: ($event) => deleteOrderRow(index)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Icon), {
                                                    icon: "solar:trash-bin-minimalistic-linear",
                                                    class: "text-error",
                                                    height: "18"
                                                  })
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"]),
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
                                          }, 1024)
                                        ])
                                      ]);
                                    }), 128))
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_row, { class: "d-flex justify-end border-t mt-1" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_col, {
                                  cols: "12",
                                  md: "3",
                                  class: "mt-3 ps-lg-16"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="d-flex align-center justify-space-between text-14 font-weight-semibold mb-4"${_scopeId5}><p class="text-muted"${_scopeId5}>Sub Total:</p><p class="text-16"${_scopeId5}>${ssrInterpolate(subtotal.value)}</p></div><div class="d-flex align-center justify-space-between text-14 font-weight-semibold mb-4"${_scopeId5}><p class="text-muted"${_scopeId5}>Vat:</p><p class="text-16"${_scopeId5}>${ssrInterpolate(vat.value)}</p></div><div class="d-flex align-center justify-space-between text-14 font-weight-semibold"${_scopeId5}><p class="text-muted"${_scopeId5}>Grand Total:</p><p class="text-16"${_scopeId5}>${ssrInterpolate(grandTotal.value)}</p></div>`);
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
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "3",
                                    class: "mt-3 ps-lg-16"
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
                          }, _parent4, _scopeId3));
                          _push4(`<div class="d-flex align-center justify-end ga-3"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_btn, {
                            flat: "",
                            color: "success",
                            onClick: submitInvoice,
                            rounded: "pill",
                            class: "mt-6"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Save`);
                              } else {
                                return [
                                  createTextVNode("Save")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_btn, {
                            flat: "",
                            color: "error",
                            to: "/apps/invoice",
                            rounded: "pill",
                            class: "mt-6"
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
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "bg-bglight mt-6 pa-6 rounded-md" }, [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Bill From")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        "hide-details": "",
                                        modelValue: invoice.value.billFrom,
                                        "onUpdate:modelValue": ($event) => invoice.value.billFrom = $event,
                                        rules,
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Bill To")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        modelValue: invoice.value.billTo,
                                        "onUpdate:modelValue": ($event) => invoice.value.billTo = $event,
                                        rules,
                                        required: "",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Status")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_select, {
                                        modelValue: invoice.value.status,
                                        "onUpdate:modelValue": ($event) => invoice.value.status = $event,
                                        "hide-details": "",
                                        items: statuses,
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("From Address")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        modelValue: invoice.value.billFromAddress,
                                        "onUpdate:modelValue": ($event) => invoice.value.billFromAddress = $event,
                                        rules,
                                        required: "",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Bill To Address")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        modelValue: invoice.value.billToAddress,
                                        "onUpdate:modelValue": ($event) => invoice.value.billToAddress = $event,
                                        rules,
                                        required: "",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(_component_v_table, { class: "invoice-table mt-6" }, {
                              default: withCtx(() => [
                                createVNode("thead", null, [
                                  createVNode("tr", null, [
                                    createVNode("th", { class: "text-14 text-no-wrap" }),
                                    createVNode("th", { class: "text-14 text-no-wrap" }, "Item Name"),
                                    createVNode("th", { class: "text-14 text-no-wrap" }, "Unit Price"),
                                    createVNode("th", { class: "text-14 text-no-wrap" }, "Units"),
                                    createVNode("th", { class: "text-14 text-no-wrap" }, "Total Cost"),
                                    createVNode("th", { class: "text-14 text-no-wrap text-end" }, "Actions")
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(invoice.value.orders, (inv, index) => {
                                    return openBlock(), createBlock("tr", { key: index }, [
                                      createVNode("td", null, [
                                        createVNode(_component_v_btn, {
                                          flat: "",
                                          icon: "",
                                          color: "lightprimary",
                                          size: "x-small",
                                          onClick: addOrderRow,
                                          class: "ms-3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(CirclePlusIcon), {
                                              class: "text-primary",
                                              size: "18"
                                            }),
                                            createVNode(_component_v_tooltip, {
                                              activator: "parent",
                                              location: "bottom"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Add Item")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("td", { width: "300" }, [
                                        createVNode(_component_v_text_field, {
                                          label: "Item Name",
                                          "hide-details": "",
                                          modelValue: inv.itemName,
                                          "onUpdate:modelValue": ($event) => inv.itemName = $event,
                                          rules,
                                          required: "",
                                          class: "py-4",
                                          width: "300"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("td", { width: "150" }, [
                                        createVNode(_component_v_text_field, {
                                          modelValue: inv.unitPrice,
                                          "onUpdate:modelValue": ($event) => inv.unitPrice = $event,
                                          label: "Unit Price",
                                          rules,
                                          required: "",
                                          "hide-details": "",
                                          width: "150",
                                          type: "number"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("td", { width: "150" }, [
                                        createVNode(_component_v_text_field, {
                                          modelValue: inv.units,
                                          "onUpdate:modelValue": ($event) => inv.units = $event,
                                          label: "Units",
                                          rules,
                                          required: "",
                                          "hide-details": "",
                                          width: "150",
                                          type: "number"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("td", { class: "text-14" }, toDisplayString(unref(store).grandTotal(invoice.value)), 1),
                                      createVNode("td", { class: "text-end" }, [
                                        createVNode(_component_RouterLink, {
                                          to: "",
                                          class: "cursor-pointer me-lg-3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_avatar, {
                                              color: "lighterror",
                                              size: "32",
                                              onClick: ($event) => deleteOrderRow(index)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Icon), {
                                                  icon: "solar:trash-bin-minimalistic-linear",
                                                  class: "text-error",
                                                  height: "18"
                                                })
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]),
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
                                        }, 1024)
                                      ])
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
                                  class: "mt-3 ps-lg-16"
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
                            createVNode("div", { class: "d-flex align-center justify-end ga-3" }, [
                              createVNode(_component_v_btn, {
                                flat: "",
                                color: "success",
                                onClick: submitInvoice,
                                rounded: "pill",
                                class: "mt-6"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Save")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                flat: "",
                                color: "error",
                                to: "/apps/invoice",
                                rounded: "pill",
                                class: "mt-6"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Cancel")
                                ]),
                                _: 1
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("h5", { class: "text-20 mb-7" }, "Edit Invoice Details"),
                    invoice.value ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "textSecondary text-14"
                    }, "ID: " + toDisplayString(invoice.value.id), 1)) : createCommentVNode("", true),
                    invoice.value ? (openBlock(), createBlock("p", {
                      key: 1,
                      class: "textSecondary text-14"
                    }, " Date: " + toDisplayString(invoice.value.orderDate ? unref(format)(new Date(invoice.value.orderDate), "E, MMM dd, yyyy") : "N/A"), 1)) : (openBlock(), createBlock("p", {
                      key: 2,
                      class: "textSecondary"
                    }, "Loading invoice...")),
                    !loading.value && invoice.value ? (openBlock(), createBlock(_component_v_form, {
                      key: 3,
                      ref: "formRef",
                      modelValue: valid.value,
                      "onUpdate:modelValue": ($event) => valid.value = $event,
                      "lazy-validation": ""
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "bg-bglight mt-6 pa-6 rounded-md" }, [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Bill From")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    "hide-details": "",
                                    modelValue: invoice.value.billFrom,
                                    "onUpdate:modelValue": ($event) => invoice.value.billFrom = $event,
                                    rules,
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Bill To")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    modelValue: invoice.value.billTo,
                                    "onUpdate:modelValue": ($event) => invoice.value.billTo = $event,
                                    rules,
                                    required: "",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Status")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_select, {
                                    modelValue: invoice.value.status,
                                    "onUpdate:modelValue": ($event) => invoice.value.status = $event,
                                    "hide-details": "",
                                    items: statuses,
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                    default: withCtx(() => [
                                      createTextVNode("From Address")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    modelValue: invoice.value.billFromAddress,
                                    "onUpdate:modelValue": ($event) => invoice.value.billFromAddress = $event,
                                    rules,
                                    required: "",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Bill To Address")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    modelValue: invoice.value.billToAddress,
                                    "onUpdate:modelValue": ($event) => invoice.value.billToAddress = $event,
                                    rules,
                                    required: "",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(_component_v_table, { class: "invoice-table mt-6" }, {
                          default: withCtx(() => [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", { class: "text-14 text-no-wrap" }),
                                createVNode("th", { class: "text-14 text-no-wrap" }, "Item Name"),
                                createVNode("th", { class: "text-14 text-no-wrap" }, "Unit Price"),
                                createVNode("th", { class: "text-14 text-no-wrap" }, "Units"),
                                createVNode("th", { class: "text-14 text-no-wrap" }, "Total Cost"),
                                createVNode("th", { class: "text-14 text-no-wrap text-end" }, "Actions")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(invoice.value.orders, (inv, index) => {
                                return openBlock(), createBlock("tr", { key: index }, [
                                  createVNode("td", null, [
                                    createVNode(_component_v_btn, {
                                      flat: "",
                                      icon: "",
                                      color: "lightprimary",
                                      size: "x-small",
                                      onClick: addOrderRow,
                                      class: "ms-3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(CirclePlusIcon), {
                                          class: "text-primary",
                                          size: "18"
                                        }),
                                        createVNode(_component_v_tooltip, {
                                          activator: "parent",
                                          location: "bottom"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Add Item")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("td", { width: "300" }, [
                                    createVNode(_component_v_text_field, {
                                      label: "Item Name",
                                      "hide-details": "",
                                      modelValue: inv.itemName,
                                      "onUpdate:modelValue": ($event) => inv.itemName = $event,
                                      rules,
                                      required: "",
                                      class: "py-4",
                                      width: "300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("td", { width: "150" }, [
                                    createVNode(_component_v_text_field, {
                                      modelValue: inv.unitPrice,
                                      "onUpdate:modelValue": ($event) => inv.unitPrice = $event,
                                      label: "Unit Price",
                                      rules,
                                      required: "",
                                      "hide-details": "",
                                      width: "150",
                                      type: "number"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("td", { width: "150" }, [
                                    createVNode(_component_v_text_field, {
                                      modelValue: inv.units,
                                      "onUpdate:modelValue": ($event) => inv.units = $event,
                                      label: "Units",
                                      rules,
                                      required: "",
                                      "hide-details": "",
                                      width: "150",
                                      type: "number"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("td", { class: "text-14" }, toDisplayString(unref(store).grandTotal(invoice.value)), 1),
                                  createVNode("td", { class: "text-end" }, [
                                    createVNode(_component_RouterLink, {
                                      to: "",
                                      class: "cursor-pointer me-lg-3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_avatar, {
                                          color: "lighterror",
                                          size: "32",
                                          onClick: ($event) => deleteOrderRow(index)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Icon), {
                                              icon: "solar:trash-bin-minimalistic-linear",
                                              class: "text-error",
                                              height: "18"
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]),
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
                                    }, 1024)
                                  ])
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
                              class: "mt-3 ps-lg-16"
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
                        createVNode("div", { class: "d-flex align-center justify-end ga-3" }, [
                          createVNode(_component_v_btn, {
                            flat: "",
                            color: "success",
                            onClick: submitInvoice,
                            rounded: "pill",
                            class: "mt-6"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Save")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_btn, {
                            flat: "",
                            color: "error",
                            to: "/apps/invoice",
                            rounded: "pill",
                            class: "mt-6"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cancel")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_item, null, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-20 mb-7" }, "Edit Invoice Details"),
                  invoice.value ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "textSecondary text-14"
                  }, "ID: " + toDisplayString(invoice.value.id), 1)) : createCommentVNode("", true),
                  invoice.value ? (openBlock(), createBlock("p", {
                    key: 1,
                    class: "textSecondary text-14"
                  }, " Date: " + toDisplayString(invoice.value.orderDate ? unref(format)(new Date(invoice.value.orderDate), "E, MMM dd, yyyy") : "N/A"), 1)) : (openBlock(), createBlock("p", {
                    key: 2,
                    class: "textSecondary"
                  }, "Loading invoice...")),
                  !loading.value && invoice.value ? (openBlock(), createBlock(_component_v_form, {
                    key: 3,
                    ref: "formRef",
                    modelValue: valid.value,
                    "onUpdate:modelValue": ($event) => valid.value = $event,
                    "lazy-validation": ""
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "bg-bglight mt-6 pa-6 rounded-md" }, [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Bill From")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  "hide-details": "",
                                  modelValue: invoice.value.billFrom,
                                  "onUpdate:modelValue": ($event) => invoice.value.billFrom = $event,
                                  rules,
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Bill To")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  modelValue: invoice.value.billTo,
                                  "onUpdate:modelValue": ($event) => invoice.value.billTo = $event,
                                  rules,
                                  required: "",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Status")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_select, {
                                  modelValue: invoice.value.status,
                                  "onUpdate:modelValue": ($event) => invoice.value.status = $event,
                                  "hide-details": "",
                                  items: statuses,
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("From Address")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  modelValue: invoice.value.billFromAddress,
                                  "onUpdate:modelValue": ($event) => invoice.value.billFromAddress = $event,
                                  rules,
                                  required: "",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_label, { class: "font-weight-semibold pb-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Bill To Address")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  modelValue: invoice.value.billToAddress,
                                  "onUpdate:modelValue": ($event) => invoice.value.billToAddress = $event,
                                  rules,
                                  required: "",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_v_table, { class: "invoice-table mt-6" }, {
                        default: withCtx(() => [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "text-14 text-no-wrap" }),
                              createVNode("th", { class: "text-14 text-no-wrap" }, "Item Name"),
                              createVNode("th", { class: "text-14 text-no-wrap" }, "Unit Price"),
                              createVNode("th", { class: "text-14 text-no-wrap" }, "Units"),
                              createVNode("th", { class: "text-14 text-no-wrap" }, "Total Cost"),
                              createVNode("th", { class: "text-14 text-no-wrap text-end" }, "Actions")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(invoice.value.orders, (inv, index) => {
                              return openBlock(), createBlock("tr", { key: index }, [
                                createVNode("td", null, [
                                  createVNode(_component_v_btn, {
                                    flat: "",
                                    icon: "",
                                    color: "lightprimary",
                                    size: "x-small",
                                    onClick: addOrderRow,
                                    class: "ms-3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(CirclePlusIcon), {
                                        class: "text-primary",
                                        size: "18"
                                      }),
                                      createVNode(_component_v_tooltip, {
                                        activator: "parent",
                                        location: "bottom"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Add Item")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("td", { width: "300" }, [
                                  createVNode(_component_v_text_field, {
                                    label: "Item Name",
                                    "hide-details": "",
                                    modelValue: inv.itemName,
                                    "onUpdate:modelValue": ($event) => inv.itemName = $event,
                                    rules,
                                    required: "",
                                    class: "py-4",
                                    width: "300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("td", { width: "150" }, [
                                  createVNode(_component_v_text_field, {
                                    modelValue: inv.unitPrice,
                                    "onUpdate:modelValue": ($event) => inv.unitPrice = $event,
                                    label: "Unit Price",
                                    rules,
                                    required: "",
                                    "hide-details": "",
                                    width: "150",
                                    type: "number"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("td", { width: "150" }, [
                                  createVNode(_component_v_text_field, {
                                    modelValue: inv.units,
                                    "onUpdate:modelValue": ($event) => inv.units = $event,
                                    label: "Units",
                                    rules,
                                    required: "",
                                    "hide-details": "",
                                    width: "150",
                                    type: "number"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("td", { class: "text-14" }, toDisplayString(unref(store).grandTotal(invoice.value)), 1),
                                createVNode("td", { class: "text-end" }, [
                                  createVNode(_component_RouterLink, {
                                    to: "",
                                    class: "cursor-pointer me-lg-3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_avatar, {
                                        color: "lighterror",
                                        size: "32",
                                        onClick: ($event) => deleteOrderRow(index)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Icon), {
                                            icon: "solar:trash-bin-minimalistic-linear",
                                            class: "text-error",
                                            height: "18"
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]),
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
                                  }, 1024)
                                ])
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
                            class: "mt-3 ps-lg-16"
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
                      createVNode("div", { class: "d-flex align-center justify-end ga-3" }, [
                        createVNode(_component_v_btn, {
                          flat: "",
                          color: "success",
                          onClick: submitInvoice,
                          rounded: "pill",
                          class: "mt-6"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Save")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_btn, {
                          flat: "",
                          color: "error",
                          to: "/apps/invoice",
                          rounded: "pill",
                          class: "mt-6"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Cancel")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/invoice/Edit.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Edit Invoice" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "#"
      },
      {
        text: "Edit Invoice",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/invoice/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-DeL0d5O6.js.map
