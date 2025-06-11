import { defineComponent, computed, ref, resolveComponent, withCtx, createVNode, toDisplayString, createTextVNode, mergeProps, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { d as defineStore, a as axiosServices, i as contacts } from "../server.mjs";
import { _ as _imports_0 } from "./virtual_public-Do_DI_-i.js";
const useContactStore = defineStore({
  id: "Contact",
  state: () => ({
    contacts: []
  }),
  getters: {},
  actions: {
    // Fetch followers from action
    async fetchContacts() {
      try {
        const response = await axiosServices.get("/api/contacts");
        this.contacts = response.data.contacts;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EditableTable",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useContactStore();
    computed(() => {
      return store.contacts;
    });
    const valid = ref(true);
    const dialog = ref(false);
    const search = ref("");
    const rolesbg = ref(["primary", "secondary", "error", "success", "warning"]);
    const desserts = ref(contacts);
    const editedIndex = ref(-1);
    const editedItem = ref({
      id: "",
      avatar: _imports_0,
      userinfo: "",
      usermail: "",
      phone: "",
      jdate: "",
      role: "",
      rolestatus: ""
    });
    const defaultItem = ref({
      id: "",
      avatar: _imports_0,
      userinfo: "",
      usermail: "",
      phone: "",
      jdate: "",
      role: "",
      rolestatus: ""
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
      return editedIndex.value === -1 ? "New Contact" : "Edit Contact";
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
      const _component_perfect_scrollbar = resolveComponent("perfect-scrollbar");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_PencilIcon = resolveComponent("PencilIcon");
      const _component_TrashIcon = resolveComponent("TrashIcon");
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
                    label: "Search Contacts",
                    "hide-details": "",
                    variant: "outlined"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_text_field, {
                      density: "compact",
                      modelValue: search.value,
                      "onUpdate:modelValue": ($event) => search.value = $event,
                      label: "Search Contacts",
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
                              _push5(`Add Contact `);
                            } else {
                              return [
                                createVNode(_component_v_icon, { class: "mr-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-account-multiple-plus")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode("Add Contact ")
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
                              createTextVNode("Add Contact ")
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
                                                        modelValue: editedItem.value.id,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.id = $event,
                                                        label: "Id"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          modelValue: editedItem.value.id,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.id = $event,
                                                          label: "Id"
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
                                                        modelValue: editedItem.value.userinfo,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.userinfo = $event,
                                                        label: "User info"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          modelValue: editedItem.value.userinfo,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.userinfo = $event,
                                                          label: "User info"
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
                                                        modelValue: editedItem.value.usermail,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.usermail = $event,
                                                        label: "User email",
                                                        type: "email"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          modelValue: editedItem.value.usermail,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.usermail = $event,
                                                          label: "User email",
                                                          type: "email"
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
                                                        modelValue: editedItem.value.phone,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.phone = $event,
                                                        label: "Phone",
                                                        type: "phone"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          modelValue: editedItem.value.phone,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.phone = $event,
                                                          label: "Phone",
                                                          type: "phone"
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
                                                        modelValue: editedItem.value.jdate,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.jdate = $event,
                                                        label: "Joining Date"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          modelValue: editedItem.value.jdate,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.jdate = $event,
                                                          label: "Joining Date"
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
                                                        modelValue: editedItem.value.role,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.role = $event,
                                                        label: "Role"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          modelValue: editedItem.value.role,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.role = $event,
                                                          label: "Role"
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
                                                        modelValue: editedItem.value.rolestatus,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.rolestatus = $event,
                                                        label: "Role Background"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_select, {
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          items: rolesbg.value,
                                                          modelValue: editedItem.value.rolestatus,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.rolestatus = $event,
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
                                                        modelValue: editedItem.value.id,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.id = $event,
                                                        label: "Id"
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
                                                        modelValue: editedItem.value.userinfo,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.userinfo = $event,
                                                        label: "User info"
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
                                                        modelValue: editedItem.value.usermail,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.usermail = $event,
                                                        label: "User email",
                                                        type: "email"
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
                                                        modelValue: editedItem.value.phone,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.phone = $event,
                                                        label: "Phone",
                                                        type: "phone"
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
                                                        modelValue: editedItem.value.jdate,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.jdate = $event,
                                                        label: "Joining Date"
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
                                                        modelValue: editedItem.value.role,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.role = $event,
                                                        label: "Role"
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
                                                        modelValue: editedItem.value.rolestatus,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.rolestatus = $event,
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
                                                      modelValue: editedItem.value.id,
                                                      "onUpdate:modelValue": ($event) => editedItem.value.id = $event,
                                                      label: "Id"
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
                                                      modelValue: editedItem.value.userinfo,
                                                      "onUpdate:modelValue": ($event) => editedItem.value.userinfo = $event,
                                                      label: "User info"
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
                                                      modelValue: editedItem.value.usermail,
                                                      "onUpdate:modelValue": ($event) => editedItem.value.usermail = $event,
                                                      label: "User email",
                                                      type: "email"
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
                                                      modelValue: editedItem.value.phone,
                                                      "onUpdate:modelValue": ($event) => editedItem.value.phone = $event,
                                                      label: "Phone",
                                                      type: "phone"
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
                                                      modelValue: editedItem.value.jdate,
                                                      "onUpdate:modelValue": ($event) => editedItem.value.jdate = $event,
                                                      label: "Joining Date"
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
                                                      modelValue: editedItem.value.role,
                                                      "onUpdate:modelValue": ($event) => editedItem.value.role = $event,
                                                      label: "Role"
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
                                                      modelValue: editedItem.value.rolestatus,
                                                      "onUpdate:modelValue": ($event) => editedItem.value.rolestatus = $event,
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
                                                    modelValue: editedItem.value.id,
                                                    "onUpdate:modelValue": ($event) => editedItem.value.id = $event,
                                                    label: "Id"
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
                                                    modelValue: editedItem.value.userinfo,
                                                    "onUpdate:modelValue": ($event) => editedItem.value.userinfo = $event,
                                                    label: "User info"
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
                                                    modelValue: editedItem.value.usermail,
                                                    "onUpdate:modelValue": ($event) => editedItem.value.usermail = $event,
                                                    label: "User email",
                                                    type: "email"
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
                                                    modelValue: editedItem.value.phone,
                                                    "onUpdate:modelValue": ($event) => editedItem.value.phone = $event,
                                                    label: "Phone",
                                                    type: "phone"
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
                                                    modelValue: editedItem.value.jdate,
                                                    "onUpdate:modelValue": ($event) => editedItem.value.jdate = $event,
                                                    label: "Joining Date"
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
                                                    modelValue: editedItem.value.role,
                                                    "onUpdate:modelValue": ($event) => editedItem.value.role = $event,
                                                    label: "Role"
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
                                                    modelValue: editedItem.value.rolestatus,
                                                    "onUpdate:modelValue": ($event) => editedItem.value.rolestatus = $event,
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
                                onClick: close,
                                class: "bg-error px-3 rounded-pill"
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
                                disabled: editedItem.value.userinfo == "" || editedItem.value.usermail == "",
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
                                                  modelValue: editedItem.value.id,
                                                  "onUpdate:modelValue": ($event) => editedItem.value.id = $event,
                                                  label: "Id"
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
                                                  modelValue: editedItem.value.userinfo,
                                                  "onUpdate:modelValue": ($event) => editedItem.value.userinfo = $event,
                                                  label: "User info"
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
                                                  modelValue: editedItem.value.usermail,
                                                  "onUpdate:modelValue": ($event) => editedItem.value.usermail = $event,
                                                  label: "User email",
                                                  type: "email"
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
                                                  modelValue: editedItem.value.phone,
                                                  "onUpdate:modelValue": ($event) => editedItem.value.phone = $event,
                                                  label: "Phone",
                                                  type: "phone"
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
                                                  modelValue: editedItem.value.jdate,
                                                  "onUpdate:modelValue": ($event) => editedItem.value.jdate = $event,
                                                  label: "Joining Date"
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
                                                  modelValue: editedItem.value.role,
                                                  "onUpdate:modelValue": ($event) => editedItem.value.role = $event,
                                                  label: "Role"
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
                                                  modelValue: editedItem.value.rolestatus,
                                                  "onUpdate:modelValue": ($event) => editedItem.value.rolestatus = $event,
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
                                    onClick: close,
                                    class: "bg-error px-3 rounded-pill"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cancel")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_btn, {
                                    color: "primary",
                                    disabled: editedItem.value.userinfo == "" || editedItem.value.usermail == "",
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
                                                modelValue: editedItem.value.id,
                                                "onUpdate:modelValue": ($event) => editedItem.value.id = $event,
                                                label: "Id"
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
                                                modelValue: editedItem.value.userinfo,
                                                "onUpdate:modelValue": ($event) => editedItem.value.userinfo = $event,
                                                label: "User info"
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
                                                modelValue: editedItem.value.usermail,
                                                "onUpdate:modelValue": ($event) => editedItem.value.usermail = $event,
                                                label: "User email",
                                                type: "email"
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
                                                modelValue: editedItem.value.phone,
                                                "onUpdate:modelValue": ($event) => editedItem.value.phone = $event,
                                                label: "Phone",
                                                type: "phone"
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
                                                modelValue: editedItem.value.jdate,
                                                "onUpdate:modelValue": ($event) => editedItem.value.jdate = $event,
                                                label: "Joining Date"
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
                                                modelValue: editedItem.value.role,
                                                "onUpdate:modelValue": ($event) => editedItem.value.role = $event,
                                                label: "Role"
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
                                                modelValue: editedItem.value.rolestatus,
                                                "onUpdate:modelValue": ($event) => editedItem.value.rolestatus = $event,
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
                                  onClick: close,
                                  class: "bg-error px-3 rounded-pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cancel")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  disabled: editedItem.value.userinfo == "" || editedItem.value.usermail == "",
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
                            createTextVNode("Add Contact ")
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
                                              modelValue: editedItem.value.id,
                                              "onUpdate:modelValue": ($event) => editedItem.value.id = $event,
                                              label: "Id"
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
                                              modelValue: editedItem.value.userinfo,
                                              "onUpdate:modelValue": ($event) => editedItem.value.userinfo = $event,
                                              label: "User info"
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
                                              modelValue: editedItem.value.usermail,
                                              "onUpdate:modelValue": ($event) => editedItem.value.usermail = $event,
                                              label: "User email",
                                              type: "email"
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
                                              modelValue: editedItem.value.phone,
                                              "onUpdate:modelValue": ($event) => editedItem.value.phone = $event,
                                              label: "Phone",
                                              type: "phone"
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
                                              modelValue: editedItem.value.jdate,
                                              "onUpdate:modelValue": ($event) => editedItem.value.jdate = $event,
                                              label: "Joining Date"
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
                                              modelValue: editedItem.value.role,
                                              "onUpdate:modelValue": ($event) => editedItem.value.role = $event,
                                              label: "Role"
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
                                              modelValue: editedItem.value.rolestatus,
                                              "onUpdate:modelValue": ($event) => editedItem.value.rolestatus = $event,
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
                                onClick: close,
                                class: "bg-error px-3 rounded-pill"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Cancel")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                color: "primary",
                                disabled: editedItem.value.userinfo == "" || editedItem.value.usermail == "",
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
                    label: "Search Contacts",
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
                          createTextVNode("Add Contact ")
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
                                            modelValue: editedItem.value.id,
                                            "onUpdate:modelValue": ($event) => editedItem.value.id = $event,
                                            label: "Id"
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
                                            modelValue: editedItem.value.userinfo,
                                            "onUpdate:modelValue": ($event) => editedItem.value.userinfo = $event,
                                            label: "User info"
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
                                            modelValue: editedItem.value.usermail,
                                            "onUpdate:modelValue": ($event) => editedItem.value.usermail = $event,
                                            label: "User email",
                                            type: "email"
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
                                            modelValue: editedItem.value.phone,
                                            "onUpdate:modelValue": ($event) => editedItem.value.phone = $event,
                                            label: "Phone",
                                            type: "phone"
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
                                            modelValue: editedItem.value.jdate,
                                            "onUpdate:modelValue": ($event) => editedItem.value.jdate = $event,
                                            label: "Joining Date"
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
                                            modelValue: editedItem.value.role,
                                            "onUpdate:modelValue": ($event) => editedItem.value.role = $event,
                                            label: "Role"
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
                                            modelValue: editedItem.value.rolestatus,
                                            "onUpdate:modelValue": ($event) => editedItem.value.rolestatus = $event,
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
                              onClick: close,
                              class: "bg-error px-3 rounded-pill"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Cancel")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              color: "primary",
                              disabled: editedItem.value.userinfo == "" || editedItem.value.usermail == "",
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
      _push(ssrRenderComponent(_component_perfect_scrollbar, { class: "no-scrollbar" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-table"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_table, { class: "mt-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<thead${_scopeId2}><tr${_scopeId2}><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}>Id</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}>UserInfo</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}>Phone</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}>Joining Date</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}>Role</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}>Actions</th></tr></thead><tbody${_scopeId2}><!--[-->`);
                  ssrRenderList(filteredList.value, (item) => {
                    _push3(`<tr${_scopeId2}><td class="text-subtitle-1"${_scopeId2}>${ssrInterpolate(item.id)}</td><td${_scopeId2}><div class="d-flex align-center"${_scopeId2}><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_img, {
                      src: item.avatar,
                      width: "45px",
                      class: "rounded-circle img-fluid"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="ml-5"${_scopeId2}><h4 class="text-subtitle-1 font-weight-semibold text-no-wrap"${_scopeId2}>${ssrInterpolate(item.userinfo)}</h4><span class="text-subtitle-1 d-block mt-1 textSecondary"${_scopeId2}>${ssrInterpolate(item.usermail)}</span></div></div></td><td class="text-subtitle-1"${_scopeId2}>${ssrInterpolate(item.phone)}</td><td class="text-subtitle-1"${_scopeId2}>${ssrInterpolate(item.jdate)}</td><td${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_chip, {
                      rounded: "pill",
                      color: item.rolestatus,
                      size: "small",
                      label: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.role)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.role), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</td><td${_scopeId2}><div class="d-flex align-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_tooltip, { text: "Edit" }, {
                      activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_btn, mergeProps({
                            icon: "",
                            flat: "",
                            onClick: ($event) => editItem(item),
                            ref_for: true
                          }, props), {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_PencilIcon, {
                                  "stroke-width": "1.5",
                                  size: "20",
                                  class: "text-primary"
                                }, null, _parent5, _scopeId4));
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
                          }, _parent4, _scopeId3));
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
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_tooltip, { text: "Delete" }, {
                      activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_btn, mergeProps({
                            icon: "",
                            flat: "",
                            onClick: ($event) => deleteItem(item),
                            ref_for: true
                          }, props), {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_TrashIcon, {
                                  "stroke-width": "1.5",
                                  size: "20",
                                  class: "text-error"
                                }, null, _parent5, _scopeId4));
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
                          }, _parent4, _scopeId3));
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
                    }, _parent3, _scopeId2));
                    _push3(`</div></td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Id"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "UserInfo"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Phone"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Joining Date"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Role"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Actions")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(filteredList.value, (item) => {
                        return openBlock(), createBlock("tr", {
                          key: item.id
                        }, [
                          createVNode("td", { class: "text-subtitle-1" }, toDisplayString(item.id), 1),
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
                                createVNode("span", { class: "text-subtitle-1 d-block mt-1 textSecondary" }, toDisplayString(item.usermail), 1)
                              ])
                            ])
                          ]),
                          createVNode("td", { class: "text-subtitle-1" }, toDisplayString(item.phone), 1),
                          createVNode("td", { class: "text-subtitle-1" }, toDisplayString(item.jdate), 1),
                          createVNode("td", null, [
                            createVNode(_component_v_chip, {
                              rounded: "pill",
                              color: item.rolestatus,
                              size: "small",
                              label: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.role), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
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
                              }, 1024)
                            ])
                          ])
                        ]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "border-table" }, [
                createVNode(_component_v_table, { class: "mt-5" }, {
                  default: withCtx(() => [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Id"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "UserInfo"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Phone"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Joining Date"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Role"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Actions")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(filteredList.value, (item) => {
                        return openBlock(), createBlock("tr", {
                          key: item.id
                        }, [
                          createVNode("td", { class: "text-subtitle-1" }, toDisplayString(item.id), 1),
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
                                createVNode("span", { class: "text-subtitle-1 d-block mt-1 textSecondary" }, toDisplayString(item.usermail), 1)
                              ])
                            ])
                          ]),
                          createVNode("td", { class: "text-subtitle-1" }, toDisplayString(item.phone), 1),
                          createVNode("td", { class: "text-subtitle-1" }, toDisplayString(item.jdate), 1),
                          createVNode("td", null, [
                            createVNode(_component_v_chip, {
                              rounded: "pill",
                              color: item.rolestatus,
                              size: "small",
                              label: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.role), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
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
                              }, 1024)
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
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/table/EditableTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=EditableTable-oLpfwhoA.js.map
