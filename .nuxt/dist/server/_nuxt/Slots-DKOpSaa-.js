import { defineComponent, ref, resolveComponent, withCtx, unref, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
  __name: "Slots",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Data Table Slots" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Data Table Slots",
        disabled: true,
        href: ""
      }
    ]);
    const headers = ref([
      { title: "Name", align: "start", key: "name", sortable: false },
      { title: "Project Name", align: "start", key: "project" },
      { title: "Post", align: "start", key: "post" },
      { title: "Status", align: "start", key: "status" },
      { title: "Budget", align: "end", key: "budget" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_data_table = resolveComponent("v-data-table");
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
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "Item Slot" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_data_table, {
                          headers: headers.value,
                          items: unref(BasicDatatables),
                          "item-value": "name",
                          class: "border rounded-md"
                        }, {
                          item: withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<tr${_scopeId4}><td class="text-subtitle-1"${_scopeId4}>${ssrInterpolate(item.name)}</td><td class="text-subtitle-1"${_scopeId4}>${ssrInterpolate(item.project)}</td><td class="text-subtitle-1"${_scopeId4}>${ssrInterpolate(item.post)}</td><td class="text-subtitle-1"${_scopeId4}>${ssrInterpolate(item.status)}</td><td class="d-flex justify-end align-center text-subtitle-1"${_scopeId4}>${ssrInterpolate(item.budget)}</td></tr>`);
                            } else {
                              return [
                                createVNode("tr", null, [
                                  createVNode("td", { class: "text-subtitle-1" }, toDisplayString(item.name), 1),
                                  createVNode("td", { class: "text-subtitle-1" }, toDisplayString(item.project), 1),
                                  createVNode("td", { class: "text-subtitle-1" }, toDisplayString(item.post), 1),
                                  createVNode("td", { class: "text-subtitle-1" }, toDisplayString(item.status), 1),
                                  createVNode("td", { class: "d-flex justify-end align-center text-subtitle-1" }, toDisplayString(item.budget), 1)
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_data_table, {
                            headers: headers.value,
                            items: unref(BasicDatatables),
                            "item-value": "name",
                            class: "border rounded-md"
                          }, {
                            item: withCtx(({ item }) => [
                              createVNode("tr", null, [
                                createVNode("td", { class: "text-subtitle-1" }, toDisplayString(item.name), 1),
                                createVNode("td", { class: "text-subtitle-1" }, toDisplayString(item.project), 1),
                                createVNode("td", { class: "text-subtitle-1" }, toDisplayString(item.post), 1),
                                createVNode("td", { class: "text-subtitle-1" }, toDisplayString(item.status), 1),
                                createVNode("td", { class: "d-flex justify-end align-center text-subtitle-1" }, toDisplayString(item.budget), 1)
                              ])
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
                    createVNode(_sfc_main$2, { title: "Item Slot" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_data_table, {
                          headers: headers.value,
                          items: unref(BasicDatatables),
                          "item-value": "name",
                          class: "border rounded-md"
                        }, {
                          item: withCtx(({ item }) => [
                            createVNode("tr", null, [
                              createVNode("td", { class: "text-subtitle-1" }, toDisplayString(item.name), 1),
                              createVNode("td", { class: "text-subtitle-1" }, toDisplayString(item.project), 1),
                              createVNode("td", { class: "text-subtitle-1" }, toDisplayString(item.post), 1),
                              createVNode("td", { class: "text-subtitle-1" }, toDisplayString(item.status), 1),
                              createVNode("td", { class: "d-flex justify-end align-center text-subtitle-1" }, toDisplayString(item.budget), 1)
                            ])
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
                  createVNode(_sfc_main$2, { title: "Item Slot" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_data_table, {
                        headers: headers.value,
                        items: unref(BasicDatatables),
                        "item-value": "name",
                        class: "border rounded-md"
                      }, {
                        item: withCtx(({ item }) => [
                          createVNode("tr", null, [
                            createVNode("td", { class: "text-subtitle-1" }, toDisplayString(item.name), 1),
                            createVNode("td", { class: "text-subtitle-1" }, toDisplayString(item.project), 1),
                            createVNode("td", { class: "text-subtitle-1" }, toDisplayString(item.post), 1),
                            createVNode("td", { class: "text-subtitle-1" }, toDisplayString(item.status), 1),
                            createVNode("td", { class: "d-flex justify-end align-center text-subtitle-1" }, toDisplayString(item.budget), 1)
                          ])
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
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/datatables/Slots.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Slots-DKOpSaa-.js.map
