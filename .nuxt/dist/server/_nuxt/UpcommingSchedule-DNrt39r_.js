import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as __nuxt_component_0 } from "./nuxt-link-DZ3wFR7I.js";
import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, unref, createBlock, openBlock, Fragment, renderList, useSSRContext, ref, toDisplayString } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { m as user4, j as img5, l as user3, R as user2, h as user1 } from "../server.mjs";
const shape2 = publicAssetsURL("/images/svgs/danger-shap.svg");
const _imports_0$1 = publicAssetsURL("/images/svgs/info-shap.svg");
const shape1 = publicAssetsURL("/images/svgs/warning-shap.svg");
const textCardsData = [
  {
    icon: "ruble-linear",
    num: "2358",
    percent: "+23%",
    title: "Sales",
    shape: shape1
  },
  {
    icon: "archive-down-minimlistic-line-duotone",
    num: "356",
    percent: "+8%",
    title: "Refunds",
    shape: shape2
  },
  {
    icon: "dollar-linear",
    num: "$23.8K",
    percent: "-3%",
    title: "Earnings",
    shape: _imports_0$1
  },
  {
    icon: "ruble-linear",
    num: "2358",
    percent: "+23%",
    title: "Sales",
    shape: shape1
  }
];
const profileImgData = [
  {
    img: user4
  },
  {
    img: img5
  },
  {
    img: user3
  },
  {
    img: user2
  }
];
const projectTableData = [
  {
    img: user1,
    activestate: "",
    leadname: "Mark J. Freeman",
    leademail: "Developer",
    projectname: "$80/hour",
    statuscolor: "success",
    statustext: "Available",
    skill: "HTML"
  },
  {
    img: user4,
    activestate: "active",
    leadname: "Nina R. Oldman",
    leademail: "Designer",
    projectname: "$70/hour",
    statuscolor: "primary",
    statustext: "On Holiday",
    skill: "JavaScript"
  },
  {
    img: user3,
    activestate: "",
    leadname: "Arya H. Shah",
    leademail: "Developer",
    projectname: "$40/hour",
    statuscolor: "error",
    statustext: "Absent",
    skill: "React"
  },
  {
    img: img5,
    activestate: "",
    leadname: "June R. Smith",
    leademail: "Designer",
    projectname: "$20/hour",
    statuscolor: "warning",
    statustext: "On Leave",
    skill: "Vuejs"
  },
  {
    img: user2,
    activestate: "",
    leadname: "Mark J. Freeman",
    leademail: "Developer",
    projectname: "$65/hour",
    statuscolor: "indigo",
    statustext: "Available",
    skill: "Angular"
  }
];
const _imports_1 = publicAssetsURL("/images/svgs/idea.svg");
const _imports_0 = publicAssetsURL("/images/backgrounds/gifts.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FigmaCard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-100 bg-lighterror"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_card_item, { class: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_avatar, {
                    rounded: "lg",
                    class: "w-100 mt-2",
                    size: "135"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img height="130"${ssrRenderAttr("src", _imports_0)}${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            height: "130",
                            src: _imports_0
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_avatar, {
                      rounded: "lg",
                      class: "w-100 mt-2",
                      size: "135"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          height: "130",
                          src: _imports_0
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_v_card_item, { class: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/",
                    class: "text-h6 font-weight-semibold text-decoration-none color-inherit"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Figma Tips and Tricks with Stephan`);
                      } else {
                        return [
                          createTextVNode("Figma Tips and Tricks with Stephan")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="text-subtitle-1 text-grey100 mt-2 mb-4"${_scopeId2}> Checkout latest events going to happen in USA. </div><div class="d-flex align-center pb-1"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(profileImgData), (item) => {
                    _push3(ssrRenderComponent(_component_v_avatar, {
                      key: item.img,
                      size: "32",
                      class: "mr-1"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", item.img)} alt="profile" height="32" width="32"${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: item.img,
                              alt: "profile",
                              height: "32",
                              width: "32"
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--><p class="text-subtitle-1 text-grey100 ml-2"${_scopeId2}>+18</p></div>`);
                } else {
                  return [
                    createVNode(_component_NuxtLink, {
                      to: "/",
                      class: "text-h6 font-weight-semibold text-decoration-none color-inherit"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Figma Tips and Tricks with Stephan")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "text-subtitle-1 text-grey100 mt-2 mb-4" }, " Checkout latest events going to happen in USA. "),
                    createVNode("div", { class: "d-flex align-center pb-1" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                        return openBlock(), createBlock(_component_v_avatar, {
                          key: item.img,
                          size: "32",
                          class: "mr-1"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: item.img,
                              alt: "profile",
                              height: "32",
                              width: "32"
                            }, null, 8, ["src"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128)),
                      createVNode("p", { class: "text-subtitle-1 text-grey100 ml-2" }, "+18")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "w-100 bg-lighterror" }, [
                createVNode(_component_v_card_item, { class: "" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_avatar, {
                      rounded: "lg",
                      class: "w-100 mt-2",
                      size: "135"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          height: "130",
                          src: _imports_0
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_v_card_item, { class: "" }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, {
                    to: "/",
                    class: "text-h6 font-weight-semibold text-decoration-none color-inherit"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Figma Tips and Tricks with Stephan")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "text-subtitle-1 text-grey100 mt-2 mb-4" }, " Checkout latest events going to happen in USA. "),
                  createVNode("div", { class: "d-flex align-center pb-1" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                      return openBlock(), createBlock(_component_v_avatar, {
                        key: item.img,
                        size: "32",
                        class: "mr-1"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: item.img,
                            alt: "profile",
                            height: "32",
                            width: "32"
                          }, null, 8, ["src"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    createVNode("p", { class: "text-subtitle-1 text-grey100 ml-2" }, "+18")
                  ])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboards/dashboard2/FigmaCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UpcommingSchedule",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      { title: "Action" },
      { title: "Another action" },
      { title: "Something else here" }
    ]);
    const tab = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VCard = resolveComponent("VCard");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_DotsVerticalIcon = resolveComponent("DotsVerticalIcon");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_window = resolveComponent("v-window");
      const _component_v_window_item = resolveComponent("v-window-item");
      const _component_perfect_scrollbar = resolveComponent("perfect-scrollbar");
      const _component_ClockIcon = resolveComponent("ClockIcon");
      const _component_v_avatar = resolveComponent("v-avatar");
      _push(ssrRenderComponent(_component_VCard, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center justify-space-between"${_scopeId2}><div${_scopeId2}><h5 class="text-h5 mb-1 font-weight-semibold"${_scopeId2}>Upcoming Scheduls</h5></div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_menu, {
                    bottom: "",
                    left: ""
                  }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, mergeProps({
                          icon: "",
                          color: "inherit"
                        }, props, { flat: "" }), {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DotsVerticalIcon, {
                                "stroke-width": "1.5",
                                size: "24",
                                class: "text-grey100"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_DotsVerticalIcon, {
                                  "stroke-width": "1.5",
                                  size: "24",
                                  class: "text-grey100"
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, mergeProps({
                            icon: "",
                            color: "inherit"
                          }, props, { flat: "" }), {
                            default: withCtx(() => [
                              createVNode(_component_DotsVerticalIcon, {
                                "stroke-width": "1.5",
                                size: "24",
                                class: "text-grey100"
                              })
                            ]),
                            _: 2
                          }, 1040)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list, { density: "compact" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(items.value, (item, i) => {
                                _push5(ssrRenderComponent(_component_v_list_item, {
                                  key: i,
                                  value: i
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_list_item_title, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.title)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.title), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_list_item_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, i) => {
                                  return openBlock(), createBlock(_component_v_list_item, {
                                    key: i,
                                    value: i
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list, { density: "compact" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, i) => {
                                return openBlock(), createBlock(_component_v_list_item, {
                                  key: i,
                                  value: i
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_v_row, { class: "justify-center mt-3 upcomming-schedule tabs_group" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "12"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, {
                                elevation: "0",
                                rounded: "md"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_tabs, {
                                      modelValue: tab.value,
                                      "onUpdate:modelValue": ($event) => tab.value = $event,
                                      "bg-color": "transparent",
                                      "min-height": "40",
                                      height: "40",
                                      grow: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_tab, {
                                            value: "Account",
                                            color: "white",
                                            class: "text-h6",
                                            rounded: "pill"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`1 to 3`);
                                              } else {
                                                return [
                                                  createTextVNode("1 to 3")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_tab, {
                                            value: "Notification",
                                            color: "white",
                                            class: "text-h6",
                                            rounded: "pill"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`4 to 7`);
                                              } else {
                                                return [
                                                  createTextVNode("4 to 7")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_tab, {
                                            value: "Bills",
                                            color: "white",
                                            class: "text-h6",
                                            rounded: "pill"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`8 to 10`);
                                              } else {
                                                return [
                                                  createTextVNode("8 to 10")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_tab, {
                                              value: "Account",
                                              color: "white",
                                              class: "text-h6",
                                              rounded: "pill"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("1 to 3")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_tab, {
                                              value: "Notification",
                                              color: "white",
                                              class: "text-h6",
                                              rounded: "pill"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("4 to 7")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_tab, {
                                              value: "Bills",
                                              color: "white",
                                              class: "text-h6",
                                              rounded: "pill"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("8 to 10")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_divider, { class: "mt-1" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_tabs, {
                                        modelValue: tab.value,
                                        "onUpdate:modelValue": ($event) => tab.value = $event,
                                        "bg-color": "transparent",
                                        "min-height": "40",
                                        height: "40",
                                        grow: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_tab, {
                                            value: "Account",
                                            color: "white",
                                            class: "text-h6",
                                            rounded: "pill"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("1 to 3")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_tab, {
                                            value: "Notification",
                                            color: "white",
                                            class: "text-h6",
                                            rounded: "pill"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("4 to 7")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_tab, {
                                            value: "Bills",
                                            color: "white",
                                            class: "text-h6",
                                            rounded: "pill"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("8 to 10")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_divider, { class: "mt-1" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_window, {
                                modelValue: tab.value,
                                "onUpdate:modelValue": ($event) => tab.value = $event
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_window_item, { value: "Account" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_perfect_scrollbar, {
                                            style: { "height": "360px" },
                                            class: "mt-6 pt-4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="d-flex"${_scopeId7}><div${_scopeId7}><ul${_scopeId7}><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>8:00</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>8:30</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>9:00</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>9:30</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>10:00</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>10:30</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>11:00</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>11:30</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>12:00</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>12:30</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>13:00</p></li><li${_scopeId7}><p class="mb-0 text-subtitle-1 text-grey100"${_scopeId7}>13:30</p></li></ul></div><div class="flex-grow-1 flex-shrink-0 mx-4"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(_component_v_card, {
                                                  elevation: "10",
                                                  class: "border-left-indigo mt-7",
                                                  rounded: "md"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<div class="pa-4"${_scopeId8}><h6 class="text-h6 font-weight-semibold"${_scopeId8}>Marketing Meeting</h6><div class="d-flex align-center mt-2"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_ClockIcon, {
                                                        "stroke-width": "1.5",
                                                        size: "18",
                                                        class: "text-grey100"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`<span class="text-subtitle-1 ml-1 text-grey100"${_scopeId8}>08:30 - 10:00</span></div><div class="d-flex align-center mt-12 gap-3"${_scopeId8}><div${_scopeId8}><!--[-->`);
                                                      ssrRenderList(unref(profileImgData), (item) => {
                                                        _push9(ssrRenderComponent(_component_v_avatar, {
                                                          key: item.img,
                                                          size: "32",
                                                          class: "mr-n1"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`<img${ssrRenderAttr("src", item.img)} alt="profile" height="32" width="32"${_scopeId9}>`);
                                                            } else {
                                                              return [
                                                                createVNode("img", {
                                                                  src: item.img,
                                                                  alt: "profile",
                                                                  height: "32",
                                                                  width: "32"
                                                                }, null, 8, ["src"])
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      });
                                                      _push9(`<!--]--></div><p class="text-subtitle-1 text-grey100"${_scopeId8}>+18</p></div></div>`);
                                                    } else {
                                                      return [
                                                        createVNode("div", { class: "pa-4" }, [
                                                          createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                          createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                            createVNode(_component_ClockIcon, {
                                                              "stroke-width": "1.5",
                                                              size: "18",
                                                              class: "text-grey100"
                                                            }),
                                                            createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                          ]),
                                                          createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                            createVNode("div", null, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                return openBlock(), createBlock(_component_v_avatar, {
                                                                  key: item.img,
                                                                  size: "32",
                                                                  class: "mr-n1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("img", {
                                                                      src: item.img,
                                                                      alt: "profile",
                                                                      height: "32",
                                                                      width: "32"
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ]),
                                                            createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                          ])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_card, {
                                                  elevation: "10",
                                                  class: "border-left-success mt-7",
                                                  rounded: "md"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<div class="pa-4"${_scopeId8}><h6 class="text-h6 font-weight-semibold"${_scopeId8}>Applied mathematics</h6><div class="d-flex align-center mt-2"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_ClockIcon, {
                                                        "stroke-width": "1.5",
                                                        size: "18",
                                                        class: "text-grey100"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`<span class="text-subtitle-1 ml-1 text-grey100"${_scopeId8}>10:15 - 11:45</span></div><div class="d-flex align-center mt-12 gap-3"${_scopeId8}><div${_scopeId8}><!--[-->`);
                                                      ssrRenderList(unref(profileImgData), (item) => {
                                                        _push9(ssrRenderComponent(_component_v_avatar, {
                                                          key: item.img,
                                                          size: "32",
                                                          class: "mr-n1"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`<img${ssrRenderAttr("src", item.img)} alt="profile" height="32" width="32"${_scopeId9}>`);
                                                            } else {
                                                              return [
                                                                createVNode("img", {
                                                                  src: item.img,
                                                                  alt: "profile",
                                                                  height: "32",
                                                                  width: "32"
                                                                }, null, 8, ["src"])
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      });
                                                      _push9(`<!--]--></div><p class="text-subtitle-1 text-grey100"${_scopeId8}>+18</p></div></div>`);
                                                    } else {
                                                      return [
                                                        createVNode("div", { class: "pa-4" }, [
                                                          createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                          createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                            createVNode(_component_ClockIcon, {
                                                              "stroke-width": "1.5",
                                                              size: "18",
                                                              class: "text-grey100"
                                                            }),
                                                            createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                          ]),
                                                          createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                            createVNode("div", null, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                return openBlock(), createBlock(_component_v_avatar, {
                                                                  key: item.img,
                                                                  size: "32",
                                                                  class: "mr-n1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("img", {
                                                                      src: item.img,
                                                                      alt: "profile",
                                                                      height: "32",
                                                                      width: "32"
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ]),
                                                            createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                          ])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_card, {
                                                  elevation: "10",
                                                  class: "border-left-error mt-7",
                                                  rounded: "md"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<div class="pa-4"${_scopeId8}><h6 class="text-h6 font-weight-semibold"${_scopeId8}>SEO Session with Team</h6><div class="d-flex align-center mt-2"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_ClockIcon, {
                                                        "stroke-width": "1.5",
                                                        size: "18",
                                                        class: "text-grey100"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`<span class="text-subtitle-1 ml-1 text-grey100"${_scopeId8}>12:00 - 13:25</span></div><div class="d-flex align-center mt-12 gap-3"${_scopeId8}><div${_scopeId8}><!--[-->`);
                                                      ssrRenderList(unref(profileImgData), (item) => {
                                                        _push9(ssrRenderComponent(_component_v_avatar, {
                                                          key: item.img,
                                                          size: "32",
                                                          class: "mr-n1"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`<img${ssrRenderAttr("src", item.img)} alt="profile" height="32" width="32"${_scopeId9}>`);
                                                            } else {
                                                              return [
                                                                createVNode("img", {
                                                                  src: item.img,
                                                                  alt: "profile",
                                                                  height: "32",
                                                                  width: "32"
                                                                }, null, 8, ["src"])
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      });
                                                      _push9(`<!--]--></div><p class="text-subtitle-1 text-grey100"${_scopeId8}>+18</p></div></div>`);
                                                    } else {
                                                      return [
                                                        createVNode("div", { class: "pa-4" }, [
                                                          createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                          createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                            createVNode(_component_ClockIcon, {
                                                              "stroke-width": "1.5",
                                                              size: "18",
                                                              class: "text-grey100"
                                                            }),
                                                            createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                          ]),
                                                          createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                            createVNode("div", null, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                return openBlock(), createBlock(_component_v_avatar, {
                                                                  key: item.img,
                                                                  size: "32",
                                                                  class: "mr-n1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("img", {
                                                                      src: item.img,
                                                                      alt: "profile",
                                                                      height: "32",
                                                                      width: "32"
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ]),
                                                            createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                          ])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`</div></div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "d-flex" }, [
                                                    createVNode("div", null, [
                                                      createVNode("ul", null, [
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:00")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:30")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:00")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:30")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:00")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:30")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:00")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:30")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:00")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:30")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "13:00")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-0 text-subtitle-1 text-grey100" }, "13:30")
                                                        ])
                                                      ])
                                                    ]),
                                                    createVNode("div", { class: "flex-grow-1 flex-shrink-0 mx-4" }, [
                                                      createVNode(_component_v_card, {
                                                        elevation: "10",
                                                        class: "border-left-indigo mt-7",
                                                        rounded: "md"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "pa-4" }, [
                                                            createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                            createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                              createVNode(_component_ClockIcon, {
                                                                "stroke-width": "1.5",
                                                                size: "18",
                                                                class: "text-grey100"
                                                              }),
                                                              createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                            ]),
                                                            createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                              createVNode("div", null, [
                                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                  return openBlock(), createBlock(_component_v_avatar, {
                                                                    key: item.img,
                                                                    size: "32",
                                                                    class: "mr-n1"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode("img", {
                                                                        src: item.img,
                                                                        alt: "profile",
                                                                        height: "32",
                                                                        width: "32"
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024);
                                                                }), 128))
                                                              ]),
                                                              createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                            ])
                                                          ])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_card, {
                                                        elevation: "10",
                                                        class: "border-left-success mt-7",
                                                        rounded: "md"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "pa-4" }, [
                                                            createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                            createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                              createVNode(_component_ClockIcon, {
                                                                "stroke-width": "1.5",
                                                                size: "18",
                                                                class: "text-grey100"
                                                              }),
                                                              createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                            ]),
                                                            createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                              createVNode("div", null, [
                                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                  return openBlock(), createBlock(_component_v_avatar, {
                                                                    key: item.img,
                                                                    size: "32",
                                                                    class: "mr-n1"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode("img", {
                                                                        src: item.img,
                                                                        alt: "profile",
                                                                        height: "32",
                                                                        width: "32"
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024);
                                                                }), 128))
                                                              ]),
                                                              createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                            ])
                                                          ])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_card, {
                                                        elevation: "10",
                                                        class: "border-left-error mt-7",
                                                        rounded: "md"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "pa-4" }, [
                                                            createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                            createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                              createVNode(_component_ClockIcon, {
                                                                "stroke-width": "1.5",
                                                                size: "18",
                                                                class: "text-grey100"
                                                              }),
                                                              createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                            ]),
                                                            createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                              createVNode("div", null, [
                                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                  return openBlock(), createBlock(_component_v_avatar, {
                                                                    key: item.img,
                                                                    size: "32",
                                                                    class: "mr-n1"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode("img", {
                                                                        src: item.img,
                                                                        alt: "profile",
                                                                        height: "32",
                                                                        width: "32"
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024);
                                                                }), 128))
                                                              ]),
                                                              createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                            ])
                                                          ])
                                                        ]),
                                                        _: 1
                                                      })
                                                    ])
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_perfect_scrollbar, {
                                              style: { "height": "360px" },
                                              class: "mt-6 pt-4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex" }, [
                                                  createVNode("div", null, [
                                                    createVNode("ul", null, [
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:00")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:30")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:00")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:30")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:00")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:30")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:00")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:30")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:00")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:30")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "13:00")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-0 text-subtitle-1 text-grey100" }, "13:30")
                                                      ])
                                                    ])
                                                  ]),
                                                  createVNode("div", { class: "flex-grow-1 flex-shrink-0 mx-4" }, [
                                                    createVNode(_component_v_card, {
                                                      elevation: "10",
                                                      class: "border-left-indigo mt-7",
                                                      rounded: "md"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "pa-4" }, [
                                                          createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                          createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                            createVNode(_component_ClockIcon, {
                                                              "stroke-width": "1.5",
                                                              size: "18",
                                                              class: "text-grey100"
                                                            }),
                                                            createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                          ]),
                                                          createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                            createVNode("div", null, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                return openBlock(), createBlock(_component_v_avatar, {
                                                                  key: item.img,
                                                                  size: "32",
                                                                  class: "mr-n1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("img", {
                                                                      src: item.img,
                                                                      alt: "profile",
                                                                      height: "32",
                                                                      width: "32"
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ]),
                                                            createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                          ])
                                                        ])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_card, {
                                                      elevation: "10",
                                                      class: "border-left-success mt-7",
                                                      rounded: "md"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "pa-4" }, [
                                                          createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                          createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                            createVNode(_component_ClockIcon, {
                                                              "stroke-width": "1.5",
                                                              size: "18",
                                                              class: "text-grey100"
                                                            }),
                                                            createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                          ]),
                                                          createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                            createVNode("div", null, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                return openBlock(), createBlock(_component_v_avatar, {
                                                                  key: item.img,
                                                                  size: "32",
                                                                  class: "mr-n1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("img", {
                                                                      src: item.img,
                                                                      alt: "profile",
                                                                      height: "32",
                                                                      width: "32"
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ]),
                                                            createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                          ])
                                                        ])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_card, {
                                                      elevation: "10",
                                                      class: "border-left-error mt-7",
                                                      rounded: "md"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "pa-4" }, [
                                                          createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                          createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                            createVNode(_component_ClockIcon, {
                                                              "stroke-width": "1.5",
                                                              size: "18",
                                                              class: "text-grey100"
                                                            }),
                                                            createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                          ]),
                                                          createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                            createVNode("div", null, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                return openBlock(), createBlock(_component_v_avatar, {
                                                                  key: item.img,
                                                                  size: "32",
                                                                  class: "mr-n1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("img", {
                                                                      src: item.img,
                                                                      alt: "profile",
                                                                      height: "32",
                                                                      width: "32"
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ]),
                                                            createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                          ])
                                                        ])
                                                      ]),
                                                      _: 1
                                                    })
                                                  ])
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_window_item, { value: "Notification" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_perfect_scrollbar, {
                                            style: { "height": "360px" },
                                            class: "mt-6 pt-4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="d-flex"${_scopeId7}><div${_scopeId7}><ul${_scopeId7}><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>8:00</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>8:30</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>9:00</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>9:30</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>10:00</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>10:30</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>11:00</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>11:30</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>12:00</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>12:30</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>13:00</p></li><li${_scopeId7}><p class="mb-0 text-subtitle-1 text-grey100"${_scopeId7}>13:30</p></li></ul></div><div class="flex-grow-1 flex-shrink-0 mx-4"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(_component_v_card, {
                                                  elevation: "10",
                                                  class: "border-left-indigo mt-7",
                                                  rounded: "md"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<div class="pa-4"${_scopeId8}><h6 class="text-h6 font-weight-semibold"${_scopeId8}>Marketing Meeting</h6><div class="d-flex align-center mt-2"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_ClockIcon, {
                                                        "stroke-width": "1.5",
                                                        size: "18",
                                                        class: "text-grey100"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`<span class="text-subtitle-1 ml-1 text-grey100"${_scopeId8}>08:30 - 10:00</span></div><div class="d-flex align-center gap-3 mt-12"${_scopeId8}><div${_scopeId8}><!--[-->`);
                                                      ssrRenderList(unref(profileImgData), (item) => {
                                                        _push9(ssrRenderComponent(_component_v_avatar, {
                                                          key: item.img,
                                                          size: "32",
                                                          class: "mr-n1"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`<img${ssrRenderAttr("src", item.img)} alt="profile" height="32" width="32"${_scopeId9}>`);
                                                            } else {
                                                              return [
                                                                createVNode("img", {
                                                                  src: item.img,
                                                                  alt: "profile",
                                                                  height: "32",
                                                                  width: "32"
                                                                }, null, 8, ["src"])
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      });
                                                      _push9(`<!--]--></div><p class="text-subtitle-1 text-grey100"${_scopeId8}>+18</p></div></div>`);
                                                    } else {
                                                      return [
                                                        createVNode("div", { class: "pa-4" }, [
                                                          createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                          createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                            createVNode(_component_ClockIcon, {
                                                              "stroke-width": "1.5",
                                                              size: "18",
                                                              class: "text-grey100"
                                                            }),
                                                            createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                          ]),
                                                          createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                            createVNode("div", null, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                return openBlock(), createBlock(_component_v_avatar, {
                                                                  key: item.img,
                                                                  size: "32",
                                                                  class: "mr-n1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("img", {
                                                                      src: item.img,
                                                                      alt: "profile",
                                                                      height: "32",
                                                                      width: "32"
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ]),
                                                            createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                          ])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_card, {
                                                  elevation: "10",
                                                  class: "border-left-success mt-7",
                                                  rounded: "md"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<div class="pa-4"${_scopeId8}><h6 class="text-h6 font-weight-semibold"${_scopeId8}>Applied mathematics</h6><div class="d-flex align-center mt-2"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_ClockIcon, {
                                                        "stroke-width": "1.5",
                                                        size: "18",
                                                        class: "text-grey100"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`<span class="text-subtitle-1 ml-1 text-grey100"${_scopeId8}>10:15 - 11:45</span></div><div class="d-flex align-center gap-3 mt-12"${_scopeId8}><div${_scopeId8}><!--[-->`);
                                                      ssrRenderList(unref(profileImgData), (item) => {
                                                        _push9(ssrRenderComponent(_component_v_avatar, {
                                                          key: item.img,
                                                          size: "32",
                                                          class: "mr-n1"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`<img${ssrRenderAttr("src", item.img)} alt="profile" height="32" width="32"${_scopeId9}>`);
                                                            } else {
                                                              return [
                                                                createVNode("img", {
                                                                  src: item.img,
                                                                  alt: "profile",
                                                                  height: "32",
                                                                  width: "32"
                                                                }, null, 8, ["src"])
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      });
                                                      _push9(`<!--]--></div><p class="text-subtitle-1 text-grey100"${_scopeId8}>+18</p></div></div>`);
                                                    } else {
                                                      return [
                                                        createVNode("div", { class: "pa-4" }, [
                                                          createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                          createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                            createVNode(_component_ClockIcon, {
                                                              "stroke-width": "1.5",
                                                              size: "18",
                                                              class: "text-grey100"
                                                            }),
                                                            createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                          ]),
                                                          createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                            createVNode("div", null, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                return openBlock(), createBlock(_component_v_avatar, {
                                                                  key: item.img,
                                                                  size: "32",
                                                                  class: "mr-n1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("img", {
                                                                      src: item.img,
                                                                      alt: "profile",
                                                                      height: "32",
                                                                      width: "32"
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ]),
                                                            createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                          ])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_card, {
                                                  elevation: "10",
                                                  class: "border-left-error mt-7",
                                                  rounded: "md"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<div class="pa-4"${_scopeId8}><h6 class="text-h6 font-weight-semibold"${_scopeId8}>SEO Session with Team</h6><div class="d-flex align-center mt-2"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_ClockIcon, {
                                                        "stroke-width": "1.5",
                                                        size: "18",
                                                        class: "text-grey100"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`<span class="text-subtitle-1 ml-1 text-grey100"${_scopeId8}>12:00 - 13:25</span></div><div class="d-flex align-center gap-3 mt-12"${_scopeId8}><div${_scopeId8}><!--[-->`);
                                                      ssrRenderList(unref(profileImgData), (item) => {
                                                        _push9(ssrRenderComponent(_component_v_avatar, {
                                                          key: item.img,
                                                          size: "32",
                                                          class: "mr-n1"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`<img${ssrRenderAttr("src", item.img)} alt="profile" height="32" width="32"${_scopeId9}>`);
                                                            } else {
                                                              return [
                                                                createVNode("img", {
                                                                  src: item.img,
                                                                  alt: "profile",
                                                                  height: "32",
                                                                  width: "32"
                                                                }, null, 8, ["src"])
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      });
                                                      _push9(`<!--]--></div><p class="text-subtitle-1 text-grey100"${_scopeId8}>+18</p></div></div>`);
                                                    } else {
                                                      return [
                                                        createVNode("div", { class: "pa-4" }, [
                                                          createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                          createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                            createVNode(_component_ClockIcon, {
                                                              "stroke-width": "1.5",
                                                              size: "18",
                                                              class: "text-grey100"
                                                            }),
                                                            createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                          ]),
                                                          createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                            createVNode("div", null, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                return openBlock(), createBlock(_component_v_avatar, {
                                                                  key: item.img,
                                                                  size: "32",
                                                                  class: "mr-n1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("img", {
                                                                      src: item.img,
                                                                      alt: "profile",
                                                                      height: "32",
                                                                      width: "32"
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ]),
                                                            createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                          ])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`</div></div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "d-flex" }, [
                                                    createVNode("div", null, [
                                                      createVNode("ul", null, [
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:00")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:30")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:00")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:30")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:00")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:30")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:00")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:30")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:00")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:30")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "13:00")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-0 text-subtitle-1 text-grey100" }, "13:30")
                                                        ])
                                                      ])
                                                    ]),
                                                    createVNode("div", { class: "flex-grow-1 flex-shrink-0 mx-4" }, [
                                                      createVNode(_component_v_card, {
                                                        elevation: "10",
                                                        class: "border-left-indigo mt-7",
                                                        rounded: "md"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "pa-4" }, [
                                                            createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                            createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                              createVNode(_component_ClockIcon, {
                                                                "stroke-width": "1.5",
                                                                size: "18",
                                                                class: "text-grey100"
                                                              }),
                                                              createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                            ]),
                                                            createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                              createVNode("div", null, [
                                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                  return openBlock(), createBlock(_component_v_avatar, {
                                                                    key: item.img,
                                                                    size: "32",
                                                                    class: "mr-n1"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode("img", {
                                                                        src: item.img,
                                                                        alt: "profile",
                                                                        height: "32",
                                                                        width: "32"
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024);
                                                                }), 128))
                                                              ]),
                                                              createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                            ])
                                                          ])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_card, {
                                                        elevation: "10",
                                                        class: "border-left-success mt-7",
                                                        rounded: "md"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "pa-4" }, [
                                                            createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                            createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                              createVNode(_component_ClockIcon, {
                                                                "stroke-width": "1.5",
                                                                size: "18",
                                                                class: "text-grey100"
                                                              }),
                                                              createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                            ]),
                                                            createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                              createVNode("div", null, [
                                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                  return openBlock(), createBlock(_component_v_avatar, {
                                                                    key: item.img,
                                                                    size: "32",
                                                                    class: "mr-n1"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode("img", {
                                                                        src: item.img,
                                                                        alt: "profile",
                                                                        height: "32",
                                                                        width: "32"
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024);
                                                                }), 128))
                                                              ]),
                                                              createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                            ])
                                                          ])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_card, {
                                                        elevation: "10",
                                                        class: "border-left-error mt-7",
                                                        rounded: "md"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "pa-4" }, [
                                                            createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                            createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                              createVNode(_component_ClockIcon, {
                                                                "stroke-width": "1.5",
                                                                size: "18",
                                                                class: "text-grey100"
                                                              }),
                                                              createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                            ]),
                                                            createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                              createVNode("div", null, [
                                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                  return openBlock(), createBlock(_component_v_avatar, {
                                                                    key: item.img,
                                                                    size: "32",
                                                                    class: "mr-n1"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode("img", {
                                                                        src: item.img,
                                                                        alt: "profile",
                                                                        height: "32",
                                                                        width: "32"
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024);
                                                                }), 128))
                                                              ]),
                                                              createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                            ])
                                                          ])
                                                        ]),
                                                        _: 1
                                                      })
                                                    ])
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_perfect_scrollbar, {
                                              style: { "height": "360px" },
                                              class: "mt-6 pt-4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex" }, [
                                                  createVNode("div", null, [
                                                    createVNode("ul", null, [
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:00")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:30")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:00")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:30")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:00")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:30")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:00")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:30")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:00")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:30")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "13:00")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-0 text-subtitle-1 text-grey100" }, "13:30")
                                                      ])
                                                    ])
                                                  ]),
                                                  createVNode("div", { class: "flex-grow-1 flex-shrink-0 mx-4" }, [
                                                    createVNode(_component_v_card, {
                                                      elevation: "10",
                                                      class: "border-left-indigo mt-7",
                                                      rounded: "md"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "pa-4" }, [
                                                          createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                          createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                            createVNode(_component_ClockIcon, {
                                                              "stroke-width": "1.5",
                                                              size: "18",
                                                              class: "text-grey100"
                                                            }),
                                                            createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                          ]),
                                                          createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                            createVNode("div", null, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                return openBlock(), createBlock(_component_v_avatar, {
                                                                  key: item.img,
                                                                  size: "32",
                                                                  class: "mr-n1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("img", {
                                                                      src: item.img,
                                                                      alt: "profile",
                                                                      height: "32",
                                                                      width: "32"
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ]),
                                                            createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                          ])
                                                        ])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_card, {
                                                      elevation: "10",
                                                      class: "border-left-success mt-7",
                                                      rounded: "md"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "pa-4" }, [
                                                          createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                          createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                            createVNode(_component_ClockIcon, {
                                                              "stroke-width": "1.5",
                                                              size: "18",
                                                              class: "text-grey100"
                                                            }),
                                                            createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                          ]),
                                                          createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                            createVNode("div", null, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                return openBlock(), createBlock(_component_v_avatar, {
                                                                  key: item.img,
                                                                  size: "32",
                                                                  class: "mr-n1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("img", {
                                                                      src: item.img,
                                                                      alt: "profile",
                                                                      height: "32",
                                                                      width: "32"
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ]),
                                                            createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                          ])
                                                        ])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_card, {
                                                      elevation: "10",
                                                      class: "border-left-error mt-7",
                                                      rounded: "md"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "pa-4" }, [
                                                          createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                          createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                            createVNode(_component_ClockIcon, {
                                                              "stroke-width": "1.5",
                                                              size: "18",
                                                              class: "text-grey100"
                                                            }),
                                                            createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                          ]),
                                                          createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                            createVNode("div", null, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                return openBlock(), createBlock(_component_v_avatar, {
                                                                  key: item.img,
                                                                  size: "32",
                                                                  class: "mr-n1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("img", {
                                                                      src: item.img,
                                                                      alt: "profile",
                                                                      height: "32",
                                                                      width: "32"
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ]),
                                                            createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                          ])
                                                        ])
                                                      ]),
                                                      _: 1
                                                    })
                                                  ])
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_window_item, { value: "Bills" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_perfect_scrollbar, {
                                            style: { "height": "360px" },
                                            class: "mt-6 pt-4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="d-flex"${_scopeId7}><div${_scopeId7}><ul${_scopeId7}><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>8:00</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>8:30</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>9:00</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>9:30</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>10:00</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>10:30</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>11:00</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>11:30</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>12:00</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>12:30</p></li><li${_scopeId7}><p class="mb-5 pb-3 text-subtitle-1 text-grey100"${_scopeId7}>13:00</p></li><li${_scopeId7}><p class="mb-0 text-subtitle-1 text-grey100"${_scopeId7}>13:30</p></li></ul></div><div class="flex-grow-1 flex-shrink-0 mx-4"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(_component_v_card, {
                                                  elevation: "10",
                                                  class: "border-left-indigo mt-7",
                                                  rounded: "md"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<div class="pa-4"${_scopeId8}><h6 class="text-h6 font-weight-semibold"${_scopeId8}>Marketing Meeting</h6><div class="d-flex align-center mt-2"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_ClockIcon, {
                                                        "stroke-width": "1.5",
                                                        size: "18",
                                                        class: "text-grey100"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`<span class="text-subtitle-1 ml-1 text-grey100"${_scopeId8}>08:30 - 10:00</span></div><div class="d-flex align-center gap-3 mt-12"${_scopeId8}><div${_scopeId8}><!--[-->`);
                                                      ssrRenderList(unref(profileImgData), (item) => {
                                                        _push9(ssrRenderComponent(_component_v_avatar, {
                                                          key: item.img,
                                                          size: "32",
                                                          class: "mr-n1"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`<img${ssrRenderAttr("src", item.img)} alt="profile" height="32" width="32"${_scopeId9}>`);
                                                            } else {
                                                              return [
                                                                createVNode("img", {
                                                                  src: item.img,
                                                                  alt: "profile",
                                                                  height: "32",
                                                                  width: "32"
                                                                }, null, 8, ["src"])
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      });
                                                      _push9(`<!--]--></div><p class="text-subtitle-1 text-grey100"${_scopeId8}>+18</p></div></div>`);
                                                    } else {
                                                      return [
                                                        createVNode("div", { class: "pa-4" }, [
                                                          createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                          createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                            createVNode(_component_ClockIcon, {
                                                              "stroke-width": "1.5",
                                                              size: "18",
                                                              class: "text-grey100"
                                                            }),
                                                            createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                          ]),
                                                          createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                            createVNode("div", null, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                return openBlock(), createBlock(_component_v_avatar, {
                                                                  key: item.img,
                                                                  size: "32",
                                                                  class: "mr-n1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("img", {
                                                                      src: item.img,
                                                                      alt: "profile",
                                                                      height: "32",
                                                                      width: "32"
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ]),
                                                            createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                          ])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_card, {
                                                  elevation: "10",
                                                  class: "border-left-secondary mt-7",
                                                  rounded: "md"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<div class="pa-4"${_scopeId8}><h6 class="text-h6 font-weight-semibold"${_scopeId8}>Applied mathematics</h6><div class="d-flex align-center mt-2"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_ClockIcon, {
                                                        "stroke-width": "1.5",
                                                        size: "18",
                                                        class: "text-grey100"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`<span class="text-subtitle-1 ml-1 text-grey100"${_scopeId8}>10:15 - 11:45</span></div><div class="d-flex align-center gap-3 mt-12"${_scopeId8}><div${_scopeId8}><!--[-->`);
                                                      ssrRenderList(unref(profileImgData), (item) => {
                                                        _push9(ssrRenderComponent(_component_v_avatar, {
                                                          key: item.img,
                                                          size: "32",
                                                          class: "mr-n1"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`<img${ssrRenderAttr("src", item.img)} alt="profile" height="32" width="32"${_scopeId9}>`);
                                                            } else {
                                                              return [
                                                                createVNode("img", {
                                                                  src: item.img,
                                                                  alt: "profile",
                                                                  height: "32",
                                                                  width: "32"
                                                                }, null, 8, ["src"])
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      });
                                                      _push9(`<!--]--></div><p class="text-subtitle-1 text-grey100"${_scopeId8}>+18</p></div></div>`);
                                                    } else {
                                                      return [
                                                        createVNode("div", { class: "pa-4" }, [
                                                          createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                          createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                            createVNode(_component_ClockIcon, {
                                                              "stroke-width": "1.5",
                                                              size: "18",
                                                              class: "text-grey100"
                                                            }),
                                                            createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                          ]),
                                                          createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                            createVNode("div", null, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                return openBlock(), createBlock(_component_v_avatar, {
                                                                  key: item.img,
                                                                  size: "32",
                                                                  class: "mr-n1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("img", {
                                                                      src: item.img,
                                                                      alt: "profile",
                                                                      height: "32",
                                                                      width: "32"
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ]),
                                                            createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                          ])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_card, {
                                                  elevation: "10",
                                                  class: "border-left-info mt-7",
                                                  rounded: "md"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<div class="pa-4"${_scopeId8}><h6 class="text-h6 font-weight-semibold"${_scopeId8}>SEO Session with Team</h6><div class="d-flex align-center mt-2"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_ClockIcon, {
                                                        "stroke-width": "1.5",
                                                        size: "18",
                                                        class: "text-grey100"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`<span class="text-subtitle-1 ml-1 text-grey100"${_scopeId8}>12:00 - 13:25</span></div><div class="d-flex align-center gap-3 mt-12"${_scopeId8}><div${_scopeId8}><!--[-->`);
                                                      ssrRenderList(unref(profileImgData), (item) => {
                                                        _push9(ssrRenderComponent(_component_v_avatar, {
                                                          key: item.img,
                                                          size: "32",
                                                          class: "mr-n1"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`<img${ssrRenderAttr("src", item.img)} alt="profile" height="32" width="32"${_scopeId9}>`);
                                                            } else {
                                                              return [
                                                                createVNode("img", {
                                                                  src: item.img,
                                                                  alt: "profile",
                                                                  height: "32",
                                                                  width: "32"
                                                                }, null, 8, ["src"])
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      });
                                                      _push9(`<!--]--></div><p class="text-subtitle-1 text-grey100"${_scopeId8}>+18</p></div></div>`);
                                                    } else {
                                                      return [
                                                        createVNode("div", { class: "pa-4" }, [
                                                          createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                          createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                            createVNode(_component_ClockIcon, {
                                                              "stroke-width": "1.5",
                                                              size: "18",
                                                              class: "text-grey100"
                                                            }),
                                                            createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                          ]),
                                                          createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                            createVNode("div", null, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                return openBlock(), createBlock(_component_v_avatar, {
                                                                  key: item.img,
                                                                  size: "32",
                                                                  class: "mr-n1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("img", {
                                                                      src: item.img,
                                                                      alt: "profile",
                                                                      height: "32",
                                                                      width: "32"
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ]),
                                                            createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                          ])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`</div></div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "d-flex" }, [
                                                    createVNode("div", null, [
                                                      createVNode("ul", null, [
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:00")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:30")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:00")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:30")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:00")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:30")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:00")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:30")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:00")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:30")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "13:00")
                                                        ]),
                                                        createVNode("li", null, [
                                                          createVNode("p", { class: "mb-0 text-subtitle-1 text-grey100" }, "13:30")
                                                        ])
                                                      ])
                                                    ]),
                                                    createVNode("div", { class: "flex-grow-1 flex-shrink-0 mx-4" }, [
                                                      createVNode(_component_v_card, {
                                                        elevation: "10",
                                                        class: "border-left-indigo mt-7",
                                                        rounded: "md"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "pa-4" }, [
                                                            createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                            createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                              createVNode(_component_ClockIcon, {
                                                                "stroke-width": "1.5",
                                                                size: "18",
                                                                class: "text-grey100"
                                                              }),
                                                              createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                            ]),
                                                            createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                              createVNode("div", null, [
                                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                  return openBlock(), createBlock(_component_v_avatar, {
                                                                    key: item.img,
                                                                    size: "32",
                                                                    class: "mr-n1"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode("img", {
                                                                        src: item.img,
                                                                        alt: "profile",
                                                                        height: "32",
                                                                        width: "32"
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024);
                                                                }), 128))
                                                              ]),
                                                              createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                            ])
                                                          ])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_card, {
                                                        elevation: "10",
                                                        class: "border-left-secondary mt-7",
                                                        rounded: "md"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "pa-4" }, [
                                                            createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                            createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                              createVNode(_component_ClockIcon, {
                                                                "stroke-width": "1.5",
                                                                size: "18",
                                                                class: "text-grey100"
                                                              }),
                                                              createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                            ]),
                                                            createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                              createVNode("div", null, [
                                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                  return openBlock(), createBlock(_component_v_avatar, {
                                                                    key: item.img,
                                                                    size: "32",
                                                                    class: "mr-n1"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode("img", {
                                                                        src: item.img,
                                                                        alt: "profile",
                                                                        height: "32",
                                                                        width: "32"
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024);
                                                                }), 128))
                                                              ]),
                                                              createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                            ])
                                                          ])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_card, {
                                                        elevation: "10",
                                                        class: "border-left-info mt-7",
                                                        rounded: "md"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "pa-4" }, [
                                                            createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                            createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                              createVNode(_component_ClockIcon, {
                                                                "stroke-width": "1.5",
                                                                size: "18",
                                                                class: "text-grey100"
                                                              }),
                                                              createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                            ]),
                                                            createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                              createVNode("div", null, [
                                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                  return openBlock(), createBlock(_component_v_avatar, {
                                                                    key: item.img,
                                                                    size: "32",
                                                                    class: "mr-n1"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode("img", {
                                                                        src: item.img,
                                                                        alt: "profile",
                                                                        height: "32",
                                                                        width: "32"
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024);
                                                                }), 128))
                                                              ]),
                                                              createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                            ])
                                                          ])
                                                        ]),
                                                        _: 1
                                                      })
                                                    ])
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_perfect_scrollbar, {
                                              style: { "height": "360px" },
                                              class: "mt-6 pt-4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex" }, [
                                                  createVNode("div", null, [
                                                    createVNode("ul", null, [
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:00")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:30")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:00")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:30")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:00")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:30")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:00")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:30")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:00")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:30")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "13:00")
                                                      ]),
                                                      createVNode("li", null, [
                                                        createVNode("p", { class: "mb-0 text-subtitle-1 text-grey100" }, "13:30")
                                                      ])
                                                    ])
                                                  ]),
                                                  createVNode("div", { class: "flex-grow-1 flex-shrink-0 mx-4" }, [
                                                    createVNode(_component_v_card, {
                                                      elevation: "10",
                                                      class: "border-left-indigo mt-7",
                                                      rounded: "md"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "pa-4" }, [
                                                          createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                          createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                            createVNode(_component_ClockIcon, {
                                                              "stroke-width": "1.5",
                                                              size: "18",
                                                              class: "text-grey100"
                                                            }),
                                                            createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                          ]),
                                                          createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                            createVNode("div", null, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                return openBlock(), createBlock(_component_v_avatar, {
                                                                  key: item.img,
                                                                  size: "32",
                                                                  class: "mr-n1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("img", {
                                                                      src: item.img,
                                                                      alt: "profile",
                                                                      height: "32",
                                                                      width: "32"
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ]),
                                                            createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                          ])
                                                        ])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_card, {
                                                      elevation: "10",
                                                      class: "border-left-secondary mt-7",
                                                      rounded: "md"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "pa-4" }, [
                                                          createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                          createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                            createVNode(_component_ClockIcon, {
                                                              "stroke-width": "1.5",
                                                              size: "18",
                                                              class: "text-grey100"
                                                            }),
                                                            createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                          ]),
                                                          createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                            createVNode("div", null, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                return openBlock(), createBlock(_component_v_avatar, {
                                                                  key: item.img,
                                                                  size: "32",
                                                                  class: "mr-n1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("img", {
                                                                      src: item.img,
                                                                      alt: "profile",
                                                                      height: "32",
                                                                      width: "32"
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ]),
                                                            createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                          ])
                                                        ])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_card, {
                                                      elevation: "10",
                                                      class: "border-left-info mt-7",
                                                      rounded: "md"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "pa-4" }, [
                                                          createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                          createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                            createVNode(_component_ClockIcon, {
                                                              "stroke-width": "1.5",
                                                              size: "18",
                                                              class: "text-grey100"
                                                            }),
                                                            createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                          ]),
                                                          createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                            createVNode("div", null, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                                return openBlock(), createBlock(_component_v_avatar, {
                                                                  key: item.img,
                                                                  size: "32",
                                                                  class: "mr-n1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("img", {
                                                                      src: item.img,
                                                                      alt: "profile",
                                                                      height: "32",
                                                                      width: "32"
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ]),
                                                            createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                          ])
                                                        ])
                                                      ]),
                                                      _: 1
                                                    })
                                                  ])
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_window_item, { value: "Account" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_perfect_scrollbar, {
                                            style: { "height": "360px" },
                                            class: "mt-6 pt-4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex" }, [
                                                createVNode("div", null, [
                                                  createVNode("ul", null, [
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:00")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:30")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:00")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:30")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:00")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:30")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:00")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:30")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:00")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:30")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "13:00")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-0 text-subtitle-1 text-grey100" }, "13:30")
                                                    ])
                                                  ])
                                                ]),
                                                createVNode("div", { class: "flex-grow-1 flex-shrink-0 mx-4" }, [
                                                  createVNode(_component_v_card, {
                                                    elevation: "10",
                                                    class: "border-left-indigo mt-7",
                                                    rounded: "md"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "pa-4" }, [
                                                        createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                        createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                          createVNode(_component_ClockIcon, {
                                                            "stroke-width": "1.5",
                                                            size: "18",
                                                            class: "text-grey100"
                                                          }),
                                                          createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                        ]),
                                                        createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                          createVNode("div", null, [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                              return openBlock(), createBlock(_component_v_avatar, {
                                                                key: item.img,
                                                                size: "32",
                                                                class: "mr-n1"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode("img", {
                                                                    src: item.img,
                                                                    alt: "profile",
                                                                    height: "32",
                                                                    width: "32"
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024);
                                                            }), 128))
                                                          ]),
                                                          createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                        ])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card, {
                                                    elevation: "10",
                                                    class: "border-left-success mt-7",
                                                    rounded: "md"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "pa-4" }, [
                                                        createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                        createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                          createVNode(_component_ClockIcon, {
                                                            "stroke-width": "1.5",
                                                            size: "18",
                                                            class: "text-grey100"
                                                          }),
                                                          createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                        ]),
                                                        createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                          createVNode("div", null, [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                              return openBlock(), createBlock(_component_v_avatar, {
                                                                key: item.img,
                                                                size: "32",
                                                                class: "mr-n1"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode("img", {
                                                                    src: item.img,
                                                                    alt: "profile",
                                                                    height: "32",
                                                                    width: "32"
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024);
                                                            }), 128))
                                                          ]),
                                                          createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                        ])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card, {
                                                    elevation: "10",
                                                    class: "border-left-error mt-7",
                                                    rounded: "md"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "pa-4" }, [
                                                        createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                        createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                          createVNode(_component_ClockIcon, {
                                                            "stroke-width": "1.5",
                                                            size: "18",
                                                            class: "text-grey100"
                                                          }),
                                                          createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                        ]),
                                                        createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                          createVNode("div", null, [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                              return openBlock(), createBlock(_component_v_avatar, {
                                                                key: item.img,
                                                                size: "32",
                                                                class: "mr-n1"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode("img", {
                                                                    src: item.img,
                                                                    alt: "profile",
                                                                    height: "32",
                                                                    width: "32"
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024);
                                                            }), 128))
                                                          ]),
                                                          createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                        ])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_window_item, { value: "Notification" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_perfect_scrollbar, {
                                            style: { "height": "360px" },
                                            class: "mt-6 pt-4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex" }, [
                                                createVNode("div", null, [
                                                  createVNode("ul", null, [
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:00")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:30")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:00")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:30")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:00")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:30")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:00")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:30")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:00")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:30")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "13:00")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-0 text-subtitle-1 text-grey100" }, "13:30")
                                                    ])
                                                  ])
                                                ]),
                                                createVNode("div", { class: "flex-grow-1 flex-shrink-0 mx-4" }, [
                                                  createVNode(_component_v_card, {
                                                    elevation: "10",
                                                    class: "border-left-indigo mt-7",
                                                    rounded: "md"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "pa-4" }, [
                                                        createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                        createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                          createVNode(_component_ClockIcon, {
                                                            "stroke-width": "1.5",
                                                            size: "18",
                                                            class: "text-grey100"
                                                          }),
                                                          createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                        ]),
                                                        createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                          createVNode("div", null, [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                              return openBlock(), createBlock(_component_v_avatar, {
                                                                key: item.img,
                                                                size: "32",
                                                                class: "mr-n1"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode("img", {
                                                                    src: item.img,
                                                                    alt: "profile",
                                                                    height: "32",
                                                                    width: "32"
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024);
                                                            }), 128))
                                                          ]),
                                                          createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                        ])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card, {
                                                    elevation: "10",
                                                    class: "border-left-success mt-7",
                                                    rounded: "md"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "pa-4" }, [
                                                        createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                        createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                          createVNode(_component_ClockIcon, {
                                                            "stroke-width": "1.5",
                                                            size: "18",
                                                            class: "text-grey100"
                                                          }),
                                                          createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                        ]),
                                                        createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                          createVNode("div", null, [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                              return openBlock(), createBlock(_component_v_avatar, {
                                                                key: item.img,
                                                                size: "32",
                                                                class: "mr-n1"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode("img", {
                                                                    src: item.img,
                                                                    alt: "profile",
                                                                    height: "32",
                                                                    width: "32"
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024);
                                                            }), 128))
                                                          ]),
                                                          createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                        ])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card, {
                                                    elevation: "10",
                                                    class: "border-left-error mt-7",
                                                    rounded: "md"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "pa-4" }, [
                                                        createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                        createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                          createVNode(_component_ClockIcon, {
                                                            "stroke-width": "1.5",
                                                            size: "18",
                                                            class: "text-grey100"
                                                          }),
                                                          createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                        ]),
                                                        createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                          createVNode("div", null, [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                              return openBlock(), createBlock(_component_v_avatar, {
                                                                key: item.img,
                                                                size: "32",
                                                                class: "mr-n1"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode("img", {
                                                                    src: item.img,
                                                                    alt: "profile",
                                                                    height: "32",
                                                                    width: "32"
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024);
                                                            }), 128))
                                                          ]),
                                                          createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                        ])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_window_item, { value: "Bills" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_perfect_scrollbar, {
                                            style: { "height": "360px" },
                                            class: "mt-6 pt-4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex" }, [
                                                createVNode("div", null, [
                                                  createVNode("ul", null, [
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:00")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:30")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:00")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:30")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:00")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:30")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:00")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:30")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:00")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:30")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "13:00")
                                                    ]),
                                                    createVNode("li", null, [
                                                      createVNode("p", { class: "mb-0 text-subtitle-1 text-grey100" }, "13:30")
                                                    ])
                                                  ])
                                                ]),
                                                createVNode("div", { class: "flex-grow-1 flex-shrink-0 mx-4" }, [
                                                  createVNode(_component_v_card, {
                                                    elevation: "10",
                                                    class: "border-left-indigo mt-7",
                                                    rounded: "md"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "pa-4" }, [
                                                        createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                        createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                          createVNode(_component_ClockIcon, {
                                                            "stroke-width": "1.5",
                                                            size: "18",
                                                            class: "text-grey100"
                                                          }),
                                                          createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                        ]),
                                                        createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                          createVNode("div", null, [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                              return openBlock(), createBlock(_component_v_avatar, {
                                                                key: item.img,
                                                                size: "32",
                                                                class: "mr-n1"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode("img", {
                                                                    src: item.img,
                                                                    alt: "profile",
                                                                    height: "32",
                                                                    width: "32"
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024);
                                                            }), 128))
                                                          ]),
                                                          createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                        ])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card, {
                                                    elevation: "10",
                                                    class: "border-left-secondary mt-7",
                                                    rounded: "md"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "pa-4" }, [
                                                        createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                        createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                          createVNode(_component_ClockIcon, {
                                                            "stroke-width": "1.5",
                                                            size: "18",
                                                            class: "text-grey100"
                                                          }),
                                                          createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                        ]),
                                                        createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                          createVNode("div", null, [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                              return openBlock(), createBlock(_component_v_avatar, {
                                                                key: item.img,
                                                                size: "32",
                                                                class: "mr-n1"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode("img", {
                                                                    src: item.img,
                                                                    alt: "profile",
                                                                    height: "32",
                                                                    width: "32"
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024);
                                                            }), 128))
                                                          ]),
                                                          createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                        ])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card, {
                                                    elevation: "10",
                                                    class: "border-left-info mt-7",
                                                    rounded: "md"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "pa-4" }, [
                                                        createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                        createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                          createVNode(_component_ClockIcon, {
                                                            "stroke-width": "1.5",
                                                            size: "18",
                                                            class: "text-grey100"
                                                          }),
                                                          createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                        ]),
                                                        createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                          createVNode("div", null, [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                              return openBlock(), createBlock(_component_v_avatar, {
                                                                key: item.img,
                                                                size: "32",
                                                                class: "mr-n1"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode("img", {
                                                                    src: item.img,
                                                                    alt: "profile",
                                                                    height: "32",
                                                                    width: "32"
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024);
                                                            }), 128))
                                                          ]),
                                                          createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                        ])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card, {
                                  elevation: "0",
                                  rounded: "md"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_tabs, {
                                      modelValue: tab.value,
                                      "onUpdate:modelValue": ($event) => tab.value = $event,
                                      "bg-color": "transparent",
                                      "min-height": "40",
                                      height: "40",
                                      grow: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_tab, {
                                          value: "Account",
                                          color: "white",
                                          class: "text-h6",
                                          rounded: "pill"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("1 to 3")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_tab, {
                                          value: "Notification",
                                          color: "white",
                                          class: "text-h6",
                                          rounded: "pill"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("4 to 7")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_tab, {
                                          value: "Bills",
                                          color: "white",
                                          class: "text-h6",
                                          rounded: "pill"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("8 to 10")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_v_divider, { class: "mt-1" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_window, {
                                  modelValue: tab.value,
                                  "onUpdate:modelValue": ($event) => tab.value = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_window_item, { value: "Account" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_perfect_scrollbar, {
                                          style: { "height": "360px" },
                                          class: "mt-6 pt-4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex" }, [
                                              createVNode("div", null, [
                                                createVNode("ul", null, [
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:00")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:30")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:00")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:30")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:00")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:30")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:00")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:30")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:00")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:30")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "13:00")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-0 text-subtitle-1 text-grey100" }, "13:30")
                                                  ])
                                                ])
                                              ]),
                                              createVNode("div", { class: "flex-grow-1 flex-shrink-0 mx-4" }, [
                                                createVNode(_component_v_card, {
                                                  elevation: "10",
                                                  class: "border-left-indigo mt-7",
                                                  rounded: "md"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "pa-4" }, [
                                                      createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                      createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                        createVNode(_component_ClockIcon, {
                                                          "stroke-width": "1.5",
                                                          size: "18",
                                                          class: "text-grey100"
                                                        }),
                                                        createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                      ]),
                                                      createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                        createVNode("div", null, [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                            return openBlock(), createBlock(_component_v_avatar, {
                                                              key: item.img,
                                                              size: "32",
                                                              class: "mr-n1"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode("img", {
                                                                  src: item.img,
                                                                  alt: "profile",
                                                                  height: "32",
                                                                  width: "32"
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024);
                                                          }), 128))
                                                        ]),
                                                        createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                      ])
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card, {
                                                  elevation: "10",
                                                  class: "border-left-success mt-7",
                                                  rounded: "md"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "pa-4" }, [
                                                      createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                      createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                        createVNode(_component_ClockIcon, {
                                                          "stroke-width": "1.5",
                                                          size: "18",
                                                          class: "text-grey100"
                                                        }),
                                                        createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                      ]),
                                                      createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                        createVNode("div", null, [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                            return openBlock(), createBlock(_component_v_avatar, {
                                                              key: item.img,
                                                              size: "32",
                                                              class: "mr-n1"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode("img", {
                                                                  src: item.img,
                                                                  alt: "profile",
                                                                  height: "32",
                                                                  width: "32"
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024);
                                                          }), 128))
                                                        ]),
                                                        createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                      ])
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card, {
                                                  elevation: "10",
                                                  class: "border-left-error mt-7",
                                                  rounded: "md"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "pa-4" }, [
                                                      createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                      createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                        createVNode(_component_ClockIcon, {
                                                          "stroke-width": "1.5",
                                                          size: "18",
                                                          class: "text-grey100"
                                                        }),
                                                        createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                      ]),
                                                      createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                        createVNode("div", null, [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                            return openBlock(), createBlock(_component_v_avatar, {
                                                              key: item.img,
                                                              size: "32",
                                                              class: "mr-n1"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode("img", {
                                                                  src: item.img,
                                                                  alt: "profile",
                                                                  height: "32",
                                                                  width: "32"
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024);
                                                          }), 128))
                                                        ]),
                                                        createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                      ])
                                                    ])
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_window_item, { value: "Notification" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_perfect_scrollbar, {
                                          style: { "height": "360px" },
                                          class: "mt-6 pt-4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex" }, [
                                              createVNode("div", null, [
                                                createVNode("ul", null, [
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:00")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:30")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:00")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:30")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:00")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:30")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:00")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:30")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:00")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:30")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "13:00")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-0 text-subtitle-1 text-grey100" }, "13:30")
                                                  ])
                                                ])
                                              ]),
                                              createVNode("div", { class: "flex-grow-1 flex-shrink-0 mx-4" }, [
                                                createVNode(_component_v_card, {
                                                  elevation: "10",
                                                  class: "border-left-indigo mt-7",
                                                  rounded: "md"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "pa-4" }, [
                                                      createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                      createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                        createVNode(_component_ClockIcon, {
                                                          "stroke-width": "1.5",
                                                          size: "18",
                                                          class: "text-grey100"
                                                        }),
                                                        createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                      ]),
                                                      createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                        createVNode("div", null, [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                            return openBlock(), createBlock(_component_v_avatar, {
                                                              key: item.img,
                                                              size: "32",
                                                              class: "mr-n1"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode("img", {
                                                                  src: item.img,
                                                                  alt: "profile",
                                                                  height: "32",
                                                                  width: "32"
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024);
                                                          }), 128))
                                                        ]),
                                                        createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                      ])
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card, {
                                                  elevation: "10",
                                                  class: "border-left-success mt-7",
                                                  rounded: "md"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "pa-4" }, [
                                                      createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                      createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                        createVNode(_component_ClockIcon, {
                                                          "stroke-width": "1.5",
                                                          size: "18",
                                                          class: "text-grey100"
                                                        }),
                                                        createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                      ]),
                                                      createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                        createVNode("div", null, [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                            return openBlock(), createBlock(_component_v_avatar, {
                                                              key: item.img,
                                                              size: "32",
                                                              class: "mr-n1"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode("img", {
                                                                  src: item.img,
                                                                  alt: "profile",
                                                                  height: "32",
                                                                  width: "32"
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024);
                                                          }), 128))
                                                        ]),
                                                        createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                      ])
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card, {
                                                  elevation: "10",
                                                  class: "border-left-error mt-7",
                                                  rounded: "md"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "pa-4" }, [
                                                      createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                      createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                        createVNode(_component_ClockIcon, {
                                                          "stroke-width": "1.5",
                                                          size: "18",
                                                          class: "text-grey100"
                                                        }),
                                                        createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                      ]),
                                                      createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                        createVNode("div", null, [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                            return openBlock(), createBlock(_component_v_avatar, {
                                                              key: item.img,
                                                              size: "32",
                                                              class: "mr-n1"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode("img", {
                                                                  src: item.img,
                                                                  alt: "profile",
                                                                  height: "32",
                                                                  width: "32"
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024);
                                                          }), 128))
                                                        ]),
                                                        createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                      ])
                                                    ])
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_window_item, { value: "Bills" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_perfect_scrollbar, {
                                          style: { "height": "360px" },
                                          class: "mt-6 pt-4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex" }, [
                                              createVNode("div", null, [
                                                createVNode("ul", null, [
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:00")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:30")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:00")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:30")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:00")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:30")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:00")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:30")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:00")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:30")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "13:00")
                                                  ]),
                                                  createVNode("li", null, [
                                                    createVNode("p", { class: "mb-0 text-subtitle-1 text-grey100" }, "13:30")
                                                  ])
                                                ])
                                              ]),
                                              createVNode("div", { class: "flex-grow-1 flex-shrink-0 mx-4" }, [
                                                createVNode(_component_v_card, {
                                                  elevation: "10",
                                                  class: "border-left-indigo mt-7",
                                                  rounded: "md"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "pa-4" }, [
                                                      createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                      createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                        createVNode(_component_ClockIcon, {
                                                          "stroke-width": "1.5",
                                                          size: "18",
                                                          class: "text-grey100"
                                                        }),
                                                        createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                      ]),
                                                      createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                        createVNode("div", null, [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                            return openBlock(), createBlock(_component_v_avatar, {
                                                              key: item.img,
                                                              size: "32",
                                                              class: "mr-n1"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode("img", {
                                                                  src: item.img,
                                                                  alt: "profile",
                                                                  height: "32",
                                                                  width: "32"
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024);
                                                          }), 128))
                                                        ]),
                                                        createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                      ])
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card, {
                                                  elevation: "10",
                                                  class: "border-left-secondary mt-7",
                                                  rounded: "md"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "pa-4" }, [
                                                      createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                      createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                        createVNode(_component_ClockIcon, {
                                                          "stroke-width": "1.5",
                                                          size: "18",
                                                          class: "text-grey100"
                                                        }),
                                                        createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                      ]),
                                                      createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                        createVNode("div", null, [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                            return openBlock(), createBlock(_component_v_avatar, {
                                                              key: item.img,
                                                              size: "32",
                                                              class: "mr-n1"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode("img", {
                                                                  src: item.img,
                                                                  alt: "profile",
                                                                  height: "32",
                                                                  width: "32"
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024);
                                                          }), 128))
                                                        ]),
                                                        createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                      ])
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card, {
                                                  elevation: "10",
                                                  class: "border-left-info mt-7",
                                                  rounded: "md"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "pa-4" }, [
                                                      createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                      createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                        createVNode(_component_ClockIcon, {
                                                          "stroke-width": "1.5",
                                                          size: "18",
                                                          class: "text-grey100"
                                                        }),
                                                        createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                      ]),
                                                      createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                        createVNode("div", null, [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                            return openBlock(), createBlock(_component_v_avatar, {
                                                              key: item.img,
                                                              size: "32",
                                                              class: "mr-n1"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode("img", {
                                                                  src: item.img,
                                                                  alt: "profile",
                                                                  height: "32",
                                                                  width: "32"
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024);
                                                          }), 128))
                                                        ]),
                                                        createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                      ])
                                                    ])
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, {
                                elevation: "0",
                                rounded: "md"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_tabs, {
                                    modelValue: tab.value,
                                    "onUpdate:modelValue": ($event) => tab.value = $event,
                                    "bg-color": "transparent",
                                    "min-height": "40",
                                    height: "40",
                                    grow: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_tab, {
                                        value: "Account",
                                        color: "white",
                                        class: "text-h6",
                                        rounded: "pill"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("1 to 3")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_tab, {
                                        value: "Notification",
                                        color: "white",
                                        class: "text-h6",
                                        rounded: "pill"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("4 to 7")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_tab, {
                                        value: "Bills",
                                        color: "white",
                                        class: "text-h6",
                                        rounded: "pill"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("8 to 10")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_divider, { class: "mt-1" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_window, {
                                modelValue: tab.value,
                                "onUpdate:modelValue": ($event) => tab.value = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_window_item, { value: "Account" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_perfect_scrollbar, {
                                        style: { "height": "360px" },
                                        class: "mt-6 pt-4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex" }, [
                                            createVNode("div", null, [
                                              createVNode("ul", null, [
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:00")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:30")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:00")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:30")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:00")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:30")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:00")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:30")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:00")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:30")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "13:00")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-0 text-subtitle-1 text-grey100" }, "13:30")
                                                ])
                                              ])
                                            ]),
                                            createVNode("div", { class: "flex-grow-1 flex-shrink-0 mx-4" }, [
                                              createVNode(_component_v_card, {
                                                elevation: "10",
                                                class: "border-left-indigo mt-7",
                                                rounded: "md"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "pa-4" }, [
                                                    createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                    createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                      createVNode(_component_ClockIcon, {
                                                        "stroke-width": "1.5",
                                                        size: "18",
                                                        class: "text-grey100"
                                                      }),
                                                      createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                    ]),
                                                    createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                      createVNode("div", null, [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                          return openBlock(), createBlock(_component_v_avatar, {
                                                            key: item.img,
                                                            size: "32",
                                                            class: "mr-n1"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("img", {
                                                                src: item.img,
                                                                alt: "profile",
                                                                height: "32",
                                                                width: "32"
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024);
                                                        }), 128))
                                                      ]),
                                                      createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                    ])
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card, {
                                                elevation: "10",
                                                class: "border-left-success mt-7",
                                                rounded: "md"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "pa-4" }, [
                                                    createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                    createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                      createVNode(_component_ClockIcon, {
                                                        "stroke-width": "1.5",
                                                        size: "18",
                                                        class: "text-grey100"
                                                      }),
                                                      createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                    ]),
                                                    createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                      createVNode("div", null, [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                          return openBlock(), createBlock(_component_v_avatar, {
                                                            key: item.img,
                                                            size: "32",
                                                            class: "mr-n1"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("img", {
                                                                src: item.img,
                                                                alt: "profile",
                                                                height: "32",
                                                                width: "32"
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024);
                                                        }), 128))
                                                      ]),
                                                      createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                    ])
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card, {
                                                elevation: "10",
                                                class: "border-left-error mt-7",
                                                rounded: "md"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "pa-4" }, [
                                                    createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                    createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                      createVNode(_component_ClockIcon, {
                                                        "stroke-width": "1.5",
                                                        size: "18",
                                                        class: "text-grey100"
                                                      }),
                                                      createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                    ]),
                                                    createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                      createVNode("div", null, [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                          return openBlock(), createBlock(_component_v_avatar, {
                                                            key: item.img,
                                                            size: "32",
                                                            class: "mr-n1"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("img", {
                                                                src: item.img,
                                                                alt: "profile",
                                                                height: "32",
                                                                width: "32"
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024);
                                                        }), 128))
                                                      ]),
                                                      createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                    ])
                                                  ])
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_window_item, { value: "Notification" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_perfect_scrollbar, {
                                        style: { "height": "360px" },
                                        class: "mt-6 pt-4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex" }, [
                                            createVNode("div", null, [
                                              createVNode("ul", null, [
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:00")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:30")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:00")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:30")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:00")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:30")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:00")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:30")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:00")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:30")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "13:00")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-0 text-subtitle-1 text-grey100" }, "13:30")
                                                ])
                                              ])
                                            ]),
                                            createVNode("div", { class: "flex-grow-1 flex-shrink-0 mx-4" }, [
                                              createVNode(_component_v_card, {
                                                elevation: "10",
                                                class: "border-left-indigo mt-7",
                                                rounded: "md"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "pa-4" }, [
                                                    createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                    createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                      createVNode(_component_ClockIcon, {
                                                        "stroke-width": "1.5",
                                                        size: "18",
                                                        class: "text-grey100"
                                                      }),
                                                      createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                    ]),
                                                    createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                      createVNode("div", null, [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                          return openBlock(), createBlock(_component_v_avatar, {
                                                            key: item.img,
                                                            size: "32",
                                                            class: "mr-n1"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("img", {
                                                                src: item.img,
                                                                alt: "profile",
                                                                height: "32",
                                                                width: "32"
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024);
                                                        }), 128))
                                                      ]),
                                                      createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                    ])
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card, {
                                                elevation: "10",
                                                class: "border-left-success mt-7",
                                                rounded: "md"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "pa-4" }, [
                                                    createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                    createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                      createVNode(_component_ClockIcon, {
                                                        "stroke-width": "1.5",
                                                        size: "18",
                                                        class: "text-grey100"
                                                      }),
                                                      createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                    ]),
                                                    createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                      createVNode("div", null, [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                          return openBlock(), createBlock(_component_v_avatar, {
                                                            key: item.img,
                                                            size: "32",
                                                            class: "mr-n1"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("img", {
                                                                src: item.img,
                                                                alt: "profile",
                                                                height: "32",
                                                                width: "32"
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024);
                                                        }), 128))
                                                      ]),
                                                      createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                    ])
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card, {
                                                elevation: "10",
                                                class: "border-left-error mt-7",
                                                rounded: "md"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "pa-4" }, [
                                                    createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                    createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                      createVNode(_component_ClockIcon, {
                                                        "stroke-width": "1.5",
                                                        size: "18",
                                                        class: "text-grey100"
                                                      }),
                                                      createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                    ]),
                                                    createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                      createVNode("div", null, [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                          return openBlock(), createBlock(_component_v_avatar, {
                                                            key: item.img,
                                                            size: "32",
                                                            class: "mr-n1"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("img", {
                                                                src: item.img,
                                                                alt: "profile",
                                                                height: "32",
                                                                width: "32"
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024);
                                                        }), 128))
                                                      ]),
                                                      createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                    ])
                                                  ])
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_window_item, { value: "Bills" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_perfect_scrollbar, {
                                        style: { "height": "360px" },
                                        class: "mt-6 pt-4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex" }, [
                                            createVNode("div", null, [
                                              createVNode("ul", null, [
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:00")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:30")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:00")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:30")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:00")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:30")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:00")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:30")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:00")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:30")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "13:00")
                                                ]),
                                                createVNode("li", null, [
                                                  createVNode("p", { class: "mb-0 text-subtitle-1 text-grey100" }, "13:30")
                                                ])
                                              ])
                                            ]),
                                            createVNode("div", { class: "flex-grow-1 flex-shrink-0 mx-4" }, [
                                              createVNode(_component_v_card, {
                                                elevation: "10",
                                                class: "border-left-indigo mt-7",
                                                rounded: "md"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "pa-4" }, [
                                                    createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                    createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                      createVNode(_component_ClockIcon, {
                                                        "stroke-width": "1.5",
                                                        size: "18",
                                                        class: "text-grey100"
                                                      }),
                                                      createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                    ]),
                                                    createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                      createVNode("div", null, [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                          return openBlock(), createBlock(_component_v_avatar, {
                                                            key: item.img,
                                                            size: "32",
                                                            class: "mr-n1"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("img", {
                                                                src: item.img,
                                                                alt: "profile",
                                                                height: "32",
                                                                width: "32"
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024);
                                                        }), 128))
                                                      ]),
                                                      createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                    ])
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card, {
                                                elevation: "10",
                                                class: "border-left-secondary mt-7",
                                                rounded: "md"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "pa-4" }, [
                                                    createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                    createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                      createVNode(_component_ClockIcon, {
                                                        "stroke-width": "1.5",
                                                        size: "18",
                                                        class: "text-grey100"
                                                      }),
                                                      createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                    ]),
                                                    createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                      createVNode("div", null, [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                          return openBlock(), createBlock(_component_v_avatar, {
                                                            key: item.img,
                                                            size: "32",
                                                            class: "mr-n1"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("img", {
                                                                src: item.img,
                                                                alt: "profile",
                                                                height: "32",
                                                                width: "32"
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024);
                                                        }), 128))
                                                      ]),
                                                      createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                    ])
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card, {
                                                elevation: "10",
                                                class: "border-left-info mt-7",
                                                rounded: "md"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "pa-4" }, [
                                                    createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                    createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                      createVNode(_component_ClockIcon, {
                                                        "stroke-width": "1.5",
                                                        size: "18",
                                                        class: "text-grey100"
                                                      }),
                                                      createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                    ]),
                                                    createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                      createVNode("div", null, [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                          return openBlock(), createBlock(_component_v_avatar, {
                                                            key: item.img,
                                                            size: "32",
                                                            class: "mr-n1"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("img", {
                                                                src: item.img,
                                                                alt: "profile",
                                                                height: "32",
                                                                width: "32"
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024);
                                                        }), 128))
                                                      ]),
                                                      createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                    ])
                                                  ])
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
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
                    createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                      createVNode("div", null, [
                        createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Upcoming Scheduls")
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_v_menu, {
                          bottom: "",
                          left: ""
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps({
                              icon: "",
                              color: "inherit"
                            }, props, { flat: "" }), {
                              default: withCtx(() => [
                                createVNode(_component_DotsVerticalIcon, {
                                  "stroke-width": "1.5",
                                  size: "24",
                                  class: "text-grey100"
                                })
                              ]),
                              _: 2
                            }, 1040)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_list, { density: "compact" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, i) => {
                                  return openBlock(), createBlock(_component_v_list_item, {
                                    key: i,
                                    value: i
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode(_component_v_row, { class: "justify-center mt-3 upcomming-schedule tabs_group" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              elevation: "0",
                              rounded: "md"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_tabs, {
                                  modelValue: tab.value,
                                  "onUpdate:modelValue": ($event) => tab.value = $event,
                                  "bg-color": "transparent",
                                  "min-height": "40",
                                  height: "40",
                                  grow: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_tab, {
                                      value: "Account",
                                      color: "white",
                                      class: "text-h6",
                                      rounded: "pill"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("1 to 3")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_tab, {
                                      value: "Notification",
                                      color: "white",
                                      class: "text-h6",
                                      rounded: "pill"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("4 to 7")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_tab, {
                                      value: "Bills",
                                      color: "white",
                                      class: "text-h6",
                                      rounded: "pill"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("8 to 10")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_divider, { class: "mt-1" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_window, {
                              modelValue: tab.value,
                              "onUpdate:modelValue": ($event) => tab.value = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_window_item, { value: "Account" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_perfect_scrollbar, {
                                      style: { "height": "360px" },
                                      class: "mt-6 pt-4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex" }, [
                                          createVNode("div", null, [
                                            createVNode("ul", null, [
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:00")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:30")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:00")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:30")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:00")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:30")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:00")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:30")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:00")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:30")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "13:00")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-0 text-subtitle-1 text-grey100" }, "13:30")
                                              ])
                                            ])
                                          ]),
                                          createVNode("div", { class: "flex-grow-1 flex-shrink-0 mx-4" }, [
                                            createVNode(_component_v_card, {
                                              elevation: "10",
                                              class: "border-left-indigo mt-7",
                                              rounded: "md"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "pa-4" }, [
                                                  createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                  createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                    createVNode(_component_ClockIcon, {
                                                      "stroke-width": "1.5",
                                                      size: "18",
                                                      class: "text-grey100"
                                                    }),
                                                    createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                  ]),
                                                  createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                    createVNode("div", null, [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                        return openBlock(), createBlock(_component_v_avatar, {
                                                          key: item.img,
                                                          size: "32",
                                                          class: "mr-n1"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("img", {
                                                              src: item.img,
                                                              alt: "profile",
                                                              height: "32",
                                                              width: "32"
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024);
                                                      }), 128))
                                                    ]),
                                                    createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                  ])
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card, {
                                              elevation: "10",
                                              class: "border-left-success mt-7",
                                              rounded: "md"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "pa-4" }, [
                                                  createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                  createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                    createVNode(_component_ClockIcon, {
                                                      "stroke-width": "1.5",
                                                      size: "18",
                                                      class: "text-grey100"
                                                    }),
                                                    createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                  ]),
                                                  createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                    createVNode("div", null, [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                        return openBlock(), createBlock(_component_v_avatar, {
                                                          key: item.img,
                                                          size: "32",
                                                          class: "mr-n1"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("img", {
                                                              src: item.img,
                                                              alt: "profile",
                                                              height: "32",
                                                              width: "32"
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024);
                                                      }), 128))
                                                    ]),
                                                    createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                  ])
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card, {
                                              elevation: "10",
                                              class: "border-left-error mt-7",
                                              rounded: "md"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "pa-4" }, [
                                                  createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                  createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                    createVNode(_component_ClockIcon, {
                                                      "stroke-width": "1.5",
                                                      size: "18",
                                                      class: "text-grey100"
                                                    }),
                                                    createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                  ]),
                                                  createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                    createVNode("div", null, [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                        return openBlock(), createBlock(_component_v_avatar, {
                                                          key: item.img,
                                                          size: "32",
                                                          class: "mr-n1"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("img", {
                                                              src: item.img,
                                                              alt: "profile",
                                                              height: "32",
                                                              width: "32"
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024);
                                                      }), 128))
                                                    ]),
                                                    createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                  ])
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_window_item, { value: "Notification" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_perfect_scrollbar, {
                                      style: { "height": "360px" },
                                      class: "mt-6 pt-4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex" }, [
                                          createVNode("div", null, [
                                            createVNode("ul", null, [
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:00")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:30")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:00")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:30")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:00")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:30")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:00")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:30")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:00")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:30")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "13:00")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-0 text-subtitle-1 text-grey100" }, "13:30")
                                              ])
                                            ])
                                          ]),
                                          createVNode("div", { class: "flex-grow-1 flex-shrink-0 mx-4" }, [
                                            createVNode(_component_v_card, {
                                              elevation: "10",
                                              class: "border-left-indigo mt-7",
                                              rounded: "md"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "pa-4" }, [
                                                  createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                  createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                    createVNode(_component_ClockIcon, {
                                                      "stroke-width": "1.5",
                                                      size: "18",
                                                      class: "text-grey100"
                                                    }),
                                                    createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                  ]),
                                                  createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                    createVNode("div", null, [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                        return openBlock(), createBlock(_component_v_avatar, {
                                                          key: item.img,
                                                          size: "32",
                                                          class: "mr-n1"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("img", {
                                                              src: item.img,
                                                              alt: "profile",
                                                              height: "32",
                                                              width: "32"
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024);
                                                      }), 128))
                                                    ]),
                                                    createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                  ])
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card, {
                                              elevation: "10",
                                              class: "border-left-success mt-7",
                                              rounded: "md"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "pa-4" }, [
                                                  createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                  createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                    createVNode(_component_ClockIcon, {
                                                      "stroke-width": "1.5",
                                                      size: "18",
                                                      class: "text-grey100"
                                                    }),
                                                    createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                  ]),
                                                  createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                    createVNode("div", null, [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                        return openBlock(), createBlock(_component_v_avatar, {
                                                          key: item.img,
                                                          size: "32",
                                                          class: "mr-n1"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("img", {
                                                              src: item.img,
                                                              alt: "profile",
                                                              height: "32",
                                                              width: "32"
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024);
                                                      }), 128))
                                                    ]),
                                                    createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                  ])
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card, {
                                              elevation: "10",
                                              class: "border-left-error mt-7",
                                              rounded: "md"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "pa-4" }, [
                                                  createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                  createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                    createVNode(_component_ClockIcon, {
                                                      "stroke-width": "1.5",
                                                      size: "18",
                                                      class: "text-grey100"
                                                    }),
                                                    createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                  ]),
                                                  createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                    createVNode("div", null, [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                        return openBlock(), createBlock(_component_v_avatar, {
                                                          key: item.img,
                                                          size: "32",
                                                          class: "mr-n1"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("img", {
                                                              src: item.img,
                                                              alt: "profile",
                                                              height: "32",
                                                              width: "32"
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024);
                                                      }), 128))
                                                    ]),
                                                    createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                  ])
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_window_item, { value: "Bills" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_perfect_scrollbar, {
                                      style: { "height": "360px" },
                                      class: "mt-6 pt-4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex" }, [
                                          createVNode("div", null, [
                                            createVNode("ul", null, [
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:00")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:30")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:00")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:30")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:00")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:30")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:00")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:30")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:00")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:30")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "13:00")
                                              ]),
                                              createVNode("li", null, [
                                                createVNode("p", { class: "mb-0 text-subtitle-1 text-grey100" }, "13:30")
                                              ])
                                            ])
                                          ]),
                                          createVNode("div", { class: "flex-grow-1 flex-shrink-0 mx-4" }, [
                                            createVNode(_component_v_card, {
                                              elevation: "10",
                                              class: "border-left-indigo mt-7",
                                              rounded: "md"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "pa-4" }, [
                                                  createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                  createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                    createVNode(_component_ClockIcon, {
                                                      "stroke-width": "1.5",
                                                      size: "18",
                                                      class: "text-grey100"
                                                    }),
                                                    createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                  ]),
                                                  createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                    createVNode("div", null, [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                        return openBlock(), createBlock(_component_v_avatar, {
                                                          key: item.img,
                                                          size: "32",
                                                          class: "mr-n1"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("img", {
                                                              src: item.img,
                                                              alt: "profile",
                                                              height: "32",
                                                              width: "32"
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024);
                                                      }), 128))
                                                    ]),
                                                    createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                  ])
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card, {
                                              elevation: "10",
                                              class: "border-left-secondary mt-7",
                                              rounded: "md"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "pa-4" }, [
                                                  createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                  createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                    createVNode(_component_ClockIcon, {
                                                      "stroke-width": "1.5",
                                                      size: "18",
                                                      class: "text-grey100"
                                                    }),
                                                    createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                  ]),
                                                  createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                    createVNode("div", null, [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                        return openBlock(), createBlock(_component_v_avatar, {
                                                          key: item.img,
                                                          size: "32",
                                                          class: "mr-n1"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("img", {
                                                              src: item.img,
                                                              alt: "profile",
                                                              height: "32",
                                                              width: "32"
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024);
                                                      }), 128))
                                                    ]),
                                                    createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                  ])
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card, {
                                              elevation: "10",
                                              class: "border-left-info mt-7",
                                              rounded: "md"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "pa-4" }, [
                                                  createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                  createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                    createVNode(_component_ClockIcon, {
                                                      "stroke-width": "1.5",
                                                      size: "18",
                                                      class: "text-grey100"
                                                    }),
                                                    createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                  ]),
                                                  createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                    createVNode("div", null, [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                        return openBlock(), createBlock(_component_v_avatar, {
                                                          key: item.img,
                                                          size: "32",
                                                          class: "mr-n1"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("img", {
                                                              src: item.img,
                                                              alt: "profile",
                                                              height: "32",
                                                              width: "32"
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024);
                                                      }), 128))
                                                    ]),
                                                    createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                  ])
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                    createVNode("div", null, [
                      createVNode("h5", { class: "text-h5 mb-1 font-weight-semibold" }, "Upcoming Scheduls")
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_v_menu, {
                        bottom: "",
                        left: ""
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(_component_v_btn, mergeProps({
                            icon: "",
                            color: "inherit"
                          }, props, { flat: "" }), {
                            default: withCtx(() => [
                              createVNode(_component_DotsVerticalIcon, {
                                "stroke-width": "1.5",
                                size: "24",
                                class: "text-grey100"
                              })
                            ]),
                            _: 2
                          }, 1040)
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_v_list, { density: "compact" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, i) => {
                                return openBlock(), createBlock(_component_v_list_item, {
                                  key: i,
                                  value: i
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode(_component_v_row, { class: "justify-center mt-3 upcomming-schedule tabs_group" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            elevation: "0",
                            rounded: "md"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_tabs, {
                                modelValue: tab.value,
                                "onUpdate:modelValue": ($event) => tab.value = $event,
                                "bg-color": "transparent",
                                "min-height": "40",
                                height: "40",
                                grow: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_tab, {
                                    value: "Account",
                                    color: "white",
                                    class: "text-h6",
                                    rounded: "pill"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("1 to 3")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_tab, {
                                    value: "Notification",
                                    color: "white",
                                    class: "text-h6",
                                    rounded: "pill"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("4 to 7")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_tab, {
                                    value: "Bills",
                                    color: "white",
                                    class: "text-h6",
                                    rounded: "pill"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("8 to 10")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_divider, { class: "mt-1" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_window, {
                            modelValue: tab.value,
                            "onUpdate:modelValue": ($event) => tab.value = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_window_item, { value: "Account" }, {
                                default: withCtx(() => [
                                  createVNode(_component_perfect_scrollbar, {
                                    style: { "height": "360px" },
                                    class: "mt-6 pt-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex" }, [
                                        createVNode("div", null, [
                                          createVNode("ul", null, [
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:00")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:30")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:00")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:30")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:00")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:30")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:00")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:30")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:00")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:30")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "13:00")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-0 text-subtitle-1 text-grey100" }, "13:30")
                                            ])
                                          ])
                                        ]),
                                        createVNode("div", { class: "flex-grow-1 flex-shrink-0 mx-4" }, [
                                          createVNode(_component_v_card, {
                                            elevation: "10",
                                            class: "border-left-indigo mt-7",
                                            rounded: "md"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "pa-4" }, [
                                                createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                  createVNode(_component_ClockIcon, {
                                                    "stroke-width": "1.5",
                                                    size: "18",
                                                    class: "text-grey100"
                                                  }),
                                                  createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                ]),
                                                createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                  createVNode("div", null, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                      return openBlock(), createBlock(_component_v_avatar, {
                                                        key: item.img,
                                                        size: "32",
                                                        class: "mr-n1"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("img", {
                                                            src: item.img,
                                                            alt: "profile",
                                                            height: "32",
                                                            width: "32"
                                                          }, null, 8, ["src"])
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 128))
                                                  ]),
                                                  createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card, {
                                            elevation: "10",
                                            class: "border-left-success mt-7",
                                            rounded: "md"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "pa-4" }, [
                                                createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                  createVNode(_component_ClockIcon, {
                                                    "stroke-width": "1.5",
                                                    size: "18",
                                                    class: "text-grey100"
                                                  }),
                                                  createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                ]),
                                                createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                  createVNode("div", null, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                      return openBlock(), createBlock(_component_v_avatar, {
                                                        key: item.img,
                                                        size: "32",
                                                        class: "mr-n1"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("img", {
                                                            src: item.img,
                                                            alt: "profile",
                                                            height: "32",
                                                            width: "32"
                                                          }, null, 8, ["src"])
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 128))
                                                  ]),
                                                  createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card, {
                                            elevation: "10",
                                            class: "border-left-error mt-7",
                                            rounded: "md"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "pa-4" }, [
                                                createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                  createVNode(_component_ClockIcon, {
                                                    "stroke-width": "1.5",
                                                    size: "18",
                                                    class: "text-grey100"
                                                  }),
                                                  createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                ]),
                                                createVNode("div", { class: "d-flex align-center mt-12 gap-3" }, [
                                                  createVNode("div", null, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                      return openBlock(), createBlock(_component_v_avatar, {
                                                        key: item.img,
                                                        size: "32",
                                                        class: "mr-n1"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("img", {
                                                            src: item.img,
                                                            alt: "profile",
                                                            height: "32",
                                                            width: "32"
                                                          }, null, 8, ["src"])
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 128))
                                                  ]),
                                                  createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_window_item, { value: "Notification" }, {
                                default: withCtx(() => [
                                  createVNode(_component_perfect_scrollbar, {
                                    style: { "height": "360px" },
                                    class: "mt-6 pt-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex" }, [
                                        createVNode("div", null, [
                                          createVNode("ul", null, [
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:00")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:30")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:00")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:30")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:00")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:30")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:00")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:30")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:00")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:30")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "13:00")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-0 text-subtitle-1 text-grey100" }, "13:30")
                                            ])
                                          ])
                                        ]),
                                        createVNode("div", { class: "flex-grow-1 flex-shrink-0 mx-4" }, [
                                          createVNode(_component_v_card, {
                                            elevation: "10",
                                            class: "border-left-indigo mt-7",
                                            rounded: "md"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "pa-4" }, [
                                                createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                  createVNode(_component_ClockIcon, {
                                                    "stroke-width": "1.5",
                                                    size: "18",
                                                    class: "text-grey100"
                                                  }),
                                                  createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                ]),
                                                createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                  createVNode("div", null, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                      return openBlock(), createBlock(_component_v_avatar, {
                                                        key: item.img,
                                                        size: "32",
                                                        class: "mr-n1"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("img", {
                                                            src: item.img,
                                                            alt: "profile",
                                                            height: "32",
                                                            width: "32"
                                                          }, null, 8, ["src"])
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 128))
                                                  ]),
                                                  createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card, {
                                            elevation: "10",
                                            class: "border-left-success mt-7",
                                            rounded: "md"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "pa-4" }, [
                                                createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                  createVNode(_component_ClockIcon, {
                                                    "stroke-width": "1.5",
                                                    size: "18",
                                                    class: "text-grey100"
                                                  }),
                                                  createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                ]),
                                                createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                  createVNode("div", null, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                      return openBlock(), createBlock(_component_v_avatar, {
                                                        key: item.img,
                                                        size: "32",
                                                        class: "mr-n1"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("img", {
                                                            src: item.img,
                                                            alt: "profile",
                                                            height: "32",
                                                            width: "32"
                                                          }, null, 8, ["src"])
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 128))
                                                  ]),
                                                  createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card, {
                                            elevation: "10",
                                            class: "border-left-error mt-7",
                                            rounded: "md"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "pa-4" }, [
                                                createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                  createVNode(_component_ClockIcon, {
                                                    "stroke-width": "1.5",
                                                    size: "18",
                                                    class: "text-grey100"
                                                  }),
                                                  createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                ]),
                                                createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                  createVNode("div", null, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                      return openBlock(), createBlock(_component_v_avatar, {
                                                        key: item.img,
                                                        size: "32",
                                                        class: "mr-n1"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("img", {
                                                            src: item.img,
                                                            alt: "profile",
                                                            height: "32",
                                                            width: "32"
                                                          }, null, 8, ["src"])
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 128))
                                                  ]),
                                                  createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_window_item, { value: "Bills" }, {
                                default: withCtx(() => [
                                  createVNode(_component_perfect_scrollbar, {
                                    style: { "height": "360px" },
                                    class: "mt-6 pt-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex" }, [
                                        createVNode("div", null, [
                                          createVNode("ul", null, [
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:00")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "8:30")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:00")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "9:30")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:00")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "10:30")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:00")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "11:30")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:00")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "12:30")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-5 pb-3 text-subtitle-1 text-grey100" }, "13:00")
                                            ]),
                                            createVNode("li", null, [
                                              createVNode("p", { class: "mb-0 text-subtitle-1 text-grey100" }, "13:30")
                                            ])
                                          ])
                                        ]),
                                        createVNode("div", { class: "flex-grow-1 flex-shrink-0 mx-4" }, [
                                          createVNode(_component_v_card, {
                                            elevation: "10",
                                            class: "border-left-indigo mt-7",
                                            rounded: "md"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "pa-4" }, [
                                                createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Marketing Meeting"),
                                                createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                  createVNode(_component_ClockIcon, {
                                                    "stroke-width": "1.5",
                                                    size: "18",
                                                    class: "text-grey100"
                                                  }),
                                                  createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "08:30 - 10:00")
                                                ]),
                                                createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                  createVNode("div", null, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                      return openBlock(), createBlock(_component_v_avatar, {
                                                        key: item.img,
                                                        size: "32",
                                                        class: "mr-n1"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("img", {
                                                            src: item.img,
                                                            alt: "profile",
                                                            height: "32",
                                                            width: "32"
                                                          }, null, 8, ["src"])
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 128))
                                                  ]),
                                                  createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card, {
                                            elevation: "10",
                                            class: "border-left-secondary mt-7",
                                            rounded: "md"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "pa-4" }, [
                                                createVNode("h6", { class: "text-h6 font-weight-semibold" }, "Applied mathematics"),
                                                createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                  createVNode(_component_ClockIcon, {
                                                    "stroke-width": "1.5",
                                                    size: "18",
                                                    class: "text-grey100"
                                                  }),
                                                  createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "10:15 - 11:45")
                                                ]),
                                                createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                  createVNode("div", null, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                      return openBlock(), createBlock(_component_v_avatar, {
                                                        key: item.img,
                                                        size: "32",
                                                        class: "mr-n1"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("img", {
                                                            src: item.img,
                                                            alt: "profile",
                                                            height: "32",
                                                            width: "32"
                                                          }, null, 8, ["src"])
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 128))
                                                  ]),
                                                  createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card, {
                                            elevation: "10",
                                            class: "border-left-info mt-7",
                                            rounded: "md"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "pa-4" }, [
                                                createVNode("h6", { class: "text-h6 font-weight-semibold" }, "SEO Session with Team"),
                                                createVNode("div", { class: "d-flex align-center mt-2" }, [
                                                  createVNode(_component_ClockIcon, {
                                                    "stroke-width": "1.5",
                                                    size: "18",
                                                    class: "text-grey100"
                                                  }),
                                                  createVNode("span", { class: "text-subtitle-1 ml-1 text-grey100" }, "12:00 - 13:25")
                                                ]),
                                                createVNode("div", { class: "d-flex align-center gap-3 mt-12" }, [
                                                  createVNode("div", null, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(profileImgData), (item) => {
                                                      return openBlock(), createBlock(_component_v_avatar, {
                                                        key: item.img,
                                                        size: "32",
                                                        class: "mr-n1"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("img", {
                                                            src: item.img,
                                                            alt: "profile",
                                                            height: "32",
                                                            width: "32"
                                                          }, null, 8, ["src"])
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 128))
                                                  ]),
                                                  createVNode("p", { class: "text-subtitle-1 text-grey100" }, "+18")
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboards/dashboard2/UpcommingSchedule.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _imports_0$1 as _,
  _imports_1 as a,
  _sfc_main$1 as b,
  _sfc_main as c,
  projectTableData as p,
  textCardsData as t
};
//# sourceMappingURL=UpcommingSchedule-DNrt39r_.js.map
