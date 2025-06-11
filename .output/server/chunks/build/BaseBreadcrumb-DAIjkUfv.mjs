import { defineComponent, resolveComponent, mergeProps, withCtx, createSlots, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseBreadcrumb",
  __ssrInlineRender: true,
  props: {
    title: String,
    breadcrumbs: Array,
    icon: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_breadcrumbs = resolveComponent("v-breadcrumbs");
      const _component_v_icon = resolveComponent("v-icon");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        class: "overflow-hidden mb-7",
        elevation: "0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, { class: "pa-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-sm-flex d-block justify-content-between py-0 align-center"${_scopeId2}><h4 class="text-h4 flex-grow-1"${_scopeId2}>${ssrInterpolate(__props.title)}</h4><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_breadcrumbs, {
                    items: __props.breadcrumbs,
                    class: "text-subtitle-1 font-weight-regular pa-0 ml-n1"
                  }, createSlots({
                    title: withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h6 class="text-subtitle-1"${_scopeId3}>${ssrInterpolate(item.text)}</h6>`);
                      } else {
                        return [
                          createVNode("h6", { class: "text-subtitle-1" }, toDisplayString(item.text), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, [
                    __props.breadcrumbs ? {
                      name: "divider",
                      fn: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_icon, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`mdi-circle-small`);
                              } else {
                                return [
                                  createTextVNode("mdi-circle-small")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_icon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-circle-small")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      key: "0"
                    } : void 0
                  ]), _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-sm-flex d-block justify-content-between py-0 align-center" }, [
                      createVNode("h4", { class: "text-h4 flex-grow-1" }, toDisplayString(__props.title), 1),
                      createVNode("div", null, [
                        createVNode(_component_v_breadcrumbs, {
                          items: __props.breadcrumbs,
                          class: "text-subtitle-1 font-weight-regular pa-0 ml-n1"
                        }, createSlots({
                          title: withCtx(({ item }) => [
                            createVNode("h6", { class: "text-subtitle-1" }, toDisplayString(item.text), 1)
                          ]),
                          _: 2
                        }, [
                          __props.breadcrumbs ? {
                            name: "divider",
                            fn: withCtx(() => [
                              createVNode(_component_v_icon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-circle-small")
                                ]),
                                _: 1
                              })
                            ]),
                            key: "0"
                          } : void 0
                        ]), 1032, ["items"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_text, { class: "pa-6" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-sm-flex d-block justify-content-between py-0 align-center" }, [
                    createVNode("h4", { class: "text-h4 flex-grow-1" }, toDisplayString(__props.title), 1),
                    createVNode("div", null, [
                      createVNode(_component_v_breadcrumbs, {
                        items: __props.breadcrumbs,
                        class: "text-subtitle-1 font-weight-regular pa-0 ml-n1"
                      }, createSlots({
                        title: withCtx(({ item }) => [
                          createVNode("h6", { class: "text-subtitle-1" }, toDisplayString(item.text), 1)
                        ]),
                        _: 2
                      }, [
                        __props.breadcrumbs ? {
                          name: "divider",
                          fn: withCtx(() => [
                            createVNode(_component_v_icon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-circle-small")
                              ]),
                              _: 1
                            })
                          ]),
                          key: "0"
                        } : void 0
                      ]), 1032, ["items"])
                    ])
                  ])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/BaseBreadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseBreadcrumb-DAIjkUfv.mjs.map
