import { defineComponent, ref, resolveComponent, withCtx, createVNode, computed, toDisplayString, createTextVNode, mergeProps, unref, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { d as defineStore, a as axiosServices, $ as mock } from './server.mjs';
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

const useScheduleStore = defineStore({
  id: "Schedule",
  state: () => ({
    schedule: []
  }),
  getters: {},
  actions: {
    // Fetch followers from action
    async fetchSchedule() {
      try {
        const response = await axiosServices.get("/api/contacts");
        this.schedule = response.data.schedule;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
  }
});
const schedule = [
  {
    class: "9",
    sec: "A",
    time: "10:00 To 13:00",
    date: "06/07/2007",
    location: "Acero Schools",
    blockno: "5",
    sub1: "Maths (M32)",
    sub2: "Science (S54)",
    sub3: "English (E10)",
    sub4: "Biology (B62)",
    sub5: "Physics (P74)",
    sub6: "Chemistry (C96)"
  },
  {
    class: "8",
    sec: "A",
    time: "10:00 To 13:00",
    date: "22/07/2007",
    location: "Admiral Farragut Academy",
    blockno: "7",
    sub1: "Maths (M32)",
    sub2: "Science (S54)",
    sub3: "English (E10)",
    sub4: "Biology (B62)",
    sub5: "Physics (P74)",
    sub6: "Chemistry (C96)"
  },
  {
    class: "7",
    sec: "F",
    time: "10:00 To 13:00",
    date: "15/09/2022",
    location: "Abington Friends School",
    blockno: "10",
    sub1: "Maths (M32)",
    sub2: "Science (S54)",
    sub3: "English (E10)",
    sub4: "Biology (B62)",
    sub5: "Physics (P74)",
    sub6: "Chemistry (C98)"
  },
  {
    class: "12",
    sec: "A",
    time: "10:00 To 13:00",
    date: "25/06/2022",
    location: "Oxford Academy",
    blockno: "12",
    sub1: "Maths (M32)",
    sub2: "Science (S54)",
    sub3: "English (E10)",
    sub4: "Biology (B62)",
    sub5: "Physics (P74)",
    sub6: "Chemistry (C96)"
  },
  {
    class: "11",
    sec: "B",
    time: "10:00 To 13:00",
    date: "12/07/2022",
    location: "Abington Friends School",
    blockno: "15",
    sub1: "Maths (M32)",
    sub2: "Science (S54)",
    sub3: "English (E10)",
    sub4: "Biology (B62)",
    sub5: "Physics (P74)",
    sub6: "Chemistry (C99)"
  },
  {
    class: "10",
    sec: "B",
    time: "10:00 To 13:00",
    date: "28/07/2022",
    location: "Academy of Holy Angels",
    blockno: "20",
    sub1: "Maths (M32)",
    sub2: "Science (S54)",
    sub3: "English (E10)",
    sub4: "Biology (B62)",
    sub5: "Physics (P74)",
    sub6: "Chemistry (C96)"
  }
];
mock.onGet("/api/contacts").reply(() => {
  return [200, schedule];
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ScheduleTable",
  __ssrInlineRender: true,
  setup(__props) {
    const page1 = ref(1);
    const store = useScheduleStore();
    computed(() => {
      return store.schedule;
    });
    const valid = ref(true);
    const dialog = ref(false);
    const showscehdule = ref(false);
    const search = ref("");
    ref(["primary", "secondary", "error", "success", "warning"]);
    const desserts = ref(schedule);
    const editedIndex = ref(-1);
    const editedItem = ref({
      class: "",
      sec: "",
      time: "",
      date: "",
      location: ""
    });
    const defaultItem = ref({
      class: "",
      sec: "",
      time: "",
      date: "",
      location: ""
    });
    const viewItems = ref({
      class: "",
      sec: "",
      time: "",
      date: "",
      location: "",
      blockno: "",
      sub1: "",
      sub2: "",
      sub3: "",
      sub4: "",
      sub5: "",
      sub6: ""
    });
    const filteredList = computed(() => {
      return desserts.value.filter((user) => {
        return user.location.toLowerCase().includes(search.value.toLowerCase());
      });
    });
    function editItem(item) {
      editedIndex.value = desserts.value.indexOf(item);
      editedItem.value = Object.assign({}, item);
      dialog.value = true;
    }
    function viewItem(item) {
      editedIndex.value = desserts.value.indexOf(item);
      viewItems.value = Object.assign({}, item);
      showscehdule.value = true;
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
      return editedIndex.value === -1 ? "New Schedule" : "Edit Schedule";
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
                    label: "Search Schedule",
                    "hide-details": "",
                    variant: "outlined"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_text_field, {
                      density: "compact",
                      modelValue: search.value,
                      "onUpdate:modelValue": ($event) => search.value = $event,
                      label: "Search Schedule",
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
                              _push5(`Add Schedule `);
                            } else {
                              return [
                                createVNode(_component_v_icon, { class: "mr-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-account-multiple-plus")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode("Add Schedule ")
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
                              createTextVNode("Add Schedule ")
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
                                                        modelValue: editedItem.value.time,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.time = $event,
                                                        label: "Time"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          modelValue: editedItem.value.time,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.time = $event,
                                                          label: "Time"
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
                                                        modelValue: editedItem.value.date,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.date = $event,
                                                        label: "Date"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          modelValue: editedItem.value.date,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.date = $event,
                                                          label: "Date"
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
                                                        modelValue: editedItem.value.location,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.location = $event,
                                                        label: "Location",
                                                        type: "Location"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          modelValue: editedItem.value.location,
                                                          "onUpdate:modelValue": ($event) => editedItem.value.location = $event,
                                                          label: "Location",
                                                          type: "Location"
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
                                                        modelValue: editedItem.value.time,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.time = $event,
                                                        label: "Time"
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
                                                        modelValue: editedItem.value.date,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.date = $event,
                                                        label: "Date"
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
                                                        modelValue: editedItem.value.location,
                                                        "onUpdate:modelValue": ($event) => editedItem.value.location = $event,
                                                        label: "Location",
                                                        type: "Location"
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
                                                      modelValue: editedItem.value.time,
                                                      "onUpdate:modelValue": ($event) => editedItem.value.time = $event,
                                                      label: "Time"
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
                                                      modelValue: editedItem.value.date,
                                                      "onUpdate:modelValue": ($event) => editedItem.value.date = $event,
                                                      label: "Date"
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
                                                      modelValue: editedItem.value.location,
                                                      "onUpdate:modelValue": ($event) => editedItem.value.location = $event,
                                                      label: "Location",
                                                      type: "Location"
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
                                                    modelValue: editedItem.value.time,
                                                    "onUpdate:modelValue": ($event) => editedItem.value.time = $event,
                                                    label: "Time"
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
                                                    modelValue: editedItem.value.date,
                                                    "onUpdate:modelValue": ($event) => editedItem.value.date = $event,
                                                    label: "Date"
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
                                                    modelValue: editedItem.value.location,
                                                    "onUpdate:modelValue": ($event) => editedItem.value.location = $event,
                                                    label: "Location",
                                                    type: "Location"
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
                                onClick: close,
                                rounded: "pill"
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
                                disabled: editedItem.value.class == "" || editedItem.value.date == "",
                                onClick: save,
                                rounded: "pill"
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
                                                  modelValue: editedItem.value.time,
                                                  "onUpdate:modelValue": ($event) => editedItem.value.time = $event,
                                                  label: "Time"
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
                                                  modelValue: editedItem.value.date,
                                                  "onUpdate:modelValue": ($event) => editedItem.value.date = $event,
                                                  label: "Date"
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
                                                  modelValue: editedItem.value.location,
                                                  "onUpdate:modelValue": ($event) => editedItem.value.location = $event,
                                                  label: "Location",
                                                  type: "Location"
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
                                    onClick: close,
                                    rounded: "pill"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cancel")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_btn, {
                                    color: "primary",
                                    disabled: editedItem.value.class == "" || editedItem.value.date == "",
                                    onClick: save,
                                    rounded: "pill"
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
                                                modelValue: editedItem.value.time,
                                                "onUpdate:modelValue": ($event) => editedItem.value.time = $event,
                                                label: "Time"
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
                                                modelValue: editedItem.value.date,
                                                "onUpdate:modelValue": ($event) => editedItem.value.date = $event,
                                                label: "Date"
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
                                                modelValue: editedItem.value.location,
                                                "onUpdate:modelValue": ($event) => editedItem.value.location = $event,
                                                label: "Location",
                                                type: "Location"
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
                                  onClick: close,
                                  rounded: "pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cancel")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  disabled: editedItem.value.class == "" || editedItem.value.date == "",
                                  onClick: save,
                                  rounded: "pill"
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
                            createTextVNode("Add Schedule ")
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
                                              modelValue: editedItem.value.time,
                                              "onUpdate:modelValue": ($event) => editedItem.value.time = $event,
                                              label: "Time"
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
                                              modelValue: editedItem.value.date,
                                              "onUpdate:modelValue": ($event) => editedItem.value.date = $event,
                                              label: "Date"
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
                                              modelValue: editedItem.value.location,
                                              "onUpdate:modelValue": ($event) => editedItem.value.location = $event,
                                              label: "Location",
                                              type: "Location"
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
                                onClick: close,
                                rounded: "pill"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Cancel")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                color: "primary",
                                disabled: editedItem.value.class == "" || editedItem.value.date == "",
                                onClick: save,
                                rounded: "pill"
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
            _push2(ssrRenderComponent(_component_v_dialog, {
              modelValue: showscehdule.value,
              "onUpdate:modelValue": ($event) => showscehdule.value = $event,
              "max-width": "500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_title, { class: "px-4 pt-6 justify-space-between d-flex align-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-h5"${_scopeId4}>Exam Schedule</span>`);
                              _push5(ssrRenderComponent(_component_v_btn, {
                                onClick: ($event) => showscehdule.value = false,
                                ripple: false,
                                density: "compact",
                                icon: "mdi-close"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("span", { class: "text-h5" }, "Exam Schedule"),
                                createVNode(_component_v_btn, {
                                  onClick: ($event) => showscehdule.value = false,
                                  ripple: false,
                                  density: "compact",
                                  icon: "mdi-close"
                                }, null, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_card_text, { class: "px-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_form, {
                                class: "dialog_form",
                                ref: "form",
                                modelValue: valid.value,
                                "onUpdate:modelValue": ($event) => valid.value = $event,
                                "lazy-validation": ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="vertical-table rounded-md"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_v_table, { density: "compact" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<tbody${_scopeId6}><tr${_scopeId6}><th class="text-subtitle-1 font-weight-semibold"${_scopeId6}>Class</th><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId6}>${ssrInterpolate(viewItems.value.class)}</td></tr><tr${_scopeId6}><th class="text-subtitle-1 font-weight-semibold"${_scopeId6}>Section</th><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId6}>${ssrInterpolate(viewItems.value.sec)}</td></tr><tr${_scopeId6}><th class="text-subtitle-1 font-weight-semibold"${_scopeId6}>Time</th><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId6}>${ssrInterpolate(viewItems.value.time)}</td></tr><tr${_scopeId6}><th class="text-subtitle-1 font-weight-semibold"${_scopeId6}>Date</th><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId6}>${ssrInterpolate(viewItems.value.date)}</td></tr><tr${_scopeId6}><th class="text-subtitle-1 font-weight-semibold"${_scopeId6}>Location</th><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId6}>${ssrInterpolate(viewItems.value.location)}</td></tr><tr${_scopeId6}><th class="text-subtitle-1 font-weight-semibold"${_scopeId6}>Block No.</th><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId6}>${ssrInterpolate(viewItems.value.blockno)}</td></tr><tr${_scopeId6}><th class="text-subtitle-1 font-weight-semibold" rowspan="6"${_scopeId6}>Subjects</th><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId6}>${ssrInterpolate(viewItems.value.sub1)}</td></tr><tr${_scopeId6}><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId6}>${ssrInterpolate(viewItems.value.sub2)}</td></tr><tr${_scopeId6}><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId6}>${ssrInterpolate(viewItems.value.sub3)}</td></tr><tr${_scopeId6}><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId6}>${ssrInterpolate(viewItems.value.sub4)}</td></tr><tr${_scopeId6}><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId6}>${ssrInterpolate(viewItems.value.sub5)}</td></tr><tr${_scopeId6}><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId6}>${ssrInterpolate(viewItems.value.sub6)}</td></tr></tbody>`);
                                        } else {
                                          return [
                                            createVNode("tbody", null, [
                                              createVNode("tr", null, [
                                                createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Class"),
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.class), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Section"),
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sec), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Time"),
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.time), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Date"),
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.date), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Location"),
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.location), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Block No."),
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.blockno), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("th", {
                                                  class: "text-subtitle-1 font-weight-semibold",
                                                  rowspan: "6"
                                                }, "Subjects"),
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub1), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub2), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub3), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub4), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub5), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub6), 1)
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "vertical-table rounded-md" }, [
                                        createVNode(_component_v_table, { density: "compact" }, {
                                          default: withCtx(() => [
                                            createVNode("tbody", null, [
                                              createVNode("tr", null, [
                                                createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Class"),
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.class), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Section"),
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sec), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Time"),
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.time), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Date"),
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.date), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Location"),
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.location), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Block No."),
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.blockno), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("th", {
                                                  class: "text-subtitle-1 font-weight-semibold",
                                                  rowspan: "6"
                                                }, "Subjects"),
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub1), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub2), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub3), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub4), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub5), 1)
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub6), 1)
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
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
                                    createVNode("div", { class: "vertical-table rounded-md" }, [
                                      createVNode(_component_v_table, { density: "compact" }, {
                                        default: withCtx(() => [
                                          createVNode("tbody", null, [
                                            createVNode("tr", null, [
                                              createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Class"),
                                              createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.class), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Section"),
                                              createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sec), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Time"),
                                              createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.time), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Date"),
                                              createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.date), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Location"),
                                              createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.location), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Block No."),
                                              createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.blockno), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("th", {
                                                class: "text-subtitle-1 font-weight-semibold",
                                                rowspan: "6"
                                              }, "Subjects"),
                                              createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub1), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub2), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub3), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub4), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub5), 1)
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub6), 1)
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="pa-4 d-flex justify-end"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_spacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "error",
                          class: "px-4",
                          onClick: ($event) => showscehdule.value = false,
                          rounded: "pill"
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
                          createVNode(_component_v_card_title, { class: "px-4 pt-6 justify-space-between d-flex align-center" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-h5" }, "Exam Schedule"),
                              createVNode(_component_v_btn, {
                                onClick: ($event) => showscehdule.value = false,
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
                                  createVNode("div", { class: "vertical-table rounded-md" }, [
                                    createVNode(_component_v_table, { density: "compact" }, {
                                      default: withCtx(() => [
                                        createVNode("tbody", null, [
                                          createVNode("tr", null, [
                                            createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Class"),
                                            createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.class), 1)
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Section"),
                                            createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sec), 1)
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Time"),
                                            createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.time), 1)
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Date"),
                                            createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.date), 1)
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Location"),
                                            createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.location), 1)
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Block No."),
                                            createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.blockno), 1)
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("th", {
                                              class: "text-subtitle-1 font-weight-semibold",
                                              rowspan: "6"
                                            }, "Subjects"),
                                            createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub1), 1)
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub2), 1)
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub3), 1)
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub4), 1)
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub5), 1)
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub6), 1)
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "pa-4 d-flex justify-end" }, [
                            createVNode(_component_v_spacer),
                            createVNode(_component_v_btn, {
                              color: "error",
                              class: "px-4",
                              onClick: ($event) => showscehdule.value = false,
                              rounded: "pill"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Cancel")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { class: "px-4 pt-6 justify-space-between d-flex align-center" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-h5" }, "Exam Schedule"),
                            createVNode(_component_v_btn, {
                              onClick: ($event) => showscehdule.value = false,
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
                                createVNode("div", { class: "vertical-table rounded-md" }, [
                                  createVNode(_component_v_table, { density: "compact" }, {
                                    default: withCtx(() => [
                                      createVNode("tbody", null, [
                                        createVNode("tr", null, [
                                          createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Class"),
                                          createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.class), 1)
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Section"),
                                          createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sec), 1)
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Time"),
                                          createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.time), 1)
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Date"),
                                          createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.date), 1)
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Location"),
                                          createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.location), 1)
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Block No."),
                                          createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.blockno), 1)
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("th", {
                                            class: "text-subtitle-1 font-weight-semibold",
                                            rowspan: "6"
                                          }, "Subjects"),
                                          createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub1), 1)
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub2), 1)
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub3), 1)
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub4), 1)
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub5), 1)
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub6), 1)
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "pa-4 d-flex justify-end" }, [
                          createVNode(_component_v_spacer),
                          createVNode(_component_v_btn, {
                            color: "error",
                            class: "px-4",
                            onClick: ($event) => showscehdule.value = false,
                            rounded: "pill"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cancel")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
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
                    label: "Search Schedule",
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
                          createTextVNode("Add Schedule ")
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
                                            modelValue: editedItem.value.time,
                                            "onUpdate:modelValue": ($event) => editedItem.value.time = $event,
                                            label: "Time"
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
                                            modelValue: editedItem.value.date,
                                            "onUpdate:modelValue": ($event) => editedItem.value.date = $event,
                                            label: "Date"
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
                                            modelValue: editedItem.value.location,
                                            "onUpdate:modelValue": ($event) => editedItem.value.location = $event,
                                            label: "Location",
                                            type: "Location"
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
                              onClick: close,
                              rounded: "pill"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Cancel")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              color: "primary",
                              disabled: editedItem.value.class == "" || editedItem.value.date == "",
                              onClick: save,
                              rounded: "pill"
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
              }),
              createVNode(_component_v_dialog, {
                modelValue: showscehdule.value,
                "onUpdate:modelValue": ($event) => showscehdule.value = $event,
                "max-width": "500"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_title, { class: "px-4 pt-6 justify-space-between d-flex align-center" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-h5" }, "Exam Schedule"),
                          createVNode(_component_v_btn, {
                            onClick: ($event) => showscehdule.value = false,
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
                              createVNode("div", { class: "vertical-table rounded-md" }, [
                                createVNode(_component_v_table, { density: "compact" }, {
                                  default: withCtx(() => [
                                    createVNode("tbody", null, [
                                      createVNode("tr", null, [
                                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Class"),
                                        createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.class), 1)
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Section"),
                                        createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sec), 1)
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Time"),
                                        createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.time), 1)
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Date"),
                                        createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.date), 1)
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Location"),
                                        createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.location), 1)
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Block No."),
                                        createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.blockno), 1)
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("th", {
                                          class: "text-subtitle-1 font-weight-semibold",
                                          rowspan: "6"
                                        }, "Subjects"),
                                        createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub1), 1)
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub2), 1)
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub3), 1)
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub4), 1)
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub5), 1)
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(viewItems.value.sub6), 1)
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "pa-4 d-flex justify-end" }, [
                        createVNode(_component_v_spacer),
                        createVNode(_component_v_btn, {
                          color: "error",
                          class: "px-4",
                          onClick: ($event) => showscehdule.value = false,
                          rounded: "pill"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Cancel")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
      }, _parent));
      _push(`<div class="border-table">`);
      _push(ssrRenderComponent(_component_v_table, { class: "mt-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead${_scopeId}><tr${_scopeId}><th class="text-subtitle-1 font-weight-semibold"${_scopeId}>Exam</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId}>Time</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId}>Date</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId}>Location</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId}>Actions</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(filteredList.value, (item) => {
              _push2(`<tr${_scopeId}><td${_scopeId}><div class="d-flex align-center"${_scopeId}><div${_scopeId}><h4 class="text-subtitle-1 font-weight-semibold text-no-wrap"${_scopeId}> Class: ${ssrInterpolate(item.class)}</h4><div class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId}> Section: ${ssrInterpolate(item.sec)}</div></div></div></td><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId}>${ssrInterpolate(item.time)}</td><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId}>${ssrInterpolate(item.date)}</td><td class="text-subtitle-1 textSecondary text-no-wrap mt-1"${_scopeId}>${ssrInterpolate(item.location)}</td><td${_scopeId}><div class="d-flex align-center"${_scopeId}>`);
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
              _push2(ssrRenderComponent(_component_v_tooltip, { text: "View" }, {
                activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_btn, mergeProps({
                      icon: "",
                      flat: "",
                      onClick: ($event) => viewItem(item),
                      ref_for: true
                    }, props), {
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
                        onClick: ($event) => viewItem(item),
                        ref_for: true
                      }, props), {
                        default: withCtx(() => [
                          createVNode(unref(EyeIcon), {
                            "stroke-width": "1.5",
                            size: "20",
                            class: "text-info"
                          })
                        ]),
                        _: 2
                      }, 1040, ["onClick"])
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
                  createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Exam"),
                  createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Time"),
                  createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Date"),
                  createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Location"),
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
                          createVNode("h4", { class: "text-subtitle-1 font-weight-semibold text-no-wrap" }, " Class: " + toDisplayString(item.class), 1),
                          createVNode("div", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, " Section: " + toDisplayString(item.sec), 1)
                        ])
                      ])
                    ]),
                    createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(item.time), 1),
                    createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(item.date), 1),
                    createVNode("td", { class: "text-subtitle-1 textSecondary text-no-wrap mt-1" }, toDisplayString(item.location), 1),
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
                        createVNode(_component_v_tooltip, { text: "View" }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps({
                              icon: "",
                              flat: "",
                              onClick: ($event) => viewItem(item),
                              ref_for: true
                            }, props), {
                              default: withCtx(() => [
                                createVNode(unref(EyeIcon), {
                                  "stroke-width": "1.5",
                                  size: "20",
                                  class: "text-info"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/school-pages/exam/ScheduleTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Exam Schedule" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Exam Schedule",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/school-pages/exam/schedule/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BnfZS9GM.mjs.map
