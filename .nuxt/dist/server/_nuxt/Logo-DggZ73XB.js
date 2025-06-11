import { _ as __nuxt_component_0 } from "./nuxt-link-DZ3wFR7I.js";
import { defineComponent, mergeProps, withCtx, unref, createVNode, useSSRContext, computed } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { u as useCustomizerStore } from "./customizer-CM6PVnj3.js";
const logolightrtl = publicAssetsURL("/images/logos/logo-light-rtl.svg");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "LogoLightRtl",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "logo" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(logolightrtl))} alt="home"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(logolightrtl),
                alt: "home"
              }, null, 8, ["src"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/logo/LogoLightRtl.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const logortldark = publicAssetsURL("/images/logos/logo-dark-rtl.svg");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LogoDarkRtl",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "logo" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(logortldark))} alt="home"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(logortldark),
                alt: "home"
              }, null, 8, ["src"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/logo/LogoDarkRtl.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const logolight = publicAssetsURL("/images/logos/logo-light.svg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LogoLight",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "logo" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(logolight))} alt="home"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(logolight),
                alt: "home"
              }, null, 8, ["src"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/logo/LogoLight.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const logoManie = publicAssetsURL("/images/logos/logo-manie.svg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LogoDark",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "logo" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(logoManie))} alt="home" class="w-50 h-10"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(logoManie),
                alt: "home",
                class: "w-50 h-10"
              }, null, 8, ["src"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/logo/LogoDark.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Logo",
  __ssrInlineRender: true,
  setup(__props) {
    const customizer = useCustomizerStore();
    const dark = computed(() => {
      if (customizer.actTheme === "DARK_BLUE_THEME" || customizer.actTheme === "DARK_AQUA_THEME" || customizer.actTheme === "DARK_ORANGE_THEME" || customizer.actTheme === "DARK_PURPLE_THEME" || customizer.actTheme === "DARK_GREEN_THEME" || customizer.actTheme === "DARK_CYAN_THEME") {
        return true;
      } else {
        return false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LcFullLogoLightRtl = _sfc_main$4;
      const _component_LcFullLogoDarkRtl = _sfc_main$3;
      const _component_LcFullLogoLight = _sfc_main$2;
      const _component_LcFullLogoDark = _sfc_main$1;
      if (unref(customizer).setRTLLayout) {
        _push(`<div${ssrRenderAttrs(mergeProps({ rtl: "" }, _attrs))}>`);
        if (dark.value) {
          _push(ssrRenderComponent(_component_LcFullLogoLightRtl, null, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_LcFullLogoDarkRtl, null, null, _parent));
        }
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        if (dark.value) {
          _push(ssrRenderComponent(_component_LcFullLogoLight, null, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_LcFullLogoDark, null, null, _parent));
        }
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lc/Full/logo/Logo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$2 as a
};
//# sourceMappingURL=Logo-DggZ73XB.js.map
