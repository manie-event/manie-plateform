import { defineComponent, ref, resolveComponent, withCtx, createVNode, toDisplayString, createTextVNode, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _sfc_main$6 } from './BaseBreadcrumb-DAIjkUfv.mjs';
import { _ as _sfc_main$7 } from './UiParentCard-DhlYzLUl.mjs';
import { _ as _sfc_main$8 } from './UiChildCard-Xt7dDOL6.mjs';
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

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Heading",
  __ssrInlineRender: true,
  setup(__props) {
    const headings = ref([
      ["h1.Heading", "text-h1", "font size: 30 | line-height: 45 | font weight: 600"],
      ["h2.Heading", "text-h2", "font size: 24 | line-height: 36 | font weight: 500"],
      ["h3.Heading", "text-h3", "font size: 21 | line-height: 31.5 | font weight: 500"],
      ["h4.Heading", "text-h4", "font size: 18 | line-height: 27 | font weight: 500"],
      ["h5.Heading", "text-h5", "font size: 16 | line-height: 24 | font weight: 500"],
      ["h6.Heading", "text-h6", "font size: 14 | line-height: 21 | font weight: 500"]
    ]);
    const subtext = ref([
      [
        "Subtitle 1.",
        "text-subtitle-1",
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
        "font size: 16 | line-height: 28 | font weight: 400"
      ],
      [
        "Subtitle 2.",
        "text-subtitle-2",
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
        "font size: 14 | line-height: 21 | font weight: 400"
      ],
      [
        "Body 1.",
        "text-body-1",
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
        "font size: 16 | line-height: 24 | font weight: 400"
      ],
      [
        "Body 2.",
        "text-body-2",
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
        "font size: 14 | line-height: 20 | font weight: 400"
      ],
      [
        "Caption.",
        "text-caption",
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
        "font size: 12 | line-height: 19 | font weight: 400"
      ],
      [
        "OVERLINE.",
        "text-overline letter-spacing-0",
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
        "font size: 12 | line-height: 31 | font weight: 400"
      ]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      _push(`<!--[--><div class="d-flex flex-column gap-1"><!--[-->`);
      ssrRenderList(headings.value, ([name, cls, val]) => {
        _push(ssrRenderComponent(_component_v_card, {
          variant: "outlined",
          key: name,
          class: "my-3 pa-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([cls, ""])}"${_scopeId}>${ssrInterpolate(name)}</div><div class="text-caption"${_scopeId}><div class="font-weight-medium"${_scopeId}>${ssrInterpolate(val)}</div></div>`);
            } else {
              return [
                createVNode("div", {
                  class: [cls, ""]
                }, toDisplayString(name), 3),
                createVNode("div", { class: "text-caption" }, [
                  createVNode("div", { class: "font-weight-medium" }, toDisplayString(val), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="d-flex flex-column gap-1"><!--[-->`);
      ssrRenderList(subtext.value, ([name1, cls1, val1, prop]) => {
        _push(ssrRenderComponent(_component_v_card, {
          variant: "outlined",
          key: name1,
          class: "my-3 pa-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([cls1, ""])}"${_scopeId}>${ssrInterpolate(name1)} <span${_scopeId}>${ssrInterpolate(val1)}</span></div><div class="text-caption"${_scopeId}><div class="text-body-1"${_scopeId}>${ssrInterpolate(prop)}</div></div>`);
            } else {
              return [
                createVNode("div", {
                  class: [cls1, ""]
                }, [
                  createTextVNode(toDisplayString(name1) + " ", 1),
                  createVNode("span", null, toDisplayString(val1), 1)
                ], 2),
                createVNode("div", { class: "text-caption" }, [
                  createVNode("div", { class: "text-body-1" }, toDisplayString(prop), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/style-components/typography/Heading.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p class="text-high-emphasis"> High-emphasis has an opacity of 87% in light theme and 100% in dark. </p><p class="text-medium-emphasis"> Medium-emphasis text and hint text have opacities of 60% in light theme and 70% in dark. </p><p class="text-disabled">Disabled text has an opacity of 38% in light theme and 50% in dark.</p></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/style-components/typography/Opacity.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Opacity = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p class="text-left">Left aligned on all viewport sizes.</p><p class="text-center">Center aligned on all viewport sizes.</p><p class="text-right">Right aligned on all viewport sizes.</p><p class="text-sm-left">Left aligned on viewports SM (small) or wider.</p><p class="text-right text-md-left">Left aligned on viewports MD (medium) or wider.</p><p class="text-right text-lg-left">Left aligned on viewports LG (large) or wider.</p><p class="text-right text-xl-left">Left aligned on viewports XL (extra-large) or wider.</p></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/style-components/typography/TextAlignment.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TextAlignment = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-space-between flex-row" }, _attrs))}><a href="#" class="text-decoration-none">Non-underlined link</a><div class="text-decoration-line-through">Line-through text</div><div class="text-decoration-overline">Overline text</div><div class="text-decoration-underline">Underline text</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/style-components/typography/TextDecoration.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TextDecoration = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DefaultText",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column gap-1" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_card, {
        variant: "outlined",
        class: "my-3 pa-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h5 class="text-h5 text-primary"${_scopeId}>Text Primary</h5><div class="text-body-1 text-primary"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur </div>`);
          } else {
            return [
              createVNode("h5", { class: "text-h5 text-primary" }, "Text Primary"),
              createVNode("div", { class: "text-body-1 text-primary" }, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_card, {
        variant: "outlined",
        class: "my-3 pa-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h5 class="text-h5 textSecondary"${_scopeId}>Text Secondary</h5><div class="text-body-1 textSecondary"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur </div>`);
          } else {
            return [
              createVNode("h5", { class: "text-h5 textSecondary" }, "Text Secondary"),
              createVNode("div", { class: "text-body-1 textSecondary" }, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_card, {
        variant: "outlined",
        class: "my-3 pa-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h5 class="text-h5 text-info"${_scopeId}>Text Info</h5><div class="text-body-1 textSecondary"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur </div>`);
          } else {
            return [
              createVNode("h5", { class: "text-h5 text-info" }, "Text Info"),
              createVNode("div", { class: "text-body-1 textSecondary" }, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_card, {
        variant: "outlined",
        class: "my-3 pa-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h5 class="text-h5 text-warning"${_scopeId}>Text Warning</h5><div class="text-body-1 text-warning"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur </div>`);
          } else {
            return [
              createVNode("h5", { class: "text-h5 text-warning" }, "Text Warning"),
              createVNode("div", { class: "text-body-1 text-warning" }, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_card, {
        variant: "outlined",
        class: "my-3 pa-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h5 class="text-h5 text-error"${_scopeId}>Text Error</h5><div class="text-body-1 text-error"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur </div>`);
          } else {
            return [
              createVNode("h5", { class: "text-h5 text-error" }, "Text Error"),
              createVNode("div", { class: "text-body-1 text-error" }, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_card, {
        variant: "outlined",
        class: "my-3 pa-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h5 class="text-h5 text-success"${_scopeId}>Text Success</h5><div class="text-body-1 text-success"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur </div>`);
          } else {
            return [
              createVNode("h5", { class: "text-h5 text-success" }, "Text Success"),
              createVNode("div", { class: "text-body-1 text-success" }, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/style-components/typography/DefaultText.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Typography",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Typography" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Typography",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$6, {
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
                  _push3(ssrRenderComponent(_sfc_main$7, { title: "Basic Typography" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$8, { title: "Heading" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$5, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$5)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$8, {
                          title: "Default Text",
                          class: "mt-5"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$1, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$8, {
                          title: "Text-alignment",
                          class: "mt-5"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(TextAlignment, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(TextAlignment)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$8, {
                          title: "Decoration",
                          class: "mt-5"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(TextDecoration, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(TextDecoration)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$8, {
                          title: "Opacity",
                          class: "mt-5"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(Opacity, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(Opacity)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$8, { title: "Heading" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$5)
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$8, {
                            title: "Default Text",
                            class: "mt-5"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1)
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$8, {
                            title: "Text-alignment",
                            class: "mt-5"
                          }, {
                            default: withCtx(() => [
                              createVNode(TextAlignment)
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$8, {
                            title: "Decoration",
                            class: "mt-5"
                          }, {
                            default: withCtx(() => [
                              createVNode(TextDecoration)
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$8, {
                            title: "Opacity",
                            class: "mt-5"
                          }, {
                            default: withCtx(() => [
                              createVNode(Opacity)
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
                    createVNode(_sfc_main$7, { title: "Basic Typography" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$8, { title: "Heading" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$5)
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$8, {
                          title: "Default Text",
                          class: "mt-5"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$1)
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$8, {
                          title: "Text-alignment",
                          class: "mt-5"
                        }, {
                          default: withCtx(() => [
                            createVNode(TextAlignment)
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$8, {
                          title: "Decoration",
                          class: "mt-5"
                        }, {
                          default: withCtx(() => [
                            createVNode(TextDecoration)
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$8, {
                          title: "Opacity",
                          class: "mt-5"
                        }, {
                          default: withCtx(() => [
                            createVNode(Opacity)
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
                  createVNode(_sfc_main$7, { title: "Basic Typography" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$8, { title: "Heading" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$5)
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$8, {
                        title: "Default Text",
                        class: "mt-5"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1)
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$8, {
                        title: "Text-alignment",
                        class: "mt-5"
                      }, {
                        default: withCtx(() => [
                          createVNode(TextAlignment)
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$8, {
                        title: "Decoration",
                        class: "mt-5"
                      }, {
                        default: withCtx(() => [
                          createVNode(TextDecoration)
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$8, {
                        title: "Opacity",
                        class: "mt-5"
                      }, {
                        default: withCtx(() => [
                          createVNode(Opacity)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ui-components/Typography.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Typography-BtULhhtp.mjs.map
