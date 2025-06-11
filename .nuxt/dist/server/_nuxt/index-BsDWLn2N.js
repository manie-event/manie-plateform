import { defineComponent, ref, computed, resolveComponent, withCtx, createVNode, toDisplayString, createTextVNode, mergeProps, unref, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { d as defineStore, a as axiosServices, h as user1, R as user2, l as user3, m as user4, j as img5, o as img6, $ as mock } from "../server.mjs";
import { _ as _imports_0 } from "./virtual_public-Do_DI_-i.js";
import { EyeIcon } from "vue-tabler-icons";
import { _ as _sfc_main$2 } from "./BaseBreadcrumb-DAIjkUfv.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
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
const useTeachersStore = defineStore({
  id: "Teachers",
  state: () => ({
    teachers: []
  }),
  getters: {},
  actions: {
    // Fetch followers from action
    async fetchTeachers() {
      try {
        const response = await axiosServices.get("/api/contacts");
        this.teachers = response.data.teachers;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
  }
});
const teachers = [
  {
    avatar: user1,
    userinfo: "Budo Masuta",
    class: "6",
    sec: "A",
    subject: "Geography",
    bdate: "06/07/2007",
    phone: "+ 123 9988568",
    usermail: "sparkdoe@gmail.com"
  },
  {
    avatar: user2,
    userinfo: "Garima Singh",
    class: "5",
    sec: "B",
    subject: "Science",
    bdate: "20/10/2007",
    phone: "+ 123 9988568",
    usermail: "ronaldosingh007@gmail.com"
  },
  {
    avatar: user3,
    userinfo: "Inkyu Basu",
    class: "12",
    sec: "B",
    subject: "Maths",
    bdate: "12/12/2001",
    phone: "+ 123 9988568",
    usermail: "davidzonar@gmail.com"
  },
  {
    avatar: user4,
    userinfo: "John Deo",
    class: "12",
    sec: "C",
    subject: "Geography",
    bdate: "02/10/2001",
    phone: "+ 123 9988568",
    usermail: "patelaleis@gmail.com"
  },
  {
    avatar: img5,
    userinfo: "Juku Ren",
    class: "12",
    sec: "B",
    subject: "Maths",
    bdate: "12/12/2001",
    phone: "+ 123 9988568",
    usermail: "davidzonar@gmail.com"
  },
  {
    avatar: img6,
    userinfo: "Kuu Dere",
    class: "5",
    sec: "B",
    subject: "Science",
    bdate: "20/10/2007",
    phone: "+ 123 9988568",
    usermail: "ronaldosingh007@gmail.com"
  },
  {
    avatar: user1,
    userinfo: "Mai Waifu",
    class: "10",
    sec: "C",
    subject: "English",
    bdate: "26/01/2004",
    phone: "+ 123 9988568",
    usermail: "markmaria223@gmail.com"
  },
  {
    avatar: user2,
    userinfo: "Mark J. Freeman",
    class: "2",
    sec: "A",
    subject: "English",
    bdate: "25/01/2004",
    phone: "+ 123 9988568",
    usermail: "kazifahim93@gmail.com"
  },
  {
    avatar: user3,
    userinfo: "Mark Willy",
    class: "5",
    sec: "C",
    subject: "English",
    bdate: "26/01/2006",
    phone: "+ 123 9988568",
    usermail: "jackdude224@gmail.com"
  },
  {
    avatar: user3,
    userinfo: "Mina Rai",
    class: "5",
    sec: "B",
    subject: "English",
    bdate: "20/10/2007",
    phone: "+ 123 9988568",
    usermail: "ronaldosingh007@gmail.com"
  }
];
mock.onGet("/api/contacts").reply(() => {
  return [200, teachers];
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TeachersTable",
  __ssrInlineRender: true,
  setup(__props) {
    const page1 = ref(1);
    const store = useTeachersStore();
    computed(() => {
      return store.teachers;
    });
    const valid = ref(true);
    const dialog = ref(false);
    const search = ref("");
    ref(["primary", "secondary", "error", "success", "warning"]);
    const desserts = ref(teachers);
    const editedIndex = ref(-1);
    const editedItem = ref({
      avatar: _imports_0,
      userinfo: "",
      class: "",
      sec: "",
      subject: "",
      bdate: "",
      phone: "",
      usermail: ""
    });
    const defaultItem = ref({
      avatar: _imports_0,
      userinfo: "",
      class: "",
      sec: "",
      subject: "",
      bdate: "",
      phone: "",
      usermail: ""
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
      return editedIndex.value === -1 ? "New Teacher" : "Edit Teacher";
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
                    label: "Search Teachers",
                    "hide-details": "",
                    variant: "outlined"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_text_field, {
                      density: "compact",
                      modelValue: search.value,
                      "onUpdate:modelValue": ($event) => search.value = $event,
                      label: "Search Teachers",
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
                              _push5(`Add Teacher `);
                            } else {
                              return [
                                createVNode(_component_v_icon, { class: "mr-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-account-multiple-plus")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode("Add Teacher ")
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
                              createTextVNode("Add Teacher ")
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
                                                        label: "Section"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          modelValue: editedItem.value.sec,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.sec = $event,
                                                          label: "Section"
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
                                                        modelValue: editedItem.value.subject,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.subject = $event,
                                                        label: "Subject"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          modelValue: editedItem.value.subject,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.subject = $event,
                                                          label: "Subject"
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
                                                        modelValue: editedItem.value.bdate,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.bdate = $event,
                                                        label: "Joining Date"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          modelValue: editedItem.value.bdate,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.bdate = $event,
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
                                                        label: "Section"
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
                                                        modelValue: editedItem.value.subject,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.subject = $event,
                                                        label: "Subject"
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
                                                        modelValue: editedItem.value.bdate,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.bdate = $event,
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
                                                        modelValue: editedItem.value.usermail,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.usermail = $event,
                                                        label: "User email",
                                                        type: "email"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                      label: "Section"
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
                                                      modelValue: editedItem.value.subject,
                                                      "onUpdate:modelValue": ($event) => editedItem.value.subject = $event,
                                                      label: "Subject"
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
                                                      modelValue: editedItem.value.bdate,
                                                      "onUpdate:modelValue": ($event) => editedItem.value.bdate = $event,
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
                                                      modelValue: editedItem.value.usermail,
                                                      "onUpdate:modelValue": ($event) => editedItem.value.usermail = $event,
                                                      label: "User email",
                                                      type: "email"
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
                                                    label: "Section"
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
                                                    modelValue: editedItem.value.subject,
                                                    "onUpdate:modelValue": ($event) => editedItem.value.subject = $event,
                                                    label: "Subject"
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
                                                    modelValue: editedItem.value.bdate,
                                                    "onUpdate:modelValue": ($event) => editedItem.value.bdate = $event,
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
                                                    modelValue: editedItem.value.usermail,
                                                    "onUpdate:modelValue": ($event) => editedItem.value.usermail = $event,
                                                    label: "User email",
                                                    type: "email"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                class: "bg-error px-3 rounded-pill",
                                onClick: close
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
                                                  label: "Section"
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
                                                  modelValue: editedItem.value.subject,
                                                  "onUpdate:modelValue": ($event) => editedItem.value.subject = $event,
                                                  label: "Subject"
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
                                                  modelValue: editedItem.value.bdate,
                                                  "onUpdate:modelValue": ($event) => editedItem.value.bdate = $event,
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
                                                  modelValue: editedItem.value.usermail,
                                                  "onUpdate:modelValue": ($event) => editedItem.value.usermail = $event,
                                                  label: "User email",
                                                  type: "email"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                    class: "bg-error px-3 rounded-pill",
                                    onClick: close
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
                                                label: "Section"
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
                                                modelValue: editedItem.value.subject,
                                                "onUpdate:modelValue": ($event) => editedItem.value.subject = $event,
                                                label: "Subject"
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
                                                modelValue: editedItem.value.bdate,
                                                "onUpdate:modelValue": ($event) => editedItem.value.bdate = $event,
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
                                                modelValue: editedItem.value.usermail,
                                                "onUpdate:modelValue": ($event) => editedItem.value.usermail = $event,
                                                label: "User email",
                                                type: "email"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                  class: "bg-error px-3 rounded-pill",
                                  onClick: close
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
                            createTextVNode("Add Teacher ")
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
                                              label: "Section"
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
                                              modelValue: editedItem.value.subject,
                                              "onUpdate:modelValue": ($event) => editedItem.value.subject = $event,
                                              label: "Subject"
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
                                              modelValue: editedItem.value.bdate,
                                              "onUpdate:modelValue": ($event) => editedItem.value.bdate = $event,
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
                                              modelValue: editedItem.value.usermail,
                                              "onUpdate:modelValue": ($event) => editedItem.value.usermail = $event,
                                              label: "User email",
                                              type: "email"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                class: "bg-error px-3 rounded-pill",
                                onClick: close
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
                    label: "Search Teachers",
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
                          createTextVNode("Add Teacher ")
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
                                            label: "Section"
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
                                            modelValue: editedItem.value.subject,
                                            "onUpdate:modelValue": ($event) => editedItem.value.subject = $event,
                                            label: "Subject"
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
                                            modelValue: editedItem.value.bdate,
                                            "onUpdate:modelValue": ($event) => editedItem.value.bdate = $event,
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
                                            modelValue: editedItem.value.usermail,
                                            "onUpdate:modelValue": ($event) => editedItem.value.usermail = $event,
                                            label: "User email",
                                            type: "email"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                              class: "bg-error px-3 rounded-pill",
                              onClick: close
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
      _push(`<div class="border-table">`);
      _push(ssrRenderComponent(_component_v_table, { class: "mt-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead${_scopeId}><tr${_scopeId}><th class="text-subtitle-1 font-weight-semibold"${_scopeId}>Profile</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId}>Sec.</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId}>Subject</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId}>D.O.B</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId}>Phone</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId}>Email</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId}>Actions</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(filteredList.value, (item) => {
              _push2(`<tr${_scopeId}><td${_scopeId}><div class="d-flex align-center"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_img, {
                src: item.avatar,
                width: "45px",
                class: "rounded-circle img-fluid"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="ml-5"${_scopeId}><h4 class="text-subtitle-1 font-weight-semibold text-no-wrap"${_scopeId}>${ssrInterpolate(item.userinfo)}</h4><div class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId}> Class: ${ssrInterpolate(item.class)}</div></div></div></td><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId}>${ssrInterpolate(item.sec)}</td><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId}>${ssrInterpolate(item.subject)}</td><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId}>${ssrInterpolate(item.bdate)}</td><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId}>${ssrInterpolate(item.phone)}</td><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId}>${ssrInterpolate(item.usermail)}</td><td${_scopeId}><div class="d-flex align-center"${_scopeId}>`);
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
                    }, props, { to: "/school-pages/teachers/details" }), {
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
                      }, props, { to: "/school-pages/teachers/details" }), {
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
                  createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Profile"),
                  createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Sec."),
                  createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Subject"),
                  createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "D.O.B"),
                  createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Phone"),
                  createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Email"),
                  createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Actions")
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
                    createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(item.subject), 1),
                    createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(item.bdate), 1),
                    createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(item.phone), 1),
                    createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(item.usermail), 1),
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
                            }, props, { to: "/school-pages/teachers/details" }), {
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
      _push(`<div class="d-sm-flex justify-md-space-between align-center mt-3"><div class="text-subtitle-1 text-grey100">Showing 1 to 10 of 16 entries</div><div>`);
      _push(ssrRenderComponent(_component_v_pagination, {
        modelValue: page1.value,
        "onUpdate:modelValue": ($event) => page1.value = $event,
        rounded: "circle",
        density: "compact",
        class: "text-subtitle-1 text-grey100 my-4",
        length: 5
      }, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/school-pages/teachers/TeachersTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Teachers Data" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Teachers Data",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/school-pages/teachers/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BsDWLn2N.js.map
