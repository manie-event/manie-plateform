import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, unref, createBlock, createCommentVNode, toDisplayString, openBlock, useSSRContext, TransitionGroup, Fragment, renderList, withModifiers, computed } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { d as defineStore, a as axiosServices } from "../server.mjs";
import { uniqueId, map } from "lodash";
import { sub, formatDistanceToNowStrict } from "date-fns";
import { _ as __nuxt_component_0 } from "./nuxt-link-DZ3wFR7I.js";
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
import "vue-tabler-icons";
import "vue3-perfect-scrollbar";
import "maska";
import "axios-mock-adapter";
import "axios";
import "chance";
import "vue-draggable-next";
import "vue3-easy-data-table";
import "vue-easy-lightbox";
import "vue-scrollto";
const useTaskStore = defineStore({
  id: "tasks",
  state: () => ({
    tasks: [],
    taskContent: "1"
  }),
  actions: {
    // Fetch tasks
    async fetchTasks() {
      try {
        const data = await axiosServices.get("/api/data/task/TaskData");
        this.tasks = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    //select chat
    SelectTask(itemID) {
      this.taskContent = itemID;
    },
    deleteTask(itemID) {
      const taskObj = this.tasks.map((task) => {
        var _a;
        const tasks = (_a = task.tasks) == null ? void 0 : _a.filter((t) => t.id !== itemID);
        return {
          ...task,
          tasks
        };
      });
      this.tasks = taskObj;
    },
    addTask(columnId, title, subtitle, category, categorybg) {
      const newTask = {
        id: uniqueId("#task_"),
        title,
        subtitle,
        category,
        date: sub(/* @__PURE__ */ new Date(), { seconds: 1 }),
        categorybg
      };
      this.tasks = map(this.tasks, (task) => {
        if (task.id === columnId) {
          return {
            ...task,
            ...task.tasks.push(newTask)
          };
        }
        return task;
      });
    }
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TaskItemCard",
  __ssrInlineRender: true,
  props: {
    task: null
  },
  setup(__props) {
    const dialog = ref(false);
    const store = useTaskStore();
    function save() {
      return dialog.value = false;
    }
    function cancel() {
      return dialog.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_NuxtLink = __nuxt_component_0;
      const _component_DotsVerticalIcon = resolveComponent("DotsVerticalIcon");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_img = resolveComponent("v-img");
      const _component_CalendarIcon = resolveComponent("CalendarIcon");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        elevation: "10",
        class: "mb-5"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
          if (_push2) {
            _push2(`<div class="d-flex align-center justify-space-between px-4 py-2 pr-3"${_scopeId}><h5 class="text-subtitle-2 font-weight-semibold pr-4 cursor-move"${_scopeId}>${ssrInterpolate((_a = __props.task) == null ? void 0 : _a.title)}</h5>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "",
              class: "px-0 cursor-pointer"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DotsVerticalIcon, { size: "15" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_menu, { activator: "parent" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list, { density: "compact" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list_item, { value: "Edit" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list_item_title, {
                                      onClick: ($event) => dialog.value = true
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Edit`);
                                        } else {
                                          return [
                                            createTextVNode("Edit")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list_item_title, {
                                        onClick: ($event) => dialog.value = true
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Edit")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_list_item, { value: "Delete" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list_item_title, {
                                      onClick: ($event) => {
                                        var _a2;
                                        return unref(store).deleteTask((_a2 = __props.task) == null ? void 0 : _a2.id);
                                      }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Delete`);
                                        } else {
                                          return [
                                            createTextVNode("Delete")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list_item_title, {
                                        onClick: ($event) => {
                                          var _a2;
                                          return unref(store).deleteTask((_a2 = __props.task) == null ? void 0 : _a2.id);
                                        }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Delete")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_list_item, { value: "Edit" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, {
                                      onClick: ($event) => dialog.value = true
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Edit")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_list_item, { value: "Delete" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, {
                                      onClick: ($event) => {
                                        var _a2;
                                        return unref(store).deleteTask((_a2 = __props.task) == null ? void 0 : _a2.id);
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Delete")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list, { density: "compact" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item, { value: "Edit" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_title, {
                                    onClick: ($event) => dialog.value = true
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Edit")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_list_item, { value: "Delete" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_title, {
                                    onClick: ($event) => {
                                      var _a2;
                                      return unref(store).deleteTask((_a2 = __props.task) == null ? void 0 : _a2.id);
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Delete")
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DotsVerticalIcon, { size: "15" }),
                    createVNode(_component_v_menu, { activator: "parent" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list, { density: "compact" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_list_item, { value: "Edit" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_title, {
                                  onClick: ($event) => dialog.value = true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Edit")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_list_item, { value: "Delete" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_title, {
                                  onClick: ($event) => {
                                    var _a2;
                                    return unref(store).deleteTask((_a2 = __props.task) == null ? void 0 : _a2.id);
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Delete")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
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
                        _push4(ssrRenderComponent(_component_v_card_text, { class: "mb-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h4 class="text-h6 mb-5"${_scopeId4}>Edit Task</h4>`);
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                outlined: "",
                                name: "Task",
                                modelValue: __props.task.title,
                                "onUpdate:modelValue": ($event) => __props.task.title = $event,
                                label: "Title"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_textarea, {
                                outlined: "",
                                name: "Task-subtitle",
                                modelValue: __props.task.subtitle,
                                "onUpdate:modelValue": ($event) => __props.task.subtitle = $event,
                                label: "Subtitle"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_select, {
                                label: "Select",
                                modelValue: __props.task.category,
                                "onUpdate:modelValue": ($event) => __props.task.category = $event,
                                variant: "outlined",
                                items: ["Mobile", "Design", "Development"]
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_select, {
                                label: "Select",
                                modelValue: __props.task.categorybg,
                                "onUpdate:modelValue": ($event) => __props.task.categorybg = $event,
                                variant: "outlined",
                                items: ["primary", "warning", "success", "error"]
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "primary",
                                class: "rounded-pill mr-2",
                                variant: "flat",
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
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "error",
                                variant: "flat",
                                class: "rounded-pill",
                                onClick: cancel
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
                            } else {
                              return [
                                createVNode("h4", { class: "text-h6 mb-5" }, "Edit Task"),
                                createVNode(_component_v_text_field, {
                                  outlined: "",
                                  name: "Task",
                                  modelValue: __props.task.title,
                                  "onUpdate:modelValue": ($event) => __props.task.title = $event,
                                  label: "Title"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_textarea, {
                                  outlined: "",
                                  name: "Task-subtitle",
                                  modelValue: __props.task.subtitle,
                                  "onUpdate:modelValue": ($event) => __props.task.subtitle = $event,
                                  label: "Subtitle"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_select, {
                                  label: "Select",
                                  modelValue: __props.task.category,
                                  "onUpdate:modelValue": ($event) => __props.task.category = $event,
                                  variant: "outlined",
                                  items: ["Mobile", "Design", "Development"]
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_select, {
                                  label: "Select",
                                  modelValue: __props.task.categorybg,
                                  "onUpdate:modelValue": ($event) => __props.task.categorybg = $event,
                                  variant: "outlined",
                                  items: ["primary", "warning", "success", "error"]
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  class: "rounded-pill mr-2",
                                  variant: "flat",
                                  onClick: save
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Save")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  color: "error",
                                  variant: "flat",
                                  class: "rounded-pill",
                                  onClick: cancel
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cancel")
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
                          createVNode(_component_v_card_text, { class: "mb-4" }, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "text-h6 mb-5" }, "Edit Task"),
                              createVNode(_component_v_text_field, {
                                outlined: "",
                                name: "Task",
                                modelValue: __props.task.title,
                                "onUpdate:modelValue": ($event) => __props.task.title = $event,
                                label: "Title"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_textarea, {
                                outlined: "",
                                name: "Task-subtitle",
                                modelValue: __props.task.subtitle,
                                "onUpdate:modelValue": ($event) => __props.task.subtitle = $event,
                                label: "Subtitle"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_select, {
                                label: "Select",
                                modelValue: __props.task.category,
                                "onUpdate:modelValue": ($event) => __props.task.category = $event,
                                variant: "outlined",
                                items: ["Mobile", "Design", "Development"]
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_select, {
                                label: "Select",
                                modelValue: __props.task.categorybg,
                                "onUpdate:modelValue": ($event) => __props.task.categorybg = $event,
                                variant: "outlined",
                                items: ["primary", "warning", "success", "error"]
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_btn, {
                                color: "primary",
                                class: "rounded-pill mr-2",
                                variant: "flat",
                                onClick: save
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Save")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                color: "error",
                                variant: "flat",
                                class: "rounded-pill",
                                onClick: cancel
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Cancel")
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_text, { class: "mb-4" }, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "text-h6 mb-5" }, "Edit Task"),
                            createVNode(_component_v_text_field, {
                              outlined: "",
                              name: "Task",
                              modelValue: __props.task.title,
                              "onUpdate:modelValue": ($event) => __props.task.title = $event,
                              label: "Title"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_textarea, {
                              outlined: "",
                              name: "Task-subtitle",
                              modelValue: __props.task.subtitle,
                              "onUpdate:modelValue": ($event) => __props.task.subtitle = $event,
                              label: "Subtitle"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_select, {
                              label: "Select",
                              modelValue: __props.task.category,
                              "onUpdate:modelValue": ($event) => __props.task.category = $event,
                              variant: "outlined",
                              items: ["Mobile", "Design", "Development"]
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_select, {
                              label: "Select",
                              modelValue: __props.task.categorybg,
                              "onUpdate:modelValue": ($event) => __props.task.categorybg = $event,
                              variant: "outlined",
                              items: ["primary", "warning", "success", "error"]
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_btn, {
                              color: "primary",
                              class: "rounded-pill mr-2",
                              variant: "flat",
                              onClick: save
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Save")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              color: "error",
                              variant: "flat",
                              class: "rounded-pill",
                              onClick: cancel
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Cancel")
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
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if ((_b = __props.task) == null ? void 0 : _b.taskimg) {
              _push2(ssrRenderComponent(_component_v_img, {
                src: (_c = __props.task) == null ? void 0 : _c.taskimg,
                height: "110px",
                cover: "",
                class: "w-100 mb-3"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if ((_d = __props.task) == null ? void 0 : _d.subtitle) {
              _push2(`<p class="text-subtitle-2 px-4"${_scopeId}>${ssrInterpolate((_e = __props.task) == null ? void 0 : _e.subtitle)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="d-flex align-center justify-space-between px-4 py-3"${_scopeId}><div class="d-flex align-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CalendarIcon, { size: "16" }, null, _parent2, _scopeId));
            _push2(`<div class="body-text-1 text-dark pl-2"${_scopeId}>${ssrInterpolate(unref(formatDistanceToNowStrict)(new Date((_f = __props.task) == null ? void 0 : _f.date), {
              addSuffix: false
            }))} ago </div></div><div class="${ssrRenderClass("rounded-sm body-text-1 px-1 py-0 bg-" + ((_g = __props.task) == null ? void 0 : _g.categorybg))}" size="small"${_scopeId}>${ssrInterpolate((_h = __props.task) == null ? void 0 : _h.category)}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center justify-space-between px-4 py-2 pr-3" }, [
                createVNode("h5", { class: "text-subtitle-2 font-weight-semibold pr-4 cursor-move" }, toDisplayString((_i = __props.task) == null ? void 0 : _i.title), 1),
                createVNode(_component_NuxtLink, {
                  to: "",
                  class: "px-0 cursor-pointer"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_DotsVerticalIcon, { size: "15" }),
                    createVNode(_component_v_menu, { activator: "parent" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list, { density: "compact" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_list_item, { value: "Edit" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_title, {
                                  onClick: ($event) => dialog.value = true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Edit")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_list_item, { value: "Delete" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_title, {
                                  onClick: ($event) => {
                                    var _a2;
                                    return unref(store).deleteTask((_a2 = __props.task) == null ? void 0 : _a2.id);
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Delete")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
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
                createVNode(_component_v_dialog, {
                  modelValue: dialog.value,
                  "onUpdate:modelValue": ($event) => dialog.value = $event,
                  "max-width": "500"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_text, { class: "mb-4" }, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "text-h6 mb-5" }, "Edit Task"),
                            createVNode(_component_v_text_field, {
                              outlined: "",
                              name: "Task",
                              modelValue: __props.task.title,
                              "onUpdate:modelValue": ($event) => __props.task.title = $event,
                              label: "Title"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_textarea, {
                              outlined: "",
                              name: "Task-subtitle",
                              modelValue: __props.task.subtitle,
                              "onUpdate:modelValue": ($event) => __props.task.subtitle = $event,
                              label: "Subtitle"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_select, {
                              label: "Select",
                              modelValue: __props.task.category,
                              "onUpdate:modelValue": ($event) => __props.task.category = $event,
                              variant: "outlined",
                              items: ["Mobile", "Design", "Development"]
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_select, {
                              label: "Select",
                              modelValue: __props.task.categorybg,
                              "onUpdate:modelValue": ($event) => __props.task.categorybg = $event,
                              variant: "outlined",
                              items: ["primary", "warning", "success", "error"]
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_btn, {
                              color: "primary",
                              class: "rounded-pill mr-2",
                              variant: "flat",
                              onClick: save
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Save")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              color: "error",
                              variant: "flat",
                              class: "rounded-pill",
                              onClick: cancel
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Cancel")
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
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              ((_j = __props.task) == null ? void 0 : _j.taskimg) ? (openBlock(), createBlock(_component_v_img, {
                key: 0,
                src: (_k = __props.task) == null ? void 0 : _k.taskimg,
                height: "110px",
                cover: "",
                class: "w-100 mb-3"
              }, null, 8, ["src"])) : createCommentVNode("", true),
              ((_l = __props.task) == null ? void 0 : _l.subtitle) ? (openBlock(), createBlock("p", {
                key: 1,
                class: "text-subtitle-2 px-4"
              }, toDisplayString((_m = __props.task) == null ? void 0 : _m.subtitle), 1)) : createCommentVNode("", true),
              createVNode("div", { class: "d-flex align-center justify-space-between px-4 py-3" }, [
                createVNode("div", { class: "d-flex align-center" }, [
                  createVNode(_component_CalendarIcon, { size: "16" }),
                  createVNode("div", { class: "body-text-1 text-dark pl-2" }, toDisplayString(unref(formatDistanceToNowStrict)(new Date((_n = __props.task) == null ? void 0 : _n.date), {
                    addSuffix: false
                  })) + " ago ", 1)
                ]),
                createVNode("div", {
                  class: "rounded-sm body-text-1 px-1 py-0 bg-" + ((_o = __props.task) == null ? void 0 : _o.categorybg),
                  size: "small"
                }, toDisplayString((_p = __props.task) == null ? void 0 : _p.category), 3)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/kanban/TaskItemCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TaskColumn",
  __ssrInlineRender: true,
  props: {
    column: Object
  },
  setup(__props) {
    var _a;
    const props = __props;
    const dialog = ref(false);
    const store = useTaskStore();
    const title = ref("");
    const subtitle = ref("");
    const category = ref("Mobile");
    const categorybg = ref("primary");
    const columnId = ref((_a = props.column) == null ? void 0 : _a.id);
    function addItemAndClear() {
      title.value = "", subtitle.value = "", category.value = "Mobile", categorybg.value = "primary";
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_v_card = resolveComponent("v-card");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_PlusIcon = resolveComponent("PlusIcon");
      const _component_draggable = resolveComponent("draggable");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        elevation: "10",
        class: "bg-" + ((_a2 = __props.column) == null ? void 0 : _a2.cardbg)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="pa-5"${_scopeId}><div class="d-flex align-center justify-space-between"${_scopeId}><h6 class="text-h6 font-weight-semibold"${_scopeId}>${ssrInterpolate((_a3 = __props.column) == null ? void 0 : _a3.title)}</h6>`);
            _push2(ssrRenderComponent(_component_v_avatar, {
              size: "22",
              elevation: "10",
              class: "bg-surface d-flex align-center cursor-pointer",
              onClick: ($event) => dialog.value = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_tooltip, {
                    activator: "parent",
                    location: "top"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Add Task `);
                      } else {
                        return [
                          createTextVNode("Add Task ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_PlusIcon, {
                    size: "13",
                    "stroke-width": "2"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_tooltip, {
                      activator: "parent",
                      location: "top"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Add Task ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_PlusIcon, {
                      size: "13",
                      "stroke-width": "2"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_draggable, {
              class: "dragArea list-group mt-6",
              list: (_b = __props.column) == null ? void 0 : _b.tasks,
              animation: 200,
              "ghost-class": "ghost-card",
              group: "tasks"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a4;
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList((_a4 = __props.column) == null ? void 0 : _a4.tasks, (task) => {
                    _push3(`<div${ssrRenderAttr("task", task)} class="mt-3 cursor-move"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$3, { task }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode(TransitionGroup, null, {
                      default: withCtx(() => {
                        var _a5;
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList((_a5 = __props.column) == null ? void 0 : _a5.tasks, (task) => {
                            return openBlock(), createBlock("div", {
                              key: task.id,
                              task,
                              class: "mt-3 cursor-move"
                            }, [
                              createVNode(_sfc_main$3, { task }, null, 8, ["task"])
                            ], 8, ["task"]);
                          }), 128))
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
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
                        _push4(ssrRenderComponent(_component_v_card_text, { class: "mb-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h4 class="text-h6 mb-5"${_scopeId4}>Add Task</h4><form${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                outlined: "",
                                name: "Task",
                                modelValue: title.value,
                                "onUpdate:modelValue": ($event) => title.value = $event,
                                label: "Title"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_textarea, {
                                outlined: "",
                                name: "Task-subtitle",
                                modelValue: subtitle.value,
                                "onUpdate:modelValue": ($event) => subtitle.value = $event,
                                label: "Subtitle"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_select, {
                                label: "Select",
                                modelValue: category.value,
                                "onUpdate:modelValue": ($event) => category.value = $event,
                                variant: "outlined",
                                items: ["Mobile", "Design", "Development"]
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_select, {
                                label: "Select",
                                modelValue: categorybg.value,
                                "onUpdate:modelValue": ($event) => categorybg.value = $event,
                                variant: "outlined",
                                items: ["primary", "warning", "success", "error"]
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "primary",
                                class: "rounded-pill",
                                variant: "flat",
                                type: "submit",
                                disabled: title.value == "",
                                onClick: ($event) => dialog.value = false
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
                              _push5(`</form>`);
                            } else {
                              return [
                                createVNode("h4", { class: "text-h6 mb-5" }, "Add Task"),
                                createVNode("form", {
                                  onSubmit: withModifiers(($event) => (unref(store).addTask(columnId.value, title.value, subtitle.value, category.value, categorybg.value), addItemAndClear()), ["prevent"])
                                }, [
                                  createVNode(_component_v_text_field, {
                                    outlined: "",
                                    name: "Task",
                                    modelValue: title.value,
                                    "onUpdate:modelValue": ($event) => title.value = $event,
                                    label: "Title"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_textarea, {
                                    outlined: "",
                                    name: "Task-subtitle",
                                    modelValue: subtitle.value,
                                    "onUpdate:modelValue": ($event) => subtitle.value = $event,
                                    label: "Subtitle"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_select, {
                                    label: "Select",
                                    modelValue: category.value,
                                    "onUpdate:modelValue": ($event) => category.value = $event,
                                    variant: "outlined",
                                    items: ["Mobile", "Design", "Development"]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_select, {
                                    label: "Select",
                                    modelValue: categorybg.value,
                                    "onUpdate:modelValue": ($event) => categorybg.value = $event,
                                    variant: "outlined",
                                    items: ["primary", "warning", "success", "error"]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_btn, {
                                    color: "primary",
                                    class: "rounded-pill",
                                    variant: "flat",
                                    type: "submit",
                                    disabled: title.value == "",
                                    onClick: ($event) => dialog.value = false
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Save")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled", "onClick"])
                                ], 40, ["onSubmit"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card_text, { class: "mb-4" }, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "text-h6 mb-5" }, "Add Task"),
                              createVNode("form", {
                                onSubmit: withModifiers(($event) => (unref(store).addTask(columnId.value, title.value, subtitle.value, category.value, categorybg.value), addItemAndClear()), ["prevent"])
                              }, [
                                createVNode(_component_v_text_field, {
                                  outlined: "",
                                  name: "Task",
                                  modelValue: title.value,
                                  "onUpdate:modelValue": ($event) => title.value = $event,
                                  label: "Title"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_textarea, {
                                  outlined: "",
                                  name: "Task-subtitle",
                                  modelValue: subtitle.value,
                                  "onUpdate:modelValue": ($event) => subtitle.value = $event,
                                  label: "Subtitle"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_select, {
                                  label: "Select",
                                  modelValue: category.value,
                                  "onUpdate:modelValue": ($event) => category.value = $event,
                                  variant: "outlined",
                                  items: ["Mobile", "Design", "Development"]
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_select, {
                                  label: "Select",
                                  modelValue: categorybg.value,
                                  "onUpdate:modelValue": ($event) => categorybg.value = $event,
                                  variant: "outlined",
                                  items: ["primary", "warning", "success", "error"]
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  class: "rounded-pill",
                                  variant: "flat",
                                  type: "submit",
                                  disabled: title.value == "",
                                  onClick: ($event) => dialog.value = false
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Save")
                                  ]),
                                  _: 1
                                }, 8, ["disabled", "onClick"])
                              ], 40, ["onSubmit"])
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
                        createVNode(_component_v_card_text, { class: "mb-4" }, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "text-h6 mb-5" }, "Add Task"),
                            createVNode("form", {
                              onSubmit: withModifiers(($event) => (unref(store).addTask(columnId.value, title.value, subtitle.value, category.value, categorybg.value), addItemAndClear()), ["prevent"])
                            }, [
                              createVNode(_component_v_text_field, {
                                outlined: "",
                                name: "Task",
                                modelValue: title.value,
                                "onUpdate:modelValue": ($event) => title.value = $event,
                                label: "Title"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_textarea, {
                                outlined: "",
                                name: "Task-subtitle",
                                modelValue: subtitle.value,
                                "onUpdate:modelValue": ($event) => subtitle.value = $event,
                                label: "Subtitle"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_select, {
                                label: "Select",
                                modelValue: category.value,
                                "onUpdate:modelValue": ($event) => category.value = $event,
                                variant: "outlined",
                                items: ["Mobile", "Design", "Development"]
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_select, {
                                label: "Select",
                                modelValue: categorybg.value,
                                "onUpdate:modelValue": ($event) => categorybg.value = $event,
                                variant: "outlined",
                                items: ["primary", "warning", "success", "error"]
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_btn, {
                                color: "primary",
                                class: "rounded-pill",
                                variant: "flat",
                                type: "submit",
                                disabled: title.value == "",
                                onClick: ($event) => dialog.value = false
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Save")
                                ]),
                                _: 1
                              }, 8, ["disabled", "onClick"])
                            ], 40, ["onSubmit"])
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
              createVNode("div", { class: "pa-5" }, [
                createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                  createVNode("h6", { class: "text-h6 font-weight-semibold" }, toDisplayString((_c = __props.column) == null ? void 0 : _c.title), 1),
                  createVNode(_component_v_avatar, {
                    size: "22",
                    elevation: "10",
                    class: "bg-surface d-flex align-center cursor-pointer",
                    onClick: ($event) => dialog.value = true
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_tooltip, {
                        activator: "parent",
                        location: "top"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Add Task ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_PlusIcon, {
                        size: "13",
                        "stroke-width": "2"
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                createVNode(_component_draggable, {
                  class: "dragArea list-group mt-6",
                  list: (_d = __props.column) == null ? void 0 : _d.tasks,
                  animation: 200,
                  "ghost-class": "ghost-card",
                  group: "tasks"
                }, {
                  default: withCtx(() => [
                    createVNode(TransitionGroup, null, {
                      default: withCtx(() => {
                        var _a4;
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList((_a4 = __props.column) == null ? void 0 : _a4.tasks, (task) => {
                            return openBlock(), createBlock("div", {
                              key: task.id,
                              task,
                              class: "mt-3 cursor-move"
                            }, [
                              createVNode(_sfc_main$3, { task }, null, 8, ["task"])
                            ], 8, ["task"]);
                          }), 128))
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["list"])
              ]),
              createVNode(_component_v_dialog, {
                modelValue: dialog.value,
                "onUpdate:modelValue": ($event) => dialog.value = $event,
                "max-width": "500"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_text, { class: "mb-4" }, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "text-h6 mb-5" }, "Add Task"),
                          createVNode("form", {
                            onSubmit: withModifiers(($event) => (unref(store).addTask(columnId.value, title.value, subtitle.value, category.value, categorybg.value), addItemAndClear()), ["prevent"])
                          }, [
                            createVNode(_component_v_text_field, {
                              outlined: "",
                              name: "Task",
                              modelValue: title.value,
                              "onUpdate:modelValue": ($event) => title.value = $event,
                              label: "Title"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_textarea, {
                              outlined: "",
                              name: "Task-subtitle",
                              modelValue: subtitle.value,
                              "onUpdate:modelValue": ($event) => subtitle.value = $event,
                              label: "Subtitle"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_select, {
                              label: "Select",
                              modelValue: category.value,
                              "onUpdate:modelValue": ($event) => category.value = $event,
                              variant: "outlined",
                              items: ["Mobile", "Design", "Development"]
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_select, {
                              label: "Select",
                              modelValue: categorybg.value,
                              "onUpdate:modelValue": ($event) => categorybg.value = $event,
                              variant: "outlined",
                              items: ["primary", "warning", "success", "error"]
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_btn, {
                              color: "primary",
                              class: "rounded-pill",
                              variant: "flat",
                              type: "submit",
                              disabled: title.value == "",
                              onClick: ($event) => dialog.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Save")
                              ]),
                              _: 1
                            }, 8, ["disabled", "onClick"])
                          ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/kanban/TaskColumn.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TaskCard",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useTaskStore();
    const getTasks = computed(() => {
      return store.tasks;
    });
    const columns = getTasks;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pa-5"${_scopeId}><h5 class="text-h5 font-weight-semibold mb-7"${_scopeId}>Kanban Application</h5>`);
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(columns), (column) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      md: "3",
                      sm: "6",
                      class: "d-flex",
                      key: column.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$2, { column }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$2, { column }, null, 8, ["column"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(columns), (column) => {
                      return openBlock(), createBlock(_component_v_col, {
                        cols: "12",
                        md: "3",
                        sm: "6",
                        class: "d-flex",
                        key: column.id
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$2, { column }, null, 8, ["column"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "pa-5" }, [
                createVNode("h5", { class: "text-h5 font-weight-semibold mb-7" }, "Kanban Application"),
                createVNode(_component_v_row, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(columns), (column) => {
                      return openBlock(), createBlock(_component_v_col, {
                        cols: "12",
                        md: "3",
                        sm: "6",
                        class: "d-flex",
                        key: column.id
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$2, { column }, null, 8, ["column"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/kanban/TaskCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/kanban/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Csni3YWe.js.map
