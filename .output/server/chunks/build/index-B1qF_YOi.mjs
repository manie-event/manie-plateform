import { defineComponent, ref, resolveComponent, withCtx, createVNode, computed, toDisplayString, createTextVNode, mergeProps, unref, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { d as defineStore, R as user2, h as user1, l as user3, m as user4, j as img5$2, o as img6$1, a as axiosServices, $ as mock } from './server.mjs';
import { _ as _imports_0 } from './virtual_public-Do_DI_-i.mjs';
import { EyeIcon } from 'vue-tabler-icons';
import { _ as _sfc_main$2 } from './BaseBreadcrumb-DAIjkUfv.mjs';
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

const useResultsStore = defineStore({
  id: "Results",
  state: () => ({
    results: []
  }),
  getters: {},
  actions: {
    // Fetch followers from action
    async fetchResults() {
      try {
        const response = await axiosServices.get("/api/contacts");
        this.results = response.data.results;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
  }
});
const results = [
  {
    avatar: user2,
    userinfo: "Mark J. Freeman",
    class: "10",
    sec: "C",
    Internalm: "10",
    externalm: "20",
    total: "30",
    remarks: "Fail",
    color: "error"
  },
  {
    avatar: user1,
    userinfo: "Mark Maria",
    class: "6",
    sec: "D",
    Internalm: "25",
    externalm: "45",
    total: "70",
    remarks: "Pass",
    color: "success"
  },
  {
    avatar: user3,
    userinfo: "Midori Gurin",
    class: "10",
    sec: "E",
    Internalm: "10",
    externalm: "20",
    total: "30",
    remarks: "Fail",
    color: "error"
  },
  {
    avatar: user4,
    userinfo: "Nirav Joshi",
    class: "7",
    sec: "F",
    Internalm: "20",
    externalm: "70",
    total: "90",
    remarks: "Pass",
    color: "success"
  },
  {
    avatar: img5$2,
    userinfo: "Ryuto Ippongo",
    class: "12",
    sec: "A",
    Internalm: "28",
    externalm: "58",
    total: "80",
    remarks: "Pass",
    color: "success"
  },
  {
    avatar: img6$1,
    userinfo: "Sakyu Basu",
    class: "7",
    sec: "F",
    Internalm: "30",
    externalm: "70",
    total: "100",
    remarks: "Pass",
    color: "success"
  }
];
mock.onGet("/api/contacts").reply(() => {
  return [200, results];
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ResultTable",
  __ssrInlineRender: true,
  setup(__props) {
    const page1 = ref(1);
    const store = useResultsStore();
    computed(() => {
      return store.results;
    });
    const valid = ref(true);
    const dialog = ref(false);
    const search = ref("");
    const rolesbg = ref(["error", "success"]);
    const desserts = ref(results);
    const editedIndex = ref(-1);
    const editedItem = ref({
      avatar: _imports_0,
      userinfo: "",
      class: "",
      sec: "",
      Internalm: "",
      externalm: "",
      total: "",
      remarks: "",
      color: ""
    });
    const defaultItem = ref({
      avatar: _imports_0,
      userinfo: "",
      class: "",
      sec: "",
      Internalm: "",
      externalm: "",
      total: "",
      remarks: "",
      color: ""
    });
    const filteredList = computed(() => {
      return desserts.value.filter((user) => {
        return user.userinfo.toLowerCase().includes(search.value.toLowerCase());
      });
    });
    function editItem(item) {
      editedIndex.value = desserts.value.indexOf(item);
      editedItem.value = Object.assign({}, item);
      dialog.value = true;
    }
    function deleteItem(item) {
      const index = desserts.value.indexOf(item);
      confirm("Are you sure you want to delete this item?") && desserts.value.splice(index, 1);
    }
    function close() {
      dialog.value = false;
      setTimeout(() => {
        editedItem.value = Object.assign({}, defaultItem.value);
        editedIndex.value = -1;
      }, 300);
    }
    function save() {
      if (editedIndex.value > -1) {
        Object.assign(desserts.value[editedIndex.value], editedItem.value);
      } else {
        desserts.value.push(editedItem.value);
      }
      close();
    }
    const formTitle = computed(() => {
      return editedIndex.value === -1 ? "New Result" : "Edit Result";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_PencilIcon = resolveComponent("PencilIcon");
      const _component_TrashIcon = resolveComponent("TrashIcon");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_pagination = resolveComponent("v-pagination");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              lg: "4",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    density: "compact",
                    modelValue: search.value,
                    "onUpdate:modelValue": ($event) => search.value = $event,
                    label: "Search Results",
                    "hide-details": "",
                    variant: "outlined"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_text_field, {
                      density: "compact",
                      modelValue: search.value,
                      "onUpdate:modelValue": ($event) => search.value = $event,
                      label: "Search Results",
                      "hide-details": "",
                      variant: "outlined"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              lg: "8",
              md: "6",
              class: "text-right"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_dialog, {
                    modelValue: dialog.value,
                    "onUpdate:modelValue": ($event) => dialog.value = $event,
                    "max-width": "500"
                  }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, mergeProps({ color: "primary" }, props, {
                          rounded: "pill",
                          class: "ml-auto"
                        }), {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_icon, { class: "mr-2" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-account-multiple-plus`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-account-multiple-plus")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`Add Results `);
                            } else {
                              return [
                                createVNode(_component_v_icon, { class: "mr-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-account-multiple-plus")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode("Add Results ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, mergeProps({ color: "primary" }, props, {
                            rounded: "pill",
                            class: "ml-auto"
                          }), {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, { class: "mr-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-account-multiple-plus")
                                ]),
                                _: 1
                              }),
                              createTextVNode("Add Results ")
                            ]),
                            _: 2
                          }, 1040)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_title, { class: "px-4 pt-6 justify-space-between d-flex align-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span class="text-h5"${_scopeId5}>${ssrInterpolate(formTitle.value)}</span>`);
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      onClick: ($event) => dialog.value = false,
                                      ripple: false,
                                      density: "compact",
                                      icon: "mdi-close"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("span", { class: "text-h5" }, toDisplayString(formTitle.value), 1),
                                      createVNode(_component_v_btn, {
                                        onClick: ($event) => dialog.value = false,
                                        ripple: false,
                                        density: "compact",
                                        icon: "mdi-close"
                                      }, null, 8, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_card_text, { class: "px-4" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_form, {
                                      class: "dialog_form",
                                      ref: "form",
                                      modelValue: valid.value,
                                      "onUpdate:modelValue": ($event) => valid.value = $event,
                                      "lazy-validation": ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_row, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "12",
                                                  sm: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        modelValue: editedItem.value.userinfo,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.userinfo = $event,
                                                        label: "Profile"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          modelValue: editedItem.value.userinfo,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.userinfo = $event,
                                                          label: "Profile"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "12",
                                                  sm: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        modelValue: editedItem.value.class,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.class = $event,
                                                        label: "Class"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          modelValue: editedItem.value.class,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.class = $event,
                                                          label: "Class"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "12",
                                                  sm: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        modelValue: editedItem.value.sec,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.sec = $event,
                                                        label: "Grade"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          modelValue: editedItem.value.sec,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.sec = $event,
                                                          label: "Grade"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "12",
                                                  sm: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        modelValue: editedItem.value.Internalm,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.Internalm = $event,
                                                        label: "Internal Marks"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          modelValue: editedItem.value.Internalm,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.Internalm = $event,
                                                          label: "Internal Marks"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "12",
                                                  sm: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        modelValue: editedItem.value.externalm,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.externalm = $event,
                                                        label: "External Marks"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          modelValue: editedItem.value.externalm,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.externalm = $event,
                                                          label: "External Marks"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "12",
                                                  sm: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        modelValue: editedItem.value.total,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.total = $event,
                                                        label: "Total",
                                                        type: "text"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          modelValue: editedItem.value.total,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.total = $event,
                                                          label: "Total",
                                                          type: "text"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "12",
                                                  sm: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        modelValue: editedItem.value.remarks,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.remarks = $event,
                                                        label: "Remarks",
                                                        type: "text"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          modelValue: editedItem.value.remarks,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.remarks = $event,
                                                          label: "Remarks",
                                                          type: "text"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "12",
                                                  sm: "12"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_select, {
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        items: rolesbg.value,
                                                        modelValue: editedItem.value.color,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.color = $event,
                                                        label: "Role Background"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_select, {
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          items: rolesbg.value,
                                                          modelValue: editedItem.value.color,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.color = $event,
                                                          label: "Role Background"
                                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    sm: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        modelValue: editedItem.value.userinfo,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.userinfo = $event,
                                                        label: "Profile"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    sm: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        modelValue: editedItem.value.class,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.class = $event,
                                                        label: "Class"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    sm: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        modelValue: editedItem.value.sec,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.sec = $event,
                                                        label: "Grade"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    sm: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        modelValue: editedItem.value.Internalm,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.Internalm = $event,
                                                        label: "Internal Marks"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    sm: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        modelValue: editedItem.value.externalm,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.externalm = $event,
                                                        label: "External Marks"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    sm: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        modelValue: editedItem.value.total,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.total = $event,
                                                        label: "Total",
                                                        type: "text"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    sm: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        modelValue: editedItem.value.remarks,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.remarks = $event,
                                                        label: "Remarks",
                                                        type: "text"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    sm: "12"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_select, {
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        items: rolesbg.value,
                                                        modelValue: editedItem.value.color,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.color = $event,
                                                        label: "Role Background"
                                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
                                            createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  sm: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      variant: "outlined",
                                                      "hide-details": "",
                                                      modelValue: editedItem.value.userinfo,
                                                      "onUpdate:modelValue": ($event) => editedItem.value.userinfo = $event,
                                                      label: "Profile"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  sm: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      variant: "outlined",
                                                      "hide-details": "",
                                                      modelValue: editedItem.value.class,
                                                      "onUpdate:modelValue": ($event) => editedItem.value.class = $event,
                                                      label: "Class"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  sm: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      variant: "outlined",
                                                      "hide-details": "",
                                                      modelValue: editedItem.value.sec,
                                                      "onUpdate:modelValue": ($event) => editedItem.value.sec = $event,
                                                      label: "Grade"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  sm: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      variant: "outlined",
                                                      "hide-details": "",
                                                      modelValue: editedItem.value.Internalm,
                                                      "onUpdate:modelValue": ($event) => editedItem.value.Internalm = $event,
                                                      label: "Internal Marks"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  sm: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      variant: "outlined",
                                                      "hide-details": "",
                                                      modelValue: editedItem.value.externalm,
                                                      "onUpdate:modelValue": ($event) => editedItem.value.externalm = $event,
                                                      label: "External Marks"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  sm: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      variant: "outlined",
                                                      "hide-details": "",
                                                      modelValue: editedItem.value.total,
                                                      "onUpdate:modelValue": ($event) => editedItem.value.total = $event,
                                                      label: "Total",
                                                      type: "text"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  sm: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      variant: "outlined",
                                                      "hide-details": "",
                                                      modelValue: editedItem.value.remarks,
                                                      "onUpdate:modelValue": ($event) => editedItem.value.remarks = $event,
                                                      label: "Remarks",
                                                      type: "text"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  sm: "12"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_select, {
                                                      variant: "outlined",
                                                      "hide-details": "",
                                                      items: rolesbg.value,
                                                      modelValue: editedItem.value.color,
                                                      "onUpdate:modelValue": ($event) => editedItem.value.color = $event,
                                                      label: "Role Background"
                                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
                                      createVNode(_component_v_form, {
                                        class: "dialog_form",
                                        ref: "form",
                                        modelValue: valid.value,
                                        "onUpdate:modelValue": ($event) => valid.value = $event,
                                        "lazy-validation": ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                sm: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    variant: "outlined",
                                                    "hide-details": "",
                                                    modelValue: editedItem.value.userinfo,
                                                    "onUpdate:modelValue": ($event) => editedItem.value.userinfo = $event,
                                                    label: "Profile"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                sm: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    variant: "outlined",
                                                    "hide-details": "",
                                                    modelValue: editedItem.value.class,
                                                    "onUpdate:modelValue": ($event) => editedItem.value.class = $event,
                                                    label: "Class"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                sm: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    variant: "outlined",
                                                    "hide-details": "",
                                                    modelValue: editedItem.value.sec,
                                                    "onUpdate:modelValue": ($event) => editedItem.value.sec = $event,
                                                    label: "Grade"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                sm: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    variant: "outlined",
                                                    "hide-details": "",
                                                    modelValue: editedItem.value.Internalm,
                                                    "onUpdate:modelValue": ($event) => editedItem.value.Internalm = $event,
                                                    label: "Internal Marks"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                sm: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    variant: "outlined",
                                                    "hide-details": "",
                                                    modelValue: editedItem.value.externalm,
                                                    "onUpdate:modelValue": ($event) => editedItem.value.externalm = $event,
                                                    label: "External Marks"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                sm: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    variant: "outlined",
                                                    "hide-details": "",
                                                    modelValue: editedItem.value.total,
                                                    "onUpdate:modelValue": ($event) => editedItem.value.total = $event,
                                                    label: "Total",
                                                    type: "text"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                sm: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    variant: "outlined",
                                                    "hide-details": "",
                                                    modelValue: editedItem.value.remarks,
                                                    "onUpdate:modelValue": ($event) => editedItem.value.remarks = $event,
                                                    label: "Remarks",
                                                    type: "text"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                sm: "12"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_select, {
                                                    variant: "outlined",
                                                    "hide-details": "",
                                                    items: rolesbg.value,
                                                    modelValue: editedItem.value.color,
                                                    "onUpdate:modelValue": ($event) => editedItem.value.color = $event,
                                                    label: "Role Background"
                                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
                              _push5(`<div class="pa-4 d-flex justify-end gap-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_spacer, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "error",
                                onClick: close,
                                class: "px-3 rounded-pill"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Cancel`);
                                  } else {
                                    return [
                                      createTextVNode("Cancel")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "primary",
                                disabled: editedItem.value.userinfo == "" || editedItem.value.remarks == "",
                                class: "px-3 rounded-pill",
                                onClick: save
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Save`);
                                  } else {
                                    return [
                                      createTextVNode("Save")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode(_component_v_card_title, { class: "px-4 pt-6 justify-space-between d-flex align-center" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-h5" }, toDisplayString(formTitle.value), 1),
                                    createVNode(_component_v_btn, {
                                      onClick: ($event) => dialog.value = false,
                                      ripple: false,
                                      density: "compact",
                                      icon: "mdi-close"
                                    }, null, 8, ["onClick"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_text, { class: "px-4" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_form, {
                                      class: "dialog_form",
                                      ref: "form",
                                      modelValue: valid.value,
                                      "onUpdate:modelValue": ($event) => valid.value = $event,
                                      "lazy-validation": ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  modelValue: editedItem.value.userinfo,
                                                  "onUpdate:modelValue": ($event) => editedItem.value.userinfo = $event,
                                                  label: "Profile"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  modelValue: editedItem.value.class,
                                                  "onUpdate:modelValue": ($event) => editedItem.value.class = $event,
                                                  label: "Class"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  modelValue: editedItem.value.sec,
                                                  "onUpdate:modelValue": ($event) => editedItem.value.sec = $event,
                                                  label: "Grade"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  modelValue: editedItem.value.Internalm,
                                                  "onUpdate:modelValue": ($event) => editedItem.value.Internalm = $event,
                                                  label: "Internal Marks"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  modelValue: editedItem.value.externalm,
                                                  "onUpdate:modelValue": ($event) => editedItem.value.externalm = $event,
                                                  label: "External Marks"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  modelValue: editedItem.value.total,
                                                  "onUpdate:modelValue": ($event) => editedItem.value.total = $event,
                                                  label: "Total",
                                                  type: "text"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  modelValue: editedItem.value.remarks,
                                                  "onUpdate:modelValue": ($event) => editedItem.value.remarks = $event,
                                                  label: "Remarks",
                                                  type: "text"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              sm: "12"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_select, {
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  items: rolesbg.value,
                                                  modelValue: editedItem.value.color,
                                                  "onUpdate:modelValue": ($event) => editedItem.value.color = $event,
                                                  label: "Role Background"
                                                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
                                }),
                                createVNode("div", { class: "pa-4 d-flex justify-end gap-2" }, [
                                  createVNode(_component_v_spacer),
                                  createVNode(_component_v_btn, {
                                    color: "error",
                                    onClick: close,
                                    class: "px-3 rounded-pill"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cancel")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_btn, {
                                    color: "primary",
                                    disabled: editedItem.value.userinfo == "" || editedItem.value.remarks == "",
                                    class: "px-3 rounded-pill",
                                    onClick: save
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Save")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_title, { class: "px-4 pt-6 justify-space-between d-flex align-center" }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-h5" }, toDisplayString(formTitle.value), 1),
                                  createVNode(_component_v_btn, {
                                    onClick: ($event) => dialog.value = false,
                                    ripple: false,
                                    density: "compact",
                                    icon: "mdi-close"
                                  }, null, 8, ["onClick"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_text, { class: "px-4" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_form, {
                                    class: "dialog_form",
                                    ref: "form",
                                    modelValue: valid.value,
                                    "onUpdate:modelValue": ($event) => valid.value = $event,
                                    "lazy-validation": ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                variant: "outlined",
                                                "hide-details": "",
                                                modelValue: editedItem.value.userinfo,
                                                "onUpdate:modelValue": ($event) => editedItem.value.userinfo = $event,
                                                label: "Profile"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                variant: "outlined",
                                                "hide-details": "",
                                                modelValue: editedItem.value.class,
                                                "onUpdate:modelValue": ($event) => editedItem.value.class = $event,
                                                label: "Class"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                variant: "outlined",
                                                "hide-details": "",
                                                modelValue: editedItem.value.sec,
                                                "onUpdate:modelValue": ($event) => editedItem.value.sec = $event,
                                                label: "Grade"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                variant: "outlined",
                                                "hide-details": "",
                                                modelValue: editedItem.value.Internalm,
                                                "onUpdate:modelValue": ($event) => editedItem.value.Internalm = $event,
                                                label: "Internal Marks"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                variant: "outlined",
                                                "hide-details": "",
                                                modelValue: editedItem.value.externalm,
                                                "onUpdate:modelValue": ($event) => editedItem.value.externalm = $event,
                                                label: "External Marks"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                variant: "outlined",
                                                "hide-details": "",
                                                modelValue: editedItem.value.total,
                                                "onUpdate:modelValue": ($event) => editedItem.value.total = $event,
                                                label: "Total",
                                                type: "text"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                variant: "outlined",
                                                "hide-details": "",
                                                modelValue: editedItem.value.remarks,
                                                "onUpdate:modelValue": ($event) => editedItem.value.remarks = $event,
                                                label: "Remarks",
                                                type: "text"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            sm: "12"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_select, {
                                                variant: "outlined",
                                                "hide-details": "",
                                                items: rolesbg.value,
                                                modelValue: editedItem.value.color,
                                                "onUpdate:modelValue": ($event) => editedItem.value.color = $event,
                                                label: "Role Background"
                                              }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
                              }),
                              createVNode("div", { class: "pa-4 d-flex justify-end gap-2" }, [
                                createVNode(_component_v_spacer),
                                createVNode(_component_v_btn, {
                                  color: "error",
                                  onClick: close,
                                  class: "px-3 rounded-pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cancel")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  disabled: editedItem.value.userinfo == "" || editedItem.value.remarks == "",
                                  class: "px-3 rounded-pill",
                                  onClick: save
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Save")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
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
                    createVNode(_component_v_dialog, {
                      modelValue: dialog.value,
                      "onUpdate:modelValue": ($event) => dialog.value = $event,
                      "max-width": "500"
                    }, {
                      activator: withCtx(({ props }) => [
                        createVNode(_component_v_btn, mergeProps({ color: "primary" }, props, {
                          rounded: "pill",
                          class: "ml-auto"
                        }), {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { class: "mr-2" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-account-multiple-plus")
                              ]),
                              _: 1
                            }),
                            createTextVNode("Add Results ")
                          ]),
                          _: 2
                        }, 1040)
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_v_card, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_title, { class: "px-4 pt-6 justify-space-between d-flex align-center" }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-h5" }, toDisplayString(formTitle.value), 1),
                                createVNode(_component_v_btn, {
                                  onClick: ($event) => dialog.value = false,
                                  ripple: false,
                                  density: "compact",
                                  icon: "mdi-close"
                                }, null, 8, ["onClick"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card_text, { class: "px-4" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_form, {
                                  class: "dialog_form",
                                  ref: "form",
                                  modelValue: valid.value,
                                  "onUpdate:modelValue": ($event) => valid.value = $event,
                                  "lazy-validation": ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              variant: "outlined",
                                              "hide-details": "",
                                              modelValue: editedItem.value.userinfo,
                                              "onUpdate:modelValue": ($event) => editedItem.value.userinfo = $event,
                                              label: "Profile"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              variant: "outlined",
                                              "hide-details": "",
                                              modelValue: editedItem.value.class,
                                              "onUpdate:modelValue": ($event) => editedItem.value.class = $event,
                                              label: "Class"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              variant: "outlined",
                                              "hide-details": "",
                                              modelValue: editedItem.value.sec,
                                              "onUpdate:modelValue": ($event) => editedItem.value.sec = $event,
                                              label: "Grade"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              variant: "outlined",
                                              "hide-details": "",
                                              modelValue: editedItem.value.Internalm,
                                              "onUpdate:modelValue": ($event) => editedItem.value.Internalm = $event,
                                              label: "Internal Marks"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              variant: "outlined",
                                              "hide-details": "",
                                              modelValue: editedItem.value.externalm,
                                              "onUpdate:modelValue": ($event) => editedItem.value.externalm = $event,
                                              label: "External Marks"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              variant: "outlined",
                                              "hide-details": "",
                                              modelValue: editedItem.value.total,
                                              "onUpdate:modelValue": ($event) => editedItem.value.total = $event,
                                              label: "Total",
                                              type: "text"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              variant: "outlined",
                                              "hide-details": "",
                                              modelValue: editedItem.value.remarks,
                                              "onUpdate:modelValue": ($event) => editedItem.value.remarks = $event,
                                              label: "Remarks",
                                              type: "text"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          sm: "12"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_select, {
                                              variant: "outlined",
                                              "hide-details": "",
                                              items: rolesbg.value,
                                              modelValue: editedItem.value.color,
                                              "onUpdate:modelValue": ($event) => editedItem.value.color = $event,
                                              label: "Role Background"
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
                            }),
                            createVNode("div", { class: "pa-4 d-flex justify-end gap-2" }, [
                              createVNode(_component_v_spacer),
                              createVNode(_component_v_btn, {
                                color: "error",
                                onClick: close,
                                class: "px-3 rounded-pill"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Cancel")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                color: "primary",
                                disabled: editedItem.value.userinfo == "" || editedItem.value.remarks == "",
                                class: "px-3 rounded-pill",
                                onClick: save
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Save")
                                ]),
                                _: 1
                              }, 8, ["disabled"])
                            ])
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, {
                cols: "12",
                lg: "4",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_text_field, {
                    density: "compact",
                    modelValue: search.value,
                    "onUpdate:modelValue": ($event) => search.value = $event,
                    label: "Search Results",
                    "hide-details": "",
                    variant: "outlined"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                lg: "8",
                md: "6",
                class: "text-right"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_dialog, {
                    modelValue: dialog.value,
                    "onUpdate:modelValue": ($event) => dialog.value = $event,
                    "max-width": "500"
                  }, {
                    activator: withCtx(({ props }) => [
                      createVNode(_component_v_btn, mergeProps({ color: "primary" }, props, {
                        rounded: "pill",
                        class: "ml-auto"
                      }), {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, { class: "mr-2" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-account-multiple-plus")
                            ]),
                            _: 1
                          }),
                          createTextVNode("Add Results ")
                        ]),
                        _: 2
                      }, 1040)
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_v_card, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, { class: "px-4 pt-6 justify-space-between d-flex align-center" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-h5" }, toDisplayString(formTitle.value), 1),
                              createVNode(_component_v_btn, {
                                onClick: ($event) => dialog.value = false,
                                ripple: false,
                                density: "compact",
                                icon: "mdi-close"
                              }, null, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_text, { class: "px-4" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_form, {
                                class: "dialog_form",
                                ref: "form",
                                modelValue: valid.value,
                                "onUpdate:modelValue": ($event) => valid.value = $event,
                                "lazy-validation": ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            variant: "outlined",
                                            "hide-details": "",
                                            modelValue: editedItem.value.userinfo,
                                            "onUpdate:modelValue": ($event) => editedItem.value.userinfo = $event,
                                            label: "Profile"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            variant: "outlined",
                                            "hide-details": "",
                                            modelValue: editedItem.value.class,
                                            "onUpdate:modelValue": ($event) => editedItem.value.class = $event,
                                            label: "Class"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            variant: "outlined",
                                            "hide-details": "",
                                            modelValue: editedItem.value.sec,
                                            "onUpdate:modelValue": ($event) => editedItem.value.sec = $event,
                                            label: "Grade"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            variant: "outlined",
                                            "hide-details": "",
                                            modelValue: editedItem.value.Internalm,
                                            "onUpdate:modelValue": ($event) => editedItem.value.Internalm = $event,
                                            label: "Internal Marks"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            variant: "outlined",
                                            "hide-details": "",
                                            modelValue: editedItem.value.externalm,
                                            "onUpdate:modelValue": ($event) => editedItem.value.externalm = $event,
                                            label: "External Marks"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            variant: "outlined",
                                            "hide-details": "",
                                            modelValue: editedItem.value.total,
                                            "onUpdate:modelValue": ($event) => editedItem.value.total = $event,
                                            label: "Total",
                                            type: "text"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            variant: "outlined",
                                            "hide-details": "",
                                            modelValue: editedItem.value.remarks,
                                            "onUpdate:modelValue": ($event) => editedItem.value.remarks = $event,
                                            label: "Remarks",
                                            type: "text"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            variant: "outlined",
                                            "hide-details": "",
                                            items: rolesbg.value,
                                            modelValue: editedItem.value.color,
                                            "onUpdate:modelValue": ($event) => editedItem.value.color = $event,
                                            label: "Role Background"
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
                          }),
                          createVNode("div", { class: "pa-4 d-flex justify-end gap-2" }, [
                            createVNode(_component_v_spacer),
                            createVNode(_component_v_btn, {
                              color: "error",
                              onClick: close,
                              class: "px-3 rounded-pill"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Cancel")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              color: "primary",
                              disabled: editedItem.value.userinfo == "" || editedItem.value.remarks == "",
                              class: "px-3 rounded-pill",
                              onClick: save
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Save")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ])
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
        _: 1
      }, _parent));
      _push(`<div class="border-table">`);
      _push(ssrRenderComponent(_component_v_table, { class: "mt-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead${_scopeId}><tr${_scopeId}><th class="text-subtitle-1 font-weight-semibold text-no-wrap"${_scopeId}>Examination Name</th><th class="text-subtitle-1 font-weight-semibold text-no-wrap"${_scopeId}>Grade</th><th class="text-subtitle-1 font-weight-semibold text-no-wrap"${_scopeId}>Internal Marks</th><th class="text-subtitle-1 font-weight-semibold text-no-wrap"${_scopeId}>External Marks</th><th class="text-subtitle-1 font-weight-semibold text-no-wrap"${_scopeId}>Total</th><th class="text-subtitle-1 font-weight-semibold text-no-wrap"${_scopeId}>Remarks</th><th class="text-subtitle-1 font-weight-semibold text-no-wrap"${_scopeId}>Actions</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(filteredList.value, (item) => {
              _push2(`<tr${_scopeId}><td${_scopeId}><div class="d-flex align-center"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_img, {
                src: item.avatar,
                width: "45px",
                class: "rounded-circle img-fluid"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="ml-5"${_scopeId}><h4 class="text-subtitle-1 font-weight-semibold text-no-wrap"${_scopeId}>${ssrInterpolate(item.userinfo)}</h4><div class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId}> Class: ${ssrInterpolate(item.class)}</div></div></div></td><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId}>${ssrInterpolate(item.sec)}</td><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId}>${ssrInterpolate(item.Internalm)}</td><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId}>${ssrInterpolate(item.externalm)}</td><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId}>${ssrInterpolate(item.total)}</td><td class="${ssrRenderClass("text-subtitle-1 textSecondary text-no-wrap mt-1 text-" + item.color)}"${_scopeId}>${ssrInterpolate(item.remarks)}</td><td${_scopeId}><div class="d-flex align-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_tooltip, { text: "Edit" }, {
                activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_btn, mergeProps({
                      icon: "",
                      flat: "",
                      onClick: ($event) => editItem(item),
                      ref_for: true
                    }, props), {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_PencilIcon, {
                            "stroke-width": "1.5",
                            size: "20",
                            class: "text-primary"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_PencilIcon, {
                              "stroke-width": "1.5",
                              size: "20",
                              class: "text-primary"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_btn, mergeProps({
                        icon: "",
                        flat: "",
                        onClick: ($event) => editItem(item),
                        ref_for: true
                      }, props), {
                        default: withCtx(() => [
                          createVNode(_component_PencilIcon, {
                            "stroke-width": "1.5",
                            size: "20",
                            class: "text-primary"
                          })
                        ]),
                        _: 2
                      }, 1040, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_tooltip, { text: "Delete" }, {
                activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_btn, mergeProps({
                      icon: "",
                      flat: "",
                      onClick: ($event) => deleteItem(item),
                      ref_for: true
                    }, props), {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TrashIcon, {
                            "stroke-width": "1.5",
                            size: "20",
                            class: "text-error"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TrashIcon, {
                              "stroke-width": "1.5",
                              size: "20",
                              class: "text-error"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_btn, mergeProps({
                        icon: "",
                        flat: "",
                        onClick: ($event) => deleteItem(item),
                        ref_for: true
                      }, props), {
                        default: withCtx(() => [
                          createVNode(_component_TrashIcon, {
                            "stroke-width": "1.5",
                            size: "20",
                            class: "text-error"
                          })
                        ]),
                        _: 2
                      }, 1040, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_tooltip, { text: "View Details" }, {
                activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_btn, mergeProps({
                      icon: "",
                      flat: "",
                      ref_for: true
                    }, props, { to: "/school-pages/exam/result-details" }), {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(EyeIcon), {
                            "stroke-width": "1.5",
                            size: "20",
                            class: "text-info"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(EyeIcon), {
                              "stroke-width": "1.5",
                              size: "20",
                              class: "text-info"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_btn, mergeProps({
                        icon: "",
                        flat: "",
                        ref_for: true
                      }, props, { to: "/school-pages/exam/result-details" }), {
                        default: withCtx(() => [
                          createVNode(unref(EyeIcon), {
                            "stroke-width": "1.5",
                            size: "20",
                            class: "text-info"
                          })
                        ]),
                        _: 2
                      }, 1040)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></td></tr>`);
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { class: "text-subtitle-1 font-weight-semibold text-no-wrap" }, "Examination Name"),
                  createVNode("th", { class: "text-subtitle-1 font-weight-semibold text-no-wrap" }, "Grade"),
                  createVNode("th", { class: "text-subtitle-1 font-weight-semibold text-no-wrap" }, "Internal Marks"),
                  createVNode("th", { class: "text-subtitle-1 font-weight-semibold text-no-wrap" }, "External Marks"),
                  createVNode("th", { class: "text-subtitle-1 font-weight-semibold text-no-wrap" }, "Total"),
                  createVNode("th", { class: "text-subtitle-1 font-weight-semibold text-no-wrap" }, "Remarks"),
                  createVNode("th", { class: "text-subtitle-1 font-weight-semibold text-no-wrap" }, "Actions")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(true), createBlock(Fragment, null, renderList(filteredList.value, (item) => {
                  return openBlock(), createBlock("tr", {
                    key: item.id
                  }, [
                    createVNode("td", null, [
                      createVNode("div", { class: "d-flex align-center" }, [
                        createVNode("div", null, [
                          createVNode(_component_v_img, {
                            src: item.avatar,
                            width: "45px",
                            class: "rounded-circle img-fluid"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "ml-5" }, [
                          createVNode("h4", { class: "text-subtitle-1 font-weight-semibold text-no-wrap" }, toDisplayString(item.userinfo), 1),
                          createVNode("div", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, " Class: " + toDisplayString(item.class), 1)
                        ])
                      ])
                    ]),
                    createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(item.sec), 1),
                    createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(item.Internalm), 1),
                    createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(item.externalm), 1),
                    createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(item.total), 1),
                    createVNode("td", {
                      class: "text-subtitle-1 textSecondary text-no-wrap mt-1 text-" + item.color
                    }, toDisplayString(item.remarks), 3),
                    createVNode("td", null, [
                      createVNode("div", { class: "d-flex align-center" }, [
                        createVNode(_component_v_tooltip, { text: "Edit" }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps({
                              icon: "",
                              flat: "",
                              onClick: ($event) => editItem(item),
                              ref_for: true
                            }, props), {
                              default: withCtx(() => [
                                createVNode(_component_PencilIcon, {
                                  "stroke-width": "1.5",
                                  size: "20",
                                  class: "text-primary"
                                })
                              ]),
                              _: 2
                            }, 1040, ["onClick"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_tooltip, { text: "Delete" }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps({
                              icon: "",
                              flat: "",
                              onClick: ($event) => deleteItem(item),
                              ref_for: true
                            }, props), {
                              default: withCtx(() => [
                                createVNode(_component_TrashIcon, {
                                  "stroke-width": "1.5",
                                  size: "20",
                                  class: "text-error"
                                })
                              ]),
                              _: 2
                            }, 1040, ["onClick"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_tooltip, { text: "View Details" }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps({
                              icon: "",
                              flat: "",
                              ref_for: true
                            }, props, { to: "/school-pages/exam/result-details" }), {
                              default: withCtx(() => [
                                createVNode(unref(EyeIcon), {
                                  "stroke-width": "1.5",
                                  size: "20",
                                  class: "text-info"
                                })
                              ]),
                              _: 2
                            }, 1040)
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_v_divider, null, null, _parent));
      _push(`<div class="d-sm-flex justify-md-space-between align-center mt-3"><div class="text-subtitle-1 text-grey100">Showing 1 to 6 of 20 entries</div><div>`);
      _push(ssrRenderComponent(_component_v_pagination, {
        modelValue: page1.value,
        "onUpdate:modelValue": ($event) => page1.value = $event,
        class: "my-4 text-subtitle-1",
        length: 5
      }, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/school-pages/exam/ResultTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Exam Results" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Exam Results",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
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
          } else {
            return [
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/school-pages/exam/result/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B1qF_YOi.mjs.map
