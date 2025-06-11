import { defineComponent, ref, resolveComponent, withCtx, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
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
  __name: "Pagination",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Data Table Pagination" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Data Table Pagination",
        disabled: true,
        href: "#"
      }
    ]);
    const pagination = ref(1);
    const itemsPerPage = ref(5);
    const headers = ref([
      { title: "Name", align: "start", key: "name" },
      { title: "Project Name", align: "start", key: "project" },
      { title: "Post", align: "start", key: "post" },
      { title: "Status", align: "start", key: "status" },
      { title: "Budget", align: "end", key: "budget" }
    ]);
    const pageCount = Math.ceil(BasicDatatables.length / itemsPerPage.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_data_table = resolveComponent("v-data-table");
      const _component_v_pagination = resolveComponent("v-pagination");
      const _component_v_text_field = resolveComponent("v-text-field");
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
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "External Pagination" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_data_table, {
                          "items-per-page": itemsPerPage.value,
                          headers: headers.value,
                          items: unref(BasicDatatables),
                          page: pagination.value,
                          "onUpdate:page": ($event) => pagination.value = $event,
                          "hide-default-footer": "",
                          class: "border rounded-md"
                        }, {
                          bottom: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="text-center pt-2 mb-3 px-3"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_pagination, {
                                modelValue: pagination.value,
                                "onUpdate:modelValue": ($event) => pagination.value = $event,
                                length: unref(pageCount)
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                "model-value": itemsPerPage.value,
                                class: "pa-2",
                                label: "Items per page",
                                type: "number",
                                min: "-1",
                                max: "15",
                                "hide-details": "",
                                "onUpdate:modelValue": ($event) => itemsPerPage.value = parseInt($event, 10)
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "text-center pt-2 mb-3 px-3" }, [
                                  createVNode(_component_v_pagination, {
                                    modelValue: pagination.value,
                                    "onUpdate:modelValue": ($event) => pagination.value = $event,
                                    length: unref(pageCount)
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "length"]),
                                  createVNode(_component_v_text_field, {
                                    "model-value": itemsPerPage.value,
                                    class: "pa-2",
                                    label: "Items per page",
                                    type: "number",
                                    min: "-1",
                                    max: "15",
                                    "hide-details": "",
                                    "onUpdate:modelValue": ($event) => itemsPerPage.value = parseInt($event, 10)
                                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_data_table, {
                            "items-per-page": itemsPerPage.value,
                            headers: headers.value,
                            items: unref(BasicDatatables),
                            page: pagination.value,
                            "onUpdate:page": ($event) => pagination.value = $event,
                            "hide-default-footer": "",
                            class: "border rounded-md"
                          }, {
                            bottom: withCtx(() => [
                              createVNode("div", { class: "text-center pt-2 mb-3 px-3" }, [
                                createVNode(_component_v_pagination, {
                                  modelValue: pagination.value,
                                  "onUpdate:modelValue": ($event) => pagination.value = $event,
                                  length: unref(pageCount)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "length"]),
                                createVNode(_component_v_text_field, {
                                  "model-value": itemsPerPage.value,
                                  class: "pa-2",
                                  label: "Items per page",
                                  type: "number",
                                  min: "-1",
                                  max: "15",
                                  "hide-details": "",
                                  "onUpdate:modelValue": ($event) => itemsPerPage.value = parseInt($event, 10)
                                }, null, 8, ["model-value", "onUpdate:modelValue"])
                              ])
                            ]),
                            _: 1
                          }, 8, ["items-per-page", "headers", "items", "page", "onUpdate:page"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2, { title: "External Pagination" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_data_table, {
                          "items-per-page": itemsPerPage.value,
                          headers: headers.value,
                          items: unref(BasicDatatables),
                          page: pagination.value,
                          "onUpdate:page": ($event) => pagination.value = $event,
                          "hide-default-footer": "",
                          class: "border rounded-md"
                        }, {
                          bottom: withCtx(() => [
                            createVNode("div", { class: "text-center pt-2 mb-3 px-3" }, [
                              createVNode(_component_v_pagination, {
                                modelValue: pagination.value,
                                "onUpdate:modelValue": ($event) => pagination.value = $event,
                                length: unref(pageCount)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "length"]),
                              createVNode(_component_v_text_field, {
                                "model-value": itemsPerPage.value,
                                class: "pa-2",
                                label: "Items per page",
                                type: "number",
                                min: "-1",
                                max: "15",
                                "hide-details": "",
                                "onUpdate:modelValue": ($event) => itemsPerPage.value = parseInt($event, 10)
                              }, null, 8, ["model-value", "onUpdate:modelValue"])
                            ])
                          ]),
                          _: 1
                        }, 8, ["items-per-page", "headers", "items", "page", "onUpdate:page"])
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
                  createVNode(_sfc_main$2, { title: "External Pagination" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_data_table, {
                        "items-per-page": itemsPerPage.value,
                        headers: headers.value,
                        items: unref(BasicDatatables),
                        page: pagination.value,
                        "onUpdate:page": ($event) => pagination.value = $event,
                        "hide-default-footer": "",
                        class: "border rounded-md"
                      }, {
                        bottom: withCtx(() => [
                          createVNode("div", { class: "text-center pt-2 mb-3 px-3" }, [
                            createVNode(_component_v_pagination, {
                              modelValue: pagination.value,
                              "onUpdate:modelValue": ($event) => pagination.value = $event,
                              length: unref(pageCount)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "length"]),
                            createVNode(_component_v_text_field, {
                              "model-value": itemsPerPage.value,
                              class: "pa-2",
                              label: "Items per page",
                              type: "number",
                              min: "-1",
                              max: "15",
                              "hide-details": "",
                              "onUpdate:modelValue": ($event) => itemsPerPage.value = parseInt($event, 10)
                            }, null, 8, ["model-value", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      }, 8, ["items-per-page", "headers", "items", "page", "onUpdate:page"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/datatables/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Pagination-Cuqjpt26.js.map
