import { defineComponent, ref, shallowRef, resolveComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderVNode, ssrInterpolate } from "vue/server-renderer";
import { UserCircleIcon, HeartIcon, UsersIcon, PhotoIcon } from "vue-tabler-icons";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { D as _imports_0 } from "../server.mjs";
const profileBg = publicAssetsURL("/images/backgrounds/profilebg.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProfileBanner",
  __ssrInlineRender: true,
  setup(__props) {
    const tab = ref(null);
    const items = shallowRef([
      { tab: "Profile", icon: UserCircleIcon, href: "/apps/userprofile/two" },
      { tab: "Followers", icon: HeartIcon, href: "/apps/userprofile/two/followers" },
      { tab: "Friends", icon: UsersIcon, href: "/apps/userprofile/two/friends" },
      { tab: "Gallery", icon: PhotoIcon, href: "/apps/userprofile/two/gallery" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_FileDescriptionIcon = resolveComponent("FileDescriptionIcon");
      const _component_UserCheckIcon = resolveComponent("UserCheckIcon");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_BrandFacebookIcon = resolveComponent("BrandFacebookIcon");
      const _component_BrandTwitterIcon = resolveComponent("BrandTwitterIcon");
      const _component_BrandDribbbleIcon = resolveComponent("BrandDribbbleIcon");
      const _component_BrandYoutubeIcon = resolveComponent("BrandYoutubeIcon");
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        elevation: "10",
        class: "overflow-hidden"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(profileBg))} alt="profile" class="w-100"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_row, { class: "mt-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    lg: "4",
                    sm: "12",
                    class: "order-sm-second"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="px-4 py-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_row, { class: "justify-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "4",
                                class: "text-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_FileDescriptionIcon, {
                                      size: "20",
                                      class: "text-grey100"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<h4 class="text-h4 font-weight-semibold"${_scopeId5}>938</h4><h6 class="text-h6 font-weight-medium text-grey100"${_scopeId5}>Posts</h6>`);
                                  } else {
                                    return [
                                      createVNode(_component_FileDescriptionIcon, {
                                        size: "20",
                                        class: "text-grey100"
                                      }),
                                      createVNode("h4", { class: "text-h4 font-weight-semibold" }, "938"),
                                      createVNode("h6", { class: "text-h6 font-weight-medium text-grey100" }, "Posts")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "4",
                                class: "text-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(UserCircleIcon), {
                                      size: "20",
                                      class: "text-grey100"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<h4 class="text-h4 font-weight-semibold"${_scopeId5}>3,586</h4><h6 class="text-h6 font-weight-medium text-grey100"${_scopeId5}>Followers</h6>`);
                                  } else {
                                    return [
                                      createVNode(unref(UserCircleIcon), {
                                        size: "20",
                                        class: "text-grey100"
                                      }),
                                      createVNode("h4", { class: "text-h4 font-weight-semibold" }, "3,586"),
                                      createVNode("h6", { class: "text-h6 font-weight-medium text-grey100" }, "Followers")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "4",
                                class: "text-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UserCheckIcon, {
                                      size: "20",
                                      class: "text-grey100"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<h4 class="text-h4 font-weight-semibold"${_scopeId5}>2,659</h4><h6 class="text-h6 font-weight-medium text-grey100"${_scopeId5}>Following</h6>`);
                                  } else {
                                    return [
                                      createVNode(_component_UserCheckIcon, {
                                        size: "20",
                                        class: "text-grey100"
                                      }),
                                      createVNode("h4", { class: "text-h4 font-weight-semibold" }, "2,659"),
                                      createVNode("h6", { class: "text-h6 font-weight-medium text-grey100" }, "Following")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "4",
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_FileDescriptionIcon, {
                                      size: "20",
                                      class: "text-grey100"
                                    }),
                                    createVNode("h4", { class: "text-h4 font-weight-semibold" }, "938"),
                                    createVNode("h6", { class: "text-h6 font-weight-medium text-grey100" }, "Posts")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "4",
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(UserCircleIcon), {
                                      size: "20",
                                      class: "text-grey100"
                                    }),
                                    createVNode("h4", { class: "text-h4 font-weight-semibold" }, "3,586"),
                                    createVNode("h6", { class: "text-h6 font-weight-medium text-grey100" }, "Followers")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "4",
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UserCheckIcon, {
                                      size: "20",
                                      class: "text-grey100"
                                    }),
                                    createVNode("h4", { class: "text-h4 font-weight-semibold" }, "2,659"),
                                    createVNode("h6", { class: "text-h6 font-weight-medium text-grey100" }, "Following")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "px-4 py-1" }, [
                            createVNode(_component_v_row, { class: "justify-center" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "4",
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_FileDescriptionIcon, {
                                      size: "20",
                                      class: "text-grey100"
                                    }),
                                    createVNode("h4", { class: "text-h4 font-weight-semibold" }, "938"),
                                    createVNode("h6", { class: "text-h6 font-weight-medium text-grey100" }, "Posts")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "4",
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(UserCircleIcon), {
                                      size: "20",
                                      class: "text-grey100"
                                    }),
                                    createVNode("h4", { class: "text-h4 font-weight-semibold" }, "3,586"),
                                    createVNode("h6", { class: "text-h6 font-weight-medium text-grey100" }, "Followers")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "4",
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UserCheckIcon, {
                                      size: "20",
                                      class: "text-grey100"
                                    }),
                                    createVNode("h4", { class: "text-h4 font-weight-semibold" }, "2,659"),
                                    createVNode("h6", { class: "text-h6 font-weight-medium text-grey100" }, "Following")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    lg: "4",
                    sm: "12",
                    class: "d-flex justify-center order-sml-first"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-center top-spacer"${_scopeId3}><div class="avatar-border"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_avatar, {
                          size: "100",
                          class: "userImage"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<img${ssrRenderAttr("src", unref(_imports_0))} width="100" alt="Mathew"${_scopeId4}>`);
                            } else {
                              return [
                                createVNode("img", {
                                  src: unref(_imports_0),
                                  width: "100",
                                  alt: "Mathew"
                                }, null, 8, ["src"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><h5 class="text-h5 mt-3 font-weight-semibold"${_scopeId3}>Mike Nielsen</h5><span class="text-h6 font-weight-regular"${_scopeId3}>Designer</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-center top-spacer" }, [
                            createVNode("div", { class: "avatar-border" }, [
                              createVNode(_component_v_avatar, {
                                size: "100",
                                class: "userImage"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: unref(_imports_0),
                                    width: "100",
                                    alt: "Mathew"
                                  }, null, 8, ["src"])
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("h5", { class: "text-h5 mt-3 font-weight-semibold" }, "Mike Nielsen"),
                            createVNode("span", { class: "text-h6 font-weight-regular" }, "Designer")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    lg: "4",
                    class: "d-flex align-center justify-center justify-lg-end order-sm-third text-sm-right text-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-sm-flex align-center justify-sm-space-between justify-center px-sm-10 py-1 gap-3"${_scopeId3}><div class="d-flex gap-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_btn, {
                          icon: "",
                          variant: "flat",
                          size: "x-small",
                          color: "primary",
                          class: "btn-brand-facebook"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_BrandFacebookIcon, { size: "16" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_BrandFacebookIcon, { size: "16" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          icon: "",
                          variant: "flat",
                          size: "x-small",
                          color: "info",
                          class: "btn-brand-twitter"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_BrandTwitterIcon, { size: "16" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_BrandTwitterIcon, { size: "16" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          icon: "",
                          variant: "flat",
                          size: "x-small",
                          color: "secondary",
                          class: "btn-brand-dribbble"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_BrandDribbbleIcon, { size: "16" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_BrandDribbbleIcon, { size: "16" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          icon: "",
                          variant: "flat",
                          size: "x-small",
                          color: "error",
                          class: "btn-brand-youtube"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_BrandYoutubeIcon, { size: "16" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_BrandYoutubeIcon, { size: "16" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "primary",
                          class: "px-6 mt-sm-0 mt-4",
                          size: "large"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Add to Story`);
                            } else {
                              return [
                                createTextVNode("Add to Story")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-sm-flex align-center justify-sm-space-between justify-center px-sm-10 py-1 gap-3" }, [
                            createVNode("div", { class: "d-flex gap-3" }, [
                              createVNode(_component_v_btn, {
                                icon: "",
                                variant: "flat",
                                size: "x-small",
                                color: "primary",
                                class: "btn-brand-facebook"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_BrandFacebookIcon, { size: "16" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                icon: "",
                                variant: "flat",
                                size: "x-small",
                                color: "info",
                                class: "btn-brand-twitter"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_BrandTwitterIcon, { size: "16" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                icon: "",
                                variant: "flat",
                                size: "x-small",
                                color: "secondary",
                                class: "btn-brand-dribbble"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_BrandDribbbleIcon, { size: "16" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                icon: "",
                                variant: "flat",
                                size: "x-small",
                                color: "error",
                                class: "btn-brand-youtube"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_BrandYoutubeIcon, { size: "16" })
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(_component_v_btn, {
                              color: "primary",
                              class: "px-6 mt-sm-0 mt-4",
                              size: "large"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Add to Story")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    md: "12",
                    class: "order-sm-last"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_tabs, {
                          modelValue: tab.value,
                          "onUpdate:modelValue": ($event) => tab.value = $event,
                          color: "primary",
                          dark: "",
                          class: "profiletab bg-lightinfo"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(items.value, (item) => {
                                _push5(ssrRenderComponent(_component_v_tab, {
                                  key: item.tab,
                                  to: item.href,
                                  class: "text-grey200"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      ssrRenderVNode(_push6, createVNode(resolveDynamicComponent(item.icon), {
                                        size: "18",
                                        "stroke-width": "1.5",
                                        class: "mr-sm-2 text-h6 text-grey200 icon"
                                      }, null), _parent6, _scopeId5);
                                      _push6(`<span class="d-sm-flex d-none"${_scopeId5}>${ssrInterpolate(item.tab)}</span>`);
                                    } else {
                                      return [
                                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                          size: "18",
                                          "stroke-width": "1.5",
                                          class: "mr-sm-2 text-h6 text-grey200 icon"
                                        })),
                                        createVNode("span", { class: "d-sm-flex d-none" }, toDisplayString(item.tab), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item) => {
                                  return openBlock(), createBlock(_component_v_tab, {
                                    key: item.tab,
                                    to: item.href,
                                    class: "text-grey200"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                        size: "18",
                                        "stroke-width": "1.5",
                                        class: "mr-sm-2 text-h6 text-grey200 icon"
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_tabs, {
                            modelValue: tab.value,
                            "onUpdate:modelValue": ($event) => tab.value = $event,
                            color: "primary",
                            dark: "",
                            class: "profiletab bg-lightinfo"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item) => {
                                return openBlock(), createBlock(_component_v_tab, {
                                  key: item.tab,
                                  to: item.href,
                                  class: "text-grey200"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                      size: "18",
                                      "stroke-width": "1.5",
                                      class: "mr-sm-2 text-h6 text-grey200 icon"
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "4",
                      sm: "12",
                      class: "order-sm-second"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "px-4 py-1" }, [
                          createVNode(_component_v_row, { class: "justify-center" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "4",
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_FileDescriptionIcon, {
                                    size: "20",
                                    class: "text-grey100"
                                  }),
                                  createVNode("h4", { class: "text-h4 font-weight-semibold" }, "938"),
                                  createVNode("h6", { class: "text-h6 font-weight-medium text-grey100" }, "Posts")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "4",
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(UserCircleIcon), {
                                    size: "20",
                                    class: "text-grey100"
                                  }),
                                  createVNode("h4", { class: "text-h4 font-weight-semibold" }, "3,586"),
                                  createVNode("h6", { class: "text-h6 font-weight-medium text-grey100" }, "Followers")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "4",
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UserCheckIcon, {
                                    size: "20",
                                    class: "text-grey100"
                                  }),
                                  createVNode("h4", { class: "text-h4 font-weight-semibold" }, "2,659"),
                                  createVNode("h6", { class: "text-h6 font-weight-medium text-grey100" }, "Following")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "4",
                      sm: "12",
                      class: "d-flex justify-center order-sml-first"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-center top-spacer" }, [
                          createVNode("div", { class: "avatar-border" }, [
                            createVNode(_component_v_avatar, {
                              size: "100",
                              class: "userImage"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: unref(_imports_0),
                                  width: "100",
                                  alt: "Mathew"
                                }, null, 8, ["src"])
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("h5", { class: "text-h5 mt-3 font-weight-semibold" }, "Mike Nielsen"),
                          createVNode("span", { class: "text-h6 font-weight-regular" }, "Designer")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "4",
                      class: "d-flex align-center justify-center justify-lg-end order-sm-third text-sm-right text-center"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-sm-flex align-center justify-sm-space-between justify-center px-sm-10 py-1 gap-3" }, [
                          createVNode("div", { class: "d-flex gap-3" }, [
                            createVNode(_component_v_btn, {
                              icon: "",
                              variant: "flat",
                              size: "x-small",
                              color: "primary",
                              class: "btn-brand-facebook"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BrandFacebookIcon, { size: "16" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              icon: "",
                              variant: "flat",
                              size: "x-small",
                              color: "info",
                              class: "btn-brand-twitter"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BrandTwitterIcon, { size: "16" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              icon: "",
                              variant: "flat",
                              size: "x-small",
                              color: "secondary",
                              class: "btn-brand-dribbble"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BrandDribbbleIcon, { size: "16" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              icon: "",
                              variant: "flat",
                              size: "x-small",
                              color: "error",
                              class: "btn-brand-youtube"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BrandYoutubeIcon, { size: "16" })
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(_component_v_btn, {
                            color: "primary",
                            class: "px-6 mt-sm-0 mt-4",
                            size: "large"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Add to Story")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      md: "12",
                      class: "order-sm-last"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_tabs, {
                          modelValue: tab.value,
                          "onUpdate:modelValue": ($event) => tab.value = $event,
                          color: "primary",
                          dark: "",
                          class: "profiletab bg-lightinfo"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item) => {
                              return openBlock(), createBlock(_component_v_tab, {
                                key: item.tab,
                                to: item.href,
                                class: "text-grey200"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                    size: "18",
                                    "stroke-width": "1.5",
                                    class: "mr-sm-2 text-h6 text-grey200 icon"
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
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("img", {
                src: unref(profileBg),
                alt: "profile",
                class: "w-100"
              }, null, 8, ["src"]),
              createVNode("div", null, [
                createVNode(_component_v_row, { class: "mt-1" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "4",
                      sm: "12",
                      class: "order-sm-second"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "px-4 py-1" }, [
                          createVNode(_component_v_row, { class: "justify-center" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "4",
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_FileDescriptionIcon, {
                                    size: "20",
                                    class: "text-grey100"
                                  }),
                                  createVNode("h4", { class: "text-h4 font-weight-semibold" }, "938"),
                                  createVNode("h6", { class: "text-h6 font-weight-medium text-grey100" }, "Posts")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "4",
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(UserCircleIcon), {
                                    size: "20",
                                    class: "text-grey100"
                                  }),
                                  createVNode("h4", { class: "text-h4 font-weight-semibold" }, "3,586"),
                                  createVNode("h6", { class: "text-h6 font-weight-medium text-grey100" }, "Followers")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "4",
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UserCheckIcon, {
                                    size: "20",
                                    class: "text-grey100"
                                  }),
                                  createVNode("h4", { class: "text-h4 font-weight-semibold" }, "2,659"),
                                  createVNode("h6", { class: "text-h6 font-weight-medium text-grey100" }, "Following")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "4",
                      sm: "12",
                      class: "d-flex justify-center order-sml-first"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-center top-spacer" }, [
                          createVNode("div", { class: "avatar-border" }, [
                            createVNode(_component_v_avatar, {
                              size: "100",
                              class: "userImage"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: unref(_imports_0),
                                  width: "100",
                                  alt: "Mathew"
                                }, null, 8, ["src"])
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("h5", { class: "text-h5 mt-3 font-weight-semibold" }, "Mike Nielsen"),
                          createVNode("span", { class: "text-h6 font-weight-regular" }, "Designer")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "4",
                      class: "d-flex align-center justify-center justify-lg-end order-sm-third text-sm-right text-center"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-sm-flex align-center justify-sm-space-between justify-center px-sm-10 py-1 gap-3" }, [
                          createVNode("div", { class: "d-flex gap-3" }, [
                            createVNode(_component_v_btn, {
                              icon: "",
                              variant: "flat",
                              size: "x-small",
                              color: "primary",
                              class: "btn-brand-facebook"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BrandFacebookIcon, { size: "16" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              icon: "",
                              variant: "flat",
                              size: "x-small",
                              color: "info",
                              class: "btn-brand-twitter"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BrandTwitterIcon, { size: "16" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              icon: "",
                              variant: "flat",
                              size: "x-small",
                              color: "secondary",
                              class: "btn-brand-dribbble"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BrandDribbbleIcon, { size: "16" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              icon: "",
                              variant: "flat",
                              size: "x-small",
                              color: "error",
                              class: "btn-brand-youtube"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BrandYoutubeIcon, { size: "16" })
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(_component_v_btn, {
                            color: "primary",
                            class: "px-6 mt-sm-0 mt-4",
                            size: "large"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Add to Story")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      md: "12",
                      class: "order-sm-last"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_tabs, {
                          modelValue: tab.value,
                          "onUpdate:modelValue": ($event) => tab.value = $event,
                          color: "primary",
                          dark: "",
                          class: "profiletab bg-lightinfo"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item) => {
                              return openBlock(), createBlock(_component_v_tab, {
                                key: item.tab,
                                to: item.href,
                                class: "text-grey200"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                    size: "18",
                                    "stroke-width": "1.5",
                                    class: "mr-sm-2 text-h6 text-grey200 icon"
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
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/user-profile/ProfileBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=ProfileBanner-D9Oehoy_.js.map
