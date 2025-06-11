import { defineComponent, ref, resolveComponent, withCtx, createVNode, mergeProps, unref, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _sfc_main$7 } from './UiParentCard-DhlYzLUl.mjs';
import { b as basicTableData1, a as basicTableData2, t as tableActionData, c as basicTableData3, d as basicTableData5, e as basicTableData4 } from './basicTables-ByY6OgyZ.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$6 } from './BaseBreadcrumb-DAIjkUfv.mjs';
import 'vue-tabler-icons';
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

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Table1",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_chip = resolveComponent("v-chip");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        class: "border",
        elevation: "0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-table"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_table, { class: "month-table" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<thead${_scopeId2}><tr${_scopeId2}><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}>Users</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}>Project Name</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}>Team</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}>Status</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}>Budget</th></tr></thead><tbody${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(basicTableData1), (item) => {
                    _push3(`<tr class="month-item"${_scopeId2}><td${_scopeId2}><div class="d-flex align-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_avatar, { size: "40" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", item.avatar)} alt="avatar" height="40"${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: item.avatar,
                              alt: "avatar",
                              height: "40"
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="ml-4"${_scopeId2}><h6 class="text-subtitle-1 font-weight-semibold text-no-wrap"${_scopeId2}>${ssrInterpolate(item.name)}</h6><div class="text-subtitle-1 text-grey100 text-no-wrap mt-1"${_scopeId2}>${ssrInterpolate(item.post)}</div></div></div></td><td${_scopeId2}><h6 class="text-subtitle-1 text-grey100 font-weight-medium text-no-wrap"${_scopeId2}>${ssrInterpolate(item.pname)}</h6></td><td${_scopeId2}><div class="d-flex align-center"${_scopeId2}><div class="ml-2 d-flex flex-row-reverse"${_scopeId2}><!--[-->`);
                    ssrRenderList(item.teams, (team) => {
                      _push3(ssrRenderComponent(_component_v_avatar, {
                        key: team.id,
                        size: "35",
                        class: "ml-n2 avtar-border bg-" + team.color
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(team.text)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(team.text), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div></div></td><td${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_chip, {
                      rounded: "pill",
                      class: "font-weight-bold",
                      color: item.statuscolor,
                      size: "small",
                      label: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.status)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.status), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</td><td${_scopeId2}><h6 class="text-h6"${_scopeId2}>${ssrInterpolate(item.budget)}</h6></td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Users"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Project Name"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Team"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Status"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Budget")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(basicTableData1), (item) => {
                        return openBlock(), createBlock("tr", {
                          key: item.name,
                          class: "month-item"
                        }, [
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(_component_v_avatar, { size: "40" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: item.avatar,
                                    alt: "avatar",
                                    height: "40"
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "ml-4" }, [
                                createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-no-wrap" }, toDisplayString(item.name), 1),
                                createVNode("div", { class: "text-subtitle-1 text-grey100 text-no-wrap mt-1" }, toDisplayString(item.post), 1)
                              ])
                            ])
                          ]),
                          createVNode("td", null, [
                            createVNode("h6", { class: "text-subtitle-1 text-grey100 font-weight-medium text-no-wrap" }, toDisplayString(item.pname), 1)
                          ]),
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode("div", { class: "ml-2 d-flex flex-row-reverse" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.teams, (team) => {
                                  return openBlock(), createBlock(_component_v_avatar, {
                                    key: team.id,
                                    size: "35",
                                    class: "ml-n2 avtar-border bg-" + team.color
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(team.text), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"]);
                                }), 128))
                              ])
                            ])
                          ]),
                          createVNode("td", null, [
                            createVNode(_component_v_chip, {
                              rounded: "pill",
                              class: "font-weight-bold",
                              color: item.statuscolor,
                              size: "small",
                              label: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          createVNode("td", null, [
                            createVNode("h6", { class: "text-h6" }, toDisplayString(item.budget), 1)
                          ])
                        ]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "border-table" }, [
                createVNode(_component_v_table, { class: "month-table" }, {
                  default: withCtx(() => [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Users"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Project Name"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Team"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Status"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Budget")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(basicTableData1), (item) => {
                        return openBlock(), createBlock("tr", {
                          key: item.name,
                          class: "month-item"
                        }, [
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(_component_v_avatar, { size: "40" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: item.avatar,
                                    alt: "avatar",
                                    height: "40"
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "ml-4" }, [
                                createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-no-wrap" }, toDisplayString(item.name), 1),
                                createVNode("div", { class: "text-subtitle-1 text-grey100 text-no-wrap mt-1" }, toDisplayString(item.post), 1)
                              ])
                            ])
                          ]),
                          createVNode("td", null, [
                            createVNode("h6", { class: "text-subtitle-1 text-grey100 font-weight-medium text-no-wrap" }, toDisplayString(item.pname), 1)
                          ]),
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode("div", { class: "ml-2 d-flex flex-row-reverse" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.teams, (team) => {
                                  return openBlock(), createBlock(_component_v_avatar, {
                                    key: team.id,
                                    size: "35",
                                    class: "ml-n2 avtar-border bg-" + team.color
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(team.text), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"]);
                                }), 128))
                              ])
                            ])
                          ]),
                          createVNode("td", null, [
                            createVNode(_component_v_chip, {
                              rounded: "pill",
                              class: "font-weight-bold",
                              color: item.statuscolor,
                              size: "small",
                              label: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          createVNode("td", null, [
                            createVNode("h6", { class: "text-h6" }, toDisplayString(item.budget), 1)
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
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/table/Table1.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Table2",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_DotsVerticalIcon = resolveComponent("DotsVerticalIcon");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        elevation: "0",
        class: "mt-6 border"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-table"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_table, { class: "month-table" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<thead${_scopeId2}><tr${_scopeId2}><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}>User</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}>Project Name</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}>Users</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}>Status</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}></th></tr></thead><tbody${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(basicTableData2), (item) => {
                    _push3(`<tr class="month-item"${_scopeId2}><td${_scopeId2}><div class="d-flex align-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_avatar, { size: "40" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", item.avatar)} alt="avatar" height="40"${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: item.avatar,
                              alt: "avatar",
                              height: "40"
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="ml-4"${_scopeId2}><h6 class="text-subtitle-1 font-weight-semibold text-no-wrap"${_scopeId2}>${ssrInterpolate(item.name)}</h6></div></div></td><td${_scopeId2}><div class="text-subtitle-1 text-grey100 text-no-wrap"${_scopeId2}>${ssrInterpolate(item.post)}</div></td><td${_scopeId2}><div class="d-flex align-center"${_scopeId2}><div class="ml-2 d-flex flex-row-reverse"${_scopeId2}><!--[-->`);
                    ssrRenderList(item.users, (user) => {
                      _push3(ssrRenderComponent(_component_v_avatar, {
                        key: user.id,
                        size: "40",
                        class: "ml-n2 avtar-border"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<img${ssrRenderAttr("src", user.icon)} alt="avatar" height="40"${_scopeId3}>`);
                          } else {
                            return [
                              createVNode("img", {
                                src: user.icon,
                                alt: "avatar",
                                height: "40"
                              }, null, 8, ["src"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div></div></td><td${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_chip, {
                      rounded: "pill",
                      class: "font-weight-bold py-4 px-3",
                      color: item.statuscolor,
                      size: "small"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.status)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.status), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</td><td${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_btn, {
                      size: "30",
                      icon: "",
                      variant: "flat",
                      class: "grey100"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_avatar, { size: "22" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_DotsVerticalIcon, {
                                  size: "20",
                                  color: "grey100"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_DotsVerticalIcon, {
                                    size: "20",
                                    color: "grey100"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_menu, { activator: "parent" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_list, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(unref(tableActionData), (list) => {
                                        _push6(ssrRenderComponent(_component_v_list_item, {
                                          value: "action",
                                          key: list.listtitle,
                                          "hide-details": "",
                                          "min-height": "38"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_v_list_item_title, null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(_component_v_avatar, {
                                                      size: "20",
                                                      class: "mr-2"
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          ssrRenderVNode(_push9, createVNode(resolveDynamicComponent(list.icon), {
                                                            "stroke-width": "2",
                                                            size: "20"
                                                          }, null), _parent9, _scopeId8);
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
                                                    }, _parent8, _scopeId7));
                                                    _push8(` ${ssrInterpolate(list.listtitle)}`);
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
                                              }, _parent7, _scopeId6));
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
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
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
                                }, _parent5, _scopeId4));
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
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_avatar, { size: "22" }, {
                              default: withCtx(() => [
                                createVNode(_component_DotsVerticalIcon, {
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
                    }, _parent3, _scopeId2));
                    _push3(`</td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "User"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Project Name"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Users"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Status"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" })
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(basicTableData2), (item) => {
                        return openBlock(), createBlock("tr", {
                          key: item.name,
                          class: "month-item"
                        }, [
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(_component_v_avatar, { size: "40" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: item.avatar,
                                    alt: "avatar",
                                    height: "40"
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "ml-4" }, [
                                createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-no-wrap" }, toDisplayString(item.name), 1)
                              ])
                            ])
                          ]),
                          createVNode("td", null, [
                            createVNode("div", { class: "text-subtitle-1 text-grey100 text-no-wrap" }, toDisplayString(item.post), 1)
                          ]),
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode("div", { class: "ml-2 d-flex flex-row-reverse" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.users, (user) => {
                                  return openBlock(), createBlock(_component_v_avatar, {
                                    key: user.id,
                                    size: "40",
                                    class: "ml-n2 avtar-border"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: user.icon,
                                        alt: "avatar",
                                        height: "40"
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ])
                            ])
                          ]),
                          createVNode("td", null, [
                            createVNode(_component_v_chip, {
                              rounded: "pill",
                              class: "font-weight-bold py-4 px-3",
                              color: item.statuscolor,
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
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
                                    createVNode(_component_DotsVerticalIcon, {
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
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "border-table" }, [
                createVNode(_component_v_table, { class: "month-table" }, {
                  default: withCtx(() => [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "User"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Project Name"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Users"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Status"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" })
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(basicTableData2), (item) => {
                        return openBlock(), createBlock("tr", {
                          key: item.name,
                          class: "month-item"
                        }, [
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(_component_v_avatar, { size: "40" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: item.avatar,
                                    alt: "avatar",
                                    height: "40"
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "ml-4" }, [
                                createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-no-wrap" }, toDisplayString(item.name), 1)
                              ])
                            ])
                          ]),
                          createVNode("td", null, [
                            createVNode("div", { class: "text-subtitle-1 text-grey100 text-no-wrap" }, toDisplayString(item.post), 1)
                          ]),
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode("div", { class: "ml-2 d-flex flex-row-reverse" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.users, (user) => {
                                  return openBlock(), createBlock(_component_v_avatar, {
                                    key: user.id,
                                    size: "40",
                                    class: "ml-n2 avtar-border"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: user.icon,
                                        alt: "avatar",
                                        height: "40"
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ])
                            ])
                          ]),
                          createVNode("td", null, [
                            createVNode(_component_v_chip, {
                              rounded: "pill",
                              class: "font-weight-bold py-4 px-3",
                              color: item.statuscolor,
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
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
                                    createVNode(_component_DotsVerticalIcon, {
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
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/table/Table2.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Table3",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_ClockHour4Icon = resolveComponent("ClockHour4Icon");
      const _component_CircleIcon = resolveComponent("CircleIcon");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_DotsIcon = resolveComponent("DotsIcon");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        elevation: "0",
        class: "mt-6 border"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-table"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_table, { class: "month-table" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<thead${_scopeId2}><tr${_scopeId2}><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}>Customer</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}>Status</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}>Email Address</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}>Teams</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}></th></tr></thead><tbody${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(basicTableData3), (item) => {
                    _push3(`<tr class="month-item"${_scopeId2}><td${_scopeId2}><div class="d-flex align-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_avatar, { size: "40" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", item.avatar)} alt="avatar" height="40"${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: item.avatar,
                              alt: "avatar",
                              height: "40"
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="ml-4"${_scopeId2}><h6 class="text-subtitle-1 font-weight-semibold text-no-wrap"${_scopeId2}>${ssrInterpolate(item.name)}</h6><div class="text-subtitle-1 text-grey100 text-no-wrap mt-1"${_scopeId2}>${ssrInterpolate(item.handle)}</div></div></div></td><td${_scopeId2}>`);
                    if (item.statusoffline) {
                      _push3(ssrRenderComponent(_component_v_chip, {
                        rounded: "pill",
                        class: "font-weight-bold pl-1 pr-2",
                        color: item.statuscolor,
                        size: "small"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_ClockHour4Icon, {
                              size: "15",
                              class: "mr-1"
                            }, null, _parent4, _scopeId3));
                            _push4(` ${ssrInterpolate(item.status)}`);
                          } else {
                            return [
                              createVNode(_component_ClockHour4Icon, {
                                size: "15",
                                class: "mr-1"
                              }),
                              createTextVNode(" " + toDisplayString(item.status), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(_component_v_chip, {
                        rounded: "pill",
                        class: "font-weight-bold pl-1 pr-2",
                        color: item.statuscolor,
                        size: "small"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_CircleIcon, {
                              size: "15",
                              class: "mr-1"
                            }, null, _parent4, _scopeId3));
                            _push4(` ${ssrInterpolate(item.status)}`);
                          } else {
                            return [
                              createVNode(_component_CircleIcon, {
                                size: "15",
                                class: "mr-1"
                              }),
                              createTextVNode(" " + toDisplayString(item.status), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    }
                    _push3(`</td><td${_scopeId2}><div class="text-subtitle-1 text-grey100"${_scopeId2}>${ssrInterpolate(item.email)}</div></td><td${_scopeId2}><div class="d-flex align-center"${_scopeId2}><div class="d-flex"${_scopeId2}><!--[-->`);
                    ssrRenderList(item.teams, (team) => {
                      _push3(ssrRenderComponent(_component_v_chip, {
                        key: team.status,
                        rounded: "pill",
                        class: "font-weight-bold px-2 mr-2 bg-" + team.statuscolor,
                        size: "small"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(team.status)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(team.status), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div></div></td><td${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_btn, {
                      size: "30",
                      icon: "",
                      variant: "flat",
                      class: "grey100"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_avatar, { size: "22" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_DotsIcon, {
                                  size: "20",
                                  color: "grey100"
                                }, null, _parent5, _scopeId4));
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
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_menu, { activator: "parent" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_list, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(unref(tableActionData), (list) => {
                                        _push6(ssrRenderComponent(_component_v_list_item, {
                                          value: "action",
                                          key: list.listtitle,
                                          "hide-details": "",
                                          "min-height": "38"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_v_list_item_title, null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(_component_v_avatar, {
                                                      size: "20",
                                                      class: "mr-2"
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          ssrRenderVNode(_push9, createVNode(resolveDynamicComponent(list.icon), {
                                                            "stroke-width": "2",
                                                            size: "20"
                                                          }, null), _parent9, _scopeId8);
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
                                                    }, _parent8, _scopeId7));
                                                    _push8(` ${ssrInterpolate(list.listtitle)}`);
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
                                              }, _parent7, _scopeId6));
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
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
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
                                }, _parent5, _scopeId4));
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
                          }, _parent4, _scopeId3));
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
                    }, _parent3, _scopeId2));
                    _push3(`</td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Customer"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Status"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Email Address"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Teams"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" })
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(basicTableData3), (item) => {
                        return openBlock(), createBlock("tr", {
                          key: item.name,
                          class: "month-item"
                        }, [
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(_component_v_avatar, { size: "40" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: item.avatar,
                                    alt: "avatar",
                                    height: "40"
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "ml-4" }, [
                                createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-no-wrap" }, toDisplayString(item.name), 1),
                                createVNode("div", { class: "text-subtitle-1 text-grey100 text-no-wrap mt-1" }, toDisplayString(item.handle), 1)
                              ])
                            ])
                          ]),
                          createVNode("td", null, [
                            item.statusoffline ? (openBlock(), createBlock(_component_v_chip, {
                              key: 0,
                              rounded: "pill",
                              class: "font-weight-bold pl-1 pr-2",
                              color: item.statuscolor,
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ClockHour4Icon, {
                                  size: "15",
                                  class: "mr-1"
                                }),
                                createTextVNode(" " + toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])) : (openBlock(), createBlock(_component_v_chip, {
                              key: 1,
                              rounded: "pill",
                              class: "font-weight-bold pl-1 pr-2",
                              color: item.statuscolor,
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_CircleIcon, {
                                  size: "15",
                                  class: "mr-1"
                                }),
                                createTextVNode(" " + toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"]))
                          ]),
                          createVNode("td", null, [
                            createVNode("div", { class: "text-subtitle-1 text-grey100" }, toDisplayString(item.email), 1)
                          ]),
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode("div", { class: "d-flex" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.teams, (team) => {
                                  return openBlock(), createBlock(_component_v_chip, {
                                    key: team.status,
                                    rounded: "pill",
                                    class: "font-weight-bold px-2 mr-2 bg-" + team.statuscolor,
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(team.status), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"]);
                                }), 128))
                              ])
                            ])
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
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "border-table" }, [
                createVNode(_component_v_table, { class: "month-table" }, {
                  default: withCtx(() => [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Customer"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Status"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Email Address"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Teams"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" })
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(basicTableData3), (item) => {
                        return openBlock(), createBlock("tr", {
                          key: item.name,
                          class: "month-item"
                        }, [
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(_component_v_avatar, { size: "40" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: item.avatar,
                                    alt: "avatar",
                                    height: "40"
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "ml-4" }, [
                                createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-no-wrap" }, toDisplayString(item.name), 1),
                                createVNode("div", { class: "text-subtitle-1 text-grey100 text-no-wrap mt-1" }, toDisplayString(item.handle), 1)
                              ])
                            ])
                          ]),
                          createVNode("td", null, [
                            item.statusoffline ? (openBlock(), createBlock(_component_v_chip, {
                              key: 0,
                              rounded: "pill",
                              class: "font-weight-bold pl-1 pr-2",
                              color: item.statuscolor,
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ClockHour4Icon, {
                                  size: "15",
                                  class: "mr-1"
                                }),
                                createTextVNode(" " + toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])) : (openBlock(), createBlock(_component_v_chip, {
                              key: 1,
                              rounded: "pill",
                              class: "font-weight-bold pl-1 pr-2",
                              color: item.statuscolor,
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_CircleIcon, {
                                  size: "15",
                                  class: "mr-1"
                                }),
                                createTextVNode(" " + toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"]))
                          ]),
                          createVNode("td", null, [
                            createVNode("div", { class: "text-subtitle-1 text-grey100" }, toDisplayString(item.email), 1)
                          ]),
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode("div", { class: "d-flex" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.teams, (team) => {
                                  return openBlock(), createBlock(_component_v_chip, {
                                    key: team.status,
                                    rounded: "pill",
                                    class: "font-weight-bold px-2 mr-2 bg-" + team.statuscolor,
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(team.status), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"]);
                                }), 128))
                              ])
                            ])
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
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/table/Table3.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Table4",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_progress_linear = resolveComponent("v-progress-linear");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_DotsVerticalIcon = resolveComponent("DotsVerticalIcon");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        elevation: "0",
        class: "mt-6 border"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-table" data-v-27e2b489${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_table, { class: "month-table" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<thead data-v-27e2b489${_scopeId2}><tr data-v-27e2b489${_scopeId2}><th class="text-subtitle-1 font-weight-semibold" data-v-27e2b489${_scopeId2}>Invoice</th><th class="text-subtitle-1 font-weight-semibold" data-v-27e2b489${_scopeId2}>Status</th><th class="text-subtitle-1 font-weight-semibold" data-v-27e2b489${_scopeId2}>Customer</th><th class="text-subtitle-1 font-weight-semibold" data-v-27e2b489${_scopeId2}>Progress</th><th class="text-subtitle-1 font-weight-semibold" data-v-27e2b489${_scopeId2}></th></tr></thead><tbody data-v-27e2b489${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(basicTableData4), (item) => {
                    _push3(`<tr class="month-item" data-v-27e2b489${_scopeId2}><td data-v-27e2b489${_scopeId2}><h6 class="text-subtitle-1 font-weight-semibold text-no-wrap" data-v-27e2b489${_scopeId2}>${ssrInterpolate(item.invoice)}</h6></td><td data-v-27e2b489${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_chip, {
                      rounded: "pill",
                      class: "font-weight-medium py-4 pl-1 pr-2",
                      color: item.statuscolor,
                      size: "small"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(item.statusicon), {
                            "stroke-width": "2",
                            size: "18",
                            class: "mr-1"
                          }, null), _parent4, _scopeId3);
                          _push4(` ${ssrInterpolate(item.status)}`);
                        } else {
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent(item.statusicon), {
                              "stroke-width": "2",
                              size: "18",
                              class: "mr-1"
                            })),
                            createTextVNode(" " + toDisplayString(item.status), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</td><td data-v-27e2b489${_scopeId2}><div class="d-flex align-center" data-v-27e2b489${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_avatar, { size: "40" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", item.avatar)} alt="avatar" height="40" data-v-27e2b489${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: item.avatar,
                              alt: "avatar",
                              height: "40"
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="ml-4" data-v-27e2b489${_scopeId2}><h6 class="text-subtitle-1 font-weight-semibold text-no-wrap" data-v-27e2b489${_scopeId2}>${ssrInterpolate(item.name)}</h6><div class="text-subtitle-1 text-no-wrap font-weight-medium text-grey100" data-v-27e2b489${_scopeId2}>${ssrInterpolate(item.handle)}</div></div></div></td><td data-v-27e2b489${_scopeId2}><div class="d-flex align-center" data-v-27e2b489${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_progress_linear, {
                      color: "primary",
                      rounded: "sm",
                      "bg-color": "lightprimary",
                      "model-value": item.progress
                    }, null, _parent3, _scopeId2));
                    _push3(`<div data-v-27e2b489${_scopeId2}><span class="text-subtitle-1 text-medium-emphasis ml-5" data-v-27e2b489${_scopeId2}>${ssrInterpolate(item.progress)}%</span></div></div></td><td data-v-27e2b489${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_btn, {
                      size: "30",
                      icon: "",
                      variant: "flat",
                      class: "grey100"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_avatar, { size: "22" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_DotsVerticalIcon, {
                                  size: "20",
                                  color: "grey100"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_DotsVerticalIcon, {
                                    size: "20",
                                    color: "grey100"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_menu, { activator: "parent" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_list, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(unref(tableActionData), (list) => {
                                        _push6(ssrRenderComponent(_component_v_list_item, {
                                          value: "action",
                                          key: list.listtitle,
                                          "hide-details": "",
                                          "min-height": "38"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_v_list_item_title, null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(_component_v_avatar, {
                                                      size: "20",
                                                      class: "mr-2"
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          ssrRenderVNode(_push9, createVNode(resolveDynamicComponent(list.icon), {
                                                            "stroke-width": "2",
                                                            size: "20"
                                                          }, null), _parent9, _scopeId8);
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
                                                    }, _parent8, _scopeId7));
                                                    _push8(` ${ssrInterpolate(list.listtitle)}`);
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
                                              }, _parent7, _scopeId6));
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
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
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
                                }, _parent5, _scopeId4));
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
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_avatar, { size: "22" }, {
                              default: withCtx(() => [
                                createVNode(_component_DotsVerticalIcon, {
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
                    }, _parent3, _scopeId2));
                    _push3(`</td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Invoice"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Status"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Customer"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Progress"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" })
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(basicTableData4), (item) => {
                        return openBlock(), createBlock("tr", {
                          key: item.name,
                          class: "month-item"
                        }, [
                          createVNode("td", null, [
                            createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-no-wrap" }, toDisplayString(item.invoice), 1)
                          ]),
                          createVNode("td", null, [
                            createVNode(_component_v_chip, {
                              rounded: "pill",
                              class: "font-weight-medium py-4 pl-1 pr-2",
                              color: item.statuscolor,
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(resolveDynamicComponent(item.statusicon), {
                                  "stroke-width": "2",
                                  size: "18",
                                  class: "mr-1"
                                })),
                                createTextVNode(" " + toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(_component_v_avatar, { size: "40" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: item.avatar,
                                    alt: "avatar",
                                    height: "40"
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "ml-4" }, [
                                createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-no-wrap" }, toDisplayString(item.name), 1),
                                createVNode("div", { class: "text-subtitle-1 text-no-wrap font-weight-medium text-grey100" }, toDisplayString(item.handle), 1)
                              ])
                            ])
                          ]),
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(_component_v_progress_linear, {
                                color: "primary",
                                rounded: "sm",
                                "bg-color": "lightprimary",
                                "model-value": item.progress
                              }, null, 8, ["model-value"]),
                              createVNode("div", null, [
                                createVNode("span", { class: "text-subtitle-1 text-medium-emphasis ml-5" }, toDisplayString(item.progress) + "%", 1)
                              ])
                            ])
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
                                    createVNode(_component_DotsVerticalIcon, {
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
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "border-table" }, [
                createVNode(_component_v_table, { class: "month-table" }, {
                  default: withCtx(() => [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Invoice"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Status"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Customer"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Progress"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" })
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(basicTableData4), (item) => {
                        return openBlock(), createBlock("tr", {
                          key: item.name,
                          class: "month-item"
                        }, [
                          createVNode("td", null, [
                            createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-no-wrap" }, toDisplayString(item.invoice), 1)
                          ]),
                          createVNode("td", null, [
                            createVNode(_component_v_chip, {
                              rounded: "pill",
                              class: "font-weight-medium py-4 pl-1 pr-2",
                              color: item.statuscolor,
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(resolveDynamicComponent(item.statusicon), {
                                  "stroke-width": "2",
                                  size: "18",
                                  class: "mr-1"
                                })),
                                createTextVNode(" " + toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(_component_v_avatar, { size: "40" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: item.avatar,
                                    alt: "avatar",
                                    height: "40"
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "ml-4" }, [
                                createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-no-wrap" }, toDisplayString(item.name), 1),
                                createVNode("div", { class: "text-subtitle-1 text-no-wrap font-weight-medium text-grey100" }, toDisplayString(item.handle), 1)
                              ])
                            ])
                          ]),
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(_component_v_progress_linear, {
                                color: "primary",
                                rounded: "sm",
                                "bg-color": "lightprimary",
                                "model-value": item.progress
                              }, null, 8, ["model-value"]),
                              createVNode("div", null, [
                                createVNode("span", { class: "text-subtitle-1 text-medium-emphasis ml-5" }, toDisplayString(item.progress) + "%", 1)
                              ])
                            ])
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
                                    createVNode(_component_DotsVerticalIcon, {
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
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/table/Table4.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Table4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-27e2b489"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Table5",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
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
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        elevation: "0",
        class: "mt-6 border"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-table"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_table, { class: "month-table" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<thead${_scopeId2}><tr${_scopeId2}><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}>Authors</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}>Courses</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}>Users</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId2}></th></tr></thead><tbody${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(basicTableData5), (item) => {
                    _push3(`<tr class="month-item"${_scopeId2}><td${_scopeId2}><div class="d-flex align-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_avatar, {
                      size: "42",
                      rounded: "md"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", item.avatar)} alt="avatar" height="42"${_scopeId3}>`);
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
                    }, _parent3, _scopeId2));
                    _push3(`<div class="ml-4"${_scopeId2}><h6 class="text-subtitle-1 font-weight-semibold text-no-wrap"${_scopeId2}>${ssrInterpolate(item.name)}</h6><div class="text-subtitle-1 text-grey100 text-no-wrap mt-1"${_scopeId2}>${ssrInterpolate(item.handle)}</div></div></div></td><td${_scopeId2}><div class="d-flex align-center"${_scopeId2}><div class="d-flex"${_scopeId2}><!--[-->`);
                    ssrRenderList(item.courses, (course) => {
                      _push3(ssrRenderComponent(_component_v_chip, {
                        key: course.status,
                        rounded: "pill",
                        class: "mr-2",
                        color: course.statuscolor,
                        size: "small"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(course.status)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(course.status), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div></div></td><td${_scopeId2}><div class="text-subtitle-1 text-grey100"${_scopeId2}>${ssrInterpolate(item.users)}</div></td><td${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_btn, {
                      size: "30",
                      icon: "",
                      variant: "flat",
                      class: "grey100"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_avatar, { size: "22" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_DotsIcon, {
                                  size: "20",
                                  color: "grey100"
                                }, null, _parent5, _scopeId4));
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
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_menu, { activator: "parent" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_list, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(unref(tableActionData), (list) => {
                                        _push6(ssrRenderComponent(_component_v_list_item, {
                                          value: "action",
                                          key: list.listtitle,
                                          "hide-details": "",
                                          "min-height": "38"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_v_list_item_title, null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(_component_v_avatar, {
                                                      size: "20",
                                                      class: "mr-2"
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          ssrRenderVNode(_push9, createVNode(resolveDynamicComponent(list.icon), {
                                                            "stroke-width": "2",
                                                            size: "20"
                                                          }, null), _parent9, _scopeId8);
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
                                                    }, _parent8, _scopeId7));
                                                    _push8(` ${ssrInterpolate(list.listtitle)}`);
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
                                              }, _parent7, _scopeId6));
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
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
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
                                }, _parent5, _scopeId4));
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
                          }, _parent4, _scopeId3));
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
                    }, _parent3, _scopeId2));
                    _push3(`</td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Authors"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Courses"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Users"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" })
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(basicTableData5), (item) => {
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
                                createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-no-wrap" }, toDisplayString(item.name), 1),
                                createVNode("div", { class: "text-subtitle-1 text-grey100 text-no-wrap mt-1" }, toDisplayString(item.handle), 1)
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
                            createVNode("div", { class: "text-subtitle-1 text-grey100" }, toDisplayString(item.users), 1)
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
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "border-table" }, [
                createVNode(_component_v_table, { class: "month-table" }, {
                  default: withCtx(() => [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Authors"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Courses"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" }, "Users"),
                        createVNode("th", { class: "text-subtitle-1 font-weight-semibold" })
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(basicTableData5), (item) => {
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
                                createVNode("h6", { class: "text-subtitle-1 font-weight-semibold text-no-wrap" }, toDisplayString(item.name), 1),
                                createVNode("div", { class: "text-subtitle-1 text-grey100 text-no-wrap mt-1" }, toDisplayString(item.handle), 1)
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
                            createVNode("div", { class: "text-subtitle-1 text-grey100" }, toDisplayString(item.users), 1)
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
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/table/Table5.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Basic",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Basic Tables" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Basic tables",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$6, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$7, { title: "Basic Table" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$5, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$4, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$3, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(Table4, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$1, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$5),
                          createVNode(_sfc_main$4),
                          createVNode(_sfc_main$3),
                          createVNode(Table4),
                          createVNode(_sfc_main$1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$7, { title: "Basic Table" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$5),
                        createVNode(_sfc_main$4),
                        createVNode(_sfc_main$3),
                        createVNode(Table4),
                        createVNode(_sfc_main$1)
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
                  createVNode(_sfc_main$7, { title: "Basic Table" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$5),
                      createVNode(_sfc_main$4),
                      createVNode(_sfc_main$3),
                      createVNode(Table4),
                      createVNode(_sfc_main$1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tables/Basic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Basic-DX52lqjx.mjs.map
