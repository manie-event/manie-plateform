import { defineComponent, ref, resolveComponent, withCtx, createVNode, mergeProps, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$g } from './BaseBreadcrumb-DAIjkUfv.mjs';
import { _ as _sfc_main$h } from './UiParentCard-DhlYzLUl.mjs';
import { _ as _sfc_main$i } from './UiChildCard-Xt7dDOL6.mjs';
import { _ as _export_sfc } from './server.mjs';
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
import 'vue-tabler-icons';
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

const _sfc_main$f = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  const _component_v_btn = resolveComponent("v-btn");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex gap-3 align-center flex-column flex-wrap flex-xl-nowrap flex-sm-row fill-height d-flex justify-space-between" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_btn, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`elevates (default)`);
      } else {
        return [
          createTextVNode("elevates (default)")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    variant: "flat",
    class: "px-4 rounded-pill",
    color: "primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`flat`);
      } else {
        return [
          createTextVNode("flat")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    variant: "tonal",
    class: "px-4 rounded-pill",
    color: "primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`tonal`);
      } else {
        return [
          createTextVNode("tonal")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    variant: "outlined",
    class: "px-4 rounded-pill",
    color: "primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`outlined`);
      } else {
        return [
          createTextVNode("outlined")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    variant: "text",
    class: "px-4 rounded-pill",
    color: "primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`text`);
      } else {
        return [
          createTextVNode("text")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    variant: "plain",
    class: "px-4 rounded-pill",
    color: "primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`plain`);
      } else {
        return [
          createTextVNode("plain")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/button/BaseButtons.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const BaseButtons = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "ColorsButtons",
  __ssrInlineRender: true,
  setup(__props) {
    const btnsColor = ref(["primary", "secondary", "error", "warning", "success"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex gap-3 align-center flex-column flex-wrap flex-xl-nowrap flex-sm-row fill-height" }, _attrs))}><!--[-->`);
      ssrRenderList(btnsColor.value, (btn) => {
        _push(ssrRenderComponent(_component_v_btn, {
          key: btn,
          color: btn,
          class: "px-4 rounded-pill"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(btn)}`);
            } else {
              return [
                createTextVNode(toDisplayString(btn), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/button/ColorsButtons.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  const _component_v_btn = resolveComponent("v-btn");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex gap-3 justify-center align-center flex-column flex-wrap flex-xl-nowrap flex-sm-row fill-height" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_btn, {
    color: "primary",
    variant: "outlined",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`primary`);
      } else {
        return [
          createTextVNode("primary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    color: "secondary",
    variant: "outlined",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`secondary`);
      } else {
        return [
          createTextVNode("secondary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    variant: "flat",
    disabled: "",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Disabled `);
      } else {
        return [
          createTextVNode(" Disabled ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    color: "info",
    variant: "outlined",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`link`);
      } else {
        return [
          createTextVNode("link")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/button/OutlinedButtons.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const OutlinedButtons = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$c = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_v_btn = resolveComponent("v-btn");
  const _component_TrashIcon = resolveComponent("TrashIcon");
  const _component_SendIcon = resolveComponent("SendIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex gap-3 justify-center align-center flex-column flex-wrap flex-xl-nowrap flex-sm-row fill-height" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_btn, {
    flat: "",
    color: "error",
    variant: "outlined",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TrashIcon, {
          "stroke-width": "1.5",
          size: "18",
          class: "mr-2"
        }, null, _parent2, _scopeId));
        _push2(`left icon `);
      } else {
        return [
          createVNode(_component_TrashIcon, {
            "stroke-width": "1.5",
            size: "18",
            class: "mr-2"
          }),
          createTextVNode("left icon ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    flat: "",
    color: "secondary",
    variant: "outlined",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` right icon `);
        _push2(ssrRenderComponent(_component_SendIcon, {
          "stroke-width": "1.5",
          size: "18",
          class: "ml-2"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createTextVNode(" right icon "),
          createVNode(_component_SendIcon, {
            "stroke-width": "1.5",
            size: "18",
            class: "ml-2"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/button/IconsButtons.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const IconsButtons = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$b = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_v_btn = resolveComponent("v-btn");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex gap-2 justify-space-around align-center flex-column flex-md-row fill-height" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_btn, {
    size: "x-small",
    color: "primary",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Extra small `);
      } else {
        return [
          createTextVNode(" Extra small ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    size: "small",
    color: "primary",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Small `);
      } else {
        return [
          createTextVNode(" Small ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    color: "primary",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Normal `);
      } else {
        return [
          createTextVNode(" Normal ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    color: "primary",
    size: "large",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Large `);
      } else {
        return [
          createTextVNode(" Large ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    size: "x-large",
    color: "primary",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Extra large `);
      } else {
        return [
          createTextVNode(" Extra large ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/button/SizeButtons.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const SizeButtons = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "TextButtons",
  __ssrInlineRender: true,
  setup(__props) {
    const btnsColor = ref(["primary", "secondary", "success", "error", "warning"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-wrap gap-3 my-2 align-center flex-column flex-wrap flex-xl-nowrap flex-sm-row fill-height" }, _attrs))}><!--[-->`);
      ssrRenderList(btnsColor.value, (btn) => {
        _push(ssrRenderComponent(_component_v_btn, {
          key: btn,
          color: btn,
          variant: "text"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(btn)}`);
            } else {
              return [
                createTextVNode(toDisplayString(btn), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/button/TextButtons.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_v_btn = resolveComponent("v-btn");
  const _component_SendIcon = resolveComponent("SendIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-wrap justify-center gap-3 align-center flex-column flex-sm-row fill-height" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_btn, {
    variant: "outlined",
    icon: "",
    color: "primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SendIcon, {
          "stroke-width": "1.5",
          size: "22"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SendIcon, {
            "stroke-width": "1.5",
            size: "22"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    variant: "outlined",
    icon: "",
    color: "secondary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SendIcon, {
          "stroke-width": "1.5",
          size: "22"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SendIcon, {
            "stroke-width": "1.5",
            size: "22"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    variant: "outlined",
    icon: "",
    color: "success"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SendIcon, {
          "stroke-width": "1.5",
          size: "22"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SendIcon, {
            "stroke-width": "1.5",
            size: "22"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    variant: "outlined",
    icon: "",
    color: "error"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SendIcon, {
          "stroke-width": "1.5",
          size: "22"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SendIcon, {
            "stroke-width": "1.5",
            size: "22"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    variant: "outlined",
    icon: "",
    color: "warning"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SendIcon, {
          "stroke-width": "1.5",
          size: "22"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SendIcon, {
            "stroke-width": "1.5",
            size: "22"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/button/OutlineIconColor.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const OutlineIconColor = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_v_btn = resolveComponent("v-btn");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex gap-2 justify-center align-center flex-column flex-md-row fill-height" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_btn, {
    size: "x-small",
    variant: "outlined",
    color: "primary",
    flat: "",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Extra small `);
      } else {
        return [
          createTextVNode(" Extra small ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    size: "small",
    variant: "outlined",
    color: "primary",
    flat: "",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Small `);
      } else {
        return [
          createTextVNode(" Small ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    color: "primary",
    variant: "outlined",
    flat: "",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Normal `);
      } else {
        return [
          createTextVNode(" Normal ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    color: "primary",
    variant: "outlined",
    size: "large",
    flat: "",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Large `);
      } else {
        return [
          createTextVNode(" Large ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    size: "x-large",
    variant: "outlined",
    color: "primary",
    flat: "",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Extra large `);
      } else {
        return [
          createTextVNode(" Extra large ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/button/OutlineSizes.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const OutlineSizes = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_v_btn = resolveComponent("v-btn");
  const _component_BellIcon = resolveComponent("BellIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-wrap justify-center gap-3 align-center flex-column flex-sm-row fill-height" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_btn, {
    color: "primary",
    icon: "",
    size: "x-small",
    variant: "outlined",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BellIcon, { "stroke-width": "1.5" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BellIcon, { "stroke-width": "1.5" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    color: "secondary",
    icon: "",
    size: "small",
    variant: "outlined",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BellIcon, { "stroke-width": "1.5" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BellIcon, { "stroke-width": "1.5" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    color: "secondary",
    icon: "",
    variant: "outlined",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BellIcon, { "stroke-width": "1.5" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BellIcon, { "stroke-width": "1.5" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    color: "error",
    icon: "",
    size: "large",
    variant: "outlined",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BellIcon, { "stroke-width": "1.5" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BellIcon, { "stroke-width": "1.5" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    color: "warning",
    icon: "",
    size: "x-large",
    variant: "outlined",
    class: "px-4 rounded-pill"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BellIcon, { "stroke-width": "1.5" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BellIcon, { "stroke-width": "1.5" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/button/OutlinedIconSize.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const OutlinedIconSize = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_btn = resolveComponent("v-btn");
  const _component_SendIcon = resolveComponent("SendIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-wrap justify-center gap-3 align-center flex-column flex-sm-row fill-height" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_btn, {
    icon: "",
    color: "primary",
    flat: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SendIcon, {
          "stroke-width": "1.5",
          size: "22"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SendIcon, {
            "stroke-width": "1.5",
            size: "22"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    icon: "",
    color: "secondary",
    flat: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SendIcon, {
          "stroke-width": "1.5",
          size: "22"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SendIcon, {
            "stroke-width": "1.5",
            size: "22"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    icon: "",
    color: "success",
    flat: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SendIcon, {
          "stroke-width": "1.5",
          size: "22"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SendIcon, {
            "stroke-width": "1.5",
            size: "22"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    icon: "",
    color: "error",
    flat: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SendIcon, {
          "stroke-width": "1.5",
          size: "22"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SendIcon, {
            "stroke-width": "1.5",
            size: "22"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    icon: "",
    color: "warning",
    flat: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SendIcon, {
          "stroke-width": "1.5",
          size: "22"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SendIcon, {
            "stroke-width": "1.5",
            size: "22"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/button/IconColor.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const IconColor = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_btn = resolveComponent("v-btn");
  const _component_BellIcon = resolveComponent("BellIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-wrap justify-center gap-3 align-center flex-column flex-sm-row fill-height" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_btn, {
    color: "primary",
    icon: "",
    size: "x-small",
    flat: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BellIcon, { "stroke-width": "1.5" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BellIcon, { "stroke-width": "1.5" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    color: "secondary",
    icon: "",
    size: "small",
    flat: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BellIcon, { "stroke-width": "1.5" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BellIcon, { "stroke-width": "1.5" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    color: "success",
    icon: "",
    flat: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BellIcon, { "stroke-width": "1.5" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BellIcon, { "stroke-width": "1.5" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    color: "error",
    icon: "",
    size: "large",
    flat: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BellIcon, { "stroke-width": "1.5" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BellIcon, { "stroke-width": "1.5" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_btn, {
    color: "warning",
    icon: "",
    size: "x-large",
    flat: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BellIcon, { "stroke-width": "1.5" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BellIcon, { "stroke-width": "1.5" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/button/IconColorSizes.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const IconColorSizes = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Default",
  __ssrInlineRender: true,
  setup(__props) {
    const toggle = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn_toggle = resolveComponent("v-btn-toggle");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_btn_toggle, {
        modelValue: toggle.value,
        "onUpdate:modelValue": ($event) => toggle.value = $event,
        color: "primary",
        class: "text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, { icon: "mdi-format-align-left" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, { icon: "mdi-format-align-center" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, { icon: "mdi-format-align-right" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, { icon: "mdi-format-align-justify" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, { icon: "mdi-format-align-left" }),
              createVNode(_component_v_btn, { icon: "mdi-format-align-center" }),
              createVNode(_component_v_btn, { icon: "mdi-format-align-right" }),
              createVNode(_component_v_btn, { icon: "mdi-format-align-justify" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/button/buttonGroup/Default.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Text",
  __ssrInlineRender: true,
  setup(__props) {
    const toggle = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn_toggle = resolveComponent("v-btn-toggle");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_btn_toggle, {
        modelValue: toggle.value,
        "onUpdate:modelValue": ($event) => toggle.value = $event,
        color: "primary",
        variant: "text"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, { icon: "mdi-format-align-left" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, { icon: "mdi-format-align-center" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, { icon: "mdi-format-align-right" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, { icon: "mdi-format-align-justify" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, { icon: "mdi-format-align-left" }),
              createVNode(_component_v_btn, { icon: "mdi-format-align-center" }),
              createVNode(_component_v_btn, { icon: "mdi-format-align-right" }),
              createVNode(_component_v_btn, { icon: "mdi-format-align-justify" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/button/buttonGroup/Text.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Plain",
  __ssrInlineRender: true,
  setup(__props) {
    const toggle = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn_toggle = resolveComponent("v-btn-toggle");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_btn_toggle, {
        modelValue: toggle.value,
        "onUpdate:modelValue": ($event) => toggle.value = $event,
        color: "primary",
        variant: "plain"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, { icon: "mdi-format-align-left" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, { icon: "mdi-format-align-center" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, { icon: "mdi-format-align-right" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, { icon: "mdi-format-align-justify" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, { icon: "mdi-format-align-left" }),
              createVNode(_component_v_btn, { icon: "mdi-format-align-center" }),
              createVNode(_component_v_btn, { icon: "mdi-format-align-right" }),
              createVNode(_component_v_btn, { icon: "mdi-format-align-justify" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/button/buttonGroup/Plain.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Outlined",
  __ssrInlineRender: true,
  setup(__props) {
    const toggle = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn_toggle = resolveComponent("v-btn-toggle");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_btn_toggle, {
        modelValue: toggle.value,
        "onUpdate:modelValue": ($event) => toggle.value = $event,
        color: "primary",
        variant: "outlined"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, { icon: "mdi-format-align-left" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, { icon: "mdi-format-align-center" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, { icon: "mdi-format-align-right" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, { icon: "mdi-format-align-justify" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, { icon: "mdi-format-align-left" }),
              createVNode(_component_v_btn, { icon: "mdi-format-align-center" }),
              createVNode(_component_v_btn, { icon: "mdi-format-align-right" }),
              createVNode(_component_v_btn, { icon: "mdi-format-align-justify" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/button/buttonGroup/Outlined.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Buttons" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Buttons",
        disabled: true,
        href: "#"
      }
    ]);
    ref(["primary", "secondary", "success", "error", "warning"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$g, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$h, { title: "Buttons" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                sm: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$i, { title: "Base" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(BaseButtons, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(BaseButtons)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$i, { title: "Base" }, {
                                        default: withCtx(() => [
                                          createVNode(BaseButtons)
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
                                    _push6(ssrRenderComponent(_sfc_main$i, { title: "Colors" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$e, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$e)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$i, { title: "Colors" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$e)
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
                                    _push6(ssrRenderComponent(_sfc_main$i, { title: "Size" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(SizeButtons, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(SizeButtons)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$i, { title: "Size" }, {
                                        default: withCtx(() => [
                                          createVNode(SizeButtons)
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
                                    _push6(ssrRenderComponent(_sfc_main$i, { title: "Outlined" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(OutlinedButtons, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(OutlinedButtons)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$i, { title: "Outlined" }, {
                                        default: withCtx(() => [
                                          createVNode(OutlinedButtons)
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
                                    _push6(ssrRenderComponent(_sfc_main$i, { title: "Outlined Icon" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(IconsButtons, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(IconsButtons)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$i, { title: "Outlined Icon" }, {
                                        default: withCtx(() => [
                                          createVNode(IconsButtons)
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
                                    _push6(ssrRenderComponent(_sfc_main$i, { title: "Outline Size" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(OutlineSizes, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(OutlineSizes)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$i, { title: "Outline Size" }, {
                                        default: withCtx(() => [
                                          createVNode(OutlineSizes)
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
                                    _push6(ssrRenderComponent(_sfc_main$i, { title: "Text Color" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$a, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$a)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$i, { title: "Text Color" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$a)
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
                                    _push6(ssrRenderComponent(_sfc_main$i, { title: "Icon Color" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(IconColor, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(IconColor)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$i, { title: "Icon Color" }, {
                                        default: withCtx(() => [
                                          createVNode(IconColor)
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
                                    _push6(ssrRenderComponent(_sfc_main$i, { title: "Outlined Icon Color" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(OutlineIconColor, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(OutlineIconColor)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$i, { title: "Outlined Icon Color" }, {
                                        default: withCtx(() => [
                                          createVNode(OutlineIconColor)
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
                                    _push6(ssrRenderComponent(_sfc_main$i, { title: "Icon Size" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(IconColorSizes, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(IconColorSizes)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$i, { title: "Icon Size" }, {
                                        default: withCtx(() => [
                                          createVNode(IconColorSizes)
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
                                    _push6(ssrRenderComponent(_sfc_main$i, { title: "Outlined Icon Size" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(OutlinedIconSize, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(OutlinedIconSize)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$i, { title: "Outlined Icon Size" }, {
                                        default: withCtx(() => [
                                          createVNode(OutlinedIconSize)
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
                                  sm: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$i, { title: "Base" }, {
                                      default: withCtx(() => [
                                        createVNode(BaseButtons)
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
                                    createVNode(_sfc_main$i, { title: "Colors" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$e)
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
                                    createVNode(_sfc_main$i, { title: "Size" }, {
                                      default: withCtx(() => [
                                        createVNode(SizeButtons)
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
                                    createVNode(_sfc_main$i, { title: "Outlined" }, {
                                      default: withCtx(() => [
                                        createVNode(OutlinedButtons)
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
                                    createVNode(_sfc_main$i, { title: "Outlined Icon" }, {
                                      default: withCtx(() => [
                                        createVNode(IconsButtons)
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
                                    createVNode(_sfc_main$i, { title: "Outline Size" }, {
                                      default: withCtx(() => [
                                        createVNode(OutlineSizes)
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
                                    createVNode(_sfc_main$i, { title: "Text Color" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$a)
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
                                    createVNode(_sfc_main$i, { title: "Icon Color" }, {
                                      default: withCtx(() => [
                                        createVNode(IconColor)
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
                                    createVNode(_sfc_main$i, { title: "Outlined Icon Color" }, {
                                      default: withCtx(() => [
                                        createVNode(OutlineIconColor)
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
                                    createVNode(_sfc_main$i, { title: "Icon Size" }, {
                                      default: withCtx(() => [
                                        createVNode(IconColorSizes)
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
                                    createVNode(_sfc_main$i, { title: "Outlined Icon Size" }, {
                                      default: withCtx(() => [
                                        createVNode(OutlinedIconSize)
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
                                sm: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$i, { title: "Base" }, {
                                    default: withCtx(() => [
                                      createVNode(BaseButtons)
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
                                  createVNode(_sfc_main$i, { title: "Colors" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$e)
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
                                  createVNode(_sfc_main$i, { title: "Size" }, {
                                    default: withCtx(() => [
                                      createVNode(SizeButtons)
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
                                  createVNode(_sfc_main$i, { title: "Outlined" }, {
                                    default: withCtx(() => [
                                      createVNode(OutlinedButtons)
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
                                  createVNode(_sfc_main$i, { title: "Outlined Icon" }, {
                                    default: withCtx(() => [
                                      createVNode(IconsButtons)
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
                                  createVNode(_sfc_main$i, { title: "Outline Size" }, {
                                    default: withCtx(() => [
                                      createVNode(OutlineSizes)
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
                                  createVNode(_sfc_main$i, { title: "Text Color" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$a)
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
                                  createVNode(_sfc_main$i, { title: "Icon Color" }, {
                                    default: withCtx(() => [
                                      createVNode(IconColor)
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
                                  createVNode(_sfc_main$i, { title: "Outlined Icon Color" }, {
                                    default: withCtx(() => [
                                      createVNode(OutlineIconColor)
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
                                  createVNode(_sfc_main$i, { title: "Icon Size" }, {
                                    default: withCtx(() => [
                                      createVNode(IconColorSizes)
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
                                  createVNode(_sfc_main$i, { title: "Outlined Icon Size" }, {
                                    default: withCtx(() => [
                                      createVNode(OutlinedIconSize)
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
                    createVNode(_sfc_main$h, { title: "Buttons" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$i, { title: "Base" }, {
                                  default: withCtx(() => [
                                    createVNode(BaseButtons)
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
                                createVNode(_sfc_main$i, { title: "Colors" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$e)
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
                                createVNode(_sfc_main$i, { title: "Size" }, {
                                  default: withCtx(() => [
                                    createVNode(SizeButtons)
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
                                createVNode(_sfc_main$i, { title: "Outlined" }, {
                                  default: withCtx(() => [
                                    createVNode(OutlinedButtons)
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
                                createVNode(_sfc_main$i, { title: "Outlined Icon" }, {
                                  default: withCtx(() => [
                                    createVNode(IconsButtons)
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
                                createVNode(_sfc_main$i, { title: "Outline Size" }, {
                                  default: withCtx(() => [
                                    createVNode(OutlineSizes)
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
                                createVNode(_sfc_main$i, { title: "Text Color" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$a)
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
                                createVNode(_sfc_main$i, { title: "Icon Color" }, {
                                  default: withCtx(() => [
                                    createVNode(IconColor)
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
                                createVNode(_sfc_main$i, { title: "Outlined Icon Color" }, {
                                  default: withCtx(() => [
                                    createVNode(OutlineIconColor)
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
                                createVNode(_sfc_main$i, { title: "Icon Size" }, {
                                  default: withCtx(() => [
                                    createVNode(IconColorSizes)
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
                                createVNode(_sfc_main$i, { title: "Outlined Icon Size" }, {
                                  default: withCtx(() => [
                                    createVNode(OutlinedIconSize)
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
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$h, { title: "Button Group" }, {
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
                                    _push6(ssrRenderComponent(_sfc_main$i, { title: "Default" }, {
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
                                      createVNode(_sfc_main$i, { title: "Default" }, {
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
                                    _push6(ssrRenderComponent(_sfc_main$i, { title: "Text" }, {
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
                                      createVNode(_sfc_main$i, { title: "Text" }, {
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
                                    _push6(ssrRenderComponent(_sfc_main$i, { title: "Plain" }, {
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
                                      createVNode(_sfc_main$i, { title: "Plain" }, {
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
                                    _push6(ssrRenderComponent(_sfc_main$i, { title: "Outlined" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$1, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$i, { title: "Outlined" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$1)
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
                                    createVNode(_sfc_main$i, { title: "Default" }, {
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
                                    createVNode(_sfc_main$i, { title: "Text" }, {
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
                                    createVNode(_sfc_main$i, { title: "Plain" }, {
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
                                    createVNode(_sfc_main$i, { title: "Outlined" }, {
                                      default: withCtx(() => [
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
                                  createVNode(_sfc_main$i, { title: "Default" }, {
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
                                  createVNode(_sfc_main$i, { title: "Text" }, {
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
                                  createVNode(_sfc_main$i, { title: "Plain" }, {
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
                                  createVNode(_sfc_main$i, { title: "Outlined" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$1)
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
                    createVNode(_sfc_main$h, { title: "Button Group" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$i, { title: "Default" }, {
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
                                createVNode(_sfc_main$i, { title: "Text" }, {
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
                                createVNode(_sfc_main$i, { title: "Plain" }, {
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
                                createVNode(_sfc_main$i, { title: "Outlined" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$1)
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
                  createVNode(_sfc_main$h, { title: "Buttons" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$i, { title: "Base" }, {
                                default: withCtx(() => [
                                  createVNode(BaseButtons)
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
                              createVNode(_sfc_main$i, { title: "Colors" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$e)
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
                              createVNode(_sfc_main$i, { title: "Size" }, {
                                default: withCtx(() => [
                                  createVNode(SizeButtons)
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
                              createVNode(_sfc_main$i, { title: "Outlined" }, {
                                default: withCtx(() => [
                                  createVNode(OutlinedButtons)
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
                              createVNode(_sfc_main$i, { title: "Outlined Icon" }, {
                                default: withCtx(() => [
                                  createVNode(IconsButtons)
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
                              createVNode(_sfc_main$i, { title: "Outline Size" }, {
                                default: withCtx(() => [
                                  createVNode(OutlineSizes)
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
                              createVNode(_sfc_main$i, { title: "Text Color" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$a)
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
                              createVNode(_sfc_main$i, { title: "Icon Color" }, {
                                default: withCtx(() => [
                                  createVNode(IconColor)
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
                              createVNode(_sfc_main$i, { title: "Outlined Icon Color" }, {
                                default: withCtx(() => [
                                  createVNode(OutlineIconColor)
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
                              createVNode(_sfc_main$i, { title: "Icon Size" }, {
                                default: withCtx(() => [
                                  createVNode(IconColorSizes)
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
                              createVNode(_sfc_main$i, { title: "Outlined Icon Size" }, {
                                default: withCtx(() => [
                                  createVNode(OutlinedIconSize)
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
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$h, { title: "Button Group" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$i, { title: "Default" }, {
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
                              createVNode(_sfc_main$i, { title: "Text" }, {
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
                              createVNode(_sfc_main$i, { title: "Plain" }, {
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
                              createVNode(_sfc_main$i, { title: "Outlined" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forms/form-elements/Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Button-Cax_1Gjd.mjs.map
