import { defineComponent, computed, ref, resolveComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext, createBlock, createCommentVNode, openBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$4 } from "./AppBaseCard-BbBEC2T8.js";
import { d as defineStore, a as axiosServices, C as colorVariation, _ as _export_sfc } from "../server.mjs";
import { map } from "lodash";
import { TrashIcon, CheckIcon } from "vue-tabler-icons";
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
import "vue-draggable-next";
import "vue3-easy-data-table";
import "vue-easy-lightbox";
import "vue-scrollto";
const useNoteStore = defineStore({
  id: "notes",
  state: () => ({
    notes: [],
    notesContent: 1,
    noteSearch: ""
  }),
  actions: {
    // Fetch notes
    async fetchNotes() {
      try {
        const data = await axiosServices.get("/api/data/notes/NotesData");
        this.notes = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    //select chat
    SelectNote(itemID) {
      this.notesContent = itemID;
    },
    deleteNote(itemID) {
      const index2 = this.notes.findIndex((p) => p.id == itemID);
      this.notes.splice(index2, 1);
    },
    updateNote(itemID, itemColor) {
      this.notes = map(this.notes, (note) => {
        if (note.id === itemID) {
          return {
            ...note,
            color: itemColor
          };
        }
        return note;
      });
    }
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NotesListing",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useNoteStore();
    const getNotes = computed(() => {
      return store.notes;
    });
    const NoteItem = getNotes;
    const searchValue = ref("");
    const filteredNotes = computed(() => {
      return NoteItem.value.filter((note) => {
        var _a;
        return (_a = note.title) == null ? void 0 : _a.toLowerCase().includes(searchValue.value.toLowerCase());
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_v_alert = resolveComponent("v-alert");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pa-6" }, _attrs))}><h4 class="text-h6 mb-4 font-weight-semibold">All Notes</h4><div class="mb-5">`);
      _push(ssrRenderComponent(_component_v_text_field, {
        variant: "outlined",
        modelValue: searchValue.value,
        "onUpdate:modelValue": ($event) => searchValue.value = $event,
        "append-inner-icon": "mdi-magnify",
        placeholder: "Search Notes",
        "hide-details": "",
        density: "compact"
      }, null, _parent));
      _push(`</div>`);
      if (filteredNotes.value.length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(filteredNotes.value, (note) => {
          _push(ssrRenderComponent(_component_v_sheet, {
            class: "note-sheet pa-6 pb-4 rounded-md cursor-pointer mb-4  bg-light" + note.color,
            key: note.id,
            onClick: ($event) => unref(store).SelectNote(note.id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h6 class="${ssrRenderClass("text-h6 text-truncate text-" + note.color)}"${_scopeId}>${ssrInterpolate(note.title)}</h6><div class="d-flex mt-3 align-center"${_scopeId}><small class="text-subtitle-2 opacity-25"${_scopeId}>${ssrInterpolate(new Date(note.datef).toLocaleDateString())}</small>`);
                _push2(ssrRenderComponent(_component_v_btn, {
                  icon: "",
                  variant: "text",
                  class: "ml-auto",
                  size: "x-small",
                  onClick: ($event) => unref(store).deleteNote(note.id)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_v_tooltip, {
                        activator: "parent",
                        location: "top"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`Delete Note`);
                          } else {
                            return [
                              createTextVNode("Delete Note")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(unref(TrashIcon), { size: "18" }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_v_tooltip, {
                          activator: "parent",
                          location: "top"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Delete Note")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(TrashIcon), { size: "18" })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("h6", {
                    class: "text-h6 text-truncate text-" + note.color
                  }, toDisplayString(note.title), 3),
                  createVNode("div", { class: "d-flex mt-3 align-center" }, [
                    createVNode("small", { class: "text-subtitle-2 opacity-25" }, toDisplayString(new Date(note.datef).toLocaleDateString()), 1),
                    createVNode(_component_v_btn, {
                      icon: "",
                      variant: "text",
                      class: "ml-auto",
                      size: "x-small",
                      onClick: ($event) => unref(store).deleteNote(note.id)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_tooltip, {
                          activator: "parent",
                          location: "top"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Delete Note")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(TrashIcon), { size: "18" })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (filteredNotes.value.length === 0) {
        _push(ssrRenderComponent(_component_v_sheet, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_alert, {
                type: "error",
                title: "Opps",
                text: "The Notes you are looking for is not found"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_alert, {
                  type: "error",
                  title: "Opps",
                  text: "The Notes you are looking for is not found"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/notes/NotesListing.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AddNote",
  __ssrInlineRender: true,
  setup(__props) {
    const dialog = ref(false);
    const title = ref("");
    const color = ref("primary");
    const store = useNoteStore();
    const getNote = computed(() => {
      return store.notes;
    });
    function colorset(btcolor) {
      return color.value = btcolor;
    }
    const getId = getNote.value.length;
    function addNote() {
      return getNote.value.push({
        id: getId + 1,
        title: title.value,
        color: color.value,
        datef: /* @__PURE__ */ new Date()
      }), dialog.value = false, title.value = "";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_CheckIcon = resolveComponent("CheckIcon");
      _push(ssrRenderComponent(_component_v_sheet, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, {
              color: "primary",
              onClick: ($event) => dialog.value = true,
              rounded: "pill"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Add Notes`);
                } else {
                  return [
                    createTextVNode("Add Notes")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_dialog, {
              modelValue: dialog.value,
              "onUpdate:modelValue": ($event) => dialog.value = $event,
              "max-width": "500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_text, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h4 class="text-h6 mb-4"${_scopeId4}>Add Notes</h4>`);
                              _push5(ssrRenderComponent(_component_v_textarea, {
                                outlined: "",
                                name: "Note",
                                modelValue: title.value,
                                "onUpdate:modelValue": ($event) => title.value = $event
                              }, null, _parent5, _scopeId4));
                              _push5(`<h4 class="text-h6 mt-4 mb-4"${_scopeId4}>Select Notes Color</h4><div class="d-flex gap-3 align-center"${_scopeId4}><!--[-->`);
                              ssrRenderList(unref(colorVariation), (btcolor) => {
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  icon: "",
                                  key: btcolor.id,
                                  size: "x-small",
                                  color: btcolor.color,
                                  onClick: ($event) => colorset(btcolor.color)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      if (color.value === btcolor.color) {
                                        _push6(ssrRenderComponent(_component_CheckIcon, { width: "16" }, null, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                    } else {
                                      return [
                                        color.value === btcolor.color ? (openBlock(), createBlock(_component_CheckIcon, {
                                          key: 0,
                                          width: "16"
                                        })) : createCommentVNode("", true)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]--></div><div class="pt-6 pb-3 d-flex gap-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "primary",
                                onClick: addNote,
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
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "error",
                                onClick: ($event) => dialog.value = false,
                                rounded: "pill"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Close Dialog`);
                                  } else {
                                    return [
                                      createTextVNode("Close Dialog")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("h4", { class: "text-h6 mb-4" }, "Add Notes"),
                                createVNode(_component_v_textarea, {
                                  outlined: "",
                                  name: "Note",
                                  modelValue: title.value,
                                  "onUpdate:modelValue": ($event) => title.value = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("h4", { class: "text-h6 mt-4 mb-4" }, "Select Notes Color"),
                                createVNode("div", { class: "d-flex gap-3 align-center" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(colorVariation), (btcolor) => {
                                    return openBlock(), createBlock(_component_v_btn, {
                                      icon: "",
                                      key: btcolor.id,
                                      size: "x-small",
                                      color: btcolor.color,
                                      onClick: ($event) => colorset(btcolor.color)
                                    }, {
                                      default: withCtx(() => [
                                        color.value === btcolor.color ? (openBlock(), createBlock(_component_CheckIcon, {
                                          key: 0,
                                          width: "16"
                                        })) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1032, ["color", "onClick"]);
                                  }), 128))
                                ]),
                                createVNode("div", { class: "pt-6 pb-3 d-flex gap-2" }, [
                                  createVNode(_component_v_btn, {
                                    color: "primary",
                                    onClick: addNote,
                                    rounded: "pill"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Save")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_btn, {
                                    color: "error",
                                    onClick: ($event) => dialog.value = false,
                                    rounded: "pill"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Close Dialog")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "text-h6 mb-4" }, "Add Notes"),
                              createVNode(_component_v_textarea, {
                                outlined: "",
                                name: "Note",
                                modelValue: title.value,
                                "onUpdate:modelValue": ($event) => title.value = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("h4", { class: "text-h6 mt-4 mb-4" }, "Select Notes Color"),
                              createVNode("div", { class: "d-flex gap-3 align-center" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(colorVariation), (btcolor) => {
                                  return openBlock(), createBlock(_component_v_btn, {
                                    icon: "",
                                    key: btcolor.id,
                                    size: "x-small",
                                    color: btcolor.color,
                                    onClick: ($event) => colorset(btcolor.color)
                                  }, {
                                    default: withCtx(() => [
                                      color.value === btcolor.color ? (openBlock(), createBlock(_component_CheckIcon, {
                                        key: 0,
                                        width: "16"
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1032, ["color", "onClick"]);
                                }), 128))
                              ]),
                              createVNode("div", { class: "pt-6 pb-3 d-flex gap-2" }, [
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  onClick: addNote,
                                  rounded: "pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Save")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  color: "error",
                                  onClick: ($event) => dialog.value = false,
                                  rounded: "pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Close Dialog")
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "text-h6 mb-4" }, "Add Notes"),
                            createVNode(_component_v_textarea, {
                              outlined: "",
                              name: "Note",
                              modelValue: title.value,
                              "onUpdate:modelValue": ($event) => title.value = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("h4", { class: "text-h6 mt-4 mb-4" }, "Select Notes Color"),
                            createVNode("div", { class: "d-flex gap-3 align-center" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(colorVariation), (btcolor) => {
                                return openBlock(), createBlock(_component_v_btn, {
                                  icon: "",
                                  key: btcolor.id,
                                  size: "x-small",
                                  color: btcolor.color,
                                  onClick: ($event) => colorset(btcolor.color)
                                }, {
                                  default: withCtx(() => [
                                    color.value === btcolor.color ? (openBlock(), createBlock(_component_CheckIcon, {
                                      key: 0,
                                      width: "16"
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1032, ["color", "onClick"]);
                              }), 128))
                            ]),
                            createVNode("div", { class: "pt-6 pb-3 d-flex gap-2" }, [
                              createVNode(_component_v_btn, {
                                color: "primary",
                                onClick: addNote,
                                rounded: "pill"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Save")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                color: "error",
                                onClick: ($event) => dialog.value = false,
                                rounded: "pill"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Close Dialog")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ])
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
              createVNode(_component_v_btn, {
                color: "primary",
                onClick: ($event) => dialog.value = true,
                rounded: "pill"
              }, {
                default: withCtx(() => [
                  createTextVNode("Add Notes")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_v_dialog, {
                modelValue: dialog.value,
                "onUpdate:modelValue": ($event) => dialog.value = $event,
                "max-width": "500"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_text, null, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "text-h6 mb-4" }, "Add Notes"),
                          createVNode(_component_v_textarea, {
                            outlined: "",
                            name: "Note",
                            modelValue: title.value,
                            "onUpdate:modelValue": ($event) => title.value = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("h4", { class: "text-h6 mt-4 mb-4" }, "Select Notes Color"),
                          createVNode("div", { class: "d-flex gap-3 align-center" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(colorVariation), (btcolor) => {
                              return openBlock(), createBlock(_component_v_btn, {
                                icon: "",
                                key: btcolor.id,
                                size: "x-small",
                                color: btcolor.color,
                                onClick: ($event) => colorset(btcolor.color)
                              }, {
                                default: withCtx(() => [
                                  color.value === btcolor.color ? (openBlock(), createBlock(_component_CheckIcon, {
                                    key: 0,
                                    width: "16"
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1032, ["color", "onClick"]);
                            }), 128))
                          ]),
                          createVNode("div", { class: "pt-6 pb-3 d-flex gap-2" }, [
                            createVNode(_component_v_btn, {
                              color: "primary",
                              onClick: addNote,
                              rounded: "pill"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Save")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              color: "error",
                              onClick: ($event) => dialog.value = false,
                              rounded: "pill"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Close Dialog")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
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
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/notes/AddNote.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NotesContent",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useNoteStore();
    const getNote = computed(() => {
      return store.notes[store.notesContent - 1];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_alert = resolveComponent("v-alert");
      _push(ssrRenderComponent(_component_v_sheet, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_sheet, { class: "py-3 pl-6 pr-4 d-flex align-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h4 class="text-h6 font-weight-semibold"${_scopeId2}>Edit Notes</h4><div class="ml-auto"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$2, null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("h4", { class: "text-h6 font-weight-semibold" }, "Edit Notes"),
                    createVNode("div", { class: "ml-auto" }, [
                      createVNode(_sfc_main$2)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_divider, null, null, _parent2, _scopeId));
            if (getNote.value) {
              _push2(ssrRenderComponent(_component_v_sheet, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_sheet, { class: "pa-6" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h4 class="text-h6 mb-4"${_scopeId3}>Change Title</h4>`);
                          _push4(ssrRenderComponent(_component_v_textarea, {
                            outlined: "",
                            name: "Note",
                            modelValue: getNote.value.title,
                            "onUpdate:modelValue": ($event) => getNote.value.title = $event
                          }, null, _parent4, _scopeId3));
                          _push4(`<h4 class="text-h6 mt-4 mb-4"${_scopeId3}>Change Notes Color</h4><div class="d-flex gap-3 align-center"${_scopeId3}><!--[-->`);
                          ssrRenderList(unref(colorVariation), (btcolor) => {
                            _push4(ssrRenderComponent(_component_v_btn, {
                              icon: "",
                              key: btcolor.id,
                              size: "x-small",
                              color: btcolor.color,
                              onClick: ($event) => unref(store).updateNote(getNote.value.id, btcolor.color)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  if (getNote.value.color === btcolor.color) {
                                    _push5(ssrRenderComponent(unref(CheckIcon), { width: "16" }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                } else {
                                  return [
                                    getNote.value.color === btcolor.color ? (openBlock(), createBlock(unref(CheckIcon), {
                                      key: 0,
                                      width: "16"
                                    })) : createCommentVNode("", true)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></div>`);
                        } else {
                          return [
                            createVNode("h4", { class: "text-h6 mb-4" }, "Change Title"),
                            createVNode(_component_v_textarea, {
                              outlined: "",
                              name: "Note",
                              modelValue: getNote.value.title,
                              "onUpdate:modelValue": ($event) => getNote.value.title = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("h4", { class: "text-h6 mt-4 mb-4" }, "Change Notes Color"),
                            createVNode("div", { class: "d-flex gap-3 align-center" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(colorVariation), (btcolor) => {
                                return openBlock(), createBlock(_component_v_btn, {
                                  icon: "",
                                  key: btcolor.id,
                                  size: "x-small",
                                  color: btcolor.color,
                                  onClick: ($event) => unref(store).updateNote(getNote.value.id, btcolor.color)
                                }, {
                                  default: withCtx(() => [
                                    getNote.value.color === btcolor.color ? (openBlock(), createBlock(unref(CheckIcon), {
                                      key: 0,
                                      width: "16"
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1032, ["color", "onClick"]);
                              }), 128))
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_sheet, { class: "pa-6" }, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "text-h6 mb-4" }, "Change Title"),
                          createVNode(_component_v_textarea, {
                            outlined: "",
                            name: "Note",
                            modelValue: getNote.value.title,
                            "onUpdate:modelValue": ($event) => getNote.value.title = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("h4", { class: "text-h6 mt-4 mb-4" }, "Change Notes Color"),
                          createVNode("div", { class: "d-flex gap-3 align-center" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(colorVariation), (btcolor) => {
                              return openBlock(), createBlock(_component_v_btn, {
                                icon: "",
                                key: btcolor.id,
                                size: "x-small",
                                color: btcolor.color,
                                onClick: ($event) => unref(store).updateNote(getNote.value.id, btcolor.color)
                              }, {
                                default: withCtx(() => [
                                  getNote.value.color === btcolor.color ? (openBlock(), createBlock(unref(CheckIcon), {
                                    key: 0,
                                    width: "16"
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1032, ["color", "onClick"]);
                            }), 128))
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
              _push2(ssrRenderComponent(_component_v_sheet, { class: "pa-6" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_alert, {
                      type: "error",
                      title: "Opps",
                      text: "No Note selected Please select note"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_alert, {
                        type: "error",
                        title: "Opps",
                        text: "No Note selected Please select note"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
          } else {
            return [
              createVNode(_component_v_sheet, { class: "py-3 pl-6 pr-4 d-flex align-center" }, {
                default: withCtx(() => [
                  createVNode("h4", { class: "text-h6 font-weight-semibold" }, "Edit Notes"),
                  createVNode("div", { class: "ml-auto" }, [
                    createVNode(_sfc_main$2)
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              getNote.value ? (openBlock(), createBlock(_component_v_sheet, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(_component_v_sheet, { class: "pa-6" }, {
                    default: withCtx(() => [
                      createVNode("h4", { class: "text-h6 mb-4" }, "Change Title"),
                      createVNode(_component_v_textarea, {
                        outlined: "",
                        name: "Note",
                        modelValue: getNote.value.title,
                        "onUpdate:modelValue": ($event) => getNote.value.title = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("h4", { class: "text-h6 mt-4 mb-4" }, "Change Notes Color"),
                      createVNode("div", { class: "d-flex gap-3 align-center" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(colorVariation), (btcolor) => {
                          return openBlock(), createBlock(_component_v_btn, {
                            icon: "",
                            key: btcolor.id,
                            size: "x-small",
                            color: btcolor.color,
                            onClick: ($event) => unref(store).updateNote(getNote.value.id, btcolor.color)
                          }, {
                            default: withCtx(() => [
                              getNote.value.color === btcolor.color ? (openBlock(), createBlock(unref(CheckIcon), {
                                key: 0,
                                width: "16"
                              })) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1032, ["color", "onClick"]);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : (openBlock(), createBlock(_component_v_sheet, {
                key: 1,
                class: "pa-6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_alert, {
                    type: "error",
                    title: "Opps",
                    text: "No Note selected Please select note"
                  })
                ]),
                _: 1
              }))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/notes/NotesContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, null, {
              leftpart: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3)
                  ];
                }
              }),
              rightpart: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1)
                  ];
                }
              }),
              mobileLeftContent: withCtx((_2, _push3, _parent3, _scopeId2) => {
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
          } else {
            return [
              createVNode(_sfc_main$4, null, {
                leftpart: withCtx(() => [
                  createVNode(_sfc_main$3)
                ]),
                rightpart: withCtx(() => [
                  createVNode(_sfc_main$1)
                ]),
                mobileLeftContent: withCtx(() => [
                  createVNode(_sfc_main$3)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/notes/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-df1462a6"]]);
export {
  index as default
};
//# sourceMappingURL=index-Ch0fW9-5.js.map
