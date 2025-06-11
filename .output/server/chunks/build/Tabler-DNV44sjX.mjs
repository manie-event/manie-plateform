import { defineComponent, ref, resolveComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './BaseBreadcrumb-DAIjkUfv.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tabler",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Tabler Icons" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Tabler icons",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "12"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_text, { class: "pa-5" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="pa-7 pt-0"${_scopeId4}><iframe src="https://tabler-icons.io/" title="Inline Frame Example" frameborder="0" width="100%" height="650"${_scopeId4}></iframe></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "pa-7 pt-0" }, [
                                  createVNode("iframe", {
                                    src: "https://tabler-icons.io/",
                                    title: "Inline Frame Example",
                                    frameborder: "0",
                                    width: "100%",
                                    height: "650"
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card_text, { class: "pa-5" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "pa-7 pt-0" }, [
                                createVNode("iframe", {
                                  src: "https://tabler-icons.io/",
                                  title: "Inline Frame Example",
                                  frameborder: "0",
                                  width: "100%",
                                  height: "650"
                                })
                              ])
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
                    createVNode(_component_v_card, { elevation: "10" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_text, { class: "pa-5" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "pa-7 pt-0" }, [
                              createVNode("iframe", {
                                src: "https://tabler-icons.io/",
                                title: "Inline Frame Example",
                                frameborder: "0",
                                width: "100%",
                                height: "650"
                              })
                            ])
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
              createVNode(_component_v_col, {
                cols: "12",
                md: "12"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, { elevation: "10" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_text, { class: "pa-5" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "pa-7 pt-0" }, [
                            createVNode("iframe", {
                              src: "https://tabler-icons.io/",
                              title: "Inline Frame Example",
                              frameborder: "0",
                              width: "100%",
                              height: "650"
                            })
                          ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/icons/Tabler.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Tabler-DNV44sjX.mjs.map
