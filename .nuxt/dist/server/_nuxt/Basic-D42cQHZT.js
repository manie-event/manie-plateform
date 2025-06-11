import { defineComponent, ref, resolveComponent, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./BaseBreadcrumb-DAIjkUfv.js";
import { _ as _sfc_main$2 } from "./UiParentCard-DhlYzLUl.js";
import { B as BasicDatatables } from "./dataTable-xd06Y3vk.js";
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
  __name: "Basic",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Basic Data Tables" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Basic Data Tables",
        disabled: true,
        href: ""
      }
    ]);
    const headers = ref([
      { title: "Name", align: "start", key: "name" },
      { title: "Project Name", align: "start", key: "project" },
      { title: "Post", align: "start", key: "post" },
      { title: "Status", align: "start", key: "status" },
      { title: "Budget", align: "end", key: "budget" }
    ]);
    const expanded = ref();
    const headersExpand = ref([
      { title: "Name", align: "start", key: "name", sortable: false },
      { title: "Project Name", align: "start", key: "project" },
      { title: "Post", align: "start", key: "post" },
      { title: "Status", align: "start", key: "status" },
      { title: "Budget", align: "end", key: "budget" },
      { title: "", key: "data-table-expand" }
    ]);
    function getColor(status) {
      if (status == "Active") return "#13DEB9";
      else if (status == "Cancel") return "#FA896B";
      else if (status == "Completed") return "#5D87FF";
      else return "#FFAE1F";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_data_table = resolveComponent("v-data-table");
      const _component_v_chip = resolveComponent("v-chip");
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
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "Basic Table" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_data_table, {
                          "items-per-page": "5",
                          headers: headers.value,
                          items: unref(BasicDatatables),
                          "item-value": "name",
                          class: "border rounded-md"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_data_table, {
                            "items-per-page": "5",
                            headers: headers.value,
                            items: unref(BasicDatatables),
                            "item-value": "name",
                            class: "border rounded-md"
                          }, null, 8, ["headers", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    title: "Selection",
                    class: "mt-6 pb-0"
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
                    title: "Density",
                    class: "mt-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_data_table, {
                          "items-per-page": "5",
                          headers: headers.value,
                          items: unref(BasicDatatables),
                          "item-value": "name",
                          density: "compact",
                          class: "border rounded-md"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_data_table, {
                            "items-per-page": "5",
                            headers: headers.value,
                            items: unref(BasicDatatables),
                            "item-value": "name",
                            density: "compact",
                            class: "border rounded-md"
                          }, null, 8, ["headers", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    title: "Item",
                    class: "mt-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_data_table, {
                          "items-per-page": "5",
                          headers: headers.value,
                          items: unref(BasicDatatables),
                          "item-value": "name",
                          class: "border rounded-md"
                        }, {
                          "item.status": withCtx(({ value }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_chip, {
                                color: getColor(value)
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(value)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(value), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_chip, {
                                  color: getColor(value)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(value), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
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
                            class: "border rounded-md"
                          }, {
                            "item.status": withCtx(({ value }) => [
                              createVNode(_component_v_chip, {
                                color: getColor(value)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(value), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            _: 1
                          }, 8, ["headers", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    title: "Expandable Rows",
                    class: "mt-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_data_table, {
                          expanded: expanded.value,
                          "onUpdate:expanded": ($event) => expanded.value = $event,
                          headers: headersExpand.value,
                          items: unref(BasicDatatables),
                          "item-value": "name",
                          "show-expand": "",
                          class: "border rounded-md"
                        }, {
                          "expanded-row": withCtx(({ columns, item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<tr${_scopeId4}><td${ssrRenderAttr("colspan", columns.length)}${_scopeId4}>More info about ${ssrInterpolate(item.raw.name)}</td></tr>`);
                            } else {
                              return [
                                createVNode("tr", null, [
                                  createVNode("td", {
                                    colspan: columns.length
                                  }, "More info about " + toDisplayString(item.raw.name), 9, ["colspan"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_data_table, {
                            expanded: expanded.value,
                            "onUpdate:expanded": ($event) => expanded.value = $event,
                            headers: headersExpand.value,
                            items: unref(BasicDatatables),
                            "item-value": "name",
                            "show-expand": "",
                            class: "border rounded-md"
                          }, {
                            "expanded-row": withCtx(({ columns, item }) => [
                              createVNode("tr", null, [
                                createVNode("td", {
                                  colspan: columns.length
                                }, "More info about " + toDisplayString(item.raw.name), 9, ["colspan"])
                              ])
                            ]),
                            _: 1
                          }, 8, ["expanded", "onUpdate:expanded", "headers", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2, { title: "Basic Table" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_data_table, {
                          "items-per-page": "5",
                          headers: headers.value,
                          items: unref(BasicDatatables),
                          "item-value": "name",
                          class: "border rounded-md"
                        }, null, 8, ["headers", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$2, {
                      title: "Selection",
                      class: "mt-6 pb-0"
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
                      title: "Density",
                      class: "mt-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_data_table, {
                          "items-per-page": "5",
                          headers: headers.value,
                          items: unref(BasicDatatables),
                          "item-value": "name",
                          density: "compact",
                          class: "border rounded-md"
                        }, null, 8, ["headers", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$2, {
                      title: "Item",
                      class: "mt-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_data_table, {
                          "items-per-page": "5",
                          headers: headers.value,
                          items: unref(BasicDatatables),
                          "item-value": "name",
                          class: "border rounded-md"
                        }, {
                          "item.status": withCtx(({ value }) => [
                            createVNode(_component_v_chip, {
                              color: getColor(value)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(value), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          _: 1
                        }, 8, ["headers", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$2, {
                      title: "Expandable Rows",
                      class: "mt-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_data_table, {
                          expanded: expanded.value,
                          "onUpdate:expanded": ($event) => expanded.value = $event,
                          headers: headersExpand.value,
                          items: unref(BasicDatatables),
                          "item-value": "name",
                          "show-expand": "",
                          class: "border rounded-md"
                        }, {
                          "expanded-row": withCtx(({ columns, item }) => [
                            createVNode("tr", null, [
                              createVNode("td", {
                                colspan: columns.length
                              }, "More info about " + toDisplayString(item.raw.name), 9, ["colspan"])
                            ])
                          ]),
                          _: 1
                        }, 8, ["expanded", "onUpdate:expanded", "headers", "items"])
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
                  createVNode(_sfc_main$2, { title: "Basic Table" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_data_table, {
                        "items-per-page": "5",
                        headers: headers.value,
                        items: unref(BasicDatatables),
                        "item-value": "name",
                        class: "border rounded-md"
                      }, null, 8, ["headers", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$2, {
                    title: "Selection",
                    class: "mt-6 pb-0"
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
                    title: "Density",
                    class: "mt-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_data_table, {
                        "items-per-page": "5",
                        headers: headers.value,
                        items: unref(BasicDatatables),
                        "item-value": "name",
                        density: "compact",
                        class: "border rounded-md"
                      }, null, 8, ["headers", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$2, {
                    title: "Item",
                    class: "mt-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_data_table, {
                        "items-per-page": "5",
                        headers: headers.value,
                        items: unref(BasicDatatables),
                        "item-value": "name",
                        class: "border rounded-md"
                      }, {
                        "item.status": withCtx(({ value }) => [
                          createVNode(_component_v_chip, {
                            color: getColor(value)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(value), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ]),
                        _: 1
                      }, 8, ["headers", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$2, {
                    title: "Expandable Rows",
                    class: "mt-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_data_table, {
                        expanded: expanded.value,
                        "onUpdate:expanded": ($event) => expanded.value = $event,
                        headers: headersExpand.value,
                        items: unref(BasicDatatables),
                        "item-value": "name",
                        "show-expand": "",
                        class: "border rounded-md"
                      }, {
                        "expanded-row": withCtx(({ columns, item }) => [
                          createVNode("tr", null, [
                            createVNode("td", {
                              colspan: columns.length
                            }, "More info about " + toDisplayString(item.raw.name), 9, ["colspan"])
                          ])
                        ]),
                        _: 1
                      }, 8, ["expanded", "onUpdate:expanded", "headers", "items"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/datatables/Basic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Basic-D42cQHZT.js.map
