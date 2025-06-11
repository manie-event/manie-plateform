import { defineComponent, ref, resolveComponent, withCtx, unref, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./BaseBreadcrumb-DAIjkUfv.js";
import { _ as _sfc_main$2 } from "./UiParentCard-DhlYzLUl.js";
import { B as BasicDatatables, S as SelectedRow } from "./dataTable-xd06Y3vk.js";
import "../server.mjs";
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
import "date-fns";
import "lodash";
import "vue-draggable-next";
import "vue3-easy-data-table";
import "vue-easy-lightbox";
import "vue-scrollto";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Selection",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Data Tables Selection" });
    const selected = ref();
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Data Tables Selection",
        disabled: true,
        href: "#"
      }
    ]);
    const headers = ref([
      { title: "Name", align: "start", key: "name" },
      { title: "Project Name", align: "start", key: "project" },
      { title: "Post", align: "start", key: "post" },
      { title: "Status", align: "start", key: "status" },
      { title: "Budget", align: "end", key: "budget" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_data_table = resolveComponent("v-data-table");
      const _component_v_card = resolveComponent("v-card");
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
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    title: "Basic Selection",
                    class: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_data_table, {
                          "items-per-page": "5",
                          headers: headers.value,
                          items: unref(BasicDatatables),
                          "item-value": "name",
                          "show-select": "",
                          class: "border rounded-md"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_data_table, {
                            "items-per-page": "5",
                            headers: headers.value,
                            items: unref(BasicDatatables),
                            "item-value": "name",
                            "show-select": "",
                            class: "border rounded-md"
                          }, null, 8, ["headers", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    title: "Selected Values",
                    class: "mt-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_data_table, {
                          "items-per-page": "5",
                          headers: headers.value,
                          items: unref(BasicDatatables),
                          "item-value": "name",
                          modelValue: selected.value,
                          "onUpdate:modelValue": ($event) => selected.value = $event,
                          "return-object": "",
                          "show-select": "",
                          class: "border rounded-md"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_card, { class: "elevation-0 border mt-3 pa-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<pre${_scopeId4}>${ssrInterpolate(selected.value)}</pre>`);
                            } else {
                              return [
                                createVNode("pre", null, toDisplayString(selected.value), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_data_table, {
                            "items-per-page": "5",
                            headers: headers.value,
                            items: unref(BasicDatatables),
                            "item-value": "name",
                            modelValue: selected.value,
                            "onUpdate:modelValue": ($event) => selected.value = $event,
                            "return-object": "",
                            "show-select": "",
                            class: "border rounded-md"
                          }, null, 8, ["headers", "items", "modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_v_card, { class: "elevation-0 border mt-3 pa-4" }, {
                            default: withCtx(() => [
                              createVNode("pre", null, toDisplayString(selected.value), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    title: "Selectable Rows",
                    class: "mt-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_data_table, {
                          "items-per-page": "5",
                          headers: headers.value,
                          items: unref(SelectedRow),
                          "item-value": "name",
                          "item-selectable": "selectable",
                          "show-select": "",
                          class: "border rounded-md"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_data_table, {
                            "items-per-page": "5",
                            headers: headers.value,
                            items: unref(SelectedRow),
                            "item-value": "name",
                            "item-selectable": "selectable",
                            "show-select": "",
                            class: "border rounded-md"
                          }, null, 8, ["headers", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    title: "Select Strategies",
                    class: "mt-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_data_table, {
                          "items-per-page": "5",
                          headers: headers.value,
                          items: unref(BasicDatatables),
                          "item-value": "name",
                          "select-strategy": "single",
                          "show-select": "",
                          class: "border rounded-md"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_data_table, {
                            "items-per-page": "5",
                            headers: headers.value,
                            items: unref(BasicDatatables),
                            "item-value": "name",
                            "select-strategy": "single",
                            "show-select": "",
                            class: "border rounded-md"
                          }, null, 8, ["headers", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2, {
                      title: "Basic Selection",
                      class: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_data_table, {
                          "items-per-page": "5",
                          headers: headers.value,
                          items: unref(BasicDatatables),
                          "item-value": "name",
                          "show-select": "",
                          class: "border rounded-md"
                        }, null, 8, ["headers", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$2, {
                      title: "Selected Values",
                      class: "mt-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_data_table, {
                          "items-per-page": "5",
                          headers: headers.value,
                          items: unref(BasicDatatables),
                          "item-value": "name",
                          modelValue: selected.value,
                          "onUpdate:modelValue": ($event) => selected.value = $event,
                          "return-object": "",
                          "show-select": "",
                          class: "border rounded-md"
                        }, null, 8, ["headers", "items", "modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_v_card, { class: "elevation-0 border mt-3 pa-4" }, {
                          default: withCtx(() => [
                            createVNode("pre", null, toDisplayString(selected.value), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$2, {
                      title: "Selectable Rows",
                      class: "mt-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_data_table, {
                          "items-per-page": "5",
                          headers: headers.value,
                          items: unref(SelectedRow),
                          "item-value": "name",
                          "item-selectable": "selectable",
                          "show-select": "",
                          class: "border rounded-md"
                        }, null, 8, ["headers", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$2, {
                      title: "Select Strategies",
                      class: "mt-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_data_table, {
                          "items-per-page": "5",
                          headers: headers.value,
                          items: unref(BasicDatatables),
                          "item-value": "name",
                          "select-strategy": "single",
                          "show-select": "",
                          class: "border rounded-md"
                        }, null, 8, ["headers", "items"])
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
                  createVNode(_sfc_main$2, {
                    title: "Basic Selection",
                    class: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_data_table, {
                        "items-per-page": "5",
                        headers: headers.value,
                        items: unref(BasicDatatables),
                        "item-value": "name",
                        "show-select": "",
                        class: "border rounded-md"
                      }, null, 8, ["headers", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$2, {
                    title: "Selected Values",
                    class: "mt-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_data_table, {
                        "items-per-page": "5",
                        headers: headers.value,
                        items: unref(BasicDatatables),
                        "item-value": "name",
                        modelValue: selected.value,
                        "onUpdate:modelValue": ($event) => selected.value = $event,
                        "return-object": "",
                        "show-select": "",
                        class: "border rounded-md"
                      }, null, 8, ["headers", "items", "modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_card, { class: "elevation-0 border mt-3 pa-4" }, {
                        default: withCtx(() => [
                          createVNode("pre", null, toDisplayString(selected.value), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$2, {
                    title: "Selectable Rows",
                    class: "mt-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_data_table, {
                        "items-per-page": "5",
                        headers: headers.value,
                        items: unref(SelectedRow),
                        "item-value": "name",
                        "item-selectable": "selectable",
                        "show-select": "",
                        class: "border rounded-md"
                      }, null, 8, ["headers", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$2, {
                    title: "Select Strategies",
                    class: "mt-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_data_table, {
                        "items-per-page": "5",
                        headers: headers.value,
                        items: unref(BasicDatatables),
                        "item-value": "name",
                        "select-strategy": "single",
                        "show-select": "",
                        class: "border rounded-md"
                      }, null, 8, ["headers", "items"])
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
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/datatables/Selection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Selection-DdDA-sbq.js.map
