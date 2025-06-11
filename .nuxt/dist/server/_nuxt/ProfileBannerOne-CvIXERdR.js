import { defineComponent, ref, shallowRef, resolveComponent, unref, withCtx, createVNode, createTextVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderVNode, ssrInterpolate } from "vue/server-renderer";
import { UserCircleIcon, UsersIcon, Layout2Icon, IdIcon, PlusIcon } from "vue-tabler-icons";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { D as _imports_0 } from "../server.mjs";
const profileBg = publicAssetsURL("/images/backgrounds/profilebg-2.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProfileBannerOne",
  __ssrInlineRender: true,
  setup(__props) {
    const tab = ref(null);
    const items = shallowRef([
      { tab: "My Profile", icon: UserCircleIcon, href: "/apps/userprofile/one" },
      { tab: "Teams", icon: UsersIcon, href: "/apps/userprofile/one/teams" },
      { tab: "Projects", icon: Layout2Icon, href: "/apps/userprofile/one/projects" },
      { tab: "Connection", icon: IdIcon, href: "/apps/userprofile/one/connection" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      _push(`<!--[--><img${ssrRenderAttr("src", unref(profileBg))} alt="profile" class="w-100"><div class="mx-sm-5">`);
      _push(ssrRenderComponent(_component_v_card, {
        elevation: "10",
        class: "overflow-hidden mt-sm-n13 mt-n5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, { class: "pb-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, { class: "mt-1 justify-space-between" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "6",
                          sm: "9",
                          class: "pt-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-sm-flex align-center justify-sm-start justify-center"${_scopeId4}><div class="text-sm-left text-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                size: "100",
                                class: "userImage position-relative overflow-visible"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<img${ssrRenderAttr("src", unref(_imports_0))} width="100" alt="Mathew" class="rounded-circle"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_v_avatar, {
                                      size: "26",
                                      class: "bg-primary position-absolute plus"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(PlusIcon), {
                                            size: "16",
                                            "stroke-width": "2"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(PlusIcon), {
                                              size: "16",
                                              "stroke-width": "2"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("img", {
                                        src: unref(_imports_0),
                                        width: "100",
                                        alt: "Mathew",
                                        class: "rounded-circle"
                                      }, null, 8, ["src"]),
                                      createVNode(_component_v_avatar, {
                                        size: "26",
                                        class: "bg-primary position-absolute plus"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(PlusIcon), {
                                            size: "16",
                                            "stroke-width": "2"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="ml-sm-4 text-sm-left text-center"${_scopeId4}><h5 class="text-h3 font-weight-semibold mb-1 my-sm-0 my-2"${_scopeId4}> Mike Nielsen `);
                              _push5(ssrRenderComponent(_component_v_chip, {
                                color: "primary",
                                class: "bg-lightprimary font-weight-semibold ml-2 mt-n1",
                                variant: "outlined",
                                size: "x-small"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Admin`);
                                  } else {
                                    return [
                                      createTextVNode("Admin")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</h5><span class="text-h6 font-weight-medium text-grey100"${_scopeId4}>Dream big. Think different. Do great!</span><div class="text-subtitle-1 font-weight-semibold text-grey200 d-flex align-center mt-1 justify-sm-start justify-center"${_scopeId4}><div class="bg-success pa-1 rounded-circle mr-2"${_scopeId4}></div> Active </div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-sm-flex align-center justify-sm-start justify-center" }, [
                                  createVNode("div", { class: "text-sm-left text-center" }, [
                                    createVNode(_component_v_avatar, {
                                      size: "100",
                                      class: "userImage position-relative overflow-visible"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: unref(_imports_0),
                                          width: "100",
                                          alt: "Mathew",
                                          class: "rounded-circle"
                                        }, null, 8, ["src"]),
                                        createVNode(_component_v_avatar, {
                                          size: "26",
                                          class: "bg-primary position-absolute plus"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(PlusIcon), {
                                              size: "16",
                                              "stroke-width": "2"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "ml-sm-4 text-sm-left text-center" }, [
                                    createVNode("h5", { class: "text-h3 font-weight-semibold mb-1 my-sm-0 my-2" }, [
                                      createTextVNode(" Mike Nielsen "),
                                      createVNode(_component_v_chip, {
                                        color: "primary",
                                        class: "bg-lightprimary font-weight-semibold ml-2 mt-n1",
                                        variant: "outlined",
                                        size: "x-small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Admin")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("span", { class: "text-h6 font-weight-medium text-grey100" }, "Dream big. Think different. Do great!"),
                                    createVNode("div", { class: "text-subtitle-1 font-weight-semibold text-grey200 d-flex align-center mt-1 justify-sm-start justify-center" }, [
                                      createVNode("div", { class: "bg-success pa-1 rounded-circle mr-2" }),
                                      createTextVNode(" Active ")
                                    ])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "6",
                          sm: "3",
                          class: "d-flex align-center justify-center justify-sm-end order-sm-third"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class=""${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "primary",
                                size: "large"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Edit Profile`);
                                  } else {
                                    return [
                                      createTextVNode("Edit Profile")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "" }, [
                                  createVNode(_component_v_btn, {
                                    color: "primary",
                                    size: "large"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Edit Profile")
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
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6",
                            sm: "9",
                            class: "pt-0"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-sm-flex align-center justify-sm-start justify-center" }, [
                                createVNode("div", { class: "text-sm-left text-center" }, [
                                  createVNode(_component_v_avatar, {
                                    size: "100",
                                    class: "userImage position-relative overflow-visible"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: unref(_imports_0),
                                        width: "100",
                                        alt: "Mathew",
                                        class: "rounded-circle"
                                      }, null, 8, ["src"]),
                                      createVNode(_component_v_avatar, {
                                        size: "26",
                                        class: "bg-primary position-absolute plus"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(PlusIcon), {
                                            size: "16",
                                            "stroke-width": "2"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "ml-sm-4 text-sm-left text-center" }, [
                                  createVNode("h5", { class: "text-h3 font-weight-semibold mb-1 my-sm-0 my-2" }, [
                                    createTextVNode(" Mike Nielsen "),
                                    createVNode(_component_v_chip, {
                                      color: "primary",
                                      class: "bg-lightprimary font-weight-semibold ml-2 mt-n1",
                                      variant: "outlined",
                                      size: "x-small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Admin")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("span", { class: "text-h6 font-weight-medium text-grey100" }, "Dream big. Think different. Do great!"),
                                  createVNode("div", { class: "text-subtitle-1 font-weight-semibold text-grey200 d-flex align-center mt-1 justify-sm-start justify-center" }, [
                                    createVNode("div", { class: "bg-success pa-1 rounded-circle mr-2" }),
                                    createTextVNode(" Active ")
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6",
                            sm: "3",
                            class: "d-flex align-center justify-center justify-sm-end order-sm-third"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "" }, [
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  size: "large"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Edit Profile")
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
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          md: "12",
                          class: "profile-one"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_tabs, {
                                modelValue: tab.value,
                                "onUpdate:modelValue": ($event) => tab.value = $event,
                                color: "primary",
                                dark: "",
                                class: "profiletab"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(items.value, (item) => {
                                      _push6(ssrRenderComponent(_component_v_tab, {
                                        key: item.tab,
                                        to: item.href,
                                        class: "text-grey100 mr-sm-3"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            ssrRenderVNode(_push7, createVNode(resolveDynamicComponent(item.icon), {
                                              size: "20",
                                              "stroke-width": "1.5",
                                              class: "mr-sm-2 text-h6 text-grey100 icon"
                                            }, null), _parent7, _scopeId6);
                                            _push7(`<span class="d-sm-flex d-none"${_scopeId6}>${ssrInterpolate(item.tab)}</span>`);
                                          } else {
                                            return [
                                              (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                                size: "20",
                                                "stroke-width": "1.5",
                                                class: "mr-sm-2 text-h6 text-grey100 icon"
                                              })),
                                              createVNode("span", { class: "d-sm-flex d-none" }, toDisplayString(item.tab), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item) => {
                                        return openBlock(), createBlock(_component_v_tab, {
                                          key: item.tab,
                                          to: item.href,
                                          class: "text-grey100 mr-sm-3"
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                              size: "20",
                                              "stroke-width": "1.5",
                                              class: "mr-sm-2 text-h6 text-grey100 icon"
                                            })),
                                            createVNode("span", { class: "d-sm-flex d-none" }, toDisplayString(item.tab), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["to"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_tabs, {
                                  modelValue: tab.value,
                                  "onUpdate:modelValue": ($event) => tab.value = $event,
                                  color: "primary",
                                  dark: "",
                                  class: "profiletab"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item) => {
                                      return openBlock(), createBlock(_component_v_tab, {
                                        key: item.tab,
                                        to: item.href,
                                        class: "text-grey100 mr-sm-3"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                            size: "20",
                                            "stroke-width": "1.5",
                                            class: "mr-sm-2 text-h6 text-grey100 icon"
                                          })),
                                          createVNode("span", { class: "d-sm-flex d-none" }, toDisplayString(item.tab), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"]);
                                    }), 128))
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
                            md: "12",
                            class: "profile-one"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_tabs, {
                                modelValue: tab.value,
                                "onUpdate:modelValue": ($event) => tab.value = $event,
                                color: "primary",
                                dark: "",
                                class: "profiletab"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item) => {
                                    return openBlock(), createBlock(_component_v_tab, {
                                      key: item.tab,
                                      to: item.href,
                                      class: "text-grey100 mr-sm-3"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                          size: "20",
                                          "stroke-width": "1.5",
                                          class: "mr-sm-2 text-h6 text-grey100 icon"
                                        })),
                                        createVNode("span", { class: "d-sm-flex d-none" }, toDisplayString(item.tab), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["to"]);
                                  }), 128))
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
                    createVNode(_component_v_row, { class: "mt-1 justify-space-between" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6",
                          sm: "9",
                          class: "pt-0"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-sm-flex align-center justify-sm-start justify-center" }, [
                              createVNode("div", { class: "text-sm-left text-center" }, [
                                createVNode(_component_v_avatar, {
                                  size: "100",
                                  class: "userImage position-relative overflow-visible"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: unref(_imports_0),
                                      width: "100",
                                      alt: "Mathew",
                                      class: "rounded-circle"
                                    }, null, 8, ["src"]),
                                    createVNode(_component_v_avatar, {
                                      size: "26",
                                      class: "bg-primary position-absolute plus"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(PlusIcon), {
                                          size: "16",
                                          "stroke-width": "2"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "ml-sm-4 text-sm-left text-center" }, [
                                createVNode("h5", { class: "text-h3 font-weight-semibold mb-1 my-sm-0 my-2" }, [
                                  createTextVNode(" Mike Nielsen "),
                                  createVNode(_component_v_chip, {
                                    color: "primary",
                                    class: "bg-lightprimary font-weight-semibold ml-2 mt-n1",
                                    variant: "outlined",
                                    size: "x-small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Admin")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("span", { class: "text-h6 font-weight-medium text-grey100" }, "Dream big. Think different. Do great!"),
                                createVNode("div", { class: "text-subtitle-1 font-weight-semibold text-grey200 d-flex align-center mt-1 justify-sm-start justify-center" }, [
                                  createVNode("div", { class: "bg-success pa-1 rounded-circle mr-2" }),
                                  createTextVNode(" Active ")
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6",
                          sm: "3",
                          class: "d-flex align-center justify-center justify-sm-end order-sm-third"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "" }, [
                              createVNode(_component_v_btn, {
                                color: "primary",
                                size: "large"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Edit Profile")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          md: "12",
                          class: "profile-one"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_tabs, {
                              modelValue: tab.value,
                              "onUpdate:modelValue": ($event) => tab.value = $event,
                              color: "primary",
                              dark: "",
                              class: "profiletab"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item) => {
                                  return openBlock(), createBlock(_component_v_tab, {
                                    key: item.tab,
                                    to: item.href,
                                    class: "text-grey100 mr-sm-3"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                        size: "20",
                                        "stroke-width": "1.5",
                                        class: "mr-sm-2 text-h6 text-grey100 icon"
                                      })),
                                      createVNode("span", { class: "d-sm-flex d-none" }, toDisplayString(item.tab), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]);
                                }), 128))
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
              createVNode(_component_v_card_item, { class: "pb-0" }, {
                default: withCtx(() => [
                  createVNode(_component_v_row, { class: "mt-1 justify-space-between" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6",
                        sm: "9",
                        class: "pt-0"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-sm-flex align-center justify-sm-start justify-center" }, [
                            createVNode("div", { class: "text-sm-left text-center" }, [
                              createVNode(_component_v_avatar, {
                                size: "100",
                                class: "userImage position-relative overflow-visible"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: unref(_imports_0),
                                    width: "100",
                                    alt: "Mathew",
                                    class: "rounded-circle"
                                  }, null, 8, ["src"]),
                                  createVNode(_component_v_avatar, {
                                    size: "26",
                                    class: "bg-primary position-absolute plus"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(PlusIcon), {
                                        size: "16",
                                        "stroke-width": "2"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "ml-sm-4 text-sm-left text-center" }, [
                              createVNode("h5", { class: "text-h3 font-weight-semibold mb-1 my-sm-0 my-2" }, [
                                createTextVNode(" Mike Nielsen "),
                                createVNode(_component_v_chip, {
                                  color: "primary",
                                  class: "bg-lightprimary font-weight-semibold ml-2 mt-n1",
                                  variant: "outlined",
                                  size: "x-small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Admin")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("span", { class: "text-h6 font-weight-medium text-grey100" }, "Dream big. Think different. Do great!"),
                              createVNode("div", { class: "text-subtitle-1 font-weight-semibold text-grey200 d-flex align-center mt-1 justify-sm-start justify-center" }, [
                                createVNode("div", { class: "bg-success pa-1 rounded-circle mr-2" }),
                                createTextVNode(" Active ")
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6",
                        sm: "3",
                        class: "d-flex align-center justify-center justify-sm-end order-sm-third"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "" }, [
                            createVNode(_component_v_btn, {
                              color: "primary",
                              size: "large"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Edit Profile")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        md: "12",
                        class: "profile-one"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_tabs, {
                            modelValue: tab.value,
                            "onUpdate:modelValue": ($event) => tab.value = $event,
                            color: "primary",
                            dark: "",
                            class: "profiletab"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item) => {
                                return openBlock(), createBlock(_component_v_tab, {
                                  key: item.tab,
                                  to: item.href,
                                  class: "text-grey100 mr-sm-3"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                      size: "20",
                                      "stroke-width": "1.5",
                                      class: "mr-sm-2 text-h6 text-grey100 icon"
                                    })),
                                    createVNode("span", { class: "d-sm-flex d-none" }, toDisplayString(item.tab), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to"]);
                              }), 128))
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
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/user-profile/ProfileBannerOne.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=ProfileBannerOne-CvIXERdR.js.map
