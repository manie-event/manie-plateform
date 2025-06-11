import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext, createTextVNode, defineComponent, unref, ref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$6 } from "./BaseBreadcrumb-DAIjkUfv.js";
import { _ as _sfc_main$7 } from "./UiParentCard-DhlYzLUl.js";
import { _ as _sfc_main$8 } from "./UiChildCard-Xt7dDOL6.js";
import { _ as _export_sfc, h as user1, R as user2, l as user3 } from "../server.mjs";
import { MoodSmileIcon } from "vue-tabler-icons";
import { _ as _imports_0 } from "./virtual_public-Do_DI_-i.js";
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
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_v_avatar = resolveComponent("v-avatar");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex align-center gap-2 justify-center" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_avatar, {
    size: "40",
    variant: "flat"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", user1)} width="40" alt="Julia"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: user1,
            width: "40",
            alt: "Julia"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_avatar, {
    size: "40",
    variant: "flat"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", user2)} width="40" alt="Julia"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: user2,
            width: "40",
            alt: "Julia"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_avatar, {
    size: "40",
    variant: "flat"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", user3)} width="40" alt="Julia"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: user3,
            width: "40",
            alt: "Julia"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/avatar/ImageAvatar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ImageAvatar = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_avatar = resolveComponent("v-avatar");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex align-center gap-2 justify-center" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_avatar, {
    size: "40",
    color: "primary",
    variant: "flat",
    class: "text-h5 font-weight-medium"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` A `);
      } else {
        return [
          createTextVNode(" A ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_avatar, {
    size: "40",
    color: "secondary",
    variant: "flat",
    class: "text-h5 font-weight-medium"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`B`);
      } else {
        return [
          createTextVNode("B")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_avatar, {
    size: "40",
    color: "error",
    variant: "flat",
    class: "text-h5 font-weight-medium"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` C `);
      } else {
        return [
          createTextVNode(" C ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_avatar, {
    size: "40",
    color: "warning",
    variant: "flat",
    class: "text-h5 font-weight-medium"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` D `);
      } else {
        return [
          createTextVNode(" D ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_avatar, {
    size: "40",
    color: "success",
    variant: "flat",
    class: "text-h5 font-weight-medium"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` E `);
      } else {
        return [
          createTextVNode(" E ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/avatar/LetterAvatar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const LetterAvatar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "IconAvatar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_avatar = resolveComponent("v-avatar");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex align-center gap-2 justify-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_avatar, {
        size: "40",
        color: "primary",
        variant: "flat"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), { size: "25" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MoodSmileIcon), { size: "25" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_avatar, {
        size: "40",
        variant: "flat",
        color: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), { size: "25" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MoodSmileIcon), { size: "25" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_avatar, {
        size: "40",
        color: "error",
        variant: "flat"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), { size: "25" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MoodSmileIcon), { size: "25" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_avatar, {
        size: "40",
        color: "warning",
        variant: "flat"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), { size: "25" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MoodSmileIcon), { size: "25" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_avatar, {
        size: "40",
        color: "success",
        variant: "flat"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), { size: "25" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MoodSmileIcon), { size: "25" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/avatar/IconAvatar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VariantAvatar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_avatar = resolveComponent("v-avatar");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex align-center gap-2 justify-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_avatar, {
        size: "40",
        color: "primary",
        variant: "flat",
        rounded: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), { size: "25" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MoodSmileIcon), { size: "25" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_avatar, {
        size: "40",
        color: "primary",
        variant: "flat",
        rounded: "md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), { size: "25" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MoodSmileIcon), { size: "25" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_avatar, {
        size: "40",
        color: "primary",
        variant: "flat",
        rounded: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), { size: "25" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MoodSmileIcon), { size: "25" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/avatar/VariantAvatar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_avatar = resolveComponent("v-avatar");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex align-center gap-3 justify-center" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_avatar, {
    size: "x-small",
    variant: "flat"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} width="25" alt="Julia"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            width: "25",
            alt: "Julia"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_avatar, {
    size: "small",
    variant: "flat"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} width="35" alt="Julia"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            width: "35",
            alt: "Julia"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_avatar, {
    size: "medium",
    variant: "flat"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} width="40" alt="Julia"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            width: "40",
            alt: "Julia"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_avatar, {
    size: "large",
    variant: "flat"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} width="48" alt="Julia"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            width: "48",
            alt: "Julia"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_avatar, {
    size: "x-large",
    variant: "flat"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} width="56" alt="Julia"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            width: "56",
            alt: "Julia"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/avatar/SizeAvatar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SizeAvatar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Avatar",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Avatar" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Avatar",
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
                  _push3(ssrRenderComponent(_sfc_main$7, { title: "Avatar" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                lg: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$8, { title: "Image Avatars" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(ImageAvatar, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(ImageAvatar)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$8, { title: "Image Avatars" }, {
                                        default: withCtx(() => [
                                          createVNode(ImageAvatar)
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
                                lg: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$8, { title: "Letter Avatars" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(LetterAvatar, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(LetterAvatar)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$8, { title: "Letter Avatars" }, {
                                        default: withCtx(() => [
                                          createVNode(LetterAvatar)
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
                                lg: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$8, { title: "Icon Avatars" }, {
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
                                      createVNode(_sfc_main$8, { title: "Icon Avatars" }, {
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
                                lg: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$8, {
                                      title: "Variant",
                                      class: "pb-10"
                                    }, {
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
                                      createVNode(_sfc_main$8, {
                                        title: "Variant",
                                        class: "pb-10"
                                      }, {
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
                                lg: "8"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$8, { title: "Sizes" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(SizeAvatar, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(SizeAvatar)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$8, { title: "Sizes" }, {
                                        default: withCtx(() => [
                                          createVNode(SizeAvatar)
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
                                  lg: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$8, { title: "Image Avatars" }, {
                                      default: withCtx(() => [
                                        createVNode(ImageAvatar)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$8, { title: "Letter Avatars" }, {
                                      default: withCtx(() => [
                                        createVNode(LetterAvatar)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  lg: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$8, { title: "Icon Avatars" }, {
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
                                  lg: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$8, {
                                      title: "Variant",
                                      class: "pb-10"
                                    }, {
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
                                  lg: "8"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$8, { title: "Sizes" }, {
                                      default: withCtx(() => [
                                        createVNode(SizeAvatar)
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
                                lg: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$8, { title: "Image Avatars" }, {
                                    default: withCtx(() => [
                                      createVNode(ImageAvatar)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                lg: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$8, { title: "Letter Avatars" }, {
                                    default: withCtx(() => [
                                      createVNode(LetterAvatar)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                lg: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$8, { title: "Icon Avatars" }, {
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
                                lg: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$8, {
                                    title: "Variant",
                                    class: "pb-10"
                                  }, {
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
                                lg: "8"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$8, { title: "Sizes" }, {
                                    default: withCtx(() => [
                                      createVNode(SizeAvatar)
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
                    createVNode(_sfc_main$7, { title: "Avatar" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$8, { title: "Image Avatars" }, {
                                  default: withCtx(() => [
                                    createVNode(ImageAvatar)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$8, { title: "Letter Avatars" }, {
                                  default: withCtx(() => [
                                    createVNode(LetterAvatar)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$8, { title: "Icon Avatars" }, {
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
                              lg: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$8, {
                                  title: "Variant",
                                  class: "pb-10"
                                }, {
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
                              lg: "8"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$8, { title: "Sizes" }, {
                                  default: withCtx(() => [
                                    createVNode(SizeAvatar)
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
                  createVNode(_sfc_main$7, { title: "Avatar" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$8, { title: "Image Avatars" }, {
                                default: withCtx(() => [
                                  createVNode(ImageAvatar)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$8, { title: "Letter Avatars" }, {
                                default: withCtx(() => [
                                  createVNode(LetterAvatar)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$8, { title: "Icon Avatars" }, {
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
                            lg: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$8, {
                                title: "Variant",
                                class: "pb-10"
                              }, {
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
                            lg: "8"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$8, { title: "Sizes" }, {
                                default: withCtx(() => [
                                  createVNode(SizeAvatar)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ui-components/Avatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Avatar-BybiB9jp.js.map
