import { ref, computed, watch, resolveComponent, withCtx, createTextVNode, createVNode, unref, toDisplayString, mergeProps, createBlock, openBlock, nextTick, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { t as image1$1, v as image2$1, w as img6$2, A as img10, B as proimg4 } from './server.mjs';
import { EditIcon, TrashIcon, PointFilledIcon } from 'vue-tabler-icons';
import { _ as _sfc_main$2 } from './UiParentCard-DhlYzLUl.mjs';
import { _ as _sfc_main$1 } from './BaseBreadcrumb-DAIjkUfv.mjs';
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

const _sfc_main = {
  __name: "ProductList",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Product List" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        to: "/"
      },
      {
        text: "Product List",
        disabled: true,
        to: ""
      }
    ]);
    const search = ref();
    const dialog = ref(false);
    const dialogDelete = ref(false);
    const headers = ref([
      { title: "Product Image", key: "image" },
      { title: "Product", key: "product" },
      { title: "Date", key: "date" },
      { title: "Status", key: "status" },
      { title: "Price", key: "price" },
      { title: "Actions", key: "actions", sortable: false }
    ]);
    const productlist = ref([]);
    const editedIndex = ref(-1);
    const editedItem = ref({
      product: "",
      image: image1$1,
      category: "",
      date: "",
      status: "",
      price: ""
    });
    const defaultItem = ref({
      product: "",
      image: image1$1,
      category: "",
      date: "",
      status: "",
      price: ""
    });
    const formTitle = computed(() => {
      return editedIndex.value === -1 ? "New Item" : "Edit Item";
    });
    function initialize() {
      productlist.value = [
        {
          product: "Curology Face wash",
          category: "Beauty",
          image: image1$1,
          date: "Thu, Jan 12 2023",
          status: "Instock",
          price: "$275"
        },
        {
          product: "Body Lotion",
          category: "Beauty",
          image: image2$1,
          date: "Thu, Jan 20 2023",
          status: "Out of Stock",
          price: "$89"
        },
        {
          product: "Smart Watch",
          category: "Electronics",
          image: img6$2,
          date: "Fri, Feb 15 2024",
          status: "Instock",
          price: "$125"
        },
        {
          product: "Camera",
          category: "Electronics",
          image: img10,
          date: "Fri, March 30 2024",
          status: "Instock",
          price: "$200"
        },
        {
          product: "Games",
          category: "Electronics",
          image: proimg4,
          date: "Sat, March 30 2024",
          status: "Out of Stock",
          price: "$100"
        },
        {
          product: "Body Lotion",
          category: "Beauty",
          image: image2$1,
          date: "Thu, Jan 28 2023",
          status: "Out of Stock",
          price: "$84"
        },
        {
          product: "Smart Watch",
          category: "Electronics",
          image: img6$2,
          date: "Fri, Feb 15 2024",
          status: "Instock",
          price: "$300"
        }
      ];
    }
    function editItem(item) {
      editedIndex.value = productlist.value.indexOf(item);
      editedItem.value = Object.assign({}, item);
      dialog.value = true;
    }
    function deleteItem(item) {
      editedIndex.value = productlist.value.indexOf(item);
      editedItem.value = Object.assign({}, item);
      dialogDelete.value = true;
    }
    function deleteItemConfirm() {
      productlist.value.splice(editedIndex.value, 1);
      closeDelete();
    }
    function close() {
      dialog.value = false;
      nextTick(() => {
        editedItem.value = Object.assign({}, defaultItem.value);
        editedIndex.value = -1;
      });
    }
    function closeDelete() {
      dialogDelete.value = false;
      nextTick(() => {
        editedItem.value = Object.assign({}, defaultItem.value);
        editedIndex.value = -1;
      });
    }
    function save() {
      if (editedIndex.value > -1) {
        Object.assign(productlist.value[editedIndex.value], editedItem.value);
      } else {
        productlist.value.push(editedItem.value);
      }
      close();
    }
    watch(dialog, (val) => {
      val || close();
    });
    watch(dialogDelete, (val) => {
      val || closeDelete();
    });
    initialize();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_data_table = resolveComponent("v-data-table");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_toolbar = resolveComponent("v-toolbar");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_spacer = resolveComponent("v-spacer");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: page.value.title,
        class: "",
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "Product List" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_data_table, {
                          class: "rounded-md datatabels productlist",
                          headers: headers.value,
                          items: productlist.value,
                          search: search.value,
                          "onUpdate:search": ($event) => search.value = $event,
                          "items-per-page": "5",
                          "item-value": "product",
                          color: "primary",
                          "show-select": "",
                          "sort-by": [{ key: "calories", order: "asc" }]
                        }, {
                          "item.image": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex gap-3 align-center"${_scopeId4}><div${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_img, {
                                src: `${item.image}`,
                                height: "55",
                                width: "55",
                                class: "rounded",
                                cover: ""
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div${_scopeId4}><h6 class="text-h6"${_scopeId4}>${ssrInterpolate(item.product)}</h6><p class="textSecondary"${_scopeId4}>${ssrInterpolate(item.category)}</p></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex gap-3 align-center" }, [
                                  createVNode("div", null, [
                                    createVNode(_component_v_img, {
                                      src: `${item.image}`,
                                      height: "55",
                                      width: "55",
                                      class: "rounded",
                                      cover: ""
                                    }, null, 8, ["src"])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("h6", { class: "text-h6" }, toDisplayString(item.product), 1),
                                    createVNode("p", { class: "textSecondary" }, toDisplayString(item.category), 1)
                                  ])
                                ])
                              ];
                            }
                          }),
                          "item.status": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex gap-2 align-center"${_scopeId4}>`);
                              if (item.status == "Instock") {
                                _push5(ssrRenderComponent(unref(PointFilledIcon), { class: "text-success" }, null, _parent5, _scopeId4));
                              } else {
                                _push5(ssrRenderComponent(unref(PointFilledIcon), { class: "text-error" }, null, _parent5, _scopeId4));
                              }
                              _push5(` ${ssrInterpolate(item.status)}</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex gap-2 align-center" }, [
                                  item.status == "Instock" ? (openBlock(), createBlock(unref(PointFilledIcon), {
                                    key: 0,
                                    class: "text-success"
                                  })) : (openBlock(), createBlock(unref(PointFilledIcon), {
                                    key: 1,
                                    class: "text-error"
                                  })),
                                  createTextVNode(" " + toDisplayString(item.status), 1)
                                ])
                              ];
                            }
                          }),
                          "item.price": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h6 class="text-h6"${_scopeId4}>${ssrInterpolate(item.price)}</h6>`);
                            } else {
                              return [
                                createVNode("h6", { class: "text-h6" }, toDisplayString(item.price), 1)
                              ];
                            }
                          }),
                          top: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_toolbar, {
                                class: "productlist-table bg-transparent",
                                flat: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_dialog, {
                                      modelValue: dialog.value,
                                      "onUpdate:modelValue": ($event) => dialog.value = $event,
                                      "max-width": "500px"
                                    }, {
                                      activator: withCtx(({ props }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="d-md-flex block justify-space-between w-100 pb-6 align-center"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            modelValue: search.value,
                                            "onUpdate:modelValue": ($event) => search.value = $event,
                                            "append-inner-icon": "mdi-magnify",
                                            label: "Search",
                                            "single-line": "",
                                            "hide-details": "",
                                            class: "mb-md-0 mb-3"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_btn, mergeProps({
                                            color: "primary",
                                            variant: "flat",
                                            dark: ""
                                          }, props), {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Add New Item`);
                                              } else {
                                                return [
                                                  createTextVNode("Add New Item")
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "d-md-flex block justify-space-between w-100 pb-6 align-center" }, [
                                              createVNode(_component_v_text_field, {
                                                modelValue: search.value,
                                                "onUpdate:modelValue": ($event) => search.value = $event,
                                                "append-inner-icon": "mdi-magnify",
                                                label: "Search",
                                                "single-line": "",
                                                "hide-details": "",
                                                class: "mb-md-0 mb-3"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_v_btn, mergeProps({
                                                color: "primary",
                                                variant: "flat",
                                                dark: ""
                                              }, props), {
                                                default: withCtx(() => [
                                                  createTextVNode("Add New Item")
                                                ]),
                                                _: 2
                                              }, 1040)
                                            ])
                                          ];
                                        }
                                      }),
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_card, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_card_title, { class: "px-6 pt-6" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<span class="text-h5"${_scopeId8}>${ssrInterpolate(formTitle.value)}</span>`);
                                                    } else {
                                                      return [
                                                        createVNode("span", { class: "text-h5" }, toDisplayString(formTitle.value), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_card_text, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_container, { class: "px-0" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_row, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(_component_v_col, {
                                                                    cols: "12",
                                                                    sm: "6",
                                                                    md: "4"
                                                                  }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: editedItem.value.category,
                                                                          "onUpdate:modelValue": ($event) => editedItem.value.category = $event,
                                                                          label: "Category"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: editedItem.value.category,
                                                                            "onUpdate:modelValue": ($event) => editedItem.value.category = $event,
                                                                            label: "Category"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, {
                                                                    cols: "12",
                                                                    sm: "6",
                                                                    md: "4"
                                                                  }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: editedItem.value.product,
                                                                          "onUpdate:modelValue": ($event) => editedItem.value.product = $event,
                                                                          label: "Product name"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: editedItem.value.product,
                                                                            "onUpdate:modelValue": ($event) => editedItem.value.product = $event,
                                                                            label: "Product name"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, {
                                                                    cols: "12",
                                                                    sm: "6",
                                                                    md: "4"
                                                                  }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: editedItem.value.date,
                                                                          "onUpdate:modelValue": ($event) => editedItem.value.date = $event,
                                                                          label: "Date"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: editedItem.value.date,
                                                                            "onUpdate:modelValue": ($event) => editedItem.value.date = $event,
                                                                            label: "Date"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, {
                                                                    cols: "12",
                                                                    sm: "6",
                                                                    md: "4"
                                                                  }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_select, {
                                                                          label: "Select",
                                                                          modelValue: editedItem.value.status,
                                                                          "onUpdate:modelValue": ($event) => editedItem.value.status = $event,
                                                                          variant: "outlined",
                                                                          items: ["Instock", "Out of Stock"]
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_select, {
                                                                            label: "Select",
                                                                            modelValue: editedItem.value.status,
                                                                            "onUpdate:modelValue": ($event) => editedItem.value.status = $event,
                                                                            variant: "outlined",
                                                                            items: ["Instock", "Out of Stock"]
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(_component_v_col, {
                                                                    cols: "12",
                                                                    sm: "6",
                                                                    md: "4"
                                                                  }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_text_field, {
                                                                          modelValue: editedItem.value.price,
                                                                          "onUpdate:modelValue": ($event) => editedItem.value.price = $event,
                                                                          label: "Price"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: editedItem.value.price,
                                                                            "onUpdate:modelValue": ($event) => editedItem.value.price = $event,
                                                                            label: "Price"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(_component_v_col, {
                                                                      cols: "12",
                                                                      sm: "6",
                                                                      md: "4"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: editedItem.value.category,
                                                                          "onUpdate:modelValue": ($event) => editedItem.value.category = $event,
                                                                          label: "Category"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, {
                                                                      cols: "12",
                                                                      sm: "6",
                                                                      md: "4"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: editedItem.value.product,
                                                                          "onUpdate:modelValue": ($event) => editedItem.value.product = $event,
                                                                          label: "Product name"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, {
                                                                      cols: "12",
                                                                      sm: "6",
                                                                      md: "4"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: editedItem.value.date,
                                                                          "onUpdate:modelValue": ($event) => editedItem.value.date = $event,
                                                                          label: "Date"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, {
                                                                      cols: "12",
                                                                      sm: "6",
                                                                      md: "4"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_select, {
                                                                          label: "Select",
                                                                          modelValue: editedItem.value.status,
                                                                          "onUpdate:modelValue": ($event) => editedItem.value.status = $event,
                                                                          variant: "outlined",
                                                                          items: ["Instock", "Out of Stock"]
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_col, {
                                                                      cols: "12",
                                                                      sm: "6",
                                                                      md: "4"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_text_field, {
                                                                          modelValue: editedItem.value.price,
                                                                          "onUpdate:modelValue": ($event) => editedItem.value.price = $event,
                                                                          label: "Price"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_row, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_col, {
                                                                    cols: "12",
                                                                    sm: "6",
                                                                    md: "4"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: editedItem.value.category,
                                                                        "onUpdate:modelValue": ($event) => editedItem.value.category = $event,
                                                                        label: "Category"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, {
                                                                    cols: "12",
                                                                    sm: "6",
                                                                    md: "4"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: editedItem.value.product,
                                                                        "onUpdate:modelValue": ($event) => editedItem.value.product = $event,
                                                                        label: "Product name"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, {
                                                                    cols: "12",
                                                                    sm: "6",
                                                                    md: "4"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: editedItem.value.date,
                                                                        "onUpdate:modelValue": ($event) => editedItem.value.date = $event,
                                                                        label: "Date"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, {
                                                                    cols: "12",
                                                                    sm: "6",
                                                                    md: "4"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_select, {
                                                                        label: "Select",
                                                                        modelValue: editedItem.value.status,
                                                                        "onUpdate:modelValue": ($event) => editedItem.value.status = $event,
                                                                        variant: "outlined",
                                                                        items: ["Instock", "Out of Stock"]
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_col, {
                                                                    cols: "12",
                                                                    sm: "6",
                                                                    md: "4"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: editedItem.value.price,
                                                                        "onUpdate:modelValue": ($event) => editedItem.value.price = $event,
                                                                        label: "Price"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_container, { class: "px-0" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_row, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_col, {
                                                                  cols: "12",
                                                                  sm: "6",
                                                                  md: "4"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: editedItem.value.category,
                                                                      "onUpdate:modelValue": ($event) => editedItem.value.category = $event,
                                                                      label: "Category"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, {
                                                                  cols: "12",
                                                                  sm: "6",
                                                                  md: "4"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: editedItem.value.product,
                                                                      "onUpdate:modelValue": ($event) => editedItem.value.product = $event,
                                                                      label: "Product name"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, {
                                                                  cols: "12",
                                                                  sm: "6",
                                                                  md: "4"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: editedItem.value.date,
                                                                      "onUpdate:modelValue": ($event) => editedItem.value.date = $event,
                                                                      label: "Date"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, {
                                                                  cols: "12",
                                                                  sm: "6",
                                                                  md: "4"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_select, {
                                                                      label: "Select",
                                                                      modelValue: editedItem.value.status,
                                                                      "onUpdate:modelValue": ($event) => editedItem.value.status = $event,
                                                                      variant: "outlined",
                                                                      items: ["Instock", "Out of Stock"]
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, {
                                                                  cols: "12",
                                                                  sm: "6",
                                                                  md: "4"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: editedItem.value.price,
                                                                      "onUpdate:modelValue": ($event) => editedItem.value.price = $event,
                                                                      label: "Price"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_card_actions, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_spacer, null, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_btn, {
                                                        color: "error",
                                                        variant: "flat",
                                                        dark: "",
                                                        onClick: close
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(` Cancel `);
                                                          } else {
                                                            return [
                                                              createTextVNode(" Cancel ")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_btn, {
                                                        color: "primary",
                                                        variant: "flat",
                                                        dark: "",
                                                        onClick: save
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(` Save `);
                                                          } else {
                                                            return [
                                                              createTextVNode(" Save ")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_spacer),
                                                        createVNode(_component_v_btn, {
                                                          color: "error",
                                                          variant: "flat",
                                                          dark: "",
                                                          onClick: close
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Cancel ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_btn, {
                                                          color: "primary",
                                                          variant: "flat",
                                                          dark: "",
                                                          onClick: save
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Save ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_card_title, { class: "px-6 pt-6" }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", { class: "text-h5" }, toDisplayString(formTitle.value), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card_text, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_container, { class: "px-0" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_row, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_col, {
                                                                cols: "12",
                                                                sm: "6",
                                                                md: "4"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: editedItem.value.category,
                                                                    "onUpdate:modelValue": ($event) => editedItem.value.category = $event,
                                                                    label: "Category"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, {
                                                                cols: "12",
                                                                sm: "6",
                                                                md: "4"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: editedItem.value.product,
                                                                    "onUpdate:modelValue": ($event) => editedItem.value.product = $event,
                                                                    label: "Product name"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, {
                                                                cols: "12",
                                                                sm: "6",
                                                                md: "4"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: editedItem.value.date,
                                                                    "onUpdate:modelValue": ($event) => editedItem.value.date = $event,
                                                                    label: "Date"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, {
                                                                cols: "12",
                                                                sm: "6",
                                                                md: "4"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_select, {
                                                                    label: "Select",
                                                                    modelValue: editedItem.value.status,
                                                                    "onUpdate:modelValue": ($event) => editedItem.value.status = $event,
                                                                    variant: "outlined",
                                                                    items: ["Instock", "Out of Stock"]
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, {
                                                                cols: "12",
                                                                sm: "6",
                                                                md: "4"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: editedItem.value.price,
                                                                    "onUpdate:modelValue": ($event) => editedItem.value.price = $event,
                                                                    label: "Price"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                  }),
                                                  createVNode(_component_v_card_actions, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_spacer),
                                                      createVNode(_component_v_btn, {
                                                        color: "error",
                                                        variant: "flat",
                                                        dark: "",
                                                        onClick: close
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Cancel ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_btn, {
                                                        color: "primary",
                                                        variant: "flat",
                                                        dark: "",
                                                        onClick: save
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Save ")
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_card, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card_title, { class: "px-6 pt-6" }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "text-h5" }, toDisplayString(formTitle.value), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card_text, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_container, { class: "px-0" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_row, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_col, {
                                                              cols: "12",
                                                              sm: "6",
                                                              md: "4"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: editedItem.value.category,
                                                                  "onUpdate:modelValue": ($event) => editedItem.value.category = $event,
                                                                  label: "Category"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, {
                                                              cols: "12",
                                                              sm: "6",
                                                              md: "4"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: editedItem.value.product,
                                                                  "onUpdate:modelValue": ($event) => editedItem.value.product = $event,
                                                                  label: "Product name"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, {
                                                              cols: "12",
                                                              sm: "6",
                                                              md: "4"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: editedItem.value.date,
                                                                  "onUpdate:modelValue": ($event) => editedItem.value.date = $event,
                                                                  label: "Date"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, {
                                                              cols: "12",
                                                              sm: "6",
                                                              md: "4"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_select, {
                                                                  label: "Select",
                                                                  modelValue: editedItem.value.status,
                                                                  "onUpdate:modelValue": ($event) => editedItem.value.status = $event,
                                                                  variant: "outlined",
                                                                  items: ["Instock", "Out of Stock"]
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, {
                                                              cols: "12",
                                                              sm: "6",
                                                              md: "4"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: editedItem.value.price,
                                                                  "onUpdate:modelValue": ($event) => editedItem.value.price = $event,
                                                                  label: "Price"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                }),
                                                createVNode(_component_v_card_actions, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_spacer),
                                                    createVNode(_component_v_btn, {
                                                      color: "error",
                                                      variant: "flat",
                                                      dark: "",
                                                      onClick: close
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Cancel ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_btn, {
                                                      color: "primary",
                                                      variant: "flat",
                                                      dark: "",
                                                      onClick: save
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Save ")
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
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_dialog, {
                                      modelValue: dialogDelete.value,
                                      "onUpdate:modelValue": ($event) => dialogDelete.value = $event,
                                      "max-width": "500px"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_card, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_card_title, { class: "text-h5 text-center py-6" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Are you sure you want to delete this item?`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Are you sure you want to delete this item?")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_card_actions, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_spacer, null, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_btn, {
                                                        color: "error",
                                                        variant: "flat",
                                                        dark: "",
                                                        onClick: closeDelete
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`Cancel`);
                                                          } else {
                                                            return [
                                                              createTextVNode("Cancel")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_btn, {
                                                        color: "primary",
                                                        variant: "flat",
                                                        dark: "",
                                                        onClick: deleteItemConfirm
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`OK`);
                                                          } else {
                                                            return [
                                                              createTextVNode("OK")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_spacer, null, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_spacer),
                                                        createVNode(_component_v_btn, {
                                                          color: "error",
                                                          variant: "flat",
                                                          dark: "",
                                                          onClick: closeDelete
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Cancel")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_btn, {
                                                          color: "primary",
                                                          variant: "flat",
                                                          dark: "",
                                                          onClick: deleteItemConfirm
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("OK")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_spacer)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_card_title, { class: "text-h5 text-center py-6" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Are you sure you want to delete this item?")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card_actions, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_spacer),
                                                      createVNode(_component_v_btn, {
                                                        color: "error",
                                                        variant: "flat",
                                                        dark: "",
                                                        onClick: closeDelete
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Cancel")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_btn, {
                                                        color: "primary",
                                                        variant: "flat",
                                                        dark: "",
                                                        onClick: deleteItemConfirm
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("OK")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_spacer)
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_card, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card_title, { class: "text-h5 text-center py-6" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Are you sure you want to delete this item?")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card_actions, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_spacer),
                                                    createVNode(_component_v_btn, {
                                                      color: "error",
                                                      variant: "flat",
                                                      dark: "",
                                                      onClick: closeDelete
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Cancel")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_btn, {
                                                      color: "primary",
                                                      variant: "flat",
                                                      dark: "",
                                                      onClick: deleteItemConfirm
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("OK")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_spacer)
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_dialog, {
                                        modelValue: dialog.value,
                                        "onUpdate:modelValue": ($event) => dialog.value = $event,
                                        "max-width": "500px"
                                      }, {
                                        activator: withCtx(({ props }) => [
                                          createVNode("div", { class: "d-md-flex block justify-space-between w-100 pb-6 align-center" }, [
                                            createVNode(_component_v_text_field, {
                                              modelValue: search.value,
                                              "onUpdate:modelValue": ($event) => search.value = $event,
                                              "append-inner-icon": "mdi-magnify",
                                              label: "Search",
                                              "single-line": "",
                                              "hide-details": "",
                                              class: "mb-md-0 mb-3"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_btn, mergeProps({
                                              color: "primary",
                                              variant: "flat",
                                              dark: ""
                                            }, props), {
                                              default: withCtx(() => [
                                                createTextVNode("Add New Item")
                                              ]),
                                              _: 2
                                            }, 1040)
                                          ])
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_v_card, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card_title, { class: "px-6 pt-6" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "text-h5" }, toDisplayString(formTitle.value), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card_text, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_container, { class: "px-0" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_row, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_col, {
                                                            cols: "12",
                                                            sm: "6",
                                                            md: "4"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: editedItem.value.category,
                                                                "onUpdate:modelValue": ($event) => editedItem.value.category = $event,
                                                                label: "Category"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, {
                                                            cols: "12",
                                                            sm: "6",
                                                            md: "4"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: editedItem.value.product,
                                                                "onUpdate:modelValue": ($event) => editedItem.value.product = $event,
                                                                label: "Product name"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, {
                                                            cols: "12",
                                                            sm: "6",
                                                            md: "4"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: editedItem.value.date,
                                                                "onUpdate:modelValue": ($event) => editedItem.value.date = $event,
                                                                label: "Date"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, {
                                                            cols: "12",
                                                            sm: "6",
                                                            md: "4"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_select, {
                                                                label: "Select",
                                                                modelValue: editedItem.value.status,
                                                                "onUpdate:modelValue": ($event) => editedItem.value.status = $event,
                                                                variant: "outlined",
                                                                items: ["Instock", "Out of Stock"]
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, {
                                                            cols: "12",
                                                            sm: "6",
                                                            md: "4"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: editedItem.value.price,
                                                                "onUpdate:modelValue": ($event) => editedItem.value.price = $event,
                                                                label: "Price"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                              }),
                                              createVNode(_component_v_card_actions, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_spacer),
                                                  createVNode(_component_v_btn, {
                                                    color: "error",
                                                    variant: "flat",
                                                    dark: "",
                                                    onClick: close
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Cancel ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_btn, {
                                                    color: "primary",
                                                    variant: "flat",
                                                    dark: "",
                                                    onClick: save
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Save ")
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
                                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_dialog, {
                                        modelValue: dialogDelete.value,
                                        "onUpdate:modelValue": ($event) => dialogDelete.value = $event,
                                        "max-width": "500px"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card_title, { class: "text-h5 text-center py-6" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Are you sure you want to delete this item?")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card_actions, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_spacer),
                                                  createVNode(_component_v_btn, {
                                                    color: "error",
                                                    variant: "flat",
                                                    dark: "",
                                                    onClick: closeDelete
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Cancel")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_btn, {
                                                    color: "primary",
                                                    variant: "flat",
                                                    dark: "",
                                                    onClick: deleteItemConfirm
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("OK")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_spacer)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_toolbar, {
                                  class: "productlist-table bg-transparent",
                                  flat: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_dialog, {
                                      modelValue: dialog.value,
                                      "onUpdate:modelValue": ($event) => dialog.value = $event,
                                      "max-width": "500px"
                                    }, {
                                      activator: withCtx(({ props }) => [
                                        createVNode("div", { class: "d-md-flex block justify-space-between w-100 pb-6 align-center" }, [
                                          createVNode(_component_v_text_field, {
                                            modelValue: search.value,
                                            "onUpdate:modelValue": ($event) => search.value = $event,
                                            "append-inner-icon": "mdi-magnify",
                                            label: "Search",
                                            "single-line": "",
                                            "hide-details": "",
                                            class: "mb-md-0 mb-3"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_btn, mergeProps({
                                            color: "primary",
                                            variant: "flat",
                                            dark: ""
                                          }, props), {
                                            default: withCtx(() => [
                                              createTextVNode("Add New Item")
                                            ]),
                                            _: 2
                                          }, 1040)
                                        ])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_v_card, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card_title, { class: "px-6 pt-6" }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "text-h5" }, toDisplayString(formTitle.value), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card_text, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_container, { class: "px-0" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_row, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, {
                                                          cols: "12",
                                                          sm: "6",
                                                          md: "4"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: editedItem.value.category,
                                                              "onUpdate:modelValue": ($event) => editedItem.value.category = $event,
                                                              label: "Category"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, {
                                                          cols: "12",
                                                          sm: "6",
                                                          md: "4"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: editedItem.value.product,
                                                              "onUpdate:modelValue": ($event) => editedItem.value.product = $event,
                                                              label: "Product name"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, {
                                                          cols: "12",
                                                          sm: "6",
                                                          md: "4"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: editedItem.value.date,
                                                              "onUpdate:modelValue": ($event) => editedItem.value.date = $event,
                                                              label: "Date"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, {
                                                          cols: "12",
                                                          sm: "6",
                                                          md: "4"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_select, {
                                                              label: "Select",
                                                              modelValue: editedItem.value.status,
                                                              "onUpdate:modelValue": ($event) => editedItem.value.status = $event,
                                                              variant: "outlined",
                                                              items: ["Instock", "Out of Stock"]
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, {
                                                          cols: "12",
                                                          sm: "6",
                                                          md: "4"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: editedItem.value.price,
                                                              "onUpdate:modelValue": ($event) => editedItem.value.price = $event,
                                                              label: "Price"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                            }),
                                            createVNode(_component_v_card_actions, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_spacer),
                                                createVNode(_component_v_btn, {
                                                  color: "error",
                                                  variant: "flat",
                                                  dark: "",
                                                  onClick: close
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Cancel ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_btn, {
                                                  color: "primary",
                                                  variant: "flat",
                                                  dark: "",
                                                  onClick: save
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Save ")
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
                                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_v_dialog, {
                                      modelValue: dialogDelete.value,
                                      "onUpdate:modelValue": ($event) => dialogDelete.value = $event,
                                      "max-width": "500px"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card_title, { class: "text-h5 text-center py-6" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Are you sure you want to delete this item?")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card_actions, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_spacer),
                                                createVNode(_component_v_btn, {
                                                  color: "error",
                                                  variant: "flat",
                                                  dark: "",
                                                  onClick: closeDelete
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Cancel")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_btn, {
                                                  color: "primary",
                                                  variant: "flat",
                                                  dark: "",
                                                  onClick: deleteItemConfirm
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("OK")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_spacer)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          "item.actions": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex gap-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(EditIcon), {
                                height: "20",
                                width: "20",
                                class: "text-primary cursor-pointer",
                                size: "small",
                                onClick: ($event) => editItem(item)
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(TrashIcon), {
                                height: "20",
                                width: "20",
                                class: "text-error cursor-pointer",
                                size: "small",
                                onClick: ($event) => deleteItem(item)
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex gap-2" }, [
                                  createVNode(unref(EditIcon), {
                                    height: "20",
                                    width: "20",
                                    class: "text-primary cursor-pointer",
                                    size: "small",
                                    onClick: ($event) => editItem(item)
                                  }, null, 8, ["onClick"]),
                                  createVNode(unref(TrashIcon), {
                                    height: "20",
                                    width: "20",
                                    class: "text-error cursor-pointer",
                                    size: "small",
                                    onClick: ($event) => deleteItem(item)
                                  }, null, 8, ["onClick"])
                                ])
                              ];
                            }
                          }),
                          "no-data": withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "primary",
                                onClick: initialize
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Reset `);
                                  } else {
                                    return [
                                      createTextVNode(" Reset ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  onClick: initialize
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Reset ")
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
                          createVNode(_component_v_data_table, {
                            class: "rounded-md datatabels productlist",
                            headers: headers.value,
                            items: productlist.value,
                            search: search.value,
                            "onUpdate:search": ($event) => search.value = $event,
                            "items-per-page": "5",
                            "item-value": "product",
                            color: "primary",
                            "show-select": "",
                            "sort-by": [{ key: "calories", order: "asc" }]
                          }, {
                            "item.image": withCtx(({ item }) => [
                              createVNode("div", { class: "d-flex gap-3 align-center" }, [
                                createVNode("div", null, [
                                  createVNode(_component_v_img, {
                                    src: `${item.image}`,
                                    height: "55",
                                    width: "55",
                                    class: "rounded",
                                    cover: ""
                                  }, null, 8, ["src"])
                                ]),
                                createVNode("div", null, [
                                  createVNode("h6", { class: "text-h6" }, toDisplayString(item.product), 1),
                                  createVNode("p", { class: "textSecondary" }, toDisplayString(item.category), 1)
                                ])
                              ])
                            ]),
                            "item.status": withCtx(({ item }) => [
                              createVNode("div", { class: "d-flex gap-2 align-center" }, [
                                item.status == "Instock" ? (openBlock(), createBlock(unref(PointFilledIcon), {
                                  key: 0,
                                  class: "text-success"
                                })) : (openBlock(), createBlock(unref(PointFilledIcon), {
                                  key: 1,
                                  class: "text-error"
                                })),
                                createTextVNode(" " + toDisplayString(item.status), 1)
                              ])
                            ]),
                            "item.price": withCtx(({ item }) => [
                              createVNode("h6", { class: "text-h6" }, toDisplayString(item.price), 1)
                            ]),
                            top: withCtx(() => [
                              createVNode(_component_v_toolbar, {
                                class: "productlist-table bg-transparent",
                                flat: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_dialog, {
                                    modelValue: dialog.value,
                                    "onUpdate:modelValue": ($event) => dialog.value = $event,
                                    "max-width": "500px"
                                  }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode("div", { class: "d-md-flex block justify-space-between w-100 pb-6 align-center" }, [
                                        createVNode(_component_v_text_field, {
                                          modelValue: search.value,
                                          "onUpdate:modelValue": ($event) => search.value = $event,
                                          "append-inner-icon": "mdi-magnify",
                                          label: "Search",
                                          "single-line": "",
                                          "hide-details": "",
                                          class: "mb-md-0 mb-3"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_btn, mergeProps({
                                          color: "primary",
                                          variant: "flat",
                                          dark: ""
                                        }, props), {
                                          default: withCtx(() => [
                                            createTextVNode("Add New Item")
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card_title, { class: "px-6 pt-6" }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "text-h5" }, toDisplayString(formTitle.value), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card_text, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_container, { class: "px-0" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_row, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, {
                                                        cols: "12",
                                                        sm: "6",
                                                        md: "4"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: editedItem.value.category,
                                                            "onUpdate:modelValue": ($event) => editedItem.value.category = $event,
                                                            label: "Category"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, {
                                                        cols: "12",
                                                        sm: "6",
                                                        md: "4"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: editedItem.value.product,
                                                            "onUpdate:modelValue": ($event) => editedItem.value.product = $event,
                                                            label: "Product name"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, {
                                                        cols: "12",
                                                        sm: "6",
                                                        md: "4"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: editedItem.value.date,
                                                            "onUpdate:modelValue": ($event) => editedItem.value.date = $event,
                                                            label: "Date"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, {
                                                        cols: "12",
                                                        sm: "6",
                                                        md: "4"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_select, {
                                                            label: "Select",
                                                            modelValue: editedItem.value.status,
                                                            "onUpdate:modelValue": ($event) => editedItem.value.status = $event,
                                                            variant: "outlined",
                                                            items: ["Instock", "Out of Stock"]
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, {
                                                        cols: "12",
                                                        sm: "6",
                                                        md: "4"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: editedItem.value.price,
                                                            "onUpdate:modelValue": ($event) => editedItem.value.price = $event,
                                                            label: "Price"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                          }),
                                          createVNode(_component_v_card_actions, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_spacer),
                                              createVNode(_component_v_btn, {
                                                color: "error",
                                                variant: "flat",
                                                dark: "",
                                                onClick: close
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Cancel ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_btn, {
                                                color: "primary",
                                                variant: "flat",
                                                dark: "",
                                                onClick: save
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Save ")
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
                                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_dialog, {
                                    modelValue: dialogDelete.value,
                                    "onUpdate:modelValue": ($event) => dialogDelete.value = $event,
                                    "max-width": "500px"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card_title, { class: "text-h5 text-center py-6" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Are you sure you want to delete this item?")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card_actions, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_spacer),
                                              createVNode(_component_v_btn, {
                                                color: "error",
                                                variant: "flat",
                                                dark: "",
                                                onClick: closeDelete
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Cancel")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_btn, {
                                                color: "primary",
                                                variant: "flat",
                                                dark: "",
                                                onClick: deleteItemConfirm
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("OK")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_spacer)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            "item.actions": withCtx(({ item }) => [
                              createVNode("div", { class: "d-flex gap-2" }, [
                                createVNode(unref(EditIcon), {
                                  height: "20",
                                  width: "20",
                                  class: "text-primary cursor-pointer",
                                  size: "small",
                                  onClick: ($event) => editItem(item)
                                }, null, 8, ["onClick"]),
                                createVNode(unref(TrashIcon), {
                                  height: "20",
                                  width: "20",
                                  class: "text-error cursor-pointer",
                                  size: "small",
                                  onClick: ($event) => deleteItem(item)
                                }, null, 8, ["onClick"])
                              ])
                            ]),
                            "no-data": withCtx(() => [
                              createVNode(_component_v_btn, {
                                color: "primary",
                                onClick: initialize
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Reset ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["headers", "items", "search", "onUpdate:search"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2, { title: "Product List" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_data_table, {
                          class: "rounded-md datatabels productlist",
                          headers: headers.value,
                          items: productlist.value,
                          search: search.value,
                          "onUpdate:search": ($event) => search.value = $event,
                          "items-per-page": "5",
                          "item-value": "product",
                          color: "primary",
                          "show-select": "",
                          "sort-by": [{ key: "calories", order: "asc" }]
                        }, {
                          "item.image": withCtx(({ item }) => [
                            createVNode("div", { class: "d-flex gap-3 align-center" }, [
                              createVNode("div", null, [
                                createVNode(_component_v_img, {
                                  src: `${item.image}`,
                                  height: "55",
                                  width: "55",
                                  class: "rounded",
                                  cover: ""
                                }, null, 8, ["src"])
                              ]),
                              createVNode("div", null, [
                                createVNode("h6", { class: "text-h6" }, toDisplayString(item.product), 1),
                                createVNode("p", { class: "textSecondary" }, toDisplayString(item.category), 1)
                              ])
                            ])
                          ]),
                          "item.status": withCtx(({ item }) => [
                            createVNode("div", { class: "d-flex gap-2 align-center" }, [
                              item.status == "Instock" ? (openBlock(), createBlock(unref(PointFilledIcon), {
                                key: 0,
                                class: "text-success"
                              })) : (openBlock(), createBlock(unref(PointFilledIcon), {
                                key: 1,
                                class: "text-error"
                              })),
                              createTextVNode(" " + toDisplayString(item.status), 1)
                            ])
                          ]),
                          "item.price": withCtx(({ item }) => [
                            createVNode("h6", { class: "text-h6" }, toDisplayString(item.price), 1)
                          ]),
                          top: withCtx(() => [
                            createVNode(_component_v_toolbar, {
                              class: "productlist-table bg-transparent",
                              flat: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_dialog, {
                                  modelValue: dialog.value,
                                  "onUpdate:modelValue": ($event) => dialog.value = $event,
                                  "max-width": "500px"
                                }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode("div", { class: "d-md-flex block justify-space-between w-100 pb-6 align-center" }, [
                                      createVNode(_component_v_text_field, {
                                        modelValue: search.value,
                                        "onUpdate:modelValue": ($event) => search.value = $event,
                                        "append-inner-icon": "mdi-magnify",
                                        label: "Search",
                                        "single-line": "",
                                        "hide-details": "",
                                        class: "mb-md-0 mb-3"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_btn, mergeProps({
                                        color: "primary",
                                        variant: "flat",
                                        dark: ""
                                      }, props), {
                                        default: withCtx(() => [
                                          createTextVNode("Add New Item")
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_title, { class: "px-6 pt-6" }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "text-h5" }, toDisplayString(formTitle.value), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_container, { class: "px-0" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, {
                                                      cols: "12",
                                                      sm: "6",
                                                      md: "4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: editedItem.value.category,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.category = $event,
                                                          label: "Category"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "12",
                                                      sm: "6",
                                                      md: "4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: editedItem.value.product,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.product = $event,
                                                          label: "Product name"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "12",
                                                      sm: "6",
                                                      md: "4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: editedItem.value.date,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.date = $event,
                                                          label: "Date"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "12",
                                                      sm: "6",
                                                      md: "4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_select, {
                                                          label: "Select",
                                                          modelValue: editedItem.value.status,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.status = $event,
                                                          variant: "outlined",
                                                          items: ["Instock", "Out of Stock"]
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "12",
                                                      sm: "6",
                                                      md: "4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: editedItem.value.price,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.price = $event,
                                                          label: "Price"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                        }),
                                        createVNode(_component_v_card_actions, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_spacer),
                                            createVNode(_component_v_btn, {
                                              color: "error",
                                              variant: "flat",
                                              dark: "",
                                              onClick: close
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Cancel ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_btn, {
                                              color: "primary",
                                              variant: "flat",
                                              dark: "",
                                              onClick: save
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Save ")
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
                                }, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_dialog, {
                                  modelValue: dialogDelete.value,
                                  "onUpdate:modelValue": ($event) => dialogDelete.value = $event,
                                  "max-width": "500px"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_title, { class: "text-h5 text-center py-6" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Are you sure you want to delete this item?")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_card_actions, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_spacer),
                                            createVNode(_component_v_btn, {
                                              color: "error",
                                              variant: "flat",
                                              dark: "",
                                              onClick: closeDelete
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Cancel")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_btn, {
                                              color: "primary",
                                              variant: "flat",
                                              dark: "",
                                              onClick: deleteItemConfirm
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("OK")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_spacer)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          "item.actions": withCtx(({ item }) => [
                            createVNode("div", { class: "d-flex gap-2" }, [
                              createVNode(unref(EditIcon), {
                                height: "20",
                                width: "20",
                                class: "text-primary cursor-pointer",
                                size: "small",
                                onClick: ($event) => editItem(item)
                              }, null, 8, ["onClick"]),
                              createVNode(unref(TrashIcon), {
                                height: "20",
                                width: "20",
                                class: "text-error cursor-pointer",
                                size: "small",
                                onClick: ($event) => deleteItem(item)
                              }, null, 8, ["onClick"])
                            ])
                          ]),
                          "no-data": withCtx(() => [
                            createVNode(_component_v_btn, {
                              color: "primary",
                              onClick: initialize
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Reset ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["headers", "items", "search", "onUpdate:search"])
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
                  createVNode(_sfc_main$2, { title: "Product List" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_data_table, {
                        class: "rounded-md datatabels productlist",
                        headers: headers.value,
                        items: productlist.value,
                        search: search.value,
                        "onUpdate:search": ($event) => search.value = $event,
                        "items-per-page": "5",
                        "item-value": "product",
                        color: "primary",
                        "show-select": "",
                        "sort-by": [{ key: "calories", order: "asc" }]
                      }, {
                        "item.image": withCtx(({ item }) => [
                          createVNode("div", { class: "d-flex gap-3 align-center" }, [
                            createVNode("div", null, [
                              createVNode(_component_v_img, {
                                src: `${item.image}`,
                                height: "55",
                                width: "55",
                                class: "rounded",
                                cover: ""
                              }, null, 8, ["src"])
                            ]),
                            createVNode("div", null, [
                              createVNode("h6", { class: "text-h6" }, toDisplayString(item.product), 1),
                              createVNode("p", { class: "textSecondary" }, toDisplayString(item.category), 1)
                            ])
                          ])
                        ]),
                        "item.status": withCtx(({ item }) => [
                          createVNode("div", { class: "d-flex gap-2 align-center" }, [
                            item.status == "Instock" ? (openBlock(), createBlock(unref(PointFilledIcon), {
                              key: 0,
                              class: "text-success"
                            })) : (openBlock(), createBlock(unref(PointFilledIcon), {
                              key: 1,
                              class: "text-error"
                            })),
                            createTextVNode(" " + toDisplayString(item.status), 1)
                          ])
                        ]),
                        "item.price": withCtx(({ item }) => [
                          createVNode("h6", { class: "text-h6" }, toDisplayString(item.price), 1)
                        ]),
                        top: withCtx(() => [
                          createVNode(_component_v_toolbar, {
                            class: "productlist-table bg-transparent",
                            flat: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_dialog, {
                                modelValue: dialog.value,
                                "onUpdate:modelValue": ($event) => dialog.value = $event,
                                "max-width": "500px"
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode("div", { class: "d-md-flex block justify-space-between w-100 pb-6 align-center" }, [
                                    createVNode(_component_v_text_field, {
                                      modelValue: search.value,
                                      "onUpdate:modelValue": ($event) => search.value = $event,
                                      "append-inner-icon": "mdi-magnify",
                                      label: "Search",
                                      "single-line": "",
                                      "hide-details": "",
                                      class: "mb-md-0 mb-3"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_v_btn, mergeProps({
                                      color: "primary",
                                      variant: "flat",
                                      dark: ""
                                    }, props), {
                                      default: withCtx(() => [
                                        createTextVNode("Add New Item")
                                      ]),
                                      _: 2
                                    }, 1040)
                                  ])
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_v_card, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_title, { class: "px-6 pt-6" }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-h5" }, toDisplayString(formTitle.value), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_container, { class: "px-0" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_row, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: editedItem.value.category,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.category = $event,
                                                        label: "Category"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: editedItem.value.product,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.product = $event,
                                                        label: "Product name"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: editedItem.value.date,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.date = $event,
                                                        label: "Date"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_select, {
                                                        label: "Select",
                                                        modelValue: editedItem.value.status,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.status = $event,
                                                        variant: "outlined",
                                                        items: ["Instock", "Out of Stock"]
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: editedItem.value.price,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.price = $event,
                                                        label: "Price"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                      }),
                                      createVNode(_component_v_card_actions, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_spacer),
                                          createVNode(_component_v_btn, {
                                            color: "error",
                                            variant: "flat",
                                            dark: "",
                                            onClick: close
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Cancel ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_btn, {
                                            color: "primary",
                                            variant: "flat",
                                            dark: "",
                                            onClick: save
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Save ")
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
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_dialog, {
                                modelValue: dialogDelete.value,
                                "onUpdate:modelValue": ($event) => dialogDelete.value = $event,
                                "max-width": "500px"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_title, { class: "text-h5 text-center py-6" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Are you sure you want to delete this item?")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_actions, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_spacer),
                                          createVNode(_component_v_btn, {
                                            color: "error",
                                            variant: "flat",
                                            dark: "",
                                            onClick: closeDelete
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Cancel")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_btn, {
                                            color: "primary",
                                            variant: "flat",
                                            dark: "",
                                            onClick: deleteItemConfirm
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("OK")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_spacer)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        "item.actions": withCtx(({ item }) => [
                          createVNode("div", { class: "d-flex gap-2" }, [
                            createVNode(unref(EditIcon), {
                              height: "20",
                              width: "20",
                              class: "text-primary cursor-pointer",
                              size: "small",
                              onClick: ($event) => editItem(item)
                            }, null, 8, ["onClick"]),
                            createVNode(unref(TrashIcon), {
                              height: "20",
                              width: "20",
                              class: "text-error cursor-pointer",
                              size: "small",
                              onClick: ($event) => deleteItem(item)
                            }, null, 8, ["onClick"])
                          ])
                        ]),
                        "no-data": withCtx(() => [
                          createVNode(_component_v_btn, {
                            color: "primary",
                            onClick: initialize
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Reset ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["headers", "items", "search", "onUpdate:search"])
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
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/eCommerce/ProductList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProductList-CffUp5pv.mjs.map
