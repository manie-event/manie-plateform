import { defineComponent, computed, ref, resolveComponent, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './BaseBreadcrumb-DAIjkUfv.mjs';
import { u as useGalleryStore } from './gallery-DT_0CU6z.mjs';
import { t as image1$1, v as image2$1, w as img6$2, x as proimg1, y as proimg2, z as img9, A as img10, s as img11, X as img12, Y as img13, B as proimg4, Z as img15 } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useGalleryStore();
    const getPhotos = computed(() => {
      return store.gallery;
    });
    const searchValue = ref("");
    ref([
      { title: "Remove Tag" },
      { title: "Download" },
      { title: "Make Profile Picture" },
      { title: "Make Cover Photo" },
      { title: "Find support or Report Photo" }
    ]);
    const filteredCards = computed(() => {
      return getPhotos.value.filter((card) => {
        return card.title.toLowerCase().includes(searchValue.value.toLowerCase());
      });
    });
    const page = ref({ title: "Gallery Lightbox" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Gallery Lightbox",
        disabled: true,
        href: "#"
      }
    ]);
    const visibleRef = ref(false);
    const indexRef = ref(0);
    const imgs = [
      image1$1,
      image2$1,
      img6$2,
      proimg1,
      proimg2,
      img9,
      img10,
      img11,
      img12,
      img13,
      proimg4,
      img15
    ];
    const showImg = (index) => {
      indexRef.value = index;
      visibleRef.value = true;
    };
    const onHide = () => visibleRef.value = false;
    const moveDisabled = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_vue_easy_lightbox = resolveComponent("vue-easy-lightbox");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, { class: "justify-content-end mt-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(filteredCards.value, (card, index) => {
                          _push4(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            md: "4",
                            sm: "6",
                            key: index
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_card, {
                                  elevation: "10",
                                  class: "card-hover overflow-hidden",
                                  onClick: () => showImg(index)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_avatar, {
                                        size: "220",
                                        class: "rounded-0 w-100"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<img${ssrRenderAttr("src", card.image)} alt="gallery" width="450"${_scopeId6}>`);
                                          } else {
                                            return [
                                              createVNode("img", {
                                                src: card.image,
                                                alt: "gallery",
                                                width: "450"
                                              }, null, 8, ["src"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_card_text, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="d-flex align-center gap-3"${_scopeId6}><div${_scopeId6}><h6 class="text-h6 mb-1"${_scopeId6}>${ssrInterpolate(card.title)}</h6><span class="d-block text-truncate d-flex align-center gap-2 textSecondary"${_scopeId6}>${ssrInterpolate(card.dateTime)}</span></div></div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "d-flex align-center gap-3" }, [
                                                createVNode("div", null, [
                                                  createVNode("h6", { class: "text-h6 mb-1" }, toDisplayString(card.title), 1),
                                                  createVNode("span", { class: "d-block text-truncate d-flex align-center gap-2 textSecondary" }, toDisplayString(card.dateTime), 1)
                                                ])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_avatar, {
                                          size: "220",
                                          class: "rounded-0 w-100"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              src: card.image,
                                              alt: "gallery",
                                              width: "450"
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex align-center gap-3" }, [
                                              createVNode("div", null, [
                                                createVNode("h6", { class: "text-h6 mb-1" }, toDisplayString(card.title), 1),
                                                createVNode("span", { class: "d-block text-truncate d-flex align-center gap-2 textSecondary" }, toDisplayString(card.dateTime), 1)
                                              ])
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_vue_easy_lightbox, {
                                  visible: visibleRef.value,
                                  moveDisabled: moveDisabled.value,
                                  imgs,
                                  index: indexRef.value,
                                  onHide
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_card, {
                                    elevation: "10",
                                    class: "card-hover overflow-hidden",
                                    onClick: () => showImg(index)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_avatar, {
                                        size: "220",
                                        class: "rounded-0 w-100"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: card.image,
                                            alt: "gallery",
                                            width: "450"
                                          }, null, 8, ["src"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex align-center gap-3" }, [
                                            createVNode("div", null, [
                                              createVNode("h6", { class: "text-h6 mb-1" }, toDisplayString(card.title), 1),
                                              createVNode("span", { class: "d-block text-truncate d-flex align-center gap-2 textSecondary" }, toDisplayString(card.dateTime), 1)
                                            ])
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]),
                                  createVNode(_component_vue_easy_lightbox, {
                                    visible: visibleRef.value,
                                    moveDisabled: moveDisabled.value,
                                    imgs,
                                    index: indexRef.value,
                                    onHide
                                  }, null, 8, ["visible", "moveDisabled", "index"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(filteredCards.value, (card, index) => {
                            return openBlock(), createBlock(_component_v_col, {
                              cols: "12",
                              md: "4",
                              sm: "6",
                              key: index
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, {
                                  elevation: "10",
                                  class: "card-hover overflow-hidden",
                                  onClick: () => showImg(index)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_avatar, {
                                      size: "220",
                                      class: "rounded-0 w-100"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: card.image,
                                          alt: "gallery",
                                          width: "450"
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex align-center gap-3" }, [
                                          createVNode("div", null, [
                                            createVNode("h6", { class: "text-h6 mb-1" }, toDisplayString(card.title), 1),
                                            createVNode("span", { class: "d-block text-truncate d-flex align-center gap-2 textSecondary" }, toDisplayString(card.dateTime), 1)
                                          ])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(_component_vue_easy_lightbox, {
                                  visible: visibleRef.value,
                                  moveDisabled: moveDisabled.value,
                                  imgs,
                                  index: indexRef.value,
                                  onHide
                                }, null, 8, ["visible", "moveDisabled", "index"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(filteredCards.value, (card, index) => {
                          return openBlock(), createBlock(_component_v_col, {
                            cols: "12",
                            md: "4",
                            sm: "6",
                            key: index
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, {
                                elevation: "10",
                                class: "card-hover overflow-hidden",
                                onClick: () => showImg(index)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_avatar, {
                                    size: "220",
                                    class: "rounded-0 w-100"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: card.image,
                                        alt: "gallery",
                                        width: "450"
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex align-center gap-3" }, [
                                        createVNode("div", null, [
                                          createVNode("h6", { class: "text-h6 mb-1" }, toDisplayString(card.title), 1),
                                          createVNode("span", { class: "d-block text-truncate d-flex align-center gap-2 textSecondary" }, toDisplayString(card.dateTime), 1)
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["onClick"]),
                              createVNode(_component_vue_easy_lightbox, {
                                visible: visibleRef.value,
                                moveDisabled: moveDisabled.value,
                                imgs,
                                index: indexRef.value,
                                onHide
                              }, null, 8, ["visible", "moveDisabled", "index"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
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
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(filteredCards.value, (card, index) => {
                        return openBlock(), createBlock(_component_v_col, {
                          cols: "12",
                          md: "4",
                          sm: "6",
                          key: index
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              elevation: "10",
                              class: "card-hover overflow-hidden",
                              onClick: () => showImg(index)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_avatar, {
                                  size: "220",
                                  class: "rounded-0 w-100"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: card.image,
                                      alt: "gallery",
                                      width: "450"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex align-center gap-3" }, [
                                      createVNode("div", null, [
                                        createVNode("h6", { class: "text-h6 mb-1" }, toDisplayString(card.title), 1),
                                        createVNode("span", { class: "d-block text-truncate d-flex align-center gap-2 textSecondary" }, toDisplayString(card.dateTime), 1)
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode(_component_vue_easy_lightbox, {
                              visible: visibleRef.value,
                              moveDisabled: moveDisabled.value,
                              imgs,
                              index: indexRef.value,
                              onHide
                            }, null, 8, ["visible", "moveDisabled", "index"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/theme-pages/gallery-lightbox/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CunnUNY6.mjs.map
