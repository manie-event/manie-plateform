import { defineComponent, ref, resolveComponent, unref, withCtx, createVNode, createTextVNode, renderSlot, useSSRContext } from 'vue';
import { ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import { g as useDisplay } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppBaseCard",
  __ssrInlineRender: true,
  setup(__props) {
    const { lgAndUp } = useDisplay();
    const sDrawer = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_Menu2Icon = resolveComponent("Menu2Icon");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      const _component_perfect_scrollbar = resolveComponent("perfect-scrollbar");
      const _component_v_card_text = resolveComponent("v-card-text");
      _push(`<!--[--><div class="d-flex mainbox">`);
      if (unref(lgAndUp)) {
        _push(`<div class="left-part">`);
        ssrRenderSlot(_ctx.$slots, "leftpart", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="right-part">`);
      _push(ssrRenderComponent(_component_v_btn, {
        block: "",
        onClick: ($event) => sDrawer.value = !sDrawer.value,
        variant: "text",
        class: "d-lg-none d-md-flex d-sm-flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Menu2Icon, {
              size: "20",
              class: "mr-2"
            }, null, _parent2, _scopeId));
            _push2(` Menu `);
          } else {
            return [
              createVNode(_component_Menu2Icon, {
                size: "20",
                class: "mr-2"
              }),
              createTextVNode(" Menu ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_divider, { class: "d-lg-none d-block" }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "rightpart", {}, null, _push, _parent);
      _push(`</div></div>`);
      if (!unref(lgAndUp)) {
        _push(ssrRenderComponent(_component_v_navigation_drawer, {
          temporary: "",
          modelValue: sDrawer.value,
          "onUpdate:modelValue": ($event) => sDrawer.value = $event,
          class: "app_drawer drawer-top-zero",
          width: "320",
          top: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_perfect_scrollbar, { class: "max-h-100" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_card_text, { class: "pa-0" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "mobileLeftContent", {}, null, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "mobileLeftContent")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_card_text, { class: "pa-0" }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "mobileLeftContent")
                        ]),
                        _: 3
                      })
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_perfect_scrollbar, { class: "max-h-100" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card_text, { class: "pa-0" }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "mobileLeftContent")
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                })
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/AppBaseCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=AppBaseCard-BbBEC2T8.mjs.map
