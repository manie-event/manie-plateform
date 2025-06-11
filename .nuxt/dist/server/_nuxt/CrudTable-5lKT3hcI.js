import { ref, computed, watch, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, mergeProps, nextTick, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./BaseBreadcrumb-DAIjkUfv.js";
import { _ as _sfc_main$2 } from "./UiParentCard-DhlYzLUl.js";
const _sfc_main = {
  __name: "CrudTable",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "CRUD Table" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "#"
      },
      {
        text: "CRUD Table",
        disabled: true,
        href: "#"
      }
    ]);
    const dialog = ref(false);
    const dialogDelete = ref(false);
    const headers = ref([
      {
        title: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        key: "name"
      },
      { title: "Calories", key: "calories" },
      { title: "Fat (g)", key: "fat" },
      { title: "Carbs (g)", key: "carbs" },
      { title: "Protein (g)", key: "protein" },
      { title: "Actions", key: "actions", sortable: false }
    ]);
    const desserts = ref([]);
    const editedIndex = ref(-1);
    const editedItem = ref({
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    });
    const defaultItem = ref({
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    });
    const formTitle = computed(() => {
      return editedIndex.value === -1 ? "New Item" : "Edit Item";
    });
    function initialize() {
      desserts.value = [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6,
          carbs: 24,
          protein: 4
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9,
          carbs: 37,
          protein: 4.3
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16,
          carbs: 23,
          protein: 6
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16,
          carbs: 49,
          protein: 3.9
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0,
          carbs: 94,
          protein: 0
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25,
          carbs: 51,
          protein: 4.9
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26,
          carbs: 65,
          protein: 7
        }
      ];
    }
    function editItem(item) {
      editedIndex.value = desserts.value.indexOf(item);
      editedItem.value = Object.assign({}, item);
      dialog.value = true;
    }
    function deleteItem(item) {
      editedIndex.value = desserts.value.indexOf(item);
      editedItem.value = Object.assign({}, item);
      dialogDelete.value = true;
    }
    function deleteItemConfirm() {
      desserts.value.splice(editedIndex.value, 1);
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
        Object.assign(desserts.value[editedIndex.value], editedItem.value);
      } else {
        desserts.value.push(editedItem.value);
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
      const _component_v_toolbar = resolveComponent("v-toolbar");
      const _component_v_toolbar_title = resolveComponent("v-toolbar-title");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_icon = resolveComponent("v-icon");
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
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "Crud Table" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_data_table, {
                          class: "border rounded-md crud-tbl",
                          headers: headers.value,
                          items: desserts.value,
                          "sort-by": [{ key: "calories", order: "asc" }]
                        }, {
                          top: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_toolbar, {
                                flat: "",
                                class: "border-bottom"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_toolbar_title, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`My Crud Table`);
                                        } else {
                                          return [
                                            createTextVNode("My Crud Table")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_spacer, null, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_dialog, {
                                      modelValue: dialog.value,
                                      "onUpdate:modelValue": ($event) => dialog.value = $event,
                                      "max-width": "500px"
                                    }, {
                                      activator: withCtx(({ props }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
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
                                        } else {
                                          return [
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
                                          ];
                                        }
                                      }),
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_card, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_card_title, { class: "pa-4 pb-0" }, {
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
                                                                          modelValue: editedItem.value.name,
                                                                          "onUpdate:modelValue": ($event) => editedItem.value.name = $event,
                                                                          label: "Dessert name"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: editedItem.value.name,
                                                                            "onUpdate:modelValue": ($event) => editedItem.value.name = $event,
                                                                            label: "Dessert name"
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
                                                                          modelValue: editedItem.value.calories,
                                                                          "onUpdate:modelValue": ($event) => editedItem.value.calories = $event,
                                                                          label: "Calories"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: editedItem.value.calories,
                                                                            "onUpdate:modelValue": ($event) => editedItem.value.calories = $event,
                                                                            label: "Calories"
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
                                                                          modelValue: editedItem.value.fat,
                                                                          "onUpdate:modelValue": ($event) => editedItem.value.fat = $event,
                                                                          label: "Fat (g)"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: editedItem.value.fat,
                                                                            "onUpdate:modelValue": ($event) => editedItem.value.fat = $event,
                                                                            label: "Fat (g)"
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
                                                                          modelValue: editedItem.value.carbs,
                                                                          "onUpdate:modelValue": ($event) => editedItem.value.carbs = $event,
                                                                          label: "Carbs (g)"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: editedItem.value.carbs,
                                                                            "onUpdate:modelValue": ($event) => editedItem.value.carbs = $event,
                                                                            label: "Carbs (g)"
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
                                                                          modelValue: editedItem.value.protein,
                                                                          "onUpdate:modelValue": ($event) => editedItem.value.protein = $event,
                                                                          label: "Protein (g)"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_text_field, {
                                                                            modelValue: editedItem.value.protein,
                                                                            "onUpdate:modelValue": ($event) => editedItem.value.protein = $event,
                                                                            label: "Protein (g)"
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
                                                                          modelValue: editedItem.value.name,
                                                                          "onUpdate:modelValue": ($event) => editedItem.value.name = $event,
                                                                          label: "Dessert name"
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
                                                                          modelValue: editedItem.value.calories,
                                                                          "onUpdate:modelValue": ($event) => editedItem.value.calories = $event,
                                                                          label: "Calories"
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
                                                                          modelValue: editedItem.value.fat,
                                                                          "onUpdate:modelValue": ($event) => editedItem.value.fat = $event,
                                                                          label: "Fat (g)"
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
                                                                          modelValue: editedItem.value.carbs,
                                                                          "onUpdate:modelValue": ($event) => editedItem.value.carbs = $event,
                                                                          label: "Carbs (g)"
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
                                                                          modelValue: editedItem.value.protein,
                                                                          "onUpdate:modelValue": ($event) => editedItem.value.protein = $event,
                                                                          label: "Protein (g)"
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
                                                                        modelValue: editedItem.value.name,
                                                                        "onUpdate:modelValue": ($event) => editedItem.value.name = $event,
                                                                        label: "Dessert name"
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
                                                                        modelValue: editedItem.value.calories,
                                                                        "onUpdate:modelValue": ($event) => editedItem.value.calories = $event,
                                                                        label: "Calories"
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
                                                                        modelValue: editedItem.value.fat,
                                                                        "onUpdate:modelValue": ($event) => editedItem.value.fat = $event,
                                                                        label: "Fat (g)"
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
                                                                        modelValue: editedItem.value.carbs,
                                                                        "onUpdate:modelValue": ($event) => editedItem.value.carbs = $event,
                                                                        label: "Carbs (g)"
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
                                                                        modelValue: editedItem.value.protein,
                                                                        "onUpdate:modelValue": ($event) => editedItem.value.protein = $event,
                                                                        label: "Protein (g)"
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
                                                                      modelValue: editedItem.value.name,
                                                                      "onUpdate:modelValue": ($event) => editedItem.value.name = $event,
                                                                      label: "Dessert name"
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
                                                                      modelValue: editedItem.value.calories,
                                                                      "onUpdate:modelValue": ($event) => editedItem.value.calories = $event,
                                                                      label: "Calories"
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
                                                                      modelValue: editedItem.value.fat,
                                                                      "onUpdate:modelValue": ($event) => editedItem.value.fat = $event,
                                                                      label: "Fat (g)"
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
                                                                      modelValue: editedItem.value.carbs,
                                                                      "onUpdate:modelValue": ($event) => editedItem.value.carbs = $event,
                                                                      label: "Carbs (g)"
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
                                                                      modelValue: editedItem.value.protein,
                                                                      "onUpdate:modelValue": ($event) => editedItem.value.protein = $event,
                                                                      label: "Protein (g)"
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
                                                _push8(ssrRenderComponent(_component_v_card_actions, { class: "pa-6" }, {
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
                                                        color: "success",
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
                                                          color: "success",
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
                                                  createVNode(_component_v_card_title, { class: "pa-4 pb-0" }, {
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
                                                                    modelValue: editedItem.value.name,
                                                                    "onUpdate:modelValue": ($event) => editedItem.value.name = $event,
                                                                    label: "Dessert name"
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
                                                                    modelValue: editedItem.value.calories,
                                                                    "onUpdate:modelValue": ($event) => editedItem.value.calories = $event,
                                                                    label: "Calories"
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
                                                                    modelValue: editedItem.value.fat,
                                                                    "onUpdate:modelValue": ($event) => editedItem.value.fat = $event,
                                                                    label: "Fat (g)"
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
                                                                    modelValue: editedItem.value.carbs,
                                                                    "onUpdate:modelValue": ($event) => editedItem.value.carbs = $event,
                                                                    label: "Carbs (g)"
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
                                                                    modelValue: editedItem.value.protein,
                                                                    "onUpdate:modelValue": ($event) => editedItem.value.protein = $event,
                                                                    label: "Protein (g)"
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
                                                  createVNode(_component_v_card_actions, { class: "pa-6" }, {
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
                                                        color: "success",
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
                                                createVNode(_component_v_card_title, { class: "pa-4 pb-0" }, {
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
                                                                  modelValue: editedItem.value.name,
                                                                  "onUpdate:modelValue": ($event) => editedItem.value.name = $event,
                                                                  label: "Dessert name"
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
                                                                  modelValue: editedItem.value.calories,
                                                                  "onUpdate:modelValue": ($event) => editedItem.value.calories = $event,
                                                                  label: "Calories"
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
                                                                  modelValue: editedItem.value.fat,
                                                                  "onUpdate:modelValue": ($event) => editedItem.value.fat = $event,
                                                                  label: "Fat (g)"
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
                                                                  modelValue: editedItem.value.carbs,
                                                                  "onUpdate:modelValue": ($event) => editedItem.value.carbs = $event,
                                                                  label: "Carbs (g)"
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
                                                                  modelValue: editedItem.value.protein,
                                                                  "onUpdate:modelValue": ($event) => editedItem.value.protein = $event,
                                                                  label: "Protein (g)"
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
                                                createVNode(_component_v_card_actions, { class: "pa-6" }, {
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
                                                      color: "success",
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
                                                _push8(ssrRenderComponent(_component_v_card_actions, { class: "pa-6" }, {
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
                                                        color: "success",
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
                                                          color: "success",
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
                                                  createVNode(_component_v_card_actions, { class: "pa-6" }, {
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
                                                        color: "success",
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
                                                createVNode(_component_v_card_actions, { class: "pa-6" }, {
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
                                                      color: "success",
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
                                      createVNode(_component_v_toolbar_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode("My Crud Table")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_spacer),
                                      createVNode(_component_v_dialog, {
                                        modelValue: dialog.value,
                                        "onUpdate:modelValue": ($event) => dialog.value = $event,
                                        "max-width": "500px"
                                      }, {
                                        activator: withCtx(({ props }) => [
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
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_v_card, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card_title, { class: "pa-4 pb-0" }, {
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
                                                                modelValue: editedItem.value.name,
                                                                "onUpdate:modelValue": ($event) => editedItem.value.name = $event,
                                                                label: "Dessert name"
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
                                                                modelValue: editedItem.value.calories,
                                                                "onUpdate:modelValue": ($event) => editedItem.value.calories = $event,
                                                                label: "Calories"
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
                                                                modelValue: editedItem.value.fat,
                                                                "onUpdate:modelValue": ($event) => editedItem.value.fat = $event,
                                                                label: "Fat (g)"
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
                                                                modelValue: editedItem.value.carbs,
                                                                "onUpdate:modelValue": ($event) => editedItem.value.carbs = $event,
                                                                label: "Carbs (g)"
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
                                                                modelValue: editedItem.value.protein,
                                                                "onUpdate:modelValue": ($event) => editedItem.value.protein = $event,
                                                                label: "Protein (g)"
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
                                              createVNode(_component_v_card_actions, { class: "pa-6" }, {
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
                                                    color: "success",
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
                                              createVNode(_component_v_card_actions, { class: "pa-6" }, {
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
                                                    color: "success",
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
                                  flat: "",
                                  class: "border-bottom"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_toolbar_title, null, {
                                      default: withCtx(() => [
                                        createTextVNode("My Crud Table")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_spacer),
                                    createVNode(_component_v_dialog, {
                                      modelValue: dialog.value,
                                      "onUpdate:modelValue": ($event) => dialog.value = $event,
                                      "max-width": "500px"
                                    }, {
                                      activator: withCtx(({ props }) => [
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
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_v_card, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card_title, { class: "pa-4 pb-0" }, {
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
                                                              modelValue: editedItem.value.name,
                                                              "onUpdate:modelValue": ($event) => editedItem.value.name = $event,
                                                              label: "Dessert name"
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
                                                              modelValue: editedItem.value.calories,
                                                              "onUpdate:modelValue": ($event) => editedItem.value.calories = $event,
                                                              label: "Calories"
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
                                                              modelValue: editedItem.value.fat,
                                                              "onUpdate:modelValue": ($event) => editedItem.value.fat = $event,
                                                              label: "Fat (g)"
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
                                                              modelValue: editedItem.value.carbs,
                                                              "onUpdate:modelValue": ($event) => editedItem.value.carbs = $event,
                                                              label: "Carbs (g)"
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
                                                              modelValue: editedItem.value.protein,
                                                              "onUpdate:modelValue": ($event) => editedItem.value.protein = $event,
                                                              label: "Protein (g)"
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
                                            createVNode(_component_v_card_actions, { class: "pa-6" }, {
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
                                                  color: "success",
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
                                            createVNode(_component_v_card_actions, { class: "pa-6" }, {
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
                                                  color: "success",
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
                              _push5(ssrRenderComponent(_component_v_icon, {
                                color: "info",
                                size: "small",
                                class: "me-2",
                                onClick: ($event) => editItem(item)
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` mdi-pencil `);
                                  } else {
                                    return [
                                      createTextVNode(" mdi-pencil ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_icon, {
                                color: "error",
                                size: "small",
                                onClick: ($event) => deleteItem(item)
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` mdi-delete `);
                                  } else {
                                    return [
                                      createTextVNode(" mdi-delete ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_icon, {
                                  color: "info",
                                  size: "small",
                                  class: "me-2",
                                  onClick: ($event) => editItem(item)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" mdi-pencil ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(_component_v_icon, {
                                  color: "error",
                                  size: "small",
                                  onClick: ($event) => deleteItem(item)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" mdi-delete ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
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
                            class: "border rounded-md crud-tbl",
                            headers: headers.value,
                            items: desserts.value,
                            "sort-by": [{ key: "calories", order: "asc" }]
                          }, {
                            top: withCtx(() => [
                              createVNode(_component_v_toolbar, {
                                flat: "",
                                class: "border-bottom"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_toolbar_title, null, {
                                    default: withCtx(() => [
                                      createTextVNode("My Crud Table")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_spacer),
                                  createVNode(_component_v_dialog, {
                                    modelValue: dialog.value,
                                    "onUpdate:modelValue": ($event) => dialog.value = $event,
                                    "max-width": "500px"
                                  }, {
                                    activator: withCtx(({ props }) => [
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
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card_title, { class: "pa-4 pb-0" }, {
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
                                                            modelValue: editedItem.value.name,
                                                            "onUpdate:modelValue": ($event) => editedItem.value.name = $event,
                                                            label: "Dessert name"
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
                                                            modelValue: editedItem.value.calories,
                                                            "onUpdate:modelValue": ($event) => editedItem.value.calories = $event,
                                                            label: "Calories"
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
                                                            modelValue: editedItem.value.fat,
                                                            "onUpdate:modelValue": ($event) => editedItem.value.fat = $event,
                                                            label: "Fat (g)"
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
                                                            modelValue: editedItem.value.carbs,
                                                            "onUpdate:modelValue": ($event) => editedItem.value.carbs = $event,
                                                            label: "Carbs (g)"
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
                                                            modelValue: editedItem.value.protein,
                                                            "onUpdate:modelValue": ($event) => editedItem.value.protein = $event,
                                                            label: "Protein (g)"
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
                                          createVNode(_component_v_card_actions, { class: "pa-6" }, {
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
                                                color: "success",
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
                                          createVNode(_component_v_card_actions, { class: "pa-6" }, {
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
                                                color: "success",
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
                              createVNode(_component_v_icon, {
                                color: "info",
                                size: "small",
                                class: "me-2",
                                onClick: ($event) => editItem(item)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" mdi-pencil ")
                                ]),
                                _: 2
                              }, 1032, ["onClick"]),
                              createVNode(_component_v_icon, {
                                color: "error",
                                size: "small",
                                onClick: ($event) => deleteItem(item)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" mdi-delete ")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
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
                          }, 8, ["headers", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2, { title: "Crud Table" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_data_table, {
                          class: "border rounded-md crud-tbl",
                          headers: headers.value,
                          items: desserts.value,
                          "sort-by": [{ key: "calories", order: "asc" }]
                        }, {
                          top: withCtx(() => [
                            createVNode(_component_v_toolbar, {
                              flat: "",
                              class: "border-bottom"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_toolbar_title, null, {
                                  default: withCtx(() => [
                                    createTextVNode("My Crud Table")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_spacer),
                                createVNode(_component_v_dialog, {
                                  modelValue: dialog.value,
                                  "onUpdate:modelValue": ($event) => dialog.value = $event,
                                  "max-width": "500px"
                                }, {
                                  activator: withCtx(({ props }) => [
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
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_title, { class: "pa-4 pb-0" }, {
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
                                                          modelValue: editedItem.value.name,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.name = $event,
                                                          label: "Dessert name"
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
                                                          modelValue: editedItem.value.calories,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.calories = $event,
                                                          label: "Calories"
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
                                                          modelValue: editedItem.value.fat,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.fat = $event,
                                                          label: "Fat (g)"
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
                                                          modelValue: editedItem.value.carbs,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.carbs = $event,
                                                          label: "Carbs (g)"
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
                                                          modelValue: editedItem.value.protein,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.protein = $event,
                                                          label: "Protein (g)"
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
                                        createVNode(_component_v_card_actions, { class: "pa-6" }, {
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
                                              color: "success",
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
                                        createVNode(_component_v_card_actions, { class: "pa-6" }, {
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
                                              color: "success",
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
                            createVNode(_component_v_icon, {
                              color: "info",
                              size: "small",
                              class: "me-2",
                              onClick: ($event) => editItem(item)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" mdi-pencil ")
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode(_component_v_icon, {
                              color: "error",
                              size: "small",
                              onClick: ($event) => deleteItem(item)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" mdi-delete ")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
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
                        }, 8, ["headers", "items"])
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
                  createVNode(_sfc_main$2, { title: "Crud Table" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_data_table, {
                        class: "border rounded-md crud-tbl",
                        headers: headers.value,
                        items: desserts.value,
                        "sort-by": [{ key: "calories", order: "asc" }]
                      }, {
                        top: withCtx(() => [
                          createVNode(_component_v_toolbar, {
                            flat: "",
                            class: "border-bottom"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_toolbar_title, null, {
                                default: withCtx(() => [
                                  createTextVNode("My Crud Table")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_spacer),
                              createVNode(_component_v_dialog, {
                                modelValue: dialog.value,
                                "onUpdate:modelValue": ($event) => dialog.value = $event,
                                "max-width": "500px"
                              }, {
                                activator: withCtx(({ props }) => [
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
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_v_card, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_title, { class: "pa-4 pb-0" }, {
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
                                                        modelValue: editedItem.value.name,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.name = $event,
                                                        label: "Dessert name"
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
                                                        modelValue: editedItem.value.calories,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.calories = $event,
                                                        label: "Calories"
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
                                                        modelValue: editedItem.value.fat,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.fat = $event,
                                                        label: "Fat (g)"
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
                                                        modelValue: editedItem.value.carbs,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.carbs = $event,
                                                        label: "Carbs (g)"
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
                                                        modelValue: editedItem.value.protein,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.protein = $event,
                                                        label: "Protein (g)"
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
                                      createVNode(_component_v_card_actions, { class: "pa-6" }, {
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
                                            color: "success",
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
                                      createVNode(_component_v_card_actions, { class: "pa-6" }, {
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
                                            color: "success",
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
                          createVNode(_component_v_icon, {
                            color: "info",
                            size: "small",
                            class: "me-2",
                            onClick: ($event) => editItem(item)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" mdi-pencil ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode(_component_v_icon, {
                            color: "error",
                            size: "small",
                            onClick: ($event) => deleteItem(item)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" mdi-delete ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
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
                      }, 8, ["headers", "items"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/datatables/CrudTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=CrudTable-5lKT3hcI.js.map
