import { defineComponent, resolveComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { a as useErrorToaster } from "./UseAuthentification-CchpAVzc.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "errorToaster",
  __ssrInlineRender: true,
  setup(__props) {
    const { errorMessageArray } = useErrorToaster();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_alert = resolveComponent("v-alert");
      _push(`<div${ssrRenderAttrs(mergeProps({
        name: "fade",
        class: "alerts-wrapper"
      }, _attrs))}>`);
      ssrRenderList(unref(errorMessageArray), (error) => {
        _push(ssrRenderComponent(_component_v_alert, {
          key: error.id,
          class: "alert-card",
          type: "error",
          text: error.message,
          dismissible: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="progress-bar"${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { class: "progress-bar" })
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/errorToaster.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=errorToaster-DYYIWzPY.js.map
