import { defineComponent, ref, resolveComponent, withCtx, unref, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './UiParentCard-DhlYzLUl.mjs';
import { f as darkTableData } from './basicTables-ByY6OgyZ.mjs';
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
  __name: "Dark",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Dark Table" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Dark table",
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
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "Dark Table" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, {
                          class: "border",
                          elevation: "0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_table, {
                                theme: "dark",
                                class: "month-table"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<thead${_scopeId5}><tr${_scopeId5}><th class="text-subtitle-1 font-weight-semibold"${_scopeId5}>Users</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId5}>Project Name</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId5}>Team</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId5}>Status</th><th class="text-subtitle-1 font-weight-semibold"${_scopeId5}>Budget</th></tr></thead><tbody${_scopeId5}><!--[-->`);
                                    ssrRenderList(unref(darkTableData), (item) => {
                                      _push6(`<tr class="month-item"${_scopeId5}><td${_scopeId5}><div class="d-flex align-center"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_v_avatar, { size: "40" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<img${ssrRenderAttr("src", item.avatar)} alt="avatar" height="40"${_scopeId6}>`);
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
                                      }, _parent6, _scopeId5));
                                      _push6(`<div class="ml-4"${_scopeId5}><h6 class="text-subtitle-1 font-weight-semibold text-no-wrap"${_scopeId5}>${ssrInterpolate(item.name)}</h6><div class="text-subtitle-1 text-grey100"${_scopeId5}>${ssrInterpolate(item.post)}</div></div></div></td><td${_scopeId5}><h6 class="text-subtitle-1 text-no-wrap"${_scopeId5}>${ssrInterpolate(item.pname)}</h6></td><td${_scopeId5}><div class="d-flex align-center"${_scopeId5}><div class="ml-2 d-flex flex-row-reverse"${_scopeId5}><!--[-->`);
                                      ssrRenderList(item.teams, (team) => {
                                        _push6(ssrRenderComponent(_component_v_avatar, {
                                          key: team.id,
                                          size: "35",
                                          class: "ml-n2 avtar-border bg-" + team.color
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(team.text)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(team.text), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]--></div></div></td><td${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_v_chip, {
                                        rounded: "pill",
                                        class: "font-weight-bold",
                                        color: item.statuscolor,
                                        size: "small",
                                        label: ""
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.status)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.status), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</td><td${_scopeId5}><h6 class="text-subtitle-1 text-no-wrap"${_scopeId5}>${ssrInterpolate(item.budget)}</h6></td></tr>`);
                                    });
                                    _push6(`<!--]--></tbody>`);
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
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(darkTableData), (item) => {
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
                                                  createVNode("div", { class: "text-subtitle-1 text-grey100" }, toDisplayString(item.post), 1)
                                                ])
                                              ])
                                            ]),
                                            createVNode("td", null, [
                                              createVNode("h6", { class: "text-subtitle-1 text-no-wrap" }, toDisplayString(item.pname), 1)
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
                                              createVNode("h6", { class: "text-subtitle-1 text-no-wrap" }, toDisplayString(item.budget), 1)
                                            ])
                                          ]);
                                        }), 128))
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_table, {
                                  theme: "dark",
                                  class: "month-table"
                                }, {
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
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(darkTableData), (item) => {
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
                                                createVNode("div", { class: "text-subtitle-1 text-grey100" }, toDisplayString(item.post), 1)
                                              ])
                                            ])
                                          ]),
                                          createVNode("td", null, [
                                            createVNode("h6", { class: "text-subtitle-1 text-no-wrap" }, toDisplayString(item.pname), 1)
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
                                            createVNode("h6", { class: "text-subtitle-1 text-no-wrap" }, toDisplayString(item.budget), 1)
                                          ])
                                        ]);
                                      }), 128))
                                    ])
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
                          createVNode(_component_v_card, {
                            class: "border",
                            elevation: "0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_table, {
                                theme: "dark",
                                class: "month-table"
                              }, {
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
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(darkTableData), (item) => {
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
                                              createVNode("div", { class: "text-subtitle-1 text-grey100" }, toDisplayString(item.post), 1)
                                            ])
                                          ])
                                        ]),
                                        createVNode("td", null, [
                                          createVNode("h6", { class: "text-subtitle-1 text-no-wrap" }, toDisplayString(item.pname), 1)
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
                                          createVNode("h6", { class: "text-subtitle-1 text-no-wrap" }, toDisplayString(item.budget), 1)
                                        ])
                                      ]);
                                    }), 128))
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2, { title: "Dark Table" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, {
                          class: "border",
                          elevation: "0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_table, {
                              theme: "dark",
                              class: "month-table"
                            }, {
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(darkTableData), (item) => {
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
                                            createVNode("div", { class: "text-subtitle-1 text-grey100" }, toDisplayString(item.post), 1)
                                          ])
                                        ])
                                      ]),
                                      createVNode("td", null, [
                                        createVNode("h6", { class: "text-subtitle-1 text-no-wrap" }, toDisplayString(item.pname), 1)
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
                                        createVNode("h6", { class: "text-subtitle-1 text-no-wrap" }, toDisplayString(item.budget), 1)
                                      ])
                                    ]);
                                  }), 128))
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2, { title: "Dark Table" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, {
                        class: "border",
                        elevation: "0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_table, {
                            theme: "dark",
                            class: "month-table"
                          }, {
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(darkTableData), (item) => {
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
                                          createVNode("div", { class: "text-subtitle-1 text-grey100" }, toDisplayString(item.post), 1)
                                        ])
                                      ])
                                    ]),
                                    createVNode("td", null, [
                                      createVNode("h6", { class: "text-subtitle-1 text-no-wrap" }, toDisplayString(item.pname), 1)
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
                                      createVNode("h6", { class: "text-subtitle-1 text-no-wrap" }, toDisplayString(item.budget), 1)
                                    ])
                                  ]);
                                }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tables/Dark.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Dark-dJOlIYbK.mjs.map
