import { defineComponent, ref, resolveComponent, withCtx, createVNode, mergeProps, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_v_stepper = resolveComponent("v-stepper");
  const _component_v_stepper_header = resolveComponent("v-stepper-header");
  const _component_v_stepper_item = resolveComponent("v-stepper-item");
  const _component_v_divider = resolveComponent("v-divider");
  _push(ssrRenderComponent(_component_v_stepper, mergeProps({ "model-value": "2" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_stepper_header, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                title: "Select campaign settings",
                value: "1",
                complete: ""
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                title: "Create an ad group",
                value: "2"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                title: "Create an ad",
                value: "3"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_stepper_item, {
                  title: "Select campaign settings",
                  value: "1",
                  complete: ""
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_stepper_item, {
                  title: "Create an ad group",
                  value: "2"
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_stepper_item, {
                  title: "Create an ad",
                  value: "3"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_stepper_header, null, {
            default: withCtx(() => [
              createVNode(_component_v_stepper_item, {
                title: "Select campaign settings",
                value: "1",
                complete: ""
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_stepper_item, {
                title: "Create an ad group",
                value: "2"
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_stepper_item, {
                title: "Create an ad",
                value: "3"
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/stepper/NoEditable.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const NoEditable = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_v_stepper = resolveComponent("v-stepper");
  const _component_v_stepper_header = resolveComponent("v-stepper-header");
  const _component_v_stepper_item = resolveComponent("v-stepper-item");
  const _component_v_divider = resolveComponent("v-divider");
  _push(ssrRenderComponent(_component_v_stepper, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_stepper_header, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                title: "Select campaign settings",
                value: "1",
                complete: "",
                editable: ""
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                title: "Create an ad group",
                value: "2",
                complete: ""
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                title: "Create an ad",
                value: "3",
                editable: ""
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_stepper_item, {
                  title: "Select campaign settings",
                  value: "1",
                  complete: "",
                  editable: ""
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_stepper_item, {
                  title: "Create an ad group",
                  value: "2",
                  complete: ""
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_stepper_item, {
                  title: "Create an ad",
                  value: "3",
                  editable: ""
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_stepper_header, null, {
            default: withCtx(() => [
              createVNode(_component_v_stepper_item, {
                title: "Select campaign settings",
                value: "1",
                complete: "",
                editable: ""
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_stepper_item, {
                title: "Create an ad group",
                value: "2",
                complete: ""
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_stepper_item, {
                title: "Create an ad",
                value: "3",
                editable: ""
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/stepper/EditableStepper.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const EditableStepper = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_v_stepper = resolveComponent("v-stepper");
  const _component_v_stepper_header = resolveComponent("v-stepper-header");
  const _component_v_stepper_item = resolveComponent("v-stepper-item");
  const _component_v_divider = resolveComponent("v-divider");
  _push(ssrRenderComponent(_component_v_stepper, mergeProps({ "alt-labels": "" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_stepper_header, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                title: "Ad unit details",
                value: "1"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                title: "Ad sizes",
                value: "2"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                title: "Ad templates",
                value: "3"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_stepper_item, {
                  title: "Ad unit details",
                  value: "1"
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_stepper_item, {
                  title: "Ad sizes",
                  value: "2"
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_stepper_item, {
                  title: "Ad templates",
                  value: "3"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_stepper_header, null, {
            default: withCtx(() => [
              createVNode(_component_v_stepper_item, {
                title: "Ad unit details",
                value: "1"
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_stepper_item, {
                title: "Ad sizes",
                value: "2"
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_stepper_item, {
                title: "Ad templates",
                value: "3"
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/stepper/Alternatelabel.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Alternatelabel = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_v_stepper = resolveComponent("v-stepper");
  const _component_v_stepper_header = resolveComponent("v-stepper-header");
  const _component_v_stepper_item = resolveComponent("v-stepper-item");
  const _component_v_divider = resolveComponent("v-divider");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_v_stepper, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_stepper_header, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                title: "Select campaign settings",
                value: "1"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                title: "Create an ad group",
                value: "2"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                title: "Create an ad",
                value: "3"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_stepper_item, {
                  title: "Select campaign settings",
                  value: "1"
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_stepper_item, {
                  title: "Create an ad group",
                  value: "2"
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_stepper_item, {
                  title: "Create an ad",
                  value: "3"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_stepper_header, null, {
            default: withCtx(() => [
              createVNode(_component_v_stepper_item, {
                title: "Select campaign settings",
                value: "1"
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_stepper_item, {
                title: "Create an ad group",
                value: "2"
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_stepper_item, {
                title: "Create an ad",
                value: "3"
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br>`);
  _push(ssrRenderComponent(_component_v_stepper, { "model-value": "2" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_stepper_header, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                title: "Select campaign settings",
                value: "1",
                complete: ""
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                title: "Create an ad group",
                value: "2"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                title: "Create an ad",
                value: "3"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_stepper_item, {
                  title: "Select campaign settings",
                  value: "1",
                  complete: ""
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_stepper_item, {
                  title: "Create an ad group",
                  value: "2"
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_stepper_item, {
                  title: "Create an ad",
                  value: "3"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_stepper_header, null, {
            default: withCtx(() => [
              createVNode(_component_v_stepper_item, {
                title: "Select campaign settings",
                value: "1",
                complete: ""
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_stepper_item, {
                title: "Create an ad group",
                value: "2"
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_stepper_item, {
                title: "Create an ad",
                value: "3"
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br>`);
  _push(ssrRenderComponent(_component_v_stepper, { "model-value": "3" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_stepper_header, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                title: "Select campaign settings",
                value: "1",
                complete: ""
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                title: "Create an ad group",
                value: "2",
                complete: ""
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                title: "Create an ad",
                value: "3"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_stepper_item, {
                  title: "Select campaign settings",
                  value: "1",
                  complete: ""
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_stepper_item, {
                  title: "Create an ad group",
                  value: "2",
                  complete: ""
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_stepper_item, {
                  title: "Create an ad",
                  value: "3"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_stepper_header, null, {
            default: withCtx(() => [
              createVNode(_component_v_stepper_item, {
                title: "Select campaign settings",
                value: "1",
                complete: ""
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_stepper_item, {
                title: "Create an ad group",
                value: "2",
                complete: ""
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_stepper_item, {
                title: "Create an ad",
                value: "3"
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
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/stepper/LinearSteppers.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const LinearSteppers = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_v_stepper = resolveComponent("v-stepper");
  const _component_v_stepper_header = resolveComponent("v-stepper-header");
  const _component_v_stepper_item = resolveComponent("v-stepper-item");
  const _component_v_divider = resolveComponent("v-divider");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_v_stepper, { "model-value": "1" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_stepper_header, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                title: "Select campaign settings",
                value: "1"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                subtitle: "Optional",
                title: "Create an ad group",
                value: "2"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                title: "Create an ad",
                value: "3"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_stepper_item, {
                  title: "Select campaign settings",
                  value: "1"
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_stepper_item, {
                  subtitle: "Optional",
                  title: "Create an ad group",
                  value: "2"
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_stepper_item, {
                  title: "Create an ad",
                  value: "3"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_stepper_header, null, {
            default: withCtx(() => [
              createVNode(_component_v_stepper_item, {
                title: "Select campaign settings",
                value: "1"
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_stepper_item, {
                subtitle: "Optional",
                title: "Create an ad group",
                value: "2"
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_stepper_item, {
                title: "Create an ad",
                value: "3"
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br>`);
  _push(ssrRenderComponent(_component_v_stepper, { "model-value": "2" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_stepper_header, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                title: "Select campaign settings",
                value: "1",
                complete: ""
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                subtitle: "Optional",
                title: "Create an ad group",
                value: "2"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                title: "Create an ad",
                value: "3"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_stepper_item, {
                  title: "Select campaign settings",
                  value: "1",
                  complete: ""
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_stepper_item, {
                  subtitle: "Optional",
                  title: "Create an ad group",
                  value: "2"
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_stepper_item, {
                  title: "Create an ad",
                  value: "3"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_stepper_header, null, {
            default: withCtx(() => [
              createVNode(_component_v_stepper_item, {
                title: "Select campaign settings",
                value: "1",
                complete: ""
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_stepper_item, {
                subtitle: "Optional",
                title: "Create an ad group",
                value: "2"
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_stepper_item, {
                title: "Create an ad",
                value: "3"
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
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/stepper/OptionalSteps.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const OptionalSteps = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_stepper = resolveComponent("v-stepper");
  const _component_v_card = resolveComponent("v-card");
  _push(ssrRenderComponent(_component_v_stepper, mergeProps({
    items: ["Step 1", "Step 2", "Step 3"],
    class: "border"
  }, _attrs), {
    "item.1": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card, { flat: "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h5 class="text-h6"${_scopeId2}>Step One</h5><p class="textSecondary"${_scopeId2}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s </p>`);
            } else {
              return [
                createVNode("h5", { class: "text-h6" }, "Step One"),
                createVNode("p", { class: "textSecondary" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card, { flat: "" }, {
            default: withCtx(() => [
              createVNode("h5", { class: "text-h6" }, "Step One"),
              createVNode("p", { class: "textSecondary" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ")
            ]),
            _: 1
          })
        ];
      }
    }),
    "item.2": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card, { flat: "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h5 class="text-h6"${_scopeId2}>Step Two</h5><p class="textSecondary"${_scopeId2}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s </p>`);
            } else {
              return [
                createVNode("h5", { class: "text-h6" }, "Step Two"),
                createVNode("p", { class: "textSecondary" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card, { flat: "" }, {
            default: withCtx(() => [
              createVNode("h5", { class: "text-h6" }, "Step Two"),
              createVNode("p", { class: "textSecondary" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ")
            ]),
            _: 1
          })
        ];
      }
    }),
    "item.3": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card, { flat: "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h5 class="text-h6"${_scopeId2}>Step Three</h5><p class="textSecondary"${_scopeId2}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s </p>`);
            } else {
              return [
                createVNode("h5", { class: "text-h6" }, "Step Three"),
                createVNode("p", { class: "textSecondary" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card, { flat: "" }, {
            default: withCtx(() => [
              createVNode("h5", { class: "text-h6" }, "Step Three"),
              createVNode("p", { class: "textSecondary" }, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/stepper/ItemStepper.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ItemStepper = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_stepper = resolveComponent("v-stepper");
  const _component_v_stepper_header = resolveComponent("v-stepper-header");
  const _component_v_stepper_item = resolveComponent("v-stepper-item");
  const _component_v_divider = resolveComponent("v-divider");
  _push(ssrRenderComponent(_component_v_stepper, mergeProps({ "alt-labels": "" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_stepper_header, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                value: "1",
                complete: ""
              }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Ad type `);
                  } else {
                    return [
                      createTextVNode(" Ad type ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                value: "2",
                complete: ""
              }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Ad style `);
                  } else {
                    return [
                      createTextVNode(" Ad style ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_stepper_item, {
                rules: [() => false],
                value: "3"
              }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Custom channels `);
                  } else {
                    return [
                      createTextVNode(" Custom channels ")
                    ];
                  }
                }),
                subtitle: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Alert message `);
                  } else {
                    return [
                      createTextVNode(" Alert message ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_stepper_item, { value: "46" }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Get code `);
                  } else {
                    return [
                      createTextVNode(" Get code ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_stepper_item, {
                  value: "1",
                  complete: ""
                }, {
                  title: withCtx(() => [
                    createTextVNode(" Ad type ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_stepper_item, {
                  value: "2",
                  complete: ""
                }, {
                  title: withCtx(() => [
                    createTextVNode(" Ad style ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_stepper_item, {
                  rules: [() => false],
                  value: "3"
                }, {
                  title: withCtx(() => [
                    createTextVNode(" Custom channels ")
                  ]),
                  subtitle: withCtx(() => [
                    createTextVNode(" Alert message ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_stepper_item, { value: "46" }, {
                  title: withCtx(() => [
                    createTextVNode(" Get code ")
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
          createVNode(_component_v_stepper_header, null, {
            default: withCtx(() => [
              createVNode(_component_v_stepper_item, {
                value: "1",
                complete: ""
              }, {
                title: withCtx(() => [
                  createTextVNode(" Ad type ")
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_stepper_item, {
                value: "2",
                complete: ""
              }, {
                title: withCtx(() => [
                  createTextVNode(" Ad style ")
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_stepper_item, {
                rules: [() => false],
                value: "3"
              }, {
                title: withCtx(() => [
                  createTextVNode(" Custom channels ")
                ]),
                subtitle: withCtx(() => [
                  createTextVNode(" Alert message ")
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_stepper_item, { value: "46" }, {
                title: withCtx(() => [
                  createTextVNode(" Get code ")
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
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-elements/stepper/AlternativeErrors.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AlternativeErrors = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Stepper",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Stepper" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "#"
      },
      {
        text: "Stepper",
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
                  _push3(ssrRenderComponent(_sfc_main$9, { title: "Stepper" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$a, { title: "Non editable steps  " }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(NoEditable, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(NoEditable)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$a, { title: "Non editable steps  " }, {
                                        default: withCtx(() => [
                                          createVNode(NoEditable)
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
                                    _push6(ssrRenderComponent(_sfc_main$a, { title: "Editable steps  " }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(EditableStepper, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(EditableStepper)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$a, { title: "Editable steps  " }, {
                                        default: withCtx(() => [
                                          createVNode(EditableStepper)
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
                                    _push6(ssrRenderComponent(_sfc_main$a, { title: "Alternate label" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(Alternatelabel, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(Alternatelabel)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$a, { title: "Alternate label" }, {
                                        default: withCtx(() => [
                                          createVNode(Alternatelabel)
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
                                    _push6(ssrRenderComponent(_sfc_main$a, { title: "Linear steppers" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(LinearSteppers, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(LinearSteppers)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$a, { title: "Linear steppers" }, {
                                        default: withCtx(() => [
                                          createVNode(LinearSteppers)
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
                                    _push6(ssrRenderComponent(_sfc_main$a, { title: "Optional steps" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(OptionalSteps, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(OptionalSteps)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$a, { title: "Optional steps" }, {
                                        default: withCtx(() => [
                                          createVNode(OptionalSteps)
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
                                    _push6(ssrRenderComponent(_sfc_main$a, { title: "Alternative label with errors" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(AlternativeErrors, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(AlternativeErrors)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$a, { title: "Alternative label with errors" }, {
                                        default: withCtx(() => [
                                          createVNode(AlternativeErrors)
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
                                    _push6(ssrRenderComponent(_sfc_main$a, { title: "Items steps" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(ItemStepper, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(ItemStepper)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$a, { title: "Items steps" }, {
                                        default: withCtx(() => [
                                          createVNode(ItemStepper)
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
                                    createVNode(_sfc_main$a, { title: "Non editable steps  " }, {
                                      default: withCtx(() => [
                                        createVNode(NoEditable)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$a, { title: "Editable steps  " }, {
                                      default: withCtx(() => [
                                        createVNode(EditableStepper)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$a, { title: "Alternate label" }, {
                                      default: withCtx(() => [
                                        createVNode(Alternatelabel)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$a, { title: "Linear steppers" }, {
                                      default: withCtx(() => [
                                        createVNode(LinearSteppers)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$a, { title: "Optional steps" }, {
                                      default: withCtx(() => [
                                        createVNode(OptionalSteps)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$a, { title: "Alternative label with errors" }, {
                                      default: withCtx(() => [
                                        createVNode(AlternativeErrors)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$a, { title: "Items steps" }, {
                                      default: withCtx(() => [
                                        createVNode(ItemStepper)
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
                                  createVNode(_sfc_main$a, { title: "Non editable steps  " }, {
                                    default: withCtx(() => [
                                      createVNode(NoEditable)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$a, { title: "Editable steps  " }, {
                                    default: withCtx(() => [
                                      createVNode(EditableStepper)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$a, { title: "Alternate label" }, {
                                    default: withCtx(() => [
                                      createVNode(Alternatelabel)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$a, { title: "Linear steppers" }, {
                                    default: withCtx(() => [
                                      createVNode(LinearSteppers)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$a, { title: "Optional steps" }, {
                                    default: withCtx(() => [
                                      createVNode(OptionalSteps)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$a, { title: "Alternative label with errors" }, {
                                    default: withCtx(() => [
                                      createVNode(AlternativeErrors)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$a, { title: "Items steps" }, {
                                    default: withCtx(() => [
                                      createVNode(ItemStepper)
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
                    createVNode(_sfc_main$9, { title: "Stepper" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$a, { title: "Non editable steps  " }, {
                                  default: withCtx(() => [
                                    createVNode(NoEditable)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$a, { title: "Editable steps  " }, {
                                  default: withCtx(() => [
                                    createVNode(EditableStepper)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$a, { title: "Alternate label" }, {
                                  default: withCtx(() => [
                                    createVNode(Alternatelabel)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$a, { title: "Linear steppers" }, {
                                  default: withCtx(() => [
                                    createVNode(LinearSteppers)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$a, { title: "Optional steps" }, {
                                  default: withCtx(() => [
                                    createVNode(OptionalSteps)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$a, { title: "Alternative label with errors" }, {
                                  default: withCtx(() => [
                                    createVNode(AlternativeErrors)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$a, { title: "Items steps" }, {
                                  default: withCtx(() => [
                                    createVNode(ItemStepper)
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
                  createVNode(_sfc_main$9, { title: "Stepper" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$a, { title: "Non editable steps  " }, {
                                default: withCtx(() => [
                                  createVNode(NoEditable)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$a, { title: "Editable steps  " }, {
                                default: withCtx(() => [
                                  createVNode(EditableStepper)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$a, { title: "Alternate label" }, {
                                default: withCtx(() => [
                                  createVNode(Alternatelabel)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$a, { title: "Linear steppers" }, {
                                default: withCtx(() => [
                                  createVNode(LinearSteppers)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$a, { title: "Optional steps" }, {
                                default: withCtx(() => [
                                  createVNode(OptionalSteps)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$a, { title: "Alternative label with errors" }, {
                                default: withCtx(() => [
                                  createVNode(AlternativeErrors)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$a, { title: "Items steps" }, {
                                default: withCtx(() => [
                                  createVNode(ItemStepper)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forms/form-elements/Stepper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Stepper-AfbwSc5_.mjs.map
