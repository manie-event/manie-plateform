import { _ as __nuxt_component_0 } from './client-only-Bwxzq3Sq.mjs';
import { defineComponent, ref, resolveComponent, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './BaseBreadcrumb-DAIjkUfv.mjs';
import { _ as _sfc_main$2 } from './UiParentCard-DhlYzLUl.mjs';
import { B as BasicDatatables, U as UppercaseFilter, F as Filtrable } from './dataTable-xd06Y3vk.mjs';
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
  __name: "Filtering",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Data Table Filtering" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "#"
      },
      {
        text: "Data Table Filtering",
        disabled: true,
        href: "#"
      }
    ]);
    const search = ref();
    const customsearch = ref();
    const headers = ref([
      { title: "Name", align: "start", key: "name" },
      { title: "Project Name", align: "start", key: "project" },
      { title: "Post", align: "start", key: "post" },
      { title: "Status", align: "start", key: "status" },
      { title: "Budget", align: "end", key: "budget" }
    ]);
    const filtrable = ref("");
    function filterOnlyCapsText(value, query, item) {
      return value != null && query != null && typeof value === "string" && value.toString().toLocaleUpperCase().indexOf(query) !== -1;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_data_table = resolveComponent("v-data-table");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_img = resolveComponent("v-img");
      const _component_ClientOnly = __nuxt_component_0;
      const _component_v_rating = resolveComponent("v-rating");
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
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "Basic Filter" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_text_field, {
                          modelValue: search.value,
                          "onUpdate:modelValue": ($event) => search.value = $event,
                          "append-inner-icon": "mdi-magnify",
                          label: "Search",
                          "single-line": "",
                          "hide-details": "",
                          class: "mb-5"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_data_table, {
                          "items-per-page": "5",
                          headers: headers.value,
                          items: unref(BasicDatatables),
                          search: search.value,
                          class: "border rounded-md"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_text_field, {
                            modelValue: search.value,
                            "onUpdate:modelValue": ($event) => search.value = $event,
                            "append-inner-icon": "mdi-magnify",
                            label: "Search",
                            "single-line": "",
                            "hide-details": "",
                            class: "mb-5"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_v_data_table, {
                            "items-per-page": "5",
                            headers: headers.value,
                            items: unref(BasicDatatables),
                            search: search.value,
                            class: "border rounded-md"
                          }, null, 8, ["headers", "items", "search"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    title: "Custom Filter",
                    class: "mt-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_text_field, {
                          modelValue: customsearch.value,
                          "onUpdate:modelValue": ($event) => customsearch.value = $event,
                          "append-inner-icon": "mdi-magnify",
                          label: "Search (UPPER CASE ONLY)",
                          "single-line": "",
                          "hide-details": "",
                          class: "mb-5"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_data_table, {
                          "items-per-page": "5",
                          headers: headers.value,
                          items: unref(UppercaseFilter),
                          search: customsearch.value,
                          "custom-filter": filterOnlyCapsText,
                          class: "border rounded-md"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_text_field, {
                            modelValue: customsearch.value,
                            "onUpdate:modelValue": ($event) => customsearch.value = $event,
                            "append-inner-icon": "mdi-magnify",
                            label: "Search (UPPER CASE ONLY)",
                            "single-line": "",
                            "hide-details": "",
                            class: "mb-5"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_v_data_table, {
                            "items-per-page": "5",
                            headers: headers.value,
                            items: unref(UppercaseFilter),
                            search: customsearch.value,
                            "custom-filter": filterOnlyCapsText,
                            class: "border rounded-md"
                          }, null, 8, ["headers", "items", "search"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    title: "Filterable",
                    class: "mt-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_title, { class: "d-flex align-center pe-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` My Table `);
                                    _push6(ssrRenderComponent(_component_v_spacer, null, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      modelValue: filtrable.value,
                                      "onUpdate:modelValue": ($event) => filtrable.value = $event,
                                      "prepend-inner-icon": "mdi-magnify",
                                      density: "compact",
                                      label: "Search",
                                      "single-line": "",
                                      flat: "",
                                      "hide-details": "",
                                      variant: "solo-filled"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createTextVNode(" My Table "),
                                      createVNode(_component_v_spacer),
                                      createVNode(_component_v_text_field, {
                                        modelValue: filtrable.value,
                                        "onUpdate:modelValue": ($event) => filtrable.value = $event,
                                        "prepend-inner-icon": "mdi-magnify",
                                        density: "compact",
                                        label: "Search",
                                        "single-line": "",
                                        flat: "",
                                        "hide-details": "",
                                        variant: "solo-filled"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_divider, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_data_table, {
                                search: filtrable.value,
                                "onUpdate:search": ($event) => filtrable.value = $event,
                                items: unref(Filtrable)
                              }, {
                                "header.stock": withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="text-end"${_scopeId5}>Stock</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "text-end" }, "Stock")
                                    ];
                                  }
                                }),
                                "item.image": withCtx(({ item }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_card, {
                                      class: "my-2",
                                      elevation: "2",
                                      rounded: ""
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_img, {
                                            src: `${item.image}`,
                                            height: "64",
                                            cover: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_img, {
                                              src: `${item.image}`,
                                              height: "64",
                                              cover: ""
                                            }, null, 8, ["src"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_card, {
                                        class: "my-2",
                                        elevation: "2",
                                        rounded: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, {
                                            src: `${item.image}`,
                                            height: "64",
                                            cover: ""
                                          }, null, 8, ["src"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ];
                                  }
                                }),
                                "item.rating": withCtx(({ item }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ClientOnly, null, {}, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ClientOnly, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_rating, {
                                            "model-value": item.rating,
                                            color: "warning",
                                            density: "compact",
                                            size: "small",
                                            readonly: ""
                                          }, null, 8, ["model-value"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ];
                                  }
                                }),
                                "item.stock": withCtx(({ item }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="text-end"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_v_chip, {
                                      color: item.stock ? "success" : "error",
                                      text: item.stock ? "In stock" : "Out of stock",
                                      class: "text-uppercase",
                                      label: "",
                                      size: "small"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "text-end" }, [
                                        createVNode(_component_v_chip, {
                                          color: item.stock ? "success" : "error",
                                          text: item.stock ? "In stock" : "Out of stock",
                                          class: "text-uppercase",
                                          label: "",
                                          size: "small"
                                        }, null, 8, ["color", "text"])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card_title, { class: "d-flex align-center pe-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" My Table "),
                                    createVNode(_component_v_spacer),
                                    createVNode(_component_v_text_field, {
                                      modelValue: filtrable.value,
                                      "onUpdate:modelValue": ($event) => filtrable.value = $event,
                                      "prepend-inner-icon": "mdi-magnify",
                                      density: "compact",
                                      label: "Search",
                                      "single-line": "",
                                      flat: "",
                                      "hide-details": "",
                                      variant: "solo-filled"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_divider),
                                createVNode(_component_v_data_table, {
                                  search: filtrable.value,
                                  "onUpdate:search": ($event) => filtrable.value = $event,
                                  items: unref(Filtrable)
                                }, {
                                  "header.stock": withCtx(() => [
                                    createVNode("div", { class: "text-end" }, "Stock")
                                  ]),
                                  "item.image": withCtx(({ item }) => [
                                    createVNode(_component_v_card, {
                                      class: "my-2",
                                      elevation: "2",
                                      rounded: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, {
                                          src: `${item.image}`,
                                          height: "64",
                                          cover: ""
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  "item.rating": withCtx(({ item }) => [
                                    createVNode(_component_ClientOnly, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_rating, {
                                          "model-value": item.rating,
                                          color: "warning",
                                          density: "compact",
                                          size: "small",
                                          readonly: ""
                                        }, null, 8, ["model-value"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  "item.stock": withCtx(({ item }) => [
                                    createVNode("div", { class: "text-end" }, [
                                      createVNode(_component_v_chip, {
                                        color: item.stock ? "success" : "error",
                                        text: item.stock ? "In stock" : "Out of stock",
                                        class: "text-uppercase",
                                        label: "",
                                        size: "small"
                                      }, null, 8, ["color", "text"])
                                    ])
                                  ]),
                                  _: 1
                                }, 8, ["search", "onUpdate:search", "items"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_title, { class: "d-flex align-center pe-2" }, {
                                default: withCtx(() => [
                                  createTextVNode(" My Table "),
                                  createVNode(_component_v_spacer),
                                  createVNode(_component_v_text_field, {
                                    modelValue: filtrable.value,
                                    "onUpdate:modelValue": ($event) => filtrable.value = $event,
                                    "prepend-inner-icon": "mdi-magnify",
                                    density: "compact",
                                    label: "Search",
                                    "single-line": "",
                                    flat: "",
                                    "hide-details": "",
                                    variant: "solo-filled"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_divider),
                              createVNode(_component_v_data_table, {
                                search: filtrable.value,
                                "onUpdate:search": ($event) => filtrable.value = $event,
                                items: unref(Filtrable)
                              }, {
                                "header.stock": withCtx(() => [
                                  createVNode("div", { class: "text-end" }, "Stock")
                                ]),
                                "item.image": withCtx(({ item }) => [
                                  createVNode(_component_v_card, {
                                    class: "my-2",
                                    elevation: "2",
                                    rounded: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, {
                                        src: `${item.image}`,
                                        height: "64",
                                        cover: ""
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                "item.rating": withCtx(({ item }) => [
                                  createVNode(_component_ClientOnly, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_rating, {
                                        "model-value": item.rating,
                                        color: "warning",
                                        density: "compact",
                                        size: "small",
                                        readonly: ""
                                      }, null, 8, ["model-value"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                "item.stock": withCtx(({ item }) => [
                                  createVNode("div", { class: "text-end" }, [
                                    createVNode(_component_v_chip, {
                                      color: item.stock ? "success" : "error",
                                      text: item.stock ? "In stock" : "Out of stock",
                                      class: "text-uppercase",
                                      label: "",
                                      size: "small"
                                    }, null, 8, ["color", "text"])
                                  ])
                                ]),
                                _: 1
                              }, 8, ["search", "onUpdate:search", "items"])
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
                    createVNode(_sfc_main$2, { title: "Basic Filter" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_text_field, {
                          modelValue: search.value,
                          "onUpdate:modelValue": ($event) => search.value = $event,
                          "append-inner-icon": "mdi-magnify",
                          label: "Search",
                          "single-line": "",
                          "hide-details": "",
                          class: "mb-5"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_v_data_table, {
                          "items-per-page": "5",
                          headers: headers.value,
                          items: unref(BasicDatatables),
                          search: search.value,
                          class: "border rounded-md"
                        }, null, 8, ["headers", "items", "search"])
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$2, {
                      title: "Custom Filter",
                      class: "mt-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_text_field, {
                          modelValue: customsearch.value,
                          "onUpdate:modelValue": ($event) => customsearch.value = $event,
                          "append-inner-icon": "mdi-magnify",
                          label: "Search (UPPER CASE ONLY)",
                          "single-line": "",
                          "hide-details": "",
                          class: "mb-5"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_v_data_table, {
                          "items-per-page": "5",
                          headers: headers.value,
                          items: unref(UppercaseFilter),
                          search: customsearch.value,
                          "custom-filter": filterOnlyCapsText,
                          class: "border rounded-md"
                        }, null, 8, ["headers", "items", "search"])
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$2, {
                      title: "Filterable",
                      class: "mt-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_title, { class: "d-flex align-center pe-2" }, {
                              default: withCtx(() => [
                                createTextVNode(" My Table "),
                                createVNode(_component_v_spacer),
                                createVNode(_component_v_text_field, {
                                  modelValue: filtrable.value,
                                  "onUpdate:modelValue": ($event) => filtrable.value = $event,
                                  "prepend-inner-icon": "mdi-magnify",
                                  density: "compact",
                                  label: "Search",
                                  "single-line": "",
                                  flat: "",
                                  "hide-details": "",
                                  variant: "solo-filled"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_divider),
                            createVNode(_component_v_data_table, {
                              search: filtrable.value,
                              "onUpdate:search": ($event) => filtrable.value = $event,
                              items: unref(Filtrable)
                            }, {
                              "header.stock": withCtx(() => [
                                createVNode("div", { class: "text-end" }, "Stock")
                              ]),
                              "item.image": withCtx(({ item }) => [
                                createVNode(_component_v_card, {
                                  class: "my-2",
                                  elevation: "2",
                                  rounded: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      src: `${item.image}`,
                                      height: "64",
                                      cover: ""
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              "item.rating": withCtx(({ item }) => [
                                createVNode(_component_ClientOnly, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_rating, {
                                      "model-value": item.rating,
                                      color: "warning",
                                      density: "compact",
                                      size: "small",
                                      readonly: ""
                                    }, null, 8, ["model-value"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              "item.stock": withCtx(({ item }) => [
                                createVNode("div", { class: "text-end" }, [
                                  createVNode(_component_v_chip, {
                                    color: item.stock ? "success" : "error",
                                    text: item.stock ? "In stock" : "Out of stock",
                                    class: "text-uppercase",
                                    label: "",
                                    size: "small"
                                  }, null, 8, ["color", "text"])
                                ])
                              ]),
                              _: 1
                            }, 8, ["search", "onUpdate:search", "items"])
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
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2, { title: "Basic Filter" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_text_field, {
                        modelValue: search.value,
                        "onUpdate:modelValue": ($event) => search.value = $event,
                        "append-inner-icon": "mdi-magnify",
                        label: "Search",
                        "single-line": "",
                        "hide-details": "",
                        class: "mb-5"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_data_table, {
                        "items-per-page": "5",
                        headers: headers.value,
                        items: unref(BasicDatatables),
                        search: search.value,
                        class: "border rounded-md"
                      }, null, 8, ["headers", "items", "search"])
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$2, {
                    title: "Custom Filter",
                    class: "mt-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_text_field, {
                        modelValue: customsearch.value,
                        "onUpdate:modelValue": ($event) => customsearch.value = $event,
                        "append-inner-icon": "mdi-magnify",
                        label: "Search (UPPER CASE ONLY)",
                        "single-line": "",
                        "hide-details": "",
                        class: "mb-5"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_data_table, {
                        "items-per-page": "5",
                        headers: headers.value,
                        items: unref(UppercaseFilter),
                        search: customsearch.value,
                        "custom-filter": filterOnlyCapsText,
                        class: "border rounded-md"
                      }, null, 8, ["headers", "items", "search"])
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$2, {
                    title: "Filterable",
                    class: "mt-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, { flat: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, { class: "d-flex align-center pe-2" }, {
                            default: withCtx(() => [
                              createTextVNode(" My Table "),
                              createVNode(_component_v_spacer),
                              createVNode(_component_v_text_field, {
                                modelValue: filtrable.value,
                                "onUpdate:modelValue": ($event) => filtrable.value = $event,
                                "prepend-inner-icon": "mdi-magnify",
                                density: "compact",
                                label: "Search",
                                "single-line": "",
                                flat: "",
                                "hide-details": "",
                                variant: "solo-filled"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_divider),
                          createVNode(_component_v_data_table, {
                            search: filtrable.value,
                            "onUpdate:search": ($event) => filtrable.value = $event,
                            items: unref(Filtrable)
                          }, {
                            "header.stock": withCtx(() => [
                              createVNode("div", { class: "text-end" }, "Stock")
                            ]),
                            "item.image": withCtx(({ item }) => [
                              createVNode(_component_v_card, {
                                class: "my-2",
                                elevation: "2",
                                rounded: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_img, {
                                    src: `${item.image}`,
                                    height: "64",
                                    cover: ""
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            "item.rating": withCtx(({ item }) => [
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_rating, {
                                    "model-value": item.rating,
                                    color: "warning",
                                    density: "compact",
                                    size: "small",
                                    readonly: ""
                                  }, null, 8, ["model-value"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            "item.stock": withCtx(({ item }) => [
                              createVNode("div", { class: "text-end" }, [
                                createVNode(_component_v_chip, {
                                  color: item.stock ? "success" : "error",
                                  text: item.stock ? "In stock" : "Out of stock",
                                  class: "text-uppercase",
                                  label: "",
                                  size: "small"
                                }, null, 8, ["color", "text"])
                              ])
                            ]),
                            _: 1
                          }, 8, ["search", "onUpdate:search", "items"])
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
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/datatables/Filtering.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Filtering-C6IY3Eh2.mjs.map
