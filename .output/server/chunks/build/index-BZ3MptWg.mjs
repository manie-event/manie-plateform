import { defineComponent, ref, resolveComponent, withCtx, createVNode, unref, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { h as user1, R as user2, l as user3 } from './server.mjs';
import { _ as _sfc_main$3 } from './BaseBreadcrumb-DAIjkUfv.mjs';
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

const faqPage = [
  {
    question: "What is an Admin Dashboard?",
    answer: "Admin Dashboard is the backend interface of a website or an application that helps to manage the website s overall content and settings. It is widely used by the site owners to keep track of their website, make changes to their content, and more."
  },
  {
    question: "What should an admin dashboard template include?",
    answer: "Admin dashboard template should include user & SEO friendly design with a variety of components and application designs to help create your own web application with ease. This could include customization options, technical support and about 6 months of future updates."
  },
  {
    question: "Why should I buy admin templates from wrappixel?",
    answer: "wrappixel offers high-quality templates that are easy to use and fully customizable. With over 101,801 happy customers & trusted by 10,000+ Companies. wrappixel is recognized as the leading online source for buying admin templates."
  },
  {
    question: "Do wrappixel offers a  guarantee?",
    answer: "There is no guarantee in most companies, but if you are unhappy with our product, wrappixel gives you a 100% guarantee."
  }
];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FaqQuestion",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
      const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
      const _component_v_expansion_panel_title = resolveComponent("v-expansion-panel-title");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_expansion_panel_text = resolveComponent("v-expansion-panel-text");
      _push(`<!--[--><div class="text-center mb-8"><h3 class="text-h3 font-weight-semibold">Frequently asked questions</h3><h6 class="text-h6 text-grey100 font-weight-medium mt-1"> Get to know more about ready-to-use admin dashboard templates </h6></div>`);
      _push(ssrRenderComponent(_component_v_expansion_panels, {
        elevation: "10",
        class: "rounded-xl overflow-hidden",
        variant: "accordion"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(faqPage), (item) => {
              _push2(ssrRenderComponent(_component_v_expansion_panel, {
                elevation: "10",
                key: item.question
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_expansion_panel_title, { class: "text-h6 py-6 font-weight-semibold" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.question)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.question), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_expansion_panel_text, { class: "text-subtitle-1 text-10 text-medium-emphasis pt-3 pb-2" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.answer)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.answer), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_expansion_panel_title, { class: "text-h6 py-6 font-weight-semibold" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.question), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_v_divider),
                      createVNode(_component_v_expansion_panel_text, { class: "text-subtitle-1 text-10 text-medium-emphasis pt-3 pb-2" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.answer), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(faqPage), (item) => {
                return openBlock(), createBlock(_component_v_expansion_panel, {
                  elevation: "10",
                  key: item.question
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_expansion_panel_title, { class: "text-h6 py-6 font-weight-semibold" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.question), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_v_divider),
                    createVNode(_component_v_expansion_panel_text, { class: "text-subtitle-1 text-10 text-medium-emphasis pt-3 pb-2" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.answer), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/faq/FaqQuestion.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "StillHaveQuestions",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        elevation: "10",
        class: "bg-lightinfo mt-sm-13 mt-8"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, { class: "pa-sm-10 pa-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center"${_scopeId2}><div class="ml-2 d-flex justify-center flex-row-reverse mb-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_avatar, {
                    size: "44",
                    class: "ml-n2 avtar-border"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", unref(user1))} alt="avatar" height="44"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: unref(user1),
                            alt: "avatar",
                            height: "44"
                          }, null, 8, ["src"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_avatar, {
                    size: "44",
                    class: "ml-n2 avtar-border"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", unref(user2))} alt="avatar" height="44"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: unref(user2),
                            alt: "avatar",
                            height: "44"
                          }, null, 8, ["src"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_avatar, {
                    size: "44",
                    class: "ml-n2 avtar-border"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", unref(user3))} alt="avatar" height="44"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: unref(user3),
                            alt: "avatar",
                            height: "44"
                          }, null, 8, ["src"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><h3 class="text-h3 font-weight-semibold"${_scopeId2}>Still have questions</h3><h6 class="text-h6 text-grey100 font-weight-medium mt-2"${_scopeId2}> Can&#39;t find the answer your&#39;re looking for ? Please chat to our friendly team. </h6>`);
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "primary",
                    rounded: "pill",
                    size: "large",
                    class: "mt-6 mb-3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Chat with us`);
                      } else {
                        return [
                          createTextVNode("Chat with us")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "ml-2 d-flex justify-center flex-row-reverse mb-5" }, [
                        createVNode(_component_v_avatar, {
                          size: "44",
                          class: "ml-n2 avtar-border"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: unref(user1),
                              alt: "avatar",
                              height: "44"
                            }, null, 8, ["src"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_avatar, {
                          size: "44",
                          class: "ml-n2 avtar-border"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: unref(user2),
                              alt: "avatar",
                              height: "44"
                            }, null, 8, ["src"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_avatar, {
                          size: "44",
                          class: "ml-n2 avtar-border"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: unref(user3),
                              alt: "avatar",
                              height: "44"
                            }, null, 8, ["src"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("h3", { class: "text-h3 font-weight-semibold" }, "Still have questions"),
                      createVNode("h6", { class: "text-h6 text-grey100 font-weight-medium mt-2" }, " Can't find the answer your're looking for ? Please chat to our friendly team. "),
                      createVNode(_component_v_btn, {
                        color: "primary",
                        rounded: "pill",
                        size: "large",
                        class: "mt-6 mb-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Chat with us")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_item, { class: "pa-sm-10 pa-6" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-center" }, [
                    createVNode("div", { class: "ml-2 d-flex justify-center flex-row-reverse mb-5" }, [
                      createVNode(_component_v_avatar, {
                        size: "44",
                        class: "ml-n2 avtar-border"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: unref(user1),
                            alt: "avatar",
                            height: "44"
                          }, null, 8, ["src"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_avatar, {
                        size: "44",
                        class: "ml-n2 avtar-border"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: unref(user2),
                            alt: "avatar",
                            height: "44"
                          }, null, 8, ["src"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_avatar, {
                        size: "44",
                        class: "ml-n2 avtar-border"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: unref(user3),
                            alt: "avatar",
                            height: "44"
                          }, null, 8, ["src"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("h3", { class: "text-h3 font-weight-semibold" }, "Still have questions"),
                    createVNode("h6", { class: "text-h6 text-grey100 font-weight-medium mt-2" }, " Can't find the answer your're looking for ? Please chat to our friendly team. "),
                    createVNode(_component_v_btn, {
                      color: "primary",
                      rounded: "pill",
                      size: "large",
                      class: "mt-6 mb-3"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Chat with us")
                      ]),
                      _: 1
                    })
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/faq/StillHaveQuestions.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "FAQ" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "FAQ",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$3, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, { class: "justify-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/theme-pages/faq/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BZ3MptWg.mjs.map
