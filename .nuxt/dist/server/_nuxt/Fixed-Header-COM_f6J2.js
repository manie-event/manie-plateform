import { defineComponent, ref, resolveComponent, withCtx, unref, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./UiParentCard-DhlYzLUl.js";
import { h as tableFixedHeaderData } from "./basicTables-ByY6OgyZ.js";
import { _ as _sfc_main$1 } from "./BaseBreadcrumb-DAIjkUfv.js";
import "vue-tabler-icons";
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
  __name: "Fixed-Header",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Fixed Header Table" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Fixed header table",
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
      const _component_ClockHour4Icon = resolveComponent("ClockHour4Icon");
      const _component_CircleIcon = resolveComponent("CircleIcon");
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
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "Header Fixed Table" }, {
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
                                "fixed-header": "",
                                height: "400px"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<thead${_scopeId5}><tr${_scopeId5}><th class="text-h6"${_scopeId5}>Customer</th><th class="text-h6"${_scopeId5}>Status</th><th class="text-h6"${_scopeId5}>Email Address</th><th class="text-h6"${_scopeId5}>Teams</th></tr></thead><tbody${_scopeId5}><!--[-->`);
                                    ssrRenderList(unref(tableFixedHeaderData), (item) => {
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
                                      _push6(`<div class="ml-4"${_scopeId5}><h6 class="text-h6"${_scopeId5}>${ssrInterpolate(item.name)}</h6><div class="text-subtitle-1 text-medium-emphasis"${_scopeId5}>${ssrInterpolate(item.handle)}</div></div></div></td><td${_scopeId5}>`);
                                      if (item.statusoffline) {
                                        _push6(ssrRenderComponent(_component_v_chip, {
                                          rounded: "pill",
                                          class: "font-weight-bold pl-1 pr-2",
                                          color: item.statuscolor,
                                          size: "small"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_ClockHour4Icon, {
                                                size: "15",
                                                class: "mr-1"
                                              }, null, _parent7, _scopeId6));
                                              _push7(` ${ssrInterpolate(item.status)}`);
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
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(ssrRenderComponent(_component_v_chip, {
                                          rounded: "pill",
                                          class: "font-weight-bold pl-1 pr-2",
                                          color: item.statuscolor,
                                          size: "small"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_CircleIcon, {
                                                size: "15",
                                                class: "mr-1"
                                              }, null, _parent7, _scopeId6));
                                              _push7(` ${ssrInterpolate(item.status)}`);
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
                                        }, _parent6, _scopeId5));
                                      }
                                      _push6(`</td><td${_scopeId5}><div class="text-subtitle-1 text-medium-emphasis"${_scopeId5}>${ssrInterpolate(item.email)}</div></td><td${_scopeId5}><div class="d-flex align-center"${_scopeId5}><div class="d-flex"${_scopeId5}><!--[-->`);
                                      ssrRenderList(item.teams, (team) => {
                                        _push6(ssrRenderComponent(_component_v_chip, {
                                          key: team.status,
                                          rounded: "pill",
                                          class: "font-weight-bold px-2 mr-2 bg-" + team.statuscolor,
                                          size: "small"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(team.status)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(team.status), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]--></div></div></td></tr>`);
                                    });
                                    _push6(`<!--]--></tbody>`);
                                  } else {
                                    return [
                                      createVNode("thead", null, [
                                        createVNode("tr", null, [
                                          createVNode("th", { class: "text-h6" }, "Customer"),
                                          createVNode("th", { class: "text-h6" }, "Status"),
                                          createVNode("th", { class: "text-h6" }, "Email Address"),
                                          createVNode("th", { class: "text-h6" }, "Teams")
                                        ])
                                      ]),
                                      createVNode("tbody", null, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(tableFixedHeaderData), (item) => {
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
                                                  createVNode("h6", { class: "text-h6" }, toDisplayString(item.name), 1),
                                                  createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, toDisplayString(item.handle), 1)
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
                                              createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, toDisplayString(item.email), 1)
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
                                    "fixed-header": "",
                                    height: "400px"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("thead", null, [
                                        createVNode("tr", null, [
                                          createVNode("th", { class: "text-h6" }, "Customer"),
                                          createVNode("th", { class: "text-h6" }, "Status"),
                                          createVNode("th", { class: "text-h6" }, "Email Address"),
                                          createVNode("th", { class: "text-h6" }, "Teams")
                                        ])
                                      ]),
                                      createVNode("tbody", null, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(tableFixedHeaderData), (item) => {
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
                                                  createVNode("h6", { class: "text-h6" }, toDisplayString(item.name), 1),
                                                  createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, toDisplayString(item.handle), 1)
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
                                              createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, toDisplayString(item.email), 1)
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
                                  "fixed-header": "",
                                  height: "400px"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("thead", null, [
                                      createVNode("tr", null, [
                                        createVNode("th", { class: "text-h6" }, "Customer"),
                                        createVNode("th", { class: "text-h6" }, "Status"),
                                        createVNode("th", { class: "text-h6" }, "Email Address"),
                                        createVNode("th", { class: "text-h6" }, "Teams")
                                      ])
                                    ]),
                                    createVNode("tbody", null, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(tableFixedHeaderData), (item) => {
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
                                                createVNode("h6", { class: "text-h6" }, toDisplayString(item.name), 1),
                                                createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, toDisplayString(item.handle), 1)
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
                                            createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, toDisplayString(item.email), 1)
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
                    createVNode(_sfc_main$2, { title: "Header Fixed Table" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, {
                          class: "border",
                          elevation: "0"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "border-table" }, [
                              createVNode(_component_v_table, {
                                class: "month-table",
                                "fixed-header": "",
                                height: "400px"
                              }, {
                                default: withCtx(() => [
                                  createVNode("thead", null, [
                                    createVNode("tr", null, [
                                      createVNode("th", { class: "text-h6" }, "Customer"),
                                      createVNode("th", { class: "text-h6" }, "Status"),
                                      createVNode("th", { class: "text-h6" }, "Email Address"),
                                      createVNode("th", { class: "text-h6" }, "Teams")
                                    ])
                                  ]),
                                  createVNode("tbody", null, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(tableFixedHeaderData), (item) => {
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
                                              createVNode("h6", { class: "text-h6" }, toDisplayString(item.name), 1),
                                              createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, toDisplayString(item.handle), 1)
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
                                          createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, toDisplayString(item.email), 1)
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
                  createVNode(_sfc_main$2, { title: "Header Fixed Table" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, {
                        class: "border",
                        elevation: "0"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-table" }, [
                            createVNode(_component_v_table, {
                              class: "month-table",
                              "fixed-header": "",
                              height: "400px"
                            }, {
                              default: withCtx(() => [
                                createVNode("thead", null, [
                                  createVNode("tr", null, [
                                    createVNode("th", { class: "text-h6" }, "Customer"),
                                    createVNode("th", { class: "text-h6" }, "Status"),
                                    createVNode("th", { class: "text-h6" }, "Email Address"),
                                    createVNode("th", { class: "text-h6" }, "Teams")
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(tableFixedHeaderData), (item) => {
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
                                            createVNode("h6", { class: "text-h6" }, toDisplayString(item.name), 1),
                                            createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, toDisplayString(item.handle), 1)
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
                                        createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, toDisplayString(item.email), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tables/Fixed-Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Fixed-Header-COM_f6J2.js.map
