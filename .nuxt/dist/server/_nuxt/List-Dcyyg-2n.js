import { defineComponent, shallowRef, resolveComponent, withCtx, createVNode, toDisplayString, resolveDynamicComponent, createBlock, openBlock, Fragment, renderList, useSSRContext, ref, createTextVNode, unref, mergeProps } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderVNode, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$9 } from "./BaseBreadcrumb-DAIjkUfv.js";
import { _ as _sfc_main$a } from "./UiParentCard-DhlYzLUl.js";
import { _ as _sfc_main$b } from "./UiChildCard-Xt7dDOL6.js";
import { AppsIcon, CircleDotIcon, FolderIcon, DragDropIcon, SendIcon, MailIcon, InboxIcon, BriefcaseIcon, BeachIcon, WifiIcon, BluetoothIcon, ChevronUpIcon, ChevronDownIcon } from "vue-tabler-icons";
import { _ as _export_sfc } from "../server.mjs";
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
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "SimpleList",
  __ssrInlineRender: true,
  props: ["icon"],
  setup(__props) {
    const props = __props;
    props.icon;
    const list1 = shallowRef([
      {
        name: "Sample Page",
        icon: AppsIcon,
        id: 1,
        link: "/basic/list"
      },
      {
        name: "Elements",
        icon: CircleDotIcon,
        id: 2,
        link: ""
      },
      {
        name: "Page Layouts",
        icon: FolderIcon,
        id: 3,
        link: ""
      },
      {
        name: "Components",
        icon: DragDropIcon,
        id: 4,
        link: ""
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_list = resolveComponent("v-list");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      _push(ssrRenderComponent(_component_v_list, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, {
              variant: "outlined",
              class: "py-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(list1.value, (list, i) => {
                    _push3(ssrRenderComponent(_component_v_list_item, {
                      class: "mb-2",
                      value: list,
                      rounded: "md",
                      key: i,
                      color: "primary"
                    }, {
                      prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(list.icon), {
                            size: "20",
                            "stroke-width": "1.5",
                            class: "mr-2"
                          }, null), _parent4, _scopeId3);
                        } else {
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                              size: "20",
                              "stroke-width": "1.5",
                              class: "mr-2"
                            }))
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_list_item_title, null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_list_item_title, {
                              textContent: toDisplayString(list.name)
                            }, null, 8, ["textContent"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(list1.value, (list, i) => {
                      return openBlock(), createBlock(_component_v_list_item, {
                        class: "mb-2",
                        value: list,
                        rounded: "md",
                        key: i,
                        color: "primary"
                      }, {
                        prepend: withCtx(() => [
                          (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                            size: "20",
                            "stroke-width": "1.5",
                            class: "mr-2"
                          }))
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_v_list_item_title, {
                            textContent: toDisplayString(list.name)
                          }, null, 8, ["textContent"])
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card, {
                variant: "outlined",
                class: "py-2"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(list1.value, (list, i) => {
                    return openBlock(), createBlock(_component_v_list_item, {
                      class: "mb-2",
                      value: list,
                      rounded: "md",
                      key: i,
                      color: "primary"
                    }, {
                      prepend: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                          size: "20",
                          "stroke-width": "1.5",
                          class: "mr-2"
                        }))
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_v_list_item_title, {
                          textContent: toDisplayString(list.name)
                        }, null, 8, ["textContent"])
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
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/list/SimpleList.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "NestedList",
  __ssrInlineRender: true,
  props: ["icon"],
  setup(__props) {
    ref(["Users"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_list = resolveComponent("v-list");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_list_group = resolveComponent("v-list-group");
      _push(ssrRenderComponent(_component_v_list, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, {
              variant: "outlined",
              class: "py-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-subttile-2 pl-4 py-3"${_scopeId2}>Nested List Items</div>`);
                  _push3(ssrRenderComponent(_component_v_list_item, {
                    value: "",
                    class: "mb-2",
                    color: "primary"
                  }, {
                    prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(SendIcon), {
                          size: "20",
                          "stroke-width": "1.5",
                          class: "mr-2"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(SendIcon), {
                            size: "20",
                            "stroke-width": "1.5",
                            class: "mr-2"
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_item_title, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Sent Mail`);
                            } else {
                              return [
                                createTextVNode("Sent Mail")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list_item_title, null, {
                            default: withCtx(() => [
                              createTextVNode("Sent Mail")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_list_item, {
                    value: "",
                    class: "mb-2",
                    color: "primary"
                  }, {
                    prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(MailIcon), {
                          size: "20",
                          "stroke-width": "1.5",
                          class: "mr-2"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(MailIcon), {
                            size: "20",
                            "stroke-width": "1.5",
                            class: "mr-2"
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_item_title, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Drafts`);
                            } else {
                              return [
                                createTextVNode("Drafts")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list_item_title, null, {
                            default: withCtx(() => [
                              createTextVNode("Drafts")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_list_group, { value: "Users" }, {
                    activator: withCtx(({ props: props2 }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_item, mergeProps(props2, {
                          rounded: "md",
                          color: "primary",
                          title: "inbox"
                        }), {
                          prepend: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(InboxIcon), {
                                size: "20",
                                "stroke-width": "1.5",
                                class: "mr-2"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(InboxIcon), {
                                  size: "20",
                                  "stroke-width": "1.5",
                                  class: "mr-2"
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list_item, mergeProps(props2, {
                            rounded: "md",
                            color: "primary",
                            title: "inbox"
                          }), {
                            prepend: withCtx(() => [
                              createVNode(unref(InboxIcon), {
                                size: "20",
                                "stroke-width": "1.5",
                                class: "mr-2"
                              })
                            ]),
                            _: 2
                          }, 1040)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_item, {
                          value: "Started",
                          color: "primary",
                          title: "Started",
                          rounded: "md"
                        }, {
                          prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(CircleDotIcon), {
                                size: "15",
                                "stroke-width": "1.5",
                                class: "mr-2"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(CircleDotIcon), {
                                  size: "15",
                                  "stroke-width": "1.5",
                                  class: "mr-2"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list_item, {
                            value: "Started",
                            color: "primary",
                            title: "Started",
                            rounded: "md"
                          }, {
                            prepend: withCtx(() => [
                              createVNode(unref(CircleDotIcon), {
                                size: "15",
                                "stroke-width": "1.5",
                                class: "mr-2"
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
                    createVNode("div", { class: "text-subttile-2 pl-4 py-3" }, "Nested List Items"),
                    createVNode(_component_v_list_item, {
                      value: "",
                      class: "mb-2",
                      color: "primary"
                    }, {
                      prepend: withCtx(() => [
                        createVNode(unref(SendIcon), {
                          size: "20",
                          "stroke-width": "1.5",
                          class: "mr-2"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_v_list_item_title, null, {
                          default: withCtx(() => [
                            createTextVNode("Sent Mail")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_list_item, {
                      value: "",
                      class: "mb-2",
                      color: "primary"
                    }, {
                      prepend: withCtx(() => [
                        createVNode(unref(MailIcon), {
                          size: "20",
                          "stroke-width": "1.5",
                          class: "mr-2"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_v_list_item_title, null, {
                          default: withCtx(() => [
                            createTextVNode("Drafts")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_list_group, { value: "Users" }, {
                      activator: withCtx(({ props: props2 }) => [
                        createVNode(_component_v_list_item, mergeProps(props2, {
                          rounded: "md",
                          color: "primary",
                          title: "inbox"
                        }), {
                          prepend: withCtx(() => [
                            createVNode(unref(InboxIcon), {
                              size: "20",
                              "stroke-width": "1.5",
                              class: "mr-2"
                            })
                          ]),
                          _: 2
                        }, 1040)
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_v_list_item, {
                          value: "Started",
                          color: "primary",
                          title: "Started",
                          rounded: "md"
                        }, {
                          prepend: withCtx(() => [
                            createVNode(unref(CircleDotIcon), {
                              size: "15",
                              "stroke-width": "1.5",
                              class: "mr-2"
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
              createVNode(_component_v_card, {
                variant: "outlined",
                class: "py-2"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-subttile-2 pl-4 py-3" }, "Nested List Items"),
                  createVNode(_component_v_list_item, {
                    value: "",
                    class: "mb-2",
                    color: "primary"
                  }, {
                    prepend: withCtx(() => [
                      createVNode(unref(SendIcon), {
                        size: "20",
                        "stroke-width": "1.5",
                        class: "mr-2"
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_v_list_item_title, null, {
                        default: withCtx(() => [
                          createTextVNode("Sent Mail")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_list_item, {
                    value: "",
                    class: "mb-2",
                    color: "primary"
                  }, {
                    prepend: withCtx(() => [
                      createVNode(unref(MailIcon), {
                        size: "20",
                        "stroke-width": "1.5",
                        class: "mr-2"
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_v_list_item_title, null, {
                        default: withCtx(() => [
                          createTextVNode("Drafts")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_list_group, { value: "Users" }, {
                    activator: withCtx(({ props: props2 }) => [
                      createVNode(_component_v_list_item, mergeProps(props2, {
                        rounded: "md",
                        color: "primary",
                        title: "inbox"
                      }), {
                        prepend: withCtx(() => [
                          createVNode(unref(InboxIcon), {
                            size: "20",
                            "stroke-width": "1.5",
                            class: "mr-2"
                          })
                        ]),
                        _: 2
                      }, 1040)
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_v_list_item, {
                        value: "Started",
                        color: "primary",
                        title: "Started",
                        rounded: "md"
                      }, {
                        prepend: withCtx(() => [
                          createVNode(unref(CircleDotIcon), {
                            size: "15",
                            "stroke-width": "1.5",
                            class: "mr-2"
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
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/list/NestedList.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "FolderList",
  __ssrInlineRender: true,
  props: ["icon"],
  setup(__props) {
    const folders = shallowRef([
      {
        subtitle: "Jan 9, 2022",
        title: "Photos",
        icon: FolderIcon
      },
      {
        subtitle: "Jan 17, 2022",
        title: "Works",
        icon: BriefcaseIcon
      },
      {
        subtitle: "Jan 18, 2022",
        title: "Vacation",
        icon: BeachIcon
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_list = resolveComponent("v-list");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_avatar = resolveComponent("v-avatar");
      _push(ssrRenderComponent(_component_v_list, mergeProps({ lines: "two" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, { variant: "outlined" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(folders.value, (folder) => {
                    _push3(ssrRenderComponent(_component_v_list_item, {
                      key: folder.title,
                      subtitle: folder.subtitle
                    }, {
                      prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_avatar, { color: "grey400" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderVNode(_push5, createVNode(resolveDynamicComponent(folder.icon), {
                                  size: "20",
                                  "stroke-width": "1.5"
                                }, null), _parent5, _scopeId4);
                              } else {
                                return [
                                  (openBlock(), createBlock(resolveDynamicComponent(folder.icon), {
                                    size: "20",
                                    "stroke-width": "1.5"
                                  }))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_avatar, { color: "grey400" }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(resolveDynamicComponent(folder.icon), {
                                  size: "20",
                                  "stroke-width": "1.5"
                                }))
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h5 class="text-subtitle-1"${_scopeId3}>${ssrInterpolate(folder.title)}</h5>`);
                        } else {
                          return [
                            createVNode("h5", { class: "text-subtitle-1" }, toDisplayString(folder.title), 1)
                          ];
                        }
                      }),
                      subtitle: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="text-subtitle-2"${_scopeId3}>${ssrInterpolate(folder.subtitle)}</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "text-subtitle-2" }, toDisplayString(folder.subtitle), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(folders.value, (folder) => {
                      return openBlock(), createBlock(_component_v_list_item, {
                        key: folder.title,
                        subtitle: folder.subtitle
                      }, {
                        prepend: withCtx(() => [
                          createVNode(_component_v_avatar, { color: "grey400" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(resolveDynamicComponent(folder.icon), {
                                size: "20",
                                "stroke-width": "1.5"
                              }))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        title: withCtx(() => [
                          createVNode("h5", { class: "text-subtitle-1" }, toDisplayString(folder.title), 1)
                        ]),
                        subtitle: withCtx(() => [
                          createVNode("span", { class: "text-subtitle-2" }, toDisplayString(folder.subtitle), 1)
                        ]),
                        _: 2
                      }, 1032, ["subtitle"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card, { variant: "outlined" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(folders.value, (folder) => {
                    return openBlock(), createBlock(_component_v_list_item, {
                      key: folder.title,
                      subtitle: folder.subtitle
                    }, {
                      prepend: withCtx(() => [
                        createVNode(_component_v_avatar, { color: "grey400" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(resolveDynamicComponent(folder.icon), {
                              size: "20",
                              "stroke-width": "1.5"
                            }))
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      title: withCtx(() => [
                        createVNode("h5", { class: "text-subtitle-1" }, toDisplayString(folder.title), 1)
                      ]),
                      subtitle: withCtx(() => [
                        createVNode("span", { class: "text-subtitle-2" }, toDisplayString(folder.subtitle), 1)
                      ]),
                      _: 2
                    }, 1032, ["subtitle"]);
                  }), 128))
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/list/FolderList.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DisabledList",
  __ssrInlineRender: true,
  props: ["icon"],
  setup(__props) {
    const props = __props;
    props.icon;
    const list1 = shallowRef([
      {
        name: "Sample Page",
        icon: AppsIcon,
        id: 1,
        link: "/basic/list"
      },
      {
        name: "Elements",
        icon: CircleDotIcon,
        id: 2,
        link: ""
      },
      {
        name: "Page Layouts",
        icon: FolderIcon,
        id: 3,
        link: ""
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_list = resolveComponent("v-list");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      _push(ssrRenderComponent(_component_v_list, mergeProps({ disabled: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, {
              variant: "outlined",
              class: "py-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(list1.value, (list, i) => {
                    _push3(ssrRenderComponent(_component_v_list_item, {
                      class: "mb-2",
                      value: list,
                      rounded: "md",
                      key: i,
                      color: "primary"
                    }, {
                      prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(list.icon), {
                            size: "20",
                            "stroke-width": "1.5",
                            class: "mr-2"
                          }, null), _parent4, _scopeId3);
                        } else {
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                              size: "20",
                              "stroke-width": "1.5",
                              class: "mr-2"
                            }))
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_list_item_title, null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_list_item_title, {
                              textContent: toDisplayString(list.name)
                            }, null, 8, ["textContent"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(list1.value, (list, i) => {
                      return openBlock(), createBlock(_component_v_list_item, {
                        class: "mb-2",
                        value: list,
                        rounded: "md",
                        key: i,
                        color: "primary"
                      }, {
                        prepend: withCtx(() => [
                          (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                            size: "20",
                            "stroke-width": "1.5",
                            class: "mr-2"
                          }))
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_v_list_item_title, {
                            textContent: toDisplayString(list.name)
                          }, null, 8, ["textContent"])
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card, {
                variant: "outlined",
                class: "py-2"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(list1.value, (list, i) => {
                    return openBlock(), createBlock(_component_v_list_item, {
                      class: "mb-2",
                      value: list,
                      rounded: "md",
                      key: i,
                      color: "primary"
                    }, {
                      prepend: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                          size: "20",
                          "stroke-width": "1.5",
                          class: "mr-2"
                        }))
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_v_list_item_title, {
                          textContent: toDisplayString(list.name)
                        }, null, 8, ["textContent"])
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
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/list/DisabledList.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SwitchList",
  __ssrInlineRender: true,
  setup(__props) {
    const swt1 = ref(true);
    const swt2 = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_list = resolveComponent("v-list");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_switch = resolveComponent("v-switch");
      _push(ssrRenderComponent(_component_v_list, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, {
              variant: "outlined",
              class: "py-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_list_item, {
                    value: "wifi",
                    class: "mb-2",
                    color: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex align-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(WifiIcon), {
                          size: "22",
                          "stroke-width": "1.5",
                          class: "mr-2"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="ml-3"${_scopeId3}>Wi-Fi</div><div class="ml-auto"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_switch, {
                          modelValue: swt1.value,
                          "onUpdate:modelValue": ($event) => swt1.value = $event,
                          inset: "",
                          color: "primary",
                          "hide-details": ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode(unref(WifiIcon), {
                              size: "22",
                              "stroke-width": "1.5",
                              class: "mr-2"
                            }),
                            createVNode("div", { class: "ml-3" }, "Wi-Fi"),
                            createVNode("div", { class: "ml-auto" }, [
                              createVNode(_component_v_switch, {
                                modelValue: swt1.value,
                                "onUpdate:modelValue": ($event) => swt1.value = $event,
                                inset: "",
                                color: "primary",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_list_item, {
                    value: "bluetooth",
                    class: "mb-2",
                    color: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex align-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(BluetoothIcon), {
                          size: "22",
                          "stroke-width": "1.5",
                          class: "mr-2"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="ml-3"${_scopeId3}>Bluetooth</div><div class="ml-auto"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_switch, {
                          modelValue: swt2.value,
                          "onUpdate:modelValue": ($event) => swt2.value = $event,
                          inset: "",
                          color: "primary",
                          "hide-details": ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode(unref(BluetoothIcon), {
                              size: "22",
                              "stroke-width": "1.5",
                              class: "mr-2"
                            }),
                            createVNode("div", { class: "ml-3" }, "Bluetooth"),
                            createVNode("div", { class: "ml-auto" }, [
                              createVNode(_component_v_switch, {
                                modelValue: swt2.value,
                                "onUpdate:modelValue": ($event) => swt2.value = $event,
                                inset: "",
                                color: "primary",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_list_item, {
                      value: "wifi",
                      class: "mb-2",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center" }, [
                          createVNode(unref(WifiIcon), {
                            size: "22",
                            "stroke-width": "1.5",
                            class: "mr-2"
                          }),
                          createVNode("div", { class: "ml-3" }, "Wi-Fi"),
                          createVNode("div", { class: "ml-auto" }, [
                            createVNode(_component_v_switch, {
                              modelValue: swt1.value,
                              "onUpdate:modelValue": ($event) => swt1.value = $event,
                              inset: "",
                              color: "primary",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_list_item, {
                      value: "bluetooth",
                      class: "mb-2",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center" }, [
                          createVNode(unref(BluetoothIcon), {
                            size: "22",
                            "stroke-width": "1.5",
                            class: "mr-2"
                          }),
                          createVNode("div", { class: "ml-3" }, "Bluetooth"),
                          createVNode("div", { class: "ml-auto" }, [
                            createVNode(_component_v_switch, {
                              modelValue: swt2.value,
                              "onUpdate:modelValue": ($event) => swt2.value = $event,
                              inset: "",
                              color: "primary",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ])
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
              createVNode(_component_v_card, {
                variant: "outlined",
                class: "py-2"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item, {
                    value: "wifi",
                    class: "mb-2",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex align-center" }, [
                        createVNode(unref(WifiIcon), {
                          size: "22",
                          "stroke-width": "1.5",
                          class: "mr-2"
                        }),
                        createVNode("div", { class: "ml-3" }, "Wi-Fi"),
                        createVNode("div", { class: "ml-auto" }, [
                          createVNode(_component_v_switch, {
                            modelValue: swt1.value,
                            "onUpdate:modelValue": ($event) => swt1.value = $event,
                            inset: "",
                            color: "primary",
                            "hide-details": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_list_item, {
                    value: "bluetooth",
                    class: "mb-2",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex align-center" }, [
                        createVNode(unref(BluetoothIcon), {
                          size: "22",
                          "stroke-width": "1.5",
                          class: "mr-2"
                        }),
                        createVNode("div", { class: "ml-3" }, "Bluetooth"),
                        createVNode("div", { class: "ml-auto" }, [
                          createVNode(_component_v_switch, {
                            modelValue: swt2.value,
                            "onUpdate:modelValue": ($event) => swt2.value = $event,
                            inset: "",
                            color: "primary",
                            "hide-details": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/list/SwitchList.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "RoundedList",
  __ssrInlineRender: true,
  props: ["icon"],
  setup(__props) {
    const props = __props;
    props.icon;
    const list1 = shallowRef([
      {
        name: "Sample Page",
        icon: AppsIcon,
        id: 1,
        link: "/"
      },
      {
        name: "Elements",
        icon: AppsIcon,
        id: 2,
        link: ""
      },
      {
        name: "Page Layouts",
        icon: AppsIcon,
        id: 3,
        link: ""
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      _push(ssrRenderComponent(_component_v_list, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(list1.value, (list, i) => {
              _push2(ssrRenderComponent(_component_v_list_item, {
                class: "mb-1",
                value: list,
                rounded: "xl",
                key: i,
                color: "primary"
              }, {
                prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(list.icon), {
                      size: "20",
                      "stroke-width": "1.5",
                      class: "mr-2"
                    }, null), _parent3, _scopeId2);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                        size: "20",
                        "stroke-width": "1.5",
                        class: "mr-2"
                      }))
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_list_item_title, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_list_item_title, {
                        textContent: toDisplayString(list.name)
                      }, null, 8, ["textContent"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(list1.value, (list, i) => {
                return openBlock(), createBlock(_component_v_list_item, {
                  class: "mb-1",
                  value: list,
                  rounded: "xl",
                  key: i,
                  color: "primary"
                }, {
                  prepend: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                      size: "20",
                      "stroke-width": "1.5",
                      class: "mr-2"
                    }))
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_v_list_item_title, {
                      textContent: toDisplayString(list.name)
                    }, null, 8, ["textContent"])
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/list/RoundedList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CustomAlignList",
  __ssrInlineRender: true,
  props: ["icon"],
  setup(__props) {
    const props = __props;
    props.icon;
    const customs = shallowRef([
      {
        title: "Bajaj Finsery",
        profit: true,
        percent: "10",
        price: "1839.00"
      },
      {
        title: "TTML",
        profit: false,
        percent: "10",
        price: "100.00"
      },
      {
        title: "Reliance",
        profit: true,
        percent: "10",
        price: "200.00"
      },
      {
        title: "TTML",
        profit: false,
        percent: "10",
        price: "189.00"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_list_item_subtitle = resolveComponent("v-list-item-subtitle");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_divider = resolveComponent("v-divider");
      _push(ssrRenderComponent(_component_v_list, mergeProps({ "two-lines": "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(customs.value, (custom, i) => {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_v_list_item, {
                color: "primary",
                class: "py-3"
              }, {
                append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_list_item_subtitle, { class: "text-subtitle-1 text-high-emphasis mr-3" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` $${ssrInterpolate(custom.price)}`);
                        } else {
                          return [
                            createTextVNode(" $" + toDisplayString(custom.price), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (custom.profit) {
                      _push3(ssrRenderComponent(_component_v_chip, {
                        color: "success",
                        label: "",
                        size: "x-small"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(ChevronUpIcon), {
                              size: "17",
                              "stroke-width": "1.5"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(unref(ChevronUpIcon), {
                                size: "17",
                                "stroke-width": "1.5"
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(_component_v_chip, {
                        color: "error",
                        label: "",
                        size: "x-small"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(ChevronDownIcon), {
                              size: "17",
                              "stroke-width": "1.5"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(unref(ChevronDownIcon), {
                                size: "17",
                                "stroke-width": "1.5"
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    }
                  } else {
                    return [
                      createVNode(_component_v_list_item_subtitle, { class: "text-subtitle-1 text-high-emphasis mr-3" }, {
                        default: withCtx(() => [
                          createTextVNode(" $" + toDisplayString(custom.price), 1)
                        ]),
                        _: 2
                      }, 1024),
                      custom.profit ? (openBlock(), createBlock(_component_v_chip, {
                        key: 0,
                        color: "success",
                        label: "",
                        size: "x-small"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ChevronUpIcon), {
                            size: "17",
                            "stroke-width": "1.5"
                          })
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(_component_v_chip, {
                        key: 1,
                        color: "error",
                        label: "",
                        size: "x-small"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ChevronDownIcon), {
                            size: "17",
                            "stroke-width": "1.5"
                          })
                        ]),
                        _: 1
                      }))
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_list_item_title, { class: "text-subtitle-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(custom.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(custom.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (custom.profit) {
                      _push3(ssrRenderComponent(_component_v_list_item_subtitle, { class: "text-subtitle-2 text-success text-high-emphasis" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(custom.percent)}% Profit`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(custom.percent) + "% Profit", 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(_component_v_list_item_subtitle, { class: "text-subtitle-2 text-error" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(custom.percent)}% Loss`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(custom.percent) + "% Loss", 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    }
                  } else {
                    return [
                      createVNode(_component_v_list_item_title, { class: "text-subtitle-1" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(custom.title), 1)
                        ]),
                        _: 2
                      }, 1024),
                      custom.profit ? (openBlock(), createBlock(_component_v_list_item_subtitle, {
                        key: 0,
                        class: "text-subtitle-2 text-success text-high-emphasis"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(custom.percent) + "% Profit", 1)
                        ]),
                        _: 2
                      }, 1024)) : (openBlock(), createBlock(_component_v_list_item_subtitle, {
                        key: 1,
                        class: "text-subtitle-2 text-error"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(custom.percent) + "% Loss", 1)
                        ]),
                        _: 2
                      }, 1024))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_divider, null, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(customs.value, (custom, i) => {
                return openBlock(), createBlock(Fragment, { key: i }, [
                  createVNode(_component_v_list_item, {
                    color: "primary",
                    class: "py-3"
                  }, {
                    append: withCtx(() => [
                      createVNode(_component_v_list_item_subtitle, { class: "text-subtitle-1 text-high-emphasis mr-3" }, {
                        default: withCtx(() => [
                          createTextVNode(" $" + toDisplayString(custom.price), 1)
                        ]),
                        _: 2
                      }, 1024),
                      custom.profit ? (openBlock(), createBlock(_component_v_chip, {
                        key: 0,
                        color: "success",
                        label: "",
                        size: "x-small"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ChevronUpIcon), {
                            size: "17",
                            "stroke-width": "1.5"
                          })
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(_component_v_chip, {
                        key: 1,
                        color: "error",
                        label: "",
                        size: "x-small"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ChevronDownIcon), {
                            size: "17",
                            "stroke-width": "1.5"
                          })
                        ]),
                        _: 1
                      }))
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_v_list_item_title, { class: "text-subtitle-1" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(custom.title), 1)
                        ]),
                        _: 2
                      }, 1024),
                      custom.profit ? (openBlock(), createBlock(_component_v_list_item_subtitle, {
                        key: 0,
                        class: "text-subtitle-2 text-success text-high-emphasis"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(custom.percent) + "% Profit", 1)
                        ]),
                        _: 2
                      }, 1024)) : (openBlock(), createBlock(_component_v_list_item_subtitle, {
                        key: 1,
                        class: "text-subtitle-2 text-error"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(custom.percent) + "% Loss", 1)
                        ]),
                        _: 2
                      }, 1024))
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_v_divider)
                ], 64);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/list/CustomAlignList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_perfect_scrollbar = resolveComponent("perfect-scrollbar");
  const _component_v_list = resolveComponent("v-list");
  const _component_v_list_item = resolveComponent("v-list-item");
  const _component_v_list_item_title = resolveComponent("v-list-item-title");
  _push(ssrRenderComponent(_component_perfect_scrollbar, mergeProps({ style: { "max-height": "250px" } }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_list, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(200, (n, index) => {
                _push3(ssrRenderComponent(_component_v_list_item, {
                  value: n,
                  key: index,
                  color: "primary"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_v_list_item_title, null, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`Item ${ssrInterpolate(n)}`);
                          } else {
                            return [
                              createTextVNode("Item " + toDisplayString(n), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_v_list_item_title, null, {
                          default: withCtx(() => [
                            createTextVNode("Item " + toDisplayString(n), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(), createBlock(Fragment, null, renderList(200, (n, index) => {
                  return createVNode(_component_v_list_item, {
                    value: n,
                    key: index,
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_list_item_title, null, {
                        default: withCtx(() => [
                          createTextVNode("Item " + toDisplayString(n), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["value"]);
                }), 64))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_list, null, {
            default: withCtx(() => [
              (openBlock(), createBlock(Fragment, null, renderList(200, (n, index) => {
                return createVNode(_component_v_list_item, {
                  value: n,
                  key: index,
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item_title, null, {
                      default: withCtx(() => [
                        createTextVNode("Item " + toDisplayString(n), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 64))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/list/ScrollableList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ScrollableList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "List",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Lists" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Lists",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$9, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$a, { title: "List" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Simple List" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$8, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$8)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$b, { title: "Simple List" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$8)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Nested List" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$7, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$7)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$b, { title: "Nested List" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$7)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Folder List" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$6, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$6)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$b, { title: "Folder List" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$6)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Disabled List" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$5, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$5)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$b, { title: "Disabled List" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$5)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Switch List" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$4, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$4)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$b, { title: "Switch List" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$4)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Rounded List" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$3, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$3)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$b, { title: "Rounded List" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$3)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Custom Aligned List" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$2, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$2)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$b, { title: "Custom Aligned List" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$2)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$b, { title: "Scrollable List" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(ScrollableList, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(ScrollableList)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$b, { title: "Scrollable List" }, {
                                        default: withCtx(() => [
                                          createVNode(ScrollableList)
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
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b, { title: "Simple List" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$8)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b, { title: "Nested List" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$7)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b, { title: "Folder List" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$6)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b, { title: "Disabled List" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$5)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b, { title: "Switch List" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$4)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b, { title: "Rounded List" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$3)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b, { title: "Custom Aligned List" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$2)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b, { title: "Scrollable List" }, {
                                      default: withCtx(() => [
                                        createVNode(ScrollableList)
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$b, { title: "Simple List" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$8)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$b, { title: "Nested List" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$7)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$b, { title: "Folder List" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$6)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$b, { title: "Disabled List" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$5)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$b, { title: "Switch List" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$4)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$b, { title: "Rounded List" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$3)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$b, { title: "Custom Aligned List" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$2)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$b, { title: "Scrollable List" }, {
                                    default: withCtx(() => [
                                      createVNode(ScrollableList)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$a, { title: "List" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$b, { title: "Simple List" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$8)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$b, { title: "Nested List" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$7)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$b, { title: "Folder List" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$6)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$b, { title: "Disabled List" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$5)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$b, { title: "Switch List" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$4)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$b, { title: "Rounded List" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$3)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$b, { title: "Custom Aligned List" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$2)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$b, { title: "Scrollable List" }, {
                                  default: withCtx(() => [
                                    createVNode(ScrollableList)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$a, { title: "List" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, { title: "Simple List" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$8)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, { title: "Nested List" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$7)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, { title: "Folder List" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$6)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, { title: "Disabled List" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$5)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, { title: "Switch List" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$4)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, { title: "Rounded List" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$3)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, { title: "Custom Aligned List" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$2)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, { title: "Scrollable List" }, {
                                default: withCtx(() => [
                                  createVNode(ScrollableList)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ui-components/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=List-Dcyyg-2n.js.map
