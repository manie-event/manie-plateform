import { defineComponent, ref, resolveComponent, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './BaseBreadcrumb-DAIjkUfv.mjs';
import { _ as _sfc_main$2 } from './UiParentCard-DhlYzLUl.mjs';
import { B as BasicDatatables } from './dataTable-xd06Y3vk.mjs';
import './server.mjs';
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
import 'vue-tabler-icons';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Headers",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Data Table Headers" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Data Table Headers",
        disabled: true,
        href: "#"
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
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "Column Slot" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_data_table, {
                          "items-per-page": "5",
                          headers: headers.value,
                          items: unref(BasicDatatables),
                          "item-value": "name",
                          class: "border rounded-md"
                        }, {
                          "column.name": withCtx(({ column }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(column.title.toUpperCase())}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(column.title.toUpperCase()), 1)
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
                            "column.name": withCtx(({ column }) => [
                              createTextVNode(toDisplayString(column.title.toUpperCase()), 1)
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
                    createVNode(_sfc_main$2, { title: "Column Slot" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_data_table, {
                          "items-per-page": "5",
                          headers: headers.value,
                          items: unref(BasicDatatables),
                          "item-value": "name",
                          class: "border rounded-md"
                        }, {
                          "column.name": withCtx(({ column }) => [
                            createTextVNode(toDisplayString(column.title.toUpperCase()), 1)
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
                  createVNode(_sfc_main$2, { title: "Column Slot" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_data_table, {
                        "items-per-page": "5",
                        headers: headers.value,
                        items: unref(BasicDatatables),
                        "item-value": "name",
                        class: "border rounded-md"
                      }, {
                        "column.name": withCtx(({ column }) => [
                          createTextVNode(toDisplayString(column.title.toUpperCase()), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/datatables/Headers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Headers-BF82o_Lk.mjs.map
