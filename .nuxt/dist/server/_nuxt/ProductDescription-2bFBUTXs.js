import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h5 class="text-h5 font-weight-semibold"> Sed at diam elit. Vivamus tortor odio, pellentesque eu tincidunt a, aliquet sit amet lorem pellentesque eu tincidunt a, aliquet sit amet lorem. </h5><p class="text-subtitle-1 mt-8 lh-md"> Cras eget elit semper, congue sapien id, pellentesque diam. Nulla faucibus diam nec fermentum ullamcorper. Praesent sed ipsum ut augue vestibulum malesuada. Duis vitae volutpat odio. Integer sit amet elit ac justo sagittis dignissim. </p><p class="text-subtitle-1 mt-8 lh-md"> Vivamus quis metus in nunc semper efficitur eget vitae diam. Proin justo diam, venenatis sit amet eros in, iaculis auctor magna. Pellentesque sit amet accumsan urna, sit amet pretium ipsum. Fusce condimentum venenatis mauris et luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; </p><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/ecommerce/detail/ProductDescription.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductDescription = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ProductDescription as P
};
//# sourceMappingURL=ProductDescription-2bFBUTXs.js.map
