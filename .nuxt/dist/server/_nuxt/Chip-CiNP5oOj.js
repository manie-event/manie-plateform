import { defineComponent, resolveComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, useSSRContext, ref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$8 } from "./BaseBreadcrumb-DAIjkUfv.js";
import { _ as _sfc_main$9 } from "./UiParentCard-DhlYzLUl.js";
import { _ as _sfc_main$a } from "./UiChildCard-Xt7dDOL6.js";
import { _ as _imports_0 } from "./virtual_public-Do_DI_-i.js";
import { _ as _imports_1 } from "./virtual_public-C621Y9bP.js";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { MoodSmileIcon, CircleXIcon, ChecksIcon, UserCircleIcon } from "vue-tabler-icons";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
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
const _imports_2 = publicAssetsURL("/images/profile/user-5.jpg");
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "FilledColor",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_avatar = resolveComponent("v-avatar");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-wrap align-center gap-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_chip, { class: "text-body-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), {
              class: "mr-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
            _push2(` Default Filled `);
          } else {
            return [
              createVNode(unref(MoodSmileIcon), {
                class: "mr-2",
                start: "",
                size: "20"
              }),
              createTextVNode(" Default Filled ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, { class: "text-body-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), {
              class: "mr-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
            _push2(` Default Deletable `);
            _push2(ssrRenderComponent(unref(CircleXIcon), {
              class: "ml-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MoodSmileIcon), {
                class: "mr-2",
                start: "",
                size: "20"
              }),
              createTextVNode(" Default Deletable "),
              createVNode(unref(CircleXIcon), {
                class: "ml-2",
                start: "",
                size: "20"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        color: "primary",
        class: "text-body-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_avatar, {
              start: "",
              size: "25"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} width="25"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      width: "25"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Primary Filled `);
          } else {
            return [
              createVNode(_component_v_avatar, {
                start: "",
                size: "25"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_0,
                    width: "25"
                  })
                ]),
                _: 1
              }),
              createTextVNode(" Primary Filled ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        color: "primary",
        class: "text-body-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_avatar, {
              start: "",
              size: "25"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} width="25"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      width: "25"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Primary Deletable `);
            _push2(ssrRenderComponent(unref(CircleXIcon), {
              class: "ml-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_avatar, {
                start: "",
                size: "25"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_0,
                    width: "25"
                  })
                ]),
                _: 1
              }),
              createTextVNode(" Primary Deletable "),
              createVNode(unref(CircleXIcon), {
                class: "ml-2",
                start: "",
                size: "20"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        color: "secondary",
        class: "text-body-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), {
              class: "mr-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
            _push2(` Secondary Filled `);
          } else {
            return [
              createVNode(unref(MoodSmileIcon), {
                class: "mr-2",
                start: "",
                size: "20"
              }),
              createTextVNode(" Secondary Filled ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        color: "secondary",
        class: "text-body-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), {
              class: "mr-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
            _push2(` Secondary Deletable `);
            _push2(ssrRenderComponent(unref(CircleXIcon), {
              class: "ml-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MoodSmileIcon), {
                class: "mr-2",
                start: "",
                size: "20"
              }),
              createTextVNode(" Secondary Deletable "),
              createVNode(unref(CircleXIcon), {
                class: "ml-2",
                start: "",
                size: "20"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        color: "success",
        class: "text-body-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_avatar, {
              start: "",
              size: "25"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_1)} width="25"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_1,
                      width: "25"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Default Filled `);
          } else {
            return [
              createVNode(_component_v_avatar, {
                start: "",
                size: "25"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_1,
                    width: "25"
                  })
                ]),
                _: 1
              }),
              createTextVNode(" Default Filled ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        color: "success",
        class: "text-body-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_avatar, {
              start: "",
              size: "25"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_1)} width="25"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_1,
                      width: "25"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Default Deletable `);
            _push2(ssrRenderComponent(unref(CircleXIcon), {
              class: "ml-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_avatar, {
                start: "",
                size: "25"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_1,
                    width: "25"
                  })
                ]),
                _: 1
              }),
              createTextVNode(" Default Deletable "),
              createVNode(unref(CircleXIcon), {
                class: "ml-2",
                start: "",
                size: "20"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        color: "warning",
        class: "text-body-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), {
              class: "mr-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
            _push2(` Default Filled `);
          } else {
            return [
              createVNode(unref(MoodSmileIcon), {
                class: "mr-2",
                start: "",
                size: "20"
              }),
              createTextVNode(" Default Filled ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        color: "warning",
        class: "text-body-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), {
              class: "mr-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
            _push2(` Default Deletable `);
            _push2(ssrRenderComponent(unref(CircleXIcon), {
              class: "ml-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MoodSmileIcon), {
                class: "mr-2",
                start: "",
                size: "20"
              }),
              createTextVNode(" Default Deletable "),
              createVNode(unref(CircleXIcon), {
                class: "ml-2",
                start: "",
                size: "20"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        color: "error",
        class: "text-body-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_avatar, {
              start: "",
              size: "25"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_2)} width="25"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_2,
                      width: "25"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Default Filled `);
          } else {
            return [
              createVNode(_component_v_avatar, {
                start: "",
                size: "25"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_2,
                    width: "25"
                  })
                ]),
                _: 1
              }),
              createTextVNode(" Default Filled ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        color: "error",
        class: "text-body-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_avatar, {
              start: "",
              size: "25"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_2)} width="25"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_2,
                      width: "25"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Default Deletable `);
            _push2(ssrRenderComponent(unref(CircleXIcon), {
              class: "ml-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_avatar, {
                start: "",
                size: "25"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_2,
                    width: "25"
                  })
                ]),
                _: 1
              }),
              createTextVNode(" Default Deletable "),
              createVNode(unref(CircleXIcon), {
                class: "ml-2",
                start: "",
                size: "20"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/chip/FilledColor.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Outlined",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_avatar = resolveComponent("v-avatar");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-wrap align-center gap-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_chip, {
        variant: "outlined",
        class: "text-body-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), {
              class: "mr-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
            _push2(` Default Filled `);
          } else {
            return [
              createVNode(unref(MoodSmileIcon), {
                class: "mr-2",
                start: "",
                size: "20"
              }),
              createTextVNode(" Default Filled ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        variant: "outlined",
        class: "text-body-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), {
              class: "mr-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
            _push2(` Default Deletable `);
            _push2(ssrRenderComponent(unref(CircleXIcon), {
              class: "ml-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MoodSmileIcon), {
                class: "mr-2",
                start: "",
                size: "20"
              }),
              createTextVNode(" Default Deletable "),
              createVNode(unref(CircleXIcon), {
                class: "ml-2",
                start: "",
                size: "20"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        variant: "outlined",
        color: "primary",
        class: "text-body-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_avatar, {
              start: "",
              size: "25"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} width="25"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      width: "25"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Primary Filled `);
          } else {
            return [
              createVNode(_component_v_avatar, {
                start: "",
                size: "25"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_0,
                    width: "25"
                  })
                ]),
                _: 1
              }),
              createTextVNode(" Primary Filled ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        variant: "outlined",
        color: "primary",
        class: "text-body-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_avatar, {
              start: "",
              size: "25"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} width="25"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      width: "25"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Primary Deletable `);
            _push2(ssrRenderComponent(unref(CircleXIcon), {
              class: "ml-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_avatar, {
                start: "",
                size: "25"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_0,
                    width: "25"
                  })
                ]),
                _: 1
              }),
              createTextVNode(" Primary Deletable "),
              createVNode(unref(CircleXIcon), {
                class: "ml-2",
                start: "",
                size: "20"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        variant: "outlined",
        color: "secondary",
        class: "text-body-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), {
              class: "mr-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
            _push2(` Secondary Filled `);
          } else {
            return [
              createVNode(unref(MoodSmileIcon), {
                class: "mr-2",
                start: "",
                size: "20"
              }),
              createTextVNode(" Secondary Filled ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        variant: "outlined",
        color: "secondary",
        class: "text-body-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), {
              class: "mr-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
            _push2(` Secondary Deletable `);
            _push2(ssrRenderComponent(unref(CircleXIcon), {
              class: "ml-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MoodSmileIcon), {
                class: "mr-2",
                start: "",
                size: "20"
              }),
              createTextVNode(" Secondary Deletable "),
              createVNode(unref(CircleXIcon), {
                class: "ml-2",
                start: "",
                size: "20"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        variant: "outlined",
        color: "success",
        class: "text-body-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_avatar, {
              start: "",
              size: "25"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_1)} width="25"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_1,
                      width: "25"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Default Filled `);
          } else {
            return [
              createVNode(_component_v_avatar, {
                start: "",
                size: "25"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_1,
                    width: "25"
                  })
                ]),
                _: 1
              }),
              createTextVNode(" Default Filled ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        variant: "outlined",
        color: "success",
        class: "text-body-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_avatar, {
              start: "",
              size: "25"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_1)} width="25"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_1,
                      width: "25"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Default Deletable `);
            _push2(ssrRenderComponent(unref(CircleXIcon), {
              class: "ml-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_avatar, {
                start: "",
                size: "25"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_1,
                    width: "25"
                  })
                ]),
                _: 1
              }),
              createTextVNode(" Default Deletable "),
              createVNode(unref(CircleXIcon), {
                class: "ml-2",
                start: "",
                size: "20"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        variant: "outlined",
        color: "warning",
        class: "text-body-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), {
              class: "mr-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
            _push2(` Default Filled `);
          } else {
            return [
              createVNode(unref(MoodSmileIcon), {
                class: "mr-2",
                start: "",
                size: "20"
              }),
              createTextVNode(" Default Filled ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        variant: "outlined",
        color: "warning",
        class: "text-body-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), {
              class: "mr-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
            _push2(` Default Deletable `);
            _push2(ssrRenderComponent(unref(CircleXIcon), {
              class: "ml-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MoodSmileIcon), {
                class: "mr-2",
                start: "",
                size: "20"
              }),
              createTextVNode(" Default Deletable "),
              createVNode(unref(CircleXIcon), {
                class: "ml-2",
                start: "",
                size: "20"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        variant: "outlined",
        color: "error",
        class: "text-body-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_avatar, {
              start: "",
              size: "25"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_2)} width="25"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_2,
                      width: "25"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Default Filled `);
          } else {
            return [
              createVNode(_component_v_avatar, {
                start: "",
                size: "25"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_2,
                    width: "25"
                  })
                ]),
                _: 1
              }),
              createTextVNode(" Default Filled ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        variant: "outlined",
        color: "error",
        class: "text-body-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_avatar, {
              start: "",
              size: "25"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_2)} width="25"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_2,
                      width: "25"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Default Deletable `);
            _push2(ssrRenderComponent(unref(CircleXIcon), {
              class: "ml-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_avatar, {
                start: "",
                size: "25"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_2,
                    width: "25"
                  })
                ]),
                _: 1
              }),
              createTextVNode(" Default Deletable "),
              createVNode(unref(CircleXIcon), {
                class: "ml-2",
                start: "",
                size: "20"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/chip/Outlined.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CustomIcon",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_chip = resolveComponent("v-chip");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-sm-row flex-wrap flex-xl-nowrap align-center gap-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_chip, { color: "primary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), {
              class: "mr-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
            _push2(` Custom Icon `);
            _push2(ssrRenderComponent(unref(ChecksIcon), {
              class: "ml-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MoodSmileIcon), {
                class: "mr-2",
                start: "",
                size: "20"
              }),
              createTextVNode(" Custom Icon "),
              createVNode(unref(ChecksIcon), {
                class: "ml-2",
                start: "",
                size: "20"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, { color: "secondary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(UserCircleIcon), {
              class: "mr-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
            _push2(` Custom Icon `);
            _push2(ssrRenderComponent(unref(ChecksIcon), {
              class: "ml-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(UserCircleIcon), {
                class: "mr-2",
                start: "",
                size: "20"
              }),
              createTextVNode(" Custom Icon "),
              createVNode(unref(ChecksIcon), {
                class: "ml-2",
                start: "",
                size: "20"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/chip/CustomIcon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CustomIconOutlined",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_chip = resolveComponent("v-chip");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-sm-row flex-wrap flex-xl-nowrap align-center gap-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_chip, {
        color: "primary",
        variant: "outlined"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), {
              class: "mr-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
            _push2(` Custom Icon `);
            _push2(ssrRenderComponent(unref(ChecksIcon), {
              class: "ml-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MoodSmileIcon), {
                class: "mr-2",
                start: "",
                size: "20"
              }),
              createTextVNode(" Custom Icon "),
              createVNode(unref(ChecksIcon), {
                class: "ml-2",
                start: "",
                size: "20"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        color: "secondary",
        variant: "outlined"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(UserCircleIcon), {
              class: "mr-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
            _push2(` Custom Icon `);
            _push2(ssrRenderComponent(unref(ChecksIcon), {
              class: "ml-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(UserCircleIcon), {
                class: "mr-2",
                start: "",
                size: "20"
              }),
              createTextVNode(" Custom Icon "),
              createVNode(unref(ChecksIcon), {
                class: "ml-2",
                start: "",
                size: "20"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/chip/CustomIconOutlined.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Disabled",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_chip = resolveComponent("v-chip");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-sm-row flex-wrap flex-xl-nowrap align-center gap-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_chip, {
        disabled: "",
        variant: "outlined"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MoodSmileIcon), {
              class: "mr-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
            _push2(` Custom Icon `);
            _push2(ssrRenderComponent(unref(ChecksIcon), {
              class: "ml-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MoodSmileIcon), {
                class: "mr-2",
                start: "",
                size: "20"
              }),
              createTextVNode(" Custom Icon "),
              createVNode(unref(ChecksIcon), {
                class: "ml-2",
                start: "",
                size: "20"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_chip, {
        color: "secondary",
        disabled: "",
        variant: "outlined"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(UserCircleIcon), {
              class: "mr-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
            _push2(` Custom Icon `);
            _push2(ssrRenderComponent(unref(ChecksIcon), {
              class: "ml-2",
              start: "",
              size: "20"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(UserCircleIcon), {
                class: "mr-2",
                start: "",
                size: "20"
              }),
              createTextVNode(" Custom Icon "),
              createVNode(unref(ChecksIcon), {
                class: "ml-2",
                start: "",
                size: "20"
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/chip/Disabled.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_chip = resolveComponent("v-chip");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-sm-row flex-wrap flex-xl-nowrap align-center gap-3" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_chip, {
    color: "primary",
    size: "x-small"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` x-small `);
      } else {
        return [
          createTextVNode(" x-small ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_chip, {
    color: "primary",
    size: "small"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` small `);
      } else {
        return [
          createTextVNode(" small ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_chip, { color: "primary" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Default `);
      } else {
        return [
          createTextVNode(" Default ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_chip, {
    color: "primary",
    size: "large"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` large `);
      } else {
        return [
          createTextVNode(" large ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_chip, {
    color: "primary",
    size: "x-large"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` x-large `);
      } else {
        return [
          createTextVNode(" x-large ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/chip/Sizes.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Sizes = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_chip = resolveComponent("v-chip");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-wrap align-center gap-3" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_chip, {
    closable: "",
    color: "primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Primary Deletable`);
      } else {
        return [
          createTextVNode(" Primary Deletable")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_chip, {
    closable: "",
    color: "secondary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Secondary Deletable`);
      } else {
        return [
          createTextVNode(" Secondary Deletable")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_chip, {
    closable: "",
    color: "warning"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Warning Deletable`);
      } else {
        return [
          createTextVNode(" Warning Deletable")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_chip, {
    closable: "",
    color: "success"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Success Deletable`);
      } else {
        return [
          createTextVNode(" Success Deletable")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_chip, {
    closable: "",
    color: "error"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Error Deletable`);
      } else {
        return [
          createTextVNode(" Error Deletable")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_chip, {
    closable: "",
    color: "info"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Info Deletable`);
      } else {
        return [
          createTextVNode(" Info Deletable")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/chip/Closable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Closable = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Chip",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Chip" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Chip",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$8, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$9, { title: "Chip" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$a, { title: "Filled" }, {
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
                                      createVNode(_sfc_main$a, { title: "Filled" }, {
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
                              _push5(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$a, { title: "Outlined" }, {
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
                                      createVNode(_sfc_main$a, { title: "Outlined" }, {
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
                                    _push6(ssrRenderComponent(_sfc_main$a, { title: "Custom Icon" }, {
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
                                      createVNode(_sfc_main$a, { title: "Custom Icon" }, {
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
                                    _push6(ssrRenderComponent(_sfc_main$a, { title: "Custom Outlined Icon" }, {
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
                                      createVNode(_sfc_main$a, { title: "Custom Outlined Icon" }, {
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
                                    _push6(ssrRenderComponent(_sfc_main$a, { title: "Disabled" }, {
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
                                      createVNode(_sfc_main$a, { title: "Disabled" }, {
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
                                    _push6(ssrRenderComponent(_sfc_main$a, { title: "Sizes" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(Sizes, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(Sizes)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$a, { title: "Sizes" }, {
                                        default: withCtx(() => [
                                          createVNode(Sizes)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$a, { title: "Closable" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(Closable, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(Closable)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$a, { title: "Closable" }, {
                                        default: withCtx(() => [
                                          createVNode(Closable)
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
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$a, { title: "Filled" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$7)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$a, { title: "Outlined" }, {
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
                                    createVNode(_sfc_main$a, { title: "Custom Icon" }, {
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
                                    createVNode(_sfc_main$a, { title: "Custom Outlined Icon" }, {
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
                                    createVNode(_sfc_main$a, { title: "Disabled" }, {
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
                                    createVNode(_sfc_main$a, { title: "Sizes" }, {
                                      default: withCtx(() => [
                                        createVNode(Sizes)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$a, { title: "Closable" }, {
                                      default: withCtx(() => [
                                        createVNode(Closable)
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
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$a, { title: "Filled" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$7)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$a, { title: "Outlined" }, {
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
                                  createVNode(_sfc_main$a, { title: "Custom Icon" }, {
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
                                  createVNode(_sfc_main$a, { title: "Custom Outlined Icon" }, {
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
                                  createVNode(_sfc_main$a, { title: "Disabled" }, {
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
                                  createVNode(_sfc_main$a, { title: "Sizes" }, {
                                    default: withCtx(() => [
                                      createVNode(Sizes)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$a, { title: "Closable" }, {
                                    default: withCtx(() => [
                                      createVNode(Closable)
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
                    createVNode(_sfc_main$9, { title: "Chip" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$a, { title: "Filled" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$7)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$a, { title: "Outlined" }, {
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
                                createVNode(_sfc_main$a, { title: "Custom Icon" }, {
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
                                createVNode(_sfc_main$a, { title: "Custom Outlined Icon" }, {
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
                                createVNode(_sfc_main$a, { title: "Disabled" }, {
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
                                createVNode(_sfc_main$a, { title: "Sizes" }, {
                                  default: withCtx(() => [
                                    createVNode(Sizes)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$a, { title: "Closable" }, {
                                  default: withCtx(() => [
                                    createVNode(Closable)
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
                  createVNode(_sfc_main$9, { title: "Chip" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$a, { title: "Filled" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$7)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$a, { title: "Outlined" }, {
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
                              createVNode(_sfc_main$a, { title: "Custom Icon" }, {
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
                              createVNode(_sfc_main$a, { title: "Custom Outlined Icon" }, {
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
                              createVNode(_sfc_main$a, { title: "Disabled" }, {
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
                              createVNode(_sfc_main$a, { title: "Sizes" }, {
                                default: withCtx(() => [
                                  createVNode(Sizes)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$a, { title: "Closable" }, {
                                default: withCtx(() => [
                                  createVNode(Closable)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ui-components/Chip.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Chip-CiNP5oOj.js.map
