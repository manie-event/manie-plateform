import { defineComponent, ref, resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _sfc_main$8 } from './BaseBreadcrumb-DAIjkUfv.mjs';
import { _ as _sfc_main$9 } from './UiParentCard-DhlYzLUl.mjs';
import { _ as _sfc_main$a } from './UiChildCard-Xt7dDOL6.mjs';
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

const _sfc_main$7 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_v_alert = resolveComponent("v-alert");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_v_alert, {
    class: "mb-3",
    color: "error",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`This is an error alert \u2014 check it out!`);
      } else {
        return [
          createTextVNode("This is an error alert \u2014 check it out!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_alert, {
    class: "mb-3",
    color: "warning",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`This is a warning alert \u2014 check it out!`);
      } else {
        return [
          createTextVNode("This is a warning alert \u2014 check it out!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_alert, {
    class: "mb-3",
    color: "info",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`This is an info alert \u2014 check it out!`);
      } else {
        return [
          createTextVNode("This is an info alert \u2014 check it out!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_alert, {
    color: "success",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`This is a success alert \u2014 check it out!`);
      } else {
        return [
          createTextVNode("This is a success alert \u2014 check it out!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/alert/Basic.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Basic = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_v_alert = resolveComponent("v-alert");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_v_alert, {
    class: "mb-3",
    type: "error"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`This is an error alert \u2014 check it out!`);
      } else {
        return [
          createTextVNode("This is an error alert \u2014 check it out!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_alert, {
    class: "mb-3",
    type: "warning"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`This is a warning alert \u2014 check it out!`);
      } else {
        return [
          createTextVNode("This is a warning alert \u2014 check it out!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_alert, {
    class: "mb-3",
    type: "info"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`This is an info alert \u2014 check it out!`);
      } else {
        return [
          createTextVNode("This is an info alert \u2014 check it out!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_alert, { type: "success" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`This is a success alert \u2014 check it out!`);
      } else {
        return [
          createTextVNode("This is a success alert \u2014 check it out!")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/alert/Filled.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Filled = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_v_alert = resolveComponent("v-alert");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_v_alert, {
    type: "error",
    variant: "tonal",
    class: "mb-4"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h5 class="text-h6 text-capitalize"${_scopeId}>error</h5><div${_scopeId}>This is an error alert \u2014 check it out!</div>`);
      } else {
        return [
          createVNode("h5", { class: "text-h6 text-capitalize" }, "error"),
          createVNode("div", null, "This is an error alert \u2014 check it out!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_alert, {
    type: "warning",
    variant: "tonal",
    class: "mb-4"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h5 class="text-h6 text-capitalize"${_scopeId}>warning</h5><div${_scopeId}>This is an warning alert \u2014 check it out!</div>`);
      } else {
        return [
          createVNode("h5", { class: "text-h6 text-capitalize" }, "warning"),
          createVNode("div", null, "This is an warning alert \u2014 check it out!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_alert, {
    type: "info",
    variant: "tonal",
    class: "mb-4"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h5 class="text-h6 text-capitalize"${_scopeId}>info</h5><div${_scopeId}>This is an info alert \u2014 check it out!</div>`);
      } else {
        return [
          createVNode("h5", { class: "text-h6 text-capitalize" }, "info"),
          createVNode("div", null, "This is an info alert \u2014 check it out!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_alert, {
    type: "success",
    variant: "tonal",
    class: "mb-4"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h5 class="text-h6 text-capitalize"${_scopeId}>success</h5><div${_scopeId}>This is an success alert \u2014 check it out!</div>`);
      } else {
        return [
          createVNode("h5", { class: "text-h6 text-capitalize" }, "success"),
          createVNode("div", null, "This is an success alert \u2014 check it out!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/alert/Description.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Description = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_v_alert = resolveComponent("v-alert");
  const _component_v_icon = resolveComponent("v-icon");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_v_alert, {
    type: "warning",
    density: "compact",
    class: "mb-4 single-line-alert",
    closable: ""
  }, {
    prepend: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_icon, { class: "text-24" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`mdi-alert-outline`);
            } else {
              return [
                createTextVNode("mdi-alert-outline")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_icon, { class: "text-24" }, {
            default: withCtx(() => [
              createTextVNode("mdi-alert-outline")
            ]),
            _: 1
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>This is an warning alert \u2014 check it out!</div>`);
      } else {
        return [
          createVNode("div", null, "This is an warning alert \u2014 check it out!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_alert, {
    type: "info",
    density: "compact",
    class: "mb-4 single-line-alert",
    closable: ""
  }, {
    prepend: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_icon, { class: "text-24" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`mdi-alert-circle-outline`);
            } else {
              return [
                createTextVNode("mdi-alert-circle-outline")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_icon, { class: "text-24" }, {
            default: withCtx(() => [
              createTextVNode("mdi-alert-circle-outline")
            ]),
            _: 1
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>This is an info alert \u2014 check it out!</div>`);
      } else {
        return [
          createVNode("div", null, "This is an info alert \u2014 check it out!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/alert/Action.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Action = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_alert = resolveComponent("v-alert");
  const _component_v_icon = resolveComponent("v-icon");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_v_alert, {
    color: "success",
    variant: "tonal",
    class: "mb-4"
  }, {
    prepend: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_icon, { class: "text-24" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`mdi-checkbox-marked-circle-outline`);
            } else {
              return [
                createTextVNode("mdi-checkbox-marked-circle-outline")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_icon, { class: "text-24" }, {
            default: withCtx(() => [
              createTextVNode("mdi-checkbox-marked-circle-outline")
            ]),
            _: 1
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>This is an success alert.</div>`);
      } else {
        return [
          createVNode("div", null, "This is an success alert.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_alert, {
    color: "info",
    variant: "tonal",
    class: "mb-4"
  }, {
    prepend: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_icon, { class: "text-24" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`mdi-alert-circle-outline`);
            } else {
              return [
                createTextVNode("mdi-alert-circle-outline")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_icon, { class: "text-24" }, {
            default: withCtx(() => [
              createTextVNode("mdi-alert-circle-outline")
            ]),
            _: 1
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>This is an info alert.</div>`);
      } else {
        return [
          createVNode("div", null, "This is an info alert.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_alert, {
    color: "warning",
    variant: "tonal",
    class: "mb-4"
  }, {
    prepend: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_icon, { class: "text-24" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`mdi-alert-outline`);
            } else {
              return [
                createTextVNode("mdi-alert-outline")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_icon, { class: "text-24" }, {
            default: withCtx(() => [
              createTextVNode("mdi-alert-outline")
            ]),
            _: 1
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>This is an warning alert.</div>`);
      } else {
        return [
          createVNode("div", null, "This is an warning alert.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_alert, {
    color: "error",
    variant: "tonal",
    class: "mb-4"
  }, {
    prepend: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_icon, { class: "text-24" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`mdi-alert-circle-outline`);
            } else {
              return [
                createTextVNode("mdi-alert-circle-outline")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_icon, { class: "text-24" }, {
            default: withCtx(() => [
              createTextVNode("mdi-alert-circle-outline")
            ]),
            _: 1
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>This is an error alert.</div>`);
      } else {
        return [
          createVNode("div", null, "This is an error alert.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/alert/Icons.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Icons = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_alert = resolveComponent("v-alert");
  const _component_v_icon = resolveComponent("v-icon");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_v_alert, {
    type: "error",
    variant: "outlined",
    density: "compact",
    class: "mb-4"
  }, {
    prepend: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_icon, { class: "text-24" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`mdi-alert-circle-outline`);
            } else {
              return [
                createTextVNode("mdi-alert-circle-outline")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_icon, { class: "text-24" }, {
            default: withCtx(() => [
              createTextVNode("mdi-alert-circle-outline")
            ]),
            _: 1
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>This is an error alert \u2014 check it out!</div>`);
      } else {
        return [
          createVNode("div", null, "This is an error alert \u2014 check it out!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_alert, {
    type: "warning",
    variant: "outlined",
    density: "compact",
    class: "mb-4"
  }, {
    prepend: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_icon, { class: "text-24" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`mdi-alert-outline`);
            } else {
              return [
                createTextVNode("mdi-alert-outline")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_icon, { class: "text-24" }, {
            default: withCtx(() => [
              createTextVNode("mdi-alert-outline")
            ]),
            _: 1
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>This is a warning alert \u2014 check it out!</div>`);
      } else {
        return [
          createVNode("div", null, "This is a warning alert \u2014 check it out!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_alert, {
    type: "info",
    variant: "outlined",
    density: "compact",
    class: "mb-4"
  }, {
    prepend: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_icon, { class: "text-24" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`mdi-alert-circle-outline`);
            } else {
              return [
                createTextVNode("mdi-alert-circle-outline")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_icon, { class: "text-24" }, {
            default: withCtx(() => [
              createTextVNode("mdi-alert-circle-outline")
            ]),
            _: 1
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>This is an info alert \u2014 check it out!</div>`);
      } else {
        return [
          createVNode("div", null, "This is an info alert \u2014 check it out!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_alert, {
    type: "success",
    variant: "outlined",
    density: "compact",
    class: "mb-4"
  }, {
    prepend: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_icon, { class: "text-24" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`mdi-checkbox-marked-circle-outline`);
            } else {
              return [
                createTextVNode("mdi-checkbox-marked-circle-outline")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_icon, { class: "text-24" }, {
            default: withCtx(() => [
              createTextVNode("mdi-checkbox-marked-circle-outline")
            ]),
            _: 1
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>This is a success alert \u2014 check it out!</div>`);
      } else {
        return [
          createVNode("div", null, "This is a success alert \u2014 check it out!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/alert/Outlined.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Outlined = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Closable",
  __ssrInlineRender: true,
  setup(__props) {
    const alert = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_alert = resolveComponent("v-alert");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_v_alert, {
        modelValue: alert.value,
        "onUpdate:modelValue": ($event) => alert.value = $event,
        border: "start",
        variant: "tonal",
        closable: "",
        "close-label": "Close Alert",
        color: "primary",
        title: "Closable Alert"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras dapibus. Vivamus consectetuer hendrerit lacus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non `);
          } else {
            return [
              createTextVNode(" Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras dapibus. Vivamus consectetuer hendrerit lacus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!alert.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_v_btn, {
          color: "primary",
          onClick: ($event) => alert.value = true,
          flat: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Reset `);
            } else {
              return [
                createTextVNode(" Reset ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-components/alert/Closable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Alert",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Alert" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Alert",
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
                  _push3(ssrRenderComponent(_sfc_main$9, { title: "Alert" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$a, { title: "Basic" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(Basic, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(Basic)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$a, { title: "Basic" }, {
                                        default: withCtx(() => [
                                          createVNode(Basic)
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
                                    _push6(ssrRenderComponent(_sfc_main$a, { title: "Filled" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(Filled, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(Filled)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$a, { title: "Filled" }, {
                                        default: withCtx(() => [
                                          createVNode(Filled)
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
                                          _push7(ssrRenderComponent(Outlined, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(Outlined)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$a, { title: "Outlined" }, {
                                        default: withCtx(() => [
                                          createVNode(Outlined)
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
                                    _push6(ssrRenderComponent(_sfc_main$a, { title: "Description" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(Description, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(Description)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$a, { title: "Description" }, {
                                        default: withCtx(() => [
                                          createVNode(Description)
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
                                    _push6(ssrRenderComponent(_sfc_main$a, { title: "Action" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(Action, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(Action)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$a, { title: "Action" }, {
                                        default: withCtx(() => [
                                          createVNode(Action)
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
                                    _push6(ssrRenderComponent(_sfc_main$a, { title: "With Icons" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(Icons, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(Icons)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$a, { title: "With Icons" }, {
                                        default: withCtx(() => [
                                          createVNode(Icons)
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
                                      createVNode(_sfc_main$a, { title: "Closable" }, {
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
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$a, { title: "Basic" }, {
                                      default: withCtx(() => [
                                        createVNode(Basic)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$a, { title: "Filled" }, {
                                      default: withCtx(() => [
                                        createVNode(Filled)
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
                                        createVNode(Outlined)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$a, { title: "Description" }, {
                                      default: withCtx(() => [
                                        createVNode(Description)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$a, { title: "Action" }, {
                                      default: withCtx(() => [
                                        createVNode(Action)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$a, { title: "With Icons" }, {
                                      default: withCtx(() => [
                                        createVNode(Icons)
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
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$a, { title: "Basic" }, {
                                    default: withCtx(() => [
                                      createVNode(Basic)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$a, { title: "Filled" }, {
                                    default: withCtx(() => [
                                      createVNode(Filled)
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
                                      createVNode(Outlined)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$a, { title: "Description" }, {
                                    default: withCtx(() => [
                                      createVNode(Description)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$a, { title: "Action" }, {
                                    default: withCtx(() => [
                                      createVNode(Action)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$a, { title: "With Icons" }, {
                                    default: withCtx(() => [
                                      createVNode(Icons)
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
                    createVNode(_sfc_main$9, { title: "Alert" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$a, { title: "Basic" }, {
                                  default: withCtx(() => [
                                    createVNode(Basic)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$a, { title: "Filled" }, {
                                  default: withCtx(() => [
                                    createVNode(Filled)
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
                                    createVNode(Outlined)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$a, { title: "Description" }, {
                                  default: withCtx(() => [
                                    createVNode(Description)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$a, { title: "Action" }, {
                                  default: withCtx(() => [
                                    createVNode(Action)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$a, { title: "With Icons" }, {
                                  default: withCtx(() => [
                                    createVNode(Icons)
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
                  createVNode(_sfc_main$9, { title: "Alert" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$a, { title: "Basic" }, {
                                default: withCtx(() => [
                                  createVNode(Basic)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$a, { title: "Filled" }, {
                                default: withCtx(() => [
                                  createVNode(Filled)
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
                                  createVNode(Outlined)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$a, { title: "Description" }, {
                                default: withCtx(() => [
                                  createVNode(Description)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$a, { title: "Action" }, {
                                default: withCtx(() => [
                                  createVNode(Action)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$a, { title: "With Icons" }, {
                                default: withCtx(() => [
                                  createVNode(Icons)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ui-components/Alert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Alert-B7Yfu7JB.mjs.map
