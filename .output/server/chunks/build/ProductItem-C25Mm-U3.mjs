import { _ as __nuxt_component_0 } from './client-only-Bwxzq3Sq.mjs';
import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductItem",
  __ssrInlineRender: true,
  props: {
    name: String,
    image: String,
    desc: String,
    rating: Number,
    salePrice: Number,
    offerPrice: Number,
    goto: Number || String || Object || Array
  },
  setup(__props) {
    const props = __props;
    const successsnackbar = ref(false);
    const rate = ref(props.rating);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_router_link = resolveComponent("router-link");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_BasketIcon = resolveComponent("BasketIcon");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_ClientOnly = __nuxt_component_0;
      const _component_v_rating = resolveComponent("v-rating");
      const _component_v_snackbar = resolveComponent("v-snackbar");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        elevation: "10",
        class: "rounded card-hover overflow-hidden bg-surface"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_router_link, {
              to: `/apps/ecommerce/producttwo/two/detail/${__props.goto}`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img alt="product"${ssrRenderAttr("src", __props.image)} class="w-100"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      alt: "product",
                      src: __props.image,
                      class: "w-100"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="d-flex justify-end mr-3 mt-n6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_tooltip, {
              text: "Add to Cart",
              location: "bottom"
            }, {
              activator: withCtx(({ props: props2 }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, mergeProps({ icon: "" }, props2, {
                    color: "primary",
                    class: "ml-auto",
                    size: "x-small",
                    onClick: ($event) => _ctx.$emit("handlecart", successsnackbar.value = true)
                  }), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BasketIcon, { size: "18" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BasketIcon, { size: "18" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, mergeProps({ icon: "" }, props2, {
                      color: "primary",
                      class: "ml-auto",
                      size: "x-small",
                      onClick: ($event) => _ctx.$emit("handlecart", successsnackbar.value = true)
                    }), {
                      default: withCtx(() => [
                        createVNode(_component_BasketIcon, { size: "18" })
                      ]),
                      _: 2
                    }, 1040, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_v_card_item, { class: "pt-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6 class="text-h6"${_scopeId2}>${ssrInterpolate(__props.name)}</h6><div class="d-flex align-center justify-space-between mt-1"${_scopeId2}><div class="d-flex align-center gap-2"${_scopeId2}><h6 class="text-h6"${_scopeId2}>$${ssrInterpolate(__props.salePrice)}</h6><p class="text-decoration-line-through text-medium-emphasis"${_scopeId2}>$${ssrInterpolate(__props.offerPrice)}</p></div>`);
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("h6", { class: "text-h6" }, toDisplayString(__props.name), 1),
                    createVNode("div", { class: "d-flex align-center justify-space-between mt-1" }, [
                      createVNode("div", { class: "d-flex align-center gap-2" }, [
                        createVNode("h6", { class: "text-h6" }, "$" + toDisplayString(__props.salePrice), 1),
                        createVNode("p", { class: "text-decoration-line-through text-medium-emphasis" }, "$" + toDisplayString(__props.offerPrice), 1)
                      ]),
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_rating, {
                            color: "warning",
                            "half-increments": "",
                            size: "small",
                            modelValue: rate.value,
                            "onUpdate:modelValue": ($event) => rate.value = $event,
                            density: "compact"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_snackbar, {
              variant: "flat",
              location: "bottom right",
              color: "success",
              rounded: "md",
              class: "text-white",
              modelValue: successsnackbar.value,
              "onUpdate:modelValue": ($event) => successsnackbar.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Item Added to The Cart `);
                } else {
                  return [
                    createTextVNode(" Item Added to The Cart ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_router_link, {
                to: `/apps/ecommerce/producttwo/two/detail/${__props.goto}`
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    alt: "product",
                    src: __props.image,
                    class: "w-100"
                  }, null, 8, ["src"])
                ]),
                _: 1
              }, 8, ["to"]),
              createVNode("div", { class: "d-flex justify-end mr-3 mt-n6" }, [
                createVNode(_component_v_tooltip, {
                  text: "Add to Cart",
                  location: "bottom"
                }, {
                  activator: withCtx(({ props: props2 }) => [
                    createVNode(_component_v_btn, mergeProps({ icon: "" }, props2, {
                      color: "primary",
                      class: "ml-auto",
                      size: "x-small",
                      onClick: ($event) => _ctx.$emit("handlecart", successsnackbar.value = true)
                    }), {
                      default: withCtx(() => [
                        createVNode(_component_BasketIcon, { size: "18" })
                      ]),
                      _: 2
                    }, 1040, ["onClick"])
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_v_card_item, { class: "pt-1" }, {
                default: withCtx(() => [
                  createVNode("h6", { class: "text-h6" }, toDisplayString(__props.name), 1),
                  createVNode("div", { class: "d-flex align-center justify-space-between mt-1" }, [
                    createVNode("div", { class: "d-flex align-center gap-2" }, [
                      createVNode("h6", { class: "text-h6" }, "$" + toDisplayString(__props.salePrice), 1),
                      createVNode("p", { class: "text-decoration-line-through text-medium-emphasis" }, "$" + toDisplayString(__props.offerPrice), 1)
                    ]),
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_rating, {
                          color: "warning",
                          "half-increments": "",
                          size: "small",
                          modelValue: rate.value,
                          "onUpdate:modelValue": ($event) => rate.value = $event,
                          density: "compact"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_snackbar, {
                variant: "flat",
                location: "bottom right",
                color: "success",
                rounded: "md",
                class: "text-white",
                modelValue: successsnackbar.value,
                "onUpdate:modelValue": ($event) => successsnackbar.value = $event
              }, {
                default: withCtx(() => [
                  createTextVNode(" Item Added to The Cart ")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/ecommerce/listing/ProductItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ProductItem-C25Mm-U3.mjs.map
