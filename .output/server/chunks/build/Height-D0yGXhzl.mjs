import { defineComponent, ref, resolveComponent, withCtx, unref, createVNode, createTextVNode, toDisplayString, resolveDynamicComponent, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './UiParentCard-DhlYzLUl.mjs';
import { i as heightTableData, t as tableActionData } from './basicTables-ByY6OgyZ.mjs';
import { _ as _sfc_main$1 } from './BaseBreadcrumb-DAIjkUfv.mjs';
import 'vue-tabler-icons';
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
  __name: "Height",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Height Table" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Height table",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_DotsIcon = resolveComponent("DotsIcon");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
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
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "Height Table" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, {
                          class: "border",
                          elevation: "0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="border-table"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_table, {
                                class: "month-table",
                                height: "400px"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<thead${_scopeId5}><tr${_scopeId5}><th class="text-h6"${_scopeId5}>Authors</th><th class="text-h6"${_scopeId5}>Courses</th><th class="text-h6"${_scopeId5}>Users</th><th class="text-h6"${_scopeId5}></th></tr></thead><tbody${_scopeId5}><!--[-->`);
                                    ssrRenderList(unref(heightTableData), (item) => {
                                      _push6(`<tr class="month-item"${_scopeId5}><td${_scopeId5}><div class="d-flex align-center"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_v_avatar, {
                                        size: "42",
                                        rounded: "md"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<img${ssrRenderAttr("src", item.avatar)} alt="avatar" height="42"${_scopeId6}>`);
                                          } else {
                                            return [
                                              createVNode("img", {
                                                src: item.avatar,
                                                alt: "avatar",
                                                height: "42"
                                              }, null, 8, ["src"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<div class="ml-4"${_scopeId5}><h6 class="text-subtitle-1 font-weight-semibold"${_scopeId5}>${ssrInterpolate(item.name)}</h6><div class="text-subtitle-1 text-medium-emphasis mt-1"${_scopeId5}>${ssrInterpolate(item.handle)}</div></div></div></td><td${_scopeId5}><div class="d-flex align-center"${_scopeId5}><div class="d-flex"${_scopeId5}><!--[-->`);
                                      ssrRenderList(item.courses, (course) => {
                                        _push6(ssrRenderComponent(_component_v_chip, {
                                          key: course.status,
                                          rounded: "pill",
                                          class: "mr-2",
                                          color: course.statuscolor,
                                          size: "small"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(course.status)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(course.status), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]--></div></div></td><td${_scopeId5}><div class="text-subtitle-1 text-medium-emphasis"${_scopeId5}>${ssrInterpolate(item.users)}</div></td><td${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_v_btn, {
                                        size: "30",
                                        icon: "",
                                        variant: "flat",
                                        class: "grey100"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_avatar, { size: "22" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_DotsIcon, {
                                                    size: "20",
                                                    color: "grey100"
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_DotsIcon, {
                                                      size: "20",
                                                      color: "grey100"
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_menu, { activator: "parent" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_v_list, null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<!--[-->`);
                                                        ssrRenderList(unref(tableActionData), (list) => {
                                                          _push9(ssrRenderComponent(_component_v_list_item, {
                                                            value: "action",
                                                            key: list.listtitle,
                                                            "hide-details": "",
                                                            "min-height": "38"
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(ssrRenderComponent(_component_v_list_item_title, null, {
                                                                  default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      _push11(ssrRenderComponent(_component_v_avatar, {
                                                                        size: "20",
                                                                        class: "mr-2"
                                                                      }, {
                                                                        default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                          if (_push12) {
                                                                            ssrRenderVNode(_push12, createVNode(resolveDynamicComponent(list.icon), {
                                                                              "stroke-width": "2",
                                                                              size: "20"
                                                                            }, null), _parent12, _scopeId11);
                                                                          } else {
                                                                            return [
                                                                              (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                                                "stroke-width": "2",
                                                                                size: "20"
                                                                              }))
                                                                            ];
                                                                          }
                                                                        }),
                                                                        _: 2
                                                                      }, _parent11, _scopeId10));
                                                                      _push11(` ${ssrInterpolate(list.listtitle)}`);
                                                                    } else {
                                                                      return [
                                                                        createVNode(_component_v_avatar, {
                                                                          size: "20",
                                                                          class: "mr-2"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                                              "stroke-width": "2",
                                                                              size: "20"
                                                                            }))
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 2
                                                                }, _parent10, _scopeId9));
                                                              } else {
                                                                return [
                                                                  createVNode(_component_v_list_item_title, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_avatar, {
                                                                        size: "20",
                                                                        class: "mr-2"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                                            "stroke-width": "2",
                                                                            size: "20"
                                                                          }))
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        });
                                                        _push9(`<!--]-->`);
                                                      } else {
                                                        return [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                                            return openBlock(), createBlock(_component_v_list_item, {
                                                              value: "action",
                                                              key: list.listtitle,
                                                              "hide-details": "",
                                                              "min-height": "38"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_list_item_title, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_avatar, {
                                                                      size: "20",
                                                                      class: "mr-2"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                                          "stroke-width": "2",
                                                                          size: "20"
                                                                        }))
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024);
                                                          }), 128))
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_list, null, {
                                                      default: withCtx(() => [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                                          return openBlock(), createBlock(_component_v_list_item, {
                                                            value: "action",
                                                            key: list.listtitle,
                                                            "hide-details": "",
                                                            "min-height": "38"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_list_item_title, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_avatar, {
                                                                    size: "20",
                                                                    class: "mr-2"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                                        "stroke-width": "2",
                                                                        size: "20"
                                                                      }))
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1024);
                                                        }), 128))
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_avatar, { size: "22" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_DotsIcon, {
                                                    size: "20",
                                                    color: "grey100"
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_menu, { activator: "parent" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_list, null, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                                        return openBlock(), createBlock(_component_v_list_item, {
                                                          value: "action",
                                                          key: list.listtitle,
                                                          "hide-details": "",
                                                          "min-height": "38"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_list_item_title, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_avatar, {
                                                                  size: "20",
                                                                  class: "mr-2"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                                      "stroke-width": "2",
                                                                      size: "20"
                                                                    }))
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024);
                                                      }), 128))
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</td></tr>`);
                                    });
                                    _push6(`<!--]--></tbody>`);
                                  } else {
                                    return [
                                      createVNode("thead", null, [
                                        createVNode("tr", null, [
                                          createVNode("th", { class: "text-h6" }, "Authors"),
                                          createVNode("th", { class: "text-h6" }, "Courses"),
                                          createVNode("th", { class: "text-h6" }, "Users"),
                                          createVNode("th", { class: "text-h6" })
                                        ])
                                      ]),
                                      createVNode("tbody", null, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(heightTableData), (item) => {
                                          return openBlock(), createBlock("tr", {
                                            key: item.name,
                                            class: "month-item"
                                          }, [
                                            createVNode("td", null, [
                                              createVNode("div", { class: "d-flex align-center" }, [
                                                createVNode(_component_v_avatar, {
                                                  size: "42",
                                                  rounded: "md"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("img", {
                                                      src: item.avatar,
                                                      alt: "avatar",
                                                      height: "42"
                                                    }, null, 8, ["src"])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode("div", { class: "ml-4" }, [
                                                  createVNode("h6", { class: "text-subtitle-1 font-weight-semibold" }, toDisplayString(item.name), 1),
                                                  createVNode("div", { class: "text-subtitle-1 text-medium-emphasis mt-1" }, toDisplayString(item.handle), 1)
                                                ])
                                              ])
                                            ]),
                                            createVNode("td", null, [
                                              createVNode("div", { class: "d-flex align-center" }, [
                                                createVNode("div", { class: "d-flex" }, [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(item.courses, (course) => {
                                                    return openBlock(), createBlock(_component_v_chip, {
                                                      key: course.status,
                                                      rounded: "pill",
                                                      class: "mr-2",
                                                      color: course.statuscolor,
                                                      size: "small"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(course.status), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["color"]);
                                                  }), 128))
                                                ])
                                              ])
                                            ]),
                                            createVNode("td", null, [
                                              createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, toDisplayString(item.users), 1)
                                            ]),
                                            createVNode("td", null, [
                                              createVNode(_component_v_btn, {
                                                size: "30",
                                                icon: "",
                                                variant: "flat",
                                                class: "grey100"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_avatar, { size: "22" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_DotsIcon, {
                                                        size: "20",
                                                        color: "grey100"
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_menu, { activator: "parent" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_list, null, {
                                                        default: withCtx(() => [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                                            return openBlock(), createBlock(_component_v_list_item, {
                                                              value: "action",
                                                              key: list.listtitle,
                                                              "hide-details": "",
                                                              "min-height": "38"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_list_item_title, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_avatar, {
                                                                      size: "20",
                                                                      class: "mr-2"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                                          "stroke-width": "2",
                                                                          size: "20"
                                                                        }))
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024);
                                                          }), 128))
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]);
                                        }), 128))
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "border-table" }, [
                                  createVNode(_component_v_table, {
                                    class: "month-table",
                                    height: "400px"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("thead", null, [
                                        createVNode("tr", null, [
                                          createVNode("th", { class: "text-h6" }, "Authors"),
                                          createVNode("th", { class: "text-h6" }, "Courses"),
                                          createVNode("th", { class: "text-h6" }, "Users"),
                                          createVNode("th", { class: "text-h6" })
                                        ])
                                      ]),
                                      createVNode("tbody", null, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(heightTableData), (item) => {
                                          return openBlock(), createBlock("tr", {
                                            key: item.name,
                                            class: "month-item"
                                          }, [
                                            createVNode("td", null, [
                                              createVNode("div", { class: "d-flex align-center" }, [
                                                createVNode(_component_v_avatar, {
                                                  size: "42",
                                                  rounded: "md"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("img", {
                                                      src: item.avatar,
                                                      alt: "avatar",
                                                      height: "42"
                                                    }, null, 8, ["src"])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode("div", { class: "ml-4" }, [
                                                  createVNode("h6", { class: "text-subtitle-1 font-weight-semibold" }, toDisplayString(item.name), 1),
                                                  createVNode("div", { class: "text-subtitle-1 text-medium-emphasis mt-1" }, toDisplayString(item.handle), 1)
                                                ])
                                              ])
                                            ]),
                                            createVNode("td", null, [
                                              createVNode("div", { class: "d-flex align-center" }, [
                                                createVNode("div", { class: "d-flex" }, [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(item.courses, (course) => {
                                                    return openBlock(), createBlock(_component_v_chip, {
                                                      key: course.status,
                                                      rounded: "pill",
                                                      class: "mr-2",
                                                      color: course.statuscolor,
                                                      size: "small"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(course.status), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["color"]);
                                                  }), 128))
                                                ])
                                              ])
                                            ]),
                                            createVNode("td", null, [
                                              createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, toDisplayString(item.users), 1)
                                            ]),
                                            createVNode("td", null, [
                                              createVNode(_component_v_btn, {
                                                size: "30",
                                                icon: "",
                                                variant: "flat",
                                                class: "grey100"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_avatar, { size: "22" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_DotsIcon, {
                                                        size: "20",
                                                        color: "grey100"
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_menu, { activator: "parent" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_list, null, {
                                                        default: withCtx(() => [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                                            return openBlock(), createBlock(_component_v_list_item, {
                                                              value: "action",
                                                              key: list.listtitle,
                                                              "hide-details": "",
                                                              "min-height": "38"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_list_item_title, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_avatar, {
                                                                      size: "20",
                                                                      class: "mr-2"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                                          "stroke-width": "2",
                                                                          size: "20"
                                                                        }))
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024);
                                                          }), 128))
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]);
                                        }), 128))
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, {
                            class: "border",
                            elevation: "0"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "border-table" }, [
                                createVNode(_component_v_table, {
                                  class: "month-table",
                                  height: "400px"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("thead", null, [
                                      createVNode("tr", null, [
                                        createVNode("th", { class: "text-h6" }, "Authors"),
                                        createVNode("th", { class: "text-h6" }, "Courses"),
                                        createVNode("th", { class: "text-h6" }, "Users"),
                                        createVNode("th", { class: "text-h6" })
                                      ])
                                    ]),
                                    createVNode("tbody", null, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(heightTableData), (item) => {
                                        return openBlock(), createBlock("tr", {
                                          key: item.name,
                                          class: "month-item"
                                        }, [
                                          createVNode("td", null, [
                                            createVNode("div", { class: "d-flex align-center" }, [
                                              createVNode(_component_v_avatar, {
                                                size: "42",
                                                rounded: "md"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("img", {
                                                    src: item.avatar,
                                                    alt: "avatar",
                                                    height: "42"
                                                  }, null, 8, ["src"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode("div", { class: "ml-4" }, [
                                                createVNode("h6", { class: "text-subtitle-1 font-weight-semibold" }, toDisplayString(item.name), 1),
                                                createVNode("div", { class: "text-subtitle-1 text-medium-emphasis mt-1" }, toDisplayString(item.handle), 1)
                                              ])
                                            ])
                                          ]),
                                          createVNode("td", null, [
                                            createVNode("div", { class: "d-flex align-center" }, [
                                              createVNode("div", { class: "d-flex" }, [
                                                (openBlock(true), createBlock(Fragment, null, renderList(item.courses, (course) => {
                                                  return openBlock(), createBlock(_component_v_chip, {
                                                    key: course.status,
                                                    rounded: "pill",
                                                    class: "mr-2",
                                                    color: course.statuscolor,
                                                    size: "small"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(course.status), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"]);
                                                }), 128))
                                              ])
                                            ])
                                          ]),
                                          createVNode("td", null, [
                                            createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, toDisplayString(item.users), 1)
                                          ]),
                                          createVNode("td", null, [
                                            createVNode(_component_v_btn, {
                                              size: "30",
                                              icon: "",
                                              variant: "flat",
                                              class: "grey100"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_avatar, { size: "22" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_DotsIcon, {
                                                      size: "20",
                                                      color: "grey100"
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_menu, { activator: "parent" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_list, null, {
                                                      default: withCtx(() => [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                                          return openBlock(), createBlock(_component_v_list_item, {
                                                            value: "action",
                                                            key: list.listtitle,
                                                            "hide-details": "",
                                                            "min-height": "38"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_list_item_title, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_avatar, {
                                                                    size: "20",
                                                                    class: "mr-2"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                                        "stroke-width": "2",
                                                                        size: "20"
                                                                      }))
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1024);
                                                        }), 128))
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]);
                                      }), 128))
                                    ])
                                  ]),
                                  _: 1
                                })
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
                    createVNode(_sfc_main$2, { title: "Height Table" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, {
                          class: "border",
                          elevation: "0"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "border-table" }, [
                              createVNode(_component_v_table, {
                                class: "month-table",
                                height: "400px"
                              }, {
                                default: withCtx(() => [
                                  createVNode("thead", null, [
                                    createVNode("tr", null, [
                                      createVNode("th", { class: "text-h6" }, "Authors"),
                                      createVNode("th", { class: "text-h6" }, "Courses"),
                                      createVNode("th", { class: "text-h6" }, "Users"),
                                      createVNode("th", { class: "text-h6" })
                                    ])
                                  ]),
                                  createVNode("tbody", null, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(heightTableData), (item) => {
                                      return openBlock(), createBlock("tr", {
                                        key: item.name,
                                        class: "month-item"
                                      }, [
                                        createVNode("td", null, [
                                          createVNode("div", { class: "d-flex align-center" }, [
                                            createVNode(_component_v_avatar, {
                                              size: "42",
                                              rounded: "md"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("img", {
                                                  src: item.avatar,
                                                  alt: "avatar",
                                                  height: "42"
                                                }, null, 8, ["src"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode("div", { class: "ml-4" }, [
                                              createVNode("h6", { class: "text-subtitle-1 font-weight-semibold" }, toDisplayString(item.name), 1),
                                              createVNode("div", { class: "text-subtitle-1 text-medium-emphasis mt-1" }, toDisplayString(item.handle), 1)
                                            ])
                                          ])
                                        ]),
                                        createVNode("td", null, [
                                          createVNode("div", { class: "d-flex align-center" }, [
                                            createVNode("div", { class: "d-flex" }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(item.courses, (course) => {
                                                return openBlock(), createBlock(_component_v_chip, {
                                                  key: course.status,
                                                  rounded: "pill",
                                                  class: "mr-2",
                                                  color: course.statuscolor,
                                                  size: "small"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(course.status), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"]);
                                              }), 128))
                                            ])
                                          ])
                                        ]),
                                        createVNode("td", null, [
                                          createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, toDisplayString(item.users), 1)
                                        ]),
                                        createVNode("td", null, [
                                          createVNode(_component_v_btn, {
                                            size: "30",
                                            icon: "",
                                            variant: "flat",
                                            class: "grey100"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_avatar, { size: "22" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_DotsIcon, {
                                                    size: "20",
                                                    color: "grey100"
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_menu, { activator: "parent" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_list, null, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                                        return openBlock(), createBlock(_component_v_list_item, {
                                                          value: "action",
                                                          key: list.listtitle,
                                                          "hide-details": "",
                                                          "min-height": "38"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_list_item_title, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_avatar, {
                                                                  size: "20",
                                                                  class: "mr-2"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                                      "stroke-width": "2",
                                                                      size: "20"
                                                                    }))
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024);
                                                      }), 128))
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]);
                                    }), 128))
                                  ])
                                ]),
                                _: 1
                              })
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
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2, { title: "Height Table" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, {
                        class: "border",
                        elevation: "0"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-table" }, [
                            createVNode(_component_v_table, {
                              class: "month-table",
                              height: "400px"
                            }, {
                              default: withCtx(() => [
                                createVNode("thead", null, [
                                  createVNode("tr", null, [
                                    createVNode("th", { class: "text-h6" }, "Authors"),
                                    createVNode("th", { class: "text-h6" }, "Courses"),
                                    createVNode("th", { class: "text-h6" }, "Users"),
                                    createVNode("th", { class: "text-h6" })
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(heightTableData), (item) => {
                                    return openBlock(), createBlock("tr", {
                                      key: item.name,
                                      class: "month-item"
                                    }, [
                                      createVNode("td", null, [
                                        createVNode("div", { class: "d-flex align-center" }, [
                                          createVNode(_component_v_avatar, {
                                            size: "42",
                                            rounded: "md"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("img", {
                                                src: item.avatar,
                                                alt: "avatar",
                                                height: "42"
                                              }, null, 8, ["src"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode("div", { class: "ml-4" }, [
                                            createVNode("h6", { class: "text-subtitle-1 font-weight-semibold" }, toDisplayString(item.name), 1),
                                            createVNode("div", { class: "text-subtitle-1 text-medium-emphasis mt-1" }, toDisplayString(item.handle), 1)
                                          ])
                                        ])
                                      ]),
                                      createVNode("td", null, [
                                        createVNode("div", { class: "d-flex align-center" }, [
                                          createVNode("div", { class: "d-flex" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.courses, (course) => {
                                              return openBlock(), createBlock(_component_v_chip, {
                                                key: course.status,
                                                rounded: "pill",
                                                class: "mr-2",
                                                color: course.statuscolor,
                                                size: "small"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(course.status), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"]);
                                            }), 128))
                                          ])
                                        ])
                                      ]),
                                      createVNode("td", null, [
                                        createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, toDisplayString(item.users), 1)
                                      ]),
                                      createVNode("td", null, [
                                        createVNode(_component_v_btn, {
                                          size: "30",
                                          icon: "",
                                          variant: "flat",
                                          class: "grey100"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_avatar, { size: "22" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_DotsIcon, {
                                                  size: "20",
                                                  color: "grey100"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_menu, { activator: "parent" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_list, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(tableActionData), (list) => {
                                                      return openBlock(), createBlock(_component_v_list_item, {
                                                        value: "action",
                                                        key: list.listtitle,
                                                        "hide-details": "",
                                                        "min-height": "38"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_list_item_title, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_avatar, {
                                                                size: "20",
                                                                class: "mr-2"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                                                    "stroke-width": "2",
                                                                    size: "20"
                                                                  }))
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createTextVNode(" " + toDisplayString(list.listtitle), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 128))
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]);
                                  }), 128))
                                ])
                              ]),
                              _: 1
                            })
                          ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tables/Height.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Height-D0yGXhzl.mjs.map
