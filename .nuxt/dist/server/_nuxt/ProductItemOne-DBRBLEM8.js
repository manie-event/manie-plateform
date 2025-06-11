import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductItemOne",
  __ssrInlineRender: true,
  props: {
    name: String,
    image: String,
    desc: String,
    rating: Number,
    salePrice: Number,
    rank: Number,
    offerPrice: Number,
    goto: Number || String || Object || Array
  },
  setup(__props) {
    const props = __props;
    const successsnackbar = ref(false);
    ref(props.rating);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_router_link = resolveComponent("router-link");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_HeartIcon = resolveComponent("HeartIcon");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_BasketIcon = resolveComponent("BasketIcon");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_snackbar = resolveComponent("v-snackbar");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        variant: "flat",
        class: "rounded-md card-hover overflow-hidden bg-surface"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_router_link, {
              to: `/apps/ecommerce/product/one/detail/${__props.goto}`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img alt="product"${ssrRenderAttr("src", __props.image)} class="w-100 rounded-md" data-v-61481fae${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      alt: "product",
                      src: __props.image,
                      class: "w-100 rounded-md"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="d-flex justify-end mr-3 mt-n6 position-absolute action-btn" data-v-61481fae${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_btn, mergeProps({ icon: "" }, props, {
              color: "white",
              size: "small",
              class: "mr-3"
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_HeartIcon, {
                    size: "19",
                    "stroke-width": "1.5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_HeartIcon, {
                      size: "19",
                      "stroke-width": "1.5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_tooltip, {
              text: "Add to Cart",
              location: "bottom"
            }, {
              activator: withCtx(({ props: props2 }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, mergeProps({ icon: "" }, props2, {
                    color: "white",
                    size: "small",
                    onClick: ($event) => _ctx.$emit("handlecart", successsnackbar.value = true)
                  }), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BasketIcon, {
                          size: "19",
                          "stroke-width": "1.5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BasketIcon, {
                            size: "19",
                            "stroke-width": "1.5"
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, mergeProps({ icon: "" }, props2, {
                      color: "white",
                      size: "small",
                      onClick: ($event) => _ctx.$emit("handlecart", successsnackbar.value = true)
                    }), {
                      default: withCtx(() => [
                        createVNode(_component_BasketIcon, {
                          size: "19",
                          "stroke-width": "1.5"
                        })
                      ]),
                      _: 2
                    }, 1040, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_v_card_item, { class: "pt-3 text-left" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<h6 class="text-h6 font-weight-semibold" data-v-61481fae${_scopeId2}>${ssrInterpolate(__props.name)}</h6><div class="d-flex align-center justify-start mt-2" data-v-61481fae${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_icon, {
                    icon: "mdi-star",
                    color: "warning",
                    size: "18",
                    class: "mr-1"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="font-weight-semibold text-grey200 text-subtitle-1" data-v-61481fae${_scopeId2}>${ssrInterpolate((_a = __props.rating) == null ? void 0 : _a.toFixed(1))}</span><span class="font-weight-medium text-grey100 text-subtitle-1 ml-1" data-v-61481fae${_scopeId2}>(${ssrInterpolate(__props.rank)})</span></div><div class="d-flex align-center justify-start gap-2 mt-2" data-v-61481fae${_scopeId2}><h6 class="text-h6 font-weight-semibold" data-v-61481fae${_scopeId2}>$${ssrInterpolate(__props.salePrice)}</h6><p class="text-h6 text-decoration-line-through font-weight-semibold text-grey100" data-v-61481fae${_scopeId2}> $${ssrInterpolate(__props.offerPrice)}</p></div>`);
                } else {
                  return [
                    createVNode("h6", { class: "text-h6 font-weight-semibold" }, toDisplayString(__props.name), 1),
                    createVNode("div", { class: "d-flex align-center justify-start mt-2" }, [
                      createVNode(_component_v_icon, {
                        icon: "mdi-star",
                        color: "warning",
                        size: "18",
                        class: "mr-1"
                      }),
                      createVNode("span", { class: "font-weight-semibold text-grey200 text-subtitle-1" }, toDisplayString((_b = __props.rating) == null ? void 0 : _b.toFixed(1)), 1),
                      createVNode("span", { class: "font-weight-medium text-grey100 text-subtitle-1 ml-1" }, "(" + toDisplayString(__props.rank) + ")", 1)
                    ]),
                    createVNode("div", { class: "d-flex align-center justify-start gap-2 mt-2" }, [
                      createVNode("h6", { class: "text-h6 font-weight-semibold" }, "$" + toDisplayString(__props.salePrice), 1),
                      createVNode("p", { class: "text-h6 text-decoration-line-through font-weight-semibold text-grey100" }, " $" + toDisplayString(__props.offerPrice), 1)
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
                to: `/apps/ecommerce/product/one/detail/${__props.goto}`
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    alt: "product",
                    src: __props.image,
                    class: "w-100 rounded-md"
                  }, null, 8, ["src"])
                ]),
                _: 1
              }, 8, ["to"]),
              createVNode("div", { class: "d-flex justify-end mr-3 mt-n6 position-absolute action-btn" }, [
                createVNode(_component_v_btn, mergeProps({ icon: "" }, props, {
                  color: "white",
                  size: "small",
                  class: "mr-3"
                }), {
                  default: withCtx(() => [
                    createVNode(_component_HeartIcon, {
                      size: "19",
                      "stroke-width": "1.5"
                    })
                  ]),
                  _: 1
                }, 16),
                createVNode(_component_v_tooltip, {
                  text: "Add to Cart",
                  location: "bottom"
                }, {
                  activator: withCtx(({ props: props2 }) => [
                    createVNode(_component_v_btn, mergeProps({ icon: "" }, props2, {
                      color: "white",
                      size: "small",
                      onClick: ($event) => _ctx.$emit("handlecart", successsnackbar.value = true)
                    }), {
                      default: withCtx(() => [
                        createVNode(_component_BasketIcon, {
                          size: "19",
                          "stroke-width": "1.5"
                        })
                      ]),
                      _: 2
                    }, 1040, ["onClick"])
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_v_card_item, { class: "pt-3 text-left" }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode("h6", { class: "text-h6 font-weight-semibold" }, toDisplayString(__props.name), 1),
                    createVNode("div", { class: "d-flex align-center justify-start mt-2" }, [
                      createVNode(_component_v_icon, {
                        icon: "mdi-star",
                        color: "warning",
                        size: "18",
                        class: "mr-1"
                      }),
                      createVNode("span", { class: "font-weight-semibold text-grey200 text-subtitle-1" }, toDisplayString((_a = __props.rating) == null ? void 0 : _a.toFixed(1)), 1),
                      createVNode("span", { class: "font-weight-medium text-grey100 text-subtitle-1 ml-1" }, "(" + toDisplayString(__props.rank) + ")", 1)
                    ]),
                    createVNode("div", { class: "d-flex align-center justify-start gap-2 mt-2" }, [
                      createVNode("h6", { class: "text-h6 font-weight-semibold" }, "$" + toDisplayString(__props.salePrice), 1),
                      createVNode("p", { class: "text-h6 text-decoration-line-through font-weight-semibold text-grey100" }, " $" + toDisplayString(__props.offerPrice), 1)
                    ])
                  ];
                }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/ecommerce/listing/ProductItemOne.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductItemVue = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-61481fae"]]);
export {
  ProductItemVue as P
};
//# sourceMappingURL=ProductItemOne-DBRBLEM8.js.map
