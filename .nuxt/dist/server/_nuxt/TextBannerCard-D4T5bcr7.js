import { defineComponent, resolveComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { RouterLink } from "vue-router";
import { ChevronRightIcon } from "vue-tabler-icons";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TextBannerCard",
  __ssrInlineRender: true,
  props: {
    caption: String,
    title: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-hidden bg-background pb-sm-14 pb-7 pt-sm-8" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_container, { class: "max-width-1218" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex flex-wrap justify-sm-space-between justify-center align-center"${_scopeId}><h2 class="text-44 font-weight-bold textPrimary text-align-start"${_scopeId}>${ssrInterpolate(__props.title)}</h2><div className="d-flex  align-center ga-4 text-uppercase text-14 font-weight-bold mt-md-0 mt-4"${_scopeId}><span className="text-muted"${_scopeId}>Spike</span>`);
            _push2(ssrRenderComponent(unref(ChevronRightIcon), { size: "15" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(RouterLink), {
              to: "",
              className: "text-primary text-decoration-none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.caption)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.caption), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex flex-wrap justify-sm-space-between justify-center align-center" }, [
                createVNode("h2", { class: "text-44 font-weight-bold textPrimary text-align-start" }, toDisplayString(__props.title), 1),
                createVNode("div", { className: "d-flex  align-center ga-4 text-uppercase text-14 font-weight-bold mt-md-0 mt-4" }, [
                  createVNode("span", { className: "text-muted" }, "Spike"),
                  createVNode(unref(ChevronRightIcon), { size: "15" }),
                  createVNode(unref(RouterLink), {
                    to: "",
                    className: "text-primary text-decoration-none"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.caption), 1)
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/Shared/TextBannerCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=TextBannerCard-D4T5bcr7.js.map
