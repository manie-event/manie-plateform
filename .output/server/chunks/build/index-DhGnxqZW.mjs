import { defineComponent, ref, resolveComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './BaseBreadcrumb-DAIjkUfv.mjs';
import { RouterLink } from 'vue-router';

const SearchLinkData = [
  {
    title: "AngularJs",
    linktitle: "http://www.google.com/angularjs",
    subtitle: "Lorem Ipsum viveremus probamus opus apeirian haec perveniri, memoriter.Praebeat pecunias viveremus probamus opus apeirian haec perveniri, memoriter.",
    url: "/"
  },
  {
    title: "AngularJs \u2014 Superheroic JavaScript MVW Framework",
    linktitle: "http://www.google.com/angularjs",
    subtitle: "Lorem Ipsum viveremus probamus opus apeirian haec perveniri, memoriter.Praebeat pecunias viveremus probamus opus apeirian haec perveniri, memoriter.",
    url: "/"
  },
  {
    title: "AngularJS Tutorial - W3Schools",
    linktitle: "http://www.google.com/angularjs",
    subtitle: "Lorem Ipsum viveremus probamus opus apeirian haec perveniri, memoriter.Praebeat pecunias viveremus probamus opus apeirian haec perveniri, memoriter.",
    url: "/"
  },
  {
    title: "Introduction to AngularJS - W3Schools",
    linktitle: "http://www.google.com/angularjs",
    subtitle: "Lorem Ipsum viveremus probamus opus apeirian haec perveniri, memoriter.Praebeat pecunias viveremus probamus opus apeirian haec perveniri, memoriter.",
    url: "/"
  },
  {
    title: "AngularJS Tutorial",
    linktitle: "http://www.google.com/angularjs",
    subtitle: "Lorem Ipsum viveremus probamus opus apeirian haec perveniri, memoriter.Praebeat pecunias viveremus probamus opus apeirian haec perveniri, memoriter.",
    url: "/"
  },
  {
    title: "Angular 2: One framework",
    linktitle: "http://www.google.com/angularjs",
    subtitle: "Lorem Ipsum viveremus probamus opus apeirian haec perveniri, memoriter.Praebeat pecunias viveremus probamus opus apeirian haec perveniri, memoriter.",
    url: "/"
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchLinks",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_pagination = resolveComponent("v-pagination");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5"${_scopeId2}>Search Result For &quot;Angular Js&quot;</h5><p class="textSecondary text-subtitle-1"${_scopeId2}>About 14,700 result ( 0.10 seconds)</p><div class="mt-4"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(SearchLinkData), (item) => {
                    _push3(`<div class="border-b py-5"${_scopeId2}><h6 class="text-h5"${_scopeId2}>${ssrInterpolate(item.title)}</h6>`);
                    _push3(ssrRenderComponent(unref(RouterLink), {
                      class: "text-primary text-decoration-none text-subtitle-1",
                      to: item.url
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.linktitle)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.linktitle), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<p class="text-textSecondary text-subtitle-1"${_scopeId2}>${ssrInterpolate(item.subtitle)}</p></div>`);
                  });
                  _push3(`<!--]--><div class="mt-6 d-flex justify-start"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_pagination, { length: 4 }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("h5", { class: "text-h5" }, 'Search Result For "Angular Js"'),
                    createVNode("p", { class: "textSecondary text-subtitle-1" }, "About 14,700 result ( 0.10 seconds)"),
                    createVNode("div", { class: "mt-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(SearchLinkData), (item) => {
                        return openBlock(), createBlock("div", {
                          class: "border-b py-5",
                          key: item.title
                        }, [
                          createVNode("h6", { class: "text-h5" }, toDisplayString(item.title), 1),
                          createVNode(unref(RouterLink), {
                            class: "text-primary text-decoration-none text-subtitle-1",
                            to: item.url
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.linktitle), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"]),
                          createVNode("p", { class: "text-textSecondary text-subtitle-1" }, toDisplayString(item.subtitle), 1)
                        ]);
                      }), 128)),
                      createVNode("div", { class: "mt-6 d-flex justify-start" }, [
                        createVNode(_component_v_pagination, { length: 4 })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_item, null, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h5" }, 'Search Result For "Angular Js"'),
                  createVNode("p", { class: "textSecondary text-subtitle-1" }, "About 14,700 result ( 0.10 seconds)"),
                  createVNode("div", { class: "mt-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(SearchLinkData), (item) => {
                      return openBlock(), createBlock("div", {
                        class: "border-b py-5",
                        key: item.title
                      }, [
                        createVNode("h6", { class: "text-h5" }, toDisplayString(item.title), 1),
                        createVNode(unref(RouterLink), {
                          class: "text-primary text-decoration-none text-subtitle-1",
                          to: item.url
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.linktitle), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"]),
                        createVNode("p", { class: "text-textSecondary text-subtitle-1" }, toDisplayString(item.subtitle), 1)
                      ]);
                    }), 128)),
                    createVNode("div", { class: "mt-6 d-flex justify-start" }, [
                      createVNode(_component_v_pagination, { length: 4 })
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/search-results/SearchLinks.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Search Results" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "#"
      },
      {
        text: "Search Results",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/theme-pages/search-results/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DhGnxqZW.mjs.map
